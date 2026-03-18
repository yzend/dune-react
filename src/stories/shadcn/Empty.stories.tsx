import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/empty";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.Empty> = {
  title: "Shadcn/Empty",
  component: UI.Empty,
  tags: ["autodocs", "feedback", "layout"],
  parameters: {
    docs: {
      description: {
        component: "空状态组件。适用于无数据列表、初始化页面和搜索无结果场景。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Empty className="rounded-xl border p-8">
      <UI.EmptyMedia>
        <div className="flex size-14 items-center justify-center rounded-full bg-muted text-xl">📭</div>
      </UI.EmptyMedia>
      <UI.EmptyContent>
        <UI.EmptyTitle>暂无数据</UI.EmptyTitle>
        <UI.EmptyDescription>当前筛选条件下没有找到结果，可以调整筛选或新建内容。</UI.EmptyDescription>
        <Button size="sm">新建内容</Button>
      </UI.EmptyContent>
    </UI.Empty>
  ),
};
