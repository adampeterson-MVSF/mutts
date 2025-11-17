module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/utils/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
// Re-export shared utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
"[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/admin/shifts/AdminShiftsClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminShiftsClient",
    ()=>AdminShiftsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AdminShiftsClient({ showDeleted }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const handleShowDeletedChange = (checked)=>{
        const params = new URLSearchParams(searchParams);
        if (checked) {
            params.set("showDeleted", "true");
        } else {
            params.delete("showDeleted");
        }
        router.push(`/admin/shifts${params.toString() ? `?${params.toString()}` : ""}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                id: "showDeleted",
                checked: showDeleted,
                onCheckedChange: handleShowDeletedChange,
                "data-testid": "checkbox-show-deleted"
            }, void 0, false, {
                fileName: "[project]/app/admin/shifts/AdminShiftsClient.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "showDeleted",
                className: "text-sm",
                children: "Show deleted shifts"
            }, void 0, false, {
                fileName: "[project]/app/admin/shifts/AdminShiftsClient.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/shifts/AdminShiftsClient.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, type = "button", ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        type: Comp === "button" ? type : undefined,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/actions/data:c9f931 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"607f8c1838b71d10ccd6467ed4d7805d24f3c857cf":"createShift"},"lib/actions/shift.actions.ts",""] */ __turbopack_context__.s([
    "createShift",
    ()=>createShift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createShift = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("607f8c1838b71d10ccd6467ed4d7805d24f3c857cf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createShift"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2hpZnQuYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWRtaW4vc2hpZnRzL2FjdGlvbnMudHNcblwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBzaGlmdFNjaGVtYSwgc2hpZnRJZFNjaGVtYSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzXCI7XG5pbXBvcnQgeyBhc3NlcnRSb2xlLCBnZXRBY3RpbmdVc2VyIH0gZnJvbSBcIkAvbGliL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb25zXCI7XG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0IH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9ucyB9IGZyb20gJ0AvbGliL3Rlc3RTdG9yZXMnO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTaGlmdChfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXG4gICAgICBzdGFydFRpbWU6IGZvcm1EYXRhLmdldCgnc3RhcnRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgZW5kVGltZTogZm9ybURhdGEuZ2V0KCdlbmRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgbWF4Vm9sdW50ZWVyczogZm9ybURhdGEuZ2V0KCdtYXhWb2x1bnRlZXJzJyksXG4gICAgfTtcblxuICAgIC8vIFZhbGlkYXRlIHdpdGggWm9kIHNjaGVtYVxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBzaGlmdFNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWwgc2VydmVyLXNpZGUgdmFsaWRhdGlvbjogZm9yYmlkIHBhc3Qgc3RhcnQgdGltZXNcbiAgICBjb25zdCBzdGFydHNBdCA9IG5ldyBEYXRlKHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCk7XG4gICAgY29uc3QgZW5kc0F0ID0gbmV3IERhdGUodmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCk7XG4gICAgaWYgKHN0YXJ0c0F0IDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIkNhbm5vdCBjcmVhdGUgc2hpZnRzIGluIHRoZSBwYXN0LlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGluIHRoZSBmdXR1cmVcIl0gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbCBzZXJ2ZXItc2lkZSB2YWxpZGF0aW9uOiBzdGFydHNBdCBtdXN0IGJlIGJlZm9yZSBlbmRzQXRcbiAgICBpZiAoc3RhcnRzQXQgPj0gZW5kc0F0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGJlZm9yZSBlbmQgdGltZVwiXSB9LFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBNYXAgZm9ybSBmaWVsZCBuYW1lcyB0byBkYXRhYmFzZSBmaWVsZCBuYW1lc1xuICAgIGNvbnN0IGRiRGF0YSA9IHtcbiAgICAgIHRpdGxlOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICBzdGFydHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnN0YXJ0c0F0LFxuICAgICAgZW5kc0F0OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZW5kc0F0LFxuICAgICAgY2FwYWNpdHk6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5jYXBhY2l0eSxcbiAgICB9O1xuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiBkYkRhdGEsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGNyZWF0ZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2hpZnQoX3ByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICAgIGNvbnN0IGlkVmFsaWRhdGlvbiA9IHNoaWZ0SWRTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgIHNoaWZ0SWQ6IGZvcm1EYXRhLmdldCgnc2hpZnRJZCcpLFxuICAgIH0pO1xuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgc3RhcnRzQXQ6IGZvcm1EYXRhLmdldCgnc3RhcnRzQXQnKSBhcyBzdHJpbmcsXG4gICAgICBlbmRzQXQ6IGZvcm1EYXRhLmdldCgnZW5kc0F0JykgYXMgc3RyaW5nLFxuICAgICAgY2FwYWNpdHk6IGZvcm1EYXRhLmdldCgnY2FwYWNpdHknKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHNoaWZ0U2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIGZvcm0gZmllbGQgbmFtZXMgdG8gZGF0YWJhc2UgZmllbGQgbmFtZXNcbiAgICBjb25zdCBkYkRhdGEgPSB7XG4gICAgICB0aXRsZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnRpdGxlLFxuICAgICAgc3RhcnRzQXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCxcbiAgICAgIGVuZHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCxcbiAgICAgIGNhcGFjaXR5OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuY2FwYWNpdHksXG4gICAgfTtcblxuICAgIGF3YWl0IHByaXNtYS5zaGlmdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQgfSxcbiAgICAgIGRhdGE6IGRiRGF0YSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NoaWZ0c1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi92b2x1bnRlZXJcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyL215LXNoaWZ0c1wiKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gdXBkYXRlIHNoaWZ0XCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGlmdEFmZmVjdGVkQ291bnQoc2hpZnRJZDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzaGlmdFdpdGhTaWdudXBzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHNoaWZ0SWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc2lnbnVwczoge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBjYW5jZWxsZWRBdDogbnVsbCwgLy8gT25seSBjb3VudCBhY3RpdmUgc2lnbnVwc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBzaGlmdFdpdGhTaWdudXBzPy5zaWdudXBzLmxlbmd0aCB8fCAwO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYWZmZWN0ZWQgY291bnQ6JywgZXJyb3IpO1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbi8qKlxuICogSGFyZC1kZWxldGUgYSBzaGlmdCBvbmx5IHdoZW4gdGhlcmUgYXJlIG5vIGFjdGl2ZSBzaWdudXBzLlxuICogT3RoZXJ3aXNlIHJldHVybiBhIHJlc3VsdCB0aGUgVUkgdXNlcyB0byByb3V0ZSB0byBidWxrLWNhbmNlbC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNoaWZ0KHByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IGFmZmVjdGVkVm9sdW50ZWVyQ291bnQ6IG51bWJlciB9Pj4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgaWRWYWxpZGF0aW9uID0gc2hpZnRJZFNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgICAgc2hpZnRJZDogZm9ybURhdGEuZ2V0KCdzaGlmdElkJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIWlkVmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IGlkVmFsaWRhdGlvbi5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHNoaWZ0SWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ1NoaWZ0IGhhcyBhY3RpdmUgc2lnbnVwczsgdXNlIGNhbmNlbCBpbnN0ZWFkLicsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB7IHNoaWZ0SWQ6IFsnQ2Fubm90IGRlbGV0ZSBzaGlmdCB3aXRoIGFjdGl2ZSBzaWdudXBzJ10gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YTogeyBkZWxldGVkQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogJ0RFTEVURUQnIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3NoaWZ0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ISBZb3UgY2FuIHVuZG8gdGhpcyBhY3Rpb24gd2l0aGluIDEwIHNlY29uZHMuXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogeyBhZmZlY3RlZFZvbHVudGVlckNvdW50OiBhY3RpdmVDb3VudCB9LFxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBzaGlmdC5cIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVTaGlmdChwcmV2U3RhdGU6IEFjdGlvblJlc3VsdCwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcbiAgICBjb25zdCBpZFZhbGlkYXRpb24gPSBzaGlmdElkU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBzaGlmdElkOiBmb3JtRGF0YS5nZXQoJ3NoaWZ0SWQnKSxcbiAgICB9KTtcblxuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgc2hpZnQgd2FzIHJlY2VudGx5IGRlbGV0ZWQgKHdpdGhpbiBsYXN0IDEwIHNlY29uZHMpXG4gICAgY29uc3Qgc2hpZnQgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgc2VsZWN0OiB7IHN0YXR1czogdHJ1ZSwgZGVsZXRlZEF0OiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXNoaWZ0IHx8IHNoaWZ0LnN0YXR1cyAhPT0gXCJERUxFVEVEXCIgfHwgIXNoaWZ0LmRlbGV0ZWRBdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgbm90IGZvdW5kIG9yIG5vdCByZWNlbnRseSBkZWxldGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3aXRoaW4gdW5kbyB3aW5kb3cgKDEwIHNlY29uZHMpXG4gICAgY29uc3QgdGltZVNpbmNlRGVsZXRpb24gPSBEYXRlLm5vdygpIC0gc2hpZnQuZGVsZXRlZEF0LmdldFRpbWUoKTtcbiAgICBpZiAodGltZVNpbmNlRGVsZXRpb24gPiAxMDAwMCkgeyAvLyAxMCBzZWNvbmRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJUb28gbGF0ZSB0byB1bmRvIGRlbGV0aW9uLiBTaGlmdCBwZXJtYW5lbnRseSBkZWxldGVkIGFmdGVyIDEwIHNlY29uZHMuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgdGhlIHNoaWZ0XG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXM6IFwiQUNUSVZFXCIsXG4gICAgICAgIGRlbGV0ZWRBdDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgcmVzdG9yZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVzdG9yaW5nIHNoaWZ0OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJGYWlsZWQgdG8gcmVzdG9yZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsU2hpZnRzV2l0aFNpZ251cHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5WT0xVTlRFRVIsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCByb3dzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgc3RhdHVzOiBcIkFDVElWRVwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBzdGFydHNBdDogXCJhc2NcIiB9LFxuICAgIGluY2x1ZGU6IHsgX2NvdW50OiB7IHNlbGVjdDogeyBzaWdudXBzOiB0cnVlIH0gfSB9LFxuICB9KTtcblxuICByZXR1cm4gcm93cy5tYXAocyA9PiAoe1xuICAgIC4uLnMsXG4gICAgc3RhcnRUaW1lOiBzLnN0YXJ0c0F0LCAvLyBNYXAgc3RhcnRzQXQgdG8gc3RhcnRUaW1lIGZvciBjb21wYXRpYmlsaXR5XG4gICAgZW5kVGltZTogcy5lbmRzQXQsIC8vIE1hcCBlbmRzQXQgdG8gZW5kVGltZSBmb3IgY29tcGF0aWJpbGl0eVxuICAgIGlzRGVsZXRlZDogcy5zdGF0dXMgPT09IFwiREVMRVRFRFwiLCAvLyBDaGVjayBzdGF0dXMgZm9yIGRlbGV0aW9uXG4gICAgc2lnbnVwQ291bnQ6IHMuX2NvdW50Py5zaWdudXBzID8/IDBcbiAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXlTaGlmdHModXNlcklkOiBzdHJpbmcpIHtcbiAgLy8gRW5zdXJlIHVzZXIgY2FuIG9ubHkgdmlldyB0aGVpciBvd24gc2hpZnRzIChza2lwIGluIHRlc3QgZW52aXJvbm1lbnQpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRBY3RpbmdVc2VyKCk7XG4gICAgaWYgKCFjdXJyZW50VXNlciB8fCBjdXJyZW50VXNlci5pZCAhPT0gdXNlcklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQ6IENhbiBvbmx5IHZpZXcgeW91ciBvd24gc2hpZnRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnNlZCA9IHoub2JqZWN0KHsgdXNlcklkOiB6LnN0cmluZygpIH0pLnNhZmVQYXJzZSh7IHVzZXJJZCB9KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXNlciBJRFwiKTtcbiAgfVxuXG4gIGNvbnN0IHNoaWZ0cyA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czogeyBub3Q6IFwiREVMRVRFRFwiIH0sIC8vIEVxdWl2YWxlbnQgdG8gaXNEZWxldGVkOiBmYWxzZSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBzaWdudXBzOiB7XG4gICAgICAgIHNvbWU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHsgc3RhcnRzQXQ6IFwiYXNjXCIgfSwgLy8gV2lsbCBiZSBtYXBwZWQgdG8gc3RhcnRUaW1lIGluIERUT1xuICAgIGluY2x1ZGU6IHtcbiAgICAgIF9jb3VudDoge1xuICAgICAgICBzZWxlY3Q6IHsgc2lnbnVwczogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICAgIGNhbmNlbGxlZEF0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsZWRBdDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsYXRpb25SZWFzb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzaGlmdHMubWFwKHNoaWZ0ID0+ICh7XG4gICAgLi4uc2hpZnQsXG4gICAgc2lnbnVwQ291bnQ6IHNoaWZ0Ll9jb3VudC5zaWdudXBzLFxuICAgIG15U2lnbnVwOiBzaGlmdC5zaWdudXBzPy5bMF0sIC8vIFNhZmV0eSBjaGVjayBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlbGV0ZWRTaGlmdHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5BRE1JTl0pO1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IGFsbCBkZWxldGVkIHNoaWZ0c1xuICBjb25zdCBzaGlmdHMgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBzdGF0dXM6IFwiREVMRVRFRFwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBkZWxldGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIC8vIFRoZW4gZ2V0IHNpZ251cCBjb3VudHMgc2VwYXJhdGVseVxuICBjb25zdCBzaGlmdHNXaXRoQ291bnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgc2hpZnRzLm1hcChhc3luYyAoc2hpZnQpID0+IHtcbiAgICAgIGNvbnN0IHNpZ251cENvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHsgc2hpZnRJZDogc2hpZnQuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hpZnQsXG4gICAgICAgIHNpZ251cENvdW50LFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBzaGlmdHNXaXRoQ291bnRzO1xufVxuXG4vKipcbiAqIEJ1bGstY2FuY2VsIHNlbGVjdGVkIHNoaWZ0czpcbiAqIC0gU2V0IGlzRGVsZXRlZD10cnVlIG9uIGVhY2ggc2hpZnRcbiAqIC0gQ2FuY2VsIGFsbCBhY3RpdmUgc2lnbnVwcyB3aXRoIHJlYXNvblxuICogLSBFbWl0IG9uZSBhdWRpdCBwZXIgc2hpZnQgYW5kIG9uZSBub3RpZmljYXRpb24gcGVyIGFmZmVjdGVkIHZvbHVudGVlclxuICogLSBSZXZhbGlkYXRlIGFkbWluICsgdm9sdW50ZWVyIHBhZ2VzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ2FuY2VsU2hpZnRzKHBhcmFtczoge1xuICBpZHM6IG51bWJlcltdO1xuICByZWFzb246IHN0cmluZztcbiAgYWN0b3JJZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7IGlkcywgcmVhc29uLCBhY3RvcklkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgZm9yIChjb25zdCBzaGlmdElkIG9mIGlkcykge1xuICAgIGNvbnN0IGFjdGl2ZVNpZ251cHMgPSBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgc2hpZnRJZCwgY2FuY2VsbGVkQXQ6IG51bGwgfSxcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdm9sdW50ZWVySWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIC8vIG1hcmsgc2hpZnQgYXMgZGVsZXRlZCAoc29mdClcbiAgICBhd2FpdCBwcmlzbWEuc2hpZnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBzaGlmdElkIH0sXG4gICAgICBkYXRhOiB7IHN0YXR1czogXCJERUxFVEVEXCIsIGRlbGV0ZWRBdDogbm93IH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlU2lnbnVwcy5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAudXBkYXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYW5jZWxsZWRBdDogbm93LFxuICAgICAgICAgIGNhbmNlbGxhdGlvblJlYXNvbjogcmVhc29uLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBhdWRpdCByZWNvcmQgaW4gZGF0YWJhc2VcbiAgICAgIGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIGFjdG9yVXNlcklkOiBhY3RvcklkLFxuICAgICAgICAgIGFmZmVjdGVkQ291bnQ6IGFjdGl2ZVNpZ251cHMubGVuZ3RoLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBub3RpZmljYXRpb25zIChvbmUgcGVyIHNpZ251cCkgLSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgYWN0aXZlU2lnbnVwcykge1xuICAgICAgICBub3RpZmljYXRpb25zLnB1c2goe1xuICAgICAgICAgIHVzZXJJZDogcy52b2x1bnRlZXJJZCxcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgICB0eXBlOiAnU0hJRlRfQ0FOQ0VMTEVEJyxcbiAgICAgICAgICBhdDogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdGlsbCB3cml0ZSBhbiBhdWRpdCB3aXRoIDAgYWZmZWN0ZWQgKGtlZXBzIHRlc3RzIGRldGVybWluaXN0aWMpXG4gICAgICBhd2FpdCBwcmlzbWEuc2hpZnRDYW5jZWxsYXRpb25BdWRpdC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2hpZnRJZCxcbiAgICAgICAgICBhY3RvclVzZXJJZDogYWN0b3JJZCxcbiAgICAgICAgICBhZmZlY3RlZENvdW50OiAwLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vc2hpZnRzJyk7XG4gIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuICByZXZhbGlkYXRlUGF0aCgnL3ZvbHVudGVlci9teS1zaGlmdHMnKTtcblxuICAvLyBDYWxjdWxhdGUgYWZmZWN0ZWQgY291bnQgZnJvbSBkYXRhYmFzZVxuICBjb25zdCBhZmZlY3RlZCA9IGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmFnZ3JlZ2F0ZSh7XG4gICAgd2hlcmU6IHsgc2hpZnRJZDogeyBpbjogaWRzIH0gfSxcbiAgICBfc3VtOiB7IGFmZmVjdGVkQ291bnQ6IHRydWUgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgb2s6IHRydWUsIGFmZmVjdGVkOiBhZmZlY3RlZC5fc3VtLmFmZmVjdGVkQ291bnQgfHwgMCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hpZnRXaXRoU2lnbnVwcyhzaGlmdElkOiBudW1iZXIpIHtcbiAgLy8gU2tpcCBhdXRoZW50aWNhdGlvbiBpbiB0ZXN0IGVudmlyb25tZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShbVXNlclJvbGUuU1RBRkYsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCBzaGlmdCA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2hpZnRJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHZvbHVudGVlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXNoaWZ0KSByZXR1cm4gbnVsbDtcblxuICAvLyBUeXBlIGFzc2VydGlvbiB0byBlbnN1cmUgc2lnbnVwcyBpcyBpbmNsdWRlZFxuICByZXR1cm4gc2hpZnQgYXMgdHlwZW9mIHNoaWZ0ICYge1xuICAgIHNpZ251cHM6IEFycmF5PHtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgICBzaWdudXBUaW1lOiBEYXRlO1xuICAgICAgdm9sdW50ZWVyOiB7IG5hbWU6IHN0cmluZyB9O1xuICAgIH0+O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0Fhc0IifQ==
}),
"[project]/lib/actions/data:6a6a99 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60eb46ae6cf85f9a1d8a41ce273033a7a11a323555":"updateShift"},"lib/actions/shift.actions.ts",""] */ __turbopack_context__.s([
    "updateShift",
    ()=>updateShift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateShift = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60eb46ae6cf85f9a1d8a41ce273033a7a11a323555", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateShift"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2hpZnQuYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWRtaW4vc2hpZnRzL2FjdGlvbnMudHNcblwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBzaGlmdFNjaGVtYSwgc2hpZnRJZFNjaGVtYSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzXCI7XG5pbXBvcnQgeyBhc3NlcnRSb2xlLCBnZXRBY3RpbmdVc2VyIH0gZnJvbSBcIkAvbGliL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb25zXCI7XG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0IH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9ucyB9IGZyb20gJ0AvbGliL3Rlc3RTdG9yZXMnO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTaGlmdChfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXG4gICAgICBzdGFydFRpbWU6IGZvcm1EYXRhLmdldCgnc3RhcnRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgZW5kVGltZTogZm9ybURhdGEuZ2V0KCdlbmRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgbWF4Vm9sdW50ZWVyczogZm9ybURhdGEuZ2V0KCdtYXhWb2x1bnRlZXJzJyksXG4gICAgfTtcblxuICAgIC8vIFZhbGlkYXRlIHdpdGggWm9kIHNjaGVtYVxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBzaGlmdFNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWwgc2VydmVyLXNpZGUgdmFsaWRhdGlvbjogZm9yYmlkIHBhc3Qgc3RhcnQgdGltZXNcbiAgICBjb25zdCBzdGFydHNBdCA9IG5ldyBEYXRlKHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCk7XG4gICAgY29uc3QgZW5kc0F0ID0gbmV3IERhdGUodmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCk7XG4gICAgaWYgKHN0YXJ0c0F0IDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIkNhbm5vdCBjcmVhdGUgc2hpZnRzIGluIHRoZSBwYXN0LlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGluIHRoZSBmdXR1cmVcIl0gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbCBzZXJ2ZXItc2lkZSB2YWxpZGF0aW9uOiBzdGFydHNBdCBtdXN0IGJlIGJlZm9yZSBlbmRzQXRcbiAgICBpZiAoc3RhcnRzQXQgPj0gZW5kc0F0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGJlZm9yZSBlbmQgdGltZVwiXSB9LFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBNYXAgZm9ybSBmaWVsZCBuYW1lcyB0byBkYXRhYmFzZSBmaWVsZCBuYW1lc1xuICAgIGNvbnN0IGRiRGF0YSA9IHtcbiAgICAgIHRpdGxlOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICBzdGFydHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnN0YXJ0c0F0LFxuICAgICAgZW5kc0F0OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZW5kc0F0LFxuICAgICAgY2FwYWNpdHk6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5jYXBhY2l0eSxcbiAgICB9O1xuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiBkYkRhdGEsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGNyZWF0ZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2hpZnQoX3ByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICAgIGNvbnN0IGlkVmFsaWRhdGlvbiA9IHNoaWZ0SWRTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgIHNoaWZ0SWQ6IGZvcm1EYXRhLmdldCgnc2hpZnRJZCcpLFxuICAgIH0pO1xuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgc3RhcnRzQXQ6IGZvcm1EYXRhLmdldCgnc3RhcnRzQXQnKSBhcyBzdHJpbmcsXG4gICAgICBlbmRzQXQ6IGZvcm1EYXRhLmdldCgnZW5kc0F0JykgYXMgc3RyaW5nLFxuICAgICAgY2FwYWNpdHk6IGZvcm1EYXRhLmdldCgnY2FwYWNpdHknKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHNoaWZ0U2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIGZvcm0gZmllbGQgbmFtZXMgdG8gZGF0YWJhc2UgZmllbGQgbmFtZXNcbiAgICBjb25zdCBkYkRhdGEgPSB7XG4gICAgICB0aXRsZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnRpdGxlLFxuICAgICAgc3RhcnRzQXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCxcbiAgICAgIGVuZHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCxcbiAgICAgIGNhcGFjaXR5OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuY2FwYWNpdHksXG4gICAgfTtcblxuICAgIGF3YWl0IHByaXNtYS5zaGlmdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQgfSxcbiAgICAgIGRhdGE6IGRiRGF0YSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NoaWZ0c1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi92b2x1bnRlZXJcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyL215LXNoaWZ0c1wiKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gdXBkYXRlIHNoaWZ0XCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGlmdEFmZmVjdGVkQ291bnQoc2hpZnRJZDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzaGlmdFdpdGhTaWdudXBzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHNoaWZ0SWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc2lnbnVwczoge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBjYW5jZWxsZWRBdDogbnVsbCwgLy8gT25seSBjb3VudCBhY3RpdmUgc2lnbnVwc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBzaGlmdFdpdGhTaWdudXBzPy5zaWdudXBzLmxlbmd0aCB8fCAwO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYWZmZWN0ZWQgY291bnQ6JywgZXJyb3IpO1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbi8qKlxuICogSGFyZC1kZWxldGUgYSBzaGlmdCBvbmx5IHdoZW4gdGhlcmUgYXJlIG5vIGFjdGl2ZSBzaWdudXBzLlxuICogT3RoZXJ3aXNlIHJldHVybiBhIHJlc3VsdCB0aGUgVUkgdXNlcyB0byByb3V0ZSB0byBidWxrLWNhbmNlbC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNoaWZ0KHByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IGFmZmVjdGVkVm9sdW50ZWVyQ291bnQ6IG51bWJlciB9Pj4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgaWRWYWxpZGF0aW9uID0gc2hpZnRJZFNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgICAgc2hpZnRJZDogZm9ybURhdGEuZ2V0KCdzaGlmdElkJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIWlkVmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IGlkVmFsaWRhdGlvbi5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHNoaWZ0SWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ1NoaWZ0IGhhcyBhY3RpdmUgc2lnbnVwczsgdXNlIGNhbmNlbCBpbnN0ZWFkLicsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB7IHNoaWZ0SWQ6IFsnQ2Fubm90IGRlbGV0ZSBzaGlmdCB3aXRoIGFjdGl2ZSBzaWdudXBzJ10gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YTogeyBkZWxldGVkQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogJ0RFTEVURUQnIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3NoaWZ0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ISBZb3UgY2FuIHVuZG8gdGhpcyBhY3Rpb24gd2l0aGluIDEwIHNlY29uZHMuXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogeyBhZmZlY3RlZFZvbHVudGVlckNvdW50OiBhY3RpdmVDb3VudCB9LFxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBzaGlmdC5cIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVTaGlmdChwcmV2U3RhdGU6IEFjdGlvblJlc3VsdCwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcbiAgICBjb25zdCBpZFZhbGlkYXRpb24gPSBzaGlmdElkU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBzaGlmdElkOiBmb3JtRGF0YS5nZXQoJ3NoaWZ0SWQnKSxcbiAgICB9KTtcblxuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgc2hpZnQgd2FzIHJlY2VudGx5IGRlbGV0ZWQgKHdpdGhpbiBsYXN0IDEwIHNlY29uZHMpXG4gICAgY29uc3Qgc2hpZnQgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgc2VsZWN0OiB7IHN0YXR1czogdHJ1ZSwgZGVsZXRlZEF0OiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXNoaWZ0IHx8IHNoaWZ0LnN0YXR1cyAhPT0gXCJERUxFVEVEXCIgfHwgIXNoaWZ0LmRlbGV0ZWRBdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgbm90IGZvdW5kIG9yIG5vdCByZWNlbnRseSBkZWxldGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3aXRoaW4gdW5kbyB3aW5kb3cgKDEwIHNlY29uZHMpXG4gICAgY29uc3QgdGltZVNpbmNlRGVsZXRpb24gPSBEYXRlLm5vdygpIC0gc2hpZnQuZGVsZXRlZEF0LmdldFRpbWUoKTtcbiAgICBpZiAodGltZVNpbmNlRGVsZXRpb24gPiAxMDAwMCkgeyAvLyAxMCBzZWNvbmRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJUb28gbGF0ZSB0byB1bmRvIGRlbGV0aW9uLiBTaGlmdCBwZXJtYW5lbnRseSBkZWxldGVkIGFmdGVyIDEwIHNlY29uZHMuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgdGhlIHNoaWZ0XG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXM6IFwiQUNUSVZFXCIsXG4gICAgICAgIGRlbGV0ZWRBdDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgcmVzdG9yZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVzdG9yaW5nIHNoaWZ0OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJGYWlsZWQgdG8gcmVzdG9yZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsU2hpZnRzV2l0aFNpZ251cHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5WT0xVTlRFRVIsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCByb3dzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgc3RhdHVzOiBcIkFDVElWRVwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBzdGFydHNBdDogXCJhc2NcIiB9LFxuICAgIGluY2x1ZGU6IHsgX2NvdW50OiB7IHNlbGVjdDogeyBzaWdudXBzOiB0cnVlIH0gfSB9LFxuICB9KTtcblxuICByZXR1cm4gcm93cy5tYXAocyA9PiAoe1xuICAgIC4uLnMsXG4gICAgc3RhcnRUaW1lOiBzLnN0YXJ0c0F0LCAvLyBNYXAgc3RhcnRzQXQgdG8gc3RhcnRUaW1lIGZvciBjb21wYXRpYmlsaXR5XG4gICAgZW5kVGltZTogcy5lbmRzQXQsIC8vIE1hcCBlbmRzQXQgdG8gZW5kVGltZSBmb3IgY29tcGF0aWJpbGl0eVxuICAgIGlzRGVsZXRlZDogcy5zdGF0dXMgPT09IFwiREVMRVRFRFwiLCAvLyBDaGVjayBzdGF0dXMgZm9yIGRlbGV0aW9uXG4gICAgc2lnbnVwQ291bnQ6IHMuX2NvdW50Py5zaWdudXBzID8/IDBcbiAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXlTaGlmdHModXNlcklkOiBzdHJpbmcpIHtcbiAgLy8gRW5zdXJlIHVzZXIgY2FuIG9ubHkgdmlldyB0aGVpciBvd24gc2hpZnRzIChza2lwIGluIHRlc3QgZW52aXJvbm1lbnQpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRBY3RpbmdVc2VyKCk7XG4gICAgaWYgKCFjdXJyZW50VXNlciB8fCBjdXJyZW50VXNlci5pZCAhPT0gdXNlcklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQ6IENhbiBvbmx5IHZpZXcgeW91ciBvd24gc2hpZnRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnNlZCA9IHoub2JqZWN0KHsgdXNlcklkOiB6LnN0cmluZygpIH0pLnNhZmVQYXJzZSh7IHVzZXJJZCB9KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXNlciBJRFwiKTtcbiAgfVxuXG4gIGNvbnN0IHNoaWZ0cyA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czogeyBub3Q6IFwiREVMRVRFRFwiIH0sIC8vIEVxdWl2YWxlbnQgdG8gaXNEZWxldGVkOiBmYWxzZSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBzaWdudXBzOiB7XG4gICAgICAgIHNvbWU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHsgc3RhcnRzQXQ6IFwiYXNjXCIgfSwgLy8gV2lsbCBiZSBtYXBwZWQgdG8gc3RhcnRUaW1lIGluIERUT1xuICAgIGluY2x1ZGU6IHtcbiAgICAgIF9jb3VudDoge1xuICAgICAgICBzZWxlY3Q6IHsgc2lnbnVwczogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICAgIGNhbmNlbGxlZEF0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsZWRBdDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsYXRpb25SZWFzb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzaGlmdHMubWFwKHNoaWZ0ID0+ICh7XG4gICAgLi4uc2hpZnQsXG4gICAgc2lnbnVwQ291bnQ6IHNoaWZ0Ll9jb3VudC5zaWdudXBzLFxuICAgIG15U2lnbnVwOiBzaGlmdC5zaWdudXBzPy5bMF0sIC8vIFNhZmV0eSBjaGVjayBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlbGV0ZWRTaGlmdHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5BRE1JTl0pO1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IGFsbCBkZWxldGVkIHNoaWZ0c1xuICBjb25zdCBzaGlmdHMgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBzdGF0dXM6IFwiREVMRVRFRFwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBkZWxldGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIC8vIFRoZW4gZ2V0IHNpZ251cCBjb3VudHMgc2VwYXJhdGVseVxuICBjb25zdCBzaGlmdHNXaXRoQ291bnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgc2hpZnRzLm1hcChhc3luYyAoc2hpZnQpID0+IHtcbiAgICAgIGNvbnN0IHNpZ251cENvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHsgc2hpZnRJZDogc2hpZnQuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hpZnQsXG4gICAgICAgIHNpZ251cENvdW50LFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBzaGlmdHNXaXRoQ291bnRzO1xufVxuXG4vKipcbiAqIEJ1bGstY2FuY2VsIHNlbGVjdGVkIHNoaWZ0czpcbiAqIC0gU2V0IGlzRGVsZXRlZD10cnVlIG9uIGVhY2ggc2hpZnRcbiAqIC0gQ2FuY2VsIGFsbCBhY3RpdmUgc2lnbnVwcyB3aXRoIHJlYXNvblxuICogLSBFbWl0IG9uZSBhdWRpdCBwZXIgc2hpZnQgYW5kIG9uZSBub3RpZmljYXRpb24gcGVyIGFmZmVjdGVkIHZvbHVudGVlclxuICogLSBSZXZhbGlkYXRlIGFkbWluICsgdm9sdW50ZWVyIHBhZ2VzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ2FuY2VsU2hpZnRzKHBhcmFtczoge1xuICBpZHM6IG51bWJlcltdO1xuICByZWFzb246IHN0cmluZztcbiAgYWN0b3JJZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7IGlkcywgcmVhc29uLCBhY3RvcklkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgZm9yIChjb25zdCBzaGlmdElkIG9mIGlkcykge1xuICAgIGNvbnN0IGFjdGl2ZVNpZ251cHMgPSBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgc2hpZnRJZCwgY2FuY2VsbGVkQXQ6IG51bGwgfSxcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdm9sdW50ZWVySWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIC8vIG1hcmsgc2hpZnQgYXMgZGVsZXRlZCAoc29mdClcbiAgICBhd2FpdCBwcmlzbWEuc2hpZnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBzaGlmdElkIH0sXG4gICAgICBkYXRhOiB7IHN0YXR1czogXCJERUxFVEVEXCIsIGRlbGV0ZWRBdDogbm93IH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlU2lnbnVwcy5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAudXBkYXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYW5jZWxsZWRBdDogbm93LFxuICAgICAgICAgIGNhbmNlbGxhdGlvblJlYXNvbjogcmVhc29uLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBhdWRpdCByZWNvcmQgaW4gZGF0YWJhc2VcbiAgICAgIGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIGFjdG9yVXNlcklkOiBhY3RvcklkLFxuICAgICAgICAgIGFmZmVjdGVkQ291bnQ6IGFjdGl2ZVNpZ251cHMubGVuZ3RoLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBub3RpZmljYXRpb25zIChvbmUgcGVyIHNpZ251cCkgLSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgYWN0aXZlU2lnbnVwcykge1xuICAgICAgICBub3RpZmljYXRpb25zLnB1c2goe1xuICAgICAgICAgIHVzZXJJZDogcy52b2x1bnRlZXJJZCxcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgICB0eXBlOiAnU0hJRlRfQ0FOQ0VMTEVEJyxcbiAgICAgICAgICBhdDogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdGlsbCB3cml0ZSBhbiBhdWRpdCB3aXRoIDAgYWZmZWN0ZWQgKGtlZXBzIHRlc3RzIGRldGVybWluaXN0aWMpXG4gICAgICBhd2FpdCBwcmlzbWEuc2hpZnRDYW5jZWxsYXRpb25BdWRpdC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2hpZnRJZCxcbiAgICAgICAgICBhY3RvclVzZXJJZDogYWN0b3JJZCxcbiAgICAgICAgICBhZmZlY3RlZENvdW50OiAwLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vc2hpZnRzJyk7XG4gIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuICByZXZhbGlkYXRlUGF0aCgnL3ZvbHVudGVlci9teS1zaGlmdHMnKTtcblxuICAvLyBDYWxjdWxhdGUgYWZmZWN0ZWQgY291bnQgZnJvbSBkYXRhYmFzZVxuICBjb25zdCBhZmZlY3RlZCA9IGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmFnZ3JlZ2F0ZSh7XG4gICAgd2hlcmU6IHsgc2hpZnRJZDogeyBpbjogaWRzIH0gfSxcbiAgICBfc3VtOiB7IGFmZmVjdGVkQ291bnQ6IHRydWUgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgb2s6IHRydWUsIGFmZmVjdGVkOiBhZmZlY3RlZC5fc3VtLmFmZmVjdGVkQ291bnQgfHwgMCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hpZnRXaXRoU2lnbnVwcyhzaGlmdElkOiBudW1iZXIpIHtcbiAgLy8gU2tpcCBhdXRoZW50aWNhdGlvbiBpbiB0ZXN0IGVudmlyb25tZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShbVXNlclJvbGUuU1RBRkYsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCBzaGlmdCA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2hpZnRJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHZvbHVudGVlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXNoaWZ0KSByZXR1cm4gbnVsbDtcblxuICAvLyBUeXBlIGFzc2VydGlvbiB0byBlbnN1cmUgc2lnbnVwcyBpcyBpbmNsdWRlZFxuICByZXR1cm4gc2hpZnQgYXMgdHlwZW9mIHNoaWZ0ICYge1xuICAgIHNpZ251cHM6IEFycmF5PHtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgICBzaWdudXBUaW1lOiBEYXRlO1xuICAgICAgdm9sdW50ZWVyOiB7IG5hbWU6IHN0cmluZyB9O1xuICAgIH0+O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0F5RnNCIn0=
}),
"[project]/components/ui/toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
;
;
;
;
function Toast({ message, type, onClose }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(onClose, 5000); // Auto close after 5 seconds
        return ()=>clearTimeout(timer);
    }, [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": type === "success" ? "toast-success" : "toast-error",
        role: "status",
        "aria-live": "polite",
        className: `fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-md shadow-lg ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "sm",
                onClick: onClose,
                className: "h-auto p-1 hover:bg-white/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/toast.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function useToast() {
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (message, type)=>{
        setToast({
            message,
            type
        });
    };
    const hideToast = ()=>{
        setToast(null);
    };
    const ToastComponent = ()=>toast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
            message: toast.message,
            type: toast.type,
            onClose: hideToast
        }, void 0, false, {
            fileName: "[project]/components/ui/toast.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this) : null;
    return {
        showToast,
        ToastComponent
    };
}
}),
"[project]/app/admin/shifts/_components/ShiftForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/admin/ShiftForm.tsx
__turbopack_context__.s([
    "default",
    ()=>ShiftForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$c9f931__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:c9f931 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$6a6a99__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:6a6a99 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toast.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
// Helper to format date for datetime-local input
const formatDateTimeLocal = (date)=>{
    if (!date) return "";
    try {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    } catch  {
        return "";
    }
};
function FormMessage({ error }) {
    if (!error || error.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500 text-sm mt-1",
        children: error[0]
    }, void 0, false, {
        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
function ShiftForm({ shift, onSuccess }) {
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(shift ? async (prevState, formData)=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$6a6a99__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateShift"])(prevState, formData) : async (prevState, formData)=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$c9f931__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createShift"])(prevState, formData), {
        success: false,
        message: null,
        fieldErrors: undefined,
        data: null
    });
    // Handle success callback and show toast when state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.success && state.message) {
            showToast(state.message, "success");
            onSuccess?.();
        } else if (!state.success && state.message) {
            showToast(state.message, "error");
        }
    }, [
        state.success,
        state.message,
        onSuccess,
        showToast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: formAction,
        className: "grid gap-4 py-4",
        "data-testid": "shift-form",
        children: [
            shift && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "shiftId",
                value: shift.id
            }, void 0, false, {
                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                lineNumber: 68,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "title",
                        className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "title",
                        name: "title",
                        placeholder: "Shift title",
                        defaultValue: shift?.title || "",
                        required: true,
                        "data-testid": "input-title"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                        error: state.fieldErrors?.title
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "description",
                        className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        id: "description",
                        name: "description",
                        placeholder: "Optional detailed description of the shift",
                        defaultValue: shift?.description || "",
                        "data-testid": "textarea-description"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                        error: state.fieldErrors?.description
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "startsAt",
                                className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                children: "Start Time"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "startTime",
                                name: "startTime",
                                type: "datetime-local",
                                defaultValue: formatDateTimeLocal(shift?.startsAt),
                                required: true,
                                "data-testid": "input-start-time"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                                error: state.fieldErrors?.startTime
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "endsAt",
                                className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                children: "End Time"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "endTime",
                                name: "endTime",
                                type: "datetime-local",
                                defaultValue: formatDateTimeLocal(shift?.endsAt),
                                required: true,
                                "data-testid": "input-end-time"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                                error: state.fieldErrors?.endTime
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "maxVolunteers",
                        className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        children: "Max Volunteers"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "maxVolunteers",
                        name: "maxVolunteers",
                        type: "number",
                        min: "1",
                        defaultValue: shift?.capacity || "",
                        "data-testid": "input-max-volunteers"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                        error: state.fieldErrors?.maxVolunteers
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            state.message && !state.success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                "data-testid": "server-error",
                className: "text-sm text-red-500",
                children: state.message
            }, void 0, false, {
                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        "data-testid": "btn-save-shift",
                        children: shift ? "Save Changes" : "Create Shift"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/shifts/_components/ShiftForm.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/shifts/_components/CreateShiftDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateShiftDialog",
    ()=>CreateShiftDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$shifts$2f$_components$2f$ShiftForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/shifts/_components/ShiftForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
"use client";
;
;
;
;
;
;
function CreateShiftDialog() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFormSuccess = ()=>{
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: setIsOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    "data-testid": "btn-create-shift",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        " Create New Shift"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-[425px]",
                "data-testid": "shift-dialog",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Create New Shift"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "Fill out the form below to create a new volunteer shift."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$shifts$2f$_components$2f$ShiftForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSuccess: handleFormSuccess
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/shifts/_components/CreateShiftDialog.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/shifts/_components/EditShiftDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditShiftDialog",
    ()=>EditShiftDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$shifts$2f$_components$2f$ShiftForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/shifts/_components/ShiftForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
"use client";
;
;
;
;
;
;
function EditShiftDialog({ shift }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFormSuccess = ()=>{
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: setIsOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    "data-testid": "btn-edit-shift",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-[425px]",
                "data-testid": "shift-dialog",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Edit Shift"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "Make changes to the shift details."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$shifts$2f$_components$2f$ShiftForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        shift: shift,
                        onSuccess: handleFormSuccess
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/shifts/_components/EditShiftDialog.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogFooter",
    ()=>AlertDialogFooter,
    "AlertDialogHeader",
    ()=>AlertDialogHeader,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AlertDialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "alert-dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function AlertDialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "alert-dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function AlertDialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "alert-dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function AlertDialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "alert-dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function AlertDialogContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "alert-dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function AlertDialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function AlertDialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function AlertDialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "alert-dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
function AlertDialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "alert-dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
function AlertDialogAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
function AlertDialogCancel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/actions/data:3e2ce0 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6037a2bd3feebec05b6296e65f146bdf0e5c299ae7":"deleteShift"},"lib/actions/shift.actions.ts",""] */ __turbopack_context__.s([
    "deleteShift",
    ()=>deleteShift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteShift = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6037a2bd3feebec05b6296e65f146bdf0e5c299ae7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteShift"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2hpZnQuYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWRtaW4vc2hpZnRzL2FjdGlvbnMudHNcblwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBzaGlmdFNjaGVtYSwgc2hpZnRJZFNjaGVtYSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzXCI7XG5pbXBvcnQgeyBhc3NlcnRSb2xlLCBnZXRBY3RpbmdVc2VyIH0gZnJvbSBcIkAvbGliL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb25zXCI7XG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0IH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9ucyB9IGZyb20gJ0AvbGliL3Rlc3RTdG9yZXMnO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTaGlmdChfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXG4gICAgICBzdGFydFRpbWU6IGZvcm1EYXRhLmdldCgnc3RhcnRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgZW5kVGltZTogZm9ybURhdGEuZ2V0KCdlbmRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgbWF4Vm9sdW50ZWVyczogZm9ybURhdGEuZ2V0KCdtYXhWb2x1bnRlZXJzJyksXG4gICAgfTtcblxuICAgIC8vIFZhbGlkYXRlIHdpdGggWm9kIHNjaGVtYVxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBzaGlmdFNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWwgc2VydmVyLXNpZGUgdmFsaWRhdGlvbjogZm9yYmlkIHBhc3Qgc3RhcnQgdGltZXNcbiAgICBjb25zdCBzdGFydHNBdCA9IG5ldyBEYXRlKHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCk7XG4gICAgY29uc3QgZW5kc0F0ID0gbmV3IERhdGUodmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCk7XG4gICAgaWYgKHN0YXJ0c0F0IDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIkNhbm5vdCBjcmVhdGUgc2hpZnRzIGluIHRoZSBwYXN0LlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGluIHRoZSBmdXR1cmVcIl0gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbCBzZXJ2ZXItc2lkZSB2YWxpZGF0aW9uOiBzdGFydHNBdCBtdXN0IGJlIGJlZm9yZSBlbmRzQXRcbiAgICBpZiAoc3RhcnRzQXQgPj0gZW5kc0F0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGJlZm9yZSBlbmQgdGltZVwiXSB9LFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBNYXAgZm9ybSBmaWVsZCBuYW1lcyB0byBkYXRhYmFzZSBmaWVsZCBuYW1lc1xuICAgIGNvbnN0IGRiRGF0YSA9IHtcbiAgICAgIHRpdGxlOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICBzdGFydHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnN0YXJ0c0F0LFxuICAgICAgZW5kc0F0OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZW5kc0F0LFxuICAgICAgY2FwYWNpdHk6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5jYXBhY2l0eSxcbiAgICB9O1xuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiBkYkRhdGEsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGNyZWF0ZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2hpZnQoX3ByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICAgIGNvbnN0IGlkVmFsaWRhdGlvbiA9IHNoaWZ0SWRTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgIHNoaWZ0SWQ6IGZvcm1EYXRhLmdldCgnc2hpZnRJZCcpLFxuICAgIH0pO1xuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgc3RhcnRzQXQ6IGZvcm1EYXRhLmdldCgnc3RhcnRzQXQnKSBhcyBzdHJpbmcsXG4gICAgICBlbmRzQXQ6IGZvcm1EYXRhLmdldCgnZW5kc0F0JykgYXMgc3RyaW5nLFxuICAgICAgY2FwYWNpdHk6IGZvcm1EYXRhLmdldCgnY2FwYWNpdHknKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHNoaWZ0U2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIGZvcm0gZmllbGQgbmFtZXMgdG8gZGF0YWJhc2UgZmllbGQgbmFtZXNcbiAgICBjb25zdCBkYkRhdGEgPSB7XG4gICAgICB0aXRsZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnRpdGxlLFxuICAgICAgc3RhcnRzQXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCxcbiAgICAgIGVuZHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCxcbiAgICAgIGNhcGFjaXR5OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuY2FwYWNpdHksXG4gICAgfTtcblxuICAgIGF3YWl0IHByaXNtYS5zaGlmdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQgfSxcbiAgICAgIGRhdGE6IGRiRGF0YSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NoaWZ0c1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi92b2x1bnRlZXJcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyL215LXNoaWZ0c1wiKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gdXBkYXRlIHNoaWZ0XCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGlmdEFmZmVjdGVkQ291bnQoc2hpZnRJZDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzaGlmdFdpdGhTaWdudXBzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHNoaWZ0SWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc2lnbnVwczoge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBjYW5jZWxsZWRBdDogbnVsbCwgLy8gT25seSBjb3VudCBhY3RpdmUgc2lnbnVwc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBzaGlmdFdpdGhTaWdudXBzPy5zaWdudXBzLmxlbmd0aCB8fCAwO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYWZmZWN0ZWQgY291bnQ6JywgZXJyb3IpO1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbi8qKlxuICogSGFyZC1kZWxldGUgYSBzaGlmdCBvbmx5IHdoZW4gdGhlcmUgYXJlIG5vIGFjdGl2ZSBzaWdudXBzLlxuICogT3RoZXJ3aXNlIHJldHVybiBhIHJlc3VsdCB0aGUgVUkgdXNlcyB0byByb3V0ZSB0byBidWxrLWNhbmNlbC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNoaWZ0KHByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IGFmZmVjdGVkVm9sdW50ZWVyQ291bnQ6IG51bWJlciB9Pj4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgaWRWYWxpZGF0aW9uID0gc2hpZnRJZFNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgICAgc2hpZnRJZDogZm9ybURhdGEuZ2V0KCdzaGlmdElkJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIWlkVmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IGlkVmFsaWRhdGlvbi5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHNoaWZ0SWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ1NoaWZ0IGhhcyBhY3RpdmUgc2lnbnVwczsgdXNlIGNhbmNlbCBpbnN0ZWFkLicsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB7IHNoaWZ0SWQ6IFsnQ2Fubm90IGRlbGV0ZSBzaGlmdCB3aXRoIGFjdGl2ZSBzaWdudXBzJ10gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YTogeyBkZWxldGVkQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogJ0RFTEVURUQnIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3NoaWZ0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ISBZb3UgY2FuIHVuZG8gdGhpcyBhY3Rpb24gd2l0aGluIDEwIHNlY29uZHMuXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogeyBhZmZlY3RlZFZvbHVudGVlckNvdW50OiBhY3RpdmVDb3VudCB9LFxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBzaGlmdC5cIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVTaGlmdChwcmV2U3RhdGU6IEFjdGlvblJlc3VsdCwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcbiAgICBjb25zdCBpZFZhbGlkYXRpb24gPSBzaGlmdElkU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBzaGlmdElkOiBmb3JtRGF0YS5nZXQoJ3NoaWZ0SWQnKSxcbiAgICB9KTtcblxuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgc2hpZnQgd2FzIHJlY2VudGx5IGRlbGV0ZWQgKHdpdGhpbiBsYXN0IDEwIHNlY29uZHMpXG4gICAgY29uc3Qgc2hpZnQgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgc2VsZWN0OiB7IHN0YXR1czogdHJ1ZSwgZGVsZXRlZEF0OiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXNoaWZ0IHx8IHNoaWZ0LnN0YXR1cyAhPT0gXCJERUxFVEVEXCIgfHwgIXNoaWZ0LmRlbGV0ZWRBdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgbm90IGZvdW5kIG9yIG5vdCByZWNlbnRseSBkZWxldGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3aXRoaW4gdW5kbyB3aW5kb3cgKDEwIHNlY29uZHMpXG4gICAgY29uc3QgdGltZVNpbmNlRGVsZXRpb24gPSBEYXRlLm5vdygpIC0gc2hpZnQuZGVsZXRlZEF0LmdldFRpbWUoKTtcbiAgICBpZiAodGltZVNpbmNlRGVsZXRpb24gPiAxMDAwMCkgeyAvLyAxMCBzZWNvbmRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJUb28gbGF0ZSB0byB1bmRvIGRlbGV0aW9uLiBTaGlmdCBwZXJtYW5lbnRseSBkZWxldGVkIGFmdGVyIDEwIHNlY29uZHMuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgdGhlIHNoaWZ0XG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXM6IFwiQUNUSVZFXCIsXG4gICAgICAgIGRlbGV0ZWRBdDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgcmVzdG9yZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVzdG9yaW5nIHNoaWZ0OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJGYWlsZWQgdG8gcmVzdG9yZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsU2hpZnRzV2l0aFNpZ251cHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5WT0xVTlRFRVIsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCByb3dzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgc3RhdHVzOiBcIkFDVElWRVwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBzdGFydHNBdDogXCJhc2NcIiB9LFxuICAgIGluY2x1ZGU6IHsgX2NvdW50OiB7IHNlbGVjdDogeyBzaWdudXBzOiB0cnVlIH0gfSB9LFxuICB9KTtcblxuICByZXR1cm4gcm93cy5tYXAocyA9PiAoe1xuICAgIC4uLnMsXG4gICAgc3RhcnRUaW1lOiBzLnN0YXJ0c0F0LCAvLyBNYXAgc3RhcnRzQXQgdG8gc3RhcnRUaW1lIGZvciBjb21wYXRpYmlsaXR5XG4gICAgZW5kVGltZTogcy5lbmRzQXQsIC8vIE1hcCBlbmRzQXQgdG8gZW5kVGltZSBmb3IgY29tcGF0aWJpbGl0eVxuICAgIGlzRGVsZXRlZDogcy5zdGF0dXMgPT09IFwiREVMRVRFRFwiLCAvLyBDaGVjayBzdGF0dXMgZm9yIGRlbGV0aW9uXG4gICAgc2lnbnVwQ291bnQ6IHMuX2NvdW50Py5zaWdudXBzID8/IDBcbiAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXlTaGlmdHModXNlcklkOiBzdHJpbmcpIHtcbiAgLy8gRW5zdXJlIHVzZXIgY2FuIG9ubHkgdmlldyB0aGVpciBvd24gc2hpZnRzIChza2lwIGluIHRlc3QgZW52aXJvbm1lbnQpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRBY3RpbmdVc2VyKCk7XG4gICAgaWYgKCFjdXJyZW50VXNlciB8fCBjdXJyZW50VXNlci5pZCAhPT0gdXNlcklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQ6IENhbiBvbmx5IHZpZXcgeW91ciBvd24gc2hpZnRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnNlZCA9IHoub2JqZWN0KHsgdXNlcklkOiB6LnN0cmluZygpIH0pLnNhZmVQYXJzZSh7IHVzZXJJZCB9KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXNlciBJRFwiKTtcbiAgfVxuXG4gIGNvbnN0IHNoaWZ0cyA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czogeyBub3Q6IFwiREVMRVRFRFwiIH0sIC8vIEVxdWl2YWxlbnQgdG8gaXNEZWxldGVkOiBmYWxzZSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBzaWdudXBzOiB7XG4gICAgICAgIHNvbWU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHsgc3RhcnRzQXQ6IFwiYXNjXCIgfSwgLy8gV2lsbCBiZSBtYXBwZWQgdG8gc3RhcnRUaW1lIGluIERUT1xuICAgIGluY2x1ZGU6IHtcbiAgICAgIF9jb3VudDoge1xuICAgICAgICBzZWxlY3Q6IHsgc2lnbnVwczogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICAgIGNhbmNlbGxlZEF0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsZWRBdDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsYXRpb25SZWFzb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzaGlmdHMubWFwKHNoaWZ0ID0+ICh7XG4gICAgLi4uc2hpZnQsXG4gICAgc2lnbnVwQ291bnQ6IHNoaWZ0Ll9jb3VudC5zaWdudXBzLFxuICAgIG15U2lnbnVwOiBzaGlmdC5zaWdudXBzPy5bMF0sIC8vIFNhZmV0eSBjaGVjayBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlbGV0ZWRTaGlmdHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5BRE1JTl0pO1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IGFsbCBkZWxldGVkIHNoaWZ0c1xuICBjb25zdCBzaGlmdHMgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBzdGF0dXM6IFwiREVMRVRFRFwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBkZWxldGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIC8vIFRoZW4gZ2V0IHNpZ251cCBjb3VudHMgc2VwYXJhdGVseVxuICBjb25zdCBzaGlmdHNXaXRoQ291bnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgc2hpZnRzLm1hcChhc3luYyAoc2hpZnQpID0+IHtcbiAgICAgIGNvbnN0IHNpZ251cENvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHsgc2hpZnRJZDogc2hpZnQuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hpZnQsXG4gICAgICAgIHNpZ251cENvdW50LFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBzaGlmdHNXaXRoQ291bnRzO1xufVxuXG4vKipcbiAqIEJ1bGstY2FuY2VsIHNlbGVjdGVkIHNoaWZ0czpcbiAqIC0gU2V0IGlzRGVsZXRlZD10cnVlIG9uIGVhY2ggc2hpZnRcbiAqIC0gQ2FuY2VsIGFsbCBhY3RpdmUgc2lnbnVwcyB3aXRoIHJlYXNvblxuICogLSBFbWl0IG9uZSBhdWRpdCBwZXIgc2hpZnQgYW5kIG9uZSBub3RpZmljYXRpb24gcGVyIGFmZmVjdGVkIHZvbHVudGVlclxuICogLSBSZXZhbGlkYXRlIGFkbWluICsgdm9sdW50ZWVyIHBhZ2VzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ2FuY2VsU2hpZnRzKHBhcmFtczoge1xuICBpZHM6IG51bWJlcltdO1xuICByZWFzb246IHN0cmluZztcbiAgYWN0b3JJZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7IGlkcywgcmVhc29uLCBhY3RvcklkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgZm9yIChjb25zdCBzaGlmdElkIG9mIGlkcykge1xuICAgIGNvbnN0IGFjdGl2ZVNpZ251cHMgPSBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgc2hpZnRJZCwgY2FuY2VsbGVkQXQ6IG51bGwgfSxcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdm9sdW50ZWVySWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIC8vIG1hcmsgc2hpZnQgYXMgZGVsZXRlZCAoc29mdClcbiAgICBhd2FpdCBwcmlzbWEuc2hpZnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBzaGlmdElkIH0sXG4gICAgICBkYXRhOiB7IHN0YXR1czogXCJERUxFVEVEXCIsIGRlbGV0ZWRBdDogbm93IH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlU2lnbnVwcy5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAudXBkYXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYW5jZWxsZWRBdDogbm93LFxuICAgICAgICAgIGNhbmNlbGxhdGlvblJlYXNvbjogcmVhc29uLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBhdWRpdCByZWNvcmQgaW4gZGF0YWJhc2VcbiAgICAgIGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIGFjdG9yVXNlcklkOiBhY3RvcklkLFxuICAgICAgICAgIGFmZmVjdGVkQ291bnQ6IGFjdGl2ZVNpZ251cHMubGVuZ3RoLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBub3RpZmljYXRpb25zIChvbmUgcGVyIHNpZ251cCkgLSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgYWN0aXZlU2lnbnVwcykge1xuICAgICAgICBub3RpZmljYXRpb25zLnB1c2goe1xuICAgICAgICAgIHVzZXJJZDogcy52b2x1bnRlZXJJZCxcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgICB0eXBlOiAnU0hJRlRfQ0FOQ0VMTEVEJyxcbiAgICAgICAgICBhdDogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdGlsbCB3cml0ZSBhbiBhdWRpdCB3aXRoIDAgYWZmZWN0ZWQgKGtlZXBzIHRlc3RzIGRldGVybWluaXN0aWMpXG4gICAgICBhd2FpdCBwcmlzbWEuc2hpZnRDYW5jZWxsYXRpb25BdWRpdC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2hpZnRJZCxcbiAgICAgICAgICBhY3RvclVzZXJJZDogYWN0b3JJZCxcbiAgICAgICAgICBhZmZlY3RlZENvdW50OiAwLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vc2hpZnRzJyk7XG4gIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuICByZXZhbGlkYXRlUGF0aCgnL3ZvbHVudGVlci9teS1zaGlmdHMnKTtcblxuICAvLyBDYWxjdWxhdGUgYWZmZWN0ZWQgY291bnQgZnJvbSBkYXRhYmFzZVxuICBjb25zdCBhZmZlY3RlZCA9IGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmFnZ3JlZ2F0ZSh7XG4gICAgd2hlcmU6IHsgc2hpZnRJZDogeyBpbjogaWRzIH0gfSxcbiAgICBfc3VtOiB7IGFmZmVjdGVkQ291bnQ6IHRydWUgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgb2s6IHRydWUsIGFmZmVjdGVkOiBhZmZlY3RlZC5fc3VtLmFmZmVjdGVkQ291bnQgfHwgMCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hpZnRXaXRoU2lnbnVwcyhzaGlmdElkOiBudW1iZXIpIHtcbiAgLy8gU2tpcCBhdXRoZW50aWNhdGlvbiBpbiB0ZXN0IGVudmlyb25tZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShbVXNlclJvbGUuU1RBRkYsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCBzaGlmdCA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2hpZnRJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHZvbHVudGVlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXNoaWZ0KSByZXR1cm4gbnVsbDtcblxuICAvLyBUeXBlIGFzc2VydGlvbiB0byBlbnN1cmUgc2lnbnVwcyBpcyBpbmNsdWRlZFxuICByZXR1cm4gc2hpZnQgYXMgdHlwZW9mIHNoaWZ0ICYge1xuICAgIHNpZ251cHM6IEFycmF5PHtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgICBzaWdudXBUaW1lOiBEYXRlO1xuICAgICAgdm9sdW50ZWVyOiB7IG5hbWU6IHN0cmluZyB9O1xuICAgIH0+O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FtTHNCIn0=
}),
"[project]/lib/actions/data:d2c6dc [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6075f805fb9ba69fde2d7c104b581272688c942431":"restoreShift"},"lib/actions/shift.actions.ts",""] */ __turbopack_context__.s([
    "restoreShift",
    ()=>restoreShift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var restoreShift = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6075f805fb9ba69fde2d7c104b581272688c942431", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "restoreShift"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2hpZnQuYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWRtaW4vc2hpZnRzL2FjdGlvbnMudHNcblwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBzaGlmdFNjaGVtYSwgc2hpZnRJZFNjaGVtYSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzXCI7XG5pbXBvcnQgeyBhc3NlcnRSb2xlLCBnZXRBY3RpbmdVc2VyIH0gZnJvbSBcIkAvbGliL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb25zXCI7XG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0IH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9ucyB9IGZyb20gJ0AvbGliL3Rlc3RTdG9yZXMnO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTaGlmdChfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXG4gICAgICBzdGFydFRpbWU6IGZvcm1EYXRhLmdldCgnc3RhcnRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgZW5kVGltZTogZm9ybURhdGEuZ2V0KCdlbmRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgbWF4Vm9sdW50ZWVyczogZm9ybURhdGEuZ2V0KCdtYXhWb2x1bnRlZXJzJyksXG4gICAgfTtcblxuICAgIC8vIFZhbGlkYXRlIHdpdGggWm9kIHNjaGVtYVxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBzaGlmdFNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWwgc2VydmVyLXNpZGUgdmFsaWRhdGlvbjogZm9yYmlkIHBhc3Qgc3RhcnQgdGltZXNcbiAgICBjb25zdCBzdGFydHNBdCA9IG5ldyBEYXRlKHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCk7XG4gICAgY29uc3QgZW5kc0F0ID0gbmV3IERhdGUodmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCk7XG4gICAgaWYgKHN0YXJ0c0F0IDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIkNhbm5vdCBjcmVhdGUgc2hpZnRzIGluIHRoZSBwYXN0LlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGluIHRoZSBmdXR1cmVcIl0gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbCBzZXJ2ZXItc2lkZSB2YWxpZGF0aW9uOiBzdGFydHNBdCBtdXN0IGJlIGJlZm9yZSBlbmRzQXRcbiAgICBpZiAoc3RhcnRzQXQgPj0gZW5kc0F0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGJlZm9yZSBlbmQgdGltZVwiXSB9LFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBNYXAgZm9ybSBmaWVsZCBuYW1lcyB0byBkYXRhYmFzZSBmaWVsZCBuYW1lc1xuICAgIGNvbnN0IGRiRGF0YSA9IHtcbiAgICAgIHRpdGxlOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICBzdGFydHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnN0YXJ0c0F0LFxuICAgICAgZW5kc0F0OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZW5kc0F0LFxuICAgICAgY2FwYWNpdHk6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5jYXBhY2l0eSxcbiAgICB9O1xuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiBkYkRhdGEsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGNyZWF0ZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2hpZnQoX3ByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICAgIGNvbnN0IGlkVmFsaWRhdGlvbiA9IHNoaWZ0SWRTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgIHNoaWZ0SWQ6IGZvcm1EYXRhLmdldCgnc2hpZnRJZCcpLFxuICAgIH0pO1xuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgc3RhcnRzQXQ6IGZvcm1EYXRhLmdldCgnc3RhcnRzQXQnKSBhcyBzdHJpbmcsXG4gICAgICBlbmRzQXQ6IGZvcm1EYXRhLmdldCgnZW5kc0F0JykgYXMgc3RyaW5nLFxuICAgICAgY2FwYWNpdHk6IGZvcm1EYXRhLmdldCgnY2FwYWNpdHknKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHNoaWZ0U2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIGZvcm0gZmllbGQgbmFtZXMgdG8gZGF0YWJhc2UgZmllbGQgbmFtZXNcbiAgICBjb25zdCBkYkRhdGEgPSB7XG4gICAgICB0aXRsZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnRpdGxlLFxuICAgICAgc3RhcnRzQXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCxcbiAgICAgIGVuZHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCxcbiAgICAgIGNhcGFjaXR5OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuY2FwYWNpdHksXG4gICAgfTtcblxuICAgIGF3YWl0IHByaXNtYS5zaGlmdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQgfSxcbiAgICAgIGRhdGE6IGRiRGF0YSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NoaWZ0c1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi92b2x1bnRlZXJcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyL215LXNoaWZ0c1wiKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gdXBkYXRlIHNoaWZ0XCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGlmdEFmZmVjdGVkQ291bnQoc2hpZnRJZDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzaGlmdFdpdGhTaWdudXBzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHNoaWZ0SWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc2lnbnVwczoge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBjYW5jZWxsZWRBdDogbnVsbCwgLy8gT25seSBjb3VudCBhY3RpdmUgc2lnbnVwc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBzaGlmdFdpdGhTaWdudXBzPy5zaWdudXBzLmxlbmd0aCB8fCAwO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYWZmZWN0ZWQgY291bnQ6JywgZXJyb3IpO1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbi8qKlxuICogSGFyZC1kZWxldGUgYSBzaGlmdCBvbmx5IHdoZW4gdGhlcmUgYXJlIG5vIGFjdGl2ZSBzaWdudXBzLlxuICogT3RoZXJ3aXNlIHJldHVybiBhIHJlc3VsdCB0aGUgVUkgdXNlcyB0byByb3V0ZSB0byBidWxrLWNhbmNlbC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNoaWZ0KHByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IGFmZmVjdGVkVm9sdW50ZWVyQ291bnQ6IG51bWJlciB9Pj4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgaWRWYWxpZGF0aW9uID0gc2hpZnRJZFNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgICAgc2hpZnRJZDogZm9ybURhdGEuZ2V0KCdzaGlmdElkJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIWlkVmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IGlkVmFsaWRhdGlvbi5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHNoaWZ0SWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ1NoaWZ0IGhhcyBhY3RpdmUgc2lnbnVwczsgdXNlIGNhbmNlbCBpbnN0ZWFkLicsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB7IHNoaWZ0SWQ6IFsnQ2Fubm90IGRlbGV0ZSBzaGlmdCB3aXRoIGFjdGl2ZSBzaWdudXBzJ10gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YTogeyBkZWxldGVkQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogJ0RFTEVURUQnIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3NoaWZ0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ISBZb3UgY2FuIHVuZG8gdGhpcyBhY3Rpb24gd2l0aGluIDEwIHNlY29uZHMuXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogeyBhZmZlY3RlZFZvbHVudGVlckNvdW50OiBhY3RpdmVDb3VudCB9LFxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBzaGlmdC5cIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVTaGlmdChwcmV2U3RhdGU6IEFjdGlvblJlc3VsdCwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcbiAgICBjb25zdCBpZFZhbGlkYXRpb24gPSBzaGlmdElkU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBzaGlmdElkOiBmb3JtRGF0YS5nZXQoJ3NoaWZ0SWQnKSxcbiAgICB9KTtcblxuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgc2hpZnQgd2FzIHJlY2VudGx5IGRlbGV0ZWQgKHdpdGhpbiBsYXN0IDEwIHNlY29uZHMpXG4gICAgY29uc3Qgc2hpZnQgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgc2VsZWN0OiB7IHN0YXR1czogdHJ1ZSwgZGVsZXRlZEF0OiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXNoaWZ0IHx8IHNoaWZ0LnN0YXR1cyAhPT0gXCJERUxFVEVEXCIgfHwgIXNoaWZ0LmRlbGV0ZWRBdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgbm90IGZvdW5kIG9yIG5vdCByZWNlbnRseSBkZWxldGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3aXRoaW4gdW5kbyB3aW5kb3cgKDEwIHNlY29uZHMpXG4gICAgY29uc3QgdGltZVNpbmNlRGVsZXRpb24gPSBEYXRlLm5vdygpIC0gc2hpZnQuZGVsZXRlZEF0LmdldFRpbWUoKTtcbiAgICBpZiAodGltZVNpbmNlRGVsZXRpb24gPiAxMDAwMCkgeyAvLyAxMCBzZWNvbmRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJUb28gbGF0ZSB0byB1bmRvIGRlbGV0aW9uLiBTaGlmdCBwZXJtYW5lbnRseSBkZWxldGVkIGFmdGVyIDEwIHNlY29uZHMuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgdGhlIHNoaWZ0XG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXM6IFwiQUNUSVZFXCIsXG4gICAgICAgIGRlbGV0ZWRBdDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgcmVzdG9yZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVzdG9yaW5nIHNoaWZ0OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJGYWlsZWQgdG8gcmVzdG9yZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsU2hpZnRzV2l0aFNpZ251cHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5WT0xVTlRFRVIsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCByb3dzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgc3RhdHVzOiBcIkFDVElWRVwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBzdGFydHNBdDogXCJhc2NcIiB9LFxuICAgIGluY2x1ZGU6IHsgX2NvdW50OiB7IHNlbGVjdDogeyBzaWdudXBzOiB0cnVlIH0gfSB9LFxuICB9KTtcblxuICByZXR1cm4gcm93cy5tYXAocyA9PiAoe1xuICAgIC4uLnMsXG4gICAgc3RhcnRUaW1lOiBzLnN0YXJ0c0F0LCAvLyBNYXAgc3RhcnRzQXQgdG8gc3RhcnRUaW1lIGZvciBjb21wYXRpYmlsaXR5XG4gICAgZW5kVGltZTogcy5lbmRzQXQsIC8vIE1hcCBlbmRzQXQgdG8gZW5kVGltZSBmb3IgY29tcGF0aWJpbGl0eVxuICAgIGlzRGVsZXRlZDogcy5zdGF0dXMgPT09IFwiREVMRVRFRFwiLCAvLyBDaGVjayBzdGF0dXMgZm9yIGRlbGV0aW9uXG4gICAgc2lnbnVwQ291bnQ6IHMuX2NvdW50Py5zaWdudXBzID8/IDBcbiAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXlTaGlmdHModXNlcklkOiBzdHJpbmcpIHtcbiAgLy8gRW5zdXJlIHVzZXIgY2FuIG9ubHkgdmlldyB0aGVpciBvd24gc2hpZnRzIChza2lwIGluIHRlc3QgZW52aXJvbm1lbnQpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRBY3RpbmdVc2VyKCk7XG4gICAgaWYgKCFjdXJyZW50VXNlciB8fCBjdXJyZW50VXNlci5pZCAhPT0gdXNlcklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQ6IENhbiBvbmx5IHZpZXcgeW91ciBvd24gc2hpZnRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnNlZCA9IHoub2JqZWN0KHsgdXNlcklkOiB6LnN0cmluZygpIH0pLnNhZmVQYXJzZSh7IHVzZXJJZCB9KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXNlciBJRFwiKTtcbiAgfVxuXG4gIGNvbnN0IHNoaWZ0cyA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czogeyBub3Q6IFwiREVMRVRFRFwiIH0sIC8vIEVxdWl2YWxlbnQgdG8gaXNEZWxldGVkOiBmYWxzZSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBzaWdudXBzOiB7XG4gICAgICAgIHNvbWU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHsgc3RhcnRzQXQ6IFwiYXNjXCIgfSwgLy8gV2lsbCBiZSBtYXBwZWQgdG8gc3RhcnRUaW1lIGluIERUT1xuICAgIGluY2x1ZGU6IHtcbiAgICAgIF9jb3VudDoge1xuICAgICAgICBzZWxlY3Q6IHsgc2lnbnVwczogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICAgIGNhbmNlbGxlZEF0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsZWRBdDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsYXRpb25SZWFzb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzaGlmdHMubWFwKHNoaWZ0ID0+ICh7XG4gICAgLi4uc2hpZnQsXG4gICAgc2lnbnVwQ291bnQ6IHNoaWZ0Ll9jb3VudC5zaWdudXBzLFxuICAgIG15U2lnbnVwOiBzaGlmdC5zaWdudXBzPy5bMF0sIC8vIFNhZmV0eSBjaGVjayBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlbGV0ZWRTaGlmdHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5BRE1JTl0pO1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IGFsbCBkZWxldGVkIHNoaWZ0c1xuICBjb25zdCBzaGlmdHMgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBzdGF0dXM6IFwiREVMRVRFRFwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBkZWxldGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIC8vIFRoZW4gZ2V0IHNpZ251cCBjb3VudHMgc2VwYXJhdGVseVxuICBjb25zdCBzaGlmdHNXaXRoQ291bnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgc2hpZnRzLm1hcChhc3luYyAoc2hpZnQpID0+IHtcbiAgICAgIGNvbnN0IHNpZ251cENvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHsgc2hpZnRJZDogc2hpZnQuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hpZnQsXG4gICAgICAgIHNpZ251cENvdW50LFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBzaGlmdHNXaXRoQ291bnRzO1xufVxuXG4vKipcbiAqIEJ1bGstY2FuY2VsIHNlbGVjdGVkIHNoaWZ0czpcbiAqIC0gU2V0IGlzRGVsZXRlZD10cnVlIG9uIGVhY2ggc2hpZnRcbiAqIC0gQ2FuY2VsIGFsbCBhY3RpdmUgc2lnbnVwcyB3aXRoIHJlYXNvblxuICogLSBFbWl0IG9uZSBhdWRpdCBwZXIgc2hpZnQgYW5kIG9uZSBub3RpZmljYXRpb24gcGVyIGFmZmVjdGVkIHZvbHVudGVlclxuICogLSBSZXZhbGlkYXRlIGFkbWluICsgdm9sdW50ZWVyIHBhZ2VzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ2FuY2VsU2hpZnRzKHBhcmFtczoge1xuICBpZHM6IG51bWJlcltdO1xuICByZWFzb246IHN0cmluZztcbiAgYWN0b3JJZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7IGlkcywgcmVhc29uLCBhY3RvcklkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgZm9yIChjb25zdCBzaGlmdElkIG9mIGlkcykge1xuICAgIGNvbnN0IGFjdGl2ZVNpZ251cHMgPSBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgc2hpZnRJZCwgY2FuY2VsbGVkQXQ6IG51bGwgfSxcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdm9sdW50ZWVySWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIC8vIG1hcmsgc2hpZnQgYXMgZGVsZXRlZCAoc29mdClcbiAgICBhd2FpdCBwcmlzbWEuc2hpZnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBzaGlmdElkIH0sXG4gICAgICBkYXRhOiB7IHN0YXR1czogXCJERUxFVEVEXCIsIGRlbGV0ZWRBdDogbm93IH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlU2lnbnVwcy5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAudXBkYXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYW5jZWxsZWRBdDogbm93LFxuICAgICAgICAgIGNhbmNlbGxhdGlvblJlYXNvbjogcmVhc29uLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBhdWRpdCByZWNvcmQgaW4gZGF0YWJhc2VcbiAgICAgIGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIGFjdG9yVXNlcklkOiBhY3RvcklkLFxuICAgICAgICAgIGFmZmVjdGVkQ291bnQ6IGFjdGl2ZVNpZ251cHMubGVuZ3RoLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBub3RpZmljYXRpb25zIChvbmUgcGVyIHNpZ251cCkgLSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgYWN0aXZlU2lnbnVwcykge1xuICAgICAgICBub3RpZmljYXRpb25zLnB1c2goe1xuICAgICAgICAgIHVzZXJJZDogcy52b2x1bnRlZXJJZCxcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgICB0eXBlOiAnU0hJRlRfQ0FOQ0VMTEVEJyxcbiAgICAgICAgICBhdDogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdGlsbCB3cml0ZSBhbiBhdWRpdCB3aXRoIDAgYWZmZWN0ZWQgKGtlZXBzIHRlc3RzIGRldGVybWluaXN0aWMpXG4gICAgICBhd2FpdCBwcmlzbWEuc2hpZnRDYW5jZWxsYXRpb25BdWRpdC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2hpZnRJZCxcbiAgICAgICAgICBhY3RvclVzZXJJZDogYWN0b3JJZCxcbiAgICAgICAgICBhZmZlY3RlZENvdW50OiAwLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vc2hpZnRzJyk7XG4gIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuICByZXZhbGlkYXRlUGF0aCgnL3ZvbHVudGVlci9teS1zaGlmdHMnKTtcblxuICAvLyBDYWxjdWxhdGUgYWZmZWN0ZWQgY291bnQgZnJvbSBkYXRhYmFzZVxuICBjb25zdCBhZmZlY3RlZCA9IGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmFnZ3JlZ2F0ZSh7XG4gICAgd2hlcmU6IHsgc2hpZnRJZDogeyBpbjogaWRzIH0gfSxcbiAgICBfc3VtOiB7IGFmZmVjdGVkQ291bnQ6IHRydWUgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgb2s6IHRydWUsIGFmZmVjdGVkOiBhZmZlY3RlZC5fc3VtLmFmZmVjdGVkQ291bnQgfHwgMCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hpZnRXaXRoU2lnbnVwcyhzaGlmdElkOiBudW1iZXIpIHtcbiAgLy8gU2tpcCBhdXRoZW50aWNhdGlvbiBpbiB0ZXN0IGVudmlyb25tZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShbVXNlclJvbGUuU1RBRkYsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCBzaGlmdCA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2hpZnRJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHZvbHVudGVlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXNoaWZ0KSByZXR1cm4gbnVsbDtcblxuICAvLyBUeXBlIGFzc2VydGlvbiB0byBlbnN1cmUgc2lnbnVwcyBpcyBpbmNsdWRlZFxuICByZXR1cm4gc2hpZnQgYXMgdHlwZW9mIHNoaWZ0ICYge1xuICAgIHNpZ251cHM6IEFycmF5PHtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgICBzaWdudXBUaW1lOiBEYXRlO1xuICAgICAgdm9sdW50ZWVyOiB7IG5hbWU6IHN0cmluZyB9O1xuICAgIH0+O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrU0EwT3NCIn0=
}),
"[project]/lib/actions/data:7c35de [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d2ce6ee3c704fdf4382853c41a2bddd342c9b6b4":"getShiftAffectedCount"},"lib/actions/shift.actions.ts",""] */ __turbopack_context__.s([
    "getShiftAffectedCount",
    ()=>getShiftAffectedCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getShiftAffectedCount = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40d2ce6ee3c704fdf4382853c41a2bddd342c9b6b4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getShiftAffectedCount"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2hpZnQuYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWRtaW4vc2hpZnRzL2FjdGlvbnMudHNcblwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBzaGlmdFNjaGVtYSwgc2hpZnRJZFNjaGVtYSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzXCI7XG5pbXBvcnQgeyBhc3NlcnRSb2xlLCBnZXRBY3RpbmdVc2VyIH0gZnJvbSBcIkAvbGliL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb25zXCI7XG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0IH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9ucyB9IGZyb20gJ0AvbGliL3Rlc3RTdG9yZXMnO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTaGlmdChfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXG4gICAgICBzdGFydFRpbWU6IGZvcm1EYXRhLmdldCgnc3RhcnRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgZW5kVGltZTogZm9ybURhdGEuZ2V0KCdlbmRUaW1lJykgYXMgc3RyaW5nLFxuICAgICAgbWF4Vm9sdW50ZWVyczogZm9ybURhdGEuZ2V0KCdtYXhWb2x1bnRlZXJzJyksXG4gICAgfTtcblxuICAgIC8vIFZhbGlkYXRlIHdpdGggWm9kIHNjaGVtYVxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBzaGlmdFNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWwgc2VydmVyLXNpZGUgdmFsaWRhdGlvbjogZm9yYmlkIHBhc3Qgc3RhcnQgdGltZXNcbiAgICBjb25zdCBzdGFydHNBdCA9IG5ldyBEYXRlKHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCk7XG4gICAgY29uc3QgZW5kc0F0ID0gbmV3IERhdGUodmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCk7XG4gICAgaWYgKHN0YXJ0c0F0IDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIkNhbm5vdCBjcmVhdGUgc2hpZnRzIGluIHRoZSBwYXN0LlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGluIHRoZSBmdXR1cmVcIl0gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbCBzZXJ2ZXItc2lkZSB2YWxpZGF0aW9uOiBzdGFydHNBdCBtdXN0IGJlIGJlZm9yZSBlbmRzQXRcbiAgICBpZiAoc3RhcnRzQXQgPj0gZW5kc0F0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogeyBzdGFydHNBdDogW1wiU3RhcnQgdGltZSBtdXN0IGJlIGJlZm9yZSBlbmQgdGltZVwiXSB9LFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBNYXAgZm9ybSBmaWVsZCBuYW1lcyB0byBkYXRhYmFzZSBmaWVsZCBuYW1lc1xuICAgIGNvbnN0IGRiRGF0YSA9IHtcbiAgICAgIHRpdGxlOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICBzdGFydHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnN0YXJ0c0F0LFxuICAgICAgZW5kc0F0OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZW5kc0F0LFxuICAgICAgY2FwYWNpdHk6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5jYXBhY2l0eSxcbiAgICB9O1xuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiBkYkRhdGEsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGNyZWF0ZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2hpZnQoX3ByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICAgIGNvbnN0IGlkVmFsaWRhdGlvbiA9IHNoaWZ0SWRTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgIHNoaWZ0SWQ6IGZvcm1EYXRhLmdldCgnc2hpZnRJZCcpLFxuICAgIH0pO1xuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxuICAgICAgc3RhcnRzQXQ6IGZvcm1EYXRhLmdldCgnc3RhcnRzQXQnKSBhcyBzdHJpbmcsXG4gICAgICBlbmRzQXQ6IGZvcm1EYXRhLmdldCgnZW5kc0F0JykgYXMgc3RyaW5nLFxuICAgICAgY2FwYWNpdHk6IGZvcm1EYXRhLmdldCgnY2FwYWNpdHknKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHNoaWZ0U2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIGZvcm0gZmllbGQgbmFtZXMgdG8gZGF0YWJhc2UgZmllbGQgbmFtZXNcbiAgICBjb25zdCBkYkRhdGEgPSB7XG4gICAgICB0aXRsZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnRpdGxlLFxuICAgICAgc3RhcnRzQXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5zdGFydHNBdCxcbiAgICAgIGVuZHNBdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmVuZHNBdCxcbiAgICAgIGNhcGFjaXR5OiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuY2FwYWNpdHksXG4gICAgfTtcblxuICAgIGF3YWl0IHByaXNtYS5zaGlmdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQgfSxcbiAgICAgIGRhdGE6IGRiRGF0YSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NoaWZ0c1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi92b2x1bnRlZXJcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyL215LXNoaWZ0c1wiKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gdXBkYXRlIHNoaWZ0XCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGlmdEFmZmVjdGVkQ291bnQoc2hpZnRJZDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzaGlmdFdpdGhTaWdudXBzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHNoaWZ0SWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc2lnbnVwczoge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBjYW5jZWxsZWRBdDogbnVsbCwgLy8gT25seSBjb3VudCBhY3RpdmUgc2lnbnVwc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBzaGlmdFdpdGhTaWdudXBzPy5zaWdudXBzLmxlbmd0aCB8fCAwO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYWZmZWN0ZWQgY291bnQ6JywgZXJyb3IpO1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbi8qKlxuICogSGFyZC1kZWxldGUgYSBzaGlmdCBvbmx5IHdoZW4gdGhlcmUgYXJlIG5vIGFjdGl2ZSBzaWdudXBzLlxuICogT3RoZXJ3aXNlIHJldHVybiBhIHJlc3VsdCB0aGUgVUkgdXNlcyB0byByb3V0ZSB0byBidWxrLWNhbmNlbC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNoaWZ0KHByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdDx7IGFmZmVjdGVkVm9sdW50ZWVyQ291bnQ6IG51bWJlciB9Pj4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgaWRWYWxpZGF0aW9uID0gc2hpZnRJZFNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgICAgc2hpZnRJZDogZm9ybURhdGEuZ2V0KCdzaGlmdElkJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIWlkVmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IGlkVmFsaWRhdGlvbi5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHNoaWZ0SWQ6IGlkVmFsaWRhdGlvbi5kYXRhLnNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ1NoaWZ0IGhhcyBhY3RpdmUgc2lnbnVwczsgdXNlIGNhbmNlbCBpbnN0ZWFkLicsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB7IHNoaWZ0SWQ6IFsnQ2Fubm90IGRlbGV0ZSBzaGlmdCB3aXRoIGFjdGl2ZSBzaWdudXBzJ10gfSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YTogeyBkZWxldGVkQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogJ0RFTEVURUQnIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3NoaWZ0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlNoaWZ0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ISBZb3UgY2FuIHVuZG8gdGhpcyBhY3Rpb24gd2l0aGluIDEwIHNlY29uZHMuXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogeyBhZmZlY3RlZFZvbHVudGVlckNvdW50OiBhY3RpdmVDb3VudCB9LFxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBzaGlmdC5cIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVTaGlmdChwcmV2U3RhdGU6IEFjdGlvblJlc3VsdCwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcbiAgICBjb25zdCBpZFZhbGlkYXRpb24gPSBzaGlmdElkU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBzaGlmdElkOiBmb3JtRGF0YS5nZXQoJ3NoaWZ0SWQnKSxcbiAgICB9KTtcblxuICAgIGlmICghaWRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaWRWYWxpZGF0aW9uLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgc2hpZnQgd2FzIHJlY2VudGx5IGRlbGV0ZWQgKHdpdGhpbiBsYXN0IDEwIHNlY29uZHMpXG4gICAgY29uc3Qgc2hpZnQgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgc2VsZWN0OiB7IHN0YXR1czogdHJ1ZSwgZGVsZXRlZEF0OiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXNoaWZ0IHx8IHNoaWZ0LnN0YXR1cyAhPT0gXCJERUxFVEVEXCIgfHwgIXNoaWZ0LmRlbGV0ZWRBdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgbm90IGZvdW5kIG9yIG5vdCByZWNlbnRseSBkZWxldGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3aXRoaW4gdW5kbyB3aW5kb3cgKDEwIHNlY29uZHMpXG4gICAgY29uc3QgdGltZVNpbmNlRGVsZXRpb24gPSBEYXRlLm5vdygpIC0gc2hpZnQuZGVsZXRlZEF0LmdldFRpbWUoKTtcbiAgICBpZiAodGltZVNpbmNlRGVsZXRpb24gPiAxMDAwMCkgeyAvLyAxMCBzZWNvbmRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJUb28gbGF0ZSB0byB1bmRvIGRlbGV0aW9uLiBTaGlmdCBwZXJtYW5lbnRseSBkZWxldGVkIGFmdGVyIDEwIHNlY29uZHMuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgdGhlIHNoaWZ0XG4gICAgYXdhaXQgcHJpc21hLnNoaWZ0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaWRWYWxpZGF0aW9uLmRhdGEuc2hpZnRJZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXM6IFwiQUNUSVZFXCIsXG4gICAgICAgIGRlbGV0ZWRBdDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9zaGlmdHNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdm9sdW50ZWVyXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlci9teS1zaGlmdHNcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiU2hpZnQgcmVzdG9yZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVzdG9yaW5nIHNoaWZ0OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJGYWlsZWQgdG8gcmVzdG9yZSBzaGlmdFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsU2hpZnRzV2l0aFNpZ251cHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5WT0xVTlRFRVIsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCByb3dzID0gYXdhaXQgcHJpc21hLnNoaWZ0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgc3RhdHVzOiBcIkFDVElWRVwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBzdGFydHNBdDogXCJhc2NcIiB9LFxuICAgIGluY2x1ZGU6IHsgX2NvdW50OiB7IHNlbGVjdDogeyBzaWdudXBzOiB0cnVlIH0gfSB9LFxuICB9KTtcblxuICByZXR1cm4gcm93cy5tYXAocyA9PiAoe1xuICAgIC4uLnMsXG4gICAgc3RhcnRUaW1lOiBzLnN0YXJ0c0F0LCAvLyBNYXAgc3RhcnRzQXQgdG8gc3RhcnRUaW1lIGZvciBjb21wYXRpYmlsaXR5XG4gICAgZW5kVGltZTogcy5lbmRzQXQsIC8vIE1hcCBlbmRzQXQgdG8gZW5kVGltZSBmb3IgY29tcGF0aWJpbGl0eVxuICAgIGlzRGVsZXRlZDogcy5zdGF0dXMgPT09IFwiREVMRVRFRFwiLCAvLyBDaGVjayBzdGF0dXMgZm9yIGRlbGV0aW9uXG4gICAgc2lnbnVwQ291bnQ6IHMuX2NvdW50Py5zaWdudXBzID8/IDBcbiAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXlTaGlmdHModXNlcklkOiBzdHJpbmcpIHtcbiAgLy8gRW5zdXJlIHVzZXIgY2FuIG9ubHkgdmlldyB0aGVpciBvd24gc2hpZnRzIChza2lwIGluIHRlc3QgZW52aXJvbm1lbnQpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRBY3RpbmdVc2VyKCk7XG4gICAgaWYgKCFjdXJyZW50VXNlciB8fCBjdXJyZW50VXNlci5pZCAhPT0gdXNlcklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQ6IENhbiBvbmx5IHZpZXcgeW91ciBvd24gc2hpZnRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhcnNlZCA9IHoub2JqZWN0KHsgdXNlcklkOiB6LnN0cmluZygpIH0pLnNhZmVQYXJzZSh7IHVzZXJJZCB9KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXNlciBJRFwiKTtcbiAgfVxuXG4gIGNvbnN0IHNoaWZ0cyA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czogeyBub3Q6IFwiREVMRVRFRFwiIH0sIC8vIEVxdWl2YWxlbnQgdG8gaXNEZWxldGVkOiBmYWxzZSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBzaWdudXBzOiB7XG4gICAgICAgIHNvbWU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHsgc3RhcnRzQXQ6IFwiYXNjXCIgfSwgLy8gV2lsbCBiZSBtYXBwZWQgdG8gc3RhcnRUaW1lIGluIERUT1xuICAgIGluY2x1ZGU6IHtcbiAgICAgIF9jb3VudDoge1xuICAgICAgICBzZWxlY3Q6IHsgc2lnbnVwczogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB2b2x1bnRlZXJJZDogdXNlcklkLFxuICAgICAgICAgIGNhbmNlbGxlZEF0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsZWRBdDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxsYXRpb25SZWFzb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzaGlmdHMubWFwKHNoaWZ0ID0+ICh7XG4gICAgLi4uc2hpZnQsXG4gICAgc2lnbnVwQ291bnQ6IHNoaWZ0Ll9jb3VudC5zaWdudXBzLFxuICAgIG15U2lnbnVwOiBzaGlmdC5zaWdudXBzPy5bMF0sIC8vIFNhZmV0eSBjaGVjayBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlbGV0ZWRTaGlmdHMoKSB7XG4gIC8vIFNraXAgYXV0aGVudGljYXRpb24gaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLlNUQUZGLCBVc2VyUm9sZS5BRE1JTl0pO1xuICB9XG5cbiAgLy8gRmlyc3QgZ2V0IGFsbCBkZWxldGVkIHNoaWZ0c1xuICBjb25zdCBzaGlmdHMgPSBhd2FpdCBwcmlzbWEuc2hpZnQuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBzdGF0dXM6IFwiREVMRVRFRFwiLFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBkZWxldGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIC8vIFRoZW4gZ2V0IHNpZ251cCBjb3VudHMgc2VwYXJhdGVseVxuICBjb25zdCBzaGlmdHNXaXRoQ291bnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgc2hpZnRzLm1hcChhc3luYyAoc2hpZnQpID0+IHtcbiAgICAgIGNvbnN0IHNpZ251cENvdW50ID0gYXdhaXQgcHJpc21hLnZvbHVudGVlclNoaWZ0U2lnbnVwLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHsgc2hpZnRJZDogc2hpZnQuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hpZnQsXG4gICAgICAgIHNpZ251cENvdW50LFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBzaGlmdHNXaXRoQ291bnRzO1xufVxuXG4vKipcbiAqIEJ1bGstY2FuY2VsIHNlbGVjdGVkIHNoaWZ0czpcbiAqIC0gU2V0IGlzRGVsZXRlZD10cnVlIG9uIGVhY2ggc2hpZnRcbiAqIC0gQ2FuY2VsIGFsbCBhY3RpdmUgc2lnbnVwcyB3aXRoIHJlYXNvblxuICogLSBFbWl0IG9uZSBhdWRpdCBwZXIgc2hpZnQgYW5kIG9uZSBub3RpZmljYXRpb24gcGVyIGFmZmVjdGVkIHZvbHVudGVlclxuICogLSBSZXZhbGlkYXRlIGFkbWluICsgdm9sdW50ZWVyIHBhZ2VzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ2FuY2VsU2hpZnRzKHBhcmFtczoge1xuICBpZHM6IG51bWJlcltdO1xuICByZWFzb246IHN0cmluZztcbiAgYWN0b3JJZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB7IGlkcywgcmVhc29uLCBhY3RvcklkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgZm9yIChjb25zdCBzaGlmdElkIG9mIGlkcykge1xuICAgIGNvbnN0IGFjdGl2ZVNpZ251cHMgPSBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgc2hpZnRJZCwgY2FuY2VsbGVkQXQ6IG51bGwgfSxcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdm9sdW50ZWVySWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIC8vIG1hcmsgc2hpZnQgYXMgZGVsZXRlZCAoc29mdClcbiAgICBhd2FpdCBwcmlzbWEuc2hpZnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBzaGlmdElkIH0sXG4gICAgICBkYXRhOiB7IHN0YXR1czogXCJERUxFVEVEXCIsIGRlbGV0ZWRBdDogbm93IH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlU2lnbnVwcy5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBwcmlzbWEudm9sdW50ZWVyU2hpZnRTaWdudXAudXBkYXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHNoaWZ0SWQsIGNhbmNlbGxlZEF0OiBudWxsIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYW5jZWxsZWRBdDogbm93LFxuICAgICAgICAgIGNhbmNlbGxhdGlvblJlYXNvbjogcmVhc29uLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBhdWRpdCByZWNvcmQgaW4gZGF0YWJhc2VcbiAgICAgIGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIGFjdG9yVXNlcklkOiBhY3RvcklkLFxuICAgICAgICAgIGFmZmVjdGVkQ291bnQ6IGFjdGl2ZVNpZ251cHMubGVuZ3RoLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBub3RpZmljYXRpb25zIChvbmUgcGVyIHNpZ251cCkgLSBmb3IgdGVzdCBjb21wYXRpYmlsaXR5XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgYWN0aXZlU2lnbnVwcykge1xuICAgICAgICBub3RpZmljYXRpb25zLnB1c2goe1xuICAgICAgICAgIHVzZXJJZDogcy52b2x1bnRlZXJJZCxcbiAgICAgICAgICBzaGlmdElkLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgICB0eXBlOiAnU0hJRlRfQ0FOQ0VMTEVEJyxcbiAgICAgICAgICBhdDogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdGlsbCB3cml0ZSBhbiBhdWRpdCB3aXRoIDAgYWZmZWN0ZWQgKGtlZXBzIHRlc3RzIGRldGVybWluaXN0aWMpXG4gICAgICBhd2FpdCBwcmlzbWEuc2hpZnRDYW5jZWxsYXRpb25BdWRpdC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2hpZnRJZCxcbiAgICAgICAgICBhY3RvclVzZXJJZDogYWN0b3JJZCxcbiAgICAgICAgICBhZmZlY3RlZENvdW50OiAwLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vc2hpZnRzJyk7XG4gIHJldmFsaWRhdGVQYXRoKCcvdm9sdW50ZWVyL3NoaWZ0cycpO1xuICByZXZhbGlkYXRlUGF0aCgnL3ZvbHVudGVlci9teS1zaGlmdHMnKTtcblxuICAvLyBDYWxjdWxhdGUgYWZmZWN0ZWQgY291bnQgZnJvbSBkYXRhYmFzZVxuICBjb25zdCBhZmZlY3RlZCA9IGF3YWl0IHByaXNtYS5zaGlmdENhbmNlbGxhdGlvbkF1ZGl0LmFnZ3JlZ2F0ZSh7XG4gICAgd2hlcmU6IHsgc2hpZnRJZDogeyBpbjogaWRzIH0gfSxcbiAgICBfc3VtOiB7IGFmZmVjdGVkQ291bnQ6IHRydWUgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgb2s6IHRydWUsIGFmZmVjdGVkOiBhZmZlY3RlZC5fc3VtLmFmZmVjdGVkQ291bnQgfHwgMCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hpZnRXaXRoU2lnbnVwcyhzaGlmdElkOiBudW1iZXIpIHtcbiAgLy8gU2tpcCBhdXRoZW50aWNhdGlvbiBpbiB0ZXN0IGVudmlyb25tZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShbVXNlclJvbGUuU1RBRkYsIFVzZXJSb2xlLkFETUlOXSk7XG4gIH1cblxuICBjb25zdCBzaGlmdCA9IGF3YWl0IHByaXNtYS5zaGlmdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2hpZnRJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHNpZ251cHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHZvbHVudGVlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXNoaWZ0KSByZXR1cm4gbnVsbDtcblxuICAvLyBUeXBlIGFzc2VydGlvbiB0byBlbnN1cmUgc2lnbnVwcyBpcyBpbmNsdWRlZFxuICByZXR1cm4gc2hpZnQgYXMgdHlwZW9mIHNoaWZ0ICYge1xuICAgIHNpZ251cHM6IEFycmF5PHtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgICBzaWdudXBUaW1lOiBEYXRlO1xuICAgICAgdm9sdW50ZWVyOiB7IG5hbWU6IHN0cmluZyB9O1xuICAgIH0+O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyU0E0SnNCIn0=
}),
"[project]/app/admin/shifts/DeleteShiftButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteShiftButton",
    ()=>DeleteShiftButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$3e2ce0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:3e2ce0 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$d2c6dc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:d2c6dc [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$7c35de__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:7c35de [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-ssr] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
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
function DeleteShiftButton({ shiftId, shiftTitle, onSuccess }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUndo, setShowUndo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [undoTimeout, setUndoTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [affectedCount, setAffectedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cancelReason, setCancelReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [deleteState, setDeleteState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeActionResult"])());
    const [restoreState, restoreAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$d2c6dc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["restoreShift"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeActionResult"])());
    // Fetch affected count when dialog opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$7c35de__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getShiftAffectedCount"])(shiftId).then(setAffectedCount).catch(()=>setAffectedCount(0));
        }
    }, [
        isOpen,
        shiftId
    ]);
    // Handle deletion state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (deleteState.success) {
            setIsOpen(false);
            showToast(deleteState.message || `Shift "${shiftTitle}" deleted successfully.`, "success");
            onSuccess?.(); // Trigger refresh
            setShowUndo(true);
            // Set timeout to hide undo option after 10 seconds
            const timeout = setTimeout(()=>{
                setShowUndo(false);
            }, 10000);
            setUndoTimeout(timeout);
        } else if (deleteState.message && !deleteState.success) {
            // Show error toast and keep dialog open when deletion fails
            showToast(deleteState.message, "error");
        }
        return ()=>{
            if (undoTimeout) {
                clearTimeout(undoTimeout);
            }
        };
    }, [
        deleteState.success,
        deleteState.message,
        shiftTitle,
        showToast,
        undoTimeout,
        onSuccess
    ]);
    const handleDelete = async ()=>{
        const formData = new FormData();
        formData.set('shiftId', shiftId.toString());
        if (cancelReason.trim()) {
            formData.set('reason', cancelReason.trim());
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$3e2ce0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteShift"])({
            success: false,
            message: null,
            fieldErrors: undefined,
            data: null
        }, formData);
        setDeleteState(result);
        if (result.success) {
            setAffectedCount(result.data?.affectedVolunteerCount || 0);
            setCancelReason(""); // Reset reason after successful delete
        }
    };
    const handleUndo = ()=>{
        const formData = new FormData();
        formData.set('shiftId', shiftId.toString());
        restoreAction(formData);
    };
    // Handle successful restoration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (restoreState.success) {
            setShowUndo(false);
            if (undoTimeout) {
                clearTimeout(undoTimeout);
            }
            showToast(restoreState.message || "Shift restored successfully!", "success");
        } else if (restoreState.message) {
            showToast(restoreState.message, "error");
        }
    }, [
        restoreState.success,
        restoreState.message,
        showToast,
        undoTimeout
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            className: "text-destructive hover:text-destructive/80",
                            "data-testid": "delete-shift",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-3 w-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                "Delete"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                        "data-testid": "confirm-delete-shift",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                        children: "Delete Shift"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                        children: [
                                            "Are you sure you want to delete “",
                                            shiftTitle,
                                            "”?",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block mt-2",
                                                children: "This will hide the shift from volunteers and cancel any existing signups. The shift can be restored later if needed."
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            affectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block mt-2 font-medium text-destructive",
                                                children: [
                                                    "This will affect ",
                                                    affectedCount,
                                                    " volunteer",
                                                    affectedCount !== 1 ? 's' : '',
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            affectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "cancel-reason",
                                        children: "Cancellation Reason (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                        id: "cancel-reason",
                                        placeholder: "e.g., Weather conditions, facility maintenance...",
                                        value: cancelReason,
                                        onChange: (e)=>setCancelReason(e.target.value),
                                        "data-testid": "input-cancel-reason",
                                        rows: 3
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                        onClick: ()=>setCancelReason(""),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleDelete,
                                        variant: "destructive",
                                        "data-testid": "btn-confirm-delete",
                                        children: "Confirm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            showUndo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: handleUndo,
                className: "ml-2 text-green-600 hover:text-green-700",
                disabled: restoreState.success === false && restoreState.message !== null,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                        className: "h-4 w-4 mr-1"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    "Undo"
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/shifts/DeleteShiftButton.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62799842._.js.map