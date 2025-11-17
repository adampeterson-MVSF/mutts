module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/test-endpoints.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blockAs404",
    ()=>blockAs404,
    "isAllowedTestRequest",
    ()=>isAllowedTestRequest
]);
const TEST_SECRET = process.env.TEST_SECRET || "test-secret-default";
// Check if test affordances are enabled (matches middleware logic)
const isTrue = (v)=>v === "1" || v?.toLowerCase() === "true";
function testAffordancesEnabled() {
    // Allow only in test environment WHEN explicitly enabled.
    const enabled = isTrue(process.env.EXPOSE_TEST_API) || isTrue(process.env.ALLOW_TEST_ENDPOINTS);
    const isTestEnv = ("TURBOPACK compile-time value", "development") === "test";
    return enabled && isTestEnv;
}
function isAllowedTestRequest(req) {
    const enabled = testAffordancesEnabled();
    const secret = req.headers.get("x-test-secret") || "";
    return enabled && secret === TEST_SECRET;
}
function blockAs404() {
    return new Response("Not Found", {
        status: 404
    });
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/env-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serverEnv",
    ()=>serverEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const ServerEnvSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "development",
        "test",
        "production"
    ]),
    ALLOW_TEST_ENDPOINTS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Database
    DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    // Supabase
    SUPABASE_SERVICE_ROLE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    // Optional monitoring
    SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    // Test configuration
    TEST_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // PII encryption
    FIELD_ENCRYPTION_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "FIELD_ENCRYPTION_KEY is required for PII encryption"),
    FIELD_ENCRYPTION_SALT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).superRefine((env, ctx)=>{
    // Validate FIELD_ENCRYPTION_KEY format (should be base64-encoded 32 bytes)
    if (env.FIELD_ENCRYPTION_KEY) {
        try {
            const key = Buffer.from(env.FIELD_ENCRYPTION_KEY, 'base64');
            if (key.length !== 32) {
                ctx.addIssue({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                    message: "FIELD_ENCRYPTION_KEY must be a base64-encoded 32-byte key"
                });
            }
        } catch  {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "FIELD_ENCRYPTION_KEY must be valid base64"
            });
        }
    }
    // Test affordances can only be enabled in test environment OR when explicitly allowed
    // This allows test endpoints to work during E2E testing even if NODE_ENV != test
    if (env.NODE_ENV !== "test" && env.ALLOW_TEST_ENDPOINTS !== "1") {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            message: "Test affordances cannot be enabled outside test environment unless ALLOW_TEST_ENDPOINTS=1"
        });
    }
    // Test secret should only be set in development/test or when test affordances are enabled
    if (env.NODE_ENV === "production" && env.TEST_SECRET && env.ALLOW_TEST_ENDPOINTS !== "1") {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            message: "TEST_SECRET should not be set in production unless ALLOW_TEST_ENDPOINTS=1"
        });
    }
});
const serverEnv = ServerEnvSchema.parse({
    ...process.env,
    NODE_ENV: ("TURBOPACK compile-time value", "development") || "development"
});
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env-server.ts [app-route] (ecmascript)");
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
            url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serverEnv"].DATABASE_URL}?connection_limit=5&pool_timeout=20`
        }
    }
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
;
}),
"[project]/lib/utils/dog-utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/api/test-api/health/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$endpoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/test-endpoints.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/dog-utils.ts [app-route] (ecmascript)");
;
;
;
;
async function GET(request) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$endpoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAllowedTestRequest"])(request)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$endpoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["blockAs404"])();
    try {
        // Get comprehensive dataset statistics
        const [dogs, profiles, shifts, shiftSignups] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].dog.findMany({
                select: {
                    status: true,
                    primaryPhotoUrl: true,
                    dateOfBirth: true,
                    size: true,
                    specialNeeds: true,
                    breed: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.findMany({
                select: {
                    role: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].shift.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].volunteerShiftSignup.count()
        ]);
        // Calculate statistics matching seed summary format
        // Compute derived values from source fields
        const dogStats = {
            total: dogs.length,
            withPhotos: dogs.filter((d)=>d.primaryPhotoUrl && !d.primaryPhotoUrl.includes('placeholder')).length,
            seniors: dogs.filter((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateAge"])(d.dateOfBirth) !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateAge"])(d.dateOfBirth) >= 8).length,
            age: dogs.reduce((acc, dog)=>{
                const age = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateAge"])(dog.dateOfBirth);
                if (age !== null) {
                    let bucket;
                    if (age < 1) bucket = 'puppy'; // Less than 1 year
                    else if (age < 8) bucket = 'adult'; // 1-7 years
                    else bucket = 'senior'; // 8+ years
                    acc[bucket] = (acc[bucket] || 0) + 1;
                }
                return acc;
            }, {}),
            size: dogs.reduce((acc, dog)=>{
                if (dog.size) {
                    // Map DogSize enum to bucket names
                    let bucket;
                    if (dog.size === 'TOY' || dog.size === 'SMALL') bucket = 'small';
                    else if (dog.size === 'MEDIUM') bucket = 'medium';
                    else if (dog.size === 'LARGE') bucket = 'large';
                    else bucket = dog.size.toLowerCase();
                    acc[bucket] = (acc[bucket] || 0) + 1;
                }
                return acc;
            }, {}),
            breeds: dogs.reduce((acc, dog)=>{
                if (dog.breed) {
                    acc[dog.breed] = (acc[dog.breed] || 0) + 1;
                }
                return acc;
            }, {}),
            specialNeeds: dogs.filter((d)=>d.specialNeeds).length
        };
        const profileStats = {
            total: profiles.length,
            byRole: profiles.reduce((acc, profile)=>{
                acc[profile.role] = (acc[profile.role] || 0) + 1;
                return acc;
            }, {})
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            dataset: 'realistic',
            summary: {
                dogs: {
                    total: dogStats.total,
                    withPhotos: dogStats.withPhotos,
                    age: dogStats.age,
                    size: dogStats.size,
                    breeds: dogStats.breeds,
                    specialNeeds: dogStats.specialNeeds
                },
                volunteers: {
                    total: profileStats.total,
                    staff: profileStats.byRole['STAFF'] || 0,
                    admins: profileStats.byRole['ADMIN'] || 0
                },
                shifts: {
                    total: shifts,
                    signups: shiftSignups
                }
            }
        });
    } catch (error) {
        console.error('Health check failed:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: 'Database health check failed'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ca6e45bc._.js.map