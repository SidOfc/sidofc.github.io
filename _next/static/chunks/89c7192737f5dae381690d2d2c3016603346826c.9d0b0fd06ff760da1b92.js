(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var u=p[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var d=a.props[u],f=r[u]||new Set;"name"===u&&i||!f.has(d)?(f.add(d),r[u]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FkQT:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),a=n("g4pe"),o=n.n(a),i=n("20a2"),s=n("HJNZ");function c(e){var t=e.title,n=e.description,a=Object(i.useRouter)().asPath;return Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:t}),Object(r.jsx)("link",{rel:"cannonical",href:"".concat(s.a).concat(a)}),Object(r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(r.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#a676ff"}),Object(r.jsx)("link",{rel:"icon",sizes:"48x48",type:"image/icon",href:"/favicon.ico"}),Object(r.jsx)("link",{rel:"icon",sizes:"16x16",type:"image/png",href:"/favicon-16x16.png"}),Object(r.jsx)("link",{rel:"icon",sizes:"32x32",type:"image/png",href:"/favicon-32x32.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",type:"image/png",href:"/apple-touch-icon.png"}),Object(r.jsx)("link",{rel:"alternate",type:"application/atom+xml",title:"The official ".concat(s.a," Atom feed"),href:"/atom.xml"}),Object(r.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"The official ".concat(s.a," RSS feed"),href:"/feed.xml"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),Object(r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffc40d"}),Object(r.jsx)("meta",{name:"robots",content:"index, follow"}),Object(r.jsx)("meta",{name:"author",content:s.b.name}),Object(r.jsx)("meta",{name:"description",content:n}),Object(r.jsx)("meta",{property:"og:title",content:t}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"og:url",content:s.a}),Object(r.jsx)("meta",{property:"og:site_name",content:s.a}),Object(r.jsx)("meta",{property:"og:description",content:n}),Object(r.jsx)("meta",{name:"dc:creator",content:s.b.name}),Object(r.jsx)("meta",{name:"dc:title",content:t}),Object(r.jsx)("meta",{name:"dc:description",content:n}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(r.jsx)("meta",{name:"twitter:creator",content:s.b.accounts.twitter})]})}},HJNZ:function(e){e.exports=JSON.parse('{"a":"https://sidneyliebrand.io","b":{"name":"Sidney Liebrand","birthday":"1994-10-26T00:00:00Z","title":"Front-end developer","city":"Dinteloord","country":"Netherlands","languages":["Dutch","English"],"accounts":{"twitter":"@scbydoooo","linkedin":"sidneyliebrand"},"programming":{"repos":["browserino","mkdx","cani","simple_csv","TwentyFortyEight","2048-crystal"],"languages":["ruby","crystal","javascript","python","lua","php","sql","vimscript","html","css"],"tools":["git","babel","rollup","webpack","react","next.js","css-modules","styled-components","i18next","ruby-on-rails","coffeescript","gulp","sass","flow","jekyll","postcss","pug"],"jobs":[{"title":"Front-end developer","organisation":"Floorplanner B.V.","description":"At Floorplanner I currently work on the statically-generated main <a href=\\"https://floorplanner.com\\" rel=\\"noopener,noreferrer\\">website</a> using gulp and pugjs, and the logged-in <a href=\\"https://floorplanner.com/home\\" rel=\\"noopener,noreferrer\\">React dashboard</a>. Before that I worked on a Rails <a href=\\"https://roomstyler.com\\" rel=\\"noopener,noreferrer\\">website</a>.","logo":{"url":"floorplanner-circle.svg","width":512,"height":512},"start":"2015-03-31T00:00:00Z","end":null,"tags":["git","html","css","javascript","ruby","php","sass","coffeescript","ruby-on-rails","react","jekyll","postcss","pug","i18next","styled-components"]},{"title":"Front-end developer","organisation":"DEX Online Services","description":"As Front-end developer at DEX Online Services I sliced and based photoshop designs into responsive websites using HTML5, CSS3 and sprinkles of non-framework JS where needed.","logo":{"url":"dex-online-services.gif","width":203,"height":88},"start":"2012-08-16T00:00:00Z","end":"2014-12-16T00:00:00Z","tags":["svn","html","css","javascript","php","sql","jquery","photoshop"]}]},"education":[{"title":"Media development","organisation":"Radius College","logo":{"url":"radius-college.png","width":360,"height":90},"start":"2011-09-16T00:00:00Z","end":"2014-07-16T00:00:00Z","tags":["html","css","php","sql","photoshop"]},{"title":"Technology","organisation":"Moller College","logo":{"url":"moller-college-small.png","width":150,"height":61},"start":"2007-09-16T00:00:00Z","end":"2011-07-16T00:00:00Z","tags":[]}],"volunteering":[{"title":"Coach","organisation":"RailsGirls","city":"Rotterdam","start":"2016-04-15T00:00:00Z","end":"2016-04-17T00:00:00Z","link":"http://railsgirls.com/rotterdam-04-2016.html"},{"title":"Coach","organisation":"RailsGirls","city":"Rotterdam","start":"2016-10-07T00:00:00Z","end":"2016-10-08T00:00:00Z","link":"http://railsgirls.com/rotterdam-10-2016.html"},{"title":"Coach","organisation":"RailsGirls","city":"Rotterdam","start":"2017-04-14T00:00:00Z","end":"2017-04-15T00:00:00Z","link":"http://railsgirls.com/rotterdam-04-2017.html"},{"title":"Co-organizer","organisation":"RailsGirls","city":"Rotterdam","start":"2017-10-20T00:00:00Z","end":"2017-10-21T00:00:00Z","link":"http://railsgirls.com/rotterdam-10-2017.html"},{"title":"Coach","organisation":"RailsGirls","city":"Leiden","start":"2018-02-16T00:00:00Z","end":"2018-02-17T00:00:00Z","link":"http://railsgirls.com/leiden.html"},{"title":"Co-organizer","organisation":"RailsGirls","city":"Rotterdam","start":"2018-04-14T00:00:00Z","end":"2018-04-14T23:59:59Z","link":"http://railsgirls.com/rotterdam-04-2018.html"},{"title":"Coach","organisation":"RailsGirls","city":"Rotterdam","start":"2018-06-20T00:00:00Z","end":"2018-06-20T23:59:59Z","link":"http://railsgirls.com/rotterdam-06-2019.html"}]}}')},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Ix4t:function(e,t,n){e.exports={bullet:"bullet_bullet__2pnOU",wide:"bullet_wide__265WB"}},QwZM:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),a=n("rePB"),o=n("Ix4t"),i=n.n(o),s=n("4WT4");function c(e){var t=e.className,n=e.wide;return Object(r.jsx)("span",{className:Object(s.a)(t,i.a.bullet,Object(a.a)({},i.a.wide,n)),children:"\u2022"})}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}}]);