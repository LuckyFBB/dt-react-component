"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{34170:function(h,t,e){e.r(t);var a=e(86516),o=e.n(a),s=e(79685),u=e(72490),n=e(63342);t.default=function(){var l=(0,s.useState)(""),r=o()(l,2),_=r[0],m=r[1];return(0,s.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(d){return d.text()}).then(m)},[]),(0,n.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,n.jsx)(u.Z,{value:_})})}},85198:function(h,t,e){e.r(t);var a=e(86516),o=e.n(a),s=e(79685),u=e(72490),n=e(63342),l=`
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
`;t.default=function(){var r=(0,s.useState)(""),_=o()(r,2),m=_[0],d=_[1];return(0,s.useEffect)(function(){d(l)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(u.Z,{dark:!0,value:m})})}},10804:function(h,t,e){e.r(t);var a=e(86516),o=e.n(a),s=e(79685),u=e(72490),n=e(63342),l=`
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
`;t.default=function(){var r=(0,s.useState)(""),_=o()(r,2),m=_[0],d=_[1];return(0,s.useEffect)(function(){d(l)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(u.Z,{value:m})})}},72490:function(h,t,e){e.d(t,{Z:function(){return y}});var a=e(79685),o=e(68591),s=e.n(o),u=e(37664),n=e.n(u),l=e(94306),r=e.n(l),_=e(37203),m=e.n(_),d=e(45206),v=r();v.registerLanguage("sql",m());function O(){return{type:"output",filter:function(f){return n().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(p,g,c,D){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],M=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?M+v.highlight(g,{language:i}).value+D:M+v.highlightAuto(g).value+D},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var P=e(63342);function y(E){var f=E.value,p=f===void 0?"":f,g=E.className,c=E.dark,D=(0,a.useMemo)(function(){var i=new(n()).Converter({extensions:[O],emoji:!0});return i.makeHtml(p)},[p]);return(0,P.jsx)("div",{className:s()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",g),dangerouslySetInnerHTML:{__html:D}})}}}]);
