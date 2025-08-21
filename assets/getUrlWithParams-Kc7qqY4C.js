import{j as e}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as s}from"./index-BTcSapeD.js";import{M as i}from"./blocks-BKtdt1I2.js";import{P as a}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function t(r){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utils/utils-api/getUrlWithParams(获取带参数的URL)"}),`
`,e.jsx(n.h1,{id:"geturlwithparams",children:"getUrlWithParams"}),`
`,e.jsx(n.h3,{id:"功能描述",children:"功能描述"}),`
`,e.jsx(n.p,{children:"将对象转换为 URL 参数，支持处理普通参数和数组参数，自动过滤空值。"}),`
`,e.jsx(n.h3,{id:"参数说明",children:"参数说明"}),`
`,e.jsx(a,{params:[{name:"url",type:"string",required:!0,description:"基础 URL"},{name:"params",type:"Record<string, any>",required:!0,description:"参数对象，支持普通参数和数组参数"}]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"类型"}),": string"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"描述"}),": 带参数的完整 URL"]}),`
`]}),`
`,e.jsx(n.h3,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getUrlWithParams } from "dune-react/utils";

// 基础用法
const url = getUrlWithParams("https://api.example.com/users", {
  page: 1,
  limit: 10,
  search: "john",
});
// 结果: https://api.example.com/users?page=1&limit=10&search=john

// 处理数组参数
const urlWithArray = getUrlWithParams("https://api.example.com/products", {
  categories: ["electronics", "books"],
  tags: ["new", "featured"],
});
// 结果: https://api.example.com/products?categories=electronics&categories=books&tags=new&tags=featured

// 自动过滤空值
const urlWithEmpty = getUrlWithParams("https://api.example.com/search", {
  query: "test",
  filter: "",
  sort: null,
  page: undefined,
});
// 结果: https://api.example.com/search?query=test
`})}),`
`,e.jsx(n.h3,{id:"特性",children:"特性"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ 自动过滤空值（undefined、null、空字符串）"}),`
`,e.jsx(n.li,{children:"✅ 支持数组参数处理"}),`
`,e.jsx(n.li,{children:"✅ 使用 URL API 确保 URL 格式正确"}),`
`,e.jsx(n.li,{children:"✅ 支持相对路径和绝对路径"}),`
`]})]})}function u(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{u as default};
