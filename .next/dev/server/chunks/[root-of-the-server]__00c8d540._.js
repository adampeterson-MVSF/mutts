module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/lib/log.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/log.ts
/**
 * Structured logging with Pino for production observability
 *
 * Replaces console.log with structured JSON logging for:
 * - Metrics aggregation (rate_limit.rejections, auth.redirects, etc.)
 * - Alerting (SLO violations)
 * - Debugging (correlated request tracing)
 */ __turbopack_context__.s([
    "createRequestLogger",
    ()=>createRequestLogger,
    "log",
    ()=>log,
    "metrics",
    ()=>metrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pino/pino.js [middleware] (ecmascript)");
;
// Configure Pino with production-safe settings
const inEdge = typeof globalThis.EdgeRuntime !== "undefined";
const useTransport = !inEdge && process.env.PINO_TRANSPORT !== "none" && ("TURBOPACK compile-time value", "development") === "production"; // use worker only in prod
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])({
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
        hostname: process.env.HOSTNAME || "unknown"
    },
    // Pretty print in development for readability (but avoid worker transport)
    ...useTransport && {
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "SYS:standard",
                ignore: "hostname,pid"
            }
        }
    }
});
const metrics = {
    // Rate limiting metrics
    rateLimitRejection: (route, ipHash, userId)=>log.warn({
            metric: "rate_limit.rejections",
            route,
            ipHash,
            userId,
            value: 1
        }, "Rate limit exceeded"),
    // Authentication metrics
    authRedirect: (route, reason, userRole)=>log.info({
            metric: "auth.redirects",
            route,
            reason,
            userRole,
            value: 1
        }, "Authentication redirect"),
    // Image security metrics
    unknownImageHostRejection: (host, route)=>log.warn({
            metric: "unknown_image_host_rejections",
            host,
            route,
            value: 1
        }, "Unknown image host rejected"),
    // API latency metrics (p50/p95 tracking)
    apiLatency: (route, method, statusCode, durationMs, userRole)=>log.info({
            metric: "api.latency_ms",
            route,
            method,
            statusCode,
            durationMs,
            userRole,
            value: durationMs
        }, "API request completed"),
    // Error metrics
    serverError: (route, error, statusCode)=>log.error({
            metric: "server.errors",
            route,
            error,
            statusCode,
            value: 1
        }, "Server error occurred")
};
function createRequestLogger(requestId, route) {
    return log.child({
        requestId,
        route
    });
}
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/rate-limiter.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/rate-limiter.ts - Abstract rate limiting with Redis/Upstash support
__turbopack_context__.s([
    "MemoryRateLimiter",
    ()=>MemoryRateLimiter,
    "RedisRateLimiter",
    ()=>RedisRateLimiter,
    "createRateLimiter",
    ()=>createRateLimiter,
    "rateLimiter",
    ()=>rateLimiter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [middleware] (ecmascript) <locals>");
;
class MemoryRateLimiter {
    store = new Map();
    async check(key, config) {
        const now = Date.now();
        const current = this.store.get(key);
        if (!current || now > current.resetTime) {
            // First request or window expired
            this.store.set(key, {
                count: 1,
                resetTime: now + config.windowMs
            });
            return {
                allowed: true,
                resetTime: now + config.windowMs,
                remaining: config.maxRequests - 1
            };
        }
        if (current.count >= config.maxRequests) {
            return {
                allowed: false,
                resetTime: current.resetTime,
                remaining: 0
            };
        }
        current.count++;
        return {
            allowed: true,
            resetTime: current.resetTime,
            remaining: config.maxRequests - current.count
        };
    }
}
class RedisRateLimiter {
    redis;
    constructor(redis){
        this.redis = redis;
    }
    async check(key, config) {
        const now = Date.now();
        const windowStart = Math.floor(now / config.windowMs) * config.windowMs;
        const windowKey = `${key}:${windowStart}`;
        // Use Redis pipeline for atomic operations
        const pipeline = this.redis.pipeline();
        pipeline.incr(windowKey);
        pipeline.expire(windowKey, Math.ceil(config.windowMs / 1000));
        const results = await pipeline.exec();
        const count = results[0];
        const allowed = count <= config.maxRequests;
        const resetTime = windowStart + config.windowMs;
        return {
            allowed,
            resetTime,
            remaining: allowed ? config.maxRequests - count : 0
        };
    }
}
function createRateLimiter() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Development and test environments use memory
    return new MemoryRateLimiter();
}
const rateLimiter = createRateLimiter();
}),
"[project]/lib/security-headers.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/security-headers.ts - Centralized security headers configuration
__turbopack_context__.s([
    "applySecurityHeaders",
    ()=>applySecurityHeaders,
    "getSecurityHeaders",
    ()=>getSecurityHeaders
]);
// Content Security Policy directives - mirrors allowed domains from next.config.ts
function buildCSPDirectives() {
    const baseImageDomains = [
        'via.placeholder.com',
        'picsum.photos',
        'scontent.xx.fbcdn.net',
        'external.xx.fbcdn.net',
        'dl5zpyw5k3jeb.cloudfront.net',
        'assets.adoptapet.com',
        'muttville.org'
    ];
    // Add Supabase domain if available
    const supabaseUrl = ("TURBOPACK compile-time value", "https://xcegtpafqfoksbkhdezj.supabase.co");
    const connectSrcDomains = [
        'self'
    ];
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const u = new URL(supabaseUrl);
            baseImageDomains.push(u.hostname);
            // Use the full origin to preserve scheme and port (e.g., http://localhost:54321)
            connectSrcDomains.push(u.origin);
        } catch  {
        // Invalid URL, skip
        }
    }
    const imgSrc = `'self' data: blob: https://${baseImageDomains.join(' https://')}`;
    // Allow Next.js HMR websocket and RSC requests in development
    if ("TURBOPACK compile-time truthy", 1) {
        connectSrcDomains.push('ws://localhost:3000', 'ws://127.0.0.1:3000', 'http://localhost:3000');
    }
    const connectSrc = connectSrcDomains.join(' ');
    // In development, allow unsafe-inline for scripts (needed for Next.js hot reload, Turbopack, etc.)
    const isDev = ("TURBOPACK compile-time value", "development") === 'development';
    const scriptSrc = ("TURBOPACK compile-time truthy", 1) ? "'self' 'unsafe-inline'" : "TURBOPACK unreachable";
    return [
        "default-src 'self'",
        `script-src ${scriptSrc}`,
        "style-src 'self' 'unsafe-inline'",
        `img-src ${imgSrc}`,
        "font-src 'self'",
        `connect-src ${connectSrc}`,
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'"
    ].join('; ');
}
const CSP_DIRECTIVES = buildCSPDirectives();
function getSecurityHeaders() {
    return {
        'Content-Security-Policy': CSP_DIRECTIVES,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
    };
}
function applySecurityHeaders(response) {
    const headers = getSecurityHeaders();
    Object.entries(headers).forEach(([key, value])=>{
        response.headers.set(key, value);
    });
}
}),
"[project]/lib/middleware/security.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applySecurityHeaders",
    ()=>applySecurityHeaders,
    "createServiceUnavailableResponse",
    ()=>createServiceUnavailableResponse,
    "withSecurityHeaders",
    ()=>withSecurityHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2d$headers$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/security-headers.ts [middleware] (ecmascript)");
