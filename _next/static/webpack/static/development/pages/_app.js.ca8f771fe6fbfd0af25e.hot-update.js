webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/code-block.jsx":
/*!***********************************!*\
  !*** ./components/code-block.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeBlock; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/es/index.js");


var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/code-block.jsx";


function CodeBlock(_ref) {
  var children = _ref.children,
      _ref$wide = _ref.wide,
      wide = _ref$wide === void 0 ? false : _ref$wide,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'language-plain' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__["defaultProps"], {
    code: children.trim(),
    language: className.split('-').pop(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), function (_ref2) {
    var style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
        overflow: 'auto'
      }, style, {
        width: wide && '100%'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, tokens.map(function (line, lnum) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: lnum
      }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getLineProps({
        line: line,
        key: lnum
      }), {
        className: null
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), line.map(function (token, lcol) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: lcol
        }, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getTokenProps({
          token: token,
          key: lcol
        }), {
          className: null
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }));
      }));
    }));
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.ca8f771fe6fbfd0af25e.hot-update.js.map