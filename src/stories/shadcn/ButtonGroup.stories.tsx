import type { Meta, StoryObj } from "@storybook/react-vite";
import * as Group from "../../components/shadcn/button-group";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof Group.ButtonGroup> = {
  title: "Shadcn/ButtonGroup",
  component: Group.ButtonGroup,
  tags: ["autodocs", "action"],
  parameters: {
    docs: {
      description: {
        component: "按钮组容器。适用于筛选切换、分段操作和紧凑型工具栏。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Group.ButtonGroup>
      <Button variant="outline">全部</Button>
      <Group.ButtonGroupSeparator />
      <Button variant="outline">草稿</Button>
      <Group.ButtonGroupSeparator />
      <Button variant="outline">已发布</Button>
    </Group.ButtonGroup>
  ),
};
