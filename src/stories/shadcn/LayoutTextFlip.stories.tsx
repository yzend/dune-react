import type { Meta, StoryObj } from "@storybook/react-vite";
import { LayoutTextFlip } from "../../components/shadcn/layout-text-flip";

const meta: Meta<typeof LayoutTextFlip> = {
  title: "Shadcn/LayoutTextFlip",
  component: LayoutTextFlip,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component: "文本翻转动画的占位实现。当前用于承载结构和文案，不包含复杂动画逻辑。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "多语言标题切换",
    className: "text-2xl font-semibold",
  },
};
