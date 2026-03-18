import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/field";
import { Input } from "../../components/shadcn/input";

const meta: Meta<typeof UI.Field> = {
  title: "Shadcn/Field",
  component: UI.Field,
  tags: ["autodocs", "form", "input"],
  parameters: {
    docs: {
      description: {
        component: "表单字段布局组件。适用于组合标签、说明、错误信息和输入控件。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[420px]">
      <UI.FieldGroup>
        <UI.Field>
          <UI.FieldLabel htmlFor="workspace-name">工作区名称</UI.FieldLabel>
          <UI.FieldContent>
            <Input id="workspace-name" placeholder="输入名称" />
            <UI.FieldDescription>用于团队内展示，后续可以再次修改。</UI.FieldDescription>
          </UI.FieldContent>
        </UI.Field>
      </UI.FieldGroup>
    </div>
  ),
};
