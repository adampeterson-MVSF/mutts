import { NextRequest, NextResponse } from "next/server";
import { UserRole } from "@prisma/client";
import { getSession } from "./session";
import { checkAccess, getRequiredRole } from "./router";
import { checkRateLimit, createRateLimitResponse, isRateLimitShadowMode, tinyHash } from "./rate-limit";
import { metrics } from "@/lib/log";
import { tagRequest } from "@/lib/monitoring/sentry";
import { applySecurityHeaders } from "./security";

interface Logger {
  info(message: Record<string, unknown>, ...args: unknown[]): void;
  warn(message: Record<string, unknown>, ...args: unknown[]): void;
}

interface ExtendedRequest extends NextRequest {
  _sessionResponse?: NextResponse;
  _userRole?: UserRole | undefined;
  _requiredRole?: UserRole | null;
}

export async function handleAuthorization(
  request: NextRequest,
  pathname: string,
  logger: Logger
): Promise<NextResponse | null> {
  const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
                   request.headers.get('x-real-ip') ||
                   request.headers.get('x-client-ip') ||
                   'unknown';

  const {
    response: sessionResponse,
    userClaims,
    userId,
  } = await getSession(request);
  const userRole = (userClaims?.app_metadata?.role as UserRole | undefined) ?? undefined;

  // Apply role-based rate limiting for API endpoints
  if (pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/')) {
    let endpoint: 'public' | 'api' | 'staff' | 'admin' = 'public';
    if (userRole === UserRole.ADMIN) {
      endpoint = 'admin';
    } else if (userRole === UserRole.STAFF) {
      endpoint = 'staff';
    } else if (userRole === UserRole.VOLUNTEER || userId) {
      endpoint = 'api'; // Authenticated but not staff/admin
    }

    const rateLimitResult = await checkRateLimit(clientIP, endpoint, userId);
    if (rateLimitResult.wouldBlock && isRateLimitShadowMode()) {
      // Shadow mode: log but don't block
      const ipHash = tinyHash(clientIP).slice(0, 16);
      metrics.rateLimitRejection(pathname, ipHash, userId || undefined);
    } else if (!rateLimitResult.allowed) {
      return await createRateLimitResponse(
        rateLimitResult.resetTime || Date.now(),
        clientIP,
        pathname,
        userId
      );
    }
  }

  const requiredRole = getRequiredRole(pathname);

  logger.info({
    pathname,
    requiredRole,
    userRole,
    userId,
    hasClaims: !!userClaims,
  }, 'Resolved user context');

  const accessResponse = checkAccess(request, pathname, userRole);
  if (accessResponse) {
    const redirectLocation = accessResponse.headers.get('Location') ?? '';
    const reason = redirectLocation.includes('reason=authentication_required')
      ? "no_session"
      : "insufficient_role";

    metrics.authRedirect(pathname, reason, userRole || undefined);
    await tagRequest(pathname, userRole || undefined);
    logger.warn({
      pathname,
      requiredRole,
      userId: userId || null,
      userRole: userRole || null,
    }, 'Access denied → redirecting to login');

    return applySecurityHeaders(accessResponse);
  }

  // Store session data for finalizeResponse
  const extendedRequest = request as ExtendedRequest;
  extendedRequest._sessionResponse = sessionResponse;
  extendedRequest._userRole = userRole;
  extendedRequest._requiredRole = requiredRole;

  return null;
}
