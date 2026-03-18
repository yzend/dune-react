# puck-block AGENT.md

本文件定义 `src/components/puck-block` 目录下组件的约定。

## 1. 目录定位

- `puck-block` 用于承载面向 Puck 编辑器的 block 组件。
- 这类组件通常要求可被 CMS / 页面搭建系统配置和渲染。
- 组件应优先考虑可配置性、序列化友好性和编辑器接入稳定性。

## 2. 目录结构约定

每个组件必须使用目录结构，而不是单文件平铺：

```txt
src/components/puck-block/
  component-name/
    index.tsx
    meta.json
```

按需可增加：

```txt
src/components/puck-block/
  component-name/
    index.tsx
    meta.json
    config.ts
    schema.ts
    mapper.ts
```

## 3. meta.json 要求

- 每个组件目录下必须存在 `meta.json`。
- `meta.json` 用于描述该 block 在项目中的用途、编辑器语义、推荐场景和 AI 提示。
- `meta.json` 不是可选项，而是目录规范的一部分。

推荐最小结构：

```json
{
  "name": "HeroPuckBlock",
  "category": "puck-block",
  "description": "供 Puck 编辑器使用的页面区块组件",
  "useCases": ["页面搭建", "CMS 可视化编辑"],
  "tags": ["puck", "block", "editor"],
  "aiHint": "当组件需要接入 Puck 或由编辑器动态配置时优先使用 puck-block。"
}
```

## 4. 组件设计原则

- Props 设计要面向编辑器配置，避免强耦合运行时上下文。
- 优先使用可序列化、可校验的数据结构。
- 组件应便于映射到 block config。
- 不要把复杂页面逻辑直接塞入 block 渲染组件。
- 新增 block 时，优先明确默认值、可编辑字段和空态行为。

## 5. AI 处理提示

- 当需求涉及 Puck、可视化搭建、CMS block、页面编排时，优先在 `puck-block` 下创建组件。
- 创建组件时必须同步创建 `meta.json`。
- 若后续需要 `config.ts` 或 schema 文件，应与组件目录放在一起维护。
- 若组件只用于普通 React 页面复用，不应误放到 `puck-block`。
