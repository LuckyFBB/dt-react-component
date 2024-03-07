"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{34170:function(D,t,e){e.r(t);var u=e(86516),l=e.n(u),s=e(79685),m=e(72490),n=e(63342);t.default=function(){var d=(0,s.useState)(""),r=l()(d,2),_=r[0],a=r[1];return(0,s.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(o){return o.text()}).then(a).catch(function(o){a(o.message)})},[]),(0,n.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{value:_})})}},85198:function(D,t,e){e.r(t);var u=e(86516),l=e.n(u),s=e(79685),m=e(72490),n=e(63342),d=`
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
`;t.default=function(){var r=(0,s.useState)(""),_=l()(r,2),a=_[0],o=_[1];return(0,s.useEffect)(function(){o(d)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{dark:!0,value:a})})}},10804:function(D,t,e){e.r(t);var u=e(86516),l=e.n(u),s=e(79685),m=e(72490),n=e(63342),d=`
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
`;t.default=function(){var r=(0,s.useState)(""),_=l()(r,2),a=_[0],o=_[1];return(0,s.useEffect)(function(){o(d)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{value:a})})}},72490:function(D,t,e){e.d(t,{Z:function(){return y}});var u=e(79685),l=e(68591),s=e.n(l),m=e(37664),n=e.n(m),d=e(94306),r=e.n(d),_=e(37203),a=e.n(_),o=e(45206),v=r();v.registerLanguage("sql",a());function O(){return{type:"output",filter:function(f){return n().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(p,g,c,h){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],M=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?M+v.highlight(g,{language:i}).value+h:M+v.highlightAuto(g).value+h},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var P=e(63342);function y(E){var f=E.value,p=f===void 0?"":f,g=E.className,c=E.dark,h=(0,u.useMemo)(function(){var i=new(n()).Converter({extensions:[O],emoji:!0});return i.makeHtml(p)},[p]);return(0,P.jsx)("div",{className:s()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",g),dangerouslySetInnerHTML:{__html:h}})}}}]);
