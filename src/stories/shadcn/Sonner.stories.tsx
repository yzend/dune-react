import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";
import { Toaster } from "../../components/shadcn/sonner";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof Toaster> = {
  title: "Shadcn/Sonner",
  component: Toaster,
  tags: ["autodocs", "feedback", "overlay"],
  parameters: {
    docs: {
      description: {
        component: "全局通知组件。适用于操作结果反馈、后台任务状态提示和轻量消息通知。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button onClick={() => toast.success("保存成功", { description: "配置已经同步到团队工作区。" })}>触发通知</Button>
    </div>
  ),
};
