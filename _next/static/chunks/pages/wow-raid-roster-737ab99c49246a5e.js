(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{6092:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wow-raid-roster",function(){return c(6193)}])},8803:function(e,b,a){"use strict";a.d(b,{Z:function(){return j}});var f=a(5893),c=a(1664),g=a.n(c),d=a(1332),h=a.n(d),i=a(5923);function j(a){var b=a.href,c=a.as,d=void 0===c?b?"a":"button":c,l=a.className,m=a.children,e=a.disabled,n=a.onClick,j=a.tabIndex,k=(0,f.jsx)(d,{tabIndex:void 0===j?0:j,className:(0,i.Sh)(l,{disabled:e},h().button),onClick:e?null:n,children:m});return"a"===d?(0,f.jsx)(g(),{href:b,children:k}):k}},5783:function(e,c,a){"use strict";a.d(c,{Z:function(){return l}});var f=a(5893),d=a(9008),g=a.n(d),h=a(1163),b=a(3017),i=b.ho,j=b.qB,k=b.N5;function l(c){var a=c.title,b=c.description,d=(0,h.useRouter)().asPath,e=[j,a].filter(function(a){return a}).join(" - ");return(0,f.jsxs)(g(),{children:[(0,f.jsx)("title",{children:e}),(0,f.jsx)("link",{rel:"canonical",href:"".concat(i).concat(d)}),(0,f.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,f.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#a676ff"}),(0,f.jsx)("link",{rel:"icon",sizes:"48x48",type:"image/icon",href:"/favicon.ico"}),(0,f.jsx)("link",{rel:"icon",sizes:"16x16",type:"image/png",href:"/favicon-16x16.png"}),(0,f.jsx)("link",{rel:"icon",sizes:"32x32",type:"image/png",href:"/favicon-32x32.png"}),(0,f.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",type:"image/png",href:"/apple-touch-icon.png"}),(0,f.jsx)("link",{rel:"alternate",type:"application/atom+xml",title:"The official ".concat(i," Atom feed"),href:"/atom.xml"}),(0,f.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"The official ".concat(i," RSS feed"),href:"/feed.xml"}),(0,f.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,f.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,f.jsx)("meta",{name:"msapplication-TileColor",content:"#ffc40d"}),(0,f.jsx)("meta",{name:"robots",content:"index, follow"}),(0,f.jsx)("meta",{name:"author",content:k.name}),(0,f.jsx)("meta",{name:"description",content:b}),(0,f.jsx)("meta",{property:"og:title",content:a}),(0,f.jsx)("meta",{property:"og:type",content:"website"}),(0,f.jsx)("meta",{property:"og:url",content:i}),(0,f.jsx)("meta",{property:"og:site_name",content:i}),(0,f.jsx)("meta",{property:"og:description",content:b}),(0,f.jsx)("meta",{name:"dc:creator",content:k.name}),(0,f.jsx)("meta",{name:"dc:title",content:a}),(0,f.jsx)("meta",{name:"dc:description",content:b}),(0,f.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,f.jsx)("meta",{name:"twitter:creator",content:k.accounts.twitter})]})}},6193:function(g,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return M},"default":function(){return N}});var h,i=a(5893),j=a(7294),k=a(1163),c=a(6641),l=a.n(c),m=a(5783);a(4916);var d=a(1941),n=a.n(d);function o(a){var d=a.name,b=a.items,o=a.value,p=a.onChange,e=a.disabled,c=a.allowReset,f=a.placeholder,g=void 0===f?"None":f,h=a.resetValue,q=void 0===h?null:h,k=a.asCaption,r=void 0===k?String:k,l=b.indexOf(o),m=b[l],s=(0,j.useCallback)(function(f){var a=f.target.value,d="-1"===a;e||d&&!c||p(d?q:b[a])},[b,q,p,e,c]);return(0,i.jsxs)("div",{className:n().dropdown,children:[(0,i.jsxs)("select",{id:d,name:d,className:n().select,value:l,onChange:s,tabIndex:e?-1:0,children:[(0,i.jsx)("option",{value:"-1",disabled:!c,hidden:!c,children:g}),b.map(function(b,a){return(0,i.jsx)("option",{value:a,children:r(b)},a)})]}),(0,i.jsx)("div",{className:n().overlay,children:m?r(m):g})]})}var e=a(7207),p=a.n(e),q=a(5923);function r(a){var c=a.placeholder,d=a.value,e=a.className,f=a.onFocus,g=a.onBlur,h=a.onChange,b=a.onEnter;return(0,i.jsx)("input",{className:(0,q.Sh)(e,p().input),type:"text",value:d,placeholder:c,onFocus:f,onBlur:g,onChange:function(a){return h(a.target.value)},onKeyDown:b?(0,q.dd)("enter",b):null})}var f=a(6983),s=a.n(f),t=a(3935),u=0,v=!1;function w(){v=!0}function x(){v=!1}var y=0;function z(b){var c,d,a,e,k=b.onClose,f=b.children,g=(c="modal",d=(0,j.useRef)(null),a=(0,j.useState)(!1),e=(a[0],a[1]),(0,j.useEffect)(function(){(h=d).current||(h.current=document.createElement("div"));var a,b,f=document.getElementById(c),g=f||(a=c,(b=document.createElement("div")).setAttribute("id",a),b);return f||document.body.appendChild(g),g.appendChild(d.current),e(!0),function(){var a,b;d.current&&(null===(a=d.current.parentNode)|| void 0===a||a.removeChild(d.current)),g.childNodes.length<1&&(null===(b=g.parentNode)|| void 0===b||b.removeChild(g))}},[c]),{teleport:function(a){return d.current?(0,t.createPortal)(a,d.current):null}}).teleport;return(0,j.useEffect)(function(){return y+=1,document.body.classList.add("no-scroll"),function(){0==(y-=1)&&document.body.classList.remove("no-scroll")}},[]),!function(a){var b=(0,j.useState)(u+1)[0];(0,j.useEffect)(function(){u=b;var c=(0,q.dd)("escape",function(c){!v&&a&&u===b&&a(c)});return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c),u-=1}})}(function(a){return k&&k(a)}),g((0,i.jsx)("div",{className:s().popup,onClick:function(a){a.stopPropagation(),null==k||k(a)},children:(0,i.jsx)("div",{className:s().popupContent,onClick:function(a){return a.stopPropagation()},children:f})}))}var A=a(2837),B=a(8803),C=JSON.parse('[{"id":1,"name":"Druid","color":"#ff7c0a","specs":[{"id":1,"name":"Balance","icon":"/media/wow-raid-roster/druid-balance.jpg"},{"id":2,"name":"Feral Combat","icon":"/media/wow-raid-roster/druid-feral-combat.jpg"},{"id":3,"name":"Restoration","icon":"/media/wow-raid-roster/druid-restoration.jpg"}],"icon":"/media/wow-raid-roster/druid.jpg"},{"id":2,"name":"Hunter","color":"#aad372","specs":[{"id":1,"name":"Beast Mastery","icon":"/media/wow-raid-roster/hunter-beast-mastery.jpg"},{"id":2,"name":"Marksmanship","icon":"/media/wow-raid-roster/hunter-marksmanship.jpg"},{"id":3,"name":"Survival","icon":"/media/wow-raid-roster/hunter-survival.jpg"}],"icon":"/media/wow-raid-roster/hunter.jpg"},{"id":3,"name":"Mage","color":"#68ccef","specs":[{"id":1,"name":"Arcane","icon":"/media/wow-raid-roster/mage-arcane.jpg"},{"id":2,"name":"Fire","icon":"/media/wow-raid-roster/mage-fire.jpg"},{"id":3,"name":"Frost","icon":"/media/wow-raid-roster/mage-frost.jpg"}],"icon":"/media/wow-raid-roster/mage.jpg"},{"id":4,"name":"Paladin","color":"#f48cba","specs":[{"id":1,"name":"Holy","icon":"/media/wow-raid-roster/paladin-holy.jpg"},{"id":2,"name":"Protection","icon":"/media/wow-raid-roster/paladin-protection.jpg"},{"id":3,"name":"Retribution","icon":"/media/wow-raid-roster/paladin-retribution.jpg"}],"icon":"/media/wow-raid-roster/paladin.jpg"},{"id":5,"name":"Priest","color":"#ffffff","specs":[{"id":1,"name":"Discipline","icon":"/media/wow-raid-roster/priest-discipline.jpg"},{"id":2,"name":"Holy","icon":"/media/wow-raid-roster/priest-holy.jpg"},{"id":3,"name":"Shadow","icon":"/media/wow-raid-roster/priest-shadow.jpg"}],"icon":"/media/wow-raid-roster/priest.jpg"},{"id":6,"name":"Rogue","color":"#fff468","specs":[{"id":1,"name":"Assassination","icon":"/media/wow-raid-roster/rogue-assassination.jpg"},{"id":2,"name":"Combat","icon":"/media/wow-raid-roster/rogue-combat.jpg"},{"id":3,"name":"Subtlety","icon":"/media/wow-raid-roster/rogue-subtlety.jpg"}],"icon":"/media/wow-raid-roster/rogue.jpg"},{"id":7,"name":"Shaman","color":"#2359ff","specs":[{"id":1,"name":"Elemental","icon":"/media/wow-raid-roster/shaman-elemental.jpg"},{"id":2,"name":"Enhancement","icon":"/media/wow-raid-roster/shaman-enhancement.jpg"},{"id":3,"name":"Restoration","icon":"/media/wow-raid-roster/shaman-restoration.jpg"}],"icon":"/media/wow-raid-roster/shaman.jpg"},{"id":8,"name":"Warlock","color":"#9382c9","specs":[{"id":1,"name":"Affliction","icon":"/media/wow-raid-roster/warlock-affliction.jpg"},{"id":2,"name":"Demonology","icon":"/media/wow-raid-roster/warlock-demonology.jpg"},{"id":3,"name":"Destruction","icon":"/media/wow-raid-roster/warlock-destruction.jpg"}],"icon":"/media/wow-raid-roster/warlock.jpg"},{"id":9,"name":"Warrior","color":"#c69b6d","specs":[{"id":1,"name":"Arms","icon":"/media/wow-raid-roster/warrior-arms.jpg"},{"id":2,"name":"Fury","icon":"/media/wow-raid-roster/warrior-fury.jpg"},{"id":3,"name":"Protection","icon":"/media/wow-raid-roster/warrior-protection.jpg"}],"icon":"/media/wow-raid-roster/warrior.jpg"}]');function D(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function E(a){if(Array.isArray(a))return a}function F(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function G(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function H(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){F(d,a,c[a])})}return d}function J(a,b){return E(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||L(a,b)||H()}function K(a){return function(a){if(Array.isArray(a))return D(a)}(a)||G(a)||L(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(a,c){if(a){if("string"==typeof a)return D(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return D(a,c)}}var M=!0;function N(d){var n=d.title,p=d.description,c=(0,k.useRouter)(),e=(0,j.useState)({name:"",size:10,items:{}}),a=e[0],s=e[1],f=(0,j.useState)([]),b=f[0],t=f[1],g=(0,j.useState)({});g[0],g[1];var u=(0,j.useCallback)(function(a){return s(function(b){return I({},b,a)})},[]),h=(0,j.useCallback)(function(){if(a.name.trim()){var d=K(b).concat([I({},a,{name:a.name.trim()})]);t(d),s(function(a){return I({},a,{name:"",items:{}})}),c.push("#".concat(R(d)))}},[c,a,b]),v=(0,j.useCallback)(function(d,e){var a=K(b);a[d]=I({},a[d],{items:I({},a[d].items,e)}),t(a),c.push("#".concat(R(a)))},[c,b]),w=(0,j.useCallback)(function(d){var a=K(b);a.splice(d,1),t(a),0===a.length?c.push(""):c.push("#".concat(R(a)))},[c,b]);return(0,j.useEffect)(function(){var a=function(){location.hash&&t(S(location.hash.slice(1)))};return a(),window.addEventListener("popstate",a),function(){return window.removeEventListener("popstate",a)}},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z,{title:n,description:p}),b.map(function(a,b){return(0,i.jsx)(O,{data:a,onUpdate:function(a){return v(b,a)},onDelete:function(){return w(b)}},b)}),(0,i.jsxs)("section",{className:l().teamForm,children:[(0,i.jsx)("div",{className:l().field,children:(0,i.jsx)(o,{items:[10,25,40],value:a.size,className:l().fieldInput,onChange:function(a){return u({size:a})},asCaption:function(a){return"".concat(a," man")}})}),(0,i.jsx)("div",{className:l().field,children:(0,i.jsx)(r,{placeholder:"Team name",value:a.name,className:l().fieldInput,onChange:function(a){return u({name:a.replace(/[^a-z \d]/gi,"").trimStart()})},onEnter:h})}),(0,i.jsx)("div",{className:(0,q.Sh)(l().field,l().fieldButton),children:(0,i.jsx)(B.Z,{disabled:!a.name,className:l().saveBtn,onClick:h,children:"Add"})})]})]})}function O(a){var b,c=a.data,n=a.onUpdate,o=a.onDelete,f=function(a,b){return Array(a).fill().map(function(e){for(var c=arguments.length,d=new Array(c>1?c-1:0),a=1;a<c;a++)d[a-1]=arguments[a];return b.apply(void 0,K(d))})},g=(0,j.useState)(null),d=g[0],s=g[1],h=c.items[d]||{name:"",role:0},p=h.name,e=h.role,q=c.size/5,t=(240&e)>>4,u=15&e,k=C.find(function(a){return a.id===t});null==k||null===(b=k.specs)|| void 0===b||b.find(function(a){return a.id===u});var m=(0,j.useCallback)(function(){return s(null)},[]),r=(0,j.useCallback)(function(a){n(F({},d,a)),m()},[n,d,m]),v=function(h,i){var d,e=5*h+i,f=c.items[e]||{name:"",role:0},j=f.name,g=f.role,k=(240&g)>>4,l=15&g,a=C.find(function(a){return a.id===k}),b=null==a?void 0:null===(d=a.specs)|| void 0===d?void 0:d.find(function(a){return a.id===l});return{index:e,name:j,cls:null==a?void 0:a.name,spec:null==b?void 0:b.name,icon:null==b?void 0:b.icon}};return(0,i.jsxs)("section",{className:l().team,children:[(0,i.jsxs)("div",{className:l().teamTitle,children:[(0,i.jsx)("span",{children:c.name}),(0,i.jsx)(B.Z,{className:l().cancelBtn,onClick:o,children:"Delete"})]}),f(q,function(a){return(0,i.jsxs)("ol",{className:l().group,children:[(0,i.jsxs)("li",{className:l().groupTitle,children:["Group ",a+1]}),Array(5).fill().map(function(d,c){var b=v(a,c);return(0,i.jsxs)("li",{className:l()[b.cls],onClick:function(){return s(b.index)},children:[b.icon&&(0,i.jsx)(A.Z,{width:40,height:40,alt:"".concat(b.spec," ").concat(b.cls),showAlt:!1,src:b.icon,className:l().roleIcon}),(0,i.jsx)("span",{className:l().trunc,children:(0,i.jsx)("span",{children:b.name})})]},b.index)})]},a)}),(0,i.jsx)("div",{className:l().bench,children:f(2,function(a){return(0,i.jsxs)("ol",{className:l().group,children:[0===a&&(0,i.jsx)("li",{className:l().groupTitle,children:"Bench"}),Array(5).fill().map(function(d,c){var b=v(q+a,c);return(0,i.jsxs)("li",{className:l()[b.cls],onClick:function(){return s(b.index)},children:[b.icon&&(0,i.jsx)(A.Z,{width:40,height:40,alt:"".concat(b.spec," ").concat(b.cls),showAlt:!1,src:b.icon,className:l().roleIcon}),(0,i.jsx)("span",{className:l().trunc,children:(0,i.jsx)("span",{children:b.name})})]},b.index)})]},q+a)})}),Number.isInteger(d)&&(0,i.jsx)(Q,{data:{name:p,role:e},onSubmit:r,onCancel:m})]})}function P(b){var a=b.cls,c=b.spec,d=b.className,e=b.onClick;return a?(0,i.jsx)(A.Z,{width:40,height:40,alt:c?"".concat(a.name," ").concat(c.name):a.name,showAlt:!1,src:(null==c?void 0:c.icon)||a.icon,className:(0,q.Sh)(d,l().role,a.name),onClick:e},a.name):null}function Q(b){var c,f=b.data,g=b.onSubmit,p=b.onCancel,h=(0,j.useState)(f.name||""),d=h[0],t=h[1],k=(0,j.useState)(f.role||0),e=k[0],u=k[1],m=(240&e)>>4,s=15&e,a=C.find(function(a){return a.id===m}),n=null==a?void 0:null===(c=a.specs)|| void 0===c?void 0:c.find(function(a){return a.id===s}),v=(0,j.useCallback)(function(a){return u(a<<4)},[]),y=(0,j.useCallback)(function(a){return u(m<<4|a)},[m]),o=(0,j.useCallback)(function(){return null==g?void 0:g({name:d,role:e})},[d,e,g]);return(0,i.jsx)(z,{children:(0,i.jsxs)("div",{className:l().editForm,children:[a?(0,i.jsxs)("div",{className:l().roles,children:[(0,i.jsx)(P,{cls:a,className:"selected",onClick:function(){return v(0)}}),a.specs.map(function(b){return(0,i.jsx)(P,{cls:a,spec:b,className:s===b.id&&"selected",onClick:function(){return y(s===b.id?null:b.id)}},b.id)}),(0,i.jsxs)("div",{className:(0,q.Sh)(l().selectedClass,l()["".concat(null==a?void 0:a.name,"Color")]),children:[null==n?void 0:n.name," ",a.name]})]}):(0,i.jsx)("div",{className:l().roles,children:C.map(function(a){return(0,i.jsx)(A.Z,{width:40,height:40,alt:a.name,showAlt:!1,src:a.icon,className:l().role,onClick:function(){return v(a.id)}},a.name)})}),(0,i.jsx)(r,{className:(0,q.Sh)(l().nameInput,l()["".concat(null==a?void 0:a.name,"Color")]),value:d,placeholder:"Name",onFocus:w,onBlur:x,onChange:function(a){return t(a.replace(/[^a-z]/gi,"").slice(0,15))},onEnter:o}),(0,i.jsxs)("div",{className:l().buttons,children:[(0,i.jsx)(B.Z,{className:l().cancelBtn,onClick:p,children:"Cancel"}),g&&(0,i.jsx)(B.Z,{disabled:!m||!s||!d,className:l().saveBtn,onClick:o,children:"Save"})]})]})})}function R(a){return a.map(function(a){var b=Object.entries(a.items).map(function(e){var a=J(e,2),f=a[0],b=a[1],c=b.name,d=b.role;return c&&d&&"".concat(f).concat(c).concat(d)}).filter(Boolean);return"".concat(a.size).concat(a.name).concat(b.length?".":"").concat(b.join("."))}).join("_")}function S(a){return a.split("_").reduce(function(b,e,f){var a,c=E(a=e.split("."))||G(a)||L(a,i)||H(),g=c[0],h=c.slice(1),d=J(g.match(/^(\d+)([a-z \d]+)?/).slice(1),2),i=d[0],j=d[1];return b.push({size:parseInt(i),name:j||"Team ".concat(f+1),items:h.reduce(function(b,c){var a=J(c.match(/^(\d+)(\D+)(\d+)$/).slice(1),3),d=a[0],e=a[1],f=a[2];return b[d]={name:e,role:parseInt(f)},b},{})}),b},[])}},1332:function(a){a.exports={button:"button_button__eJwei"}},1941:function(a){a.exports={dropdown:"dropdown_dropdown__X1Ykd",select:"dropdown_select__tOdbu",overlay:"dropdown_overlay__5SRc_"}},7207:function(a){a.exports={input:"input_input__uGeT_"}},6983:function(a){a.exports={popup:"popup_popup__TovFM",header:"popup_header__JD7QD",title:"popup_title__Hem7J",close:"popup_close__FL5Er",popupContent:"popup_popupContent__nbsIM"}},6641:function(a){a.exports={DruidColor:"wow-raid-roster_DruidColor__K1x8K",nameInput:"wow-raid-roster_nameInput__Bxl9_",HunterColor:"wow-raid-roster_HunterColor__ShgBT",MageColor:"wow-raid-roster_MageColor__jDVAh",PaladinColor:"wow-raid-roster_PaladinColor__SAkN5",PriestColor:"wow-raid-roster_PriestColor__YmvgZ",RogueColor:"wow-raid-roster_RogueColor__Lkq_3",ShamanColor:"wow-raid-roster_ShamanColor__uHROF",WarlockColor:"wow-raid-roster_WarlockColor__fHz3l",WarriorColor:"wow-raid-roster_WarriorColor__GHHEK",teamForm:"wow-raid-roster_teamForm__wQGRn",field:"wow-raid-roster_field__cihS_",fieldButton:"wow-raid-roster_fieldButton__8KwoI",saveBtn:"wow-raid-roster_saveBtn__pf0bh",fieldInput:"wow-raid-roster_fieldInput__TS9Zl",team:"wow-raid-roster_team__NlSVj",teamTitle:"wow-raid-roster_teamTitle__Aqa6_",group:"wow-raid-roster_group__LK_2q",spaceLeft:"wow-raid-roster_spaceLeft__7HmKD",groupTitle:"wow-raid-roster_groupTitle__G49az",Druid:"wow-raid-roster_Druid__e8H1c",Hunter:"wow-raid-roster_Hunter__D8__x",Mage:"wow-raid-roster_Mage__00PYm",Paladin:"wow-raid-roster_Paladin__yNuia",Priest:"wow-raid-roster_Priest__UNvOy",Rogue:"wow-raid-roster_Rogue__nfONW",Shaman:"wow-raid-roster_Shaman__VrPeb",Warlock:"wow-raid-roster_Warlock__ZL48y",Warrior:"wow-raid-roster_Warrior__mMjkE",bench:"wow-raid-roster_bench__hcZcS",trunc:"wow-raid-roster_trunc__v91VY",roleIcon:"wow-raid-roster_roleIcon__RhoMn",editForm:"wow-raid-roster_editForm___UX6_",roles:"wow-raid-roster_roles__QiUxF",role:"wow-raid-roster_role__5Khxk",selectedClass:"wow-raid-roster_selectedClass__2yjfI",buttons:"wow-raid-roster_buttons__KwEOB",cancelBtn:"wow-raid-roster_cancelBtn__SUqe1"}},9008:function(a,c,b){a.exports=b(3121)},1163:function(a,c,b){a.exports=b(880)},3017:function(a){"use strict";a.exports=JSON.parse('{"qB":"Sidney Liebrand\'s blog","ho":"https://sidneyliebrand.io","N5":{"name":"Sidney Liebrand","birthday":"1994-10-26T00:00:00Z","title":"Software developer specialized in front-end development","city":"Dinteloord","country":"Netherlands","languages":["Dutch","English"],"accounts":{"twitter":"@scbydoooo","linkedin":"sidneyliebrand"},"programming":{"repos":["babel-plugin-transform-media-imports","leather","mkdx","carbon.nvim","browserino","cani"],"languages":["bash","ruby","javascript","lua","php","python","html","css"],"tools":["babel","coffeescript","css-modules","flow","git","gulp","i18next","jekyll","laravel","next.js","postcss","pug","puppeteer","react","rollup","ruby-on-rails","sass","styled-components","typescript","webpack"],"jobs":[{"title":"Front-end developer","organisation":"Floorplanner.com B.V.","description":"Started out learning Ruby and Rails, worked in a Rails back-end for the first three years. Currently developing the Floorplanner Dashboard and Editor React applications and main website in addition to developing various web scrapers which are used to extract color palettes and/or product information from our vendor\'s websites.","link":"https://floorplanner.com/","logo":{"url":"floorplanner-circle.svg","width":512,"height":512},"start":"2015-03-31T00:00:00Z","end":null,"tags":["babel","git","html","css","javascript","ruby","php","sass","coffeescript","ruby-on-rails","react","rollup","flow","jekyll","postcss","pug","i18next","styled-components","puppeteer","typescript"]},{"title":"Back-end developer","organisation":"CodeCrashers","description":"CodeCrashers is an educational platform for which I maintain the back-end API written in Laravel. I\'ve also set up a basic back-end deploy procedure using git and manage the integration with the React front-end.","link":"https://codecrashers.nl/","logo":{"url":"codecrashers.svg","width":500,"height":427},"start":"2022-03-16T00:00:00Z","end":null,"tags":["bash","git","laravel","php"]},{"title":"Front-end developer","organisation":"DEX Online Services","description":"As Front-end developer at DEX Online Services I sliced and based photoshop designs into responsive websites using HTML5, CSS3 and sprinkles of non-framework JS where needed.","link":"http://www.dexos.nl/","logo":{"url":"dex-online-services.svg","width":52,"height":23},"start":"2012-08-16T00:00:00Z","end":"2014-12-16T00:00:00Z","tags":["svn","html","css","javascript","php","sql","jquery","photoshop"]}]},"education":[{"title":"Media development","organisation":"Radius College","description":"Figured out I wanted to become a front-end developer by the end of the first year of orientation. Spent the next two years working passionately after which I graduated successfully.","link":"https://www.curio.nl/terheijdenseweg-348/","logo":{"url":"radius-college.svg","width":60,"height":35},"start":"2011-09-16T00:00:00Z","end":"2014-07-16T00:00:00Z","tags":["html","css","php","sql","photoshop"]},{"title":"Technology","organisation":"Moller College","description":"Learnt about self control as I was failing the second year due to heavy gaming addiction. I did manage to overcome this addiction, pass the year, and graduate successfully.","link":"https://www.ravelijnstb.nl/","logo":{"url":"moller-college.svg","width":60,"height":33},"start":"2007-09-16T00:00:00Z","end":"2011-07-16T00:00:00Z","tags":[]}],"volunteering":[{"title":"Coach","organisation":"RailsGirls","city":"Rotterdam","start":"2016-04-15T00:00:00Z","end":"2016-04-17T00:00:00Z","link":"http://railsgirls.com/rotterdam-04-2016.html"},{"title":"Coach","organisation":"RailsGirls","city":"Rotterdam","start":"2016-10-07T00:00:00Z","end":"2016-10-08T00:00:00Z","link":"http://railsgirls.com/rotterdam-10-2016.html"},{"title":"Coach","organisation":"RailsGirls","city":"Rotterdam","start":"2017-04-14T00:00:00Z","end":"2017-04-15T00:00:00Z","link":"http://railsgirls.com/rotterdam-04-2017.html"},{"title":"Co-organizer","organisation":"RailsGirls","city":"Rotterdam","start":"2017-10-20T00:00:00Z","end":"2017-10-21T00:00:00Z","link":"http://railsgirls.com/rotterdam-10-2017.html"},{"title":"Coach","organisation":"RailsGirls","city":"Leiden","start":"2018-02-16T00:00:00Z","end":"2018-02-17T00:00:00Z","link":"http://railsgirls.com/leiden.html"},{"title":"Co-organizer","organisation":"RailsGirls","city":"Rotterdam","start":"2018-04-14T00:00:00Z","end":"2018-04-14T23:59:59Z","link":"http://railsgirls.com/rotterdam-04-2018.html"},{"title":"Coach","organisation":"RailsGirls","city":"Rotterdam","start":"2018-06-20T00:00:00Z","end":"2018-06-20T23:59:59Z","link":"http://railsgirls.com/rotterdam-06-2019.html"}]}}')}},function(a){a.O(0,[774,888,179],function(){return a(a.s=6092)}),_N_E=a.O()}])