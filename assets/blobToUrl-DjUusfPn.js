import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as i}from"./index-BTcSapeD.js";import{M as o}from"./blocks-BKtdt1I2.js";import{P as t}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function r(l){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Utils/utils-canvas/blobToUrl(Blob转URL)"}),`
`,n.jsx(e.h1,{id:"blobtourl",children:"blobToUrl"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"将 Blob 对象转换为可访问的 URL，用于在浏览器中显示或下载文件。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(t,{params:[{name:"blobData",type:"Blob",required:!0,description:"要转换的 Blob 数据"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": string"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": 生成的 Blob URL"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { blobToUrl } from "dune-react/utils";

// 从 Canvas 生成图片 URL
const canvas = document.createElement('canvas');
canvas.toBlob((blob) => {
  if (blob) {
    const url = blobToUrl(blob);
    console.log(url); // "blob:http://localhost:3000/abc123..."
    
    // 在 img 标签中使用
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
    
    // 记得在不需要时释放 URL
    // URL.revokeObjectURL(url);
  }
}, 'image/png');

// 处理文件上传预览
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = blobToUrl(file);
    // 用于预览图片或视频
    const preview = document.getElementById('preview');
    preview.src = url;
  }
});
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 生成唯一的 Blob URL"}),`
`,n.jsx(e.li,{children:"✅ 支持所有 Blob 类型"}),`
`,n.jsx(e.li,{children:"✅ 可用于图片、视频、音频等媒体预览"}),`
`,n.jsx(e.li,{children:"⚠️ 需要手动释放内存（URL.revokeObjectURL）"}),`
`]}),`
`,n.jsx(e.h3,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"生成的 URL 仅在当前页面有效"}),`
`,n.jsx(e.li,{children:"页面刷新后 URL 会失效"}),`
`,n.jsxs(e.li,{children:["建议在不需要时调用 ",n.jsx(e.code,{children:"URL.revokeObjectURL()"})," 释放内存"]}),`
`]})]})}function j(l={}){const{wrapper:e}={...i(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(r,{...l})}):r(l)}export{j as default};
