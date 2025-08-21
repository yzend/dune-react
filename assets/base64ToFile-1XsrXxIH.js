import{j as e}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as l}from"./index-BTcSapeD.js";import{M as a}from"./blocks-BKtdt1I2.js";import{P as o}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function i(s){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Utils/utils-canvas/base64ToFile(Base64转File)"}),`
`,e.jsx(n.h1,{id:"base64tofile",children:"base64ToFile"}),`
`,e.jsx(n.h3,{id:"功能描述",children:"功能描述"}),`
`,e.jsx(n.p,{children:"将 Base64 字符串转换为 File 对象，结合了 Base64 转 Blob 和 Blob 转 File 的功能。"}),`
`,e.jsx(n.h3,{id:"参数说明",children:"参数说明"}),`
`,e.jsx(o,{params:[{name:"base64",type:"string",required:!0,description:"Base64 字符串，支持带 MIME 类型头的数据"}]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"类型"}),": File"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"描述"}),': 转换后的 File 对象，文件名为 "tag.{扩展名}"']}),`
`]}),`
`,e.jsx(n.h3,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { base64ToFile } from "dune-react/utils";

// 从 Canvas 获取 Base64 并转换为 File
const canvas = document.createElement("canvas");
const base64Data = canvas.toDataURL("image/png");
const file = base64ToFile(base64Data);
console.log(file.name); // "tag.png"
console.log(file.type); // "image/png"
console.log(file.size); // 文件大小

// 用于文件上传
const formData = new FormData();
formData.append("image", file);

// 处理服务器返回的 Base64 图片
const serverBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...";
const imageFile = base64ToFile(serverBase64);
console.log(imageFile.name); // "tag.jpg"

// 处理 PDF 文件
const pdfBase64 = "data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsO...";
const pdfFile = base64ToFile(pdfBase64);
console.log(pdfFile.name); // "tag.pdf"
console.log(pdfFile.type); // "application/pdf"
`})}),`
`,e.jsx(n.h3,{id:"特性",children:"特性"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ 一步完成 Base64 到 File 的转换"}),`
`,e.jsx(n.li,{children:"✅ 自动提取文件扩展名"}),`
`,e.jsx(n.li,{children:"✅ 保持原始 MIME 类型"}),`
`,e.jsx(n.li,{children:"✅ 支持所有文件类型"}),`
`]}),`
`,e.jsx(n.h3,{id:"应用场景",children:"应用场景"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"图片上传前的格式转换"}),`
`,e.jsx(n.li,{children:"服务器数据本地化处理"}),`
`,e.jsx(n.li,{children:"文件下载功能实现"}),`
`,e.jsx(n.li,{children:"Canvas 导出为文件"}),`
`]})]})}function j(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
