import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/progress";

const meta: Meta<typeof UI.Progress> = {
  title: "Shadcn/Progress",
  component: UI.Progress,
  tags: ["autodocs", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "进度条组件。适用于上传进度、任务执行状态和 onboarding 完成度。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 68,
  },
  render: (args) => <UI.Progress {...args} className="w-[320px]" />,
};
