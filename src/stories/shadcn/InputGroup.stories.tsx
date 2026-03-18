import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/input-group";

const meta: Meta<typeof UI.InputGroup> = {
  title: "Shadcn/InputGroup",
  component: UI.InputGroup,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "输入组合容器。适用于带前后缀、按钮或单位说明的输入场景。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.InputGroup className="w-[360px]">
      <UI.InputGroupText>https://</UI.InputGroupText>
      <UI.InputGroupInput placeholder="your-domain.com" />
      <UI.InputGroupText>.app</UI.InputGroupText>
    </UI.InputGroup>
  ),
};
