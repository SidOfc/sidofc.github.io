webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/global-css.jsx":
/*!***********************************!*\
  !*** ./components/global-css.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./utilities.js");
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/styles */ "./config/styles.js");




function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    ", "\n\n    * {\n        box-sizing: border-box;\n\n        &::selection {\n            background-color: ", ";\n            color: ", ";\n        }\n    }\n\n    :root {\n        ", ";\n        ", ";\n    }\n\n    html {", "}\n\n    body {\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        font-family: ", ", serif;\n        line-height: 1.6;\n        font-weight: ", ";\n    }\n\n    #__next {\n        height: 100%;\n        height: 100vh;\n        ", ";\n    }\n\n    article, aside, details, figcaption, figure, footer,\n    header, main, mark, nav, section {\n        display: block;\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n        ", ";\n        line-height: 1.1;\n        font-weight: ", ";\n        margin: 0 0 ", ";\n        ", "\n    }\n\n    h1 {", "}\n    h2 {", "}\n    h3 {", "}\n    h4 {", "}\n    h5 {", "}\n    h6 {", "}\n\n    p {\n        font-size: 1.15rem;\n        margin-top: 0;\n        margin-bottom: ", ";\n    }\n\n    li {\n        font-size: 1.15rem;\n        margin-bottom: ", ";\n    }\n\n    blockquote {\n        font-size: 1.15rem;\n    }\n\n    pre,\n    code,\n    kbd {\n        padding: 0.5rem 1rem;\n        border-radius: 4px;\n        background-color: ", ";\n        ", ";\n    }\n\n    code,\n    kbd {\n        font-size: 0.8em;\n        padding: 0.2rem 0.4rem 0.15rem;\n        border-radius: 4px;\n    }\n\n    pre code {\n        font-size: 0.9rem;\n        padding: 0;\n        background-color: transparent;\n        display: block;\n    }\n\n    kbd {\n        background-image: none;\n        border: 1px solid ", ";\n    }\n\n    a, a > code {\n        position: relative;\n        ", ";\n        text-decoration: none;\n        outline: none;\n\n        &:not(:active):focus {\n            opacity: 0.8;\n            ", ";\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // font location: /static/fonts
// name format:   [family]-[weight] (family must be lowercased in filename)

function generateFontFaces(family, weights) {
  var familyLower = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["downcase"])(family);
  var mapped = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(weights).forEach(function (name) {
    if (['definitions', 'fmtVar', 'withVar'].includes(name)) return;
    var weight = weights[name];
    var localName = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(name);
    mapped.push("@font-face {\n           font-family: ".concat(family, ";\n           font-style: normal;\n           font-display: swap;\n           font-weight: ").concat(weight, ";\n           src: url('/static/fonts/").concat(familyLower, "-").concat(weight, ".eot'); /* IE9 Compat Modes */\n           src: local('").concat(family, " ").concat(localName, "'),\n                local('").concat(family, "-").concat(localName, "'),\n                url('/static/fonts/").concat(familyLower, "-").concat(weight, ".eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n                url('/static/fonts/").concat(familyLower, "-").concat(weight, ".woff2') format('woff2'), /* Super Modern Browsers */\n                url('/static/fonts/").concat(familyLower, "-").concat(weight, ".woff') format('woff'), /* Modern Browsers */\n                url('/static/fonts/").concat(familyLower, "-").concat(weight, ".ttf') format('truetype'), /* Safari, Android, iOS */\n                url('/static/fonts/").concat(familyLower, "-").concat(weight, ".svg#").concat(family, "') format('svg'); /* Legacy iOS */\n           }"));
  });

  return mapped.join();
}

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), generateFontFaces(_config_styles__WEBPACK_IMPORTED_MODULE_4__["page"].fontFamily, _config_styles__WEBPACK_IMPORTED_MODULE_4__["font"].weights), Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["lighten"])(_config_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].primary, 0.9), Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["darken"])(_config_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].primary, 0.3), _config_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].definitions, _config_styles__WEBPACK_IMPORTED_MODULE_4__["page"].definitions, Object(_config_styles__WEBPACK_IMPORTED_MODULE_4__["fluid"])('font-size', '0.8rem', '1.2rem'), _config_styles__WEBPACK_IMPORTED_MODULE_4__["page"].fontFamily, _config_styles__WEBPACK_IMPORTED_MODULE_4__["font"].weights.light, _config_styles__WEBPACK_IMPORTED_MODULE_4__["page"].withVar('color'), _config_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].withVar('black', 'color'), _config_styles__WEBPACK_IMPORTED_MODULE_4__["font"].weights.bold, _config_styles__WEBPACK_IMPORTED_MODULE_4__["spacing"].small, Object(_config_styles__WEBPACK_IMPORTED_MODULE_4__["fluid"])('margin-top', _config_styles__WEBPACK_IMPORTED_MODULE_4__["spacing"].medium, _config_styles__WEBPACK_IMPORTED_MODULE_4__["spacing"].large), Object(_config_styles__WEBPACK_IMPORTED_MODULE_4__["fluid"])('font-size', '1.5rem', '2.8rem'), Object(_config_styles__WEBPACK_IMPORTED_MODULE_4__["fluid"])('font-size', '1.4rem', '2.3rem'), Object(_config_styles__WEBPACK_IMPORTED_MODULE_4__["fluid"])('font-size', '1.3rem', '2.1rem'), Object(_config_styles__WEBPACK_IMPORTED_MODULE_4__["fluid"])('font-size', '1.2rem', '1.8rem'), Object(_config_styles__WEBPACK_IMPORTED_MODULE_4__["fluid"])('font-size', '1.1rem', '1.5rem'), Object(_config_styles__WEBPACK_IMPORTED_MODULE_4__["fluid"])('font-size', '1rem', '1.2rem'), _config_styles__WEBPACK_IMPORTED_MODULE_4__["spacing"].medium, _config_styles__WEBPACK_IMPORTED_MODULE_4__["spacing"].medium, Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["darken"])(_config_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].white, 0.05), _config_styles__WEBPACK_IMPORTED_MODULE_4__["page"].withVar('color'), Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["rgba"])(_config_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].dimgray, 0.2), _config_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].withVar('primary', 'color'), _config_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].fmtVar('primary', 'text-shadow', '-0.06ex 0 ??, 0.06ex 0 ??')));

/***/ })

})
//# sourceMappingURL=_app.js.891112a6df56b22df691.hot-update.js.map