;
;
function getResponseSecurityHeaders() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2d$headers$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getSecurityHeaders"])();
}
function applySecurityHeaders(response) {
    const headers = getResponseSecurityHeaders();
    Object.entries(headers).forEach(([key, value])=>{
        response.headers.set(key, value);
    });
    return response;
}
function withSecurityHeaders(response) {
    return applySecurityHeaders(response);
}
function createServiceUnavailableResponse() {
    const response = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"]("Service Unavailable", {
        status: 503,
        headers: {
            "Content-Type": "text/plain"
        }
    });
    return applySecurityHeaders(response);
}
}),
"[project]/lib/monitoring/sentry.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/monitoring/sentry.ts
/**
 * Sentry integration for error tracking and monitoring
 * 
 * Gracefully degrades if Sentry is not configured (no env vars or package not installed)
 * In production, install @sentry/nextjs and set SENTRY_DSN to enable error tracking
 * 
 * Usage:
 *   import { captureException, addBreadcrumb } from '@/lib/monitoring/sentry';
 *   await captureException(error, { userId, userRole, pathname });
 */ __turbopack_context__.s([
    "addBreadcrumb",
    ()=>addBreadcrumb,
    "captureException",
    ()=>captureException,
    "captureMessage",
    ()=>captureMessage,
    "tagRequest",
    ()=>tagRequest
]);
let sentryInitialized = false;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Sentry = null;
// Initialize Sentry if DSN is provided
async function initSentry() {
    if (sentryInitialized) {
        return;
    }
    sentryInitialized = true;
    // Check if Sentry DSN is configured
    if (!process.env.SENTRY_DSN) {
        return; // Sentry not configured, skip initialization
    }
    try {
        // Dynamic import to avoid breaking if package isn't installed
        Sentry = await __turbopack_context__.A("[project]/node_modules/@sentry/nextjs/build/cjs/index.server.js [middleware] (ecmascript, async loader)");
        Sentry.init({
            dsn: process.env.SENTRY_DSN,
            environment: ("TURBOPACK compile-time value", "development") || 'development',
            tracesSampleRate: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1.0,
            // Filter out sensitive data
            beforeSend (event) {
                // Remove PII from error messages
                if (event.message) {
                    event.message = event.message.replace(/email:[^\s]+/gi, 'email:[REDACTED]');
                    event.message = event.message.replace(/phone:[^\s]+/gi, 'phone:[REDACTED]');
                }
                return event;
            }
        });
    } catch  {
        // Sentry package not installed or initialization failed - silently continue
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Sentry not available (package not installed or initialization failed)');
        }
    }
}
async function tagRequest(route, role, rateLimited) {
    await initSentry();
    if (!Sentry) return;
    try {
        Sentry.setTag("route", route);
        if (role) Sentry.setTag("role", role);
        Sentry.setTag("rate_limited", String(!!rateLimited));
    } catch  {
    // Silently fail if Sentry is unavailable
    }
}
async function captureException(error, context) {
    await initSentry();
    if (!Sentry) return;
    try {
        Sentry.withScope((scope)=>{
            if (context?.userId) {
                scope.setUser({
                    id: context.userId
                });
            }
            if (context?.userRole) {
                scope.setTag('role', context.userRole);
            }
            if (context?.pathname) {
                scope.setTag('pathname', context.pathname);
            }
            if (context?.route) {
                scope.setTag('route', context.route);
            }
            if (context?.rateLimited !== undefined) {
                scope.setTag('rate_limited', String(context.rateLimited));
            }
            if (context?.tags) {
                Object.entries(context.tags).forEach(([key, value])=>{
                    scope.setTag(key, value);
                });
            }
            Sentry.captureException(error);
        });
    } catch  {
    // Silently fail if Sentry is unavailable
    }
}
async function addBreadcrumb(message, category, data) {
    await initSentry();
    if (!Sentry) return;
    try {
        Sentry.addBreadcrumb({
            message,
            category,
            data,
            level: 'warning'
        });
    } catch  {
    // Silently fail if Sentry is unavailable
    }
}
async function captureMessage(message, level = 'error', context) {
    await initSentry();
    if (!Sentry) return;
    try {
        Sentry.withScope((scope)=>{
            if (context) {
                Object.entries(context).forEach(([key, value])=>{
                    scope.setContext(key, {
                        value
                    });
                });
            }
            Sentry.captureMessage(message, level);
        });
    } catch  {
    // Silently fail if Sentry is unavailable
    }
}
}),
"[project]/lib/middleware/rate-limit.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/middleware/rate-limit.ts
__turbopack_context__.s([
    "RATE_LIMITS",
    ()=>RATE_LIMITS,
    "checkRateLimit",
    ()=>checkRateLimit,
    "createRateLimitResponse",
    ()=>createRateLimitResponse,
    "getClientIP",
    ()=>getClientIP,
    "isRateLimitShadowMode",
    ()=>isRateLimitShadowMode,
    "shouldBypassRateLimit",
    ()=>shouldBypassRateLimit,
    "tinyHash",
    ()=>tinyHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rate$2d$limiter$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rate-limiter.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/security.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/log.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$monitoring$2f$sentry$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/monitoring/sentry.ts [middleware] (ecmascript)");
;
;
;
;
;
function tinyHash(input) {
    let h = 5381;
    for(let i = 0; i < input.length; i++)h = (h << 5) + h ^ input.charCodeAt(i);
    return (h >>> 0).toString(16);
}
const RATE_LIMITS = {
    public: {
        maxRequests: 50,
        windowMs: 60 * 1000
    },
    auth: {
        maxRequests: 5,
        windowMs: 15 * 60 * 1000
    },
    api: {
        maxRequests: 100,
        windowMs: 60 * 1000
    },
    staff: {
        maxRequests: 200,
        windowMs: 60 * 1000
    },
    admin: {
        maxRequests: 500,
        windowMs: 60 * 1000
    }
};
function getClientIP(request) {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const clientIP = request.headers.get('x-client-ip');
    if (forwarded) return forwarded.split(',')[0].trim();
    if (realIP) return realIP;
    if (clientIP) return clientIP;
    return 'unknown';
}
async function checkRateLimit(ip, endpoint, userId) {
    // For authenticated users, key on user ID to prevent shared IP issues
    // For unauthenticated users, key on IP
    const key = userId ? `${endpoint}:user:${userId}` : `${endpoint}:ip:${ip}`;
    const limit = RATE_LIMITS[endpoint];
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rate$2d$limiter$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["rateLimiter"].check(key, limit);
    const shadowMode = isRateLimitShadowMode();
    return {
        allowed: shadowMode ? true : result.allowed,
        resetTime: result.resetTime,
        wouldBlock: !result.allowed // Track what would be blocked
    };
}
async function createRateLimitResponse(resetTime, clientIP, pathname, userId) {
    // Hash IP for privacy in logs (consistent hashing for rate limit analysis)
    const ipHash = tinyHash(clientIP).slice(0, 16);
    // Emit SLO metric for rate limit rejections
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["metrics"].rateLimitRejection(pathname, ipHash, userId || undefined);
    // Tag Sentry for alerting correlation
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$monitoring$2f$sentry$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["tagRequest"])(pathname, undefined, true);
    const resetDate = new Date(resetTime);
    const response = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"]('Too Many Requests', {
        status: 429,
        headers: {
            'Content-Type': 'text/plain',
            'Retry-After': Math.ceil((resetDate.getTime() - Date.now()) / 1000).toString(),
            'X-RateLimit-Reset': resetDate.toISOString()
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["applySecurityHeaders"])(response);
}
function shouldBypassRateLimit(hasTestSecret) {
    return hasTestSecret && process.env.DISABLE_RATE_LIMITING_FOR_TESTS === 'true';
}
function isRateLimitShadowMode() {
    return process.env.RL_SHADOW_MODE === 'true';
}
}),
"[project]/lib/middleware/context.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/middleware/context.ts
// Middleware context helper for request ID, logging, and common request data
__turbopack_context__.s([
    "createMiddlewareContext",
    ()=>createMiddlewareContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/log.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/rate-limit.ts [middleware] (ecmascript)");
;
;
function createMiddlewareContext(request) {
    const requestId = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const clientIP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getClientIP"])(request);
    const pathname = request.nextUrl.pathname;
    const logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["createRequestLogger"])(requestId, pathname);
    return {
        requestId,
        clientIP,
        pathname,
        logger
    };
}
}),
"[project]/lib/routes.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/routes.ts - Single source of truth for route definitions and access control
// This file consolidates route definitions from middleware.ts, lib/utils.ts, and e2e/access-matrix.ts
// Import this file instead of defining routes in multiple places.
/**
 * Route patterns organized by required role level.
 * Routes are patterns that support wildcards (e.g., "/auth/*").
 */ __turbopack_context__.s([
    "PUBLIC_PATHS",
    ()=>PUBLIC_PATHS,
    "ROUTES",
    ()=>ROUTES,
    "generateAccessMatrix",
    ()=>generateAccessMatrix,
    "isPublicRoute",
    ()=>isPublicRoute,
    "matchesRoute",
    ()=>matchesRoute
]);
const ROUTES = {
    // Public routes - no authentication required
    public: [
        "/",
        "/adopt",
        "/adopt/*",
        "/happy-tails",
        "/auth/*",
        "/test/whoami",
        "/favicon.ico",
        "/opengraph-image.png",
        "/twitter-image.png"
    ],
    // Volunteer routes - VOLUNTEER role or higher required
    volunteer: [
        "/volunteer",
        "/volunteer/my-shifts",
        "/apply",
        "/apply/*"
    ],
    // Staff routes - STAFF or ADMIN role required
    staff: [
        "/admin",
        "/admin/applications",
        "/admin/dog",
        "/admin/edit-dog",
        "/admin/add-dog",
        "/admin/fosters",
        "/admin/shifts",
        "/admin/events",
        "/admin/dog/*?tab=medical",
        "/staff/medical/*",
        "/api/applications",
        "/api/dogs",
        "/api/events",
        "/api/fosters",
        "/api/shifts",
        "/api/log",
        "/api/medical-documents/*"
    ],
    // Admin routes - ADMIN role required
    admin: [
        "/admin/users",
        "/api/medical-documents",
        "/api/admin/shifts/cancel"
    ]
};
function matchesRoute(pathname, pattern) {
    if (pattern.endsWith("/*")) {
        const basePattern = pattern.slice(0, -2);
        return pathname === basePattern || pathname.startsWith(basePattern + "/");
    }
    return pathname === pattern;
}
function isPublicRoute(pathname) {
    return ROUTES.public.some((pattern)=>matchesRoute(pathname, pattern));
}
const PUBLIC_PATHS = [
    "/",
    "/adopt",
    "/events",
    "/happy-tails",
    "/auth",
    "/auth/login",
    "/auth/sign-up",
    "/auth/confirm",
    "/auth/error",
    "/auth/forgot-password",
    "/auth/update-password",
    "/auth/sign-up-success",
    "/api/test-api",
    "/api/test-api/*",
    "/test/whoami",
    "/favicon.ico",
    "/opengraph-image.png",
    "/twitter-image.png"
];
function generateAccessMatrix() {
    // Helper to deduplicate arrays
    const dedupe = (arr)=>Array.from(new Set(arr));
    // Get all non-wildcard routes from each category
    const publicRoutes = ROUTES.public.filter((r)=>!r.includes("*"));
    const volunteerRoutes = ROUTES.volunteer.filter((r)=>!r.includes("*"));
    const staffRoutes = ROUTES.staff.filter((r)=>!r.includes("*"));
    const adminRoutes = ROUTES.admin.filter((r)=>!r.includes("*"));
    return {
        public: {
            allowed: dedupe([
                ...publicRoutes,
                "/auth/login",
                "/auth/sign-up"
            ]),
            denied: dedupe([
                ...volunteerRoutes,
                ...staffRoutes,
                ...adminRoutes,
                "/volunteer",
                "/volunteer/my-shifts",
                "/admin",
                "/admin/applications",
                "/apply/adopt",
                "/apply/foster",
                "/protected"
            ])
        },
        volunteer: {
            allowed: dedupe([
                ...publicRoutes,
                ...volunteerRoutes,
                "/apply/adopt",
                "/apply/foster"
            ]),
            denied: dedupe([
                ...staffRoutes.filter((r)=>!r.startsWith("/api/")),
                ...adminRoutes.filter((r)=>!r.startsWith("/api/")),
                "/admin",
                "/admin/applications",
                "/admin/users"
            ])
        },
        staff: {
            allowed: dedupe([
                ...publicRoutes,
                ...volunteerRoutes,
                ...staffRoutes,
                "/admin/users",
                "/apply/adopt",
                "/apply/foster"
            ]),
            denied: []
        },
        admin: {
            allowed: dedupe([
                ...publicRoutes,
                ...volunteerRoutes,
                ...staffRoutes,
                ...adminRoutes,
                "/volunteer",
                "/volunteer/my-shifts",
                "/admin",
                "/admin/applications",
                "/admin/dog",
                "/admin/edit-dog",
                "/admin/add-dog",
                "/admin/fosters",
                "/admin/shifts",
                "/admin/users",
                "/apply/adopt",
                "/apply/foster"
            ]),
            denied: []
        }
    };
}
}),
"[project]/lib/middleware/public-paths.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handlePublicPaths",
    ()=>handlePublicPaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/security.ts [middleware] (ecmascript)");
