import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/popover";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.Popover> = {
  title: "Shadcn/Popover",
  component: UI.Popover,
  tags: ["autodocs", "overlay"],
  parameters: {
    docs: {
      description: {
        component: "轻量浮层。适用于颜色选择、补充设置和局部信息展示。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Popover>
      <UI.PopoverTrigger render={<Button variant="outline" />}>打开浮层</UI.PopoverTrigger>
      <UI.PopoverContent className="w-72">
        <div className="space-y-2">
          <div className="font-medium">分享设置</div>
          <div className="text-sm text-muted-foreground">调整权限、链接有效期或复制分享地址。</div>
        </div>
      </UI.PopoverContent>
    </UI.Popover>
  ),
};
