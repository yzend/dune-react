import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/radio-group";
import { Label } from "../../components/shadcn/label";

const meta: Meta<typeof UI.RadioGroup> = {
  title: "Shadcn/RadioGroup",
  component: UI.RadioGroup,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "单选组组件。适用于互斥选择，如套餐、主题或流程分支。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.RadioGroup defaultValue="pro" className="space-y-3">
      <div className="flex items-center gap-3">
        <UI.RadioGroupItem value="starter" id="starter" />
        <Label htmlFor="starter">Starter</Label>
      </div>
      <div className="flex items-center gap-3">
        <UI.RadioGroupItem value="pro" id="pro" />
        <Label htmlFor="pro">Pro</Label>
      </div>
    </UI.RadioGroup>
  ),
};
