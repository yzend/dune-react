import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/carousel";

const slides = ["增长洞察", "用户分层", "自动化工作流"];

const meta: Meta<typeof UI.Carousel> = {
  title: "Shadcn/Carousel",
  component: UI.Carousel,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component: "轮播容器。适用于焦点内容展示、Banner 区和多步骤卡片切换。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-[420px] px-12">
      <UI.Carousel opts={{ loop: true }}>
        <UI.CarouselContent>
          {slides.map((slide) => (
            <UI.CarouselItem key={slide}>
              <div className="flex h-48 items-center justify-center rounded-xl border bg-muted text-xl font-medium">{slide}</div>
            </UI.CarouselItem>
          ))}
        </UI.CarouselContent>
        <UI.CarouselPrevious />
        <UI.CarouselNext />
      </UI.Carousel>
    </div>
  ),
};
