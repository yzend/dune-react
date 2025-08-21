import{j as r}from"./jsx-runtime-CUUhBk1I.js";import{r as i}from"./iframe-xOBi1KNm.js";/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,s)=>s?s.toUpperCase():a.toLowerCase()),l=t=>{const e=f(t);return e.charAt(0).toUpperCase()+e.slice(1)},d=(...t)=>t.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim(),j=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:o="",children:n,iconNode:h,...c},m)=>i.createElement("svg",{ref:m,...y,width:e,height:e,stroke:t,strokeWidth:s?Number(a)*24/Number(e):a,className:d("lucide",o),...!n&&!j(c)&&{"aria-hidden":"true"},...c},[...h.map(([p,u])=>i.createElement(p,u)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(t,e)=>{const a=i.forwardRef(({className:s,...o},n)=>i.createElement(w,{ref:n,iconNode:e,className:d(`lucide-${x(l(t))}`,`lucide-${t}`,s),...o}));return a.displayName=l(t),a};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],g=C("info",b),v=({params:t})=>{const[e,a]=i.useState(null);return r.jsx("div",{className:"params-table-container",children:r.jsxs("table",{className:"params-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"必填"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:t.map((s,o)=>r.jsxs("tr",{children:[r.jsx("td",{children:s.name}),r.jsxs("td",{className:"flex items-center gap-1",children:[s.type,s.detailInfo&&r.jsxs("span",{className:"detail-info",onMouseEnter:()=>a(o),onMouseLeave:()=>a(null),children:[r.jsx(g,{className:"info-icon",size:12}),e===o&&r.jsx("div",{className:"tooltip",children:s.detailInfo})]})]}),r.jsx("td",{children:s.required?"是":"否"}),r.jsx("td",{children:s.description})]},o))})]})})};v.__docgenInfo={description:"",methods:[],displayName:"ParamsTable",props:{params:{required:!0,tsType:{name:"Array",elements:[{name:"Param"}],raw:"Param[]"},description:""}}};export{v as P};
