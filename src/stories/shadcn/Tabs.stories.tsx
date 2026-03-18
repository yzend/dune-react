import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/tabs";

const meta: Meta<typeof UI.Tabs> = {
  title: "Shadcn/Tabs",
  component: UI.Tabs,
  tags: ["autodocs", "navigation", "layout"],
  parameters: {
    docs: {
      description: {
        component: "标签页组件。适用于设置分区、详情页切换和视图筛选。支持列表、触发器和对应内容区域。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Tabs defaultValue="account" className="w-[420px]">
      <UI.TabsList>
        <UI.TabsTrigger value="account">账号</UI.TabsTrigger>
        <UI.TabsTrigger value="billing">计费</UI.TabsTrigger>
      </UI.TabsList>
      <UI.TabsContent value="account" className="rounded-xl border p-4 text-sm text-muted-foreground">管理基本资料、密码和登录方式。</UI.TabsContent>
      <UI.TabsContent value="billing" className="rounded-xl border p-4 text-sm text-muted-foreground">查看套餐、发票和用量阈值。</UI.TabsContent>
    </UI.Tabs>
  ),
};
