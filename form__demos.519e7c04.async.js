(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6294],{14364:function(I,a,e){"use strict";e.r(a);var W=e(88289),d=e.n(W),u=e(4125),E=e(90554),r=e.n(E),n=e(28870),s=e(71089),_=e.n(s),m=e(75020),x=e(83345),A=e.n(x),f=e(50425),P=e(86516),R=e.n(P),y=e(79685),v=e(22062),S=e(57647),O=e(7006),t=e(63342);a.default=function(){var h=v.Z.useForm(),l=R()(h,1),o=l[0],i=(0,y.useState)(!1),D=R()(i,2),p=D[0],M=D[1],L=function(){M(!0),(0,O.Z)().then(function(j){o.setFieldValue("data",j)}).finally(function(){M(!1)})},b=function(){o.validateFields().then(function(j){console.log(j)})};return(0,y.useEffect)(function(){L()},[]),(0,t.jsxs)(u.default,{direction:"vertical",size:8,align:"center",style:{marginBottom:8},children:[(0,t.jsx)(v.Z,{form:o,layout:"vertical",children:(0,t.jsx)(v.Z.Table,{name:"data",loading:p,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(f.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,t.jsx)(S.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(f.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(f.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(j){var U=j.name;return(0,t.jsx)(n.default,{type:"link",onClick:function(){return m.default.info(JSON.stringify(o.getFieldValue(["data",U])))},children:"Configuration"})}}]})}),(0,t.jsx)(n.default,{type:"primary",onClick:b,children:"Submit"})]})}},67001:function(I,a,e){"use strict";e.r(a);var W=e(83345),d=e.n(W),u=e(50425),E=e(86516),r=e.n(E),n=e(79685),s=e(22062),_=e(7006),m=e(63342);a.default=function(){var x=s.Z.useForm(),A=r()(x,1),f=A[0],P=(0,n.useState)([]),R=r()(P,2),y=R[0],v=R[1],S=(0,n.useState)(!1),O=r()(S,2),t=O[0],h=O[1],l=function(){h(!0),(0,_.Z)().then(function(D){f.setFieldValue("data",D)}).finally(function(){h(!1)})};(0,n.useEffect)(function(){l()},[]);var o=(0,n.useMemo)(function(){return y.map(function(i){var D;return(D=f.getFieldsValue().data)===null||D===void 0?void 0:D.findIndex(function(p){return p.uuid===i})})},[y]);return(0,m.jsx)(s.Z,{form:f,layout:"vertical",style:{height:400},children:(0,m.jsx)(s.Z.Table,{name:"data",loading:t,scroll:{y:280},rowSelection:{selectedRowKeys:o,onChange:function(D){v(f.getFieldsValue().data.filter(function(p,M){return D.includes(M)}).map(function(p){return p.uuid}))}},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(D){var p=D.name;return(0,m.jsx)(u.default,{disabled:y.includes(f.getFieldValue(["data",p,"uuid"])),placeholder:"Name"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,m.jsx)(u.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,m.jsx)(u.default,{placeholder:"Company"})}}]})})}},72177:function(I,a,e){"use strict";e.r(a);var W=e(90554),d=e.n(W),u=e(28870),E=e(41760),r=e.n(E),n=e(90533),s=e(48651),_=e.n(s),m=e(86516),x=e.n(m),A=e(79685),f=e(22062),P=e(63342);a.default=function(){var R=f.Z.useForm(),y=x()(R,1),v=y[0],S=f.Z.useWatch("data",v)||[],O=(0,A.useState)(new Array(10).fill(1).map(function(o,i){return{label:"test-".concat(i),value:i}})),t=x()(O,1),h=t[0],l=(0,A.useMemo)(function(){var o=S.filter(Boolean).map(function(i){return i.name});return h.map(function(i){return _()(_()({},i),{},{disabled:o.includes(i.value)})})},[S.filter(Boolean).map(function(o){return o.name}).toString()]);return(0,P.jsx)(f.Z,{form:v,layout:"vertical",initialValues:{data:[{}]},style:{padding:18},children:(0,P.jsx)(f.Z.Table,{bordered:!0,name:"data",scroll:{y:280},columns:function(i,D){var p=D.remove;return[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,P.jsx)(n.default,{placeholder:"Name",options:l})}},{key:"op",title:"Configuration",render:function(L){var b=L.name;return(0,P.jsx)(u.default,{type:"link",onClick:function(){return p(b)},children:"delete"})}}]},size:"small",footer:function(i,D){var p=D.add;return(0,P.jsx)(u.default,{type:"link",onClick:function(){return p({})},children:"add"})}})})}},19647:function(I,a,e){"use strict";e.r(a);var W=e(90554),d=e.n(W),u=e(28870),E=e(71089),r=e.n(E),n=e(75020),s=e(41760),_=e.n(s),m=e(90533),x=e(83345),A=e.n(x),f=e(50425),P=e(86516),R=e.n(P),y=e(79685),v=e(22062),S=e(57647),O=e(7006),t=e(63342);a.default=function(){var h=v.Z.useForm(),l=R()(h,1),o=l[0],i=(0,y.useState)(!1),D=R()(i,2),p=D[0],M=D[1],L=function(){M(!0),(0,O.Z)().then(function(C){o.setFieldValue("data",C)}).finally(function(){M(!1)})};return(0,y.useEffect)(function(){L()},[]),(0,t.jsx)(v.Z,{form:o,layout:"vertical",style:{height:400},children:(0,t.jsx)(v.Z.Table,{name:"data",loading:p,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(f.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",required:!0,render:function(){return(0,t.jsx)(m.default,{options:[{label:"female",value:"female"},{label:"male",value:"male"}]})}},{key:"weight",title:"weight",dataIndex:"weight",dependencies:function(C){var j=R()(C,1),U=j[0];return[["data",U,"gender"]]},render:function(C,j,U){var V,k=C.name;return(U==null||(V=U.getFieldValue)===null||V===void 0?void 0:V.call(U,["data",k,"gender"]))==="female"?"--":(0,t.jsx)(S.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(f.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(f.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(C){var j=C.name;return(0,t.jsx)(u.default,{type:"link",onClick:function(){return n.default.info(JSON.stringify(o.getFieldValue(["data",j])))},children:"Configuration"})}}]})})}},17605:function(I,a,e){"use strict";e.r(a);var W=e(90554),d=e.n(W),u=e(28870),E=e(71089),r=e.n(E),n=e(75020),s=e(83345),_=e.n(s),m=e(50425),x=e(86516),A=e.n(x),f=e(79685),P=e(22062),R=e(57647),y=e(7006),v=e(63342);a.default=function(){var S=P.Z.useForm(),O=A()(S,1),t=O[0],h=(0,f.useState)(!1),l=A()(h,2),o=l[0],i=l[1],D=function(){i(!0),(0,y.Z)().then(function(M){t.setFieldValue("data",M)}).finally(function(){i(!1)})};return(0,f.useEffect)(function(){D()},[]),(0,v.jsx)(P.Z,{form:t,layout:"vertical",style:{height:400},children:(0,v.jsx)(P.Z.Table,{name:"data",loading:o,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,v.jsx)(m.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,v.jsx)(R.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",required:!0,rules:[function(p,M){var L=p.getFieldValue,b=A()(M,1),C=b[0];return{required:L(["data",C,"gender"])==="male",message:"address is Required for male"}}],render:function(){return(0,v.jsx)(m.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,v.jsx)(m.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(M){var L=M.name;return(0,v.jsx)(u.default,{type:"link",onClick:function(){return n.default.info(JSON.stringify(t.getFieldValue(["data",L])))},children:"Configuration"})}}]})})}},57647:function(I,a,e){"use strict";e.d(a,{Z:function(){return S}});var W=e(48651),d=e.n(W),u=e(80244),E=e(59058),r=e(86516),n=e.n(r),s=e(38046),_=e.n(s),m=e(79685),x=e(68591),A=e.n(x),f=e(15298),P=e(63342),R=["value","title","className","maxWidth","watchParentSizeChange"],y=120,v=function(t){var h,l,o=t.value,i=t.title,D=i===void 0?o:i,p=t.className,M=t.maxWidth,L=t.watchParentSizeChange,b=L===void 0?!1:L,C=_()(t,R),j=(0,m.useRef)(null),U=b&&(h=j.current)!==null&&h!==void 0&&h.parentElement?(l=j.current)===null||l===void 0?void 0:l.parentElement:null,V=(0,m.useState)(!1),k=n()(V,2),re=k[0],w=k[1],le=(0,m.useState)(y),N=n()(le,2),g=N[0],J=N[1],oe=(0,m.useState)("default"),q=n()(oe,2),Q=q[0],te=q[1];(0,m.useLayoutEffect)(function(){Z()},[o,M]);var ne=function(c,T){return window.getComputedStyle(c)[T]||c.currentStyle[T]},$=function(c,T){return parseInt(ne(c,T))},ie=function(c,T){var B=G(c);if(typeof T=="number")return T>B?B:T;var K=T.match(/^(\d+)(px)?$/);if(K)return+K[1]>B?B:+K[1];var ee=T.match(/^(\d+)%$/);if(ee)return B*(parseInt(ee[1])/100);var H=T.match(/^calc\(100% - (\d+)px\)$/);return H?B-parseInt(H[1]):B},de=function(c){c.style.display="none"},se=function(c){c.style.display="inline-block"},ae=function F(c){if(!c)return y;var T=c.scrollWidth,B=c.parentElement;if(T===0)return F(B);if(M)return ie(c,M);de(j.current);var K=z(c);return K<0?0:K},X=function(c){var T=document.createRange();T.selectNodeContents(c);var B=T.getBoundingClientRect().width;return B},G=function(c){var T=c.getBoundingClientRect().width,B=$(c,"paddingLeft"),K=$(c,"paddingRight");return T-B-K},z=function(c){var T=G(c),B=X(c),K=T-B;return K},Z=function(){var c=j.current,T=c.parentElement,B=X(c),K=ae(T),ee=B>K;w(ee),J(K);var H=ne(T,"cursor");H!=="default"?te(H):ee&&te("pointer"),se(c)},Y=(0,m.useCallback)(function(){var F={maxWidth:g,cursor:Q};return(0,P.jsx)("span",{ref:j,className:A()("dtc-ellipsis-text",p),style:F,children:typeof o=="function"?o():o})},[g,Q,o]);return(0,P.jsx)(f.Z,{onResize:Z,observerEle:U,children:re?(0,P.jsx)(E.default,d()(d()({title:D,mouseEnterDelay:0,mouseLeaveDelay:0},C),{},{children:Y()})):Y()})},S=v},7006:function(I,a,e){"use strict";e.d(a,{Z:function(){return n}});var W=e(22786),d=e.n(W),u=e(46299),E=e.n(u),r=e(80696);function n(){return s.apply(this,arguments)}function s(){return s=E()(d()().mark(function _(){return d()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",new Promise(function(A){setTimeout(function(){var f=Array.from({length:5}).map(function(){return{uuid:r.We.datatype.uuid(),name:r.We.internet.userName(),address:r.We.address.cityName(),company:r.We.company.bs(),gender:r.We.name.sex(),weight:r.We.datatype.number({max:200,min:80})}});A(f)},150)}));case 1:case"end":return x.stop()}},_)})),s.apply(this,arguments)}},22062:function(I,a,e){"use strict";e.d(a,{Z:function(){return o}});var W=e(99764),d=e(9923),u=e(79786),E=e(97112),r=e(48651),n=e.n(r),s=e(40765),_=e.n(s),m=e(38046),x=e.n(m),A=e(79685),f=e(29520),P=e(68591),R=e.n(P),y=e(63342),v=["name","rules","initialValue"],S=["tableClassName","columns","title","footer","summary"],O=["noStyle","style","className","id","hasFeedback","validateStatus","required","hidden","initialValue","messageVariables","tooltip","dependencies","rules","render"],t="dtc-form__table";function h(i){var D=i.name,p=i.rules,M=i.initialValue,L=x()(i,v),b=L.tableClassName,C=L.columns,j=L.title,U=L.footer,V=L.summary,k=x()(L,S),re=function(N){return N!=null&&N.length?N.map(function(g){var J=g.noStyle,oe=g.style,q=g.className,Q=g.id,te=g.hasFeedback,ne=g.validateStatus,$=g.required,ie=g.hidden,de=g.initialValue,se=g.messageVariables,ae=g.tooltip,X=g.dependencies,G=g.rules,z=g.render,Z=x()(g,O),Y={noStyle:J,style:oe,className:q,id:Q,hasFeedback:te,validateStatus:ne,required:$,hidden:ie,initialValue:de,messageVariables:se,tooltip:ae},F=$||(G==null?void 0:G.some(function(c){return _()(c)==="object"&&c.required}));return n()(n()({},Z),{},{title:(0,y.jsxs)(y.Fragment,{children:[F&&(0,y.jsx)("span",{className:"dtc-form__table__column--required"}),Z.title]}),render:function(T,B){var K=[B.name,Z.dataIndex].filter(f.cQ.checkExist).flat(),ee=G==null?void 0:G.map(function(H){return typeof H=="function"?function(_e){return H(_e,K)}:H});return X?(0,y.jsx)(d.Z.Item,{noStyle:!0,dependencies:typeof X=="function"?X(K):X,children:function(_e){return(0,y.jsx)(d.Z.Item,n()(n()({name:K,rules:ee},Y),{},{children:z==null?void 0:z(B,K,_e)}))}}):(0,y.jsx)(d.Z.Item,n()(n()({name:K,rules:ee},Y),{},{children:z==null?void 0:z(B,K)}))}})}):[]},w=(0,A.useMemo)(function(){return typeof C=="function"?C:re(C)},[C]);return(0,y.jsx)(d.Z.List,{name:D,rules:p,initialValue:M,children:function(N,g,J){return(0,y.jsx)(E.Z,n()({className:R()(t,b),rowKey:"key",dataSource:N,pagination:!1,columns:typeof w=="function"?re(w(N,g,J)):w,footer:U?function(){return U(N,g,J)}:void 0,title:j?function(){return j(N,g,J)}:void 0,summary:V?function(){return V(N,g,J)}:void 0},k))}})}var l=d.Z;l.Table=h;var o=l},15298:function(I,a,e){"use strict";var W=e(79685),d=e(63342),u=function(r){var n=r.observerEle,s=r.onResize,_=r.children;return(0,W.useEffect)(function(){if(typeof s=="function")if(n){var m=new ResizeObserver(s);return m.observe(n),function(){m.unobserve(n)}}else return window.addEventListener("resize",s,!1),function(){window.removeEventListener("resize",s,!1)}},[s,n]),(0,d.jsx)(d.Fragment,{children:_})};a.Z=u},1246:function(I,a,e){"use strict";e.r(a)},25208:function(I,a,e){"use strict";e.r(a)},71089:function(I,a,e){"use strict";e(36226),e(1246)},68023:function(I,a,e){"use strict";var W=e(87476).default,d=e(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=s;var u=d(e(16327)),E=d(e(92107)),r=W(e(79685)),n=e(4125);function s(_){var m=_.className,x=_.direction,A=_.index,f=_.marginDirection,P=_.children,R=_.split,y=_.wrap,v=r.useContext(n.SpaceContext),S=v.horizontalSize,O=v.verticalSize,t=v.latestIndex,h=v.supportFlexGap,l={};return h||(x==="vertical"?A<t&&(l={marginBottom:S/(R?2:1)}):l=(0,E.default)((0,E.default)({},A<t&&(0,u.default)({},f,S/(R?2:1))),y&&{paddingBottom:O})),P==null?null:r.createElement(r.Fragment,null,r.createElement("div",{className:m,style:l},P),A<t&&R&&r.createElement("span",{className:"".concat(m,"-split"),style:l},R))}},4125:function(I,a,e){"use strict";var W=e(87476).default,d=e(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.SpaceContext=void 0;var u=d(e(92107)),E=d(e(16327)),r=d(e(67002)),n=d(e(68591)),s=d(e(1777)),_=W(e(79685)),m=e(98e3),x=d(e(94784)),A=d(e(68023)),f=function(O,t){var h={};for(var l in O)Object.prototype.hasOwnProperty.call(O,l)&&t.indexOf(l)<0&&(h[l]=O[l]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(O);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(O,l[o])&&(h[l[o]]=O[l[o]]);return h},P=_.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1});a.SpaceContext=P;var R={small:8,middle:16,large:24};function y(O){return typeof O=="string"?R[O]:O||0}var v=function(t){var h,l=_.useContext(m.ConfigContext),o=l.getPrefixCls,i=l.space,D=l.direction,p=t.size,M=p===void 0?(i==null?void 0:i.size)||"small":p,L=t.align,b=t.className,C=t.children,j=t.direction,U=j===void 0?"horizontal":j,V=t.prefixCls,k=t.split,re=t.style,w=t.wrap,le=w===void 0?!1:w,N=f(t,["size","align","className","children","direction","prefixCls","split","style","wrap"]),g=(0,x.default)(),J=_.useMemo(function(){return(Array.isArray(M)?M:[M,M]).map(function(Z){return y(Z)})},[M]),oe=(0,r.default)(J,2),q=oe[0],Q=oe[1],te=(0,s.default)(C,{keepEmpty:!0}),ne=L===void 0&&U==="horizontal"?"center":L,$=o("space",V),ie=(0,n.default)($,"".concat($,"-").concat(U),(h={},(0,E.default)(h,"".concat($,"-rtl"),D==="rtl"),(0,E.default)(h,"".concat($,"-align-").concat(ne),ne),h),b),de="".concat($,"-item"),se=D==="rtl"?"marginLeft":"marginRight",ae=0,X=te.map(function(Z,Y){Z!=null&&(ae=Y);var F=Z&&Z.key||"".concat(de,"-").concat(Y);return _.createElement(A.default,{className:de,key:F,direction:U,index:Y,marginDirection:se,split:k,wrap:le},Z)}),G=_.useMemo(function(){return{horizontalSize:q,verticalSize:Q,latestIndex:ae,supportFlexGap:g}},[q,Q,ae,g]);if(te.length===0)return null;var z={};return le&&(z.flexWrap="wrap",g||(z.marginBottom=-Q)),g&&(z.columnGap=q,z.rowGap=Q),_.createElement("div",(0,u.default)({className:ie,style:(0,u.default)((0,u.default)({},z),re)},N),_.createElement(P.Provider,{value:G},X))},S=v;a.default=S},88289:function(I,a,e){"use strict";e(36226),e(25208)},38046:function(I,a,e){var W=e(87140);function d(u,E){if(u==null)return{};var r=W(u,E),n,s;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(u);for(s=0;s<_.length;s++)n=_[s],!(E.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(u,n)&&(r[n]=u[n])}return r}I.exports=d,I.exports.__esModule=!0,I.exports.default=I.exports},87140:function(I){function a(e,W){if(e==null)return{};var d={},u=Object.keys(e),E,r;for(r=0;r<u.length;r++)E=u[r],!(W.indexOf(E)>=0)&&(d[E]=e[E]);return d}I.exports=a,I.exports.__esModule=!0,I.exports.default=I.exports}}]);