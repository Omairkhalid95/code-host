(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[148],{1016:function(e,t,c){"use strict";c.r(t);c(0);var n=c(768),r=c(769),a=c(125),o=c(518),i=c(19),s=c(51),l=c(187),u=c(44),d=c(3);t.default=function(){var e=Object(u.d)((function(e){return e.theme.currentTheme}));return Object(d.jsx)("div",{className:"h-100 ".concat("light"===e?"bg-white":""),children:Object(d.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===e?"logo.png":"logo-white.png"),alt:""})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(n.a,{align:"middle",children:[Object(d.jsxs)(r.a,{xs:24,sm:24,md:8,children:[Object(d.jsx)("h1",{className:"font-weight-bold mb-4 display-4",children:"Page not found"}),Object(d.jsx)("p",{className:"font-size-md mb-4",children:"We've noticed you lost your way, no worries, we will help you to found the correct path."}),Object(d.jsx)(s.Link,{to:"/app",children:Object(d.jsx)(a.a,{type:"primary",icon:Object(d.jsx)(o.a,{}),children:"Go back"})})]}),Object(d.jsx)(r.a,{xs:24,sm:24,md:{span:14,offset:2},children:Object(d.jsx)("img",{className:"img-fluid mt-md-0 mt-4",src:"/img/others/img-20.png",alt:""})})]})}),Object(d.jsxs)(l.a,{mobileFlex:!1,justifyContent:"between",children:[Object(d.jsxs)("span",{children:["Copyright \xa9 ","".concat((new Date).getFullYear())," ",Object(d.jsx)("span",{className:"font-weight-semibold",children:"".concat(i.b)})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(d.jsx)("span",{className:"mx-2 text-muted",children:" | "}),Object(d.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})]})]})})}},318:function(e,t,c){"use strict";var n=c(5),r=c(4),a=c(25),o=c(7),i=c(0),s=c(8),l=c.n(s),u=c(73),d=c(650),f=c(64),b=c(139),p=c(667),m=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(c[n[r]]=e[n[r]])}return c},j=(Object(f.a)("top","middle","bottom","stretch"),Object(f.a)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var c,s=e.prefixCls,f=e.justify,j=e.align,O=e.className,h=e.style,y=e.children,x=e.gutter,v=void 0===x?0:x,g=e.wrap,w=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=i.useContext(u.b),N=C.getPrefixCls,E=C.direction,P=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),A=Object(o.a)(P,2),k=A[0],R=A[1],S=Object(p.a)(),G=i.useRef(v);i.useEffect((function(){var e=b.a.subscribe((function(e){var t=G.current||0;(!Array.isArray(t)&&"object"===Object(a.a)(t)||Array.isArray(t)&&("object"===Object(a.a)(t[0])||"object"===Object(a.a)(t[1])))&&R(e)}));return function(){return b.a.unsubscribe(e)}}),[]);var D=N("row",s),F=function(){var e=[0,0];return(Array.isArray(v)?v:[v,0]).forEach((function(t,c){if("object"===Object(a.a)(t))for(var n=0;n<b.b.length;n++){var r=b.b[n];if(k[r]&&void 0!==t[r]){e[c]=t[r];break}}else e[c]=t||0})),e}(),T=l()(D,(c={},Object(r.a)(c,"".concat(D,"-no-wrap"),!1===g),Object(r.a)(c,"".concat(D,"-").concat(f),f),Object(r.a)(c,"".concat(D,"-").concat(j),j),Object(r.a)(c,"".concat(D,"-rtl"),"rtl"===E),c),O),L={},W=F[0]>0?F[0]/-2:void 0,B=F[1]>0?F[1]/-2:void 0;if(W&&(L.marginLeft=W,L.marginRight=W),S){var I=Object(o.a)(F,2);L.rowGap=I[1]}else B&&(L.marginTop=B,L.marginBottom=B);var J=i.useMemo((function(){return{gutter:F,wrap:g,supportFlexGap:S}}),[F,g,S]);return i.createElement(d.a.Provider,{value:J},i.createElement("div",Object(n.a)({},w,{className:T,style:Object(n.a)(Object(n.a)({},L),h),ref:t}),y))})));j.displayName="Row",t.a=j},319:function(e,t,c){"use strict";var n=c(4),r=c(5),a=c(25),o=c(0),i=c(8),s=c.n(i),l=c(650),u=c(73),d=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(c[n[r]]=e[n[r]])}return c};var f=["xs","sm","md","lg","xl","xxl"],b=o.forwardRef((function(e,t){var c,i=o.useContext(u.b),b=i.getPrefixCls,p=i.direction,m=o.useContext(l.a),j=m.gutter,O=m.wrap,h=m.supportFlexGap,y=e.prefixCls,x=e.span,v=e.order,g=e.offset,w=e.push,C=e.pull,N=e.className,E=e.children,P=e.flex,A=e.style,k=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),R=b("col",y),S={};f.forEach((function(t){var c,o={},i=e[t];"number"===typeof i?o.span=i:"object"===Object(a.a)(i)&&(o=i||{}),delete k[t],S=Object(r.a)(Object(r.a)({},S),(c={},Object(n.a)(c,"".concat(R,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(n.a)(c,"".concat(R,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(n.a)(c,"".concat(R,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(n.a)(c,"".concat(R,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(n.a)(c,"".concat(R,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(n.a)(c,"".concat(R,"-rtl"),"rtl"===p),c))}));var G=s()(R,(c={},Object(n.a)(c,"".concat(R,"-").concat(x),void 0!==x),Object(n.a)(c,"".concat(R,"-order-").concat(v),v),Object(n.a)(c,"".concat(R,"-offset-").concat(g),g),Object(n.a)(c,"".concat(R,"-push-").concat(w),w),Object(n.a)(c,"".concat(R,"-pull-").concat(C),C),c),N,S),D={};if(j&&j[0]>0){var F=j[0]/2;D.paddingLeft=F,D.paddingRight=F}if(j&&j[1]>0&&!h){var T=j[1]/2;D.paddingTop=T,D.paddingBottom=T}return P&&(D.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),!1!==O||D.minWidth||(D.minWidth=0)),o.createElement("div",Object(r.a)({},k,{style:Object(r.a)(Object(r.a)({},D),A),className:G,ref:t}),E)}));b.displayName="Col",t.a=b},562:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(75),r=function(e){if(Object(n.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],c=window.document.documentElement;return t.some((function(e){return e in c.style}))}return!1},a=function(e,t){if(!r(e))return!1;var c=document.createElement("div"),n=c.style[e];return c.style[e]=t,c.style[e]!==n};function o(e,t){return Array.isArray(e)||void 0===t?r(e):a(e,t)}},650:function(e,t,c){"use strict";var n=c(0),r=Object(n.createContext)({});t.a=r},667:function(e,t,c){"use strict";var n=c(7),r=c(0),a=c(668);t.a=function(){var e=r.useState(!1),t=Object(n.a)(e,2),c=t[0],o=t[1];return r.useEffect((function(){o(Object(a.b)())}),[]),c}},668:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return o}));var n,r=c(75),a=(c(562),function(){return Object(r.a)()&&window.document.documentElement}),o=function(){if(!a())return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},768:function(e,t,c){"use strict";var n=c(318);t.a=n.a},769:function(e,t,c){"use strict";var n=c(319);t.a=n.a}}]);
//# sourceMappingURL=148.1484b639.chunk.js.map