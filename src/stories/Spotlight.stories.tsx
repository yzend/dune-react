import type { StoryObj } from "@storybook/react-vite";
import React from "react";

import { Spotlight } from "../components/ui-custom/spotlight-new";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "自定义组件/Spotlight(聚光灯)",
  component: Spotlight,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    gradientFirst: {
      control: { type: "text" },
      description: "第一个渐变背景",
    },
    gradientSecond: {
      control: { type: "text" },
      description: "第二个渐变背景",
    },
    gradientThird: {
      control: { type: "text" },
      description: "第三个渐变背景",
    },
    translateY: {
      control: { type: "number" },
      description: "Y轴偏移量",
    },
    width: {
      control: { type: "number" },
      description: "宽度",
    },
    height: {
      control: { type: "number" },
      description: "高度",
    },
    smallWidth: {
      control: { type: "number" },
      description: "小宽度",
    },
    duration: {
      control: { type: "number" },
      description: "动画持续时间",
    },
    xOffset: {
      control: { type: "number" },
      description: "X轴偏移量",
    },
  },
};
// satisfies Meta<typeof Spotlight>;

export default meta;
type Story = StoryObj<typeof Spotlight>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultSpotlight: Story = {
  args: {},
  render: (args) => (
    <div className="relative h-[500px] w-[500px] bg-black">
      <Spotlight {...args} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">聚光灯效果</h1>
          <p className="text-lg">这是一个动态的聚光灯背景组件</p>
        </div>
      </div>
    </div>
  ),
};
