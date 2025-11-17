import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  createRateLimitResponse,
  isRateLimitShadowMode,
  tinyHash
} from "./rate-limit";
import { metrics } from "@/lib/log";

export async function handleRateLimiting(
  request: NextRequest,
  clientIP: string,
  pathname: string
): Promise<NextResponse | null> {
  // Rate limiting for auth endpoints (before authentication check)
  if (pathname.startsWith('/auth/') || pathname.startsWith('/api/auth/')) {
    const rateLimitResult = await checkRateLimit(clientIP, 'auth', null);
    if (rateLimitResult.wouldBlock && isRateLimitShadowMode()) {
      // Shadow mode: log but don't block
      metrics.rateLimitRejection(pathname, tinyHash(clientIP).slice(0, 16));
    } else if (!rateLimitResult.allowed) {
      return await createRateLimitResponse(
        rateLimitResult.resetTime || Date.now(),
        clientIP,
        pathname
      );
    }
  }

  // Note: API endpoint rate limiting is handled in handleAuthorization after session resolution

  return null;
}
