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
"[project]/lib/hooks/useDogForm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDogPhotoUpload",
    ()=>useDogPhotoUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDogPhotoUpload({ dog }) {
    _s();
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dog?.primaryPhotoUrl || null);
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDogPhotoUpload.useCallback[handleFileSelect]": (file)=>{
            setSelectedFile(file);
            if (file) {
                const url = URL.createObjectURL(file);
                setPreviewUrl(url);
            } else {
                setPreviewUrl(dog?.primaryPhotoUrl || null);
            }
        }
    }["useDogPhotoUpload.useCallback[handleFileSelect]"], [
        dog?.primaryPhotoUrl
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDogPhotoUpload.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setIsDragOver(true);
        }
    }["useDogPhotoUpload.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDogPhotoUpload.useCallback[handleDragLeave]": (e)=>{
            e.preventDefault();
            setIsDragOver(false);
        }
    }["useDogPhotoUpload.useCallback[handleDragLeave]"], []);
    const clearFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDogPhotoUpload.useCallback[clearFile]": ()=>{
            handleFileSelect(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    }["useDogPhotoUpload.useCallback[clearFile]"], [
        handleFileSelect
    ]);
    const validateFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDogPhotoUpload.useCallback[validateFile]": (file)=>{
            if (file.size > 10 * 1024 * 1024) {
                return "File size must be less than 10MB";
            }
            if (!file.type.startsWith('image/')) {
                return "File must be an image";
            }
            return null; // Valid for basic checks
        }
    }["useDogPhotoUpload.useCallback[validateFile]"], []);
    const handleFileInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDogPhotoUpload.useCallback[handleFileInputChange]": (e)=>{
            const file = e.target.files?.[0] || null;
            if (file) {
                const error = validateFile(file);
                if (error) {
                    alert(error); // Simple error display - could be improved with toast
                    return;
                }
                handleFileSelect(file);
            }
        }
    }["useDogPhotoUpload.useCallback[handleFileInputChange]"], [
        validateFile,
        handleFileSelect
    ]);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDogPhotoUpload.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setIsDragOver(false);
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                const error = validateFile(file);
                if (error) {
                    alert(error); // Simple error display - could be improved with toast
                    return;
                }
                handleFileSelect(file);
            }
        }
    }["useDogPhotoUpload.useCallback[handleDrop]"], [
        validateFile,
        handleFileSelect
    ]);
    return {
        selectedFile,
        previewUrl,
        isDragOver,
        fileInputRef,
        handleFileSelect,
        handleDragOver,
        handleDragLeave,
        clearFile,
        validateFile,
        handleFileInputChange,
        handleDrop
    };
}
_s(useDogPhotoUpload, "21VWtchSwXvN1i8KE8TQZGUmlQw=");
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
"[project]/lib/log.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pino/browser.js [app-client] (ecmascript)");
;
// Configure Pino with production-safe settings
const inEdge = typeof globalThis.EdgeRuntime !== "undefined";
const useTransport = !inEdge && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PINO_TRANSPORT !== "none" && ("TURBOPACK compile-time value", "development") === "production"; // use worker only in prod
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
    level: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.LOG_LEVEL ?? "info",
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
        hostname: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HOSTNAME || "unknown"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/image-loader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/image-loader.ts
