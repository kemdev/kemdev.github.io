"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 8990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ replicate)
});

;// CONCATENATED MODULE: ./data/replicate.json
const replicate_namespaceObject = JSON.parse('[{"id":21,"name":"codepen/","description":"Replicate of codepen/","url":"dupplicatingWebsite/codepen/","image":"/img/generlaImg/codepen.webp"},{"id":22,"name":"ibotani Replicate","description":" Replicate the website ibotani.com","url":"dupplicatingWebsite/exer-2-ibotani.com/","image":"/img/generlaImg/ibotani.webp"},{"id":23,"name":"Twitter","description":"Replicate Twitter","url":"dupplicatingWebsite/twitter/","image":"/img/generlaImg/twitter.webp"}]');
;// CONCATENATED MODULE: ./pages/api/replicate.js

function replicate(req, res) {
    res.send(replicate_namespaceObject);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8990));
module.exports = __webpack_exports__;

})();