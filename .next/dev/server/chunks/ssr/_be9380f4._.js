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
"[project]/lib/actions/notifications.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/actions/notifications.actions.ts
/* __next_internal_action_entry_do_not_use__ [{"40fe62832175461942e43387cc929cb9c8857cd351":"sendFosterInvite"},"",""] */ __turbopack_context__.s([
    "sendFosterInvite",
    ()=>sendFosterInvite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function sendFosterInvite(profileId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        if (!profileId || typeof profileId !== 'string') {
            return {
                success: false,
                message: 'Profile not found',
                fieldErrors: undefined,
                data: null
            };
        }
        const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
            where: {
                id: profileId
            }
        });
        if (!profile) {
            return {
                success: false,
                message: 'Profile not found',
                fieldErrors: undefined,
                data: null
            };
        }
        // Stub "send invite"
        console.log('Foster invite sent', {
            profileId
        });
        return {
            success: true,
            message: `Foster invitation sent to ${profile.email}`,
            fieldErrors: undefined,
            data: null
        };
    } catch (err) {
        return {
            success: false,
            message: err instanceof Error ? err.message : 'Database connection failed',
            fieldErrors: undefined,
            data: null
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendFosterInvite
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendFosterInvite, "40fe62832175461942e43387cc929cb9c8857cd351", null);
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
"[project]/lib/actions/foster.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4035570e5679320445377da16246a27a53551dd0b1":"getFosterProfiles","40402a26ac850fb873b11c4895e204e5c10bb11c09":"generateFosterProfilesCSV","406d547189351031f45e884fd434861d3bfa7ada06":"getFosterProfileByParam","409ae881e273fd3e2c334deef86652fe45c73d3ea6":"getFosterProfilesForExport","40c2f3cea9192a48f43a32f3014e4094dc5a0b2caa":"ensureFosterProfile","40ff4ecdf817b0928d9f4eaccf0ac50db40feda9f4":"getFosterProfileById","60256a71922245d33c482eda3c7ac55eb19a32b83b":"updateFosterProfile"},"",""] */ __turbopack_context__.s([
    "ensureFosterProfile",
    ()=>ensureFosterProfile,
    "generateFosterProfilesCSV",
    ()=>generateFosterProfilesCSV,
    "getFosterProfileById",
    ()=>getFosterProfileById,
    "getFosterProfileByParam",
    ()=>getFosterProfileByParam,
    "getFosterProfiles",
    ()=>getFosterProfiles,
    "getFosterProfilesForExport",
    ()=>getFosterProfilesForExport,
    "updateFosterProfile",
    ()=>updateFosterProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$notifications$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/notifications.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/csv.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
// Allow any non-empty string to support seed data IDs like 'volunteer-46'
const idParamSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1);
const fosterProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    profileId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "Invalid profile ID"
    }),
    hasCats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    hasDogs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    canAdministerMeds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const toBoolean = (value)=>{
    if (value === null) return false;
    const stringValue = String(value).toLowerCase();
    return stringValue === "true" || stringValue === "on" || stringValue === "1";
};
async function ensureFosterProfile(profileId) {
    // Allow any non-empty string to support seed data IDs like 'volunteer-46'
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        profileId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    }).safeParse({
        profileId
    });
    if (!parsed.success) {
        throw new Error("Invalid profile ID");
    }
    // Try to find existing foster profile
    let fosterProfile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.findUnique({
        where: {
            profileId: parsed.data.profileId
        },
        include: {
            profile: true
        }
    });
    // If it doesn't exist, create one with defaults
    if (!fosterProfile) {
        fosterProfile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.create({
            data: {
                profileId: parsed.data.profileId,
                hasCats: false,
                hasDogs: false,
                canAdministerMeds: false,
                notes: null
            },
            include: {
                profile: true
            }
        });
    }
    return fosterProfile;
}
async function getFosterProfiles(searchParams) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    const page = searchParams?.page ?? 1;
    const limit = searchParams?.limit ?? 50;
    const skip = (page - 1) * limit;
    const where = {
        ...searchParams?.hasCats !== undefined && {
            hasCats: searchParams.hasCats
        },
        ...searchParams?.hasDogs !== undefined && {
            hasDogs: searchParams.hasDogs
        },
        ...searchParams?.canAdministerMeds !== undefined && {
            canAdministerMeds: searchParams.canAdministerMeds
        }
    };
    const [fosterProfilesRaw, totalCount] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.findMany({
            where,
            select: {
                profileId: true,
                hasCats: true,
                hasDogs: true,
                canAdministerMeds: true,
                notes: true,
                profile: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                dogs: {
                    select: {
                        name: true
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
            ],
            skip,
            take: limit
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.count({
            where
        })
    ]);
    const totalPages = Math.ceil(totalCount / limit);
    const fosterProfiles = fosterProfilesRaw;
    return {
        fosterProfiles,
        pagination: {
            currentPage: page,
            totalPages,
            totalCount,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1
        }
    };
}
async function getFosterProfileById(profileId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    // Allow any non-empty string to support seed data IDs like 'volunteer-46'
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        profileId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    }).safeParse({
        profileId
    });
    if (!parsed.success) {
        throw new Error("Invalid profile ID");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.findUnique({
        where: {
            profileId
        },
        include: {
            profile: true
        }
    });
}
async function getFosterProfileByParam(param) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    const parsed = idParamSchema.safeParse(param);
    if (!parsed.success) {
        throw new Error('Invalid profile identifier');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.findUnique({
        where: {
            profileId: parsed.data
        },
        include: {
            profile: true
        }
    });
}
async function updateFosterProfile(_prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const intent = formData.get("intent");
        const shouldSendInvite = intent === "invite";
        const data = {
            profileId: formData.get("profileId"),
            hasCats: toBoolean(formData.get("hasCats")),
            hasDogs: toBoolean(formData.get("hasDogs")),
            canAdministerMeds: toBoolean(formData.get("canAdministerMeds")),
            notes: (()=>{
                const value = formData.get("notes");
                if (typeof value !== "string") return undefined;
                return value.trim() === "" ? undefined : value.trim();
            })()
        };
        const parsed = fosterProfileSchema.safeParse(data);
        if (!parsed.success) {
            const fieldErrors = parsed.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.upsert({
            where: {
                profileId: parsed.data.profileId
            },
            create: parsed.data,
            update: {
                hasCats: parsed.data.hasCats,
                hasDogs: parsed.data.hasDogs,
                canAdministerMeds: parsed.data.canAdministerMeds,
                notes: parsed.data.notes
            }
        });
        // Send invitation if requested
        if (shouldSendInvite) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$notifications$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendFosterInvite"])(parsed.data.profileId);
            } catch (inviteError) {
                console.error("Failed to send foster invite:", inviteError);
            // Don't fail the entire operation if invite fails
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/fosters");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/fosters/${parsed.data.profileId}`);
        return {
            success: true,
            message: shouldSendInvite ? "Foster profile updated and invitation sent successfully!" : "Foster profile updated successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to update foster profile",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function getFosterProfilesForExport(searchParams) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
    const where = {
        ...searchParams?.hasCats !== undefined && {
            hasCats: searchParams.hasCats
        },
        ...searchParams?.hasDogs !== undefined && {
            hasDogs: searchParams.hasDogs
        },
        ...searchParams?.canAdministerMeds !== undefined && {
            canAdministerMeds: searchParams.canAdministerMeds
        }
    };
    const fosterProfiles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].fosterProfile.findMany({
        where,
        include: {
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
    return fosterProfiles;
}
async function generateFosterProfilesCSV(searchParams) {
    const fosterProfiles = await getFosterProfilesForExport(searchParams);
    const headers = [
        "Name",
        "Email",
        "Capabilities",
        "Notes"
    ];
    const rows = fosterProfiles.map((fp)=>{
        const capabilities = [
            fp.hasCats ? "Cats" : null,
            fp.hasDogs ? "Dogs" : null,
            fp.canAdministerMeds ? "Medications" : null
        ].filter(Boolean).join(", ") || "None";
        return [
            fp.profile?.name || "",
            fp.profile?.email || "",
            capabilities,
            fp.notes || ""
        ];
    });
    // Create CSV content with BOM for Excel compatibility
    const BOM = "\uFEFF";
    const csvContent = [
        headers.map((header)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCell"])(header)).join(","),
        ...rows.map((row)=>row.map((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeCell"])(field)).join(","))
    ].join("\n");
    return BOM + csvContent;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    ensureFosterProfile,
    getFosterProfiles,
    getFosterProfileById,
    getFosterProfileByParam,
    updateFosterProfile,
    getFosterProfilesForExport,
    generateFosterProfilesCSV
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(ensureFosterProfile, "40c2f3cea9192a48f43a32f3014e4094dc5a0b2caa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFosterProfiles, "4035570e5679320445377da16246a27a53551dd0b1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFosterProfileById, "40ff4ecdf817b0928d9f4eaccf0ac50db40feda9f4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFosterProfileByParam, "406d547189351031f45e884fd434861d3bfa7ada06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateFosterProfile, "60256a71922245d33c482eda3c7ac55eb19a32b83b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFosterProfilesForExport, "409ae881e273fd3e2c334deef86652fe45c73d3ea6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateFosterProfilesCSV, "40402a26ac850fb873b11c4895e204e5c10bb11c09", null);
}),
"[project]/.next-internal/server/app/admin/fosters/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/foster.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/actions/notifications.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/foster.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$notifications$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/notifications.actions.ts [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/admin/fosters/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/foster.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/actions/notifications.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
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
    "40103a556ce1c8f26a74594d1623582c17a19007fe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"],
    "401918a5b31d808cec1006f2b7ec1ed729ea95edbe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireRole"],
    "4029bb82f3e859aa7d1d5c000b17516a82e1704167",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfile"],
    "4035570e5679320445377da16246a27a53551dd0b1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFosterProfiles"],
    "40402a26ac850fb873b11c4895e204e5c10bb11c09",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFosterProfilesCSV"],
    "4058e90462fbf4a2c11008bad52cf288efe05a8b32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"],
    "406d547189351031f45e884fd434861d3bfa7ada06",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFosterProfileByParam"],
    "409ae881e273fd3e2c334deef86652fe45c73d3ea6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFosterProfilesForExport"],
    "40b6b27014bdc1a8fded8ff3d22be5fda4813317de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUser"],
    "40c005c7807d025045aa1b80a1ad40fa0d179df6e8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSignupIds"],
    "40c2f3cea9192a48f43a32f3014e4094dc5a0b2caa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureFosterProfile"],
    "40fe62832175461942e43387cc929cb9c8857cd351",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$notifications$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendFosterInvite"],
    "40ff4ecdf817b0928d9f4eaccf0ac50db40feda9f4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFosterProfileById"],
    "60256a71922245d33c482eda3c7ac55eb19a32b83b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateFosterProfile"],
    "60ceabe90fc8ed1b25017daee808de48043d157a6e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserRole"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$fosters$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$notifications$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/fosters/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/foster.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/lib/actions/notifications.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$foster$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/foster.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$notifications$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/notifications.actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_be9380f4._.js.map