(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{233:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(9),a=(t(0),t(347)),i={title:"Smart query conditions"},c={id:"version-2.7/query-conditions",title:"Smart query conditions",description:"When you want to make complex queries, you can easily end up with a lot of boilerplate code",source:"@site/versioned_docs/version-2.7/query-conditions.md",permalink:"/docs/2.7/query-conditions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/query-conditions.md",version:"2.7",sidebar:"version-2.7/docs",previous:{title:"Smart Nested Populate",permalink:"/docs/2.7/nested-populate"},next:{title:"Using QueryBuilder",permalink:"/docs/2.7/query-builder"}},l=[],u={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you want to make complex queries, you can easily end up with a lot of boilerplate code\nfull of curly brackets:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res = await orm.em.find(Author, { $and: [\n  { id: { $in: [1, 2, 7] }, },\n  { id: { $nin: [3, 4] }, },\n  { id: { $gt: 5 }, },\n  { id: { $lt: 10 }, },\n  { id: { $gte: 7 }, },\n  { id: { $lte: 8 }, },\n  { id: { $ne: 9 }, },\n] });\n")),Object(a.b)("p",null,"For AND condition with single field, you can also do this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res = await orm.em.find(Author, { \n  id: { \n    $in: [1, 2, 7],\n    $nin: [3, 4],\n    $gt: 5,\n    $lt: 10,\n    $gte: 7,\n    $lte: 8,\n    $ne: 9,\n  },\n});\n")),Object(a.b)("p",null,"Another way to do this by including the operator in your keys:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res = await orm.em.find(Author, { $and: [\n  { 'id:in': [1, 2, 7] },\n  { 'id:nin': [3, 4] },\n  { 'id:gt': 5 },\n  { 'id:lt': 10 },\n  { 'id:gte': 7 },\n  { 'id:lte': 8 },\n  { 'id:ne': 9 },\n] });\n")),Object(a.b)("p",null,"For comparison operators, you can also use their mathematical symbols:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res = await orm.em.find(Author, { $and: [\n  { 'id >': 5 },\n  { 'id <': 10 },\n  { 'id >=': 7 },\n  { 'id <=': 8 },\n  { 'id !=': 9 },\n] });\n")),Object(a.b)("p",null,"There is also shortcut for ",Object(a.b)("inlineCode",{parentName:"p"},"$in")," - simply provide array as value and it\nwill be converted automatically:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res = await orm.em.find(Author, { favouriteBook: [1, 2, 7] });\n")),Object(a.b)("p",null,"For primary key lookup, you can provide the array directly to ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager.find()"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res = await orm.em.find(Author, [1, 2, 7]);\n")))}p.isMDXComponent=!0},347:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(m,c({ref:n},u,{components:t})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);