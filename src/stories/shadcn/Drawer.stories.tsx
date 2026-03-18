import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/drawer";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.Drawer> = {
  title: "Shadcn/Drawer",
  component: UI.Drawer,
  tags: ["autodocs", "overlay"],
  parameters: {
    docs: {
      description: {
        component: "抽屉组件。适用于移动端操作面板、补充详情和不需要完全打断当前页面的任务流。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Drawer>
      <UI.DrawerTrigger asChild>
        <Button>打开抽屉</Button>
      </UI.DrawerTrigger>
      <UI.DrawerContent>
        <UI.DrawerHeader>
          <UI.DrawerTitle>创建自动化任务</UI.DrawerTitle>
          <UI.DrawerDescription>用抽屉承载不打断当前阅读流程的补充操作。</UI.DrawerDescription>
        </UI.DrawerHeader>
        <div className="px-4 pb-4 text-sm text-muted-foreground">这里可以放表单字段、说明或操作列表。</div>
        <UI.DrawerFooter>
          <Button>保存</Button>
          <UI.DrawerClose asChild>
            <Button variant="outline">取消</Button>
          </UI.DrawerClose>
        </UI.DrawerFooter>
      </UI.DrawerContent>
    </UI.Drawer>
  ),
};
