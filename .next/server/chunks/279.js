exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 9574:
/***/ ((module) => {

// Exports
module.exports = {
	"aroundTheHotelSection": "AroundTheHotel_aroundTheHotelSection__58ziF",
	"aroundHeadingText": "AroundTheHotel_aroundHeadingText__7i4wv",
	"aroundParagraph": "AroundTheHotel_aroundParagraph__fLA8R",
	"skrAthCard": "AroundTheHotel_skrAthCard__C6c6F",
	"skrCoverFrame": "AroundTheHotel_skrCoverFrame__XLsGt",
	"skrCoverFrameImg": "AroundTheHotel_skrCoverFrameImg__6zfiT",
	"skrCardDescription": "AroundTheHotel_skrCardDescription__oWqcI",
	"skrButton": "AroundTheHotel_skrButton__NHTvC"
};


/***/ }),

/***/ 3043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ac.bbb78e64.svg","height":352,"width":496});

/***/ }),

/***/ 13:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/car.b7b0037d.svg","height":312,"width":496});

/***/ }),

/***/ 6015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cctv.3774a57a.svg","height":464,"width":496});

/***/ }),

/***/ 6325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/dine.c8c8cd59.svg","height":432,"width":496});

/***/ }),

/***/ 5350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home_AroundTheHotel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.3.1_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(2261);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Home/AroundTheHotel/AroundTheHotel.module.css
var AroundTheHotel_module = __webpack_require__(9574);
var AroundTheHotel_module_default = /*#__PURE__*/__webpack_require__.n(AroundTheHotel_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.3.1_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(732);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/images/services/service1bar.jpg
var service1bar = __webpack_require__(6813);
// EXTERNAL MODULE: ./public/images/services/service2pool.jpg
var service2pool = __webpack_require__(9817);
// EXTERNAL MODULE: ./public/images/services/service3restaurant.jpg
var service3restaurant = __webpack_require__(7352);
// EXTERNAL MODULE: ./contexts/ContextProvider.js + 3 modules
var ContextProvider = __webpack_require__(1530);
;// CONCATENATED MODULE: ./hooks/useDataContext.js


const useDataContext = ()=>{
    return (0,external_react_.useContext)(ContextProvider/* ContextApi */.k);
};
/* harmony default export */ const hooks_useDataContext = (useDataContext);

;// CONCATENATED MODULE: ./components/Home/AroundTheHotel/Services/ServiceCard/index.js





const ServiceCard = ({ service  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-12 lg:col-4",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (AroundTheHotel_module_default()).skrAthCard,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (AroundTheHotel_module_default()).skrCoverFrame,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: service?.serviceImg,
                                alt: "sagor konna resort",
                                className: (AroundTheHotel_module_default()).skrCoverFrameImg,
                                layout: "fill"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: (AroundTheHotel_module_default()).skrCardDescription,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    class: "skrMb10",
                                    children: service?.serviceName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: service?.serviceDesc
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "skrButton",
                                            children: " Read More"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Services_ServiceCard = (ServiceCard);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Home/AroundTheHotel/Services/index.js











const Services = ()=>{
    const serviceCardRef = (0,external_react_.useRef)(null);
    const router = (0,router_.useRouter)();
    const routerPath = router.pathname;
    // console.log(router.pathname);
    const { services  } = hooks_useDataContext();
    //   console.log(services);
    if (routerPath === "/") {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: services.slice(0, 3).map((service)=>/*#__PURE__*/ jsx_runtime_.jsx(Services_ServiceCard, {
                    service: service
                }, service?.id))
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: services.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx(Services_ServiceCard, {
                    service: service
                }, service?.id))
        });
    }
};
/* harmony default export */ const AroundTheHotel_Services = (Services);

;// CONCATENATED MODULE: ./components/Home/AroundTheHotel/index.js






const AroundTheHotel = ()=>{
    const animationAroundRef = (0,external_react_.useRef)(null);
    //   for the view point animation
    const callBackFunc = (entries)=>{
        const [entry] = entries;
        if (entry.isIntersecting) {
            animationAroundRef.current.classList.add("skrAnimationScrollActiveEl");
            return;
        }
        animationAroundRef?.current && animationAroundRef.current.classList.remove("skrAnimationScrollActiveEl");
    };
    (0,external_react_.useEffect)(()=>{
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3
        };
        const observer = new IntersectionObserver(callBackFunc, options);
        if (animationAroundRef.current) observer.observe(animationAroundRef.current);
        return ()=>{
            if (animationAroundRef.current) observer.unobserve(animationAroundRef.current);
        };
    }, [
        animationAroundRef
    ]);
    const { 0: skrServices , 1: setskrService  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        fetch("http://localhost:3000/api/serviceData").then((res)=>res.json()).then((data)=>setskrService(data));
    }, []);
    // console.log(skrServices);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (AroundTheHotel_module_default()).aroundTheHotelSection,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "p-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 lg:col-12 skrMb100",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            ref: animationAroundRef,
                            className: "skrAnimationScroll text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    className: `${(AroundTheHotel_module_default()).aroundHeadingText}`,
                                    children: [
                                        "Around The Hotel!",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `${(AroundTheHotel_module_default()).aroundParagraph}`,
                                    children: "Sagor Konna Resort lets you enjoy breathtaking Sea view, beaches, surfing & water sports, fabulous views, fabulous dining, and exceptional event venue. There’s so much to discover and it’s all steps away."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "skrButton",
                                            children: "Services"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AroundTheHotel_Services, {})
                ]
            })
        })
    });
};
/* harmony default export */ const Home_AroundTheHotel = (AroundTheHotel);


/***/ })

};
;