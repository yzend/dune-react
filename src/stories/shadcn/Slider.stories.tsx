import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/slider";

const meta: Meta<typeof UI.Slider> = {
  title: "Shadcn/Slider",
  component: UI.Slider,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "滑块输入组件。适用于音量、阈值、价格范围等连续值调整。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <UI.Slider defaultValue={[45]} max={100} step={1} className="w-[320px]" />,
};
