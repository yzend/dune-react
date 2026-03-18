import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/sidebar";

const meta: Meta<typeof UI.Sidebar> = {
  title: "Shadcn/Sidebar",
  component: UI.Sidebar,
  tags: ["autodocs", "navigation", "layout"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "应用级侧边栏组件。适用于后台、工作台和多层级导航。支持折叠、移动端抽屉和菜单分组。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-[640px] bg-muted/20 p-6">
      <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
        <UI.SidebarProvider defaultOpen>
          <UI.Sidebar variant="inset" collapsible="icon">
            <UI.SidebarHeader>
              <div className="px-2 py-1 text-sm font-medium">Dune React</div>
              <UI.SidebarInput placeholder="搜索页面" />
            </UI.SidebarHeader>
            <UI.SidebarContent>
              <UI.SidebarGroup>
                <UI.SidebarGroupLabel>概览</UI.SidebarGroupLabel>
                <UI.SidebarGroupContent>
                  <UI.SidebarMenu>
                    <UI.SidebarMenuItem>
                      <UI.SidebarMenuButton isActive>仪表盘</UI.SidebarMenuButton>
                    </UI.SidebarMenuItem>
                    <UI.SidebarMenuItem>
                      <UI.SidebarMenuButton>组件库</UI.SidebarMenuButton>
                    </UI.SidebarMenuItem>
                    <UI.SidebarMenuItem>
                      <UI.SidebarMenuButton>自动化</UI.SidebarMenuButton>
                    </UI.SidebarMenuItem>
                  </UI.SidebarMenu>
                </UI.SidebarGroupContent>
              </UI.SidebarGroup>
            </UI.SidebarContent>
            <UI.SidebarFooter>
              <UI.SidebarMenu>
                <UI.SidebarMenuItem>
                  <UI.SidebarMenuButton>账号设置</UI.SidebarMenuButton>
                </UI.SidebarMenuItem>
              </UI.SidebarMenu>
            </UI.SidebarFooter>
            <UI.SidebarRail />
          </UI.Sidebar>
          <UI.SidebarInset className="min-h-[640px] p-6">
            <UI.SidebarTrigger className="mb-4" />
            <div className="rounded-xl border p-6">
              <h2 className="text-xl font-semibold">主内容区</h2>
              <p className="mt-2 text-sm text-muted-foreground">这里演示 Sidebar 与 Inset 区域的组合布局。</p>
            </div>
          </UI.SidebarInset>
        </UI.SidebarProvider>
      </div>
    </div>
  ),
};
