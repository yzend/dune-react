# AGENT.md

本文件定义 AI Agent 在 `dune-react` 仓库中的协作规范。

## 1. 项目定位

- 项目名称：`dune-react`
- 类型：前端组件库
- 技术栈：`React` + `Vite` + `TypeScript` + `Storybook`
- 包管理器：`pnpm`
- 主要目标：
  - 提供可复用组件与工具函数
  - 用 Storybook 承载组件文档与预览
  - 让 AI Agent 能通过 MCP 自动发现、查询、预览组件

## 2. 目录约定

- `.storybook`
  - Storybook 主配置、预览配置、主题配置
- `src/components`
  - 组件实现与导出入口
- `src/components/ui-base`
  - 目录式的个人定制基础组件，每个组件目录下必须包含 `meta.json`
- `src/components/ui-block`
  - 目录式的 UI 区块级组件，每个组件目录下必须包含 `meta.json`
- `src/components/puck-block`
  - 面向 Puck 编辑器的 block 组件目录，每个组件目录下必须包含 `meta.json`
- `src/utils`
  - 通用工具函数
- `src/stories`
  - stories、MDX 文档、Storybook 辅助组件

## 3. 工作原则

- 优先做最小必要改动，不做无关重构。
- 不随意修改对外导出、组件名、文件名、包入口。
- 保持现有目录结构、导出方式、样式方案一致。
- 非必要不引入新的运行时依赖。
- Storybook 配置修改必须优先兼容当前 `React + Vite + Storybook 10`。
- 除非任务明确要求，不改 npm 发布与 `deploy-storybook` 发布流程。

## 4. 组件开发规范

- 新组件必须有明确的 Props 类型定义。
- 可复用组件应通过统一入口导出。
- 组件命名要稳定、语义清晰、默认行为可预测。
- 新组件优先补齐 story；重要组件变更优先同步更新文档。
- 样式优先沿用现有方案，不混入新的样式体系。

## 5. Storybook + MCP 目标

组件库应让 AI Agent 能通过 Storybook MCP 自动完成以下能力：

- 发现组件
  - 列出所有可用组件和文档
- 查询文档
  - 获取组件描述、Props、用法说明
- 预览组件
  - 获取 story 预览 URL
- 获取项目规范
  - 读取本文件中的 UI / 组件开发约束

Storybook dev server 启动后，应优先保证 MCP endpoint 可通过：

```text
http://localhost:8080/mcp
```

## 6. Storybook 配置规范

- `.storybook/main.ts` 应启用：
  - `@storybook/addon-docs`
  - `@storybook/addon-mcp`
- 若 `addon-mcp` 存在 peer 依赖要求，应同步补齐相关依赖。
- 应开启：

```ts
features: {
  experimentalComponentsManifest: true
}
```

- stories 目录应继续覆盖：
  - `*.stories.tsx`
  - `*.mdx`

## 7. Stories 元数据规范

每个面向外部使用的核心组件，其 story 文件应尽量包含以下信息：

- `component`
  - 让 autodocs 提取 Props 类型
- `title`
  - 决定 Storybook 侧边栏分类路径
- `tags: ['autodocs']`
  - 自动生成文档页
- `parameters.docs.description.component`
  - 组件整体描述，是 AI 判断组件用途的核心依据
- `argTypes.*.description`
  - 每个 prop 的说明
- 多个 Story exports
  - 覆盖常见状态、变体、尺寸和异常情况

## 8. description 编写要求

组件描述优先包含三类信息：

- 它是什么
- 什么时候用
- 支持什么关键能力 / 变体

推荐模板：

```ts
parameters: {
  docs: {
    description: {
      component: [
        '[一句话说明是什么]',
        '[适用场景]',
        '[关键能力/变体]',
      ].join('。'),
    },
  },
}
```

## 9. Tag 使用约定

除 `autodocs` 外，可用自定义 tags 辅助 AI 分类，例如：

- `form`
- `action`
- `layout`
- `container`
- `input`
- `feedback`
- `overlay`

新增标签时要保持语义稳定，不随意发散命名。

## 10. MCP 工程约定

- 项目根目录应存在 `.mcp.json`
- `.mcp.json` 应至少包含本地 Storybook MCP server 配置
- Claude Code / 其他支持 MCP 的 Agent 应通过该配置连接 Storybook

推荐结构：

```json
{
  "mcpServers": {
    "storybook": {
      "url": "http://localhost:8080/mcp"
    }
  }
}
```

## 11. 组件库中 AI 可读信息的来源

AI 主要从以下信息中理解组件：

- `meta.parameters.docs.description.component`
- `meta.argTypes.*.description`
- `meta.tags`
- 各个 Story 的命名与注释

因此：

- 不要把 story 写成只有最小可运行示例而没有语义说明
- 不要省略核心 prop 的描述
- 对关键组件，必须描述使用场景而不是只描述样式

## 12. 修改前检查

开始改动前，Agent 必须先确认：

- 目标文件与导出链路
- 是否影响 `src/index.ts` / `src/components/index.ts`
- 是否影响 Storybook 展示与文档
- 是否需要更新 stories、MDX、argTypes、description
- 是否影响 MCP 可发现性

## 13. 修改后验证

按改动范围优先执行：

```bash
pnpm lint
pnpm build
pnpm build-storybook
pnpm storybook
```

涉及 MCP 时，额外优先验证：

- Storybook 是否成功启动
- `http://localhost:8080/mcp` 是否可访问
- MCP tools 是否能列出组件或文档

## 14. 禁止事项

- 不要无理由升级全仓依赖。
- 不要无理由修改 lockfile 之外的大量文件。
- 不要为了通过构建而静默删除 story、文档或功能。
- 不要擅自改动发布流程。
- 不要把临时调试代码、日志、注释残留在最终结果中。

## 15. 缺失信息处理

如果任务存在以下情况，Agent 不允许硬猜：

- 信息缺失
- 需求方向不明确
- 组件归类不明确
- 对外 API 影响不明确
- 是否需要保留兼容性不明确

此时必须先向用户提问，补齐信息后再继续实施。

## 16. 输出要求

Agent 最终输出必须明确说明：

- 改了什么
- 为什么这么改
- 做了哪些验证
- 还有哪些未解决问题或风险
