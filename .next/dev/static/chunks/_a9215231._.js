(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
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
    const allStatuses = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppStatus"]);
    // For foster applications, restrict some status transitions
    if (applicationType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppType"].FOSTER) {
        // Fosters can be approved (creates foster profile) or rejected
        // Can't be marked as "IN_REVIEW" inappropriately
        return allStatuses.filter((status)=>status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppStatus"].IN_REVIEW || currentStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppStatus"].IN_REVIEW);
    }
    // For adoption applications, all statuses are allowed
    return allStatuses;
};
const areStatusNotesRequired = (status)=>{
    return status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppStatus"].APPROVED || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppStatus"].REJECTED;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
// Re-export shared utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
    const isTestEnv = ("TURBOPACK compile-time value", "development") === 'test' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.EXPOSE_TEST_API === '1';
    const testSecret = request.headers.get('x-test-secret');
    const expectedSecret = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.TEST_SECRET || 'test-secret-default';
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TabsTrigger;
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(buttonVariants({
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
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:ae349d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40287cd94b9cff320c8e99fba57a6d56392f11e4f0":"createMedicalRecord"},"lib/actions/medical.actions.ts",""] */ __turbopack_context__.s([
    "createMedicalRecord",
    ()=>createMedicalRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createMedicalRecord = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40287cd94b9cff320c8e99fba57a6d56392f11e4f0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createMedicalRecord"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVkaWNhbC5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9hY3Rpb25zL21lZGljYWwuYWN0aW9ucy50c1xuXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IE1lZGljYWxSZWNvcmRUeXBlLCBNZWRpY2FsUmVjb3JkLCBBdWRpdEFjdGlvbiB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgYXNzZXJ0Um9sZSwgZ2V0QWN0aW5nVXNlciB9IGZyb20gXCJAL2xpYi9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9uc1wiO1xuaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VySWQgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9hdWRpdC5hY3Rpb25zXCI7XG5cbi8vIEZpbGUgdmFsaWRhdGlvbiBjb25zdGFudHMgKG1pcnJvciBjbGllbnQtc2lkZSB2YWxpZGF0aW9uKVxuY29uc3QgTUFYX0ZJTEVfU0laRSA9IDEwICogMTAyNCAqIDEwMjQ7IC8vIDEwTUJcbmNvbnN0IEFMTE9XRURfRVhURU5TSU9OUyA9IFsnLnBkZicsICcuanBnJywgJy5qcGVnJywgJy5wbmcnLCAnLmdpZicsICcud2VicCcsICcudGlmZicsICcuYm1wJ107XG5jb25zdCBBTExPV0VEX0NPTlRFTlRfVFlQRVMgPSBbXG4gICdhcHBsaWNhdGlvbi9wZGYnLFxuICAnaW1hZ2UvanBlZycsXG4gICdpbWFnZS9qcGcnLFxuICAnaW1hZ2UvcG5nJyxcbiAgJ2ltYWdlL2dpZicsXG4gICdpbWFnZS93ZWJwJyxcbiAgJ2ltYWdlL3RpZmYnLFxuICAnaW1hZ2UvYm1wJyxcbl07XG5cbmNvbnN0IHVwbG9hZERvY1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbmNvbnN0IGRlbGV0ZURvY1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9jdW1lbnRJZDogei5jb2VyY2UubnVtYmVyKCkuaW50KCkucG9zaXRpdmUoeyBtZXNzYWdlOiBcIkludmFsaWQgZG9jdW1lbnQgSURcIiB9KSxcbiAgc3RvcmFnZVBhdGg6IHouc3RyaW5nKCkubWluKDEsIHsgbWVzc2FnZTogXCJTdG9yYWdlIHBhdGggaXMgcmVxdWlyZWRcIiB9KSxcbn0pO1xuXG5jb25zdCBtZWRpY2FsUmVjb3JkQmFzZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxuICBkYXRlOiB6LmNvZXJjZS5kYXRlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRhdGVcIiB9KSxcbiAgdHlwZTogei5uYXRpdmVFbnVtKE1lZGljYWxSZWNvcmRUeXBlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCByZWNvcmQgdHlwZVwiIH0pLFxuICBub3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSk7XG5cbmNvbnN0IHZhY2NpbmF0aW9uU2NoZW1hID0gbWVkaWNhbFJlY29yZEJhc2VTY2hlbWEuZXh0ZW5kKHtcbiAgdHlwZTogei5saXRlcmFsKE1lZGljYWxSZWNvcmRUeXBlLlZBQ0NJTkFUSU9OKSxcbiAgdmFjY2luZVR5cGU6IHouc3RyaW5nKCkubWluKDEsIHsgbWVzc2FnZTogXCJWYWNjaW5lIHR5cGUgaXMgcmVxdWlyZWRcIiB9KSxcbiAgbmV4dER1ZURhdGU6IHouY29lcmNlLmRhdGUoKS5vcHRpb25hbCgpLFxufSk7XG5cbmNvbnN0IG1lZGljYXRpb25TY2hlbWEgPSBtZWRpY2FsUmVjb3JkQmFzZVNjaGVtYS5leHRlbmQoe1xuICB0eXBlOiB6LmxpdGVyYWwoTWVkaWNhbFJlY29yZFR5cGUuTUVESUNBVElPTiksXG4gIG1lZGljYXRpb25OYW1lOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6IFwiTWVkaWNhdGlvbiBuYW1lIGlzIHJlcXVpcmVkXCIgfSksXG4gIGRvc2FnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBmcmVxdWVuY3k6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCB2ZXRWaXNpdFNjaGVtYSA9IG1lZGljYWxSZWNvcmRCYXNlU2NoZW1hLmV4dGVuZCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNZWRpY2FsUmVjb3JkVHlwZS5WRVRfVklTSVQpLFxuICB2ZXROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHZpc2l0UmVhc29uOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6IFwiVmlzaXQgcmVhc29uIGlzIHJlcXVpcmVkXCIgfSksXG59KTtcblxuY29uc3QgbWVkaWNhbFJlY29yZFNjaGVtYSA9IHouZGlzY3JpbWluYXRlZFVuaW9uKFwidHlwZVwiLCBbXG4gIHZhY2NpbmF0aW9uU2NoZW1hLFxuICBtZWRpY2F0aW9uU2NoZW1hLFxuICB2ZXRWaXNpdFNjaGVtYSxcbl0pO1xuXG5jb25zdCBkZWxldGVSZWNvcmRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJlY29yZElkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSh7IG1lc3NhZ2U6IFwiSW52YWxpZCByZWNvcmQgSURcIiB9KSxcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbmNvbnN0IGdldERvY3VtZW50c1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbi8vIFR5cGUgZm9yIG1lZGljYWwgcmVjb3JkcyB3aXRoIHJlbGF0aW9ucyBpbmNsdWRlZFxuZXhwb3J0IHR5cGUgTWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnMgPSBNZWRpY2FsUmVjb3JkICYge1xuICB2YWNjaW5hdGlvbjogeyBpZDogbnVtYmVyOyBtZWRpY2FsUmVjb3JkSWQ6IG51bWJlcjsgdmFjY2luZVR5cGU6IHN0cmluZzsgbmV4dER1ZURhdGU6IERhdGUgfCBudWxsIH0gfCBudWxsO1xuICBtZWRpY2F0aW9uOiB7IGlkOiBudW1iZXI7IG1lZGljYWxSZWNvcmRJZDogbnVtYmVyOyBtZWRpY2F0aW9uTmFtZTogc3RyaW5nOyBkb3NhZ2U6IHN0cmluZyB8IG51bGw7IGZyZXF1ZW5jeTogc3RyaW5nIHwgbnVsbCB9IHwgbnVsbDtcbiAgdmV0VmlzaXQ6IHsgaWQ6IG51bWJlcjsgbWVkaWNhbFJlY29yZElkOiBudW1iZXI7IHZldE5hbWU6IHN0cmluZyB8IG51bGw7IHZpc2l0UmVhc29uOiBzdHJpbmcgfCBudWxsIH0gfCBudWxsO1xufTtcblxuLy8gVHlwZSBmb3IgbWVkaWNhbCBkb2N1bWVudHMgd2l0aCBzaWduZWQgVVJMXG5leHBvcnQgdHlwZSBNZWRpY2FsRG9jdW1lbnRTdW1tYXJ5ID0ge1xuICBpZDogbnVtYmVyO1xuICBkb2dJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG1pbWU6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICBwYXRoOiBzdHJpbmc7XG4gIHVwbG9hZGVkQnlVc2VySWQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBzaWduZWRVcmw6IHN0cmluZyB8IG51bGw7XG59O1xuXG4vLyBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBmb3JtIGRhdGEgZm9yIGEgbWVkaWNhbCByZWNvcmRcbmV4cG9ydCB0eXBlIE1lZGljYWxSZWNvcmRGb3JtRGF0YSA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIGRvZ0lkOiBudW1iZXI7XG4gIGRhdGU6IERhdGU7XG4gIHR5cGU6IE1lZGljYWxSZWNvcmRUeXBlO1xuICBub3Rlczogc3RyaW5nIHwgbnVsbDtcbiAgLy8gTmVzdGVkIHNhdGVsbGl0ZSBkYXRhXG4gIHZhY2NpbmF0aW9uPzoge1xuICAgIHZhY2NpbmVUeXBlOiBzdHJpbmc7XG4gICAgbmV4dER1ZURhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICBsb3ROdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHZldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgbWVkaWNhdGlvbj86IHtcbiAgICBtZWRpY2F0aW9uTmFtZTogc3RyaW5nO1xuICAgIGRvc2FnZT86IHN0cmluZyB8IG51bGw7XG4gICAgZnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbDtcbiAgfSB8IG51bGw7XG4gIHZldFZpc2l0Pzoge1xuICAgIHZldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIHZpc2l0UmVhc29uOiBzdHJpbmc7XG4gIH0gfCBudWxsO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1lZGljYWxSZWNvcmQoZGF0YTogTWVkaWNhbFJlY29yZEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8TWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnM+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBwYXJzZWQgPSBtZWRpY2FsUmVjb3JkU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHByaXNtYS5tZWRpY2FsUmVjb3JkLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRvZ0lkOiBwYXJzZWQuZGF0YS5kb2dJZCxcbiAgICAgICAgZGF0ZTogcGFyc2VkLmRhdGEuZGF0ZSxcbiAgICAgICAgdHlwZTogcGFyc2VkLmRhdGEudHlwZSxcbiAgICAgICAgbm90ZXM6IHBhcnNlZC5kYXRhLm5vdGVzLFxuICAgICAgICB2YWNjaW5hdGlvbjogcGFyc2VkLmRhdGEudHlwZSA9PT0gTWVkaWNhbFJlY29yZFR5cGUuVkFDQ0lOQVRJT04gPyB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICB2YWNjaW5lVHlwZTogcGFyc2VkLmRhdGEudmFjY2luZVR5cGUsXG4gICAgICAgICAgICBuZXh0RHVlRGF0ZTogcGFyc2VkLmRhdGEubmV4dER1ZURhdGUsXG4gICAgICAgICAgfVxuICAgICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgICBtZWRpY2F0aW9uOiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5NRURJQ0FUSU9OID8ge1xuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgbWVkaWNhdGlvbk5hbWU6IHBhcnNlZC5kYXRhLm1lZGljYXRpb25OYW1lLFxuICAgICAgICAgICAgZG9zYWdlOiBwYXJzZWQuZGF0YS5kb3NhZ2UsXG4gICAgICAgICAgICBmcmVxdWVuY3k6IHBhcnNlZC5kYXRhLmZyZXF1ZW5jeSxcbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICAgIHZldFZpc2l0OiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5WRVRfVklTSVQgPyB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICB2ZXROYW1lOiBwYXJzZWQuZGF0YS52ZXROYW1lLFxuICAgICAgICAgICAgdmlzaXRSZWFzb246IHBhcnNlZC5kYXRhLnZpc2l0UmVhc29uLFxuICAgICAgICAgIH1cbiAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHZhY2NpbmF0aW9uOiB0cnVlLFxuICAgICAgICBtZWRpY2F0aW9uOiB0cnVlLFxuICAgICAgICB2ZXRWaXNpdDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2FkbWluL2VkaXQtZG9nLyR7cGFyc2VkLmRhdGEuZG9nSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCByZWNvcmQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogcmVjb3JkLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBjcmVhdGUgbWVkaWNhbCByZWNvcmRcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lZGljYWxSZWNvcmQocmVjb3JkSWQ6IG51bWJlciwgZGF0YTogTWVkaWNhbFJlY29yZEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8TWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnM+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBwYXJzZWQgPSBtZWRpY2FsUmVjb3JkU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHByaXNtYS5tZWRpY2FsUmVjb3JkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVjb3JkSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZG9nSWQ6IHBhcnNlZC5kYXRhLmRvZ0lkLFxuICAgICAgICBkYXRlOiBwYXJzZWQuZGF0YS5kYXRlLFxuICAgICAgICB0eXBlOiBwYXJzZWQuZGF0YS50eXBlLFxuICAgICAgICBub3RlczogcGFyc2VkLmRhdGEubm90ZXMsXG4gICAgICAgIHZhY2NpbmF0aW9uOiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5WQUNDSU5BVElPTiA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICB2YWNjaW5lVHlwZTogcGFyc2VkLmRhdGEudmFjY2luZVR5cGUsXG4gICAgICAgICAgICAgIG5leHREdWVEYXRlOiBwYXJzZWQuZGF0YS5uZXh0RHVlRGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgdmFjY2luZVR5cGU6IHBhcnNlZC5kYXRhLnZhY2NpbmVUeXBlLFxuICAgICAgICAgICAgICBuZXh0RHVlRGF0ZTogcGFyc2VkLmRhdGEubmV4dER1ZURhdGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDogeyBkZWxldGU6IHRydWUgfSxcbiAgICAgICAgbWVkaWNhdGlvbjogcGFyc2VkLmRhdGEudHlwZSA9PT0gTWVkaWNhbFJlY29yZFR5cGUuTUVESUNBVElPTiA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICBtZWRpY2F0aW9uTmFtZTogcGFyc2VkLmRhdGEubWVkaWNhdGlvbk5hbWUsXG4gICAgICAgICAgICAgIGRvc2FnZTogcGFyc2VkLmRhdGEuZG9zYWdlLFxuICAgICAgICAgICAgICBmcmVxdWVuY3k6IHBhcnNlZC5kYXRhLmZyZXF1ZW5jeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgbWVkaWNhdGlvbk5hbWU6IHBhcnNlZC5kYXRhLm1lZGljYXRpb25OYW1lLFxuICAgICAgICAgICAgICBkb3NhZ2U6IHBhcnNlZC5kYXRhLmRvc2FnZSxcbiAgICAgICAgICAgICAgZnJlcXVlbmN5OiBwYXJzZWQuZGF0YS5mcmVxdWVuY3ksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDogeyBkZWxldGU6IHRydWUgfSxcbiAgICAgICAgdmV0VmlzaXQ6IHBhcnNlZC5kYXRhLnR5cGUgPT09IE1lZGljYWxSZWNvcmRUeXBlLlZFVF9WSVNJVCA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICB2ZXROYW1lOiBwYXJzZWQuZGF0YS52ZXROYW1lLFxuICAgICAgICAgICAgICB2aXNpdFJlYXNvbjogcGFyc2VkLmRhdGEudmlzaXRSZWFzb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgIHZldE5hbWU6IHBhcnNlZC5kYXRhLnZldE5hbWUsXG4gICAgICAgICAgICAgIHZpc2l0UmVhc29uOiBwYXJzZWQuZGF0YS52aXNpdFJlYXNvbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB7IGRlbGV0ZTogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdmFjY2luYXRpb246IHRydWUsXG4gICAgICAgIG1lZGljYXRpb246IHRydWUsXG4gICAgICAgIHZldFZpc2l0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZWRpdC1kb2cvJHtwYXJzZWQuZGF0YS5kb2dJZH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJNZWRpY2FsIHJlY29yZCB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiByZWNvcmQsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIHVwZGF0ZSBtZWRpY2FsIHJlY29yZFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVkaWNhbFJlY29yZChyZWNvcmRJZDogbnVtYmVyLCBkb2dJZDogbnVtYmVyKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IGRlbGV0ZVJlY29yZFNjaGVtYS5zYWZlUGFyc2UoeyByZWNvcmRJZCwgZG9nSWQgfSk7XG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiBwYXJzZWQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEubWVkaWNhbFJlY29yZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHBhcnNlZC5kYXRhLnJlY29yZElkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9lZGl0LWRvZy8ke3BhcnNlZC5kYXRhLmRvZ0lkfWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIk1lZGljYWwgcmVjb3JkIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGRlbGV0ZSBtZWRpY2FsIHJlY29yZFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWNhbFJlY29yZHMoZG9nSWQ6IG51bWJlciwgcGFnZSA9IDEsIHBhZ2VTaXplID0gMTApIHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gei5vYmplY3Qoe1xuICAgIGRvZ0lkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLFxuICAgIHBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigxKSxcbiAgICBwYWdlU2l6ZTogei5jb2VyY2UubnVtYmVyKCkuaW50KCkubWluKDEpLm1heCgxMDApXG4gIH0pLnNhZmVQYXJzZSh7IGRvZ0lkLCBwYWdlLCBwYWdlU2l6ZSB9KTtcblxuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzXCIpO1xuICB9XG5cbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcblxuICBjb25zdCBbcmVjb3JkcywgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLm1lZGljYWxSZWNvcmQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgZG9nSWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdmFjY2luYXRpb246IHRydWUsXG4gICAgICAgIG1lZGljYXRpb246IHRydWUsXG4gICAgICAgIHZldFZpc2l0OiB0cnVlXG4gICAgICB9LFxuICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfSxcbiAgICAgIHNraXAsXG4gICAgICB0YWtlOiBwYWdlU2l6ZSxcbiAgICB9KSxcbiAgICBwcmlzbWEubWVkaWNhbFJlY29yZC5jb3VudCh7XG4gICAgICB3aGVyZTogeyBkb2dJZCB9LFxuICAgIH0pLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHJlY29yZHMsXG4gICAgdG90YWxDb3VudCxcbiAgICBwYWdlLFxuICAgIHBhZ2VTaXplLFxuICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gcGFnZVNpemUpLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkTWVkaWNhbERvY3VtZW50KFxuICBfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQgfCB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICAvLyBQYXJzZSBkb2dJZCBmcm9tIGZvcm1EYXRhXG4gICAgY29uc3QgcGFyc2VkID0gdXBsb2FkRG9jU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBkb2dJZDogZm9ybURhdGEuZ2V0KFwiZG9nSWRcIilcbiAgICB9KTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZG9nSWQgfSA9IHBhcnNlZC5kYXRhO1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJmaWxlXCIpIGFzIEZpbGU7XG5cbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIk5vIGZpbGUgcHJvdmlkZWRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBleHRlbnNpb25cbiAgICBjb25zdCBleHRlbnNpb24gPSBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoZmlsZS5uYW1lLmxhc3RJbmRleE9mKCcuJykpO1xuICAgIGlmICghQUxMT1dFRF9FWFRFTlNJT05TLmluY2x1ZGVzKGV4dGVuc2lvbikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIG5vdCBhbGxvd2VkLiBBbGxvd2VkIHR5cGVzOiAke0FMTE9XRURfRVhURU5TSU9OUy5qb2luKCcsICcpfWAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGNvbnRlbnQgdHlwZVxuICAgIGlmICghQUxMT1dFRF9DT05URU5UX1RZUEVTLmluY2x1ZGVzKGZpbGUudHlwZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIFwiJHtmaWxlLnR5cGV9XCIgbm90IGFsbG93ZWQuIEFsbG93ZWQgdHlwZXM6IFBERiBhbmQgaW1hZ2VzIG9ubHkuYCxcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBzaXplXG4gICAgaWYgKGZpbGUuc2l6ZSA+IE1BWF9GSUxFX1NJWkUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0b28gbGFyZ2UuIE1heGltdW0gc2l6ZTogJHtNQVhfRklMRV9TSVpFIC8gKDEwMjQgKiAxMDI0KX1NQmAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgZm9yIGF1ZGl0IGxvZ2dpbmdcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QWN0aW5nVXNlcigpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiQXV0aGVudGljYXRpb24gcmVxdWlyZWRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBzdG9yYWdlIHBhdGhcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHJhbmRvbUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcbiAgICBjb25zdCBzdG9yYWdlUGF0aCA9IGBtZWRpY2FsLWRvY3VtZW50cy8ke2RvZ0lkfS8ke3RpbWVzdGFtcH0tJHtyYW5kb21JZH0tJHtmaWxlLm5hbWV9YDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDb252ZXJ0IEZpbGUgdG8gQXJyYXlCdWZmZXIgZm9yIHVwbG9hZFxuICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgICBjb25zdCBmaWxlQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXG4gICAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtZG9jdW1lbnRzXCIpXG4gICAgICAgIC51cGxvYWQoc3RvcmFnZVBhdGgsIGZpbGVCdWZmZXIsIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIHVwbG9hZCBmaWxlOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFN0b3JlIGRvY3VtZW50IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkb2dJZCxcbiAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgcGF0aDogc3RvcmFnZVBhdGgsXG4gICAgICAgICAgbWltZTogZmlsZS50eXBlLFxuICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICB1cGxvYWRlZEJ5VXNlcklkOiB1c2VyLmlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIExvZyBhdWRpdCBldmVudCAoc2tpcCBpbiB0ZXN0cyB3aGVyZSBhdXRoIG1pZ2h0IG5vdCBiZSBzZXQgdXApXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldEN1cnJlbnRVc2VySWQoKTtcbiAgICAgICAgICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYWN0aW9uOiBBdWRpdEFjdGlvbi5NRURJQ0FMX0RPQ1VNRU5UX1VQTE9BRCxcbiAgICAgICAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICAgICAgICBlbnRpdHlUeXBlOiBcIm1lZGljYWxEb2N1bWVudFwiLFxuICAgICAgICAgICAgICBlbnRpdHlJZDogZG9jdW1lbnQuaWQsXG4gICAgICAgICAgICAgIG5vdGU6IGBVcGxvYWRlZCBtZWRpY2FsIGRvY3VtZW50OiAke2ZpbGUubmFtZX0gZm9yIGRvZyAke2RvZ0lkfWAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGF1ZGl0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEb24ndCBmYWlsIHRoZSB1cGxvYWQgaWYgYXVkaXQgbG9nZ2luZyBmYWlsc1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2cgbWVkaWNhbCBkb2N1bWVudCB1cGxvYWQgYXVkaXQgZXZlbnQ6XCIsIGF1ZGl0RXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZG9nLyR7ZG9nSWR9P3RhYj1tZWRpY2FsYCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCBkb2N1bWVudCB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHRoZSB1cGxvYWRlZCBmaWxlIGlmIGRhdGFiYXNlIGluc2VydCBmYWlsc1xuICAgICAgYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtZG9jdW1lbnRzXCIpXG4gICAgICAgIC5yZW1vdmUoW3N0b3JhZ2VQYXRoXSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyBCZXN0LWVmZm9ydCBjbGVhbnVwXG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWNhbERvY3VtZW50cyhkb2dJZDogbnVtYmVyKTogUHJvbWlzZTxNZWRpY2FsRG9jdW1lbnRTdW1tYXJ5W10+IHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gZ2V0RG9jdW1lbnRzU2NoZW1hLnNhZmVQYXJzZSh7IGRvZ0lkIH0pO1xuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkb2cgSURcIik7XG4gIH1cblxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBkb2dJZCB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIGNyZWF0ZWRBdDogXCJkZXNjXCIsIC8vIE5vdGU6IHRlc3QgZXhwZWN0cyAndXBsb2FkZWRBdCcgYnV0IGZpZWxkIGlzICdjcmVhdGVkQXQnXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gR2VuZXJhdGUgc2lnbmVkIFVSTHMgZm9yIGVhY2ggZG9jdW1lbnRcbiAgY29uc3QgZG9jdW1lbnRzV2l0aFNpZ25lZFVybHM6IE1lZGljYWxEb2N1bWVudFN1bW1hcnlbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGRvY3VtZW50cy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhOiBzaWduZWRVcmxEYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXG4gICAgICAgIC5mcm9tKFwibWVkaWNhbC1kb2N1bWVudHNcIilcbiAgICAgICAgLmNyZWF0ZVNpZ25lZFVybChkb2MucGF0aCwgOTAwKTsgLy8gMTUgbWludXRlcyBleHBpcnlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZG9jLFxuICAgICAgICBzaWduZWRVcmw6IHNpZ25lZFVybERhdGE/LnNpZ25lZFVybCB8fCBudWxsLFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBkb2N1bWVudHNXaXRoU2lnbmVkVXJscztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lZGljYWxEb2N1bWVudChkb2N1bWVudElkOiBudW1iZXIsIHN0b3JhZ2VQYXRoOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gZGVsZXRlRG9jU2NoZW1hLnNhZmVQYXJzZSh7IGRvY3VtZW50SWQsIHN0b3JhZ2VQYXRoIH0pO1xuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogcGFyc2VkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IGRvY3VtZW50IGluZm8gYmVmb3JlIGRlbGV0aW9uIGZvciBhdWRpdCBsb2dnaW5nXG4gICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGRvY3VtZW50SWQgfSxcbiAgICAgIHNlbGVjdDogeyBkb2dJZDogdHJ1ZSwgbmFtZTogdHJ1ZSB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJEb2N1bWVudCBub3QgZm91bmRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcbiAgICBjb25zdCB7IGVycm9yOiBkZWxldGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgLmZyb20oXCJtZWRpY2FsLWRvY3VtZW50c1wiKVxuICAgICAgLnJlbW92ZShbc3RvcmFnZVBhdGhdKTtcblxuICAgIGlmIChkZWxldGVFcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gZGVsZXRlIGRvY3VtZW50IGZyb20gc3RvcmFnZTogJHtkZWxldGVFcnJvci5tZXNzYWdlfWAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5tZWRpY2FsRG9jdW1lbnQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBkb2N1bWVudElkIH0sXG4gICAgfSk7XG5cbiAgICAvLyBMb2cgYXVkaXQgZXZlbnQgKHNraXAgaW4gdGVzdHMgd2hlcmUgYXV0aCBtaWdodCBub3QgYmUgc2V0IHVwKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRDdXJyZW50VXNlcklkKCk7XG4gICAgICAgIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogQXVkaXRBY3Rpb24uTUVESUNBTF9ET0NVTUVOVF9ERUxFVEUsXG4gICAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICAgIGVudGl0eVR5cGU6IFwibWVkaWNhbERvY3VtZW50XCIsXG4gICAgICAgICAgZW50aXR5SWQ6IGRvY3VtZW50SWQsXG4gICAgICAgICAgbm90ZTogYERlbGV0ZWQgbWVkaWNhbCBkb2N1bWVudDogJHtkb2N1bWVudC5uYW1lfSBmb3IgZG9nICR7ZG9jdW1lbnQuZG9nSWR9YCxcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGF1ZGl0RXJyb3IpIHtcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCB0aGUgZGVsZXRpb24gaWYgYXVkaXQgbG9nZ2luZyBmYWlsc1xuICAgICAgICBjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gbG9nIG1lZGljYWwgZG9jdW1lbnQgZGVsZXRpb24gYXVkaXQgZXZlbnQ6XCIsIGF1ZGl0RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZG9nLyR7ZG9jdW1lbnQuZG9nSWR9P3RhYj1tZWRpY2FsYCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCBkb2N1bWVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBkZWxldGUgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyU0EwSHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:c24fbc [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"600766ba61c2c48d02f4c6100c955c1b192d033ed2":"updateMedicalRecord"},"lib/actions/medical.actions.ts",""] */ __turbopack_context__.s([
    "updateMedicalRecord",
    ()=>updateMedicalRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateMedicalRecord = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("600766ba61c2c48d02f4c6100c955c1b192d033ed2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateMedicalRecord"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVkaWNhbC5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9hY3Rpb25zL21lZGljYWwuYWN0aW9ucy50c1xuXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IE1lZGljYWxSZWNvcmRUeXBlLCBNZWRpY2FsUmVjb3JkLCBBdWRpdEFjdGlvbiB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgYXNzZXJ0Um9sZSwgZ2V0QWN0aW5nVXNlciB9IGZyb20gXCJAL2xpYi9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9uc1wiO1xuaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VySWQgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9hdWRpdC5hY3Rpb25zXCI7XG5cbi8vIEZpbGUgdmFsaWRhdGlvbiBjb25zdGFudHMgKG1pcnJvciBjbGllbnQtc2lkZSB2YWxpZGF0aW9uKVxuY29uc3QgTUFYX0ZJTEVfU0laRSA9IDEwICogMTAyNCAqIDEwMjQ7IC8vIDEwTUJcbmNvbnN0IEFMTE9XRURfRVhURU5TSU9OUyA9IFsnLnBkZicsICcuanBnJywgJy5qcGVnJywgJy5wbmcnLCAnLmdpZicsICcud2VicCcsICcudGlmZicsICcuYm1wJ107XG5jb25zdCBBTExPV0VEX0NPTlRFTlRfVFlQRVMgPSBbXG4gICdhcHBsaWNhdGlvbi9wZGYnLFxuICAnaW1hZ2UvanBlZycsXG4gICdpbWFnZS9qcGcnLFxuICAnaW1hZ2UvcG5nJyxcbiAgJ2ltYWdlL2dpZicsXG4gICdpbWFnZS93ZWJwJyxcbiAgJ2ltYWdlL3RpZmYnLFxuICAnaW1hZ2UvYm1wJyxcbl07XG5cbmNvbnN0IHVwbG9hZERvY1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbmNvbnN0IGRlbGV0ZURvY1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9jdW1lbnRJZDogei5jb2VyY2UubnVtYmVyKCkuaW50KCkucG9zaXRpdmUoeyBtZXNzYWdlOiBcIkludmFsaWQgZG9jdW1lbnQgSURcIiB9KSxcbiAgc3RvcmFnZVBhdGg6IHouc3RyaW5nKCkubWluKDEsIHsgbWVzc2FnZTogXCJTdG9yYWdlIHBhdGggaXMgcmVxdWlyZWRcIiB9KSxcbn0pO1xuXG5jb25zdCBtZWRpY2FsUmVjb3JkQmFzZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxuICBkYXRlOiB6LmNvZXJjZS5kYXRlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRhdGVcIiB9KSxcbiAgdHlwZTogei5uYXRpdmVFbnVtKE1lZGljYWxSZWNvcmRUeXBlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCByZWNvcmQgdHlwZVwiIH0pLFxuICBub3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSk7XG5cbmNvbnN0IHZhY2NpbmF0aW9uU2NoZW1hID0gbWVkaWNhbFJlY29yZEJhc2VTY2hlbWEuZXh0ZW5kKHtcbiAgdHlwZTogei5saXRlcmFsKE1lZGljYWxSZWNvcmRUeXBlLlZBQ0NJTkFUSU9OKSxcbiAgdmFjY2luZVR5cGU6IHouc3RyaW5nKCkubWluKDEsIHsgbWVzc2FnZTogXCJWYWNjaW5lIHR5cGUgaXMgcmVxdWlyZWRcIiB9KSxcbiAgbmV4dER1ZURhdGU6IHouY29lcmNlLmRhdGUoKS5vcHRpb25hbCgpLFxufSk7XG5cbmNvbnN0IG1lZGljYXRpb25TY2hlbWEgPSBtZWRpY2FsUmVjb3JkQmFzZVNjaGVtYS5leHRlbmQoe1xuICB0eXBlOiB6LmxpdGVyYWwoTWVkaWNhbFJlY29yZFR5cGUuTUVESUNBVElPTiksXG4gIG1lZGljYXRpb25OYW1lOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6IFwiTWVkaWNhdGlvbiBuYW1lIGlzIHJlcXVpcmVkXCIgfSksXG4gIGRvc2FnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBmcmVxdWVuY3k6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCB2ZXRWaXNpdFNjaGVtYSA9IG1lZGljYWxSZWNvcmRCYXNlU2NoZW1hLmV4dGVuZCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNZWRpY2FsUmVjb3JkVHlwZS5WRVRfVklTSVQpLFxuICB2ZXROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHZpc2l0UmVhc29uOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6IFwiVmlzaXQgcmVhc29uIGlzIHJlcXVpcmVkXCIgfSksXG59KTtcblxuY29uc3QgbWVkaWNhbFJlY29yZFNjaGVtYSA9IHouZGlzY3JpbWluYXRlZFVuaW9uKFwidHlwZVwiLCBbXG4gIHZhY2NpbmF0aW9uU2NoZW1hLFxuICBtZWRpY2F0aW9uU2NoZW1hLFxuICB2ZXRWaXNpdFNjaGVtYSxcbl0pO1xuXG5jb25zdCBkZWxldGVSZWNvcmRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJlY29yZElkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSh7IG1lc3NhZ2U6IFwiSW52YWxpZCByZWNvcmQgSURcIiB9KSxcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbmNvbnN0IGdldERvY3VtZW50c1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbi8vIFR5cGUgZm9yIG1lZGljYWwgcmVjb3JkcyB3aXRoIHJlbGF0aW9ucyBpbmNsdWRlZFxuZXhwb3J0IHR5cGUgTWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnMgPSBNZWRpY2FsUmVjb3JkICYge1xuICB2YWNjaW5hdGlvbjogeyBpZDogbnVtYmVyOyBtZWRpY2FsUmVjb3JkSWQ6IG51bWJlcjsgdmFjY2luZVR5cGU6IHN0cmluZzsgbmV4dER1ZURhdGU6IERhdGUgfCBudWxsIH0gfCBudWxsO1xuICBtZWRpY2F0aW9uOiB7IGlkOiBudW1iZXI7IG1lZGljYWxSZWNvcmRJZDogbnVtYmVyOyBtZWRpY2F0aW9uTmFtZTogc3RyaW5nOyBkb3NhZ2U6IHN0cmluZyB8IG51bGw7IGZyZXF1ZW5jeTogc3RyaW5nIHwgbnVsbCB9IHwgbnVsbDtcbiAgdmV0VmlzaXQ6IHsgaWQ6IG51bWJlcjsgbWVkaWNhbFJlY29yZElkOiBudW1iZXI7IHZldE5hbWU6IHN0cmluZyB8IG51bGw7IHZpc2l0UmVhc29uOiBzdHJpbmcgfCBudWxsIH0gfCBudWxsO1xufTtcblxuLy8gVHlwZSBmb3IgbWVkaWNhbCBkb2N1bWVudHMgd2l0aCBzaWduZWQgVVJMXG5leHBvcnQgdHlwZSBNZWRpY2FsRG9jdW1lbnRTdW1tYXJ5ID0ge1xuICBpZDogbnVtYmVyO1xuICBkb2dJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG1pbWU6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICBwYXRoOiBzdHJpbmc7XG4gIHVwbG9hZGVkQnlVc2VySWQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBzaWduZWRVcmw6IHN0cmluZyB8IG51bGw7XG59O1xuXG4vLyBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBmb3JtIGRhdGEgZm9yIGEgbWVkaWNhbCByZWNvcmRcbmV4cG9ydCB0eXBlIE1lZGljYWxSZWNvcmRGb3JtRGF0YSA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIGRvZ0lkOiBudW1iZXI7XG4gIGRhdGU6IERhdGU7XG4gIHR5cGU6IE1lZGljYWxSZWNvcmRUeXBlO1xuICBub3Rlczogc3RyaW5nIHwgbnVsbDtcbiAgLy8gTmVzdGVkIHNhdGVsbGl0ZSBkYXRhXG4gIHZhY2NpbmF0aW9uPzoge1xuICAgIHZhY2NpbmVUeXBlOiBzdHJpbmc7XG4gICAgbmV4dER1ZURhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICBsb3ROdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHZldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgbWVkaWNhdGlvbj86IHtcbiAgICBtZWRpY2F0aW9uTmFtZTogc3RyaW5nO1xuICAgIGRvc2FnZT86IHN0cmluZyB8IG51bGw7XG4gICAgZnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbDtcbiAgfSB8IG51bGw7XG4gIHZldFZpc2l0Pzoge1xuICAgIHZldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIHZpc2l0UmVhc29uOiBzdHJpbmc7XG4gIH0gfCBudWxsO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1lZGljYWxSZWNvcmQoZGF0YTogTWVkaWNhbFJlY29yZEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8TWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnM+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBwYXJzZWQgPSBtZWRpY2FsUmVjb3JkU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHByaXNtYS5tZWRpY2FsUmVjb3JkLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRvZ0lkOiBwYXJzZWQuZGF0YS5kb2dJZCxcbiAgICAgICAgZGF0ZTogcGFyc2VkLmRhdGEuZGF0ZSxcbiAgICAgICAgdHlwZTogcGFyc2VkLmRhdGEudHlwZSxcbiAgICAgICAgbm90ZXM6IHBhcnNlZC5kYXRhLm5vdGVzLFxuICAgICAgICB2YWNjaW5hdGlvbjogcGFyc2VkLmRhdGEudHlwZSA9PT0gTWVkaWNhbFJlY29yZFR5cGUuVkFDQ0lOQVRJT04gPyB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICB2YWNjaW5lVHlwZTogcGFyc2VkLmRhdGEudmFjY2luZVR5cGUsXG4gICAgICAgICAgICBuZXh0RHVlRGF0ZTogcGFyc2VkLmRhdGEubmV4dER1ZURhdGUsXG4gICAgICAgICAgfVxuICAgICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgICBtZWRpY2F0aW9uOiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5NRURJQ0FUSU9OID8ge1xuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgbWVkaWNhdGlvbk5hbWU6IHBhcnNlZC5kYXRhLm1lZGljYXRpb25OYW1lLFxuICAgICAgICAgICAgZG9zYWdlOiBwYXJzZWQuZGF0YS5kb3NhZ2UsXG4gICAgICAgICAgICBmcmVxdWVuY3k6IHBhcnNlZC5kYXRhLmZyZXF1ZW5jeSxcbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICAgIHZldFZpc2l0OiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5WRVRfVklTSVQgPyB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICB2ZXROYW1lOiBwYXJzZWQuZGF0YS52ZXROYW1lLFxuICAgICAgICAgICAgdmlzaXRSZWFzb246IHBhcnNlZC5kYXRhLnZpc2l0UmVhc29uLFxuICAgICAgICAgIH1cbiAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHZhY2NpbmF0aW9uOiB0cnVlLFxuICAgICAgICBtZWRpY2F0aW9uOiB0cnVlLFxuICAgICAgICB2ZXRWaXNpdDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2FkbWluL2VkaXQtZG9nLyR7cGFyc2VkLmRhdGEuZG9nSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCByZWNvcmQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogcmVjb3JkLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBjcmVhdGUgbWVkaWNhbCByZWNvcmRcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lZGljYWxSZWNvcmQocmVjb3JkSWQ6IG51bWJlciwgZGF0YTogTWVkaWNhbFJlY29yZEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8TWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnM+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBwYXJzZWQgPSBtZWRpY2FsUmVjb3JkU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHByaXNtYS5tZWRpY2FsUmVjb3JkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVjb3JkSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZG9nSWQ6IHBhcnNlZC5kYXRhLmRvZ0lkLFxuICAgICAgICBkYXRlOiBwYXJzZWQuZGF0YS5kYXRlLFxuICAgICAgICB0eXBlOiBwYXJzZWQuZGF0YS50eXBlLFxuICAgICAgICBub3RlczogcGFyc2VkLmRhdGEubm90ZXMsXG4gICAgICAgIHZhY2NpbmF0aW9uOiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5WQUNDSU5BVElPTiA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICB2YWNjaW5lVHlwZTogcGFyc2VkLmRhdGEudmFjY2luZVR5cGUsXG4gICAgICAgICAgICAgIG5leHREdWVEYXRlOiBwYXJzZWQuZGF0YS5uZXh0RHVlRGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgdmFjY2luZVR5cGU6IHBhcnNlZC5kYXRhLnZhY2NpbmVUeXBlLFxuICAgICAgICAgICAgICBuZXh0RHVlRGF0ZTogcGFyc2VkLmRhdGEubmV4dER1ZURhdGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDogeyBkZWxldGU6IHRydWUgfSxcbiAgICAgICAgbWVkaWNhdGlvbjogcGFyc2VkLmRhdGEudHlwZSA9PT0gTWVkaWNhbFJlY29yZFR5cGUuTUVESUNBVElPTiA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICBtZWRpY2F0aW9uTmFtZTogcGFyc2VkLmRhdGEubWVkaWNhdGlvbk5hbWUsXG4gICAgICAgICAgICAgIGRvc2FnZTogcGFyc2VkLmRhdGEuZG9zYWdlLFxuICAgICAgICAgICAgICBmcmVxdWVuY3k6IHBhcnNlZC5kYXRhLmZyZXF1ZW5jeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgbWVkaWNhdGlvbk5hbWU6IHBhcnNlZC5kYXRhLm1lZGljYXRpb25OYW1lLFxuICAgICAgICAgICAgICBkb3NhZ2U6IHBhcnNlZC5kYXRhLmRvc2FnZSxcbiAgICAgICAgICAgICAgZnJlcXVlbmN5OiBwYXJzZWQuZGF0YS5mcmVxdWVuY3ksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDogeyBkZWxldGU6IHRydWUgfSxcbiAgICAgICAgdmV0VmlzaXQ6IHBhcnNlZC5kYXRhLnR5cGUgPT09IE1lZGljYWxSZWNvcmRUeXBlLlZFVF9WSVNJVCA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICB2ZXROYW1lOiBwYXJzZWQuZGF0YS52ZXROYW1lLFxuICAgICAgICAgICAgICB2aXNpdFJlYXNvbjogcGFyc2VkLmRhdGEudmlzaXRSZWFzb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgIHZldE5hbWU6IHBhcnNlZC5kYXRhLnZldE5hbWUsXG4gICAgICAgICAgICAgIHZpc2l0UmVhc29uOiBwYXJzZWQuZGF0YS52aXNpdFJlYXNvbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB7IGRlbGV0ZTogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdmFjY2luYXRpb246IHRydWUsXG4gICAgICAgIG1lZGljYXRpb246IHRydWUsXG4gICAgICAgIHZldFZpc2l0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZWRpdC1kb2cvJHtwYXJzZWQuZGF0YS5kb2dJZH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJNZWRpY2FsIHJlY29yZCB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiByZWNvcmQsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIHVwZGF0ZSBtZWRpY2FsIHJlY29yZFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVkaWNhbFJlY29yZChyZWNvcmRJZDogbnVtYmVyLCBkb2dJZDogbnVtYmVyKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IGRlbGV0ZVJlY29yZFNjaGVtYS5zYWZlUGFyc2UoeyByZWNvcmRJZCwgZG9nSWQgfSk7XG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiBwYXJzZWQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEubWVkaWNhbFJlY29yZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHBhcnNlZC5kYXRhLnJlY29yZElkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9lZGl0LWRvZy8ke3BhcnNlZC5kYXRhLmRvZ0lkfWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIk1lZGljYWwgcmVjb3JkIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGRlbGV0ZSBtZWRpY2FsIHJlY29yZFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWNhbFJlY29yZHMoZG9nSWQ6IG51bWJlciwgcGFnZSA9IDEsIHBhZ2VTaXplID0gMTApIHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gei5vYmplY3Qoe1xuICAgIGRvZ0lkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLFxuICAgIHBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigxKSxcbiAgICBwYWdlU2l6ZTogei5jb2VyY2UubnVtYmVyKCkuaW50KCkubWluKDEpLm1heCgxMDApXG4gIH0pLnNhZmVQYXJzZSh7IGRvZ0lkLCBwYWdlLCBwYWdlU2l6ZSB9KTtcblxuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzXCIpO1xuICB9XG5cbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcblxuICBjb25zdCBbcmVjb3JkcywgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLm1lZGljYWxSZWNvcmQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgZG9nSWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdmFjY2luYXRpb246IHRydWUsXG4gICAgICAgIG1lZGljYXRpb246IHRydWUsXG4gICAgICAgIHZldFZpc2l0OiB0cnVlXG4gICAgICB9LFxuICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfSxcbiAgICAgIHNraXAsXG4gICAgICB0YWtlOiBwYWdlU2l6ZSxcbiAgICB9KSxcbiAgICBwcmlzbWEubWVkaWNhbFJlY29yZC5jb3VudCh7XG4gICAgICB3aGVyZTogeyBkb2dJZCB9LFxuICAgIH0pLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHJlY29yZHMsXG4gICAgdG90YWxDb3VudCxcbiAgICBwYWdlLFxuICAgIHBhZ2VTaXplLFxuICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gcGFnZVNpemUpLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkTWVkaWNhbERvY3VtZW50KFxuICBfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQgfCB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICAvLyBQYXJzZSBkb2dJZCBmcm9tIGZvcm1EYXRhXG4gICAgY29uc3QgcGFyc2VkID0gdXBsb2FkRG9jU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBkb2dJZDogZm9ybURhdGEuZ2V0KFwiZG9nSWRcIilcbiAgICB9KTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZG9nSWQgfSA9IHBhcnNlZC5kYXRhO1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJmaWxlXCIpIGFzIEZpbGU7XG5cbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIk5vIGZpbGUgcHJvdmlkZWRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBleHRlbnNpb25cbiAgICBjb25zdCBleHRlbnNpb24gPSBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoZmlsZS5uYW1lLmxhc3RJbmRleE9mKCcuJykpO1xuICAgIGlmICghQUxMT1dFRF9FWFRFTlNJT05TLmluY2x1ZGVzKGV4dGVuc2lvbikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIG5vdCBhbGxvd2VkLiBBbGxvd2VkIHR5cGVzOiAke0FMTE9XRURfRVhURU5TSU9OUy5qb2luKCcsICcpfWAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGNvbnRlbnQgdHlwZVxuICAgIGlmICghQUxMT1dFRF9DT05URU5UX1RZUEVTLmluY2x1ZGVzKGZpbGUudHlwZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIFwiJHtmaWxlLnR5cGV9XCIgbm90IGFsbG93ZWQuIEFsbG93ZWQgdHlwZXM6IFBERiBhbmQgaW1hZ2VzIG9ubHkuYCxcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBzaXplXG4gICAgaWYgKGZpbGUuc2l6ZSA+IE1BWF9GSUxFX1NJWkUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0b28gbGFyZ2UuIE1heGltdW0gc2l6ZTogJHtNQVhfRklMRV9TSVpFIC8gKDEwMjQgKiAxMDI0KX1NQmAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgZm9yIGF1ZGl0IGxvZ2dpbmdcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QWN0aW5nVXNlcigpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiQXV0aGVudGljYXRpb24gcmVxdWlyZWRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBzdG9yYWdlIHBhdGhcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHJhbmRvbUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcbiAgICBjb25zdCBzdG9yYWdlUGF0aCA9IGBtZWRpY2FsLWRvY3VtZW50cy8ke2RvZ0lkfS8ke3RpbWVzdGFtcH0tJHtyYW5kb21JZH0tJHtmaWxlLm5hbWV9YDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDb252ZXJ0IEZpbGUgdG8gQXJyYXlCdWZmZXIgZm9yIHVwbG9hZFxuICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgICBjb25zdCBmaWxlQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXG4gICAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtZG9jdW1lbnRzXCIpXG4gICAgICAgIC51cGxvYWQoc3RvcmFnZVBhdGgsIGZpbGVCdWZmZXIsIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIHVwbG9hZCBmaWxlOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFN0b3JlIGRvY3VtZW50IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkb2dJZCxcbiAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgcGF0aDogc3RvcmFnZVBhdGgsXG4gICAgICAgICAgbWltZTogZmlsZS50eXBlLFxuICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICB1cGxvYWRlZEJ5VXNlcklkOiB1c2VyLmlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIExvZyBhdWRpdCBldmVudCAoc2tpcCBpbiB0ZXN0cyB3aGVyZSBhdXRoIG1pZ2h0IG5vdCBiZSBzZXQgdXApXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldEN1cnJlbnRVc2VySWQoKTtcbiAgICAgICAgICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYWN0aW9uOiBBdWRpdEFjdGlvbi5NRURJQ0FMX0RPQ1VNRU5UX1VQTE9BRCxcbiAgICAgICAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICAgICAgICBlbnRpdHlUeXBlOiBcIm1lZGljYWxEb2N1bWVudFwiLFxuICAgICAgICAgICAgICBlbnRpdHlJZDogZG9jdW1lbnQuaWQsXG4gICAgICAgICAgICAgIG5vdGU6IGBVcGxvYWRlZCBtZWRpY2FsIGRvY3VtZW50OiAke2ZpbGUubmFtZX0gZm9yIGRvZyAke2RvZ0lkfWAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGF1ZGl0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEb24ndCBmYWlsIHRoZSB1cGxvYWQgaWYgYXVkaXQgbG9nZ2luZyBmYWlsc1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2cgbWVkaWNhbCBkb2N1bWVudCB1cGxvYWQgYXVkaXQgZXZlbnQ6XCIsIGF1ZGl0RXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZG9nLyR7ZG9nSWR9P3RhYj1tZWRpY2FsYCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCBkb2N1bWVudCB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHRoZSB1cGxvYWRlZCBmaWxlIGlmIGRhdGFiYXNlIGluc2VydCBmYWlsc1xuICAgICAgYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtZG9jdW1lbnRzXCIpXG4gICAgICAgIC5yZW1vdmUoW3N0b3JhZ2VQYXRoXSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyBCZXN0LWVmZm9ydCBjbGVhbnVwXG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWNhbERvY3VtZW50cyhkb2dJZDogbnVtYmVyKTogUHJvbWlzZTxNZWRpY2FsRG9jdW1lbnRTdW1tYXJ5W10+IHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gZ2V0RG9jdW1lbnRzU2NoZW1hLnNhZmVQYXJzZSh7IGRvZ0lkIH0pO1xuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkb2cgSURcIik7XG4gIH1cblxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBkb2dJZCB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIGNyZWF0ZWRBdDogXCJkZXNjXCIsIC8vIE5vdGU6IHRlc3QgZXhwZWN0cyAndXBsb2FkZWRBdCcgYnV0IGZpZWxkIGlzICdjcmVhdGVkQXQnXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gR2VuZXJhdGUgc2lnbmVkIFVSTHMgZm9yIGVhY2ggZG9jdW1lbnRcbiAgY29uc3QgZG9jdW1lbnRzV2l0aFNpZ25lZFVybHM6IE1lZGljYWxEb2N1bWVudFN1bW1hcnlbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGRvY3VtZW50cy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhOiBzaWduZWRVcmxEYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXG4gICAgICAgIC5mcm9tKFwibWVkaWNhbC1kb2N1bWVudHNcIilcbiAgICAgICAgLmNyZWF0ZVNpZ25lZFVybChkb2MucGF0aCwgOTAwKTsgLy8gMTUgbWludXRlcyBleHBpcnlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZG9jLFxuICAgICAgICBzaWduZWRVcmw6IHNpZ25lZFVybERhdGE/LnNpZ25lZFVybCB8fCBudWxsLFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBkb2N1bWVudHNXaXRoU2lnbmVkVXJscztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lZGljYWxEb2N1bWVudChkb2N1bWVudElkOiBudW1iZXIsIHN0b3JhZ2VQYXRoOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gZGVsZXRlRG9jU2NoZW1hLnNhZmVQYXJzZSh7IGRvY3VtZW50SWQsIHN0b3JhZ2VQYXRoIH0pO1xuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogcGFyc2VkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IGRvY3VtZW50IGluZm8gYmVmb3JlIGRlbGV0aW9uIGZvciBhdWRpdCBsb2dnaW5nXG4gICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGRvY3VtZW50SWQgfSxcbiAgICAgIHNlbGVjdDogeyBkb2dJZDogdHJ1ZSwgbmFtZTogdHJ1ZSB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJEb2N1bWVudCBub3QgZm91bmRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcbiAgICBjb25zdCB7IGVycm9yOiBkZWxldGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgLmZyb20oXCJtZWRpY2FsLWRvY3VtZW50c1wiKVxuICAgICAgLnJlbW92ZShbc3RvcmFnZVBhdGhdKTtcblxuICAgIGlmIChkZWxldGVFcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gZGVsZXRlIGRvY3VtZW50IGZyb20gc3RvcmFnZTogJHtkZWxldGVFcnJvci5tZXNzYWdlfWAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5tZWRpY2FsRG9jdW1lbnQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBkb2N1bWVudElkIH0sXG4gICAgfSk7XG5cbiAgICAvLyBMb2cgYXVkaXQgZXZlbnQgKHNraXAgaW4gdGVzdHMgd2hlcmUgYXV0aCBtaWdodCBub3QgYmUgc2V0IHVwKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRDdXJyZW50VXNlcklkKCk7XG4gICAgICAgIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogQXVkaXRBY3Rpb24uTUVESUNBTF9ET0NVTUVOVF9ERUxFVEUsXG4gICAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICAgIGVudGl0eVR5cGU6IFwibWVkaWNhbERvY3VtZW50XCIsXG4gICAgICAgICAgZW50aXR5SWQ6IGRvY3VtZW50SWQsXG4gICAgICAgICAgbm90ZTogYERlbGV0ZWQgbWVkaWNhbCBkb2N1bWVudDogJHtkb2N1bWVudC5uYW1lfSBmb3IgZG9nICR7ZG9jdW1lbnQuZG9nSWR9YCxcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGF1ZGl0RXJyb3IpIHtcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCB0aGUgZGVsZXRpb24gaWYgYXVkaXQgbG9nZ2luZyBmYWlsc1xuICAgICAgICBjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gbG9nIG1lZGljYWwgZG9jdW1lbnQgZGVsZXRpb24gYXVkaXQgZXZlbnQ6XCIsIGF1ZGl0RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZG9nLyR7ZG9jdW1lbnQuZG9nSWR9P3RhYj1tZWRpY2FsYCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCBkb2N1bWVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBkZWxldGUgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyU0EyTHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/MedicalRecordDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MedicalRecordDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$ae349d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:ae349d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$c24fbc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:c24fbc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
;
var _s = __turbopack_context__.k.signature();
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
function MedicalRecordDialog({ dogId }) {
    _s();
    const [currentRecord, setCurrentRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        dogId,
        date: new Date(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalRecordType"].NOTE,
        notes: null
    });
    const [isFormOpen, setIsFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveError, setSaveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatDateTimeLocal = (date)=>{
        if (!date) return "";
        try {
            const d = new Date(date);
            return d.toISOString().substring(0, 16); // YYYY-MM-DDTHH:MM format
        } catch  {
            return "";
        }
    };
    const handleOpenAddDialog = ()=>{
        setCurrentRecord({
            dogId,
            date: new Date(),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalRecordType"].NOTE,
            notes: null,
            vaccination: null,
            medication: null,
            vetVisit: null
        });
        setSaveError(null);
        setIsFormOpen(true);
    };
    const handleFormChange = (field, value)=>{
        setCurrentRecord((prev)=>{
            // Handle nested fields for satellite data
            if (field.startsWith('vaccination.')) {
                const vaccinationField = field.split('.')[1];
                return {
                    ...prev,
                    vaccination: {
                        ...prev.vaccination,
                        vaccineType: prev.vaccination?.vaccineType || '',
                        nextDueDate: prev.vaccination?.nextDueDate || null,
                        lotNumber: prev.vaccination?.lotNumber || '',
                        vetName: prev.vaccination?.vetName || '',
                        [vaccinationField]: value
                    }
                };
            }
            if (field.startsWith('medication.')) {
                const medicationField = field.split('.')[1];
                return {
                    ...prev,
                    medication: {
                        ...prev.medication,
                        medicationName: prev.medication?.medicationName || '',
                        dosage: prev.medication?.dosage || null,
                        frequency: prev.medication?.frequency || null,
                        [medicationField]: value
                    }
                };
            }
            if (field.startsWith('vetVisit.')) {
                const vetVisitField = field.split('.')[1];
                return {
                    ...prev,
                    vetVisit: {
                        ...prev.vetVisit,
                        vetName: prev.vetVisit?.vetName || null,
                        visitReason: prev.vetVisit?.visitReason || '',
                        [vetVisitField]: value
                    }
                };
            }
            // Handle top-level fields
            return {
                ...prev,
                [field]: value
            };
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSaveError(null);
        try {
            if (currentRecord.id) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$c24fbc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateMedicalRecord"])(currentRecord.id, currentRecord);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$ae349d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createMedicalRecord"])(currentRecord);
            }
            setIsFormOpen(false);
            setCurrentRecord({
                dogId,
                date: new Date(),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalRecordType"].NOTE,
                notes: null,
                vaccination: null,
                medication: null,
                vetVisit: null
            });
            setSaveError(null);
        } catch (error) {
            setSaveError(error instanceof Error ? error.message : 'Failed to save medical record');
        } finally{
            setIsSubmitting(false);
        }
    };
    const renderFormFields = ()=>{
        const recordType = currentRecord.type;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                recordType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalRecordType"].VACCINATION && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "vaccineType",
                                    children: "Vaccine Type"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "vaccineType",
                                    value: currentRecord.vaccination?.vaccineType || '',
                                    onChange: (e)=>handleFormChange('vaccination.vaccineType', e.target.value),
                                    placeholder: "e.g., Rabies, DHLPP",
                                    required: true,
                                    "data-testid": "input-vaccine-type"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "nextDueDate",
                                    children: "Next Due Date (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "nextDueDate",
                                    type: "date",
                                    value: currentRecord.vaccination?.nextDueDate ? formatDateTimeLocal(currentRecord.vaccination.nextDueDate).split('T')[0] : '',
                                    onChange: (e)=>handleFormChange('vaccination.nextDueDate', e.target.value ? new Date(e.target.value) : null),
                                    "data-testid": "input-vaccine-date"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "vaccineLot",
                                    children: "Lot Number (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "vaccineLot",
                                    value: currentRecord.vaccination?.lotNumber || '',
                                    onChange: (e)=>handleFormChange('vaccination.lotNumber', e.target.value),
                                    placeholder: "Lot number",
                                    "data-testid": "input-vaccine-lot"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "vaccineVet",
                                    children: "Vet/Clinic (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "vaccineVet",
                                    value: currentRecord.vaccination?.vetName || '',
                                    onChange: (e)=>handleFormChange('vaccination.vetName', e.target.value),
                                    placeholder: "Vet or clinic name",
                                    "data-testid": "input-vaccine-vet"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                recordType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalRecordType"].MEDICATION && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "medicationName",
                                    children: "Medication Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "medicationName",
                                    value: currentRecord.medication?.medicationName || '',
                                    onChange: (e)=>handleFormChange('medication.medicationName', e.target.value),
                                    placeholder: "e.g., Gabapentin",
                                    required: true,
                                    "data-testid": "input-procedure-name"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "procedureDate",
                                    children: "Procedure Date"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "procedureDate",
                                    type: "date",
                                    value: currentRecord.date ? formatDateTimeLocal(currentRecord.date).split('T')[0] : '',
                                    onChange: (e)=>handleFormChange('date', e.target.value ? new Date(e.target.value) : new Date()),
                                    "data-testid": "input-procedure-date"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "dosage",
                                    children: "Dosage"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "dosage",
                                    value: currentRecord.medication?.dosage || '',
                                    onChange: (e)=>handleFormChange('medication.dosage', e.target.value),
                                    placeholder: "e.g., 100mg, 1 tablet",
                                    "data-testid": "input-medication-dosage"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "frequency",
                                    children: "Frequency"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "frequency",
                                    value: currentRecord.medication?.frequency || '',
                                    onChange: (e)=>handleFormChange('medication.frequency', e.target.value),
                                    placeholder: "e.g., Twice daily, As needed"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                recordType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalRecordType"].VET_VISIT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "checkupDate",
                                    children: "Checkup Date"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "checkupDate",
                                    type: "date",
                                    value: currentRecord.date ? formatDateTimeLocal(currentRecord.date).split('T')[0] : '',
                                    onChange: (e)=>handleFormChange('date', e.target.value ? new Date(e.target.value) : new Date()),
                                    "data-testid": "input-checkup-date"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "visitReason",
                                    children: "Reason for Visit"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "visitReason",
                                    value: currentRecord.vetVisit?.visitReason || '',
                                    onChange: (e)=>handleFormChange('vetVisit.visitReason', e.target.value),
                                    placeholder: "e.g., Annual checkup, Limping",
                                    required: true,
                                    "data-testid": "input-checkup-notes"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "vetName",
                                    children: "Vet / Clinic (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "vetName",
                                    value: currentRecord.vetVisit?.vetName || '',
                                    onChange: (e)=>handleFormChange('vetVisit.vetName', e.target.value),
                                    placeholder: "e.g., Dr. Smith @ PA Vet",
                                    "data-testid": "input-vet-name"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleOpenAddDialog,
                "data-testid": "btn-add-medical-record",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                        className: "h-4 w-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    "Add Medical Record"
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isFormOpen,
                onOpenChange: (open)=>{
                    if (!open) {
                        setIsFormOpen(false);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: currentRecord.id ? 'Edit Medical Record' : 'Add New Medical Record'
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: currentRecord.id ? 'Update the details for this medical record.' : 'Add a new medical record for this dog.'
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "recordDate",
                                                    children: "Date & Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "recordDate",
                                                    type: "datetime-local",
                                                    value: formatDateTimeLocal(currentRecord.date),
                                                    onChange: (e)=>handleFormChange('date', new Date(e.target.value)),
                                                    required: true,
                                                    "data-testid": "input-visit-date"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                            lineNumber: 298,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "recordType",
                                                    children: "Record Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: currentRecord.type,
                                                    onValueChange: (value)=>handleFormChange('type', value),
                                                    disabled: !!currentRecord.id,
                                                    "data-testid": "select-record-type",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Select type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                                lineNumber: 317,
                                                                columnNumber: 44
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalRecordType"]).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: t,
                                                                    children: t
                                                                }, t, false, {
                                                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 76
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                            lineNumber: 309,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 297,
                                    columnNumber: 18
                                }, this),
                                renderFormFields(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "notes",
                                            children: "Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                            lineNumber: 326,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            id: "notes",
                                            value: currentRecord.notes || '',
                                            onChange: (e)=>handleFormChange('notes', e.target.value),
                                            rows: 3,
                                            "data-testid": "textarea-medical-notes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, this),
                                saveError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm",
                                    children: saveError
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 336,
                                    columnNumber: 31
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                                lineNumber: 340,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                            lineNumber: 339,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            "data-testid": "btn-submit-medical-record",
                                            children: isSubmitting ? "Saving..." : currentRecord.id ? "Save Changes" : "Add Record"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                            lineNumber: 342,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                                    lineNumber: 338,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/MedicalRecordDialog.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MedicalRecordDialog, "8l9JYsTyDFE719naMtAv/C3ED20=");
_c = MedicalRecordDialog;
var _c;
__turbopack_context__.k.register(_c, "MedicalRecordDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("w-full caption-bottom text-sm", className),
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
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/dog-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateAge",
    ()=>calculateAge,
    "getSizeFromWeight",
    ()=>getSizeFromWeight,
    "isSenior",
    ()=>isSenior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
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
    if (!weight) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogSize"].UNKNOWN;
    if (weight < 8) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogSize"].TOY;
    if (weight < 20) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogSize"].SMALL;
    if (weight < 45) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogSize"].MEDIUM;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogSize"].LARGE;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/dog-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-client] (ecmascript)");
;
;
const missing = (value, fallback = 'N/A')=>value && value.trim() !== '' ? value : fallback;
const formatDogAge = (dateOfBirth)=>{
    if (!dateOfBirth) return missing(null);
    const age = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$dog$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAge"])(dateOfBirth);
    return age ? `${age} years` : missing(null);
};
const formatDogGender = (gender)=>{
    return gender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanizeEnum"])(gender) : missing(null);
};
const formatDogSize = (size)=>{
    return size ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanizeEnum"])(size) : missing(null);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/dogs/_components/MedicalRecordTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MedicalRecordTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
;
;
;
;
// Component for vaccination details
function VaccinationDetails({ vaccination }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: vaccination.vaccineType
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                    lineNumber: 17,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            vaccination.nextDueDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs",
                children: [
                    "Due: ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDisplayDate"])(vaccination.nextDueDate)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = VaccinationDetails;
// Component for medication details
function MedicationDetails({ medication }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: medication.medicationName
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                    lineNumber: 31,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs",
                children: [
                    medication.dosage,
                    " ",
                    medication.frequency
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = MedicationDetails;
// Component for vet visit details
function VetVisitDetails({ vetVisit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: vetVisit.vetName
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                    lineNumber: 43,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs",
                children: vetVisit.visitReason
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = VetVisitDetails;
// Component for note details
function NoteDetails({ notes }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["missing"])(notes)
    }, void 0, false, {
        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
_c3 = NoteDetails;
function MedicalRecordTable({ medicalRecords }) {
    const renderRecordDetails = (record)=>{
        if (record.vaccination) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VaccinationDetails, {
                vaccination: record.vaccination
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 61,
                columnNumber: 14
            }, this);
        }
        if (record.medication) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MedicationDetails, {
                medication: record.medication
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 64,
                columnNumber: 14
            }, this);
        }
        if (record.vetVisit) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VetVisitDetails, {
                vetVisit: record.vetVisit
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 67,
                columnNumber: 14
            }, this);
        }
        if (record.type === 'NOTE') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoteDetails, {
                notes: record.notes
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 70,
                columnNumber: 14
            }, this);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            medicalRecords.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-center py-4",
                children: "No medical records found."
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 78,
                columnNumber: 11
            }, this),
            medicalRecords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                role: "table",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Type"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: medicalRecords.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDisplayDate"])(record.date)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            children: record.type
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                                            lineNumber: 93,
                                            columnNumber: 28
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: renderRecordDetails(record)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, record.id, true, {
                                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordTable.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c4 = MedicalRecordTable;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "VaccinationDetails");
__turbopack_context__.k.register(_c1, "MedicationDetails");
__turbopack_context__.k.register(_c2, "VetVisitDetails");
__turbopack_context__.k.register(_c3, "NoteDetails");
__turbopack_context__.k.register(_c4, "MedicalRecordTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MedicalRecordsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/admin/MedicalRecordsManager.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$MedicalRecordDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/MedicalRecordDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$MedicalRecordTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dogs/_components/MedicalRecordTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Pagination({ currentPage, totalPages, baseUrl }) {
    if (totalPages <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-muted-foreground",
                children: [
                    "Page ",
                    currentPage,
                    " of ",
                    totalPages
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    currentPage > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `${baseUrl}?page=${currentPage - 1}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                "Previous"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    currentPage < totalPages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `${baseUrl}?page=${currentPage + 1}`,
                            children: [
                                "Next",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4 ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Pagination;
function MedicalRecordsManager({ dogId, medicalRecordsData }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12 border-t pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Medical Records"
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$MedicalRecordDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    dogId: dogId
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$MedicalRecordTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                medicalRecords: medicalRecordsData.records
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pagination, {
                currentPage: medicalRecordsData.page,
                totalPages: medicalRecordsData.totalPages,
                baseUrl: pathname
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/MedicalRecordsManager.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(MedicalRecordsManager, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = MedicalRecordsManager;
var _c, _c1;
__turbopack_context__.k.register(_c, "Pagination");
__turbopack_context__.k.register(_c1, "MedicalRecordsManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:f4b529 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e959ce08ff833f9a37b6a6da493f13faac95dfd1":"deleteMedicalDocument"},"lib/actions/medical.actions.ts",""] */ __turbopack_context__.s([
    "deleteMedicalDocument",
    ()=>deleteMedicalDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteMedicalDocument = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60e959ce08ff833f9a37b6a6da493f13faac95dfd1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteMedicalDocument"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVkaWNhbC5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9hY3Rpb25zL21lZGljYWwuYWN0aW9ucy50c1xuXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IE1lZGljYWxSZWNvcmRUeXBlLCBNZWRpY2FsUmVjb3JkLCBBdWRpdEFjdGlvbiB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgYXNzZXJ0Um9sZSwgZ2V0QWN0aW5nVXNlciB9IGZyb20gXCJAL2xpYi9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9uc1wiO1xuaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VySWQgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9hdWRpdC5hY3Rpb25zXCI7XG5cbi8vIEZpbGUgdmFsaWRhdGlvbiBjb25zdGFudHMgKG1pcnJvciBjbGllbnQtc2lkZSB2YWxpZGF0aW9uKVxuY29uc3QgTUFYX0ZJTEVfU0laRSA9IDEwICogMTAyNCAqIDEwMjQ7IC8vIDEwTUJcbmNvbnN0IEFMTE9XRURfRVhURU5TSU9OUyA9IFsnLnBkZicsICcuanBnJywgJy5qcGVnJywgJy5wbmcnLCAnLmdpZicsICcud2VicCcsICcudGlmZicsICcuYm1wJ107XG5jb25zdCBBTExPV0VEX0NPTlRFTlRfVFlQRVMgPSBbXG4gICdhcHBsaWNhdGlvbi9wZGYnLFxuICAnaW1hZ2UvanBlZycsXG4gICdpbWFnZS9qcGcnLFxuICAnaW1hZ2UvcG5nJyxcbiAgJ2ltYWdlL2dpZicsXG4gICdpbWFnZS93ZWJwJyxcbiAgJ2ltYWdlL3RpZmYnLFxuICAnaW1hZ2UvYm1wJyxcbl07XG5cbmNvbnN0IHVwbG9hZERvY1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbmNvbnN0IGRlbGV0ZURvY1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9jdW1lbnRJZDogei5jb2VyY2UubnVtYmVyKCkuaW50KCkucG9zaXRpdmUoeyBtZXNzYWdlOiBcIkludmFsaWQgZG9jdW1lbnQgSURcIiB9KSxcbiAgc3RvcmFnZVBhdGg6IHouc3RyaW5nKCkubWluKDEsIHsgbWVzc2FnZTogXCJTdG9yYWdlIHBhdGggaXMgcmVxdWlyZWRcIiB9KSxcbn0pO1xuXG5jb25zdCBtZWRpY2FsUmVjb3JkQmFzZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxuICBkYXRlOiB6LmNvZXJjZS5kYXRlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRhdGVcIiB9KSxcbiAgdHlwZTogei5uYXRpdmVFbnVtKE1lZGljYWxSZWNvcmRUeXBlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCByZWNvcmQgdHlwZVwiIH0pLFxuICBub3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSk7XG5cbmNvbnN0IHZhY2NpbmF0aW9uU2NoZW1hID0gbWVkaWNhbFJlY29yZEJhc2VTY2hlbWEuZXh0ZW5kKHtcbiAgdHlwZTogei5saXRlcmFsKE1lZGljYWxSZWNvcmRUeXBlLlZBQ0NJTkFUSU9OKSxcbiAgdmFjY2luZVR5cGU6IHouc3RyaW5nKCkubWluKDEsIHsgbWVzc2FnZTogXCJWYWNjaW5lIHR5cGUgaXMgcmVxdWlyZWRcIiB9KSxcbiAgbmV4dER1ZURhdGU6IHouY29lcmNlLmRhdGUoKS5vcHRpb25hbCgpLFxufSk7XG5cbmNvbnN0IG1lZGljYXRpb25TY2hlbWEgPSBtZWRpY2FsUmVjb3JkQmFzZVNjaGVtYS5leHRlbmQoe1xuICB0eXBlOiB6LmxpdGVyYWwoTWVkaWNhbFJlY29yZFR5cGUuTUVESUNBVElPTiksXG4gIG1lZGljYXRpb25OYW1lOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6IFwiTWVkaWNhdGlvbiBuYW1lIGlzIHJlcXVpcmVkXCIgfSksXG4gIGRvc2FnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBmcmVxdWVuY3k6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCB2ZXRWaXNpdFNjaGVtYSA9IG1lZGljYWxSZWNvcmRCYXNlU2NoZW1hLmV4dGVuZCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNZWRpY2FsUmVjb3JkVHlwZS5WRVRfVklTSVQpLFxuICB2ZXROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHZpc2l0UmVhc29uOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6IFwiVmlzaXQgcmVhc29uIGlzIHJlcXVpcmVkXCIgfSksXG59KTtcblxuY29uc3QgbWVkaWNhbFJlY29yZFNjaGVtYSA9IHouZGlzY3JpbWluYXRlZFVuaW9uKFwidHlwZVwiLCBbXG4gIHZhY2NpbmF0aW9uU2NoZW1hLFxuICBtZWRpY2F0aW9uU2NoZW1hLFxuICB2ZXRWaXNpdFNjaGVtYSxcbl0pO1xuXG5jb25zdCBkZWxldGVSZWNvcmRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJlY29yZElkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSh7IG1lc3NhZ2U6IFwiSW52YWxpZCByZWNvcmQgSURcIiB9KSxcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbmNvbnN0IGdldERvY3VtZW50c1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbi8vIFR5cGUgZm9yIG1lZGljYWwgcmVjb3JkcyB3aXRoIHJlbGF0aW9ucyBpbmNsdWRlZFxuZXhwb3J0IHR5cGUgTWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnMgPSBNZWRpY2FsUmVjb3JkICYge1xuICB2YWNjaW5hdGlvbjogeyBpZDogbnVtYmVyOyBtZWRpY2FsUmVjb3JkSWQ6IG51bWJlcjsgdmFjY2luZVR5cGU6IHN0cmluZzsgbmV4dER1ZURhdGU6IERhdGUgfCBudWxsIH0gfCBudWxsO1xuICBtZWRpY2F0aW9uOiB7IGlkOiBudW1iZXI7IG1lZGljYWxSZWNvcmRJZDogbnVtYmVyOyBtZWRpY2F0aW9uTmFtZTogc3RyaW5nOyBkb3NhZ2U6IHN0cmluZyB8IG51bGw7IGZyZXF1ZW5jeTogc3RyaW5nIHwgbnVsbCB9IHwgbnVsbDtcbiAgdmV0VmlzaXQ6IHsgaWQ6IG51bWJlcjsgbWVkaWNhbFJlY29yZElkOiBudW1iZXI7IHZldE5hbWU6IHN0cmluZyB8IG51bGw7IHZpc2l0UmVhc29uOiBzdHJpbmcgfCBudWxsIH0gfCBudWxsO1xufTtcblxuLy8gVHlwZSBmb3IgbWVkaWNhbCBkb2N1bWVudHMgd2l0aCBzaWduZWQgVVJMXG5leHBvcnQgdHlwZSBNZWRpY2FsRG9jdW1lbnRTdW1tYXJ5ID0ge1xuICBpZDogbnVtYmVyO1xuICBkb2dJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG1pbWU6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICBwYXRoOiBzdHJpbmc7XG4gIHVwbG9hZGVkQnlVc2VySWQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBzaWduZWRVcmw6IHN0cmluZyB8IG51bGw7XG59O1xuXG4vLyBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBmb3JtIGRhdGEgZm9yIGEgbWVkaWNhbCByZWNvcmRcbmV4cG9ydCB0eXBlIE1lZGljYWxSZWNvcmRGb3JtRGF0YSA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIGRvZ0lkOiBudW1iZXI7XG4gIGRhdGU6IERhdGU7XG4gIHR5cGU6IE1lZGljYWxSZWNvcmRUeXBlO1xuICBub3Rlczogc3RyaW5nIHwgbnVsbDtcbiAgLy8gTmVzdGVkIHNhdGVsbGl0ZSBkYXRhXG4gIHZhY2NpbmF0aW9uPzoge1xuICAgIHZhY2NpbmVUeXBlOiBzdHJpbmc7XG4gICAgbmV4dER1ZURhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICBsb3ROdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHZldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgbWVkaWNhdGlvbj86IHtcbiAgICBtZWRpY2F0aW9uTmFtZTogc3RyaW5nO1xuICAgIGRvc2FnZT86IHN0cmluZyB8IG51bGw7XG4gICAgZnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbDtcbiAgfSB8IG51bGw7XG4gIHZldFZpc2l0Pzoge1xuICAgIHZldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIHZpc2l0UmVhc29uOiBzdHJpbmc7XG4gIH0gfCBudWxsO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1lZGljYWxSZWNvcmQoZGF0YTogTWVkaWNhbFJlY29yZEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8TWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnM+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBwYXJzZWQgPSBtZWRpY2FsUmVjb3JkU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHByaXNtYS5tZWRpY2FsUmVjb3JkLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRvZ0lkOiBwYXJzZWQuZGF0YS5kb2dJZCxcbiAgICAgICAgZGF0ZTogcGFyc2VkLmRhdGEuZGF0ZSxcbiAgICAgICAgdHlwZTogcGFyc2VkLmRhdGEudHlwZSxcbiAgICAgICAgbm90ZXM6IHBhcnNlZC5kYXRhLm5vdGVzLFxuICAgICAgICB2YWNjaW5hdGlvbjogcGFyc2VkLmRhdGEudHlwZSA9PT0gTWVkaWNhbFJlY29yZFR5cGUuVkFDQ0lOQVRJT04gPyB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICB2YWNjaW5lVHlwZTogcGFyc2VkLmRhdGEudmFjY2luZVR5cGUsXG4gICAgICAgICAgICBuZXh0RHVlRGF0ZTogcGFyc2VkLmRhdGEubmV4dER1ZURhdGUsXG4gICAgICAgICAgfVxuICAgICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgICBtZWRpY2F0aW9uOiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5NRURJQ0FUSU9OID8ge1xuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgbWVkaWNhdGlvbk5hbWU6IHBhcnNlZC5kYXRhLm1lZGljYXRpb25OYW1lLFxuICAgICAgICAgICAgZG9zYWdlOiBwYXJzZWQuZGF0YS5kb3NhZ2UsXG4gICAgICAgICAgICBmcmVxdWVuY3k6IHBhcnNlZC5kYXRhLmZyZXF1ZW5jeSxcbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICAgIHZldFZpc2l0OiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5WRVRfVklTSVQgPyB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICB2ZXROYW1lOiBwYXJzZWQuZGF0YS52ZXROYW1lLFxuICAgICAgICAgICAgdmlzaXRSZWFzb246IHBhcnNlZC5kYXRhLnZpc2l0UmVhc29uLFxuICAgICAgICAgIH1cbiAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHZhY2NpbmF0aW9uOiB0cnVlLFxuICAgICAgICBtZWRpY2F0aW9uOiB0cnVlLFxuICAgICAgICB2ZXRWaXNpdDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2FkbWluL2VkaXQtZG9nLyR7cGFyc2VkLmRhdGEuZG9nSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCByZWNvcmQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogcmVjb3JkLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBjcmVhdGUgbWVkaWNhbCByZWNvcmRcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lZGljYWxSZWNvcmQocmVjb3JkSWQ6IG51bWJlciwgZGF0YTogTWVkaWNhbFJlY29yZEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8TWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnM+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBwYXJzZWQgPSBtZWRpY2FsUmVjb3JkU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHByaXNtYS5tZWRpY2FsUmVjb3JkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVjb3JkSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZG9nSWQ6IHBhcnNlZC5kYXRhLmRvZ0lkLFxuICAgICAgICBkYXRlOiBwYXJzZWQuZGF0YS5kYXRlLFxuICAgICAgICB0eXBlOiBwYXJzZWQuZGF0YS50eXBlLFxuICAgICAgICBub3RlczogcGFyc2VkLmRhdGEubm90ZXMsXG4gICAgICAgIHZhY2NpbmF0aW9uOiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5WQUNDSU5BVElPTiA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICB2YWNjaW5lVHlwZTogcGFyc2VkLmRhdGEudmFjY2luZVR5cGUsXG4gICAgICAgICAgICAgIG5leHREdWVEYXRlOiBwYXJzZWQuZGF0YS5uZXh0RHVlRGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgdmFjY2luZVR5cGU6IHBhcnNlZC5kYXRhLnZhY2NpbmVUeXBlLFxuICAgICAgICAgICAgICBuZXh0RHVlRGF0ZTogcGFyc2VkLmRhdGEubmV4dER1ZURhdGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDogeyBkZWxldGU6IHRydWUgfSxcbiAgICAgICAgbWVkaWNhdGlvbjogcGFyc2VkLmRhdGEudHlwZSA9PT0gTWVkaWNhbFJlY29yZFR5cGUuTUVESUNBVElPTiA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICBtZWRpY2F0aW9uTmFtZTogcGFyc2VkLmRhdGEubWVkaWNhdGlvbk5hbWUsXG4gICAgICAgICAgICAgIGRvc2FnZTogcGFyc2VkLmRhdGEuZG9zYWdlLFxuICAgICAgICAgICAgICBmcmVxdWVuY3k6IHBhcnNlZC5kYXRhLmZyZXF1ZW5jeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgbWVkaWNhdGlvbk5hbWU6IHBhcnNlZC5kYXRhLm1lZGljYXRpb25OYW1lLFxuICAgICAgICAgICAgICBkb3NhZ2U6IHBhcnNlZC5kYXRhLmRvc2FnZSxcbiAgICAgICAgICAgICAgZnJlcXVlbmN5OiBwYXJzZWQuZGF0YS5mcmVxdWVuY3ksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDogeyBkZWxldGU6IHRydWUgfSxcbiAgICAgICAgdmV0VmlzaXQ6IHBhcnNlZC5kYXRhLnR5cGUgPT09IE1lZGljYWxSZWNvcmRUeXBlLlZFVF9WSVNJVCA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICB2ZXROYW1lOiBwYXJzZWQuZGF0YS52ZXROYW1lLFxuICAgICAgICAgICAgICB2aXNpdFJlYXNvbjogcGFyc2VkLmRhdGEudmlzaXRSZWFzb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgIHZldE5hbWU6IHBhcnNlZC5kYXRhLnZldE5hbWUsXG4gICAgICAgICAgICAgIHZpc2l0UmVhc29uOiBwYXJzZWQuZGF0YS52aXNpdFJlYXNvbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB7IGRlbGV0ZTogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdmFjY2luYXRpb246IHRydWUsXG4gICAgICAgIG1lZGljYXRpb246IHRydWUsXG4gICAgICAgIHZldFZpc2l0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZWRpdC1kb2cvJHtwYXJzZWQuZGF0YS5kb2dJZH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJNZWRpY2FsIHJlY29yZCB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiByZWNvcmQsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIHVwZGF0ZSBtZWRpY2FsIHJlY29yZFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVkaWNhbFJlY29yZChyZWNvcmRJZDogbnVtYmVyLCBkb2dJZDogbnVtYmVyKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IGRlbGV0ZVJlY29yZFNjaGVtYS5zYWZlUGFyc2UoeyByZWNvcmRJZCwgZG9nSWQgfSk7XG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiBwYXJzZWQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEubWVkaWNhbFJlY29yZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHBhcnNlZC5kYXRhLnJlY29yZElkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9lZGl0LWRvZy8ke3BhcnNlZC5kYXRhLmRvZ0lkfWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIk1lZGljYWwgcmVjb3JkIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGRlbGV0ZSBtZWRpY2FsIHJlY29yZFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWNhbFJlY29yZHMoZG9nSWQ6IG51bWJlciwgcGFnZSA9IDEsIHBhZ2VTaXplID0gMTApIHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gei5vYmplY3Qoe1xuICAgIGRvZ0lkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLFxuICAgIHBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigxKSxcbiAgICBwYWdlU2l6ZTogei5jb2VyY2UubnVtYmVyKCkuaW50KCkubWluKDEpLm1heCgxMDApXG4gIH0pLnNhZmVQYXJzZSh7IGRvZ0lkLCBwYWdlLCBwYWdlU2l6ZSB9KTtcblxuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzXCIpO1xuICB9XG5cbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcblxuICBjb25zdCBbcmVjb3JkcywgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLm1lZGljYWxSZWNvcmQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgZG9nSWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdmFjY2luYXRpb246IHRydWUsXG4gICAgICAgIG1lZGljYXRpb246IHRydWUsXG4gICAgICAgIHZldFZpc2l0OiB0cnVlXG4gICAgICB9LFxuICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfSxcbiAgICAgIHNraXAsXG4gICAgICB0YWtlOiBwYWdlU2l6ZSxcbiAgICB9KSxcbiAgICBwcmlzbWEubWVkaWNhbFJlY29yZC5jb3VudCh7XG4gICAgICB3aGVyZTogeyBkb2dJZCB9LFxuICAgIH0pLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHJlY29yZHMsXG4gICAgdG90YWxDb3VudCxcbiAgICBwYWdlLFxuICAgIHBhZ2VTaXplLFxuICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gcGFnZVNpemUpLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkTWVkaWNhbERvY3VtZW50KFxuICBfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQgfCB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICAvLyBQYXJzZSBkb2dJZCBmcm9tIGZvcm1EYXRhXG4gICAgY29uc3QgcGFyc2VkID0gdXBsb2FkRG9jU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBkb2dJZDogZm9ybURhdGEuZ2V0KFwiZG9nSWRcIilcbiAgICB9KTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZG9nSWQgfSA9IHBhcnNlZC5kYXRhO1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJmaWxlXCIpIGFzIEZpbGU7XG5cbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIk5vIGZpbGUgcHJvdmlkZWRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBleHRlbnNpb25cbiAgICBjb25zdCBleHRlbnNpb24gPSBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoZmlsZS5uYW1lLmxhc3RJbmRleE9mKCcuJykpO1xuICAgIGlmICghQUxMT1dFRF9FWFRFTlNJT05TLmluY2x1ZGVzKGV4dGVuc2lvbikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIG5vdCBhbGxvd2VkLiBBbGxvd2VkIHR5cGVzOiAke0FMTE9XRURfRVhURU5TSU9OUy5qb2luKCcsICcpfWAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGNvbnRlbnQgdHlwZVxuICAgIGlmICghQUxMT1dFRF9DT05URU5UX1RZUEVTLmluY2x1ZGVzKGZpbGUudHlwZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIFwiJHtmaWxlLnR5cGV9XCIgbm90IGFsbG93ZWQuIEFsbG93ZWQgdHlwZXM6IFBERiBhbmQgaW1hZ2VzIG9ubHkuYCxcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBzaXplXG4gICAgaWYgKGZpbGUuc2l6ZSA+IE1BWF9GSUxFX1NJWkUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0b28gbGFyZ2UuIE1heGltdW0gc2l6ZTogJHtNQVhfRklMRV9TSVpFIC8gKDEwMjQgKiAxMDI0KX1NQmAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgZm9yIGF1ZGl0IGxvZ2dpbmdcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QWN0aW5nVXNlcigpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiQXV0aGVudGljYXRpb24gcmVxdWlyZWRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBzdG9yYWdlIHBhdGhcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHJhbmRvbUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcbiAgICBjb25zdCBzdG9yYWdlUGF0aCA9IGBtZWRpY2FsLWRvY3VtZW50cy8ke2RvZ0lkfS8ke3RpbWVzdGFtcH0tJHtyYW5kb21JZH0tJHtmaWxlLm5hbWV9YDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDb252ZXJ0IEZpbGUgdG8gQXJyYXlCdWZmZXIgZm9yIHVwbG9hZFxuICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgICBjb25zdCBmaWxlQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXG4gICAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtZG9jdW1lbnRzXCIpXG4gICAgICAgIC51cGxvYWQoc3RvcmFnZVBhdGgsIGZpbGVCdWZmZXIsIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIHVwbG9hZCBmaWxlOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFN0b3JlIGRvY3VtZW50IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkb2dJZCxcbiAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgcGF0aDogc3RvcmFnZVBhdGgsXG4gICAgICAgICAgbWltZTogZmlsZS50eXBlLFxuICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICB1cGxvYWRlZEJ5VXNlcklkOiB1c2VyLmlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIExvZyBhdWRpdCBldmVudCAoc2tpcCBpbiB0ZXN0cyB3aGVyZSBhdXRoIG1pZ2h0IG5vdCBiZSBzZXQgdXApXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldEN1cnJlbnRVc2VySWQoKTtcbiAgICAgICAgICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYWN0aW9uOiBBdWRpdEFjdGlvbi5NRURJQ0FMX0RPQ1VNRU5UX1VQTE9BRCxcbiAgICAgICAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICAgICAgICBlbnRpdHlUeXBlOiBcIm1lZGljYWxEb2N1bWVudFwiLFxuICAgICAgICAgICAgICBlbnRpdHlJZDogZG9jdW1lbnQuaWQsXG4gICAgICAgICAgICAgIG5vdGU6IGBVcGxvYWRlZCBtZWRpY2FsIGRvY3VtZW50OiAke2ZpbGUubmFtZX0gZm9yIGRvZyAke2RvZ0lkfWAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGF1ZGl0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEb24ndCBmYWlsIHRoZSB1cGxvYWQgaWYgYXVkaXQgbG9nZ2luZyBmYWlsc1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2cgbWVkaWNhbCBkb2N1bWVudCB1cGxvYWQgYXVkaXQgZXZlbnQ6XCIsIGF1ZGl0RXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZG9nLyR7ZG9nSWR9P3RhYj1tZWRpY2FsYCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCBkb2N1bWVudCB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHRoZSB1cGxvYWRlZCBmaWxlIGlmIGRhdGFiYXNlIGluc2VydCBmYWlsc1xuICAgICAgYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtZG9jdW1lbnRzXCIpXG4gICAgICAgIC5yZW1vdmUoW3N0b3JhZ2VQYXRoXSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyBCZXN0LWVmZm9ydCBjbGVhbnVwXG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWNhbERvY3VtZW50cyhkb2dJZDogbnVtYmVyKTogUHJvbWlzZTxNZWRpY2FsRG9jdW1lbnRTdW1tYXJ5W10+IHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gZ2V0RG9jdW1lbnRzU2NoZW1hLnNhZmVQYXJzZSh7IGRvZ0lkIH0pO1xuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkb2cgSURcIik7XG4gIH1cblxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBkb2dJZCB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIGNyZWF0ZWRBdDogXCJkZXNjXCIsIC8vIE5vdGU6IHRlc3QgZXhwZWN0cyAndXBsb2FkZWRBdCcgYnV0IGZpZWxkIGlzICdjcmVhdGVkQXQnXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gR2VuZXJhdGUgc2lnbmVkIFVSTHMgZm9yIGVhY2ggZG9jdW1lbnRcbiAgY29uc3QgZG9jdW1lbnRzV2l0aFNpZ25lZFVybHM6IE1lZGljYWxEb2N1bWVudFN1bW1hcnlbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGRvY3VtZW50cy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhOiBzaWduZWRVcmxEYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXG4gICAgICAgIC5mcm9tKFwibWVkaWNhbC1kb2N1bWVudHNcIilcbiAgICAgICAgLmNyZWF0ZVNpZ25lZFVybChkb2MucGF0aCwgOTAwKTsgLy8gMTUgbWludXRlcyBleHBpcnlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZG9jLFxuICAgICAgICBzaWduZWRVcmw6IHNpZ25lZFVybERhdGE/LnNpZ25lZFVybCB8fCBudWxsLFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBkb2N1bWVudHNXaXRoU2lnbmVkVXJscztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lZGljYWxEb2N1bWVudChkb2N1bWVudElkOiBudW1iZXIsIHN0b3JhZ2VQYXRoOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gZGVsZXRlRG9jU2NoZW1hLnNhZmVQYXJzZSh7IGRvY3VtZW50SWQsIHN0b3JhZ2VQYXRoIH0pO1xuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogcGFyc2VkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IGRvY3VtZW50IGluZm8gYmVmb3JlIGRlbGV0aW9uIGZvciBhdWRpdCBsb2dnaW5nXG4gICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGRvY3VtZW50SWQgfSxcbiAgICAgIHNlbGVjdDogeyBkb2dJZDogdHJ1ZSwgbmFtZTogdHJ1ZSB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJEb2N1bWVudCBub3QgZm91bmRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcbiAgICBjb25zdCB7IGVycm9yOiBkZWxldGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgLmZyb20oXCJtZWRpY2FsLWRvY3VtZW50c1wiKVxuICAgICAgLnJlbW92ZShbc3RvcmFnZVBhdGhdKTtcblxuICAgIGlmIChkZWxldGVFcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gZGVsZXRlIGRvY3VtZW50IGZyb20gc3RvcmFnZTogJHtkZWxldGVFcnJvci5tZXNzYWdlfWAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5tZWRpY2FsRG9jdW1lbnQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBkb2N1bWVudElkIH0sXG4gICAgfSk7XG5cbiAgICAvLyBMb2cgYXVkaXQgZXZlbnQgKHNraXAgaW4gdGVzdHMgd2hlcmUgYXV0aCBtaWdodCBub3QgYmUgc2V0IHVwKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRDdXJyZW50VXNlcklkKCk7XG4gICAgICAgIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogQXVkaXRBY3Rpb24uTUVESUNBTF9ET0NVTUVOVF9ERUxFVEUsXG4gICAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICAgIGVudGl0eVR5cGU6IFwibWVkaWNhbERvY3VtZW50XCIsXG4gICAgICAgICAgZW50aXR5SWQ6IGRvY3VtZW50SWQsXG4gICAgICAgICAgbm90ZTogYERlbGV0ZWQgbWVkaWNhbCBkb2N1bWVudDogJHtkb2N1bWVudC5uYW1lfSBmb3IgZG9nICR7ZG9jdW1lbnQuZG9nSWR9YCxcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGF1ZGl0RXJyb3IpIHtcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCB0aGUgZGVsZXRpb24gaWYgYXVkaXQgbG9nZ2luZyBmYWlsc1xuICAgICAgICBjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gbG9nIG1lZGljYWwgZG9jdW1lbnQgZGVsZXRpb24gYXVkaXQgZXZlbnQ6XCIsIGF1ZGl0RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZG9nLyR7ZG9jdW1lbnQuZG9nSWR9P3RhYj1tZWRpY2FsYCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCBkb2N1bWVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBkZWxldGUgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2U0FxaUJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:760347 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"602b36ee92de0293b9d04aff8a21372f53586771ae":"uploadMedicalDocument"},"lib/actions/medical.actions.ts",""] */ __turbopack_context__.s([
    "uploadMedicalDocument",
    ()=>uploadMedicalDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var uploadMedicalDocument = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("602b36ee92de0293b9d04aff8a21372f53586771ae", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "uploadMedicalDocument"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVkaWNhbC5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9hY3Rpb25zL21lZGljYWwuYWN0aW9ucy50c1xuXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IE1lZGljYWxSZWNvcmRUeXBlLCBNZWRpY2FsUmVjb3JkLCBBdWRpdEFjdGlvbiB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgYXNzZXJ0Um9sZSwgZ2V0QWN0aW5nVXNlciB9IGZyb20gXCJAL2xpYi9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9uc1wiO1xuaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VySWQgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9hdWRpdC5hY3Rpb25zXCI7XG5cbi8vIEZpbGUgdmFsaWRhdGlvbiBjb25zdGFudHMgKG1pcnJvciBjbGllbnQtc2lkZSB2YWxpZGF0aW9uKVxuY29uc3QgTUFYX0ZJTEVfU0laRSA9IDEwICogMTAyNCAqIDEwMjQ7IC8vIDEwTUJcbmNvbnN0IEFMTE9XRURfRVhURU5TSU9OUyA9IFsnLnBkZicsICcuanBnJywgJy5qcGVnJywgJy5wbmcnLCAnLmdpZicsICcud2VicCcsICcudGlmZicsICcuYm1wJ107XG5jb25zdCBBTExPV0VEX0NPTlRFTlRfVFlQRVMgPSBbXG4gICdhcHBsaWNhdGlvbi9wZGYnLFxuICAnaW1hZ2UvanBlZycsXG4gICdpbWFnZS9qcGcnLFxuICAnaW1hZ2UvcG5nJyxcbiAgJ2ltYWdlL2dpZicsXG4gICdpbWFnZS93ZWJwJyxcbiAgJ2ltYWdlL3RpZmYnLFxuICAnaW1hZ2UvYm1wJyxcbl07XG5cbmNvbnN0IHVwbG9hZERvY1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbmNvbnN0IGRlbGV0ZURvY1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9jdW1lbnRJZDogei5jb2VyY2UubnVtYmVyKCkuaW50KCkucG9zaXRpdmUoeyBtZXNzYWdlOiBcIkludmFsaWQgZG9jdW1lbnQgSURcIiB9KSxcbiAgc3RvcmFnZVBhdGg6IHouc3RyaW5nKCkubWluKDEsIHsgbWVzc2FnZTogXCJTdG9yYWdlIHBhdGggaXMgcmVxdWlyZWRcIiB9KSxcbn0pO1xuXG5jb25zdCBtZWRpY2FsUmVjb3JkQmFzZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxuICBkYXRlOiB6LmNvZXJjZS5kYXRlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRhdGVcIiB9KSxcbiAgdHlwZTogei5uYXRpdmVFbnVtKE1lZGljYWxSZWNvcmRUeXBlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCByZWNvcmQgdHlwZVwiIH0pLFxuICBub3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSk7XG5cbmNvbnN0IHZhY2NpbmF0aW9uU2NoZW1hID0gbWVkaWNhbFJlY29yZEJhc2VTY2hlbWEuZXh0ZW5kKHtcbiAgdHlwZTogei5saXRlcmFsKE1lZGljYWxSZWNvcmRUeXBlLlZBQ0NJTkFUSU9OKSxcbiAgdmFjY2luZVR5cGU6IHouc3RyaW5nKCkubWluKDEsIHsgbWVzc2FnZTogXCJWYWNjaW5lIHR5cGUgaXMgcmVxdWlyZWRcIiB9KSxcbiAgbmV4dER1ZURhdGU6IHouY29lcmNlLmRhdGUoKS5vcHRpb25hbCgpLFxufSk7XG5cbmNvbnN0IG1lZGljYXRpb25TY2hlbWEgPSBtZWRpY2FsUmVjb3JkQmFzZVNjaGVtYS5leHRlbmQoe1xuICB0eXBlOiB6LmxpdGVyYWwoTWVkaWNhbFJlY29yZFR5cGUuTUVESUNBVElPTiksXG4gIG1lZGljYXRpb25OYW1lOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6IFwiTWVkaWNhdGlvbiBuYW1lIGlzIHJlcXVpcmVkXCIgfSksXG4gIGRvc2FnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBmcmVxdWVuY3k6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCB2ZXRWaXNpdFNjaGVtYSA9IG1lZGljYWxSZWNvcmRCYXNlU2NoZW1hLmV4dGVuZCh7XG4gIHR5cGU6IHoubGl0ZXJhbChNZWRpY2FsUmVjb3JkVHlwZS5WRVRfVklTSVQpLFxuICB2ZXROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHZpc2l0UmVhc29uOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6IFwiVmlzaXQgcmVhc29uIGlzIHJlcXVpcmVkXCIgfSksXG59KTtcblxuY29uc3QgbWVkaWNhbFJlY29yZFNjaGVtYSA9IHouZGlzY3JpbWluYXRlZFVuaW9uKFwidHlwZVwiLCBbXG4gIHZhY2NpbmF0aW9uU2NoZW1hLFxuICBtZWRpY2F0aW9uU2NoZW1hLFxuICB2ZXRWaXNpdFNjaGVtYSxcbl0pO1xuXG5jb25zdCBkZWxldGVSZWNvcmRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJlY29yZElkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSh7IG1lc3NhZ2U6IFwiSW52YWxpZCByZWNvcmQgSURcIiB9KSxcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbmNvbnN0IGdldERvY3VtZW50c1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxufSk7XG5cbi8vIFR5cGUgZm9yIG1lZGljYWwgcmVjb3JkcyB3aXRoIHJlbGF0aW9ucyBpbmNsdWRlZFxuZXhwb3J0IHR5cGUgTWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnMgPSBNZWRpY2FsUmVjb3JkICYge1xuICB2YWNjaW5hdGlvbjogeyBpZDogbnVtYmVyOyBtZWRpY2FsUmVjb3JkSWQ6IG51bWJlcjsgdmFjY2luZVR5cGU6IHN0cmluZzsgbmV4dER1ZURhdGU6IERhdGUgfCBudWxsIH0gfCBudWxsO1xuICBtZWRpY2F0aW9uOiB7IGlkOiBudW1iZXI7IG1lZGljYWxSZWNvcmRJZDogbnVtYmVyOyBtZWRpY2F0aW9uTmFtZTogc3RyaW5nOyBkb3NhZ2U6IHN0cmluZyB8IG51bGw7IGZyZXF1ZW5jeTogc3RyaW5nIHwgbnVsbCB9IHwgbnVsbDtcbiAgdmV0VmlzaXQ6IHsgaWQ6IG51bWJlcjsgbWVkaWNhbFJlY29yZElkOiBudW1iZXI7IHZldE5hbWU6IHN0cmluZyB8IG51bGw7IHZpc2l0UmVhc29uOiBzdHJpbmcgfCBudWxsIH0gfCBudWxsO1xufTtcblxuLy8gVHlwZSBmb3IgbWVkaWNhbCBkb2N1bWVudHMgd2l0aCBzaWduZWQgVVJMXG5leHBvcnQgdHlwZSBNZWRpY2FsRG9jdW1lbnRTdW1tYXJ5ID0ge1xuICBpZDogbnVtYmVyO1xuICBkb2dJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG1pbWU6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICBwYXRoOiBzdHJpbmc7XG4gIHVwbG9hZGVkQnlVc2VySWQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBzaWduZWRVcmw6IHN0cmluZyB8IG51bGw7XG59O1xuXG4vLyBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBmb3JtIGRhdGEgZm9yIGEgbWVkaWNhbCByZWNvcmRcbmV4cG9ydCB0eXBlIE1lZGljYWxSZWNvcmRGb3JtRGF0YSA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIGRvZ0lkOiBudW1iZXI7XG4gIGRhdGU6IERhdGU7XG4gIHR5cGU6IE1lZGljYWxSZWNvcmRUeXBlO1xuICBub3Rlczogc3RyaW5nIHwgbnVsbDtcbiAgLy8gTmVzdGVkIHNhdGVsbGl0ZSBkYXRhXG4gIHZhY2NpbmF0aW9uPzoge1xuICAgIHZhY2NpbmVUeXBlOiBzdHJpbmc7XG4gICAgbmV4dER1ZURhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICBsb3ROdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHZldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICB9IHwgbnVsbDtcbiAgbWVkaWNhdGlvbj86IHtcbiAgICBtZWRpY2F0aW9uTmFtZTogc3RyaW5nO1xuICAgIGRvc2FnZT86IHN0cmluZyB8IG51bGw7XG4gICAgZnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbDtcbiAgfSB8IG51bGw7XG4gIHZldFZpc2l0Pzoge1xuICAgIHZldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIHZpc2l0UmVhc29uOiBzdHJpbmc7XG4gIH0gfCBudWxsO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1lZGljYWxSZWNvcmQoZGF0YTogTWVkaWNhbFJlY29yZEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8TWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnM+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBwYXJzZWQgPSBtZWRpY2FsUmVjb3JkU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHByaXNtYS5tZWRpY2FsUmVjb3JkLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRvZ0lkOiBwYXJzZWQuZGF0YS5kb2dJZCxcbiAgICAgICAgZGF0ZTogcGFyc2VkLmRhdGEuZGF0ZSxcbiAgICAgICAgdHlwZTogcGFyc2VkLmRhdGEudHlwZSxcbiAgICAgICAgbm90ZXM6IHBhcnNlZC5kYXRhLm5vdGVzLFxuICAgICAgICB2YWNjaW5hdGlvbjogcGFyc2VkLmRhdGEudHlwZSA9PT0gTWVkaWNhbFJlY29yZFR5cGUuVkFDQ0lOQVRJT04gPyB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICB2YWNjaW5lVHlwZTogcGFyc2VkLmRhdGEudmFjY2luZVR5cGUsXG4gICAgICAgICAgICBuZXh0RHVlRGF0ZTogcGFyc2VkLmRhdGEubmV4dER1ZURhdGUsXG4gICAgICAgICAgfVxuICAgICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgICBtZWRpY2F0aW9uOiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5NRURJQ0FUSU9OID8ge1xuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgbWVkaWNhdGlvbk5hbWU6IHBhcnNlZC5kYXRhLm1lZGljYXRpb25OYW1lLFxuICAgICAgICAgICAgZG9zYWdlOiBwYXJzZWQuZGF0YS5kb3NhZ2UsXG4gICAgICAgICAgICBmcmVxdWVuY3k6IHBhcnNlZC5kYXRhLmZyZXF1ZW5jeSxcbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICAgIHZldFZpc2l0OiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5WRVRfVklTSVQgPyB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICB2ZXROYW1lOiBwYXJzZWQuZGF0YS52ZXROYW1lLFxuICAgICAgICAgICAgdmlzaXRSZWFzb246IHBhcnNlZC5kYXRhLnZpc2l0UmVhc29uLFxuICAgICAgICAgIH1cbiAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHZhY2NpbmF0aW9uOiB0cnVlLFxuICAgICAgICBtZWRpY2F0aW9uOiB0cnVlLFxuICAgICAgICB2ZXRWaXNpdDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2FkbWluL2VkaXQtZG9nLyR7cGFyc2VkLmRhdGEuZG9nSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCByZWNvcmQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogcmVjb3JkLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBjcmVhdGUgbWVkaWNhbCByZWNvcmRcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lZGljYWxSZWNvcmQocmVjb3JkSWQ6IG51bWJlciwgZGF0YTogTWVkaWNhbFJlY29yZEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8TWVkaWNhbFJlY29yZFdpdGhSZWxhdGlvbnM+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICBjb25zdCBwYXJzZWQgPSBtZWRpY2FsUmVjb3JkU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHByaXNtYS5tZWRpY2FsUmVjb3JkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVjb3JkSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZG9nSWQ6IHBhcnNlZC5kYXRhLmRvZ0lkLFxuICAgICAgICBkYXRlOiBwYXJzZWQuZGF0YS5kYXRlLFxuICAgICAgICB0eXBlOiBwYXJzZWQuZGF0YS50eXBlLFxuICAgICAgICBub3RlczogcGFyc2VkLmRhdGEubm90ZXMsXG4gICAgICAgIHZhY2NpbmF0aW9uOiBwYXJzZWQuZGF0YS50eXBlID09PSBNZWRpY2FsUmVjb3JkVHlwZS5WQUNDSU5BVElPTiA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICB2YWNjaW5lVHlwZTogcGFyc2VkLmRhdGEudmFjY2luZVR5cGUsXG4gICAgICAgICAgICAgIG5leHREdWVEYXRlOiBwYXJzZWQuZGF0YS5uZXh0RHVlRGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgdmFjY2luZVR5cGU6IHBhcnNlZC5kYXRhLnZhY2NpbmVUeXBlLFxuICAgICAgICAgICAgICBuZXh0RHVlRGF0ZTogcGFyc2VkLmRhdGEubmV4dER1ZURhdGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDogeyBkZWxldGU6IHRydWUgfSxcbiAgICAgICAgbWVkaWNhdGlvbjogcGFyc2VkLmRhdGEudHlwZSA9PT0gTWVkaWNhbFJlY29yZFR5cGUuTUVESUNBVElPTiA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICBtZWRpY2F0aW9uTmFtZTogcGFyc2VkLmRhdGEubWVkaWNhdGlvbk5hbWUsXG4gICAgICAgICAgICAgIGRvc2FnZTogcGFyc2VkLmRhdGEuZG9zYWdlLFxuICAgICAgICAgICAgICBmcmVxdWVuY3k6IHBhcnNlZC5kYXRhLmZyZXF1ZW5jeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgbWVkaWNhdGlvbk5hbWU6IHBhcnNlZC5kYXRhLm1lZGljYXRpb25OYW1lLFxuICAgICAgICAgICAgICBkb3NhZ2U6IHBhcnNlZC5kYXRhLmRvc2FnZSxcbiAgICAgICAgICAgICAgZnJlcXVlbmN5OiBwYXJzZWQuZGF0YS5mcmVxdWVuY3ksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDogeyBkZWxldGU6IHRydWUgfSxcbiAgICAgICAgdmV0VmlzaXQ6IHBhcnNlZC5kYXRhLnR5cGUgPT09IE1lZGljYWxSZWNvcmRUeXBlLlZFVF9WSVNJVCA/IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICB2ZXROYW1lOiBwYXJzZWQuZGF0YS52ZXROYW1lLFxuICAgICAgICAgICAgICB2aXNpdFJlYXNvbjogcGFyc2VkLmRhdGEudmlzaXRSZWFzb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgIHZldE5hbWU6IHBhcnNlZC5kYXRhLnZldE5hbWUsXG4gICAgICAgICAgICAgIHZpc2l0UmVhc29uOiBwYXJzZWQuZGF0YS52aXNpdFJlYXNvbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gOiB7IGRlbGV0ZTogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdmFjY2luYXRpb246IHRydWUsXG4gICAgICAgIG1lZGljYXRpb246IHRydWUsXG4gICAgICAgIHZldFZpc2l0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZWRpdC1kb2cvJHtwYXJzZWQuZGF0YS5kb2dJZH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJNZWRpY2FsIHJlY29yZCB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiByZWNvcmQsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIHVwZGF0ZSBtZWRpY2FsIHJlY29yZFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVkaWNhbFJlY29yZChyZWNvcmRJZDogbnVtYmVyLCBkb2dJZDogbnVtYmVyKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IGRlbGV0ZVJlY29yZFNjaGVtYS5zYWZlUGFyc2UoeyByZWNvcmRJZCwgZG9nSWQgfSk7XG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiBwYXJzZWQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEubWVkaWNhbFJlY29yZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHBhcnNlZC5kYXRhLnJlY29yZElkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9lZGl0LWRvZy8ke3BhcnNlZC5kYXRhLmRvZ0lkfWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIk1lZGljYWwgcmVjb3JkIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGRlbGV0ZSBtZWRpY2FsIHJlY29yZFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWNhbFJlY29yZHMoZG9nSWQ6IG51bWJlciwgcGFnZSA9IDEsIHBhZ2VTaXplID0gMTApIHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gei5vYmplY3Qoe1xuICAgIGRvZ0lkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLFxuICAgIHBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigxKSxcbiAgICBwYWdlU2l6ZTogei5jb2VyY2UubnVtYmVyKCkuaW50KCkubWluKDEpLm1heCgxMDApXG4gIH0pLnNhZmVQYXJzZSh7IGRvZ0lkLCBwYWdlLCBwYWdlU2l6ZSB9KTtcblxuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzXCIpO1xuICB9XG5cbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcblxuICBjb25zdCBbcmVjb3JkcywgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLm1lZGljYWxSZWNvcmQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgZG9nSWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdmFjY2luYXRpb246IHRydWUsXG4gICAgICAgIG1lZGljYXRpb246IHRydWUsXG4gICAgICAgIHZldFZpc2l0OiB0cnVlXG4gICAgICB9LFxuICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfSxcbiAgICAgIHNraXAsXG4gICAgICB0YWtlOiBwYWdlU2l6ZSxcbiAgICB9KSxcbiAgICBwcmlzbWEubWVkaWNhbFJlY29yZC5jb3VudCh7XG4gICAgICB3aGVyZTogeyBkb2dJZCB9LFxuICAgIH0pLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHJlY29yZHMsXG4gICAgdG90YWxDb3VudCxcbiAgICBwYWdlLFxuICAgIHBhZ2VTaXplLFxuICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gcGFnZVNpemUpLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkTWVkaWNhbERvY3VtZW50KFxuICBfcHJldlN0YXRlOiBBY3Rpb25SZXN1bHQgfCB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YSxcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgICAvLyBQYXJzZSBkb2dJZCBmcm9tIGZvcm1EYXRhXG4gICAgY29uc3QgcGFyc2VkID0gdXBsb2FkRG9jU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICBkb2dJZDogZm9ybURhdGEuZ2V0KFwiZG9nSWRcIilcbiAgICB9KTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZG9nSWQgfSA9IHBhcnNlZC5kYXRhO1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJmaWxlXCIpIGFzIEZpbGU7XG5cbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIk5vIGZpbGUgcHJvdmlkZWRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBleHRlbnNpb25cbiAgICBjb25zdCBleHRlbnNpb24gPSBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoZmlsZS5uYW1lLmxhc3RJbmRleE9mKCcuJykpO1xuICAgIGlmICghQUxMT1dFRF9FWFRFTlNJT05TLmluY2x1ZGVzKGV4dGVuc2lvbikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIG5vdCBhbGxvd2VkLiBBbGxvd2VkIHR5cGVzOiAke0FMTE9XRURfRVhURU5TSU9OUy5qb2luKCcsICcpfWAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGNvbnRlbnQgdHlwZVxuICAgIGlmICghQUxMT1dFRF9DT05URU5UX1RZUEVTLmluY2x1ZGVzKGZpbGUudHlwZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIFwiJHtmaWxlLnR5cGV9XCIgbm90IGFsbG93ZWQuIEFsbG93ZWQgdHlwZXM6IFBERiBhbmQgaW1hZ2VzIG9ubHkuYCxcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBzaXplXG4gICAgaWYgKGZpbGUuc2l6ZSA+IE1BWF9GSUxFX1NJWkUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBgRmlsZSB0b28gbGFyZ2UuIE1heGltdW0gc2l6ZTogJHtNQVhfRklMRV9TSVpFIC8gKDEwMjQgKiAxMDI0KX1NQmAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgZm9yIGF1ZGl0IGxvZ2dpbmdcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QWN0aW5nVXNlcigpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiQXV0aGVudGljYXRpb24gcmVxdWlyZWRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcblxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBzdG9yYWdlIHBhdGhcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHJhbmRvbUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcbiAgICBjb25zdCBzdG9yYWdlUGF0aCA9IGBtZWRpY2FsLWRvY3VtZW50cy8ke2RvZ0lkfS8ke3RpbWVzdGFtcH0tJHtyYW5kb21JZH0tJHtmaWxlLm5hbWV9YDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDb252ZXJ0IEZpbGUgdG8gQXJyYXlCdWZmZXIgZm9yIHVwbG9hZFxuICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgICBjb25zdCBmaWxlQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXG4gICAgICAvLyBVcGxvYWQgZmlsZSB0byBTdXBhYmFzZSBTdG9yYWdlXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtZG9jdW1lbnRzXCIpXG4gICAgICAgIC51cGxvYWQoc3RvcmFnZVBhdGgsIGZpbGVCdWZmZXIsIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHVwc2VydDogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodXBsb2FkRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIHVwbG9hZCBmaWxlOiAke3VwbG9hZEVycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFN0b3JlIGRvY3VtZW50IHJlY29yZCBpbiBkYXRhYmFzZVxuICAgICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkb2dJZCxcbiAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgcGF0aDogc3RvcmFnZVBhdGgsXG4gICAgICAgICAgbWltZTogZmlsZS50eXBlLFxuICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICB1cGxvYWRlZEJ5VXNlcklkOiB1c2VyLmlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIExvZyBhdWRpdCBldmVudCAoc2tpcCBpbiB0ZXN0cyB3aGVyZSBhdXRoIG1pZ2h0IG5vdCBiZSBzZXQgdXApXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldEN1cnJlbnRVc2VySWQoKTtcbiAgICAgICAgICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYWN0aW9uOiBBdWRpdEFjdGlvbi5NRURJQ0FMX0RPQ1VNRU5UX1VQTE9BRCxcbiAgICAgICAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICAgICAgICBlbnRpdHlUeXBlOiBcIm1lZGljYWxEb2N1bWVudFwiLFxuICAgICAgICAgICAgICBlbnRpdHlJZDogZG9jdW1lbnQuaWQsXG4gICAgICAgICAgICAgIG5vdGU6IGBVcGxvYWRlZCBtZWRpY2FsIGRvY3VtZW50OiAke2ZpbGUubmFtZX0gZm9yIGRvZyAke2RvZ0lkfWAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGF1ZGl0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEb24ndCBmYWlsIHRoZSB1cGxvYWQgaWYgYXVkaXQgbG9nZ2luZyBmYWlsc1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2cgbWVkaWNhbCBkb2N1bWVudCB1cGxvYWQgYXVkaXQgZXZlbnQ6XCIsIGF1ZGl0RXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZG9nLyR7ZG9nSWR9P3RhYj1tZWRpY2FsYCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCBkb2N1bWVudCB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBBdHRlbXB0IHRvIGNsZWFuIHVwIHRoZSB1cGxvYWRlZCBmaWxlIGlmIGRhdGFiYXNlIGluc2VydCBmYWlsc1xuICAgICAgYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbShcIm1lZGljYWwtZG9jdW1lbnRzXCIpXG4gICAgICAgIC5yZW1vdmUoW3N0b3JhZ2VQYXRoXSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyBCZXN0LWVmZm9ydCBjbGVhbnVwXG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGxvYWQgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWNhbERvY3VtZW50cyhkb2dJZDogbnVtYmVyKTogUHJvbWlzZTxNZWRpY2FsRG9jdW1lbnRTdW1tYXJ5W10+IHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gZ2V0RG9jdW1lbnRzU2NoZW1hLnNhZmVQYXJzZSh7IGRvZ0lkIH0pO1xuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkb2cgSURcIik7XG4gIH1cblxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBkb2dJZCB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIGNyZWF0ZWRBdDogXCJkZXNjXCIsIC8vIE5vdGU6IHRlc3QgZXhwZWN0cyAndXBsb2FkZWRBdCcgYnV0IGZpZWxkIGlzICdjcmVhdGVkQXQnXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gR2VuZXJhdGUgc2lnbmVkIFVSTHMgZm9yIGVhY2ggZG9jdW1lbnRcbiAgY29uc3QgZG9jdW1lbnRzV2l0aFNpZ25lZFVybHM6IE1lZGljYWxEb2N1bWVudFN1bW1hcnlbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGRvY3VtZW50cy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhOiBzaWduZWRVcmxEYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXG4gICAgICAgIC5mcm9tKFwibWVkaWNhbC1kb2N1bWVudHNcIilcbiAgICAgICAgLmNyZWF0ZVNpZ25lZFVybChkb2MucGF0aCwgOTAwKTsgLy8gMTUgbWludXRlcyBleHBpcnlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZG9jLFxuICAgICAgICBzaWduZWRVcmw6IHNpZ25lZFVybERhdGE/LnNpZ25lZFVybCB8fCBudWxsLFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBkb2N1bWVudHNXaXRoU2lnbmVkVXJscztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lZGljYWxEb2N1bWVudChkb2N1bWVudElkOiBudW1iZXIsIHN0b3JhZ2VQYXRoOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gZGVsZXRlRG9jU2NoZW1hLnNhZmVQYXJzZSh7IGRvY3VtZW50SWQsIHN0b3JhZ2VQYXRoIH0pO1xuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICBmaWVsZEVycm9yczogcGFyc2VkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IGRvY3VtZW50IGluZm8gYmVmb3JlIGRlbGV0aW9uIGZvciBhdWRpdCBsb2dnaW5nXG4gICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBwcmlzbWEubWVkaWNhbERvY3VtZW50LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGRvY3VtZW50SWQgfSxcbiAgICAgIHNlbGVjdDogeyBkb2dJZDogdHJ1ZSwgbmFtZTogdHJ1ZSB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJEb2N1bWVudCBub3QgZm91bmRcIixcbiAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcbiAgICBjb25zdCB7IGVycm9yOiBkZWxldGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgLmZyb20oXCJtZWRpY2FsLWRvY3VtZW50c1wiKVxuICAgICAgLnJlbW92ZShbc3RvcmFnZVBhdGhdKTtcblxuICAgIGlmIChkZWxldGVFcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gZGVsZXRlIGRvY3VtZW50IGZyb20gc3RvcmFnZTogJHtkZWxldGVFcnJvci5tZXNzYWdlfWAsXG4gICAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5tZWRpY2FsRG9jdW1lbnQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBkb2N1bWVudElkIH0sXG4gICAgfSk7XG5cbiAgICAvLyBMb2cgYXVkaXQgZXZlbnQgKHNraXAgaW4gdGVzdHMgd2hlcmUgYXV0aCBtaWdodCBub3QgYmUgc2V0IHVwKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRDdXJyZW50VXNlcklkKCk7XG4gICAgICAgIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogQXVkaXRBY3Rpb24uTUVESUNBTF9ET0NVTUVOVF9ERUxFVEUsXG4gICAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICAgIGVudGl0eVR5cGU6IFwibWVkaWNhbERvY3VtZW50XCIsXG4gICAgICAgICAgZW50aXR5SWQ6IGRvY3VtZW50SWQsXG4gICAgICAgICAgbm90ZTogYERlbGV0ZWQgbWVkaWNhbCBkb2N1bWVudDogJHtkb2N1bWVudC5uYW1lfSBmb3IgZG9nICR7ZG9jdW1lbnQuZG9nSWR9YCxcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGF1ZGl0RXJyb3IpIHtcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCB0aGUgZGVsZXRpb24gaWYgYXVkaXQgbG9nZ2luZyBmYWlsc1xuICAgICAgICBjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gbG9nIG1lZGljYWwgZG9jdW1lbnQgZGVsZXRpb24gYXVkaXQgZXZlbnQ6XCIsIGF1ZGl0RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZG9nLyR7ZG9jdW1lbnQuZG9nSWR9P3RhYj1tZWRpY2FsYCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiTWVkaWNhbCBkb2N1bWVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBkZWxldGUgbWVkaWNhbCBkb2N1bWVudFwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2U0E0VnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/config/uploads.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Upload validation constants - centralized configuration for file uploads
// Used by both client-side validation and server-side validation
__turbopack_context__.s([
    "ALLOWED_CONTENT_TYPES",
    ()=>ALLOWED_CONTENT_TYPES,
    "ALLOWED_EXTENSIONS",
    ()=>ALLOWED_EXTENSIONS,
    "MAX_FILE_SIZE",
    ()=>MAX_FILE_SIZE
]);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MedicalDocumentUploader",
    ()=>MedicalDocumentUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$760347__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:760347 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$uploads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config/uploads.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function validateFile(file) {
    // Validate file extension
    const extension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$uploads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALLOWED_EXTENSIONS"].includes(extension)) {
        return {
            valid: false,
            error: `File type not allowed. Allowed types: ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$uploads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALLOWED_EXTENSIONS"].join(', ')}`
        };
    }
    // Validate content type
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$uploads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALLOWED_CONTENT_TYPES"].includes(file.type)) {
        return {
            valid: false,
            error: `File type "${file.type}" not allowed. Allowed types: PDF and images only.`
        };
    }
    // Validate file size
    if (file.size > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$uploads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FILE_SIZE"]) {
        return {
            valid: false,
            error: `File too large. Maximum size: ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2f$uploads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FILE_SIZE"] / (1024 * 1024)}MB`
        };
    }
    return {
        valid: true
    };
}
function MedicalDocumentUploader({ dogId, documents, onUploadSuccess }) {
    _s();
    const [uploading, setUploading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [file, setFile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [fileValidationError, setFileValidationError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // Check if filename already exists in documents
    const isDuplicateFilename = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "MedicalDocumentUploader.useMemo[isDuplicateFilename]": ()=>{
            if (!file) return false;
            return documents.some({
                "MedicalDocumentUploader.useMemo[isDuplicateFilename]": (doc)=>doc.name.toLowerCase() === file.name.toLowerCase()
            }["MedicalDocumentUploader.useMemo[isDuplicateFilename]"]);
        }
    }["MedicalDocumentUploader.useMemo[isDuplicateFilename]"], [
        file,
        documents
    ]);
    // Compute upload button disabled state
    const canUpload = file && !uploading && !fileValidationError && !isDuplicateFilename;
    const onFile = (e)=>{
        setError(null);
        setFileValidationError(null);
        const f = e.target.files?.[0] ?? null;
        if (!f) {
            setFile(null);
            return;
        }
        // Validate file immediately
        const validation = validateFile(f);
        if (!validation.valid) {
            setFileValidationError(validation.error || "Invalid file");
            setFile(null);
            return;
        }
        setFile(f);
    };
    const startUpload = async ()=>{
        if (!file) return;
        setUploading(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append('dogId', dogId.toString());
            formData.append('file', file);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$760347__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["uploadMedicalDocument"])(undefined, formData);
            if (result.success) {
                // Clear file after successful upload
                setUploading(false);
                setFile(null);
                setFileValidationError(null);
                // Reset file input
                const fileInput = document.getElementById('medicalDocument');
                if (fileInput) fileInput.value = '';
                onUploadSuccess?.();
            } else {
                setUploading(false);
                setError(result.message || "Upload failed");
            }
        } catch (e) {
            setUploading(false);
            setError(e?.message ?? "Upload failed");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-3 rounded-md border border-border p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "medicalDocument",
                        children: "Medical document"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "medicalDocument",
                        name: "file",
                        type: "file",
                        accept: "application/pdf,image/*",
                        onChange: onFile,
                        "aria-label": "Upload medical document"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            fileValidationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "text-red-600 text-sm",
                children: fileValidationError
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            isDuplicateFilename && file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "text-amber-600 text-sm",
                children: [
                    'A file named "',
                    file.name,
                    '" already exists. Please rename the file or choose a different one.'
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                "data-testid": "upload-error",
                className: "text-red-600",
                children: [
                    error,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: startUpload,
                            "data-testid": "retry-upload",
                            children: "Retry"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: startUpload,
                    disabled: !canUpload,
                    "data-testid": "start-upload",
                    children: uploading ? "Uploading…" : "Upload"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(MedicalDocumentUploader, "ZrN1IeUYzlM9OsBen+2TD1wS55k=");
_c = MedicalDocumentUploader;
var _c;
__turbopack_context__.k.register(_c, "MedicalDocumentUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ClientTimestamp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientTimestamp",
    ()=>ClientTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ClientTimestamp({ date, options }) {
    _s();
    const [formatted, setFormatted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientTimestamp.useEffect": ()=>{
            const dateObj = new Date(date);
            setFormatted(dateObj.toLocaleDateString(undefined, options));
        }
    }["ClientTimestamp.useEffect"], [
        date,
        options
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: formatted
    }, void 0, false, {
        fileName: "[project]/components/ClientTimestamp.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_s(ClientTimestamp, "9VfZerPq4GGnNo1WqTHjG/3lGTg=");
_c = ClientTimestamp;
var _c;
__turbopack_context__.k.register(_c, "ClientTimestamp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/dogs/_components/MedicalDocumentList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MedicalDocumentList",
    ()=>MedicalDocumentList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientTimestamp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ClientTimestamp.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function MedicalDocumentList({ documents, pendingDeleteId, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold",
                children: "Uploaded documents"
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            documents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "No documents uploaded yet."
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                children: documents.map((document)=>{
                    const isDeleting = pendingDeleteId === document.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex flex-col gap-2 rounded-md border border-border p-4 md:flex-row md:items-center md:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    document.signedUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: document.signedUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "font-medium text-primary hover:underline",
                                        children: document.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                                        lineNumber: 32,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-muted-foreground",
                                        children: [
                                            document.name,
                                            " (URL unavailable)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                                        lineNumber: 41,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: [
                                            "Uploaded ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientTimestamp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientTimestamp"], {
                                                date: document.createdAt.toISOString()
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                                                lineNumber: 46,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                                        lineNumber: 45,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                                lineNumber: 30,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "destructive",
                                size: "sm",
                                disabled: isDeleting,
                                "aria-busy": isDeleting,
                                onClick: ()=>onDelete(document.id, document.path, document.name),
                                children: isDeleting ? "Deleting..." : "Delete"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, this)
                        ]
                    }, document.id, true, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                        lineNumber: 26,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentList.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = MedicalDocumentList;
var _c;
__turbopack_context__.k.register(_c, "MedicalDocumentList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/MedicalDocumentDeleteDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MedicalDocumentDeleteDialog",
    ()=>MedicalDocumentDeleteDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function MedicalDocumentDeleteDialog({ open, onOpenChange, documentToDelete, onConfirmDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Delete Medical Document"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/MedicalDocumentDeleteDialog.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                'Are you sure you want to delete "',
                                documentToDelete?.name,
                                '"? This action cannot be undone.'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/MedicalDocumentDeleteDialog.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/MedicalDocumentDeleteDialog.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>{
                                onOpenChange(false);
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/MedicalDocumentDeleteDialog.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "destructive",
                            onClick: onConfirmDelete,
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/MedicalDocumentDeleteDialog.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/MedicalDocumentDeleteDialog.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/MedicalDocumentDeleteDialog.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/MedicalDocumentDeleteDialog.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = MedicalDocumentDeleteDialog;
var _c;
__turbopack_context__.k.register(_c, "MedicalDocumentDeleteDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/dogs/_components/MedicalDocumentManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MedicalDocumentManager",
    ()=>MedicalDocumentManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$f4b529__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:f4b529 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$MedicalDocumentUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dogs/_components/MedicalDocumentUploader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$MedicalDocumentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dogs/_components/MedicalDocumentList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$MedicalDocumentDeleteDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/MedicalDocumentDeleteDialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MedicalDocumentManager({ dogId, documents }) {
    _s();
    const [pendingDeleteId, setPendingDeleteId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [documentToDelete, setDocumentToDelete] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const handleDelete = async (documentId, path, name)=>{
        setDocumentToDelete({
            id: documentId,
            name,
            path
        });
        setDeleteConfirmOpen(true);
    };
    const confirmDelete = async ()=>{
        if (!documentToDelete) return;
        setDeleteConfirmOpen(false);
        setPendingDeleteId(documentToDelete.id);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$f4b529__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteMedicalDocument"])(documentToDelete.id, documentToDelete.path);
            // Success - revalidation is handled by the server action
            setDocumentToDelete(null);
        } catch (error) {
            console.error("Failed to delete medical document", error);
        // Error handling could be added here in the future
        } finally{
            setPendingDeleteId(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Medical Documents"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentManager.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Upload vet reports, X-rays, and supporting documents for this dog."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentManager.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentManager.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$MedicalDocumentUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalDocumentUploader"], {
                dogId: dogId,
                documents: documents
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentManager.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dogs$2f$_components$2f$MedicalDocumentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalDocumentList"], {
                documents: documents,
                pendingDeleteId: pendingDeleteId,
                onDelete: handleDelete
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentManager.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$MedicalDocumentDeleteDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MedicalDocumentDeleteDialog"], {
                open: deleteConfirmOpen,
                onOpenChange: setDeleteConfirmOpen,
                documentToDelete: documentToDelete,
                onConfirmDelete: confirmDelete
            }, void 0, false, {
                fileName: "[project]/app/admin/dogs/_components/MedicalDocumentManager.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dogs/_components/MedicalDocumentManager.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(MedicalDocumentManager, "CEzXoX4U2Jd1eqrK+rG1nuVsNf8=");
_c = MedicalDocumentManager;
var _c;
__turbopack_context__.k.register(_c, "MedicalDocumentManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a9215231._.js.map