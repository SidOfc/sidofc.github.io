webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/seo.jsx":
/*!****************************!*\
  !*** ./components/seo.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Seo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/seo.jsx";


var prefixes = ['', 'dc:', 'og:', 'twitter:'];
function Seo(_ref) {
  var title = _ref.title,
      description = _ref.description,
      author = _ref.author;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "dc:title",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), author && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "dc:creator",
    content: author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), description && prefixes.map(function (prefix) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: prefix,
      name: "".concat(prefix, "description"),
      content: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.0bfcbbce44044bf6d904.hot-update.js.map