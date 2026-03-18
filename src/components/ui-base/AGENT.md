# ui-base AGENT.md

本文件定义 `src/components/ui-base` 目录下组件的约定。

## 1. 目录定位

- `ui-base` 用于承载个人定制开发的基础组件。
- 这类组件处于基础层，关注可复用的交互能力、样式封装和通用 UI 语义。
- 它不同于 `ui-block`。
- `ui-base` 更偏底层组件。
- `ui-block` 更偏页面模块、内容区块和承接业务信息的组合结构。

## 2. 适用范围

适合放入 `ui-base` 的组件包括：

- 定制按钮
- 定制输入框
- 定制卡片容器
- 标签、徽标、分隔符、空态等基础展示组件
- 项目里需要长期复用的轻量交互组件

不适合放入 `ui-base` 的内容包括：

- 页面区块
- 营销模块
- 首屏 Hero
- 富内容展示模块
- 强业务语义的组合区块

这类内容应优先放到 `ui-block`。

## 3. 目录结构约定

每个组件必须使用目录结构：

```txt
src/components/ui-base/
  component-name/
    index.tsx
    meta.json
```

按需可增加：

```txt
src/components/ui-base/
  component-name/
    index.tsx
    meta.json
    styles.css
    hooks.ts
    constants.ts
```

## 4. meta.json 要求

- 每个组件目录下必须存在 `meta.json`。
- `meta.json` 用于补充该基础组件的用途、推荐场景、AI 提示和项目内语义。

推荐最小结构：

```json
{
  "name": "BaseButton",
  "category": "ui-base",
  "description": "个人定制的基础按钮组件",
  "useCases": ["表单动作", "工具栏操作", "通用点击触发"],
  "tags": ["base", "button", "primitive"],
  "aiHint": "当需求是个人项目内长期复用的基础组件，而不是页面区块时优先考虑 ui-base。"
}
```

## 5. 组件设计原则

- 优先抽象稳定的基础能力，而不是一次性业务结构。
- API 应尽量简洁，不要把页面级语义塞进基础组件。
- 命名要体现控件语义或基础能力。
- 默认样式和默认行为必须稳定可预测。
- 新增组件时优先补齐 story 或文档。

## 6. AI 处理提示

- 当需求是“基础组件”“可复用控件”“个人定制底层 UI”时，优先在 `ui-base` 下创建组件。
- 当需求已经是页面模块、内容承载模块、营销区块时，不应放入 `ui-base`。
- 创建组件时必须同步创建 `meta.json`。
- 若组件定位介于基础控件和页面模块之间，优先判断它是否承接大量内容语义：
  - 是，则更适合 `ui-block`
  - 否，则更适合 `ui-base`
