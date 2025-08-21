import type { StoryObj } from "@storybook/react-vite";
import { Cover } from "../components/ui-custom/cover";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "自定义组件/Cover(封面)",
  component: Cover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: { type: "text" },
      description: "子组件内容",
    },
    className: {
      control: { type: "text" },
      description: "自定义样式类名",
    },
  },
};
// satisfies Meta<typeof Cover>;

export default meta;
type Story = StoryObj<typeof Cover>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultCover: Story = {
  args: {
    children: "悬停我",
  },
};
