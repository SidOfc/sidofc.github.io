webpackHotUpdate_N_E("pages/_app",{

/***/ "./hooks/use-dark-mode.js":
/*!********************************!*\
  !*** ./hooks/use-dark-mode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDarkMode; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useDarkMode() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(function () {\n    var _document$body$getAtt;\n\n    return true ? (_document$body$getAtt = document.body.getAttribute('class')) === null || _document$body$getAtt === void 0 ? void 0 : _document$body$getAtt.includes('dark') : undefined;\n  }),\n      isDark = _useState[0],\n      setDark = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (isDark) {\n      document.body.setAttribute('class', 'dark');\n\n      try {\n        localStorage.setItem('dark', 'true');\n      } catch (e) {}\n    } else {\n      document.body.setAttribute('class', '');\n\n      try {\n        localStorage.removeItem('dark');\n      } catch (e) {}\n    }\n  }, [isDark]);\n  return {\n    isDark: isDark,\n    toggleDark: function toggleDark() {\n      return setDark(!isDark);\n    }\n  };\n}\n\n_s(useDarkMode, \"7lR/KEy7Zu/+YypUfR07CLW7KUQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLWRhcmstbW9kZS5qcz9mNDJiIl0sIm5hbWVzIjpbInVzZURhcmtNb2RlIiwidXNlU3RhdGUiLCJkb2N1bWVudCIsImJvZHkiLCJnZXRBdHRyaWJ1dGUiLCJpbmNsdWRlcyIsImlzRGFyayIsInNldERhcmsiLCJ1c2VFZmZlY3QiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZSIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVEYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxZQUFNO0FBQUE7O0FBQ3JDLFdBQU8sZ0NBQ0RDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUFkLENBQTJCLE9BQTNCLENBREMsMERBQ0Qsc0JBQXFDQyxRQUFyQyxDQUE4QyxNQUE5QyxDQURDLEdBRUQsU0FGTjtBQUdILEdBSmlDLENBREE7QUFBQSxNQUMzQkMsTUFEMkI7QUFBQSxNQUNuQkMsT0FEbUI7O0FBT2xDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixNQUFKLEVBQVk7QUFDUkosY0FBUSxDQUFDQyxJQUFULENBQWNNLFlBQWQsQ0FBMkIsT0FBM0IsRUFBb0MsTUFBcEM7O0FBQ0EsVUFBSTtBQUNBQyxvQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLE1BQTdCO0FBQ0gsT0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVSxDQUFFO0FBQ2pCLEtBTEQsTUFLTztBQUNIVixjQUFRLENBQUNDLElBQVQsQ0FBY00sWUFBZCxDQUEyQixPQUEzQixFQUFvQyxFQUFwQzs7QUFDQSxVQUFJO0FBQ0FDLG9CQUFZLENBQUNHLFVBQWIsQ0FBd0IsTUFBeEI7QUFDSCxPQUZELENBRUUsT0FBT0QsQ0FBUCxFQUFVLENBQUU7QUFDakI7QUFDSixHQVpRLEVBWU4sQ0FBQ04sTUFBRCxDQVpNLENBQVQ7QUFjQSxTQUFPO0FBQUNBLFVBQU0sRUFBTkEsTUFBRDtBQUFTUSxjQUFVLEVBQUU7QUFBQSxhQUFNUCxPQUFPLENBQUMsQ0FBQ0QsTUFBRixDQUFiO0FBQUE7QUFBckIsR0FBUDtBQUNIOztHQXRCdUJOLFciLCJmaWxlIjoiLi9ob29rcy91c2UtZGFyay1tb2RlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGFya01vZGUoKSB7XG4gICAgY29uc3QgW2lzRGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmJyb3dzZXJcbiAgICAgICAgICAgID8gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk/LmluY2x1ZGVzKCdkYXJrJylcbiAgICAgICAgICAgIDogZmFsc2U7XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNEYXJrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGFyaycpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFyaycsICd0cnVlJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJycpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFyaycpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgIH0sIFtpc0RhcmtdKTtcblxuICAgIHJldHVybiB7aXNEYXJrLCB0b2dnbGVEYXJrOiAoKSA9PiBzZXREYXJrKCFpc0RhcmspfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-dark-mode.js\n");

/***/ })

})