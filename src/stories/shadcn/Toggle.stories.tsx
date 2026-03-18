import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/toggle";

const meta: Meta<typeof UI.Toggle> = {
  title: "Shadcn/Toggle",
  component: UI.Toggle,
  tags: ["autodocs", "action"],
  parameters: {
    docs: {
      description: {
        component: "单个切换按钮。适用于富文本工具栏、筛选状态和开关式操作。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultPressed: true,
    children: "加粗",
  },
};
