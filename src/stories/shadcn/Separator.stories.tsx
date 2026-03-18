import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/separator";

const meta: Meta<typeof UI.Separator> = {
  title: "Shadcn/Separator",
  component: UI.Separator,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component: "分隔线组件。适用于菜单、卡片区块和工具栏的视觉分组。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[320px] space-y-3">
      <div>上方内容</div>
      <UI.Separator />
      <div>下方内容</div>
    </div>
  ),
};
