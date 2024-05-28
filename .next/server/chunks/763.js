"use strict";
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 5165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInterception = (divRef)=>{
    const callBackFunc = (entries)=>{
        const [entry] = entries;
        if (entry.isIntersecting) {
            divRef.current.classList.add("skrAnimationScrollActiveEl");
            return;
        }
        divRef.current && divRef.current.classList.remove("skrAnimationScrollActiveEl");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3
        };
        const observer = new IntersectionObserver(callBackFunc, options);
        if (divRef.current) observer.observe(divRef.current);
        return ()=>{
            if (divRef.current) observer.unobserve(divRef.current);
        };
    }, [
        divRef
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterception);


/***/ })

};
;