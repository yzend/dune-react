import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as t}from"./index-BTcSapeD.js";import{M as r}from"./blocks-BKtdt1I2.js";import{P as o}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function s(i){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Utils/utils-time/formatTimeString(格式化时间字符串)"}),`
`,n.jsx(e.h1,{id:"formattimestring",children:"formatTimeString"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:'使用 dayjs 库将 Date 对象格式化为标准的日期时间字符串，格式为 "YYYY-MM-DD HH:mm:ss"。'}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(o,{params:[{name:"time",type:"Date",required:!0,description:"要格式化的 Date 对象"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": string"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),': 格式化后的时间字符串，格式为 "YYYY-MM-DD HH:mm:ss"']}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { formatTimeString } from "dune-react/utils";

// 基本用法
const now = new Date();
const formattedTime = formatTimeString(now);
console.log(formattedTime); // "2024-01-01 12:30:45"

// 格式化特定时间
const specificDate = new Date("2024-01-15T10:30:00Z");
console.log(formatTimeString(specificDate)); // "2024-01-15 10:30:00"

// 格式化过去的时间
const pastDate = new Date("2023-12-01T08:15:30");
console.log(formatTimeString(pastDate)); // "2023-12-01 08:15:30"

// 格式化未来的时间
const futureDate = new Date("2024-12-31T23:59:59");
console.log(formatTimeString(futureDate)); // "2024-12-31 23:59:59"

// 在日志记录中使用
function logUserAction(action: string) {
  const timestamp = formatTimeString(new Date());
  console.log(\`[\${timestamp}] User performed: \${action}\`);
}

// 在数据记录中使用
const userActivity = {
  userId: "12345",
  action: "login",
  timestamp: formatTimeString(new Date()),
  ip: "192.168.1.1"
};

// 在文件命名中使用
const fileName = \`backup_\${formatTimeString(new Date()).replace(/[: ]/g, '_')}.json\`;
console.log(fileName); // "backup_2024-01-01_12_30_45.json"

// 在 API 响应中使用
const apiResponse = {
  data: { message: "success" },
  timestamp: formatTimeString(new Date()),
  status: 200
};
`})}),`
`,n.jsx(e.h3,{id:"格式化规则",children:"格式化规则"}),`
`,n.jsx(e.p,{children:"函数使用 dayjs 库进行格式化，遵循以下规则："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"年份"}),": 4位数字 (YYYY)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"月份"}),": 2位数字，补零 (MM)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"日期"}),": 2位数字，补零 (DD)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"小时"}),": 2位数字，24小时制，补零 (HH)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"分钟"}),": 2位数字，补零 (mm)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"秒数"}),": 2位数字，补零 (ss)"]}),`
`]}),`
`,n.jsx(e.h3,{id:"与其他格式化方法的对比",children:"与其他格式化方法的对比"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { formatTimeString } from "dune-react/utils";

const date = new Date("2024-01-01T12:30:45");

// 使用 formatTimeString（推荐）
console.log(formatTimeString(date)); // "2024-01-01 12:30:45"

// 使用原生 JavaScript
console.log(date.toISOString()); // "2024-01-01T12:30:45.000Z"
console.log(date.toLocaleString()); // "2024/1/1 12:30:45" (本地化格式)

// 使用 dayjs 直接格式化
import dayjs from "dayjs";
console.log(dayjs(date).format("YYYY-MM-DD HH:mm:ss")); // "2024-01-01 12:30:45"
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 基于 dayjs 库，稳定可靠"}),`
`,n.jsx(e.li,{children:"✅ 统一的格式化标准"}),`
`,n.jsx(e.li,{children:"✅ 自动补零处理"}),`
`,n.jsx(e.li,{children:"✅ 24小时制显示"}),`
`,n.jsx(e.li,{children:"✅ 跨平台兼容"}),`
`]}),`
`,n.jsx(e.h3,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"日志记录和调试"}),`
`,n.jsx(e.li,{children:"数据存储和导出"}),`
`,n.jsx(e.li,{children:"API 响应时间戳"}),`
`,n.jsx(e.li,{children:"文件命名和备份"}),`
`,n.jsx(e.li,{children:"用户活动记录"}),`
`,n.jsx(e.li,{children:"系统监控和统计"}),`
`]})]})}function x(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{x as default};
