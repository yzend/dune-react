import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/alert-dialog";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.AlertDialog> = {
  title: "Shadcn/AlertDialog",
  component: UI.AlertDialog,
  tags: ["autodocs", "overlay", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "高确认成本的确认弹窗。适用于删除、覆盖、退出等不可逆操作，强调用户再次确认。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.AlertDialog>
      <UI.AlertDialogTrigger render={<Button variant="destructive" />}>删除项目</UI.AlertDialogTrigger>
      <UI.AlertDialogContent>
        <UI.AlertDialogHeader>
          <UI.AlertDialogTitle>确认删除当前项目？</UI.AlertDialogTitle>
          <UI.AlertDialogDescription>该操作不可撤销，相关数据和配置会被永久移除。</UI.AlertDialogDescription>
        </UI.AlertDialogHeader>
        <UI.AlertDialogFooter>
          <UI.AlertDialogCancel>取消</UI.AlertDialogCancel>
          <UI.AlertDialogAction>确认删除</UI.AlertDialogAction>
        </UI.AlertDialogFooter>
      </UI.AlertDialogContent>
    </UI.AlertDialog>
  ),
};
