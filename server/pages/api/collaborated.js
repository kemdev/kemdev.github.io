"use strict";
(() => {
var exports = {};
exports.id = 790;
exports.ids = [790];
exports.modules = {

/***/ 4123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ general)
});

;// CONCATENATED MODULE: ./data/collaborated.json
const collaborated_namespaceObject = JSON.parse('[{"id":0,"isDeployed":true,"name":"NextIn","description":"A job application manager, where you can organize your job search, add Todo lists, notes, contacts, and add a cover letter, all of that to each company that has been applied to ...and mouch more.","tech":"React - Express - Mongoose - Node","url":"https://nextin.works/","repo":"https://github.com/semuona/NextIn","image":"/img/screenshots/nextin.webp"},{"id":1,"isDeployed":true,"name":"Marlu","description":"Web development and a marketing agency based in Sydney; the website has been built for the DCI inspiration jam hackathon.","tech":"React - Vanilla HTML / CSS","url":"https://marlu.tech/","repo":"https://github.com/kemdev/marlu-digital-solution","image":"/img/screenshots/marlu.webp"},{"id":24,"isDeployed":true,"name":"Marlu","description":"ZeeFood, online food delivery service, one of the first project when we learned backend.","tech":"React - Express - Mongoose - Node","url":"https://zeefood.herokuapp.com/","repo":"https://github.com/Zee-Iq/Backend-project/tree/7b52f7863a88c0e62dfc6d0d5d1148b7bcee3711","image":"/img/screenshots/ZeeFood.webp"}]');
;// CONCATENATED MODULE: ./pages/api/collaborated.js

function general(req, res) {
    res.send(collaborated_namespaceObject);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4123));
module.exports = __webpack_exports__;

})();