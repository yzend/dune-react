import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as r}from"./index-BTcSapeD.js";import{M as l}from"./blocks-BKtdt1I2.js";import{P as i}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function t(s){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Utils/utils-time/getTimeDetails(获取详细时间信息)"}),`
`,n.jsx(e.h1,{id:"gettimedetails",children:"getTimeDetails"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"获取详细的时间信息，返回包含各种时间单位的对象，用于需要精确时间差计算的场景。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(i,{params:[{name:"date",type:"string | Date",required:!0,description:"目标日期，可以是日期字符串或 Date 对象"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": object"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": 包含各种时间单位的对象"]}),`
`]}),`
`,n.jsx(i,{params:[{name:"seconds",type:"number",required:!1,description:"秒数差"},{name:"minutes",type:"number",required:!1,description:"分钟差"},{name:"hours",type:"number",required:!1,description:"小时差"},{name:"days",type:"number",required:!1,description:"天数差"},{name:"weeks",type:"number",required:!1,description:"周数差"},{name:"months",type:"number",required:!1,description:"月数差"},{name:"years",type:"number",required:!1,description:"年数差"},{name:"isValid",type:"boolean",required:!1,description:"日期是否有效"}]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getTimeDetails } from "dune-react/utils";

// 基本用法
const date = new Date("2024-01-01");
const details = getTimeDetails(date);
console.log(details);
// {
//   seconds: 7776000,
//   minutes: 129600,
//   hours: 2160,
//   days: 90,
//   weeks: 12,
//   months: 3,
//   years: 0,
//   isValid: true
// }

// 处理字符串日期
const stringDate = "2024-01-15T10:30:00Z";
const stringDetails = getTimeDetails(stringDate);
console.log(stringDetails.days); // 天数差
console.log(stringDetails.hours); // 小时差

// 处理无效日期
const invalidDetails = getTimeDetails("invalid-date");
console.log(invalidDetails);
// {
//   seconds: 0,
//   minutes: 0,
//   hours: 0,
//   days: 0,
//   weeks: 0,
//   months: 0,
//   years: 0,
//   isValid: false
// }

// 处理未来时间
const futureDate = new Date(Date.now() + 86400000); // 明天
const futureDetails = getTimeDetails(futureDate);
console.log(futureDetails.isValid); // false

// 条件判断使用
const timeInfo = getTimeDetails(date);
if (timeInfo.isValid) {
  if (timeInfo.days > 30) {
    console.log("超过一个月");
  } else if (timeInfo.hours > 24) {
    console.log("超过一天");
  } else {
    console.log("今天内");
  }
}
`})}),`
`,n.jsx(e.h3,{id:"时间计算规则",children:"时间计算规则"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"秒"}),": 精确到秒的时间差"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"分钟"}),": 向下取整的分钟数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"小时"}),": 向下取整的小时数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"天"}),": 向下取整的天数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"周"}),": 向下取整的周数（7天为1周）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"月"}),": 向下取整的月数（30天为1月）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"年"}),": 向下取整的年数（365天为1年）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 返回所有时间单位的精确数值"}),`
`,n.jsx(e.li,{children:"✅ 自动处理无效日期和未来时间"}),`
`,n.jsx(e.li,{children:"✅ 提供 isValid 标志用于错误处理"}),`
`,n.jsx(e.li,{children:"✅ 支持字符串和 Date 对象输入"}),`
`,n.jsx(e.li,{children:"✅ 向下取整确保准确性"}),`
`]}),`
`,n.jsx(e.h3,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"精确的时间差计算"}),`
`,n.jsx(e.li,{children:"条件判断和业务逻辑"}),`
`,n.jsx(e.li,{children:"数据分析和统计"}),`
`,n.jsx(e.li,{children:"定时任务和调度"}),`
`,n.jsx(e.li,{children:"缓存过期时间计算"}),`
`]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{j as default};
