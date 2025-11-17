// lib/middleware/context.ts
// Middleware context helper for request ID, logging, and common request data

import { NextRequest } from "next/server";
import { createRequestLogger } from "@/lib/log";
import { getClientIP } from "./rate-limit";

interface MiddlewareContext {
  requestId: string;
  clientIP: string;
  pathname: string;
  logger: ReturnType<typeof createRequestLogger>;
}

/**
 * Creates a middleware context with request ID, client IP, pathname, and logger
 * Centralizes the common setup logic used across middleware phases
 */
export function createMiddlewareContext(request: NextRequest): MiddlewareContext {
  const requestId = globalThis.crypto?.randomUUID?.() ??
    `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const clientIP = getClientIP(request);
  const pathname = request.nextUrl.pathname;
  const logger = createRequestLogger(requestId, pathname);

  return {
    requestId,
    clientIP,
    pathname,
    logger,
  };
}
