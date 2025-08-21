import type { StoryObj } from "@storybook/react-vite";
import React from "react";

import Background from "../components/ui-custom/background";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "自定义组件/Background(背景)",
  component: Background,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    primaryColor: {
      control: { type: "text" },
      description: "主要颜色类名",
    },
    secondaryColor: {
      control: { type: "text" },
      description: "次要颜色类名",
    },
    children: {
      control: { type: "text" },
      description: "子组件内容",
    },
  },
};
// satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof Background>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RedBackground: Story = {
  args: {
    primaryColor: "bg-red-500",
    secondaryColor: "bg-purple-400",
    children: (
      <div className="p-8 text-center">
        <h1 className="text-2xl text-gray-200 font-bold mb-4">背景组件示例</h1>
        <p className="text-lg text-gray-200">这是一个带有模糊背景效果的组件</p>
      </div>
    ),
  },
};

// export const CustomColors: Story = {
//   args: {
//     primaryColor: "bg-blue-500",
//     secondaryColor: "bg-purple-400",
//     children: (
//       <div className="p-8 text-center">
//         <h1 className="text-2xl font-bold mb-4 text-white">自定义颜色背景</h1>
//         <p className="text-lg text-white">使用蓝色和紫色的背景效果</p>
//       </div>
//     ),
//   },
// };

export const GreenBackground: Story = {
  args: {
    primaryColor: "bg-green-500",
    secondaryColor: "bg-yellow-400",
  },
};
