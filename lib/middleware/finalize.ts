import { NextRequest, NextResponse } from "next/server";
import { UserRole } from "@prisma/client";
import { tagRequest } from "@/lib/monitoring/sentry";
import { applySecurityHeaders } from "./security";

interface Logger {
  info(message: Record<string, unknown>, ...args: unknown[]): void;
}

interface ExtendedRequest extends NextRequest {
  _sessionResponse?: NextResponse;
  _userRole?: UserRole | undefined;
  _requiredRole?: UserRole | null;
}

export async function finalizeResponse(
  request: NextRequest,
  pathname: string,
  logger: Logger
): Promise<NextResponse> {
  const extendedRequest = request as ExtendedRequest;
  const sessionResponse = extendedRequest._sessionResponse as NextResponse;
  const userRole = extendedRequest._userRole;
  const requiredRole = extendedRequest._requiredRole;

  // API routes require additional scrutiny - don't broadly allow all /api/**
  // Test endpoints are handled separately in their route handlers

  // Add route markers for E2E testing - helps waiters identify page types
  if (requiredRole) {
    const routeId = pathname.split('/').filter(Boolean).join('-');
    sessionResponse.headers.set('X-Route-Id', routeId);
  }

  // Apply security headers to the final response
  applySecurityHeaders(sessionResponse);

  // Track successful requests for SLO monitoring
  await tagRequest(pathname, userRole);

  logger.info({
    pathname,
    requiredRole,
    userRole,
  }, 'Allowing request to continue');

  return sessionResponse;
}
