webpackHotUpdate_N_E("pages/_app",{

/***/ "./hooks/use-dark-mode.js":
/*!********************************!*\
  !*** ./hooks/use-dark-mode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDarkMode; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useDarkMode() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isDark = _useState[0],\n      setDark = _useState[1]; // useEffect(() => {\n  //     setDark(document.body.getAttribute('class')?.includes('dark'));\n  // }, []);\n  // useEffect(() => {\n  //     if (isDark) {\n  //         document.body.setAttribute('class', 'dark');\n  //         try {\n  //             localStorage.setItem('dark', 'true');\n  //         } catch (e) {}\n  //     } else {\n  //         document.body.setAttribute('class', '');\n  //         try {\n  //             localStorage.removeItem('dark');\n  //         } catch (e) {}\n  //     }\n  // }, [isDark]);\n\n\n  return {\n    isDark: isDark,\n    toggleDark: function toggleDark() {\n      return setDark(!isDark);\n    }\n  };\n}\n\n_s(useDarkMode, \"TTXaOfHfIAft/KK3gl2BP6a8ay4=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLWRhcmstbW9kZS5qcz9mNDJiIl0sIm5hbWVzIjpbInVzZURhcmtNb2RlIiwidXNlU3RhdGUiLCJpc0RhcmsiLCJzZXREYXJrIiwidG9nZ2xlRGFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsS0FBRCxDQURBO0FBQUEsTUFDM0JDLE1BRDJCO0FBQUEsTUFDbkJDLE9BRG1CLGlCQUdsQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBTztBQUFDRCxVQUFNLEVBQU5BLE1BQUQ7QUFBU0UsY0FBVSxFQUFFO0FBQUEsYUFBTUQsT0FBTyxDQUFDLENBQUNELE1BQUYsQ0FBYjtBQUFBO0FBQXJCLEdBQVA7QUFDSDs7R0F0QnVCRixXIiwiZmlsZSI6Ii4vaG9va3MvdXNlLWRhcmstbW9kZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURhcmtNb2RlKCkge1xuICAgIGNvbnN0IFtpc0RhcmssIHNldERhcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc2V0RGFyayhkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnY2xhc3MnKT8uaW5jbHVkZXMoJ2RhcmsnKSk7XG4gICAgLy8gfSwgW10pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgaWYgKGlzRGFyaykge1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhcmsnKTtcbiAgICAvLyAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmsnLCAndHJ1ZScpO1xuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICcnKTtcbiAgICAvLyAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhcmsnKTtcbiAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9LCBbaXNEYXJrXSk7XG5cbiAgICByZXR1cm4ge2lzRGFyaywgdG9nZ2xlRGFyazogKCkgPT4gc2V0RGFyayghaXNEYXJrKX07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/use-dark-mode.js\n");

/***/ })

})