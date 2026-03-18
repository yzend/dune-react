import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/dropdown-menu";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.DropdownMenu> = {
  title: "Shadcn/DropdownMenu",
  component: UI.DropdownMenu,
  tags: ["autodocs", "overlay", "action"],
  parameters: {
    docs: {
      description: {
        component: "下拉菜单。适用于更多操作、列表项快捷菜单和工具栏溢出操作。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.DropdownMenu>
      <UI.DropdownMenuTrigger render={<Button variant="outline" />}>更多操作</UI.DropdownMenuTrigger>
      <UI.DropdownMenuContent>
        <UI.DropdownMenuItem>编辑</UI.DropdownMenuItem>
        <UI.DropdownMenuItem>复制链接</UI.DropdownMenuItem>
        <UI.DropdownMenuSeparator />
        <UI.DropdownMenuItem variant="destructive">删除</UI.DropdownMenuItem>
      </UI.DropdownMenuContent>
    </UI.DropdownMenu>
  ),
};
