"use strict";
(() => {
var exports = {};
exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 6759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const gallery = [
    {
        id: 1,
        galleryImg: "/images/Gallary/img-01.jpg"
    },
    {
        id: 2,
        galleryImg: "/images/Gallary/img-14.jpg"
    },
    {
        id: 3,
        galleryImg: "/images/Gallary/img-03.jpg"
    },
    {
        id: 5,
        galleryImg: "/images/Gallary/img-15.jpg"
    },
    {
        id: 6,
        galleryImg: "/images/Gallary/img-05.jpg"
    },
    {
        id: 7,
        galleryImg: "/images/Gallary/img-06.jpg"
    },
    {
        id: 8,
        galleryImg: "/images/Gallary/img-07.jpg"
    },
    {
        id: 9,
        galleryImg: "/images/Gallary/img-16.jpg"
    },
    {
        id: 10,
        galleryImg: "/images/Gallary/img-18.jpg"
    },
    {
        id: 11,
        galleryImg: "/images/Gallary/img-10.jpg"
    }, 
];
function handler(req, res) {
    res.status(200).json(gallery);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6759));
module.exports = __webpack_exports__;

})();