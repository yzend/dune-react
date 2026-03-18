import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/alert";

const meta: Meta<typeof UI.Alert> = {
  title: "Shadcn/Alert",
  component: UI.Alert,
  tags: ["autodocs", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "内联提示组件。适用于表单反馈、系统状态说明和操作结果提示。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[420px]">
      <UI.Alert>
        <UI.AlertTitle>部署已完成</UI.AlertTitle>
        <UI.AlertDescription>新版本已经发布到预览环境，可以继续做回归验证。</UI.AlertDescription>
      </UI.Alert>
    </div>
  ),
};
