import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/form";
import { Input } from "../../components/shadcn/input";

const meta: Meta<typeof UI.Form> = {
  title: "Shadcn/Form",
  component: UI.Form,
  tags: ["autodocs", "form"],
  parameters: {
    docs: {
      description: {
        component: "表单占位实现。当前仓库保留最小兼容层，用于承载 react-hook-form 风格的组合 API。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Form className="w-[420px] space-y-4 rounded-xl border p-4">
      <UI.FormField
        name="email"
        render={({ field }) => (
          <UI.FormItem>
            <UI.FormLabel>邮箱</UI.FormLabel>
            <UI.FormControl>
              <Input {...field} placeholder="name@company.com" />
            </UI.FormControl>
            <UI.FormDescription>用于接收邀请和系统通知。</UI.FormDescription>
          </UI.FormItem>
        )}
      />
    </UI.Form>
  ),
};
