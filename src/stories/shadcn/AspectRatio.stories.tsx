import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/aspect-ratio";

const meta: Meta<typeof UI.AspectRatio> = {
  title: "Shadcn/AspectRatio",
  component: UI.AspectRatio,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component: "固定宽高比容器。适用于图片、视频封面和卡片媒体区域，保证布局稳定。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[360px]">
      <UI.AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground">
          16:9 预览区域
        </div>
      </UI.AspectRatio>
    </div>
  ),
};
