import{j as n}from"./jsx-runtime-CUUhBk1I.js";import{useMDXComponents as l}from"./index-BTcSapeD.js";import{M as t}from"./blocks-BKtdt1I2.js";import{P as r}from"./ParamsTable-DW45pqaT.js";import"./iframe-xOBi1KNm.js";import"./preload-helper-C1FmrZbK.js";import"./index-ATllcjAZ.js";function s(i){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Utils/utils-time/sleep(异步睡眠)"}),`
`,n.jsx(e.h1,{id:"sleep",children:"sleep"}),`
`,n.jsx(e.h3,{id:"功能描述",children:"功能描述"}),`
`,n.jsx(e.p,{children:"创建一个异步睡眠函数，用于在异步操作中暂停执行指定的毫秒数。返回一个 Promise，可以使用 await 或 .then() 来处理。"}),`
`,n.jsx(e.h3,{id:"参数说明",children:"参数说明"}),`
`,n.jsx(r,{params:[{name:"ms",type:"number",required:!0,description:"睡眠时间，单位为毫秒"}]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型"}),": Promise<void>"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"描述"}),": 睡眠完成后解析的 Promise"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { sleep } from "dune-react/utils";

// 基本用法 - 使用 async/await
async function example1() {
  console.log("开始");
  await sleep(1000); // 睡眠1秒
  console.log("1秒后");
}

// 使用 Promise 链
function example2() {
  console.log("开始");
  sleep(2000).then(() => {
    console.log("2秒后");
  });
}

// 在循环中使用
async function example3() {
  for (let i = 0; i < 3; i++) {
    console.log(\`第 \${i + 1} 次执行\`);
    await sleep(500); // 每次间隔500毫秒
  }
}

// 模拟 API 请求延迟
async function mockApiCall() {
  console.log("发送请求...");
  await sleep(1000); // 模拟网络延迟
  console.log("请求完成");
  return { data: "success" };
}

// 实现重试机制
async function retryOperation(maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      // 尝试执行操作
      const result = await someOperation();
      return result;
    } catch (error) {
      if (i === maxRetries - 1) throw error;

      console.log(\`操作失败，\${i + 1}秒后重试...\`);
      await sleep((i + 1) * 1000); // 递增延迟
    }
  }
}

// 实现防抖
async function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      await func.apply(this, args);
    }, delay);
  };
}

// 实现节流
async function throttle(func, delay) {
  let lastCall = 0;
  return async function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      await func.apply(this, args);
    }
  };
}
`})}),`
`,n.jsx(e.h3,{id:"与其他延迟方法的对比",children:"与其他延迟方法的对比"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// sleep 函数（推荐）
await sleep(1000);

// setTimeout 包装（不推荐）
await new Promise((resolve) => setTimeout(resolve, 1000));

// 直接使用 setTimeout（同步代码中）
setTimeout(() => {
  console.log("1秒后执行");
}, 1000);
`})}),`
`,n.jsx(e.h3,{id:"特性",children:"特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 基于 Promise 的异步实现"}),`
`,n.jsx(e.li,{children:"✅ 支持 async/await 语法"}),`
`,n.jsx(e.li,{children:"✅ 精确的毫秒级控制"}),`
`,n.jsx(e.li,{children:"✅ 不会阻塞主线程"}),`
`,n.jsx(e.li,{children:"✅ 简洁的 API 设计"}),`
`]}),`
`,n.jsx(e.h3,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"模拟网络延迟"}),`
`,n.jsx(e.li,{children:"实现重试机制"}),`
`,n.jsx(e.li,{children:"防抖和节流功能"}),`
`,n.jsx(e.li,{children:"动画和过渡效果"}),`
`,n.jsx(e.li,{children:"测试和调试"}),`
`,n.jsx(e.li,{children:"用户交互反馈"}),`
`]})]})}function x(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{x as default};
