webpackHotUpdate_N_E("pages/_app",{

/***/ "./hooks/use-dark-mode.js":
/*!********************************!*\
  !*** ./hooks/use-dark-mode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDarkMode; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useDarkMode() {\n  _s();\n\n  var _document$body$getAtt;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true ? (_document$body$getAtt = document.body.getAttribute('class')) === null || _document$body$getAtt === void 0 ? void 0 : _document$body$getAtt.includes('dark') : undefined),\n      isDark = _useState[0],\n      setDark = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (isDark) {\n      document.body.setAttribute('class', 'dark');\n\n      try {\n        localStorage.setItem('dark', 'true');\n      } catch (e) {}\n    } else {\n      document.body.setAttribute('class', '');\n\n      try {\n        localStorage.removeItem('dark');\n      } catch (e) {}\n    }\n  }, [isDark]);\n  return {\n    isDark: isDark,\n    toggleDark: function toggleDark() {\n      return setDark(!isDark);\n    }\n  };\n}\n\n_s(useDarkMode, \"N+AtqhnwU7VzTr8s00dArBRjtgs=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLWRhcmstbW9kZS5qcz9mNDJiIl0sIm5hbWVzIjpbInVzZURhcmtNb2RlIiwidXNlU3RhdGUiLCJkb2N1bWVudCIsImJvZHkiLCJnZXRBdHRyaWJ1dGUiLCJpbmNsdWRlcyIsImlzRGFyayIsInNldERhcmsiLCJ1c2VFZmZlY3QiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZSIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVEYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FDOUIsZ0NBQ01DLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUFkLENBQTJCLE9BQTNCLENBRE4sMERBQ00sc0JBQXFDQyxRQUFyQyxDQUE4QyxNQUE5QyxDQUROLEdBRU0sU0FId0IsQ0FEQTtBQUFBLE1BQzNCQyxNQUQyQjtBQUFBLE1BQ25CQyxPQURtQjs7QUFPbENDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlGLE1BQUosRUFBWTtBQUNSSixjQUFRLENBQUNDLElBQVQsQ0FBY00sWUFBZCxDQUEyQixPQUEzQixFQUFvQyxNQUFwQzs7QUFDQSxVQUFJO0FBQ0FDLG9CQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkIsTUFBN0I7QUFDSCxPQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVLENBQUU7QUFDakIsS0FMRCxNQUtPO0FBQ0hWLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjTSxZQUFkLENBQTJCLE9BQTNCLEVBQW9DLEVBQXBDOztBQUNBLFVBQUk7QUFDQUMsb0JBQVksQ0FBQ0csVUFBYixDQUF3QixNQUF4QjtBQUNILE9BRkQsQ0FFRSxPQUFPRCxDQUFQLEVBQVUsQ0FBRTtBQUNqQjtBQUNKLEdBWlEsRUFZTixDQUFDTixNQUFELENBWk0sQ0FBVDtBQWNBLFNBQU87QUFBQ0EsVUFBTSxFQUFOQSxNQUFEO0FBQVNRLGNBQVUsRUFBRTtBQUFBLGFBQU1QLE9BQU8sQ0FBQyxDQUFDRCxNQUFGLENBQWI7QUFBQTtBQUFyQixHQUFQO0FBQ0g7O0dBdEJ1Qk4sVyIsImZpbGUiOiIuL2hvb2tzL3VzZS1kYXJrLW1vZGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURhcmtNb2RlKCkge1xuICAgIGNvbnN0IFtpc0RhcmssIHNldERhcmtdID0gdXNlU3RhdGUoXG4gICAgICAgIHByb2Nlc3MuYnJvd3NlclxuICAgICAgICAgICAgPyBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnY2xhc3MnKT8uaW5jbHVkZXMoJ2RhcmsnKVxuICAgICAgICAgICAgOiBmYWxzZVxuICAgICk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNEYXJrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGFyaycpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFyaycsICd0cnVlJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJycpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFyaycpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgIH0sIFtpc0RhcmtdKTtcblxuICAgIHJldHVybiB7aXNEYXJrLCB0b2dnbGVEYXJrOiAoKSA9PiBzZXREYXJrKCFpc0RhcmspfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-dark-mode.js\n");

/***/ })

})