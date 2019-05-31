webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/welcome-banner.jsx":
/*!***************************************!*\
  !*** ./components/welcome-banner.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/styles */ "./config/styles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img */ "./assets/img/index.js");

var _jsxFileName = "/home/sidofc/Dev/sidneyliebrand.io/components/welcome-banner.jsx";




function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledBanner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_img__WEBPACK_IMPORTED_MODULE_4__["Portrait"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Welcome!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "My name is Sidney Liebrand. I am a Dutch front-end developer working at ", _config__WEBPACK_IMPORTED_MODULE_3__["employer"].name, " in ", _config__WEBPACK_IMPORTED_MODULE_3__["employer"].city, ".")));
}

var BannerImage =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  componentId: "sc-1638dnr-0"
})(["position:relative;flex:1 1 420px;margin:auto;> *{margin:0;border-radius:100%;overflow:hidden;}"]);

var BannerContent =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  componentId: "sc-1638dnr-1"
})(["flex:2 1 auto;margin:auto 0 auto ", ";line-height:1.2;> *:first-child{margin-top:0;}"], _config_styles__WEBPACK_IMPORTED_MODULE_2__["spacing"].large);

var StyledBanner =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  componentId: "sc-1638dnr-2"
})(["position:relative;margin:0 auto;display:flex;flex-flow:row nowrap;padding:", " ", ";width:100%;", ";@media all and (max-width:560px){flex-flow:column nowrap;align-items:center;justify-content:center;&::after{content:'';display:block;width:30%;position:absolute;bottom:0;left:35%;height:4px;", ";border-radius:8px;}", "{flex:1 1 auto;width:100%;margin:0;margin-bottom:", ";max-width:280px;}", "{text-align:center;margin-left:0;}}"], _config_styles__WEBPACK_IMPORTED_MODULE_2__["spacing"].large, _config_styles__WEBPACK_IMPORTED_MODULE_2__["spacing"].medium, _config_styles__WEBPACK_IMPORTED_MODULE_2__["page"].withVar('width', 'max-width'), _config_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].withVar('primary', 'background-color'), BannerImage, _config_styles__WEBPACK_IMPORTED_MODULE_2__["spacing"].large, BannerContent);

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
/* harmony import */ var _components_welcome_banner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/welcome-banner */ "./components/welcome-banner.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_18__);




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
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_13__["hostname"], " \xA0\u2022\xA0 homepage"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
    name: "author",
    content: "Sidney Liebrand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
    name: "description",
    content: "Home of Sidney Liebrand, a front-end developer with a sharp eye for detail. Find blog posts and tools written by Sidney right here.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_blog_card__WEBPACK_IMPORTED_MODULE_16__["Cards"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_blog_card__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: post.title
    }, post, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.4b52da7f7ad1217f05c7.hot-update.js.map