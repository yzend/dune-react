import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/spinner";

const meta: Meta<typeof UI.Spinner> = {
  title: "Shadcn/Spinner",
  component: UI.Spinner,
  tags: ["autodocs", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "加载指示器。适用于按钮内加载、页面等待和局部数据请求。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <UI.Spinner className="size-6" />,
};
