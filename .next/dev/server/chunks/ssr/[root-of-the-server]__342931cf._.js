module.exports = [
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
"[project]/lib/log.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pino/pino.js [app-ssr] (ecmascript)");
;
// Configure Pino with production-safe settings
const inEdge = typeof globalThis.EdgeRuntime !== "undefined";
const useTransport = !inEdge && process.env.PINO_TRANSPORT !== "none" && ("TURBOPACK compile-time value", "development") === "production"; // use worker only in prod
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
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
"[project]/lib/image-loader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/image-loader.ts
// Custom Next.js Image loader with telemetry for domain validation
__turbopack_context__.s([
    "default",
    ()=>imageLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/log.ts [app-ssr] (ecmascript)");
;
// Allowed domains from next.config.ts for reference
const ALLOWED_DOMAINS = [
    'via.placeholder.com',
    'picsum.photos',
    'scontent.xx.fbcdn.net',
    'external.xx.fbcdn.net',
    'dl5zpyw5k3jeb.cloudfront.net',
    'assets.adoptapet.com',
    'muttville.org'
];
function imageLoader({ src, width, quality }) {
    // Extract hostname from src URL for telemetry
    try {
        const url = new URL(src);
        const hostname = url.hostname;
        // Get Supabase hostname if available
        const supabaseUrl = ("TURBOPACK compile-time value", "https://xcegtpafqfoksbkhdezj.supabase.co");
        let supabaseHostname = null;
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                supabaseHostname = new URL(supabaseUrl).hostname;
            } catch  {
            // Invalid Supabase URL
            }
        }
        const allAllowedDomains = supabaseHostname ? [
            ...ALLOWED_DOMAINS,
            supabaseHostname
        ] : ALLOWED_DOMAINS;
        // Check if domain is in allowlist
        const isAllowed = allAllowedDomains.some((allowed)=>{
            if (allowed.includes('xx')) {
                // Handle Facebook's region-specific domains
                return hostname.includes('fbcdn.net');
            }
            return hostname === allowed || hostname === 'localhost'; // Allow localhost for development
        });
        if (!isAllowed) {
            // Emit SLO metric for unknown image host rejections
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["metrics"].unknownImageHostRejection(hostname, 'image-loader');
            const errorMsg = `[ImageLoader] 🚫 Domain not allowed: ${hostname}. Add to next.config.ts remotePatterns if legitimate.`;
            console.error(errorMsg);
            console.error(`[ImageLoader] Allowed domains: ${allAllowedDomains.join(', ')}`);
            console.error(`[ImageLoader] Image source: ${src}`);
            // In development, this will help catch configuration issues early
            if ("TURBOPACK compile-time truthy", 1) {
                console.error(`[ImageLoader] To fix: Add '${hostname}' to remotePatterns in next.config.ts`);
            }
        } else {
            // Log allowed domain usage for monitoring
            console.log(`[ImageLoader] ✅ Loading image from allowed domain: ${hostname}`);
        }
        // In development, warn about potentially problematic sources
        if ("TURBOPACK compile-time truthy", 1) {
            const suspiciousPatterns = [
                'http:',
                'localhost',
                '127.0.0.1',
                '0.0.0.0'
            ];
            const isSuspicious = suspiciousPatterns.some((pattern)=>src.includes(pattern));
            if (isSuspicious) {
                console.warn(`[ImageLoader] ⚠️  Suspicious image source (allowed but review): ${src}`);
            }
        }
    } catch (error) {
        // If URL parsing fails, log the error for debugging
        console.error(`[ImageLoader] Failed to parse image URL: ${src}`, error);
    }
    // Use Next.js default loader behavior
    return `${src}?w=${width}&q=${quality || 75}`;
}
}),
"[project]/components/ClientTimestamp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientTimestamp",
    ()=>ClientTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ClientTimestamp({ date, options }) {
    const [formatted, setFormatted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dateObj = new Date(date);
        setFormatted(dateObj.toLocaleDateString(undefined, options));
    }, [
        date,
        options
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: formatted
    }, void 0, false, {
        fileName: "[project]/components/ClientTimestamp.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__342931cf._.js.map