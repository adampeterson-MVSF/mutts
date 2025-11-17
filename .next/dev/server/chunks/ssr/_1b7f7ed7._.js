module.exports = [
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
"[project]/lib/schemas/application.schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/schemas/application.schema.ts
__turbopack_context__.s([
    "applicationSchema",
    ()=>applicationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const applicationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    formType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppType"]),
    dogId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
    // ContactInfoSection
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "First name is required"),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Last name is required"),
    // email is on profile, not here
    applicantPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, "Address is required"),
    vetName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    vetPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // HousingInfoSection
    housingType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["HousingType"], {
        message: "Housing type is required"
    }),
    hasYard: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["YardType"], {
        message: "Yard info is required"
    }),
    yardFenced: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    otherPets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    homeEnvironmentDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Description is required"),
    // ReasonSection
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(20, "Reason must be at least 20 characters"),
    // ReferencesSection (example, adjust as needed)
    references: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Reference name is required"),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        relationship: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })).optional()
});
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
"[project]/lib/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/types.ts
/**
 * Result type for server actions - follows Railway-oriented programming pattern
 */ __turbopack_context__.s([
    "fail",
    ()=>fail,
    "makeActionResult",
    ()=>makeActionResult,
    "ok",
    ()=>ok
]);
function ok(data, message = null) {
    return {
        success: true,
        message,
        data,
        fieldErrors: undefined
    };
}
function fail(message, fieldErrors) {
    return {
        success: false,
        message,
        data: null,
        fieldErrors
    };
}
function makeActionResult(overrides) {
    return {
        success: false,
        message: null,
        data: null,
        fieldErrors: undefined,
        ...overrides
    };
}
}),
"[project]/lib/audit/withAudit.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/audit/withAudit.ts
/* __next_internal_action_entry_do_not_use__ [{"7034bdf79cc2f006fa55b1369b0944a2475ffc1154":"withAudit"},"",""] */ __turbopack_context__.s([
    "withAudit",
    ()=>withAudit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function withAudit(operation, ctx, client = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]) {
    return client.$transaction(async (tx)=>{
        const result = await operation(tx);
        await tx.auditLog.create({
            data: {
                action: ctx.action,
                actorId: ctx.actorId,
                entityType: ctx.entityType,
                entityId: ctx.entityId,
                before: ctx.before ? ctx.before : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
                after: ctx.after ? ctx.after : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull,
                note: ctx.note || 'Operation completed'
            }
        });
        return result;
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    withAudit
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(withAudit, "7034bdf79cc2f006fa55b1369b0944a2475ffc1154", null);
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
"[project]/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Formatting utilities for consistent display of missing/null values and dog data formatting
 */ __turbopack_context__.s([
    "formatDisplayDate",
    ()=>formatDisplayDate,
    "formatDogAge",
    ()=>formatDogAge,
    "formatDogGender",
    ()=>formatDogGender,
    "formatDogSize",
    ()=>formatDogSize,
    "formatDogWeight",
    ()=>formatDogWeight,
    "missing",
    ()=>missing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/dog-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
;
;
const missing = (value, fallback = 'N/A')=>value && value.trim() !== '' ? value : fallback;
const formatDogAge = (dateOfBirth)=>{
    if (!dateOfBirth) return missing(null);
    const age = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateAge"])(dateOfBirth);
    return age ? `${age} years` : missing(null);
};
const formatDogGender = (gender)=>{
    return gender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["humanizeEnum"])(gender) : missing(null);
};
const formatDogSize = (size)=>{
    return size ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["humanizeEnum"])(size) : missing(null);
};
const formatDogWeight = (weightLbs)=>{
    return weightLbs ? `${weightLbs} lbs` : missing(null);
};
const formatDisplayDate = (date)=>{
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};
}),
"[project]/lib/csv.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/csv.ts
/**
 * Sanitizes a value for CSV export, preventing Excel formula injection attacks
 * and handling null/undefined values safely.
 */ __turbopack_context__.s([
    "downloadCsv",
    ()=>downloadCsv,
    "sanitizeCell",
    ()=>sanitizeCell,
    "toCsv",
    ()=>toCsv
]);
const sanitizeCell = (value)=>{
    let s = value == null ? '' : String(value);
    // Prefix with single quote if starts with formula characters to prevent Excel injection
    if (/^[=+\-@]/.test(s)) s = `'${s}`;
    // Escape quotes by doubling them and wrap in quotes
    return `"${s.replace(/"/g, '""')}"`;
};
const toCsv = (data, headers)=>{
    const headerRow = headers || (data.length > 0 ? Object.keys(data[0]) : []);
    const csvRows = [
        headerRow.map(sanitizeCell).join(','),
        ...data.map((row)=>headerRow.map((key)=>sanitizeCell(row[key])).join(','))
    ];
    // Prepend BOM for Excel UTF-8 compatibility
    return '\uFEFF' + csvRows.join('\n') + (csvRows.length > 0 ? '\n' : '');
};
const downloadCsv = (filename, data)=>{
    const blob = new Blob([
        data
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename.endsWith('.csv') ? filename : `${filename}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Clean up the URL object
    URL.revokeObjectURL(url);
};
}),
"[project]/lib/url.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/url.ts
// URL building utilities
/**
 * Build URL query string from search parameters object
 */ __turbopack_context__.s([
    "buildQueryString",
    ()=>buildQueryString,
    "buildUrl",
    ()=>buildUrl,
    "setParam",
    ()=>setParam
]);
function buildQueryString(params) {
    const filteredParams = Object.entries(params).filter(([, value])=>value !== undefined && value !== '').reduce((acc, [key, value])=>{
        acc[key] = value;
        return acc;
    }, {});
    return new URLSearchParams(filteredParams).toString();
}
function buildUrl(baseUrl, params) {
    const queryString = buildQueryString(params);
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
const setParam = (searchParams, key, value)=>{
    if (value && value.length > 0) {
        searchParams.set(key, value);
    } else {
        searchParams.delete(key);
    }
};
}),
"[project]/lib/url-pagination.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared URL pagination utilities for consistent pagination across the application
 * Server-side utilities only - client-side hooks are in url-pagination-client.ts
 */ __turbopack_context__.s([
    "PAGINATION_PARAMS",
    ()=>PAGINATION_PARAMS,
    "buildApplicationExportQuery",
    ()=>buildApplicationExportQuery,
    "getCurrentPage",
    ()=>getCurrentPage,
    "parseApplicationSearchParams",
    ()=>parseApplicationSearchParams,
    "parseDogSearchParams",
    ()=>parseDogSearchParams,
    "parsePageParam",
    ()=>parsePageParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/url.ts [app-rsc] (ecmascript)");
;
const PAGINATION_PARAMS = {
    PAGE: "page"
};
function getCurrentPage(searchParams, defaultPage = 1) {
    const pageParam = searchParams.get(PAGINATION_PARAMS.PAGE);
    if (!pageParam) return defaultPage;
    const parsed = parseInt(pageParam, 10);
    return isNaN(parsed) || parsed < 1 ? defaultPage : parsed;
}
function parsePageParam(raw, defaultPage = 1) {
    if (!raw) return defaultPage;
    const parsed = parseInt(raw, 10);
    return isNaN(parsed) || parsed < 1 ? defaultPage : parsed;
}
function parseApplicationSearchParams(searchParams) {
    const validatedParams = {
        page: Math.max(1, parseInt(searchParams?.page || "1")),
        limit: Math.min(100, Math.max(1, parseInt(searchParams?.limit || "10"))),
        status: searchParams?.status,
        type: searchParams?.type,
        search: searchParams?.search?.trim(),
        sortBy: searchParams?.sortBy || 'createdAt',
        sortOrder: searchParams?.sortOrder === 'asc' ? 'asc' : 'desc'
    };
    // Validate search term length to prevent abuse
    if (validatedParams.search && validatedParams.search.length > 100) {
        throw new Error("Search term too long");
    }
    return validatedParams;
}
function parseDogSearchParams(searchParams) {
    const result = {};
    Object.entries(searchParams).forEach(([key, value])=>{
        if (typeof value === 'string') {
            result[key] = value;
        } else if (Array.isArray(value) && value.length > 0) {
            // Take the first value if it's an array (shouldn't happen for our use case)
            result[key] = value[0];
        }
    // Skip undefined values
    });
    return result;
}
function buildApplicationExportQuery(params, minimal) {
    const queryParams = {
        page: params.page.toString(),
        limit: params.limit.toString(),
        status: params.status,
        type: params.type,
        search: params.search,
        sortBy: params.sortBy,
        sortOrder: params.sortOrder
    };
    if (minimal) {
        queryParams.minimal = 'true';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildQueryString"])(queryParams);
}
}),
"[project]/lib/actions/application.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/actions/application.actions.ts
/* __next_internal_action_entry_do_not_use__ [{"401573de31f80211180e4bb5b293670b9e5de2cac8":"getApplicationHistory","401795e2db6a0e011a400212430725a0ada20bf1ad":"updateApplicationStatusForm","403ad5ef5391b2aca03196163ad596a4fefd38e607":"getApplicationById","40c08f5bfbcbbf157560ddb0f51d8e40995af7028d":"getAllApplications","40c2e8066b223132b8b5aa0890c563e4352dd93472":"getUserApplications","40e91884295e284975fcf38d1438572253eb5d958f":"submitApplication","60147ead8af5b60d1fc3fb8a6c8d6f3f3c34d57f06":"bulkAssignApplications","6028ec7b04b95b518845748dc7dc80ad5e3e43eaaf":"createApplication","603b922ea1c90a4064f4774c9722a3b402b978e3e1":"exportApplicationsCSV","606d62df0ce2c836357154fd3533068321cbf66dc1":"updateApplicationStatus","607bdf719ac6999081505859589fc797257716012a":"bulkUpdateApplications","70c7debef77309b094918bec2b57b1714c25488914":"bulkUpdateApplicationStatus"},"",""] */ __turbopack_context__.s([
    "bulkAssignApplications",
    ()=>bulkAssignApplications,
    "bulkUpdateApplicationStatus",
    ()=>bulkUpdateApplicationStatus,
    "bulkUpdateApplications",
    ()=>bulkUpdateApplications,
    "createApplication",
    ()=>createApplication,
    "exportApplicationsCSV",
    ()=>exportApplicationsCSV,
    "getAllApplications",
    ()=>getAllApplications,
    "getApplicationById",
    ()=>getApplicationById,
    "getApplicationHistory",
    ()=>getApplicationHistory,
    "getUserApplications",
    ()=>getUserApplications,
    "submitApplication",
    ()=>submitApplication,
    "updateApplicationStatus",
    ()=>updateApplicationStatus,
    "updateApplicationStatusForm",
    ()=>updateApplicationStatusForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zod$2f$applicationSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zod/applicationSchema.ts [app-rsc] (ecmascript)"); // Zod schema
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$application$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/application.schema.ts [app-rsc] (ecmascript)"); // New Zod schema
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2f$withAudit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit/withAudit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/csv.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$url$2d$pagination$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/url-pagination.ts [app-rsc] (ecmascript)");
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
;
;
;
;
;
const updateStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    appId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid application ID"
    }),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"], {
        message: "Invalid status"
    }),
    statusNotes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
function parseApplicationIds(formData) {
    const raw = formData.get("applicationIds");
    if (!raw || typeof raw !== "string") return [];
    return raw.split(",").map((s)=>s.trim()).filter(Boolean).map(Number).filter(Number.isFinite);
}
async function createApplication(prevState, formData) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSSRUser"])();
    if (!user) {
        // This should never happen if middleware is correct, but it's a good guard.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Authentication error. Please log in again.");
    }
    // Fetch profile data for snapshot
    const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
        where: {
            id: user.id
        }
    });
    if (!profile) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Profile not found. Please contact support.");
    }
    const rawData = Object.fromEntries(formData.entries());
    // Coerce form data for validation
    const coercedData = {
        ...rawData,
        formType: rawData.formType,
        dogId: rawData.dogId ? Number(rawData.dogId) : undefined,
        yardFenced: rawData.yardFenced ? rawData.yardFenced === 'on' : undefined
    };
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$application$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applicationSchema"].safeParse(coercedData);
    if (!result.success) {
        console.warn("Application validation failed:", result.error.flatten().fieldErrors);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Validation failed. Please check your entries.", result.error.flatten().fieldErrors);
    }
    const { data } = result;
    try {
        // Use a transaction. It's the only safe way.
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            await tx.application.create({
                data: {
                    applicationType: data.formType,
                    status: 'SUBMITTED',
                    reason: data.reason,
                    dogId: data.dogId,
                    profileId: user.id,
                    submittedAt: new Date(),
                    // --- SNAPSHOT COPY FROM PROFILE ---
                    applicantName: profile.name || 'Unknown',
                    applicantEmail: profile.email,
                    // --- FORM DATA (snapshot of what user provided at submission time) ---
                    applicantPhone: data.applicantPhone,
                    address: data.address,
                    housingType: data.housingType,
                    hasYard: data.hasYard,
                    yardFenced: data.yardFenced,
                    otherPets: data.otherPets,
                    vetName: data.vetName,
                    vetPhone: data.vetPhone,
                    homeEnvironmentDescription: data.homeEnvironmentDescription
                }
            });
            // Create references if provided
            if (data.references && data.references.length > 0) {
            // Get the application ID we just created - this is tricky in a transaction
            // We need to create the application first to get the ID
            // Let me restructure this...
            // Actually, let me get the application ID after creation
            // For now, let's create references after the transaction
            }
        });
        // Handle references outside transaction for simplicity
        if (data.references && data.references.length > 0) {
            // Get the application we just created
            const createdApplication = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findFirst({
                where: {
                    profileId: user.id,
                    applicationType: data.formType,
                    status: 'SUBMITTED'
                },
                orderBy: {
                    createdAt: 'desc'
                },
                select: {
                    id: true
                }
            });
            if (createdApplication) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reference.createMany({
                    data: data.references.map((ref)=>({
                            ...ref,
                            applicationId: createdApplication.id
                        }))
                });
            }
        }
    } catch (error) {
        console.error("Application submission error:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("A database error occurred. Please try again.");
    }
    // Revalidate admin path and redirect user
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/applications");
    const successPath = data.formType === 'ADOPTER' ? '/apply/adopt/success' : '/apply/foster/success';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(successPath);
}
async function submitApplication(formData) {
    console.log('submitApplication called with formData keys:', Array.from(formData.keys()));
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        console.log('submitApplication: user not authenticated');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Not authenticated");
    }
    console.log('submitApplication: user authenticated, proceeding with submission');
    try {
        // Parse form data
        const formType = formData.get('formType');
        const dogId = formData.get('dogId') ? parseInt(formData.get('dogId')) : undefined;
        // Optional: applications can target a specific dog or be general interest applications
        let validatedDogId;
        if (dogId !== undefined && dogId !== null) {
            if (isNaN(dogId) || dogId <= 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Invalid dog ID provided.", {
                    dogId: [
                        "Must be a valid positive number"
                    ]
                });
            }
            validatedDogId = dogId;
        }
        // Handle references - parse nested array format from form data
        const parsedReferences = [];
        let index = 0;
        while(true){
            const name = formData.get(`references[${index}][name]`);
            const phone = formData.get(`references[${index}][phone]`);
            const relationship = formData.get(`references[${index}][relationship]`);
            if (!name) break; // No more references
            parsedReferences.push({
                name,
                phone: phone || '',
                relationship: relationship || ''
            });
            index++;
        }
        // Extract form fields - separate profile and application data
        const profileData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email')
        };
        const applicantData = {
            applicantPhone: formData.get('applicantPhone') || undefined,
            address: formData.get('address'),
            housingType: formData.get('housingType') ?? 'OTHER',
            hasYard: formData.get('hasYard') ?? 'NO',
            yardFenced: formData.get('yardFenced') === 'on',
            otherPets: formData.get('otherPets') || undefined,
            vetName: formData.get('vetName') || undefined,
            vetPhone: formData.get('vetPhone') || undefined,
            homeEnvironmentDescription: formData.get('homeEnvironmentDescription')
        };
        const applicationData = {
            reason: formData.get('reason'),
            dogId: validatedDogId,
            references: parsedReferences,
            ...applicantData
        };
        // Validate profile data (only name and email)
        const validatedProfileData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zod$2f$applicationSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileSchema"].safeParse(profileData);
        if (!validatedProfileData.success) {
            const fieldErrors = validatedProfileData.error.flatten().fieldErrors;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Validation failed.", fieldErrors);
        }
        // Validate application data (includes applicant fields)
        const validatedApplicationData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zod$2f$applicationSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applicationSchema"].safeParse(applicationData);
        if (!validatedApplicationData.success) {
            const fieldErrors = validatedApplicationData.error.flatten().fieldErrors;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Validation failed.", fieldErrors);
        }
        // 1. Separate references from the application data.
        const { references: validatedReferences, ...applicationFields } = validatedApplicationData.data;
        // 2. Use a transaction to ensure data integrity.
        let app;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // 3. Upsert the user's profile with name and email
            await tx.profile.upsert({
                where: {
                    id: user.id
                },
                update: {
                    name: `${validatedProfileData.data.firstName} ${validatedProfileData.data.lastName}`,
                    email: validatedProfileData.data.email
                },
                create: {
                    id: user.id,
                    name: `${validatedProfileData.data.firstName} ${validatedProfileData.data.lastName}`,
                    email: validatedProfileData.data.email,
                    role: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].VOLUNTEER
                }
            });
            // 4. Create the application with application-specific data only
            const applicationData = {
                applicationType: formType,
                profileId: user.id,
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].SUBMITTED,
                submittedAt: new Date(),
                reason: applicationFields.reason,
                applicantName: `${validatedProfileData.data.firstName} ${validatedProfileData.data.lastName}`,
                applicantEmail: validatedProfileData.data.email
            };
            // Add optional fields if they exist
            if (applicationFields.dogId !== undefined) applicationData.dog = {
                connect: {
                    id: applicationFields.dogId
                }
            };
            if (applicationFields.applicantPhone !== undefined) applicationData.applicantPhone = applicationFields.applicantPhone;
            if (applicationFields.address !== undefined) applicationData.address = applicationFields.address;
            if (applicationFields.housingType !== undefined) applicationData.housingType = applicationFields.housingType;
            if (applicationFields.hasYard !== undefined) applicationData.hasYard = applicationFields.hasYard;
            if (applicationFields.yardFenced !== undefined) applicationData.yardFenced = applicationFields.yardFenced;
            if (applicationFields.otherPets !== undefined) applicationData.otherPets = applicationFields.otherPets;
            if (applicationFields.vetName !== undefined) applicationData.vetName = applicationFields.vetName;
            if (applicationFields.vetPhone !== undefined) applicationData.vetPhone = applicationFields.vetPhone;
            if (applicationFields.homeEnvironmentDescription !== undefined) applicationData.homeEnvironmentDescription = applicationFields.homeEnvironmentDescription;
            app = await tx.application.create({
                data: applicationData
            });
            // 5. If references exist, create them and link them.
            if (validatedReferences && validatedReferences.length > 0) {
                await tx.reference.createMany({
                    data: validatedReferences.map((ref)=>({
                            ...ref,
                            applicationId: app.id
                        }))
                });
            }
        });
        // 6. Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/applications");
        if (!app) {
            throw new Error("Failed to create application");
        }
        console.log('submitApplication: application created successfully with ID:', app.id);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])({
            applicationId: app.id
        }, 'Application submitted successfully!');
    } catch (error) {
        console.error("Application submission failed:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])(error instanceof Error ? error.message : "Failed to submit application.");
    }
}
async function updateApplicationStatus(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserId"])();
        const parsed = updateStatusSchema.safeParse(Object.fromEntries(formData.entries()));
        if (!parsed.success) {
            const fieldErrors = parsed.error.flatten().fieldErrors;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Validation failed.", fieldErrors);
        }
        const { appId, status, statusNotes } = parsed.data;
        // Get current application to validate status transition
        const currentApplication = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findUnique({
            where: {
                id: appId
            },
            select: {
                status: true,
                applicationType: true
            }
        });
        if (!currentApplication) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Application not found.");
        }
        // Validate that the status transition is allowed (server-side enforcement)
        const allowedStatuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllowedStatuses"])(currentApplication.applicationType, currentApplication.status);
        if (!allowedStatuses.includes(status)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Invalid status transition for this application type.");
        }
        // Business rule: notes required for APPROVED/REJECTED
        if ((status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].APPROVED || status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].REJECTED) && (!statusNotes || statusNotes.trim().length === 0)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Status notes are required when moving to approved or rejected status.", {
                statusNotes: [
                    "Required for terminal status changes"
                ]
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2f$withAudit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAudit"])(async (tx)=>{
            const application = await tx.application.update({
                where: {
                    id: appId
                },
                data: {
                    status,
                    statusNotes: statusNotes || null
                },
                select: {
                    applicationType: true,
                    profileId: true
                }
            });
            // Write to append-only ApplicationAudit table
            await tx.applicationAudit.create({
                data: {
                    applicationId: appId,
                    actorId: userId,
                    oldStatus: currentApplication.status,
                    newStatus: status,
                    note: statusNotes || `Status changed from ${currentApplication.status} to ${status}`
                }
            });
            if (application.applicationType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppType"].FOSTER && status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].APPROVED) {
                await tx.fosterProfile.upsert({
                    where: {
                        profileId: application.profileId
                    },
                    update: {},
                    create: {
                        profileId: application.profileId
                    }
                });
            }
            return application;
        }, {
            actorId: userId,
            action: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AuditAction"].APPLICATION_STATUS_CHANGE,
            entityType: 'application',
            entityId: appId,
            note: `Status changed from ${currentApplication.status} to ${status}`
        }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/applications/${appId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/applications");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(null, "Application status updated successfully!");
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])(error instanceof Error ? error.message : "Failed to update status");
    }
}
async function getApplicationById(id) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive()
    }).safeParse({
        id
    });
    if (!parsed.success) {
        throw new Error("Invalid application ID");
    }
    const application = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            applicationType: true,
            status: true,
            statusNotes: true,
            profileId: true,
            applicantName: true,
            applicantEmail: true,
            applicantPhone: true,
            address: true,
            housingType: true,
            hasYard: true,
            yardFenced: true,
            otherPets: true,
            vetName: true,
            vetPhone: true,
            homeEnvironmentDescription: true,
            reason: true,
            references: true,
            dog: {
                select: {
                    id: true,
                    name: true,
                    status: true,
                    bioPublic: true
                }
            }
        }
    });
    if (!application) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    // 2. DELETE ALL JSON.parse logic. It's not needed.
    // const formData = JSON.parse(application.formDataJson);
    // return { ...application, formData };
    // Decrypt PII fields from profile before returning
    return {
        ...application,
        housingTypeLabel: application.housingType || "Not specified",
        hasYardLabel: application.hasYard === "YES" ? "Yes" : application.hasYard === "NO" ? "No" : application.hasYard === "SHARED" ? "Shared" : "Not specified",
        yardFencedLabel: application.yardFenced === true ? "Yes" : application.yardFenced === false ? "No" : "Not specified",
        otherPetsLabel: application.otherPets || "Not specified",
        homeEnvironmentDescriptionLabel: application.homeEnvironmentDescription || "Not specified"
    };
}
async function getAllApplications(searchParams) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    // Parse and validate search parameters using shared helper
    const validatedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$url$2d$pagination$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseApplicationSearchParams"])(searchParams || {});
    // Validate status filter
    if (validatedParams.status && validatedParams.status !== "all") {
        if (!Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"]).includes(validatedParams.status)) {
            throw new Error(`Invalid status filter: ${validatedParams.status}`);
        }
    }
    // Validate type filter
    if (validatedParams.type && validatedParams.type !== "all") {
        if (!Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppType"]).includes(validatedParams.type)) {
            throw new Error(`Invalid type filter: ${validatedParams.type}`);
        }
    }
    const offset = (validatedParams.page - 1) * validatedParams.limit;
    // Build where clause for filtering
    const where = {};
    if (validatedParams.status && validatedParams.status !== "all") {
        where.status = validatedParams.status;
    }
    if (validatedParams.type && validatedParams.type !== "all") {
        where.applicationType = validatedParams.type;
    }
    if (validatedParams.search) {
        where.OR = [
            {
                applicantName: {
                    contains: validatedParams.search,
                    mode: "insensitive"
                }
            },
            {
                applicantEmail: {
                    contains: validatedParams.search,
                    mode: "insensitive"
                }
            }
        ];
    }
    const [applications, totalCount] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findMany({
            where,
            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                applicationType: true,
                status: true,
                applicantName: true,
                applicantEmail: true,
                reason: true,
                dog: {
                    select: {
                        id: true,
                        name: true,
                        status: true
                    }
                }
            },
            orderBy: {
                [validatedParams.sortBy]: validatedParams.sortOrder
            },
            skip: offset,
            take: validatedParams.limit
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.count({
            where
        })
    ]);
    const totalPages = Math.ceil(totalCount / validatedParams.limit);
    return {
        applications: applications,
        pagination: {
            currentPage: validatedParams.page,
            totalPages,
            totalCount,
            hasNextPage: validatedParams.page < totalPages,
            hasPreviousPage: validatedParams.page > 1
        }
    };
}
async function getUserApplications(profileId) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        profileId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid()
    }).safeParse({
        profileId
    });
    if (!parsed.success) {
        throw new Error("Invalid profile ID");
    }
    const applications = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findMany({
        where: {
            profileId
        },
        include: {
            references: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return applications;
}
async function updateApplicationStatusForm(formData) {
    return updateApplicationStatus((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(null), formData);
}
const bulkUpdateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    appIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid application ID"
    })),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"], {
        message: "Invalid status"
    }),
    statusNotes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
async function bulkUpdateApplicationStatus(appIds, status, statusNotes) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const parsed = bulkUpdateSchema.safeParse({
            appIds,
            status,
            statusNotes
        });
        if (!parsed.success) {
            const fieldErrors = parsed.error.flatten().fieldErrors;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Validation failed.", fieldErrors);
        }
        // Business rule: notes required for APPROVED/REJECTED/WITHDRAWN
        const requiresNotes = [
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].APPROVED,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].REJECTED,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].WITHDRAWN
        ];
        if (requiresNotes.includes(status) && (!statusNotes || statusNotes.trim().length === 0)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Status notes are required when moving to approved, rejected, or withdrawn status.", {
                statusNotes: [
                    "Required for terminal status changes"
                ]
            });
        }
        // Get current user for authentication
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user: updater } } = await supabase.auth.getUser();
        if (!updater) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Authentication required.");
        }
        // Get updater's role from database
        const updaterProfile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
            where: {
                id: updater.id
            },
            select: {
                role: true
            }
        });
        if (!updaterProfile || updaterProfile.role !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN && updaterProfile.role !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Insufficient permissions.");
        }
        // Get current applications to validate status transitions
        const currentApplications = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findMany({
            where: {
                id: {
                    in: appIds
                }
            },
            select: {
                id: true,
                status: true,
                applicationType: true
            }
        });
        const appMap = new Map(currentApplications.map((app)=>[
                app.id,
                app
            ]));
        const successfulIds = [];
        const failed = [];
        // Validate each transition and collect failures
        for (const appId of appIds){
            const currentApp = appMap.get(appId);
            if (!currentApp) {
                failed.push({
                    id: appId,
                    reason: "Application not found"
                });
                continue;
            }
            // Validate that the status transition is allowed
            const allowedStatuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllowedStatuses"])(currentApp.applicationType, currentApp.status);
            if (!allowedStatuses.includes(status)) {
                failed.push({
                    id: appId,
                    reason: `Invalid status transition from ${currentApp.status} for ${currentApp.applicationType} application`
                });
                continue;
            }
            successfulIds.push(appId);
        }
        // Update successful applications and write audit records
        if (successfulIds.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                // Update applications
                await tx.application.updateMany({
                    where: {
                        id: {
                            in: successfulIds
                        }
                    },
                    data: {
                        status,
                        statusNotes: statusNotes || null
                    }
                });
                // Write to append-only ApplicationAudit table for each updated application
                await tx.applicationAudit.createMany({
                    data: successfulIds.map((appId)=>{
                        const currentApp = appMap.get(appId);
                        return {
                            applicationId: appId,
                            actorId: updater.id,
                            oldStatus: currentApp.status,
                            newStatus: status,
                            note: statusNotes || `Bulk status change from ${currentApp.status} to ${status}`
                        };
                    })
                });
            });
            // Revalidate on success
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/applications");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])({
            ok: successfulIds,
            failed
        }, `Updated ${successfulIds.length} application${successfulIds.length !== 1 ? 's' : ''} successfully${failed.length > 0 ? `, ${failed.length} failed` : ''}.`);
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])(error instanceof Error ? error.message : "An unexpected error occurred.");
    }
}
async function getApplicationHistory(applicationId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])([
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF
    ]);
    const history = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].applicationAudit.findMany({
        where: {
            applicationId
        },
        select: {
            id: true,
            applicationId: true,
            oldStatus: true,
            newStatus: true,
            note: true,
            createdAt: true,
            actor: {
                select: {
                    name: true,
                    email: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return history;
}
async function bulkAssignApplications(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])([
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF
        ]);
        const applicationIds = formData.getAll("applicationIds").map((id)=>parseInt(id));
        const staffId = formData.get("staffId");
        if (!staffId || applicationIds.length === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Staff member and applications are required");
        }
        // Verify staff user exists
        const staffUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
            where: {
                id: staffId
            },
            select: {
                id: true,
                role: true
            }
        });
        if (!staffUser || staffUser.role !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF && staffUser.role !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Invalid staff member selected");
        }
        // Perform bulk update
        const updateResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.updateMany({
            where: {
                id: {
                    in: applicationIds
                }
            },
            data: {
                assignedToUserId: staffId,
                updatedAt: new Date()
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/applications");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(null, `Successfully assigned ${updateResult.count} application(s)`);
    } catch (error) {
        console.error("Bulk assign error:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])(error instanceof Error ? error.message : "Failed to assign applications");
    }
}
async function bulkUpdateApplications(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])([
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF
        ]);
        const applicationIds = parseApplicationIds(formData);
        const status = formData.get("status");
        const statusNotes = formData.get("statusNotes");
        if (applicationIds.length === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("No applications selected");
        }
        if (!status) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Status is required");
        }
        // Business rule: notes required for APPROVED/REJECTED/WITHDRAWN
        const requiresNotes = [
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].APPROVED,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].REJECTED,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AppStatus"].WITHDRAWN
        ];
        if (requiresNotes.includes(status) && (!statusNotes || statusNotes.trim().length === 0)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Status notes are required for terminal status changes");
        }
        const result = await bulkUpdateApplicationStatus(applicationIds, status, statusNotes?.trim() || undefined);
        if (result.success) {
            const successCount = result.data?.ok.length || 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/applications");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])({
                failed: result.data?.failed
            }, `Successfully updated ${successCount} application(s)`);
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])(result.message || "Bulk update failed");
        }
    } catch (error) {
        console.error("Bulk update error:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])(error instanceof Error ? error.message : "Failed to update applications");
    }
}
async function exportApplicationsCSV(searchParams, minimal) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const filters = {
            ...searchParams
        };
        delete filters.minimal; // Remove minimal param from filters
        const appData = await getAllApplications(filters);
        const applications = appData.applications;
        // Guard against exporting insane data sets
        const MAX_EXPORT_ROWS = 10000;
        if (applications.length > MAX_EXPORT_ROWS) {
            return {
                success: false,
                message: `Export too large: ${applications.length} applications found, maximum allowed is ${MAX_EXPORT_ROWS}. Please apply filters to reduce the dataset size.`
            };
        }
        // Generate CSV data
        let csvData;
        let csvHeaders;
        if (minimal) {
            // Minimal export: no PII (phone/address)
            csvData = applications.map((app)=>({
                    id: app.id,
                    submitted_date: app.createdAt.toISOString().split('T')[0],
                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["missing"])(app.applicantName, 'Unknown'),
                    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["missing"])(app.applicantEmail, 'Unknown'),
                    type: app.applicationType,
                    status: app.status,
                    dog_name: app.dog?.name || '',
                    reason: app.reason
                }));
            csvHeaders = [
                'ID',
                'Submitted Date',
                'Name',
                'Email',
                'Type',
                'Status',
                'Dog Name',
                'Reason'
            ];
        } else {
            // Full export with available fields
            csvData = applications.map((app)=>({
                    id: app.id,
                    submitted_date: app.createdAt.toISOString().split('T')[0],
                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["missing"])(app.applicantName, 'Unknown'),
                    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["missing"])(app.applicantEmail, 'Unknown'),
                    type: app.applicationType,
                    status: app.status,
                    dog_name: app.dog?.name || '',
                    reason: app.reason
                }));
            csvHeaders = [
                'ID',
                'Submitted Date',
                'Name',
                'Email',
                'Type',
                'Status',
                'Dog Name',
                'Reason'
            ];
        }
        const csvWithBOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toCsv"])(csvData, csvHeaders);
        const filename = `applications-${new Date().toISOString().split('T')[0]}${minimal ? '-minimal' : ''}.csv`;
        return {
            success: true,
            csvData: csvWithBOM,
            filename
        };
    } catch (error) {
        console.error('CSV export error:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Failed to generate export'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createApplication,
    submitApplication,
    updateApplicationStatus,
    getApplicationById,
    getAllApplications,
    getUserApplications,
    updateApplicationStatusForm,
    bulkUpdateApplicationStatus,
    getApplicationHistory,
    bulkAssignApplications,
    bulkUpdateApplications,
    exportApplicationsCSV
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createApplication, "6028ec7b04b95b518845748dc7dc80ad5e3e43eaaf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitApplication, "40e91884295e284975fcf38d1438572253eb5d958f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateApplicationStatus, "606d62df0ce2c836357154fd3533068321cbf66dc1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getApplicationById, "403ad5ef5391b2aca03196163ad596a4fefd38e607", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllApplications, "40c08f5bfbcbbf157560ddb0f51d8e40995af7028d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserApplications, "40c2e8066b223132b8b5aa0890c563e4352dd93472", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateApplicationStatusForm, "401795e2db6a0e011a400212430725a0ada20bf1ad", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkUpdateApplicationStatus, "70c7debef77309b094918bec2b57b1714c25488914", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getApplicationHistory, "401573de31f80211180e4bb5b293670b9e5de2cac8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkAssignApplications, "60147ead8af5b60d1fc3fb8a6c8d6f3f3c34d57f06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkUpdateApplications, "607bdf719ac6999081505859589fc797257716012a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(exportApplicationsCSV, "603b922ea1c90a4064f4774c9722a3b402b978e3e1", null);
}),
"[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/application.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/audit/withAudit.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/application.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2f$withAudit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit/withAudit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/application.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/audit/withAudit.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000856392be4f7d53ed3e3e3326c2c888c8e2950e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSSRUser"],
    "0033a4aab8087bee60fa3957be6e412e7a28e6b142",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllStaffUsers"],
    "0040745eebb8809dbc98afe0103726da3438000754",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllUsers"],
    "006095df662d1f5454db62806f7d257b4264768061",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUserRole"],
    "00842318b15abb8899f8a126d649c3887e25bc26dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserId"],
    "40103a556ce1c8f26a74594d1623582c17a19007fe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"],
    "401573de31f80211180e4bb5b293670b9e5de2cac8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getApplicationHistory"],
    "401795e2db6a0e011a400212430725a0ada20bf1ad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateApplicationStatusForm"],
    "401918a5b31d808cec1006f2b7ec1ed729ea95edbe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireRole"],
    "4029bb82f3e859aa7d1d5c000b17516a82e1704167",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfile"],
    "403ad5ef5391b2aca03196163ad596a4fefd38e607",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getApplicationById"],
    "4058e90462fbf4a2c11008bad52cf288efe05a8b32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"],
    "40b6b27014bdc1a8fded8ff3d22be5fda4813317de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUser"],
    "40c005c7807d025045aa1b80a1ad40fa0d179df6e8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSignupIds"],
    "40c08f5bfbcbbf157560ddb0f51d8e40995af7028d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllApplications"],
    "40c2e8066b223132b8b5aa0890c563e4352dd93472",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserApplications"],
    "40e91884295e284975fcf38d1438572253eb5d958f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitApplication"],
    "60147ead8af5b60d1fc3fb8a6c8d6f3f3c34d57f06",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bulkAssignApplications"],
    "6028ec7b04b95b518845748dc7dc80ad5e3e43eaaf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createApplication"],
    "603b922ea1c90a4064f4774c9722a3b402b978e3e1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exportApplicationsCSV"],
    "606d62df0ce2c836357154fd3533068321cbf66dc1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateApplicationStatus"],
    "607bdf719ac6999081505859589fc797257716012a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bulkUpdateApplications"],
    "60ceabe90fc8ed1b25017daee808de48043d157a6e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserRole"],
    "60e65605f915ad978cc1eff7d71f6bc5ae162e6026",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["captureAuditState"],
    "7034bdf79cc2f006fa55b1369b0944a2475ffc1154",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2f$withAudit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAudit"],
    "70c7debef77309b094918bec2b57b1714c25488914",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bulkUpdateApplicationStatus"],
    "784b13a691424b9961dce89e697a2618dca525da25",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAudit"],
    "784b3fb4320f38bcac735db6d70fae03d038f392f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logDogAudit"],
    "78ed9814381cdb54d982538f79494c008b83c58d6f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logApplicationAudit"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$audit$2f$withAudit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/application.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/lib/audit/withAudit.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$application$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/application.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2f$withAudit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit/withAudit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$audit$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/audit.actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_1b7f7ed7._.js.map