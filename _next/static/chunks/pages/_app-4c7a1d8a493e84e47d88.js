(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{676:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},6156:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},7375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},4699:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2961);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7329:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(676);var o=r(2961);function a(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2961:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(676);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},4735:function(e,t,r){"use strict";var n=r(5893),o=r(6156),a=r(7294),i=r(6118),c=r.n(i),l=r(4754);t.Z=(0,a.forwardRef)((function(e,t){var r=e.src,a=e.width,i=e.height,u=e.className,s=e.alt,f=e.invertDark,d=e.showAlt,g=void 0===d||d,p=e.exts,h=void 0===p?["webm","mp4"]:p,_=parseInt(a)||1,m=parseInt(i)||0,v="".concat(m/_*100,"%");return(0,n.jsxs)("figure",{className:(0,l.Sh)(u,c().figure,(0,o.Z)({},c().invertDark,f)),ref:t,children:[(0,n.jsx)("div",{className:c().relative,style:{paddingBottom:v},children:r.match(/\.\w+$/)?(0,n.jsx)("img",{loading:"lazy",className:c().media,src:r,alt:s}):(0,n.jsx)("video",{className:c().media,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:h.map((function(e){return(0,n.jsx)("source",{src:"".concat(r,".").concat(e),type:"video/".concat(e)},e)}))})}),s&&g&&(0,n.jsx)("figcaption",{className:c().alt,children:s})]})}))},1836:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(5893),o=r(6156),a=r(7375),i=r(2286),c=r.n(i),l=r(4754);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=e.color,r=e.className,i=(0,a.Z)(e,["color","className"]);return(0,n.jsx)("span",s(s({},i),{},{className:(0,l.Sh)(r,(0,o.Z)({},c()["".concat(t,"-fg")],t))}))}},6071:function(e,t,r){"use strict";var n=r(3038),o=r(862);t.default=void 0;var a=o(r(7294)),i=r(1689),c=r(2441),l=r(5749),u={};function s(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),o=r&&r.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,g=f.as,p=e.children,h=e.replace,_=e.shallow,m=e.scroll,v=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=a.Children.only(p),b=y&&"object"===typeof y&&y.ref,j=(0,l.useIntersection)({rootMargin:"200px"}),x=n(j,2),w=x[0],O=x[1],k=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,a.useEffect)((function(){var e=O&&t&&(0,i.isLocalURL)(d),n="undefined"!==typeof v?v:r&&r.locale,o=u[d+"%"+g+(n?"%"+n:"")];e&&!o&&s(r,d,g,{locale:n})}),[g,d,O,v,t,r]);var N={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:c}))}(e,r,d,g,h,_,m,v)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(r,d,g,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var D="undefined"!==typeof v?v:r&&r.locale,S=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(g,D,r&&r.locales,r&&r.domainLocales);N.href=S||(0,i.addBasePath)((0,i.addLocale)(g,D,r&&r.defaultLocale))}return a.default.cloneElement(y,N)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=(0,o.useRef)(),u=(0,o.useState)(!1),s=n(u,2),f=s[0],d=s[1],g=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[g,f]};var o=r(7294),a=r(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},3987:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(6156),o=r(5893),a=(r(6924),r(1217)),i=r.n(a),c=r(1664),l=r(4735),u=(r(1836),r(5222)),s=r.n(u),f=r(4754);function d(){return(0,o.jsxs)("div",{tabIndex:0,title:"Toggle dark theme",className:s().wrapper,children:[(0,o.jsxs)("svg",{fill:"#000000","data-theme":"light",className:(0,f.Sh)(s().toggle,s().toggleDark),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,o.jsx)("path",{d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"})]}),(0,o.jsxs)("svg",{fill:"#000000","data-theme":"dark",className:(0,f.Sh)(s().toggle,s().toggleLight),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,o.jsx)("path",{d:"M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z"})]})]})}function g(e){var t=e.children;return(0,o.jsxs)("div",{className:i().application,children:[(0,o.jsx)("header",{className:i().header,children:(0,o.jsx)("div",{className:i().headerFixed,children:(0,o.jsxs)("div",{className:i().headerContent,children:[(0,o.jsx)(c.default,{href:"/",children:(0,o.jsxs)("a",{className:i().logo,title:"View home page",children:[(0,o.jsx)("span",{className:i().logoTopLeft}),(0,o.jsx)("span",{className:i().logoBottomLeft}),(0,o.jsx)("span",{className:i().logoTopRight}),(0,o.jsx)("span",{className:i().logoBottomRight})]})}),(0,o.jsxs)("nav",{className:i().navigation,children:[(0,o.jsx)(c.default,{href:"/cv",children:(0,o.jsx)("a",{title:"View curriculum vitae",children:"C.V."})}),(0,o.jsx)(c.default,{className:i().githubWrapper,href:"https://github.com/SidOfc",children:(0,o.jsx)("a",{title:"Visit Sidney Liebrand's GitHub page",children:(0,o.jsx)(l.Z,{invertDark:!0,className:i().github,src:"/media/github.svg",alt:"Sidney Liebrand's GitHub page",showAlt:!1,width:16,height:16})})}),(0,o.jsx)(d,{})]})]})})}),(0,o.jsx)("main",{className:i().content,children:t}),(0,o.jsxs)("footer",{className:i().footer,children:[(0,o.jsx)("strong",{children:"\xa9"})," sidneyliebrand.io"," ",(new Date).getFullYear()]})]})}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e){var t=e.Component,r=e.pageProps;return(0,o.jsx)(g,{children:(0,o.jsx)(t,h({},r))})}},4754:function(e,t,r){"use strict";r.d(t,{D1:function(){return i},vp:function(){return c},Sh:function(){return l},vc:function(){return u},Bh:function(){return s}});var n=r(7329),o=r(4699),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];function i(e){return!e.match(/(?:https?:)(?:\/\/)?sidneyliebrand\.(?:io|next)/i)&&!e.startsWith("/")?{href:e,target:"_blank",rel:"noopener,noreferrer"}:{}}function c(e){return e.replace(/\W+/g," ").trim().replace(/\s+/g,"-").toLowerCase()}function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return Array.isArray(t)?[e].concat((0,n.Z)(t)).filter((function(e){return e})).join(" "):(null===t||void 0===t?void 0:t.constructor)===Object?Object.entries(t).reduce((function(e,t){var r=(0,o.Z)(t,2),n=r[0];return r[1]?"".concat(e," ").concat(n):e}),e):t?"".concat(e," ").concat(t):e}),"").trim()}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.includeDay,n=t.fallback;if(!e)return n;var o=f(e),i=r?" ".concat(o.getDate()):"";return"".concat(a[o.getMonth()],",").concat(i," ").concat(o.getFullYear())}function s(e,t){var r=e?f(e):new Date,n=t?f(t):new Date,o=n.getFullYear()-r.getFullYear(),a=n.getMonth()-r.getMonth(),i=o-(a>=0?0:1),c=a+(a>=0?0:12);return[i,"year".concat(1!==i?"s":"",","),c,"month".concat(1!==c?"s":"")].join(" ")}function f(e){return e instanceof Date?e:new Date(e)}},71:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3987)}])},5222:function(e){e.exports={wrapper:"dark-mode-toggle_wrapper__bHDaz",toggle:"dark-mode-toggle_toggle__2rc2d",light:"dark-mode-toggle_light__3I-KT",dark:"dark-mode-toggle_dark__wr-VW",toggleLight:"dark-mode-toggle_toggleLight__1OB2p",toggleDark:"dark-mode-toggle_toggleDark__2f6wj"}},1217:function(e){e.exports={application:"layout_application__6A4un",header:"layout_header__3bVjw",headerFixed:"layout_headerFixed__3v8Yi",headerContent:"layout_headerContent__18ocK",logo:"layout_logo__319hZ",logoTopLeft:"layout_logoTopLeft__2TXmp",logoBottomLeft:"layout_logoBottomLeft__1VwSz",logoTopRight:"layout_logoTopRight__36KVG",logoBottomRight:"layout_logoBottomRight__34Roq",navigation:"layout_navigation__19PAD",githubWrapper:"layout_githubWrapper__16kbO",github:"layout_github__23ZLB",content:"layout_content__2V5t2",footer:"layout_footer__2cV3b",darkModeWrapper:"layout_darkModeWrapper__QIkZ8",darkModeToggle:"layout_darkModeToggle__ijY7i",light:"layout_light__3T-uk",dark:"layout_dark__3Jweu"}},6118:function(e){e.exports={figure:"media_figure__1BF98",relative:"media_relative__3Dzxp",media:"media_media__1ZpPG",alt:"media_alt__xSx7S",invertDark:"media_invertDark__1FMJX",light:"media_light__2qE_D",dark:"media_dark__2TsdW"}},2286:function(e){e.exports={"page-fg":"text_page-fg__3zCz1","page-accent-fg":"text_page-accent-fg__3pARq","primary-fg":"text_primary-fg__3_SqN","inline-code-fg":"text_inline-code-fg__c7960","kbd-fg":"text_kbd-fg__1iNfp","addition-fg":"text_addition-fg__24Nmn","deletion-fg":"text_deletion-fg__1xfix","star-fg":"text_star-fg__VNmoU","tag-fg":"text_tag-fg__ektQf","link-fg":"text_link-fg__Qd90X"}},6924:function(){},1664:function(e,t,r){e.exports=r(6071)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,351],(function(){return t(71),t(2441)}));var r=e.O();_N_E=r}]);