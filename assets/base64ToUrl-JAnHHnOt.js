import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as i}from"./index-BTcSapeD.js";import{M as l}from"./blocks-BKtdt1I2.js";import{P as t}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function r(s){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Utils/utils-canvas/base64ToUrl(Base64转URL)"}),`
`,n.jsx(e.h1,{id:"base64tourl",children:"base64ToUrl"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"将 Base64 字符串转换为可访问的 URL，结合了 Base64 转 Blob 和 Blob 转 URL 的功能。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(t,{params:[{name:"base64",type:"string",required:!0,description:"Base64 字符串，支持带 MIME 类型头的数据"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": string"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": 生成的 Blob URL"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { base64ToUrl } from "dune-react/utils";

// 从 Canvas 获取 Base64 并生成 URL
const canvas = document.createElement('canvas');
const base64Data = canvas.toDataURL('image/png');
const url = base64ToUrl(base64Data);
console.log(url); // "blob:http://localhost:3000/abc123..."

// 在图片元素中使用
const img = document.createElement('img');
img.src = url;
document.body.appendChild(img);

// 处理服务器返回的 Base64 图片
const serverBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...";
const imageUrl = base64ToUrl(serverBase64);
const previewImg = document.getElementById('preview');
previewImg.src = imageUrl;

// 处理纯 Base64 字符串
const pureBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
const pureUrl = base64ToUrl(pureBase64);
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 一步完成 Base64 到 URL 的转换"}),`
`,n.jsx(e.li,{children:"✅ 自动处理 MIME 类型头"}),`
`,n.jsx(e.li,{children:"✅ 支持所有图片格式"}),`
`,n.jsx(e.li,{children:"⚠️ 需要手动释放内存"}),`
`]}),`
`,n.jsx(e.h3,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"生成的 URL 仅在当前页面有效"}),`
`,n.jsxs(e.li,{children:["建议在不需要时调用 ",n.jsx(e.code,{children:"URL.revokeObjectURL()"})," 释放内存"]}),`
`,n.jsx(e.li,{children:"适用于图片预览、文件下载等场景"}),`
`]})]})}function A(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{A as default};
