_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,a){a("J5xr"),e.exports=a("nOHt")},"6Uj1":function(e,t,a){},Ay8n:function(e,t,a){e.exports={application:"layout_application__6A4un",header:"layout_header__3bVjw",headerFixed:"layout_headerFixed__3v8Yi",headerContent:"layout_headerContent__18ocK",logo:"layout_logo__319hZ",logoCode:"layout_logoCode__3yWRk",navigation:"layout_navigation__19PAD",githubWrapper:"layout_githubWrapper__16kbO",github:"layout_github__23ZLB",content:"layout_content__2V5t2",footer:"layout_footer__2cV3b",darkModeWrapper:"layout_darkModeWrapper__QIkZ8",darkModeToggle:"layout_darkModeToggle__ijY7i"}},J5xr:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a("YNMu")}])},YNMu:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a("rePB"),n=a("nKUr"),c=(a("6Uj1"),a("Ay8n")),o=a.n(c),i=a("YFqc"),s=a.n(i),l=a("yqUJ"),d=(a("adYP"),a("q1tI"));function u(e){var t=e.children,a=function(){var e=Object(d.useState)(!1),t=e[0],a=e[1];return Object(d.useLayoutEffect)((function(){var e;a(null===(e=document.body.getAttribute("class"))||void 0===e?void 0:e.includes("dark"))}),[]),Object(d.useEffect)((function(){if(t){document.body.setAttribute("class","dark");try{localStorage.setItem("dark","true")}catch(e){}}else{document.body.setAttribute("class","");try{localStorage.removeItem("dark")}catch(e){}}}),[t]),{isDark:t,toggleDark:function(){return a(!t)}}}(),r=a.isDark,c=a.toggleDark;return Object(n.jsxs)("div",{className:o.a.application,children:[Object(n.jsx)("header",{className:o.a.header,children:Object(n.jsx)("div",{className:o.a.headerFixed,children:Object(n.jsxs)("div",{className:o.a.headerContent,children:[Object(n.jsx)(s.a,{href:"/",children:Object(n.jsxs)("a",{className:o.a.logo,title:"View home page",children:[Object(n.jsx)("span",{className:o.a.logoCode,children:"<"}),"Sidney",Object(n.jsx)("span",{className:o.a.logoCode,children:"."}),"Liebrand\xa0",Object(n.jsxs)("span",{className:o.a.logoCode,children:["/",">"]})]})}),Object(n.jsxs)("nav",{className:o.a.navigation,children:[Object(n.jsx)(s.a,{href:"/cv",children:Object(n.jsx)("a",{title:"View curriculum vitae",children:"C.V."})}),Object(n.jsx)(s.a,{className:o.a.githubWrapper,href:"https://github.com/SidOfc",children:Object(n.jsx)("a",{title:"Visit Sidney Liebrand's GitHub page",children:Object(n.jsx)(l.a,{invertDark:!0,className:o.a.github,src:"/media/github.svg",alt:"Sidney Liebrand's GitHub page",showAlt:!1,width:16,height:16})})}),Object(n.jsx)("div",{tabIndex:0,onClick:c,onKeyDown:function(e){"Enter"===e.key&&(e.stopPropagation(),e.preventDefault(),c())},className:o.a.darkModeWrapper,children:Object(n.jsxs)("svg",{fill:"#000000",className:o.a.darkModeToggle,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(n.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("title",{children:"Toggle light mode"}),Object(n.jsx)("path",{d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("title",{children:"Toggle dark mode"}),Object(n.jsx)("path",{d:"M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z"})]})]})})]})]})})}),Object(n.jsx)("main",{className:o.a.content,children:t}),Object(n.jsxs)("footer",{className:o.a.footer,children:[Object(n.jsx)("strong",{children:"\xa9"})," sidneyliebrand.io"," ",(new Date).getFullYear()]})]})}function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e){var t=e.Component,a=e.pageProps;return Object(n.jsx)(u,{children:Object(n.jsx)(t,h({},a))})}}},[[0,0,2,1,3]]]);