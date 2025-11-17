// lib/middleware/rate-limit.ts

import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "@/lib/rate-limiter";
import { applySecurityHeaders } from "./security";
import { metrics } from "@/lib/log";
import { tagRequest } from "@/lib/monitoring/sentry";
// Edge-safe tiny hash (djb2)
export function tinyHash(input: string): string {
  let h = 5381;
  for (let i = 0; i < input.length; i++) h = ((h << 5) + h) ^ input.charCodeAt(i);
  return (h >>> 0).toString(16);
}

// Rate limit configuration per user class
export const RATE_LIMITS = {
  public: { maxRequests: 50, windowMs: 60 * 1000 }, // 50 requests per minute for public
  auth: { maxRequests: 5, windowMs: 15 * 60 * 1000 }, // 5 requests per 15 minutes for auth
  api: { maxRequests: 100, windowMs: 60 * 1000 }, // 100 requests per minute for API
  staff: { maxRequests: 200, windowMs: 60 * 1000 }, // 200 requests per minute for staff
  admin: { maxRequests: 500, windowMs: 60 * 1000 }, // 500 requests per minute for admin
};

// Get client IP from request
export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const clientIP = request.headers.get('x-client-ip');

  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;
  if (clientIP) return clientIP;

  return 'unknown';
}

// Check rate limit with optional user ID for authenticated users
export async function checkRateLimit(
  ip: string,
  endpoint: 'auth' | 'api' | 'public' | 'staff' | 'admin',
  userId?: string | null
): Promise<{ allowed: boolean; resetTime?: number; wouldBlock?: boolean }> {
  // For authenticated users, key on user ID to prevent shared IP issues
  // For unauthenticated users, key on IP
  const key = userId ? `${endpoint}:user:${userId}` : `${endpoint}:ip:${ip}`;
  const limit = RATE_LIMITS[endpoint];

  const result = await rateLimiter.check(key, limit);
  const shadowMode = isRateLimitShadowMode();

  return {
    allowed: shadowMode ? true : result.allowed, // Allow in shadow mode
    resetTime: result.resetTime,
    wouldBlock: !result.allowed // Track what would be blocked
  };
}

// Create rate limit exceeded response with SLO tracking
export async function createRateLimitResponse(
  resetTime: number,
  clientIP: string,
  pathname: string,
  userId?: string | null
): Promise<NextResponse> {
  // Hash IP for privacy in logs (consistent hashing for rate limit analysis)
  const ipHash = tinyHash(clientIP).slice(0, 16);

  // Emit SLO metric for rate limit rejections
  metrics.rateLimitRejection(pathname, ipHash, userId || undefined);

  // Tag Sentry for alerting correlation
  await tagRequest(pathname, undefined, true);

  const resetDate = new Date(resetTime);
  const response = new NextResponse('Too Many Requests', {
    status: 429,
    headers: {
      'Content-Type': 'text/plain',
      'Retry-After': Math.ceil((resetDate.getTime() - Date.now()) / 1000).toString(),
      'X-RateLimit-Reset': resetDate.toISOString(),
    },
  });
  return applySecurityHeaders(response);
}

// Check if rate limiting should be bypassed for tests
export function shouldBypassRateLimit(hasTestSecret: boolean): boolean {
  return hasTestSecret && process.env.DISABLE_RATE_LIMITING_FOR_TESTS === 'true';
}

// Shadow mode: monitor what would be blocked without actually blocking
export function isRateLimitShadowMode(): boolean {
  return process.env.RL_SHADOW_MODE === 'true';
}
