"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[9484,7919],{83756:function(y,i,e){e.r(i);var x=e(58383),P=e.n(x),u=e(43249),g=e(39508),M=e.n(g),r=e(47528),C=e(54306),p=e.n(C),E=e(50959),a=e(50741),d=e(11527);i.default=function(){var R=(0,E.useState)(!1),c=p()(R,2),f=c[0],v=c[1],t=(0,E.useState)(80),l=p()(t,2),s=l[0],n=l[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Z,{defaultValue:s,min:10,max:100,onChange:function(h){return n(h)}}),(0,d.jsxs)("span",{children:["width:",s,"%"]}),(0,d.jsx)(u.default,{style:{margin:"10px"},onClick:function(){return v(function(h){return!h})},children:"click me"}),(0,d.jsx)(a.SlidePane,{visible:f,style:{width:"".concat(s,"%"),minHeight:"600px",height:"100%"},onClose:function(){return v(!1)},children:(0,d.jsx)("div",{children:"hello world"})})]})}},2958:function(y,i,e){e.r(i)},41339:function(y,i,e){var x=e(23370).default,P=e(10151).default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var u=P(e(9222)),g=P(e(13045)),M=e(15437),r=x(e(50959)),C=P(e(58570)),p=r.forwardRef(function(a,d){var R=a.visible,c=(0,r.useRef)(null),f=(0,r.useRef)(null);function v(){g.default.cancel(f.current),f.current=null}function t(){f.current=(0,g.default)(function(){var l;(l=c.current)===null||l===void 0||l.forcePopupAlign(),f.current=null})}return r.useEffect(function(){return R?t():v(),v},[R,a.title]),r.createElement(C.default,(0,u.default)({ref:(0,M.composeRef)(c,d)},a))}),E=p;i.default=E},47528:function(y,i,e){var x,P=e(23370).default,u=e(10151).default;x={value:!0},i.Z=void 0;var g=u(e(24445)),M=u(e(27560)),r=u(e(9222)),C=u(e(23150)),p=u(e(84875)),E=u(e(66653)),a=P(e(50959)),d=e(88245),R=u(e(41339)),c=function(t,l){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&l.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)l.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(s[n[o]]=t[n[o]]);return s},f=a.forwardRef(function(t,l){var s=a.useContext(d.ConfigContext),n=s.getPrefixCls,o=s.direction,h=s.getPopupContainer,K=a.useState({}),S=(0,C.default)(K,2),B=S[0],U=S[1],j=function(_,m){U(function(O){return(0,r.default)((0,r.default)({},O),(0,M.default)({},_,m))})},V=function(_,m){return _||(m?o==="rtl"?"left":"right":"top")},F=t.prefixCls,N=t.tooltipPrefixCls,D=t.range,$=t.className,T=c(t,["prefixCls","tooltipPrefixCls","range","className"]),b=n("slider",F),z=n("tooltip",N),Z=(0,p.default)($,(0,M.default)({},"".concat(b,"-rtl"),o==="rtl"));o==="rtl"&&!T.vertical&&(T.reverse=!T.reverse);var H=a.useMemo(function(){return D?(0,g.default)(D)==="object"?[!0,D.draggableTrack]:[!0,!1]:[!1]},[D]),W=(0,C.default)(H,2),G=W[0],J=W[1],Q=function(_,m){var O=m.index,X=m.dragging,Y=n(),A=t.tipFormatter,I=t.tooltipVisible,k=t.tooltipPlacement,w=t.getTooltipPopupContainer,q=t.vertical,ee=A?B[O]||X:!1,te=I||I===void 0&&ee,ne=(0,r.default)((0,r.default)({},_.props),{onMouseEnter:function(){return j(O,!0)},onMouseLeave:function(){return j(O,!1)}});return a.createElement(R.default,{prefixCls:z,title:A?A(m.value):"",visible:te,placement:V(k,q),transitionName:"".concat(Y,"-zoom-down"),key:O,overlayClassName:"".concat(b,"-tooltip"),getPopupContainer:w||h},a.cloneElement(_,ne))};return a.createElement(E.default,(0,r.default)({},T,{step:T.step,range:G,draggableTrack:J,className:Z,ref:l,prefixCls:b,handleRender:Q}))});f.defaultProps={tipFormatter:function(l){return typeof l=="number"?l.toString():""}};var v=f;i.Z=v},39508:function(y,i,e){e(65736),e(2958),e(82548)}}]);