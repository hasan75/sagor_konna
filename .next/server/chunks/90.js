exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 1405:
/***/ ((module) => {

// Exports
module.exports = {
	"blogContainer": "HomeBlogs_blogContainer__KUsto"
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

/***/ 7257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home_HomeBlogs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.3.1_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(732);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.3.1_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(2261);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Home/HomeBlogs/HomeBlogs.module.css
var HomeBlogs_module = __webpack_require__(1405);
var HomeBlogs_module_default = /*#__PURE__*/__webpack_require__.n(HomeBlogs_module);
// EXTERNAL MODULE: ./public/images/blogs/beachBlog1.jpg
var beachBlog1 = __webpack_require__(5478);
// EXTERNAL MODULE: ./public/images/blogs/beachBlog2.jpg
var beachBlog2 = __webpack_require__(8246);
;// CONCATENATED MODULE: ./public/images/blogs/beachBlog3.jpg
/* harmony default export */ const beachBlog3 = ({"src":"/_next/static/media/beachBlog3.2c5a0dc9.jpg","height":667,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAALoR/8QAHRAAAQIHAAAAAAAAAAAAAAAAAQADAgQFESEiI//aAAgBAQABPwA0eWibc2PQZuAV/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEDE1L/2gAIAQIBAT8Aul2z/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEDFFP/2gAIAQMBAT8Arw5o/9k=","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./public/images/blogs/profile1.jpg
var profile1 = __webpack_require__(7525);
// EXTERNAL MODULE: ./public/images/blogs/profile2.jpg
var profile2 = __webpack_require__(8228);
// EXTERNAL MODULE: ./public/images/blogs/time.svg
var time = __webpack_require__(2871);
;// CONCATENATED MODULE: ./components/Home/HomeBlogs/index.js











const HomeBlogs = ()=>{
    const blogTextRef = (0,external_react_.useRef)(null);
    //   for the view point animation
    const callBackFunc = (entries)=>{
        const [entry] = entries;
        if (entry.isIntersecting) {
            blogTextRef.current.classList.add("skrAnimationScrollActiveEl");
            return;
        }
        blogTextRef?.current && blogTextRef?.current.classList.remove("skrAnimationScrollActiveEl");
    };
    (0,external_react_.useEffect)(()=>{
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3
        };
        const observer = new IntersectionObserver(callBackFunc, options);
        if (blogTextRef.current) observer.observe(blogTextRef.current);
        return ()=>{
            if (blogTextRef.current) observer.unobserve(blogTextRef.current);
        };
    }, [
        blogTextRef
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (HomeBlogs_module_default()).blogContainer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            class: "p-container relative",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "grid justify-content-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "col-12 lg:col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            ref: blogTextRef,
                            className: "skrAnimationScroll text-center mb-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                class: "skrTitleFrame",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        class: "skrMb20 skrHeading",
                                        children: "Our Newsletter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "skrParagraph mt-6",
                                        children: "Sagor Konna Resort also offers a stunning range of blogs for all your needs. You can read about the beautiful Sagor Konna Resort and side views of it. People can also know about KuaKata."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "skrButton mt-4",
                                                children: " Read More"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 lg:col-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "skrBlogCard",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "skrCoverFrame",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: beachBlog1/* default */.Z,
                                        alt: "cover",
                                        className: "blogImage"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "skrDescriptionFrame",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "skrRoomFeature",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    class: "skrFeature",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            class: "skrIconFrame skrIconAuthor",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: profile1/* default */.Z,
                                                                alt: "Profile Picture",
                                                                className: "blogAuthor"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Niloy Debnath"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    class: "skrFeature",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            class: "skrIconFrame",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: time/* default */.Z,
                                                                alt: "time"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "12.08.21 23:13"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/blog",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "linkKajkam",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    class: "skrMb20",
                                                    children: "See the sight of Kuakata with Sagor Konna Resort"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            class: "skrTextLight",
                                            children: "View here, at Sagor Konna Resort is amazing. People will able to feel the Bay of Bengal in a different angle."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 lg:col-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "skrBlogCard",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "skrCoverFrame",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: beachBlog2/* default */.Z,
                                        alt: "cover",
                                        className: "blogImage"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "skrDescriptionFrame",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "skrRoomFeature",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    class: "skrFeature",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            class: "skrIconFrame skrIconAuthor",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: profile2/* default */.Z,
                                                                alt: "Profile Picture",
                                                                className: "blogAuthor"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Mubasserin Sadia"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    class: "skrFeature",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            class: "skrIconFrame",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: time/* default */.Z,
                                                                alt: "time"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "07.10.22 11:13"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/blog",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "linkKajkam",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    class: "skrMb20",
                                                    children: "Sagor Konna meets Sagor Konna in Kuakata"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            class: "skrTextLight",
                                            children: "Sagor Konna Resort is one of the best hotel to stay in Kuakata. Kuakata is very beautiful place in Bangladesh to visit."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 lg:col-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "skrBlogCard",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "skrCoverFrame",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: beachBlog3,
                                        alt: "cover",
                                        className: "blogImage"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "skrDescriptionFrame",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "skrRoomFeature",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    class: "skrFeature",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            class: "skrIconFrame skrIconAuthor",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: profile1/* default */.Z,
                                                                alt: "Profile Picture",
                                                                className: "blogAuthor"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Hasan Ahmed"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    class: "skrFeature",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            class: "skrIconFrame",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: time/* default */.Z,
                                                                alt: "time"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "10.08.22 20:13"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/blog",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "linkKajkam",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    class: "skrMb20",
                                                    children: "Sagor Konna Resort will Surprise You in Different Ways"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            class: "skrTextLight",
                                            children: "Kuakata is a amazing place. Here in Kuakata, there is a fabulous resort named Sagor Konna Resort where you will able to spend your time effectively."
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Home_HomeBlogs = (HomeBlogs);


/***/ })

};
;