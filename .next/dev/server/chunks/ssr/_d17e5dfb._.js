module.exports = [
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
"[project]/lib/actions/event.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00acdca7fb68ee6614618c11928c9b31db6c22d880":"getEvents","601fed57f579c6051f24aa1d87e25a3c8f3fc34a30":"createEvent","602f4b212fdb50695074a2363f7ff99d375f88de9e":"updateEvent","604ff361909285a51438de8d36a78c6c015531dfab":"duplicateEvent","60ebfe91a5f66e9d407d12c7f96aabadd0dfa61296":"deleteEvent"},"",""] */ __turbopack_context__.s([
    "createEvent",
    ()=>createEvent,
    "deleteEvent",
    ()=>deleteEvent,
    "duplicateEvent",
    ()=>duplicateEvent,
    "getEvents",
    ()=>getEvents,
    "updateEvent",
    ()=>updateEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/schemas.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const deleteEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    eventId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid event ID"
    })
});
const duplicateEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    eventId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive({
        message: "Invalid event ID"
    }),
    fail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().optional()
});
const revalidateEventPaths = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/events");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/events");
};
async function createEvent(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const title = formData.get('title');
        const startTime = formData.get('startTime');
        const endTime = formData.get('endTime');
        const description = formData.get('description');
        if (!title || !startTime || !endTime) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: {
                    title: !title ? [
                        'Title is required'
                    ] : [],
                    startTime: !startTime ? [
                        'Start time is required'
                    ] : [],
                    endTime: !endTime ? [
                        'End time is required'
                    ] : []
                },
                data: null
            };
        }
        // validate times server-side
        const start = new Date(startTime);
        const end = new Date(endTime);
        if (!(start instanceof Date) || !(end instanceof Date) || Number.isNaN(+start) || Number.isNaN(+end)) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: {
                    startTime: [
                        'Invalid date/time'
                    ],
                    endTime: [
                        'Invalid date/time'
                    ]
                },
                data: null
            };
        }
        if (end <= start) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: {
                    endTime: [
                        'End time must be after start time'
                    ]
                },
                data: null
            };
        }
        const ev = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.create({
            data: {
                title,
                startTime: start,
                endTime: end,
                description: description || null
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/events');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/events'); // public list must reflect immediately
        return {
            success: true,
            message: "Event created successfully.",
            fieldErrors: undefined,
            data: {
                id: ev.id
            }
        };
    } catch  {
        return {
            success: false,
            message: "Failed to create event.",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function getEvents() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.findMany({
        orderBy: {
            startTime: "asc"
        }
    });
}
async function updateEvent(_prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const idParsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shiftIdSchema"].safeParse({
            shiftId: formData.get("id")
        });
        if (!idParsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: idParsed.error.flatten().fieldErrors,
                data: null
            };
        }
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eventFormSchema"].safeParse({
            title: formData.get("title"),
            description: formData.get("description"),
            startTime: formData.get("startTime"),
            endTime: formData.get("endTime"),
            location: formData.get("location"),
            capacity: formData.get("capacity")
        });
        if (!parsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
                data: null
            };
        }
        const data = parsed.data;
        const startTime = new Date(data.startTime);
        const endTime = new Date(data.endTime);
        // Server-side validation: startTime must be before endTime
        if (startTime >= endTime) {
            return {
                success: false,
                message: "Start time must be before end time.",
                fieldErrors: {
                    startTime: [
                        "Start time must be before end time"
                    ]
                },
                data: null
            };
        }
        // Server-side validation: forbid past start times
        if (startTime <= new Date()) {
            return {
                success: false,
                message: "Cannot update events to start in the past.",
                fieldErrors: {
                    startTime: [
                        "Start time must be in the future"
                    ]
                },
                data: null
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.update({
            where: {
                id: idParsed.data.shiftId
            },
            data: {
                title: data.title,
                description: data.description,
                startTime,
                endTime: new Date(data.endTime),
                location: data.location,
                capacity: data.capacity
            }
        });
        revalidateEventPaths();
        return {
            success: true,
            message: "Event updated successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to update event",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function duplicateEvent(_prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const parsed = duplicateEventSchema.safeParse({
            eventId: formData.get("eventId"),
            fail: formData.get("fail")
        });
        if (!parsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
                data: null
            };
        }
        // Check if we should inject a failure for testing
        if (parsed.data.fail === '1') {
            return {
                success: false,
                message: "Simulated failure for testing optimistic rollback",
                fieldErrors: undefined,
                data: null
            };
        }
        const originalEvent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.findUnique({
            where: {
                id: parsed.data.eventId
            }
        });
        if (!originalEvent) {
            return {
                success: false,
                message: "Event not found.",
                fieldErrors: {
                    eventId: [
                        "Event not found"
                    ]
                },
                data: null
            };
        }
        // Create duplicate with "Copy of" prefix
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.create({
            data: {
                title: `Copy of ${originalEvent.title}`,
                description: originalEvent.description,
                startTime: originalEvent.startTime,
                endTime: originalEvent.endTime,
                location: originalEvent.location,
                capacity: originalEvent.capacity
            }
        });
        revalidateEventPaths();
        return {
            success: true,
            message: "Event duplicated successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to duplicate event",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function deleteEvent(_prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const parsed = deleteEventSchema.safeParse({
            eventId: formData.get("eventId")
        });
        if (!parsed.success) {
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors: parsed.error.flatten().fieldErrors,
                data: null
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].event.delete({
            where: {
                id: parsed.data.eventId
            }
        });
        revalidateEventPaths();
        return {
            success: true,
            message: "Event deleted successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to delete event",
            fieldErrors: undefined,
            data: null
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createEvent,
    getEvents,
    updateEvent,
    duplicateEvent,
    deleteEvent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEvent, "601fed57f579c6051f24aa1d87e25a3c8f3fc34a30", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEvents, "00acdca7fb68ee6614618c11928c9b31db6c22d880", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEvent, "602f4b212fdb50695074a2363f7ff99d375f88de9e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(duplicateEvent, "604ff361909285a51438de8d36a78c6c015531dfab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEvent, "60ebfe91a5f66e9d407d12c7f96aabadd0dfa61296", null);
}),
"[project]/.next-internal/server/app/admin/events/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/event.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$event$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/event.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/admin/events/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/event.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
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
    "00acdca7fb68ee6614618c11928c9b31db6c22d880",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$event$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEvents"],
    "40103a556ce1c8f26a74594d1623582c17a19007fe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"],
    "401918a5b31d808cec1006f2b7ec1ed729ea95edbe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireRole"],
    "4029bb82f3e859aa7d1d5c000b17516a82e1704167",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfile"],
    "4058e90462fbf4a2c11008bad52cf288efe05a8b32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"],
    "40b6b27014bdc1a8fded8ff3d22be5fda4813317de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUser"],
    "40c005c7807d025045aa1b80a1ad40fa0d179df6e8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSignupIds"],
    "601fed57f579c6051f24aa1d87e25a3c8f3fc34a30",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$event$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEvent"],
    "602f4b212fdb50695074a2363f7ff99d375f88de9e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$event$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEvent"],
    "604ff361909285a51438de8d36a78c6c015531dfab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$event$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["duplicateEvent"],
    "60ceabe90fc8ed1b25017daee808de48043d157a6e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserRole"],
    "60ebfe91a5f66e9d407d12c7f96aabadd0dfa61296",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$event$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEvent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$events$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$event$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/events/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/event.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$event$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/event.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_d17e5dfb._.js.map