;
;
;
async function handlePublicPaths(request, pathname) {
    // EARLY EXIT for public paths - allow without authentication
    const isPublicPath = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["PUBLIC_PATHS"].some((pattern)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["matchesRoute"])(pathname, pattern)) || pathname.startsWith('/_next/') || pathname.match(/\.(svg|png|jpg|jpeg|gif|webp)$/);
    if (isPublicPath) {
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
            request
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["applySecurityHeaders"])(response);
    }
    return null;
}
}),
"[project]/lib/middleware/rate-limiting.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleRateLimiting",
    ()=>handleRateLimiting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/rate-limit.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/log.ts [middleware] (ecmascript)");
;
;
async function handleRateLimiting(request, clientIP, pathname) {
    // Rate limiting for auth endpoints (before authentication check)
    if (pathname.startsWith('/auth/') || pathname.startsWith('/api/auth/')) {
        const rateLimitResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["checkRateLimit"])(clientIP, 'auth', null);
        if (rateLimitResult.wouldBlock && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["isRateLimitShadowMode"])()) {
            // Shadow mode: log but don't block
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["metrics"].rateLimitRejection(pathname, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["tinyHash"])(clientIP).slice(0, 16));
        } else if (!rateLimitResult.allowed) {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["createRateLimitResponse"])(rateLimitResult.resetTime || Date.now(), clientIP, pathname);
        }
    }
    // Note: API endpoint rate limiting is handled in handleAuthorization after session resolution
    return null;
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/utils/index.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/utils/index.ts
// Shared utility functions for the application
__turbopack_context__.s([
    "areStatusNotesRequired",
    ()=>areStatusNotesRequired,
    "getAllowedStatuses",
    ()=>getAllowedStatuses,
    "getAppStatusVariant",
    ()=>getAppStatusVariant,
    "humanizeEnum",
    ()=>humanizeEnum
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const humanizeEnum = (value)=>{
    return value.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, (l)=>l.toUpperCase());
};
const getAppStatusVariant = (status)=>{
    switch(status){
        case "APPROVED":
            return "default";
        case "SUBMITTED":
        case "IN_REVIEW":
            return "secondary";
        case "REJECTED":
            return "destructive";
        default:
            return "outline";
    }
};
const getAllowedStatuses = (applicationType, currentStatus)=>{
    const allStatuses = Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"]);
    // For foster applications, restrict some status transitions
    if (applicationType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppType"].FOSTER) {
        // Fosters can be approved (creates foster profile) or rejected
        // Can't be marked as "IN_REVIEW" inappropriately
        return allStatuses.filter((status)=>status !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].IN_REVIEW || currentStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].IN_REVIEW);
    }
    // For adoption applications, all statuses are allowed
    return allStatuses;
};
const areStatusNotesRequired = (status)=>{
    return status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].APPROVED || status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].REJECTED;
};
}),
"[project]/lib/utils.ts [middleware] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatAdoptionDate",
    ()=>formatAdoptionDate,
    "formatDateRange",
    ()=>formatDateRange,
    "formatDateTime",
    ()=>formatDateTime,
    "formatShiftTime",
    ()=>formatShiftTime,
    "getDogStatusVariant",
    ()=>getDogStatusVariant,
    "hasEnvVars",
    ()=>hasEnvVars,
    "validateTestEndpoint",
    ()=>validateTestEndpoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [middleware] (ecmascript)");
