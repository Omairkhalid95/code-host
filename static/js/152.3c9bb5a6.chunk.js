(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[152],{674:function(e,t,a){"use strict";var n=a(5),c=a(4),r=a(0),s=a(8),o=a.n(s),i=a(73),l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){return r.createElement(i.a,null,(function(t){var a,s=t.getPrefixCls,i=t.direction,d=e.prefixCls,u=e.type,h=void 0===u?"horizontal":u,j=e.orientation,m=void 0===j?"center":j,b=e.className,g=e.children,p=e.dashed,O=e.plain,f=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),x=s("divider",d),v=m.length>0?"-".concat(m):m,y=!!g,w=o()(x,"".concat(x,"-").concat(h),(a={},Object(c.a)(a,"".concat(x,"-with-text"),y),Object(c.a)(a,"".concat(x,"-with-text").concat(v),y),Object(c.a)(a,"".concat(x,"-dashed"),!!p),Object(c.a)(a,"".concat(x,"-plain"),!!O),Object(c.a)(a,"".concat(x,"-rtl"),"rtl"===i),a),b);return r.createElement("div",Object(n.a)({className:w},f,{role:"separator"}),g&&r.createElement("span",{className:"".concat(x,"-inner-text")},g))}))}},809:function(e,t,a){"use strict";var n=a(16),c=a(259),r=a.n(c),s={},o=a(19).a;s.login=function(e){var t=o.replace("/myTeamsApi","");return t+="/login",r()({url:t,method:"post",data:e})},s.signUp=function(e){return Object(n.a)({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})},t.a=s},840:function(e,t,a){"use strict";var n=a(0),c=a(44),r=a(674),s=a(125),o=a(1023),i=a(1019),l=a(519),d=a(3),u=a(1),h=a(4),j=a(18),m=a(8),b=a.n(m),g=a(132),p=a(83),O=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],f=n.forwardRef((function(e,t){var a=e.className,c=e.component,r=e.viewBox,s=e.spin,o=e.rotate,i=e.tabIndex,l=e.onClick,d=e.children,m=Object(j.a)(e,O);Object(p.g)(Boolean(c||d),"Should have `component` prop or `children`."),Object(p.f)();var f=n.useContext(g.a),x=f.prefixCls,v=void 0===x?"anticon":x,y=f.rootClassName,w=b()(y,v,a),k=b()(Object(h.a)({},"".concat(v,"-spin"),!!s)),I=o?{msTransform:"rotate(".concat(o,"deg)"),transform:"rotate(".concat(o,"deg)")}:void 0,N=Object(u.a)(Object(u.a)({},p.e),{},{className:k,style:I,viewBox:r});r||delete N.viewBox;var S=i;return void 0===S&&l&&(S=-1),n.createElement("span",Object(u.a)(Object(u.a)({role:"img"},m),{},{ref:t,tabIndex:S,onClick:l,className:w}),c?n.createElement(c,Object(u.a)({},N),d):d?(Object(p.g)(Boolean(r)||1===n.Children.count(d)&&n.isValidElement(d)&&"use"===n.Children.only(d).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),n.createElement("svg",Object(u.a)(Object(u.a)({},N),{},{viewBox:r}),d)):null)}));f.displayName="AntdIcon";var x=a(58),v=a(809),y=a(47),w=a(838),k=a(30),I=function(e){var t=Object(y.k)(),a=e.showForgetPassword,c=e.hideAuthMessage,u=e.showLoading,h=e.loading,j=e.showMessage,m=e.message,b=e.authenticated,g=e.showAuthMessage,p=e.token,O=e.redirect,f=e.allowRedirect;Object(n.useEffect)((function(){null!==p&&f&&t.push(O),j&&setTimeout((function(){c()}),3e3)}));r.a,s.a,s.a;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:j?1:0,marginBottom:j?20:0},children:Object(d.jsx)(o.a,{type:"error",showIcon:!0,message:m})}),Object(d.jsxs)(i.a,{layout:"vertical",name:"login-form",onFinish:function(e){u(),v.a.login(e).then((function(e){var t=e.data.token;console.log(t),localStorage.setItem(k.b,t),b(t)})).then((function(e){g(e)}))},children:[Object(d.jsx)(i.a.Item,{name:"SessionId",label:"Session Id",rules:[{required:!0,message:"Please give the JSESSIONID"}],children:Object(d.jsx)(l.a,{})}),Object(d.jsx)(i.a.Item,{name:"XsrfToken",label:Object(d.jsx)("div",{className:"".concat(a?"d-flex justify-content-between w-100 align-items-center":""),children:Object(d.jsx)("span",{children:"Xsrf Token"})}),rules:[{required:!0,message:"Please give the Xsrf Token"}],children:Object(d.jsx)(l.a,{})}),Object(d.jsx)(i.a.Item,{children:Object(d.jsx)(s.a,{type:"primary",htmlType:"submit",block:!0,loading:h,children:"Sign In"})})]})]})};I.defaultProps={otherSignIn:!0,showForgetPassword:!1};var N={showAuthMessage:x.c,showLoading:x.d,hideAuthMessage:x.b,authenticated:x.a};t.a=Object(c.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),N)(I)},924:function(e,t,a){"use strict";a.r(t);var n=a(1),c=(a(0),a(840)),r=a(768),s=a(769),o=a(1021),i=a(44),l=a(3),d={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(i.d)((function(e){return e.theme.currentTheme}));return Object(l.jsx)("div",{className:"h-100",style:d,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(r.a,{justify:"center",children:Object(l.jsx)(s.a,{xs:20,sm:20,md:20,lg:7,children:Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"my-4",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""}),Object(l.jsxs)("p",{children:["Don't have an account yet? ",Object(l.jsx)("a",{href:"/auth/register-1",children:"Sign Up"})]})]}),Object(l.jsx)(r.a,{justify:"center",children:Object(l.jsx)(s.a,{xs:24,sm:24,md:20,lg:20,children:Object(l.jsx)(c.a,Object(n.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=152.3c9bb5a6.chunk.js.map