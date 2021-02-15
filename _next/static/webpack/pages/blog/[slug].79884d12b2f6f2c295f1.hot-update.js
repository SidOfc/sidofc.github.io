webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./components/post/index.jsx":
/*!***********************************!*\
  !*** ./components/post/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.module.scss */ \"./components/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/text */ \"./components/text/index.jsx\");\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/heading */ \"./components/heading/index.jsx\");\n/* harmony import */ var _components_bullet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/bullet */ \"./components/bullet/index.jsx\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/button */ \"./components/button/index.jsx\");\n/* harmony import */ var _src_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/util */ \"./util/index.js\");\n/* harmony import */ var _src_util_mdx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/util/mdx */ \"./util/mdx.js\");\n\nvar _jsxFileName = \"/home/sidofc/Dev/sidofc/js/sidneyliebrand.io/components/post/index.jsx\";\n\n\n\n\n\n\n\n\nfunction Post(_ref) {\n  var title = _ref.title,\n      published = _ref.published,\n      readTimeInMinutes = _ref.readTimeInMinutes,\n      source = _ref.source,\n      slug = _ref.slug;\n  var content = Object(_src_util_mdx__WEBPACK_IMPORTED_MODULE_8__[\"hydrate\"])(source);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_heading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      link: \"/blog/\".concat(slug),\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.postData,\n      color: \"page-accent\",\n      children: [\"By Sidney Liebrand on \", Object(_src_util__WEBPACK_IMPORTED_MODULE_7__[\"dateFormat\"])(published), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_bullet__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), readTimeInMinutes, \" min read\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), content, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/blog\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 32\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0L2luZGV4LmpzeD8zNWI2Il0sIm5hbWVzIjpbIlBvc3QiLCJ0aXRsZSIsInB1Ymxpc2hlZCIsInJlYWRUaW1lSW5NaW51dGVzIiwic291cmNlIiwic2x1ZyIsImNvbnRlbnQiLCJoeWRyYXRlIiwic3R5bGVzIiwicG9zdCIsInBvc3REYXRhIiwiZGF0ZUZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BTVo7QUFBQSxNQUxDQyxLQUtELFFBTENBLEtBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxpQkFHRCxRQUhDQSxpQkFHRDtBQUFBLE1BRkNDLE1BRUQsUUFGQ0EsTUFFRDtBQUFBLE1BRENDLElBQ0QsUUFEQ0EsSUFDRDtBQUNDLE1BQU1DLE9BQU8sR0FBR0MsNkRBQU8sQ0FBQ0gsTUFBRCxDQUF2QjtBQUVBLHNCQUNJO0FBQVMsYUFBUyxFQUFFSSx3REFBTSxDQUFDQyxJQUEzQjtBQUFBLDRCQUNJLHFFQUFDLDJEQUFEO0FBQVMsVUFBSSxrQkFBV0osSUFBWCxDQUFiO0FBQUEsZ0JBQWlDSjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyx3REFBRDtBQUFNLGVBQVMsRUFBRU8sd0RBQU0sQ0FBQ0UsUUFBeEI7QUFBa0MsV0FBSyxFQUFDLGFBQXhDO0FBQUEsMkNBQzJCQyw0REFBVSxDQUFDVCxTQUFELENBRHJDLGVBRUkscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBR0tDLGlCQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBT0tHLE9BUEwsZUFRSSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxPQUFYO0FBQUEsNkJBQW1CLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIO0tBckJ1Qk4sSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9zdC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFRleHQgZnJvbSAnQGNvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdAY29tcG9uZW50cy9oZWFkaW5nJztcbmltcG9ydCBCdWxsZXQgZnJvbSAnQGNvbXBvbmVudHMvYnVsbGV0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7ZGF0ZUZvcm1hdH0gZnJvbSAnQHNyYy91dGlsJztcbmltcG9ydCB7aHlkcmF0ZX0gZnJvbSAnQHNyYy91dGlsL21keCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe1xuICAgIHRpdGxlLFxuICAgIHB1Ymxpc2hlZCxcbiAgICByZWFkVGltZUluTWludXRlcyxcbiAgICBzb3VyY2UsXG4gICAgc2x1Zyxcbn0pIHtcbiAgICBjb25zdCBjb250ZW50ID0gaHlkcmF0ZShzb3VyY2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XG4gICAgICAgICAgICA8SGVhZGluZyBsaW5rPXtgL2Jsb2cvJHtzbHVnfWB9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e3N0eWxlcy5wb3N0RGF0YX0gY29sb3I9XCJwYWdlLWFjY2VudFwiPlxuICAgICAgICAgICAgICAgIEJ5IFNpZG5leSBMaWVicmFuZCBvbiB7ZGF0ZUZvcm1hdChwdWJsaXNoZWQpfVxuICAgICAgICAgICAgICAgIDxCdWxsZXQgLz5cbiAgICAgICAgICAgICAgICB7cmVhZFRpbWVJbk1pbnV0ZXN9IG1pbiByZWFkXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPjxCdXR0b24+QmFjazwvQnV0dG9uPjwvTGluaz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/post/index.jsx\n");

/***/ })

})