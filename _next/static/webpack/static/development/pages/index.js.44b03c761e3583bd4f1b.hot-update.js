webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/application.jsx":
/*!************************************!*\
  !*** ./components/application.jsx ***!
  \************************************/
/*! exports provided: Post, default, withMDX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMDX", function() { return withMDX; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ "./components/layout/index.js");
/* harmony import */ var _layout_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/post */ "./components/layout/post.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _layout_post__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seo */ "./components/seo.jsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button */ "./components/button.jsx");
/* harmony import */ var _code_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./code-block */ "./components/code-block.jsx");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");


var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/application.jsx";










function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_5__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}
var customMDXComponents = {
  wrapper: PostLayoutWrapper,
  pre: function pre(_ref2) {
    var children = _ref2.children;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_code_block__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, children.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  },
  li: function li(_ref3) {
    var children = _ref3.children;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, children.props ? children.props.children : children);
  }
};
function withMDX(Component) {
  return function MDXComponent(props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__["MDXProvider"], {
      components: customMDXComponents,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })));
  };
}

function PostLayoutWrapper(_ref4) {
  var children = _ref4.children,
      _ref4$meta = _ref4.meta,
      meta = _ref4$meta === void 0 ? {} : _ref4$meta,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, ["children", "meta"]);

  var title = meta.title,
      author = meta.author,
      excerpt = meta.excerpt;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, meta && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_seo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: title,
    description: excerpt,
    author: author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout_post__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout_post__WEBPACK_IMPORTED_MODULE_6__["StyledFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Back to all posts")))));
}

/***/ })

})
//# sourceMappingURL=index.js.44b03c761e3583bd4f1b.hot-update.js.map