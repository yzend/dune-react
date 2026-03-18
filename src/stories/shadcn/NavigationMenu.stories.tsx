import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/navigation-menu";

const meta: Meta<typeof UI.NavigationMenu> = {
  title: "Shadcn/NavigationMenu",
  component: UI.NavigationMenu,
  tags: ["autodocs", "navigation"],
  parameters: {
    docs: {
      description: {
        component: "导航菜单组件。适用于顶部站点导航、产品信息架构和多层级内容入口。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.NavigationMenu>
      <UI.NavigationMenuList>
        <UI.NavigationMenuItem>
          <UI.NavigationMenuTrigger>产品</UI.NavigationMenuTrigger>
          <UI.NavigationMenuContent className="min-w-[280px] p-4">
            <div className="space-y-2 text-sm">
              <UI.NavigationMenuLink href="#">分析仪表盘</UI.NavigationMenuLink>
              <UI.NavigationMenuLink href="#">工作流自动化</UI.NavigationMenuLink>
            </div>
          </UI.NavigationMenuContent>
        </UI.NavigationMenuItem>
        <UI.NavigationMenuItem>
          <UI.NavigationMenuLink href="#">文档</UI.NavigationMenuLink>
        </UI.NavigationMenuItem>
      </UI.NavigationMenuList>
    </UI.NavigationMenu>
  ),
};
