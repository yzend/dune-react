import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/item";
import { Badge } from "../../components/shadcn/badge";

const meta: Meta<typeof UI.Item> = {
  title: "Shadcn/Item",
  component: UI.Item,
  tags: ["autodocs", "layout", "container"],
  parameters: {
    docs: {
      description: {
        component: "列表项构建组件。适用于设置列表、资源条目和带操作的行内容布局。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[460px]">
      <UI.Item variant="outline">
        <UI.ItemContent>
          <UI.ItemTitle>API Access</UI.ItemTitle>
          <UI.ItemDescription>为外部系统生成带权限范围的访问令牌。</UI.ItemDescription>
        </UI.ItemContent>
        <UI.ItemActions>
          <Badge variant="secondary">Active</Badge>
        </UI.ItemActions>
      </UI.Item>
    </div>
  ),
};
