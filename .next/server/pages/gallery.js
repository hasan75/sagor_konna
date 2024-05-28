(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 5039:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery": "galleryImg_gallery__PVn6v",
	"pics": "galleryImg_pics__gLOQ0"
};


/***/ }),

/***/ 9637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ gallery),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "primereact/image"
const image_namespaceObject = require("primereact/image");
// EXTERNAL MODULE: ./styles/galleryImg.module.css
var galleryImg_module = __webpack_require__(5039);
var galleryImg_module_default = /*#__PURE__*/__webpack_require__.n(galleryImg_module);
;// CONCATENATED MODULE: ./components/Gallery/GalleryImg.js



const GalleryImg = ({ imgData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(galleryImg_module_default()).gallery}`,
            children: imgData.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(galleryImg_module_default()).pics}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(image_namespaceObject.Image, {
                        src: item.galleryImg,
                        alt: "sagor konna resort",
                        preview: true
                    })
                }, i))
        })
    });
};
/* harmony default export */ const Gallery_GalleryImg = (GalleryImg);

;// CONCATENATED MODULE: ./pages/gallery/index.js


const Gallery = ({ imgData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "p-container",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Gallery_GalleryImg, {
            imgData: imgData
        })
    });
};
/* harmony default export */ const gallery = (Gallery);
async function getStaticProps() {
    // const roomdata = await import('./api/roomData.json');
    // return { props: { roomdata: roomdata.default } };
    const res = await fetch("http://localhost:3000/api/gallery", {
        accept: "application/json"
    });
    // console.log((res));
    const imgData = await res.json();
    return {
        props: {
            imgData: imgData
        }
    };
}


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9637));
module.exports = __webpack_exports__;

})();