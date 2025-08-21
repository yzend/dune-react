import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as o}from"./index-BTcSapeD.js";import{M as i}from"./blocks-BKtdt1I2.js";import{P as l}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function a(s){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Utils/utils-canvas/convertBase64ToBlob(Base64转Blob)"}),`
`,n.jsx(e.h1,{id:"convertbase64toblob",children:"convertBase64ToBlob"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"将 Base64 字符串转换为 Blob 对象，支持带 MIME 类型头的完整 Base64 数据。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(l,{params:[{name:"base64",type:"string",required:!0,description:"Base64 字符串，支持带 MIME 类型头的数据"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": Blob"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": 转换后的 Blob 对象"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { convertBase64ToBlob } from "dune-react/utils";

// 处理带 MIME 类型头的 Base64
const base64WithHeader =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
const blob = convertBase64ToBlob(base64WithHeader);
console.log(blob.type); // "image/png"
console.log(blob.size); // 文件大小

// 处理纯 Base64 字符串（需要手动指定类型）
const pureBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
const blob2 = convertBase64ToBlob(pureBase64);
// 注意：纯 Base64 可能无法正确识别类型

// 从 Canvas 获取 Base64 并转换
const canvas = document.createElement("canvas");
const base64Data = canvas.toDataURL("image/jpeg", 0.8);
const imageBlob = convertBase64ToBlob(base64Data);
console.log(imageBlob.type); // "image/jpeg"
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 自动解析 MIME 类型头"}),`
`,n.jsx(e.li,{children:"✅ 支持完整的 data URL 格式"}),`
`,n.jsx(e.li,{children:"✅ 处理纯 Base64 字符串"}),`
`,n.jsx(e.li,{children:"✅ 保持原始文件类型信息"}),`
`]}),`
`,n.jsx(e.h3,{id:"支持的格式",children:"支持的格式"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"data:image/png;base64,<data>"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"data:image/jpeg;base64,<data>"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"data:application/pdf;base64,<data>"})}),`
`,n.jsx(e.li,{children:"纯 Base64 字符串（类型可能无法正确识别）"}),`
`]})]})}function g(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(a,{...s})}):a(s)}export{g as default};
