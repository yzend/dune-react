import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/label";

const meta: Meta<typeof UI.Label> = {
  title: "Shadcn/Label",
  component: UI.Label,
  tags: ["autodocs", "form"],
  parameters: {
    docs: {
      description: {
        component: "表单标签组件。适用于输入控件标题和字段说明。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "邮箱地址",
  },
};
