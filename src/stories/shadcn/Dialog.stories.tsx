import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/dialog";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.Dialog> = {
  title: "Shadcn/Dialog",
  component: UI.Dialog,
  tags: ["autodocs", "overlay", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "通用弹窗组件。适用于确认、表单填写和聚焦式任务操作。支持标题、描述、底部操作区和关闭按钮。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Dialog>
      <UI.DialogTrigger render={<Button />}>打开弹窗</UI.DialogTrigger>
      <UI.DialogContent>
        <UI.DialogHeader>
          <UI.DialogTitle>邀请团队成员</UI.DialogTitle>
          <UI.DialogDescription>输入邮箱后即可发送邀请链接，成员会加入当前工作区。</UI.DialogDescription>
        </UI.DialogHeader>
        <div className="rounded-lg border p-4 text-sm text-muted-foreground">这里可以放表单字段或补充说明。</div>
        <UI.DialogFooter showCloseButton>
          <Button>发送邀请</Button>
        </UI.DialogFooter>
      </UI.DialogContent>
    </UI.Dialog>
  ),
};
