"use strict";
(() => {
var exports = {};
exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const serviceData = [
    {
        id: 1,
        title: "Lounge Bar",
        img: "/images/services/service1bar.jpg",
        description: "Officiis deleniti, veritatis laudantium! Qudantium dolorem!"
    },
    {
        id: 2,
        title: "Swimming Pools",
        img: "/images/services/service2pool.jpg",
        description: "Officiis deleniti, veritatis laudantium! Qudantium dolorem!"
    },
    {
        id: 3,
        title: "Restaurant",
        img: "/images/services/service3restaurant.jpg",
        description: "Officiis deleniti, veritatis laudantium! Qudantium dolorem!"
    }, 
];
function handler(req, res) {
    res.status(200).json(serviceData);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(620));
module.exports = __webpack_exports__;

})();