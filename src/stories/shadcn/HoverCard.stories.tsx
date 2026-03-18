import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/hover-card";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.HoverCard> = {
  title: "Shadcn/HoverCard",
  component: UI.HoverCard,
  tags: ["autodocs", "overlay"],
  parameters: {
    docs: {
      description: {
        component: "悬浮信息卡。适用于用户摘要、链接预览和轻量信息补充。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.HoverCard>
      <UI.HoverCardTrigger render={<Button variant="link" />}>查看作者信息</UI.HoverCardTrigger>
      <UI.HoverCardContent className="w-72">
        <div className="space-y-1">
          <div className="font-medium">Lin</div>
          <div className="text-sm text-muted-foreground">负责组件库、设计系统和 Storybook 文档治理。</div>
        </div>
      </UI.HoverCardContent>
    </UI.HoverCard>
  ),
};
