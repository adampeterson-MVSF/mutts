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
"[project]/lib/actions/data:7386ed [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"606d62df0ce2c836357154fd3533068321cbf66dc1":"updateApplicationStatus"},"lib/actions/application.actions.ts",""] */ __turbopack_context__.s([
    "updateApplicationStatus",
    ()=>updateApplicationStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateApplicationStatus = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("606d62df0ce2c836357154fd3533068321cbf66dc1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateApplicationStatus"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXBwbGljYXRpb24uYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvYWN0aW9ucy9hcHBsaWNhdGlvbi5hY3Rpb25zLnRzXG5cInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgbm90Rm91bmQsIHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgeyBBcHBTdGF0dXMsIEFwcFR5cGUsIFByaXNtYSwgQXVkaXRBY3Rpb24gfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIjtcbmltcG9ydCB7IGFwcGxpY2F0aW9uU2NoZW1hLCBwcm9maWxlU2NoZW1hIH0gZnJvbSBcIkAvbGliL3pvZC9hcHBsaWNhdGlvblNjaGVtYVwiOyAvLyBab2Qgc2NoZW1hXG5pbXBvcnQgeyBhcHBsaWNhdGlvblNjaGVtYSBhcyBuZXdBcHBsaWNhdGlvblNjaGVtYSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzL2FwcGxpY2F0aW9uLnNjaGVtYVwiOyAvLyBOZXcgWm9kIHNjaGVtYVxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGFzc2VydFJvbGUgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9wcm9maWxlLmFjdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQsIG9rLCBmYWlsIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRBbGxvd2VkU3RhdHVzZXMgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IHdpdGhBdWRpdCB9IGZyb20gXCJAL2xpYi9hdWRpdC93aXRoQXVkaXRcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VySWQgfSBmcm9tIFwiLi9hdWRpdC5hY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRTU1JVc2VyIH0gZnJvbSBcIkAvbGliL2F1dGgvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IG1pc3NpbmcgfSBmcm9tIFwiQC9saWIvZm9ybWF0XCI7XG5pbXBvcnQgeyB0b0NzdiB9IGZyb20gXCJAL2xpYi9jc3ZcIjtcbmltcG9ydCB7XG4gIEFkbWluQXBwbGljYXRpb25EZXRhaWwsXG4gIEFwcGxpY2F0aW9uTGlzdEl0ZW0sXG4gIEFwcGxpY2F0aW9uSGlzdG9yeUVudHJ5LFxufSBmcm9tIFwiQC9saWIvdmlldy1tb2RlbHMvYXBwbGljYXRpb25zXCI7XG5pbXBvcnQgeyBwYXJzZUFwcGxpY2F0aW9uU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkAvbGliL3VybC1wYWdpbmF0aW9uXCI7XG5cbmNvbnN0IHVwZGF0ZVN0YXR1c1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgYXBwSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGFwcGxpY2F0aW9uIElEXCIgfSksXG4gIHN0YXR1czogei5uYXRpdmVFbnVtKEFwcFN0YXR1cywgeyBtZXNzYWdlOiBcIkludmFsaWQgc3RhdHVzXCIgfSksXG4gIHN0YXR1c05vdGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuZnVuY3Rpb24gcGFyc2VBcHBsaWNhdGlvbklkcyhmb3JtRGF0YTogRm9ybURhdGEpOiBudW1iZXJbXSB7XG4gIGNvbnN0IHJhdyA9IGZvcm1EYXRhLmdldChcImFwcGxpY2F0aW9uSWRzXCIpO1xuICBpZiAoIXJhdyB8fCB0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gW107XG4gIHJldHVybiByYXdcbiAgICAuc3BsaXQoXCIsXCIpXG4gICAgLm1hcChzID0+IHMudHJpbSgpKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKE51bWJlcilcbiAgICAuZmlsdGVyKE51bWJlci5pc0Zpbml0ZSk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFwcGxpY2F0aW9uKFxuICBwcmV2U3RhdGU6IEFjdGlvblJlc3VsdDxudWxsPixcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxudWxsPj4ge1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTU1JVc2VyKCk7XG4gIGlmICghdXNlcikge1xuICAgIC8vIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiBpZiBtaWRkbGV3YXJlIGlzIGNvcnJlY3QsIGJ1dCBpdCdzIGEgZ29vZCBndWFyZC5cbiAgICByZXR1cm4gZmFpbChcIkF1dGhlbnRpY2F0aW9uIGVycm9yLiBQbGVhc2UgbG9nIGluIGFnYWluLlwiKTtcbiAgfVxuXG4gIC8vIEZldGNoIHByb2ZpbGUgZGF0YSBmb3Igc25hcHNob3RcbiAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHByaXNtYS5wcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH1cbiAgfSk7XG4gIGlmICghcHJvZmlsZSkge1xuICAgIHJldHVybiBmYWlsKFwiUHJvZmlsZSBub3QgZm91bmQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuXCIpO1xuICB9XG5cbiAgY29uc3QgcmF3RGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpO1xuXG4gIC8vIENvZXJjZSBmb3JtIGRhdGEgZm9yIHZhbGlkYXRpb25cbiAgY29uc3QgY29lcmNlZERhdGEgPSB7XG4gICAgLi4ucmF3RGF0YSxcbiAgICBmb3JtVHlwZTogcmF3RGF0YS5mb3JtVHlwZSxcbiAgICBkb2dJZDogcmF3RGF0YS5kb2dJZCA/IE51bWJlcihyYXdEYXRhLmRvZ0lkKSA6IHVuZGVmaW5lZCxcbiAgICB5YXJkRmVuY2VkOiByYXdEYXRhLnlhcmRGZW5jZWQgPyByYXdEYXRhLnlhcmRGZW5jZWQgPT09ICdvbicgOiB1bmRlZmluZWQsXG4gICAgLy8gLi4uIGFkZCBhbnkgb3RoZXIgY29lcmNpb25zIChlLmcuLCByZWZlcmVuY2VzKVxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IG5ld0FwcGxpY2F0aW9uU2NoZW1hLnNhZmVQYXJzZShjb2VyY2VkRGF0YSk7XG4gIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICBjb25zb2xlLndhcm4oXCJBcHBsaWNhdGlvbiB2YWxpZGF0aW9uIGZhaWxlZDpcIiwgcmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyk7XG4gICAgcmV0dXJuIGZhaWwoXCJWYWxpZGF0aW9uIGZhaWxlZC4gUGxlYXNlIGNoZWNrIHlvdXIgZW50cmllcy5cIiwgcmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyk7XG4gIH1cblxuICBjb25zdCB7IGRhdGEgfSA9IHJlc3VsdDtcblxuICB0cnkge1xuICAgIC8vIFVzZSBhIHRyYW5zYWN0aW9uLiBJdCdzIHRoZSBvbmx5IHNhZmUgd2F5LlxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG5cbiAgICAgIGF3YWl0IHR4LmFwcGxpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBhcHBsaWNhdGlvblR5cGU6IGRhdGEuZm9ybVR5cGUsXG4gICAgICAgICAgc3RhdHVzOiAnU1VCTUlUVEVEJyxcbiAgICAgICAgICByZWFzb246IGRhdGEucmVhc29uLFxuICAgICAgICAgIGRvZ0lkOiBkYXRhLmRvZ0lkLFxuICAgICAgICAgIHByb2ZpbGVJZDogdXNlci5pZCwgLy8gPC0tIENvcnJlY3RcbiAgICAgICAgICBzdWJtaXR0ZWRBdDogbmV3IERhdGUoKSxcblxuICAgICAgICAgIC8vIC0tLSBTTkFQU0hPVCBDT1BZIEZST00gUFJPRklMRSAtLS1cbiAgICAgICAgICBhcHBsaWNhbnROYW1lOiBwcm9maWxlLm5hbWUgfHwgJ1Vua25vd24nLFxuICAgICAgICAgIGFwcGxpY2FudEVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgIC8vIC0tLSBGT1JNIERBVEEgKHNuYXBzaG90IG9mIHdoYXQgdXNlciBwcm92aWRlZCBhdCBzdWJtaXNzaW9uIHRpbWUpIC0tLVxuICAgICAgICAgIGFwcGxpY2FudFBob25lOiBkYXRhLmFwcGxpY2FudFBob25lLFxuICAgICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcbiAgICAgICAgICBob3VzaW5nVHlwZTogZGF0YS5ob3VzaW5nVHlwZSxcbiAgICAgICAgICBoYXNZYXJkOiBkYXRhLmhhc1lhcmQsXG4gICAgICAgICAgeWFyZEZlbmNlZDogZGF0YS55YXJkRmVuY2VkLFxuICAgICAgICAgIG90aGVyUGV0czogZGF0YS5vdGhlclBldHMsXG4gICAgICAgICAgdmV0TmFtZTogZGF0YS52ZXROYW1lLFxuICAgICAgICAgIHZldFBob25lOiBkYXRhLnZldFBob25lLFxuICAgICAgICAgIGhvbWVFbnZpcm9ubWVudERlc2NyaXB0aW9uOiBkYXRhLmhvbWVFbnZpcm9ubWVudERlc2NyaXB0aW9uLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIHJlZmVyZW5jZXMgaWYgcHJvdmlkZWRcbiAgICAgIGlmIChkYXRhLnJlZmVyZW5jZXMgJiYgZGF0YS5yZWZlcmVuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gR2V0IHRoZSBhcHBsaWNhdGlvbiBJRCB3ZSBqdXN0IGNyZWF0ZWQgLSB0aGlzIGlzIHRyaWNreSBpbiBhIHRyYW5zYWN0aW9uXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gY3JlYXRlIHRoZSBhcHBsaWNhdGlvbiBmaXJzdCB0byBnZXQgdGhlIElEXG4gICAgICAgIC8vIExldCBtZSByZXN0cnVjdHVyZSB0aGlzLi4uXG5cbiAgICAgICAgLy8gQWN0dWFsbHksIGxldCBtZSBnZXQgdGhlIGFwcGxpY2F0aW9uIElEIGFmdGVyIGNyZWF0aW9uXG4gICAgICAgIC8vIEZvciBub3csIGxldCdzIGNyZWF0ZSByZWZlcmVuY2VzIGFmdGVyIHRoZSB0cmFuc2FjdGlvblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHJlZmVyZW5jZXMgb3V0c2lkZSB0cmFuc2FjdGlvbiBmb3Igc2ltcGxpY2l0eVxuICAgIGlmIChkYXRhLnJlZmVyZW5jZXMgJiYgZGF0YS5yZWZlcmVuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEdldCB0aGUgYXBwbGljYXRpb24gd2UganVzdCBjcmVhdGVkXG4gICAgICBjb25zdCBjcmVhdGVkQXBwbGljYXRpb24gPSBhd2FpdCBwcmlzbWEuYXBwbGljYXRpb24uZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBwcm9maWxlSWQ6IHVzZXIuaWQsXG4gICAgICAgICAgYXBwbGljYXRpb25UeXBlOiBkYXRhLmZvcm1UeXBlLFxuICAgICAgICAgIHN0YXR1czogJ1NVQk1JVFRFRCcsXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcbiAgICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKGNyZWF0ZWRBcHBsaWNhdGlvbikge1xuICAgICAgICBhd2FpdCBwcmlzbWEucmVmZXJlbmNlLmNyZWF0ZU1hbnkoe1xuICAgICAgICAgIGRhdGE6IGRhdGEucmVmZXJlbmNlcy5tYXAoKHJlZikgPT4gKHtcbiAgICAgICAgICAgIC4uLnJlZixcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uSWQ6IGNyZWF0ZWRBcHBsaWNhdGlvbi5pZCxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQXBwbGljYXRpb24gc3VibWlzc2lvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBmYWlsKFwiQSBkYXRhYmFzZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gIH1cblxuICAvLyBSZXZhbGlkYXRlIGFkbWluIHBhdGggYW5kIHJlZGlyZWN0IHVzZXJcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYXBwbGljYXRpb25zXCIpO1xuICBjb25zdCBzdWNjZXNzUGF0aCA9IGRhdGEuZm9ybVR5cGUgPT09ICdBRE9QVEVSJyA/ICcvYXBwbHkvYWRvcHQvc3VjY2VzcycgOiAnL2FwcGx5L2Zvc3Rlci9zdWNjZXNzJztcbiAgcmVkaXJlY3Qoc3VjY2Vzc1BhdGgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXBwbGljYXRpb24oZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBhcHBsaWNhdGlvbklkOiBudW1iZXIgfT4+IHtcbiAgY29uc29sZS5sb2coJ3N1Ym1pdEFwcGxpY2F0aW9uIGNhbGxlZCB3aXRoIGZvcm1EYXRhIGtleXM6JywgQXJyYXkuZnJvbShmb3JtRGF0YS5rZXlzKCkpKTtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcbiAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XG4gIGlmICghdXNlcikge1xuICAgIGNvbnNvbGUubG9nKCdzdWJtaXRBcHBsaWNhdGlvbjogdXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgIHJldHVybiBmYWlsKFwiTm90IGF1dGhlbnRpY2F0ZWRcIik7XG4gIH1cbiAgY29uc29sZS5sb2coJ3N1Ym1pdEFwcGxpY2F0aW9uOiB1c2VyIGF1dGhlbnRpY2F0ZWQsIHByb2NlZWRpbmcgd2l0aCBzdWJtaXNzaW9uJyk7XG5cbiAgdHJ5IHtcbiAgICAvLyBQYXJzZSBmb3JtIGRhdGFcbiAgICBjb25zdCBmb3JtVHlwZSA9IGZvcm1EYXRhLmdldCgnZm9ybVR5cGUnKSBhcyBBcHBUeXBlO1xuICAgIGNvbnN0IGRvZ0lkID0gZm9ybURhdGEuZ2V0KCdkb2dJZCcpID8gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KCdkb2dJZCcpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBPcHRpb25hbDogYXBwbGljYXRpb25zIGNhbiB0YXJnZXQgYSBzcGVjaWZpYyBkb2cgb3IgYmUgZ2VuZXJhbCBpbnRlcmVzdCBhcHBsaWNhdGlvbnNcbiAgICBsZXQgdmFsaWRhdGVkRG9nSWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBpZiAoZG9nSWQgIT09IHVuZGVmaW5lZCAmJiBkb2dJZCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGlzTmFOKGRvZ0lkKSB8fCBkb2dJZCA8PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWlsKFwiSW52YWxpZCBkb2cgSUQgcHJvdmlkZWQuXCIsIHsgZG9nSWQ6IFtcIk11c3QgYmUgYSB2YWxpZCBwb3NpdGl2ZSBudW1iZXJcIl0gfSk7XG4gICAgICB9XG4gICAgICB2YWxpZGF0ZWREb2dJZCA9IGRvZ0lkO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSByZWZlcmVuY2VzIC0gcGFyc2UgbmVzdGVkIGFycmF5IGZvcm1hdCBmcm9tIGZvcm0gZGF0YVxuICAgIGNvbnN0IHBhcnNlZFJlZmVyZW5jZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyBwaG9uZTogc3RyaW5nOyByZWxhdGlvbnNoaXA6IHN0cmluZyB9PiA9IFtdO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoYHJlZmVyZW5jZXNbJHtpbmRleH1dW25hbWVdYCkgYXMgc3RyaW5nO1xuICAgICAgY29uc3QgcGhvbmUgPSBmb3JtRGF0YS5nZXQoYHJlZmVyZW5jZXNbJHtpbmRleH1dW3Bob25lXWApIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IGZvcm1EYXRhLmdldChgcmVmZXJlbmNlc1ske2luZGV4fV1bcmVsYXRpb25zaGlwXWApIGFzIHN0cmluZztcblxuICAgICAgaWYgKCFuYW1lKSBicmVhazsgLy8gTm8gbW9yZSByZWZlcmVuY2VzXG5cbiAgICAgIHBhcnNlZFJlZmVyZW5jZXMucHVzaCh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHBob25lOiBwaG9uZSB8fCAnJyxcbiAgICAgICAgcmVsYXRpb25zaGlwOiByZWxhdGlvbnNoaXAgfHwgJycsXG4gICAgICB9KTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCBmb3JtIGZpZWxkcyAtIHNlcGFyYXRlIHByb2ZpbGUgYW5kIGFwcGxpY2F0aW9uIGRhdGFcbiAgICBjb25zdCBwcm9maWxlRGF0YSA9IHtcbiAgICAgIGZpcnN0TmFtZTogZm9ybURhdGEuZ2V0KCdmaXJzdE5hbWUnKSBhcyBzdHJpbmcsXG4gICAgICBsYXN0TmFtZTogZm9ybURhdGEuZ2V0KCdsYXN0TmFtZScpIGFzIHN0cmluZyxcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nLFxuICAgIH07XG5cbiAgICBjb25zdCBhcHBsaWNhbnREYXRhID0ge1xuICAgICAgYXBwbGljYW50UGhvbmU6IGZvcm1EYXRhLmdldCgnYXBwbGljYW50UGhvbmUnKSBhcyBzdHJpbmcgfHwgdW5kZWZpbmVkLFxuICAgICAgYWRkcmVzczogZm9ybURhdGEuZ2V0KCdhZGRyZXNzJykgYXMgc3RyaW5nLFxuICAgICAgaG91c2luZ1R5cGU6IChmb3JtRGF0YS5nZXQoJ2hvdXNpbmdUeXBlJykgYXMgJ09XTl9IT01FJyB8ICdSRU5UX0hPTUUnIHwgJ09XTl9BUFRfQ09ORE8nIHwgJ1JFTlRfQVBUX0NPTkRPJyB8ICdPVEhFUicpID8/ICdPVEhFUicsXG4gICAgICBoYXNZYXJkOiAoZm9ybURhdGEuZ2V0KCdoYXNZYXJkJykgYXMgJ1lFUycgfCAnTk8nIHwgJ1NIQVJFRCcpID8/ICdOTycsXG4gICAgICB5YXJkRmVuY2VkOiBmb3JtRGF0YS5nZXQoJ3lhcmRGZW5jZWQnKSA9PT0gJ29uJyxcbiAgICAgIG90aGVyUGV0czogZm9ybURhdGEuZ2V0KCdvdGhlclBldHMnKSBhcyBzdHJpbmcgfHwgdW5kZWZpbmVkLFxuICAgICAgdmV0TmFtZTogZm9ybURhdGEuZ2V0KCd2ZXROYW1lJykgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcbiAgICAgIHZldFBob25lOiBmb3JtRGF0YS5nZXQoJ3ZldFBob25lJykgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcbiAgICAgIGhvbWVFbnZpcm9ubWVudERlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2hvbWVFbnZpcm9ubWVudERlc2NyaXB0aW9uJykgYXMgc3RyaW5nLFxuICAgIH07XG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbkRhdGEgPSB7XG4gICAgICByZWFzb246IGZvcm1EYXRhLmdldCgncmVhc29uJykgYXMgc3RyaW5nLFxuICAgICAgZG9nSWQ6IHZhbGlkYXRlZERvZ0lkLFxuICAgICAgcmVmZXJlbmNlczogcGFyc2VkUmVmZXJlbmNlcyxcbiAgICAgIC4uLmFwcGxpY2FudERhdGEsIC8vIEluY2x1ZGUgYXBwbGljYW50IGZpZWxkcyBpbiBhcHBsaWNhdGlvbiBkYXRhXG4gICAgfTtcblxuICAgIC8vIFZhbGlkYXRlIHByb2ZpbGUgZGF0YSAob25seSBuYW1lIGFuZCBlbWFpbClcbiAgICBjb25zdCB2YWxpZGF0ZWRQcm9maWxlRGF0YSA9IHByb2ZpbGVTY2hlbWEuc2FmZVBhcnNlKHByb2ZpbGVEYXRhKTtcbiAgICBpZiAoIXZhbGlkYXRlZFByb2ZpbGVEYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gdmFsaWRhdGVkUHJvZmlsZURhdGEuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xuICAgICAgcmV0dXJuIGZhaWwoXCJWYWxpZGF0aW9uIGZhaWxlZC5cIiwgZmllbGRFcnJvcnMpO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGFwcGxpY2F0aW9uIGRhdGEgKGluY2x1ZGVzIGFwcGxpY2FudCBmaWVsZHMpXG4gICAgY29uc3QgdmFsaWRhdGVkQXBwbGljYXRpb25EYXRhID0gYXBwbGljYXRpb25TY2hlbWEuc2FmZVBhcnNlKGFwcGxpY2F0aW9uRGF0YSk7XG4gICAgaWYgKCF2YWxpZGF0ZWRBcHBsaWNhdGlvbkRhdGEuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB2YWxpZGF0ZWRBcHBsaWNhdGlvbkRhdGEuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xuICAgICAgcmV0dXJuIGZhaWwoXCJWYWxpZGF0aW9uIGZhaWxlZC5cIiwgZmllbGRFcnJvcnMpO1xuICAgIH1cblxuICAgIC8vIDEuIFNlcGFyYXRlIHJlZmVyZW5jZXMgZnJvbSB0aGUgYXBwbGljYXRpb24gZGF0YS5cbiAgICBjb25zdCB7IHJlZmVyZW5jZXM6IHZhbGlkYXRlZFJlZmVyZW5jZXMsIC4uLmFwcGxpY2F0aW9uRmllbGRzIH0gPSB2YWxpZGF0ZWRBcHBsaWNhdGlvbkRhdGEuZGF0YTtcblxuICAgIC8vIDIuIFVzZSBhIHRyYW5zYWN0aW9uIHRvIGVuc3VyZSBkYXRhIGludGVncml0eS5cbiAgICBsZXQgYXBwOiB7IGlkOiBudW1iZXIgfSB8IHVuZGVmaW5lZDtcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgLy8gMy4gVXBzZXJ0IHRoZSB1c2VyJ3MgcHJvZmlsZSB3aXRoIG5hbWUgYW5kIGVtYWlsXG4gICAgICBhd2FpdCB0eC5wcm9maWxlLnVwc2VydCh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0sXG4gICAgICAgIHVwZGF0ZToge1xuICAgICAgICAgIG5hbWU6IGAke3ZhbGlkYXRlZFByb2ZpbGVEYXRhLmRhdGEuZmlyc3ROYW1lfSAke3ZhbGlkYXRlZFByb2ZpbGVEYXRhLmRhdGEubGFzdE5hbWV9YCxcbiAgICAgICAgICBlbWFpbDogdmFsaWRhdGVkUHJvZmlsZURhdGEuZGF0YS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgbmFtZTogYCR7dmFsaWRhdGVkUHJvZmlsZURhdGEuZGF0YS5maXJzdE5hbWV9ICR7dmFsaWRhdGVkUHJvZmlsZURhdGEuZGF0YS5sYXN0TmFtZX1gLFxuICAgICAgICAgIGVtYWlsOiB2YWxpZGF0ZWRQcm9maWxlRGF0YS5kYXRhLmVtYWlsLFxuICAgICAgICAgIHJvbGU6IFVzZXJSb2xlLlZPTFVOVEVFUiwgLy8gRGVmYXVsdCByb2xlIGZvciBuZXcgcHJvZmlsZXNcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyA0LiBDcmVhdGUgdGhlIGFwcGxpY2F0aW9uIHdpdGggYXBwbGljYXRpb24tc3BlY2lmaWMgZGF0YSBvbmx5XG4gICAgICBjb25zdCBhcHBsaWNhdGlvbkRhdGE6IFByaXNtYS5BcHBsaWNhdGlvbkNyZWF0ZUlucHV0ID0ge1xuICAgICAgICBhcHBsaWNhdGlvblR5cGU6IGZvcm1UeXBlLFxuICAgICAgICBwcm9maWxlSWQ6IHVzZXIuaWQsXG4gICAgICAgIHN0YXR1czogQXBwU3RhdHVzLlNVQk1JVFRFRCxcbiAgICAgICAgc3VibWl0dGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHJlYXNvbjogYXBwbGljYXRpb25GaWVsZHMucmVhc29uLFxuICAgICAgICBhcHBsaWNhbnROYW1lOiBgJHt2YWxpZGF0ZWRQcm9maWxlRGF0YS5kYXRhLmZpcnN0TmFtZX0gJHt2YWxpZGF0ZWRQcm9maWxlRGF0YS5kYXRhLmxhc3ROYW1lfWAsXG4gICAgICAgIGFwcGxpY2FudEVtYWlsOiB2YWxpZGF0ZWRQcm9maWxlRGF0YS5kYXRhLmVtYWlsLFxuICAgICAgfTtcblxuICAgICAgLy8gQWRkIG9wdGlvbmFsIGZpZWxkcyBpZiB0aGV5IGV4aXN0XG4gICAgICBpZiAoYXBwbGljYXRpb25GaWVsZHMuZG9nSWQgIT09IHVuZGVmaW5lZCkgYXBwbGljYXRpb25EYXRhLmRvZyA9IHsgY29ubmVjdDogeyBpZDogYXBwbGljYXRpb25GaWVsZHMuZG9nSWQgfSB9O1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLmFwcGxpY2FudFBob25lICE9PSB1bmRlZmluZWQpIGFwcGxpY2F0aW9uRGF0YS5hcHBsaWNhbnRQaG9uZSA9IGFwcGxpY2F0aW9uRmllbGRzLmFwcGxpY2FudFBob25lO1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLmFkZHJlc3MgIT09IHVuZGVmaW5lZCkgYXBwbGljYXRpb25EYXRhLmFkZHJlc3MgPSBhcHBsaWNhdGlvbkZpZWxkcy5hZGRyZXNzO1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLmhvdXNpbmdUeXBlICE9PSB1bmRlZmluZWQpIGFwcGxpY2F0aW9uRGF0YS5ob3VzaW5nVHlwZSA9IGFwcGxpY2F0aW9uRmllbGRzLmhvdXNpbmdUeXBlO1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLmhhc1lhcmQgIT09IHVuZGVmaW5lZCkgYXBwbGljYXRpb25EYXRhLmhhc1lhcmQgPSBhcHBsaWNhdGlvbkZpZWxkcy5oYXNZYXJkO1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLnlhcmRGZW5jZWQgIT09IHVuZGVmaW5lZCkgYXBwbGljYXRpb25EYXRhLnlhcmRGZW5jZWQgPSBhcHBsaWNhdGlvbkZpZWxkcy55YXJkRmVuY2VkO1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLm90aGVyUGV0cyAhPT0gdW5kZWZpbmVkKSBhcHBsaWNhdGlvbkRhdGEub3RoZXJQZXRzID0gYXBwbGljYXRpb25GaWVsZHMub3RoZXJQZXRzO1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLnZldE5hbWUgIT09IHVuZGVmaW5lZCkgYXBwbGljYXRpb25EYXRhLnZldE5hbWUgPSBhcHBsaWNhdGlvbkZpZWxkcy52ZXROYW1lO1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLnZldFBob25lICE9PSB1bmRlZmluZWQpIGFwcGxpY2F0aW9uRGF0YS52ZXRQaG9uZSA9IGFwcGxpY2F0aW9uRmllbGRzLnZldFBob25lO1xuICAgICAgaWYgKGFwcGxpY2F0aW9uRmllbGRzLmhvbWVFbnZpcm9ubWVudERlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIGFwcGxpY2F0aW9uRGF0YS5ob21lRW52aXJvbm1lbnREZXNjcmlwdGlvbiA9IGFwcGxpY2F0aW9uRmllbGRzLmhvbWVFbnZpcm9ubWVudERlc2NyaXB0aW9uO1xuXG4gICAgICBhcHAgPSBhd2FpdCB0eC5hcHBsaWNhdGlvbi5jcmVhdGUoe1xuICAgICAgICBkYXRhOiBhcHBsaWNhdGlvbkRhdGEsXG4gICAgICB9KTtcblxuICAgICAgLy8gNS4gSWYgcmVmZXJlbmNlcyBleGlzdCwgY3JlYXRlIHRoZW0gYW5kIGxpbmsgdGhlbS5cbiAgICAgIGlmICh2YWxpZGF0ZWRSZWZlcmVuY2VzICYmIHZhbGlkYXRlZFJlZmVyZW5jZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCB0eC5yZWZlcmVuY2UuY3JlYXRlTWFueSh7XG4gICAgICAgICAgZGF0YTogdmFsaWRhdGVkUmVmZXJlbmNlcy5tYXAoKHJlZikgPT4gKHtcbiAgICAgICAgICAgIC4uLnJlZixcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uSWQ6IGFwcCEuaWQsIC8vIExpbmsgdG8gdGhlIG5ldyBhcHBsaWNhdGlvblxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyA2LiBSZXZhbGlkYXRlIHBhdGhzXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYXBwbGljYXRpb25zXCIpO1xuXG4gICAgaWYgKCFhcHApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgYXBwbGljYXRpb25cIik7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdEFwcGxpY2F0aW9uOiBhcHBsaWNhdGlvbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseSB3aXRoIElEOicsIGFwcC5pZCk7XG4gICAgcmV0dXJuIG9rKHsgYXBwbGljYXRpb25JZDogYXBwLmlkIH0sICdBcHBsaWNhdGlvbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBcHBsaWNhdGlvbiBzdWJtaXNzaW9uIGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBmYWlsKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gc3VibWl0IGFwcGxpY2F0aW9uLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXBwbGljYXRpb25TdGF0dXMocHJldlN0YXRlOiBBY3Rpb25SZXN1bHQsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG4gICAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0Q3VycmVudFVzZXJJZCgpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gdXBkYXRlU3RhdHVzU2NoZW1hLnNhZmVQYXJzZShPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEuZW50cmllcygpKSk7XG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSBwYXJzZWQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xuICAgICAgcmV0dXJuIGZhaWwoXCJWYWxpZGF0aW9uIGZhaWxlZC5cIiwgZmllbGRFcnJvcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYXBwSWQsIHN0YXR1cywgc3RhdHVzTm90ZXMgfSA9IHBhcnNlZC5kYXRhO1xuXG4gICAgLy8gR2V0IGN1cnJlbnQgYXBwbGljYXRpb24gdG8gdmFsaWRhdGUgc3RhdHVzIHRyYW5zaXRpb25cbiAgICBjb25zdCBjdXJyZW50QXBwbGljYXRpb24gPSBhd2FpdCBwcmlzbWEuYXBwbGljYXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYXBwSWQgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGFwcGxpY2F0aW9uVHlwZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWN1cnJlbnRBcHBsaWNhdGlvbikge1xuICAgICAgcmV0dXJuIGZhaWwoXCJBcHBsaWNhdGlvbiBub3QgZm91bmQuXCIpO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIHRoYXQgdGhlIHN0YXR1cyB0cmFuc2l0aW9uIGlzIGFsbG93ZWQgKHNlcnZlci1zaWRlIGVuZm9yY2VtZW50KVxuICAgIGNvbnN0IGFsbG93ZWRTdGF0dXNlcyA9IGdldEFsbG93ZWRTdGF0dXNlcyhjdXJyZW50QXBwbGljYXRpb24uYXBwbGljYXRpb25UeXBlLCBjdXJyZW50QXBwbGljYXRpb24uc3RhdHVzKTtcbiAgICBpZiAoIWFsbG93ZWRTdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpKSB7XG4gICAgICByZXR1cm4gZmFpbChcIkludmFsaWQgc3RhdHVzIHRyYW5zaXRpb24gZm9yIHRoaXMgYXBwbGljYXRpb24gdHlwZS5cIik7XG4gICAgfVxuXG4gICAgLy8gQnVzaW5lc3MgcnVsZTogbm90ZXMgcmVxdWlyZWQgZm9yIEFQUFJPVkVEL1JFSkVDVEVEXG4gICAgaWYgKChzdGF0dXMgPT09IEFwcFN0YXR1cy5BUFBST1ZFRCB8fCBzdGF0dXMgPT09IEFwcFN0YXR1cy5SRUpFQ1RFRCkgJiZcbiAgICAgICAgKCFzdGF0dXNOb3RlcyB8fCBzdGF0dXNOb3Rlcy50cmltKCkubGVuZ3RoID09PSAwKSkge1xuICAgICAgcmV0dXJuIGZhaWwoXCJTdGF0dXMgbm90ZXMgYXJlIHJlcXVpcmVkIHdoZW4gbW92aW5nIHRvIGFwcHJvdmVkIG9yIHJlamVjdGVkIHN0YXR1cy5cIiwgeyBzdGF0dXNOb3RlczogW1wiUmVxdWlyZWQgZm9yIHRlcm1pbmFsIHN0YXR1cyBjaGFuZ2VzXCJdIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IHdpdGhBdWRpdChcbiAgICAgIGFzeW5jICh0eCkgPT4ge1xuICAgICAgICBjb25zdCBhcHBsaWNhdGlvbiA9IGF3YWl0IHR4LmFwcGxpY2F0aW9uLnVwZGF0ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IGFwcElkIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzTm90ZXM6IHN0YXR1c05vdGVzIHx8IG51bGwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uVHlwZTogdHJ1ZSxcbiAgICAgICAgICAgIHByb2ZpbGVJZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXcml0ZSB0byBhcHBlbmQtb25seSBBcHBsaWNhdGlvbkF1ZGl0IHRhYmxlXG4gICAgICAgIGF3YWl0IHR4LmFwcGxpY2F0aW9uQXVkaXQuY3JlYXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbklkOiBhcHBJZCxcbiAgICAgICAgICAgIGFjdG9ySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIG9sZFN0YXR1czogY3VycmVudEFwcGxpY2F0aW9uLnN0YXR1cyxcbiAgICAgICAgICAgIG5ld1N0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgbm90ZTogc3RhdHVzTm90ZXMgfHwgYFN0YXR1cyBjaGFuZ2VkIGZyb20gJHtjdXJyZW50QXBwbGljYXRpb24uc3RhdHVzfSB0byAke3N0YXR1c31gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hcHBsaWNhdGlvblR5cGUgPT09IEFwcFR5cGUuRk9TVEVSICYmIHN0YXR1cyA9PT0gQXBwU3RhdHVzLkFQUFJPVkVEKSB7XG4gICAgICAgICAgYXdhaXQgdHguZm9zdGVyUHJvZmlsZS51cHNlcnQoe1xuICAgICAgICAgICAgd2hlcmU6IHsgcHJvZmlsZUlkOiBhcHBsaWNhdGlvbi5wcm9maWxlSWQgfSxcbiAgICAgICAgICAgIHVwZGF0ZToge30sXG4gICAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgICAgcHJvZmlsZUlkOiBhcHBsaWNhdGlvbi5wcm9maWxlSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uO1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWN0b3JJZDogdXNlcklkLFxuICAgICAgICBhY3Rpb246IEF1ZGl0QWN0aW9uLkFQUExJQ0FUSU9OX1NUQVRVU19DSEFOR0UsXG4gICAgICAgIGVudGl0eVR5cGU6ICdhcHBsaWNhdGlvbicsXG4gICAgICAgIGVudGl0eUlkOiBhcHBJZCxcbiAgICAgICAgbm90ZTogYFN0YXR1cyBjaGFuZ2VkIGZyb20gJHtjdXJyZW50QXBwbGljYXRpb24uc3RhdHVzfSB0byAke3N0YXR1c31gLFxuICAgICAgfSxcbiAgICAgIHByaXNtYVxuICAgICk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2FkbWluL2FwcGxpY2F0aW9ucy8ke2FwcElkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FwcGxpY2F0aW9uc1wiKTtcblxuICAgIHJldHVybiBvayhudWxsLCBcIkFwcGxpY2F0aW9uIHN0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhaWwoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGRhdGUgc3RhdHVzXCIpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBsaWNhdGlvbkJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8QWRtaW5BcHBsaWNhdGlvbkRldGFpbD4ge1xuICBjb25zdCBwYXJzZWQgPSB6Lm9iamVjdCh7IGlkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpIH0pLnNhZmVQYXJzZSh7IGlkIH0pO1xuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcHBsaWNhdGlvbiBJRFwiKTtcbiAgfVxuXG4gIGNvbnN0IGFwcGxpY2F0aW9uID0gYXdhaXQgcHJpc21hLmFwcGxpY2F0aW9uLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBpZDogdHJ1ZSxcbiAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcbiAgICAgIHVwZGF0ZWRBdDogdHJ1ZSxcbiAgICAgIGFwcGxpY2F0aW9uVHlwZTogdHJ1ZSxcbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIHN0YXR1c05vdGVzOiB0cnVlLFxuICAgICAgcHJvZmlsZUlkOiB0cnVlLFxuICAgICAgYXBwbGljYW50TmFtZTogdHJ1ZSxcbiAgICAgIGFwcGxpY2FudEVtYWlsOiB0cnVlLFxuICAgICAgYXBwbGljYW50UGhvbmU6IHRydWUsXG4gICAgICBhZGRyZXNzOiB0cnVlLFxuICAgICAgaG91c2luZ1R5cGU6IHRydWUsXG4gICAgICBoYXNZYXJkOiB0cnVlLFxuICAgICAgeWFyZEZlbmNlZDogdHJ1ZSxcbiAgICAgIG90aGVyUGV0czogdHJ1ZSxcbiAgICAgIHZldE5hbWU6IHRydWUsXG4gICAgICB2ZXRQaG9uZTogdHJ1ZSxcbiAgICAgIGhvbWVFbnZpcm9ubWVudERlc2NyaXB0aW9uOiB0cnVlLFxuICAgICAgcmVhc29uOiB0cnVlLFxuICAgICAgcmVmZXJlbmNlczogdHJ1ZSxcbiAgICAgIGRvZzoge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICBiaW9QdWJsaWM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICBpZiAoIWFwcGxpY2F0aW9uKSBub3RGb3VuZCgpO1xuXG4gIC8vIDIuIERFTEVURSBBTEwgSlNPTi5wYXJzZSBsb2dpYy4gSXQncyBub3QgbmVlZGVkLlxuICAvLyBjb25zdCBmb3JtRGF0YSA9IEpTT04ucGFyc2UoYXBwbGljYXRpb24uZm9ybURhdGFKc29uKTtcbiAgLy8gcmV0dXJuIHsgLi4uYXBwbGljYXRpb24sIGZvcm1EYXRhIH07XG5cbiAgLy8gRGVjcnlwdCBQSUkgZmllbGRzIGZyb20gcHJvZmlsZSBiZWZvcmUgcmV0dXJuaW5nXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBsaWNhdGlvbixcbiAgICBob3VzaW5nVHlwZUxhYmVsOiBhcHBsaWNhdGlvbi5ob3VzaW5nVHlwZSB8fCBcIk5vdCBzcGVjaWZpZWRcIixcbiAgICBoYXNZYXJkTGFiZWw6XG4gICAgICBhcHBsaWNhdGlvbi5oYXNZYXJkID09PSBcIllFU1wiXG4gICAgICAgID8gXCJZZXNcIlxuICAgICAgICA6IGFwcGxpY2F0aW9uLmhhc1lhcmQgPT09IFwiTk9cIlxuICAgICAgICA/IFwiTm9cIlxuICAgICAgICA6IGFwcGxpY2F0aW9uLmhhc1lhcmQgPT09IFwiU0hBUkVEXCJcbiAgICAgICAgPyBcIlNoYXJlZFwiXG4gICAgICAgIDogXCJOb3Qgc3BlY2lmaWVkXCIsXG4gICAgeWFyZEZlbmNlZExhYmVsOlxuICAgICAgYXBwbGljYXRpb24ueWFyZEZlbmNlZCA9PT0gdHJ1ZVxuICAgICAgICA/IFwiWWVzXCJcbiAgICAgICAgOiBhcHBsaWNhdGlvbi55YXJkRmVuY2VkID09PSBmYWxzZVxuICAgICAgICA/IFwiTm9cIlxuICAgICAgICA6IFwiTm90IHNwZWNpZmllZFwiLFxuICAgIG90aGVyUGV0c0xhYmVsOiBhcHBsaWNhdGlvbi5vdGhlclBldHMgfHwgXCJOb3Qgc3BlY2lmaWVkXCIsXG4gICAgaG9tZUVudmlyb25tZW50RGVzY3JpcHRpb25MYWJlbDogYXBwbGljYXRpb24uaG9tZUVudmlyb25tZW50RGVzY3JpcHRpb24gfHwgXCJOb3Qgc3BlY2lmaWVkXCIsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBcHBsaWNhdGlvbnMoc2VhcmNoUGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSk6IFByb21pc2U8e1xuICAgIGFwcGxpY2F0aW9uczogQXBwbGljYXRpb25MaXN0SXRlbVtdO1xuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgICAgICAgdG90YWxQYWdlczogbnVtYmVyO1xuICAgICAgICB0b3RhbENvdW50OiBudW1iZXI7XG4gICAgICAgIGhhc05leHRQYWdlOiBib29sZWFuO1xuICAgICAgICBoYXNQcmV2aW91c1BhZ2U6IGJvb2xlYW47XG4gICAgfTtcbn0+IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIC8vIFBhcnNlIGFuZCB2YWxpZGF0ZSBzZWFyY2ggcGFyYW1ldGVycyB1c2luZyBzaGFyZWQgaGVscGVyXG4gICAgY29uc3QgdmFsaWRhdGVkUGFyYW1zID0gcGFyc2VBcHBsaWNhdGlvblNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMgfHwge30pO1xuXG4gICAgLy8gVmFsaWRhdGUgc3RhdHVzIGZpbHRlclxuICAgIGlmICh2YWxpZGF0ZWRQYXJhbXMuc3RhdHVzICYmIHZhbGlkYXRlZFBhcmFtcy5zdGF0dXMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKEFwcFN0YXR1cykuaW5jbHVkZXModmFsaWRhdGVkUGFyYW1zLnN0YXR1cyBhcyBBcHBTdGF0dXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3RhdHVzIGZpbHRlcjogJHt2YWxpZGF0ZWRQYXJhbXMuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgdHlwZSBmaWx0ZXJcbiAgICBpZiAodmFsaWRhdGVkUGFyYW1zLnR5cGUgJiYgdmFsaWRhdGVkUGFyYW1zLnR5cGUgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKEFwcFR5cGUpLmluY2x1ZGVzKHZhbGlkYXRlZFBhcmFtcy50eXBlIGFzIEFwcFR5cGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdHlwZSBmaWx0ZXI6ICR7dmFsaWRhdGVkUGFyYW1zLnR5cGV9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSAodmFsaWRhdGVkUGFyYW1zLnBhZ2UgLSAxKSAqIHZhbGlkYXRlZFBhcmFtcy5saW1pdDtcblxuICAgIC8vIEJ1aWxkIHdoZXJlIGNsYXVzZSBmb3IgZmlsdGVyaW5nXG4gICAgY29uc3Qgd2hlcmU6IFByaXNtYS5BcHBsaWNhdGlvbldoZXJlSW5wdXQgPSB7fTtcblxuICAgIGlmICh2YWxpZGF0ZWRQYXJhbXMuc3RhdHVzICYmIHZhbGlkYXRlZFBhcmFtcy5zdGF0dXMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgd2hlcmUuc3RhdHVzID0gdmFsaWRhdGVkUGFyYW1zLnN0YXR1cyBhcyBBcHBTdGF0dXM7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlZFBhcmFtcy50eXBlICYmIHZhbGlkYXRlZFBhcmFtcy50eXBlICE9PSBcImFsbFwiKSB7XG4gICAgICAgIHdoZXJlLmFwcGxpY2F0aW9uVHlwZSA9IHZhbGlkYXRlZFBhcmFtcy50eXBlIGFzIEFwcFR5cGU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlZFBhcmFtcy5zZWFyY2gpIHtcbiAgICAgICAgd2hlcmUuT1IgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXBwbGljYW50TmFtZToge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluczogdmFsaWRhdGVkUGFyYW1zLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJpbnNlbnNpdGl2ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnRFbWFpbDoge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluczogdmFsaWRhdGVkUGFyYW1zLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJpbnNlbnNpdGl2ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IFthcHBsaWNhdGlvbnMsIHRvdGFsQ291bnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmlzbWEuYXBwbGljYXRpb24uZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uVHlwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50TmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnRFbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZWFzb246IHRydWUsXG4gICAgICAgICAgICAgICAgZG9nOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3JkZXJCeTogeyBbdmFsaWRhdGVkUGFyYW1zLnNvcnRCeV06IHZhbGlkYXRlZFBhcmFtcy5zb3J0T3JkZXIgfSxcbiAgICAgICAgICAgIHNraXA6IG9mZnNldCxcbiAgICAgICAgICAgIHRha2U6IHZhbGlkYXRlZFBhcmFtcy5saW1pdCxcbiAgICAgICAgfSksXG4gICAgICAgIHByaXNtYS5hcHBsaWNhdGlvbi5jb3VudCh7IHdoZXJlIH0pLFxuICAgIF0pO1xuXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gdmFsaWRhdGVkUGFyYW1zLmxpbWl0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFwcGxpY2F0aW9uczogYXBwbGljYXRpb25zIGFzIEFwcGxpY2F0aW9uTGlzdEl0ZW1bXSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHZhbGlkYXRlZFBhcmFtcy5wYWdlLFxuICAgICAgICAgICAgdG90YWxQYWdlcyxcbiAgICAgICAgICAgIHRvdGFsQ291bnQsXG4gICAgICAgICAgICBoYXNOZXh0UGFnZTogdmFsaWRhdGVkUGFyYW1zLnBhZ2UgPCB0b3RhbFBhZ2VzLFxuICAgICAgICAgICAgaGFzUHJldmlvdXNQYWdlOiB2YWxpZGF0ZWRQYXJhbXMucGFnZSA+IDEsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJBcHBsaWNhdGlvbnMocHJvZmlsZUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJzZWQgPSB6Lm9iamVjdCh7IHByb2ZpbGVJZDogei5zdHJpbmcoKS51dWlkKCkgfSkuc2FmZVBhcnNlKHsgcHJvZmlsZUlkIH0pO1xuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwcm9maWxlIElEXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9ucyA9IGF3YWl0IHByaXNtYS5hcHBsaWNhdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHByb2ZpbGVJZCB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICByZWZlcmVuY2VzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhcHBsaWNhdGlvbnM7XG59XG5cbi8vIEZvcm0gYWN0aW9uIHdyYXBwZXIgZm9yIHVwZGF0ZUFwcGxpY2F0aW9uU3RhdHVzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXBwbGljYXRpb25TdGF0dXNGb3JtKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICByZXR1cm4gdXBkYXRlQXBwbGljYXRpb25TdGF0dXMob2sobnVsbCksIGZvcm1EYXRhKTtcbn1cblxuY29uc3QgYnVsa1VwZGF0ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgYXBwSWRzOiB6LmFycmF5KHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGFwcGxpY2F0aW9uIElEXCIgfSkpLFxuICBzdGF0dXM6IHoubmF0aXZlRW51bShBcHBTdGF0dXMsIHsgbWVzc2FnZTogXCJJbnZhbGlkIHN0YXR1c1wiIH0pLFxuICBzdGF0dXNOb3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrVXBkYXRlQXBwbGljYXRpb25TdGF0dXMoXG4gIGFwcElkczogbnVtYmVyW10sXG4gIHN0YXR1czogQXBwU3RhdHVzLFxuICBzdGF0dXNOb3Rlcz86IHN0cmluZ1xuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBvazogbnVtYmVyW107IGZhaWxlZDogeyBpZDogbnVtYmVyOyByZWFzb246IHN0cmluZyB9W10gfT4+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IGJ1bGtVcGRhdGVTY2hlbWEuc2FmZVBhcnNlKHsgYXBwSWRzLCBzdGF0dXMsIHN0YXR1c05vdGVzIH0pO1xuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gcGFyc2VkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycztcbiAgICAgIHJldHVybiBmYWlsKFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsIGZpZWxkRXJyb3JzKTtcbiAgICB9XG5cbiAgICAvLyBCdXNpbmVzcyBydWxlOiBub3RlcyByZXF1aXJlZCBmb3IgQVBQUk9WRUQvUkVKRUNURUQvV0lUSERSQVdOXG4gICAgY29uc3QgcmVxdWlyZXNOb3RlczogQXBwU3RhdHVzW10gPSBbQXBwU3RhdHVzLkFQUFJPVkVELCBBcHBTdGF0dXMuUkVKRUNURUQsIEFwcFN0YXR1cy5XSVRIRFJBV05dXG4gICAgaWYgKHJlcXVpcmVzTm90ZXMuaW5jbHVkZXMoc3RhdHVzKSAmJiAoIXN0YXR1c05vdGVzIHx8IHN0YXR1c05vdGVzLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICByZXR1cm4gZmFpbChcIlN0YXR1cyBub3RlcyBhcmUgcmVxdWlyZWQgd2hlbiBtb3ZpbmcgdG8gYXBwcm92ZWQsIHJlamVjdGVkLCBvciB3aXRoZHJhd24gc3RhdHVzLlwiLCB7IHN0YXR1c05vdGVzOiBbXCJSZXF1aXJlZCBmb3IgdGVybWluYWwgc3RhdHVzIGNoYW5nZXNcIl0gfSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGN1cnJlbnQgdXNlciBmb3IgYXV0aGVudGljYXRpb25cbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyOiB1cGRhdGVyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuICAgIGlmICghdXBkYXRlcikge1xuICAgICAgcmV0dXJuIGZhaWwoXCJBdXRoZW50aWNhdGlvbiByZXF1aXJlZC5cIik7XG4gICAgfVxuXG4gICAgLy8gR2V0IHVwZGF0ZXIncyByb2xlIGZyb20gZGF0YWJhc2VcbiAgICBjb25zdCB1cGRhdGVyUHJvZmlsZSA9IGF3YWl0IHByaXNtYS5wcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHVwZGF0ZXIuaWQgfSxcbiAgICAgIHNlbGVjdDogeyByb2xlOiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVwZGF0ZXJQcm9maWxlIHx8ICh1cGRhdGVyUHJvZmlsZS5yb2xlICE9PSBVc2VyUm9sZS5BRE1JTiAmJiB1cGRhdGVyUHJvZmlsZS5yb2xlICE9PSBVc2VyUm9sZS5TVEFGRikpIHtcbiAgICAgIHJldHVybiBmYWlsKFwiSW5zdWZmaWNpZW50IHBlcm1pc3Npb25zLlwiKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY3VycmVudCBhcHBsaWNhdGlvbnMgdG8gdmFsaWRhdGUgc3RhdHVzIHRyYW5zaXRpb25zXG4gICAgY29uc3QgY3VycmVudEFwcGxpY2F0aW9ucyA9IGF3YWl0IHByaXNtYS5hcHBsaWNhdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyBpZDogeyBpbjogYXBwSWRzIH0gfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBhcHBsaWNhdGlvblR5cGU6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYXBwTWFwID0gbmV3IE1hcChjdXJyZW50QXBwbGljYXRpb25zLm1hcChhcHAgPT4gW2FwcC5pZCwgYXBwXSkpO1xuICAgIGNvbnN0IHN1Y2Nlc3NmdWxJZHM6IG51bWJlcltdID0gW107XG4gICAgY29uc3QgZmFpbGVkOiB7IGlkOiBudW1iZXI7IHJlYXNvbjogc3RyaW5nIH1bXSA9IFtdO1xuXG4gICAgLy8gVmFsaWRhdGUgZWFjaCB0cmFuc2l0aW9uIGFuZCBjb2xsZWN0IGZhaWx1cmVzXG4gICAgZm9yIChjb25zdCBhcHBJZCBvZiBhcHBJZHMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRBcHAgPSBhcHBNYXAuZ2V0KGFwcElkKTtcbiAgICAgIGlmICghY3VycmVudEFwcCkge1xuICAgICAgICBmYWlsZWQucHVzaCh7IGlkOiBhcHBJZCwgcmVhc29uOiBcIkFwcGxpY2F0aW9uIG5vdCBmb3VuZFwiIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgc3RhdHVzIHRyYW5zaXRpb24gaXMgYWxsb3dlZFxuICAgICAgY29uc3QgYWxsb3dlZFN0YXR1c2VzID0gZ2V0QWxsb3dlZFN0YXR1c2VzKGN1cnJlbnRBcHAuYXBwbGljYXRpb25UeXBlLCBjdXJyZW50QXBwLnN0YXR1cyk7XG4gICAgICBpZiAoIWFsbG93ZWRTdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpKSB7XG4gICAgICAgIGZhaWxlZC5wdXNoKHtcbiAgICAgICAgICBpZDogYXBwSWQsXG4gICAgICAgICAgcmVhc29uOiBgSW52YWxpZCBzdGF0dXMgdHJhbnNpdGlvbiBmcm9tICR7Y3VycmVudEFwcC5zdGF0dXN9IGZvciAke2N1cnJlbnRBcHAuYXBwbGljYXRpb25UeXBlfSBhcHBsaWNhdGlvbmBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBzdWNjZXNzZnVsSWRzLnB1c2goYXBwSWQpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBzdWNjZXNzZnVsIGFwcGxpY2F0aW9ucyBhbmQgd3JpdGUgYXVkaXQgcmVjb3Jkc1xuICAgIGlmIChzdWNjZXNzZnVsSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSBhcHBsaWNhdGlvbnNcbiAgICAgICAgYXdhaXQgdHguYXBwbGljYXRpb24udXBkYXRlTWFueSh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHsgaW46IHN1Y2Nlc3NmdWxJZHMgfSB9LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c05vdGVzOiBzdGF0dXNOb3RlcyB8fCBudWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdyaXRlIHRvIGFwcGVuZC1vbmx5IEFwcGxpY2F0aW9uQXVkaXQgdGFibGUgZm9yIGVhY2ggdXBkYXRlZCBhcHBsaWNhdGlvblxuICAgICAgICBhd2FpdCB0eC5hcHBsaWNhdGlvbkF1ZGl0LmNyZWF0ZU1hbnkoe1xuICAgICAgICAgIGRhdGE6IHN1Y2Nlc3NmdWxJZHMubWFwKGFwcElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBcHAgPSBhcHBNYXAuZ2V0KGFwcElkKSE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBhcHBsaWNhdGlvbklkOiBhcHBJZCxcbiAgICAgICAgICAgICAgYWN0b3JJZDogdXBkYXRlci5pZCxcbiAgICAgICAgICAgICAgb2xkU3RhdHVzOiBjdXJyZW50QXBwLnN0YXR1cyxcbiAgICAgICAgICAgICAgbmV3U3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgIG5vdGU6IHN0YXR1c05vdGVzIHx8IGBCdWxrIHN0YXR1cyBjaGFuZ2UgZnJvbSAke2N1cnJlbnRBcHAuc3RhdHVzfSB0byAke3N0YXR1c31gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmV2YWxpZGF0ZSBvbiBzdWNjZXNzXG4gICAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hcHBsaWNhdGlvbnNcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9rKHsgb2s6IHN1Y2Nlc3NmdWxJZHMsIGZhaWxlZCB9LCBgVXBkYXRlZCAke3N1Y2Nlc3NmdWxJZHMubGVuZ3RofSBhcHBsaWNhdGlvbiR7c3VjY2Vzc2Z1bElkcy5sZW5ndGggIT09IDEgPyAncycgOiAnJ30gc3VjY2Vzc2Z1bGx5JHtmYWlsZWQubGVuZ3RoID4gMCA/IGAsICR7ZmFpbGVkLmxlbmd0aH0gZmFpbGVkYCA6ICcnfS5gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFpbChlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uSGlzdG9yeShhcHBsaWNhdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPEFwcGxpY2F0aW9uSGlzdG9yeUVudHJ5W10+IHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShbVXNlclJvbGUuQURNSU4sIFVzZXJSb2xlLlNUQUZGXSk7XG5cbiAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHByaXNtYS5hcHBsaWNhdGlvbkF1ZGl0LmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBhcHBsaWNhdGlvbklkIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBpZDogdHJ1ZSxcbiAgICAgIGFwcGxpY2F0aW9uSWQ6IHRydWUsXG4gICAgICBvbGRTdGF0dXM6IHRydWUsXG4gICAgICBuZXdTdGF0dXM6IHRydWUsXG4gICAgICBub3RlOiB0cnVlLFxuICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgYWN0b3I6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIGhpc3RvcnkgYXMgQXBwbGljYXRpb25IaXN0b3J5RW50cnlbXTtcbn1cblxuLy8gU2VydmVyIGFjdGlvbnMgZm9yIHVzZUFjdGlvblN0YXRlIChmb3JtLWJhc2VkKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1bGtBc3NpZ25BcHBsaWNhdGlvbnMoXG4gIHByZXZTdGF0ZTogQWN0aW9uUmVzdWx0LFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShbVXNlclJvbGUuQURNSU4sIFVzZXJSb2xlLlNUQUZGXSk7XG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbklkcyA9IGZvcm1EYXRhLmdldEFsbChcImFwcGxpY2F0aW9uSWRzXCIpLm1hcChpZCA9PiBwYXJzZUludChpZCBhcyBzdHJpbmcpKTtcbiAgICBjb25zdCBzdGFmZklkID0gZm9ybURhdGEuZ2V0KFwic3RhZmZJZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIXN0YWZmSWQgfHwgYXBwbGljYXRpb25JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFpbChcIlN0YWZmIG1lbWJlciBhbmQgYXBwbGljYXRpb25zIGFyZSByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgc3RhZmYgdXNlciBleGlzdHNcbiAgICBjb25zdCBzdGFmZlVzZXIgPSBhd2FpdCBwcmlzbWEucHJvZmlsZS5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBzdGFmZklkIH0sXG4gICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIHJvbGU6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIGlmICghc3RhZmZVc2VyIHx8IChzdGFmZlVzZXIucm9sZSAhPT0gVXNlclJvbGUuU1RBRkYgJiYgc3RhZmZVc2VyLnJvbGUgIT09IFVzZXJSb2xlLkFETUlOKSkge1xuICAgICAgcmV0dXJuIGZhaWwoXCJJbnZhbGlkIHN0YWZmIG1lbWJlciBzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGJ1bGsgdXBkYXRlXG4gICAgY29uc3QgdXBkYXRlUmVzdWx0ID0gYXdhaXQgcHJpc21hLmFwcGxpY2F0aW9uLnVwZGF0ZU1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHsgaW46IGFwcGxpY2F0aW9uSWRzIH0sXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBhc3NpZ25lZFRvVXNlcklkOiBzdGFmZklkLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYXBwbGljYXRpb25zXCIpO1xuXG4gICAgcmV0dXJuIG9rKG51bGwsIGBTdWNjZXNzZnVsbHkgYXNzaWduZWQgJHt1cGRhdGVSZXN1bHQuY291bnR9IGFwcGxpY2F0aW9uKHMpYCk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQnVsayBhc3NpZ24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gZmFpbChlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiRmFpbGVkIHRvIGFzc2lnbiBhcHBsaWNhdGlvbnNcIik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1bGtVcGRhdGVBcHBsaWNhdGlvbnMoXG4gIHByZXZTdGF0ZTogQWN0aW9uUmVzdWx0PHsgZmFpbGVkPzogeyBpZDogbnVtYmVyOyByZWFzb246IHN0cmluZyB9W10gfT4sXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8eyBmYWlsZWQ/OiB7IGlkOiBudW1iZXI7IHJlYXNvbjogc3RyaW5nIH1bXSB9Pj4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoW1VzZXJSb2xlLkFETUlOLCBVc2VyUm9sZS5TVEFGRl0pO1xuXG4gICAgY29uc3QgYXBwbGljYXRpb25JZHMgPSBwYXJzZUFwcGxpY2F0aW9uSWRzKGZvcm1EYXRhKTtcbiAgICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgQXBwU3RhdHVzO1xuICAgIGNvbnN0IHN0YXR1c05vdGVzID0gZm9ybURhdGEuZ2V0KFwic3RhdHVzTm90ZXNcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKGFwcGxpY2F0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhaWwoXCJObyBhcHBsaWNhdGlvbnMgc2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIHJldHVybiBmYWlsKFwiU3RhdHVzIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIEJ1c2luZXNzIHJ1bGU6IG5vdGVzIHJlcXVpcmVkIGZvciBBUFBST1ZFRC9SRUpFQ1RFRC9XSVRIRFJBV05cbiAgICBjb25zdCByZXF1aXJlc05vdGVzOiBBcHBTdGF0dXNbXSA9IFtBcHBTdGF0dXMuQVBQUk9WRUQsIEFwcFN0YXR1cy5SRUpFQ1RFRCwgQXBwU3RhdHVzLldJVEhEUkFXTl07XG4gICAgaWYgKHJlcXVpcmVzTm90ZXMuaW5jbHVkZXMoc3RhdHVzKSAmJiAoIXN0YXR1c05vdGVzIHx8IHN0YXR1c05vdGVzLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICByZXR1cm4gZmFpbChcIlN0YXR1cyBub3RlcyBhcmUgcmVxdWlyZWQgZm9yIHRlcm1pbmFsIHN0YXR1cyBjaGFuZ2VzXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bGtVcGRhdGVBcHBsaWNhdGlvblN0YXR1cyhcbiAgICAgIGFwcGxpY2F0aW9uSWRzLFxuICAgICAgc3RhdHVzLFxuICAgICAgc3RhdHVzTm90ZXM/LnRyaW0oKSB8fCB1bmRlZmluZWRcbiAgICApO1xuXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBzdWNjZXNzQ291bnQgPSByZXN1bHQuZGF0YT8ub2subGVuZ3RoIHx8IDA7XG5cbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FwcGxpY2F0aW9uc1wiKTtcblxuICAgICAgcmV0dXJuIG9rKHsgZmFpbGVkOiByZXN1bHQuZGF0YT8uZmFpbGVkIH0sIGBTdWNjZXNzZnVsbHkgdXBkYXRlZCAke3N1Y2Nlc3NDb3VudH0gYXBwbGljYXRpb24ocylgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhaWwocmVzdWx0Lm1lc3NhZ2UgfHwgXCJCdWxrIHVwZGF0ZSBmYWlsZWRcIik7XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkJ1bGsgdXBkYXRlIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIGZhaWwoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byB1cGRhdGUgYXBwbGljYXRpb25zXCIpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHBvcnRBcHBsaWNhdGlvbnNDU1YoXG4gIHNlYXJjaFBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSxcbiAgbWluaW1hbDogYm9vbGVhblxuKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IHRydWU7IGNzdkRhdGE6IHN0cmluZzsgZmlsZW5hbWU6IHN0cmluZyB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIGNvbnN0IGZpbHRlcnMgPSB7IC4uLnNlYXJjaFBhcmFtcyB9O1xuICAgIGRlbGV0ZSBmaWx0ZXJzLm1pbmltYWw7IC8vIFJlbW92ZSBtaW5pbWFsIHBhcmFtIGZyb20gZmlsdGVyc1xuXG4gICAgY29uc3QgYXBwRGF0YSA9IGF3YWl0IGdldEFsbEFwcGxpY2F0aW9ucyhmaWx0ZXJzKTtcbiAgICBjb25zdCBhcHBsaWNhdGlvbnM6IEFwcGxpY2F0aW9uTGlzdEl0ZW1bXSA9IGFwcERhdGEuYXBwbGljYXRpb25zO1xuXG4gICAgLy8gR3VhcmQgYWdhaW5zdCBleHBvcnRpbmcgaW5zYW5lIGRhdGEgc2V0c1xuICAgIGNvbnN0IE1BWF9FWFBPUlRfUk9XUyA9IDEwMDAwO1xuICAgIGlmIChhcHBsaWNhdGlvbnMubGVuZ3RoID4gTUFYX0VYUE9SVF9ST1dTKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogYEV4cG9ydCB0b28gbGFyZ2U6ICR7YXBwbGljYXRpb25zLmxlbmd0aH0gYXBwbGljYXRpb25zIGZvdW5kLCBtYXhpbXVtIGFsbG93ZWQgaXMgJHtNQVhfRVhQT1JUX1JPV1N9LiBQbGVhc2UgYXBwbHkgZmlsdGVycyB0byByZWR1Y2UgdGhlIGRhdGFzZXQgc2l6ZS5gXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIENTViBkYXRhXG4gICAgbGV0IGNzdkRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W107XG4gICAgbGV0IGNzdkhlYWRlcnM6IHN0cmluZ1tdO1xuXG4gICAgaWYgKG1pbmltYWwpIHtcbiAgICAgIC8vIE1pbmltYWwgZXhwb3J0OiBubyBQSUkgKHBob25lL2FkZHJlc3MpXG4gICAgICBjc3ZEYXRhID0gYXBwbGljYXRpb25zLm1hcChhcHAgPT4gKHtcbiAgICAgICAgaWQ6IGFwcC5pZCxcbiAgICAgICAgc3VibWl0dGVkX2RhdGU6IGFwcC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxuICAgICAgICBuYW1lOiBtaXNzaW5nKGFwcC5hcHBsaWNhbnROYW1lLCAnVW5rbm93bicpLFxuICAgICAgICBlbWFpbDogbWlzc2luZyhhcHAuYXBwbGljYW50RW1haWwsICdVbmtub3duJyksXG4gICAgICAgIHR5cGU6IGFwcC5hcHBsaWNhdGlvblR5cGUsXG4gICAgICAgIHN0YXR1czogYXBwLnN0YXR1cyxcbiAgICAgICAgZG9nX25hbWU6IGFwcC5kb2c/Lm5hbWUgfHwgJycsXG4gICAgICAgIHJlYXNvbjogYXBwLnJlYXNvbixcbiAgICAgIH0pKTtcbiAgICAgIGNzdkhlYWRlcnMgPSBbXG4gICAgICAgICdJRCcsICdTdWJtaXR0ZWQgRGF0ZScsICdOYW1lJywgJ0VtYWlsJywgJ1R5cGUnLCAnU3RhdHVzJyxcbiAgICAgICAgJ0RvZyBOYW1lJywgJ1JlYXNvbidcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZ1bGwgZXhwb3J0IHdpdGggYXZhaWxhYmxlIGZpZWxkc1xuICAgICAgY3N2RGF0YSA9IGFwcGxpY2F0aW9ucy5tYXAoYXBwID0+ICh7XG4gICAgICAgIGlkOiBhcHAuaWQsXG4gICAgICAgIHN1Ym1pdHRlZF9kYXRlOiBhcHAuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgICAgbmFtZTogbWlzc2luZyhhcHAuYXBwbGljYW50TmFtZSwgJ1Vua25vd24nKSxcbiAgICAgICAgZW1haWw6IG1pc3NpbmcoYXBwLmFwcGxpY2FudEVtYWlsLCAnVW5rbm93bicpLFxuICAgICAgICB0eXBlOiBhcHAuYXBwbGljYXRpb25UeXBlLFxuICAgICAgICBzdGF0dXM6IGFwcC5zdGF0dXMsXG4gICAgICAgIGRvZ19uYW1lOiBhcHAuZG9nPy5uYW1lIHx8ICcnLFxuICAgICAgICByZWFzb246IGFwcC5yZWFzb24sXG4gICAgICB9KSk7XG4gICAgICBjc3ZIZWFkZXJzID0gW1xuICAgICAgICAnSUQnLCAnU3VibWl0dGVkIERhdGUnLCAnTmFtZScsICdFbWFpbCcsICdUeXBlJywgJ1N0YXR1cycsXG4gICAgICAgICdEb2cgTmFtZScsICdSZWFzb24nXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IGNzdldpdGhCT00gPSB0b0Nzdihjc3ZEYXRhLCBjc3ZIZWFkZXJzKTtcbiAgICBjb25zdCBmaWxlbmFtZSA9IGBhcHBsaWNhdGlvbnMtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXX0ke21pbmltYWwgPyAnLW1pbmltYWwnIDogJyd9LmNzdmA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGNzdkRhdGE6IGNzdldpdGhCT00sXG4gICAgICBmaWxlbmFtZVxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NWIGV4cG9ydCBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGdlbmVyYXRlIGV4cG9ydCdcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1UQXdUc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplicationStatusEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$7386ed__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:7386ed [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
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
function ApplicationStatusEditor({ application }) {
    _s();
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$7386ed__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateApplicationStatus"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeActionResult"])());
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(application.status);
    // Get available status options based on application type
    const availableStatuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllowedStatuses"])(application.applicationType, application.status);
    // Check if notes are required for the selected status
    const requiresNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areStatusNotesRequired"])(selectedStatus);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                action: formAction,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "hidden",
                        name: "appId",
                        value: application.id
                    }, void 0, false, {
                        fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "status",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                name: "status",
                                defaultValue: application.status,
                                onValueChange: (value)=>setSelectedStatus(value),
                                "data-testid": "select-status",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "w-[180px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: availableStatuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: s,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanizeEnum"])(s)
                                            }, s, false, {
                                                fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "statusNotes",
                                children: [
                                    "Status Change Notes ",
                                    requiresNotes ? "(Required)" : "(Optional)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                id: "statusNotes",
                                name: "statusNotes",
                                placeholder: "Add notes about this status change for audit purposes...",
                                defaultValue: application.statusNotes || "",
                                rows: 3,
                                required: requiresNotes,
                                "data-testid": "textarea-notes"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: state.success,
                        "data-testid": "btn-change-status",
                        children: state.success ? "Status Updated" : "Update Status"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            state.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: state.success ? "text-green-600" : "text-red-500",
                children: state.message
            }, void 0, false, {
                fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/applications/[id]/ApplicationStatusEditor.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(ApplicationStatusEditor, "oXfmFE/i/tPPQb/Z90RSdIxMZI4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = ApplicationStatusEditor;
var _c;
__turbopack_context__.k.register(_c, "ApplicationStatusEditor");
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
]);

//# sourceMappingURL=_b2f62fed._.js.map