module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/env-server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serverEnv",
    ()=>serverEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const ServerEnvSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "development",
        "test",
        "production"
    ]),
    ALLOW_TEST_ENDPOINTS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Database
    DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    // Supabase
    SUPABASE_SERVICE_ROLE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    // Optional monitoring
    SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    // Test configuration
    TEST_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // PII encryption
    FIELD_ENCRYPTION_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "FIELD_ENCRYPTION_KEY is required for PII encryption"),
    FIELD_ENCRYPTION_SALT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).superRefine((env, ctx)=>{
    // Validate FIELD_ENCRYPTION_KEY format (should be base64-encoded 32 bytes)
    if (env.FIELD_ENCRYPTION_KEY) {
        try {
            const key = Buffer.from(env.FIELD_ENCRYPTION_KEY, 'base64');
            if (key.length !== 32) {
                ctx.addIssue({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                    message: "FIELD_ENCRYPTION_KEY must be a base64-encoded 32-byte key"
                });
            }
        } catch  {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "FIELD_ENCRYPTION_KEY must be valid base64"
            });
        }
    }
    // Test affordances can only be enabled in test environment OR when explicitly allowed
    // This allows test endpoints to work during E2E testing even if NODE_ENV != test
    if (env.NODE_ENV !== "test" && env.ALLOW_TEST_ENDPOINTS !== "1") {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            message: "Test affordances cannot be enabled outside test environment unless ALLOW_TEST_ENDPOINTS=1"
        });
    }
    // Test secret should only be set in development/test or when test affordances are enabled
    if (env.NODE_ENV === "production" && env.TEST_SECRET && env.ALLOW_TEST_ENDPOINTS !== "1") {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            message: "TEST_SECRET should not be set in production unless ALLOW_TEST_ENDPOINTS=1"
        });
    }
});
const serverEnv = ServerEnvSchema.parse({
    ...process.env,
    NODE_ENV: ("TURBOPACK compile-time value", "development") || "development"
});
}),
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env-server.ts [app-rsc] (ecmascript)");
;
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        'query',
        'error',
        'warn'
    ] : "TURBOPACK unreachable",
    datasources: {
        db: {
            url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverEnv"].DATABASE_URL}?connection_limit=5&pool_timeout=20`
        }
    }
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

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
"[project]/lib/env.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientEnv",
    ()=>clientEnv,
    "getSupabaseAnonKey",
    ()=>getSupabaseAnonKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
