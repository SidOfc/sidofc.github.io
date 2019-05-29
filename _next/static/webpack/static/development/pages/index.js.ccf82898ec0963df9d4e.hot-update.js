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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ "./components/layout/index.js");
/* harmony import */ var _layout_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/post */ "./components/layout/post.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _layout_post__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button */ "./components/button.jsx");
/* harmony import */ var _code_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./code-block */ "./components/code-block.jsx");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");


var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/application.jsx";










function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_6__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
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

function PostHead(_ref4) {
  var title = _ref4.title,
      excerpt = _ref4.excerpt,
      author = _ref4.author;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_5__["hostname"], " \xA0\u2022\xA0 ", title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: excerpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "author",
    content: author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "og:title",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "og:description",
    content: excerpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "twitter:title",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "twitter:description",
    content: excerpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }));
}

function PostLayoutWrapper(_ref5) {
  var children = _ref5.children,
      meta = _ref5.meta,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, ["children", "meta"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, meta && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostHead, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout_post__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layout_post__WEBPACK_IMPORTED_MODULE_7__["StyledFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Back to all posts")))));
}

/***/ }),

/***/ "./components/layout/footer.jsx":
/*!**************************************!*\
  !*** ./components/layout/footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/styles */ "./config/styles.js");

var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/layout/footer.jsx";



function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\xA9 ", _config__WEBPACK_IMPORTED_MODULE_2__["hostname"], " ", new Date().getFullYear()));
}

var StyledFooter =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer.withConfig({
  componentId: "oijonz-0"
})(["color:", ";padding:", " ", ";text-align:center;"], _config_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].dimgray, _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].small, _config_styles__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium);

/***/ }),

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
})(["position:fixed;top:0;left:0;right:0;height:", ";background-color:", ";box-shadow:0px 0px ", " rgba(0,0,0,0.15);z-index:100;"], _config_styles__WEBPACK_IMPORTED_MODULE_6__["page"].header.height, _config_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].white, _config_styles__WEBPACK_IMPORTED_MODULE_6__["spacing"].small);

var Inner =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "gefaab-2"
})(["max-width:", ";padding:0 0 0 ", ";margin:0 auto;height:calc(100% - 2px);display:grid;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;"], _config_styles__WEBPACK_IMPORTED_MODULE_6__["page"].width, _config_styles__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  ENV: "development",
  hostname: 'https://sidofc.github.io'
};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blog_a_collection_of_vim_key_binds_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/a-collection-of-vim-key-binds.mdx */ "./pages/blog/a-collection-of-vim-key-binds.mdx");
/* harmony import */ var _blog_codi_vim_fullscreen_buffer_mdx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/codi-vim-fullscreen-buffer.mdx */ "./pages/blog/codi-vim-fullscreen-buffer.mdx");
/* harmony import */ var _blog_combining_caniuse_with_fzf_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/combining-caniuse-with-fzf.mdx */ "./pages/blog/combining-caniuse-with-fzf.mdx");
/* harmony import */ var _blog_how_fzf_and_ripgrep_improved_my_workflow_mdx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/how-fzf-and-ripgrep-improved-my-workflow.mdx */ "./pages/blog/how-fzf-and-ripgrep-improved-my-workflow.mdx");
/* harmony import */ var _blog_recruiters_who_call_during_working_hours_mdx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/recruiters-who-call-during-working-hours.mdx */ "./pages/blog/recruiters-who-call-during-working-hours.mdx");
/* harmony import */ var _blog_switching_to_asdf_version_manager_mdx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/switching-to-asdf-version-manager.mdx */ "./pages/blog/switching-to-asdf-version-manager.mdx");
/* harmony import */ var _blog_the_greatnesses_and_gotchas_of_yaml_mdx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/the-greatnesses-and-gotchas-of-yaml.mdx */ "./pages/blog/the-greatnesses-and-gotchas-of-yaml.mdx");
/* harmony import */ var _blog_vim_tip_persistent_undo_mdx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog/vim-tip-persistent-undo.mdx */ "./pages/blog/vim-tip-persistent-undo.mdx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utilities */ "./utilities.js");
/* harmony import */ var _components_application__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/application */ "./components/application.jsx");
/* harmony import */ var _components_blog_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/blog/card */ "./components/blog/card.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);




var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/pages/index.jsx";















var posts = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()({
  "./blog/a-collection-of-vim-key-binds.mdx": _blog_a_collection_of_vim_key_binds_mdx__WEBPACK_IMPORTED_MODULE_5__,
  "./blog/codi-vim-fullscreen-buffer.mdx": _blog_codi_vim_fullscreen_buffer_mdx__WEBPACK_IMPORTED_MODULE_6__,
  "./blog/combining-caniuse-with-fzf.mdx": _blog_combining_caniuse_with_fzf_mdx__WEBPACK_IMPORTED_MODULE_7__,
  "./blog/how-fzf-and-ripgrep-improved-my-workflow.mdx": _blog_how_fzf_and_ripgrep_improved_my_workflow_mdx__WEBPACK_IMPORTED_MODULE_8__,
  "./blog/recruiters-who-call-during-working-hours.mdx": _blog_recruiters_who_call_during_working_hours_mdx__WEBPACK_IMPORTED_MODULE_9__,
  "./blog/switching-to-asdf-version-manager.mdx": _blog_switching_to_asdf_version_manager_mdx__WEBPACK_IMPORTED_MODULE_10__,
  "./blog/the-greatnesses-and-gotchas-of-yaml.mdx": _blog_the_greatnesses_and_gotchas_of_yaml_mdx__WEBPACK_IMPORTED_MODULE_11__,
  "./blog/vim-tip-persistent-undo.mdx": _blog_vim_tip_persistent_undo_mdx__WEBPACK_IMPORTED_MODULE_12__
}).reduce(function (arr, _ref) {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
      path = _ref2[0],
      exports = _ref2[1];

  return arr.concat([Object(_utilities__WEBPACK_IMPORTED_MODULE_14__["postMeta"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, exports.meta, {
    path: path
  }))]);
}, []).sort(function (p1, p2) {
  return p2.date - p1.date;
});

function Page() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_application__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_13__["hostname"], " \xA0\u2022\xA0 homepage"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
    name: "author",
    content: "Sidney Liebrand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
    name: "description",
    content: "Home of Sidney Liebrand, a front-end developer with a sharp eye for detail. Find blog posts and tools written by Sidney right here.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_blog_card__WEBPACK_IMPORTED_MODULE_16__["Cards"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_blog_card__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: post.title
    }, post, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.ccf82898ec0963df9d4e.hot-update.js.map