// Re-export shared utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [middleware] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const hasEnvVars = !!(("TURBOPACK compile-time value", "https://xcegtpafqfoksbkhdezj.supabase.co") && ("TURBOPACK compile-time value", "sb_publishable_rbkoWYiYnx0v9dYkt7__bQ_0U-3Z4PS"));
const getDogStatusVariant = (status)=>{
    switch(status){
        case "ADOPTED":
            return "default";
        case "AVAILABLE":
            return "secondary";
        case "MEDICAL_HOLD":
            return "destructive";
        case "PENDING":
        case "IN_FOSTER":
            return "outline";
        default:
            return "secondary";
    }
};
const formatDateTime = (date)=>new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }).format(date);
const formatDateRange = (start, end)=>{
    const sameDay = start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth() && start.getDate() === end.getDate();
    if (sameDay) {
        return `${formatDateTime(start)} – ${new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit"
        }).format(end)}`;
    }
    return `${formatDateTime(start)} → ${formatDateTime(end)}`;
};
const formatShiftTime = (start, end)=>{
    const startDate = start.toLocaleDateString();
    const startTime = start.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
    });
    const endTime = end.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
    });
    if (startDate === end.toLocaleDateString()) {
        return `${startDate}, ${startTime} - ${endTime}`;
    }
    return `${startDate}, ${startTime} - ${end.toLocaleDateString()}, ${endTime}`;
};
const formatAdoptionDate = (date)=>new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(date);
;
function validateTestEndpoint(request) {
    const isTestEnv = ("TURBOPACK compile-time value", "development") === 'test' && process.env.EXPOSE_TEST_API === '1';
    const testSecret = request.headers.get('x-test-secret');
    const expectedSecret = process.env.TEST_SECRET || 'test-secret-default';
    const hasValidTestSecret = testSecret === expectedSecret;
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            isValid: false,
            response: new Response(null, {
                status: 404
            })
        };
    }
    //TURBOPACK unreachable
    ;
} // Route definitions have been moved to lib/routes.ts
 // Import route functions from @/lib/routes instead
}),
"[project]/lib/middleware/environment-check.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleEnvironmentCheck",
    ()=>handleEnvironmentCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/security.ts [middleware] (ecmascript)");
