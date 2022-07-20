"use strict";
(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 5996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ skills)
});

;// CONCATENATED MODULE: ./data/skills.json
const skills_namespaceObject = JSON.parse('[{"id":0,"name":"Frontend Development","value":80,"text":"Advanced"},{"id":1,"name":"Backend Development","value":20,"text":"Basic"},{"id":2,"name":"React","value":80,"text":"Advanced"},{"id":3,"name":"HTML/CSS","value":90,"text":"Advanced"},{"id":4,"name":"JavaScript","value":70,"text":"Advanced"},{"id":4,"name":"Python","value":20,"text":"Basic"},{"id":5,"name":"Node.js","value":50,"text":"medium"},{"id":6,"name":"Three.js","value":25,"text":"Basic"}]');
;// CONCATENATED MODULE: ./pages/api/skills.js

function skills(req, res) {
    res.send(skills_namespaceObject);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5996));
module.exports = __webpack_exports__;

})();