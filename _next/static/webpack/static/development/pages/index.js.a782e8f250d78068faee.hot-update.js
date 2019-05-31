webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/image.jsx":
/*!******************************!*\
  !*** ./components/image.jsx ***!
  \******************************/
/*! exports provided: default, asImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asImage", function() { return asImage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/post */ "./components/layout/post.jsx");
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/styles */ "./config/styles.js");




var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/image.jsx";



function Image(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      wide = _ref.wide,
      alt = _ref.alt,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? true : _ref$caption,
      captionText = _ref.captionText,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["src", "width", "height", "wide", "alt", "caption", "captionText"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest, {
    className: wide ? 'wide' : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), width && height ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(AspectRatio, {
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), caption && (captionText ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Caption, {
    dangerouslySetInnerHTML: {
      __html: captionText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }) : alt ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, alt) : null));
}
function asImage(data) {
  return function Component(props) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Image, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }));
  };
}

function AspectRatio(_ref2) {
  var children = _ref2.children,
      width = _ref2.width,
      height = _ref2.height;

  if (width && height) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StyledAspectRatio, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, children, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        paddingBottom: "".concat((_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(height) / _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(width) * 100).toFixed(5), "%")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  } else {
    return children;
  }
}

var Caption =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].figcaption.withConfig({
  componentId: "sc-1it13qh-0"
})(["display:block;text-align:center;margin-top:", ";", ";font-size:0.9rem;"], _config_styles__WEBPACK_IMPORTED_MODULE_6__["spacing"].regular, _config_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].withVar('dimgray', 'color'));

var StyledAspectRatio =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  componentId: "sc-1it13qh-1"
})(["position:relative;width:100%;img{position:absolute;top:0;bottom:0;left:0;right:0;}}"]);

var Container =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].figure.withConfig({
  componentId: "sc-1it13qh-2"
})(["margin-top:", ";margin-bottom:", ";", " &.wide{width:100%;}img{border-radius:4px;display:block;width:100%;}"], _config_styles__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, _config_styles__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, _layout_post__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ })

})
//# sourceMappingURL=index.js.a782e8f250d78068faee.hot-update.js.map