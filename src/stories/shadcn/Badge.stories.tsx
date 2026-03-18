import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/badge";

const meta: Meta<typeof UI.Badge> = {
  title: "Shadcn/Badge",
  component: UI.Badge,
  tags: ["autodocs", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "轻量状态标签。适用于状态标记、分类标签和列表内的补充信息。支持不同视觉变体。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-3">
      <UI.Badge>默认</UI.Badge>
      <UI.Badge variant="secondary">草稿</UI.Badge>
      <UI.Badge variant="outline">实验性</UI.Badge>
    </div>
  ),
};
