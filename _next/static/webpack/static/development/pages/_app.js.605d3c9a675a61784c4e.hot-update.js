webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./config/styles.js":
/*!**************************!*\
  !*** ./config/styles.js ***!
  \**************************/
/*! exports provided: fluid, page, font, colors, spacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fluid", function() { return fluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "font", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return spacing; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./utilities.js");




function fluid(property, min, max) {
  return Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["fluid"])(property, [min.toString(), '280px'], [max.toString(), '1024px']);
}

var isObj = function isObj(x) {
  return !_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(x) && typeof x === 'object';
};

var var2css = function var2css(str) {
  return str.split(/(?=[A-Z])/).map(function (s) {
    return s.toLowerCase();
  }).join('-');
};

function themeable(obj) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (isObj(obj)) {
    var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(obj);

    keys.filter(function (key) {
      return isObj(obj[key]);
    }).forEach(function (key) {
      obj[key] = themeable(obj[key], parents.concat(key));
    });

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(obj, {
      withVar: function withVar(name) {
        var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : name;
        property = var2css(property);
        var def = "var(--".concat(parents.concat(var2css(name)).join('-'), ");");
        return "\n                        ".concat(property, ": ").concat(obj[name], ";\n                        ").concat(property, ": ").concat(def, ";\n                    ");
      },
      fmtVar: function fmtVar(name, fmt) {
        var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : name;
        property = var2css(property);
        var def = "var(--".concat(parents.concat(var2css(name)).join('-'), ");");
        return "\n                        ".concat(property, ": ").concat(obj[name], ";\n                        ").concat(property, ": ").concat(fmt.replace('{{var}}', def), ";\n                    ");
      },

      get definitions() {
        return keys.map(function (key) {
          if (isObj(obj[key])) {
            return obj[key].definitions;
          } else {
            var name = parents.concat(var2css(key)).join('-');
            return "--".concat(name, ": ").concat(obj[key], ";");
          }
        }).filter(function (x) {
          return x;
        }).join('');
      }

    });
  }

  return obj;
}

var page = themeable({
  fontFamily: 'Pridi',
  color: '#444',
  width: '50rem',
  header: {
    height: '3.125rem'
  },
  post: {
    width: '40rem'
  }
}, ['page']);
var font = themeable({
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700'
  }
}, ['font']);
var colors = themeable({
  primary: '#5405e8',
  // '#e22', // '#40e0d0', // '#5405e8',
  black: '#000',
  dimgray: '#555',
  white: '#fff'
}, ['colors']);
var spacing = themeable({
  small: '0.25rem',
  regular: '0.5rem',
  medium: '1rem',
  large: '2rem'
}, ['spacing']);

/***/ })

})
//# sourceMappingURL=_app.js.605d3c9a675a61784c4e.hot-update.js.map