(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 4702:
/***/ ((module) => {

// Exports
module.exports = {
	"welcomeContainer": "OfferTopBanner_welcomeContainer__mTd3C",
	"skrAboutCard": "OfferTopBanner_skrAboutCard__y__vS",
	"skrAboutText": "OfferTopBanner_skrAboutText__p4Yrg",
	"skrAboutPhoto": "OfferTopBanner_skrAboutPhoto__v29Ne",
	"skrPhoto": "OfferTopBanner_skrPhoto__9WOwP"
};


/***/ }),

/***/ 7352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/service3restaurant.b2bf1fab.jpg","height":1500,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAnBP/AP/EABsQAAEEAwAAAAAAAAAAAAAAAAQAAQIDFCKC/9oACAEBAAE/ACQgdHxI9WWL/8QAGBEBAQADAAAAAAAAAAAAAAAAAgEAAzH/2gAIAQIBAT8AWxlWRcuf/8QAGBEBAAMBAAAAAAAAAAAAAAAAAgABAyH/2gAIAQMBAT8AGGTNKzXZ/9k=","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ 2961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Offers_OfferList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.3.1_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(732);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.3.1_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(2261);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Offers/OfferList/SingleOffer/index.js




const SingleOffer = ({ offer , component  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "skrOfferCard",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "skrCoverFrame skOfferCoverFrame",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: offer?.picture,
                        alt: "cover",
                        className: "offerImg",
                        width: "100%",
                        height: "85%",
                        layout: "responsive",
                        objectFit: "contain"
                    }),
                    component === "special" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "skrBadge",
                        children: "Popular"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "skrDescriptionFrame",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "skrMb20",
                        children: offer?.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "skrTextLight skrMb20",
                        children: offer?.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "skrCardBottom flex justify-content-between align-items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "skrPrice",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/room",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "skrButton",
                                        children: "Book"
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const OfferList_SingleOffer = (SingleOffer);

;// CONCATENATED MODULE: ./components/Offers/OfferList/index.js




const OfferList = ({ offer  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "skr-p-50-80",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "p-container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid",
                children: offer.map((singleOffer)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 md:col-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(OfferList_SingleOffer, {
                            offer: singleOffer,
                            component: "special"
                        })
                    }, singleOffer?.key))
            })
        })
    });
};
/* harmony default export */ const Offers_OfferList = (OfferList);


/***/ }),

/***/ 2333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(732);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2261);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInterception__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5165);
/* harmony import */ var _OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4702);
/* harmony import */ var _OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_5__);






const OfferTopBanner = ()=>{
    const offerTitleRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,_hooks_useInterception__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(offerTitleRef);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default().welcomeContainer),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    ref: offerTitleRef,
                    className: "skrTitleFrame skrAnimationScroll",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "skrHeading",
                            children: "Special Offers at Sagor Konna Resort"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "skrParagraph",
                            children: "Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio."
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OfferTopBanner);


/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(732);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2261);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInterception__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5165);
/* harmony import */ var _public_images_services_service3restaurant_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7352);
/* harmony import */ var _OfferTopBanner_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4702);
/* harmony import */ var _OfferTopBanner_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_OfferTopBanner_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_6__);







const SagorKonnaCommon = ()=>{
    const offerDetailRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,_hooks_useInterception__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(offerDetailRef);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "skr-p-0-100",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: offerDetailRef,
                className: "p-container skrAnimationScroll",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_OfferTopBanner_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_6___default().skrAboutCard),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 lg:col-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_OfferTopBanner_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_6___default().skrAboutText),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_OfferTopBanner_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_6___default().skrTitleFrame),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "skrHeading",
                                                children: "We invite you to visit Sagor Konna Resort"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "skrParagraph",
                                                children: "Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "skrButton",
                                                        children: "More About US"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 lg:col-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_OfferTopBanner_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_6___default().skrAboutPhoto),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: _public_images_services_service3restaurant_jpg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                        alt: "Restaurant Image",
                                        className: (_OfferTopBanner_OfferTopBanner_module_css__WEBPACK_IMPORTED_MODULE_6___default().skrPhoto)
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SagorKonnaCommon);


/***/ }),

/***/ 9610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home_CustomerTestimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6140);
/* harmony import */ var _components_Offers_OfferList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2961);
/* harmony import */ var _components_Offers_OfferTopBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2333);
/* harmony import */ var _components_Offers_SagorKonnaCommon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1939);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Home_CustomerTestimonials__WEBPACK_IMPORTED_MODULE_2__]);
_components_Home_CustomerTestimonials__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Offers = ({ offer  })=>{
    console.log(offer);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Offers_OfferTopBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Offers_OfferList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                offer: offer
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Offers_SagorKonnaCommon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_CustomerTestimonials__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offers);
async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/offer");
    const offer = await res.json();
    return {
        props: {
            offer
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [287,261,732,763,140], () => (__webpack_exec__(9610)));
module.exports = __webpack_exports__;

})();