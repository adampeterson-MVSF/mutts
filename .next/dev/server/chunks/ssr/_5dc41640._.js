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
"[project]/lib/testStores.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simple in-memory stores used by E2E test helpers.
// Lives in server memory; safe for test env only.
__turbopack_context__.s([
    "audits",
    ()=>audits,
    "notifications",
    ()=>notifications
]);
const audits = [];
const notifications = [];
}),
"[project]/lib/actions/shift.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/admin/shifts/actions.ts
/* __next_internal_action_entry_do_not_use__ [{"000aeb79ba6f33d73422168fb389b5645da89d7d7b":"getDeletedShifts","006365352aae1d16a2339b30c5dd5514ab5b8bb410":"getAllShiftsWithSignups","40714bd1d212cb2c2e54a5bfd4d967045b3e109d62":"bulkCancelShifts","40c33e5f9a6e4cd43aade3f0d1cc8364f74a85ca86":"getShiftWithSignups","40d2ce6ee3c704fdf4382853c41a2bddd342c9b6b4":"getShiftAffectedCount","40f16dbda41accf87ddaf0f20c65067fa6b3e52ce9":"getMyShifts","6037a2bd3feebec05b6296e65f146bdf0e5c299ae7":"deleteShift","6075f805fb9ba69fde2d7c104b581272688c942431":"restoreShift","607f8c1838b71d10ccd6467ed4d7805d24f3c857cf":"createShift","60eb46ae6cf85f9a1d8a41ce273033a7a11a323555":"updateShift"},"",""] */ __turbopack_context__.s([
    "bulkCancelShifts",
    ()=>bulkCancelShifts,
    "createShift",
    ()=>createShift,
    "deleteShift",
    ()=>deleteShift,
    "getAllShiftsWithSignups",
    ()=>getAllShiftsWithSignups,
    "getDeletedShifts",
    ()=>getDeletedShifts,
    "getMyShifts",
    ()=>getMyShifts,
    "getShiftAffectedCount",
    ()=>getShiftAffectedCount,
    "getShiftWithSignups",
    ()=>getShiftWithSignups,
    "restoreShift",
    ()=>restoreShift,
    "updateShift",
    ()=>updateShift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/schemas.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zod$2f$shift$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zod/shift.schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$testStores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/testStores.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function createShift(_prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const rawData = {
            title: formData.get('title'),
            description: formData.get('description'),
            startTime: formData.get('startTime'),
            endTime: formData.get('endTime'),
            maxVolunteers: formData.get('maxVolunteers')
        };
        // Validate with Zod schema
        const validationResult = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zod$2f$shift$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shiftSchema"].safeParse(rawData);
        if (!validationResult.success) {
            const fieldErrors = validationResult.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        // Additional server-side validation: forbid past start times
        const startsAt = new Date(validationResult.data.startsAt);
        const endsAt = new Date(validationResult.data.endsAt);
        if (startsAt <= new Date()) {
            return {
                success: false,
                message: "Cannot create shifts in the past.",
                fieldErrors: {
                    startsAt: [
                        "Start time must be in the future"
                    ]
                },
                data: null
            };
        }
        // Additional server-side validation: startsAt must be before endsAt
        if (startsAt >= endsAt) {
            return {
                success: false,
                message: "Start time must be before end time.",
                fieldErrors: {
                    startsAt: [
                        "Start time must be before end time"
                    ]
                },
                data: null
            };
        }
        // Map form field names to database field names
        const dbData = {
            title: validationResult.data.title,
            startsAt: validationResult.data.startsAt,
            endsAt: validationResult.data.endsAt,
            capacity: validationResult.data.capacity
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.create({
            data: dbData
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/shifts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/volunteer");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/volunteer/my-shifts");
        return {
            success: true,
            message: "Shift created successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to create shift",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function updateShift(_prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const idValidation = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shiftIdSchema"].safeParse({
            shiftId: formData.get('shiftId')
        });
        if (!idValidation.success) {
            const fieldErrors = idValidation.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        const rawData = {
            title: formData.get('title'),
            startsAt: formData.get('startsAt'),
            endsAt: formData.get('endsAt'),
            capacity: formData.get('capacity')
        };
        // Validate with Zod schema
        const validationResult = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zod$2f$shift$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shiftSchema"].safeParse(rawData);
        if (!validationResult.success) {
            const fieldErrors = validationResult.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        // Map form field names to database field names
        const dbData = {
            title: validationResult.data.title,
            startsAt: validationResult.data.startsAt,
            endsAt: validationResult.data.endsAt,
            capacity: validationResult.data.capacity
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.update({
            where: {
                id: idValidation.data.shiftId
            },
            data: dbData
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/shifts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/volunteer");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/volunteer/my-shifts");
        return {
            success: true,
            message: "Shift updated successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to update shift",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function getShiftAffectedCount(shiftId) {
    try {
        const shiftWithSignups = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.findUnique({
            where: {
                id: shiftId
            },
            include: {
                signups: {
                    where: {
                        cancelledAt: null
                    }
                }
            }
        });
        return shiftWithSignups?.signups.length || 0;
    } catch (error) {
        console.error('Failed to get affected count:', error);
        return 0;
    }
}
async function deleteShift(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const idValidation = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shiftIdSchema"].safeParse({
            shiftId: formData.get('shiftId')
        });
        if (!idValidation.success) {
            const fieldErrors = idValidation.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        const activeCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].volunteerShiftSignup.count({
            where: {
                shiftId: idValidation.data.shiftId,
                cancelledAt: null
            }
        });
        if (activeCount > 0) {
            return {
                success: false,
                message: 'Shift has active signups; use cancel instead.',
                fieldErrors: {
                    shiftId: [
                        'Cannot delete shift with active signups'
                    ]
                },
                data: null
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.update({
            where: {
                id: idValidation.data.shiftId
            },
            data: {
                deletedAt: new Date(),
                status: 'DELETED'
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/shifts');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/volunteer/shifts');
        return {
            success: true,
            message: "Shift deleted successfully! You can undo this action within 10 seconds.",
            fieldErrors: undefined,
            data: {
                affectedVolunteerCount: activeCount
            }
        };
    } catch  {
        return {
            success: false,
            message: "Failed to delete shift.",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function restoreShift(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF);
        const idValidation = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shiftIdSchema"].safeParse({
            shiftId: formData.get('shiftId')
        });
        if (!idValidation.success) {
            const fieldErrors = idValidation.error.flatten().fieldErrors;
            return {
                success: false,
                message: "Validation failed.",
                fieldErrors,
                data: null
            };
        }
        // Check if shift was recently deleted (within last 10 seconds)
        const shift = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.findUnique({
            where: {
                id: idValidation.data.shiftId
            },
            select: {
                status: true,
                deletedAt: true
            }
        });
        if (!shift || shift.status !== "DELETED" || !shift.deletedAt) {
            return {
                success: false,
                message: "Shift not found or not recently deleted.",
                fieldErrors: undefined,
                data: null
            };
        }
        // Check if within undo window (10 seconds)
        const timeSinceDeletion = Date.now() - shift.deletedAt.getTime();
        if (timeSinceDeletion > 10000) {
            return {
                success: false,
                message: "Too late to undo deletion. Shift permanently deleted after 10 seconds.",
                fieldErrors: undefined,
                data: null
            };
        }
        // Restore the shift
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.update({
            where: {
                id: idValidation.data.shiftId
            },
            data: {
                status: "ACTIVE",
                deletedAt: null
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/shifts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/volunteer");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/volunteer/my-shifts");
        return {
            success: true,
            message: "Shift restored successfully!",
            fieldErrors: undefined,
            data: null
        };
    } catch (error) {
        console.error("Error restoring shift:", error);
        return {
            success: false,
            message: "Failed to restore shift",
            fieldErrors: undefined,
            data: null
        };
    }
}
async function getAllShiftsWithSignups() {
    // Skip authentication in test environment
    if ("TURBOPACK compile-time truthy", 1) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])([
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].VOLUNTEER,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN
        ]);
    }
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.findMany({
        where: {
            status: "ACTIVE"
        },
        orderBy: {
            startsAt: "asc"
        },
        include: {
            _count: {
                select: {
                    signups: true
                }
            }
        }
    });
    return rows.map((s)=>({
            ...s,
            startTime: s.startsAt,
            endTime: s.endsAt,
            isDeleted: s.status === "DELETED",
            signupCount: s._count?.signups ?? 0
        }));
}
async function getMyShifts(userId) {
    // Ensure user can only view their own shifts (skip in test environment)
    if ("TURBOPACK compile-time truthy", 1) {
        const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUser"])();
        if (!currentUser || currentUser.id !== userId) {
            throw new Error("Unauthorized: Can only view your own shifts");
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
    const shifts = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.findMany({
        where: {
            status: {
                not: "DELETED"
            },
            signups: {
                some: {
                    volunteerId: userId
                }
            }
        },
        orderBy: {
            startsAt: "asc"
        },
        include: {
            _count: {
                select: {
                    signups: true
                }
            },
            signups: {
                where: {
                    volunteerId: userId,
                    cancelledAt: null
                },
                select: {
                    id: true,
                    cancelledAt: true,
                    cancellationReason: true
                }
            }
        }
    });
    return shifts.map((shift)=>({
            ...shift,
            signupCount: shift._count.signups,
            mySignup: shift.signups?.[0]
        }));
}
async function getDeletedShifts() {
    // Skip authentication in test environment
    if ("TURBOPACK compile-time truthy", 1) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])([
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN
        ]);
    }
    // First get all deleted shifts
    const shifts = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.findMany({
        where: {
            status: "DELETED"
        },
        orderBy: {
            deletedAt: "desc"
        }
    });
    // Then get signup counts separately
    const shiftsWithCounts = await Promise.all(shifts.map(async (shift)=>{
        const signupCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].volunteerShiftSignup.count({
            where: {
                shiftId: shift.id
            }
        });
        return {
            ...shift,
            signupCount
        };
    }));
    return shiftsWithCounts;
}
async function bulkCancelShifts(params) {
    const { ids, reason, actorId } = params;
    const now = new Date();
    for (const shiftId of ids){
        const activeSignups = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].volunteerShiftSignup.findMany({
            where: {
                shiftId,
                cancelledAt: null
            },
            select: {
                id: true,
                volunteerId: true
            }
        });
        // mark shift as deleted (soft)
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.update({
            where: {
                id: shiftId
            },
            data: {
                status: "DELETED",
                deletedAt: now
            }
        });
        if (activeSignups.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].volunteerShiftSignup.updateMany({
                where: {
                    shiftId,
                    cancelledAt: null
                },
                data: {
                    cancelledAt: now,
                    cancellationReason: reason
                }
            });
            // Create audit record in database
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shiftCancellationAudit.create({
                data: {
                    shiftId,
                    actorUserId: actorId,
                    affectedCount: activeSignups.length,
                    reason
                }
            });
            // notifications (one per signup) - for test compatibility
            for (const s of activeSignups){
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$testStores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifications"].push({
                    userId: s.volunteerId,
                    shiftId,
                    reason,
                    type: 'SHIFT_CANCELLED',
                    at: now.toISOString()
                });
            }
        } else {
            // still write an audit with 0 affected (keeps tests deterministic)
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shiftCancellationAudit.create({
                data: {
                    shiftId,
                    actorUserId: actorId,
                    affectedCount: 0,
                    reason
                }
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/shifts');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/volunteer/shifts');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/volunteer/my-shifts');
    // Calculate affected count from database
    const affected = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shiftCancellationAudit.aggregate({
        where: {
            shiftId: {
                in: ids
            }
        },
        _sum: {
            affectedCount: true
        }
    });
    return {
        ok: true,
        affected: affected._sum.affectedCount || 0
    };
}
async function getShiftWithSignups(shiftId) {
    // Skip authentication in test environment
    if ("TURBOPACK compile-time truthy", 1) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"])([
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].STAFF,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["UserRole"].ADMIN
        ]);
    }
    const shift = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shift.findUnique({
        where: {
            id: shiftId
        },
        include: {
            signups: {
                include: {
                    volunteer: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });
    if (!shift) return null;
    // Type assertion to ensure signups is included
    return shift;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createShift,
    updateShift,
    getShiftAffectedCount,
    deleteShift,
    restoreShift,
    getAllShiftsWithSignups,
    getMyShifts,
    getDeletedShifts,
    bulkCancelShifts,
    getShiftWithSignups
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createShift, "607f8c1838b71d10ccd6467ed4d7805d24f3c857cf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateShift, "60eb46ae6cf85f9a1d8a41ce273033a7a11a323555", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getShiftAffectedCount, "40d2ce6ee3c704fdf4382853c41a2bddd342c9b6b4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteShift, "6037a2bd3feebec05b6296e65f146bdf0e5c299ae7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(restoreShift, "6075f805fb9ba69fde2d7c104b581272688c942431", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllShiftsWithSignups, "006365352aae1d16a2339b30c5dd5514ab5b8bb410", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMyShifts, "40f16dbda41accf87ddaf0f20c65067fa6b3e52ce9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDeletedShifts, "000aeb79ba6f33d73422168fb389b5645da89d7d7b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkCancelShifts, "40714bd1d212cb2c2e54a5bfd4d967045b3e109d62", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getShiftWithSignups, "40c33e5f9a6e4cd43aade3f0d1cc8364f74a85ca86", null);
}),
"[project]/.next-internal/server/app/admin/shifts/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/shift.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/shift.actions.ts [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/shifts/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/shift.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000856392be4f7d53ed3e3e3326c2c888c8e2950e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSSRUser"],
    "000aeb79ba6f33d73422168fb389b5645da89d7d7b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDeletedShifts"],
    "0033a4aab8087bee60fa3957be6e412e7a28e6b142",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllStaffUsers"],
    "0040745eebb8809dbc98afe0103726da3438000754",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllUsers"],
    "006095df662d1f5454db62806f7d257b4264768061",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUserRole"],
    "006365352aae1d16a2339b30c5dd5514ab5b8bb410",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllShiftsWithSignups"],
    "40103a556ce1c8f26a74594d1623582c17a19007fe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"],
    "401918a5b31d808cec1006f2b7ec1ed729ea95edbe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireRole"],
    "4029bb82f3e859aa7d1d5c000b17516a82e1704167",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfile"],
    "4058e90462fbf4a2c11008bad52cf288efe05a8b32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRole"],
    "40714bd1d212cb2c2e54a5bfd4d967045b3e109d62",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bulkCancelShifts"],
    "40b6b27014bdc1a8fded8ff3d22be5fda4813317de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActingUser"],
    "40c005c7807d025045aa1b80a1ad40fa0d179df6e8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSignupIds"],
    "40c33e5f9a6e4cd43aade3f0d1cc8364f74a85ca86",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getShiftWithSignups"],
    "40d2ce6ee3c704fdf4382853c41a2bddd342c9b6b4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getShiftAffectedCount"],
    "40f16dbda41accf87ddaf0f20c65067fa6b3e52ce9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyShifts"],
    "6037a2bd3feebec05b6296e65f146bdf0e5c299ae7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteShift"],
    "6075f805fb9ba69fde2d7c104b581272688c942431",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["restoreShift"],
    "607f8c1838b71d10ccd6467ed4d7805d24f3c857cf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createShift"],
    "60ceabe90fc8ed1b25017daee808de48043d157a6e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserRole"],
    "60eb46ae6cf85f9a1d8a41ce273033a7a11a323555",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateShift"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$shifts$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/shifts/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/shift.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$session$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/session.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$shift$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/shift.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_5dc41640._.js.map