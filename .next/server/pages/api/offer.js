"use strict";
(() => {
var exports = {};
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 3797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const offer = [
    {
        id: 1,
        name: "Early Winter Package",
        title: "Enjoy your holiday at Sagor Konaa",
        picture: "/images/offers/2earlywinter.svg",
        desc: "Sagor Konna Invites you all.",
        price: 7000
    },
    {
        id: 2,
        name: "Honeymoon Package",
        title: "Make your experience an unforgettable one with your partner at Sagor Konaa",
        picture: "/images/offers/1honeymoon.svg",
        desc: "Sagor Konna Invites you all.",
        price: 8000
    },
    {
        id: 0,
        name: "Anniversary Celebration Package",
        title: "Make your experience an unforgettable one with your partner at Sagor Konaa",
        picture: "/images/offers/3saycation.svg",
        desc: "Sagor Konna Invites you all.",
        price: 8000
    },
    {
        id: 3,
        name: "Working Day Packages",
        title: "Enjoy your holiday at Sagor Konaa",
        picture: "/images/offers/4average.svg",
        desc: "Sagor Konna Invites you all.",
        price: 6000
    },
    {
        id: 4,
        name: "Early Winter Family Package",
        title: "Enjoy your holiday at Sagor Konaa",
        picture: "/images/offers/5family.svg",
        desc: "Sagor Konna Invites you all.",
        price: 12000
    }, 
];
function handler(req, res) {
    res.status(200).json(offer);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3797));
module.exports = __webpack_exports__;

})();