import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/textarea";

const meta: Meta<typeof UI.Textarea> = {
  title: "Shadcn/Textarea",
  component: UI.Textarea,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "多行文本输入框。适用于描述、备注、评论和长文本配置项。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "输入补充说明或需求细节...",
    className: "w-[420px]",
  },
};
