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
"[project]/lib/actions/data:49e314 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60256a71922245d33c482eda3c7ac55eb19a32b83b":"updateFosterProfile"},"lib/actions/foster.actions.ts",""] */ __turbopack_context__.s([
    "updateFosterProfile",
    ()=>updateFosterProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateFosterProfile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60256a71922245d33c482eda3c7ac55eb19a32b83b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateFosterProfile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZm9zdGVyLmFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGFzc2VydFJvbGUgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9wcm9maWxlLmFjdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBzZW5kRm9zdGVySW52aXRlIH0gZnJvbSBcIkAvbGliL2FjdGlvbnMvbm90aWZpY2F0aW9ucy5hY3Rpb25zXCI7XG5pbXBvcnQgeyBzYW5pdGl6ZUNlbGwgfSBmcm9tIFwiQC9saWIvY3N2XCI7XG5cbi8vIEFsbG93IGFueSBub24tZW1wdHkgc3RyaW5nIHRvIHN1cHBvcnQgc2VlZCBkYXRhIElEcyBsaWtlICd2b2x1bnRlZXItNDYnXG5jb25zdCBpZFBhcmFtU2NoZW1hID0gei5zdHJpbmcoKS5taW4oMSk7XG5cbmNvbnN0IGZvc3RlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHByb2ZpbGVJZDogei5zdHJpbmcoKS5taW4oMSwgeyBtZXNzYWdlOiBcIkludmFsaWQgcHJvZmlsZSBJRFwiIH0pLFxuICBoYXNDYXRzOiB6LmJvb2xlYW4oKSxcbiAgaGFzRG9nczogei5ib29sZWFuKCksXG4gIGNhbkFkbWluaXN0ZXJNZWRzOiB6LmJvb2xlYW4oKSxcbiAgbm90ZXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCB0b0Jvb2xlYW4gPSAodmFsdWU6IEZvcm1EYXRhRW50cnlWYWx1ZSB8IG51bGwpID0+IHtcbiAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gc3RyaW5nVmFsdWUgPT09IFwidHJ1ZVwiIHx8IHN0cmluZ1ZhbHVlID09PSBcIm9uXCIgfHwgc3RyaW5nVmFsdWUgPT09IFwiMVwiO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZUZvc3RlclByb2ZpbGUocHJvZmlsZUlkOiBzdHJpbmcpIHtcbiAgLy8gQWxsb3cgYW55IG5vbi1lbXB0eSBzdHJpbmcgdG8gc3VwcG9ydCBzZWVkIGRhdGEgSURzIGxpa2UgJ3ZvbHVudGVlci00NidcbiAgY29uc3QgcGFyc2VkID0gei5vYmplY3QoeyBwcm9maWxlSWQ6IHouc3RyaW5nKCkubWluKDEpIH0pLnNhZmVQYXJzZSh7IHByb2ZpbGVJZCB9KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHJvZmlsZSBJRFwiKTtcbiAgfVxuXG4gIC8vIFRyeSB0byBmaW5kIGV4aXN0aW5nIGZvc3RlciBwcm9maWxlXG4gIGxldCBmb3N0ZXJQcm9maWxlID0gYXdhaXQgcHJpc21hLmZvc3RlclByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgcHJvZmlsZUlkOiBwYXJzZWQuZGF0YS5wcm9maWxlSWQgfSxcbiAgICBpbmNsdWRlOiB7IHByb2ZpbGU6IHRydWUgfSxcbiAgfSk7XG5cbiAgLy8gSWYgaXQgZG9lc24ndCBleGlzdCwgY3JlYXRlIG9uZSB3aXRoIGRlZmF1bHRzXG4gIGlmICghZm9zdGVyUHJvZmlsZSkge1xuICAgIGZvc3RlclByb2ZpbGUgPSBhd2FpdCBwcmlzbWEuZm9zdGVyUHJvZmlsZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBwcm9maWxlSWQ6IHBhcnNlZC5kYXRhLnByb2ZpbGVJZCxcbiAgICAgICAgaGFzQ2F0czogZmFsc2UsXG4gICAgICAgIGhhc0RvZ3M6IGZhbHNlLFxuICAgICAgICBjYW5BZG1pbmlzdGVyTWVkczogZmFsc2UsXG4gICAgICAgIG5vdGVzOiBudWxsLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHsgcHJvZmlsZTogdHJ1ZSB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZvc3RlclByb2ZpbGU7XG59XG5cbmludGVyZmFjZSBGb3N0ZXJQcm9maWxlV2l0aERvZ3Mge1xuICBpZDogbnVtYmVyO1xuICBwcm9maWxlSWQ6IHN0cmluZztcbiAgaGFzQ2F0czogYm9vbGVhbjtcbiAgaGFzRG9nczogYm9vbGVhbjtcbiAgY2FuQWRtaW5pc3Rlck1lZHM6IGJvb2xlYW47XG4gIG5vdGVzOiBzdHJpbmcgfCBudWxsO1xuICBwcm9maWxlOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gIH07XG4gIGRvZ3M6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gIH1bXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvc3RlclByb2ZpbGVzKHNlYXJjaFBhcmFtcz86IHtcbiAgcGFnZT86IG51bWJlcjtcbiAgbGltaXQ/OiBudW1iZXI7XG4gIGhhc0NhdHM/OiBib29sZWFuO1xuICBoYXNEb2dzPzogYm9vbGVhbjtcbiAgY2FuQWRtaW5pc3Rlck1lZHM/OiBib29sZWFuO1xufSk6IFByb21pc2U8eyBmb3N0ZXJQcm9maWxlczogRm9zdGVyUHJvZmlsZVdpdGhEb2dzW107IHBhZ2luYXRpb246IHsgY3VycmVudFBhZ2U6IG51bWJlcjsgdG90YWxQYWdlczogbnVtYmVyOyB0b3RhbENvdW50OiBudW1iZXI7IGhhc05leHRQYWdlOiBib29sZWFuOyBoYXNQcmV2aW91c1BhZ2U6IGJvb2xlYW47IH0gfT4ge1xuICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICBjb25zdCBwYWdlID0gc2VhcmNoUGFyYW1zPy5wYWdlID8/IDE7XG4gIGNvbnN0IGxpbWl0ID0gc2VhcmNoUGFyYW1zPy5saW1pdCA/PyA1MDtcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcblxuICBjb25zdCB3aGVyZSA9IHtcbiAgICAuLi4oc2VhcmNoUGFyYW1zPy5oYXNDYXRzICE9PSB1bmRlZmluZWQgJiYgeyBoYXNDYXRzOiBzZWFyY2hQYXJhbXMuaGFzQ2F0cyB9KSxcbiAgICAuLi4oc2VhcmNoUGFyYW1zPy5oYXNEb2dzICE9PSB1bmRlZmluZWQgJiYgeyBoYXNEb2dzOiBzZWFyY2hQYXJhbXMuaGFzRG9ncyB9KSxcbiAgICAuLi4oc2VhcmNoUGFyYW1zPy5jYW5BZG1pbmlzdGVyTWVkcyAhPT0gdW5kZWZpbmVkICYmIHsgY2FuQWRtaW5pc3Rlck1lZHM6IHNlYXJjaFBhcmFtcy5jYW5BZG1pbmlzdGVyTWVkcyB9KSxcbiAgfTtcblxuICBjb25zdCBbZm9zdGVyUHJvZmlsZXNSYXcsIHRvdGFsQ291bnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIHByaXNtYS5mb3N0ZXJQcm9maWxlLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlLFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIHByb2ZpbGVJZDogdHJ1ZSxcbiAgICAgICAgaGFzQ2F0czogdHJ1ZSxcbiAgICAgICAgaGFzRG9nczogdHJ1ZSxcbiAgICAgICAgY2FuQWRtaW5pc3Rlck1lZHM6IHRydWUsXG4gICAgICAgIG5vdGVzOiB0cnVlLFxuICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb2dzOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiYXNjXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICAgIGVtYWlsOiBcImFzY1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2tpcCxcbiAgICAgIHRha2U6IGxpbWl0LFxuICAgIH0pLFxuICAgIHByaXNtYS5mb3N0ZXJQcm9maWxlLmNvdW50KHsgd2hlcmUgfSksXG4gIF0pO1xuXG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxDb3VudCAvIGxpbWl0KTtcbiAgY29uc3QgZm9zdGVyUHJvZmlsZXMgPSBmb3N0ZXJQcm9maWxlc1JhdyBhcyB1bmtub3duIGFzIEZvc3RlclByb2ZpbGVXaXRoRG9nc1tdO1xuXG4gIHJldHVybiB7XG4gICAgZm9zdGVyUHJvZmlsZXMsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXG4gICAgICB0b3RhbFBhZ2VzLFxuICAgICAgdG90YWxDb3VudCxcbiAgICAgIGhhc05leHRQYWdlOiBwYWdlIDwgdG90YWxQYWdlcyxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogcGFnZSA+IDEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvc3RlclByb2ZpbGVCeUlkKHByb2ZpbGVJZDogc3RyaW5nKSB7XG4gIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gIC8vIEFsbG93IGFueSBub24tZW1wdHkgc3RyaW5nIHRvIHN1cHBvcnQgc2VlZCBkYXRhIElEcyBsaWtlICd2b2x1bnRlZXItNDYnXG4gIGNvbnN0IHBhcnNlZCA9IHoub2JqZWN0KHsgcHJvZmlsZUlkOiB6LnN0cmluZygpLm1pbigxKSB9KS5zYWZlUGFyc2UoeyBwcm9maWxlSWQgfSk7XG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb2ZpbGUgSURcIik7XG4gIH1cblxuICByZXR1cm4gcHJpc21hLmZvc3RlclByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgcHJvZmlsZUlkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcHJvZmlsZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvc3RlclByb2ZpbGVCeVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gaWRQYXJhbVNjaGVtYS5zYWZlUGFyc2UocGFyYW0pO1xuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHByb2ZpbGUgaWRlbnRpZmllcicpO1xuICB9XG5cbiAgcmV0dXJuIHByaXNtYS5mb3N0ZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IHByb2ZpbGVJZDogcGFyc2VkLmRhdGEgfSxcbiAgICBpbmNsdWRlOiB7IHByb2ZpbGU6IHRydWUgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGb3N0ZXJQcm9maWxlKFxuICBfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQgfCB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBpbnRlbnQgPSBmb3JtRGF0YS5nZXQoXCJpbnRlbnRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNob3VsZFNlbmRJbnZpdGUgPSBpbnRlbnQgPT09IFwiaW52aXRlXCI7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcHJvZmlsZUlkOiBmb3JtRGF0YS5nZXQoXCJwcm9maWxlSWRcIiksXG4gICAgICBoYXNDYXRzOiB0b0Jvb2xlYW4oZm9ybURhdGEuZ2V0KFwiaGFzQ2F0c1wiKSksXG4gICAgICBoYXNEb2dzOiB0b0Jvb2xlYW4oZm9ybURhdGEuZ2V0KFwiaGFzRG9nc1wiKSksXG4gICAgICBjYW5BZG1pbmlzdGVyTWVkczogdG9Cb29sZWFuKGZvcm1EYXRhLmdldChcImNhbkFkbWluaXN0ZXJNZWRzXCIpKSxcbiAgICAgIG5vdGVzOiAoKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChcIm5vdGVzXCIpO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpID09PSBcIlwiID8gdW5kZWZpbmVkIDogdmFsdWUudHJpbSgpO1xuICAgICAgfSkoKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFyc2VkID0gZm9zdGVyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSBwYXJzZWQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuZm9zdGVyUHJvZmlsZS51cHNlcnQoe1xuICAgICAgd2hlcmU6IHsgcHJvZmlsZUlkOiBwYXJzZWQuZGF0YS5wcm9maWxlSWQgfSxcbiAgICAgIGNyZWF0ZTogcGFyc2VkLmRhdGEsXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgaGFzQ2F0czogcGFyc2VkLmRhdGEuaGFzQ2F0cyxcbiAgICAgICAgaGFzRG9nczogcGFyc2VkLmRhdGEuaGFzRG9ncyxcbiAgICAgICAgY2FuQWRtaW5pc3Rlck1lZHM6IHBhcnNlZC5kYXRhLmNhbkFkbWluaXN0ZXJNZWRzLFxuICAgICAgICBub3RlczogcGFyc2VkLmRhdGEubm90ZXMsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gU2VuZCBpbnZpdGF0aW9uIGlmIHJlcXVlc3RlZFxuICAgIGlmIChzaG91bGRTZW5kSW52aXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzZW5kRm9zdGVySW52aXRlKHBhcnNlZC5kYXRhLnByb2ZpbGVJZCk7XG4gICAgICB9IGNhdGNoIChpbnZpdGVFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgZm9zdGVyIGludml0ZTpcIiwgaW52aXRlRXJyb3IpO1xuICAgICAgICAvLyBEb24ndCBmYWlsIHRoZSBlbnRpcmUgb3BlcmF0aW9uIGlmIGludml0ZSBmYWlsc1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Zvc3RlcnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9mb3N0ZXJzLyR7cGFyc2VkLmRhdGEucHJvZmlsZUlkfWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBzaG91bGRTZW5kSW52aXRlXG4gICAgICAgID8gXCJGb3N0ZXIgcHJvZmlsZSB1cGRhdGVkIGFuZCBpbnZpdGF0aW9uIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIDogXCJGb3N0ZXIgcHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGRhdGUgZm9zdGVyIHByb2ZpbGVcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvc3RlclByb2ZpbGVzRm9yRXhwb3J0KHNlYXJjaFBhcmFtcz86IHtcbiAgaGFzQ2F0cz86IGJvb2xlYW47XG4gIGhhc0RvZ3M/OiBib29sZWFuO1xuICBjYW5BZG1pbmlzdGVyTWVkcz86IGJvb2xlYW47XG59KSB7XG4gIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gIGNvbnN0IHdoZXJlID0ge1xuICAgIC4uLihzZWFyY2hQYXJhbXM/Lmhhc0NhdHMgIT09IHVuZGVmaW5lZCAmJiB7IGhhc0NhdHM6IHNlYXJjaFBhcmFtcy5oYXNDYXRzIH0pLFxuICAgIC4uLihzZWFyY2hQYXJhbXM/Lmhhc0RvZ3MgIT09IHVuZGVmaW5lZCAmJiB7IGhhc0RvZ3M6IHNlYXJjaFBhcmFtcy5oYXNEb2dzIH0pLFxuICAgIC4uLihzZWFyY2hQYXJhbXM/LmNhbkFkbWluaXN0ZXJNZWRzICE9PSB1bmRlZmluZWQgJiYgeyBjYW5BZG1pbmlzdGVyTWVkczogc2VhcmNoUGFyYW1zLmNhbkFkbWluaXN0ZXJNZWRzIH0pLFxuICB9O1xuXG4gIGNvbnN0IGZvc3RlclByb2ZpbGVzID0gYXdhaXQgcHJpc21hLmZvc3RlclByb2ZpbGUuZmluZE1hbnkoe1xuICAgIHdoZXJlLFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcmRlckJ5OiBbXG4gICAgICB7XG4gICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICBuYW1lOiBcImFzY1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgIGVtYWlsOiBcImFzY1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcblxuICByZXR1cm4gZm9zdGVyUHJvZmlsZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUZvc3RlclByb2ZpbGVzQ1NWKHNlYXJjaFBhcmFtcz86IHtcbiAgaGFzQ2F0cz86IGJvb2xlYW47XG4gIGhhc0RvZ3M/OiBib29sZWFuO1xuICBjYW5BZG1pbmlzdGVyTWVkcz86IGJvb2xlYW47XG59KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgZm9zdGVyUHJvZmlsZXMgPSBhd2FpdCBnZXRGb3N0ZXJQcm9maWxlc0ZvckV4cG9ydChzZWFyY2hQYXJhbXMpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAgXCJOYW1lXCIsXG4gICAgXCJFbWFpbFwiLFxuICAgIFwiQ2FwYWJpbGl0aWVzXCIsXG4gICAgXCJOb3Rlc1wiLFxuICBdO1xuXG4gIGNvbnN0IHJvd3MgPSBmb3N0ZXJQcm9maWxlcy5tYXAoZnAgPT4ge1xuICAgIGNvbnN0IGNhcGFiaWxpdGllcyA9IFtcbiAgICAgIGZwLmhhc0NhdHMgPyBcIkNhdHNcIiA6IG51bGwsXG4gICAgICBmcC5oYXNEb2dzID8gXCJEb2dzXCIgOiBudWxsLFxuICAgICAgZnAuY2FuQWRtaW5pc3Rlck1lZHMgPyBcIk1lZGljYXRpb25zXCIgOiBudWxsLFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIsIFwiKSB8fCBcIk5vbmVcIjtcblxuICAgIHJldHVybiBbXG4gICAgICBmcC5wcm9maWxlPy5uYW1lIHx8IFwiXCIsXG4gICAgICBmcC5wcm9maWxlPy5lbWFpbCB8fCBcIlwiLFxuICAgICAgY2FwYWJpbGl0aWVzLFxuICAgICAgZnAubm90ZXMgfHwgXCJcIixcbiAgICBdO1xuICB9KTtcblxuICAvLyBDcmVhdGUgQ1NWIGNvbnRlbnQgd2l0aCBCT00gZm9yIEV4Y2VsIGNvbXBhdGliaWxpdHlcbiAgY29uc3QgQk9NID0gXCJcXHVGRUZGXCI7XG4gIGNvbnN0IGNzdkNvbnRlbnQgPSBbXG4gICAgaGVhZGVycy5tYXAoaGVhZGVyID0+IHNhbml0aXplQ2VsbChoZWFkZXIpKS5qb2luKFwiLFwiKSxcbiAgICAuLi5yb3dzLm1hcChyb3cgPT4gcm93Lm1hcChmaWVsZCA9PiBzYW5pdGl6ZUNlbGwoZmllbGQpKS5qb2luKFwiLFwiKSksXG4gIF0uam9pbihcIlxcblwiKTtcblxuICByZXR1cm4gQk9NICsgY3N2Q29udGVudDtcbn1cblxuZXhwb3J0IHR5cGUgRm9zdGVyUHJvZmlsZVdpdGhQcm9maWxlID0gQXdhaXRlZDxcbiAgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Rm9zdGVyUHJvZmlsZUJ5SWQ+XG4+O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwU0FrTHNCIn0=
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
"[project]/app/admin/fosters/[id]/FosterProfileForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FosterProfileForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$49e314__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:49e314 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-ssr] (ecmascript)");
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
const initialFosterProfileState = {
    success: false,
    message: null,
    fieldErrors: undefined,
    data: null
};
function SubmitButton() {
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        type: "submit",
        disabled: pending,
        "data-testid": "btn-save-foster",
        children: pending ? "Saving..." : "Save Changes"
    }, void 0, false, {
        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function SaveAndInviteButton() {
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        type: "submit",
        name: "intent",
        value: "invite",
        disabled: pending,
        variant: "default",
        children: pending ? "Saving & Inviting..." : "Save & Invite"
    }, void 0, false, {
        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function FosterProfileForm({ fosterProfile }) {
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [formState, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$49e314__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateFosterProfile"], initialFosterProfileState);
    // Show toast for form submission results
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formState.message) {
            if (formState.success) {
                showToast(formState.message, "success");
            } else {
                showToast(formState.message, "error");
            }
        }
    }, [
        formState.message,
        formState.success,
        showToast
    ]);
    if (!fosterProfile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-muted-foreground",
            children: "Unable to load this foster profile."
        }, void 0, false, {
            fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    const profileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["missing"])(fosterProfile.profile?.name, "Unknown foster");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: formAction,
        className: "grid gap-6",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "profileId",
                value: fosterProfile.profileId
            }, void 0, false, {
                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold",
                        children: profileName
                    }, void 0, false, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: fosterProfile.profile?.email
                    }, void 0, false, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            formState.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `rounded-md px-3 py-2 text-sm ${formState.success ? 'bg-emerald-500/10 text-emerald-700' : 'bg-destructive/10 text-destructive'}`,
                children: formState.message
            }, void 0, false, {
                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                id: "hasCats",
                                name: "hasCats",
                                defaultChecked: fosterProfile?.hasCats ?? false,
                                "data-testid": "checkbox-has-cats"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "hasCats",
                                className: "space-y-1 leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Comfortable with Cats"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Indicates the foster can house cats alongside dogs."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                id: "hasDogs",
                                name: "hasDogs",
                                defaultChecked: fosterProfile?.hasDogs ?? false,
                                "data-testid": "checkbox-has-dogs"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "hasDogs",
                                className: "space-y-1 leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Has Resident Dogs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Useful when matching fosters with social dogs."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                id: "canAdministerMeds",
                                name: "canAdministerMeds",
                                defaultChecked: fosterProfile?.canAdministerMeds ?? false,
                                "data-testid": "checkbox-can-administer-meds"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "canAdministerMeds",
                                className: "space-y-1 leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Can Administer Medication"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Track fosters who can support medical treatment plans."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "notes",
                        children: "Notes"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        id: "notes",
                        name: "notes",
                        placeholder: "Add internal notes about this foster home...",
                        defaultValue: fosterProfile?.notes ?? "",
                        className: "min-h-[120px]",
                        "data-testid": "textarea-foster-notes"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {}, void 0, false, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SaveAndInviteButton, {}, void 0, false, {
                        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/fosters/[id]/FosterProfileForm.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce4b60fd._.js.map