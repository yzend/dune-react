import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/scroll-area";

const meta: Meta<typeof UI.ScrollArea> = {
  title: "Shadcn/ScrollArea",
  component: UI.ScrollArea,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component: "自定义滚动区域。适用于日志面板、长列表和侧栏内容容器。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.ScrollArea className="h-60 w-[360px] rounded-xl border p-4">
      <div className="space-y-3">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="rounded-lg bg-muted px-3 py-2 text-sm">
            滚动项 {index + 1}
          </div>
        ))}
      </div>
    </UI.ScrollArea>
  ),
};
