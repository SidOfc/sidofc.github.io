(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1748:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),o=r(2809),a=r(2016),i=r.n(a),c=r(4603);function l(e){var t=e.className,r=e.wide;return(0,n.jsx)("span",{className:(0,c.Sh)(t,i().bullet,(0,o.Z)({},i().wide,r)),children:"\u2022"})}},8080:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),o=r(2809),a=(r(7294),r(8935)),i=r.n(a),c=r(4603);function l(e){var t=e.src,r=e.width,a=e.height,l=e.className,u=e.alt,s=e.invertDark,f=e.showAlt,d=void 0===f||f,p=e.exts,g=void 0===p?["webm","mp4"]:p,h=parseInt(r)||1,v=parseInt(a)||0,_="".concat(v/h*100,"%");return(0,n.jsxs)("figure",{className:(0,c.Sh)(l,i().figure,(0,o.Z)({},i().invertDark,s)),children:[(0,n.jsx)("div",{className:i().relative,style:{paddingBottom:_},children:t.match(/\.\w+$/)?(0,n.jsx)("img",{loading:"lazy",className:i().media,src:t,alt:u}):(0,n.jsx)("video",{className:i().media,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:g.map((function(e){return(0,n.jsx)("source",{src:"".concat(t,".").concat(e),type:"video/".concat(e)},e)}))})}),u&&d&&(0,n.jsx)("figcaption",{className:i().alt,children:u})]})}},3722:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(5893),o=r(2809),a=r(5658),i=r(9718),c=r.n(i),l=r(4603);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=e.color,r=e.className,i=(0,a.Z)(e,["color","className"]);return(0,n.jsx)("span",s(s({},i),{},{className:(0,l.Sh)(r,(0,o.Z)({},c()["".concat(t,"-fg")],t))}))}},2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(1063),c=r(4651),l=r(7426);var u={};function s(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,g=e.children,h=e.replace,v=e.shallow,_=e.scroll,m=e.locale;"string"===typeof g&&(g=a.default.createElement("a",null,g));var y=(t=a.default.Children.only(g))&&"object"===typeof t&&t.ref,b=l.useIntersection({rootMargin:"200px"}),j=n(b,2),x=j[0],w=j[1],O=a.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);a.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,n=u[d+"%"+p+(t?"%"+t:"")];e&&!n&&s(o,d,p,{locale:t})}),[p,d,w,m,r,o]);var N={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:c}))}(e,o,d,p,h,v,_,m)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof m?m:o&&o.locale,S=o&&o.isLocaleDomain&&i.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);N.href=S||i.addBasePath(i.addLocale(p,k,o&&o.defaultLocale))}return a.default.cloneElement(t,N)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=o.useRef(),u=o.useState(!1),s=n(u,2),f=s[0],d=s[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),a=r(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},8479:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(2809),o=r(5893),a=(r(3575),r(4253)),i=r.n(a),c=r(1664),l=r(8080),u=(r(3722),r(1748)),s=r(7361),f=r.n(s),d=r(4603);function p(){return(0,o.jsxs)("div",{tabIndex:0,title:"Toggle dark theme",className:f().wrapper,children:[(0,o.jsxs)("svg",{fill:"#000000","data-theme":"light",className:(0,d.Sh)(f().toggle,f().toggleDark),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,o.jsx)("path",{d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"})]}),(0,o.jsxs)("svg",{fill:"#000000","data-theme":"dark",className:(0,d.Sh)(f().toggle,f().toggleLight),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,o.jsx)("path",{d:"M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z"})]})]})}function g(e){var t=e.children;return(0,o.jsxs)("div",{className:i().application,children:[(0,o.jsx)("header",{className:i().header,children:(0,o.jsx)("div",{className:i().headerFixed,children:(0,o.jsxs)("div",{className:i().headerContent,children:[(0,o.jsx)(c.default,{href:"/",children:(0,o.jsxs)("a",{className:i().logo,title:"View home page",children:[(0,o.jsx)("span",{className:i().logoTopLeft}),(0,o.jsx)("span",{className:i().logoBottomLeft}),(0,o.jsx)("span",{className:i().logoTopRight}),(0,o.jsx)("span",{className:i().logoBottomRight})]})}),(0,o.jsxs)("nav",{className:i().navigation,children:[(0,o.jsx)(c.default,{href:"/cv",children:(0,o.jsx)("a",{title:"View curriculum vitae",children:"C.V."})}),(0,o.jsx)(c.default,{className:i().githubWrapper,href:"https://github.com/SidOfc",children:(0,o.jsx)("a",{title:"Visit Sidney Liebrand's GitHub page",children:(0,o.jsx)(l.Z,{invertDark:!0,className:i().github,src:"/media/github.svg",alt:"Sidney Liebrand's GitHub page",showAlt:!1,width:16,height:16})})}),(0,o.jsx)(p,{})]})]})})}),(0,o.jsx)("main",{className:i().content,children:t}),(0,o.jsxs)("footer",{className:i().footer,children:[(0,o.jsx)("strong",{children:"\xa9"})," sidneyliebrand.io"," ",(new Date).getFullYear(),(0,o.jsx)(u.Z,{wide:!0}),(0,o.jsx)(c.default,{href:"/feed.xml",children:(0,o.jsx)("a",{title:"View RSS feed",children:"RSS"})}),(0,o.jsx)(u.Z,{wide:!0}),(0,o.jsx)(c.default,{href:"/atom.xml",children:(0,o.jsx)("a",{title:"View Atom feed",children:"Atom"})})]})]})}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e){var t=e.Component,r=e.pageProps;return(0,o.jsx)(g,{children:(0,o.jsx)(t,v({},r))})}},4603:function(e,t,r){"use strict";r.d(t,{Sh:function(){return u},Bh:function(){return d},vc:function(){return s},vp:function(){return l},D1:function(){return c}});var n=r(3467);var o=r(6988);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];function c(e){return!e.match(/(?:https?:)(?:\/\/)?sidneyliebrand\.(?:io|next)/i)&&!e.startsWith("/")?{href:e,target:"_blank",rel:"noopener,noreferrer"}:{}}function l(e){return e.replace(/\W+/g," ").trim().replace(/\s+/g,"-").toLowerCase()}function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return Array.isArray(t)?[e].concat((0,n.Z)(t)).filter((function(e){return e})).join(" "):(null===t||void 0===t?void 0:t.constructor)===Object?Object.entries(t).reduce((function(e,t){var r=a(t,2),n=r[0];return r[1]?"".concat(e," ").concat(n):e}),e):t?"".concat(e," ").concat(t):e}),"").trim()}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.includeDay,n=t.fallback;if(!e)return n;var o=p(e),a=r?" ".concat(o.getDate()):"";return"".concat(i[o.getMonth()]).concat(a,", ").concat(o.getFullYear())}function f(e,t){return e+(1!==t?"s":"")}function d(e,t){var r=!!t,n=e?p(e):new Date,o=t?p(t):new Date,a=o.getFullYear()-n.getFullYear(),i=o.getMonth()-n.getMonth(),c=a-(i>=0?0:1),l=i+(i>=0?0:12),u=c>0,s=l>0,d=[];if(u&&d.push(c,f("year",c)+(s?",":"")),s&&d.push(l,f("month",l)),!u&&!s)if(r){var g=o.getDate()-n.getDate();if(g>=7){var h=Math.max(g/7,1),v=g%7,_=v>0;d.push(h,f("week",h)+(_?",":"")),_&&d.push(v,f("day",v))}else d.push(g,f("day",g))}else d.push(1,"month");return d.join(" ")}function p(e){return e instanceof Date?e:new Date(e)}},71:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8479)}])},2016:function(e){e.exports={bullet:"bullet_bullet__2pnOU",wide:"bullet_wide__265WB"}},7361:function(e){e.exports={wrapper:"dark-mode-toggle_wrapper__bHDaz",toggle:"dark-mode-toggle_toggle__2rc2d"}},4253:function(e){e.exports={application:"layout_application__6A4un",header:"layout_header__3bVjw",headerFixed:"layout_headerFixed__3v8Yi",headerContent:"layout_headerContent__18ocK",logo:"layout_logo__319hZ",logoTopLeft:"layout_logoTopLeft__2TXmp",logoBottomLeft:"layout_logoBottomLeft__1VwSz",logoTopRight:"layout_logoTopRight__36KVG",logoBottomRight:"layout_logoBottomRight__34Roq",navigation:"layout_navigation__19PAD",githubWrapper:"layout_githubWrapper__16kbO",github:"layout_github__23ZLB",content:"layout_content__2V5t2",footer:"layout_footer__2cV3b",darkModeWrapper:"layout_darkModeWrapper__QIkZ8",darkModeToggle:"layout_darkModeToggle__ijY7i"}},8935:function(e){e.exports={figure:"media_figure__1BF98",relative:"media_relative__3Dzxp",media:"media_media__1ZpPG",alt:"media_alt__xSx7S",invertDark:"media_invertDark__1FMJX"}},9718:function(e){e.exports={"page-fg":"text_page-fg__3zCz1","page-accent-fg":"text_page-accent-fg__3pARq","primary-fg":"text_primary-fg__3_SqN","inline-code-fg":"text_inline-code-fg__c7960","kbd-fg":"text_kbd-fg__1iNfp","addition-fg":"text_addition-fg__24Nmn","deletion-fg":"text_deletion-fg__1xfix","star-fg":"text_star-fg__VNmoU","tag-fg":"text_tag-fg__ektQf","link-fg":"text_link-fg__Qd90X"}},3575:function(){},1664:function(e,t,r){e.exports=r(2167)},6586:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},2809:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},5658:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},3467:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(6586);var o=r(6988);function a(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6988:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(6586);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(71),t(4651)}));var r=e.O();_N_E=r}]);