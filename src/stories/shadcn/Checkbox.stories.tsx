import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/checkbox";
import { Label } from "../../components/shadcn/label";

const meta: Meta<typeof UI.Checkbox> = {
  title: "Shadcn/Checkbox",
  component: UI.Checkbox,
  tags: ["autodocs", "form", "input"],
  parameters: {
    docs: {
      description: {
        component: "复选框组件。适用于多选设置、批量操作和偏好选项。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <UI.Checkbox defaultChecked id="terms" />
      <Label htmlFor="terms">接收产品更新和版本通知</Label>
    </div>
  ),
};
