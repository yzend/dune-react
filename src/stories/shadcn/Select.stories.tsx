import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/select";

const meta: Meta<typeof UI.Select> = {
  title: "Shadcn/Select",
  component: UI.Select,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "自定义下拉选择器。适用于状态选择、筛选条件和配置项切换。支持分组、滚动和自定义触发器。",
      },
    },
  },
  argTypes: {
    onValueChange: {
      description: "选项变更回调。",
      action: "valueChanged",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Select defaultValue="react">
      <UI.SelectTrigger className="w-[240px]">
        <UI.SelectValue placeholder="选择框架" />
      </UI.SelectTrigger>
      <UI.SelectContent>
        <UI.SelectItem value="react">React</UI.SelectItem>
        <UI.SelectItem value="vue">Vue</UI.SelectItem>
        <UI.SelectItem value="svelte">Svelte</UI.SelectItem>
      </UI.SelectContent>
    </UI.Select>
  ),
};
