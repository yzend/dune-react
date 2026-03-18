import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/kbd";

const meta: Meta<typeof UI.Kbd> = {
  title: "Shadcn/Kbd",
  component: UI.Kbd,
  tags: ["autodocs", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "键盘按键样式组件。适用于快捷键提示、帮助文档和命令面板说明。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.KbdGroup>
      <UI.Kbd>⌘</UI.Kbd>
      <UI.Kbd>K</UI.Kbd>
    </UI.KbdGroup>
  ),
};
