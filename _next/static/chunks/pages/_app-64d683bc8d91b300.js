(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6055)}])},7656:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4924),o=n(5893),a=n(5676),i=n.n(a),u=n(1189);function c(e){var t=e.className,n=e.wide;return(0,o.jsx)("span",{className:(0,u.Sh)(t,i().bullet,(0,r.Z)({},i().wide,n)),children:"•"})}},9189:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4924),o=n(5893);n(7294);var a=n(368),i=n.n(a),u=n(1189);function c(e){var t=e.src,n=e.width,a=e.height,c=e.className,l=e.alt,s=e.invertDark,f=e.onClick,d=e.showAlt,p=e.exts,g=parseInt(n)||1,h=parseInt(a)||0,_="".concat(h/g*100,"%");return(0,o.jsxs)("figure",{onClick:f,className:(0,u.Sh)(c,i().figure,(0,r.Z)({},i().invertDark,s)),children:[(0,o.jsx)("div",{className:i().relative,style:{paddingBottom:_},children:t.match(/\.\w+$/)?(0,o.jsx)("img",{loading:"lazy",className:i().media,src:t,alt:l}):(0,o.jsx)("video",{className:i().media,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:(void 0===p?["webm","mp4"]:p).map(function(e){return(0,o.jsx)("source",{src:"".concat(t,".").concat(e),type:"video/".concat(e)},e)})})}),l&&(void 0===d||d)&&(0,o.jsx)("figcaption",{className:i().alt,children:l})]})}},4058:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(4924),o=n(6042),a=n(9396),i=n(9534),u=n(5893),c=n(2341),l=n.n(c),s=n(1189);function f(e){var t,n=e.bold,c=e.italic,f=e.color,d=e.className,p=e.as,g=(0,i.Z)(e,["bold","italic","color","className","as"]);return(0,u.jsx)(void 0===p?"span":p,(0,a.Z)((0,o.Z)({},g),{className:(0,s.Sh)(d,(t={},(0,r.Z)(t,l().bold,n),(0,r.Z)(t,l().italic,c),(0,r.Z)(t,l()["".concat(f,"-fg")],f),t))}))}},1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,i=o(n(7294)),u=n(6273),c=n(2725),l=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),g={};function h(e,t,n,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;g[t+"%"+n+(o?"%"+o:"")]=!0}}var _=i.default.forwardRef(function(e,t){var n,o,_=e.href,v=e.as,m=e.children,y=e.prefetch,b=e.passHref,x=e.replace,j=e.shallow,w=e.scroll,O=e.locale,Z=e.onClick,k=e.onMouseEnter,C=e.onTouchStart,M=e.legacyBehavior,S=void 0===M?!0!==Boolean(!1):M,N=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,S&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));var L=!1!==y,P=i.default.useContext(l.RouterContext),D=i.default.useContext(s.AppRouterContext);D&&(P=D);var R=i.default.useMemo(function(){var e=r(u.resolveHref(P,_,!0),2),t=e[0],n=e[1];return{href:t,as:v?u.resolveHref(P,v):n||t}},[P,_,v]),E=R.href,A=R.as,T=i.default.useRef(E),I=i.default.useRef(A);S&&(o=i.default.Children.only(n));var B=S?o&&"object"==typeof o&&o.ref:t,z=r(f.useIntersection({rootMargin:"200px"}),3),H=z[0],V=z[1],U=z[2],F=i.default.useCallback(function(e){(I.current!==A||T.current!==E)&&(U(),I.current=A,T.current=E),H(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[A,B,E,U,H]);i.default.useEffect(function(){var e=V&&L&&u.isLocalURL(E),t=void 0!==O?O:P&&P.locale,n=g[E+"%"+A+(t?"%"+t:"")];e&&!n&&h(P,E,A,{locale:t})},[A,E,V,O,L,P]);var G={ref:F,onClick:function(e){S||"function"!=typeof Z||Z(e),S&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,l,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(n)){e.preventDefault();var d,p,g=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};s?i.default.startTransition(g):g()}}(e,P,E,A,x,j,w,O,Boolean(D),L)},onMouseEnter:function(e){S||"function"!=typeof k||k(e),S&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!L&&D)&&u.isLocalURL(E)&&h(P,E,A,{priority:!0})},onTouchStart:function(e){S||"function"!=typeof C||C(e),S&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!L&&D)&&u.isLocalURL(E)&&h(P,E,A,{priority:!0})}};if(!S||b||"a"===o.type&&!("href"in o.props)){var K=void 0!==O?O:P&&P.locale,W=P&&P.isLocaleDomain&&d.getDomainLocale(A,K,P.locales,P.domainLocales);G.href=W||p.addBasePath(c.addLocale(A,K,P&&P.defaultLocale))}return S?i.default.cloneElement(o,G):i.default.createElement("a",Object.assign({},N,G),n)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!i,s=r(o.useState(!1),2),f=s[0],d=s[1],p=r(o.useState(null),2),g=p[0],h=p[1];return o.useEffect(function(){if(i){if(!l&&!f&&g&&g.tagName){var e,r,o,s,p,h,_;return r=function(e){return e&&d(e)},p=(s=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=u.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},c.push(n),u.set(n,t),t}(o={root:null==t?void 0:t.current,rootMargin:n})).id,h=s.observer,(_=s.elements).set(g,r),h.observe(g),function(){if(_.delete(g),h.unobserve(g),0===_.size){h.disconnect(),u.delete(p);var e=c.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var v=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(v)}}},[g,l,n,t,f]),[h,f,o.useCallback(function(){d(!1)},[])]};var o=n(7294),a=n(9311),i="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i;var u=r.default.createContext(null);t.TemplateContext=u},6055:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(6042),o=n(5893);n(4891);var a=n(8826),i=n.n(a),u=n(1664),c=n.n(u),l=n(9189);n(4058);var s=n(7656),f=n(6829),d=n.n(f),p=n(1189);function g(){return(0,o.jsxs)("div",{tabIndex:0,title:"Toggle dark theme",className:d().wrapper,children:[(0,o.jsxs)("svg",{fill:"#000000","data-theme":"light",className:(0,p.Sh)(d().toggle,d().toggleDark),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,o.jsx)("path",{d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"})]}),(0,o.jsxs)("svg",{fill:"#000000","data-theme":"dark",className:(0,p.Sh)(d().toggle,d().toggleLight),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,o.jsx)("path",{d:"M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z"})]})]})}function h(e){var t=e.children;return(0,o.jsxs)("div",{className:i().application,children:[(0,o.jsx)("header",{className:i().header,children:(0,o.jsx)("div",{className:i().headerFixed,children:(0,o.jsxs)("div",{className:i().headerContent,children:[(0,o.jsx)(c(),{href:"/",children:(0,o.jsxs)("a",{className:i().logo,title:"View home page",children:[(0,o.jsx)("span",{className:i().logoTopLeft}),(0,o.jsx)("span",{className:i().logoBottomLeft}),(0,o.jsx)("span",{className:i().logoTopRight}),(0,o.jsx)("span",{className:i().logoBottomRight})]})}),(0,o.jsxs)("nav",{className:i().navigation,children:[(0,o.jsx)(c(),{href:"/cv",children:(0,o.jsx)("a",{title:"View curriculum vitae",children:"C.V."})}),(0,o.jsx)(c(),{className:i().githubWrapper,href:"https://github.com/SidOfc",children:(0,o.jsx)("a",{title:"Visit Sidney Liebrand's GitHub page",children:(0,o.jsx)(l.Z,{invertDark:!0,className:i().github,src:"/media/github.svg",alt:"Sidney Liebrand's GitHub page",showAlt:!1,width:16,height:16})})}),(0,o.jsx)(g,{})]})]})})}),(0,o.jsx)("main",{className:i().content,children:t}),(0,o.jsxs)("footer",{className:i().footer,children:[(0,o.jsx)("strong",{children:"\xa9"})," sidneyliebrand.io"," ",new Date().getFullYear(),(0,o.jsx)(s.Z,{wide:!0}),(0,o.jsx)(c(),{href:"/feed.xml",children:(0,o.jsx)("a",{title:"View RSS feed",children:"RSS"})}),(0,o.jsx)(s.Z,{wide:!0}),(0,o.jsx)(c(),{href:"/atom.xml",children:(0,o.jsx)("a",{title:"View Atom feed",children:"Atom"})})]})]})}function _(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(h,{children:(0,o.jsx)(t,(0,r.Z)({},n))})}},1189:function(e,t,n){"use strict";n.d(t,{Sh:function(){return f},Bh:function(){return g},vc:function(){return d},lp:function(){return c},dd:function(){return u},vp:function(){return s},D1:function(){return l}});var r=n(4924),o=n(253),a=n(9815),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec",];function u(e,t){var n="string"==typeof e?[e]:e;return Array.isArray(n)?(n.includes("space")&&n.push(" "),function(e){var r=e.key.toLowerCase();n.find(function(e){return r===e})&&t(e)}):n&&!t&&n.constructor===Object?(n.space&&(n[" "]=n.space),function(e){var t=e.key.toLowerCase();n[t]&&n[t](e)}):void 0}function c(e,t){return Object.entries(e).reduce(function(e,n){var a=(0,o.Z)(n,2),i=a[0],u=a[1];return t.includes(i)||Object.assign(e,(0,r.Z)({},i,u)),e},{})}function l(e){return e.match(/(?:https?:)(?:\/\/)?sidneyliebrand\.(?:io|next)/i)||e.startsWith("/")?{}:{href:e,target:"_blank",rel:"noopener,noreferrer"}}function s(e){return e.replace(/\W+/g," ").trim().replace(/\s+/g,"-").toLowerCase()}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return Array.isArray(t)?[e].concat((0,a.Z)(t)).filter(function(e){return e}).join(" "):(null==t?void 0:t.constructor)===Object?Object.entries(t).reduce(function(e,t){var n=(0,o.Z)(t,2),r=n[0];return n[1]?"".concat(e," ").concat(r):e},e):t?"".concat(e," ").concat(t):e},"").trim()}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.includeDay,r=t.fallback;if(!e)return r;var o=h(e),a=n?" ".concat(o.getDate()):"";return"".concat(i[o.getMonth()]).concat(a,", ").concat(o.getFullYear())}function p(e,t){return e+(1!==t?"s":"")}function g(e,t){var n=e?h(e):new Date,r=t?h(t):new Date,o=r.getFullYear()-n.getFullYear(),a=r.getMonth()-n.getMonth(),i=o-(a>=0?0:1),u=a+(a>=0?0:12),c=i>0,l=u>0,s=[];if(c&&s.push(i,p("year",i)+(l?",":"")),l&&s.push(u,p("month",u)),!c&&!l){if(t){var f=r.getDate()-n.getDate();if(f>=7){var d=Math.max(f/7,1),g=f%7,_=g>0;s.push(d,p("week",d)+(_?",":"")),_&&s.push(g,p("day",g))}else s.push(f,p("day",f))}else s.push(1,"month")}return s.join(" ")}function h(e){var t,n;return(null!=(n=Date)&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n)?e:new Date(e)}},5676:function(e){e.exports={bullet:"bullet_bullet__k7HK1",wide:"bullet_wide__C2XLP"}},6829:function(e){e.exports={wrapper:"dark-mode-toggle_wrapper__EPTcL",toggle:"dark-mode-toggle_toggle__lj_e6"}},8826:function(e){e.exports={application:"layout_application__dwRj8",header:"layout_header__PamGz",headerFixed:"layout_headerFixed__9jfXi",headerContent:"layout_headerContent__QnbZ2",logo:"layout_logo__aPV1g",logoTopLeft:"layout_logoTopLeft___eyDK",logoBottomLeft:"layout_logoBottomLeft__I65pR",logoTopRight:"layout_logoTopRight__oke9p",logoBottomRight:"layout_logoBottomRight__eVOXL",navigation:"layout_navigation__ACKPn",githubWrapper:"layout_githubWrapper__PGOlY",github:"layout_github__8SImE",content:"layout_content__M_5eu",footer:"layout_footer__U7ng8",darkModeWrapper:"layout_darkModeWrapper__MvU_U",darkModeToggle:"layout_darkModeToggle__g_TSe"}},368:function(e){e.exports={figure:"media_figure__xGL2a",relative:"media_relative__TC0n4",media:"media_media__tGftk",alt:"media_alt__GDLBV",invertDark:"media_invertDark__E_DwP"}},2341:function(e){e.exports={"page-fg":"text_page-fg__N_AT4","page-accent-fg":"text_page-accent-fg__N0I1H","page-heading-fg":"text_page-heading-fg__3kBOr","primary-fg":"text_primary-fg___pFg1","inline-code-fg":"text_inline-code-fg__9nyMx","kbd-fg":"text_kbd-fg__EXsD1","addition-fg":"text_addition-fg___mlHd","deletion-fg":"text_deletion-fg__u9qW2","star-fg":"text_star-fg__S5By0","tag-fg":"text_tag-fg__uQuyd","link-fg":"text_link-fg__KAZQ_","prism-fg":"text_prism-fg__2Rhvj",bold:"text_bold__1LHCJ",italic:"text_italic__7E6rc"}},4891:function(){},1664:function(e,t,n){e.exports=n(8418)},943:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},9474:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,{Z:function(){return r}})},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},3375:function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},3128:function(e,t,n){"use strict";function r(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},6042:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4924);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){(0,r.Z)(e,t,n[t])})}return e}},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},253:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9474),o=n(3375),a=n(3128),i=n(1566);function u(e,t){return(0,r.Z)(e)||(0,o.Z)(e,t)||(0,i.Z)(e,t)||(0,a.Z)()}},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(943),o=n(3375),a=n(1566);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,a.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(943);function o(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,r.Z)(e,t)}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(3837),t(387)}),_N_E=e.O()}]);