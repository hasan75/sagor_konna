exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 643:
/***/ ((module) => {

// Exports
module.exports = {
	"popularBlogContainer": "PopularBlogs_popularBlogContainer__OOc2N",
	"navigators": "PopularBlogs_navigators__G96vv",
	"prevArrow": "PopularBlogs_prevArrow__bqJlb",
	"nextArrow": "PopularBlogs_nextArrow__GjIIy"
};


/***/ }),

/***/ 1958:
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
/* harmony import */ var _public_images_blogs_time_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2871);





const singleBlog = ({ singleBlog , component  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "skrBlogCard",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "skrCoverFrame",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: singleBlog?.img,
                    alt: "cover",
                    className: "blogImage",
                    width: "100%",
                    height: "100%",
                    layout: "responsive"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "skrDescriptionFrame",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "skrRoomFeature",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "skrFeature",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "skrIconFrame skrIconAuthor",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: singleBlog?.profile,
                                                alt: "Profile Picture",
                                                className: "blogAuthor",
                                                // layout='fill'
                                                width: 100,
                                                height: 100
                                            }),
                                            component === "popularBlog" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "skrBadge mt-3 mr-3 text-base",
                                                children: "Popular"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: singleBlog?.authorName
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "skrFeature",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "skrIconFrame",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: _public_images_blogs_time_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                            alt: "time"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "12.08.21 23:13"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/blogs/${singleBlog?.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "linkKajkam",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                class: "skrMb20",
                                children: singleBlog?.title
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "skrTextLight",
                        children: singleBlog?.description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleBlog);


/***/ }),

/***/ 3037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInterception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5165);
/* harmony import */ var _PopularBlogs_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(643);
/* harmony import */ var _PopularBlogs_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PopularBlogs_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _BlogsList_SingleBlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// swiper
// import Swiper core and required modules

// Import Swiper styles





const PopularBlogs = ({ blogs  })=>{
    const popularBlogTitleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,_hooks_useInterception__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(popularBlogTitleRef);
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const sliderSettings = {
        210: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        440: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    };
    const handlePrev = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    const menuTitleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,_hooks_useInterception__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(menuTitleRef);
    //   useInterception(swiperRef);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_PopularBlogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().popularBlogContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "p-container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            ref: popularBlogTitleRef,
                            className: "skrTitleFrame skrAnimationScroll",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: ` text-4xl md:text-7xl`,
                                    children: "Popular Blogs about the Sagor Konna, Kuakata"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "skrParagraph",
                                    children: "Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 lg:col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                // install Swiper modules
                                breakpoints: sliderSettings,
                                modules: [
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Scrollbar,
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.A11y
                                ],
                                spaceBetween: 20,
                                slidesPerView: 3,
                                // navi
                                gation: true,
                                loop: true,
                                pagination: {
                                    type: "fraction"
                                },
                                children: [
                                    blogs?.slice(0, 5).map((singleBlog)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogsList_SingleBlog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                singleBlog: singleBlog,
                                                component: "popularBlog"
                                            }, singleBlog?.id)
                                        }, singleBlog?.id)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-content-end",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_PopularBlogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().navigators)}  flex justify-content-center align-items-center mt-4`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_PopularBlogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().prevArrow)} mr-3`,
                                                    onClick: handlePrev,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        class: "material-icons-sharp",
                                                        children: "arrow_back"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_PopularBlogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().nextArrow)}`,
                                                    onClick: handleNext,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        class: "material-icons-sharp",
                                                        children: "arrow_forward"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularBlogs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;