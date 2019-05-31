webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/blog/card.jsx":
/*!**********************************!*\
  !*** ./components/blog/card.jsx ***!
  \**********************************/
/*! exports provided: default, Cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return Cards; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/styles */ "./config/styles.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./components/button.jsx");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meta */ "./components/blog/meta.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/blog/card.jsx";





function Card(_ref) {
  var title = _ref.title,
      author = _ref.author,
      date = _ref.date,
      excerpt = _ref.excerpt,
      children = _ref.children,
      href = _ref.href,
      words = _ref.words;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: href,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    author: author,
    date: date,
    words: words
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), excerpt ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Excerpt, {
    dangerouslySetInnerHTML: {
      __html: excerpt
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Excerpt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "View post")));
}
var Cards =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-197jrn4-0"
})(["width:100%;", ";padding:", ";margin:0 auto;"], _config_styles__WEBPACK_IMPORTED_MODULE_3__["page"].withVar('width', 'max-width'), _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium);

var Title =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  componentId: "sc-197jrn4-1"
})(["", ";line-height:1;"], Object(_config_styles__WEBPACK_IMPORTED_MODULE_3__["fluid"])('font-size', '1.3rem', '1.5rem'));

var Excerpt =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  componentId: "sc-197jrn4-2"
})(["margin-top:", ";line-height:1.3;font-size:1.1rem;"], _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].regular);

var Container =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  componentId: "sc-197jrn4-3"
})(["position:relative;display:flex;flex-flow:column nowrap;cursor:pointer;text-decoration:none;color:", ";& + &{margin-top:", ";padding-top:", ";}", "{margin-left:auto;}"], _config_styles__WEBPACK_IMPORTED_MODULE_3__["page"].color, _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, _button__WEBPACK_IMPORTED_MODULE_4__["StyledButton"]);

/***/ })

})
//# sourceMappingURL=index.js.447d3e761ee0d0c613c8.hot-update.js.map