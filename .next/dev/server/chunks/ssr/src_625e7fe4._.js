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
];

//# sourceMappingURL=src_625e7fe4._.js.map