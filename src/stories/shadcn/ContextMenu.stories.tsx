import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/context-menu";

const meta: Meta<typeof UI.ContextMenu> = {
  title: "Shadcn/ContextMenu",
  component: UI.ContextMenu,
  tags: ["autodocs", "overlay", "action"],
  parameters: {
    docs: {
      description: {
        component: "右键菜单。适用于列表项、文件管理和局部快捷操作。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.ContextMenu>
      <UI.ContextMenuTrigger>
        <div className="flex h-40 w-[320px] items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
          在这里点击右键
        </div>
      </UI.ContextMenuTrigger>
      <UI.ContextMenuContent>
        <UI.ContextMenuItem>复制链接</UI.ContextMenuItem>
        <UI.ContextMenuItem>重命名</UI.ContextMenuItem>
        <UI.ContextMenuSeparator />
        <UI.ContextMenuItem variant="destructive">删除</UI.ContextMenuItem>
      </UI.ContextMenuContent>
    </UI.ContextMenu>
  ),
};
