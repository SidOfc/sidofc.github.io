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
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Untabbable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    author: author,
    date: date,
    words: words
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), excerpt ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Excerpt, {
    dangerouslySetInnerHTML: {
      __html: excerpt
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Excerpt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tabIndex: -1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "View post"))));
}
var Cards =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-197jrn4-0"
})(["width:100%;", ";padding:", " 0;margin-top:", ";margin:0 auto;"], _config_styles__WEBPACK_IMPORTED_MODULE_3__["page"].post.fmtVar('width', "calc(?? + ".concat(_config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].large, " * 2)"), 'max-width'), _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].large);

var Title =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  componentId: "sc-197jrn4-1"
})(["", ";margin-top:0;line-height:1;"], Object(_config_styles__WEBPACK_IMPORTED_MODULE_3__["fluid"])('font-size', '1.3rem', '1.5rem'));

var Excerpt =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  componentId: "sc-197jrn4-2"
})(["margin-top:", ";line-height:1.3;font-size:1.1rem;"], _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].regular);

var Untabbable =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  tabIndex: -1
}).withConfig({
  componentId: "sc-197jrn4-3"
})(["width:100%;height:100%;display:flex;flex-flow:column nowrap;outline:none;"]);

var Container =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.attrs({
  tabIndex: 0
}).withConfig({
  componentId: "sc-197jrn4-4"
})(["position:relative;display:flex;flex-flow:column nowrap;margin-left:", ";margin-right:", ";cursor:pointer;text-decoration:none;color:", ";padding:", ";outline:none;&:focus,&:focus ", "{opacity:1;text-shadow:none;", ";", "{transition:none;opacity:0.8;}}& + &{margin-top:", ";padding-top:", ";}", "{margin-left:auto;}"], _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, _config_styles__WEBPACK_IMPORTED_MODULE_3__["page"].color, _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, Untabbable, _config_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].fmtVar('primary', 'inset 0 0 0 2px ??', 'box-shadow'), _button__WEBPACK_IMPORTED_MODULE_4__["StyledButton"], _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, _button__WEBPACK_IMPORTED_MODULE_4__["StyledButton"]);

/***/ })

})
//# sourceMappingURL=index.js.22526c55e600b5e5b91a.hot-update.js.map