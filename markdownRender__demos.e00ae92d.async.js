"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{34170:function(g,n,e){e.r(n);var l=e(86516),u=e.n(l),s=e(79685),m=e(72490),t=e(63342);n.default=function(){var d=(0,s.useState)(""),r=u()(d,2),_=r[0],o=r[1];return(0,s.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(a){return a.text()}).then(o).catch(function(a){o(a.message)})},[]),(0,t.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{value:_})})}},85198:function(g,n,e){e.r(n);var l=e(86516),u=e.n(l),s=e(79685),m=e(72490),t=e(63342),d=`
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
`;n.default=function(){var r=(0,s.useState)(""),_=u()(r,2),o=_[0],a=_[1];return(0,s.useEffect)(function(){a(d)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{dark:!0,value:o})})}},10804:function(g,n,e){e.r(n);var l=e(86516),u=e.n(l),s=e(79685),m=e(72490),t=e(63342),d=`
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
`;n.default=function(){var r=(0,s.useState)(""),_=u()(r,2),o=_[0],a=_[1];return(0,s.useEffect)(function(){a(d)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{value:o})})}},72490:function(g,n,e){e.d(n,{Z:function(){return y}});var l=e(79685),u=e(68591),s=e.n(u),m=e(37664),t=e.n(m),d=e(94306),r=e.n(d),_=e(37203),o=e.n(_),a=e(45206),v=r();v.registerLanguage("sql",o());function O(){return{type:"output",filter:function(f){return t().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(h,D,c,p){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],M=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?M+v.highlight(D,{language:i}).value+p:M+v.highlightAuto(D).value+p},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var P=e(63342);function y(E){var f=E.value,h=f===void 0?"":f,D=E.className,c=E.dark,p=(0,l.useMemo)(function(){var i=new(t()).Converter({extensions:[O],emoji:!0});return i.makeHtml(h)},[h]);return(0,P.jsx)("div",{className:s()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",D),dangerouslySetInnerHTML:{__html:p}})}}}]);
