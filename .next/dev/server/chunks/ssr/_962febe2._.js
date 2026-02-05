module.exports = [
"[project]/src/components/ui/stack-card/StackCardItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-ssr] (ecmascript)");
'use client';
;
;
const StackCardItem = ({ children, className })=>{
    if (!children || !children.props) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('js-stack-cards__item', children.props.className || '', className)
    });
};
StackCardItem.displayName = 'StackCardItem';
const __TURBOPACK__default__export__ = StackCardItem;
}),
"[project]/src/utils/stack-card/domUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utility functions for DOM manipulation
__turbopack_context__.s([
    "MathUtils",
    ()=>MathUtils,
    "Util",
    ()=>Util
]);
class Util {
    static hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    }
    static addClass(el, className) {
        const classList = className.split(' ');
        if (el.classList) {
            el.classList.add(classList[0]);
        } else if (!this.hasClass(el, classList[0])) {
            el.className += ' ' + classList[0];
        }
        if (classList.length > 1) {
            this.addClass(el, classList.slice(1).join(' '));
        }
    }
    static removeClass(el, className) {
        const classList = className.split(' ');
        if (el.classList) {
            el.classList.remove(classList[0]);
        } else if (this.hasClass(el, classList[0])) {
            const reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
        if (classList.length > 1) {
            this.removeClass(el, classList.slice(1).join(' '));
        }
    }
    static toggleClass(el, className, bool) {
        if (bool) {
            this.addClass(el, className);
        } else {
            this.removeClass(el, className);
        }
    }
    static setAttributes(el, attrs) {
        for(const key in attrs){
            el.setAttribute(key, attrs[key]);
        }
    }
    static getChildrenByClassName(el, className) {
        const childrenByClass = [];
        for(let i = 0; i < el.children.length; i++){
            if (this.hasClass(el.children[i], className)) {
                childrenByClass.push(el.children[i]);
            }
        }
        return childrenByClass;
    }
    static is(elem, selector) {
        if (selector.nodeType) {
            return elem === selector;
        }
        const qa = typeof selector === 'string' ? document.querySelectorAll(selector) : [
            selector
        ];
        const length = qa.length;
        for(let i = 0; i < length; i++){
            if (qa[i] === elem) {
                return true;
            }
        }
        return false;
    }
    static getIndexInArray(array, el) {
        return Array.prototype.indexOf.call(array, el);
    }
    static cssSupports(property, value) {
        if ('CSS' in window) {
            return CSS.supports(property, value);
        } else {
            const jsProperty = property.replace(/-([a-z])/g, function(g) {
                return g[1].toUpperCase();
            });
            return jsProperty in document.body.style;
        }
    }
    static extend(...args) {
        const extended = {};
        let deep = false;
        let i = 0;
        const length = args.length;
        // Check if a deep merge
        if (Object.prototype.toString.call(args[0]) === '[object Boolean]') {
            deep = args[0];
            i++;
        }
        // Merge the object into the extended object
        const merge = function(obj) {
            for(const prop in obj){
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    // If deep merge and property is an object, merge properties
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = Util.extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };
        // Loop through each object and conduct a merge
        for(; i < length; i++){
            const obj = args[i];
            if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
                merge(obj);
            }
        }
        return extended;
    }
    static osHasReducedMotion() {
        if (!window.matchMedia) {
            return false;
        }
        const matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (matchMediaObj) {
            return matchMediaObj.matches;
        }
        return false; // return false if not supported
    }
}
const MathUtils = {
    easeInOutQuad: function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
};
}),
"[project]/src/utils/stack-card/stackCards.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StackCards",
    ()=>StackCards,
    "initStackCards",
    ()=>initStackCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stack$2d$card$2f$domUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/stack-card/domUtils.ts [app-ssr] (ecmascript)");
