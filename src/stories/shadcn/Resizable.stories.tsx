import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/resizable";

const meta: Meta<typeof UI.ResizablePanelGroup> = {
  title: "Shadcn/Resizable",
  component: UI.ResizablePanelGroup,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component: "可调整尺寸的面板布局。适用于 IDE、双栏详情页和仪表盘分区。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-[240px] w-[520px] rounded-xl border">
      <UI.ResizablePanelGroup direction="horizontal">
        <UI.ResizablePanel defaultSize={35} className="p-4">侧边栏</UI.ResizablePanel>
        <UI.ResizableHandle withHandle />
        <UI.ResizablePanel defaultSize={65} className="p-4">主内容区</UI.ResizablePanel>
      </UI.ResizablePanelGroup>
    </div>
  ),
};