;
;
async function handleEnvironmentCheck(pathname, logger) {
    // FAIL-CLOSED: If required env vars are missing, block all access
    // This prevents silent security failures - no redirects, just 503 Service Unavailable
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasEnvVars"]) {
        logger.error({
            pathname,
            nodeEnv: ("TURBOPACK compile-time value", "development")
        }, 'Fail-closed triggered: missing required env vars');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["createServiceUnavailableResponse"])();
    }
    return null;
}
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/lib/env.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientEnv",
    ()=>clientEnv,
    "getSupabaseAnonKey",
    ()=>getSupabaseAnonKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [middleware] (ecmascript) <export * as z>");
;
// Client-safe environment variables (can be imported by client code)
const ClientEnvSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    NEXT_PUBLIC_SUPABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    NEXT_PUBLIC_SITE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()
});
const clientEnv = ClientEnvSchema.parse({
    NEXT_PUBLIC_SUPABASE_URL: ("TURBOPACK compile-time value", "https://xcegtpafqfoksbkhdezj.supabase.co"),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: ("TURBOPACK compile-time value", "sb_publishable_rbkoWYiYnx0v9dYkt7__bQ_0U-3Z4PS"),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: ("TURBOPACK compile-time value", "sb_publishable_rbkoWYiYnx0v9dYkt7__bQ_0U-3Z4PS"),
    NEXT_PUBLIC_SITE_URL: ("TURBOPACK compile-time value", "http://localhost:3000")
});
const getSupabaseAnonKey = ()=>clientEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || clientEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
}),
"[project]/lib/middleware/session.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSession",
    ()=>getSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [middleware] (ecmascript)");