;
class StackCards {
    element;
    items;
    scrollingFn = false;
    scrolling = false;
    marginY = 0;
    elementHeight = 0;
    cardTop = 0;
    cardHeight = 0;
    windowHeight = 0;
    constructor(element){
        this.element = element;
        this.items = this.element.getElementsByClassName('js-stack-cards__item');
        this.initStackCardsEffect();
        this.initStackCardsResize();
    }
    initStackCardsEffect() {
        this.setStackCards();
        const observer = new IntersectionObserver(this.stackCardsCallback.bind(this), {
            threshold: [
                0,
                1
            ]
        });
        observer.observe(this.element);
    }
    initStackCardsResize() {
        this.element.addEventListener('resize-stack-cards', ()=>{
            this.setStackCards();
            this.animateStackCards();
        });
    }
    stackCardsCallback = (entries)=>{
        if (entries[0].isIntersecting) {
            if (this.scrollingFn) {
                return;
            } // listener for scroll event already added
            this.stackCardsInitEvent();
        } else {
            if (!this.scrollingFn) {
                return;
            } // listener for scroll event already removed
            window.removeEventListener('scroll', this.scrollingFn);
            this.scrollingFn = false;
        }
    };
    stackCardsInitEvent() {
        this.scrollingFn = this.stackCardsScrolling.bind(this);
        window.addEventListener('scroll', this.scrollingFn);
    }
    stackCardsScrolling() {
        if (this.scrolling) {
            return;
        }
        this.scrolling = true;
        window.requestAnimationFrame(this.animateStackCards.bind(this));
    }
    setStackCards() {
        // store wrapper properties
        const computedStyle = getComputedStyle(this.element);
        this.marginY = this.getIntegerFromProperty(computedStyle.getPropertyValue('--stack-cards-gap'));
        this.elementHeight = this.element.offsetHeight;
        // store card properties
        const cardStyle = getComputedStyle(this.items[0]);
        const topOffset = cardStyle.getPropertyValue('top');
        // Handle different top offset units (vh, px, etc.)
        if (topOffset.includes('vh')) {
            this.cardTop = Math.floor(parseFloat(topOffset) / 100 * window.innerHeight);
        } else {
            this.cardTop = Math.floor(parseFloat(topOffset));
        }
        // Get actual card height from rendered element
        const firstItem = this.items[0];
        this.cardHeight = firstItem.offsetHeight || 300;
        // store window property
        this.windowHeight = window.innerHeight;
        // Set up initial positioning for sticky cards
        for(let i = 0; i < this.items.length; i++){
            const item = this.items[i];
            if (isNaN(this.marginY)) {
                item.style.transform = 'none';
            } else {
                // Set initial transform for stacking
                item.style.transform = 'translateY(' + this.marginY * i + 'px)';
            }
        }
    }
    getIntegerFromProperty(property) {
        const node = document.createElement('div');
        node.setAttribute('style', 'opacity:0; visibility: hidden; position: absolute; height:' + property);
        this.element.appendChild(node);
        const height = parseInt(getComputedStyle(node).getPropertyValue('height'));
        this.element.removeChild(node);
        return height;
    }
    animateStackCards() {
        if (isNaN(this.marginY)) {
            // --stack-cards-gap not defined - do not trigger the effect
            this.scrolling = false;
            return;
        }
        const top = this.element.getBoundingClientRect().top;
        if (this.cardTop - top + this.windowHeight - this.elementHeight - this.cardHeight + this.marginY + this.marginY * this.items.length > 0) {
            this.scrolling = false;
            return;
        }
        for(let i = 0; i < this.items.length; i++){
            // use only scale
            const scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);
            if (scrolling > 0) {
                const scaling = i === this.items.length - 1 ? 1 : (this.cardHeight - scrolling * 0.05) / this.cardHeight;
                this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px) scale(' + scaling + ')';
            } else {
                this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px)';
            }
        }
        this.scrolling = false;
    }
}
function initStackCards() {
    const stackCards = document.getElementsByClassName('js-stack-cards');
    const intersectionObserverSupported = 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
    const reducedMotion = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stack$2d$card$2f$domUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Util"].osHasReducedMotion();
    if (stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) {
        const stackCardsArray = [];
        for(let i = 0; i < stackCards.length; i++){
            stackCardsArray.push(new StackCards(stackCards[i]));
        }
        let resizingId = false;
        const customEvent = new CustomEvent('resize-stack-cards');
        window.addEventListener('resize', ()=>{
            if (resizingId) {
                clearTimeout(resizingId);
            }
            resizingId = setTimeout(()=>{
                for(let i = 0; i < stackCardsArray.length; i++){
                    stackCardsArray[i].element.dispatchEvent(customEvent);
                }
            }, 500);
        });
    }
}
}),
"[project]/src/hooks/useStackCards.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStackCards",
    ()=>useStackCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stack$2d$card$2f$stackCards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/stack-card/stackCards.ts [app-ssr] (ecmascript)");
