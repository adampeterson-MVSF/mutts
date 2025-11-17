module.exports = [
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
"[project]/components/testing/RouteReady.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function RouteReady({ route }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
"[project]/lib/dog-filters.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/admin/dogs/_components/DogFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DogFilters",
    ()=>DogFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dog-filters.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DogFilters({ fosters, uniqueGenders, uniqueSizes, uniqueBreeds, uniqueStatuses }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Get filter values from URL using helpers
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAdminDogFilters"])(searchParams);
    // Use the complete list of fosters passed from server
    const uniqueFosters = fosters;
    /**
   * Updates URL search parameters for filtering the admin dogs page using helpers.
   */ const updateFilters = (patch)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateAdminDogFiltersInUrl"])(router, pathname, filters, patch);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "status-filter",
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: filters.status,
                        onChange: (e)=>updateFilters({
                                status: e.target.value
                            }),
                        "data-testid": "status-filter",
                        className: "h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Statuses"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            uniqueStatuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: status,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["humanizeEnum"])(status)
                                }, status, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "foster-filter",
                        children: "Foster"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: filters.fosterProfileId,
                        onChange: (e)=>updateFilters({
                                fosterProfileId: e.target.value
                            }),
                        "data-testid": "foster-filter",
                        className: "h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOSTER_FILTER_VALUES"].ALL,
                                children: "All Fosters"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$filters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOSTER_FILTER_VALUES"].NONE,
                                children: "No Foster"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            uniqueFosters.map((foster)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: foster.id,
                                    children: foster.name || foster.email
                                }, foster.id, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "breed-filter",
                        children: "Breed"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: filters.breed,
                        onChange: (e)=>updateFilters({
                                breed: e.target.value
                            }),
                        "data-testid": "breed-filter",
                        className: "h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Breeds"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            uniqueBreeds.map((breed)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: breed,
                                    children: breed
                                }, breed, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "gender-filter",
                        children: "Gender"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: filters.gender,
                        onChange: (e)=>updateFilters({
                                gender: e.target.value
                            }),
                        "data-testid": "gender-filter",
                        className: "h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Genders"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            uniqueGenders.map((gender)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: gender,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["humanizeEnum"])(gender)
                                }, gender, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "size-filter",
                        children: "Size"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: filters.size,
                        onChange: (e)=>updateFilters({
                                size: e.target.value
                            }),
                        "data-testid": "size-filter",
                        className: "h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Sizes"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            uniqueSizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: size,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["humanizeEnum"])(size)
                                }, size, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "weight-min",
                        children: "Weight Min (lbs)"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "weight-min",
                        type: "number",
                        placeholder: "Min weight",
                        value: filters.weightMin,
                        onChange: (e)=>updateFilters({
                                weightMin: e.target.value
                            }),
                        className: "h-10"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "weight-max",
                        children: "Weight Max (lbs)"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "weight-max",
                        type: "number",
                        placeholder: "Max weight",
                        value: filters.weightMax,
                        onChange: (e)=>updateFilters({
                                weightMax: e.target.value
                            }),
                        className: "h-10"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/DogFilters.tsx",
        lineNumber: 53,
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
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(badgeVariants({
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
"[project]/lib/actions/data:71509c [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6033c3740bfb39b1d88f5bc1d4d6032abe7989c415":"deleteDog"},"lib/actions/dog.actions.ts",""] */ __turbopack_context__.s([
    "deleteDog",
    ()=>deleteDog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteDog = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6033c3740bfb39b1d88f5bc1d4d6032abe7989c415", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteDog"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9nLmFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2FjdGlvbnMvZG9nLmFjdGlvbnMudHNcblwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IERvZywgRG9nU3RhdHVzLCBHZW5kZXIsIERvZ1NpemUsIFByaXNtYSwgQXVkaXRBY3Rpb24gfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIjtcbmltcG9ydCB7IGFzc2VydFJvbGUgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9wcm9maWxlLmFjdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFnZSB9IGZyb20gXCJAL2xpYi91dGlscy9kb2ctdXRpbHNcIjtcbmltcG9ydCB7IGRvZ0Zvcm1TY2hlbWEgfSBmcm9tIFwiQC9saWIvc2NoZW1hc1wiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHdpdGhBdWRpdCwgZ2V0Q3VycmVudFVzZXJJZCwgY2FwdHVyZUF1ZGl0U3RhdGUgfSBmcm9tIFwiLi9hdWRpdC5hY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRNZWRpY2FsUmVjb3JkcywgZ2V0TWVkaWNhbERvY3VtZW50cyB9IGZyb20gXCIuL21lZGljYWwuYWN0aW9uc1wiO1xuaW1wb3J0IHsgRk9TVEVSX0ZJTFRFUl9WQUxVRVMgfSBmcm9tIFwiQC9saWIvZG9nLWZpbHRlcnNcIjtcblxuY29uc3QgZGVsZXRlRG9nU2NoZW1hID0gei5vYmplY3Qoe1xuICBkb2dJZDogei5jb2VyY2UubnVtYmVyKCkuaW50KCkucG9zaXRpdmUoeyBtZXNzYWdlOiBcIkludmFsaWQgZG9nIElEXCIgfSksXG4gIHJlYXNvbjogei5zdHJpbmcoKS5taW4oMTAsIHsgbWVzc2FnZTogXCJSZWFzb24gbXVzdCBiZSBhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzIGxvbmdcIiB9KS5tYXgoMTAwMCwgeyBtZXNzYWdlOiBcIlJlYXNvbiBtdXN0IGJlIGxlc3MgdGhhbiAxMDAwIGNoYXJhY3RlcnNcIiB9KSxcbn0pO1xuXG5jb25zdCB1cGxvYWRJbWFnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxuICAvLyBGaWxlIHZhbGlkYXRpb24gd2lsbCBiZSBoYW5kbGVkIHNlcGFyYXRlbHkgYWZ0ZXIgZG9nSWQgdmFsaWRhdGlvblxufSk7XG5cbmNvbnN0IGdldEFsbERvZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigxKS5vcHRpb25hbCgpLmRlZmF1bHQoMSksXG4gIGxpbWl0OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5taW4oMSkubWF4KDEwMCkub3B0aW9uYWwoKS5kZWZhdWx0KDEwKSxcbiAgc3RhdHVzOiB6LmVudW0oW1wiYWxsXCIsIC4uLk9iamVjdC52YWx1ZXMoRG9nU3RhdHVzKV0pLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgZm9zdGVyUHJvZmlsZUlkOiB6LmVudW0oW0ZPU1RFUl9GSUxURVJfVkFMVUVTLkFMTCwgRk9TVEVSX0ZJTFRFUl9WQUxVRVMuTk9ORV0pLm9yKHouc3RyaW5nKCkpLm9wdGlvbmFsKCkuZGVmYXVsdChGT1NURVJfRklMVEVSX1ZBTFVFUy5BTEwpLCAvLyBQcm9maWxlIElEIChzdHJpbmcpIG9yIFwibm9uZVwiXG4gIGJyZWVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgZ2VuZGVyOiB6LmVudW0oW1wiYWxsXCIsIC4uLk9iamVjdC52YWx1ZXMoR2VuZGVyKV0pLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgc2l6ZTogei5lbnVtKFtcImFsbFwiLCAuLi5PYmplY3QudmFsdWVzKERvZ1NpemUpXSkub3B0aW9uYWwoKS5kZWZhdWx0KFwiYWxsXCIpLFxuICB3ZWlnaHRNaW46IHouc3RyaW5nKCkucmVnZXgoL15cXGQqJC8sIHsgbWVzc2FnZTogXCJXZWlnaHQgbXVzdCBiZSBhIG51bWJlclwiIH0pLm9wdGlvbmFsKCksXG4gIHdlaWdodE1heDogei5zdHJpbmcoKS5yZWdleCgvXlxcZCokLywgeyBtZXNzYWdlOiBcIldlaWdodCBtdXN0IGJlIGEgbnVtYmVyXCIgfSkub3B0aW9uYWwoKSxcbiAgc3BlY2lhbE5lZWRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgaGFzUGhvdG9zOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgc29ydEZpZWxkOiB6LmVudW0oW1wibmFtZVwiLCBcInN0YXR1c1wiLCBcImJyZWVkXCJdKS5vcHRpb25hbCgpLmRlZmF1bHQoXCJuYW1lXCIpLFxuICBzb3J0RGlyZWN0aW9uOiB6LmVudW0oW1wiYXNjXCIsIFwiZGVzY1wiXSkub3B0aW9uYWwoKS5kZWZhdWx0KFwiYXNjXCIpLFxufSk7XG5cbi8vIFNoYXJlZCBwaG90byB1cGxvYWQgZnVuY3Rpb25cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZERvZ1Bob3RvKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICBjb25zdCBzYW5pdGl6ZWRGaWxlTmFtZSA9IGZpbGUubmFtZS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbiAgY29uc3Qgc3RvcmFnZVBhdGggPSBgZG9nLSR7dGltZXN0YW1wfS0ke3Nhbml0aXplZEZpbGVOYW1lfWA7XG5cbiAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAuZnJvbShcImRvZy1waG90b3NcIilcbiAgICAudXBsb2FkKHN0b3JhZ2VQYXRoLCBmaWxlLCB7XG4gICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gIGlmICh1cGxvYWRFcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmFnZSBFcnJvcjogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWApO1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBzdXBhYmFzZS5zdG9yYWdlXG4gICAgLmZyb20oXCJkb2ctcGhvdG9zXCIpXG4gICAgLmdldFB1YmxpY1VybChzdG9yYWdlUGF0aCk7XG5cbiAgY29uc3QgcHVibGljVXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gIGlmICghcHVibGljVXJsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGdlbmVyYXRlIHB1YmxpYyBVUkwgZm9yIHVwbG9hZGVkIHBob3RvXCIpO1xuICB9XG5cbiAgcmV0dXJuIHB1YmxpY1VybDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURvZyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2c+IHwgbmV2ZXI+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IGRvZ0Zvcm1TY2hlbWEuc2FmZVBhcnNlKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdGF0dXMsXG4gICAgICBicmVlZCxcbiAgICAgIGRhdGVPZkJpcnRoLFxuICAgICAgYmlvUHVibGljLFxuICAgICAgbm90ZXNJbnRlcm5hbCxcbiAgICAgIGZvc3RlclByb2ZpbGVJZCxcbiAgICAgIHNwZWNpYWxOZWVkcyxcbiAgICB9ID0gcGFyc2VkLmRhdGE7XG5cbiAgICBjb25zdCBmaW5hbFN0YXR1cyA9IHN0YXR1cyA/PyBEb2dTdGF0dXMuSU5UQUtFO1xuXG4gICAgLy8gSGFuZGxlIHByaW1hcnkgcGhvdG8gdXBsb2FkIGlmIHByb3ZpZGVkXG4gICAgbGV0IHByaW1hcnlQaG90b1VybCA9IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzMwMC8yMDA/cmFuZG9tPTFcIjsgLy8gRGVmYXVsdCBwbGFjZWhvbGRlclxuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJmaWxlXCIpO1xuXG4gICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBGaWxlICYmIGZpbGUuc2l6ZSA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByaW1hcnlQaG90b1VybCA9IGF3YWl0IHVwbG9hZERvZ1Bob3RvKGZpbGUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gRm9yIG5vdywgd2UnbGwgY29udGludWUgd2l0aCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBpZiB1cGxvYWQgZmFpbHNcbiAgICAgICAgLy8gSW4gcHJvZHVjdGlvbiwgeW91IG1pZ2h0IHdhbnQgdG8gcmV0dXJuIGFuIGVycm9yIGluc3RlYWRcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGxvYWQgZG9nIHBob3RvOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLmRvZy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXM6IGZpbmFsU3RhdHVzLFxuICAgICAgICBicmVlZCxcbiAgICAgICAgZGF0ZU9mQmlydGgsXG4gICAgICAgIGJpb1B1YmxpYyxcbiAgICAgICAgbm90ZXNJbnRlcm5hbCxcbiAgICAgICAgc3BlY2lhbE5lZWRzLFxuICAgICAgICBmb3N0ZXJQcm9maWxlSWQ6IGZpbmFsU3RhdHVzID09PSBEb2dTdGF0dXMuSU5fRk9TVEVSID8gZm9zdGVyUHJvZmlsZUlkIDogbnVsbCxcbiAgICAgICAgcHJpbWFyeVBob3RvVXJsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2RvZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRvcHRcIik7XG4gICAgcmVkaXJlY3QoXCIvYWRtaW4vZG9nc1wiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC5cIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURvZyhkb2dJZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldEN1cnJlbnRVc2VySWQoKTtcblxuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlIHwgbnVsbDtcbiAgICBsZXQgbmV3UGhvdG9Vcmw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld1Bob3RvVXJsID0gYXdhaXQgdXBsb2FkRG9nUGhvdG8oZmlsZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gdXBsb2FkIHBob3RvXCIsXG4gICAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IGRvZ0Zvcm1TY2hlbWEuc2FmZVBhcnNlKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdGF0dXMsXG4gICAgICBicmVlZCxcbiAgICAgIGRhdGVPZkJpcnRoLFxuICAgICAgYmlvUHVibGljLFxuICAgICAgbm90ZXNJbnRlcm5hbCxcbiAgICAgIGZvc3RlclByb2ZpbGVJZCxcbiAgICAgIHNwZWNpYWxOZWVkcyxcbiAgICB9ID0gcGFyc2VkLmRhdGE7XG5cbiAgICBjb25zdCBmaW5hbFN0YXR1cyA9IHN0YXR1cyA/PyBEb2dTdGF0dXMuSU5UQUtFO1xuXG4gICAgLy8gQ2FwdHVyZSBiZWZvcmUgc3RhdGUgZm9yIGF1ZGl0XG4gICAgY29uc3QgYmVmb3JlU3RhdGUgPSBhd2FpdCBjYXB0dXJlQXVkaXRTdGF0ZSgnZG9nJywgZG9nSWQpO1xuXG4gICAgY29uc3QgdXBkYXRlRGF0YToge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgc3RhdHVzOiBEb2dTdGF0dXM7XG4gICAgICBicmVlZDogc3RyaW5nIHwgbnVsbDtcbiAgICAgIGRhdGVPZkJpcnRoOiBEYXRlIHwgbnVsbDtcbiAgICAgIGJpb1B1YmxpYzogc3RyaW5nIHwgbnVsbDtcbiAgICAgIG5vdGVzSW50ZXJuYWw6IHN0cmluZyB8IG51bGw7XG4gICAgICBzcGVjaWFsTmVlZHM6IGJvb2xlYW47XG4gICAgICBmb3N0ZXJQcm9maWxlSWQ6IHN0cmluZyB8IG51bGw7XG4gICAgICBwcmltYXJ5UGhvdG9Vcmw/OiBzdHJpbmc7XG4gICAgfSA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdGF0dXM6IGZpbmFsU3RhdHVzLFxuICAgICAgYnJlZWQsXG4gICAgICBkYXRlT2ZCaXJ0aCxcbiAgICAgIGJpb1B1YmxpYyxcbiAgICAgIG5vdGVzSW50ZXJuYWwsXG4gICAgICBzcGVjaWFsTmVlZHMsXG4gICAgICBmb3N0ZXJQcm9maWxlSWQ6IGZpbmFsU3RhdHVzID09PSBEb2dTdGF0dXMuSU5fRk9TVEVSID8gZm9zdGVyUHJvZmlsZUlkIDogbnVsbCxcbiAgICB9O1xuXG4gICAgaWYgKG5ld1Bob3RvVXJsKSB7XG4gICAgICB1cGRhdGVEYXRhLnByaW1hcnlQaG90b1VybCA9IG5ld1Bob3RvVXJsO1xuICAgIH1cblxuICAgIGF3YWl0IHdpdGhBdWRpdChcbiAgICAgIFwidXBkYXRlRG9nXCIsXG4gICAgICB1c2VySWQsXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWREb2cgPSBhd2FpdCBwcmlzbWEuZG9nLnVwZGF0ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IGRvZ0lkIH0sXG4gICAgICAgICAgZGF0YTogdXBkYXRlRGF0YSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW5cIik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZWRpdC1kb2cvJHtkb2dJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRvcHRcIik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvYWRvcHQvJHtkb2dJZH1gKTtcblxuICAgICAgICByZXR1cm4gdXBkYXRlZERvZztcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFjdGlvbjogQXVkaXRBY3Rpb24uRE9HX0VESVQsXG4gICAgICAgIGVudGl0eVR5cGU6ICdkb2cnLFxuICAgICAgICBlbnRpdHlJZDogZG9nSWQsXG4gICAgICAgIGJlZm9yZTogYmVmb3JlU3RhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBhZnRlcjogYmVmb3JlU3RhdGUgPyB7IC4uLmJlZm9yZVN0YXRlLCAuLi51cGRhdGVEYXRhIH0gOiB1bmRlZmluZWQsXG4gICAgICAgIG5vdGU6IGBVcGRhdGVkIGRvZzogJHtuYW1lfWAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJEb2cgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLlwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkQW5kU2V0RG9nSW1hZ2UocHJldlN0YXRlOiB7IG1lc3NhZ2U6IHN0cmluZyB8IG51bGw7IG5ld0ltYWdlVXJsOiBzdHJpbmcgfCBudWxsIH0sIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJOb3QgYXV0aG9yaXplZFwiLCBuZXdJbWFnZVVybDogbnVsbCB9O1xuICB9XG5cbiAgY29uc3QgcGFyc2VkID0gdXBsb2FkSW1hZ2VTY2hlbWEuc2FmZVBhcnNlKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpKTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IHBhcnNlZC5lcnJvci5pc3N1ZXMubWFwKGlzc3VlID0+IGAke2lzc3VlLnBhdGguam9pbignLicpfTogJHtpc3N1ZS5tZXNzYWdlfWApLmpvaW4oJywgJyksIG5ld0ltYWdlVXJsOiBudWxsIH07XG4gIH1cblxuICBjb25zdCB7IGRvZ0lkIH0gPSBwYXJzZWQuZGF0YTtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcbiAgaWYgKCFmaWxlIHx8IGZpbGUuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTm8gZmlsZSBwcm92aWRlZC5cIiwgbmV3SW1hZ2VVcmw6IG51bGwgfTtcbiAgfVxuXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG4gIGNvbnN0IGZpbGVQYXRoID0gYGRvZ3MvJHtkb2dJZH0tJHtmaWxlLm5hbWV9LSR7RGF0ZS5ub3coKX1gO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwiaW1hZ2VzXCIpIC8vIEJVQ0tFVCBOQU1FIC0gWU9VIE1VU1QgQ1JFQVRFIFRISVMgSU4gU1VQQUJBU0VcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JhZ2UgRXJyb3I6ICR7dXBsb2FkRXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwiaW1hZ2VzXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIGlmICghcHVibGljVXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZ2V0IHB1YmxpYyBVUkwuXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5kb2cudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBkb2dJZCB9LFxuICAgICAgZGF0YTogeyBwcmltYXJ5UGhvdG9Vcmw6IHB1YmxpY1VybCB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW5cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9lZGl0LWRvZy8ke2RvZ0lkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Fkb3B0XCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRvcHQvJHtkb2dJZH1gKTtcblxuICAgIHJldHVybiB7IG1lc3NhZ2U6IG51bGwsIG5ld0ltYWdlVXJsOiBwdWJsaWNVcmwgfTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVwbG9hZCBmYWlsZWQuXCIsIG5ld0ltYWdlVXJsOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURvZyhkb2dJZDogbnVtYmVyLCByZWFzb246IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG4gICAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0Q3VycmVudFVzZXJJZCgpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gZGVsZXRlRG9nU2NoZW1hLnNhZmVQYXJzZSh7IGRvZ0lkLCByZWFzb24gfSk7XG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSBwYXJzZWQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDYXB0dXJlIGJlZm9yZSBzdGF0ZSBmb3IgYXVkaXRcbiAgICBjb25zdCBiZWZvcmVTdGF0ZSA9IGF3YWl0IGNhcHR1cmVBdWRpdFN0YXRlKCdkb2cnLCBwYXJzZWQuZGF0YS5kb2dJZCk7XG5cbiAgICBhd2FpdCB3aXRoQXVkaXQoXG4gICAgICBcImRlbGV0ZURvZ1wiLFxuICAgICAgdXNlcklkLFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBwcmlzbWEuZG9nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBwYXJzZWQuZGF0YS5kb2dJZCB9IH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9kb2dzXCIpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9hZG9wdFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhY3Rpb246IEF1ZGl0QWN0aW9uLkRPR19FRElULFxuICAgICAgICBlbnRpdHlUeXBlOiAnZG9nJyxcbiAgICAgICAgZW50aXR5SWQ6IHBhcnNlZC5kYXRhLmRvZ0lkLFxuICAgICAgICBiZWZvcmU6IGJlZm9yZVN0YXRlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgYWZ0ZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgbm90ZTogYERlbGV0ZWQgZG9nLiBSZWFzb246ICR7cGFyc2VkLmRhdGEucmVhc29ufWAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJEb2cgZGVsZXRlZCBzdWNjZXNzZnVsbHkhIFJlZGlyZWN0aW5nLi4uXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLlwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9nQnlJZChpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHBhcnNlZCA9IHoub2JqZWN0KHsgaWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKCkgfSkuc2FmZVBhcnNlKHsgaWQgfSk7XG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRvZyBJRFwiKTtcbiAgfVxuXG4gIGNvbnN0IGRvZyA9IGF3YWl0IHByaXNtYS5kb2cuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBmb3N0ZXJQcm9maWxlOiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHByb2ZpbGVJZDogdHJ1ZSxcbiAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghZG9nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRG9nIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICBjb25zdCBpc1NlbmlvciA9IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpID8gY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkhID49IDggOiBmYWxzZTtcbiAgY29uc3QgaGFzUGhvdG9zID0gZG9nLnByaW1hcnlQaG90b1VybCA/ICFkb2cucHJpbWFyeVBob3RvVXJsLmluY2x1ZGVzKCdwbGFjZWhvbGRlcicpIDogZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5kb2csXG4gICAgaXNTZW5pb3IsIC8vIFJ1bnRpbWUgcHJvcGVydHlcbiAgICBoYXNQaG90b3MsIC8vIFJ1bnRpbWUgcHJvcGVydHlcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERvZ3Moc2VhcmNoUGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSkge1xuICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICBjb25zdCBwYXJzZWQgPSBnZXRBbGxEb2dzU2NoZW1hLnNhZmVQYXJzZShzZWFyY2hQYXJhbXMgfHwge30pO1xuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzZWFyY2ggcGFyYW1ldGVyc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHsgcGFnZSwgbGltaXQgfSA9IHBhcnNlZC5kYXRhO1xuICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXQ7XG5cbiAgLy8gQnVpbGQgd2hlcmUgY2xhdXNlIGZvciBmaWx0ZXJpbmdcbiAgY29uc3Qgd2hlcmU6IFByaXNtYS5Eb2dXaGVyZUlucHV0ID0ge307XG5cbiAgaWYgKHBhcnNlZC5kYXRhLnN0YXR1cyAmJiBwYXJzZWQuZGF0YS5zdGF0dXMgIT09IFwiYWxsXCIpIHtcbiAgICB3aGVyZS5zdGF0dXMgPSBwYXJzZWQuZGF0YS5zdGF0dXM7XG4gIH1cblxuICBpZiAocGFyc2VkLmRhdGEuZm9zdGVyUHJvZmlsZUlkICYmIHBhcnNlZC5kYXRhLmZvc3RlclByb2ZpbGVJZCAhPT0gRk9TVEVSX0ZJTFRFUl9WQUxVRVMuQUxMKSB7XG4gICAgaWYgKHBhcnNlZC5kYXRhLmZvc3RlclByb2ZpbGVJZCA9PT0gRk9TVEVSX0ZJTFRFUl9WQUxVRVMuTk9ORSkge1xuICAgICAgLy8gRmlsdGVyIGZvciBkb2dzIHdpdGggbm8gZm9zdGVyIGFzc2lnbmVkXG4gICAgICB3aGVyZS5mb3N0ZXJQcm9maWxlSWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaWx0ZXIgZm9yIHNwZWNpZmljIGZvc3RlclxuICAgICAgd2hlcmUuZm9zdGVyUHJvZmlsZUlkID0gcGFyc2VkLmRhdGEuZm9zdGVyUHJvZmlsZUlkO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZWQuZGF0YS5icmVlZCAmJiBwYXJzZWQuZGF0YS5icmVlZCAhPT0gXCJhbGxcIiAmJiBwYXJzZWQuZGF0YS5icmVlZCAhPT0gXCJcIikge1xuICAgIHdoZXJlLmJyZWVkID0ge1xuICAgICAgY29udGFpbnM6IHBhcnNlZC5kYXRhLmJyZWVkLFxuICAgICAgbW9kZTogJ2luc2Vuc2l0aXZlJyBhcyBjb25zdCxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcnNlZC5kYXRhLmdlbmRlciAmJiBwYXJzZWQuZGF0YS5nZW5kZXIgIT09IFwiYWxsXCIpIHtcbiAgICB3aGVyZS5nZW5kZXIgPSBwYXJzZWQuZGF0YS5nZW5kZXI7XG4gIH1cblxuICBpZiAocGFyc2VkLmRhdGEuc2l6ZSAmJiBwYXJzZWQuZGF0YS5zaXplICE9PSBcImFsbFwiKSB7XG4gICAgd2hlcmUuc2l6ZSA9IHBhcnNlZC5kYXRhLnNpemU7XG4gIH1cblxuICBpZiAocGFyc2VkLmRhdGEud2VpZ2h0TWluICYmIHBhcnNlZC5kYXRhLndlaWdodE1pbiAhPT0gXCJcIikge1xuICAgIGNvbnN0IHdlaWdodE1pbiA9IHBhcnNlSW50KHBhcnNlZC5kYXRhLndlaWdodE1pbiwgMTApO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHdlaWdodE1pbikpIHtcbiAgICAgIHdoZXJlLndlaWdodF9sYnMgPSB7IGd0ZTogd2VpZ2h0TWluIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlZC5kYXRhLndlaWdodE1heCAmJiBwYXJzZWQuZGF0YS53ZWlnaHRNYXggIT09IFwiXCIpIHtcbiAgICBjb25zdCB3ZWlnaHRNYXggPSBwYXJzZUludChwYXJzZWQuZGF0YS53ZWlnaHRNYXgsIDEwKTtcbiAgICBpZiAoIU51bWJlci5pc05hTih3ZWlnaHRNYXgpKSB7XG4gICAgICB3aGVyZS53ZWlnaHRfbGJzID0gd2hlcmUud2VpZ2h0X2xicyA/IHsgLi4uKHdoZXJlLndlaWdodF9sYnMgYXMgb2JqZWN0KSwgbHRlOiB3ZWlnaHRNYXggfSA6IHsgbHRlOiB3ZWlnaHRNYXggfTtcbiAgICB9XG4gIH1cblxuXG4gIGlmIChwYXJzZWQuZGF0YS5zcGVjaWFsTmVlZHMgJiYgcGFyc2VkLmRhdGEuc3BlY2lhbE5lZWRzICE9PSBcImFsbFwiKSB7XG4gICAgd2hlcmUuc3BlY2lhbE5lZWRzID0gcGFyc2VkLmRhdGEuc3BlY2lhbE5lZWRzID09PSBcInRydWVcIjtcbiAgfVxuXG4gIGlmIChwYXJzZWQuZGF0YS5oYXNQaG90b3MgJiYgcGFyc2VkLmRhdGEuaGFzUGhvdG9zICE9PSBcImFsbFwiKSB7XG4gICAgaWYgKHBhcnNlZC5kYXRhLmhhc1Bob3RvcyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHdoZXJlLnByaW1hcnlQaG90b1VybCA9IHsgbm90OiBudWxsIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoZXJlLnByaW1hcnlQaG90b1VybCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gQnVpbGQgb3JkZXJCeSBjbGF1c2UgZm9yIHNvcnRpbmdcbiAgY29uc3Qgb3JkZXJCeTogUHJpc21hLkRvZ09yZGVyQnlXaXRoUmVsYXRpb25JbnB1dCA9IHt9O1xuICBjb25zdCBzb3J0RmllbGQgPSBwYXJzZWQuZGF0YS5zb3J0RmllbGQ7XG4gIGNvbnN0IHNvcnREaXJlY3Rpb24gPSBwYXJzZWQuZGF0YS5zb3J0RGlyZWN0aW9uO1xuXG4gIHN3aXRjaCAoc29ydEZpZWxkKSB7XG4gICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgIG9yZGVyQnkubmFtZSA9IHNvcnREaXJlY3Rpb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3RhdHVzXCI6XG4gICAgICBvcmRlckJ5LnN0YXR1cyA9IHNvcnREaXJlY3Rpb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYnJlZWRcIjpcbiAgICAgIG9yZGVyQnkuYnJlZWQgPSBzb3J0RGlyZWN0aW9uO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG9yZGVyQnkubmFtZSA9IFwiYXNjXCI7XG4gIH1cblxuICBjb25zdCBbZG9ncywgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgICB3aGVyZSxcbiAgICAgIG9yZGVyQnksXG4gICAgICBza2lwOiBvZmZzZXQsXG4gICAgICB0YWtlOiBsaW1pdCxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgbXV0dF9pZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgYnJlZWQ6IHRydWUsXG4gICAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIHByaW1hcnlQaG90b1VybDogdHJ1ZSxcbiAgICAgICAgZ2VuZGVyOiB0cnVlLFxuICAgICAgICB3ZWlnaHRfbGJzOiB0cnVlLFxuICAgICAgICBzaXplOiB0cnVlLFxuICAgICAgICBzcGVjaWFsTmVlZHM6IHRydWUsXG4gICAgICAgIGJpb1B1YmxpYzogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICBmb3N0ZXJQcm9maWxlOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHByaXNtYS5kb2cuY291bnQoeyB3aGVyZSB9KSxcbiAgXSk7XG5cbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gbGltaXQpO1xuXG4gIC8vIEZsYXR0ZW4gZm9zdGVyIHByb2ZpbGUgZGF0YSBhbmQgY29tcHV0ZSBkZXJpdmVkIGZpZWxkc1xuICBjb25zdCBkb2dzV2l0aEZsYXR0ZW5lZEZvc3RlciA9IGRvZ3MubWFwKGRvZyA9PiAoe1xuICAgIC4uLmRvZyxcbiAgICBmb3N0ZXJQcm9maWxlOiBkb2cuZm9zdGVyUHJvZmlsZSA/IHtcbiAgICAgIC4uLmRvZy5mb3N0ZXJQcm9maWxlLFxuICAgICAgbmFtZTogZG9nLmZvc3RlclByb2ZpbGUucHJvZmlsZT8ubmFtZSxcbiAgICAgIGVtYWlsOiBkb2cuZm9zdGVyUHJvZmlsZS5wcm9maWxlPy5lbWFpbCxcbiAgICB9IDogbnVsbCxcbiAgICAvLyBDb21wdXRlIGRlcml2ZWQgdmFsdWVzIG9uIHRoZSBmbHlcbiAgICBpc1NlbmlvcjogY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkgPyBjYWxjdWxhdGVBZ2UoZG9nLmRhdGVPZkJpcnRoKSEgPj0gOCA6IGZhbHNlLFxuICAgIGhhc1Bob3RvczogZG9nLnByaW1hcnlQaG90b1VybCA/ICFkb2cucHJpbWFyeVBob3RvVXJsLmluY2x1ZGVzKCdwbGFjZWhvbGRlcicpIDogZmFsc2UsXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIGRvZ3M6IGRvZ3NXaXRoRmxhdHRlbmVkRm9zdGVyLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGN1cnJlbnRQYWdlOiBwYWdlLFxuICAgICAgdG90YWxQYWdlcyxcbiAgICAgIHRvdGFsQ291bnQsXG4gICAgICBoYXNOZXh0UGFnZTogcGFnZSA8IHRvdGFsUGFnZXMsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IHBhZ2UgPiAxLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIERvZ0ZpbHRlcnMgPSB7XG4gIGJyZWVkPzogc3RyaW5nO1xuICBzcGVjaWFsTmVlZHM/OiBzdHJpbmc7XG4gIHNpemU/OiBzdHJpbmc7XG4gIGdlbmRlcj86IHN0cmluZztcbiAgaGFzUGhvdG9zPzogc3RyaW5nO1xufTtcblxuY29uc3QgY29lcmNlQm9vbGVhbiA9ICh2YWx1ZT86IHN0cmluZykgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgaWYgKHZhbHVlID09PSBcInRydWVcIikgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9ncyh7IHBhZ2UgPSAxLCBwYWdlU2l6ZSA9IDEyIH06IHsgcGFnZT86IG51bWJlcjsgcGFnZVNpemU/OiBudW1iZXIgfSA9IHt9KSB7XG4gIGNvbnN0IHRha2UgPSBwYWdlU2l6ZTtcbiAgY29uc3Qgc2tpcCA9IChNYXRoLm1heCgxLCBwYWdlKSAtIDEpICogdGFrZTtcblxuICBjb25zdCB3aGVyZTogUHJpc21hLkRvZ1doZXJlSW5wdXQgPSB7XG4gICAgc3RhdHVzOiBEb2dTdGF0dXMuQVZBSUxBQkxFLFxuICB9O1xuXG4gIGNvbnN0IFtkb2dzLCB0b3RhbF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgICB3aGVyZSxcbiAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgeyBwcmltYXJ5UGhvdG9Vcmw6ICdkZXNjJyB9LCAvLyBQaG90b3MgZmlyc3RcbiAgICAgICAgeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCAvLyBUaGVuIGJ5IHJlY2VuY3lcbiAgICAgIF0sXG4gICAgICB0YWtlLFxuICAgICAgc2tpcCxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgYnJlZWQ6IHRydWUsXG4gICAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgICBiaW9QdWJsaWM6IHRydWUsXG4gICAgICAgIHNwZWNpYWxOZWVkczogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeVBob3RvVXJsOiB0cnVlLFxuICAgICAgICBnZW5kZXI6IHRydWUsXG4gICAgICAgIHdlaWdodF9sYnM6IHRydWUsXG4gICAgICAgIHNpemU6IHRydWUsXG4gICAgICAgIG11dHRfaWQ6IHRydWUsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcmlzbWEuZG9nLmNvdW50KHsgd2hlcmUgfSksXG4gIF0pO1xuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICBjb25zdCBkb2dzV2l0aERlcml2ZWQgPSBkb2dzLm1hcChkb2cgPT4gKHtcbiAgICAuLi5kb2csXG4gICAgaXNTZW5pb3I6IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpID8gY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkhID49IDggOiBmYWxzZSxcbiAgICBoYXNQaG90b3M6IGRvZy5wcmltYXJ5UGhvdG9VcmwgPyAhZG9nLnByaW1hcnlQaG90b1VybC5pbmNsdWRlcygncGxhY2Vob2xkZXInKSA6IGZhbHNlLFxuICB9KSk7XG5cbiAgcmV0dXJuIHsgZG9nczogZG9nc1dpdGhEZXJpdmVkLCB0b3RhbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlRG9ncyh7IHBhZ2UgPSAxLCBmaWx0ZXJzID0ge30gfTogeyBwYWdlPzogbnVtYmVyOyBmaWx0ZXJzPzogRG9nRmlsdGVycyB9ID0ge30pIHtcbiAgY29uc3QgdGFrZSA9IDEyO1xuICBjb25zdCBza2lwID0gKE1hdGgubWF4KDEsIHBhZ2UpIC0gMSkgKiB0YWtlO1xuXG4gIGNvbnN0IHdoZXJlOiBQcmlzbWEuRG9nV2hlcmVJbnB1dCA9IHtcbiAgICBzdGF0dXM6IERvZ1N0YXR1cy5BVkFJTEFCTEUsXG4gIH07XG5cbiAgaWYgKGZpbHRlcnMuYnJlZWQpIHtcbiAgICB3aGVyZS5icmVlZCA9IHtcbiAgICAgIGNvbnRhaW5zOiBmaWx0ZXJzLmJyZWVkLFxuICAgICAgbW9kZTogXCJpbnNlbnNpdGl2ZVwiLFxuICAgIH07XG4gIH1cblxuICBpZiAoZmlsdGVycy5zaXplKSB7XG4gICAgd2hlcmUuc2l6ZSA9IGZpbHRlcnMuc2l6ZSBhcyBEb2dTaXplO1xuICB9XG5cbiAgaWYgKGZpbHRlcnMuZ2VuZGVyKSB7XG4gICAgd2hlcmUuZ2VuZGVyID0gZmlsdGVycy5nZW5kZXIgYXMgR2VuZGVyO1xuICB9XG5cblxuICBjb25zdCBzcGVjaWFsTmVlZHNGaWx0ZXIgPSBjb2VyY2VCb29sZWFuKGZpbHRlcnMuc3BlY2lhbE5lZWRzKTtcbiAgaWYgKHNwZWNpYWxOZWVkc0ZpbHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgd2hlcmUuc3BlY2lhbE5lZWRzID0gc3BlY2lhbE5lZWRzRmlsdGVyO1xuICB9XG5cblxuICBjb25zdCBbZG9ncywgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgICB3aGVyZSxcbiAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgeyBwcmltYXJ5UGhvdG9Vcmw6ICdkZXNjJyB9LCAvLyBQaG90b3MgZmlyc3RcbiAgICAgICAgeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCAvLyBUaGVuIGJ5IHJlY2VuY3lcbiAgICAgIF0sXG4gICAgICB0YWtlLFxuICAgICAgc2tpcCxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgYnJlZWQ6IHRydWUsXG4gICAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgICBiaW9QdWJsaWM6IHRydWUsXG4gICAgICAgIHNwZWNpYWxOZWVkczogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeVBob3RvVXJsOiB0cnVlLFxuICAgICAgICBnZW5kZXI6IHRydWUsXG4gICAgICAgIHdlaWdodF9sYnM6IHRydWUsXG4gICAgICAgIHNpemU6IHRydWUsXG4gICAgICAgIG11dHRfaWQ6IHRydWUsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcmlzbWEuZG9nLmNvdW50KHsgd2hlcmUgfSksXG4gIF0pO1xuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICBjb25zdCBkb2dzV2l0aERlcml2ZWQgPSBkb2dzLm1hcChkb2cgPT4gKHtcbiAgICAuLi5kb2csXG4gICAgaXNTZW5pb3I6IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpID8gY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkhID49IDggOiBmYWxzZSxcbiAgICBoYXNQaG90b3M6IGRvZy5wcmltYXJ5UGhvdG9VcmwgPyAhZG9nLnByaW1hcnlQaG90b1VybC5pbmNsdWRlcygncGxhY2Vob2xkZXInKSA6IGZhbHNlLFxuICB9KSk7XG5cbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gdGFrZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkb2dzOiBkb2dzV2l0aERlcml2ZWQsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgcGFnZSxcbiAgICAgIGxpbWl0OiB0YWtlLFxuICAgICAgdG90YWxDb3VudCxcbiAgICAgIHRvdGFsUGFnZXMsXG4gICAgICBoYXNOZXh0UGFnZTogcGFnZSA8IHRvdGFsUGFnZXMsXG4gICAgICBoYXNQcmV2UGFnZTogcGFnZSA+IDEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNoZWx0ZXJEb2dzKCkge1xuICBjb25zdCBkb2dzID0gYXdhaXQgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czoge1xuICAgICAgICBub3Q6IFwiQURPUFRFRFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIGNyZWF0ZWRBdDogXCJkZXNjXCIsXG4gICAgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGlkOiB0cnVlLFxuICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgIGJyZWVkOiB0cnVlLFxuICAgICAgZGF0ZU9mQmlydGg6IHRydWUsXG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgICBwcmltYXJ5UGhvdG9Vcmw6IHRydWUsXG4gICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gQ29tcHV0ZSBkZXJpdmVkIHZhbHVlcyBvbiB0aGUgZmx5XG4gIHJldHVybiBkb2dzLm1hcChkb2cgPT4gKHtcbiAgICAuLi5kb2csXG4gICAgaXNTZW5pb3I6IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpID8gY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkhID49IDggOiBmYWxzZSxcbiAgICBoYXNQaG90b3M6IGRvZy5wcmltYXJ5UGhvdG9VcmwgPyAhZG9nLnByaW1hcnlQaG90b1VybC5pbmNsdWRlcygncGxhY2Vob2xkZXInKSA6IGZhbHNlLFxuICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3RlbnRpYWxGb3N0ZXJzKCkge1xuICBjb25zdCBmb3N0ZXJQcm9maWxlcyA9IGF3YWl0IHByaXNtYS5mb3N0ZXJQcm9maWxlLmZpbmRNYW55KHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIHByb2ZpbGVJZDogdHJ1ZSxcbiAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb3JkZXJCeTogW1xuICAgICAge1xuICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgbmFtZTogXCJhc2NcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICBlbWFpbDogXCJhc2NcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgcmV0dXJuIGZvc3RlclByb2ZpbGVzXG4gICAgLmZpbHRlcigoZnApID0+IGZwLnByb2ZpbGUpXG4gICAgLm1hcCgoZnApID0+ICh7XG4gICAgICBpZDogZnAucHJvZmlsZUlkLFxuICAgICAgbmFtZTogZnAucHJvZmlsZT8ubmFtZSA/PyBudWxsLFxuICAgICAgZW1haWw6IGZwLnByb2ZpbGU/LmVtYWlsID8/IFwiXCIsXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VW5pcXVlQnJlZWRzKCkge1xuICBjb25zdCBicmVlZHMgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBicmVlZDogeyBub3Q6IG51bGwgfSB9LFxuICAgIHNlbGVjdDogeyBicmVlZDogdHJ1ZSB9LFxuICAgIGRpc3RpbmN0OiBbJ2JyZWVkJ10sXG4gICAgb3JkZXJCeTogeyBicmVlZDogJ2FzYycgfSxcbiAgfSk7XG4gIHJldHVybiBbLi4ubmV3IFNldChicmVlZHMubWFwKChiKSA9PiBiLmJyZWVkISkuZmlsdGVyKEJvb2xlYW4pKV07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVbmlxdWVTdGF0dXNlcygpIHtcbiAgY29uc3Qgc3RhdHVzZXMgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRNYW55KHtcbiAgICBzZWxlY3Q6IHsgc3RhdHVzOiB0cnVlIH0sXG4gICAgZGlzdGluY3Q6IFsnc3RhdHVzJ10sXG4gIH0pO1xuICByZXR1cm4gWy4uLm5ldyBTZXQoc3RhdHVzZXMubWFwKChzKSA9PiBzLnN0YXR1cykpXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVuaXF1ZUdlbmRlcnMoKSB7XG4gIGNvbnN0IGdlbmRlcnMgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRNYW55KHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICB9LFxuICAgIGRpc3RpbmN0OiBbXCJnZW5kZXJcIl0sXG4gICAgb3JkZXJCeToge1xuICAgICAgZ2VuZGVyOiBcImFzY1wiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBnZW5kZXJzXG4gICAgLm1hcCgoZW50cnkpID0+IGVudHJ5LmdlbmRlcilcbiAgICAuZmlsdGVyKChnZW5kZXIpOiBnZW5kZXIgaXMgR2VuZGVyID0+IGdlbmRlciAhPT0gbnVsbCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVbmlxdWVTaXplcygpIHtcbiAgY29uc3Qgc2l6ZXMgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRNYW55KHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIHNpemU6IHRydWUsXG4gICAgfSxcbiAgICBkaXN0aW5jdDogW1wic2l6ZVwiXSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICBzaXplOiBcImFzY1wiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzaXplc1xuICAgIC5tYXAoKGVudHJ5KSA9PiBlbnRyeS5zaXplKVxuICAgIC5maWx0ZXIoKHNpemUpOiBzaXplIGlzIERvZ1NpemUgPT4gc2l6ZSAhPT0gbnVsbCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWxhdGVkRG9ncyhkb2dJZDogbnVtYmVyLCBsaW1pdCA9IDQpIHtcbiAgLy8gRmlyc3QgZ2V0IHRoZSBjdXJyZW50IGRvZydzIHNpemUgYW5kIGRhdGVPZkJpcnRoXG4gIGNvbnN0IGN1cnJlbnREb2cgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBkb2dJZCB9LFxuICAgIHNlbGVjdDogeyBzaXplOiB0cnVlLCBkYXRlT2ZCaXJ0aDogdHJ1ZSB9LFxuICB9KTtcblxuICBpZiAoIWN1cnJlbnREb2cpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBDYWxjdWxhdGUgY3VycmVudCBkb2cncyBhZ2VcbiAgY29uc3QgY3VycmVudEFnZSA9IGN1cnJlbnREb2cuZGF0ZU9mQmlydGggPyBjYWxjdWxhdGVBZ2UoY3VycmVudERvZy5kYXRlT2ZCaXJ0aCkgOiBudWxsO1xuXG4gIC8vIEdldCBkb2dzIHdpdGggc2FtZSBzaXplIGFuZCBzaW1pbGFyIGFnZSAowrEyIHllYXJzKSwgZXhjbHVkaW5nIGN1cnJlbnQgZG9nXG4gIC8vIENvbnZlcnQgYWdlIHJhbmdlIHRvIGRhdGUgcmFuZ2U6IGlmIGN1cnJlbnQgZG9nIGlzIFggeWVhcnMgb2xkLCBmaW5kIGRvZ3MgYm9ybiB3aXRoaW4gwrEyIHllYXJzIG9mIHRoYXQgYWdlXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGFnZU1pbiA9IE1hdGgubWF4KDAsIChjdXJyZW50QWdlIHx8IDApIC0gMik7XG4gIGNvbnN0IGFnZU1heCA9IChjdXJyZW50QWdlIHx8IDApICsgMjtcblxuICAvLyBDb252ZXJ0IGFnZSByYW5nZSB0byBkYXRlIHJhbmdlIChvbGRlciBkb2dzIGhhdmUgZWFybGllciBiaXJ0aCBkYXRlcylcbiAgY29uc3QgZGF0ZU1heCA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSBhZ2VNaW4gKiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgY29uc3QgZGF0ZU1pbiA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSBhZ2VNYXggKiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICBjb25zdCBkb2dzID0gYXdhaXQgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIEFORDogW1xuICAgICAgICB7IGlkOiB7IG5vdDogZG9nSWQgfSB9LFxuICAgICAgICB7IHN0YXR1czogRG9nU3RhdHVzLkFWQUlMQUJMRSB9LFxuICAgICAgICB7IHNpemU6IGN1cnJlbnREb2cuc2l6ZSB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0ZU9mQmlydGg6IHtcbiAgICAgICAgICAgIGd0ZTogZGF0ZU1pbixcbiAgICAgICAgICAgIGx0ZTogZGF0ZU1heCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IFtcbiAgICAgIHsgcHJpbWFyeVBob3RvVXJsOiAnZGVzYycgfSwgLy8gUGhvdG9zIGZpcnN0XG4gICAgICB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sIC8vIFRoZW4gYnkgcmVjZW5jeVxuICAgIF0sXG4gICAgdGFrZTogbGltaXQsXG4gICAgc2VsZWN0OiB7XG4gICAgICBpZDogdHJ1ZSxcbiAgICAgIG5hbWU6IHRydWUsXG4gICAgICBicmVlZDogdHJ1ZSxcbiAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgYmlvUHVibGljOiB0cnVlLFxuICAgICAgc3BlY2lhbE5lZWRzOiB0cnVlLFxuICAgICAgcHJpbWFyeVBob3RvVXJsOiB0cnVlLFxuICAgICAgZ2VuZGVyOiB0cnVlLFxuICAgICAgc2l6ZTogdHJ1ZSxcbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcbiAgICB9LFxuICB9KTtcblxuICAvLyBDb21wdXRlIGRlcml2ZWQgdmFsdWVzIG9uIHRoZSBmbHlcbiAgcmV0dXJuIGRvZ3MubWFwKGRvZyA9PiAoe1xuICAgIC4uLmRvZyxcbiAgICBpc1NlbmlvcjogY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkgPyBjYWxjdWxhdGVBZ2UoZG9nLmRhdGVPZkJpcnRoKSEgPj0gOCA6IGZhbHNlLFxuICAgIGhhc1Bob3RvczogZG9nLnByaW1hcnlQaG90b1VybCA/ICFkb2cucHJpbWFyeVBob3RvVXJsLmluY2x1ZGVzKCdwbGFjZWhvbGRlcicpIDogZmFsc2UsXG4gIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkb3B0ZWREb2dzKCkge1xuICBjb25zdCBkb2dzID0gYXdhaXQgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czogRG9nU3RhdHVzLkFET1BURUQsXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICB1cGRhdGVkQXQ6IFwiZGVzY1wiLFxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBpZDogdHJ1ZSxcbiAgICAgIG5hbWU6IHRydWUsXG4gICAgICBicmVlZDogdHJ1ZSxcbiAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgYmlvUHVibGljOiB0cnVlLFxuICAgICAgc3BlY2lhbE5lZWRzOiB0cnVlLFxuICAgICAgcHJpbWFyeVBob3RvVXJsOiB0cnVlLFxuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgdXBkYXRlZEF0OiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICByZXR1cm4gZG9ncy5tYXAoZG9nID0+ICh7XG4gICAgLi4uZG9nLFxuICAgIGlzU2VuaW9yOiBjYWxjdWxhdGVBZ2UoZG9nLmRhdGVPZkJpcnRoKSA/IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpISA+PSA4IDogZmFsc2UsXG4gICAgaGFzUGhvdG9zOiBkb2cucHJpbWFyeVBob3RvVXJsID8gIWRvZy5wcmltYXJ5UGhvdG9VcmwuaW5jbHVkZXMoJ3BsYWNlaG9sZGVyJykgOiBmYWxzZSxcbiAgfSkpO1xufVxuXG4vKipcbiAqIENhbm9uaWNhbCBmdW5jdGlvbiBmb3IgZmV0Y2hpbmcgYSBkb2cgd2l0aCBhbGwgaXRzIG1lZGljYWwgY29udGV4dC5cbiAqIFJldHVybnMgYSBjb25zaXN0ZW50IHNoYXBlIGZvciBib3RoIGRvZyBkZXRhaWwgcGFnZXMgYW5kIG1lZGljYWwtc3BlY2lmaWMgcGFnZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2dNZWRpY2FsQnVuZGxlKGRvZ0lkOiBudW1iZXIsIHBhZ2U6IG51bWJlciA9IDEpIHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gei5vYmplY3Qoe1xuICAgIGRvZ0lkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLFxuICAgIHBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigxKVxuICB9KS5zYWZlUGFyc2UoeyBkb2dJZCwgcGFnZSB9KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZG9nIElEXCIpO1xuICB9XG5cbiAgY29uc3QgW2RvZ0RldGFpbHMsIG1lZGljYWxSZWNvcmRzLCBtZWRpY2FsRG9jdW1lbnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBwcmlzbWEuZG9nLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGRvZ0lkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGZvc3RlclByb2ZpbGU6IHtcbiAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBwcm9maWxlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGdldE1lZGljYWxSZWNvcmRzKGRvZ0lkLCBwYWdlKSxcbiAgICBnZXRNZWRpY2FsRG9jdW1lbnRzKGRvZ0lkKSxcbiAgXSk7XG5cbiAgaWYgKCFkb2dEZXRhaWxzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRG9nIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICBjb25zdCBpc1NlbmlvciA9IGNhbGN1bGF0ZUFnZShkb2dEZXRhaWxzLmRhdGVPZkJpcnRoKSA/IGNhbGN1bGF0ZUFnZShkb2dEZXRhaWxzLmRhdGVPZkJpcnRoKSEgPj0gOCA6IGZhbHNlO1xuICBjb25zdCBoYXNQaG90b3MgPSBkb2dEZXRhaWxzLnByaW1hcnlQaG90b1VybCA/ICFkb2dEZXRhaWxzLnByaW1hcnlQaG90b1VybC5pbmNsdWRlcygncGxhY2Vob2xkZXInKSA6IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgZG9nOiB7XG4gICAgICAuLi5kb2dEZXRhaWxzLFxuICAgICAgaXNTZW5pb3IsIC8vIFJ1bnRpbWUgcHJvcGVydHlcbiAgICAgIGhhc1Bob3RvcywgLy8gUnVudGltZSBwcm9wZXJ0eVxuICAgIH0sXG4gICAgbWVkaWNhbFJlY29yZHMsXG4gICAgbWVkaWNhbERvY3VtZW50cyxcbiAgfTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgZ2V0RG9nTWVkaWNhbEJ1bmRsZSBpbnN0ZWFkIGZvciBjb25zaXN0ZW50IG1lZGljYWwgZGF0YSBmZXRjaGluZ1xuICogRmV0Y2hlcyBhIHNpbmdsZSBkb2cgYW5kIGl0cyByZWxhdGVkIGRhdGEgZm9yIHRoZSBhZG1pbiBkZXRhaWwgcGFnZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvZ0RldGFpbHNCeUlkKGRvZ0lkOiBudW1iZXIpIHtcbiAgY29uc3QgYnVuZGxlID0gYXdhaXQgZ2V0RG9nTWVkaWNhbEJ1bmRsZShkb2dJZCwgMSk7XG4gIHJldHVybiB7IGRvZzogYnVuZGxlLmRvZywgbWVkaWNhbFJlY29yZHM6IGJ1bmRsZS5tZWRpY2FsUmVjb3JkcyB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UkF5VHNCIn0=
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
"[project]/app/admin/dogs/_components/DeleteDogButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteDogButton",
    ()=>DeleteDogButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$71509c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:71509c [app-ssr] (ecmascript) <text/javascript>");
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
;
;
function ConfirmDeleteButton({ disabled, reasonLength }) {
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStatus"])();
    const isDisabled = pending || disabled || reasonLength < 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        type: "submit",
        disabled: isDisabled,
        variant: "destructive",
        className: "bg-destructive hover:bg-destructive/90",
        children: pending ? "Deleting..." : "Yes, delete"
    }, void 0, false, {
        fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function DeleteDogButton({ dogId, dogName }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const deleteAction = async (prevState, formData)=>{
        const id = Number(formData.get("dogId"));
        const deleteReason = formData.get("reason");
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$71509c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteDog"])(id, deleteReason);
        // Show toast and handle redirect on success
        if (result.success) {
            showToast(result.message || "Dog deleted successfully!", "success");
            // Close dialog and redirect after a brief delay to show the toast
            setTimeout(()=>{
                router.push("/admin");
            }, 1000);
        } else {
            showToast(result.message || "Failed to delete dog.", "error");
        }
        return result;
    };
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(deleteAction, {
        success: false,
        message: null,
        fieldErrors: undefined,
        data: null
    });
    // Close dialog on successful deletion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.success) {
            setOpen(false);
        }
    }, [
        state.success
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "destructive",
                    className: "w-full mt-4",
                    "data-testid": "btn-delete-dog",
                    children: "Delete Dog"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                children: "Are you absolutely sure?"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                children: [
                                    "This action cannot be undone. This will permanently delete ",
                                    dogName,
                                    "'s record."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "delete-reason",
                                children: "Required reason for deletion"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                id: "delete-reason",
                                name: "reason",
                                placeholder: "Please provide a detailed reason for deleting this dog's record (minimum 10 characters)...",
                                value: reason,
                                onChange: (e)=>setReason(e.target.value),
                                className: "mt-2",
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: [
                                    reason.length,
                                    "/1000 characters (minimum 10 required)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                        className: "flex flex-col items-stretch gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: formAction,
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "hidden",
                                        name: "dogId",
                                        value: dogId
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "hidden",
                                        name: "reason",
                                        value: reason
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfirmDeleteButton, {
                                        disabled: state.success,
                                        reasonLength: reason.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            state.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-500",
                                children: state.message
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/DeleteDogButton.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/utils/dog-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/dog-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-ssr] (ecmascript)");
;
;
const missing = (value, fallback = 'N/A')=>value && value.trim() !== '' ? value : fallback;
const formatDogAge = (dateOfBirth)=>{
    if (!dateOfBirth) return missing(null);
    const age = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateAge"])(dateOfBirth);
    return age ? `${age} years` : missing(null);
};
const formatDogGender = (gender)=>{
    return gender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["humanizeEnum"])(gender) : missing(null);
};
const formatDogSize = (size)=>{
    return size ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["humanizeEnum"])(size) : missing(null);
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
"[project]/app/admin/dogs/_components/DogTableRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DogTableRow",
    ()=>DogTableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DeleteDogButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dogs/_components/DeleteDogButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-ssr] (ecmascript)");
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
function DogTableRow({ dog }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
        "data-testid": "row-dog",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: dog.primaryPhotoUrl || "https://via.placeholder.com/50x50/f3f4f6/6b7280?text=No+Photo",
                    alt: `Photo of ${dog.name}`,
                    width: 50,
                    height: 50,
                    className: "rounded object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "font-medium",
                children: dog.name
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDogStatusVariant"])(dog.status),
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["humanizeEnum"])(dog.status)
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                children: dog.fosterProfile ? dog.fosterProfile.name || dog.fosterProfile.email : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["missing"])(null)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["missing"])(dog.breed)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDogAge"])(dog.dateOfBirth)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDogGender"])(dog.gender)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDogSize"])(dog.size)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDogWeight"])(dog.weight_lbs)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                className: "text-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/admin/dog/${dog.id}/log`,
                                title: "View Activity Log",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/admin/dog/${dog.id}?tab=medical`,
                                title: "Manage Medical Records",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            asChild: true,
                            "data-testid": "btn-edit-dog",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/admin/edit-dog/${dog.id}`,
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-32",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DeleteDogButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteDogButton"], {
                                dogId: dog.id,
                                dogName: dog.name
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, dog.id, true, {
        fileName: "[project]/app/admin/dogs/_components/DogTableRow.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/dog-table.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Dog table sorting and filtering constants and utilities
 */ __turbopack_context__.s([
    "DEFAULT_SORT",
    ()=>DEFAULT_SORT,
    "DOG_TABLE_PARAMS",
    ()=>DOG_TABLE_PARAMS,
    "SORT_DIRECTIONS",
    ()=>SORT_DIRECTIONS,
    "SORT_FIELDS",
    ()=>SORT_FIELDS,
    "buildDogTableUrl",
    ()=>buildDogTableUrl,
    "getNextSortDirection",
    ()=>getNextSortDirection,
    "getSortDirection",
    ()=>getSortDirection,
    "parseDogTableSort",
    ()=>parseDogTableSort,
    "updateDogTableSortInUrl",
    ()=>updateDogTableSortInUrl
]);
const SORT_FIELDS = {
    NAME: "name",
    STATUS: "status",
    BREED: "breed",
    AGE: "age"
};
const SORT_DIRECTIONS = {
    ASC: "asc",
    DESC: "desc"
};
const DOG_TABLE_PARAMS = {
    SORT_FIELD: "sortField",
    SORT_DIRECTION: "sortDirection",
    PAGE: "page"
};
const DEFAULT_SORT = {
    field: SORT_FIELDS.NAME,
    direction: SORT_DIRECTIONS.ASC
};
function getNextSortDirection(currentField, currentDirection, newField) {
    if (currentField === newField && currentDirection === SORT_DIRECTIONS.ASC) {
        return SORT_DIRECTIONS.DESC;
    }
    return SORT_DIRECTIONS.ASC;
}
function getSortDirection(field, currentField, currentDirection) {
    if (currentField !== field) {
        return null; // No sort icon
    }
    return currentDirection || DEFAULT_SORT.direction;
}
function parseDogTableSort(searchParams) {
    const sortField = searchParams.get(DOG_TABLE_PARAMS.SORT_FIELD) || DEFAULT_SORT.field;
    const sortDirection = searchParams.get(DOG_TABLE_PARAMS.SORT_DIRECTION) || DEFAULT_SORT.direction;
    return {
        sortField,
        sortDirection
    };
}
function buildDogTableUrl(searchParams, sortConfig) {
    const params = new URLSearchParams(searchParams);
    params.set(DOG_TABLE_PARAMS.SORT_FIELD, sortConfig.sortField);
    params.set(DOG_TABLE_PARAMS.SORT_DIRECTION, sortConfig.sortDirection);
    return params;
}
function updateDogTableSortInUrl(router, pathname, searchParams, sortConfig) {
    const params = buildDogTableUrl(searchParams, sortConfig);
    router.push(`${pathname}?${params.toString()}`);
}
}),
"[project]/app/admin/dogs/_components/DogTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DogTable",
    ()=>DogTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DogTableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dogs/_components/DogTableRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-ssr] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dog-table.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function DogTable({ dogs, pagination, sortField, sortDirection, onSort }) {
    const getSortIcon = (field)=>{
        const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortDirection"])(field, sortField, sortDirection);
        if (direction === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
            lineNumber: 41,
            columnNumber: 36
        }, this);
        return direction === "asc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCaption"], {
                        children: [
                            "A list of all dogs in your system. Showing ",
                            `${dogs.length} of ${pagination.totalCount} dogs`,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "w-[80px]",
                                    "data-testid": "table-header-image",
                                    children: "Image"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    "data-testid": "table-header-name",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "h-auto p-0 font-semibold hover:bg-transparent",
                                        onClick: ()=>onSort(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_FIELDS"].NAME),
                                        children: [
                                            "Name ",
                                            getSortIcon(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_FIELDS"].NAME)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    "data-testid": "table-header-status",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "h-auto p-0 font-semibold hover:bg-transparent",
                                        onClick: ()=>onSort(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_FIELDS"].STATUS),
                                        children: [
                                            "Status ",
                                            getSortIcon(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_FIELDS"].STATUS)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    "data-testid": "table-header-foster",
                                    children: "Foster"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    "data-testid": "table-header-breed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "h-auto p-0 font-semibold hover:bg-transparent",
                                        onClick: ()=>onSort(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_FIELDS"].BREED),
                                        children: [
                                            "Breed ",
                                            getSortIcon(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_FIELDS"].BREED)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    "data-testid": "table-header-age",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "h-auto p-0 font-semibold hover:bg-transparent",
                                        onClick: ()=>onSort(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_FIELDS"].AGE),
                                        children: [
                                            "Age ",
                                            getSortIcon(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_FIELDS"].AGE)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    "data-testid": "table-header-gender",
                                    children: "Gender"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    "data-testid": "table-header-size",
                                    children: "Size"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    "data-testid": "table-header-weight",
                                    children: "Weight (lbs)"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-right",
                                    "data-testid": "table-header-actions",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: dogs.map((dog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DogTableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DogTableRow"], {
                                dog: dog
                            }, dog.id, false, {
                                fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            dogs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-muted-foreground mt-8",
                children: pagination.totalCount === 0 ? "No dogs in the system. Get started by adding one!" : "No dogs match your current filters."
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTable.tsx",
                lineNumber: 108,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/lib/url-pagination-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAGINATION_PARAMS",
    ()=>PAGINATION_PARAMS,
    "useUrlPagination",
    ()=>useUrlPagination
]);
/**
 * Client-side URL pagination utilities
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const PAGINATION_PARAMS = {
    PAGE: "page"
};
function useUrlPagination() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const handlePageChange = (page)=>{
        const params = new URLSearchParams(searchParams.toString());
        if (page === 1) {
            params.delete(PAGINATION_PARAMS.PAGE);
        } else {
            params.set(PAGINATION_PARAMS.PAGE, page.toString());
        }
        const query = params.toString();
        startTransition(()=>{
            router.push(query.length > 0 ? `${pathname}?${query}` : pathname);
        });
    };
    return {
        handlePageChange,
        isPending
    };
}
}),
"[project]/app/adopt/_components/AdoptPagination.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdoptPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$url$2d$pagination$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/url-pagination-client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AdoptPagination({ currentPage, totalPages, hasNextPage, hasPrevPage }) {
    const { handlePageChange, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$url$2d$pagination$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUrlPagination"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-4 mt-8",
        "data-testid": "pagination",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                onClick: ()=>handlePageChange(currentPage - 1),
                disabled: !hasPrevPage || isPending,
                "aria-label": "Previous page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "h-4 w-4 mr-1"
                    }, void 0, false, {
                        fileName: "[project]/app/adopt/_components/AdoptPagination.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    "Previous"
                ]
            }, void 0, true, {
                fileName: "[project]/app/adopt/_components/AdoptPagination.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-muted-foreground",
                children: [
                    "Page ",
                    currentPage,
                    " of ",
                    totalPages
                ]
            }, void 0, true, {
                fileName: "[project]/app/adopt/_components/AdoptPagination.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                onClick: ()=>handlePageChange(currentPage + 1),
                disabled: !hasNextPage || isPending,
                "aria-label": "Next page",
                children: [
                    "Next",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4 ml-1"
                    }, void 0, false, {
                        fileName: "[project]/app/adopt/_components/AdoptPagination.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/adopt/_components/AdoptPagination.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/adopt/_components/AdoptPagination.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/dogs/_components/DogTableClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DogTableClient",
    ()=>DogTableClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DogTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dogs/_components/DogTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$adopt$2f$_components$2f$AdoptPagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/adopt/_components/AdoptPagination.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dog-table.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DogTableClient({ dogs, pagination }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Get sort values from URL using typed helper
    const { sortField, sortDirection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDogTableSort"])(searchParams);
    const handleSort = (field)=>{
        const newSortDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextSortDirection"])(sortField, sortDirection, field);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dog$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDogTableSortInUrl"])(router, "", searchParams, {
            sortField: field,
            sortDirection: newSortDirection
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DogTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DogTable"], {
                dogs: dogs,
                pagination: pagination,
                sortField: sortField,
                sortDirection: sortDirection,
                onSort: handleSort
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableClient.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$adopt$2f$_components$2f$AdoptPagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentPage: pagination.currentPage,
                totalPages: pagination.totalPages,
                hasNextPage: pagination.hasNextPage,
                hasPrevPage: pagination.hasPreviousPage
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/DogTableClient.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/admin/dogs/AdminDogsClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDogsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testing$2f$RouteReady$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/testing/RouteReady.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DogFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dogs/_components/DogFilters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DogTableClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dogs/_components/DogTableClient.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AdminDogsClient({ fosters, uniqueGenders, uniqueSizes, uniqueBreeds, uniqueStatuses, dogs, pagination }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full flex flex-col items-center p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold",
                            "data-testid": "page-title",
                            children: "Manage Dogs"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/add-dog",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    " Add New Dog"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                process.env.NEXT_PUBLIC_E2E === "true" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testing$2f$RouteReady$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouteReady"], {
                    route: "admin/dogs"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DogFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DogFilters"], {
                    fosters: fosters,
                    uniqueGenders: uniqueGenders,
                    uniqueSizes: uniqueSizes,
                    uniqueBreeds: uniqueBreeds,
                    uniqueStatuses: uniqueStatuses
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$DogTableClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DogTableClient"], {
                    dogs: dogs,
                    pagination: pagination
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/dogs/AdminDogsClient.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b0e990dc._.js.map