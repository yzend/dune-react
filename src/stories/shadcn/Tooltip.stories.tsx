import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/tooltip";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.Tooltip> = {
  title: "Shadcn/Tooltip",
  component: UI.Tooltip,
  tags: ["autodocs", "overlay", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "提示气泡组件。适用于图标按钮说明、缩写解释和鼠标悬停补充信息。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.TooltipProvider>
      <UI.Tooltip>
        <UI.TooltipTrigger render={<Button variant="outline" size="sm" />}>悬停查看</UI.TooltipTrigger>
        <UI.TooltipContent>用于解释当前操作的目的和结果。</UI.TooltipContent>
      </UI.Tooltip>
    </UI.TooltipProvider>
  ),
};
