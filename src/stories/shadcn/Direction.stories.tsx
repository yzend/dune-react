import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/direction";

const meta: Meta<typeof UI.DirectionProvider> = {
  title: "Shadcn/Direction",
  component: UI.DirectionProvider,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component: "方向上下文提供器。适用于需要同时兼容 LTR 与 RTL 布局的界面组件。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RTL: Story = {
  render: () => (
    <UI.DirectionProvider direction="rtl">
      <div className="flex w-[320px] justify-between rounded-xl border p-4 text-sm">
        <span>开始</span>
        <span>结束</span>
      </div>
    </UI.DirectionProvider>
  ),
};
