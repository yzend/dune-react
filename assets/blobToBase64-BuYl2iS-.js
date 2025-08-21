import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as i}from"./index-BTcSapeD.js";import{M as t}from"./blocks-BKtdt1I2.js";import{P as l}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function o(s){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Utils/utils-canvas/blobToBase64(Blob转Base64)"}),`
`,n.jsx(e.h1,{id:"blobtobase64",children:"blobToBase64"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"将 Blob 对象转换为 Base64 字符串，返回一个 Promise，支持异步处理大文件。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(l,{params:[{name:"blob",type:"Blob",required:!0,description:"要转换的 Blob 对象"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": Promise<string>"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": 返回 Base64 字符串的 Promise"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { blobToBase64 } from "dune-react/utils";

// 处理文件上传并转换为 Base64
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (file) {
    try {
      const base64 = await blobToBase64(file);
      console.log(base64); // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..."

      // 发送到服务器
      await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64 }),
      });
    } catch (error) {
      console.error("转换失败:", error);
    }
  }
});

// 处理 Canvas 导出的 Blob
const canvas = document.createElement("canvas");
canvas.toBlob(async (blob) => {
  if (blob) {
    const base64 = await blobToBase64(blob);
    // 保存到本地存储
    localStorage.setItem("canvas-image", base64);
  }
}, "image/png");

// 处理网络请求返回的 Blob
fetch("/api/image")
  .then((response) => response.blob())
  .then(async (blob) => {
    const base64 = await blobToBase64(blob);
    const img = document.createElement("img");
    img.src = base64;
    document.body.appendChild(img);
  });
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 异步处理，不阻塞主线程"}),`
`,n.jsx(e.li,{children:"✅ 支持大文件转换"}),`
`,n.jsx(e.li,{children:"✅ 自动生成 data URL 格式"}),`
`,n.jsx(e.li,{children:"✅ 错误处理机制"}),`
`]}),`
`,n.jsx(e.h3,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"大文件转换可能需要较长时间"}),`
`,n.jsx(e.li,{children:"建议在 Web Worker 中处理超大文件"}),`
`,n.jsx(e.li,{children:"生成的 Base64 字符串会比原文件大约 33%"}),`
`]})]})}function p(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{p as default};