// Custom Next.js Image loader with telemetry for domain validation
__turbopack_context__.s([
    "default",
    ()=>imageLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/log.ts [app-client] (ecmascript)");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$log$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metrics"].unknownImageHostRejection(hostname, 'image-loader');
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/DogFormPhotoUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DogFormPhotoUpload",
    ()=>DogFormPhotoUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
;
function DogFormPhotoUpload({ dog, selectedFile, previewUrl, isDragOver, fileInputRef, handleDragOver, handleDragLeave, handleDrop, handleFileInputChange, clearFile }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                children: [
                    dog ? 'Replace' : 'Add',
                    " Primary Photo"
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            previewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative inline-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: previewUrl,
                        alt: dog ? `Current photo of ${dog.name}` : "Photo preview",
                        width: 150,
                        height: 150,
                        className: "rounded-md object-cover border"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearFile,
                        className: "absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                className: `border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragOver ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'}`,
                onClick: ()=>fileInputRef.current?.click(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        className: "h-8 w-8 mx-auto mb-2 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: isDragOver ? 'Drop image here' : 'Drag & drop an image here, or click to select'
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: "PNG, JPG up to 10MB"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                name: "file",
                accept: "image/*",
                onChange: handleFileInputChange,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-green-600",
                children: [
                    "Selected: ",
                    selectedFile.name,
                    " (",
                    (selectedFile.size / 1024 / 1024).toFixed(1),
                    "MB)"
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            !dog && !selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "Upload a photo for this new dog."
            }, void 0, false, {
                fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            dog && !selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "Upload a new file to replace the current photo."
            }, void 0, false, {
                fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/DogFormPhotoUpload.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = DogFormPhotoUpload;
var _c;
__turbopack_context__.k.register(_c, "DogFormPhotoUpload");
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
"[project]/components/ui/form-error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/form-error.tsx
__turbopack_context__.s([
    "FormError",
    ()=>FormError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function FormError({ error }) {
    if (!error) return null;
    const errorMessage = Array.isArray(error) ? error.join(", ") : error;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500 text-sm mt-1 motion-reduce:animate-none animate-shake",
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
    }, void 0, false, {
        fileName: "[project]/components/ui/form-error.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = FormError;
var _c;
__turbopack_context__.k.register(_c, "FormError");
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
"[project]/components/admin/DogCoreFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/admin/DogCoreFields.tsx
__turbopack_context__.s([
    "DogCoreFields",
    ()=>DogCoreFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form-error.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function DogCoreFields({ dog, state }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "name",
                        children: "Name"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "name",
                        name: "name",
                        "data-testid": "input-dog-name",
                        placeholder: "Dog's name",
                        defaultValue: dog?.name || "",
                        required: true,
                        maxLength: 50
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                        error: state?.fieldErrors?.name
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogCoreFields.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "breed",
                        children: "Breed"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        name: "breed",
                        defaultValue: dog?.breed || "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                "data-testid": "select-breed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "Select a breed"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/DogCoreFields.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/DogCoreFields.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Mixed Breed",
                                        children: "Mixed Breed"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Golden Retriever",
                                        children: "Golden Retriever"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Labrador Retriever",
                                        children: "Labrador Retriever"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "German Shepherd",
                                        children: "German Shepherd"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Chihuahua",
                                        children: "Chihuahua"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Poodle",
                                        children: "Poodle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Bulldog",
                                        children: "Bulldog"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Beagle",
                                        children: "Beagle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Rottweiler",
                                        children: "Rottweiler"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "Siberian Husky",
                                        children: "Siberian Husky"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/DogCoreFields.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                        error: state?.fieldErrors?.breed
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogCoreFields.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "dateOfBirth",
                        children: "Date of Birth"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "dateOfBirth",
                        name: "dateOfBirth",
                        type: "date",
                        "data-testid": "input-dateOfBirth",
                        placeholder: "Date of birth",
                        defaultValue: dog?.dateOfBirth ? new Date(dog.dateOfBirth).toISOString().split('T')[0] : ""
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                        error: state?.fieldErrors?.dateOfBirth
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogCoreFields.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "gender",
                        children: "Gender"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        name: "gender",
                        defaultValue: dog?.gender || "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                "data-testid": "select-gender",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "Select gender"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/DogCoreFields.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/DogCoreFields.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gender"]).map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: g,
                                        children: g
                                    }, g, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/admin/DogCoreFields.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                        error: state?.fieldErrors?.gender
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogCoreFields.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "size",
                        children: "Size"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        name: "size",
                        defaultValue: dog?.size || "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                "data-testid": "select-size",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "Select size"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/DogCoreFields.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/DogCoreFields.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogSize"]).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: s,
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/admin/DogCoreFields.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                        error: state?.fieldErrors?.size
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogCoreFields.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "weight_lbs",
                        children: "Weight (lbs)"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "weight_lbs",
                        name: "weight_lbs",
                        type: "number",
                        step: "0.1",
                        "data-testid": "input-weight",
                        placeholder: "Weight in pounds",
                        defaultValue: dog?.weight_lbs || ""
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                        error: state?.fieldErrors?.weight_lbs
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogCoreFields.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "status",
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        name: "status",
                        defaultValue: dog?.status || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogStatus"].INTAKE,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                "data-testid": "select-status",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "Select a status"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/DogCoreFields.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/DogCoreFields.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogStatus"]).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: s,
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/admin/DogCoreFields.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                        error: state?.fieldErrors?.status
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogCoreFields.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogCoreFields.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = DogCoreFields;
var _c;
__turbopack_context__.k.register(_c, "DogCoreFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/DogFosterAssignmentFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/admin/DogFosterAssignmentFields.tsx
__turbopack_context__.s([
    "DogFosterAssignmentFields",
    ()=>DogFosterAssignmentFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form-error.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function DogFosterAssignmentFields({ dog, potentialFosters, state }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "fosterProfileId",
                children: "Foster Parent"
            }, void 0, false, {
                fileName: "[project]/components/admin/DogFosterAssignmentFields.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                name: "fosterProfileId",
                defaultValue: dog?.fosterProfileId ?? "",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                        id: "fosterProfileId",
                        "data-testid": "select-foster",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                            placeholder: "Select a foster parent (optional)"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/DogFosterAssignmentFields.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogFosterAssignmentFields.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                        children: potentialFosters.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: profile.id,
                                children: profile.name || profile.email
                            }, profile.id, false, {
                                fileName: "[project]/components/admin/DogFosterAssignmentFields.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogFosterAssignmentFields.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogFosterAssignmentFields.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                error: state?.fieldErrors?.fosterProfileId
            }, void 0, false, {
                fileName: "[project]/components/admin/DogFosterAssignmentFields.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/DogFosterAssignmentFields.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = DogFosterAssignmentFields;
var _c;
__turbopack_context__.k.register(_c, "DogFosterAssignmentFields");
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
"[project]/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/DogPublicFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/admin/DogPublicFields.tsx
__turbopack_context__.s([
    "DogPublicFields",
    ()=>DogPublicFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form-error.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function DogPublicFields({ dog, state }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-start space-x-3 space-y-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                        id: "specialNeeds",
                        name: "specialNeeds",
                        defaultChecked: dog?.specialNeeds || false
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogPublicFields.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 leading-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "specialNeeds",
                            children: "Special Needs"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/DogPublicFields.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogPublicFields.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogPublicFields.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                error: state?.fieldErrors?.specialNeeds
            }, void 0, false, {
                fileName: "[project]/components/admin/DogPublicFields.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "bioPublic",
                        children: "Public Bio"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogPublicFields.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        id: "bioPublic",
                        name: "bioPublic",
                        "data-testid": "textarea-bio",
                        placeholder: "Write the public-facing description here...",
                        className: "min-h-[100px]",
                        defaultValue: dog?.bioPublic || ""
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogPublicFields.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                        error: state?.fieldErrors?.bioPublic
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DogPublicFields.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DogPublicFields.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = DogPublicFields;
var _c;
__turbopack_context__.k.register(_c, "DogPublicFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/DogInternalFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/admin/DogInternalFields.tsx
__turbopack_context__.s([
    "DogInternalFields",
    ()=>DogInternalFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form-error.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function DogInternalFields({ dog, state }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "notesInternal",
                children: "Internal Notes (Staff Only)"
            }, void 0, false, {
                fileName: "[project]/components/admin/DogInternalFields.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                id: "notesInternal",
                name: "notesInternal",
                placeholder: "Temperament, medical notes, intake history...",
                className: "min-h-[100px]",
                defaultValue: dog?.notesInternal || ""
            }, void 0, false, {
                fileName: "[project]/components/admin/DogInternalFields.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2d$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormError"], {
                error: state?.fieldErrors?.notesInternal
            }, void 0, false, {
                fileName: "[project]/components/admin/DogInternalFields.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/DogInternalFields.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = DogInternalFields;
var _c;
__turbopack_context__.k.register(_c, "DogInternalFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/DogForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/admin/DogForm.tsx
__turbopack_context__.s([
    "default",
    ()=>DogForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useDogForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/useDogForm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogFormPhotoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/DogFormPhotoUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogCoreFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/DogCoreFields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogFosterAssignmentFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/DogFosterAssignmentFields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogPublicFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/DogPublicFields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogInternalFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/DogInternalFields.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function SubmitButton({ isEditing }) {
    _s();
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        type: "submit",
        className: "w-full",
        disabled: pending,
        "data-testid": isEditing ? "btn-save-changes" : "btn-submit-dog",
        children: pending ? isEditing ? "Updating..." : "Creating..." : isEditing ? "Update Dog" : "Create Dog"
    }, void 0, false, {
        fileName: "[project]/components/admin/DogForm.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(SubmitButton, "ChN3pfldoIBH4a0f1nBGB7ED+p0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStatus"]
    ];
});
_c = SubmitButton;
function DogForm({ dog, potentialFosters = [], formAction, state = {
    success: false,
    message: null,
    fieldErrors: undefined
} }) {
    _s1();
    const { selectedFile, previewUrl, isDragOver, fileInputRef, handleDragOver, handleDragLeave, clearFile, handleFileInputChange, handleDrop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useDogForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDogPhotoUpload"])({
        dog
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: formAction,
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogFormPhotoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogFormPhotoUpload"], {
                dog: dog,
                selectedFile: selectedFile,
                previewUrl: previewUrl,
                isDragOver: isDragOver,
                fileInputRef: fileInputRef,
                handleDragOver: handleDragOver,
                handleDragLeave: handleDragLeave,
                handleDrop: handleDrop,
                handleFileInputChange: handleFileInputChange,
                clearFile: clearFile
            }, void 0, false, {
                fileName: "[project]/components/admin/DogForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogCoreFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogCoreFields"], {
                dog: dog,
                state: state
            }, void 0, false, {
                fileName: "[project]/components/admin/DogForm.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogFosterAssignmentFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogFosterAssignmentFields"], {
                dog: dog,
                potentialFosters: potentialFosters,
                state: state
            }, void 0, false, {
                fileName: "[project]/components/admin/DogForm.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogPublicFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogPublicFields"], {
                dog: dog,
                state: state
            }, void 0, false, {
                fileName: "[project]/components/admin/DogForm.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogInternalFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DogInternalFields"], {
                dog: dog,
                state: state
            }, void 0, false, {
                fileName: "[project]/components/admin/DogForm.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {
                isEditing: !!dog
            }, void 0, false, {
                fileName: "[project]/components/admin/DogForm.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            state.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-sm mt-2 ${state.success ? 'text-green-500' : 'text-red-500'}`,
                children: state.message
            }, void 0, false, {
                fileName: "[project]/components/admin/DogForm.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/DogForm.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s1(DogForm, "9PJglNT3G9BcfyIpZch77Mm7pfc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useDogForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDogPhotoUpload"]
    ];
});
_c1 = DogForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "SubmitButton");
__turbopack_context__.k.register(_c1, "DogForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:cd333c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40fc9b3430fa18ec08c7b11c01dade07f8ea8fad1a":"createDog"},"lib/actions/dog.actions.ts",""] */ __turbopack_context__.s([
    "createDog",
    ()=>createDog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createDog = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40fc9b3430fa18ec08c7b11c01dade07f8ea8fad1a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createDog"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9nLmFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2FjdGlvbnMvZG9nLmFjdGlvbnMudHNcblwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IERvZywgRG9nU3RhdHVzLCBHZW5kZXIsIERvZ1NpemUsIFByaXNtYSwgQXVkaXRBY3Rpb24gfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIjtcbmltcG9ydCB7IGFzc2VydFJvbGUgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9wcm9maWxlLmFjdGlvbnNcIjtcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFnZSB9IGZyb20gXCJAL2xpYi91dGlscy9kb2ctdXRpbHNcIjtcbmltcG9ydCB7IGRvZ0Zvcm1TY2hlbWEgfSBmcm9tIFwiQC9saWIvc2NoZW1hc1wiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHdpdGhBdWRpdCwgZ2V0Q3VycmVudFVzZXJJZCwgY2FwdHVyZUF1ZGl0U3RhdGUgfSBmcm9tIFwiLi9hdWRpdC5hY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRNZWRpY2FsUmVjb3JkcywgZ2V0TWVkaWNhbERvY3VtZW50cyB9IGZyb20gXCIuL21lZGljYWwuYWN0aW9uc1wiO1xuaW1wb3J0IHsgRk9TVEVSX0ZJTFRFUl9WQUxVRVMgfSBmcm9tIFwiQC9saWIvZG9nLWZpbHRlcnNcIjtcblxuY29uc3QgZGVsZXRlRG9nU2NoZW1hID0gei5vYmplY3Qoe1xuICBkb2dJZDogei5jb2VyY2UubnVtYmVyKCkuaW50KCkucG9zaXRpdmUoeyBtZXNzYWdlOiBcIkludmFsaWQgZG9nIElEXCIgfSksXG4gIHJlYXNvbjogei5zdHJpbmcoKS5taW4oMTAsIHsgbWVzc2FnZTogXCJSZWFzb24gbXVzdCBiZSBhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzIGxvbmdcIiB9KS5tYXgoMTAwMCwgeyBtZXNzYWdlOiBcIlJlYXNvbiBtdXN0IGJlIGxlc3MgdGhhbiAxMDAwIGNoYXJhY3RlcnNcIiB9KSxcbn0pO1xuXG5jb25zdCB1cGxvYWRJbWFnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZG9nSWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKHsgbWVzc2FnZTogXCJJbnZhbGlkIGRvZyBJRFwiIH0pLFxuICAvLyBGaWxlIHZhbGlkYXRpb24gd2lsbCBiZSBoYW5kbGVkIHNlcGFyYXRlbHkgYWZ0ZXIgZG9nSWQgdmFsaWRhdGlvblxufSk7XG5cbmNvbnN0IGdldEFsbERvZ3NTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigxKS5vcHRpb25hbCgpLmRlZmF1bHQoMSksXG4gIGxpbWl0OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5taW4oMSkubWF4KDEwMCkub3B0aW9uYWwoKS5kZWZhdWx0KDEwKSxcbiAgc3RhdHVzOiB6LmVudW0oW1wiYWxsXCIsIC4uLk9iamVjdC52YWx1ZXMoRG9nU3RhdHVzKV0pLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgZm9zdGVyUHJvZmlsZUlkOiB6LmVudW0oW0ZPU1RFUl9GSUxURVJfVkFMVUVTLkFMTCwgRk9TVEVSX0ZJTFRFUl9WQUxVRVMuTk9ORV0pLm9yKHouc3RyaW5nKCkpLm9wdGlvbmFsKCkuZGVmYXVsdChGT1NURVJfRklMVEVSX1ZBTFVFUy5BTEwpLCAvLyBQcm9maWxlIElEIChzdHJpbmcpIG9yIFwibm9uZVwiXG4gIGJyZWVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgZ2VuZGVyOiB6LmVudW0oW1wiYWxsXCIsIC4uLk9iamVjdC52YWx1ZXMoR2VuZGVyKV0pLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgc2l6ZTogei5lbnVtKFtcImFsbFwiLCAuLi5PYmplY3QudmFsdWVzKERvZ1NpemUpXSkub3B0aW9uYWwoKS5kZWZhdWx0KFwiYWxsXCIpLFxuICB3ZWlnaHRNaW46IHouc3RyaW5nKCkucmVnZXgoL15cXGQqJC8sIHsgbWVzc2FnZTogXCJXZWlnaHQgbXVzdCBiZSBhIG51bWJlclwiIH0pLm9wdGlvbmFsKCksXG4gIHdlaWdodE1heDogei5zdHJpbmcoKS5yZWdleCgvXlxcZCokLywgeyBtZXNzYWdlOiBcIldlaWdodCBtdXN0IGJlIGEgbnVtYmVyXCIgfSkub3B0aW9uYWwoKSxcbiAgc3BlY2lhbE5lZWRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgaGFzUGhvdG9zOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVmYXVsdChcImFsbFwiKSxcbiAgc29ydEZpZWxkOiB6LmVudW0oW1wibmFtZVwiLCBcInN0YXR1c1wiLCBcImJyZWVkXCJdKS5vcHRpb25hbCgpLmRlZmF1bHQoXCJuYW1lXCIpLFxuICBzb3J0RGlyZWN0aW9uOiB6LmVudW0oW1wiYXNjXCIsIFwiZGVzY1wiXSkub3B0aW9uYWwoKS5kZWZhdWx0KFwiYXNjXCIpLFxufSk7XG5cbi8vIFNoYXJlZCBwaG90byB1cGxvYWQgZnVuY3Rpb25cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZERvZ1Bob3RvKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xuICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICBjb25zdCBzYW5pdGl6ZWRGaWxlTmFtZSA9IGZpbGUubmFtZS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbiAgY29uc3Qgc3RvcmFnZVBhdGggPSBgZG9nLSR7dGltZXN0YW1wfS0ke3Nhbml0aXplZEZpbGVOYW1lfWA7XG5cbiAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAuZnJvbShcImRvZy1waG90b3NcIilcbiAgICAudXBsb2FkKHN0b3JhZ2VQYXRoLCBmaWxlLCB7XG4gICAgICB1cHNlcnQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gIGlmICh1cGxvYWRFcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmFnZSBFcnJvcjogJHt1cGxvYWRFcnJvci5tZXNzYWdlfWApO1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiB1cmxEYXRhIH0gPSBzdXBhYmFzZS5zdG9yYWdlXG4gICAgLmZyb20oXCJkb2ctcGhvdG9zXCIpXG4gICAgLmdldFB1YmxpY1VybChzdG9yYWdlUGF0aCk7XG5cbiAgY29uc3QgcHVibGljVXJsID0gdXJsRGF0YS5wdWJsaWNVcmw7XG4gIGlmICghcHVibGljVXJsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGdlbmVyYXRlIHB1YmxpYyBVUkwgZm9yIHVwbG9hZGVkIHBob3RvXCIpO1xuICB9XG5cbiAgcmV0dXJuIHB1YmxpY1VybDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURvZyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdDxEb2c+IHwgbmV2ZXI+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IGRvZ0Zvcm1TY2hlbWEuc2FmZVBhcnNlKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdGF0dXMsXG4gICAgICBicmVlZCxcbiAgICAgIGRhdGVPZkJpcnRoLFxuICAgICAgYmlvUHVibGljLFxuICAgICAgbm90ZXNJbnRlcm5hbCxcbiAgICAgIGZvc3RlclByb2ZpbGVJZCxcbiAgICAgIHNwZWNpYWxOZWVkcyxcbiAgICB9ID0gcGFyc2VkLmRhdGE7XG5cbiAgICBjb25zdCBmaW5hbFN0YXR1cyA9IHN0YXR1cyA/PyBEb2dTdGF0dXMuSU5UQUtFO1xuXG4gICAgLy8gSGFuZGxlIHByaW1hcnkgcGhvdG8gdXBsb2FkIGlmIHByb3ZpZGVkXG4gICAgbGV0IHByaW1hcnlQaG90b1VybCA9IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzMwMC8yMDA/cmFuZG9tPTFcIjsgLy8gRGVmYXVsdCBwbGFjZWhvbGRlclxuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJmaWxlXCIpO1xuXG4gICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBGaWxlICYmIGZpbGUuc2l6ZSA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByaW1hcnlQaG90b1VybCA9IGF3YWl0IHVwbG9hZERvZ1Bob3RvKGZpbGUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gRm9yIG5vdywgd2UnbGwgY29udGludWUgd2l0aCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBpZiB1cGxvYWQgZmFpbHNcbiAgICAgICAgLy8gSW4gcHJvZHVjdGlvbiwgeW91IG1pZ2h0IHdhbnQgdG8gcmV0dXJuIGFuIGVycm9yIGluc3RlYWRcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGxvYWQgZG9nIHBob3RvOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLmRvZy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXM6IGZpbmFsU3RhdHVzLFxuICAgICAgICBicmVlZCxcbiAgICAgICAgZGF0ZU9mQmlydGgsXG4gICAgICAgIGJpb1B1YmxpYyxcbiAgICAgICAgbm90ZXNJbnRlcm5hbCxcbiAgICAgICAgc3BlY2lhbE5lZWRzLFxuICAgICAgICBmb3N0ZXJQcm9maWxlSWQ6IGZpbmFsU3RhdHVzID09PSBEb2dTdGF0dXMuSU5fRk9TVEVSID8gZm9zdGVyUHJvZmlsZUlkIDogbnVsbCxcbiAgICAgICAgcHJpbWFyeVBob3RvVXJsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2RvZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRvcHRcIik7XG4gICAgcmVkaXJlY3QoXCIvYWRtaW4vZG9nc1wiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC5cIixcbiAgICAgIGZpZWxkRXJyb3JzOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURvZyhkb2dJZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldEN1cnJlbnRVc2VySWQoKTtcblxuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlIHwgbnVsbDtcbiAgICBsZXQgbmV3UGhvdG9Vcmw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld1Bob3RvVXJsID0gYXdhaXQgdXBsb2FkRG9nUGhvdG8oZmlsZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gdXBsb2FkIHBob3RvXCIsXG4gICAgICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IGRvZ0Zvcm1TY2hlbWEuc2FmZVBhcnNlKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpKTtcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgZmllbGRFcnJvcnMsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdGF0dXMsXG4gICAgICBicmVlZCxcbiAgICAgIGRhdGVPZkJpcnRoLFxuICAgICAgYmlvUHVibGljLFxuICAgICAgbm90ZXNJbnRlcm5hbCxcbiAgICAgIGZvc3RlclByb2ZpbGVJZCxcbiAgICAgIHNwZWNpYWxOZWVkcyxcbiAgICB9ID0gcGFyc2VkLmRhdGE7XG5cbiAgICBjb25zdCBmaW5hbFN0YXR1cyA9IHN0YXR1cyA/PyBEb2dTdGF0dXMuSU5UQUtFO1xuXG4gICAgLy8gQ2FwdHVyZSBiZWZvcmUgc3RhdGUgZm9yIGF1ZGl0XG4gICAgY29uc3QgYmVmb3JlU3RhdGUgPSBhd2FpdCBjYXB0dXJlQXVkaXRTdGF0ZSgnZG9nJywgZG9nSWQpO1xuXG4gICAgY29uc3QgdXBkYXRlRGF0YToge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgc3RhdHVzOiBEb2dTdGF0dXM7XG4gICAgICBicmVlZDogc3RyaW5nIHwgbnVsbDtcbiAgICAgIGRhdGVPZkJpcnRoOiBEYXRlIHwgbnVsbDtcbiAgICAgIGJpb1B1YmxpYzogc3RyaW5nIHwgbnVsbDtcbiAgICAgIG5vdGVzSW50ZXJuYWw6IHN0cmluZyB8IG51bGw7XG4gICAgICBzcGVjaWFsTmVlZHM6IGJvb2xlYW47XG4gICAgICBmb3N0ZXJQcm9maWxlSWQ6IHN0cmluZyB8IG51bGw7XG4gICAgICBwcmltYXJ5UGhvdG9Vcmw/OiBzdHJpbmc7XG4gICAgfSA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdGF0dXM6IGZpbmFsU3RhdHVzLFxuICAgICAgYnJlZWQsXG4gICAgICBkYXRlT2ZCaXJ0aCxcbiAgICAgIGJpb1B1YmxpYyxcbiAgICAgIG5vdGVzSW50ZXJuYWwsXG4gICAgICBzcGVjaWFsTmVlZHMsXG4gICAgICBmb3N0ZXJQcm9maWxlSWQ6IGZpbmFsU3RhdHVzID09PSBEb2dTdGF0dXMuSU5fRk9TVEVSID8gZm9zdGVyUHJvZmlsZUlkIDogbnVsbCxcbiAgICB9O1xuXG4gICAgaWYgKG5ld1Bob3RvVXJsKSB7XG4gICAgICB1cGRhdGVEYXRhLnByaW1hcnlQaG90b1VybCA9IG5ld1Bob3RvVXJsO1xuICAgIH1cblxuICAgIGF3YWl0IHdpdGhBdWRpdChcbiAgICAgIFwidXBkYXRlRG9nXCIsXG4gICAgICB1c2VySWQsXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWREb2cgPSBhd2FpdCBwcmlzbWEuZG9nLnVwZGF0ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IGRvZ0lkIH0sXG4gICAgICAgICAgZGF0YTogdXBkYXRlRGF0YSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW5cIik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vZWRpdC1kb2cvJHtkb2dJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRvcHRcIik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvYWRvcHQvJHtkb2dJZH1gKTtcblxuICAgICAgICByZXR1cm4gdXBkYXRlZERvZztcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFjdGlvbjogQXVkaXRBY3Rpb24uRE9HX0VESVQsXG4gICAgICAgIGVudGl0eVR5cGU6ICdkb2cnLFxuICAgICAgICBlbnRpdHlJZDogZG9nSWQsXG4gICAgICAgIGJlZm9yZTogYmVmb3JlU3RhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBhZnRlcjogYmVmb3JlU3RhdGUgPyB7IC4uLmJlZm9yZVN0YXRlLCAuLi51cGRhdGVEYXRhIH0gOiB1bmRlZmluZWQsXG4gICAgICAgIG5vdGU6IGBVcGRhdGVkIGRvZzogJHtuYW1lfWAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJEb2cgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLlwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkQW5kU2V0RG9nSW1hZ2UocHJldlN0YXRlOiB7IG1lc3NhZ2U6IHN0cmluZyB8IG51bGw7IG5ld0ltYWdlVXJsOiBzdHJpbmcgfCBudWxsIH0sIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICB0cnkge1xuICAgIGF3YWl0IGFzc2VydFJvbGUoVXNlclJvbGUuU1RBRkYpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJOb3QgYXV0aG9yaXplZFwiLCBuZXdJbWFnZVVybDogbnVsbCB9O1xuICB9XG5cbiAgY29uc3QgcGFyc2VkID0gdXBsb2FkSW1hZ2VTY2hlbWEuc2FmZVBhcnNlKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpKTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IHBhcnNlZC5lcnJvci5pc3N1ZXMubWFwKGlzc3VlID0+IGAke2lzc3VlLnBhdGguam9pbignLicpfTogJHtpc3N1ZS5tZXNzYWdlfWApLmpvaW4oJywgJyksIG5ld0ltYWdlVXJsOiBudWxsIH07XG4gIH1cblxuICBjb25zdCB7IGRvZ0lkIH0gPSBwYXJzZWQuZGF0YTtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIikgYXMgRmlsZTtcbiAgaWYgKCFmaWxlIHx8IGZpbGUuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTm8gZmlsZSBwcm92aWRlZC5cIiwgbmV3SW1hZ2VVcmw6IG51bGwgfTtcbiAgfVxuXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG4gIGNvbnN0IGZpbGVQYXRoID0gYGRvZ3MvJHtkb2dJZH0tJHtmaWxlLm5hbWV9LSR7RGF0ZS5ub3coKX1gO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwiaW1hZ2VzXCIpIC8vIEJVQ0tFVCBOQU1FIC0gWU9VIE1VU1QgQ1JFQVRFIFRISVMgSU4gU1VQQUJBU0VcbiAgICAgIC51cGxvYWQoZmlsZVBhdGgsIGZpbGUpO1xuXG4gICAgaWYgKHVwbG9hZEVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JhZ2UgRXJyb3I6ICR7dXBsb2FkRXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgIC5mcm9tKFwiaW1hZ2VzXCIpXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcblxuICAgIGlmICghcHVibGljVXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZ2V0IHB1YmxpYyBVUkwuXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5kb2cudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBkb2dJZCB9LFxuICAgICAgZGF0YTogeyBwcmltYXJ5UGhvdG9Vcmw6IHB1YmxpY1VybCB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW5cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9lZGl0LWRvZy8ke2RvZ0lkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Fkb3B0XCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRvcHQvJHtkb2dJZH1gKTtcblxuICAgIHJldHVybiB7IG1lc3NhZ2U6IG51bGwsIG5ld0ltYWdlVXJsOiBwdWJsaWNVcmwgfTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVwbG9hZCBmYWlsZWQuXCIsIG5ld0ltYWdlVXJsOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURvZyhkb2dJZDogbnVtYmVyLCByZWFzb246IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG4gICAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0Q3VycmVudFVzZXJJZCgpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gZGVsZXRlRG9nU2NoZW1hLnNhZmVQYXJzZSh7IGRvZ0lkLCByZWFzb24gfSk7XG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSBwYXJzZWQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgIGZpZWxkRXJyb3JzLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDYXB0dXJlIGJlZm9yZSBzdGF0ZSBmb3IgYXVkaXRcbiAgICBjb25zdCBiZWZvcmVTdGF0ZSA9IGF3YWl0IGNhcHR1cmVBdWRpdFN0YXRlKCdkb2cnLCBwYXJzZWQuZGF0YS5kb2dJZCk7XG5cbiAgICBhd2FpdCB3aXRoQXVkaXQoXG4gICAgICBcImRlbGV0ZURvZ1wiLFxuICAgICAgdXNlcklkLFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBwcmlzbWEuZG9nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBwYXJzZWQuZGF0YS5kb2dJZCB9IH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9kb2dzXCIpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9hZG9wdFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhY3Rpb246IEF1ZGl0QWN0aW9uLkRPR19FRElULFxuICAgICAgICBlbnRpdHlUeXBlOiAnZG9nJyxcbiAgICAgICAgZW50aXR5SWQ6IHBhcnNlZC5kYXRhLmRvZ0lkLFxuICAgICAgICBiZWZvcmU6IGJlZm9yZVN0YXRlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgYWZ0ZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgbm90ZTogYERlbGV0ZWQgZG9nLiBSZWFzb246ICR7cGFyc2VkLmRhdGEucmVhc29ufWAsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJEb2cgZGVsZXRlZCBzdWNjZXNzZnVsbHkhIFJlZGlyZWN0aW5nLi4uXCIsXG4gICAgICBmaWVsZEVycm9yczogdW5kZWZpbmVkLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLlwiLFxuICAgICAgZmllbGRFcnJvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9nQnlJZChpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHBhcnNlZCA9IHoub2JqZWN0KHsgaWQ6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKCkgfSkuc2FmZVBhcnNlKHsgaWQgfSk7XG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRvZyBJRFwiKTtcbiAgfVxuXG4gIGNvbnN0IGRvZyA9IGF3YWl0IHByaXNtYS5kb2cuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBmb3N0ZXJQcm9maWxlOiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHByb2ZpbGVJZDogdHJ1ZSxcbiAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghZG9nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRG9nIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICBjb25zdCBpc1NlbmlvciA9IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpID8gY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkhID49IDggOiBmYWxzZTtcbiAgY29uc3QgaGFzUGhvdG9zID0gZG9nLnByaW1hcnlQaG90b1VybCA/ICFkb2cucHJpbWFyeVBob3RvVXJsLmluY2x1ZGVzKCdwbGFjZWhvbGRlcicpIDogZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5kb2csXG4gICAgaXNTZW5pb3IsIC8vIFJ1bnRpbWUgcHJvcGVydHlcbiAgICBoYXNQaG90b3MsIC8vIFJ1bnRpbWUgcHJvcGVydHlcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERvZ3Moc2VhcmNoUGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSkge1xuICBhd2FpdCBhc3NlcnRSb2xlKFVzZXJSb2xlLlNUQUZGKTtcblxuICBjb25zdCBwYXJzZWQgPSBnZXRBbGxEb2dzU2NoZW1hLnNhZmVQYXJzZShzZWFyY2hQYXJhbXMgfHwge30pO1xuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzZWFyY2ggcGFyYW1ldGVyc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHsgcGFnZSwgbGltaXQgfSA9IHBhcnNlZC5kYXRhO1xuICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXQ7XG5cbiAgLy8gQnVpbGQgd2hlcmUgY2xhdXNlIGZvciBmaWx0ZXJpbmdcbiAgY29uc3Qgd2hlcmU6IFByaXNtYS5Eb2dXaGVyZUlucHV0ID0ge307XG5cbiAgaWYgKHBhcnNlZC5kYXRhLnN0YXR1cyAmJiBwYXJzZWQuZGF0YS5zdGF0dXMgIT09IFwiYWxsXCIpIHtcbiAgICB3aGVyZS5zdGF0dXMgPSBwYXJzZWQuZGF0YS5zdGF0dXM7XG4gIH1cblxuICBpZiAocGFyc2VkLmRhdGEuZm9zdGVyUHJvZmlsZUlkICYmIHBhcnNlZC5kYXRhLmZvc3RlclByb2ZpbGVJZCAhPT0gRk9TVEVSX0ZJTFRFUl9WQUxVRVMuQUxMKSB7XG4gICAgaWYgKHBhcnNlZC5kYXRhLmZvc3RlclByb2ZpbGVJZCA9PT0gRk9TVEVSX0ZJTFRFUl9WQUxVRVMuTk9ORSkge1xuICAgICAgLy8gRmlsdGVyIGZvciBkb2dzIHdpdGggbm8gZm9zdGVyIGFzc2lnbmVkXG4gICAgICB3aGVyZS5mb3N0ZXJQcm9maWxlSWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaWx0ZXIgZm9yIHNwZWNpZmljIGZvc3RlclxuICAgICAgd2hlcmUuZm9zdGVyUHJvZmlsZUlkID0gcGFyc2VkLmRhdGEuZm9zdGVyUHJvZmlsZUlkO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZWQuZGF0YS5icmVlZCAmJiBwYXJzZWQuZGF0YS5icmVlZCAhPT0gXCJhbGxcIiAmJiBwYXJzZWQuZGF0YS5icmVlZCAhPT0gXCJcIikge1xuICAgIHdoZXJlLmJyZWVkID0ge1xuICAgICAgY29udGFpbnM6IHBhcnNlZC5kYXRhLmJyZWVkLFxuICAgICAgbW9kZTogJ2luc2Vuc2l0aXZlJyBhcyBjb25zdCxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcnNlZC5kYXRhLmdlbmRlciAmJiBwYXJzZWQuZGF0YS5nZW5kZXIgIT09IFwiYWxsXCIpIHtcbiAgICB3aGVyZS5nZW5kZXIgPSBwYXJzZWQuZGF0YS5nZW5kZXI7XG4gIH1cblxuICBpZiAocGFyc2VkLmRhdGEuc2l6ZSAmJiBwYXJzZWQuZGF0YS5zaXplICE9PSBcImFsbFwiKSB7XG4gICAgd2hlcmUuc2l6ZSA9IHBhcnNlZC5kYXRhLnNpemU7XG4gIH1cblxuICBpZiAocGFyc2VkLmRhdGEud2VpZ2h0TWluICYmIHBhcnNlZC5kYXRhLndlaWdodE1pbiAhPT0gXCJcIikge1xuICAgIGNvbnN0IHdlaWdodE1pbiA9IHBhcnNlSW50KHBhcnNlZC5kYXRhLndlaWdodE1pbiwgMTApO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHdlaWdodE1pbikpIHtcbiAgICAgIHdoZXJlLndlaWdodF9sYnMgPSB7IGd0ZTogd2VpZ2h0TWluIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlZC5kYXRhLndlaWdodE1heCAmJiBwYXJzZWQuZGF0YS53ZWlnaHRNYXggIT09IFwiXCIpIHtcbiAgICBjb25zdCB3ZWlnaHRNYXggPSBwYXJzZUludChwYXJzZWQuZGF0YS53ZWlnaHRNYXgsIDEwKTtcbiAgICBpZiAoIU51bWJlci5pc05hTih3ZWlnaHRNYXgpKSB7XG4gICAgICB3aGVyZS53ZWlnaHRfbGJzID0gd2hlcmUud2VpZ2h0X2xicyA/IHsgLi4uKHdoZXJlLndlaWdodF9sYnMgYXMgb2JqZWN0KSwgbHRlOiB3ZWlnaHRNYXggfSA6IHsgbHRlOiB3ZWlnaHRNYXggfTtcbiAgICB9XG4gIH1cblxuXG4gIGlmIChwYXJzZWQuZGF0YS5zcGVjaWFsTmVlZHMgJiYgcGFyc2VkLmRhdGEuc3BlY2lhbE5lZWRzICE9PSBcImFsbFwiKSB7XG4gICAgd2hlcmUuc3BlY2lhbE5lZWRzID0gcGFyc2VkLmRhdGEuc3BlY2lhbE5lZWRzID09PSBcInRydWVcIjtcbiAgfVxuXG4gIGlmIChwYXJzZWQuZGF0YS5oYXNQaG90b3MgJiYgcGFyc2VkLmRhdGEuaGFzUGhvdG9zICE9PSBcImFsbFwiKSB7XG4gICAgaWYgKHBhcnNlZC5kYXRhLmhhc1Bob3RvcyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHdoZXJlLnByaW1hcnlQaG90b1VybCA9IHsgbm90OiBudWxsIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoZXJlLnByaW1hcnlQaG90b1VybCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gQnVpbGQgb3JkZXJCeSBjbGF1c2UgZm9yIHNvcnRpbmdcbiAgY29uc3Qgb3JkZXJCeTogUHJpc21hLkRvZ09yZGVyQnlXaXRoUmVsYXRpb25JbnB1dCA9IHt9O1xuICBjb25zdCBzb3J0RmllbGQgPSBwYXJzZWQuZGF0YS5zb3J0RmllbGQ7XG4gIGNvbnN0IHNvcnREaXJlY3Rpb24gPSBwYXJzZWQuZGF0YS5zb3J0RGlyZWN0aW9uO1xuXG4gIHN3aXRjaCAoc29ydEZpZWxkKSB7XG4gICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgIG9yZGVyQnkubmFtZSA9IHNvcnREaXJlY3Rpb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3RhdHVzXCI6XG4gICAgICBvcmRlckJ5LnN0YXR1cyA9IHNvcnREaXJlY3Rpb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYnJlZWRcIjpcbiAgICAgIG9yZGVyQnkuYnJlZWQgPSBzb3J0RGlyZWN0aW9uO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG9yZGVyQnkubmFtZSA9IFwiYXNjXCI7XG4gIH1cblxuICBjb25zdCBbZG9ncywgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgICB3aGVyZSxcbiAgICAgIG9yZGVyQnksXG4gICAgICBza2lwOiBvZmZzZXQsXG4gICAgICB0YWtlOiBsaW1pdCxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgbXV0dF9pZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgYnJlZWQ6IHRydWUsXG4gICAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIHByaW1hcnlQaG90b1VybDogdHJ1ZSxcbiAgICAgICAgZ2VuZGVyOiB0cnVlLFxuICAgICAgICB3ZWlnaHRfbGJzOiB0cnVlLFxuICAgICAgICBzaXplOiB0cnVlLFxuICAgICAgICBzcGVjaWFsTmVlZHM6IHRydWUsXG4gICAgICAgIGJpb1B1YmxpYzogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICBmb3N0ZXJQcm9maWxlOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHByaXNtYS5kb2cuY291bnQoeyB3aGVyZSB9KSxcbiAgXSk7XG5cbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gbGltaXQpO1xuXG4gIC8vIEZsYXR0ZW4gZm9zdGVyIHByb2ZpbGUgZGF0YSBhbmQgY29tcHV0ZSBkZXJpdmVkIGZpZWxkc1xuICBjb25zdCBkb2dzV2l0aEZsYXR0ZW5lZEZvc3RlciA9IGRvZ3MubWFwKGRvZyA9PiAoe1xuICAgIC4uLmRvZyxcbiAgICBmb3N0ZXJQcm9maWxlOiBkb2cuZm9zdGVyUHJvZmlsZSA/IHtcbiAgICAgIC4uLmRvZy5mb3N0ZXJQcm9maWxlLFxuICAgICAgbmFtZTogZG9nLmZvc3RlclByb2ZpbGUucHJvZmlsZT8ubmFtZSxcbiAgICAgIGVtYWlsOiBkb2cuZm9zdGVyUHJvZmlsZS5wcm9maWxlPy5lbWFpbCxcbiAgICB9IDogbnVsbCxcbiAgICAvLyBDb21wdXRlIGRlcml2ZWQgdmFsdWVzIG9uIHRoZSBmbHlcbiAgICBpc1NlbmlvcjogY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkgPyBjYWxjdWxhdGVBZ2UoZG9nLmRhdGVPZkJpcnRoKSEgPj0gOCA6IGZhbHNlLFxuICAgIGhhc1Bob3RvczogZG9nLnByaW1hcnlQaG90b1VybCA/ICFkb2cucHJpbWFyeVBob3RvVXJsLmluY2x1ZGVzKCdwbGFjZWhvbGRlcicpIDogZmFsc2UsXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIGRvZ3M6IGRvZ3NXaXRoRmxhdHRlbmVkRm9zdGVyLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGN1cnJlbnRQYWdlOiBwYWdlLFxuICAgICAgdG90YWxQYWdlcyxcbiAgICAgIHRvdGFsQ291bnQsXG4gICAgICBoYXNOZXh0UGFnZTogcGFnZSA8IHRvdGFsUGFnZXMsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IHBhZ2UgPiAxLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIERvZ0ZpbHRlcnMgPSB7XG4gIGJyZWVkPzogc3RyaW5nO1xuICBzcGVjaWFsTmVlZHM/OiBzdHJpbmc7XG4gIHNpemU/OiBzdHJpbmc7XG4gIGdlbmRlcj86IHN0cmluZztcbiAgaGFzUGhvdG9zPzogc3RyaW5nO1xufTtcblxuY29uc3QgY29lcmNlQm9vbGVhbiA9ICh2YWx1ZT86IHN0cmluZykgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgaWYgKHZhbHVlID09PSBcInRydWVcIikgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9ncyh7IHBhZ2UgPSAxLCBwYWdlU2l6ZSA9IDEyIH06IHsgcGFnZT86IG51bWJlcjsgcGFnZVNpemU/OiBudW1iZXIgfSA9IHt9KSB7XG4gIGNvbnN0IHRha2UgPSBwYWdlU2l6ZTtcbiAgY29uc3Qgc2tpcCA9IChNYXRoLm1heCgxLCBwYWdlKSAtIDEpICogdGFrZTtcblxuICBjb25zdCB3aGVyZTogUHJpc21hLkRvZ1doZXJlSW5wdXQgPSB7XG4gICAgc3RhdHVzOiBEb2dTdGF0dXMuQVZBSUxBQkxFLFxuICB9O1xuXG4gIGNvbnN0IFtkb2dzLCB0b3RhbF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgICB3aGVyZSxcbiAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgeyBwcmltYXJ5UGhvdG9Vcmw6ICdkZXNjJyB9LCAvLyBQaG90b3MgZmlyc3RcbiAgICAgICAgeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCAvLyBUaGVuIGJ5IHJlY2VuY3lcbiAgICAgIF0sXG4gICAgICB0YWtlLFxuICAgICAgc2tpcCxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgYnJlZWQ6IHRydWUsXG4gICAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgICBiaW9QdWJsaWM6IHRydWUsXG4gICAgICAgIHNwZWNpYWxOZWVkczogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeVBob3RvVXJsOiB0cnVlLFxuICAgICAgICBnZW5kZXI6IHRydWUsXG4gICAgICAgIHdlaWdodF9sYnM6IHRydWUsXG4gICAgICAgIHNpemU6IHRydWUsXG4gICAgICAgIG11dHRfaWQ6IHRydWUsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcmlzbWEuZG9nLmNvdW50KHsgd2hlcmUgfSksXG4gIF0pO1xuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICBjb25zdCBkb2dzV2l0aERlcml2ZWQgPSBkb2dzLm1hcChkb2cgPT4gKHtcbiAgICAuLi5kb2csXG4gICAgaXNTZW5pb3I6IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpID8gY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkhID49IDggOiBmYWxzZSxcbiAgICBoYXNQaG90b3M6IGRvZy5wcmltYXJ5UGhvdG9VcmwgPyAhZG9nLnByaW1hcnlQaG90b1VybC5pbmNsdWRlcygncGxhY2Vob2xkZXInKSA6IGZhbHNlLFxuICB9KSk7XG5cbiAgcmV0dXJuIHsgZG9nczogZG9nc1dpdGhEZXJpdmVkLCB0b3RhbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlRG9ncyh7IHBhZ2UgPSAxLCBmaWx0ZXJzID0ge30gfTogeyBwYWdlPzogbnVtYmVyOyBmaWx0ZXJzPzogRG9nRmlsdGVycyB9ID0ge30pIHtcbiAgY29uc3QgdGFrZSA9IDEyO1xuICBjb25zdCBza2lwID0gKE1hdGgubWF4KDEsIHBhZ2UpIC0gMSkgKiB0YWtlO1xuXG4gIGNvbnN0IHdoZXJlOiBQcmlzbWEuRG9nV2hlcmVJbnB1dCA9IHtcbiAgICBzdGF0dXM6IERvZ1N0YXR1cy5BVkFJTEFCTEUsXG4gIH07XG5cbiAgaWYgKGZpbHRlcnMuYnJlZWQpIHtcbiAgICB3aGVyZS5icmVlZCA9IHtcbiAgICAgIGNvbnRhaW5zOiBmaWx0ZXJzLmJyZWVkLFxuICAgICAgbW9kZTogXCJpbnNlbnNpdGl2ZVwiLFxuICAgIH07XG4gIH1cblxuICBpZiAoZmlsdGVycy5zaXplKSB7XG4gICAgd2hlcmUuc2l6ZSA9IGZpbHRlcnMuc2l6ZSBhcyBEb2dTaXplO1xuICB9XG5cbiAgaWYgKGZpbHRlcnMuZ2VuZGVyKSB7XG4gICAgd2hlcmUuZ2VuZGVyID0gZmlsdGVycy5nZW5kZXIgYXMgR2VuZGVyO1xuICB9XG5cblxuICBjb25zdCBzcGVjaWFsTmVlZHNGaWx0ZXIgPSBjb2VyY2VCb29sZWFuKGZpbHRlcnMuc3BlY2lhbE5lZWRzKTtcbiAgaWYgKHNwZWNpYWxOZWVkc0ZpbHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgd2hlcmUuc3BlY2lhbE5lZWRzID0gc3BlY2lhbE5lZWRzRmlsdGVyO1xuICB9XG5cblxuICBjb25zdCBbZG9ncywgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgICB3aGVyZSxcbiAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgeyBwcmltYXJ5UGhvdG9Vcmw6ICdkZXNjJyB9LCAvLyBQaG90b3MgZmlyc3RcbiAgICAgICAgeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCAvLyBUaGVuIGJ5IHJlY2VuY3lcbiAgICAgIF0sXG4gICAgICB0YWtlLFxuICAgICAgc2tpcCxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgYnJlZWQ6IHRydWUsXG4gICAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgICBiaW9QdWJsaWM6IHRydWUsXG4gICAgICAgIHNwZWNpYWxOZWVkczogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeVBob3RvVXJsOiB0cnVlLFxuICAgICAgICBnZW5kZXI6IHRydWUsXG4gICAgICAgIHdlaWdodF9sYnM6IHRydWUsXG4gICAgICAgIHNpemU6IHRydWUsXG4gICAgICAgIG11dHRfaWQ6IHRydWUsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcmlzbWEuZG9nLmNvdW50KHsgd2hlcmUgfSksXG4gIF0pO1xuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICBjb25zdCBkb2dzV2l0aERlcml2ZWQgPSBkb2dzLm1hcChkb2cgPT4gKHtcbiAgICAuLi5kb2csXG4gICAgaXNTZW5pb3I6IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpID8gY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkhID49IDggOiBmYWxzZSxcbiAgICBoYXNQaG90b3M6IGRvZy5wcmltYXJ5UGhvdG9VcmwgPyAhZG9nLnByaW1hcnlQaG90b1VybC5pbmNsdWRlcygncGxhY2Vob2xkZXInKSA6IGZhbHNlLFxuICB9KSk7XG5cbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gdGFrZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkb2dzOiBkb2dzV2l0aERlcml2ZWQsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgcGFnZSxcbiAgICAgIGxpbWl0OiB0YWtlLFxuICAgICAgdG90YWxDb3VudCxcbiAgICAgIHRvdGFsUGFnZXMsXG4gICAgICBoYXNOZXh0UGFnZTogcGFnZSA8IHRvdGFsUGFnZXMsXG4gICAgICBoYXNQcmV2UGFnZTogcGFnZSA+IDEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNoZWx0ZXJEb2dzKCkge1xuICBjb25zdCBkb2dzID0gYXdhaXQgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czoge1xuICAgICAgICBub3Q6IFwiQURPUFRFRFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIGNyZWF0ZWRBdDogXCJkZXNjXCIsXG4gICAgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGlkOiB0cnVlLFxuICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgIGJyZWVkOiB0cnVlLFxuICAgICAgZGF0ZU9mQmlydGg6IHRydWUsXG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgICBwcmltYXJ5UGhvdG9Vcmw6IHRydWUsXG4gICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gQ29tcHV0ZSBkZXJpdmVkIHZhbHVlcyBvbiB0aGUgZmx5XG4gIHJldHVybiBkb2dzLm1hcChkb2cgPT4gKHtcbiAgICAuLi5kb2csXG4gICAgaXNTZW5pb3I6IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpID8gY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkhID49IDggOiBmYWxzZSxcbiAgICBoYXNQaG90b3M6IGRvZy5wcmltYXJ5UGhvdG9VcmwgPyAhZG9nLnByaW1hcnlQaG90b1VybC5pbmNsdWRlcygncGxhY2Vob2xkZXInKSA6IGZhbHNlLFxuICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3RlbnRpYWxGb3N0ZXJzKCkge1xuICBjb25zdCBmb3N0ZXJQcm9maWxlcyA9IGF3YWl0IHByaXNtYS5mb3N0ZXJQcm9maWxlLmZpbmRNYW55KHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIHByb2ZpbGVJZDogdHJ1ZSxcbiAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb3JkZXJCeTogW1xuICAgICAge1xuICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgbmFtZTogXCJhc2NcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICBlbWFpbDogXCJhc2NcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgcmV0dXJuIGZvc3RlclByb2ZpbGVzXG4gICAgLmZpbHRlcigoZnApID0+IGZwLnByb2ZpbGUpXG4gICAgLm1hcCgoZnApID0+ICh7XG4gICAgICBpZDogZnAucHJvZmlsZUlkLFxuICAgICAgbmFtZTogZnAucHJvZmlsZT8ubmFtZSA/PyBudWxsLFxuICAgICAgZW1haWw6IGZwLnByb2ZpbGU/LmVtYWlsID8/IFwiXCIsXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VW5pcXVlQnJlZWRzKCkge1xuICBjb25zdCBicmVlZHMgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBicmVlZDogeyBub3Q6IG51bGwgfSB9LFxuICAgIHNlbGVjdDogeyBicmVlZDogdHJ1ZSB9LFxuICAgIGRpc3RpbmN0OiBbJ2JyZWVkJ10sXG4gICAgb3JkZXJCeTogeyBicmVlZDogJ2FzYycgfSxcbiAgfSk7XG4gIHJldHVybiBbLi4ubmV3IFNldChicmVlZHMubWFwKChiKSA9PiBiLmJyZWVkISkuZmlsdGVyKEJvb2xlYW4pKV07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVbmlxdWVTdGF0dXNlcygpIHtcbiAgY29uc3Qgc3RhdHVzZXMgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRNYW55KHtcbiAgICBzZWxlY3Q6IHsgc3RhdHVzOiB0cnVlIH0sXG4gICAgZGlzdGluY3Q6IFsnc3RhdHVzJ10sXG4gIH0pO1xuICByZXR1cm4gWy4uLm5ldyBTZXQoc3RhdHVzZXMubWFwKChzKSA9PiBzLnN0YXR1cykpXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVuaXF1ZUdlbmRlcnMoKSB7XG4gIGNvbnN0IGdlbmRlcnMgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRNYW55KHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICB9LFxuICAgIGRpc3RpbmN0OiBbXCJnZW5kZXJcIl0sXG4gICAgb3JkZXJCeToge1xuICAgICAgZ2VuZGVyOiBcImFzY1wiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBnZW5kZXJzXG4gICAgLm1hcCgoZW50cnkpID0+IGVudHJ5LmdlbmRlcilcbiAgICAuZmlsdGVyKChnZW5kZXIpOiBnZW5kZXIgaXMgR2VuZGVyID0+IGdlbmRlciAhPT0gbnVsbCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVbmlxdWVTaXplcygpIHtcbiAgY29uc3Qgc2l6ZXMgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRNYW55KHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIHNpemU6IHRydWUsXG4gICAgfSxcbiAgICBkaXN0aW5jdDogW1wic2l6ZVwiXSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICBzaXplOiBcImFzY1wiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzaXplc1xuICAgIC5tYXAoKGVudHJ5KSA9PiBlbnRyeS5zaXplKVxuICAgIC5maWx0ZXIoKHNpemUpOiBzaXplIGlzIERvZ1NpemUgPT4gc2l6ZSAhPT0gbnVsbCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWxhdGVkRG9ncyhkb2dJZDogbnVtYmVyLCBsaW1pdCA9IDQpIHtcbiAgLy8gRmlyc3QgZ2V0IHRoZSBjdXJyZW50IGRvZydzIHNpemUgYW5kIGRhdGVPZkJpcnRoXG4gIGNvbnN0IGN1cnJlbnREb2cgPSBhd2FpdCBwcmlzbWEuZG9nLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBkb2dJZCB9LFxuICAgIHNlbGVjdDogeyBzaXplOiB0cnVlLCBkYXRlT2ZCaXJ0aDogdHJ1ZSB9LFxuICB9KTtcblxuICBpZiAoIWN1cnJlbnREb2cpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBDYWxjdWxhdGUgY3VycmVudCBkb2cncyBhZ2VcbiAgY29uc3QgY3VycmVudEFnZSA9IGN1cnJlbnREb2cuZGF0ZU9mQmlydGggPyBjYWxjdWxhdGVBZ2UoY3VycmVudERvZy5kYXRlT2ZCaXJ0aCkgOiBudWxsO1xuXG4gIC8vIEdldCBkb2dzIHdpdGggc2FtZSBzaXplIGFuZCBzaW1pbGFyIGFnZSAowrEyIHllYXJzKSwgZXhjbHVkaW5nIGN1cnJlbnQgZG9nXG4gIC8vIENvbnZlcnQgYWdlIHJhbmdlIHRvIGRhdGUgcmFuZ2U6IGlmIGN1cnJlbnQgZG9nIGlzIFggeWVhcnMgb2xkLCBmaW5kIGRvZ3MgYm9ybiB3aXRoaW4gwrEyIHllYXJzIG9mIHRoYXQgYWdlXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGFnZU1pbiA9IE1hdGgubWF4KDAsIChjdXJyZW50QWdlIHx8IDApIC0gMik7XG4gIGNvbnN0IGFnZU1heCA9IChjdXJyZW50QWdlIHx8IDApICsgMjtcblxuICAvLyBDb252ZXJ0IGFnZSByYW5nZSB0byBkYXRlIHJhbmdlIChvbGRlciBkb2dzIGhhdmUgZWFybGllciBiaXJ0aCBkYXRlcylcbiAgY29uc3QgZGF0ZU1heCA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSBhZ2VNaW4gKiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgY29uc3QgZGF0ZU1pbiA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSBhZ2VNYXggKiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICBjb25zdCBkb2dzID0gYXdhaXQgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIEFORDogW1xuICAgICAgICB7IGlkOiB7IG5vdDogZG9nSWQgfSB9LFxuICAgICAgICB7IHN0YXR1czogRG9nU3RhdHVzLkFWQUlMQUJMRSB9LFxuICAgICAgICB7IHNpemU6IGN1cnJlbnREb2cuc2l6ZSB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0ZU9mQmlydGg6IHtcbiAgICAgICAgICAgIGd0ZTogZGF0ZU1pbixcbiAgICAgICAgICAgIGx0ZTogZGF0ZU1heCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IFtcbiAgICAgIHsgcHJpbWFyeVBob3RvVXJsOiAnZGVzYycgfSwgLy8gUGhvdG9zIGZpcnN0XG4gICAgICB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sIC8vIFRoZW4gYnkgcmVjZW5jeVxuICAgIF0sXG4gICAgdGFrZTogbGltaXQsXG4gICAgc2VsZWN0OiB7XG4gICAgICBpZDogdHJ1ZSxcbiAgICAgIG5hbWU6IHRydWUsXG4gICAgICBicmVlZDogdHJ1ZSxcbiAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgYmlvUHVibGljOiB0cnVlLFxuICAgICAgc3BlY2lhbE5lZWRzOiB0cnVlLFxuICAgICAgcHJpbWFyeVBob3RvVXJsOiB0cnVlLFxuICAgICAgZ2VuZGVyOiB0cnVlLFxuICAgICAgc2l6ZTogdHJ1ZSxcbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcbiAgICB9LFxuICB9KTtcblxuICAvLyBDb21wdXRlIGRlcml2ZWQgdmFsdWVzIG9uIHRoZSBmbHlcbiAgcmV0dXJuIGRvZ3MubWFwKGRvZyA9PiAoe1xuICAgIC4uLmRvZyxcbiAgICBpc1NlbmlvcjogY2FsY3VsYXRlQWdlKGRvZy5kYXRlT2ZCaXJ0aCkgPyBjYWxjdWxhdGVBZ2UoZG9nLmRhdGVPZkJpcnRoKSEgPj0gOCA6IGZhbHNlLFxuICAgIGhhc1Bob3RvczogZG9nLnByaW1hcnlQaG90b1VybCA/ICFkb2cucHJpbWFyeVBob3RvVXJsLmluY2x1ZGVzKCdwbGFjZWhvbGRlcicpIDogZmFsc2UsXG4gIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkb3B0ZWREb2dzKCkge1xuICBjb25zdCBkb2dzID0gYXdhaXQgcHJpc21hLmRvZy5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHN0YXR1czogRG9nU3RhdHVzLkFET1BURUQsXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICB1cGRhdGVkQXQ6IFwiZGVzY1wiLFxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBpZDogdHJ1ZSxcbiAgICAgIG5hbWU6IHRydWUsXG4gICAgICBicmVlZDogdHJ1ZSxcbiAgICAgIGRhdGVPZkJpcnRoOiB0cnVlLFxuICAgICAgYmlvUHVibGljOiB0cnVlLFxuICAgICAgc3BlY2lhbE5lZWRzOiB0cnVlLFxuICAgICAgcHJpbWFyeVBob3RvVXJsOiB0cnVlLFxuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgdXBkYXRlZEF0OiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICByZXR1cm4gZG9ncy5tYXAoZG9nID0+ICh7XG4gICAgLi4uZG9nLFxuICAgIGlzU2VuaW9yOiBjYWxjdWxhdGVBZ2UoZG9nLmRhdGVPZkJpcnRoKSA/IGNhbGN1bGF0ZUFnZShkb2cuZGF0ZU9mQmlydGgpISA+PSA4IDogZmFsc2UsXG4gICAgaGFzUGhvdG9zOiBkb2cucHJpbWFyeVBob3RvVXJsID8gIWRvZy5wcmltYXJ5UGhvdG9VcmwuaW5jbHVkZXMoJ3BsYWNlaG9sZGVyJykgOiBmYWxzZSxcbiAgfSkpO1xufVxuXG4vKipcbiAqIENhbm9uaWNhbCBmdW5jdGlvbiBmb3IgZmV0Y2hpbmcgYSBkb2cgd2l0aCBhbGwgaXRzIG1lZGljYWwgY29udGV4dC5cbiAqIFJldHVybnMgYSBjb25zaXN0ZW50IHNoYXBlIGZvciBib3RoIGRvZyBkZXRhaWwgcGFnZXMgYW5kIG1lZGljYWwtc3BlY2lmaWMgcGFnZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2dNZWRpY2FsQnVuZGxlKGRvZ0lkOiBudW1iZXIsIHBhZ2U6IG51bWJlciA9IDEpIHtcbiAgYXdhaXQgYXNzZXJ0Um9sZShVc2VyUm9sZS5TVEFGRik7XG5cbiAgY29uc3QgcGFyc2VkID0gei5vYmplY3Qoe1xuICAgIGRvZ0lkOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLFxuICAgIHBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigxKVxuICB9KS5zYWZlUGFyc2UoeyBkb2dJZCwgcGFnZSB9KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZG9nIElEXCIpO1xuICB9XG5cbiAgY29uc3QgW2RvZ0RldGFpbHMsIG1lZGljYWxSZWNvcmRzLCBtZWRpY2FsRG9jdW1lbnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBwcmlzbWEuZG9nLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGRvZ0lkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGZvc3RlclByb2ZpbGU6IHtcbiAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBwcm9maWxlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGdldE1lZGljYWxSZWNvcmRzKGRvZ0lkLCBwYWdlKSxcbiAgICBnZXRNZWRpY2FsRG9jdW1lbnRzKGRvZ0lkKSxcbiAgXSk7XG5cbiAgaWYgKCFkb2dEZXRhaWxzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRG9nIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgb24gdGhlIGZseVxuICBjb25zdCBpc1NlbmlvciA9IGNhbGN1bGF0ZUFnZShkb2dEZXRhaWxzLmRhdGVPZkJpcnRoKSA/IGNhbGN1bGF0ZUFnZShkb2dEZXRhaWxzLmRhdGVPZkJpcnRoKSEgPj0gOCA6IGZhbHNlO1xuICBjb25zdCBoYXNQaG90b3MgPSBkb2dEZXRhaWxzLnByaW1hcnlQaG90b1VybCA/ICFkb2dEZXRhaWxzLnByaW1hcnlQaG90b1VybC5pbmNsdWRlcygncGxhY2Vob2xkZXInKSA6IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgZG9nOiB7XG4gICAgICAuLi5kb2dEZXRhaWxzLFxuICAgICAgaXNTZW5pb3IsIC8vIFJ1bnRpbWUgcHJvcGVydHlcbiAgICAgIGhhc1Bob3RvcywgLy8gUnVudGltZSBwcm9wZXJ0eVxuICAgIH0sXG4gICAgbWVkaWNhbFJlY29yZHMsXG4gICAgbWVkaWNhbERvY3VtZW50cyxcbiAgfTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgZ2V0RG9nTWVkaWNhbEJ1bmRsZSBpbnN0ZWFkIGZvciBjb25zaXN0ZW50IG1lZGljYWwgZGF0YSBmZXRjaGluZ1xuICogRmV0Y2hlcyBhIHNpbmdsZSBkb2cgYW5kIGl0cyByZWxhdGVkIGRhdGEgZm9yIHRoZSBhZG1pbiBkZXRhaWwgcGFnZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvZ0RldGFpbHNCeUlkKGRvZ0lkOiBudW1iZXIpIHtcbiAgY29uc3QgYnVuZGxlID0gYXdhaXQgZ2V0RG9nTWVkaWNhbEJ1bmRsZShkb2dJZCwgMSk7XG4gIHJldHVybiB7IGRvZzogYnVuZGxlLmRvZywgbWVkaWNhbFJlY29yZHM6IGJ1bmRsZS5tZWRpY2FsUmVjb3JkcyB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UkF5RXNCIn0=
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
"[project]/components/ui/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
function Toast({ message, type, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            const timer = setTimeout(onClose, 5000); // Auto close after 5 seconds
            return ({
                "Toast.useEffect": ()=>clearTimeout(timer)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": type === "success" ? "toast-success" : "toast-error",
        role: "status",
        "aria-live": "polite",
        className: `fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-md shadow-lg ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "sm",
                onClick: onClose,
                className: "h-auto p-1 hover:bg-white/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
function useToast() {
    _s1();
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (message, type)=>{
        setToast({
            message,
            type
        });
    };
    const hideToast = ()=>{
        setToast(null);
    };
    const ToastComponent = ()=>toast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
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
_s1(useToast, "F97EANJWsnaAE0wHKn9qNrF71cE=");
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/add-dog/AddDogForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddDogForm",
    ()=>AddDogForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/DogForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$cd333c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:cd333c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AddDogForm({ potentialFosters }) {
    _s();
    const { showToast, ToastComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])({
        "AddDogForm.useActionState": async (state, formData)=>{
            // NO client validation here.
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$cd333c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createDog"])(formData); // Call action directly.
            if (!result.success) {
                showToast(result.message || "Failed to create dog.", "error");
            }
            return result;
        }
    }["AddDogForm.useActionState"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeActionResult"])());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastComponent, {}, void 0, false, {
                fileName: "[project]/app/admin/add-dog/AddDogForm.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$DogForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                potentialFosters: potentialFosters,
                formAction: formAction,
                state: state
            }, void 0, false, {
                fileName: "[project]/app/admin/add-dog/AddDogForm.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AddDogForm, "ur2Tcw2zvQegYg3JydzsAn+GJaM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = AddDogForm;
var _c;
__turbopack_context__.k.register(_c, "AddDogForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3823b692._.js.map