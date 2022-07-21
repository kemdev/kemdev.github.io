"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 7278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
;// CONCATENATED MODULE: external "next/dist/lib/import-next-warning"
const import_next_warning_namespaceObject = require("next/dist/lib/import-next-warning");
;// CONCATENATED MODULE: ./pages/api/contact.js
// The toturial for this is here; https://dev.to/kennymark/how-to-send-serverless-emails-with-next-js-and-sengrid-40lj


mail_default().setApiKey(process.env.EMAIL_API_KEY);
/* harmony default export */ const contact = (async (req, res)=>{
    const { email , phone , message , firstName , lastName  } = req.body;
    const name = firstName + " " + lastName;
    const msg = {
        to: "abdulkarim.alarmanazi@gmail.com",
        //   from: email,
        from: "abdulkarim.alarmanazi@gmail.com",
        name,
        subject: "New Message from " + name,
        phone,
        text: message
    };
    try {
        //   console.log(msg);
        await mail_default().send(msg);
        res.json({
            success: true,
            message: `Message has been sent`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error sending email, please try again later!",
            error: error
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7278));
module.exports = __webpack_exports__;

})();