'use client';
;
;
const useStackCards = (options = {})=>{
    const { topOffset = '50vh', gap = '20px', initDelay = 100, disabled = false } = options;
    const stackCardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (globalThis.window === undefined || disabled || !stackCardsRef.current) {
            return;
        }
        const initialize = ()=>{
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(()=>{
                // Ensure the element is in the DOM and has the class
                if (stackCardsRef.current?.classList.contains('js-stack-cards')) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stack$2d$card$2f$stackCards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initStackCards"])();
                }
            });
        };
        const timer = setTimeout(initialize, initDelay);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        initDelay,
        disabled
    ]);
    const stackCardsProps = {
        ref: stackCardsRef,
        className: 'js-stack-cards',
        style: {
            '--stack-cards-top-offset': topOffset,
            '--stack-cards-gap': gap
        }
    };
    return {
        stackCardsRef,
        stackCardsProps
    };
};
}),
"[project]/src/components/ui/stack-card/StackCardWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStackCards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStackCards.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const StackCardWrapper = ({ children, className, topOffset, gap, initDelay, disabled })=>{
    const { stackCardsProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStackCards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStackCards"])({
        topOffset,
        gap,
        initDelay,
        disabled
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...stackCardsProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(stackCardsProps.className, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/stack-card/StackCardWrapper.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
StackCardWrapper.displayName = 'StackCardWrapper';
const __TURBOPACK__default__export__ = StackCardWrapper;
}),
"[project]/src/hooks/useWordAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWordAnimation",
    ()=>useWordAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"]);
const useWordAnimation = (options = {})=>{
    const { start = 'top 80%', end = 'top 20%', stagger = 0.1, duration = 1, ease = 'power3.out', opacity = 0.1, marginRight = '0', delay = 100 } = options;
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordSpansRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (!titleRef.current) {
            return;
        }
        // Use SplitText to create word spans
        const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](titleRef.current, {
            type: 'words',
            wordsClass: 'word'
        });
        const words = split.words;
        // Set initial styles for each word
        words.forEach((word)=>{
            word.style.display = 'inline-block';
            word.style.opacity = opacity.toString();
            word.style.transform = 'translateY(0)';
            word.style.marginRight = marginRight;
            wordSpansRef.current.push(word);
        });
        // Start animation after DOM update
        setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(words, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start,
                    end,
                    scrub: true
                },
                opacity: 1,
                stagger,
                duration,
                ease
            });
        }, delay);
        return ()=>{
            split.revert(); // Clean up SplitText
        };
    }, {
        dependencies: [
            start,
            end,
            stagger,
            duration,
            ease,
            opacity,
            marginRight,
            delay
        ],
        scope: titleRef
    });
    return {
        titleRef,
        wordSpansRef
    };
};
}),
"[project]/src/components/ui/button/LinkButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
const LinkButton = ({ children, href, className, insideSpan = true, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('btn btn-md', className),
        ...props,
        children: insideSpan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button/LinkButton.tsx",
            lineNumber: 15,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)) : children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button/LinkButton.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
