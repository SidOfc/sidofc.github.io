webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/dark-mode-toggle/index.jsx":
/*!***********************************************!*\
  !*** ./components/dark-mode-toggle/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkModeToggle; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dark_mode_toggle_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dark-mode-toggle.module.scss */ \"./components/dark-mode-toggle/dark-mode-toggle.module.scss\");\n/* harmony import */ var _dark_mode_toggle_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dark_mode_toggle_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/util */ \"./util/index.js\");\n/* harmony import */ var _hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/use-dark-mode */ \"./hooks/use-dark-mode.js\");\n\n\nvar _jsxFileName = \"/home/sidofc/Dev/sidofc/js/sidneyliebrand.io/components/dark-mode-toggle/index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction DarkModeToggle() {\n  _s();\n\n  var _useDarkMode = Object(_hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      isDark = _useDarkMode.isDark,\n      toggleDark = _useDarkMode.toggleDark;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    tabIndex: 0,\n    onClick: toggleDark,\n    title: \"Toggle dark theme\",\n    onKeyDown: function onKeyDown(event) {\n      if (event.key === 'Enter') {\n        event.stopPropagation();\n        event.preventDefault();\n        toggleDark();\n      }\n    },\n    className: _dark_mode_toggle_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      fill: \"#000000\",\n      className: Object(_src_util__WEBPACK_IMPORTED_MODULE_2__[\"classes\"])(_dark_mode_toggle_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toggle, _dark_mode_toggle_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toggleDark),\n      xmlns: \"http://www.w3.org/2000/svg\",\n      viewBox: \"0 0 24 24\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        d: \"M0 0h24v24H0z\",\n        fill: \"none\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        d: \"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      fill: \"#000000\",\n      className: Object(_src_util__WEBPACK_IMPORTED_MODULE_2__[\"classes\"])(_dark_mode_toggle_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toggle, _dark_mode_toggle_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toggleLight),\n      xmlns: \"http://www.w3.org/2000/svg\",\n      viewBox: \"0 0 24 24\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        d: \"M0 0h24v24H0z\",\n        fill: \"none\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        d: \"M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DarkModeToggle, \"gCPct4Hp6MbCEWUn0ky+VYZgQZ8=\", false, function () {\n  return [_hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = DarkModeToggle;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkModeToggle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrLW1vZGUtdG9nZ2xlL2luZGV4LmpzeD8yYmI4Il0sIm5hbWVzIjpbIkRhcmtNb2RlVG9nZ2xlIiwidXNlRGFya01vZGUiLCJpc0RhcmsiLCJ0b2dnbGVEYXJrIiwiZXZlbnQiLCJrZXkiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlcyIsIndyYXBwZXIiLCJjbGFzc2VzIiwidG9nZ2xlIiwidG9nZ2xlTGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEscUJBQ1JDLG9FQUFXLEVBREg7QUFBQSxNQUM5QkMsTUFEOEIsZ0JBQzlCQSxNQUQ4QjtBQUFBLE1BQ3RCQyxVQURzQixnQkFDdEJBLFVBRHNCOztBQUdyQyxzQkFDSTtBQUNJLFlBQVEsRUFBRSxDQURkO0FBRUksV0FBTyxFQUFFQSxVQUZiO0FBR0ksU0FBSyxFQUFDLG1CQUhWO0FBSUksYUFBUyxFQUFFLG1CQUFDQyxLQUFELEVBQVc7QUFDbEIsVUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDdkJELGFBQUssQ0FBQ0UsZUFBTjtBQUNBRixhQUFLLENBQUNHLGNBQU47QUFDQUosa0JBQVU7QUFDYjtBQUNKLEtBVkw7QUFXSSxhQUFTLEVBQUVLLG9FQUFNLENBQUNDLE9BWHRCO0FBQUEsNEJBYUk7QUFDSSxVQUFJLEVBQUMsU0FEVDtBQUVJLGVBQVMsRUFBRUMseURBQU8sQ0FBQ0Ysb0VBQU0sQ0FBQ0csTUFBUixFQUFnQkgsb0VBQU0sQ0FBQ0wsVUFBdkIsQ0FGdEI7QUFHSSxXQUFLLEVBQUMsNEJBSFY7QUFJSSxhQUFPLEVBQUMsV0FKWjtBQUFBLDhCQU1JO0FBQU0sU0FBQyxFQUFDLGVBQVI7QUFBd0IsWUFBSSxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQU9JO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKLGVBc0JJO0FBQ0ksVUFBSSxFQUFDLFNBRFQ7QUFFSSxlQUFTLEVBQUVPLHlEQUFPLENBQUNGLG9FQUFNLENBQUNHLE1BQVIsRUFBZ0JILG9FQUFNLENBQUNJLFdBQXZCLENBRnRCO0FBR0ksV0FBSyxFQUFDLDRCQUhWO0FBSUksYUFBTyxFQUFDLFdBSlo7QUFBQSw4QkFNSTtBQUFNLFNBQUMsRUFBQyxlQUFSO0FBQXdCLFlBQUksRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQ0g7O0dBckN1QlosYztVQUNTQyw0RDs7O0tBRFRELGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2RhcmstbW9kZS10b2dnbGUvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2RhcmstbW9kZS10b2dnbGUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtjbGFzc2VzfSBmcm9tICdAc3JjL3V0aWwnO1xuaW1wb3J0IHVzZURhcmtNb2RlIGZyb20gJ0Bob29rcy91c2UtZGFyay1tb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFya01vZGVUb2dnbGUoKSB7XG4gICAgY29uc3Qge2lzRGFyaywgdG9nZ2xlRGFya30gPSB1c2VEYXJrTW9kZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYXJrfVxuICAgICAgICAgICAgdGl0bGU9XCJUb2dnbGUgZGFyayB0aGVtZVwiXG4gICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZURhcmsoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMoc3R5bGVzLnRvZ2dsZSwgc3R5bGVzLnRvZ2dsZURhcmspfVxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi43NiA0Ljg0bC0xLjgtMS43OS0xLjQxIDEuNDEgMS43OSAxLjc5IDEuNDItMS40MXpNNCAxMC41SDF2Mmgzdi0yem05LTkuOTVoLTJWMy41aDJWLjU1em03LjQ1IDMuOTFsLTEuNDEtMS40MS0xLjc5IDEuNzkgMS40MSAxLjQxIDEuNzktMS43OXptLTMuMjEgMTMuN2wxLjc5IDEuOCAxLjQxLTEuNDEtMS44LTEuNzktMS40IDEuNHpNMjAgMTAuNXYyaDN2LTJoLTN6bS04LTVjLTMuMzEgMC02IDIuNjktNiA2czIuNjkgNiA2IDYgNi0yLjY5IDYtNi0yLjY5LTYtNi02em0tMSAxNi45NWgyVjE5LjVoLTJ2Mi45NXptLTcuNDUtMy45MWwxLjQxIDEuNDEgMS43OS0xLjgtMS40MS0xLjQxLTEuNzkgMS44elwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzKHN0eWxlcy50b2dnbGUsIHN0eWxlcy50b2dnbGVMaWdodCl9XG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LjUsMmMtMS44MiwwLTMuNTMsMC41LTUsMS4zNWMyLjk5LDEuNzMsNSw0Ljk1LDUsOC42NXMtMi4wMSw2LjkyLTUsOC42NUM1Ljk3LDIxLjUsNy42OCwyMiw5LjUsMjJjNS41MiwwLDEwLTQuNDgsMTAtMTAgUzE1LjAyLDIsOS41LDJ6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dark-mode-toggle/index.jsx\n");

/***/ })

})