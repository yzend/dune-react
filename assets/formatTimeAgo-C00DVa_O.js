import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as i}from"./index-BTcSapeD.js";import{M as r}from"./blocks-BKtdt1I2.js";import{P as s}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function t(o){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Utils/utils-time/formatTimeAgo(格式化相对时间)"}),`
`,n.jsx(e.h1,{id:"formattimeago",children:"formatTimeAgo"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsxs(e.p,{children:["格式化日期为相对时间的简化版本，使用英文显示，是 ",n.jsx(e.code,{children:"timeAgo"})," 函数的便捷包装器。"]}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(s,{params:[{name:"date",type:"string | Date",required:!0,description:"目标日期，可以是日期字符串或 Date 对象"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": string"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": 英文格式的相对时间字符串"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { formatTimeAgo } from "dune-react/utils";

// 基本用法
const date = new Date("2024-01-01");
console.log(formatTimeAgo(date)); // "3 months ago"

// 处理字符串日期
console.log(formatTimeAgo("2024-01-15T10:30:00Z")); // "2 months ago"

// 处理最近的时间
const recentDate = new Date(Date.now() - 3600000); // 1小时前
console.log(formatTimeAgo(recentDate)); // "1 hour ago"

// 处理很久以前的时间
const oldDate = new Date("2020-01-01");
console.log(formatTimeAgo(oldDate)); // "4 years ago"

// 处理无效日期
console.log(formatTimeAgo("invalid-date")); // "just now"
`})}),`
`,n.jsx(e.h3,{id:"等价用法",children:"等价用法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 以下两种用法是等价的
import { formatTimeAgo, timeAgo } from "dune-react/utils";

const date = new Date("2024-01-01");

// 使用 formatTimeAgo
console.log(formatTimeAgo(date));

// 使用 timeAgo 的英文版本
console.log(timeAgo(date, { lang: "en" }));
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 英文显示格式"}),`
`,n.jsx(e.li,{children:"✅ 自动处理无效日期"}),`
`,n.jsx(e.li,{children:"✅ 智能时间单位选择"}),`
`,n.jsx(e.li,{children:"✅ 支持字符串和 Date 对象输入"}),`
`,n.jsx(e.li,{children:"✅ 简洁的 API 设计"}),`
`]}),`
`,n.jsx(e.h3,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"国际化应用的时间显示"}),`
`,n.jsx(e.li,{children:"英文界面的时间戳"}),`
`,n.jsx(e.li,{children:"日志系统的时间记录"}),`
`,n.jsx(e.li,{children:"API 响应的时间格式化"}),`
`]})]})}function x(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{x as default};