LinkButton.displayName = 'LinkButton';
const __TURBOPACK__default__export__ = LinkButton;
}),
"[project]/src/components/home/MeetOurTeam.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWordAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWordAnimation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/RevealAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$LinkButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/LinkButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const MeetOurTeam = ()=>{
    const { titleRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWordAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWordAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pb-[50px] md:pb-[80px] lg:pb-[100px]",
        "aria-label": "Team Introduction",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-7 md:space-y-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        ref: titleRef,
                        className: "split-text-team-title text-center",
                        children: "From intuitive dashboards to data-driven automation, NextSaaS is built for modern businesses that want to simplify workflows and scale effortlessly."
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/MeetOurTeam.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$LinkButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/team",
                                className: "btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent w-[85%] md:w-auto",
                                children: "Meet NextSaaS team"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/MeetOurTeam.tsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/MeetOurTeam.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/MeetOurTeam.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/MeetOurTeam.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/home/MeetOurTeam.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/home/MeetOurTeam.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MeetOurTeam;
}),
"[project]/src/hooks/useProgressStepsAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgressStepsAnimation",
    ()=>useProgressStepsAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const useProgressStepsAnimation = (options = {})=>{
    const { delay = 0, duration = 2, delayBetweenSteps = 2, ease = 'power2.inOut', triggerOnScroll = true, scrollTriggerOptions = {
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    } } = options;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const progressLines = containerRef.current?.querySelectorAll('.progress-line');
        if (!progressLines || progressLines.length === 0) {
            return;
        }
        // Set initial state
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(progressLines, {
            width: '0%'
        });
        if (triggerOnScroll) {
            // Create timeline for sequential animation with scroll trigger
            const progressTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                delay: delay,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: scrollTriggerOptions.start,
                    end: scrollTriggerOptions.end,
                    toggleActions: scrollTriggerOptions.toggleActions,
                    invalidateOnRefresh: true,
                    refreshPriority: -1
                }
            });
            // Animate each progress line sequentially
            progressLines.forEach((line, index)=>{
                progressTimeline.to(line, {
                    width: '100%',
                    duration: duration,
                    ease: ease
                }, index * delayBetweenSteps);
            });
        } else {
            // Animate immediately without scroll trigger
            const progressTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                delay: delay
            });
            progressLines.forEach((line, index)=>{
                progressTimeline.to(line, {
                    width: '100%',
                    duration: duration,
                    ease: ease
                }, index * delayBetweenSteps);
            });
        }
        // Cleanup function
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((trigger)=>{
                if (trigger.trigger === containerRef.current) {
                    trigger.kill();
                }
            });
        };
    }, {
        scope: containerRef,
        dependencies: [
            delay,
            duration,
            delayBetweenSteps,
            ease,
            triggerOnScroll
        ]
    });
    return {
        ref: containerRef
    };
};
}),
"[project]/src/components/home/Steps.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProgressStepsAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProgressStepsAnimation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/RevealAnimation.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const stepItems = [
    {
        stepNumber: '01',
        title: 'Select a template or create new',
        description: 'Start fast with a template —or build it your way.',
        progressWidth: '25%'
    },
    {
        stepNumber: '02',
        title: 'Customize with visual blocks',
        description: 'Mix and match visual blocks for your perfect design.',
        progressWidth: '0%'
    },
    {
        stepNumber: '03',
        title: 'Deploy & share with one click',
        description: 'Launch and share your app instantly with one click.',
        progressWidth: '0%'
    }
];
const Steps = ()=>{
    const { ref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProgressStepsAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgressStepsAnimation"])({
        delay: 0.5,
        duration: 2,
        delayBetweenSteps: 2,
        triggerOnScroll: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "main-container progress-container grid grid-cols-1 gap-8 md:grid-cols-3",
            children: stepItems.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.2 + index * 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-stroke-2 dark:bg-stroke-6 relative h-[2px] w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `progress-line absolute w-[${step.progressWidth}] bg-ns-green top-0 left-0 h-full`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Steps.tsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Steps.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-tagline-2 text-primary-500",
                                children: step.stepNumber
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Steps.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Steps.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: step.description.includes('<br') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                step.description.split('<br')[0],
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                    className: "hidden md:block"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Steps.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                step.description.split('<br')[1]?.replace('>', '')
                                            ]
                                        }, void 0, true) : step.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Steps.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Steps.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Steps.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, step.stepNumber, false, {
                    fileName: "[project]/src/components/home/Steps.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/home/Steps.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/home/Steps.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Steps;
}),
"[project]/node_modules/react-fast-marquee/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function ___$insertStyle(css) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const style = undefined;
}
Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
___$insertStyle(".rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}");
const Marquee = React.forwardRef(function Marquee({ style = {}, className = "", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = "left", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = "white", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {
    // React Hooks
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [marqueeWidth, setMarqueeWidth] = React.useState(0);
    const [multiplier, setMultiplier] = React.useState(1);
    const [isMounted, setIsMounted] = React.useState(false);
    const rootRef = React.useRef(null);
    const containerRef = ref || rootRef;
    const marqueeRef = React.useRef(null);
    // Calculate width of container and marquee and set multiplier
    const calculateWidth = React.useCallback(()=>{
        if (marqueeRef.current && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const marqueeRect = marqueeRef.current.getBoundingClientRect();
            let containerWidth = containerRect.width;
            let marqueeWidth = marqueeRect.width;
            // Swap width and height if direction is up or down
            if (direction === "up" || direction === "down") {
                containerWidth = containerRect.height;
                marqueeWidth = marqueeRect.height;
            }
            if (autoFill && containerWidth && marqueeWidth) {
                setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);
            } else {
                setMultiplier(1);
            }
            setContainerWidth(containerWidth);
            setMarqueeWidth(marqueeWidth);
        }
    }, [
        autoFill,
        containerRef,
        direction
    ]);
    // Calculate width and multiplier on mount and on window resize
    React.useEffect(()=>{
        if (!isMounted) return;
        calculateWidth();
        if (marqueeRef.current && containerRef.current) {
            const resizeObserver = new ResizeObserver(()=>calculateWidth());
            resizeObserver.observe(containerRef.current);
            resizeObserver.observe(marqueeRef.current);
            return ()=>{
                if (!resizeObserver) return;
                resizeObserver.disconnect();
            };
        }
    }, [
        calculateWidth,
        containerRef,
        isMounted
    ]);
    // Recalculate width when children change
    React.useEffect(()=>{
        calculateWidth();
    }, [
        calculateWidth,
        children
    ]);
    React.useEffect(()=>{
        setIsMounted(true);
    }, []);
    // Runs the onMount callback, if it is a function, when Marquee is mounted.
    React.useEffect(()=>{
        if (typeof onMount === "function") {
            onMount();
        }
    }, []);
    // Animation duration
    const duration = React.useMemo(()=>{
        if (autoFill) {
            return marqueeWidth * multiplier / speed;
        } else {
            return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
        }
    }, [
        autoFill,
        containerWidth,
        marqueeWidth,
        multiplier,
        speed
    ]);
    const containerStyle = React.useMemo(()=>Object.assign(Object.assign({}, style), {
            ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running",
            ["--pause-on-click"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? "paused" : "running",
            ["--width"]: direction === "up" || direction === "down" ? `100vh` : "100%",
            ["--transform"]: direction === "up" ? "rotate(-90deg)" : direction === "down" ? "rotate(90deg)" : "none"
        }), [
        style,
        play,
        pauseOnHover,
        pauseOnClick,
        direction
    ]);
    const gradientStyle = React.useMemo(()=>({
            ["--gradient-color"]: gradientColor,
            ["--gradient-width"]: typeof gradientWidth === "number" ? `${gradientWidth}px` : gradientWidth
        }), [
        gradientColor,
        gradientWidth
    ]);
    const marqueeStyle = React.useMemo(()=>({
            ["--play"]: play ? "running" : "paused",
            ["--direction"]: direction === "left" ? "normal" : "reverse",
            ["--duration"]: `${duration}s`,
            ["--delay"]: `${delay}s`,
            ["--iteration-count"]: !!loop ? `${loop}` : "infinite",
            ["--min-width"]: autoFill ? `auto` : "100%"
        }), [
        play,
        direction,
        duration,
        delay,
        loop,
        autoFill
    ]);
    const childStyle = React.useMemo(()=>({
            ["--transform"]: direction === "up" ? "rotate(90deg)" : direction === "down" ? "rotate(-90deg)" : "none"
        }), [
        direction
    ]);
    // Render {multiplier} number of children
    const multiplyChildren = React.useCallback((multiplier)=>{
        return [
            ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0)
        ].map((_, i)=>React__default['default'].createElement(React.Fragment, {
                key: i
            }, React.Children.map(children, (child)=>{
                return React__default['default'].createElement("div", {
                    style: childStyle,
                    className: "rfm-child"
                }, child);
            })));
    }, [
        childStyle,
        children
    ]);
    return !isMounted ? null : React__default['default'].createElement("div", {
        ref: containerRef,
        style: containerStyle,
        className: "rfm-marquee-container " + className
    }, gradient && React__default['default'].createElement("div", {
        style: gradientStyle,
        className: "rfm-overlay"
    }), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle,
        onAnimationIteration: onCycleComplete,
        onAnimationEnd: onFinish
    }, React__default['default'].createElement("div", {
        className: "rfm-initial-child-container",
        ref: marqueeRef
    }, React.Children.map(children, (child)=>{
        return React__default['default'].createElement("div", {
            style: childStyle,
            className: "rfm-child"
        }, child);
    })), multiplyChildren(multiplier - 1)), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle
    }, multiplyChildren(multiplier)));
});
exports.default = Marquee; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplitText",
    ()=>SplitText,
    "default",
    ()=>SplitText
]);
/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let gsap, _fonts, _coreInitted, _initIfNecessary = ()=>_coreInitted || SplitText.register(window.gsap), _charSegmenter = typeof Intl !== "undefined" ? new Intl.Segmenter() : 0, _toArray = (r)=>typeof r === "string" ? _toArray(document.querySelectorAll(r)) : "length" in r ? Array.from(r) : [
        r
    ], _elements = (targets)=>_toArray(targets).filter((e)=>e instanceof HTMLElement), _emptyArray = [], _context = function() {}, _spacesRegEx = /\s+/g, _emojiSafeRegEx = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), _emptyBounds = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
}, _stretchToFitSpecialChars = (collection, specialCharsRegEx)=>{
    if (specialCharsRegEx) {
        let charsFound = new Set(collection.join("").match(specialCharsRegEx) || _emptyArray), i = collection.length, slots, word, char, combined;
        if (charsFound.size) {
            while(--i > -1){
                word = collection[i];
                for (char of charsFound){
                    if (char.startsWith(word) && char.length > word.length) {
                        slots = 0;
                        combined = word;
                        while(char.startsWith(combined += collection[i + ++slots]) && combined.length < char.length){}
                        if (slots && combined.length === char.length) {
                            collection[i] = char;
                            collection.splice(i + 1, slots);
                            break;
                        }
                    }
                }
            }
        }
    }
    return collection;
}, _disallowInline = (element)=>window.getComputedStyle(element).display === "inline" && (element.style.display = "inline-block"), _insertNodeBefore = (newChild, parent, existingChild)=>parent.insertBefore(typeof newChild === "string" ? document.createTextNode(newChild) : newChild, existingChild), _getWrapper = (type, config, collection)=>{
    let className = config[type + "sClass"] || "", { tag = "div", aria = "auto", propIndex = false } = config, display = type === "line" ? "block" : "inline-block", incrementClass = className.indexOf("++") > -1, wrapper = (text)=>{
        let el = document.createElement(tag), i = collection.length + 1;
        className && (el.className = className + (incrementClass ? " " + className + i : ""));
        propIndex && el.style.setProperty("--" + type, i + "");
        aria !== "none" && el.setAttribute("aria-hidden", "true");
        if (tag !== "span") {
            el.style.position = "relative";
            el.style.display = display;
        }
        el.textContent = text;
        collection.push(el);
        return el;
    };
    incrementClass && (className = className.replace("++", ""));
    wrapper.collection = collection;
    return wrapper;
}, _getLineWrapper = (element, nodes, config, collection)=>{
    let lineWrapper = _getWrapper("line", config, collection), textAlign = window.getComputedStyle(element).textAlign || "left";
    return (startIndex, endIndex)=>{
        let newLine = lineWrapper("");
        newLine.style.textAlign = textAlign;
        element.insertBefore(newLine, nodes[startIndex]);
        for(; startIndex < endIndex; startIndex++){
            newLine.appendChild(nodes[startIndex]);
        }
        newLine.normalize();
    };
}, _splitWordsAndCharsRecursively = (element, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, isNested)=>{
    var _a;
    let nodes = Array.from(element.childNodes), i = 0, { wordDelimiter, reduceWhiteSpace = true, prepareText } = config, elementBounds = element.getBoundingClientRect(), lastBounds = elementBounds, isPreformatted = !reduceWhiteSpace && window.getComputedStyle(element).whiteSpace.substring(0, 3) === "pre", ignoredPreviousSibling = 0, wordsCollection = wordWrapper.collection, wordDelimIsNotSpace, wordDelimString, wordDelimSplitter, curNode, words, curWordEl, startsWithSpace, endsWithSpace, j, bounds, curWordChars, clonedNode, curSubNode, tempSubNode, curTextContent, wordText, lastWordText, k;
    if (typeof wordDelimiter === "object") {
        wordDelimSplitter = wordDelimiter.delimiter || wordDelimiter;
        wordDelimString = wordDelimiter.replaceWith || "";
    } else {
        wordDelimString = wordDelimiter === "" ? "" : wordDelimiter || " ";
    }
    wordDelimIsNotSpace = wordDelimString !== " ";
    for(; i < nodes.length; i++){
        curNode = nodes[i];
        if (curNode.nodeType === 3) {
            curTextContent = curNode.textContent || "";
            if (reduceWhiteSpace) {
                curTextContent = curTextContent.replace(_spacesRegEx, " ");
            } else if (isPreformatted) {
                curTextContent = curTextContent.replace(/\n/g, wordDelimString + "\n");
            }
            prepareText && (curTextContent = prepareText(curTextContent, element));
            curNode.textContent = curTextContent;
            words = wordDelimString || wordDelimSplitter ? curTextContent.split(wordDelimSplitter || wordDelimString) : curTextContent.match(charSplitRegEx) || _emptyArray;
            lastWordText = words[words.length - 1];
            endsWithSpace = wordDelimIsNotSpace ? lastWordText.slice(-1) === " " : !lastWordText;
            lastWordText || words.pop();
            lastBounds = elementBounds;
            startsWithSpace = wordDelimIsNotSpace ? words[0].charAt(0) === " " : !words[0];
            startsWithSpace && _insertNodeBefore(" ", element, curNode);
            words[0] || words.shift();
            _stretchToFitSpecialChars(words, specialCharsRegEx);
            deepSlice && isNested || (curNode.textContent = "");
            for(j = 1; j <= words.length; j++){
                wordText = words[j - 1];
                if (!reduceWhiteSpace && isPreformatted && wordText.charAt(0) === "\n") {
                    (_a = curNode.previousSibling) == null ? void 0 : _a.remove();
                    _insertNodeBefore(document.createElement("br"), element, curNode);
                    wordText = wordText.slice(1);
                }
                if (!reduceWhiteSpace && wordText === "") {
                    _insertNodeBefore(wordDelimString, element, curNode);
                } else if (wordText === " ") {
                    element.insertBefore(document.createTextNode(" "), curNode);
                } else {
                    wordDelimIsNotSpace && wordText.charAt(0) === " " && _insertNodeBefore(" ", element, curNode);
                    if (ignoredPreviousSibling && j === 1 && !startsWithSpace && wordsCollection.indexOf(ignoredPreviousSibling.parentNode) > -1) {
                        curWordEl = wordsCollection[wordsCollection.length - 1];
                        curWordEl.appendChild(document.createTextNode(charWrapper ? "" : wordText));
                    } else {
                        curWordEl = wordWrapper(charWrapper ? "" : wordText);
                        _insertNodeBefore(curWordEl, element, curNode);
                        ignoredPreviousSibling && j === 1 && !startsWithSpace && curWordEl.insertBefore(ignoredPreviousSibling, curWordEl.firstChild);
                    }
                    if (charWrapper) {
                        curWordChars = _charSegmenter ? _stretchToFitSpecialChars([
                            ..._charSegmenter.segment(wordText)
                        ].map((s)=>s.segment), specialCharsRegEx) : wordText.match(charSplitRegEx) || _emptyArray;
                        for(k = 0; k < curWordChars.length; k++){
                            curWordEl.appendChild(curWordChars[k] === " " ? document.createTextNode(" ") : charWrapper(curWordChars[k]));
                        }
                    }
                    if (deepSlice && isNested) {
                        curTextContent = curNode.textContent = curTextContent.substring(wordText.length + 1, curTextContent.length);
                        bounds = curWordEl.getBoundingClientRect();
                        if (bounds.top > lastBounds.top && bounds.left <= lastBounds.left) {
                            clonedNode = element.cloneNode();
                            curSubNode = element.childNodes[0];
                            while(curSubNode && curSubNode !== curWordEl){
                                tempSubNode = curSubNode;
                                curSubNode = curSubNode.nextSibling;
                                clonedNode.appendChild(tempSubNode);
                            }
                            element.parentNode.insertBefore(clonedNode, element);
                            prepForCharsOnly && _disallowInline(clonedNode);
                        }
                        lastBounds = bounds;
                    }
                    if (j < words.length || endsWithSpace) {
                        _insertNodeBefore(j >= words.length ? " " : wordDelimIsNotSpace && wordText.slice(-1) === " " ? " " + wordDelimString : wordDelimString, element, curNode);
                    }
                }
            }
            element.removeChild(curNode);
            ignoredPreviousSibling = 0;
        } else if (curNode.nodeType === 1) {
            if (ignore && ignore.indexOf(curNode) > -1) {
                wordsCollection.indexOf(curNode.previousSibling) > -1 && wordsCollection[wordsCollection.length - 1].appendChild(curNode);
                ignoredPreviousSibling = curNode;
            } else {
                _splitWordsAndCharsRecursively(curNode, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, true);
                ignoredPreviousSibling = 0;
            }
            prepForCharsOnly && _disallowInline(curNode);
        }
    }
};
const _SplitText = class _SplitText {
    constructor(elements, config){
        this.isSplit = false;
        _initIfNecessary();
        this.elements = _elements(elements);
        this.chars = [];
        this.words = [];
        this.lines = [];
        this.masks = [];
        this.vars = config;
        this._split = ()=>this.isSplit && this.split(this.vars);
        let orig = [], timerId, checkWidths = ()=>{
            let i = orig.length, o;
            while(i--){
                o = orig[i];
                let w = o.element.offsetWidth;
                if (w !== o.width) {
                    o.width = w;
                    this._split();
                    return;
                }
            }
        };
        this._data = {
            orig,
            obs: typeof ResizeObserver !== "undefined" && new ResizeObserver(()=>{
                clearTimeout(timerId);
                timerId = setTimeout(checkWidths, 200);
            })
        };
        _context(this);
        this.split(config);
    }
    split(config) {
        this.isSplit && this.revert();
        this.vars = config = config || this.vars || {};
        let { type = "chars,words,lines", aria = "auto", deepSlice = true, smartWrap, onSplit, autoSplit = false, specialChars, mask } = this.vars, splitLines = type.indexOf("lines") > -1, splitCharacters = type.indexOf("chars") > -1, splitWords = type.indexOf("words") > -1, onlySplitCharacters = splitCharacters && !splitWords && !splitLines, specialCharsRegEx = specialChars && ("push" in specialChars ? new RegExp("(?:" + specialChars.join("|") + ")", "gu") : specialChars), finalCharSplitRegEx = specialCharsRegEx ? new RegExp(specialCharsRegEx.source + "|" + _emojiSafeRegEx.source, "gu") : _emojiSafeRegEx, ignore = !!config.ignore && _elements(config.ignore), { orig, animTime, obs } = this._data, onSplitResult;
        if (splitCharacters || splitWords || splitLines) {
            this.elements.forEach((element, index)=>{
                orig[index] = {
                    element,
                    html: element.innerHTML,
                    ariaL: element.getAttribute("aria-label"),
                    ariaH: element.getAttribute("aria-hidden")
                };
                aria === "auto" ? element.setAttribute("aria-label", (element.textContent || "").trim()) : aria === "hidden" && element.setAttribute("aria-hidden", "true");
                let chars = [], words = [], lines = [], charWrapper = splitCharacters ? _getWrapper("char", config, chars) : null, wordWrapper = _getWrapper("word", config, words), i, curWord, smartWrapSpan, nextSibling;
                _splitWordsAndCharsRecursively(element, config, wordWrapper, charWrapper, onlySplitCharacters, deepSlice && (splitLines || onlySplitCharacters), ignore, finalCharSplitRegEx, specialCharsRegEx, false);
                if (splitLines) {
                    let nodes = _toArray(element.childNodes), wrapLine = _getLineWrapper(element, nodes, config, lines), curNode, toRemove = [], lineStartIndex = 0, allBounds = nodes.map((n)=>n.nodeType === 1 ? n.getBoundingClientRect() : _emptyBounds), lastBounds = _emptyBounds;
                    for(i = 0; i < nodes.length; i++){
                        curNode = nodes[i];
                        if (curNode.nodeType === 1) {
                            if (curNode.nodeName === "BR") {
                                toRemove.push(curNode);
                                wrapLine(lineStartIndex, i + 1);
                                lineStartIndex = i + 1;
                                lastBounds = allBounds[lineStartIndex];
                            } else {
                                if (i && allBounds[i].top > lastBounds.top && allBounds[i].left <= lastBounds.left) {
                                    wrapLine(lineStartIndex, i);
                                    lineStartIndex = i;
                                }
                                lastBounds = allBounds[i];
                            }
                        }
                    }
                    lineStartIndex < i && wrapLine(lineStartIndex, i);
                    toRemove.forEach((el)=>{
                        var _a;
                        return (_a = el.parentNode) == null ? void 0 : _a.removeChild(el);
                    });
                }
                if (!splitWords) {
                    for(i = 0; i < words.length; i++){
                        curWord = words[i];
                        if (splitCharacters || !curWord.nextSibling || curWord.nextSibling.nodeType !== 3) {
                            if (smartWrap && !splitLines) {
                                smartWrapSpan = document.createElement("span");
                                smartWrapSpan.style.whiteSpace = "nowrap";
                                while(curWord.firstChild){
                                    smartWrapSpan.appendChild(curWord.firstChild);
                                }
                                curWord.replaceWith(smartWrapSpan);
                            } else {
                                curWord.replaceWith(...curWord.childNodes);
                            }
                        } else {
                            nextSibling = curWord.nextSibling;
                            if (nextSibling && nextSibling.nodeType === 3) {
                                nextSibling.textContent = (curWord.textContent || "") + (nextSibling.textContent || "");
                                curWord.remove();
                            }
                        }
                    }
                    words.length = 0;
                    element.normalize();
                }
                this.lines.push(...lines);
                this.words.push(...words);
                this.chars.push(...chars);
            });
            mask && this[mask] && this.masks.push(...this[mask].map((el)=>{
                let maskEl = el.cloneNode();
                el.replaceWith(maskEl);
                maskEl.appendChild(el);
                el.className && (maskEl.className = el.className.replace(/(\b\w+\b)/g, "$1-mask"));
                maskEl.style.overflow = "clip";
                return maskEl;
            }));
        }
        this.isSplit = true;
        _fonts && (autoSplit ? _fonts.addEventListener("loadingdone", this._split) : _fonts.status === "loading" && console.warn("SplitText called before fonts loaded"));
        if ((onSplitResult = onSplit && onSplit(this)) && onSplitResult.totalTime) {
            this._data.anim = animTime ? onSplitResult.totalTime(animTime) : onSplitResult;
        }
        splitLines && autoSplit && this.elements.forEach((element, index)=>{
            orig[index].width = element.offsetWidth;
            obs && obs.observe(element);
        });
        return this;
    }
    revert() {
        var _a, _b;
        let { orig, anim, obs } = this._data;
        obs && obs.disconnect();
        orig.forEach(({ element, html, ariaL, ariaH })=>{
            element.innerHTML = html;
            ariaL ? element.setAttribute("aria-label", ariaL) : element.removeAttribute("aria-label");
            ariaH ? element.setAttribute("aria-hidden", ariaH) : element.removeAttribute("aria-hidden");
        });
        this.chars.length = this.words.length = this.lines.length = orig.length = this.masks.length = 0;
        this.isSplit = false;
        _fonts == null ? void 0 : _fonts.removeEventListener("loadingdone", this._split);
        if (anim) {
            this._data.animTime = anim.totalTime();
            anim.revert();
        }
        (_b = (_a = this.vars).onRevert) == null ? void 0 : _b.call(_a, this);
        return this;
    }
    static create(elements, config) {
        return new _SplitText(elements, config);
    }
    static register(core) {
        gsap = gsap || core || window.gsap;
        if (gsap) {
            _toArray = gsap.utils.toArray;
            _context = gsap.core.context || _context;
        }
        if (!_coreInitted && window.innerWidth > 0) {
            _fonts = document.fonts;
            _coreInitted = true;
        }
    }
};
_SplitText.version = "3.13.0";
let SplitText = _SplitText;
;
}),
];

//# sourceMappingURL=_962febe2._.js.map