import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/switch";
import { Label } from "../../components/shadcn/label";

const meta: Meta<typeof UI.Switch> = {
  title: "Shadcn/Switch",
  component: UI.Switch,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "开关组件。适用于布尔设置、通知开关和功能启停。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <UI.Switch defaultChecked id="notifications" />
      <Label htmlFor="notifications">启用邮件通知</Label>
    </div>
  ),
};
