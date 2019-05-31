webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout/header.jsx":
/*!**************************************!*\
  !*** ./components/layout/header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo */ "./components/logo.jsx");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation */ "./components/navigation.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/styles */ "./config/styles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/layout/header.jsx";






function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GridCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "a",
    title: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["hostname"], " homepage"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))));
} // A fixed header needs to be rendered
// in a GridCell (or any other relative block-level element)
// for CSS grid to fill up the space it should take.

var GridCell =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "gefaab-0"
})(["position:relative;height:", ";"], _config_styles__WEBPACK_IMPORTED_MODULE_6__["page"].header.height);

var Container =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  componentId: "gefaab-1"
})(["position:fixed;top:0;left:0;right:0;height:", ";", ";box-shadow:0px 0px ", " rgba(0,0,0,0.15);z-index:100;"], _config_styles__WEBPACK_IMPORTED_MODULE_6__["page"].header.height, _config_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].withVar('white', 'background-color'), _config_styles__WEBPACK_IMPORTED_MODULE_6__["spacing"].small);

var Inner =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "gefaab-2"
})(["max-width:", ";padding:0 0 0 ", ";margin:0 auto;height:calc(100% - 2px);display:grid;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;"], _config_styles__WEBPACK_IMPORTED_MODULE_6__["page"].width, _config_styles__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium);

/***/ })

})
//# sourceMappingURL=index.js.d6392126d6996c660f3a.hot-update.js.map