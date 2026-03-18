import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/calendar";

const meta: Meta<typeof UI.Calendar> = {
  title: "Shadcn/Calendar",
  component: UI.Calendar,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "日期选择组件。适用于排期、筛选条件和预约场景。支持单选、范围选择和自定义显示。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <UI.Calendar mode="single" selected={new Date("2026-03-18")} className="rounded-xl border" />,
};
