import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/native-select";

const meta: Meta<typeof UI.NativeSelect> = {
  title: "Shadcn/NativeSelect",
  component: UI.NativeSelect,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "原生选择器封装。适用于移动端友好或不需要自定义弹层的简单选项选择。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[240px]">
      <UI.NativeSelect defaultValue="starter">
        <UI.NativeSelectOption value="starter">Starter</UI.NativeSelectOption>
        <UI.NativeSelectOption value="pro">Pro</UI.NativeSelectOption>
        <UI.NativeSelectOption value="enterprise">Enterprise</UI.NativeSelectOption>
      </UI.NativeSelect>
    </div>
  ),
};
