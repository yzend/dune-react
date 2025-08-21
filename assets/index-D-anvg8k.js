import{j as e}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as t}from"./index-BTcSapeD.js";import{M as r}from"./blocks-BKtdt1I2.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function i(s){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utils/utils-time/时间工具函数"}),`
`,e.jsx(n.h1,{id:"时间工具函数",children:"时间工具函数"}),`
`,e.jsx(n.h3,{id:"概述",children:"概述"}),`
`,e.jsx(n.p,{children:"时间工具函数模块提供了丰富的时间处理功能，包括相对时间计算、时间格式化、时间戳获取等常用功能。"}),`
`,e.jsx(n.h3,{id:"可用函数",children:"可用函数"}),`
`,e.jsxs(n.h4,{id:"-timeago",children:["📅 ",e.jsx(n.a,{href:"./timeAgo.mdx",children:"timeAgo"})]}),`
`,e.jsx(n.p,{children:"计算距离现在多少时间，返回格式化的相对时间字符串。支持中英文显示，可配置是否显示秒数和零值。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { timeAgo } from "dune-react/utils";

const date = new Date("2024-01-01");
console.log(timeAgo(date)); // "3个月前"
console.log(timeAgo(date, { lang: "en" })); // "3 months ago"
`})}),`
`,e.jsxs(n.h4,{id:"-formattimeago",children:["⏰ ",e.jsx(n.a,{href:"./formatTimeAgo.mdx",children:"formatTimeAgo"})]}),`
`,e.jsxs(n.p,{children:["格式化日期为相对时间的简化版本，使用英文显示，是 ",e.jsx(n.code,{children:"timeAgo"})," 函数的便捷包装器。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { formatTimeAgo } from "dune-react/utils";

const date = new Date("2024-01-01");
console.log(formatTimeAgo(date)); // "3 months ago"
`})}),`
`,e.jsxs(n.h4,{id:"-gettimedetails",children:["📊 ",e.jsx(n.a,{href:"./getTimeDetails.mdx",children:"getTimeDetails"})]}),`
`,e.jsx(n.p,{children:"获取详细的时间信息，返回包含各种时间单位的对象，用于需要精确时间差计算的场景。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getTimeDetails } from "dune-react/utils";

const details = getTimeDetails(new Date("2024-01-01"));
console.log(details.days); // 天数差
console.log(details.hours); // 小时差
`})}),`
`,e.jsxs(n.h4,{id:"-gettimestamp",children:["🕐 ",e.jsx(n.a,{href:"./getTimestamp.mdx",children:"getTimestamp"})]}),`
`,e.jsx(n.p,{children:"获取当前时间的 Unix 时间戳（秒级），返回从 1970 年 1 月 1 日 00:00:00 UTC 到现在的秒数。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getTimestamp } from "dune-react/utils";

const timestamp = getTimestamp();
console.log(timestamp); // 1704067200
`})}),`
`,e.jsxs(n.h4,{id:"-sleep",children:["😴 ",e.jsx(n.a,{href:"./sleep.mdx",children:"sleep"})]}),`
`,e.jsx(n.p,{children:"创建一个异步睡眠函数，用于在异步操作中暂停执行指定的毫秒数。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { sleep } from "dune-react/utils";

async function example() {
  console.log("开始");
  await sleep(1000); // 睡眠1秒
  console.log("1秒后");
}
`})}),`
`,e.jsxs(n.h4,{id:"-formattimestring",children:["📝 ",e.jsx(n.a,{href:"./formatTimeString.mdx",children:"formatTimeString"})]}),`
`,e.jsx(n.p,{children:'使用 dayjs 库将 Date 对象格式化为标准的日期时间字符串，格式为 "YYYY-MM-DD HH:mm:ss"。'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { formatTimeString } from "dune-react/utils";

const now = new Date();
console.log(formatTimeString(now)); // "2024-01-01 12:30:45"
`})}),`
`,e.jsx(n.h3,{id:"完整导入示例",children:"完整导入示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import {
  timeAgo,
  formatTimeAgo,
  getTimeDetails,
  getTimestamp,
  sleep,
  formatTimeString
} from "dune-react/utils";
`})}),`
`,e.jsx(n.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"社交媒体"}),': 显示"3分钟前"、"2小时前"等相对时间']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"日志系统"}),": 记录精确的时间戳和格式化时间"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"API 开发"}),": 处理时间参数和响应时间戳"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"用户界面"}),": 显示文件修改时间、活动时间等"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据存储"}),": 格式化时间用于数据库存储"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"异步操作"}),": 实现延迟、重试、防抖等功能"]}),`
`]}),`
`,e.jsx(n.h3,{id:"依赖",children:"依赖"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"dayjs"}),": 用于时间格式化和处理"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"原生 Date API"}),": 用于基础时间操作"]}),`
`]})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
