import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/collapsible";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.Collapsible> = {
  title: "Shadcn/Collapsible",
  component: UI.Collapsible,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component: "可折叠区域。适用于高级筛选、补充说明和节省页面空间的二级内容。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Collapsible defaultOpen className="w-[420px] rounded-xl border p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">高级筛选</div>
          <div className="text-sm text-muted-foreground">展开查看额外筛选条件</div>
        </div>
        <UI.CollapsibleTrigger render={<Button variant="outline" size="sm" />}>切换</UI.CollapsibleTrigger>
      </div>
      <UI.CollapsibleContent className="pt-4 text-sm text-muted-foreground">
        这里可以放置更多筛选控件、说明文案或补充设置项。
      </UI.CollapsibleContent>
    </UI.Collapsible>
  ),
};
