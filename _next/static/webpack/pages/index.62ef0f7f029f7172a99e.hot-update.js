webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/banner/banner.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/banner/banner.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".banner_banner__2HIlj {\\n  margin: 2rem 0 3rem;\\n  display: flex;\\n  flex-flow: row nowrap;\\n  align-items: center;\\n}\\n\\n.banner_image__1K5Wz {\\n  flex: 1 1 10rem;\\n  min-width: 10rem;\\n  border-radius: 100%;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n.dark .banner_image__1K5Wz {\\n  border: 0.25rem solid rgba(0, 0, 0, 1);\\n  border: 0.25rem solid var(--page-fg);\\n}\\n\\n.banner_content__fuTuz {\\n  flex: 1 1 auto;\\n  padding-left: 2rem;\\n  font-family: serif;\\n}\\n.banner_content__fuTuz h2 {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n}\\n.banner_content__fuTuz *:first-child {\\n  margin-top: 0;\\n}\\n.banner_content__fuTuz *:last-child {\\n  margin-bottom: 0;\\n}\\n\\n@media all and (max-width: 40rem) {\\n  .banner_banner__2HIlj {\\n    flex-flow: column nowrap;\\n  }\\n\\n  .banner_image__1K5Wz {\\n    flex: 1 1 50%;\\n    width: 50%;\\n    max-width: 80%;\\n  }\\n\\n  .banner_content__fuTuz {\\n    position: relative;\\n    margin-top: 2rem;\\n    padding-left: 0;\\n    text-align: center;\\n    padding-bottom: 3rem;\\n  }\\n  .banner_content__fuTuz::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 25%;\\n    width: 50%;\\n    height: 0.3rem;\\n    border-radius: 0.15rem;\\n    transform: translateY(-50%);\\n    background-color: #651eea;\\n    background-color: var(--primary-bg);\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://banner.module.scss\",\"webpack://../../styles/config.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,mBAAA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;AAJF;;AAOA;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;AAJF;ACDE;EAsBE,sCAAA;EACA,oCAAA;ADlBJ;;AAOA;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;AAJF;AAME;EACE,aAAA;EACA,mBAAA;AAJJ;AAOE;EACE,aAAA;AALJ;AAQE;EACE,gBAAA;AANJ;;AAUA;EACE;IACE,wBAAA;EAPF;;EAUA;IACE,aAAA;IACA,UAAA;IACA,cAAA;EAPF;;EAUA;IACE,kBAAA;IACA,gBAAA;IACA,eAAA;IACA,kBAAA;IACA,oBAAA;EAPF;EASE;IACE,WAAA;IACA,kBAAA;IACA,SAAA;IACA,SAAA;IACA,UAAA;IACA,cAAA;IACA,sBAAA;IACA,2BAAA;IC/CF,yBAAA;IACA,mCAAA;EDyCF;AACF\",\"sourcesContent\":[\"$vars: (\\n            page-bg: #fff,page-fg: #000,page-accent-fg: #666,header-shadow: #ccc,primary-bg: #651eea,primary-fg: #ffffff,inline-code-bg: #e8e8e8,inline-code-fg: #444,kbd-bg: #fff,kbd-fg: #555,addition-fg: #00852c,deletion-fg: #d33947,tag-bg: #fafafa,tag-fg: #727272,link-fg: #651eea\\n        );\\n@import \\\"@styles/config\\\";\\n\\n.banner {\\n  margin: 2rem 0 3rem;\\n  display: flex;\\n  flex-flow: row nowrap;\\n  align-items: center;\\n}\\n\\n.image {\\n  flex: 1 1 10rem;\\n  min-width: 10rem;\\n  border-radius: 100%;\\n  overflow: hidden;\\n  margin: 0;\\n\\n  @include dark {\\n    @include themed('border', '0.25rem solid $0', 'page-fg');\\n  }\\n}\\n\\n.content {\\n  flex: 1 1 auto;\\n  padding-left: 2rem;\\n  font-family: serif;\\n\\n  h2 {\\n    margin-top: 0;\\n    margin-bottom: 1rem;\\n  }\\n\\n  *:first-child {\\n    margin-top: 0;\\n  }\\n\\n  *:last-child {\\n    margin-bottom: 0;\\n  }\\n}\\n\\n@media all and (max-width: 40rem) {\\n  .banner {\\n    flex-flow: column nowrap;\\n  }\\n\\n  .image {\\n    flex: 1 1 50%;\\n    width: 50%;\\n    max-width: 80%;\\n  }\\n\\n  .content {\\n    position: relative;\\n    margin-top: 2rem;\\n    padding-left: 0;\\n    text-align: center;\\n    padding-bottom: 3rem;\\n\\n    &::after {\\n      content: '';\\n      position: absolute;\\n      top: 100%;\\n      left: 25%;\\n      width: 50%;\\n      height: 0.3rem;\\n      border-radius: 0.15rem;\\n      transform: translateY(-50%);\\n\\n      @include themed('background-color', 'primary-bg');\\n    }\\n  }\\n}\\n\",\"@use \\\"sass:map\\\";\\n@use \\\"sass:list\\\";\\n\\n// NOTE: $vars is injected via next.config.js\\n\\n@mixin css-vars {\\n  @each $var, $value in $vars {\\n    --#{$var}: #{$value};\\n  }\\n}\\n\\n@mixin dark {\\n  :global(.dark) & {\\n    @content;\\n  }\\n}\\n\\n@mixin themed($property, $args...) {\\n  $length: list.length($args);\\n  $var: list.nth($args, 1);\\n\\n  @if $length == 1 {\\n    #{$property}: #{map.get($vars, $var)};\\n    #{$property}: var(--#{$var});\\n  } @else if $length > 1 {\\n    $values: ();\\n    $keys: ();\\n\\n    @for $idx from 2 through $length {\\n      $arg: list.nth($args, $idx);\\n      $values: list.append($values, map.get($vars, $arg));\\n      $keys: list.append($keys, \\\"var(--#{$arg})\\\");\\n    }\\n\\n    #{$property}: #{substitute($var, $values...)};\\n    #{$property}: #{substitute($var, $keys...)};\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"banner\": \"banner_banner__2HIlj\",\n\t\"image\": \"banner_image__1K5Wz\",\n\t\"content\": \"banner_content__fuTuz\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLm1vZHVsZS5zY3NzP2U5ZjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBCQUEwQix3QkFBd0Isa0JBQWtCLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsb0JBQW9CLHFCQUFxQix3QkFBd0IscUJBQXFCLGNBQWMsR0FBRyw4QkFBOEIsMkNBQTJDLHlDQUF5QyxHQUFHLDRCQUE0QixtQkFBbUIsdUJBQXVCLHVCQUF1QixHQUFHLDZCQUE2QixrQkFBa0Isd0JBQXdCLEdBQUcsd0NBQXdDLGtCQUFrQixHQUFHLHVDQUF1QyxxQkFBcUIsR0FBRyx1Q0FBdUMsMkJBQTJCLCtCQUErQixLQUFLLDRCQUE0QixvQkFBb0IsaUJBQWlCLHFCQUFxQixLQUFLLDhCQUE4Qix5QkFBeUIsdUJBQXVCLHNCQUFzQix5QkFBeUIsMkJBQTJCLEtBQUssbUNBQW1DLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIscUJBQXFCLDZCQUE2QixrQ0FBa0MsZ0NBQWdDLDBDQUEwQyxLQUFLLEdBQUcsT0FBTyx3SEFBd0gsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLHlVQUF5VSw2QkFBNkIsYUFBYSx3QkFBd0Isa0JBQWtCLDBCQUEwQix3QkFBd0IsR0FBRyxZQUFZLG9CQUFvQixxQkFBcUIsd0JBQXdCLHFCQUFxQixjQUFjLHFCQUFxQiwrREFBK0QsS0FBSyxHQUFHLGNBQWMsbUJBQW1CLHVCQUF1Qix1QkFBdUIsVUFBVSxvQkFBb0IsMEJBQTBCLEtBQUsscUJBQXFCLG9CQUFvQixLQUFLLG9CQUFvQix1QkFBdUIsS0FBSyxHQUFHLHVDQUF1QyxhQUFhLCtCQUErQixLQUFLLGNBQWMsb0JBQW9CLGlCQUFpQixxQkFBcUIsS0FBSyxnQkFBZ0IseUJBQXlCLHVCQUF1QixzQkFBc0IseUJBQXlCLDJCQUEyQixrQkFBa0Isb0JBQW9CLDJCQUEyQixrQkFBa0Isa0JBQWtCLG1CQUFtQix1QkFBdUIsK0JBQStCLG9DQUFvQyw0REFBNEQsT0FBTyxLQUFLLEdBQUcsdUJBQXVCLHFCQUFxQixzRUFBc0UsaUNBQWlDLFVBQVUsS0FBSyxJQUFJLFFBQVEsS0FBSyxHQUFHLGlCQUFpQixzQkFBc0IsZUFBZSxLQUFLLEdBQUcsd0NBQXdDLGdDQUFnQyw2QkFBNkIsd0JBQXdCLFFBQVEsVUFBVSxJQUFJLHNCQUFzQixRQUFRLFVBQVUsVUFBVSxLQUFLLEVBQUUsS0FBSyx1QkFBdUIsa0JBQWtCLGdCQUFnQiwwQ0FBMEMsb0NBQW9DLDREQUE0RCw0Q0FBNEMsS0FBSyxLQUFLLE9BQU8sVUFBVSxVQUFVLElBQUksOEJBQThCLFFBQVEsVUFBVSxJQUFJLDRCQUE0QixLQUFLLEdBQUcscUJBQXFCO0FBQ2h1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhbm5lcl9iYW5uZXJfXzJISWxqIHtcXG4gIG1hcmdpbjogMnJlbSAwIDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhbm5lcl9pbWFnZV9fMUs1V3oge1xcbiAgZmxleDogMSAxIDEwcmVtO1xcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uZGFyayAuYmFubmVyX2ltYWdlX18xSzVXeiB7XFxuICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAxKTtcXG4gIGJvcmRlcjogMC4yNXJlbSBzb2xpZCB2YXIoLS1wYWdlLWZnKTtcXG59XFxuXFxuLmJhbm5lcl9jb250ZW50X19mdVR1eiB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG59XFxuLmJhbm5lcl9jb250ZW50X19mdVR1eiBoMiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLmJhbm5lcl9jb250ZW50X19mdVR1eiAqOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5iYW5uZXJfY29udGVudF9fZnVUdXogKjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQwcmVtKSB7XFxuICAuYmFubmVyX2Jhbm5lcl9fMkhJbGoge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICB9XFxuXFxuICAuYmFubmVyX2ltYWdlX18xSzVXeiB7XFxuICAgIGZsZXg6IDEgMSA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLmJhbm5lcl9jb250ZW50X19mdVR1eiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbiAgfVxcbiAgLmJhbm5lcl9jb250ZW50X19mdVR1ejo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY1MWVlYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZyk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9iYW5uZXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvY29uZmlnLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUpGO0FDREU7RUFzQkUsc0NBQUE7RUFDQSxvQ0FBQTtBRGxCSjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSkY7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0FBTko7O0FBVUE7RUFDRTtJQUNFLHdCQUFBO0VBUEY7O0VBVUE7SUFDRSxhQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFQRjs7RUFVQTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtFQVBGO0VBU0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSwyQkFBQTtJQy9DRix5QkFBQTtJQUNBLG1DQUFBO0VEeUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHZhcnM6IChcXG4gICAgICAgICAgICBwYWdlLWJnOiAjZmZmLHBhZ2UtZmc6ICMwMDAscGFnZS1hY2NlbnQtZmc6ICM2NjYsaGVhZGVyLXNoYWRvdzogI2NjYyxwcmltYXJ5LWJnOiAjNjUxZWVhLHByaW1hcnktZmc6ICNmZmZmZmYsaW5saW5lLWNvZGUtYmc6ICNlOGU4ZTgsaW5saW5lLWNvZGUtZmc6ICM0NDQsa2JkLWJnOiAjZmZmLGtiZC1mZzogIzU1NSxhZGRpdGlvbi1mZzogIzAwODUyYyxkZWxldGlvbi1mZzogI2QzMzk0Nyx0YWctYmc6ICNmYWZhZmEsdGFnLWZnOiAjNzI3MjcyLGxpbmstZmc6ICM2NTFlZWFcXG4gICAgICAgICk7XFxuQGltcG9ydCBcXFwiQHN0eWxlcy9jb25maWdcXFwiO1xcblxcbi5iYW5uZXIge1xcbiAgbWFyZ2luOiAycmVtIDAgM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgZmxleDogMSAxIDEwcmVtO1xcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgQGluY2x1ZGUgZGFyayB7XFxuICAgIEBpbmNsdWRlIHRoZW1lZCgnYm9yZGVyJywgJzAuMjVyZW0gc29saWQgJDAnLCAncGFnZS1mZycpO1xcbiAgfVxcbn1cXG5cXG4uY29udGVudCB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG5cXG4gIGgyIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gICo6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcblxcbiAgKjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDByZW0pIHtcXG4gIC5iYW5uZXIge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICB9XFxuXFxuICAuaW1hZ2Uge1xcbiAgICBmbGV4OiAxIDEgNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxMDAlO1xcbiAgICAgIGxlZnQ6IDI1JTtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGhlaWdodDogMC4zcmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblxcbiAgICAgIEBpbmNsdWRlIHRoZW1lZCgnYmFja2dyb3VuZC1jb2xvcicsICdwcmltYXJ5LWJnJyk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlIFxcXCJzYXNzOm1hcFxcXCI7XFxuQHVzZSBcXFwic2FzczpsaXN0XFxcIjtcXG5cXG4vLyBOT1RFOiAkdmFycyBpcyBpbmplY3RlZCB2aWEgbmV4dC5jb25maWcuanNcXG5cXG5AbWl4aW4gY3NzLXZhcnMge1xcbiAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJzIHtcXG4gICAgLS0jeyR2YXJ9OiAjeyR2YWx1ZX07XFxuICB9XFxufVxcblxcbkBtaXhpbiBkYXJrIHtcXG4gIDpnbG9iYWwoLmRhcmspICYge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIHRoZW1lZCgkcHJvcGVydHksICRhcmdzLi4uKSB7XFxuICAkbGVuZ3RoOiBsaXN0Lmxlbmd0aCgkYXJncyk7XFxuICAkdmFyOiBsaXN0Lm50aCgkYXJncywgMSk7XFxuXFxuICBAaWYgJGxlbmd0aCA9PSAxIHtcXG4gICAgI3skcHJvcGVydHl9OiAje21hcC5nZXQoJHZhcnMsICR2YXIpfTtcXG4gICAgI3skcHJvcGVydHl9OiB2YXIoLS0jeyR2YXJ9KTtcXG4gIH0gQGVsc2UgaWYgJGxlbmd0aCA+IDEge1xcbiAgICAkdmFsdWVzOiAoKTtcXG4gICAgJGtleXM6ICgpO1xcblxcbiAgICBAZm9yICRpZHggZnJvbSAyIHRocm91Z2ggJGxlbmd0aCB7XFxuICAgICAgJGFyZzogbGlzdC5udGgoJGFyZ3MsICRpZHgpO1xcbiAgICAgICR2YWx1ZXM6IGxpc3QuYXBwZW5kKCR2YWx1ZXMsIG1hcC5nZXQoJHZhcnMsICRhcmcpKTtcXG4gICAgICAka2V5czogbGlzdC5hcHBlbmQoJGtleXMsIFxcXCJ2YXIoLS0jeyRhcmd9KVxcXCIpO1xcbiAgICB9XFxuXFxuICAgICN7JHByb3BlcnR5fTogI3tzdWJzdGl0dXRlKCR2YXIsICR2YWx1ZXMuLi4pfTtcXG4gICAgI3skcHJvcGVydHl9OiAje3N1YnN0aXR1dGUoJHZhciwgJGtleXMuLi4pfTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmFubmVyXCI6IFwiYmFubmVyX2Jhbm5lcl9fMkhJbGpcIixcblx0XCJpbWFnZVwiOiBcImJhbm5lcl9pbWFnZV9fMUs1V3pcIixcblx0XCJjb250ZW50XCI6IFwiYmFubmVyX2NvbnRlbnRfX2Z1VHV6XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/banner/banner.module.scss\n");

/***/ })

})