// Client-safe environment variables (can be imported by client code)
const ClientEnvSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    NEXT_PUBLIC_SUPABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    NEXT_PUBLIC_SITE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()
});
const clientEnv = ClientEnvSchema.parse({
    NEXT_PUBLIC_SUPABASE_URL: ("TURBOPACK compile-time value", "https://xcegtpafqfoksbkhdezj.supabase.co"),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: ("TURBOPACK compile-time value", "sb_publishable_rbkoWYiYnx0v9dYkt7__bQ_0U-3Z4PS"),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: ("TURBOPACK compile-time value", "sb_publishable_rbkoWYiYnx0v9dYkt7__bQ_0U-3Z4PS"),
    NEXT_PUBLIC_SITE_URL: ("TURBOPACK compile-time value", "http://localhost:3000")
});
const getSupabaseAnonKey = ()=>clientEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || clientEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
}),
"[project]/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-rsc] (ecmascript)");
;
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    // In test environment, return a mock client to prevent Supabase errors
    // The test authentication is handled via headers, not cookies
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://xcegtpafqfoksbkhdezj.supabase.co"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseAnonKey"])(), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        }
    });
}
}),
"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/actions/profile.actions.ts
/* __next_internal_action_entry_do_not_use__ [{"0033a4aab8087bee60fa3957be6e412e7a28e6b142":"getAllStaffUsers","0040745eebb8809dbc98afe0103726da3438000754":"getAllUsers","006095df662d1f5454db62806f7d257b4264768061":"getActingUserRole","40103a556ce1c8f26a74594d1623582c17a19007fe":"getUserProfile","401918a5b31d808cec1006f2b7ec1ed729ea95edbe":"requireRole","4029bb82f3e859aa7d1d5c000b17516a82e1704167":"createProfile","4058e90462fbf4a2c11008bad52cf288efe05a8b32":"assertRole","40b6b27014bdc1a8fded8ff3d22be5fda4813317de":"getActingUser","40c005c7807d025045aa1b80a1ad40fa0d179df6e8":"getUserSignupIds","60ceabe90fc8ed1b25017daee808de48043d157a6e":"updateUserRole"},"",""] */ __turbopack_context__.s([
    "assertRole",
    ()=>assertRole,
    "createProfile",
    ()=>createProfile,
    "getActingUser",
    ()=>getActingUser,
    "getActingUserRole",
    ()=>getActingUserRole,
    "getAllStaffUsers",
    ()=>getAllStaffUsers,
    "getAllUsers",
    ()=>getAllUsers,
    "getUserProfile",
    ()=>getUserProfile,
    "getUserSignupIds",
    ()=>getUserSignupIds,
    "requireRole",
    ()=>requireRole,
    "updateUserRole",
    ()=>updateUserRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const createProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
async function getActingUser({ requireAuth = true } = {}) {
    // Check for synthetic session headers first (set by middleware)
    const { headers } = await __turbopack_context__.A("[project]/node_modules/next/headers.js [app-rsc] (ecmascript, async loader)");
    const headerData = await headers();
    const testUserId = headerData.get('x-test-user-id');
    const testUserRole = headerData.get('x-test-user-role');
    if (testUserId && testUserRole) {
        // Return a mock/partial User object based on headers
        return {
            id: testUserId,
            email: `test-${testUserRole.toLowerCase()}@example.test`,
            app_metadata: {
                role: testUserRole
            }
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (requireAuth && !user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/auth/login");
    }
    return user;
}
async function requireRole(role) {
    const user = await getActingUser();
    if (!user) {
        // This should be redundant due to getActingUser, but good for type safety
        throw new Error("Authentication required.");
    }
    const roles = Array.isArray(role) ? role : [
        role
    ];
    const userRole = await getActingUserRole(); // Assumes this queries the DB
    // Role hierarchy: ADMIN can access everything
    if (userRole === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN) {
        return; // Admin has access to everything
    }
    if (!roles.includes(userRole)) {
        throw new Error("Unauthorized.");
    }
}
async function assertRole(requiredRoles) {
    const user = await getActingUser();
    if (!user) {
        throw new Error("Authentication required.");
    }
    const userRole = await getActingUserRole();
    const roles = Array.isArray(requiredRoles) ? requiredRoles : [
        requiredRoles
    ];
    // ADMIN can access everything
    if (userRole === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN) {
        return;
    }
    if (!roles.includes(userRole)) {
        throw new Error("Insufficient permissions.");
    }
}
async function createProfile(name) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        throw new Error("User not authenticated.");
    }
    const parsed = createProfileSchema.safeParse({
        name
    });
    if (!parsed.success) {
        throw new Error(parsed.error.issues[0]?.message ?? "Invalid name");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.upsert({
        where: {
            id: user.id
        },
        update: {
            name: parsed.data.name,
            email: user.email
        },
        create: {
            id: user.id,
            email: user.email,
            name: parsed.data.name
        }
    });
}
async function updateUserRole(prevState, formData) {
    try {
        await assertRole(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN);
        const userId = formData.get('userId');
        const role = formData.get('role');
        if (!userId || !role) {
            return {
                success: false,
                message: "Missing required fields",
                fieldErrors: undefined,
                data: null
            };
        }
        // Protect "last admin" from demotion
        const adminCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.count({
            where: {
                role: 'ADMIN'
            }
        });
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
            where: {
                id: userId
            },
            select: {
                role: true
            }
        });
        if (!user) {
            return {
                success: false,
                message: 'User not found',
                fieldErrors: {
                    userId: [
                        'User not found'
                    ]
                },
                data: null
            };
        }
        if (user.role === 'ADMIN' && role !== 'ADMIN' && adminCount <= 1) {
            return {
                success: false,
                message: 'Cannot demote the last admin',
                fieldErrors: {
                    role: [
                        'Cannot demote the last admin'
                    ]
                },
                data: null
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.update({
            where: {
                id: userId
            },
            data: {
                role
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/users');
        return {
            success: true,
            message: 'Role updated successfully',
            fieldErrors: undefined,
            data: null
        };
    } catch  {
        return {
            success: false,
            message: "Failed to update user role",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function getAllUsers() {
    if ("TURBOPACK compile-time truthy", 1) {
        await assertRole(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN);
    }
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findMany({
        orderBy: {
            email: "asc"
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }
    });
}
async function getAllStaffUsers() {
    if ("TURBOPACK compile-time truthy", 1) {
        await assertRole(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    }
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findMany({
        where: {
            role: {
                in: [
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF,
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN
                ]
            }
        },
        orderBy: {
            email: "asc"
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    });
}
async function getActingUserRole() {
    // Check for synthetic session headers first (set by middleware)
    const { headers } = await __turbopack_context__.A("[project]/node_modules/next/headers.js [app-rsc] (ecmascript, async loader)");
    const headerData = await headers();
    const testUserRole = headerData.get('x-test-user-role');
    if (testUserRole && [
        'ADMIN',
        'STAFF',
        'VOLUNTEER'
    ].includes(testUserRole)) {
        return testUserRole;
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        throw new Error("Not authenticated");
    }
    const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
        where: {
            id: user.id
        },
        select: {
            role: true
        }
    });
    if (!profile) {
        throw new Error("Profile not found");
    }
    return profile.role;
}
async function getUserProfile(userId) {
    // Ensure user can only view their own profile (skip in test environment)
    if ("TURBOPACK compile-time truthy", 1) {
        const currentUser = await getActingUser();
        if (!currentUser || currentUser.id !== userId) {
            throw new Error("Unauthorized: Can only view your own profile");
        }
    }
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }).safeParse({
        userId
    });
    if (!parsed.success) {
        throw new Error("Invalid user ID");
    }
    const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
        where: {
            id: userId
        },
        select: {
            name: true,
            email: true,
            role: true,
            trainingCompleted: true,
            backgroundCheckCompleted: true,
            shiftCapacity: true,
            prefersWeekdays: true,
            prefersMornings: true
        }
    });
    // Return null if profile doesn't exist
    return profile;
}
async function getUserSignupIds(userId) {
    // Ensure user can only view their own signup IDs (skip in test environment)
    if ("TURBOPACK compile-time truthy", 1) {
        const currentUser = await getActingUser();
        if (!currentUser || currentUser.id !== userId) {
            throw new Error("Unauthorized: Can only view your own signups");
        }
    }
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }).safeParse({
        userId
    });
    if (!parsed.success) {
        throw new Error("Invalid user ID");
    }
    try {
        const userSignups = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].volunteerShiftSignup.findMany({
            where: {
                volunteerId: userId
            },
            select: {
                shiftId: true
            }
        });
        return userSignups.map((signup)=>signup.shiftId);
    } catch  {
        // Return empty array on any lookup failure (user doesn't exist, etc.)
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getActingUser,
    requireRole,
    assertRole,
    createProfile,
    updateUserRole,
    getAllUsers,
    getAllStaffUsers,
    getActingUserRole,
    getUserProfile,
    getUserSignupIds
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActingUser, "40b6b27014bdc1a8fded8ff3d22be5fda4813317de", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireRole, "401918a5b31d808cec1006f2b7ec1ed729ea95edbe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(assertRole, "4058e90462fbf4a2c11008bad52cf288efe05a8b32", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProfile, "4029bb82f3e859aa7d1d5c000b17516a82e1704167", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserRole, "60ceabe90fc8ed1b25017daee808de48043d157a6e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllUsers, "0040745eebb8809dbc98afe0103726da3438000754", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllStaffUsers, "0033a4aab8087bee60fa3957be6e412e7a28e6b142", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActingUserRole, "006095df662d1f5454db62806f7d257b4264768061", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserProfile, "40103a556ce1c8f26a74594d1623582c17a19007fe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserSignupIds, "40c005c7807d025045aa1b80a1ad40fa0d179df6e8", null);
}),
"[project]/lib/utils/dog-utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateAge",
    ()=>calculateAge,
    "getSizeFromWeight",
    ()=>getSizeFromWeight,
    "isSenior",
    ()=>isSenior
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
function calculateAge(dob) {
    if (!dob) return null;
    const diff = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function isSenior(dob) {
    const age = calculateAge(dob);
    // Default to 'true' for seniors if age is unknown, as this is a senior dog rescue.
    return (age || 8) >= 8;
}
function getSizeFromWeight(weight) {
    if (!weight) return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogSize"].UNKNOWN;
    if (weight < 8) return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogSize"].TOY;
    if (weight < 20) return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogSize"].SMALL;
    if (weight < 45) return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogSize"].MEDIUM;
    return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogSize"].LARGE;
}
}),
"[project]/lib/zod/applicationSchema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/schemas/applicationSchema.ts
__turbopack_context__.s([
    "applicantSchema",
    ()=>applicantSchema,
    "applicationSchema",
    ()=>applicationSchema,
    "profileSchema",
    ()=>profileSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const profileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "First name is required."
    }),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Last name is required."
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email({
        message: "Please enter a valid email address."
    })
});
const applicantSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // --- Contact Fields ---
    applicantPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // --- Housing Fields ---
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, {
        message: "Please enter a valid address."
    }),
    housingType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "OWN_HOME",
        "RENT_HOME",
        "OWN_APT_CONDO",
        "RENT_APT_CONDO",
        "OTHER"
    ]),
    hasYard: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "YES",
        "NO",
        "SHARED"
    ]),
    yardFenced: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    otherPets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    vetName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    vetPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // --- Home Environment Field ---
    homeEnvironmentDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Please describe your home environment."
    })
});
const applicationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // --- Application-specific Fields ---
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, {
        message: "Please provide a reason (min 10 characters)."
    }),
    // --- Relation IDs ---
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional(),
    // --- Reference Fields (relational data) ---
    references: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Reference name is required."),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        relationship: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })).optional()
}).merge(applicantSchema.partial()); // Merge applicant fields as optional into application schema
}),
"[project]/lib/zod/shift.schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/schemas/shift.schema.ts
__turbopack_context__.s([
    "shiftSchema",
    ()=>shiftSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const shiftSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((s)=>s.trim()).refine(Boolean, 'Title required'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    startsAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Start time is required').refine((val)=>!isNaN(Date.parse(val)), 'Invalid start time format'),
    endsAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'End time is required').refine((val)=>!isNaN(Date.parse(val)), 'Invalid end time format'),
    capacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((val)=>val === '' || val === null || val === undefined ? null : Number(val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().nullable())
}).superRefine((v, ctx)=>{
    if (new Date(v.endsAt) <= new Date(v.startsAt)) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            path: [
                'endsAt'
            ],
            message: 'Start time must be before end time'
        });
    }
});
}),
"[project]/lib/schemas.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dogFormSchema",
    ()=>dogFormSchema,
    "eventFormSchema",
    ()=>eventFormSchema,
    "logEntrySchema",
    ()=>logEntrySchema,
    "shiftIdSchema",
    ()=>shiftIdSchema
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zod$2f$applicationSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zod/applicationSchema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zod$2f$shift$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zod/shift.schema.ts [app-rsc] (ecmascript)");
;
;
const emptyStringToNull = (value)=>{
    if (value === null || value === undefined) return null;
    const str = String(value).trim();
    return str.length > 0 && str !== "none" ? str : null;
};
const checkboxValue = (value)=>value === true || value === "true" || value === "on";
const dogFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Name is required."
    }),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"]).optional(),
    breed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(emptyStringToNull, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()),
    dateOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((value)=>{
        if (!value || value === '' || typeof value !== 'string' && typeof value !== 'number' && !(value instanceof Date)) return null;
        const date = new Date(value);
        return isNaN(date.getTime()) ? null : date;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date().nullable()).nullable(),
    bioPublic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(emptyStringToNull, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()),
    notesInternal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(emptyStringToNull, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()),
    fosterProfileId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((value)=>{
        if (value === null || value === undefined) return null;
        const str = String(value).trim();
        if (str.length === 0 || str === "none") return null;
        return str; // Profile ID is a string
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()),
    specialNeeds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(checkboxValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean())
}).refine((data)=>{
    if (data.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].IN_FOSTER) {
        return data.fosterProfileId !== null && data.fosterProfileId !== undefined && data.fosterProfileId.trim() !== '';
    }
    return true;
}, {
    message: "Foster profile is required when status is IN_FOSTER",
    path: [
        "fosterProfileId"
    ]
});
const logEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Dog ID is required."
    }),
    logType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["LogType"]),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(emptyStringToNull, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable())
});
const shiftIdSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    shiftId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((value)=>{
        const num = Number(value);
        return Number.isFinite(num) ? num : Number.NaN;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        message: "Invalid shift ID"
    }).int({
        message: "Invalid shift ID"
    }).positive({
        message: "Invalid shift ID"
    }))
});
const eventFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Title is required."
    }),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(emptyStringToNull, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()),
    startTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Start time is required."
    }),
    endTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "End time is required."
    }),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(emptyStringToNull, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()),
    capacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(emptyStringToNull, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive().nullable())
}).refine((data)=>{
    const start = Date.parse(data.startTime);
    const end = Date.parse(data.endTime);
    return !Number.isNaN(start) && !Number.isNaN(end) && start < end;
}, {
    message: "End time must be after start time.",
    path: [
        "endTime"
    ]
});
;
;
}),
"[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/actions/audit.actions.ts
/* __next_internal_action_entry_do_not_use__ [{"00842318b15abb8899f8a126d649c3887e25bc26dd":"getCurrentUserId","60e65605f915ad978cc1eff7d71f6bc5ae162e6026":"captureAuditState","784b13a691424b9961dce89e697a2618dca525da25":"withAudit","784b3fb4320f38bcac735db6d70fae03d038f392f6":"logDogAudit","78ed9814381cdb54d982538f79494c008b83c58d6f":"logApplicationAudit"},"",""] */ __turbopack_context__.s([
    "captureAuditState",
    ()=>captureAuditState,
    "getCurrentUserId",
    ()=>getCurrentUserId,
    "logApplicationAudit",
    ()=>logApplicationAudit,
    "logDogAudit",
    ()=>logDogAudit,
    "withAudit",
    ()=>withAudit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function withAudit(actionName, userId, operation, auditContext) {
    const startTime = Date.now();
    let attempts = 0;
    const maxRetries = 3;
    while(attempts < maxRetries){
        try {
            const result = await operation();
            const duration = Date.now() - startTime;
            // Log successful operation
            if (auditContext) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            action: auditContext.action,
                            actorId: userId,
                            entityType: auditContext.entityType,
                            entityId: auditContext.entityId,
                            before: auditContext.before ? auditContext.before : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
                            after: auditContext.after ? auditContext.after : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
                            note: auditContext.note || `${actionName} completed in ${duration}ms`
                        }
                    });
                } catch  {
                // Silently skip audit logging failures (e.g., in tests without audit table)
                // Don't log to console to avoid test noise
                }
            }
            return result;
        } catch (error) {
            attempts++;
            // Check if error is retryable (transient DB errors)
            const isRetryable = error && typeof error === 'object' && 'code' in error && (error.code === 'P2025' || // Record not found (might be race condition)
            error.code === 'P2002' || // Unique constraint violation (might be race condition)
            error.code === 'P2034' || error && typeof error === 'object' && 'message' in error && typeof error.message === 'string' && error.message.includes('connection'));
            if (!isRetryable || attempts >= maxRetries) {
                // Log failed operation
                if (auditContext) {
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                            data: {
                                action: auditContext.action,
                                actorId: userId,
                                entityType: auditContext.entityType,
                                entityId: auditContext.entityId,
                                before: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
                                after: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
                                note: `${actionName} failed after ${attempts} attempts: ${error instanceof Error ? error.message : 'Unknown error'}`
                            }
                        });
                    } catch  {
                    // Silently skip audit logging failures (e.g., in tests without audit table)
                    // Don't log to console to avoid test noise
                    }
                }
                throw error;
            }
            // Exponential backoff: wait 100ms * 2^attempt
            const backoffMs = 100 * Math.pow(2, attempts - 1);
            console.warn(`${actionName} failed (attempt ${attempts}/${maxRetries}), retrying in ${backoffMs}ms:`, error && typeof error === 'object' && 'message' in error ? error.message : error);
            await new Promise((resolve)=>setTimeout(resolve, backoffMs));
        }
    }
    throw new Error(`Operation ${actionName} failed after ${maxRetries} attempts`);
}
async function getCurrentUserId() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.auth.getUser();
    const user = data?.user;
    if (error || !user) {
        throw new Error('User not authenticated');
    }
    return user.id;
}
async function logDogAudit(dogId, action, actorId, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
        data: {
            action,
            actorId,
            entityType: 'dog',
            entityId: dogId,
            before: options.before ? options.before : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
            after: options.after ? options.after : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
            note: options.note
        }
    });
}
async function logApplicationAudit(applicationId, action, actorId, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
        data: {
            action,
            actorId,
            entityType: 'application',
            entityId: applicationId,
            before: options.before ? options.before : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
            after: options.after ? options.after : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
            note: options.note
        }
    });
}
async function captureAuditState(entityType, entityId) {
    switch(entityType){
        case 'dog':
            const dog = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findUnique({
                where: {
                    id: entityId
                },
                select: {
                    id: true,
                    name: true,
                    status: true,
                    breed: true,
                    breedId: true,
                    dateOfBirth: true,
                    bioPublic: true,
                    notesInternal: true,
                    specialNeeds: true,
                    primaryPhotoUrl: true,
                    page_url: true,
                    mutt_id: true,
                    weight_lbs: true,
                    gender: true,
                    size: true,
                    fosterProfileId: true
                }
            });
            return dog;
        case 'application':
            const application = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findUnique({
                where: {
                    id: entityId
                },
                select: {
                    id: true,
                    status: true,
                    statusNotes: true,
                    applicationType: true,
                    reason: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            return application;
        default:
            return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    withAudit,
    getCurrentUserId,
    logDogAudit,
    logApplicationAudit,
    captureAuditState
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(withAudit, "784b13a691424b9961dce89e697a2618dca525da25", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentUserId, "00842318b15abb8899f8a126d649c3887e25bc26dd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logDogAudit, "784b3fb4320f38bcac735db6d70fae03d038f392f6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logApplicationAudit, "78ed9814381cdb54d982538f79494c008b83c58d6f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(captureAuditState, "60e65605f915ad978cc1eff7d71f6bc5ae162e6026", null);
}),
"[project]/lib/actions/medical.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/actions/medical.actions.ts
/* __next_internal_action_entry_do_not_use__ [{"40287cd94b9cff320c8e99fba57a6d56392f11e4f0":"createMedicalRecord","40d921d941a2041ebc5c9eff88111fc3bfe7944b41":"getMedicalDocuments","600766ba61c2c48d02f4c6100c955c1b192d033ed2":"updateMedicalRecord","601b63255f8808b6a72067724602b72547a1847b6a":"deleteMedicalRecord","602b36ee92de0293b9d04aff8a21372f53586771ae":"uploadMedicalDocument","60e959ce08ff833f9a37b6a6da493f13faac95dfd1":"deleteMedicalDocument","70ce82ca5043bbade27dded89d6e9542f4283b5ee4":"getMedicalRecords"},"",""] */ __turbopack_context__.s([
    "createMedicalRecord",
    ()=>createMedicalRecord,
    "deleteMedicalDocument",
    ()=>deleteMedicalDocument,
    "deleteMedicalRecord",
    ()=>deleteMedicalRecord,
    "getMedicalDocuments",
    ()=>getMedicalDocuments,
    "getMedicalRecords",
    ()=>getMedicalRecords,
    "updateMedicalRecord",
    ()=>updateMedicalRecord,
    "uploadMedicalDocument",
    ()=>uploadMedicalDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
// File validation constants (mirror client-side validation)
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_EXTENSIONS = [
    '.pdf',
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.webp',
    '.tiff',
    '.bmp'
];
const ALLOWED_CONTENT_TYPES = [
    'application/pdf',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/tiff',
    'image/bmp'
];
const uploadDocSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid dog ID"
    })
});
const deleteDocSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    documentId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid document ID"
    }),
    storagePath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Storage path is required"
    })
});
const medicalRecordBaseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid dog ID"
    }),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.date({
        message: "Invalid date"
    }),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"], {
        message: "Invalid record type"
    }),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const vaccinationSchema = medicalRecordBaseSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].VACCINATION),
    vaccineType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Vaccine type is required"
    }),
    nextDueDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.date().optional()
});
const medicationSchema = medicalRecordBaseSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].MEDICATION),
    medicationName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Medication name is required"
    }),
    dosage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    frequency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const vetVisitSchema = medicalRecordBaseSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].VET_VISIT),
    vetName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    visitReason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Visit reason is required"
    })
});
const medicalRecordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
    vaccinationSchema,
    medicationSchema,
    vetVisitSchema
]);
const deleteRecordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    recordId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid record ID"
    }),
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid dog ID"
    })
});
const getDocumentsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid dog ID"
    })
});
async function createMedicalRecord(data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const parsed = medicalRecordSchema.safeParse(data);
        if (!parsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
                data: null
            };
        }
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalRecord.create({
            data: {
                dogId: parsed.data.dogId,
                date: parsed.data.date,
                type: parsed.data.type,
                notes: parsed.data.notes,
                vaccination: parsed.data.type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].VACCINATION ? {
                    create: {
                        vaccineType: parsed.data.vaccineType,
                        nextDueDate: parsed.data.nextDueDate
                    }
                } : undefined,
                medication: parsed.data.type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].MEDICATION ? {
                    create: {
                        medicationName: parsed.data.medicationName,
                        dosage: parsed.data.dosage,
                        frequency: parsed.data.frequency
                    }
                } : undefined,
                vetVisit: parsed.data.type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].VET_VISIT ? {
                    create: {
                        vetName: parsed.data.vetName,
                        visitReason: parsed.data.visitReason
                    }
                } : undefined
            },
            include: {
                vaccination: true,
                medication: true,
                vetVisit: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/edit-dog/${parsed.data.dogId}`);
        return {
            success: true,
            message: "Medical record created successfully!",
            fieldErrors: undefined,
            data: record
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to create medical record",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function updateMedicalRecord(recordId, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const parsed = medicalRecordSchema.safeParse(data);
        if (!parsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
                data: null
            };
        }
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalRecord.update({
            where: {
                id: recordId
            },
            data: {
                dogId: parsed.data.dogId,
                date: parsed.data.date,
                type: parsed.data.type,
                notes: parsed.data.notes,
                vaccination: parsed.data.type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].VACCINATION ? {
                    upsert: {
                        create: {
                            vaccineType: parsed.data.vaccineType,
                            nextDueDate: parsed.data.nextDueDate
                        },
                        update: {
                            vaccineType: parsed.data.vaccineType,
                            nextDueDate: parsed.data.nextDueDate
                        }
                    }
                } : {
                    delete: true
                },
                medication: parsed.data.type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].MEDICATION ? {
                    upsert: {
                        create: {
                            medicationName: parsed.data.medicationName,
                            dosage: parsed.data.dosage,
                            frequency: parsed.data.frequency
                        },
                        update: {
                            medicationName: parsed.data.medicationName,
                            dosage: parsed.data.dosage,
                            frequency: parsed.data.frequency
                        }
                    }
                } : {
                    delete: true
                },
                vetVisit: parsed.data.type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MedicalRecordType"].VET_VISIT ? {
                    upsert: {
                        create: {
                            vetName: parsed.data.vetName,
                            visitReason: parsed.data.visitReason
                        },
                        update: {
                            vetName: parsed.data.vetName,
                            visitReason: parsed.data.visitReason
                        }
                    }
                } : {
                    delete: true
                }
            },
            include: {
                vaccination: true,
                medication: true,
                vetVisit: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/edit-dog/${parsed.data.dogId}`);
        return {
            success: true,
            message: "Medical record updated successfully!",
            fieldErrors: undefined,
            data: record
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to update medical record",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function deleteMedicalRecord(recordId, dogId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const parsed = deleteRecordSchema.safeParse({
            recordId,
            dogId
        });
        if (!parsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
                data: null
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalRecord.delete({
            where: {
                id: parsed.data.recordId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/edit-dog/${parsed.data.dogId}`);
        return {
            success: true,
            message: "Medical record deleted successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to delete medical record",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function getMedicalRecords(dogId, page = 1, pageSize = 10) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive(),
        page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1),
        pageSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(100)
    }).safeParse({
        dogId,
        page,
        pageSize
    });
    if (!parsed.success) {
        throw new Error("Invalid parameters");
    }
    const skip = (page - 1) * pageSize;
    const [records, totalCount] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalRecord.findMany({
            where: {
                dogId
            },
            include: {
                vaccination: true,
                medication: true,
                vetVisit: true
            },
            orderBy: {
                date: 'desc'
            },
            skip,
            take: pageSize
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalRecord.count({
            where: {
                dogId
            }
        })
    ]);
    return {
        records,
        totalCount,
        page,
        pageSize,
        totalPages: Math.ceil(totalCount / pageSize)
    };
}
async function uploadMedicalDocument(_prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        // Parse dogId from formData
        const parsed = uploadDocSchema.safeParse({
            dogId: formData.get("dogId")
        });
        if (!parsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
                data: null
            };
        }
        const { dogId } = parsed.data;
        const file = formData.get("file");
        if (!file) {
            return {
                success: false,
                message: "No file provided",
                fieldErrors: undefined,
                data: null
            };
        }
        // Validate file extension
        const extension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
        if (!ALLOWED_EXTENSIONS.includes(extension)) {
            return {
                success: false,
                message: `File type not allowed. Allowed types: ${ALLOWED_EXTENSIONS.join(', ')}`,
                fieldErrors: undefined,
                data: null
            };
        }
        // Validate content type
        if (!ALLOWED_CONTENT_TYPES.includes(file.type)) {
            return {
                success: false,
                message: `File type "${file.type}" not allowed. Allowed types: PDF and images only.`,
                fieldErrors: undefined,
                data: null
            };
        }
        // Validate file size
        if (file.size > MAX_FILE_SIZE) {
            return {
                success: false,
                message: `File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
                fieldErrors: undefined,
                data: null
            };
        }
        // Get current user for audit logging
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUser"])();
        if (!user) {
            return {
                success: false,
                message: "Authentication required",
                fieldErrors: undefined,
                data: null
            };
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Generate unique storage path
        const timestamp = Date.now();
        const randomId = Math.random().toString(36).substring(2, 15);
        const storagePath = `medical-documents/${dogId}/${timestamp}-${randomId}-${file.name}`;
        try {
            // Convert File to ArrayBuffer for upload
            const arrayBuffer = await file.arrayBuffer();
            const fileBuffer = new Uint8Array(arrayBuffer);
            // Upload file to Supabase Storage
            const { error: uploadError } = await supabase.storage.from("medical-documents").upload(storagePath, fileBuffer, {
                contentType: file.type,
                upsert: false
            });
            if (uploadError) {
                return {
                    success: false,
                    message: `Failed to upload file: ${uploadError.message}`,
                    fieldErrors: undefined,
                    data: null
                };
            }
            // Store document record in database
            const document = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalDocument.create({
                data: {
                    dogId,
                    name: file.name,
                    path: storagePath,
                    mime: file.type,
                    size: file.size,
                    uploadedByUserId: user.id
                }
            });
            // Log audit event (skip in tests where auth might not be set up)
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserId"])();
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            action: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AuditAction"].MEDICAL_DOCUMENT_UPLOAD,
                            actorId: userId,
                            entityType: "medicalDocument",
                            entityId: document.id,
                            note: `Uploaded medical document: ${file.name} for dog ${dogId}`
                        }
                    });
                } catch (auditError) {
                    // Don't fail the upload if audit logging fails
                    console.warn("Failed to log medical document upload audit event:", auditError);
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/dog/${dogId}?tab=medical`);
            return {
                success: true,
                message: "Medical document uploaded successfully!",
                fieldErrors: undefined,
                data: null
            };
        } catch (error) {
            // Attempt to clean up the uploaded file if database insert fails
            await supabase.storage.from("medical-documents").remove([
                storagePath
            ]).catch(()=>{
            // Best-effort cleanup
            });
            return {
                success: false,
                message: error instanceof Error ? error.message : "Failed to upload medical document",
                fieldErrors: undefined,
                data: null
            };
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to upload medical document",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function getMedicalDocuments(dogId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    const parsed = getDocumentsSchema.safeParse({
        dogId
    });
    if (!parsed.success) {
        throw new Error("Invalid dog ID");
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const documents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalDocument.findMany({
        where: {
            dogId
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    // Generate signed URLs for each document
    const documentsWithSignedUrls = await Promise.all(documents.map(async (doc)=>{
        const { data: signedUrlData } = await supabase.storage.from("medical-documents").createSignedUrl(doc.path, 900); // 15 minutes expiry
        return {
            ...doc,
            signedUrl: signedUrlData?.signedUrl || null
        };
    }));
    return documentsWithSignedUrls;
}
async function deleteMedicalDocument(documentId, storagePath) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const parsed = deleteDocSchema.safeParse({
            documentId,
            storagePath
        });
        if (!parsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
                data: null
            };
        }
        // Get document info before deletion for audit logging
        const document = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalDocument.findUnique({
            where: {
                id: documentId
            },
            select: {
                dogId: true,
                name: true
            }
        });
        if (!document) {
            return {
                success: false,
                message: "Document not found",
                fieldErrors: undefined,
                data: null
            };
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error: deleteError } = await supabase.storage.from("medical-documents").remove([
            storagePath
        ]);
        if (deleteError) {
            return {
                success: false,
                message: `Failed to delete document from storage: ${deleteError.message}`,
                fieldErrors: undefined,
                data: null
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].medicalDocument.delete({
            where: {
                id: documentId
            }
        });
        // Log audit event (skip in tests where auth might not be set up)
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserId"])();
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        action: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AuditAction"].MEDICAL_DOCUMENT_DELETE,
                        actorId: userId,
                        entityType: "medicalDocument",
                        entityId: documentId,
                        note: `Deleted medical document: ${document.name} for dog ${document.dogId}`
                    }
                });
            } catch (auditError) {
                // Don't fail the deletion if audit logging fails
                console.warn("Failed to log medical document deletion audit event:", auditError);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/dog/${document.dogId}?tab=medical`);
        return {
            success: true,
            message: "Medical document deleted successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to delete medical document",
            fieldErrors: undefined,
            data: null
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createMedicalRecord,
    updateMedicalRecord,
    deleteMedicalRecord,
    getMedicalRecords,
    uploadMedicalDocument,
    getMedicalDocuments,
    deleteMedicalDocument
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createMedicalRecord, "40287cd94b9cff320c8e99fba57a6d56392f11e4f0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateMedicalRecord, "600766ba61c2c48d02f4c6100c955c1b192d033ed2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteMedicalRecord, "601b63255f8808b6a72067724602b72547a1847b6a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMedicalRecords, "70ce82ca5043bbade27dded89d6e9542f4283b5ee4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadMedicalDocument, "602b36ee92de0293b9d04aff8a21372f53586771ae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMedicalDocuments, "40d921d941a2041ebc5c9eff88111fc3bfe7944b41", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteMedicalDocument, "60e959ce08ff833f9a37b6a6da493f13faac95dfd1", null);
}),
"[project]/lib/dog-filters.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Dog filters DTO and URL helpers for consistent filtering across dog-related components
 */ __turbopack_context__.s([
    "ADMIN_DOG_FILTER_PARAMS",
    ()=>ADMIN_DOG_FILTER_PARAMS,
    "DOG_FILTER_PARAMS",
    ()=>DOG_FILTER_PARAMS,
    "FOSTER_FILTER_VALUES",
    ()=>FOSTER_FILTER_VALUES,
    "createEmptyAdminDogFilters",
    ()=>createEmptyAdminDogFilters,
    "createEmptyDogFilters",
    ()=>createEmptyDogFilters,
    "encodeAdminDogFilters",
    ()=>encodeAdminDogFilters,
    "encodeDogFilters",
    ()=>encodeDogFilters,
    "getAdminDogFiltersFromSearchParams",
    ()=>getAdminDogFiltersFromSearchParams,
    "getDogFiltersFromSearchParams",
    ()=>getDogFiltersFromSearchParams,
    "hasActiveAdminDogFilters",
    ()=>hasActiveAdminDogFilters,
    "hasActiveFilters",
    ()=>hasActiveFilters,
    "isNoFosterFilter",
    ()=>isNoFosterFilter,
    "parseAdminDogFilters",
    ()=>parseAdminDogFilters,
    "parseDogFilters",
    ()=>parseDogFilters,
    "parseFosterFilterValue",
    ()=>parseFosterFilterValue,
    "serializeAdminDogFilters",
    ()=>serializeAdminDogFilters,
    "serializeDogFilters",
    ()=>serializeDogFilters,
    "updateAdminDogFiltersInUrl",
    ()=>updateAdminDogFiltersInUrl,
    "updateDogFiltersInUrl",
    ()=>updateDogFiltersInUrl
]);
const DOG_FILTER_PARAMS = {
    BREED: "breed",
    AGE_MIN: "ageMin",
    AGE_MAX: "ageMax",
    SPECIAL_NEEDS: "specialNeeds",
    SIZE: "size",
    GENDER: "gender",
    HAS_PHOTOS: "hasPhotos"
};
const ADMIN_DOG_FILTER_PARAMS = {
    STATUS: "status",
    FOSTER_PROFILE_ID: "fosterProfileId",
    BREED: "breed",
    GENDER: "gender",
    SIZE: "size",
    WEIGHT_MIN: "weightMin",
    WEIGHT_MAX: "weightMax",
    SPECIAL_NEEDS: "specialNeeds",
    HAS_PHOTOS: "hasPhotos"
};
const FOSTER_FILTER_VALUES = {
    ALL: "all",
    NONE: "none",
    NO_FOSTER_FORM: ""
};
function isNoFosterFilter(value) {
    return value === FOSTER_FILTER_VALUES.NONE;
}
function parseFosterFilterValue(value) {
    if (value === FOSTER_FILTER_VALUES.ALL) return undefined;
    if (value === FOSTER_FILTER_VALUES.NONE) return null;
    return value; // Specific foster profile ID
}
function parseDogFilters(searchParams) {
    return {
        breed: searchParams.get(DOG_FILTER_PARAMS.BREED) || undefined,
        specialNeeds: searchParams.get(DOG_FILTER_PARAMS.SPECIAL_NEEDS) === "true" ? "true" : undefined,
        size: searchParams.get(DOG_FILTER_PARAMS.SIZE) || undefined,
        gender: searchParams.get(DOG_FILTER_PARAMS.GENDER) || undefined,
        hasPhotos: searchParams.get(DOG_FILTER_PARAMS.HAS_PHOTOS) === "true" ? "true" : undefined
    };
}
function serializeDogFilters(filters) {
    const params = new URLSearchParams();
    if (filters.breed) params.set(DOG_FILTER_PARAMS.BREED, filters.breed);
    if (filters.specialNeeds) params.set(DOG_FILTER_PARAMS.SPECIAL_NEEDS, "true");
    if (filters.size) params.set(DOG_FILTER_PARAMS.SIZE, filters.size);
    if (filters.gender) params.set(DOG_FILTER_PARAMS.GENDER, filters.gender);
    if (filters.hasPhotos) params.set(DOG_FILTER_PARAMS.HAS_PHOTOS, "true");
    return params;
}
function encodeDogFilters(filters) {
    return serializeDogFilters(filters).toString();
}
function hasActiveFilters(filters) {
    return !!(filters.breed || filters.specialNeeds || filters.size || filters.gender || filters.hasPhotos);
}
function createEmptyDogFilters() {
    return {};
}
function getDogFiltersFromSearchParams(searchParams) {
    return parseDogFilters(searchParams);
}
function updateDogFiltersInUrl(router, pathname, currentFilters, patch) {
    const newFilters = {
        ...currentFilters,
        ...patch
    };
    const params = serializeDogFilters(newFilters);
    router.push(`${pathname}?${params.toString()}`);
}
function parseAdminDogFilters(searchParams) {
    return {
        status: searchParams.get(ADMIN_DOG_FILTER_PARAMS.STATUS) || "all",
        fosterProfileId: searchParams.get(ADMIN_DOG_FILTER_PARAMS.FOSTER_PROFILE_ID) || "all",
        breed: searchParams.get(ADMIN_DOG_FILTER_PARAMS.BREED) || "all",
        gender: searchParams.get(ADMIN_DOG_FILTER_PARAMS.GENDER) || "all",
        size: searchParams.get(ADMIN_DOG_FILTER_PARAMS.SIZE) || "all",
        weightMin: searchParams.get(ADMIN_DOG_FILTER_PARAMS.WEIGHT_MIN) || "",
        weightMax: searchParams.get(ADMIN_DOG_FILTER_PARAMS.WEIGHT_MAX) || "",
        specialNeeds: searchParams.get(ADMIN_DOG_FILTER_PARAMS.SPECIAL_NEEDS) || "all",
        hasPhotos: searchParams.get(ADMIN_DOG_FILTER_PARAMS.HAS_PHOTOS) || "all"
    };
}
function serializeAdminDogFilters(filters) {
    const params = new URLSearchParams();
    if (filters.status && filters.status !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.STATUS, filters.status);
    if (filters.fosterProfileId && filters.fosterProfileId !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.FOSTER_PROFILE_ID, filters.fosterProfileId);
    if (filters.breed && filters.breed !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.BREED, filters.breed);
    if (filters.gender && filters.gender !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.GENDER, filters.gender);
    if (filters.size && filters.size !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.SIZE, filters.size);
    if (filters.weightMin && filters.weightMin !== "") params.set(ADMIN_DOG_FILTER_PARAMS.WEIGHT_MIN, filters.weightMin);
    if (filters.weightMax && filters.weightMax !== "") params.set(ADMIN_DOG_FILTER_PARAMS.WEIGHT_MAX, filters.weightMax);
    if (filters.specialNeeds && filters.specialNeeds !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.SPECIAL_NEEDS, filters.specialNeeds);
    if (filters.hasPhotos && filters.hasPhotos !== "all") params.set(ADMIN_DOG_FILTER_PARAMS.HAS_PHOTOS, filters.hasPhotos);
    return params;
}
function encodeAdminDogFilters(filters) {
    return serializeAdminDogFilters(filters).toString();
}
function hasActiveAdminDogFilters(filters) {
    return !!(filters.status && filters.status !== "all" || filters.fosterProfileId && filters.fosterProfileId !== "all" || filters.breed && filters.breed !== "all" || filters.gender && filters.gender !== "all" || filters.size && filters.size !== "all" || filters.weightMin && filters.weightMin !== "" || filters.weightMax && filters.weightMax !== "" || filters.specialNeeds && filters.specialNeeds !== "all" || filters.hasPhotos && filters.hasPhotos !== "all");
}
function createEmptyAdminDogFilters() {
    return {
        status: "all",
        fosterProfileId: "all",
        breed: "all",
        gender: "all",
        size: "all",
        weightMin: "",
        weightMax: "",
        specialNeeds: "all",
        hasPhotos: "all"
    };
}
function getAdminDogFiltersFromSearchParams(searchParams) {
    return parseAdminDogFilters(searchParams);
}
function updateAdminDogFiltersInUrl(router, pathname, currentFilters, patch) {
    const newFilters = {
        ...currentFilters,
        ...patch
    };
    const params = serializeAdminDogFilters(newFilters);
    // Reset to page 1 when filtering
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
}
}),
"[project]/lib/actions/dog.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/actions/dog.actions.ts
/* __next_internal_action_entry_do_not_use__ [{"000a10a8c48a2ee52ab05f736a025f0fc3430ed087":"getShelterDogs","0019079e818e55751763ff78fc8ff027e9229acf81":"getUniqueBreeds","00636a5f955c055d9ae7354b912740525bc095ed8a":"getPotentialFosters","008eeddbd6b4383f36b57519240b05cda72ffd3c35":"getUniqueStatuses","0096a4418a44c207c9e46a0d0ea49723f0f5beafc6":"getUniqueSizes","00ed911e85835f38bef24e726e75a3ce65626bc191":"getAdoptedDogs","00f408ca64ac5f31f6d33edb3fac1af6d3c4ec2139":"getUniqueGenders","4000b6ce4b2fec5adc2908e05c9e975ec1809e896c":"getDogs","401755ca459dee27048e5cb1b2a37b68009c1a4264":"getDogDetailsById","408f99a89cce2e13a05568db8eaa3b51e83e52cdfe":"getDogById","40cafae7f99e5ce12881510a297b1881d628c95439":"getAvailableDogs","40d4e8ed5df4b988b285b21be257cde22439748fb0":"getAllDogs","40fc9b3430fa18ec08c7b11c01dade07f8ea8fad1a":"createDog","6033c3740bfb39b1d88f5bc1d4d6032abe7989c415":"deleteDog","607872d570086e997fa69c526f8b345ef1ac31b02c":"getRelatedDogs","6078f096910cca9f1b04ed2bc37d4889f49c930d80":"getDogMedicalBundle","6086ab75672e1233c1297a8296353e983681f5690e":"uploadAndSetDogImage","60fe0a92564fcd68752aa0323d2abaea7708f4c303":"updateDog"},"",""] */ __turbopack_context__.s([
    "createDog",
    ()=>createDog,
    "deleteDog",
    ()=>deleteDog,
    "getAdoptedDogs",
    ()=>getAdoptedDogs,
    "getAllDogs",
    ()=>getAllDogs,
    "getAvailableDogs",
    ()=>getAvailableDogs,
    "getDogById",
    ()=>getDogById,
    "getDogDetailsById",
    ()=>getDogDetailsById,
    "getDogMedicalBundle",
    ()=>getDogMedicalBundle,
    "getDogs",
    ()=>getDogs,
    "getPotentialFosters",
    ()=>getPotentialFosters,
    "getRelatedDogs",
    ()=>getRelatedDogs,
    "getShelterDogs",
    ()=>getShelterDogs,
    "getUniqueBreeds",
    ()=>getUniqueBreeds,
    "getUniqueGenders",
    ()=>getUniqueGenders,
    "getUniqueSizes",
    ()=>getUniqueSizes,
    "getUniqueStatuses",
    ()=>getUniqueStatuses,
    "updateDog",
    ()=>updateDog,
    "uploadAndSetDogImage",
    ()=>uploadAndSetDogImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/dog-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/schemas.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/medical.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dog-filters.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const deleteDogSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid dog ID"
    }),
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, {
        message: "Reason must be at least 10 characters long"
    }).max(1000, {
        message: "Reason must be less than 1000 characters"
    })
});
const uploadImageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid dog ID"
    })
});
const getAllDogsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).optional().default(1),
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(100).optional().default(10),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "all",
        ...Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"])
    ]).optional().default("all"),
    fosterProfileId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FOSTER_FILTER_VALUES"].ALL,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FOSTER_FILTER_VALUES"].NONE
    ]).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().default(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FOSTER_FILTER_VALUES"].ALL),
    breed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default("all"),
    gender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "all",
        ...Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Gender"])
    ]).optional().default("all"),
    size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "all",
        ...Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogSize"])
    ]).optional().default("all"),
    weightMin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d*$/, {
        message: "Weight must be a number"
    }).optional(),
    weightMax: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d*$/, {
        message: "Weight must be a number"
    }).optional(),
    specialNeeds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default("all"),
    hasPhotos: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default("all"),
    sortField: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "name",
        "status",
        "breed"
    ]).optional().default("name"),
    sortDirection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "asc",
        "desc"
    ]).optional().default("asc")
});
// Shared photo upload function
async function uploadDogPhoto(file) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/\s+/g, "-");
    const storagePath = `dog-${timestamp}-${sanitizedFileName}`;
    const { error: uploadError } = await supabase.storage.from("dog-photos").upload(storagePath, file, {
        upsert: false
    });
    if (uploadError) {
        throw new Error(`Storage Error: ${uploadError.message}`);
    }
    const { data: urlData } = supabase.storage.from("dog-photos").getPublicUrl(storagePath);
    const publicUrl = urlData.publicUrl;
    if (!publicUrl) {
        throw new Error("Unable to generate public URL for uploaded photo");
    }
    return publicUrl;
}
async function createDog(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dogFormSchema"].safeParse(Object.fromEntries(formData.entries()));
        if (!parsed.success) {
            const fieldErrors = parsed.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        const { name, status, breed, dateOfBirth, bioPublic, notesInternal, fosterProfileId, specialNeeds } = parsed.data;
        const finalStatus = status ?? __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].INTAKE;
        // Handle primary photo upload if provided
        let primaryPhotoUrl = "https://picsum.photos/300/200?random=1"; // Default placeholder
        const file = formData.get("file");
        if (file instanceof File && file.size > 0) {
            try {
                primaryPhotoUrl = await uploadDogPhoto(file);
            } catch (error) {
                // For now, we'll continue with the default placeholder if upload fails
                // In production, you might want to return an error instead
                console.error("Failed to upload dog photo:", error);
            }
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.create({
            data: {
                name,
                status: finalStatus,
                breed,
                dateOfBirth,
                bioPublic,
                notesInternal,
                specialNeeds,
                fosterProfileId: finalStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].IN_FOSTER ? fosterProfileId : null,
                primaryPhotoUrl
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dogs");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/adopt");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/dogs");
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unexpected error occurred.",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function updateDog(dogId, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserId"])();
        const file = formData.get('file');
        let newPhotoUrl = undefined;
        if (file && file.size > 0) {
            try {
                newPhotoUrl = await uploadDogPhoto(file);
            } catch (error) {
                return {
                    success: false,
                    message: error instanceof Error ? error.message : "Failed to upload photo",
                    fieldErrors: undefined,
                    data: null
                };
            }
        }
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dogFormSchema"].safeParse(Object.fromEntries(formData.entries()));
        if (!parsed.success) {
            const fieldErrors = parsed.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        const { name, status, breed, dateOfBirth, bioPublic, notesInternal, fosterProfileId, specialNeeds } = parsed.data;
        const finalStatus = status ?? __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].INTAKE;
        // Capture before state for audit
        const beforeState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["captureAuditState"])('dog', dogId);
        const updateData = {
            name,
            status: finalStatus,
            breed,
            dateOfBirth,
            bioPublic,
            notesInternal,
            specialNeeds,
            fosterProfileId: finalStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].IN_FOSTER ? fosterProfileId : null
        };
        if (newPhotoUrl) {
            updateData.primaryPhotoUrl = newPhotoUrl;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAudit"])("updateDog", userId, async ()=>{
            const updatedDog = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.update({
                where: {
                    id: dogId
                },
                data: updateData
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/edit-dog/${dogId}`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/adopt");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/adopt/${dogId}`);
            return updatedDog;
        }, {
            action: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AuditAction"].DOG_EDIT,
            entityType: 'dog',
            entityId: dogId,
            before: beforeState || undefined,
            after: beforeState ? {
                ...beforeState,
                ...updateData
            } : undefined,
            note: `Updated dog: ${name}`
        });
        return {
            success: true,
            message: "Dog updated successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unexpected error occurred.",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function uploadAndSetDogImage(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "Not authorized",
            newImageUrl: null
        };
    }
    const parsed = uploadImageSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!parsed.success) {
        return {
            message: parsed.error.issues.map((issue)=>`${issue.path.join('.')}: ${issue.message}`).join(', '),
            newImageUrl: null
        };
    }
    const { dogId } = parsed.data;
    const file = formData.get("file");
    if (!file || file.size === 0) {
        return {
            message: "No file provided.",
            newImageUrl: null
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const filePath = `dogs/${dogId}-${file.name}-${Date.now()}`;
    try {
        const { error: uploadError } = await supabase.storage.from("images") // BUCKET NAME - YOU MUST CREATE THIS IN SUPABASE
        .upload(filePath, file);
        if (uploadError) {
            throw new Error(`Storage Error: ${uploadError.message}`);
        }
        const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(filePath);
        if (!publicUrl) {
            throw new Error("Could not get public URL.");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.update({
            where: {
                id: dogId
            },
            data: {
                primaryPhotoUrl: publicUrl
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/edit-dog/${dogId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/adopt");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/adopt/${dogId}`);
        return {
            message: null,
            newImageUrl: publicUrl
        };
    } catch (error) {
        console.error("Upload failed:", error);
        return {
            message: error instanceof Error ? error.message : "Upload failed.",
            newImageUrl: null
        };
    }
}
async function deleteDog(dogId, reason) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserId"])();
        const parsed = deleteDogSchema.safeParse({
            dogId,
            reason
        });
        if (!parsed.success) {
            const fieldErrors = parsed.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        // Capture before state for audit
        const beforeState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["captureAuditState"])('dog', parsed.data.dogId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAudit"])("deleteDog", userId, async ()=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.delete({
                where: {
                    id: parsed.data.dogId
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dogs");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/adopt");
            return null;
        }, {
            action: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AuditAction"].DOG_EDIT,
            entityType: 'dog',
            entityId: parsed.data.dogId,
            before: beforeState || undefined,
            after: undefined,
            note: `Deleted dog. Reason: ${parsed.data.reason}`
        });
        return {
            success: true,
            message: "Dog deleted successfully! Redirecting...",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unexpected error occurred.",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function getDogById(id) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive()
    }).safeParse({
        id
    });
    if (!parsed.success) {
        throw new Error("Invalid dog ID");
    }
    const dog = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findUnique({
        where: {
            id
        },
        include: {
            fosterProfile: {
                select: {
                    profileId: true,
                    profile: {
                        select: {
                            name: true,
                            email: true
                        }
                    }
                }
            }
        }
    });
    if (!dog) {
        throw new Error("Dog not found");
    }
    // Compute derived values on the fly
    const isSenior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) >= 8 : false;
    const hasPhotos = dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false;
    return {
        ...dog,
        isSenior,
        hasPhotos
    };
}
async function getAllDogs(searchParams) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    const parsed = getAllDogsSchema.safeParse(searchParams || {});
    if (!parsed.success) {
        throw new Error("Invalid search parameters");
    }
    const { page, limit } = parsed.data;
    const offset = (page - 1) * limit;
    // Build where clause for filtering
    const where = {};
    if (parsed.data.status && parsed.data.status !== "all") {
        where.status = parsed.data.status;
    }
    if (parsed.data.fosterProfileId && parsed.data.fosterProfileId !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FOSTER_FILTER_VALUES"].ALL) {
        if (parsed.data.fosterProfileId === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FOSTER_FILTER_VALUES"].NONE) {
            // Filter for dogs with no foster assigned
            where.fosterProfileId = null;
        } else {
            // Filter for specific foster
            where.fosterProfileId = parsed.data.fosterProfileId;
        }
    }
    if (parsed.data.breed && parsed.data.breed !== "all" && parsed.data.breed !== "") {
        where.breed = {
            contains: parsed.data.breed,
            mode: 'insensitive'
        };
    }
    if (parsed.data.gender && parsed.data.gender !== "all") {
        where.gender = parsed.data.gender;
    }
    if (parsed.data.size && parsed.data.size !== "all") {
        where.size = parsed.data.size;
    }
    if (parsed.data.weightMin && parsed.data.weightMin !== "") {
        const weightMin = parseInt(parsed.data.weightMin, 10);
        if (!Number.isNaN(weightMin)) {
            where.weight_lbs = {
                gte: weightMin
            };
        }
    }
    if (parsed.data.weightMax && parsed.data.weightMax !== "") {
        const weightMax = parseInt(parsed.data.weightMax, 10);
        if (!Number.isNaN(weightMax)) {
            where.weight_lbs = where.weight_lbs ? {
                ...where.weight_lbs,
                lte: weightMax
            } : {
                lte: weightMax
            };
        }
    }
    if (parsed.data.specialNeeds && parsed.data.specialNeeds !== "all") {
        where.specialNeeds = parsed.data.specialNeeds === "true";
    }
    if (parsed.data.hasPhotos && parsed.data.hasPhotos !== "all") {
        if (parsed.data.hasPhotos === "true") {
            where.primaryPhotoUrl = {
                not: null
            };
        } else {
            where.primaryPhotoUrl = null;
        }
    }
    // Build orderBy clause for sorting
    const orderBy = {};
    const sortField = parsed.data.sortField;
    const sortDirection = parsed.data.sortDirection;
    switch(sortField){
        case "name":
            orderBy.name = sortDirection;
            break;
        case "status":
            orderBy.status = sortDirection;
            break;
        case "breed":
            orderBy.breed = sortDirection;
            break;
        default:
            orderBy.name = "asc";
    }
    const [dogs, totalCount] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
            where,
            orderBy,
            skip: offset,
            take: limit,
            select: {
                id: true,
                mutt_id: true,
                name: true,
                breed: true,
                dateOfBirth: true,
                status: true,
                primaryPhotoUrl: true,
                gender: true,
                weight_lbs: true,
                size: true,
                specialNeeds: true,
                bioPublic: true,
                createdAt: true,
                fosterProfile: {
                    select: {
                        profile: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.count({
            where
        })
    ]);
    const totalPages = Math.ceil(totalCount / limit);
    // Flatten foster profile data and compute derived fields
    const dogsWithFlattenedFoster = dogs.map((dog)=>({
            ...dog,
            fosterProfile: dog.fosterProfile ? {
                ...dog.fosterProfile,
                name: dog.fosterProfile.profile?.name,
                email: dog.fosterProfile.profile?.email
            } : null,
            // Compute derived values on the fly
            isSenior: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) >= 8 : false,
            hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false
        }));
    return {
        dogs: dogsWithFlattenedFoster,
        pagination: {
            currentPage: page,
            totalPages,
            totalCount,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1
        }
    };
}
const coerceBoolean = (value)=>{
    if (value === undefined) return undefined;
    if (value === "true") return true;
    if (value === "false") return false;
    return undefined;
};
async function getDogs({ page = 1, pageSize = 12 } = {}) {
    const take = pageSize;
    const skip = (Math.max(1, page) - 1) * take;
    const where = {
        status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].AVAILABLE
    };
    const [dogs, total] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
            where,
            orderBy: [
                {
                    primaryPhotoUrl: 'desc'
                },
                {
                    createdAt: 'desc'
                }
            ],
            take,
            skip,
            select: {
                id: true,
                name: true,
                breed: true,
                dateOfBirth: true,
                bioPublic: true,
                specialNeeds: true,
                primaryPhotoUrl: true,
                gender: true,
                weight_lbs: true,
                size: true,
                mutt_id: true,
                status: true,
                createdAt: true
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.count({
            where
        })
    ]);
    // Compute derived values on the fly
    const dogsWithDerived = dogs.map((dog)=>({
            ...dog,
            isSenior: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) >= 8 : false,
            hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false
        }));
    return {
        dogs: dogsWithDerived,
        total
    };
}
async function getAvailableDogs({ page = 1, filters = {} } = {}) {
    const take = 12;
    const skip = (Math.max(1, page) - 1) * take;
    const where = {
        status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].AVAILABLE
    };
    if (filters.breed) {
        where.breed = {
            contains: filters.breed,
            mode: "insensitive"
        };
    }
    if (filters.size) {
        where.size = filters.size;
    }
    if (filters.gender) {
        where.gender = filters.gender;
    }
    const specialNeedsFilter = coerceBoolean(filters.specialNeeds);
    if (specialNeedsFilter !== undefined) {
        where.specialNeeds = specialNeedsFilter;
    }
    const [dogs, totalCount] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
            where,
            orderBy: [
                {
                    primaryPhotoUrl: 'desc'
                },
                {
                    createdAt: 'desc'
                }
            ],
            take,
            skip,
            select: {
                id: true,
                name: true,
                breed: true,
                dateOfBirth: true,
                bioPublic: true,
                specialNeeds: true,
                primaryPhotoUrl: true,
                gender: true,
                weight_lbs: true,
                size: true,
                mutt_id: true,
                status: true,
                createdAt: true
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.count({
            where
        })
    ]);
    // Compute derived values on the fly
    const dogsWithDerived = dogs.map((dog)=>({
            ...dog,
            isSenior: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) >= 8 : false,
            hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false
        }));
    const totalPages = Math.ceil(totalCount / take);
    return {
        dogs: dogsWithDerived,
        pagination: {
            page,
            limit: take,
            totalCount,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1
        }
    };
}
async function getShelterDogs() {
    const dogs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
        where: {
            status: {
                not: "ADOPTED"
            }
        },
        orderBy: {
            createdAt: "desc"
        },
        select: {
            id: true,
            name: true,
            breed: true,
            dateOfBirth: true,
            status: true,
            primaryPhotoUrl: true,
            createdAt: true
        }
    });
    // Compute derived values on the fly
    return dogs.map((dog)=>({
            ...dog,
            isSenior: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) >= 8 : false,
            hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false
        }));
}
async function getPotentialFosters() {
    const fosterProfiles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.findMany({
        select: {
            profileId: true,
            profile: {
                select: {
                    name: true,
                    email: true
                }
            }
        },
        orderBy: [
            {
                profile: {
                    name: "asc"
                }
            },
            {
                profile: {
                    email: "asc"
                }
            }
        ]
    });
    return fosterProfiles.filter((fp)=>fp.profile).map((fp)=>({
            id: fp.profileId,
            name: fp.profile?.name ?? null,
            email: fp.profile?.email ?? ""
        }));
}
async function getUniqueBreeds() {
    const breeds = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
        where: {
            breed: {
                not: null
            }
        },
        select: {
            breed: true
        },
        distinct: [
            'breed'
        ],
        orderBy: {
            breed: 'asc'
        }
    });
    return [
        ...new Set(breeds.map((b)=>b.breed).filter(Boolean))
    ];
}
async function getUniqueStatuses() {
    const statuses = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
        select: {
            status: true
        },
        distinct: [
            'status'
        ]
    });
    return [
        ...new Set(statuses.map((s)=>s.status))
    ];
}
async function getUniqueGenders() {
    const genders = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
        select: {
            gender: true
        },
        distinct: [
            "gender"
        ],
        orderBy: {
            gender: "asc"
        }
    });
    return genders.map((entry)=>entry.gender).filter((gender)=>gender !== null);
}
async function getUniqueSizes() {
    const sizes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
        select: {
            size: true
        },
        distinct: [
            "size"
        ],
        orderBy: {
            size: "asc"
        }
    });
    return sizes.map((entry)=>entry.size).filter((size)=>size !== null);
}
async function getRelatedDogs(dogId, limit = 4) {
    // First get the current dog's size and dateOfBirth
    const currentDog = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findUnique({
        where: {
            id: dogId
        },
        select: {
            size: true,
            dateOfBirth: true
        }
    });
    if (!currentDog) {
        return [];
    }
    // Calculate current dog's age
    const currentAge = currentDog.dateOfBirth ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(currentDog.dateOfBirth) : null;
    // Get dogs with same size and similar age (±2 years), excluding current dog
    // Convert age range to date range: if current dog is X years old, find dogs born within ±2 years of that age
    const now = new Date();
    const ageMin = Math.max(0, (currentAge || 0) - 2);
    const ageMax = (currentAge || 0) + 2;
    // Convert age range to date range (older dogs have earlier birth dates)
    const dateMax = new Date(now.getTime() - ageMin * 365 * 24 * 60 * 60 * 1000);
    const dateMin = new Date(now.getTime() - ageMax * 365 * 24 * 60 * 60 * 1000);
    const dogs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
        where: {
            AND: [
                {
                    id: {
                        not: dogId
                    }
                },
                {
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].AVAILABLE
                },
                {
                    size: currentDog.size
                },
                {
                    dateOfBirth: {
                        gte: dateMin,
                        lte: dateMax
                    }
                }
            ]
        },
        orderBy: [
            {
                primaryPhotoUrl: 'desc'
            },
            {
                createdAt: 'desc'
            }
        ],
        take: limit,
        select: {
            id: true,
            name: true,
            breed: true,
            dateOfBirth: true,
            bioPublic: true,
            specialNeeds: true,
            primaryPhotoUrl: true,
            gender: true,
            size: true,
            status: true,
            createdAt: true
        }
    });
    // Compute derived values on the fly
    return dogs.map((dog)=>({
            ...dog,
            isSenior: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) >= 8 : false,
            hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false
        }));
}
async function getAdoptedDogs() {
    const dogs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
        where: {
            status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DogStatus"].ADOPTED
        },
        orderBy: {
            updatedAt: "desc"
        },
        select: {
            id: true,
            name: true,
            breed: true,
            dateOfBirth: true,
            bioPublic: true,
            specialNeeds: true,
            primaryPhotoUrl: true,
            status: true,
            createdAt: true,
            updatedAt: true
        }
    });
    // Compute derived values on the fly
    return dogs.map((dog)=>({
            ...dog,
            isSenior: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth) >= 8 : false,
            hasPhotos: dog.primaryPhotoUrl ? !dog.primaryPhotoUrl.includes('placeholder') : false
        }));
}
async function getDogMedicalBundle(dogId, page = 1) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive(),
        page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1)
    }).safeParse({
        dogId,
        page
    });
    if (!parsed.success) {
        throw new Error("Invalid dog ID");
    }
    const [dogDetails, medicalRecords, medicalDocuments] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dog.findUnique({
            where: {
                id: dogId
            },
            include: {
                fosterProfile: {
                    include: {
                        profile: true
                    }
                }
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMedicalRecords"])(dogId, page),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMedicalDocuments"])(dogId)
    ]);
    if (!dogDetails) {
        throw new Error("Dog not found");
    }
    // Compute derived values on the fly
    const isSenior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dogDetails.dateOfBirth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dogDetails.dateOfBirth) >= 8 : false;
    const hasPhotos = dogDetails.primaryPhotoUrl ? !dogDetails.primaryPhotoUrl.includes('placeholder') : false;
    return {
        dog: {
            ...dogDetails,
            isSenior,
            hasPhotos
        },
        medicalRecords,
        medicalDocuments
    };
}
async function getDogDetailsById(dogId) {
    const bundle = await getDogMedicalBundle(dogId, 1);
    return {
        dog: bundle.dog,
        medicalRecords: bundle.medicalRecords
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createDog,
    updateDog,
    uploadAndSetDogImage,
    deleteDog,
    getDogById,
    getAllDogs,
    getDogs,
    getAvailableDogs,
    getShelterDogs,
    getPotentialFosters,
    getUniqueBreeds,
    getUniqueStatuses,
    getUniqueGenders,
    getUniqueSizes,
    getRelatedDogs,
    getAdoptedDogs,
    getDogMedicalBundle,
    getDogDetailsById
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDog, "40fc9b3430fa18ec08c7b11c01dade07f8ea8fad1a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateDog, "60fe0a92564fcd68752aa0323d2abaea7708f4c303", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadAndSetDogImage, "6086ab75672e1233c1297a8296353e983681f5690e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDog, "6033c3740bfb39b1d88f5bc1d4d6032abe7989c415", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDogById, "408f99a89cce2e13a05568db8eaa3b51e83e52cdfe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllDogs, "40d4e8ed5df4b988b285b21be257cde22439748fb0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDogs, "4000b6ce4b2fec5adc2908e05c9e975ec1809e896c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAvailableDogs, "40cafae7f99e5ce12881510a297b1881d628c95439", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getShelterDogs, "000a10a8c48a2ee52ab05f736a025f0fc3430ed087", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPotentialFosters, "00636a5f955c055d9ae7354b912740525bc095ed8a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUniqueBreeds, "0019079e818e55751763ff78fc8ff027e9229acf81", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUniqueStatuses, "008eeddbd6b4383f36b57519240b05cda72ffd3c35", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUniqueGenders, "00f408ca64ac5f31f6d33edb3fac1af6d3c4ec2139", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUniqueSizes, "0096a4418a44c207c9e46a0d0ea49723f0f5beafc6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRelatedDogs, "607872d570086e997fa69c526f8b345ef1ac31b02c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdoptedDogs, "00ed911e85835f38bef24e726e75a3ce65626bc191", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDogMedicalBundle, "6078f096910cca9f1b04ed2bc37d4889f49c930d80", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDogDetailsById, "401755ca459dee27048e5cb1b2a37b68009c1a4264", null);
}),
"[project]/.next-internal/server/app/adopt/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/dog.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/actions/medical.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/dog.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/medical.actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/adopt/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/dog.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/actions/medical.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000a10a8c48a2ee52ab05f736a025f0fc3430ed087",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getShelterDogs"],
    "0019079e818e55751763ff78fc8ff027e9229acf81",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUniqueBreeds"],
    "0033a4aab8087bee60fa3957be6e412e7a28e6b142",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllStaffUsers"],
    "0040745eebb8809dbc98afe0103726da3438000754",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllUsers"],
    "006095df662d1f5454db62806f7d257b4264768061",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUserRole"],
    "00636a5f955c055d9ae7354b912740525bc095ed8a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPotentialFosters"],
    "00842318b15abb8899f8a126d649c3887e25bc26dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserId"],
    "008eeddbd6b4383f36b57519240b05cda72ffd3c35",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUniqueStatuses"],
    "0096a4418a44c207c9e46a0d0ea49723f0f5beafc6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUniqueSizes"],
    "00ed911e85835f38bef24e726e75a3ce65626bc191",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdoptedDogs"],
    "00f408ca64ac5f31f6d33edb3fac1af6d3c4ec2139",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUniqueGenders"],
    "4000b6ce4b2fec5adc2908e05c9e975ec1809e896c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDogs"],
    "40103a556ce1c8f26a74594d1623582c17a19007fe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"],
    "401755ca459dee27048e5cb1b2a37b68009c1a4264",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDogDetailsById"],
    "401918a5b31d808cec1006f2b7ec1ed729ea95edbe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireRole"],
    "40287cd94b9cff320c8e99fba57a6d56392f11e4f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMedicalRecord"],
    "4029bb82f3e859aa7d1d5c000b17516a82e1704167",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfile"],
    "4058e90462fbf4a2c11008bad52cf288efe05a8b32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"],
    "408f99a89cce2e13a05568db8eaa3b51e83e52cdfe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDogById"],
    "40b6b27014bdc1a8fded8ff3d22be5fda4813317de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUser"],
    "40c005c7807d025045aa1b80a1ad40fa0d179df6e8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSignupIds"],
    "40cafae7f99e5ce12881510a297b1881d628c95439",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAvailableDogs"],
    "40d4e8ed5df4b988b285b21be257cde22439748fb0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllDogs"],
    "40d921d941a2041ebc5c9eff88111fc3bfe7944b41",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMedicalDocuments"],
    "40fc9b3430fa18ec08c7b11c01dade07f8ea8fad1a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDog"],
    "600766ba61c2c48d02f4c6100c955c1b192d033ed2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateMedicalRecord"],
    "601b63255f8808b6a72067724602b72547a1847b6a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteMedicalRecord"],
    "602b36ee92de0293b9d04aff8a21372f53586771ae",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadMedicalDocument"],
    "6033c3740bfb39b1d88f5bc1d4d6032abe7989c415",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDog"],
    "607872d570086e997fa69c526f8b345ef1ac31b02c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRelatedDogs"],
    "6078f096910cca9f1b04ed2bc37d4889f49c930d80",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDogMedicalBundle"],
    "6086ab75672e1233c1297a8296353e983681f5690e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadAndSetDogImage"],
    "60ceabe90fc8ed1b25017daee808de48043d157a6e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserRole"],
    "60e65605f915ad978cc1eff7d71f6bc5ae162e6026",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["captureAuditState"],
    "60e959ce08ff833f9a37b6a6da493f13faac95dfd1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteMedicalDocument"],
    "60fe0a92564fcd68752aa0323d2abaea7708f4c303",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDog"],
    "70ce82ca5043bbade27dded89d6e9542f4283b5ee4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMedicalRecords"],
    "784b13a691424b9961dce89e697a2618dca525da25",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAudit"],
    "784b3fb4320f38bcac735db6d70fae03d038f392f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logDogAudit"],
    "78ed9814381cdb54d982538f79494c008b83c58d6f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logApplicationAudit"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$adopt$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/adopt/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/dog.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/lib/actions/medical.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$dog$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/dog.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$medical$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/medical.actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__af0fec85._.js.map