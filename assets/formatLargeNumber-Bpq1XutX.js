import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as t}from"./index-BTcSapeD.js";import{M as s}from"./blocks-BKtdt1I2.js";import{P as o}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function i(e){const r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utils/utils-api/formatLargeNumber(格式化大数字)"}),`
`,n.jsx(r.h1,{id:"formatlargenumber",children:"formatLargeNumber"}),`
`,n.jsx(r.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(r.p,{children:"将大数字格式化为更易读的形式，支持自定义单位和格式化配置。"}),`
`,n.jsx(r.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(o,{params:[{name:"num",type:"number",required:!0,description:"要格式化的数字"},{name:"format",type:"object",detailInfo:JSON.stringify({unit:1e4,unitCN:"万"}),required:!1,description:"格式化配置对象"}]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"类型"}),": string"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"描述"}),": 格式化后的字符串"]}),`
`]}),`
`,n.jsx(r.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { formatLargeNumber } from "./utils/utils-api";

// 基础用法
formatLargeNumber(15000);
// 结果: "1万+"

formatLargeNumber(5000);
// 结果: "10000+"

// 自定义配置
formatLargeNumber(1000000, { unit: 1000000, unitCN: "百万" });
// 结果: "1百万+"

formatLargeNumber(500000, { unit: 1000000, unitCN: "百万" });
// 结果: "1000000+"

// 处理边界情况
formatLargeNumber(0);
// 结果: "10000+"

formatLargeNumber(9999);
// 结果: "10000+"
`})}),`
`,n.jsx(r.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"✅ 自动处理小于单位的数字"}),`
`,n.jsx(r.li,{children:"✅ 支持自定义单位和标识"}),`
`,n.jsx(r.li,{children:"✅ 向下取整处理"}),`
`,n.jsx(r.li,{children:'✅ 自动添加 "+" 后缀'}),`
`]})]})}function x(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{x as default};
