import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as o}from"./index-BTcSapeD.js";import{M as r}from"./blocks-BKtdt1I2.js";import{P as t}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function i(s){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Utils/utils-time/timeAgo(计算相对时间)"}),`
`,n.jsx(e.h1,{id:"timeago",children:"timeAgo"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"计算距离现在多少时间，返回格式化的相对时间字符串。支持中英文显示，可配置是否显示秒数和零值。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(t,{params:[{name:"date",type:"string | Date",required:!0,description:"目标日期，可以是日期字符串或 Date 对象"},{name:"options",type:"object",required:!1,description:"配置选项对象"},{name:"options.lang",type:"'zh' | 'en'",required:!1,description:"语言设置，默认为 'zh'（中文）"},{name:"options.showSeconds",type:"boolean",required:!1,description:"是否显示秒数，默认为 false"},{name:"options.showZero",type:"boolean",required:!1,description:"是否显示零值，默认为 false"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": string"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": 格式化的相对时间字符串"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { timeAgo } from "dune-react/utils";

// 基本用法
const date = new Date("2024-01-01");
console.log(timeAgo(date)); // "3个月前"

// 英文显示
console.log(timeAgo(date, { lang: "en" })); // "3 months ago"

// 显示秒数
const recentDate = new Date(Date.now() - 30000); // 30秒前
console.log(timeAgo(recentDate, { showSeconds: true })); // "30秒前"

// 显示零值
const now = new Date();
console.log(timeAgo(now, { showZero: true })); // "0秒前"

// 处理字符串日期
console.log(timeAgo("2024-01-15T10:30:00Z")); // "2个月前"

// 处理未来时间
const futureDate = new Date(Date.now() + 86400000); // 明天
console.log(timeAgo(futureDate)); // "刚刚"

// 处理无效日期
console.log(timeAgo("invalid-date")); // "刚刚"
`})}),`
`,n.jsx(e.h3,{id:"时间单位",children:"时间单位"}),`
`,n.jsx(e.p,{children:"函数支持以下时间单位的显示："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"年"}),": 年前 / years ago"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"月"}),": 个月前 / months ago"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"周"}),": 周前 / weeks ago"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"天"}),": 天前 / days ago"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"小时"}),": 小时前 / hours ago"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"分钟"}),": 分钟前 / minutes ago"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"秒"}),": 秒前 / seconds ago（需要 showSeconds: true）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 支持中英文双语显示"}),`
`,n.jsx(e.li,{children:"✅ 自动处理无效日期和未来时间"}),`
`,n.jsx(e.li,{children:"✅ 可配置是否显示秒数和零值"}),`
`,n.jsx(e.li,{children:"✅ 智能时间单位选择"}),`
`,n.jsx(e.li,{children:"✅ 支持字符串和 Date 对象输入"}),`
`]}),`
`,n.jsx(e.h3,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"社交媒体时间显示"}),`
`,n.jsx(e.li,{children:"评论系统时间戳"}),`
`,n.jsx(e.li,{children:"文件修改时间显示"}),`
`,n.jsx(e.li,{children:"用户活动时间记录"}),`
`,n.jsx(e.li,{children:"新闻发布时间展示"}),`
`]})]})}function g(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{g as default};
