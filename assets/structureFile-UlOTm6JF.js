import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as i}from"./index-BTcSapeD.js";import{M as s}from"./blocks-BKtdt1I2.js";import{P as o}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function l(t){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utils/utils-canvas/structureFile(Blob转File对象)"}),`
`,n.jsx(e.h1,{id:"structurefile",children:"structureFile"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"将 Blob 对象转换为 File 对象，自动提取文件类型并生成带扩展名的文件名。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(o,{params:[{name:"blobData",type:"Blob",required:!0,description:"要转换的 Blob 数据"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": File"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),': 转换后的 File 对象，文件名为 "tag.',扩展名,'"']}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { structureFile } from "dune-react/utils";

// 从 Canvas 获取 Blob 数据
const canvas = document.createElement('canvas');
canvas.toBlob((blob) => {
  if (blob) {
    const file = structureFile(blob);
    console.log(file.name); // "tag.png"
    console.log(file.type); // "image/png"
  }
}, 'image/png');

// 处理其他类型的 Blob
const textBlob = new Blob(['Hello World'], { type: 'text/plain' });
const textFile = structureFile(textBlob);
console.log(textFile.name); // "tag.txt"
console.log(textFile.type); // "text/plain"
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 自动提取文件扩展名"}),`
`,n.jsx(e.li,{children:"✅ 保持原始 MIME 类型"}),`
`,n.jsx(e.li,{children:"✅ 生成标准文件名格式"}),`
`,n.jsx(e.li,{children:"✅ 支持所有 Blob 类型"}),`
`]})]})}function m(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}export{m as default};
