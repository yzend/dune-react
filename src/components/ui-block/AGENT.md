# ui-block AGENT.md

本文件定义 `src/components/ui-block` 目录下组件的约定。

## 1. 目录定位

- `ui-block` 用于承载可复用的 UI 区块级组件。
- 这类组件通常由多个基础组件组合而成。
- 适用于页面片段、营销区块、内容模块、信息区块、表单区块等场景。

## 2. 目录结构约定

每个组件必须使用目录结构，而不是单文件平铺：

```txt
src/components/ui-block/
  component-name/
    index.tsx
    meta.json
```

按需可增加：

```txt
src/components/ui-block/
  component-name/
    index.tsx
    meta.json
    styles.css
    hooks.ts
    constants.ts
```

## 3. meta.json 要求

- 每个组件目录下必须存在 `meta.json`。
- `meta.json` 是该组件的项目级元数据来源，不可省略。
- `meta.json` 用于补充 Storybook 之外的结构化信息，供 AI、脚本、MCP 和组件治理使用。

推荐最小结构：

```json
{
  "name": "HeroBanner",
  "category": "ui-block",
  "description": "页面级展示区块组件",
  "useCases": ["首页头图", "营销落地页首屏"],
  "tags": ["block", "marketing", "hero"],
  "aiHint": "当用户需要一个可直接放入页面的内容区块时优先考虑 ui-block。"
}
```

## 4. 组件设计原则

- 优先组合已有基础组件，不重复发明低层控件。
- API 应聚焦区块级能力，而不是暴露过多内部实现细节。
- 默认行为必须可预测。
- 命名要体现业务语义或布局语义。
- 新组件优先补齐 story 或文档。

## 5. AI 处理提示

- 当需求是“页面区块”“内容模块”“营销区块”“展示模块”时，优先在 `ui-block` 下创建组件。
- 创建组件时，先确认是否已有基础组件可组合。
- 不要跳过 `meta.json`。
- 若缺少 `meta.json`，视为组件定义不完整。
