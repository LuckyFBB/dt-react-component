(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6294],{94512:function(R,n,e){"use strict";e.r(n);var P=e(86366),o=e.n(P),u=e(17727),_=e(58383),r=e.n(_),a=e(43249),d=e(51317),l=e.n(d),c=e(96169),C=e(90650),W=e.n(C),v=e(35031),D=e(54306),T=e.n(D),p=e(50959),E=e(45488),U=e(12845),O=e(43996),t=e(11527);n.default=function(){var x=E.Z.useForm(),i=T()(x,1),s=i[0],m=(0,p.useState)(!1),h=T()(m,2),y=h[0],M=h[1],L=function(){M(!0),(0,O.Z)().then(function(j){s.setFieldValue("data",j)}).finally(function(){M(!1)})},b=function(){s.validateFields().then(function(j){console.log(j)})};return(0,p.useEffect)(function(){L()},[]),(0,t.jsxs)(u.default,{direction:"vertical",size:8,align:"center",style:{marginBottom:8},children:[(0,t.jsx)(E.Z,{form:s,layout:"vertical",children:(0,t.jsx)(E.Z.Table,{name:"data",loading:y,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(v.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,t.jsx)(U.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(v.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(v.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(j){var K=j.name;return(0,t.jsx)(a.default,{type:"link",onClick:function(){return c.default.info(JSON.stringify(s.getFieldValue(["data",K])))},children:"Configuration"})}}]})}),(0,t.jsx)(a.default,{type:"primary",onClick:b,children:"Submit"})]})}},45699:function(R,n,e){"use strict";e.r(n);var P=e(90650),o=e.n(P),u=e(35031),_=e(54306),r=e.n(_),a=e(50959),d=e(45488),l=e(43996),c=e(11527);n.default=function(){var C=d.Z.useForm(),W=r()(C,1),v=W[0],D=(0,a.useState)([]),T=r()(D,2),p=T[0],E=T[1],U=(0,a.useState)(!1),O=r()(U,2),t=O[0],x=O[1],i=function(){x(!0),(0,l.Z)().then(function(h){v.setFieldValue("data",h)}).finally(function(){x(!1)})};(0,a.useEffect)(function(){i()},[]);var s=(0,a.useMemo)(function(){return p.map(function(m){var h;return(h=v.getFieldsValue().data)===null||h===void 0?void 0:h.findIndex(function(y){return y.uuid===m})})},[p]);return(0,c.jsx)(d.Z,{form:v,layout:"vertical",style:{height:400},children:(0,c.jsx)(d.Z.Table,{name:"data",loading:t,scroll:{y:280},rowSelection:{selectedRowKeys:s,onChange:function(h){E(v.getFieldsValue().data.filter(function(y,M){return h.includes(M)}).map(function(y){return y.uuid}))}},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(h){var y=h.name;return(0,c.jsx)(u.default,{disabled:p.includes(v.getFieldValue(["data",y,"uuid"])),placeholder:"Name"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,c.jsx)(u.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,c.jsx)(u.default,{placeholder:"Company"})}}]})})}},39396:function(R,n,e){"use strict";e.r(n);var P=e(58383),o=e.n(P),u=e(43249),_=e(91225),r=e.n(_),a=e(47715),d=e(57213),l=e.n(d),c=e(54306),C=e.n(c),W=e(50959),v=e(45488),D=e(11527);n.default=function(){var T=v.Z.useForm(),p=C()(T,1),E=p[0],U=v.Z.useWatch("data",E)||[],O=(0,W.useState)(new Array(10).fill(1).map(function(s,m){return{label:"test-".concat(m),value:m}})),t=C()(O,1),x=t[0],i=(0,W.useMemo)(function(){var s=U.filter(Boolean).map(function(m){return m.name});return x.map(function(m){return l()(l()({},m),{},{disabled:s.includes(m.value)})})},[U.filter(Boolean).map(function(s){return s.name}).toString()]);return(0,D.jsx)(v.Z,{form:E,layout:"vertical",initialValues:{data:[{}]},style:{padding:18},children:(0,D.jsx)(v.Z.Table,{bordered:!0,name:"data",scroll:{y:280},columns:function(m,h){var y=h.remove;return[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,D.jsx)(a.default,{placeholder:"Name",options:i})}},{key:"op",title:"Configuration",render:function(L){var b=L.name;return(0,D.jsx)(u.default,{type:"link",onClick:function(){return y(b)},children:"delete"})}}]},size:"small",footer:function(m,h){var y=h.add;return(0,D.jsx)(u.default,{type:"link",onClick:function(){return y({})},children:"add"})}})})}},86040:function(R,n,e){"use strict";e.r(n);var P=e(58383),o=e.n(P),u=e(43249),_=e(51317),r=e.n(_),a=e(96169),d=e(91225),l=e.n(d),c=e(47715),C=e(90650),W=e.n(C),v=e(35031),D=e(54306),T=e.n(D),p=e(50959),E=e(45488),U=e(12845),O=e(43996),t=e(11527);n.default=function(){var x=E.Z.useForm(),i=T()(x,1),s=i[0],m=(0,p.useState)(!1),h=T()(m,2),y=h[0],M=h[1],L=function(){M(!0),(0,O.Z)().then(function(I){s.setFieldValue("data",I)}).finally(function(){M(!1)})};return(0,p.useEffect)(function(){L()},[]),(0,t.jsx)(E.Z,{form:s,layout:"vertical",style:{height:400},children:(0,t.jsx)(E.Z.Table,{name:"data",loading:y,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(v.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",required:!0,render:function(){return(0,t.jsx)(c.default,{options:[{label:"female",value:"female"},{label:"male",value:"male"}]})}},{key:"weight",title:"weight",dataIndex:"weight",dependencies:function(I){var j=T()(I,1),K=j[0];return[["data",K,"gender"]]},render:function(I,j,K){var V,k=I.name;return(K==null||(V=K.getFieldValue)===null||V===void 0?void 0:V.call(K,["data",k,"gender"]))==="female"?"--":(0,t.jsx)(U.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(v.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(v.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(I){var j=I.name;return(0,t.jsx)(u.default,{type:"link",onClick:function(){return a.default.info(JSON.stringify(s.getFieldValue(["data",j])))},children:"Configuration"})}}]})})}},59374:function(R,n,e){"use strict";e.r(n);var P=e(58383),o=e.n(P),u=e(43249),_=e(51317),r=e.n(_),a=e(96169),d=e(90650),l=e.n(d),c=e(35031),C=e(54306),W=e.n(C),v=e(50959),D=e(45488),T=e(12845),p=e(43996),E=e(11527);n.default=function(){var U=D.Z.useForm(),O=W()(U,1),t=O[0],x=(0,v.useState)(!1),i=W()(x,2),s=i[0],m=i[1],h=function(){m(!0),(0,p.Z)().then(function(M){t.setFieldValue("data",M)}).finally(function(){m(!1)})};return(0,v.useEffect)(function(){h()},[]),(0,E.jsx)(D.Z,{form:t,layout:"vertical",style:{height:400},children:(0,E.jsx)(D.Z.Table,{name:"data",loading:s,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,E.jsx)(c.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,E.jsx)(T.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",required:!0,rules:[function(y,M){var L=y.getFieldValue,b=W()(M,1),I=b[0];return{required:L(["data",I,"gender"])==="male",message:"address is Required for male"}}],render:function(){return(0,E.jsx)(c.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,E.jsx)(c.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(M){var L=M.name;return(0,E.jsx)(u.default,{type:"link",onClick:function(){return a.default.info(JSON.stringify(t.getFieldValue(["data",L])))},children:"Configuration"})}}]})})}},12845:function(R,n,e){"use strict";e.d(n,{Z:function(){return U}});var P=e(57213),o=e.n(P),u=e(82548),_=e(58570),r=e(54306),a=e.n(r),d=e(12342),l=e.n(d),c=e(50959),C=e(84875),W=e.n(C),v=e(58110),D=e(11527),T=["value","title","className","maxWidth","watchParentSizeChange"],p=120,E=function(t){var x,i,s=t.value,m=t.title,h=m===void 0?s:m,y=t.className,M=t.maxWidth,L=t.watchParentSizeChange,b=L===void 0?!1:L,I=l()(t,T),j=(0,c.useRef)(null),K=b&&(x=j.current)!==null&&x!==void 0&&x.parentElement?(i=j.current)===null||i===void 0?void 0:i.parentElement:null,V=(0,c.useState)(!1),k=a()(V,2),re=k[0],w=k[1],le=(0,c.useState)(p),N=a()(le,2),g=N[0],J=N[1],oe=(0,c.useState)("default"),q=a()(oe,2),Q=q[0],te=q[1];(0,c.useLayoutEffect)(function(){Z()},[s,M]);var ne=function(f,A){return window.getComputedStyle(f)[A]||f.currentStyle[A]},$=function(f,A){return parseInt(ne(f,A))},ue=function(f,A){var S=G(f);if(typeof A=="number")return A>S?S:A;var B=A.match(/^(\d+)(px)?$/);if(B)return+B[1]>S?S:+B[1];var ee=A.match(/^(\d+)%$/);if(ee)return S*(parseInt(ee[1])/100);var H=A.match(/^calc\(100% - (\d+)px\)$/);return H?S-parseInt(H[1]):S},de=function(f){f.style.display="none"},ie=function(f){f.style.display="inline-block"},ae=function F(f){if(!f)return p;var A=f.scrollWidth,S=f.parentElement;if(A===0)return F(S);if(M)return ue(f,M);de(j.current);var B=z(f);return B<0?0:B},X=function(f){var A=document.createRange();A.selectNodeContents(f);var S=A.getBoundingClientRect().width;return S},G=function(f){var A=f.getBoundingClientRect().width,S=$(f,"paddingLeft"),B=$(f,"paddingRight");return A-S-B},z=function(f){var A=G(f),S=X(f),B=A-S;return B},Z=function(){var f=j.current,A=f.parentElement,S=X(f),B=ae(A),ee=S>B;w(ee),J(B);var H=ne(A,"cursor");H!=="default"?te(H):ee&&te("pointer"),ie(f)},Y=(0,c.useCallback)(function(){var F={maxWidth:g,cursor:Q};return(0,D.jsx)("span",{ref:j,className:W()("dtc-ellipsis-text",y),style:F,children:typeof s=="function"?s():s})},[g,Q,s]);return(0,D.jsx)(v.Z,{onResize:Z,observerEle:K,children:re?(0,D.jsx)(_.default,o()(o()({title:h,mouseEnterDelay:0,mouseLeaveDelay:0},I),{},{children:Y()})):Y()})},U=E},43996:function(R,n,e){"use strict";e.d(n,{Z:function(){return a}});var P=e(25359),o=e.n(P),u=e(49811),_=e.n(u),r=e(87955);function a(){return d.apply(this,arguments)}function d(){return d=_()(o()().mark(function l(){return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",new Promise(function(W){setTimeout(function(){var v=Array.from({length:5}).map(function(){return{uuid:r.We.datatype.uuid(),name:r.We.internet.userName(),address:r.We.address.cityName(),company:r.We.company.bs(),gender:r.We.name.sex(),weight:r.We.datatype.number({max:200,min:80})}});W(v)},150)}));case 1:case"end":return C.stop()}},l)})),d.apply(this,arguments)}},45488:function(R,n,e){"use strict";e.d(n,{Z:function(){return s}});var P=e(50707),o=e(28785),u=e(40591),_=e(19888),r=e(57213),a=e.n(r),d=e(37635),l=e.n(d),c=e(12342),C=e.n(c),W=e(50959),v=e(39893),D=e(84875),T=e.n(D),p=e(11527),E=["name","rules","initialValue"],U=["tableClassName","columns","title","footer","summary"],O=["noStyle","style","className","id","hasFeedback","validateStatus","required","hidden","initialValue","messageVariables","tooltip","dependencies","rules","render"],t="dtc-form__table";function x(m){var h=m.name,y=m.rules,M=m.initialValue,L=C()(m,E),b=L.tableClassName,I=L.columns,j=L.title,K=L.footer,V=L.summary,k=C()(L,U),re=function(N){return N!=null&&N.length?N.map(function(g){var J=g.noStyle,oe=g.style,q=g.className,Q=g.id,te=g.hasFeedback,ne=g.validateStatus,$=g.required,ue=g.hidden,de=g.initialValue,ie=g.messageVariables,ae=g.tooltip,X=g.dependencies,G=g.rules,z=g.render,Z=C()(g,O),Y={noStyle:J,style:oe,className:q,id:Q,hasFeedback:te,validateStatus:ne,required:$,hidden:ue,initialValue:de,messageVariables:ie,tooltip:ae},F=$||(G==null?void 0:G.some(function(f){return l()(f)==="object"&&f.required}));return a()(a()({},Z),{},{title:(0,p.jsxs)(p.Fragment,{children:[F&&(0,p.jsx)("span",{className:"dtc-form__table__column--required"}),Z.title]}),render:function(A,S){var B=[S.name,Z.dataIndex].filter(v.cQ.checkExist).flat(),ee=G==null?void 0:G.map(function(H){return typeof H=="function"?function(se){return H(se,B)}:H});return X?(0,p.jsx)(o.Z.Item,{noStyle:!0,dependencies:typeof X=="function"?X(B):X,children:function(se){return(0,p.jsx)(o.Z.Item,a()(a()({name:B,rules:ee},Y),{},{children:z==null?void 0:z(S,B,se)}))}}):(0,p.jsx)(o.Z.Item,a()(a()({name:B,rules:ee},Y),{},{children:z==null?void 0:z(S,B)}))}})}):[]},w=(0,W.useMemo)(function(){return typeof I=="function"?I:re(I)},[I]);return(0,p.jsx)(o.Z.List,{name:h,rules:y,initialValue:M,children:function(N,g,J){return(0,p.jsx)(_.Z,a()({className:T()(t,b),rowKey:"key",dataSource:N,pagination:!1,columns:typeof w=="function"?re(w(N,g,J)):w,footer:K?function(){return K(N,g,J)}:void 0,title:j?function(){return j(N,g,J)}:void 0,summary:V?function(){return V(N,g,J)}:void 0},k))}})}var i=o.Z;i.Table=x;var s=i},58110:function(R,n,e){"use strict";var P=e(50959),o=e(11527),u=function(r){var a=r.observerEle,d=r.onResize,l=r.children;return(0,P.useEffect)(function(){if(typeof d=="function")if(a){var c=new ResizeObserver(d);return c.observe(a),function(){c.unobserve(a)}}else return window.addEventListener("resize",d,!1),function(){window.removeEventListener("resize",d,!1)}},[d,a]),(0,o.jsx)(o.Fragment,{children:l})};n.Z=u},34207:function(R,n,e){"use strict";e.r(n)},40048:function(R,n,e){"use strict";e.r(n)},61955:function(R,n,e){"use strict";var P=e(26141).default,o=e(72556).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(e(67047)),_=P(e(50959)),r=e(94415),a=function(){var l=_.useState(!1),c=(0,u.default)(l,2),C=c[0],W=c[1];return _.useEffect(function(){W((0,r.detectFlexGapSupported)())},[]),C};n.default=a},94415:function(R,n,e){"use strict";var P=e(72556).default;Object.defineProperty(n,"__esModule",{value:!0}),n.detectFlexGapSupported=n.canUseDocElement=void 0,Object.defineProperty(n,"isStyleSupport",{enumerable:!0,get:function(){return u.isStyleSupport}});var o=P(e(89891)),u=e(96315),_=function(){return(0,o.default)()&&window.document.documentElement};n.canUseDocElement=_;var r,a=function(){if(!_())return!1;if(r!==void 0)return r;var l=document.createElement("div");return l.style.display="flex",l.style.flexDirection="column",l.style.rowGap="1px",l.appendChild(document.createElement("div")),l.appendChild(document.createElement("div")),document.body.appendChild(l),r=l.scrollHeight===1,document.body.removeChild(l),r};n.detectFlexGapSupported=a},51317:function(R,n,e){"use strict";e(23524),e(34207)},3387:function(R,n,e){"use strict";var P=e(26141).default,o=e(72556).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=d;var u=o(e(21970)),_=o(e(26173)),r=P(e(50959)),a=e(17727);function d(l){var c=l.className,C=l.direction,W=l.index,v=l.marginDirection,D=l.children,T=l.split,p=l.wrap,E=r.useContext(a.SpaceContext),U=E.horizontalSize,O=E.verticalSize,t=E.latestIndex,x=E.supportFlexGap,i={};return x||(C==="vertical"?W<t&&(i={marginBottom:U/(T?2:1)}):i=(0,_.default)((0,_.default)({},W<t&&(0,u.default)({},v,U/(T?2:1))),p&&{paddingBottom:O})),D==null?null:r.createElement(r.Fragment,null,r.createElement("div",{className:c,style:i},D),W<t&&T&&r.createElement("span",{className:"".concat(c,"-split"),style:i},T))}},17727:function(R,n,e){"use strict";var P=e(26141).default,o=e(72556).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.SpaceContext=void 0;var u=o(e(26173)),_=o(e(21970)),r=o(e(67047)),a=o(e(84875)),d=o(e(12830)),l=P(e(50959)),c=e(88245),C=o(e(61955)),W=o(e(3387)),v=function(O,t){var x={};for(var i in O)Object.prototype.hasOwnProperty.call(O,i)&&t.indexOf(i)<0&&(x[i]=O[i]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(O);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(O,i[s])&&(x[i[s]]=O[i[s]]);return x},D=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1});n.SpaceContext=D;var T={small:8,middle:16,large:24};function p(O){return typeof O=="string"?T[O]:O||0}var E=function(t){var x,i=l.useContext(c.ConfigContext),s=i.getPrefixCls,m=i.space,h=i.direction,y=t.size,M=y===void 0?(m==null?void 0:m.size)||"small":y,L=t.align,b=t.className,I=t.children,j=t.direction,K=j===void 0?"horizontal":j,V=t.prefixCls,k=t.split,re=t.style,w=t.wrap,le=w===void 0?!1:w,N=v(t,["size","align","className","children","direction","prefixCls","split","style","wrap"]),g=(0,C.default)(),J=l.useMemo(function(){return(Array.isArray(M)?M:[M,M]).map(function(Z){return p(Z)})},[M]),oe=(0,r.default)(J,2),q=oe[0],Q=oe[1],te=(0,d.default)(I,{keepEmpty:!0}),ne=L===void 0&&K==="horizontal"?"center":L,$=s("space",V),ue=(0,a.default)($,"".concat($,"-").concat(K),(x={},(0,_.default)(x,"".concat($,"-rtl"),h==="rtl"),(0,_.default)(x,"".concat($,"-align-").concat(ne),ne),x),b),de="".concat($,"-item"),ie=h==="rtl"?"marginLeft":"marginRight",ae=0,X=te.map(function(Z,Y){Z!=null&&(ae=Y);var F=Z&&Z.key||"".concat(de,"-").concat(Y);return l.createElement(W.default,{className:de,key:F,direction:K,index:Y,marginDirection:ie,split:k,wrap:le},Z)}),G=l.useMemo(function(){return{horizontalSize:q,verticalSize:Q,latestIndex:ae,supportFlexGap:g}},[q,Q,ae,g]);if(te.length===0)return null;var z={};return le&&(z.flexWrap="wrap",g||(z.marginBottom=-Q)),g&&(z.columnGap=q,z.rowGap=Q),l.createElement("div",(0,u.default)({className:ue,style:(0,u.default)((0,u.default)({},z),re)},N),l.createElement(D.Provider,{value:G},X))},U=E;n.default=U},86366:function(R,n,e){"use strict";e(23524),e(40048)},12342:function(R,n,e){var P=e(20006);function o(u,_){if(u==null)return{};var r=P(u,_),a,d;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(u);for(d=0;d<l.length;d++)a=l[d],!(_.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(u,a)&&(r[a]=u[a])}return r}R.exports=o,R.exports.__esModule=!0,R.exports.default=R.exports},20006:function(R){function n(e,P){if(e==null)return{};var o={},u=Object.keys(e),_,r;for(r=0;r<u.length;r++)_=u[r],!(P.indexOf(_)>=0)&&(o[_]=e[_]);return o}R.exports=n,R.exports.__esModule=!0,R.exports.default=R.exports}}]);