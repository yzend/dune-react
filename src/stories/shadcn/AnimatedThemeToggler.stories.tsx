import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnimatedThemeToggler } from "../../components/shadcn/animated-theme-toggler";

const meta: Meta<typeof AnimatedThemeToggler> = {
  title: "Shadcn/AnimatedThemeToggler",
  component: AnimatedThemeToggler,
  tags: ["autodocs", "action"],
  parameters: {
    docs: {
      description: {
        component: "主题切换按钮的占位实现。当前仓库保留最小可运行版本，用于主题切换入口占位。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "切换主题",
    className: "rounded-md border px-3 py-2 text-sm",
  },
};
