import type { Meta, StoryObj } from "@storybook/react-vite";
import { TweetCardClient } from "../../components/shadcn/tweet-card-client";

const meta: Meta<typeof TweetCardClient> = {
  title: "Shadcn/TweetCardClient",
  component: TweetCardClient,
  tags: ["autodocs", "container"],
  parameters: {
    docs: {
      description: {
        component: "客户端社交内容卡片占位实现。当前用于保持迁移后的 API 兼容。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-[420px] rounded-xl border p-4",
    children: "TweetCardClient 内容预览区域",
  },
};
