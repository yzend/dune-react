import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/button";

const meta: Meta<typeof UI.Button> = {
  title: "Shadcn/Button",
  component: UI.Button,
  tags: ["autodocs", "action", "form"],
  parameters: {
    docs: {
      description: {
        component: "通用按钮组件。适用于表单提交、确认操作、工具栏动作和内容区 CTA。支持多种视觉变体、尺寸和加载态。",
      },
    },
  },
  argTypes: {
    variant: {
      description: "按钮的视觉变体。",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
      control: { type: "select" },
    },
    size: {
      description: "按钮尺寸。",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
      control: { type: "select" },
    },
    loading: {
      description: "是否展示加载中状态。",
      control: { type: "boolean" },
    },
    children: {
      description: "按钮文本或内容。",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "保存更改",
    variant: "default",
    size: "default",
    loading: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <UI.Button>默认</UI.Button>
      <UI.Button variant="secondary">次级</UI.Button>
      <UI.Button variant="outline">描边</UI.Button>
      <UI.Button variant="ghost">幽灵</UI.Button>
      <UI.Button variant="destructive">危险</UI.Button>
      <UI.Button variant="link">链接</UI.Button>
    </div>
  ),
};
