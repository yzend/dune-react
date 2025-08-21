import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as i}from"./index-BTcSapeD.js";import{M as r}from"./blocks-BKtdt1I2.js";import{P as l}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function t(s){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Utils/utils-time/getTimestamp(获取时间戳)"}),`
`,n.jsx(e.h1,{id:"gettimestamp",children:"getTimestamp"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"获取当前时间的 Unix 时间戳（秒级），返回从 1970 年 1 月 1 日 00:00:00 UTC 到现在的秒数。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(l,{params:[]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": number"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": Unix 时间戳（秒级）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getTimestamp } from "dune-react/utils";

// 基本用法
const timestamp = getTimestamp();
console.log(timestamp); // 1704067200 (示例值)

// 用于 API 请求
const apiData = {
  data: "some data",
  timestamp: getTimestamp(),
  version: "1.0"
};

// 用于缓存键
const cacheKey = \`user_data_\${getTimestamp()}\`;

// 用于日志记录
console.log(\`[\${getTimestamp()}] User login successful\`);

// 用于数据签名
const signature = createSignature({
  data: "important data",
  timestamp: getTimestamp()
});

// 比较时间戳
const startTime = getTimestamp();
// ... 执行一些操作
const endTime = getTimestamp();
const duration = endTime - startTime;
console.log(\`操作耗时: \${duration} 秒\`);
`})}),`
`,n.jsx(e.h3,{id:"时间戳格式",children:"时间戳格式"}),`
`,n.jsxs(e.p,{children:["返回的时间戳是秒级的 Unix 时间戳，与 JavaScript 的 ",n.jsx(e.code,{children:"Date.now()"})," 返回的毫秒级时间戳不同："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// getTimestamp() 返回秒级时间戳
const secondsTimestamp = getTimestamp(); // 1704067200

// Date.now() 返回毫秒级时间戳
const millisecondsTimestamp = Date.now(); // 1704067200000

// 转换关系
console.log(Math.floor(Date.now() / 1000) === getTimestamp()); // true
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 返回秒级 Unix 时间戳"}),`
`,n.jsx(e.li,{children:"✅ 基于 UTC 时间"}),`
`,n.jsx(e.li,{children:"✅ 无参数调用"}),`
`,n.jsx(e.li,{children:"✅ 高性能实现"}),`
`,n.jsx(e.li,{children:"✅ 跨平台兼容"}),`
`]}),`
`,n.jsx(e.h3,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"API 请求时间戳"}),`
`,n.jsx(e.li,{children:"数据签名和验证"}),`
`,n.jsx(e.li,{children:"缓存键生成"}),`
`,n.jsx(e.li,{children:"日志记录"}),`
`,n.jsx(e.li,{children:"性能监控"}),`
`,n.jsx(e.li,{children:"数据版本控制"}),`
`]})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{x as default};
