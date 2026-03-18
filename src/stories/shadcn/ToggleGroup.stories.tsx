import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/toggle-group";

const meta: Meta<typeof UI.ToggleGroup> = {
  title: "Shadcn/ToggleGroup",
  component: UI.ToggleGroup,
  tags: ["autodocs", "action"],
  parameters: {
    docs: {
      description: {
        component: "分组切换按钮。适用于视图模式切换、编辑器格式切换和互斥筛选项。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.ToggleGroup type="single" defaultValue="grid">
      <UI.ToggleGroupItem value="grid">网格</UI.ToggleGroupItem>
      <UI.ToggleGroupItem value="list">列表</UI.ToggleGroupItem>
      <UI.ToggleGroupItem value="kanban">看板</UI.ToggleGroupItem>
    </UI.ToggleGroup>
  ),
};
