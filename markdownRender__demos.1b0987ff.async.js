"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{84442:function(p,n,e){e.r(n);var r=e(54306),u=e.n(r),s=e(50959),m=e(60448),t=e(11527);n.default=function(){var d=(0,s.useState)(""),_=u()(d,2),a=_[0],o=_[1];return(0,s.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(l){return l.text()}).then(o).catch(function(l){o(l.message)})},[]),(0,t.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{value:a})})}},26777:function(p,n,e){e.r(n);var r=e(54306),u=e.n(r),s=e(50959),m=e(60448),t=e(11527),d=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;n.default=function(){var _=(0,s.useState)(""),a=u()(_,2),o=a[0],l=a[1];return(0,s.useEffect)(function(){l(d)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{dark:!0,value:o})})}},52547:function(p,n,e){e.r(n);var r=e(54306),u=e.n(r),s=e(50959),m=e(60448),t=e(11527),d=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;n.default=function(){var _=(0,s.useState)(""),a=u()(_,2),o=a[0],l=a[1];return(0,s.useEffect)(function(){l(d)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{value:o})})}},60448:function(p,n,e){e.d(n,{Z:function(){return B}});var r=e(50959),u=e(84875),s=e.n(u),m=e(26132),t=e.n(m),d=e(88467),_=e.n(d),a=e(74883),o=e.n(a),l=e(55394),i=_();i.registerLanguage("sql",o());function g(){return{type:"output",filter:function(f){return t().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(O,D,v,h){var E=(v.match(/class=\"([^ \"]+)/)||[])[1],M=v.slice(0,18)+"hljs "+v.slice(18);return E&&i.getLanguage(E)?M+i.highlight(D,{language:E}).value+h:M+i.highlightAuto(D).value+h},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var P=e(11527);function B(c){var f=c.value,O=f===void 0?"":f,D=c.className,v=c.style,h=c.dark,E=(0,r.useMemo)(function(){var M=new(t()).Converter({extensions:[g],emoji:!0});return M.makeHtml(O)},[O]);return(0,P.jsx)("div",{className:s()("dtc-markdown-render-body",h?"dtc-vs-dark":"dtc-vs",D),style:v,dangerouslySetInnerHTML:{__html:E}})}}}]);