;
;
;
async function getSession(request) {
    let response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request
    });
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://xcegtpafqfoksbkhdezj.supabase.co"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getSupabaseAnonKey"])(), {
        cookies: {
            getAll () {
                return request.cookies.getAll();
            },
            setAll (cookiesToSet) {
                cookiesToSet.forEach(({ name, value })=>request.cookies.set(name, value));
                response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request
                });
                cookiesToSet.forEach(({ name, value, options })=>{
                    response.cookies.set(name, value, options);
                });
            }
        }
    });
    const { data } = await supabase.auth.getClaims();
    const userClaims = data?.claims ?? null;
    const userId = userClaims?.sub ?? null;
    return {
        response,
        userClaims,
        userId
    };
}
}),
"[project]/lib/auth-redirect.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authRequiredRedirect",
    ()=>authRequiredRedirect,
    "buildLoginRedirect",
    ()=>buildLoginRedirect,
    "insufficientPermissionsRedirect",
    ()=>insufficientPermissionsRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/security.ts [middleware] (ecmascript)");
;
;
function authRequiredRedirect(req, returnTo) {
    const url = new URL('/auth/login', req.url);
    url.searchParams.set('reason', 'authentication_required');
    url.searchParams.set('returnTo', returnTo);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["applySecurityHeaders"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url));
}
function insufficientPermissionsRedirect(req, returnTo) {
    const url = new URL('/auth/login', req.url);
    url.searchParams.set('reason', 'forbidden');
    url.searchParams.set('returnTo', returnTo);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["applySecurityHeaders"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url));
}
function buildLoginRedirect(reason, returnTo) {
    const params = new URLSearchParams({
        reason,
        returnTo
    });
    return `/auth/login?${params.toString()}`;
}
}),
"[project]/lib/middleware/router.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkAccess",
    ()=>checkAccess,
    "getRequiredRole",
    ()=>getRequiredRole,
    "hasSufficientRole",
    ()=>hasSufficientRole
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$redirect$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-redirect.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes.ts [middleware] (ecmascript)");
;
;
;
function getRequiredRole(pathname) {
    for (const pattern of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ROUTES"].admin){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["matchesRoute"])(pathname, pattern)) {
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN;
        }
    }
    for (const pattern of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ROUTES"].staff){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["matchesRoute"])(pathname, pattern)) {
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF;
        }
    }
    for (const pattern of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ROUTES"].volunteer){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["matchesRoute"])(pathname, pattern)) {
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].VOLUNTEER;
        }
    }
    for (const pattern of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ROUTES"].public){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["matchesRoute"])(pathname, pattern)) {
            return null;
        }
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].VOLUNTEER;
}
function hasSufficientRole(requiredRole, userRole) {
    const roleLevels = {
        [__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN]: 3,
        [__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF]: 2,
        [__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].VOLUNTEER]: 1
    };
    const requiredLevel = roleLevels[requiredRole] ?? 0;
    const userLevel = roleLevels[userRole] ?? 0;
    return userLevel >= requiredLevel;
}
function checkAccess(request, pathname, userRole) {
    const requiredRole = getRequiredRole(pathname);
    if (requiredRole === null) {
        return null;
    }
    if (!userRole) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$redirect$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["authRequiredRedirect"])(request, pathname);
    }
    if (!hasSufficientRole(requiredRole, userRole)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$redirect$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["insufficientPermissionsRedirect"])(request, pathname);
    }
    return null;
}
}),
"[project]/lib/middleware/authorization.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleAuthorization",
    ()=>handleAuthorization
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$session$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/session.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$router$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/router.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/rate-limit.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/log.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$monitoring$2f$sentry$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/monitoring/sentry.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/security.ts [middleware] (ecmascript)");
;
;
;
;
;
;
;
async function handleAuthorization(request, pathname, logger) {
    const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.headers.get('x-real-ip') || request.headers.get('x-client-ip') || 'unknown';
    const { response: sessionResponse, userClaims, userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$session$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getSession"])(request);
    const userRole = userClaims?.app_metadata?.role ?? undefined;
    // Apply role-based rate limiting for API endpoints
    if (pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/')) {
        let endpoint = 'public';
        if (userRole === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN) {
            endpoint = 'admin';
        } else if (userRole === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF) {
            endpoint = 'staff';
        } else if (userRole === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].VOLUNTEER || userId) {
            endpoint = 'api'; // Authenticated but not staff/admin
        }
        const rateLimitResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["checkRateLimit"])(clientIP, endpoint, userId);
        if (rateLimitResult.wouldBlock && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["isRateLimitShadowMode"])()) {
            // Shadow mode: log but don't block
            const ipHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["tinyHash"])(clientIP).slice(0, 16);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["metrics"].rateLimitRejection(pathname, ipHash, userId || undefined);
        } else if (!rateLimitResult.allowed) {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["createRateLimitResponse"])(rateLimitResult.resetTime || Date.now(), clientIP, pathname, userId);
        }
    }
    const requiredRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$router$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getRequiredRole"])(pathname);
    logger.info({
        pathname,
        requiredRole,
        userRole,
        userId,
        hasClaims: !!userClaims
    }, 'Resolved user context');
    const accessResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$router$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["checkAccess"])(request, pathname, userRole);
    if (accessResponse) {
        const redirectLocation = accessResponse.headers.get('Location') ?? '';
        const reason = redirectLocation.includes('reason=authentication_required') ? "no_session" : "insufficient_role";
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["metrics"].authRedirect(pathname, reason, userRole || undefined);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$monitoring$2f$sentry$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["tagRequest"])(pathname, userRole || undefined);
        logger.warn({
            pathname,
            requiredRole,
            userId: userId || null,
            userRole: userRole || null
        }, 'Access denied → redirecting to login');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["applySecurityHeaders"])(accessResponse);
    }
    // Store session data for finalizeResponse
    const extendedRequest = request;
    extendedRequest._sessionResponse = sessionResponse;
    extendedRequest._userRole = userRole;
    extendedRequest._requiredRole = requiredRole;
    return null;
}
}),
"[project]/lib/middleware/finalize.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "finalizeResponse",
    ()=>finalizeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$monitoring$2f$sentry$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/monitoring/sentry.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/security.ts [middleware] (ecmascript)");
