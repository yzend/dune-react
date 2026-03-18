import type { Meta, StoryObj } from "@storybook/react-vite";
import { TweetCard } from "../../components/shadcn/tweet-card";

const meta: Meta<typeof TweetCard> = {
  title: "Shadcn/TweetCard",
  component: TweetCard,
  tags: ["autodocs", "container"],
  parameters: {
    docs: {
      description: {
        component: "社交内容卡片占位实现。当前用于迁移兼容，承载社交嵌入类内容容器。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-[420px] rounded-xl border p-4",
    children: "TweetCard 内容预览区域",
  },
};
