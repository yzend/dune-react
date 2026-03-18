import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/skeleton";

const meta: Meta<typeof UI.Skeleton> = {
  title: "Shadcn/Skeleton",
  component: UI.Skeleton,
  tags: ["autodocs", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "骨架屏组件。适用于内容加载前的占位反馈。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-3">
      <UI.Skeleton className="h-6 w-48" />
      <UI.Skeleton className="h-4 w-80" />
      <UI.Skeleton className="h-4 w-64" />
    </div>
  ),
};
