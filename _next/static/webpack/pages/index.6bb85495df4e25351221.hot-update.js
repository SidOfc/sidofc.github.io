webpackHotUpdate_N_E("pages/index",{

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! exports provided: except, linkProps, supportsRegExpLookBehind, readTime, slug, classes, dateFormat, dateDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"except\", function() { return except; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linkProps\", function() { return linkProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"supportsRegExpLookBehind\", function() { return supportsRegExpLookBehind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readTime\", function() { return readTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slug\", function() { return slug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classes\", function() { return classes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateFormat\", function() { return dateFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateDiff\", function() { return dateDiff; });\n/* harmony import */ var _home_sidofc_Dev_sidofc_js_sidneyliebrand_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_sidofc_Dev_sidofc_js_sidneyliebrand_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_sidofc_Dev_sidofc_js_sidneyliebrand_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\n\n\nvar MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];\nfunction except(obj, keys) {\n  return Object.entries(obj).reduce(function (filtered, _ref) {\n    var _ref2 = Object(_home_sidofc_Dev_sidofc_js_sidneyliebrand_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    if (!keys.includes(key)) Object.assign(filtered, Object(_home_sidofc_Dev_sidofc_js_sidneyliebrand_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, key, value));\n    return filtered;\n  }, {});\n}\nfunction linkProps(href) {\n  var isExternal = !href.match(/(?:https?:)(?:\\/\\/)?sidneyliebrand\\.(?:io|next)/i) && !href.startsWith('/');\n  return isExternal ? {\n    href: href,\n    target: '_blank',\n    rel: 'noopener,noreferrer'\n  } : {};\n}\nfunction supportsRegExpLookBehind() {\n  try {\n    new RegExp('(?<!x)yz');\n    return true;\n  } catch (e) {\n    return false;\n  }\n\n  return false;\n}\nfunction readTime(str) {\n  return Math.round(Math.max(1, (str.match(/\\s+/g) || []).length / 200));\n}\nfunction slug(str) {\n  return str.replace(/\\.\\w+$/g, '').replace(/\\W+/g, ' ').trim().replace(/\\s+/g, '-').toLowerCase();\n}\nfunction classes() {\n  for (var _len = arguments.length, classArgs = new Array(_len), _key = 0; _key < _len; _key++) {\n    classArgs[_key] = arguments[_key];\n  }\n\n  return classArgs.reduce(function (acc, arg) {\n    if (Array.isArray(arg)) {\n      return [acc].concat(Object(_home_sidofc_Dev_sidofc_js_sidneyliebrand_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arg)).filter(function (x) {\n        return x;\n      }).join(' ');\n    } else if ((arg === null || arg === void 0 ? void 0 : arg.constructor) === Object) {\n      return Object.entries(arg).reduce(function (acc, _ref3) {\n        var _ref4 = Object(_home_sidofc_Dev_sidofc_js_sidneyliebrand_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref3, 2),\n            cn = _ref4[0],\n            include = _ref4[1];\n\n        return include ? \"\".concat(acc, \" \").concat(cn) : acc;\n      }, acc);\n    } else if (arg) {\n      return \"\".concat(acc, \" \").concat(arg);\n    }\n\n    return acc;\n  }, '').trim();\n}\nfunction dateFormat(maybeDate) {\n  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      includeDay = _ref5.includeDay,\n      fallback = _ref5.fallback;\n\n  if (!maybeDate) return fallback;\n  var date = toDate(maybeDate);\n  var day = includeDay ? \" \".concat(date.getDate()) : '';\n  return \"\".concat(MONTHS[date.getMonth()], \",\").concat(day, \" \").concat(date.getFullYear());\n}\nfunction dateDiff(a, b) {\n  var aDate = a ? toDate(a) : new Date();\n  var bDate = b ? toDate(b) : new Date();\n  var diffYears = bDate.getFullYear() - aDate.getFullYear();\n  var diffMonths = bDate.getMonth() - aDate.getMonth();\n  var years = diffYears - (diffMonths >= 0 ? 0 : 1);\n  var months = diffMonths + (diffMonths >= 0 ? 0 : 12);\n  return [years, \"year\".concat(years !== 1 ? 's' : '', \",\"), months, \"month\".concat(months !== 1 ? 's' : '')].join(' ');\n}\n\nfunction toDate(maybeDate) {\n  return maybeDate instanceof Date ? maybeDate : new Date(maybeDate);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9pbmRleC5qcz9lMTY0Il0sIm5hbWVzIjpbIk1PTlRIUyIsImV4Y2VwdCIsIm9iaiIsImtleXMiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJrZXkiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiYXNzaWduIiwibGlua1Byb3BzIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJtYXRjaCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJyZWwiLCJzdXBwb3J0c1JlZ0V4cExvb2tCZWhpbmQiLCJSZWdFeHAiLCJlIiwicmVhZFRpbWUiLCJzdHIiLCJNYXRoIiwicm91bmQiLCJtYXgiLCJsZW5ndGgiLCJzbHVnIiwicmVwbGFjZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImNsYXNzZXMiLCJjbGFzc0FyZ3MiLCJhY2MiLCJhcmciLCJBcnJheSIsImlzQXJyYXkiLCJmaWx0ZXIiLCJ4Iiwiam9pbiIsImNvbnN0cnVjdG9yIiwiY24iLCJpbmNsdWRlIiwiZGF0ZUZvcm1hdCIsIm1heWJlRGF0ZSIsImluY2x1ZGVEYXkiLCJmYWxsYmFjayIsImRhdGUiLCJ0b0RhdGUiLCJkYXkiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImRhdGVEaWZmIiwiYSIsImIiLCJhRGF0ZSIsIkRhdGUiLCJiRGF0ZSIsImRpZmZZZWFycyIsImRpZmZNb250aHMiLCJ5ZWFycyIsIm1vbnRocyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLENBQ1gsS0FEVyxFQUVYLEtBRlcsRUFHWCxLQUhXLEVBSVgsS0FKVyxFQUtYLEtBTFcsRUFNWCxLQU5XLEVBT1gsS0FQVyxFQVFYLEtBUlcsRUFTWCxNQVRXLEVBVVgsS0FWVyxFQVdYLEtBWFcsRUFZWCxLQVpXLENBQWY7QUFlTyxTQUFTQyxNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDOUIsU0FBT0MsTUFBTSxD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UDtBQU1IOztBQUVELFNBQVNTLE1BQVQsQ0FBZ0JKLFNBQWhCLEVBQTJCO0FBQ3ZCLFNBQU9BLFNBQVMsWUFBWWEsSUFBckIsR0FBNEJiLFNBQTVCLEdBQXdDLElBQUlhLElBQUosQ0FBU2IsU0FBVCxDQUEvQztBQUNIIiwiZmlsZSI6Ii4vdXRpbC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1PTlRIUyA9IFtcbiAgICAnSmFuJyxcbiAgICAnRmViJyxcbiAgICAnTWFyJyxcbiAgICAnQXByJyxcbiAgICAnTWF5JyxcbiAgICAnSnVuJyxcbiAgICAnSnVsJyxcbiAgICAnQXVnJyxcbiAgICAnU2VwdCcsXG4gICAgJ09jdCcsXG4gICAgJ05vdicsXG4gICAgJ0RlYycsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjZXB0KG9iaiwga2V5cykge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoZmlsdGVyZWQsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkgT2JqZWN0LmFzc2lnbihmaWx0ZXJlZCwge1trZXldOiB2YWx1ZX0pO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rUHJvcHMoaHJlZikge1xuICAgIGNvbnN0IGlzRXh0ZXJuYWwgPVxuICAgICAgICAhaHJlZi5tYXRjaCgvKD86aHR0cHM/OikoPzpcXC9cXC8pP3NpZG5leWxpZWJyYW5kXFwuKD86aW98bmV4dCkvaSkgJiZcbiAgICAgICAgIWhyZWYuc3RhcnRzV2l0aCgnLycpO1xuXG4gICAgcmV0dXJuIGlzRXh0ZXJuYWxcbiAgICAgICAgPyB7aHJlZiwgdGFyZ2V0OiAnX2JsYW5rJywgcmVsOiAnbm9vcGVuZXIsbm9yZWZlcnJlcid9XG4gICAgICAgIDoge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1JlZ0V4cExvb2tCZWhpbmQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbmV3IFJlZ0V4cCgnKD88IXgpeXonKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFRpbWUoc3RyKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5tYXgoMSwgKHN0ci5tYXRjaCgvXFxzKy9nKSB8fCBbXSkubGVuZ3RoIC8gMjAwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbHVnKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoL1xcLlxcdyskL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxXKy9nLCAnICcpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJy0nKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoLi4uY2xhc3NBcmdzKSB7XG4gICAgcmV0dXJuIGNsYXNzQXJnc1xuICAgICAgICAucmVkdWNlKChhY2MsIGFyZykgPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbYWNjLCAuLi5hcmddLmZpbHRlcigoeCkgPT4geCkuam9pbignICcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmc/LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoYXJnKS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgIChhY2MsIFtjbiwgaW5jbHVkZV0pID0+IChpbmNsdWRlID8gYCR7YWNjfSAke2NufWAgOiBhY2MpLFxuICAgICAgICAgICAgICAgICAgICBhY2NcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YWNjfSAke2FyZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCAnJylcbiAgICAgICAgLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVGb3JtYXQobWF5YmVEYXRlLCB7aW5jbHVkZURheSwgZmFsbGJhY2t9ID0ge30pIHtcbiAgICBpZiAoIW1heWJlRGF0ZSkgcmV0dXJuIGZhbGxiYWNrO1xuXG4gICAgY29uc3QgZGF0ZSA9IHRvRGF0ZShtYXliZURhdGUpO1xuICAgIGNvbnN0IGRheSA9IGluY2x1ZGVEYXkgPyBgICR7ZGF0ZS5nZXREYXRlKCl9YCA6ICcnO1xuXG4gICAgcmV0dXJuIGAke01PTlRIU1tkYXRlLmdldE1vbnRoKCldfSwke2RheX0gJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVEaWZmKGEsIGIpIHtcbiAgICBjb25zdCBhRGF0ZSA9IGEgPyB0b0RhdGUoYSkgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGJEYXRlID0gYiA/IHRvRGF0ZShiKSA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGlmZlllYXJzID0gYkRhdGUuZ2V0RnVsbFllYXIoKSAtIGFEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZGlmZk1vbnRocyA9IGJEYXRlLmdldE1vbnRoKCkgLSBhRGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHllYXJzID0gZGlmZlllYXJzIC0gKGRpZmZNb250aHMgPj0gMCA/IDAgOiAxKTtcbiAgICBjb25zdCBtb250aHMgPSBkaWZmTW9udGhzICsgKGRpZmZNb250aHMgPj0gMCA/IDAgOiAxMik7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICB5ZWFycyxcbiAgICAgICAgYHllYXIke3llYXJzICE9PSAxID8gJ3MnIDogJyd9LGAsXG4gICAgICAgIG1vbnRocyxcbiAgICAgICAgYG1vbnRoJHttb250aHMgIT09IDEgPyAncycgOiAnJ31gLFxuICAgIF0uam9pbignICcpO1xufVxuXG5mdW5jdGlvbiB0b0RhdGUobWF5YmVEYXRlKSB7XG4gICAgcmV0dXJuIG1heWJlRGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBtYXliZURhdGUgOiBuZXcgRGF0ZShtYXliZURhdGUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/index.js\n");

/***/ })

})