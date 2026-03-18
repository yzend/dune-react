import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/input-otp";

const meta: Meta<typeof UI.InputOTP> = {
  title: "Shadcn/InputOTP",
  component: UI.InputOTP,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "验证码输入组件。适用于登录验证、二次确认和短信验证码录入。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.InputOTP maxLength={6} containerClassName="justify-center">
      <UI.InputOTPGroup>
        <UI.InputOTPSlot index={0} />
        <UI.InputOTPSlot index={1} />
        <UI.InputOTPSlot index={2} />
      </UI.InputOTPGroup>
      <UI.InputOTPSeparator />
      <UI.InputOTPGroup>
        <UI.InputOTPSlot index={3} />
        <UI.InputOTPSlot index={4} />
        <UI.InputOTPSlot index={5} />
      </UI.InputOTPGroup>
    </UI.InputOTP>
  ),
};
