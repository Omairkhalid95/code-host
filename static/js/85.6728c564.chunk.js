(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[85,119,126,127,128],{311:function(t,e,o){"use strict";o.r(e);var n=o(7),a=o(581),r=o(0),i=o(546),c=o.n(i),s=o(3),l={series:[],options:{plotOptions:{bar:{horizontal:!1,columnWidth:"60%",endingShape:"rounded"}},colors:[a.b,a.c,a.d,a.e,a.f],dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"".concat(t)}}}}};e.default=function(t){var e=t.categories,o=t.series,i=Object(r.useState)(l),u=Object(n.a)(i,2),f=u[0],d=u[1];return Object(r.useEffect)((function(){var t={series:null!==o&&void 0!==o?o:[],options:{plotOptions:{bar:{horizontal:!1,columnWidth:"60%",endingShape:"rounded"}},colors:[a.b,a.c,a.d,a.e,a.f],dataLabels:{enabled:!1},noData:{text:"No Data Found",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#df4759",fontSize:"14px",fontFamily:void 0}},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:null!==e&&void 0!==e?e:[]},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"".concat(t)}}}}};d(t)}),[e,o]),Object(s.jsx)(c.a,{options:f.options,series:f.series,height:300,type:"bar"})}},312:function(t,e,o){"use strict";o.r(e);var n=o(7),a=o(0),r=o(546),i=o.n(r),c=o(127),s=o(3);e.default=function(t){var e=t.categories,o=t.series,r=Object(a.useState)(),l=Object(n.a)(r,2),u=l[0],f=l[1];return Object(a.useEffect)((function(){var t,n={series:null!==(t=null===o||void 0===o?void 0:o.map((function(t){return Number(t)})))&&void 0!==t?t:[],options:{chart:{type:"donut"},plotOptions:{pie:{startAngle:-90,endAngle:270}},noData:{text:"No Data Found",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#df4759",fontSize:"14px",fontFamily:void 0}},labels:null!==e&&void 0!==e?e:[],fill:{type:"gradient"},legend:{formatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex]}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}};f(n)}),[e,o]),u?Object(s.jsx)(i.a,{options:u.options,series:u.series,width:550,type:"donut"}):Object(s.jsx)(c.a,{image:c.a.PRESENTED_IMAGE_SIMPLE})}},313:function(t,e,o){"use strict";o.r(e);var n=o(12),a=o(7),r=o(0),i=o(546),c=o.n(i),s=o(127),l=o(3);e.default=function(t){var e=t.categories,o=t.series,i=Object(r.useState)(),u=Object(a.a)(i,2),f=u[0],d=u[1];return Object(r.useEffect)((function(){var t={series:[{name:"",data:null!==o&&void 0!==o?o:[]}],options:{chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},noData:{text:"No Data Found",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#df4759",fontSize:"14px",fontFamily:void 0}},toolbar:{show:!1}},colors:["#77B6EA","#545454"],dataLabels:{enabled:!0,style:{fontSize:"10px"}},stroke:{curve:"smooth"},title:{text:"",align:"left"},grid:{borderColor:"#e7e7e7",row:{colors:["#f3f3f3","transparent"],opacity:.5}},markers:{size:1},xaxis:{categories:null!==e&&void 0!==e?e:[],title:{text:""},labels:{show:!0,rotate:-45,rotateAlways:!0,showDuplicates:!1,trim:!1,style:{fontSize:"10px"},offsetX:4,offsetY:0}},yaxis:{title:{text:""},min:0,max:Math.max.apply(Math,Object(n.a)(o))+100},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}}};d(t)}),[e,o]),f?Object(l.jsx)(c.a,{options:f.options,series:f.series,height:350,type:"line"}):Object(l.jsx)(s.a,{image:s.a.PRESENTED_IMAGE_SIMPLE})}},314:function(t,e,o){"use strict";o.r(e);var n=o(12),a=o(7),r=o(0),i=o(546),c=o.n(i),s=o(127),l=o(3);e.default=function(t){var e=t.categories,o=t.series,i=Object(r.useState)(),u=Object(a.a)(i,2),f=u[0],d=u[1];return Object(r.useEffect)((function(){var t={series:[{name:"",data:null!==o&&void 0!==o?o:[]}],options:{chart:{type:"bar",height:450},plotOptions:{bar:{borderRadius:4,columnWidth:"30%"}},noData:{text:"No Data Found",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#df4759",fontSize:"14px",fontFamily:void 0}},dataLabels:{enabled:!0},xaxis:{categories:null!==e&&void 0!==e?e:[]},yaxis:{title:{text:""},min:0,max:Math.max.apply(Math,Object(n.a)(o))+100,tickAmount:5}}};d(t)}),[e,o]),f?Object(l.jsx)(c.a,{options:f.options,series:f.series,height:450,type:"bar"}):Object(l.jsx)(s.a,{image:s.a.PRESENTED_IMAGE_SIMPLE})}},318:function(t,e,o){"use strict";var n=o(5),a=o(4),r=o(25),i=o(7),c=o(0),s=o(8),l=o.n(s),u=o(73),f=o(650),d=o(64),p=o(139),b=o(667),j=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(o[n[a]]=t[n[a]])}return o},m=(Object(d.a)("top","middle","bottom","stretch"),Object(d.a)("start","end","center","space-around","space-between"),c.forwardRef((function(t,e){var o,s=t.prefixCls,d=t.justify,m=t.align,v=t.className,h=t.style,O=t.children,g=t.gutter,y=void 0===g?0:g,x=t.wrap,w=j(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),E=c.useContext(u.b),S=E.getPrefixCls,A=E.direction,C=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),N=Object(i.a)(C,2),P=N[0],D=N[1],L=Object(b.a)(),z=c.useRef(y);c.useEffect((function(){var t=p.a.subscribe((function(t){var e=z.current||0;(!Array.isArray(e)&&"object"===Object(r.a)(e)||Array.isArray(e)&&("object"===Object(r.a)(e[0])||"object"===Object(r.a)(e[1])))&&D(t)}));return function(){return p.a.unsubscribe(t)}}),[]);var M=S("row",s),F=function(){var t=[0,0];return(Array.isArray(y)?y:[y,0]).forEach((function(e,o){if("object"===Object(r.a)(e))for(var n=0;n<p.b.length;n++){var a=p.b[n];if(P[a]&&void 0!==e[a]){t[o]=e[a];break}}else t[o]=e||0})),t}(),I=l()(M,(o={},Object(a.a)(o,"".concat(M,"-no-wrap"),!1===x),Object(a.a)(o,"".concat(M,"-").concat(d),d),Object(a.a)(o,"".concat(M,"-").concat(m),m),Object(a.a)(o,"".concat(M,"-rtl"),"rtl"===A),o),v),R={},k=F[0]>0?F[0]/-2:void 0,G=F[1]>0?F[1]/-2:void 0;if(k&&(R.marginLeft=k,R.marginRight=k),L){var T=Object(i.a)(F,2);R.rowGap=T[1]}else G&&(R.marginTop=G,R.marginBottom=G);var W=c.useMemo((function(){return{gutter:F,wrap:x,supportFlexGap:L}}),[F,x,L]);return c.createElement(f.a.Provider,{value:W},c.createElement("div",Object(n.a)({},w,{className:I,style:Object(n.a)(Object(n.a)({},R),h),ref:e}),O))})));m.displayName="Row",e.a=m},319:function(t,e,o){"use strict";var n=o(4),a=o(5),r=o(25),i=o(0),c=o(8),s=o.n(c),l=o(650),u=o(73),f=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(o[n[a]]=t[n[a]])}return o};var d=["xs","sm","md","lg","xl","xxl"],p=i.forwardRef((function(t,e){var o,c=i.useContext(u.b),p=c.getPrefixCls,b=c.direction,j=i.useContext(l.a),m=j.gutter,v=j.wrap,h=j.supportFlexGap,O=t.prefixCls,g=t.span,y=t.order,x=t.offset,w=t.push,E=t.pull,S=t.className,A=t.children,C=t.flex,N=t.style,P=f(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),D=p("col",O),L={};d.forEach((function(e){var o,i={},c=t[e];"number"===typeof c?i.span=c:"object"===Object(r.a)(c)&&(i=c||{}),delete P[e],L=Object(a.a)(Object(a.a)({},L),(o={},Object(n.a)(o,"".concat(D,"-").concat(e,"-").concat(i.span),void 0!==i.span),Object(n.a)(o,"".concat(D,"-").concat(e,"-order-").concat(i.order),i.order||0===i.order),Object(n.a)(o,"".concat(D,"-").concat(e,"-offset-").concat(i.offset),i.offset||0===i.offset),Object(n.a)(o,"".concat(D,"-").concat(e,"-push-").concat(i.push),i.push||0===i.push),Object(n.a)(o,"".concat(D,"-").concat(e,"-pull-").concat(i.pull),i.pull||0===i.pull),Object(n.a)(o,"".concat(D,"-rtl"),"rtl"===b),o))}));var z=s()(D,(o={},Object(n.a)(o,"".concat(D,"-").concat(g),void 0!==g),Object(n.a)(o,"".concat(D,"-order-").concat(y),y),Object(n.a)(o,"".concat(D,"-offset-").concat(x),x),Object(n.a)(o,"".concat(D,"-push-").concat(w),w),Object(n.a)(o,"".concat(D,"-pull-").concat(E),E),o),S,L),M={};if(m&&m[0]>0){var F=m[0]/2;M.paddingLeft=F,M.paddingRight=F}if(m&&m[1]>0&&!h){var I=m[1]/2;M.paddingTop=I,M.paddingBottom=I}return C&&(M.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(C),!1!==v||M.minWidth||(M.minWidth=0)),i.createElement("div",Object(a.a)({},P,{style:Object(a.a)(Object(a.a)({},M),N),className:z,ref:e}),A)}));p.displayName="Col",e.a=p},359:function(t,e,o){"use strict";o.r(e);var n=o(665),a=o(3);e.default=function(t){var e=t.graphData;return Object(a.jsx)(n.a,{list:e})}},562:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=o(75),a=function(t){if(Object(n.a)()&&window.document.documentElement){var e=Array.isArray(t)?t:[t],o=window.document.documentElement;return e.some((function(t){return t in o.style}))}return!1},r=function(t,e){if(!a(t))return!1;var o=document.createElement("div"),n=o.style[t];return o.style[t]=e,o.style[t]!==n};function i(t,e){return Array.isArray(t)||void 0===e?a(t):r(t,e)}},581:function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"d",(function(){return i})),o.d(e,"e",(function(){return c})),o.d(e,"f",(function(){return s})),o.d(e,"a",(function(){return u})),o.d(e,"g",(function(){return d}));var n=o(1),a="#3e82f7",r="#04d182",i="#ff6b72",c="#ffc107",s="#a461d8",l="#027148",u=[l,a,r,c,s,"#fa8c16","#17bcff",l],f={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(u),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},d=(Object(n.a)({},f),[].concat(u),{colors:[].concat(u),plotOptions:{pie:{size:50,donut:{labels:{show:!0,total:{show:!0,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}},size:"87%"}}},labels:[],dataLabels:{enabled:!1},legend:{show:!1}})},650:function(t,e,o){"use strict";var n=o(0),a=Object(n.createContext)({});e.a=a},665:function(t,e,o){"use strict";var n=o(12),a=o(768),r=o(769),i=o(1021),c=o(127),s=(o(311),o(313)),l=o(312),u=o(314),f=o(3);e.a=function(t){var e=t.list;return Object(f.jsx)(f.Fragment,{children:(null===e||void 0===e?void 0:e.length)>0?Object(f.jsx)(a.a,{gutter:[8,8],children:null===e||void 0===e?void 0:e.map((function(t){var e=Object(n.a)(null===t||void 0===t?void 0:t.labels),o=Object(n.a)(null===t||void 0===t?void 0:t.data);return Object(f.jsx)(r.a,{className:"gutter-row",span:"LineWithLabelChart"===t.type?24:12,children:Object(f.jsxs)(i.a,{style:{height:"100%"},children:[Object(f.jsx)(i.a.Meta,{title:t.title,description:t.description,style:{marginBottom:2}}),"GradientDonut"===t.type&&Object(f.jsx)("div",{style:{marginTop:50},children:Object(f.jsx)(l.default,{categories:e,series:o})}),"LineWithLabelChart"===t.type&&Object(f.jsx)(s.default,{categories:e,series:o}),"BasicBarChart"===t.type&&Object(f.jsx)(u.default,{categories:e,series:o})]})})}))}):Object(f.jsx)(c.a,{image:c.a.PRESENTED_IMAGE_SIMPLE})})}},667:function(t,e,o){"use strict";var n=o(7),a=o(0),r=o(668);e.a=function(){var t=a.useState(!1),e=Object(n.a)(t,2),o=e[0],i=e[1];return a.useEffect((function(){i(Object(r.b)())}),[]),o}},668:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return i}));var n,a=o(75),r=(o(562),function(){return Object(a.a)()&&window.document.documentElement}),i=function(){if(!r())return!1;if(void 0!==n)return n;var t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t),n=1===t.scrollHeight,document.body.removeChild(t),n}}}]);
//# sourceMappingURL=85.6728c564.chunk.js.map