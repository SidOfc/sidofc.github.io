_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,o){o("J5xr"),e.exports=o("nOHt")},"6Uj1":function(e,t,o){},Ay8n:function(e,t,o){e.exports={application:"layout_application__6A4un",header:"layout_header__3bVjw",headerFixed:"layout_headerFixed__3v8Yi",headerContent:"layout_headerContent__18ocK",logo:"layout_logo__319hZ",logoTopLeft:"layout_logoTopLeft__2TXmp",logoBottomLeft:"layout_logoBottomLeft__1VwSz",logoTopRight:"layout_logoTopRight__36KVG",logoBottomRight:"layout_logoBottomRight__34Roq",navigation:"layout_navigation__19PAD",githubWrapper:"layout_githubWrapper__16kbO",github:"layout_github__23ZLB",content:"layout_content__2V5t2",footer:"layout_footer__2cV3b",darkModeWrapper:"layout_darkModeWrapper__QIkZ8",darkModeToggle:"layout_darkModeToggle__ijY7i"}},D1xM:function(e,t,o){e.exports={wrapper:"dark-mode-toggle_wrapper__bHDaz",toggle:"dark-mode-toggle_toggle__2rc2d",toggleLight:"dark-mode-toggle_toggleLight__1OB2p",toggleDark:"dark-mode-toggle_toggleDark__2f6wj"}},J5xr:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o("YNMu")}])},YNMu:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return O}));var a=o("rePB"),r=o("nKUr"),n=(o("6Uj1"),o("Ay8n")),c=o.n(n),l=o("YFqc"),i=o.n(l),s=o("yqUJ"),g=(o("adYP"),o("D1xM")),u=o.n(g),d=o("4WT4"),h=o("q1tI");function j(){var e=function(){var e=Object(h.useState)((function(){var e;return null===(e=document.querySelector("html").getAttribute("class"))||void 0===e?void 0:e.includes("dark")})),t=e[0],o=e[1],a=Object(h.useCallback)((function(){return o((function(e){return!e}))}),[]);return Object(h.useEffect)((function(){try{var e=document.querySelector("html");t?(e.setAttribute("class","dark"),localStorage.setItem("theme","dark")):(e.setAttribute("class",""),localStorage.removeItem("theme"))}catch(o){}}),[t]),{isDark:t,toggleDark:a}}().toggleDark;return Object(r.jsxs)("div",{tabIndex:0,onClick:e,title:"Toggle dark theme",onKeyDown:function(t){"Enter"===t.key&&(t.stopPropagation(),t.preventDefault(),e())},className:u.a.wrapper,children:[Object(r.jsxs)("svg",{fill:"#000000",className:Object(d.a)(u.a.toggle,u.a.toggleDark),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(r.jsx)("path",{d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"})]}),Object(r.jsxs)("svg",{fill:"#000000",className:Object(d.a)(u.a.toggle,u.a.toggleLight),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(r.jsx)("path",{d:"M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z"})]})]})}function p(e){var t=e.children;return Object(r.jsxs)("div",{className:c.a.application,children:[Object(r.jsx)("header",{className:c.a.header,children:Object(r.jsx)("div",{className:c.a.headerFixed,children:Object(r.jsxs)("div",{className:c.a.headerContent,children:[Object(r.jsx)(i.a,{href:"/",children:Object(r.jsxs)("a",{className:c.a.logo,title:"View home page",children:[Object(r.jsx)("span",{className:c.a.logoTopLeft}),Object(r.jsx)("span",{className:c.a.logoBottomLeft}),Object(r.jsx)("span",{className:c.a.logoTopRight}),Object(r.jsx)("span",{className:c.a.logoBottomRight})]})}),Object(r.jsxs)("nav",{className:c.a.navigation,children:[Object(r.jsx)(i.a,{href:"/cv",children:Object(r.jsx)("a",{title:"View curriculum vitae",children:"C.V."})}),Object(r.jsx)(i.a,{className:c.a.githubWrapper,href:"https://github.com/SidOfc",children:Object(r.jsx)("a",{title:"Visit Sidney Liebrand's GitHub page",children:Object(r.jsx)(s.a,{invertDark:!0,className:c.a.github,src:"/media/github.svg",alt:"Sidney Liebrand's GitHub page",showAlt:!1,width:16,height:16})})}),Object(r.jsx)(j,{})]})]})})}),Object(r.jsx)("main",{className:c.a.content,children:t}),Object(r.jsxs)("footer",{className:c.a.footer,children:[Object(r.jsx)("strong",{children:"\xa9"})," sidneyliebrand.io"," ",(new Date).getFullYear()]})]})}function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function _(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){Object(a.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function O(e){var t=e.Component,o=e.pageProps;return Object(r.jsx)(p,{children:Object(r.jsx)(t,_({},o))})}}},[[0,0,2,1,3]]]);