;
;
async function finalizeResponse(request, pathname, logger) {
    const extendedRequest = request;
    const sessionResponse = extendedRequest._sessionResponse;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["applySecurityHeaders"])(sessionResponse);
    // Track successful requests for SLO monitoring
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$monitoring$2f$sentry$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["tagRequest"])(pathname, userRole);
    logger.info({
        pathname,
        requiredRole,
        userRole
    }, 'Allowing request to continue');
    return sessionResponse;
}
}),
"[project]/middleware.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware,
    "runtime",
    ()=>runtime
]);
// Import helper functions
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$context$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/context.ts [middleware] (ecmascript)");
// Import coordinators
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$public$2d$paths$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/public-paths.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limiting$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/rate-limiting.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$environment$2d$check$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/environment-check.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$authorization$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/authorization.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$finalize$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/middleware/finalize.ts [middleware] (ecmascript)");
;
;
;
;
;
;
const runtime = 'nodejs';
async function middleware(request) {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$context$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["createMiddlewareContext"])(request);
    // Phase 1: Handle public paths (early exit)
    const publicResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$public$2d$paths$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["handlePublicPaths"])(request, ctx.pathname);
    if (publicResponse) return publicResponse;
    // Phase 2: Rate limiting (before auth)
    const rateLimitResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$rate$2d$limiting$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["handleRateLimiting"])(request, ctx.clientIP, ctx.pathname);
    if (rateLimitResponse) return rateLimitResponse;
    // Phase 3: Environment validation
    const envResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$environment$2d$check$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["handleEnvironmentCheck"])(ctx.pathname, ctx.logger);
    if (envResponse) return envResponse;
    // Phase 4: Authorization & access control
    const authResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$authorization$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["handleAuthorization"])(request, ctx.pathname, ctx.logger);
    if (authResponse) return authResponse;
    // Phase 5: Finalize successful request
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$middleware$2f$finalize$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["finalizeResponse"])(request, ctx.pathname, ctx.logger);
}
const config = {
    matcher: [
        /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */ "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00c8d540._.js.map