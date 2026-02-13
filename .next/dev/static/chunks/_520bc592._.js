(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/shared/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SmoothScrollProvider = ({ children })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const previousPathnameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    const isInitialRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScrollProvider.useEffect": ()=>{
            // Only scroll to top if pathname actually changed (navigation), not on initial render or reload
            if (!isInitialRender.current && previousPathnameRef.current !== pathname) {
                lenis?.scrollTo(0, {
                    immediate: true
                });
            }
            // Update refs
            previousPathnameRef.current = pathname;
            isInitialRender.current = false;
        }
    }["SmoothScrollProvider.useEffect"], [
        pathname,
        searchParams,
        lenis
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScrollProvider.useEffect": ()=>{
            if (!lenis) {
                return;
            }
            const handleClick = {
                "SmoothScrollProvider.useEffect.handleClick": (ele)=>{
                    lenis.scrollTo(ele.getAttribute('href') ?? '', {
                        offset: -100
                    });
                }
            }["SmoothScrollProvider.useEffect.handleClick"];
            const elements = document.querySelectorAll('.lenis-scroll-to');
            const clickHandler = {
                "SmoothScrollProvider.useEffect.clickHandler": (e)=>handleClick(e.target)
            }["SmoothScrollProvider.useEffect.clickHandler"];
            elements.forEach({
                "SmoothScrollProvider.useEffect": (ele)=>{
                    ele.addEventListener('click', clickHandler);
                }
            }["SmoothScrollProvider.useEffect"]);
            return ({
                "SmoothScrollProvider.useEffect": ()=>{
                    elements.forEach({
                        "SmoothScrollProvider.useEffect": (ele)=>{
                            ele.removeEventListener('click', clickHandler);
                        }
                    }["SmoothScrollProvider.useEffect"]);
                }
            })["SmoothScrollProvider.useEffect"];
        }
    }["SmoothScrollProvider.useEffect"], [
        lenis,
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: {
            duration: 1.1
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/shared/SmoothScroll.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SmoothScrollProvider, "UN8XfrwxNuWMgzZrNlu+UnbWkVc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c = SmoothScrollProvider;
const __TURBOPACK__default__export__ = SmoothScrollProvider;
var _c;
__turbopack_context__.k.register(_c, "SmoothScrollProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/shared/ThemeProvider.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/demo-showcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DemoShowcase({ activeDemoId }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [demoShowcaseList, setDemoShowcaseList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoShowcase.useEffect": ()=>{
            const fetchDemoList = {
                "DemoShowcase.useEffect.fetchDemoList": async ()=>{
                    try {
                        setIsLoading(true);
                        const response = await fetch('https://nextsaas-api.vercel.app/api/nextjs-demo');
                        if (!response.ok) {
                            throw new Error('Failed to fetch demo list');
                        }
                        const data = await response.json();
                        setDemoShowcaseList(data);
                        setError(null);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : 'An error occurred');
                    // Error is handled via setError state
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["DemoShowcase.useEffect.fetchDemoList"];
            fetchDemoList();
        }
    }["DemoShowcase.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoShowcase.useEffect": ()=>{
            if (globalThis.window !== undefined) {
                if (isOpen) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            }
            // Cleanup on unmount
            return ({
                "DemoShowcase.useEffect": ()=>{
                    if (globalThis.window !== undefined) {
                        document.body.style.overflow = 'auto';
                    }
                }
            })["DemoShowcase.useEffect"];
        }
    }["DemoShowcase.useEffect"], [
        isOpen
    ]);
    const handleOpen = ()=>{
        setIsOpen(true);
    };
    const handleClose = ()=>{
        setIsOpen(false);
    };
    const getCardClassName = (href, id)=>{
        const isActive = id === activeDemoId;
        return `demo-card block border cursor-pointer transition-all duration-300 ease-in-out max-w-[500px] mx-auto rounded-[36px] p-2 ${isActive ? 'border-primary-500 border-2' : 'border-stroke-3 group hover:border-primary-400'}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    writingMode: 'sideways-lr',
                    textOrientation: 'mixed'
                },
                onClick: handleOpen,
                className: "text-accent text-tagline-1 fixed right-0 bottom-1/2 z-[99999] flex translate-y-1/2 cursor-pointer items-center gap-4 rounded-l-xl bg-[#DE4A40] pt-4 pb-1 font-medium sm:pr-1 sm:pl-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "44",
                            height: "44",
                            viewBox: "0 0 44 44",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10 44C4.47715 44 0 39.5228 0 34L0 0L44 0L44 44L10 44Z",
                                    fill: "#1A1A1C",
                                    fillOpacity: "0.1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M16.1728 24.1932L14 21.9995L16.1728 19.8059L18.3456 21.9995L16.1728 24.1932Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M23.2157 12.6936L25.3886 10.5L27.5614 12.6936L25.3886 14.8873L23.2157 12.6936Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M19.2456 27.2955L17.0728 25.1018L19.2456 22.9082L21.4184 25.1018L19.2456 27.2955Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20.1429 15.7959L22.3157 13.6023L24.4885 15.7959L22.3157 17.9895L20.1429 15.7959Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M22.3184 30.3977L20.1456 28.2041L22.3184 26.0105L24.4912 28.2041L22.3184 30.3977Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M17.0701 18.8982L19.2429 16.7045L21.4157 18.8982L19.2429 21.0918L17.0701 18.8982Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M25.3912 33.5L23.2184 31.3064L25.3912 29.1127L27.564 31.3064L25.3912 33.5Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20.1429 22.0005L22.3157 19.8068L24.4885 22.0005L22.3157 24.1941L20.1429 22.0005Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M25.6544 22.0005L27.8272 19.8068L30 22.0005L27.8272 24.1941L25.6544 22.0005Z",
                                    fill: "#F5F5F7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/demo-showcase.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/demo-showcase.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            ' ',
                            demoShowcaseList.length > 0 ? `${demoShowcaseList.length}+ Pre built demos` : '38+ Pre built demos'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/demo-showcase.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/demo-showcase.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 z-[99999] h-screen w-full origin-center transition-[transform,opacity,filter] duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-[transform,opacity,filter] backface-hidden ${isOpen ? 'opacity-100 blur-none' : 'opacity-0 blur-[22px]'}`,
                style: {
                    transform: isOpen ? 'translateX(0) scale(1) rotateY(0deg)' : 'translateX(100%) scale(0.65) rotateY(20deg)'
                },
                "data-lenis-prevent": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "bg-secondary fixed top-5 right-5 z-[999999] flex cursor-pointer items-center justify-center rounded-[80px] border-6 border-white p-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.15)] lg:top-10 lg:right-10 lg:border-8 lg:p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "stroke-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18 6 6 18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m6 6 12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/demo-showcase.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/demo-showcase.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-background-12 fixed top-0 left-0 h-screen w-full overflow-y-auto pt-14 pb-16",
                        style: {
                            touchAction: 'pan-y',
                            WebkitOverflowScrolling: 'touch',
                            overscrollBehavior: 'contain'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-[1560px] min-[1880px]:!px-0 md:px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-12 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-secondary text-center font-normal",
                                        children: demoShowcaseList.length > 0 ? `${demoShowcaseList.length}+ Pre-built websites` : '38+ Pre-built websites'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-12 gap-y-5 sm:gap-3 xl:gap-6",
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-12 py-12 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-secondary",
                                            children: "Loading demos..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-12 py-12 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-secondary",
                                            children: [
                                                "Error loading demos: ",
                                                error
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this) : demoShowcaseList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-12 md:col-span-6 xl:col-span-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.url,
                                                target: "_blank",
                                                className: getCardClassName(item.url, item.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-[28px] bg-white p-2 shadow-[0_1px_4px_0_rgba(16,24,40,0.10)] transition-all duration-400 ease-in-out group-hover:shadow-[0_8px_6px_0_rgba(16,24,40,0.16)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                            className: "max-h-[351px] overflow-hidden rounded-[20px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: item.image,
                                                                alt: "Demo Showcase",
                                                                className: "h-full w-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-secondary flex items-center justify-center gap-2 py-4 text-center text-lg leading-[150%] font-medium",
                                                            children: [
                                                                item.title,
                                                                ' ',
                                                                item.newRelease && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-secondary bg-ns-green text-tagline-2 rounded-[35px] px-5 py-[5px]",
                                                                    children: "New"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/demo-showcase.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/demo-showcase.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/demo-showcase.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/demo-showcase.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DemoShowcase, "Y/Gzp8Xul8aAHtBtF/BRRbOvcR8=");
_c = DemoShowcase;
var _c;
__turbopack_context__.k.register(_c, "DemoShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
const twMerge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendTailwindMerge"])({
    cacheSize: 1000,
    extend: {
        classGroups: {
            'font-size': [
                {
                    text: [
                        'heading-1',
                        'heading-2',
                        'heading-3',
                        'heading-4',
                        'heading-5',
                        'heading-6',
                        'tagline-1',
                        'tagline-2',
                        'tagline-3',
                        'tagline-4',
                        'tagline-5',
                        'tagline-6'
                    ]
                }
            ],
            'text-color': [
                {
                    badge: [
                        'green',
                        'green-v2',
                        'ns-green-light',
                        'yellow',
                        'yellow-v2',
                        'cyan',
                        'cyan-v2',
                        'gray',
                        'gray-light',
                        'gray-dark',
                        'metal',
                        'white',
                        'primary',
                        'primary-light',
                        'blur',
                        'blur-v2',
                        'blur-light',
                        'secondary-light'
                    ],
                    text: [
                        'primary-50',
                        'primary-100',
                        'primary-200',
                        'primary-300',
                        'primary-400',
                        'primary-500',
                        'primary-600',
                        'primary-700',
                        'primary-800',
                        'secondary',
                        'accent',
                        'background-1',
                        'background-2',
                        'background-3',
                        'background-4',
                        'background-5',
                        'background-6',
                        'background-7',
                        'background-8',
                        'background-9',
                        'background-10',
                        'background-11',
                        'stroke-1',
                        'stroke-2',
                        'stroke-3',
                        'stroke-4',
                        'stroke-5',
                        'stroke-6',
                        'stroke-7',
                        'stroke-8',
                        'stroke-9',
                        'gradient-1',
                        'gradient-2',
                        'gradient-3',
                        'gradient-4',
                        'gradient-5',
                        'gradient-6',
                        'gradient-7',
                        'gradient-8',
                        'gradient-9'
                    ]
                }
            ]
        }
    }
});
const cn = (...classes)=>twMerge((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(...classes));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/springer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSpring",
    ()=>createSpring,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Springer - Spring easing library converted to TypeScript
 * Exact port of the original JavaScript algorithm
 */ /**
 * Spring simulation step function (exact port from original JS)
 */ function simulateSpringStep(position, target, velocity, stiffness, damping, dt, resultArray) {
    const springForce = -stiffness * (position - target);
    const dampingForce = -damping * velocity;
    const totalForce = springForce + dampingForce;
    const newVelocity = velocity + totalForce * dt;
    const newPosition = position + newVelocity * dt;
    return Math.abs(newVelocity) < 1 && Math.abs(newPosition - target) < 1 ? (resultArray[0] = target, resultArray[1] = 0, resultArray) : (resultArray[0] = newPosition, resultArray[1] = newVelocity, resultArray);
}
/**
 * Main spring function (exact port from original JS)
 */ function createSpring(tension = 0.5, friction = 0.5) {
    // Exact calculations from original JS
    const stiffness = Math.min(Math.max(350 * tension, 20), 350);
    const damping = Math.min(Math.max(40 - 40 * friction, 1), 40);
    const target = 10000;
    const dt = 16 / target;
    const resultArray = [
        0,
        0
    ];
    const points = [];
    let position = 0;
    let velocity = 0;
    // Exact simulation loop from original JS
    while(position !== target || velocity !== 0){
        const result = simulateSpringStep(position, target, velocity, stiffness, damping, dt, resultArray);
        position = result[0];
        velocity = result[1];
        points.push(position / target);
    }
    // Return the exact same function as original JS
    return function(t) {
        return points[Math.ceil(t * (points.length - 1))];
    };
}
/**
 * Springer object (exact API from original JS)
 */ const Springer = {
    /**
   * Default function that returns a spring easing function
   * @param tension - Spring tension (0-1, default: 0.5)
   * @param friction - Spring friction (0-1, default: 0.5)
   * @returns Spring easing function that can be used directly with GSAP
   */ default: function(tension = 0.5, friction = 0.5) {
        return createSpring(tension, friction);
    }
};
const __TURBOPACK__default__export__ = Springer;
;
// Auto-attach to window if in browser environment (for backward compatibility)
if ("TURBOPACK compile-time truthy", 1) {
    window.Springer = Springer;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animation/RevealAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$springer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/springer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Register GSAP plugins
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const RevealAnimation = ({ children, duration = 0.6, delay = 0, offset = 60, instant = false, start = 'top 90%', end = 'top 50%', direction = 'down', useSpring = false, rotation = 0, animationType = 'from', className = '' })=>{
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "RevealAnimation.useGSAP": ()=>{
            const element = elementRef.current;
            if (!element) {
                return;
            }
            // Get spring easing if useSpring is true
            const spring = useSpring ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$springer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].default(0.2, 0.8) : null;
            // Force initial state
            element.style.opacity = '1';
            element.style.filter = 'blur(0)';
            // Set animation properties based on animation type
            let animationProps;
            if (animationType === 'to') {
                // gsap.to() - animate TO the specified values
                animationProps = {
                    opacity: 1,
                    filter: 'blur(0)',
                    duration: duration,
                    delay: delay,
                    ease: useSpring && spring ? spring : 'power2.out'
                };
                // Add rotation if specified
                if (rotation !== 0) {
                    animationProps.rotation = rotation;
                }
            } else {
                // gsap.from() - animate FROM the specified values to normal
                animationProps = {
                    opacity: 0,
                    filter: 'blur(16px)',
                    duration: duration,
                    delay: delay,
                    ease: useSpring && spring ? spring : 'power2.out'
                };
                // Add rotation if specified
                if (rotation !== 0) {
                    animationProps.rotation = rotation;
                }
            }
            // Add ScrollTrigger if not instant
            if (!instant) {
                animationProps.scrollTrigger = {
                    trigger: element,
                    start: start,
                    end: end,
                    scrub: false
                };
            }
            // Set animation direction based on direction prop
            switch(direction){
                case 'left':
                    animationProps.x = animationType === 'from' ? -offset : 0;
                    if (animationType === 'to') {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(element, {
                            x: -offset
                        });
                    }
                    break;
                case 'right':
                    animationProps.x = animationType === 'from' ? offset : 0;
                    if (animationType === 'to') {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(element, {
                            x: offset
                        });
                    }
                    break;
                case 'down':
                    animationProps.y = animationType === 'from' ? offset : 0;
                    if (animationType === 'to') {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(element, {
                            y: offset
                        });
                    }
                    break;
                case 'up':
                default:
                    animationProps.y = animationType === 'from' ? -offset : 0;
                    if (animationType === 'to') {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(element, {
                            y: -offset
                        });
                    }
                    break;
            }
            // Use appropriate GSAP method based on animation type
            if (animationType === 'to') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, animationProps);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(element, animationProps);
            }
        }
    }["RevealAnimation.useGSAP"], [
        duration,
        delay,
        offset,
        instant,
        start,
        end,
        direction,
        useSpring,
        rotation,
        animationType
    ]);
    // Early return if children is not valid (after all hooks)
    if (!children || !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        return null;
    }
    // Clone the child element and add the ref, className, and data-ns-animate attribute
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
        ref: elementRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(children?.props?.className, className),
        'data-ns-animate': true
    });
};
_s(RevealAnimation, "AAL48gGA8YKg7IpHojjGrGu12/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = RevealAnimation;
const __TURBOPACK__default__export__ = RevealAnimation;
var _c;
__turbopack_context__.k.register(_c, "RevealAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeToggle = ()=>{
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    if (!mounted) {
        return null;
    }
    const toggleTheme = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        id: "theme-toggle",
        onClick: toggleTheme,
        "aria-label": "Toggle theme",
        className: "bg-background-8 fixed right-0 bottom-5 !z-[9999] flex size-12 cursor-pointer items-center justify-center rounded-l-2xl transition-colors duration-200 hover:opacity-80 dark:bg-white",
        children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            id: "dark-theme-icon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                className: "size-6 stroke-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/ThemeToggle.tsx",
                    lineNumber: 37,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/ThemeToggle.tsx",
                lineNumber: 30,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/shared/ThemeToggle.tsx",
            lineNumber: 29,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            id: "light-theme-icon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                className: "size-6 stroke-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/ThemeToggle.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/ThemeToggle.tsx",
                lineNumber: 46,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/shared/ThemeToggle.tsx",
            lineNumber: 45,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/ThemeToggle.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeToggle, "CybB+IJKIQO7hXpeRHYgsUfxw+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
ThemeToggle.displayName = 'ThemeToggle';
const __TURBOPACK__default__export__ = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDividerExpand.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDividerExpand",
    ()=>useDividerExpand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const useDividerExpand = (options)=>{
    _s();
    const dividerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { start = 'top 100%', end = 'top 50%', duration = 1, delay = 0.7 } = options || {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "useDividerExpand.useGSAP": ()=>{
            const divider = dividerRef.current;
            if (!divider) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(divider, {
                scrollTrigger: {
                    trigger: divider,
                    start,
                    end,
                    scrub: false,
                    toggleActions: 'play none none none'
                },
                width: '100%',
                duration,
                delay,
                ease: 'power2.out'
            });
        }
    }["useDividerExpand.useGSAP"]);
    return dividerRef;
};
_s(useDividerExpand, "ID/TCm2WtwT+Fs4xmZ0IJ9sMfeU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/footer/FooterDivider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDividerExpand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDividerExpand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const FooterDivider = ({ className })=>{
    _s();
    const dividerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDividerExpand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDividerExpand"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dividerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-accent/10 dark:bg-stroke-4/10 absolute top-0 right-0 left-0 mx-auto h-px w-0 origin-center', className)
    }, void 0, false, {
        fileName: "[project]/src/components/shared/footer/FooterDivider.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FooterDivider, "0R31IN2Q4ADiYTSTA6gCtmuplXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDividerExpand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDividerExpand"]
    ];
});
_c = FooterDivider;
const __TURBOPACK__default__export__ = FooterDivider;
var _c;
__turbopack_context__.k.register(_c, "FooterDivider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMobileMenu.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMobileMenu",
    ()=>useMobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useMobileMenu = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSubmenu, setActiveSubmenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('company');
    // Open mobile menu
    const openMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMobileMenu.useCallback[openMenu]": ()=>{
            setIsOpen(true);
            // Prevent body scroll when menu is open
            document.body.classList.add('overflow-hidden');
        }
    }["useMobileMenu.useCallback[openMenu]"], []);
    // Close mobile menu
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMobileMenu.useCallback[closeMenu]": ()=>{
            setIsOpen(false);
            document.body.classList.remove('overflow-hidden');
        }
    }["useMobileMenu.useCallback[closeMenu]"], []);
    // Toggle mobile menu
    const toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMobileMenu.useCallback[toggleMenu]": ()=>{
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        }
    }["useMobileMenu.useCallback[toggleMenu]"], [
        isOpen,
        closeMenu,
        openMenu
    ]);
    // Toggle submenu
    const toggleSubmenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMobileMenu.useCallback[toggleSubmenu]": (menuId)=>{
            setActiveSubmenu({
                "useMobileMenu.useCallback[toggleSubmenu]": (current)=>current === menuId ? null : menuId
            }["useMobileMenu.useCallback[toggleSubmenu]"]);
        }
    }["useMobileMenu.useCallback[toggleSubmenu]"], []);
    // Close all submenus
    const closeAllSubmenus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMobileMenu.useCallback[closeAllSubmenus]": ()=>{
            setActiveSubmenu(null);
        }
    }["useMobileMenu.useCallback[closeAllSubmenus]"], []);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobileMenu.useEffect": ()=>{
            return ({
                "useMobileMenu.useEffect": ()=>{
                    document.body.classList.remove('overflow-hidden');
                }
            })["useMobileMenu.useEffect"];
        }
    }["useMobileMenu.useEffect"], []);
    return {
        isOpen,
        openMenu,
        closeMenu,
        toggleMenu,
        activeSubmenu,
        toggleSubmenu,
        closeAllSubmenus
    };
};
_s(useMobileMenu, "cUMb1ZOsC678YmTKY55CaVkUzZQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/MobileMenuContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenuProvider",
    ()=>MobileMenuProvider,
    "useMobileMenuContext",
    ()=>useMobileMenuContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMobileMenu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const MobileMenuContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const MobileMenuProvider = ({ children })=>{
    _s();
    const mobileMenuState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenu"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileMenuContext.Provider, {
        value: mobileMenuState,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/MobileMenuContext.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileMenuProvider, "5wfuDsd5Ln3rMHFxsw+M/c7EhnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenu"]
    ];
});
_c = MobileMenuProvider;
const useMobileMenuContext = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MobileMenuContext);
    if (context === undefined) {
        throw new Error('useMobileMenuContext must be used within a MobileMenuProvider');
    }
    return context;
};
_s1(useMobileMenuContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "MobileMenuProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/navbar-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "footerData",
    ()=>footerData,
    "mobileMenuData",
    ()=>mobileMenuData
]);
const mobileMenuData = [
    {
        id: 'elysium',
        title: 'Elysium',
        href: '/'
    },
    {
        id: 'about',
        title: 'About',
        submenu: [
            {
                id: 'behind-the-story',
                label: 'Behind the Story',
                href: '/about'
            },
            {
                id: 'white-paper',
                label: 'White Paper',
                href: '/whitepaper'
            },
            {
                id: 'team',
                label: 'Team',
                href: '/team'
            }
        ]
    },
    {
        id: 'fely',
        title: 'FELY',
        submenu: [
            {
                id: 'buy-fely',
                label: 'Buy Fely',
                href: '/buy'
            },
            {
                id: 'stake-fely',
                label: 'Stake Fely',
                href: '/stake'
            }
        ]
    },
    {
        id: 'insight',
        title: 'Insight',
        submenu: [
            {
                id: 'concept',
                label: 'Concept',
                href: '/concept'
            },
            {
                id: 'road-map',
                label: 'Road Map',
                href: '/road-map'
            },
            {
                id: 'token-distribution',
                label: 'Token Distribution',
                href: '/token-distribution'
            }
        ]
    },
    {
        id: 'products',
        title: 'Products',
        submenu: [
            {
                id: 'skillfullhub',
                label: 'Skillfullhub',
                href: 'https://skillfullhub.com/'
            },
            {
                id: 'felyzone',
                label: 'Felyzone',
                href: 'http://felyzone.com/'
            },
            {
                id: 'felynova',
                label: 'Felynova',
                href: 'https://felynova.com/'
            },
            {
                id: 'aidora',
                label: 'Aidora',
                href: 'http://aidora.care/'
            },
            {
                id: 'fely-wallet',
                label: 'Fely Wallet',
                href: 'http://felywallet.com/'
            }
        ]
    },
    {
        id: 'announcements',
        title: 'Announcements',
        href: '/announcement'
    },
    {
        id: 'blog',
        title: 'Blog',
        href: '/blog'
    },
    {
        id: 'contact',
        title: 'Contact',
        href: '/contact-us'
    }
];
const footerData = [
    {
        title: 'Company',
        links: [
            {
                label: 'About Us',
                href: '/about'
            },
            {
                label: 'Career',
                href: '/career'
            },
            {
                label: 'Case Studies',
                href: '/case-study'
            },
            {
                label: 'Contact Us',
                href: '/contact-us'
            }
        ]
    },
    {
        title: 'Support',
        links: [
            {
                label: 'FAQ',
                href: '/faq'
            },
            {
                label: 'Documentation',
                href: '/documentation'
            },
            {
                label: 'Tutorial',
                href: '/tutorial'
            },
            {
                label: 'Community',
                href: '/community'
            }
        ]
    },
    {
        title: 'Legal Policies',
        links: [
            {
                label: 'Terms & Conditions',
                href: '/terms-conditions'
            },
            {
                label: 'Privacy Policy',
                href: '/privacy-policy'
            },
            {
                label: 'Refund Policy',
                href: '/refund-policy'
            },
            {
                label: 'GDPR Compliance',
                href: '/gdpr'
            },
            {
                label: 'Affiliate Policy',
                href: '/affiliate-policy'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useScrollHeader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavbarScroll",
    ()=>useNavbarScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useNavbarScroll = (threshold = 100)=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavbarScroll.useEffect": ()=>{
            const handleScroll = {
                "useNavbarScroll.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > threshold);
                }
            }["useNavbarScroll.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            handleScroll();
            return ({
                "useNavbarScroll.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["useNavbarScroll.useEffect"];
        }
    }["useNavbarScroll.useEffect"], [
        threshold
    ]);
    return {
        isScrolled
    };
};
_s(useNavbarScroll, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/shared/felysyum-logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/felysyum-logo.7d761a86.png");}),
"[project]/public/images/shared/felysyum-logo.png.mjs { IMAGE => \"[project]/public/images/shared/felysyum-logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/shared/felysyum-logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 299,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/ALB/Kq6meymeLiceNUxMTGJISEhZRUVFVk9PT2NQUFBmAJ9vJJ6WcSaQKyUcMUtLS15FRUVUQEBAT1FQUGVqamqJ2KAVkhFNLDoAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/mobile-menu/MenuCloseButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MobileMenuContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const MenuCloseButton = ()=>{
    _s();
    const { closeMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenuContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: closeMenu,
        className: "nav-hamburger-close bg-background-4 dark:bg-background-9 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Close Menu"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/mobile-menu/MenuCloseButton.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 rotate-45"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/mobile-menu/MenuCloseButton.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 -rotate-45"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/mobile-menu/MenuCloseButton.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/mobile-menu/MenuCloseButton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MenuCloseButton, "Fu/Zc4ByfFVznkuKlOX9Z+xcixg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenuContext"]
    ];
});
_c = MenuCloseButton;
MenuCloseButton.displayName = 'MenuCloseButton';
const __TURBOPACK__default__export__ = MenuCloseButton;
var _c;
__turbopack_context__.k.register(_c, "MenuCloseButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MobileMenuContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const MobileMenuItem = ({ id, title, children, hasSubmenu = false, href })=>{
    _s();
    const { activeSubmenu, toggleSubmenu, toggleMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenuContext"])();
    const isActive = activeSubmenu === id;
    const handleToggle = ()=>{
        if (hasSubmenu) {
            toggleSubmenu(id);
        }
    };
    const handleLinkClick = ()=>{
        toggleMenu();
    };
    if (href && !hasSubmenu) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "space-y-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                onClick: handleLinkClick,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full cursor-pointer items-center justify-between p-2.5 transition-all duration-200', 'text-tagline-1 text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent font-normal'),
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleToggle,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full cursor-pointer items-center justify-between p-2.5 transition-all duration-200'),
                "aria-expanded": hasSubmenu ? isActive : undefined,
                "aria-controls": hasSubmenu ? `submenu-${id}` : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-tagline-1 ease block font-normal transition-colors duration-300', isActive ? 'text-secondary dark:text-accent font-medium' : 'text-secondary/60 dark:text-accent/60'),
                        children: [
                            title,
                            ' '
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasSubmenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary/60 dark:stroke-accent/60 size-5 transition-transform duration-300 ease-in-out', isActive && 'rotate-90'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 12L12 8L8 4",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            hasSubmenu && children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: `submenu-${id}`,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dark:bg-background-7 ml-3.5 w-full overflow-y-hidden bg-white transition-[height,opacity] duration-300 ease-in-out', isActive ? 'pointer-events-auto h-fit opacity-100' : 'pointer-events-none h-0 opacity-0'),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileMenuItem, "AAIfmA9nwhmv3Aba3j924eVPDoI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenuContext"]
    ];
});
_c = MobileMenuItem;
MobileMenuItem.displayName = 'MobileMenuItem';
const __TURBOPACK__default__export__ = MobileMenuItem;
var _c;
__turbopack_context__.k.register(_c, "MobileMenuItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/mobile-menu/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MobileMenuContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/shared/felysyum-logo.png.mjs { IMAGE => "[project]/public/images/shared/felysyum-logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$mobile$2d$menu$2f$MenuCloseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/mobile-menu/MenuCloseButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$mobile$2d$menu$2f$MobileMenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/mobile-menu/MobileMenuItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// crypto marketing mobile menu
'use client';
;
;
;
;
;
;
;
const MobileMenu = ({ menuData })=>{
    _s();
    const { isOpen, toggleMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenuContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dark:bg-background-8 scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full translate-x-full bg-white transition-all duration-300 sm:w-1/2 sm:rounded-t-2xl sm:rounded-l-3xl xl:hidden', isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 p-5 sm:p-8 lg:p-9",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: toggleMenu,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "max-w-[120px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "NextSaaS",
                                        className: "w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$mobile$2d$menu$2f$MenuCloseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scroll-bar mt-6 h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-secondary dark:text-accent text-tagline-1 before:bg-stroke-4 dark:before:bg-stroke-6 relative mb-2 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-['']",
                            children: "Menu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2",
                            children: menuData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$mobile$2d$menu$2f$MobileMenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: item.id,
                                    title: item.title,
                                    hasSubmenu: !!item.submenu?.length,
                                    href: item.href,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: item?.submenu?.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: subItem.href,
                                                    onClick: toggleMenu,
                                                    className: "text-tagline-1 text-secondary dark:text-accent ml-4 block py-2.5 text-left font-normal transition-all duration-200",
                                                    children: subItem.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, subItem.id, false, {
                                                fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, item.id, false, {
                                    fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/mobile-menu/MobileMenu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileMenu, "iYwzBnrXwiCmDFDAKNF4FNgKN1o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenuContext"]
    ];
});
_c = MobileMenu;
MobileMenu.displayName = 'MobileMenu';
const __TURBOPACK__default__export__ = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/menu-icon/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutIcon",
    ()=>AboutIcon,
    "AffiliateIcon",
    ()=>AffiliateIcon,
    "AffiliatePolicyIcon",
    ()=>AffiliatePolicyIcon,
    "AffiliateProgramIcon",
    ()=>AffiliateProgramIcon,
    "AnalyticsIcon",
    ()=>AnalyticsIcon,
    "AnalyticsIconV2",
    ()=>AnalyticsIconV2,
    "BlogIcon",
    ()=>BlogIcon,
    "BrandKitIcon",
    ()=>BrandKitIcon,
    "CareerIcon",
    ()=>CareerIcon,
    "CareerIconV2",
    ()=>CareerIconV2,
    "CaseStudyICon",
    ()=>CaseStudyICon,
    "ChangeLogIcon",
    ()=>ChangeLogIcon,
    "ContactIcon",
    ()=>ContactIcon,
    "CustomersIcon",
    ()=>CustomersIcon,
    "DocsIcon",
    ()=>DocsIcon,
    "DownloadIcon",
    ()=>DownloadIcon,
    "ExploreCompanyIcon",
    ()=>ExploreCompanyIcon,
    "ExplorePricingAndAccountIcon",
    ()=>ExplorePricingAndAccountIcon,
    "ExploreProductIcon",
    ()=>ExploreProductIcon,
    "ExploreResourcesIcon",
    ()=>ExploreResourcesIcon,
    "FaqIcon",
    ()=>FaqIcon,
    "FeatureIcon",
    ()=>FeatureIcon,
    "GDPRIcon",
    ()=>GDPRIcon,
    "GlossaryIcon",
    ()=>GlossaryIcon,
    "IntegrationIcon",
    ()=>IntegrationIcon,
    "IntegrationIconV2",
    ()=>IntegrationIconV2,
    "LegalNoticeIcon",
    ()=>LegalNoticeIcon,
    "LoginIcon",
    ()=>LoginIcon,
    "ManifestoIcon",
    ()=>ManifestoIcon,
    "PressIcon",
    ()=>PressIcon,
    "PricingIcon",
    ()=>PricingIcon,
    "PrivacyIcon",
    ()=>PrivacyIcon,
    "ProcessICon",
    ()=>ProcessICon,
    "ReferralProgramIcon",
    ()=>ReferralProgramIcon,
    "RefundPolicyIcon",
    ()=>RefundPolicyIcon,
    "SecurityIcon",
    ()=>SecurityIcon,
    "ServiceIcon",
    ()=>ServiceIcon,
    "SignUpIcon",
    ()=>SignUpIcon,
    "SuccessIcon",
    ()=>SuccessIcon,
    "SupportIcon",
    ()=>SupportIcon,
    "SupportIconV2",
    ()=>SupportIconV2,
    "TeamIcon",
    ()=>TeamIcon,
    "TermsConditionsIcon",
    ()=>TermsConditionsIcon,
    "TestimonialIcon",
    ()=>TestimonialIcon,
    "TutorialIcon",
    ()=>TutorialIcon,
    "UseCaseIcon",
    ()=>UseCaseIcon,
    "WhitePaperIcon",
    ()=>WhitePaperIcon,
    "WhitePaperIconV2",
    ()=>WhitePaperIconV2,
    "WhyChooseUsIcon",
    ()=>WhyChooseUsIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
;
;
const AboutIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 13.3333H10.0083",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 6.66669V10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = AboutIcon;
const ServiceIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.59975 3.4495L8.12557 2.34419C8.04647 2.28469 7.95437 2.24484 7.85685 2.22792C7.75933 2.211 7.65918 2.2175 7.56467 2.24688C7.1081 2.38985 6.66515 2.57312 6.24103 2.79452C6.15323 2.84057 6.07765 2.90685 6.02051 2.98787C5.96338 3.06889 5.92633 3.16233 5.91242 3.26049L5.65182 5.08478C5.55248 5.17284 5.45523 5.26442 5.36007 5.35953C5.26493 5.45467 5.17332 5.55195 5.08525 5.65136L5.08521 5.65139L3.26124 5.91223C3.16324 5.92608 3.06993 5.96303 2.98901 6.02002C2.90809 6.07702 2.84187 6.15242 2.79581 6.24003C2.57407 6.66397 2.39044 7.10678 2.2471 7.56323C2.21759 7.65787 2.211 7.75818 2.22789 7.85587C2.24478 7.95356 2.28466 8.04584 2.34423 8.12508L3.44993 9.59932C3.44195 9.73182 3.43794 9.86535 3.4379 9.9999C3.4379 10.1344 3.44191 10.268 3.44993 10.4006L3.44993 10.4006L2.34462 11.8748C2.28512 11.9539 2.24527 12.046 2.22835 12.1435C2.21143 12.241 2.21793 12.3412 2.2473 12.4357C2.39028 12.8923 2.57355 13.3352 2.79495 13.7593C2.841 13.8471 2.90727 13.9227 2.98829 13.9799C3.06931 14.037 3.16276 14.074 3.26092 14.088L5.08521 14.3486C5.17326 14.4479 5.26484 14.5451 5.35996 14.6403C5.45509 14.7354 5.55237 14.827 5.65179 14.9151L5.65182 14.9152L5.91265 16.7391C5.92651 16.8371 5.96345 16.9304 6.02045 17.0114C6.07744 17.0923 6.15285 17.1585 6.24046 17.2046C6.66439 17.4263 7.1072 17.6099 7.56365 17.7533C7.6583 17.7828 7.7586 17.7894 7.8563 17.7725C7.95399 17.7556 8.04626 17.7157 8.1255 17.6561L9.59974 16.5504C9.73225 16.5584 9.86577 16.5624 10.0003 16.5625C10.1349 16.5625 10.2684 16.5585 10.401 16.5504L10.4011 16.5504L11.8752 17.6558C11.9543 17.7153 12.0464 17.7551 12.144 17.772C12.2415 17.7889 12.3416 17.7824 12.4361 17.7531C12.8927 17.6101 13.3357 17.4268 13.7598 17.2054C13.8476 17.1594 13.9232 17.0931 13.9803 17.0121C14.0374 16.9311 14.0745 16.8376 14.0884 16.7395L14.349 14.9152C14.4483 14.8271 14.5456 14.7355 14.6407 14.6404C14.7359 14.5453 14.8275 14.448 14.9156 14.3486L14.9156 14.3486L16.7396 14.0877C16.8376 14.0739 16.9309 14.0369 17.0118 13.9799C17.0927 13.9229 17.1589 13.8475 17.205 13.7599C17.4267 13.336 17.6104 12.8932 17.7537 12.4367C17.7832 12.3421 17.7898 12.2418 17.7729 12.1441C17.756 12.0464 17.7161 11.9541 17.6566 11.8749L16.5509 10.4006C16.5589 10.2681 16.5629 10.1346 16.5629 10.0001C16.5629 9.86551 16.5589 9.73195 16.5509 9.59937L16.5509 9.59932L17.6562 8.12514C17.7157 8.04605 17.7555 7.95394 17.7725 7.85642C17.7894 7.7589 17.7829 7.65876 17.7535 7.56424C17.6105 7.10767 17.4273 6.66472 17.2059 6.2406C17.1598 6.15281 17.0935 6.07722 17.0125 6.02008C16.9315 5.96295 16.838 5.9259 16.7399 5.91199L14.9156 5.65139C14.8275 5.55206 14.736 5.45481 14.6408 5.35964C14.5457 5.2645 14.4484 5.1729 14.349 5.08482L14.349 5.08478L14.0881 3.26082C14.0743 3.16281 14.0373 3.06951 13.9804 2.98858C13.9234 2.90766 13.848 2.84144 13.7603 2.79539C13.3364 2.57364 12.8936 2.39002 12.4371 2.24668C12.3425 2.21716 12.2422 2.21057 12.1445 2.22746C12.0468 2.24435 11.9545 2.28423 11.8753 2.34381L10.4011 3.4495C10.2685 3.44152 10.135 3.43751 10.0005 3.43747C9.86593 3.43747 9.73237 3.44148 9.5998 3.4495L9.59975 3.4495Z",
                className: "stroke-secondary dark:stroke-accent {=$class}",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ServiceIcon;
const TeamIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13 14H15.5C16.8807 14 18 12.8807 18 11.5C18 10.3807 17.2616 9.4391 16.2577 9.1179M13 14V12.75C13 11.7835 12.2165 11 11.25 11H6.75C5.7835 11 5 11.7835 5 12.75V14M13 14H5M12.9167 7.25C12.9167 8.90685 11.5735 10.25 9.91667 10.25C8.25981 10.25 6.91667 8.90685 6.91667 7.25C6.91667 5.59315 8.25981 4.25 9.91667 4.25C11.5735 4.25 12.9167 5.59315 12.9167 7.25ZM16.6667 7.25C16.6667 8.49264 15.6593 9.5 14.4167 9.5M4 14H2.5C1.11929 14 0 12.8807 0 11.5C0 10.3807 0.738363 9.4391 1.74233 9.1179M3.58333 9.5C2.3407 9.5 1.33333 8.49264 1.33333 7.25C1.33333 6.00736 2.3407 5 3.58333 5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/menu-icon/index.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = TeamIcon;
const CareerIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[15px] w-4', className),
        viewBox: "0 0 16 15",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.875 3H1.125C0.779822 3 0.5 3.27982 0.5 3.625V13.625C0.5 13.9702 0.779822 14.25 1.125 14.25H14.875C15.2202 14.25 15.5 13.9702 15.5 13.625V3.625C15.5 3.27982 15.2202 3 14.875 3Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 59,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.124 3V1.75C11.124 1.41848 10.9923 1.10054 10.7579 0.866116C10.5235 0.631696 10.2055 0.5 9.87402 0.5H6.12402C5.7925 0.5 5.47456 0.631696 5.24014 0.866116C5.00572 1.10054 4.87402 1.41848 4.87402 1.75V3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.5001 7.24292C13.2207 8.56171 10.633 9.25416 7.99949 9.25002C5.36647 9.25416 2.77919 8.56195 0.5 7.24358",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.06152 6.75H8.93652",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = CareerIcon;
const CareerIconV2 = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_3582_21197)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19.167 17.5001V15.8334C19.1664 15.0948 18.9206 14.3774 18.4681 13.7937C18.0156 13.2099 17.3821 12.793 16.667 12.6084",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 85,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.1663 17.5V15.8333C14.1663 14.9493 13.8152 14.1014 13.19 13.4763C12.5649 12.8512 11.7171 12.5 10.833 12.5H4.16634C3.28229 12.5 2.43444 12.8512 1.80932 13.4763C1.1842 14.1014 0.833008 14.9493 0.833008 15.8333V17.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 90,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13.333 2.6084C14.05 2.79198 14.6855 3.20898 15.1394 3.79366C15.5932 4.37833 15.8395 5.09742 15.8395 5.83757C15.8395 6.57771 15.5932 7.2968 15.1394 7.88147C14.6855 8.46615 14.05 8.88315 13.333 9.06673",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 95,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7.50033 9.16667C9.34127 9.16667 10.8337 7.67428 10.8337 5.83333C10.8337 3.99238 9.34127 2.5 7.50033 2.5C5.65938 2.5 4.16699 3.99238 4.16699 5.83333C4.16699 7.67428 5.65938 9.16667 7.50033 9.16667Z",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 100,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_3582_21197",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: 20,
                        height: 20,
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/icons/menu-icon/index.tsx",
                    lineNumber: 107,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CareerIconV2;
const ManifestoIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 16 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.375 10.5H4.875V8L12.375 0.5L14.875 3L7.375 10.5Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 120,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5 2.375L13 4.875",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 121,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.25 7.375V14.25C14.25 14.4158 14.1842 14.5747 14.0669 14.6919C13.9497 14.8092 13.7908 14.875 13.625 14.875H1.125C0.95924 14.875 0.800269 14.8092 0.683058 14.6919C0.565848 14.5747 0.5 14.4158 0.5 14.25V1.75C0.5 1.58424 0.565848 1.42527 0.683058 1.30806C0.800269 1.19085 0.95924 1.125 1.125 1.125H8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 122,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 115,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = ManifestoIcon;
const WhyChooseUsIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[18px]', className),
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.87976 14.3702C2.16069 13.6512 2.63762 12.1415 2.27162 11.257C1.89222 10.34 0.5 9.60195 0.5 8.62497C0.5 7.64801 1.89222 6.91 2.27163 5.99303C2.63763 5.10846 2.1607 3.59882 2.87976 2.87976C3.59882 2.16069 5.10846 2.63762 5.99304 2.27162C6.91002 1.89222 7.64805 0.5 8.62503 0.5C9.60199 0.5 10.34 1.89222 11.257 2.27163C12.1415 2.63763 13.6512 2.1607 14.3702 2.87976C15.0893 3.59882 14.6124 5.10846 14.9784 5.99304C15.3578 6.91002 16.75 7.64805 16.75 8.62503C16.75 9.60199 15.3578 10.34 14.9784 11.257C14.6124 12.1415 15.0893 13.6512 14.3702 14.3702C13.6512 15.0893 12.1415 14.6124 11.257 14.9784C10.34 15.3578 9.60195 16.75 8.62497 16.75C7.64801 16.75 6.91 15.3578 5.99303 14.9784C5.10846 14.6124 3.59882 15.0893 2.87976 14.3702Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 136,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.625 13.625C9.14277 13.625 9.5625 13.2053 9.5625 12.6875C9.5625 12.1697 9.14277 11.75 8.625 11.75C8.10723 11.75 7.6875 12.1697 7.6875 12.6875C7.6875 13.2053 8.10723 13.625 8.625 13.625Z",
                className: "fill-secondary dark:fill-accent"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 141,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.625 9.87537V9.25037C9.05765 9.25037 9.48058 9.12207 9.84031 8.88171C10.2 8.64134 10.4804 8.2997 10.646 7.89999C10.8116 7.50027 10.8549 7.06044 10.7705 6.63611C10.6861 6.21177 10.4777 5.822 10.1718 5.51607C9.86587 5.21014 9.47609 5.0018 9.05176 4.9174C8.62743 4.83299 8.18759 4.87631 7.78788 5.04188C7.38817 5.20745 7.04653 5.48782 6.80616 5.84756C6.5658 6.20729 6.4375 6.63022 6.4375 7.06287",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 131,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = WhyChooseUsIcon;
const CustomersIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[17px] w-[14px] shrink-0', className),
        viewBox: "0 0 14 17",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.25015 1.75H12.375C12.5408 1.75 12.6997 1.81585 12.8169 1.93306C12.9342 2.05027 13 2.20924 13 2.375V15.5C13 15.6658 12.9342 15.8247 12.8169 15.9419C12.6997 16.0592 12.5408 16.125 12.375 16.125H1.125C0.95924 16.125 0.800269 16.0592 0.683058 15.9419C0.565848 15.8247 0.5 15.6658 0.5 15.5V2.375C0.5 2.20924 0.565848 2.05027 0.683058 1.93306C0.800269 1.81585 0.95924 1.75 1.125 1.75H4.24983",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 159,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.625 4.25V3.625C3.625 2.7962 3.95424 2.00134 4.54029 1.41529C5.12634 0.82924 5.9212 0.5 6.75 0.5C7.5788 0.5 8.37366 0.82924 8.95971 1.41529C9.54576 2.00134 9.875 2.7962 9.875 3.625V4.25H3.625Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 164,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 154,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = CustomersIcon;
const UseCaseIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 14 18",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[18px] w-[14px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.625 16.7501H9.875",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 178,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.75 14.2501V9.87506",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 179,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.25 7.37506L6.75 9.87506L9.25 7.37506",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 180,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.89873 11.6728C2.15556 11.0924 1.55363 10.351 1.13818 9.50449C0.722727 8.65796 0.504568 7.72828 0.500096 6.78531C0.481375 3.39763 3.2125 0.581526 6.5993 0.501812C7.91169 0.470211 9.20072 0.852645 10.2835 1.59487C11.3664 2.33709 12.188 3.40141 12.6319 4.63687C13.0757 5.87232 13.1194 7.21618 12.7565 8.47781C12.3937 9.73945 11.6428 10.8548 10.6104 11.6657C10.383 11.8418 10.1986 12.0674 10.0712 12.3253C9.94381 12.5832 9.87672 12.8667 9.87502 13.1544L9.87501 13.625C9.87501 13.7908 9.80916 13.9498 9.69195 14.067C9.57474 14.1842 9.41577 14.25 9.25001 14.25H4.24999C4.08423 14.25 3.92526 14.1842 3.80805 14.067C3.69084 13.9498 3.62499 13.7908 3.62499 13.625L3.62498 13.1539C3.62427 12.8681 3.55851 12.5862 3.43268 12.3296C3.30685 12.073 3.12425 11.8484 2.89873 11.6728V11.6728Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 181,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 173,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = UseCaseIcon;
const CaseStudyICon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 16 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.0625 13.625C10.6869 13.625 13.625 10.6869 13.625 7.0625C13.625 3.43813 10.6869 0.5 7.0625 0.5C3.43813 0.5 0.5 3.43813 0.5 7.0625C0.5 10.6869 3.43813 13.625 7.0625 13.625Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 195,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.7021 11.7031L15.4991 15.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 200,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 190,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = CaseStudyICon;
const FeatureIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 20 20",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10.0003 1.66669L12.5753 6.88335L18.3337 7.72502L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72502L7.42533 6.88335L10.0003 1.66669Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/menu-icon/index.tsx",
            lineNumber: 210,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 205,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = FeatureIcon;
const TestimonialIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 15",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-[15px] w-4', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.04304 11.8966L1.52717 14.0115C1.43607 14.0881 1.32499 14.1371 1.207 14.1527C1.08901 14.1683 0.969011 14.1499 0.861119 14.0997C0.753228 14.0494 0.661928 13.9694 0.597956 13.869C0.533984 13.7687 0.5 13.6521 0.5 13.5331V1.125C0.5 0.95924 0.565848 0.800269 0.683058 0.683058C0.800269 0.565848 0.95924 0.5 1.125 0.5H14.875C15.0408 0.5 15.1997 0.565848 15.3169 0.683058C15.4342 0.800269 15.5 0.95924 15.5 1.125V11.125C15.5 11.2908 15.4342 11.4497 15.3169 11.5669C15.1997 11.6842 15.0408 11.75 14.875 11.75H4.44522C4.29808 11.75 4.15567 11.8019 4.04304 11.8966Z",
                className: "stroke-secondary dark:stroke-accent",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 220,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7.06244C8.51777 7.06244 8.9375 6.64271 8.9375 6.12494C8.9375 5.60717 8.51777 5.18744 8 5.18744C7.48223 5.18744 7.0625 5.60717 7.0625 6.12494C7.0625 6.64271 7.48223 7.06244 8 7.06244Z",
                className: "fill-secondary dark:fill-accent"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 226,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.25 7.06244C4.76777 7.06244 5.1875 6.64271 5.1875 6.12494C5.1875 5.60717 4.76777 5.18744 4.25 5.18744C3.73223 5.18744 3.3125 5.60717 3.3125 6.12494C3.3125 6.64271 3.73223 7.06244 4.25 7.06244Z",
                className: "fill-secondary dark:fill-accent"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 230,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.75 7.06244C12.2678 7.06244 12.6875 6.64271 12.6875 6.12494C12.6875 5.60717 12.2678 5.18744 11.75 5.18744C11.2322 5.18744 10.8125 5.60717 10.8125 6.12494C10.8125 6.64271 11.2322 7.06244 11.75 7.06244Z",
                className: "fill-secondary dark:fill-accent"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 234,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 219,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = TestimonialIcon;
const IntegrationIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.33301 10.8333C8.69088 11.3118 9.14747 11.7077 9.6718 11.9941C10.1961 12.2806 10.7759 12.4509 11.3719 12.4936C11.9678 12.5363 12.566 12.4503 13.1258 12.2415C13.6856 12.0327 14.1939 11.7059 14.6163 11.2833L17.1163 8.78335C17.8753 7.9975 18.2953 6.94499 18.2858 5.85251C18.2763 4.76002 17.8381 3.71497 17.0656 2.94243C16.2931 2.1699 15.248 1.7317 14.1555 1.7222C13.063 1.71271 12.0105 2.13269 11.2247 2.89168L9.79134 4.31668",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 247,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.6668 9.16665C11.309 8.68821 10.8524 8.29233 10.328 8.00587C9.80371 7.7194 9.22391 7.54905 8.62796 7.50637C8.03201 7.46369 7.43384 7.54968 6.87405 7.7585C6.31425 7.96732 5.8059 8.29409 5.3835 8.71665L2.8835 11.2167C2.12451 12.0025 1.70453 13.055 1.71402 14.1475C1.72352 15.24 2.16172 16.285 2.93426 17.0576C3.70679 17.8301 4.75184 18.2683 5.84433 18.2778C6.93681 18.2873 7.98932 17.8673 8.77517 17.1083L10.2002 15.6833",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 252,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 242,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = IntegrationIcon;
const IntegrationIconV2 = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 15 15",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[15px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.6875 14.25C3.89562 14.25 4.875 13.2706 4.875 12.0625C4.875 10.8544 3.89562 9.875 2.6875 9.875C1.47938 9.875 0.5 10.8544 0.5 12.0625C0.5 13.2706 1.47938 14.25 2.6875 14.25Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 265,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.6875 4.875C3.89562 4.875 4.875 3.89562 4.875 2.6875C4.875 1.47938 3.89562 0.5 2.6875 0.5C1.47938 0.5 0.5 1.47938 0.5 2.6875C0.5 3.89562 1.47938 4.875 2.6875 4.875Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 270,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.0625 10.5C13.2706 10.5 14.25 9.52062 14.25 8.3125C14.25 7.10438 13.2706 6.125 12.0625 6.125C10.8544 6.125 9.875 7.10438 9.875 8.3125C9.875 9.52062 10.8544 10.5 12.0625 10.5Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 275,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.87519 8.625H7.56891C7.01917 8.625 6.47616 8.50413 5.97832 8.27096C5.48049 8.03779 5.04001 7.69801 4.68808 7.27569L2.6875 4.875V9.875",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 280,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 260,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = IntegrationIconV2;
const ProcessICon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 20 20",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.99978 16.875C4.9177 16.875 4.83643 16.8589 4.7606 16.8274C4.68477 16.796 4.61587 16.75 4.55784 16.692C4.4998 16.6339 4.45376 16.565 4.42235 16.4892C4.39095 16.4134 4.37478 16.3321 4.37478 16.25L4.37482 12.9145C4.0414 13.0724 3.67346 13.1434 3.30522 13.121C2.93698 13.0985 2.58041 12.9832 2.26867 12.786C1.95693 12.5887 1.70015 12.3157 1.52222 11.9926C1.34428 11.6694 1.25098 11.3064 1.25098 10.9375C1.25098 10.5686 1.34428 10.2057 1.52222 9.88248C1.70015 9.5593 1.95693 9.28637 2.26867 9.08908C2.58041 8.8918 2.93698 8.77656 3.30522 8.75408C3.67346 8.73161 4.0414 8.80263 4.37482 8.96055L4.37478 5.62503C4.37478 5.54295 4.39095 5.46167 4.42236 5.38584C4.45377 5.31001 4.4998 5.24111 4.55784 5.18308C4.61588 5.12504 4.68478 5.079 4.76061 5.04759C4.83644 5.01618 4.91771 5.00002 4.99979 5.00002L8.6478 5.00006C8.48989 4.66664 8.41886 4.2987 8.44134 3.93046C8.46381 3.56222 8.57905 3.20565 8.77634 2.89391C8.97363 2.58217 9.24656 2.32539 9.56974 2.14746C9.89292 1.96953 10.2558 1.87622 10.6248 1.87622C10.9937 1.87622 11.3566 1.96953 11.6798 2.14746C12.003 2.32539 12.2759 2.58217 12.4732 2.89391C12.6705 3.20565 12.7857 3.56222 12.8082 3.93046C12.8307 4.2987 12.7597 4.66664 12.6017 5.00006L16.2497 5.00002C16.4155 5.00002 16.5745 5.06586 16.6917 5.18307C16.8089 5.30028 16.8747 5.45925 16.8748 5.62501L16.8748 8.96055C16.5414 8.80263 16.1734 8.73161 15.8052 8.75408C15.437 8.77655 15.0804 8.8918 14.7686 9.08908C14.4569 9.28637 14.2001 9.5593 14.0222 9.88248C13.8443 10.2057 13.7509 10.5686 13.7509 10.9375C13.7509 11.3064 13.8443 11.6694 14.0222 11.9926C14.2001 12.3157 14.4569 12.5887 14.7686 12.786C15.0804 12.9832 15.437 13.0985 15.8052 13.121C16.1734 13.1434 16.5414 13.0724 16.8748 12.9145L16.8748 16.25C16.8747 16.4158 16.8089 16.5748 16.6917 16.692C16.5745 16.8092 16.4155 16.875 16.2498 16.875L4.99978 16.875Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/menu-icon/index.tsx",
            lineNumber: 294,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 289,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = ProcessICon;
const PressIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 20 20",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
        }, void 0, false, {
            fileName: "[project]/src/icons/menu-icon/index.tsx",
            lineNumber: 309,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 303,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c15 = PressIcon;
const AnalyticsIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 16.6667V11.6667",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 323,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 16.6666V8.33331",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 324,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 16.6666V3.33331",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 325,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 318,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c16 = AnalyticsIcon;
const AnalyticsIconV2 = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-5, stroke-secondary dark:stroke-accent', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 16.6665V11.6665",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 335,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 16.6668V8.3335",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 336,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 16.6668V3.3335",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 337,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 330,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c17 = AnalyticsIconV2;
const SecurityIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-4 w-[15px]', className),
        viewBox: "0 0 15 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.5 5.70833V1.125C0.5 0.95924 0.565848 0.800269 0.683058 0.683058C0.800269 0.565848 0.95924 0.5 1.125 0.5H13.625C13.7908 0.5 13.9497 0.565848 14.0669 0.683058C14.1842 0.800269 14.25 0.95924 14.25 1.125V5.70833C14.25 12.272 8.67922 14.4466 7.56689 14.8154C7.44254 14.8582 7.30746 14.8582 7.18311 14.8154C6.07078 14.4466 0.5 12.272 0.5 5.70833Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 347,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.8125 4.875L6.22914 9.25L3.9375 7.0625",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 352,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 342,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c18 = SecurityIcon;
const WhitePaperIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[17px] w-[14px]', className),
        viewBox: "0 0 14 17",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.25 10.5H9.25",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 362,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.25 8H9.25",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 363,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.25015 1.75H12.375C12.5408 1.75 12.6997 1.81585 12.8169 1.93306C12.9342 2.05027 13 2.20924 13 2.375V15.5C13 15.6658 12.9342 15.8247 12.8169 15.9419C12.6997 16.0592 12.5408 16.125 12.375 16.125H1.125C0.95924 16.125 0.800269 16.0592 0.683058 15.9419C0.565848 15.8247 0.5 15.6658 0.5 15.5V2.375C0.5 2.20924 0.565848 2.05027 0.683058 1.93306C0.800269 1.81585 0.95924 1.75 1.125 1.75H4.24983",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 364,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.625 4.25V3.625C3.625 2.7962 3.95424 2.00134 4.54029 1.41529C5.12634 0.82924 5.9212 0.5 6.75 0.5C7.5788 0.5 8.37366 0.82924 8.95971 1.41529C9.54576 2.00134 9.875 2.7962 9.875 3.625V4.25H3.625Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 369,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 357,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c19 = WhitePaperIcon;
const WhitePaperIconV2 = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary size-5 dark:stroke-white', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 382,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.66699 2.5H6.66699C7.55105 2.5 8.39889 2.85119 9.02401 3.47631C9.64914 4.10143 10.0003 4.94928 10.0003 5.83333V17.5C10.0003 16.837 9.73693 16.2011 9.26809 15.7322C8.79925 15.2634 8.16337 15 7.50033 15H1.66699V2.5Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 387,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 377,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c20 = WhitePaperIconV2;
const BrandKitIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 16 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.543702 11.7331L2.43333 1.01647C2.46212 0.853231 2.55457 0.708109 2.69035 0.613033C2.82613 0.517957 2.99412 0.480714 3.15737 0.509498L7.4659 1.26921C7.62914 1.29799 7.77426 1.39045 7.86934 1.52623C7.96442 1.66201 8.00166 1.83 7.97287 1.99324L6.0736 12.7646C5.94571 13.4898 5.53849 14.136 4.93939 14.5642C4.3403 14.9925 3.59713 15.1687 2.86954 15.055C1.31152 14.8109 0.269853 13.2862 0.543702 11.7331Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 401,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.9194 7.96721L12.6197 5.89249C12.7754 5.8358 12.9473 5.8433 13.0976 5.91336C13.2478 5.98341 13.364 6.11027 13.4207 6.26603L14.9171 10.3772C14.9451 10.4543 14.9577 10.5362 14.9542 10.6182C14.9506 10.7002 14.9309 10.7807 14.8962 10.8551C14.8615 10.9295 14.8125 10.9963 14.752 11.0518C14.6915 11.1072 14.6206 11.1502 14.5435 11.1783L4.26562 14.9191",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 406,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.8662 10.9116V14.4637C14.8662 14.6294 14.8004 14.7884 14.6832 14.9056C14.5659 15.0228 14.407 15.0887 14.2412 15.0887H3.30371",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 411,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.30371 13.2137C3.82148 13.2137 4.24121 12.794 4.24121 12.2762C4.24121 11.7585 3.82148 11.3387 3.30371 11.3387C2.78594 11.3387 2.36621 11.7585 2.36621 12.2762C2.36621 12.794 2.78594 13.2137 3.30371 13.2137Z",
                className: "fill-secondary dark:fill-accent"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 416,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 396,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c21 = BrandKitIcon;
const DownloadIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 429,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.83301 8.33331L9.99967 12.5L14.1663 8.33331",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 434,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 12.5V2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 435,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 424,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c22 = DownloadIcon;
const BlogIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        viewBox: "0 0 16 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.875 14.6161H1.125C0.95924 14.6161 0.800269 14.5503 0.683058 14.4331C0.565848 14.3159 0.5 14.1569 0.5 13.9911V10.5C0.5 10.4179 0.516166 10.3367 0.547575 10.2608C0.578984 10.185 0.625022 10.1161 0.683059 10.0581L10.0581 0.683058C10.1753 0.565848 10.3342 0.5 10.5 0.5C10.6658 0.5 10.8247 0.565848 10.9419 0.683058L14.4331 4.17418C14.5503 4.29139 14.6161 4.45036 14.6161 4.61612C14.6161 4.78188 14.5503 4.94085 14.4331 5.05806L4.875 14.6161Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 445,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 2.74109L12.375 7.11609",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 450,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 440,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c23 = BlogIcon;
const TutorialIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[18px] w-[14px]', className),
        viewBox: "0 0 14 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.625 16.7501H9.875",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 460,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.89873 11.6728C2.15556 11.0924 1.55363 10.351 1.13818 9.50449C0.722728 8.65796 0.504568 7.72828 0.500096 6.78531C0.481376 3.39763 3.2125 0.581526 6.5993 0.501812C7.91169 0.470211 9.20072 0.852645 10.2835 1.59487C11.3664 2.33709 12.188 3.40141 12.6319 4.63687C13.0757 5.87232 13.1194 7.21618 12.7565 8.47781C12.3937 9.73945 11.6428 10.8548 10.6104 11.6657C10.383 11.8418 10.1986 12.0674 10.0712 12.3253C9.94381 12.5832 9.87672 12.8667 9.87502 13.1544L9.87501 13.625C9.87501 13.7908 9.80916 13.9498 9.69195 14.067C9.57474 14.1842 9.41577 14.25 9.25001 14.25H4.24999C4.08423 14.25 3.92526 14.1842 3.80805 14.067C3.69084 13.9498 3.62499 13.7908 3.62499 13.625L3.62498 13.1539C3.62427 12.8681 3.55851 12.5862 3.43268 12.3296C3.30685 12.073 3.12425 11.8484 2.89873 11.6728V11.6728Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 461,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.38477 3.06134C8.14923 3.19128 8.85448 3.55538 9.40313 4.10336C9.95178 4.65133 10.3167 5.35613 10.4476 6.12043",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 466,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 455,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c24 = TutorialIcon;
const FaqIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[18px]', className),
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.87976 14.3702C2.16069 13.6512 2.63762 12.1415 2.27162 11.257C1.89222 10.34 0.5 9.60195 0.5 8.62497C0.5 7.64801 1.89222 6.91 2.27163 5.99303C2.63763 5.10846 2.1607 3.59882 2.87976 2.87976C3.59882 2.16069 5.10846 2.63762 5.99304 2.27162C6.91002 1.89222 7.64805 0.5 8.62503 0.5C9.60199 0.5 10.34 1.89222 11.257 2.27163C12.1415 2.63763 13.6512 2.1607 14.3702 2.87976C15.0893 3.59882 14.6124 5.10846 14.9784 5.99304C15.3578 6.91002 16.75 7.64805 16.75 8.62503C16.75 9.60199 15.3578 10.34 14.9784 11.257C14.6124 12.1415 15.0893 13.6512 14.3702 14.3702C13.6512 15.0893 12.1415 14.6124 11.257 14.9784C10.34 15.3578 9.60195 16.75 8.62497 16.75C7.64801 16.75 6.91 15.3578 5.99303 14.9784C5.10846 14.6124 3.59882 15.0893 2.87976 14.3702Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 480,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.625 13.625C9.14277 13.625 9.5625 13.2053 9.5625 12.6875C9.5625 12.1697 9.14277 11.75 8.625 11.75C8.10723 11.75 7.6875 12.1697 7.6875 12.6875C7.6875 13.2053 8.10723 13.625 8.625 13.625Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 485,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.625 9.87537V9.25037C9.05765 9.25037 9.48058 9.12207 9.84031 8.88171C10.2 8.64134 10.4804 8.2997 10.646 7.89999C10.8116 7.50027 10.8549 7.06044 10.7705 6.63611C10.6861 6.21177 10.4777 5.822 10.1718 5.51607C9.86587 5.21014 9.47609 5.0018 9.05176 4.9174C8.62743 4.83299 8.18759 4.87631 7.78788 5.04188C7.38817 5.20745 7.04653 5.48782 6.80616 5.84756C6.5658 6.20729 6.4375 6.63022 6.4375 7.06287",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 486,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 475,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c25 = FaqIcon;
const GlossaryIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 14 16",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[14px] h-[16px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.5 14.875C0.5 14.3777 0.697544 13.9008 1.04917 13.5492C1.40081 13.1975 1.87772 13 2.375 13H13V0.5H2.375C1.87772 0.5 1.40081 0.697544 1.04917 1.04917C0.697544 1.40081 0.5 1.87772 0.5 2.375V14.875Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 500,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.5 14.875V15.5H11.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 505,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 495,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c26 = GlossaryIcon;
const ContactIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_4483_34377)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.5415 4.16665C13.3555 4.32545 14.1035 4.72353 14.6899 5.30993C15.2763 5.89632 15.6744 6.64437 15.8332 7.45831M12.5415 0.833313C14.2326 1.02118 15.8095 1.77846 17.0134 2.98082C18.2173 4.18318 18.9765 5.75915 19.1665 7.44998M18.3332 14.1V16.6C18.3341 16.8321 18.2866 17.0618 18.1936 17.2744C18.1006 17.4871 17.9643 17.678 17.7933 17.8349C17.6222 17.9918 17.4203 18.1112 17.2005 18.1856C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1118 9.32486 15.7083C7.31139 14.4289 5.60431 12.7218 4.32486 10.7083C2.91651 8.53432 2.04007 6.05914 1.76653 3.48331C1.7457 3.25287 1.77309 3.02061 1.84695 2.80133C1.9208 2.58205 2.03951 2.38055 2.1955 2.20966C2.3515 2.03877 2.54137 1.90224 2.75302 1.80875C2.96468 1.71526 3.19348 1.66686 3.42486 1.66665H5.92486C6.32929 1.66267 6.72136 1.80588 7.028 2.06959C7.33464 2.3333 7.53493 2.69952 7.59153 3.09998C7.69705 3.90003 7.89274 4.68559 8.17486 5.44165C8.28698 5.73992 8.31125 6.06408 8.24479 6.37571C8.17832 6.68735 8.02392 6.97341 7.79986 7.19998L6.74153 8.25831C7.92783 10.3446 9.65524 12.072 11.7415 13.2583L12.7999 12.2C13.0264 11.9759 13.3125 11.8215 13.6241 11.7551C13.9358 11.6886 14.2599 11.7129 14.5582 11.825C15.3143 12.1071 16.0998 12.3028 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6913 18.3332 14.1Z",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/icons/menu-icon/index.tsx",
                    lineNumber: 515,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 514,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_4483_34377",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: 20,
                        height: 20,
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/icons/menu-icon/index.tsx",
                    lineNumber: 522,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 521,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 509,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c27 = ContactIcon;
const SupportIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 17 18",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[17px] h-[18px]', className),
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.6137 8H13.1137C12.7822 8 12.4643 8.1317 12.2299 8.36612C11.9954 8.60054 11.8637 8.91848 11.8637 9.25V12.375C11.8637 12.7065 11.9954 13.0245 12.2299 13.2589C12.4643 13.4933 12.7822 13.625 13.1137 13.625H14.3637C14.6953 13.625 15.0132 13.4933 15.2476 13.2589C15.482 13.0245 15.6137 12.7065 15.6137 12.375V8ZM15.6137 8C15.6137 7.01031 15.4179 6.03039 15.0374 5.11675C14.6569 4.20311 14.0994 3.3738 13.3969 2.67664C12.6944 1.97947 11.8609 1.42823 10.9444 1.0547C10.0279 0.68116 9.04654 0.492712 8.05687 0.500216C7.0672 0.492712 6.08583 0.68116 5.16932 1.0547C4.25282 1.42823 3.41931 1.97947 2.71684 2.67664C2.01437 3.3738 1.45683 4.20311 1.07636 5.11675C0.695883 6.03039 0.5 7.01031 0.5 8V12.375C0.5 12.7065 0.631696 13.0245 0.866116 13.2589C1.10054 13.4933 1.41848 13.625 1.75 13.625H3C3.33152 13.625 3.64946 13.4933 3.88388 13.2589C4.1183 13.0245 4.25 12.7065 4.25 12.375V9.25C4.25 8.91848 4.1183 8.60054 3.88388 8.36612C3.64946 8.1317 3.33152 8 3 8H0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 535,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.6137 12.375V14.25C15.6137 14.913 15.3503 15.5489 14.8815 16.0178C14.4127 16.4866 13.7768 16.75 13.1137 16.75H8.625",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 540,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 530,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c28 = SupportIcon;
const SupportIconV2 = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4, stroke-secondary dark:stroke-accent', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.54912 11.8217C0.617298 10.2509 0.290965 8.3939 0.631402 6.59948C0.971839 4.80507 1.95563 3.19666 3.39803 2.07627C4.84044 0.955873 6.64224 0.400575 8.46509 0.514644C10.2879 0.628714 12.0065 1.4043 13.2979 2.69577C14.5894 3.98725 15.365 5.70576 15.4791 7.52861C15.5932 9.35147 15.0379 11.1533 13.9175 12.5957C12.7971 14.0381 11.1887 15.0219 9.39429 15.3623C7.59988 15.7028 5.74291 15.3765 4.17207 14.4446L4.17209 14.4446L1.58173 15.1847C1.47456 15.2153 1.36115 15.2167 1.25325 15.1887C1.14536 15.1608 1.0469 15.1045 0.968086 15.0257C0.889272 14.9468 0.832968 14.8484 0.80501 14.7405C0.777051 14.6326 0.778456 14.5192 0.809077 14.412L1.54918 11.8216L1.54912 11.8217Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 554,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7.55615C8.24162 7.55615 8.4375 7.75203 8.4375 7.99365C8.4375 8.23528 8.24162 8.43115 8 8.43115C7.75838 8.43115 7.5625 8.23528 7.5625 7.99365C7.5625 7.75203 7.75838 7.55615 8 7.55615Z",
                fill: "#12161F"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 559,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.25 7.55615C4.49162 7.55615 4.6875 7.75203 4.6875 7.99365C4.6875 8.23528 4.49162 8.43115 4.25 8.43115C4.00838 8.43115 3.8125 8.23528 3.8125 7.99365C3.8125 7.75203 4.00838 7.55615 4.25 7.55615Z",
                fill: "#12161F"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 563,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.75 7.55615C11.9916 7.55615 12.1875 7.75203 12.1875 7.99365C12.1875 8.23528 11.9916 8.43115 11.75 8.43115C11.5084 8.43115 11.3125 8.23528 11.3125 7.99365C11.3125 7.75203 11.5084 7.55615 11.75 7.55615Z",
                fill: "#12161F"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 567,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 549,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c29 = SupportIconV2;
const LoginIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 17 17",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[17px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.27861 8.21139C4.79681 7.00965 4.74472 5.67841 5.13115 4.44269C5.51757 3.20698 6.3188 2.14259 7.39941 1.42943C8.48002 0.716267 9.77372 0.398085 11.0618 0.528665C12.35 0.659244 13.5535 1.23057 14.469 2.14608C15.3845 3.06159 15.9558 4.26513 16.0864 5.55325C16.217 6.84137 15.8988 8.13508 15.1856 9.21568C14.4725 10.2963 13.4081 11.0975 12.1724 11.4839C10.9367 11.8704 9.60542 11.8183 8.40368 11.3365L8.40373 11.3364L7.375 12.3651H5.5V14.2401H3.625V16.1151H0.5V12.9901L5.27875 8.21133L5.27861 8.21139Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 580,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.5",
                d: "M12.0625 4.86505C12.2351 4.86505 12.375 4.72514 12.375 4.55255C12.375 4.37996 12.2351 4.24005 12.0625 4.24005C11.8899 4.24005 11.75 4.37996 11.75 4.55255C11.75 4.72514 11.8899 4.86505 12.0625 4.86505Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 585,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.0625 5.49005C12.5803 5.49005 13 5.07032 13 4.55255C13 4.03478 12.5803 3.61505 12.0625 3.61505C11.5447 3.61505 11.125 4.03478 11.125 4.55255C11.125 5.07032 11.5447 5.49005 12.0625 5.49005Z",
                className: "fill-secondary dark:fill-accent"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 591,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 575,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c30 = LoginIcon;
const SignUpIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[16px] w-[17px]', className),
        viewBox: "0 0 17 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.0791 10.5C10.8405 10.5 13.0791 8.26142 13.0791 5.5C13.0791 2.73858 10.8405 0.5 8.0791 0.5C5.31768 0.5 3.0791 2.73858 3.0791 5.5C3.0791 8.26142 5.31768 10.5 8.0791 10.5Z",
                strokeMiterlimit: 10
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 604,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.5 14.8743C1.26841 13.5442 2.37329 12.4398 3.70366 11.672C5.03403 10.9042 6.54303 10.5 8.07907 10.5C9.61512 10.5 11.1241 10.9043 12.4545 11.6721C13.7848 12.44 14.8897 13.5444 15.6581 14.8744",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 608,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 599,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c31 = SignUpIcon;
const ReferralProgramIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 14",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[14px] w-[16px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.75 8L15.5 4.25L11.75 0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 622,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 13H1.125C0.95924 13 0.800269 12.9342 0.683058 12.8169C0.565848 12.6997 0.5 12.5408 0.5 12.375V3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 623,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.86133 9.87497C4.27758 8.26502 5.21687 6.83895 6.53164 5.82081C7.8464 4.80266 9.46214 4.25013 11.125 4.25H15.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 628,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 617,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c32 = ReferralProgramIcon;
const AffiliateProgramIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[14px] w-[20px]', className),
        viewBox: "0 0 20 14",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.4574 5.59968L16.5264 6.56521L14.0264 1.77755L15.9771 0.80219C16.1237 0.728911 16.2931 0.716117 16.449 0.766565C16.6049 0.817013 16.7348 0.926666 16.8106 1.07191L18.7319 4.75137C18.7704 4.82494 18.7937 4.90543 18.8007 4.98814C18.8077 5.07084 18.7981 5.15411 18.7726 5.23308C18.747 5.31205 18.706 5.38514 18.6519 5.44808C18.5978 5.51102 18.5317 5.56256 18.4574 5.59968V5.59968Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 642,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.77656 6.48147L0.845492 5.51594C0.771253 5.47882 0.705152 5.42729 0.651046 5.36434C0.59694 5.3014 0.555912 5.22831 0.530358 5.14934C0.504804 5.07038 0.495236 4.98711 0.502211 4.9044C0.509186 4.82169 0.532565 4.7412 0.570984 4.66763L2.49231 0.988176C2.56815 0.842928 2.698 0.733274 2.8539 0.682826C3.0098 0.632377 3.17927 0.64517 3.32583 0.718449L5.27656 1.69381L2.77656 6.48147Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 647,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5264 6.56524L15.2764 8.02758L12.4016 10.9024C12.3253 10.9787 12.2305 11.0339 12.1265 11.0627C12.0225 11.0915 11.9128 11.0929 11.8081 11.0668L7.28018 9.93478C7.19525 9.91355 7.11573 9.87472 7.04677 9.82079L2.77637 6.48151",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 652,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.277 8.02759L11.8395 5.52759L10.8395 6.27759C10.4068 6.60214 9.88044 6.77759 9.33951 6.77759C8.79859 6.77759 8.27225 6.60214 7.83951 6.27759L7.41602 5.95997C7.34438 5.90624 7.28512 5.83775 7.24226 5.75913C7.1994 5.68051 7.17394 5.59359 7.16759 5.50427C7.16124 5.41495 7.17416 5.32531 7.20547 5.24142C7.23678 5.15753 7.28576 5.08134 7.34907 5.01803L10.4065 1.96065C10.4645 1.90261 10.5334 1.85657 10.6092 1.82516C10.685 1.79375 10.7663 1.77759 10.8484 1.77759H14.027",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 657,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.32129 1.69385L9.33066 0.524979C9.47389 0.483224 9.62732 0.494078 9.76324 0.555579L12.4639 1.77758",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 662,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.40137 12.7151L6.04672 12.1264C5.95117 12.1025 5.86262 12.0564 5.78829 11.9918L4.02637 10.4603",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 667,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 637,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c33 = AffiliateProgramIcon;
const AffiliatePolicyIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[20px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.6663 1.66669H4.99967C4.55765 1.66669 4.13372 1.84228 3.82116 2.15484C3.5086 2.4674 3.33301 2.89133 3.33301 3.33335V16.6667C3.33301 17.1087 3.5086 17.5326 3.82116 17.8452C4.13372 18.1578 4.55765 18.3334 4.99967 18.3334H14.9997C15.4417 18.3334 15.8656 18.1578 16.1782 17.8452C16.4907 17.5326 16.6663 17.1087 16.6663 16.6667V6.66669L11.6663 1.66669Z",
                className: "stroke-secondary dark:stroke-accent {=$class}",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 681,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.3337 14.1667H6.66699",
                className: "stroke-secondary dark:stroke-accent {=$class}",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 687,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.3337 10.8333H6.66699",
                className: "stroke-secondary dark:stroke-accent {=$class}",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 693,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.33366 7.5H7.50033H6.66699",
                className: "stroke-secondary dark:stroke-accent {=$class}",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 699,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.667 1.66669V6.66669H16.667",
                className: "stroke-secondary dark:stroke-accent {=$class}",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 705,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 676,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c34 = AffiliatePolicyIcon;
const TermsConditionsIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[20px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.833 1.66669H4.99967C4.55765 1.66669 4.13372 1.84228 3.82116 2.15484C3.5086 2.4674 3.33301 2.89133 3.33301 3.33335V16.6667C3.33301 17.1087 3.5086 17.5326 3.82116 17.8452C4.13372 18.1578 4.55765 18.3334 4.99967 18.3334H14.9997C15.4417 18.3334 15.8656 18.1578 16.1782 17.8452C16.4907 17.5326 16.6663 17.1087 16.6663 16.6667V7.50002L10.833 1.66669Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 720,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.833 1.66669V7.50002H16.6663",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 725,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 715,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c35 = TermsConditionsIcon;
const PrivacyIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[20px]', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9.99967 18.3334C9.99967 18.3334 16.6663 15 16.6663 10V4.16669L9.99967 1.66669L3.33301 4.16669V10C3.33301 15 9.99967 18.3334 9.99967 18.3334Z",
            className: "stroke-secondary dark:stroke-accent {=$class}",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/menu-icon/index.tsx",
            lineNumber: 735,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 730,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c36 = PrivacyIcon;
const RefundPolicyIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[20px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_4483_29796)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 0.833313V19.1666",
                        className: "stroke-secondary dark:stroke-accent {=$class}",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 751,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.1667 4.16669H7.91667C7.14312 4.16669 6.40125 4.47398 5.85427 5.02096C5.30729 5.56794 5 6.30981 5 7.08335C5 7.8569 5.30729 8.59877 5.85427 9.14575C6.40125 9.69273 7.14312 10 7.91667 10H12.0833C12.8569 10 13.5987 10.3073 14.1457 10.8543C14.6927 11.4013 15 12.1431 15 12.9167C15 13.6902 14.6927 14.4321 14.1457 14.9791C13.5987 15.5261 12.8569 15.8334 12.0833 15.8334H5",
                        className: "stroke-secondary dark:stroke-accent {=$class}",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 757,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 750,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_4483_29796",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: 20,
                        height: 20,
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 766,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/icons/menu-icon/index.tsx",
                    lineNumber: 765,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 764,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 745,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c37 = RefundPolicyIcon;
const GDPRIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[20px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.6663 17.5V15.8333C16.6663 14.9493 16.3152 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5",
                className: "stroke-secondary dark:stroke-accent {=$class}",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 778,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z",
                className: "stroke-secondary dark:stroke-accent {=$class}",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 784,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 773,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c38 = GDPRIcon;
const PricingIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-[20px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 0.833496V19.1668",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 798,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.1667 4.1665H7.91667C7.14312 4.1665 6.40125 4.47379 5.85427 5.02078C5.30729 5.56776 5 6.30962 5 7.08317C5 7.85672 5.30729 8.59858 5.85427 9.14557C6.40125 9.69255 7.14312 9.99984 7.91667 9.99984H12.0833C12.8569 9.99984 13.5987 10.3071 14.1457 10.8541C14.6927 11.4011 15 12.143 15 12.9165C15 13.6901 14.6927 14.4319 14.1457 14.9789C13.5987 15.5259 12.8569 15.8332 12.0833 15.8332H5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 799,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 793,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c39 = PricingIcon;
const LegalNoticeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 14 16",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-4 w-[14px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.3756 15.5H1.125C0.95924 15.5 0.800268 15.4342 0.683058 15.3169C0.565848 15.1997 0.5 15.0408 0.5 14.875V1.125C0.5 0.95924 0.565848 0.800269 0.683058 0.683058C0.800268 0.565848 0.95924 0.5 1.125 0.5H8.62561L13.0006 4.875V14.875C13.0006 14.9571 12.9844 15.0383 12.953 15.1142C12.9216 15.19 12.8756 15.2589 12.8176 15.3169C12.7595 15.375 12.6906 15.421 12.6148 15.4524C12.539 15.4838 12.4577 15.5 12.3756 15.5Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 813,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.62598 0.5V4.875H13.0016",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 818,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.25098 8.625H9.25098",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 819,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.25098 11.125H9.25098",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 820,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 808,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c40 = LegalNoticeIcon;
const SuccessIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 14 19",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[19px] w-[14px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.75 13C10.2018 13 13 10.2018 13 6.75C13 3.29822 10.2018 0.5 6.75 0.5C3.29822 0.5 0.5 3.29822 0.5 6.75C0.5 10.2018 3.29822 13 6.75 13Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 830,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.75 10.5C8.82107 10.5 10.5 8.82107 10.5 6.75C10.5 4.67893 8.82107 3 6.75 3C4.67893 3 3 4.67893 3 6.75C3 8.82107 4.67893 10.5 6.75 10.5Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 835,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.501 11.7496V18L6.75043 16.125L3.00098 18V11.7502",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 840,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 825,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c41 = SuccessIcon;
const ExploreCompanyIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 17 16",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[16px] w-[17px]', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.2488 15.4988C4.16673 15.4988 4.08546 15.4826 4.00963 15.4512C3.9338 15.4198 3.8649 15.3738 3.80686 15.3157C3.74882 15.2577 3.70279 15.1888 3.67138 15.113C3.63997 15.0371 3.6238 14.9559 3.6238 14.8738L3.62385 11.5383C3.29043 11.6962 2.92249 11.7672 2.55425 11.7447C2.18601 11.7223 1.82943 11.607 1.51769 11.4097C1.20595 11.2124 0.949172 10.9395 0.771239 10.6163C0.593306 10.2932 0.5 9.93022 0.5 9.5613C0.5 9.19237 0.593306 8.82944 0.771239 8.50626C0.949172 8.18308 1.20595 7.91015 1.51769 7.71286C1.82943 7.51557 2.18601 7.40033 2.55425 7.37786C2.92249 7.35539 3.29043 7.42641 3.62385 7.58433L3.62381 4.2488C3.62381 4.16673 3.63997 4.08545 3.67138 4.00962C3.70279 3.93379 3.74883 3.86489 3.80687 3.80685C3.8649 3.74882 3.9338 3.70278 4.00963 3.67137C4.08546 3.63996 4.16674 3.6238 4.24882 3.6238L7.89683 3.62384C7.73891 3.29042 7.66789 2.92248 7.69036 2.55424C7.71283 2.186 7.82808 1.82943 8.02536 1.51769C8.22265 1.20595 8.49558 0.949171 8.81876 0.771239C9.14194 0.593306 9.50487 0.5 9.87379 0.5C10.2427 0.5 10.6056 0.593306 10.9288 0.771239C11.252 0.949171 11.5249 1.20595 11.7222 1.51769C11.9195 1.82943 12.0348 2.186 12.0572 2.55424C12.0797 2.92248 12.0087 3.29042 11.8508 3.62384L15.4988 3.6238C15.6645 3.6238 15.8235 3.68964 15.9407 3.80685C16.0579 3.92406 16.1238 4.08303 16.1238 4.24879L16.1238 7.58433C15.7904 7.42641 15.4225 7.35539 15.0542 7.37786C14.686 7.40033 14.3294 7.51557 14.0177 7.71286C13.7059 7.91015 13.4491 8.18308 13.2712 8.50626C13.0933 8.82944 13 9.19237 13 9.5613C13 9.93022 13.0933 10.2932 13.2712 10.6163C13.4491 10.9395 13.7059 11.2124 14.0177 11.4097C14.3294 11.607 14.686 11.7223 15.0542 11.7447C15.4225 11.7672 15.7904 11.6962 16.1238 11.5383L16.1238 14.8738C16.1238 15.0396 16.0579 15.1985 15.9407 15.3157C15.8235 15.4329 15.6645 15.4988 15.4988 15.4988L4.2488 15.4988Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/menu-icon/index.tsx",
            lineNumber: 850,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 845,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c42 = ExploreCompanyIcon;
const ExploreProductIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_3582_21029)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19.167 17.5001V15.8334C19.1664 15.0948 18.9206 14.3774 18.4681 13.7937C18.0156 13.2099 17.3821 12.793 16.667 12.6084",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 865,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.1663 17.5V15.8333C14.1663 14.9493 13.8152 14.1014 13.19 13.4763C12.5649 12.8512 11.7171 12.5 10.833 12.5H4.16634C3.28229 12.5 2.43444 12.8512 1.80932 13.4763C1.1842 14.1014 0.833008 14.9493 0.833008 15.8333V17.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 870,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13.333 2.6084C14.05 2.79198 14.6855 3.20898 15.1394 3.79366C15.5932 4.37833 15.8395 5.09742 15.8395 5.83757C15.8395 6.57771 15.5932 7.2968 15.1394 7.88147C14.6855 8.46615 14.05 8.88315 13.333 9.06673",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 875,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7.50033 9.16667C9.34127 9.16667 10.8337 7.67428 10.8337 5.83333C10.8337 3.99238 9.34127 2.5 7.50033 2.5C5.65938 2.5 4.16699 3.99238 4.16699 5.83333C4.16699 7.67428 5.65938 9.16667 7.50033 9.16667Z",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 880,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 864,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_3582_21029",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: 20,
                        height: 20,
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/menu-icon/index.tsx",
                        lineNumber: 888,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/icons/menu-icon/index.tsx",
                    lineNumber: 887,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 886,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 859,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c43 = ExploreProductIcon;
const ExploreResourcesIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.3337 15.8333C18.3337 16.2754 18.1581 16.6993 17.8455 17.0118C17.5329 17.3244 17.109 17.5 16.667 17.5H3.33366C2.89163 17.5 2.46771 17.3244 2.15515 17.0118C1.84259 16.6993 1.66699 16.2754 1.66699 15.8333V4.16667C1.66699 3.72464 1.84259 3.30072 2.15515 2.98816C2.46771 2.67559 2.89163 2.5 3.33366 2.5H7.50033L9.16699 5H16.667C17.109 5 17.5329 5.17559 17.8455 5.48816C18.1581 5.80072 18.3337 6.22464 18.3337 6.66667V15.8333Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/icons/menu-icon/index.tsx",
            lineNumber: 900,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 895,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c44 = ExploreResourcesIcon;
const ExplorePricingAndAccountIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 10,
        height: 14,
        viewBox: "0 0 10 14",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[14px] w-2.5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.03598 5.35749L9.29875 6.62026L8.03598 7.88303L6.7732 6.62026L8.03598 5.35749Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 916,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.94282 11.9772L2.68004 13.24L1.41727 11.9772L2.68004 10.7145L3.94282 11.9772Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 917,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.25015 3.57166L7.51292 4.83443L6.25015 6.0972L4.98737 4.83443L6.25015 3.57166Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 918,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.72864 10.1914L4.46587 11.4542L3.2031 10.1914L4.46587 8.92863L5.72864 10.1914Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 919,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.46432 1.78583L5.72709 3.0486L4.46432 4.31137L3.20154 3.0486L4.46432 1.78583Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 920,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.51447 8.40557L6.2517 9.66834L4.98893 8.40557L6.2517 7.1428L7.51447 8.40557Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 921,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.67848 0L3.94126 1.26277L2.67848 2.52554L1.41571 1.26277L2.67848 0Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 922,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.72864 6.61974L4.46587 7.88251L3.2031 6.61974L4.46587 5.35697L5.72864 6.61974Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 923,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.52555 6.61974L1.26277 7.88251L0 6.61974L1.26277 5.35697L2.52555 6.61974Z"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 924,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 909,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c45 = ExplorePricingAndAccountIcon;
const ChangeLogIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-4', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.15965 12.1317C4.27577 14.7833 0.740234 14.7833 0.740234 14.7833C0.740234 14.7833 0.740234 11.2478 3.39188 10.3639",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 936,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.1152 5.94448L7.8119 11.2478L4.27637 7.71224L9.57967 2.40894C11.5878 0.400808 13.5959 0.420396 14.4524 0.548173C14.5842 0.56783 14.7063 0.629324 14.8005 0.723595C14.8948 0.817866 14.9563 0.939927 14.976 1.07179C15.1037 1.9282 15.1233 3.93634 13.1152 5.94448Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 941,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.2309 6.82837V11.8728C12.2309 11.9549 12.2148 12.0361 12.1834 12.112C12.152 12.1878 12.1059 12.2567 12.0479 12.3147L9.52118 14.8414C9.44119 14.9214 9.34099 14.9782 9.23126 15.0057C9.12153 15.0332 9.0064 15.0305 8.89813 14.9977C8.78985 14.9649 8.69251 14.9033 8.61648 14.8196C8.54044 14.7358 8.48856 14.633 8.46638 14.5221L7.81152 11.2478",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 946,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.69612 3.29285H3.6517C3.56962 3.29285 3.48835 3.30901 3.41252 3.34042C3.33669 3.37183 3.26779 3.41787 3.20976 3.4759L0.683058 6.0026C0.603067 6.0826 0.546286 6.1828 0.51877 6.29253C0.491254 6.40225 0.494036 6.51739 0.526818 6.62566C0.559599 6.73393 0.621152 6.83128 0.704913 6.90731C0.788673 6.98335 0.8915 7.03522 1.00243 7.05741L4.2767 7.71226",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 951,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 929,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c46 = ChangeLogIcon;
const AffiliateIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 14,
        viewBox: "0 0 20 14",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent h-[14px] w-5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.4574 5.59968L16.5264 6.56521L14.0264 1.77755L15.9771 0.80219C16.1237 0.728911 16.2931 0.716117 16.449 0.766565C16.6049 0.817013 16.7348 0.926666 16.8106 1.07191L18.7319 4.75137C18.7704 4.82494 18.7937 4.90543 18.8007 4.98814C18.8077 5.07084 18.7981 5.15411 18.7726 5.23308C18.747 5.31205 18.706 5.38514 18.6519 5.44808C18.5978 5.51102 18.5317 5.56256 18.4574 5.59968V5.59968Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 967,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.77656 6.48147L0.845492 5.51594C0.771253 5.47882 0.705152 5.42729 0.651046 5.36434C0.59694 5.3014 0.555912 5.22831 0.530358 5.14934C0.504804 5.07038 0.495236 4.98711 0.502211 4.9044C0.509186 4.82169 0.532565 4.7412 0.570984 4.66763L2.49231 0.988176C2.56815 0.842928 2.698 0.733274 2.8539 0.682826C3.0098 0.632377 3.17927 0.64517 3.32583 0.718449L5.27656 1.69381L2.77656 6.48147Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 972,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5264 6.56524L15.2764 8.02758L12.4016 10.9024C12.3253 10.9787 12.2305 11.0339 12.1265 11.0627C12.0225 11.0915 11.9128 11.0929 11.8081 11.0668L7.28018 9.93478C7.19525 9.91355 7.11573 9.87472 7.04677 9.82079L2.77637 6.48151",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 977,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.277 8.02759L11.8395 5.52759L10.8395 6.27759C10.4068 6.60214 9.88044 6.77759 9.33951 6.77759C8.79859 6.77759 8.27225 6.60214 7.83951 6.27759L7.41602 5.95997C7.34438 5.90624 7.28512 5.83775 7.24226 5.75913C7.1994 5.68051 7.17394 5.59359 7.16759 5.50427C7.16124 5.41495 7.17416 5.32531 7.20547 5.24142C7.23678 5.15753 7.28576 5.08134 7.34907 5.01803L10.4065 1.96065C10.4645 1.90261 10.5334 1.85657 10.6092 1.82516C10.685 1.79375 10.7663 1.77759 10.8484 1.77759H14.027",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 982,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.32129 1.69385L9.33066 0.524979C9.47389 0.483224 9.62732 0.494078 9.76324 0.555579L12.4639 1.77758",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 987,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.40137 12.7151L6.04672 12.1264C5.95117 12.1025 5.86262 12.0564 5.78829 11.9918L4.02637 10.4603",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 992,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 960,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c47 = AffiliateIcon;
const DocsIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('stroke-secondary dark:stroke-accent size-5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.3337 15.8333C18.3337 16.2754 18.1581 16.6993 17.8455 17.0118C17.5329 17.3244 17.109 17.5 16.667 17.5H3.33366C2.89163 17.5 2.46771 17.3244 2.15515 17.0118C1.84259 16.6993 1.66699 16.2754 1.66699 15.8333V4.16667C1.66699 3.72464 1.84259 3.30072 2.15515 2.98816C2.46771 2.67559 2.89163 2.5 3.33366 2.5H7.50033L9.16699 5H16.667C17.109 5 17.5329 5.17559 17.8455 5.48816C18.1581 5.80072 18.3337 6.22464 18.3337 6.66667V15.8333Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 1008,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 9.16669V14.1667",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 1013,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.5 11.6667H12.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/icons/menu-icon/index.tsx",
                lineNumber: 1014,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/menu-icon/index.tsx",
        lineNumber: 1001,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c48 = DocsIcon;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47, _c48;
__turbopack_context__.k.register(_c, "AboutIcon");
__turbopack_context__.k.register(_c1, "ServiceIcon");
__turbopack_context__.k.register(_c2, "TeamIcon");
__turbopack_context__.k.register(_c3, "CareerIcon");
__turbopack_context__.k.register(_c4, "CareerIconV2");
__turbopack_context__.k.register(_c5, "ManifestoIcon");
__turbopack_context__.k.register(_c6, "WhyChooseUsIcon");
__turbopack_context__.k.register(_c7, "CustomersIcon");
__turbopack_context__.k.register(_c8, "UseCaseIcon");
__turbopack_context__.k.register(_c9, "CaseStudyICon");
__turbopack_context__.k.register(_c10, "FeatureIcon");
__turbopack_context__.k.register(_c11, "TestimonialIcon");
__turbopack_context__.k.register(_c12, "IntegrationIcon");
__turbopack_context__.k.register(_c13, "IntegrationIconV2");
__turbopack_context__.k.register(_c14, "ProcessICon");
__turbopack_context__.k.register(_c15, "PressIcon");
__turbopack_context__.k.register(_c16, "AnalyticsIcon");
__turbopack_context__.k.register(_c17, "AnalyticsIconV2");
__turbopack_context__.k.register(_c18, "SecurityIcon");
__turbopack_context__.k.register(_c19, "WhitePaperIcon");
__turbopack_context__.k.register(_c20, "WhitePaperIconV2");
__turbopack_context__.k.register(_c21, "BrandKitIcon");
__turbopack_context__.k.register(_c22, "DownloadIcon");
__turbopack_context__.k.register(_c23, "BlogIcon");
__turbopack_context__.k.register(_c24, "TutorialIcon");
__turbopack_context__.k.register(_c25, "FaqIcon");
__turbopack_context__.k.register(_c26, "GlossaryIcon");
__turbopack_context__.k.register(_c27, "ContactIcon");
__turbopack_context__.k.register(_c28, "SupportIcon");
__turbopack_context__.k.register(_c29, "SupportIconV2");
__turbopack_context__.k.register(_c30, "LoginIcon");
__turbopack_context__.k.register(_c31, "SignUpIcon");
__turbopack_context__.k.register(_c32, "ReferralProgramIcon");
__turbopack_context__.k.register(_c33, "AffiliateProgramIcon");
__turbopack_context__.k.register(_c34, "AffiliatePolicyIcon");
__turbopack_context__.k.register(_c35, "TermsConditionsIcon");
__turbopack_context__.k.register(_c36, "PrivacyIcon");
__turbopack_context__.k.register(_c37, "RefundPolicyIcon");
__turbopack_context__.k.register(_c38, "GDPRIcon");
__turbopack_context__.k.register(_c39, "PricingIcon");
__turbopack_context__.k.register(_c40, "LegalNoticeIcon");
__turbopack_context__.k.register(_c41, "SuccessIcon");
__turbopack_context__.k.register(_c42, "ExploreCompanyIcon");
__turbopack_context__.k.register(_c43, "ExploreProductIcon");
__turbopack_context__.k.register(_c44, "ExploreResourcesIcon");
__turbopack_context__.k.register(_c45, "ExplorePricingAndAccountIcon");
__turbopack_context__.k.register(_c46, "ChangeLogIcon");
__turbopack_context__.k.register(_c47, "AffiliateIcon");
__turbopack_context__.k.register(_c48, "DocsIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/hover-bg-transform.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
;
;
const HoverBgTransform = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background-3 dark:bg-background-7 absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-300', className)
    }, void 0, false, {
        fileName: "[project]/src/components/shared/hover-bg-transform.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HoverBgTransform;
HoverBgTransform.displayName = 'HoverBgTransform';
const __TURBOPACK__default__export__ = HoverBgTransform;
var _c;
__turbopack_context__.k.register(_c, "HoverBgTransform");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/navbar/EngageMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/menu-icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$hover$2d$bg$2d$transform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/hover-bg-transform.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const engageLinks = [
    {
        title: 'Skillfullhub',
        description: 'skillfullhub.com',
        href: 'https://skillfullhub.com/',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceIcon"]
    },
    {
        title: 'Felyzone',
        description: 'felyzone.com',
        href: 'http://felyzone.com/',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomersIcon"]
    },
    {
        title: 'Felynova',
        description: 'felynova.com',
        href: 'https://felynova.com/',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupportIcon"]
    },
    {
        title: 'Aidora',
        description: 'aidora.care',
        href: 'http://aidora.care/',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactIcon"]
    },
    {
        title: 'Fely Wallet',
        description: 'felywallet.com',
        href: 'http://felywallet.com/',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestimonialIcon"]
    }
];
const EngageMenu = ({ menuDropdownId, setMenuDropdownId })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[300px] -translate-x-1/2 bg-transparent opacity-0', menuDropdownId === 'engage-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: "engage-dropdown-menu",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[300px] -translate-x-1/2 space-y-2.5 rounded-[20px] border bg-white p-3 opacity-0 transition-all duration-300', menuDropdownId === 'engage-mega-menu' ? '!pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2.5 opacity-0'),
                children: engageLinks.map(({ title, description, href, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            onClick: ()=>setMenuDropdownId(null),
                            className: "group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$hover$2d$bg$2d$transform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "group-hover:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                        fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tagline-1 text-secondary dark:text-accent font-normal",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, title, false, {
                        fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/navbar/EngageMenu.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = EngageMenu;
EngageMenu.displayName = 'EngageMenu';
const __TURBOPACK__default__export__ = EngageMenu;
var _c;
__turbopack_context__.k.register(_c, "EngageMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/navbar/ExploreMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/menu-icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$hover$2d$bg$2d$transform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/hover-bg-transform.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const aboutLinks = [
    {
        title: 'Behind the Story',
        description: 'Discover our mission',
        href: '/about',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutIcon"]
    },
    {
        title: 'White Paper',
        description: 'Read our whitepaper',
        href: '/whitepaper',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhitePaperIcon"]
    },
    {
        title: 'Team',
        description: 'Meet the team',
        href: '/team',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamIcon"]
    }
];
const ExploreMenu = ({ menuDropdownId, setMenuDropdownId })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[300px] -translate-x-1/2 bg-transparent opacity-0', menuDropdownId === 'explore-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: "explore-dropdown-menu",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[300px] -translate-x-1/2 space-y-2.5 rounded-[20px] border bg-white p-3 opacity-0 transition-all duration-300', menuDropdownId === 'explore-mega-menu' ? '!pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2.5 opacity-0'),
                children: aboutLinks.map(({ title, description, href, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            onClick: ()=>setMenuDropdownId(null),
                            className: "group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$hover$2d$bg$2d$transform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "group-hover:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                        fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tagline-1 text-secondary dark:text-accent font-normal",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, title, false, {
                        fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/navbar/ExploreMenu.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ExploreMenu;
ExploreMenu.displayName = 'ExploreMenu';
const __TURBOPACK__default__export__ = ExploreMenu;
var _c;
__turbopack_context__.k.register(_c, "ExploreMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/navbar/InsightsMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/menu-icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$hover$2d$bg$2d$transform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/hover-bg-transform.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const insightLinks = [
    {
        title: 'Concept',
        description: 'Learn about our core concept',
        href: '/concept',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhitePaperIcon"]
    },
    {
        title: 'Road Map',
        description: 'View our journey',
        href: '/road-map',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChangeLogIcon"]
    },
    {
        title: 'Tokonomics',
        description: 'Understand value distribution',
        href: '/tokonomics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalyticsIcon"]
    },
    {
        title: 'Token Distribution',
        description: 'See allocation details',
        href: '/token-distribution',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AffiliateIcon"]
    }
];
const InsightsMenu = ({ menuDropdownId, setMenuDropdownId })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent opacity-0', menuDropdownId === 'insights-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: "insights-dropdown-menu",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[320px] -translate-x-1/2 rounded-[20px] border bg-white p-3 opacity-0 transition-all duration-300', menuDropdownId === 'insights-mega-menu' ? '!pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2.5 opacity-0'),
                children: insightLinks.map(({ title, description, href, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            onClick: ()=>setMenuDropdownId(null),
                            className: "group relative flex items-start gap-3 rounded-2xl p-3 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$hover$2d$bg$2d$transform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "group-hover:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                        fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tagline-1 text-secondary dark:text-accent font-normal",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, title, false, {
                        fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/navbar/InsightsMenu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = InsightsMenu;
InsightsMenu.displayName = 'InsightsMenu';
const __TURBOPACK__default__export__ = InsightsMenu;
var _c;
__turbopack_context__.k.register(_c, "InsightsMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/navbar/MobileMenuButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MobileMenuContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const MobileMenuButton = ()=>{
    _s();
    const { openMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenuContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "block xl:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>openMenu(),
            className: "bg-background-4 dark:bg-background-6 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full transition-all duration-200",
            "aria-label": "Open mobile menu",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Menu"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/navbar/MobileMenuButton.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-stroke-9 dark:bg-stroke-1 block h-0.5 w-6 transition-all duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/navbar/MobileMenuButton.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-stroke-9 dark:bg-stroke-1 block h-0.5 w-6 transition-all duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/navbar/MobileMenuButton.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-stroke-9 dark:bg-stroke-1 block h-0.5 w-6 transition-all duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/navbar/MobileMenuButton.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/navbar/MobileMenuButton.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/navbar/MobileMenuButton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileMenuButton, "cnkwXTD9ZZSbUFHXjeSlThkKkMo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileMenuContext"]
    ];
});
_c = MobileMenuButton;
const __TURBOPACK__default__export__ = MobileMenuButton;
var _c;
__turbopack_context__.k.register(_c, "MobileMenuButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/navbar/FelyMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/menu-icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$hover$2d$bg$2d$transform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/hover-bg-transform.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const felyLinks = [
    {
        title: 'Buy Fely',
        description: 'Purchase FELY tokens',
        href: '/buy',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutIcon"]
    },
    {
        title: 'Stake Fely',
        description: 'Earn rewards by staking',
        href: '/stake',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$menu$2d$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamIcon"]
    }
];
const FelyMenu = ({ menuDropdownId, setMenuDropdownId })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[300px] -translate-x-1/2 bg-transparent opacity-0', menuDropdownId === 'fely-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: "fely-dropdown-menu",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[300px] -translate-x-1/2 space-y-2.5 rounded-[20px] border bg-white p-3 opacity-0 transition-all duration-300', menuDropdownId === 'fely-mega-menu' ? '!pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2.5 opacity-0'),
                children: felyLinks.map(({ title, description, href, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            onClick: ()=>setMenuDropdownId(null),
                            className: "group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$hover$2d$bg$2d$transform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "group-hover:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                        fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                                        lineNumber: 63,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                                    lineNumber: 62,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tagline-1 text-secondary dark:text-accent font-normal",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                                            lineNumber: 66,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                            lineNumber: 57,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, title, false, {
                        fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/navbar/FelyMenu.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FelyMenu;
FelyMenu.displayName = 'FelyMenu';
const __TURBOPACK__default__export__ = FelyMenu;
var _c;
__turbopack_context__.k.register(_c, "FelyMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/RevealAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MobileMenuContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navbar$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navbar-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/shared/felysyum-logo.png.mjs { IMAGE => "[project]/public/images/shared/felysyum-logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$mobile$2d$menu$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/mobile-menu/MobileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$EngageMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/navbar/EngageMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$ExploreMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/navbar/ExploreMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$InsightsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/navbar/InsightsMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$MobileMenuButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/navbar/MobileMenuButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$FelyMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/navbar/FelyMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const Navbar = ()=>{
    _s();
    const { isScrolled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavbarScroll"])(150);
    const [menuDropdownId, setMenuDropdownId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleMenuHover = (dropdownId)=>{
        setMenuDropdownId(dropdownId || null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MobileMenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenuProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                onMouseLeave: ()=>handleMenuHover(null),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('lp:!max-w-[1290px] bg-background-2 dark:bg-background-6 fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]', isScrolled && 'top-2'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    direction: "up",
                    offset: 100,
                    delay: 0.1,
                    instant: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background-2 dark:bg-background-6 flex items-center justify-between rounded-full px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                className: "hidden  lg:block lg:max-w-[220px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    alt: "NextSaaS",
                                                    className: "py-2 pl-5",
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                className: "block max-w-[120px] lg:hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$felysyum$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    alt: "NextSaaS",
                                                    className: "w-full",
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden items-center xl:flex",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "py-2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    className: "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200",
                                                    children: "Elysium"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                onMouseEnter: ()=>handleMenuHover('explore-mega-menu'),
                                                "data-menu": "explore-mega-menu",
                                                className: "group/nav-item relative cursor-pointer py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        onClick: (event)=>event.preventDefault(),
                                                        className: "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "About"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: "1.5",
                                                                    stroke: "currentColor",
                                                                    className: "size-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$ExploreMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        menuDropdownId: menuDropdownId,
                                                        setMenuDropdownId: setMenuDropdownId
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                onMouseEnter: ()=>handleMenuHover('fely-mega-menu'),
                                                "data-menu": "fely-mega-menu",
                                                className: "group/nav-item relative cursor-pointer py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        onClick: (event)=>event.preventDefault(),
                                                        className: "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "FELY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: "1.5",
                                                                    stroke: "currentColor",
                                                                    className: "size-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$FelyMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        menuDropdownId: menuDropdownId,
                                                        setMenuDropdownId: setMenuDropdownId
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                onMouseEnter: ()=>handleMenuHover('insights-mega-menu'),
                                                "data-menu": "insights-mega-menu",
                                                className: "group/nav-item relative cursor-pointer py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        onClick: (event)=>event.preventDefault(),
                                                        className: "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Insight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: "1.5",
                                                                    stroke: "currentColor",
                                                                    className: "size-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                        lineNumber: 122,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$InsightsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        menuDropdownId: menuDropdownId,
                                                        setMenuDropdownId: setMenuDropdownId
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                onMouseEnter: ()=>handleMenuHover('engage-mega-menu'),
                                                "data-menu": "engage-mega-menu",
                                                className: "group/nav-item relative cursor-pointer py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        onClick: (event)=>event.preventDefault(),
                                                        className: "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Products"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: "1.5",
                                                                    stroke: "currentColor",
                                                                    className: "size-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$EngageMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        menuDropdownId: menuDropdownId,
                                                        setMenuDropdownId: setMenuDropdownId
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "py-2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/announcement",
                                                    className: "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200",
                                                    children: "Announcements"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "py-2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blog",
                                                    className: "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200",
                                                    children: "Blog"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "py-2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact-us",
                                                    className: "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200",
                                                    children: "Contact"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden items-center justify-center xl:flex",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signup",
                                        className: "btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Get started"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navbar$2f$MobileMenuButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$mobile$2d$menu$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                menuData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navbar$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileMenuData"]
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/navbar/Navbar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "Ujahiw8zykmtt8bHDxZE7+eXqP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavbarScroll"]
    ];
});
_c = Navbar;
Navbar.displayName = 'Navbar';
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_520bc592._.js.map