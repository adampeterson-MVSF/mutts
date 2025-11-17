// lib/log.ts
/**
 * Structured logging with Pino for production observability
 *
 * Replaces console.log with structured JSON logging for:
 * - Metrics aggregation (rate_limit.rejections, auth.redirects, etc.)
 * - Alerting (SLO violations)
 * - Debugging (correlated request tracing)
 */

import pino from "pino";

// Configure Pino with production-safe settings
const inEdge = typeof (globalThis as { EdgeRuntime?: unknown }).EdgeRuntime !== "undefined";
const useTransport =
  !inEdge &&
  process.env.PINO_TRANSPORT !== "none" &&
  process.env.NODE_ENV === "production"; // use worker only in prod

export const log = pino({
  level: process.env.LOG_LEVEL ?? "info",
  redact: {
    paths: [
      "req.headers.authorization",
      "req.headers.cookie",
      "req.body.password",
      "req.body.confirmPassword",
      "password",
      "token"
    ],
    censor: "[redacted]"
  },
  // Add hostname and service name for multi-service correlation
  base: {
    service: "senior-dog-rescue",
    hostname: process.env.HOSTNAME || "unknown",
  },
  // Pretty print in development for readability (but avoid worker transport)
  ...(useTransport && {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "hostname,pid",
      },
    },
  }),
});

// Metric helpers for SLO tracking
export const metrics = {
  // Rate limiting metrics
  rateLimitRejection: (route: string, ipHash: string, userId?: string) =>
    log.warn({
      metric: "rate_limit.rejections",
      route,
      ipHash,
      userId,
      value: 1,
    }, "Rate limit exceeded"),

  // Authentication metrics
  authRedirect: (route: string, reason: "no_session" | "insufficient_role", userRole?: string) =>
    log.info({
      metric: "auth.redirects",
      route,
      reason,
      userRole,
      value: 1,
    }, "Authentication redirect"),

  // Image security metrics
  unknownImageHostRejection: (host: string, route: string) =>
    log.warn({
      metric: "unknown_image_host_rejections",
      host,
      route,
      value: 1,
    }, "Unknown image host rejected"),

  // API latency metrics (p50/p95 tracking)
  apiLatency: (route: string, method: string, statusCode: number, durationMs: number, userRole?: string) =>
    log.info({
      metric: "api.latency_ms",
      route,
      method,
      statusCode,
      durationMs,
      userRole,
      value: durationMs,
    }, "API request completed"),

  // Error metrics
  serverError: (route: string, error: string, statusCode: number) =>
    log.error({
      metric: "server.errors",
      route,
      error,
      statusCode,
      value: 1,
    }, "Server error occurred"),
};

// Helper to create child loggers with context
export function createRequestLogger(requestId: string, route: string) {
  return log.child({
    requestId,
    route,
  });
}
