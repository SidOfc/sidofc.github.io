webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/dark-mode-toggle/dark-mode-toggle.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/dark-mode-toggle/dark-mode-toggle.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".dark-mode-toggle_wrapper__bHDaz {\\n  cursor: pointer;\\n  padding: 0.5rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.dark-mode-toggle_toggle__2rc2d {\\n  background-color: var(--page-bg);\\n  width: 1.4rem;\\n  height: 1.4rem;\\n  border-radius: 100%;\\n}\\n.dark .dark-mode-toggle_toggle__2rc2d {\\n  background-color: transparent;\\n  filter: invert(1);\\n}\\n\\n.dark-mode-toggle_toggleLight__1OB2p {\\n  display: block;\\n}\\n.dark .dark-mode-toggle_toggleLight__1OB2p {\\n  display: none;\\n}\\n\\n.dark-mode-toggle_toggleDark__2f6wj {\\n  display: none;\\n}\\n.dark .dark-mode-toggle_toggleDark__2f6wj {\\n  display: block;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://dark-mode-toggle.module.scss\",\"webpack://../../styles/config.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,eAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAJF;;AAOA;ECyBI,gCAAA;EDvBF,aAAA;EACA,cAAA;EACA,mBAAA;AAJF;ACcE;EDPE,6BAAA;EACA,iBAAA;AAJJ;;AAQA;EACE,cAAA;AALF;ACME;EDEE,aAAA;AALJ;;AASA;EACE,aAAA;AANF;ACDE;EDUE,cAAA;AANJ\",\"sourcesContent\":[\"$vars: (\\n            page-bg: #fff,page-fg: #000,page-accent-fg: #666,header-shadow: #ccc,primary-bg: #651eea,primary-fg: #ffffff,inline-code-bg: #e8e8e8,inline-code-fg: #444,kbd-bg: #fff,kbd-fg: #555,addition-fg: #00852c,deletion-fg: #d33947,tag-bg: #fafafa,tag-fg: #727272,link-fg: #651eea\\n        );\\n@import \\\"@styles/config\\\";\\n\\n.wrapper {\\n  cursor: pointer;\\n  padding: 0.5rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.toggle {\\n  @include themed('background-color', 'page-bg');\\n  width: 1.4rem;\\n  height: 1.4rem;\\n  border-radius: 100%;\\n\\n  @include dark {\\n    background-color: transparent;\\n    filter: invert(1);\\n  }\\n}\\n\\n.toggleLight {\\n  display: block;\\n\\n  @include dark {\\n    display: none;\\n  }\\n}\\n\\n.toggleDark {\\n  display: none;\\n\\n  @include dark {\\n    display: block;\\n  }\\n}\\n\",\"@use \\\"sass:map\\\";\\n@use \\\"sass:list\\\";\\n\\n// NOTE: $vars is injected via next.config.js\\n\\n@mixin css-body-vars {\\n  @each $var, $value in $vars {\\n    --#{$var}: #{$value};\\n  }\\n\\n  &.dark {\\n  --page-bg: #111;\\n  --page-fg: #eee;\\n  --page-accent-fg: #aaa;\\n  --addition-fg: #00cc00;\\n  --deletion-fg: #ff0000;\\n  --tag-bg: #666;\\n  --tag-fg: #e8e8e8;\\n  --inline-code-bg: #666;\\n  --inline-code-fg: #e8e8e8;\\n  --primary-bg: #834de8;\\n  --link-fg: #a676ff;\\n  --header-shadow: #333;\\n  }\\n}\\n\\n@mixin dark {\\n  :global(.dark) & {\\n    @content;\\n  }\\n}\\n\\n@mixin themed($property, $args...) {\\n  $length: list.length($args);\\n  $var: list.nth($args, 1);\\n\\n  @if $length == 1 {\\n    // #{$property}: #{map.get($vars, $var)};\\n    #{$property}: var(--#{$var});\\n  } @else if $length > 1 {\\n    $values: ();\\n    $keys: ();\\n\\n    @for $idx from 2 through $length {\\n      $arg: list.nth($args, $idx);\\n      $values: list.append($values, map.get($vars, $arg));\\n      $keys: list.append($keys, \\\"var(--#{$arg})\\\");\\n    }\\n\\n    // #{$property}: #{substitute($var, $values...)};\\n    #{$property}: #{substitute($var, $keys...)};\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"wrapper\": \"dark-mode-toggle_wrapper__bHDaz\",\n\t\"toggle\": \"dark-mode-toggle_toggle__2rc2d\",\n\t\"toggleLight\": \"dark-mode-toggle_toggleLight__1OB2p\",\n\t\"toggleDark\": \"dark-mode-toggle_toggleDark__2f6wj\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrLW1vZGUtdG9nZ2xlL2RhcmstbW9kZS10b2dnbGUubW9kdWxlLnNjc3M/Nzc3OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMscUNBQXFDLG9CQUFvQixvQkFBb0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxxQ0FBcUMscUNBQXFDLGtCQUFrQixtQkFBbUIsd0JBQXdCLEdBQUcseUNBQXlDLGtDQUFrQyxzQkFBc0IsR0FBRywwQ0FBMEMsbUJBQW1CLEdBQUcsOENBQThDLGtCQUFrQixHQUFHLHlDQUF5QyxrQkFBa0IsR0FBRyw2Q0FBNkMsbUJBQW1CLEdBQUcsT0FBTyxrSUFBa0ksVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUseVVBQXlVLDZCQUE2QixjQUFjLG9CQUFvQixvQkFBb0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxhQUFhLG1EQUFtRCxrQkFBa0IsbUJBQW1CLHdCQUF3QixxQkFBcUIsb0NBQW9DLHdCQUF3QixLQUFLLEdBQUcsa0JBQWtCLG1CQUFtQixxQkFBcUIsb0JBQW9CLEtBQUssR0FBRyxpQkFBaUIsa0JBQWtCLHFCQUFxQixxQkFBcUIsS0FBSyxHQUFHLHVCQUF1QixxQkFBcUIsMkVBQTJFLGlDQUFpQyxVQUFVLEtBQUssSUFBSSxRQUFRLEtBQUssY0FBYyxvQkFBb0Isb0JBQW9CLDJCQUEyQiwyQkFBMkIsMkJBQTJCLG1CQUFtQixzQkFBc0IsMkJBQTJCLDhCQUE4QiwwQkFBMEIsdUJBQXVCLDBCQUEwQixLQUFLLEdBQUcsaUJBQWlCLHNCQUFzQixlQUFlLEtBQUssR0FBRyx3Q0FBd0MsZ0NBQWdDLDZCQUE2Qix3QkFBd0IsV0FBVyxVQUFVLElBQUksc0JBQXNCLFFBQVEsVUFBVSxVQUFVLEtBQUssRUFBRSxLQUFLLHVCQUF1QixrQkFBa0IsZ0JBQWdCLDBDQUEwQyxvQ0FBb0MsNERBQTRELDRDQUE0QyxLQUFLLEtBQUssT0FBTyxhQUFhLFVBQVUsSUFBSSw4QkFBOEIsUUFBUSxVQUFVLElBQUksNEJBQTRCLEtBQUssR0FBRyxxQkFBcUI7QUFDemdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvZGFyay1tb2RlLXRvZ2dsZS9kYXJrLW1vZGUtdG9nZ2xlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmRhcmstbW9kZS10b2dnbGVfd3JhcHBlcl9fYkhEYXoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRhcmstbW9kZS10b2dnbGVfdG9nZ2xlX18ycmMyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJnKTtcXG4gIHdpZHRoOiAxLjRyZW07XFxuICBoZWlnaHQ6IDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcbi5kYXJrIC5kYXJrLW1vZGUtdG9nZ2xlX3RvZ2dsZV9fMnJjMmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLmRhcmstbW9kZS10b2dnbGVfdG9nZ2xlTGlnaHRfXzFPQjJwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZGFyayAuZGFyay1tb2RlLXRvZ2dsZV90b2dnbGVMaWdodF9fMU9CMnAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRhcmstbW9kZS10b2dnbGVfdG9nZ2xlRGFya19fMmY2d2oge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRhcmsgLmRhcmstbW9kZS10b2dnbGVfdG9nZ2xlRGFya19fMmY2d2oge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9kYXJrLW1vZGUtdG9nZ2xlLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL2NvbmZpZy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VDeUJJLGdDQUFBO0VEdkJGLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQ2NFO0VEUEUsNkJBQUE7RUFDQSxpQkFBQTtBQUpKOztBQVFBO0VBQ0UsY0FBQTtBQUxGO0FDTUU7RURFRSxhQUFBO0FBTEo7O0FBU0E7RUFDRSxhQUFBO0FBTkY7QUNERTtFRFVFLGNBQUE7QUFOSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdmFyczogKFxcbiAgICAgICAgICAgIHBhZ2UtYmc6ICNmZmYscGFnZS1mZzogIzAwMCxwYWdlLWFjY2VudC1mZzogIzY2NixoZWFkZXItc2hhZG93OiAjY2NjLHByaW1hcnktYmc6ICM2NTFlZWEscHJpbWFyeS1mZzogI2ZmZmZmZixpbmxpbmUtY29kZS1iZzogI2U4ZThlOCxpbmxpbmUtY29kZS1mZzogIzQ0NCxrYmQtYmc6ICNmZmYsa2JkLWZnOiAjNTU1LGFkZGl0aW9uLWZnOiAjMDA4NTJjLGRlbGV0aW9uLWZnOiAjZDMzOTQ3LHRhZy1iZzogI2ZhZmFmYSx0YWctZmc6ICM3MjcyNzIsbGluay1mZzogIzY1MWVlYVxcbiAgICAgICAgKTtcXG5AaW1wb3J0IFxcXCJAc3R5bGVzL2NvbmZpZ1xcXCI7XFxuXFxuLndyYXBwZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICBAaW5jbHVkZSB0aGVtZWQoJ2JhY2tncm91bmQtY29sb3InLCAncGFnZS1iZycpO1xcbiAgd2lkdGg6IDEuNHJlbTtcXG4gIGhlaWdodDogMS40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG5cXG4gIEBpbmNsdWRlIGRhcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICB9XFxufVxcblxcbi50b2dnbGVMaWdodCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIEBpbmNsdWRlIGRhcmsge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4udG9nZ2xlRGFyayB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgQGluY2x1ZGUgZGFyayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cIixcIkB1c2UgXFxcInNhc3M6bWFwXFxcIjtcXG5AdXNlIFxcXCJzYXNzOmxpc3RcXFwiO1xcblxcbi8vIE5PVEU6ICR2YXJzIGlzIGluamVjdGVkIHZpYSBuZXh0LmNvbmZpZy5qc1xcblxcbkBtaXhpbiBjc3MtYm9keS12YXJzIHtcXG4gIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFycyB7XFxuICAgIC0tI3skdmFyfTogI3skdmFsdWV9O1xcbiAgfVxcblxcbiAgJi5kYXJrIHtcXG4gIC0tcGFnZS1iZzogIzExMTtcXG4gIC0tcGFnZS1mZzogI2VlZTtcXG4gIC0tcGFnZS1hY2NlbnQtZmc6ICNhYWE7XFxuICAtLWFkZGl0aW9uLWZnOiAjMDBjYzAwO1xcbiAgLS1kZWxldGlvbi1mZzogI2ZmMDAwMDtcXG4gIC0tdGFnLWJnOiAjNjY2O1xcbiAgLS10YWctZmc6ICNlOGU4ZTg7XFxuICAtLWlubGluZS1jb2RlLWJnOiAjNjY2O1xcbiAgLS1pbmxpbmUtY29kZS1mZzogI2U4ZThlODtcXG4gIC0tcHJpbWFyeS1iZzogIzgzNGRlODtcXG4gIC0tbGluay1mZzogI2E2NzZmZjtcXG4gIC0taGVhZGVyLXNoYWRvdzogIzMzMztcXG4gIH1cXG59XFxuXFxuQG1peGluIGRhcmsge1xcbiAgOmdsb2JhbCguZGFyaykgJiB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdGhlbWVkKCRwcm9wZXJ0eSwgJGFyZ3MuLi4pIHtcXG4gICRsZW5ndGg6IGxpc3QubGVuZ3RoKCRhcmdzKTtcXG4gICR2YXI6IGxpc3QubnRoKCRhcmdzLCAxKTtcXG5cXG4gIEBpZiAkbGVuZ3RoID09IDEge1xcbiAgICAvLyAjeyRwcm9wZXJ0eX06ICN7bWFwLmdldCgkdmFycywgJHZhcil9O1xcbiAgICAjeyRwcm9wZXJ0eX06IHZhcigtLSN7JHZhcn0pO1xcbiAgfSBAZWxzZSBpZiAkbGVuZ3RoID4gMSB7XFxuICAgICR2YWx1ZXM6ICgpO1xcbiAgICAka2V5czogKCk7XFxuXFxuICAgIEBmb3IgJGlkeCBmcm9tIDIgdGhyb3VnaCAkbGVuZ3RoIHtcXG4gICAgICAkYXJnOiBsaXN0Lm50aCgkYXJncywgJGlkeCk7XFxuICAgICAgJHZhbHVlczogbGlzdC5hcHBlbmQoJHZhbHVlcywgbWFwLmdldCgkdmFycywgJGFyZykpO1xcbiAgICAgICRrZXlzOiBsaXN0LmFwcGVuZCgka2V5cywgXFxcInZhcigtLSN7JGFyZ30pXFxcIik7XFxuICAgIH1cXG5cXG4gICAgLy8gI3skcHJvcGVydHl9OiAje3N1YnN0aXR1dGUoJHZhciwgJHZhbHVlcy4uLil9O1xcbiAgICAjeyRwcm9wZXJ0eX06ICN7c3Vic3RpdHV0ZSgkdmFyLCAka2V5cy4uLil9O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiZGFyay1tb2RlLXRvZ2dsZV93cmFwcGVyX19iSERhelwiLFxuXHRcInRvZ2dsZVwiOiBcImRhcmstbW9kZS10b2dnbGVfdG9nZ2xlX18ycmMyZFwiLFxuXHRcInRvZ2dsZUxpZ2h0XCI6IFwiZGFyay1tb2RlLXRvZ2dsZV90b2dnbGVMaWdodF9fMU9CMnBcIixcblx0XCJ0b2dnbGVEYXJrXCI6IFwiZGFyay1tb2RlLXRvZ2dsZV90b2dnbGVEYXJrX18yZjZ3alwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/dark-mode-toggle/dark-mode-toggle.module.scss\n");

/***/ })

})