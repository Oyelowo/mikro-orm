(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(347)),c={title:"Schema Generator"},i={id:"version-3.1/schema-generator",title:"Schema Generator",description:"To generate schema from your entity metadata, you can use `SchemaGenerator` helper. ",source:"@site/versioned_docs/version-3.1/schema-generator.md",permalink:"/docs/3.1/schema-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.1/schema-generator.md",version:"3.1",sidebar:"version-3.1/docs",previous:{title:"Debugging",permalink:"/docs/3.1/debugging"},next:{title:"Entity Generator",permalink:"/docs/3.1/entity-generator"}},p=[],u={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To generate schema from your entity metadata, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGenerator")," helper. "),Object(o.b)("p",null,"You can use it via CLI: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx mikro-orm schema:create --dump   # Dumps create schema SQL\nnpx mikro-orm schema:update --dump   # Dumps update schema SQL\nnpx mikro-orm schema:drop --dump     # Dumps drop schema SQL\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"--run")," flag to fire all queries, but be careful as it might break your\ndatabase. Be sure to always check the generated SQL first before executing. Do not use\n",Object(o.b)("inlineCode",{parentName:"p"},"--run")," flag in production! ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema:create")," will automatically create the database if it does not exist. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema:drop")," will by default drop all database tables. You can use ",Object(o.b)("inlineCode",{parentName:"p"},"--drop-db")," flag to drop\nthe whole database instead. "),Object(o.b)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"./create-schema.ts"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { MikroORM } from 'mikro-orm';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getSchemaGenerator();\n\n  const dropDump = await generator.getDropSchemaSQL();\n  console.log(dropDump);\n\n  const createDump = await generator.getCreateSchemaSQL();\n  console.log(createDump);\n\n  const updateDump = await generator.getUpdateSchemaSQL();\n  console.log(updateDump);\n\n  // there is also `generate()` method that returns drop + create queries\n  const dropAndCreateDump = await generator.generate();\n  console.log(dropAndCreateDump);\n\n  // or you can run those queries directly, but be sure to check them first!\n  await generator.dropSchema();\n  await generator.createSchema();\n  await generator.updateSchema();\n\n  await orm.close(true);\n})();\n")),Object(o.b)("p",null,"Then run this script via ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(o.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ ts-node create-schema\n")))}s.isMDXComponent=!0},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,d=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return n?a.a.createElement(d,i({ref:t},u,{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);