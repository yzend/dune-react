import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/menubar";

const meta: Meta<typeof UI.Menubar> = {
  title: "Shadcn/Menubar",
  component: UI.Menubar,
  tags: ["autodocs", "navigation", "action"],
  parameters: {
    docs: {
      description: {
        component: "菜单栏组件。适用于桌面端顶部菜单、编辑器工具条和应用级导航。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Menubar>
      <UI.MenubarMenu>
        <UI.MenubarTrigger>文件</UI.MenubarTrigger>
        <UI.MenubarContent>
          <UI.MenubarItem>新建</UI.MenubarItem>
          <UI.MenubarItem>复制</UI.MenubarItem>
        </UI.MenubarContent>
      </UI.MenubarMenu>
      <UI.MenubarMenu>
        <UI.MenubarTrigger>编辑</UI.MenubarTrigger>
        <UI.MenubarContent>
          <UI.MenubarItem>撤销</UI.MenubarItem>
          <UI.MenubarItem>重做</UI.MenubarItem>
        </UI.MenubarContent>
      </UI.MenubarMenu>
    </UI.Menubar>
  ),
};
