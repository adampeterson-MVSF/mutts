module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/twitter-image.png.mjs { IMAGE => \"[project]/app/twitter-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/twitter-image.png.mjs { IMAGE => \"[project]/app/twitter-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
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
"[project]/lib/log.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pino/pino.js [app-rsc] (ecmascript)");
;
// Configure Pino with production-safe settings
const inEdge = typeof globalThis.EdgeRuntime !== "undefined";
const useTransport = !inEdge && process.env.PINO_TRANSPORT !== "none" && ("TURBOPACK compile-time value", "development") === "production"; // use worker only in prod
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
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
"[project]/lib/image-loader.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/image-loader.ts
// Custom Next.js Image loader with telemetry for domain validation
__turbopack_context__.s([
    "default",
    ()=>imageLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/log.ts [app-rsc] (ecmascript)");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["metrics"].unknownImageHostRejection(hostname, 'image-loader');
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
"[project]/lib/utils/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/utils.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
// Re-export shared utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
"[project]/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript) <locals>");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript) <locals>");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ClientTimestamp.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ClientTimestamp",
    ()=>ClientTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ClientTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientTimestamp() from the server but ClientTimestamp is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ClientTimestamp.tsx <module evaluation>", "ClientTimestamp");
}),
"[project]/components/ClientTimestamp.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ClientTimestamp",
    ()=>ClientTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ClientTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientTimestamp() from the server but ClientTimestamp is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ClientTimestamp.tsx", "ClientTimestamp");
}),
"[project]/components/ClientTimestamp.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientTimestamp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ClientTimestamp.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientTimestamp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ClientTimestamp.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientTimestamp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/testing/RouteReady.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * RouteReady - A test sentinel component that marks when a route has finished loading.
 *
 * This component renders a visible element that Playwright can detect as visible,
 * while remaining visually unobtrusive to users. Used for E2E test synchronization.
 */ __turbopack_context__.s([
    "RouteReady",
    ()=>RouteReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function RouteReady({ route }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "route-ready",
        "data-route": route,
        "aria-hidden": "true",
        style: {
            position: 'absolute',
            width: 1,
            height: 1,
            top: 0,
            left: 0,
            opacity: 1,
            pointerEvents: 'none',
            visibility: 'visible'
        }
    }, void 0, false, {
        fileName: "[project]/components/testing/RouteReady.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/happy-tails/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HappyTailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/dog-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/dog.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientTimestamp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ClientTimestamp.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testing$2f$RouteReady$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/testing/RouteReady.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function HappyTailsPage() {
    const adoptedDogs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdoptedDogs"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full flex flex-col items-center p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl space-y-8",
            children: [
                process.env.NEXT_PUBLIC_E2E === "true" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testing$2f$RouteReady$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteReady"], {
                    route: "happy-tails"
                }, void 0, false, {
                    fileName: "[project]/app/happy-tails/page.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold",
                            children: "Happy Tails"
                        }, void 0, false, {
                            fileName: "[project]/app/happy-tails/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Celebrate the senior dogs who have found their forever homes."
                        }, void 0, false, {
                            fileName: "[project]/app/happy-tails/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                "Do you have an update to share?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:adoptions@seniordogrescue.org",
                                    className: "font-semibold text-primary hover:underline",
                                    children: "Email the adoption team"
                                }, void 0, false, {
                                    fileName: "[project]/app/happy-tails/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/happy-tails/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/happy-tails/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                adoptedDogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-muted-foreground",
                    children: "No adoption stories yet—check back soon!"
                }, void 0, false, {
                    fileName: "[project]/app/happy-tails/page.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
                    children: adoptedDogs.map((dog)=>{
                        const photoSrc = dog.primaryPhotoUrl || "https://images.unsplash.com/photo-1558944351-c13e5d03267b?auto=format&fit=crop&w=800&q=80";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-2xl",
                                            children: dog.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/happy-tails/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: [
                                                dog.breed ?? "Senior Dog",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) ? ` · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth)} years old` : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/happy-tails/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "Adopted on ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientTimestamp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientTimestamp"], {
                                                    date: dog.updatedAt.toISOString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/happy-tails/page.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/happy-tails/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/happy-tails/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex flex-1 flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-48 w-full overflow-hidden rounded-md bg-muted",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: photoSrc,
                                                alt: `Photo of ${dog.name}`,
                                                fill: true,
                                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                                style: {
                                                    objectFit: "cover"
                                                },
                                                priority: false
                                            }, void 0, false, {
                                                fileName: "[project]/app/happy-tails/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/happy-tails/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 21
                                        }, this),
                                        dog.specialNeeds && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            children: "Special Needs Graduate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/happy-tails/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground line-clamp-4",
                                            children: dog.bioPublic ? dog.bioPublic : "This senior pup is enjoying a cozy retirement with their family."
                                        }, void 0, false, {
                                            fileName: "[project]/app/happy-tails/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/adopt/${dog.id}`,
                                            className: "text-sm font-semibold text-primary hover:underline",
                                            children: "View adoption story"
                                        }, void 0, false, {
                                            fileName: "[project]/app/happy-tails/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/happy-tails/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, dog.id, true, {
                            fileName: "[project]/app/happy-tails/page.tsx",
                            lineNumber: 54,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/happy-tails/page.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/happy-tails/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/happy-tails/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/happy-tails/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/happy-tails/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cec98289._.js.map