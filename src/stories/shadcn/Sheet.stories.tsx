import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/sheet";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.Sheet> = {
  title: "Shadcn/Sheet",
  component: UI.Sheet,
  tags: ["autodocs", "overlay"],
  parameters: {
    docs: {
      description: {
        component: "侧边面板组件。适用于设置抽屉、详情查看和侧滑任务流。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Sheet>
      <UI.SheetTrigger render={<Button variant="outline" />}>打开侧边面板</UI.SheetTrigger>
      <UI.SheetContent>
        <UI.SheetHeader>
          <UI.SheetTitle>通知设置</UI.SheetTitle>
          <UI.SheetDescription>配置成员通知、日报和提醒规则。</UI.SheetDescription>
        </UI.SheetHeader>
        <div className="px-4 text-sm text-muted-foreground">这里可以承载更长的配置表单或说明内容。</div>
      </UI.SheetContent>
    </UI.Sheet>
  ),
};
