import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/input";

const meta: Meta<typeof UI.Input> = {
  title: "Shadcn/Input",
  component: UI.Input,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "通用单行输入框。适用于登录、搜索、设置项和表单录入。支持禁用、占位符和校验状态。",
      },
    },
  },
  argTypes: {
    placeholder: {
      description: "占位提示文本。",
      control: { type: "text" },
    },
    disabled: {
      description: "是否禁用输入。",
      control: { type: "boolean" },
    },
    type: {
      description: "原生输入类型。",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "输入工作区名称",
    type: "text",
    disabled: false,
  },
};
