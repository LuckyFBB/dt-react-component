"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[2951],{11957:function(Dn,tn,Z){Z.d(tn,{ZP:function(){return ze}});var Ee=Z(41171),se=Z(50959),Y=Z(7534),z=0,J=(0,Y.Z)();function Te(){var Me;return J?(Me=z,z+=1):Me="TEST_OR_SSR",Me}function ze(Me){var ke=se.useState(),t=(0,Ee.Z)(ke,2),Ne=t[0],we=t[1];return se.useEffect(function(){we("rc_select_".concat(Te()))},[]),Me||Ne}},92951:function(Dn,tn,Z){Z.r(tn),Z.d(tn,{BaseSelect:function(){return Wn},OptGroup:function(){return zn},Option:function(){return jn},default:function(){return no},useBaseProps:function(){return Mn}});var Ee=Z(88028),se=Z(94718),Y=Z(22481),z=Z(2595),J=Z(41171),Te=Z(51282),ze=Z(69947),Me=Z(69009),ke=Z(61838),t=Z(50959),Ne=Z(84875),we=Z.n(Ne),He=Z(39515),rt=Z(3914),y=Z(24655),On=Z(81966),Zn=t.createContext(null);function Mn(){return t.useContext(Zn)}function it(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.useState(!1),a=(0,J.Z)(e,2),o=a[0],i=a[1],r=t.useRef(null),l=function(){window.clearTimeout(r.current)};t.useEffect(function(){return l},[]);var s=function(g,h){l(),r.current=window.setTimeout(function(){i(g),h&&h()},n)};return[o,s,l]}function xn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.useRef(null),a=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(i){(i||e.current===null)&&(e.current=i),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function lt(n,e,a,o){var i=t.useRef(null);i.current={open:e,triggerOpen:a,customizedTrigger:o},t.useEffect(function(){function r(l){var s;if(!((s=i.current)!==null&&s!==void 0&&s.customizedTrigger)){var d=l.target;d.shadowRoot&&l.composed&&(d=l.composedPath()[0]||d),i.current.open&&n().filter(function(g){return g}).every(function(g){return!g.contains(d)&&g!==d})&&i.current.triggerOpen(!1)}}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}var dn=Z(45890),ut=Z(64649),ct=function(e){var a=e.className,o=e.customizeIcon,i=e.customizeIconProps,r=e.onMouseDown,l=e.onClick,s=e.children,d;return typeof o=="function"?d=o(i):d=o,t.createElement("span",{className:a,onMouseDown:function(h){h.preventDefault(),r&&r(h)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:l,"aria-hidden":!0},d!==void 0?d:t.createElement("span",{className:we()(a.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},s))},fn=ct,st=function(e,a){var o,i,r=e.prefixCls,l=e.id,s=e.inputElement,d=e.disabled,g=e.tabIndex,h=e.autoFocus,u=e.autoComplete,v=e.editable,c=e.activeDescendantId,w=e.value,F=e.maxLength,W=e.onKeyDown,O=e.onMouseDown,R=e.onChange,A=e.onPaste,ne=e.onCompositionStart,H=e.onCompositionEnd,C=e.open,_=e.attrs,V=s||t.createElement("input",null),K=V,B=K.ref,q=K.props,oe=q.onKeyDown,G=q.onChange,ee=q.onMouseDown,te=q.onCompositionStart,x=q.onCompositionEnd,T=q.style;return(0,ke.Kp)(!("maxLength"in V.props),"Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."),V=t.cloneElement(V,(0,z.Z)((0,z.Z)((0,z.Z)({type:"search"},q),{},{id:l,ref:(0,On.sQ)(a,B),disabled:d,tabIndex:g,autoComplete:u||"off",autoFocus:h,className:we()("".concat(r,"-selection-search-input"),(o=V)===null||o===void 0||(i=o.props)===null||i===void 0?void 0:i.className),role:"combobox","aria-expanded":C,"aria-haspopup":"listbox","aria-owns":"".concat(l,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(l,"_list"),"aria-activedescendant":c},_),{},{value:v?w:"",maxLength:F,readOnly:!v,unselectable:v?null:"on",style:(0,z.Z)((0,z.Z)({},T),{},{opacity:v?null:0}),onKeyDown:function(N){W(N),oe&&oe(N)},onMouseDown:function(N){O(N),ee&&ee(N)},onChange:function(N){R(N),G&&G(N)},onCompositionStart:function(N){ne(N),te&&te(N)},onCompositionEnd:function(N){H(N),x&&x(N)},onPaste:A})),V},Pn=t.forwardRef(st);Pn.displayName="Input";var Rn=Pn;function Vn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var dt=typeof window!="undefined"&&window.document&&window.document.documentElement,ft=dt;function vt(n){return n!=null}function Tn(n){return["string","number"].includes((0,ze.Z)(n))}function Nn(n){var e=void 0;return n&&(Tn(n.title)?e=n.title.toString():Tn(n.label)&&(e=n.label.toString())),e}function mt(n,e){ft?t.useLayoutEffect(n,e):t.useEffect(n,e)}function pt(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var Ln=function(e){e.preventDefault(),e.stopPropagation()},gt=function(e){var a=e.id,o=e.prefixCls,i=e.values,r=e.open,l=e.searchValue,s=e.autoClearSearchValue,d=e.inputRef,g=e.placeholder,h=e.disabled,u=e.mode,v=e.showSearch,c=e.autoFocus,w=e.autoComplete,F=e.activeDescendantId,W=e.tabIndex,O=e.removeIcon,R=e.maxTagCount,A=e.maxTagTextLength,ne=e.maxTagPlaceholder,H=ne===void 0?function(X){return"+ ".concat(X.length," ...")}:ne,C=e.tagRender,_=e.onToggleOpen,V=e.onRemove,K=e.onInputChange,B=e.onInputPaste,q=e.onInputKeyDown,oe=e.onInputMouseDown,G=e.onInputCompositionStart,ee=e.onInputCompositionEnd,te=t.useRef(null),x=(0,t.useState)(0),T=(0,J.Z)(x,2),P=T[0],N=T[1],ge=(0,t.useState)(!1),de=(0,J.Z)(ge,2),je=de[0],ae=de[1],D="".concat(o,"-selection"),m=r||u==="multiple"&&s===!1||u==="tags"?l:"",M=u==="tags"||u==="multiple"&&s===!1||v&&(r||je);mt(function(){N(te.current.scrollWidth)},[m]);function U(X,ce,le,he,Ce){return t.createElement("span",{className:we()("".concat(D,"-item"),(0,Y.Z)({},"".concat(D,"-item-disabled"),le)),title:Nn(X)},t.createElement("span",{className:"".concat(D,"-item-content")},ce),he&&t.createElement(fn,{className:"".concat(D,"-item-remove"),onMouseDown:Ln,onClick:Ce,customizeIcon:O},"\xD7"))}function L(X,ce,le,he,Ce){var De=function($){Ln($),_(!r)};return t.createElement("span",{onMouseDown:De},C({label:ce,value:X,disabled:le,closable:he,onClose:Ce}))}function k(X){var ce=X.disabled,le=X.label,he=X.value,Ce=!h&&!ce,De=le;if(typeof A=="number"&&(typeof le=="string"||typeof le=="number")){var ve=String(De);ve.length>A&&(De="".concat(ve.slice(0,A),"..."))}var $=function(ye){ye&&ye.stopPropagation(),V(X)};return typeof C=="function"?L(he,De,ce,Ce,$):U(X,De,ce,Ce,$)}function ie(X){var ce=typeof H=="function"?H(X):H;return U({title:ce},ce,!1)}var fe=t.createElement("div",{className:"".concat(D,"-search"),style:{width:P},onFocus:function(){ae(!0)},onBlur:function(){ae(!1)}},t.createElement(Rn,{ref:d,open:r,prefixCls:o,id:a,inputElement:null,disabled:h,autoFocus:c,autoComplete:w,editable:M,activeDescendantId:F,value:m,onKeyDown:q,onMouseDown:oe,onChange:K,onPaste:B,onCompositionStart:G,onCompositionEnd:ee,tabIndex:W,attrs:(0,dn.Z)(e,!0)}),t.createElement("span",{ref:te,className:"".concat(D,"-search-mirror"),"aria-hidden":!0},m,"\xA0")),xe=t.createElement(ut.Z,{prefixCls:"".concat(D,"-overflow"),data:i,renderItem:k,renderRest:ie,suffix:fe,itemKey:pt,maxCount:R});return t.createElement(t.Fragment,null,xe,!i.length&&!m&&t.createElement("span",{className:"".concat(D,"-placeholder")},g))},ht=gt,St=function(e){var a=e.inputElement,o=e.prefixCls,i=e.id,r=e.inputRef,l=e.disabled,s=e.autoFocus,d=e.autoComplete,g=e.activeDescendantId,h=e.mode,u=e.open,v=e.values,c=e.placeholder,w=e.tabIndex,F=e.showSearch,W=e.searchValue,O=e.activeValue,R=e.maxLength,A=e.onInputKeyDown,ne=e.onInputMouseDown,H=e.onInputChange,C=e.onInputPaste,_=e.onInputCompositionStart,V=e.onInputCompositionEnd,K=t.useState(!1),B=(0,J.Z)(K,2),q=B[0],oe=B[1],G=h==="combobox",ee=G||F,te=v[0],x=W||"";G&&O&&!q&&(x=O),t.useEffect(function(){G&&oe(!1)},[G,O]);var T=h!=="combobox"&&!u&&!F?!1:!!x,P=Nn(te),N=function(){if(te)return null;var de=T?{visibility:"hidden"}:void 0;return t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:de},c)};return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(Rn,{ref:r,prefixCls:o,id:i,open:u,inputElement:a,disabled:l,autoFocus:s,autoComplete:d,editable:ee,activeDescendantId:g,value:x,onKeyDown:A,onMouseDown:ne,onChange:function(de){oe(!0),H(de)},onPaste:C,onCompositionStart:_,onCompositionEnd:V,tabIndex:w,attrs:(0,dn.Z)(e,!0),maxLength:G?R:void 0})),!G&&te?t.createElement("span",{className:"".concat(o,"-selection-item"),title:P,style:T?{visibility:"hidden"}:void 0},te.label):null,N())},bt=St;function wt(n){return![y.Z.ESC,y.Z.SHIFT,y.Z.BACKSPACE,y.Z.TAB,y.Z.WIN_KEY,y.Z.ALT,y.Z.META,y.Z.WIN_KEY_RIGHT,y.Z.CTRL,y.Z.SEMICOLON,y.Z.EQUALS,y.Z.CAPS_LOCK,y.Z.CONTEXT_MENU,y.Z.F1,y.Z.F2,y.Z.F3,y.Z.F4,y.Z.F5,y.Z.F6,y.Z.F7,y.Z.F8,y.Z.F9,y.Z.F10,y.Z.F11,y.Z.F12].includes(n)}var Ct=function(e,a){var o=(0,t.useRef)(null),i=(0,t.useRef)(!1),r=e.prefixCls,l=e.open,s=e.mode,d=e.showSearch,g=e.tokenWithEnter,h=e.autoClearSearchValue,u=e.onSearch,v=e.onSearchSubmit,c=e.onToggleOpen,w=e.onInputKeyDown,F=e.domRef;t.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var W=xn(0),O=(0,J.Z)(W,2),R=O[0],A=O[1],ne=function(T){var P=T.which;(P===y.Z.UP||P===y.Z.DOWN)&&T.preventDefault(),w&&w(T),P===y.Z.ENTER&&s==="tags"&&!i.current&&!l&&(v==null||v(T.target.value)),wt(P)&&c(!0)},H=function(){A(!0)},C=(0,t.useRef)(null),_=function(T){u(T,!0,i.current)!==!1&&c(!0)},V=function(){i.current=!0},K=function(T){i.current=!1,s!=="combobox"&&_(T.target.value)},B=function(T){var P=T.target.value;if(g&&C.current&&/[\r\n]/.test(C.current)){var N=C.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");P=P.replace(N,C.current)}C.current=null,_(P)},q=function(T){var P=T.clipboardData,N=P.getData("text");C.current=N},oe=function(T){var P=T.target;if(P!==o.current){var N=document.body.style.msTouchAction!==void 0;N?setTimeout(function(){o.current.focus()}):o.current.focus()}},G=function(T){var P=R();T.target!==o.current&&!P&&s!=="combobox"&&T.preventDefault(),(s!=="combobox"&&(!d||!P)||!l)&&(l&&h!==!1&&u("",!0,!1),c())},ee={inputRef:o,onInputKeyDown:ne,onInputMouseDown:H,onInputChange:B,onInputPaste:q,onInputCompositionStart:V,onInputCompositionEnd:K},te=s==="multiple"||s==="tags"?t.createElement(ht,(0,Ee.Z)({},e,ee)):t.createElement(bt,(0,Ee.Z)({},e,ee));return t.createElement("div",{ref:F,className:"".concat(r,"-selector"),onClick:oe,onMouseDown:G},te)},An=t.forwardRef(Ct);An.displayName="Selector";var yt=An,It=Z(43451),Et=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Dt=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}}}},Ot=function(e,a){var o=e.prefixCls,i=e.disabled,r=e.visible,l=e.children,s=e.popupElement,d=e.containerWidth,g=e.animation,h=e.transitionName,u=e.dropdownStyle,v=e.dropdownClassName,c=e.direction,w=c===void 0?"ltr":c,F=e.placement,W=e.dropdownMatchSelectWidth,O=e.dropdownRender,R=e.dropdownAlign,A=e.getPopupContainer,ne=e.empty,H=e.getTriggerDOMNode,C=e.onPopupVisibleChange,_=e.onPopupMouseEnter,V=(0,Te.Z)(e,Et),K="".concat(o,"-dropdown"),B=s;O&&(B=O(s));var q=t.useMemo(function(){return Dt(W)},[W]),oe=g?"".concat(K,"-").concat(g):h,G=t.useRef(null);t.useImperativeHandle(a,function(){return{getPopupElement:function(){return G.current}}});var ee=(0,z.Z)({minWidth:d},u);return typeof W=="number"?ee.width=W:W&&(ee.width=d),t.createElement(It.Z,(0,Ee.Z)({},V,{showAction:C?["click"]:[],hideAction:C?["click"]:[],popupPlacement:F||(w==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:q,prefixCls:K,popupTransitionName:oe,popup:t.createElement("div",{ref:G,onMouseEnter:_},B),popupAlign:R,popupVisible:r,getPopupContainer:A,popupClassName:we()(v,(0,Y.Z)({},"".concat(K,"-empty"),ne)),popupStyle:ee,getTriggerDOMNode:H,onPopupVisibleChange:C}),l)},Fn=t.forwardRef(Ot);Fn.displayName="SelectTrigger";var Zt=Fn,Mt=Z(70786);function Kn(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a!=null?a:o!==void 0?o:"rc-index-key-".concat(e)}function kn(n,e){var a=n||{},o=a.label,i=a.value,r=a.options;return{label:o||(e?"children":"label"),value:i||"value",options:r||"options"}}function xt(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,i=[],r=kn(a,!1),l=r.label,s=r.value,d=r.options;function g(h,u){h.forEach(function(v){var c=v[l];if(u||!(d in v)){var w=v[s];i.push({key:Kn(v,i.length),groupOption:u,data:v,label:c,value:w})}else{var F=c;F===void 0&&o&&(F=v.label),i.push({key:Kn(v,i.length),group:!0,data:v,label:F}),g(v[d],!0)}})}return g(n,!1),i}function hn(n){var e=(0,z.Z)({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return(0,ke.ZP)(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}function Pt(n,e){if(!e||!e.length)return null;var a=!1;function o(r,l){var s=(0,Mt.Z)(l),d=s[0],g=s.slice(1);if(!d)return[r];var h=r.split(d);return a=a||h.length>1,h.reduce(function(u,v){return[].concat((0,se.Z)(u),(0,se.Z)(o(v,g)))},[]).filter(function(u){return u})}var i=o(n,e);return a?i:null}var Rt=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Vt=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Sn(n){return n==="tags"||n==="multiple"}var Tt=t.forwardRef(function(n,e){var a,o,i=n.id,r=n.prefixCls,l=n.className,s=n.showSearch,d=n.tagRender,g=n.direction,h=n.omitDomProps,u=n.displayValues,v=n.onDisplayValuesChange,c=n.emptyOptions,w=n.notFoundContent,F=w===void 0?"Not Found":w,W=n.onClear,O=n.mode,R=n.disabled,A=n.loading,ne=n.getInputElement,H=n.getRawInputElement,C=n.open,_=n.defaultOpen,V=n.onDropdownVisibleChange,K=n.activeValue,B=n.onActiveValueChange,q=n.activeDescendantId,oe=n.searchValue,G=n.autoClearSearchValue,ee=n.onSearch,te=n.onSearchSplit,x=n.tokenSeparators,T=n.allowClear,P=n.showArrow,N=n.inputIcon,ge=n.clearIcon,de=n.OptionList,je=n.animation,ae=n.transitionName,D=n.dropdownStyle,m=n.dropdownClassName,M=n.dropdownMatchSelectWidth,U=n.dropdownRender,L=n.dropdownAlign,k=n.placement,ie=n.getPopupContainer,fe=n.showAction,xe=fe===void 0?[]:fe,X=n.onFocus,ce=n.onBlur,le=n.onKeyUp,he=n.onKeyDown,Ce=n.onMouseDown,De=(0,Te.Z)(n,Rt),ve=Sn(O),$=(s!==void 0?s:ve)||O==="combobox",We=(0,z.Z)({},De);Vt.forEach(function(I){delete We[I]}),h==null||h.forEach(function(I){delete We[I]});var ye=t.useState(!1),Se=(0,J.Z)(ye,2),Ge=Se[0],qe=Se[1];t.useEffect(function(){qe((0,rt.Z)())},[]);var Le=t.useRef(null),Pe=t.useRef(null),Be=t.useRef(null),Re=t.useRef(null),Oe=t.useRef(null),Cn=it(),on=(0,J.Z)(Cn,3),ln=on[0],Ye=on[1],yn=on[2];t.useImperativeHandle(e,function(){var I,S;return{focus:(I=Re.current)===null||I===void 0?void 0:I.focus,blur:(S=Re.current)===null||S===void 0?void 0:S.blur,scrollTo:function(be){var re;return(re=Oe.current)===null||re===void 0?void 0:re.scrollTo(be)}}});var Ze=t.useMemo(function(){var I;if(O!=="combobox")return oe;var S=(I=u[0])===null||I===void 0?void 0:I.value;return typeof S=="string"||typeof S=="number"?String(S):""},[oe,O,u]),vn=O==="combobox"&&typeof ne=="function"&&ne()||null,Ae=typeof H=="function"&&H(),mn=(0,On.x1)(Pe,Ae==null||(a=Ae.props)===null||a===void 0?void 0:a.ref),pn=(0,Me.Z)(void 0,{defaultValue:_,value:C}),en=(0,J.Z)(pn,2),un=en[0],cn=en[1],ue=un,gn=!F&&c;(R||gn&&ue&&O==="combobox")&&(ue=!1);var Xe=gn?!1:ue,f=t.useCallback(function(I){var S=I!==void 0?I:!ue;R||(cn(S),ue!==S&&(V==null||V(S)))},[R,ue,cn,V]),b=t.useMemo(function(){return(x||[]).some(function(I){return[`
`,`\r
`].includes(I)})},[x]),p=function(S,pe,be){var re=!0,Ie=S;B==null||B(null);var Ve=be?null:Pt(S,x);return O!=="combobox"&&Ve&&(Ie="",te==null||te(Ve),f(!1),re=!1),ee&&Ze!==Ie&&ee(Ie,{source:pe?"typing":"effect"}),re},E=function(S){!S||!S.trim()||ee(S,{source:"submit"})};t.useEffect(function(){!ue&&!ve&&O!=="combobox"&&p("",!1,!1)},[ue]),t.useEffect(function(){un&&R&&cn(!1),R&&Ye(!1)},[R]);var j=xn(),Q=(0,J.Z)(j,2),Ue=Q[0],Fe=Q[1],nn=function(S){var pe=Ue(),be=S.which;if(be===y.Z.ENTER&&(O!=="combobox"&&S.preventDefault(),ue||f(!0)),Fe(!!Ze),be===y.Z.BACKSPACE&&!pe&&ve&&!Ze&&u.length){for(var re=(0,se.Z)(u),Ie=null,Ve=re.length-1;Ve>=0;Ve-=1){var sn=re[Ve];if(!sn.disabled){re.splice(Ve,1),Ie=sn;break}}Ie&&v(re,{type:"remove",values:[Ie]})}for(var Je=arguments.length,rn=new Array(Je>1?Je-1:0),_e=1;_e<Je;_e++)rn[_e-1]=arguments[_e];if(ue&&Oe.current){var at;(at=Oe.current).onKeyDown.apply(at,[S].concat(rn))}he==null||he.apply(void 0,[S].concat(rn))},me=function(S){for(var pe=arguments.length,be=new Array(pe>1?pe-1:0),re=1;re<pe;re++)be[re-1]=arguments[re];if(ue&&Oe.current){var Ie;(Ie=Oe.current).onKeyUp.apply(Ie,[S].concat(be))}le==null||le.apply(void 0,[S].concat(be))},Qe=function(S){var pe=u.filter(function(be){return be!==S});v(pe,{type:"remove",values:[S]})},an=t.useRef(!1),In=function(){Ye(!0),R||(X&&!an.current&&X.apply(void 0,arguments),xe.includes("focus")&&f(!0)),an.current=!0},Qn=function(){Ye(!1,function(){an.current=!1,f(!1)}),!R&&(Ze&&(O==="tags"?ee(Ze,{source:"submit"}):O==="multiple"&&ee("",{source:"blur"})),ce&&ce.apply(void 0,arguments))},Ke=[];t.useEffect(function(){return function(){Ke.forEach(function(I){return clearTimeout(I)}),Ke.splice(0,Ke.length)}},[]);var $e=function(S){var pe,be=S.target,re=(pe=Be.current)===null||pe===void 0?void 0:pe.getPopupElement();if(re&&re.contains(be)){var Ie=setTimeout(function(){var rn=Ke.indexOf(Ie);if(rn!==-1&&Ke.splice(rn,1),yn(),!Ge&&!re.contains(document.activeElement)){var _e;(_e=Re.current)===null||_e===void 0||_e.focus()}});Ke.push(Ie)}for(var Ve=arguments.length,sn=new Array(Ve>1?Ve-1:0),Je=1;Je<Ve;Je++)sn[Je-1]=arguments[Je];Ce==null||Ce.apply(void 0,[S].concat(sn))},to=t.useState(null),Jn=(0,J.Z)(to,2),_n=Jn[0],oo=Jn[1],ao=t.useState({}),ro=(0,J.Z)(ao,2),io=ro[1];function lo(){io({})}(0,He.Z)(function(){if(Xe){var I,S=Math.ceil((I=Le.current)===null||I===void 0?void 0:I.offsetWidth);_n!==S&&!Number.isNaN(S)&&oo(S)}},[Xe]);var qn;Ae&&(qn=function(S){f(S)}),lt(function(){var I;return[Le.current,(I=Be.current)===null||I===void 0?void 0:I.getPopupElement()]},Xe,f,!!Ae);var uo=t.useMemo(function(){return(0,z.Z)((0,z.Z)({},n),{},{notFoundContent:F,open:ue,triggerOpen:Xe,id:i,showSearch:$,multiple:ve,toggleOpen:f})},[n,F,Xe,ue,i,$,ve,f]),et=P!==void 0?P:A||!ve&&O!=="combobox",nt;et&&(nt=t.createElement(fn,{className:we()("".concat(r,"-arrow"),(0,Y.Z)({},"".concat(r,"-arrow-loading"),A)),customizeIcon:N,customizeIconProps:{loading:A,searchValue:Ze,open:ue,focused:ln,showSearch:$}}));var tt,co=function(){var S;W==null||W(),(S=Re.current)===null||S===void 0||S.focus(),v([],{type:"clear",values:u}),p("",!1,!1)};!R&&T&&(u.length||Ze)&&!(O==="combobox"&&Ze==="")&&(tt=t.createElement(fn,{className:"".concat(r,"-clear"),onMouseDown:co,customizeIcon:ge},"\xD7"));var so=t.createElement(de,{ref:Oe}),fo=we()(r,l,(o={},(0,Y.Z)(o,"".concat(r,"-focused"),ln),(0,Y.Z)(o,"".concat(r,"-multiple"),ve),(0,Y.Z)(o,"".concat(r,"-single"),!ve),(0,Y.Z)(o,"".concat(r,"-allow-clear"),T),(0,Y.Z)(o,"".concat(r,"-show-arrow"),et),(0,Y.Z)(o,"".concat(r,"-disabled"),R),(0,Y.Z)(o,"".concat(r,"-loading"),A),(0,Y.Z)(o,"".concat(r,"-open"),ue),(0,Y.Z)(o,"".concat(r,"-customize-input"),vn),(0,Y.Z)(o,"".concat(r,"-show-search"),$),o)),ot=t.createElement(Zt,{ref:Be,disabled:R,prefixCls:r,visible:Xe,popupElement:so,containerWidth:_n,animation:je,transitionName:ae,dropdownStyle:D,dropdownClassName:m,direction:g,dropdownMatchSelectWidth:M,dropdownRender:U,dropdownAlign:L,placement:k,getPopupContainer:ie,empty:c,getTriggerDOMNode:function(){return Pe.current},onPopupVisibleChange:qn,onPopupMouseEnter:lo},Ae?t.cloneElement(Ae,{ref:mn}):t.createElement(yt,(0,Ee.Z)({},n,{domRef:Pe,prefixCls:r,inputElement:vn,ref:Re,id:i,showSearch:$,autoClearSearchValue:G,mode:O,activeDescendantId:q,tagRender:d,values:u,open:ue,onToggleOpen:f,activeValue:K,searchValue:Ze,onSearch:p,onSearchSubmit:E,onRemove:Qe,tokenWithEnter:b}))),En;return Ae?En=ot:En=t.createElement("div",(0,Ee.Z)({className:fo},We,{ref:Le,onMouseDown:$e,onKeyDown:nn,onKeyUp:me,onFocus:In,onBlur:Qn}),ln&&!ue&&t.createElement("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(u.map(function(I){var S=I.label,pe=I.value;return["number","string"].includes((0,ze.Z)(S))?S:pe}).join(", "))),ot,nt,tt),t.createElement(Zn.Provider,{value:uo},En)}),Wn=Tt,Nt=function(n,e){var a=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var r=a.current,l=r.values,s=r.options,d=n.map(function(u){if(u.label===void 0){var v;return(0,z.Z)((0,z.Z)({},u),{},{label:(v=l.get(u.value))===null||v===void 0?void 0:v.label})}return u}),g=new Map,h=new Map;return d.forEach(function(u){g.set(u.value,u),h.set(u.value,e.get(u.value)||s.get(u.value))}),a.current.values=g,a.current.options=h,d},[n,e]),i=t.useCallback(function(r){return e.get(r)||a.current.options.get(r)},[e]);return[o,i]};function bn(n,e){return Vn(n).join("").toUpperCase().includes(e)}var Lt=function(n,e,a,o,i){return t.useMemo(function(){if(!a||o===!1)return n;var r=e.options,l=e.label,s=e.value,d=[],g=typeof o=="function",h=a.toUpperCase(),u=g?o:function(c,w){return i?bn(w[i],h):w[r]?bn(w[l!=="children"?l:"label"],h):bn(w[s],h)},v=g?function(c){return hn(c)}:function(c){return c};return n.forEach(function(c){if(c[r]){var w=u(a,v(c));if(w)d.push(c);else{var F=c[r].filter(function(W){return u(a,v(W))});F.length&&d.push((0,z.Z)((0,z.Z)({},c),{},(0,Y.Z)({},r,F)))}return}u(a,v(c))&&d.push(c)}),d},[n,o,i,a,e])},At=Z(11957),Ft=Z(95912),Kt=["children","value"],kt=["children"];function Wt(n){var e=n,a=e.key,o=e.props,i=o.children,r=o.value,l=(0,Te.Z)(o,Kt);return(0,z.Z)({key:a,value:r!==void 0?r:a,children:i},l)}function Bn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return(0,Ft.Z)(n).map(function(a,o){if(!t.isValidElement(a)||!a.type)return null;var i=a,r=i.type.isSelectOptGroup,l=i.key,s=i.props,d=s.children,g=(0,Te.Z)(s,kt);return e||!r?Wt(a):(0,z.Z)((0,z.Z)({key:"__RC_SELECT_GRP__".concat(l===null?o:l,"__"),label:l},g),{},{options:Bn(d)})}).filter(function(a){return a})}function Bt(n,e,a,o,i){return t.useMemo(function(){var r=n,l=!n;l&&(r=Bn(e));var s=new Map,d=new Map,g=function(v,c,w){w&&typeof w=="string"&&v.set(c[w],c)};function h(u){for(var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=0;c<u.length;c+=1){var w=u[c];!w[a.options]||v?(s.set(w[a.value],w),g(d,w,a.label),g(d,w,o),g(d,w,i)):h(w[a.options],!0)}}return h(r),{options:r,valueOptions:s,labelOptions:d}},[n,e,a,o,i])}function Un(n){var e=t.useRef();e.current=n;var a=t.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var $n=function(){return null};$n.isSelectOptGroup=!0;var zn=$n,Hn=function(){return null};Hn.isSelectOption=!0;var jn=Hn,Ut=Z(42867),$t=Z(50338),zt=Z(7369);function Ht(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var jt=t.createContext(null),Gn=jt,Gt=["disabled","title","children","style","className"];function Yn(n){return typeof n=="string"||typeof n=="number"}var Yt=function(e,a){var o=Mn(),i=o.prefixCls,r=o.id,l=o.open,s=o.multiple,d=o.mode,g=o.searchValue,h=o.toggleOpen,u=o.notFoundContent,v=o.onPopupScroll,c=t.useContext(Gn),w=c.flattenOptions,F=c.onActiveValue,W=c.defaultActiveFirstOption,O=c.onSelect,R=c.menuItemSelectedIcon,A=c.rawValues,ne=c.fieldNames,H=c.virtual,C=c.listHeight,_=c.listItemHeight,V="".concat(i,"-item"),K=(0,$t.Z)(function(){return w},[l,w],function(D,m){return m[0]&&D[1]!==m[1]}),B=t.useRef(null),q=function(m){m.preventDefault()},oe=function(m){B.current&&B.current.scrollTo(typeof m=="number"?{index:m}:m)},G=function(m){for(var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,U=K.length,L=0;L<U;L+=1){var k=(m+L*M+U)%U,ie=K[k],fe=ie.group,xe=ie.data;if(!fe&&!xe.disabled)return k}return-1},ee=t.useState(function(){return G(0)}),te=(0,J.Z)(ee,2),x=te[0],T=te[1],P=function(m){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;T(m);var U={source:M?"keyboard":"mouse"},L=K[m];if(!L){F(null,-1,U);return}F(L.value,m,U)};(0,t.useEffect)(function(){P(W!==!1?G(0):-1)},[K.length,g]);var N=t.useCallback(function(D){return A.has(D)&&d!=="combobox"},[d,(0,se.Z)(A).toString(),A.size]);(0,t.useEffect)(function(){var D=setTimeout(function(){if(!s&&l&&A.size===1){var M=Array.from(A)[0],U=K.findIndex(function(L){var k=L.data;return k.value===M});U!==-1&&(P(U),oe(U))}});if(l){var m;(m=B.current)===null||m===void 0||m.scrollTo(void 0)}return function(){return clearTimeout(D)}},[l,g]);var ge=function(m){m!==void 0&&O(m,{selected:!A.has(m)}),s||h(!1)};if(t.useImperativeHandle(a,function(){return{onKeyDown:function(m){var M=m.which,U=m.ctrlKey;switch(M){case y.Z.N:case y.Z.P:case y.Z.UP:case y.Z.DOWN:{var L=0;if(M===y.Z.UP?L=-1:M===y.Z.DOWN?L=1:Ht()&&U&&(M===y.Z.N?L=1:M===y.Z.P&&(L=-1)),L!==0){var k=G(x+L,L);oe(k),P(k,!0)}break}case y.Z.ENTER:{var ie=K[x];ie&&!ie.data.disabled?ge(ie.value):ge(void 0),l&&m.preventDefault();break}case y.Z.ESC:h(!1),l&&m.stopPropagation()}},onKeyUp:function(){},scrollTo:function(m){oe(m)}}}),K.length===0)return t.createElement("div",{role:"listbox",id:"".concat(r,"_list"),className:"".concat(V,"-empty"),onMouseDown:q},u);var de=Object.keys(ne).map(function(D){return ne[D]}),je=function(m){return m.label},ae=function(m){var M=K[m];if(!M)return null;var U=M.data||{},L=U.value,k=M.group,ie=(0,dn.Z)(U,!0),fe=je(M);return M?t.createElement("div",(0,Ee.Z)({"aria-label":typeof fe=="string"&&!k?fe:null},ie,{key:m,role:k?"presentation":"option",id:"".concat(r,"_list_").concat(m),"aria-selected":N(L)}),L):null};return t.createElement(t.Fragment,null,t.createElement("div",{role:"listbox",id:"".concat(r,"_list"),style:{height:0,width:0,overflow:"hidden"}},ae(x-1),ae(x),ae(x+1)),t.createElement(zt.Z,{itemKey:"key",ref:B,data:K,height:C,itemHeight:_,fullHeight:!1,onMouseDown:q,onScroll:v,virtual:H},function(D,m){var M,U=D.group,L=D.groupOption,k=D.data,ie=D.label,fe=D.value,xe=k.key;if(U){var X,ce=(X=k.title)!==null&&X!==void 0?X:Yn(ie)?ie.toString():void 0;return t.createElement("div",{className:we()(V,"".concat(V,"-group")),title:ce},ie!==void 0?ie:xe)}var le=k.disabled,he=k.title,Ce=k.children,De=k.style,ve=k.className,$=(0,Te.Z)(k,Gt),We=(0,Ut.Z)($,de),ye=N(fe),Se="".concat(V,"-option"),Ge=we()(V,Se,ve,(M={},(0,Y.Z)(M,"".concat(Se,"-grouped"),L),(0,Y.Z)(M,"".concat(Se,"-active"),x===m&&!le),(0,Y.Z)(M,"".concat(Se,"-disabled"),le),(0,Y.Z)(M,"".concat(Se,"-selected"),ye),M)),qe=je(D),Le=!R||typeof R=="function"||ye,Pe=typeof qe=="number"?qe:qe||fe,Be=Yn(Pe)?Pe.toString():void 0;return he!==void 0&&(Be=he),t.createElement("div",(0,Ee.Z)({},(0,dn.Z)(We),{"aria-selected":ye,className:Ge,title:Be,onMouseMove:function(){x===m||le||P(m)},onClick:function(){le||ge(fe)},style:De}),t.createElement("div",{className:"".concat(Se,"-content")},Pe),t.isValidElement(R)||ye,Le&&t.createElement(fn,{className:"".concat(V,"-option-state"),customizeIcon:R,customizeIconProps:{isSelected:ye}},ye?"\u2713":null))}))},Xn=t.forwardRef(Yt);Xn.displayName="OptionList";var Xt=Xn;function vo(n){var e=n.mode,a=n.options,o=n.children,i=n.backfill,r=n.allowClear,l=n.placeholder,s=n.getInputElement,d=n.showSearch,g=n.onSearch,h=n.defaultOpen,u=n.autoFocus,v=n.labelInValue,c=n.value,w=n.inputValue,F=n.optionLabelProp,W=isMultiple(e),O=d!==void 0?d:W||e==="combobox",R=a||convertChildrenToData(o);if(warning(e!=="tags"||R.every(function(C){return!C.disabled}),"Please avoid setting option to disabled in tags mode since user can always type text as tag."),e==="tags"||e==="combobox"){var A=R.some(function(C){return C.options?C.options.some(function(_){return typeof("value"in _?_.value:_.key)=="number"}):typeof("value"in C?C.value:C.key)=="number"});warning(!A,"`value` of Option should not use number type when `mode` is `tags` or `combobox`.")}if(warning(e!=="combobox"||!F,"`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."),warning(e==="combobox"||!i,"`backfill` only works with `combobox` mode."),warning(e==="combobox"||!s,"`getInputElement` only work with `combobox` mode."),noteOnce(e!=="combobox"||!s||!r||!l,"Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."),g&&!O&&e!=="combobox"&&e!=="tags"&&warning(!1,"`onSearch` should work with `showSearch` instead of use alone."),noteOnce(!h||u,"`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."),c!=null){var ne=toArray(c);warning(!v||ne.every(function(C){return _typeof(C)==="object"&&("key"in C||"value"in C)}),"`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"),warning(!W||Array.isArray(c),"`value` should be array when `mode` is `multiple` or `tags`")}if(o){var H=null;toNodeArray(o).some(function(C){if(!React.isValidElement(C)||!C.type)return!1;var _=C,V=_.type;if(V.isSelectOption)return!1;if(V.isSelectOptGroup){var K=toNodeArray(C.props.children).every(function(B){return!React.isValidElement(B)||!C.type||B.type.isSelectOption?!0:(H=B.type,!1)});return!K}return H=V,!0}),H&&warning(!1,"`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(H.displayName||H.name||H,"`.")),warning(w===void 0,"`inputValue` is deprecated, please use `searchValue` instead.")}}function mo(n,e){if(n){var a=function o(i){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=0;l<i.length;l++){var s=i[l];if(s[e==null?void 0:e.value]===null)return warning(!1,"`value` in Select options should not be `null`."),!0;if(!r&&Array.isArray(s[e==null?void 0:e.options])&&o(s[e==null?void 0:e.options],!0))break}};a(n)}}var po=null,Qt=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],Jt=["inputValue"];function _t(n){return!n||(0,ze.Z)(n)!=="object"}var qt=t.forwardRef(function(n,e){var a=n.id,o=n.mode,i=n.prefixCls,r=i===void 0?"rc-select":i,l=n.backfill,s=n.fieldNames,d=n.inputValue,g=n.searchValue,h=n.onSearch,u=n.autoClearSearchValue,v=u===void 0?!0:u,c=n.onSelect,w=n.onDeselect,F=n.dropdownMatchSelectWidth,W=F===void 0?!0:F,O=n.filterOption,R=n.filterSort,A=n.optionFilterProp,ne=n.optionLabelProp,H=n.options,C=n.children,_=n.defaultActiveFirstOption,V=n.menuItemSelectedIcon,K=n.virtual,B=n.listHeight,q=B===void 0?200:B,oe=n.listItemHeight,G=oe===void 0?20:oe,ee=n.value,te=n.defaultValue,x=n.labelInValue,T=n.onChange,P=(0,Te.Z)(n,Qt),N=(0,At.ZP)(a),ge=Sn(o),de=!!(!H&&C),je=t.useMemo(function(){return O===void 0&&o==="combobox"?!1:O},[O,o]),ae=t.useMemo(function(){return kn(s,de)},[JSON.stringify(s),de]),D=(0,Me.Z)("",{value:g!==void 0?g:d,postState:function(b){return b||""}}),m=(0,J.Z)(D,2),M=m[0],U=m[1],L=Bt(H,C,ae,A,ne),k=L.valueOptions,ie=L.labelOptions,fe=L.options,xe=t.useCallback(function(f){var b=Vn(f);return b.map(function(p){var E,j,Q,Ue,Fe;if(_t(p))E=p;else{var nn;Q=p.key,j=p.label,E=(nn=p.value)!==null&&nn!==void 0?nn:Q}var me=k.get(E);if(me){var Qe;if(j===void 0&&(j=me==null?void 0:me[ne||ae.label]),Q===void 0&&(Q=(Qe=me==null?void 0:me.key)!==null&&Qe!==void 0?Qe:E),Ue=me==null?void 0:me.disabled,Fe=me==null?void 0:me.title,!1)var an}return{label:j,value:E,key:Q,disabled:Ue,title:Fe}})},[ae,ne,k]),X=(0,Me.Z)(te,{value:ee}),ce=(0,J.Z)(X,2),le=ce[0],he=ce[1],Ce=t.useMemo(function(){var f,b=xe(le);return o==="combobox"&&!((f=b[0])!==null&&f!==void 0&&f.value)?[]:b},[le,xe,o]),De=Nt(Ce,k),ve=(0,J.Z)(De,2),$=ve[0],We=ve[1],ye=t.useMemo(function(){if(!o&&$.length===1){var f=$[0];if(f.value===null&&(f.label===null||f.label===void 0))return[]}return $.map(function(b){var p;return(0,z.Z)((0,z.Z)({},b),{},{label:(p=b.label)!==null&&p!==void 0?p:b.value})})},[o,$]),Se=t.useMemo(function(){return new Set($.map(function(f){return f.value}))},[$]);t.useEffect(function(){if(o==="combobox"){var f,b=(f=$[0])===null||f===void 0?void 0:f.value;U(vt(b)?String(b):"")}},[$]);var Ge=Un(function(f,b){var p,E=b!=null?b:f;return p={},(0,Y.Z)(p,ae.value,f),(0,Y.Z)(p,ae.label,E),p}),qe=t.useMemo(function(){if(o!=="tags")return fe;var f=(0,se.Z)(fe),b=function(E){return k.has(E)};return(0,se.Z)($).sort(function(p,E){return p.value<E.value?-1:1}).forEach(function(p){var E=p.value;b(E)||f.push(Ge(E,p.label))}),f},[Ge,fe,k,$,o]),Le=Lt(qe,ae,M,je,A),Pe=t.useMemo(function(){return o!=="tags"||!M||Le.some(function(f){return f[A||"value"]===M})?Le:[Ge(M)].concat((0,se.Z)(Le))},[Ge,A,o,Le,M]),Be=t.useMemo(function(){return R?(0,se.Z)(Pe).sort(function(f,b){return R(f,b)}):Pe},[Pe,R]),Re=t.useMemo(function(){return xt(Be,{fieldNames:ae,childrenAsData:de})},[Be,ae,de]),Oe=function(b){var p=xe(b);if(he(p),T&&(p.length!==$.length||p.some(function(Q,Ue){var Fe;return((Fe=$[Ue])===null||Fe===void 0?void 0:Fe.value)!==(Q==null?void 0:Q.value)}))){var E=x?p:p.map(function(Q){return Q.value}),j=p.map(function(Q){return hn(We(Q.value))});T(ge?E:E[0],ge?j:j[0])}},Cn=t.useState(null),on=(0,J.Z)(Cn,2),ln=on[0],Ye=on[1],yn=t.useState(0),Ze=(0,J.Z)(yn,2),vn=Ze[0],Ae=Ze[1],mn=_!==void 0?_:o!=="combobox",pn=t.useCallback(function(f,b){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},E=p.source,j=E===void 0?"keyboard":E;Ae(b),l&&o==="combobox"&&f!==null&&j==="keyboard"&&Ye(String(f))},[l,o]),en=function(b,p,E){var j=function(){var Ke,$e=We(b);return[x?{label:$e==null?void 0:$e[ae.label],value:b,key:(Ke=$e==null?void 0:$e.key)!==null&&Ke!==void 0?Ke:b}:b,hn($e)]};if(p&&c){var Q=j(),Ue=(0,J.Z)(Q,2),Fe=Ue[0],nn=Ue[1];c(Fe,nn)}else if(!p&&w&&E!=="clear"){var me=j(),Qe=(0,J.Z)(me,2),an=Qe[0],In=Qe[1];w(an,In)}},un=Un(function(f,b){var p,E=ge?b.selected:!0;E?p=ge?[].concat((0,se.Z)($),[f]):[f]:p=$.filter(function(j){return j.value!==f}),Oe(p),en(f,E),o==="combobox"?Ye(""):(!Sn||v)&&(U(""),Ye(""))}),cn=function(b,p){Oe(b);var E=p.type,j=p.values;(E==="remove"||E==="clear")&&j.forEach(function(Q){en(Q.value,!1,E)})},ue=function(b,p){if(U(b),Ye(null),p.source==="submit"){var E=(b||"").trim();if(E){var j=Array.from(new Set([].concat((0,se.Z)(Se),[E])));Oe(j),en(E,!0),U("")}return}p.source!=="blur"&&(o==="combobox"&&Oe(b),h==null||h(b))},gn=function(b){var p=b;o!=="tags"&&(p=b.map(function(j){var Q=ie.get(j);return Q==null?void 0:Q.value}).filter(function(j){return j!==void 0}));var E=Array.from(new Set([].concat((0,se.Z)(Se),(0,se.Z)(p))));Oe(E),E.forEach(function(j){en(j,!0)})},Xe=t.useMemo(function(){var f=K!==!1&&W!==!1;return(0,z.Z)((0,z.Z)({},L),{},{flattenOptions:Re,onActiveValue:pn,defaultActiveFirstOption:mn,onSelect:un,menuItemSelectedIcon:V,rawValues:Se,fieldNames:ae,virtual:f,listHeight:q,listItemHeight:G,childrenAsData:de})},[L,Re,pn,mn,un,V,Se,ae,K,W,q,G,de]);return t.createElement(Gn.Provider,{value:Xe},t.createElement(Wn,(0,Ee.Z)({},P,{id:N,prefixCls:r,ref:e,omitDomProps:Jt,mode:o,displayValues:ye,onDisplayValuesChange:cn,searchValue:M,onSearch:ue,autoClearSearchValue:v,onSearchSplit:gn,dropdownMatchSelectWidth:W,OptionList:Xt,emptyOptions:!Re.length,activeValue:ln,activeDescendantId:"".concat(N,"_list_").concat(vn)})))}),wn=qt;wn.Option=jn,wn.OptGroup=zn;var eo=wn,no=eo},45890:function(Dn,tn,Z){Z.d(tn,{Z:function(){return Me}});var Ee=Z(2595),se=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,Y=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,z="".concat(se," ").concat(Y).split(/[\s\n]+/),J="aria-",Te="data-";function ze(ke,t){return ke.indexOf(t)===0}function Me(ke){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,Ne;t===!1?Ne={aria:!0,data:!0,attr:!0}:t===!0?Ne={aria:!0}:Ne=(0,Ee.Z)({},t);var we={};return Object.keys(ke).forEach(function(He){(Ne.aria&&(He==="role"||ze(He,J))||Ne.data&&ze(He,Te)||Ne.attr&&z.includes(He))&&(we[He]=ke[He])}),we}}}]);