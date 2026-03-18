import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/resizable-navbar";

const items = [
  { name: "产品", link: "#" },
  { name: "定价", link: "#" },
  { name: "文档", link: "#" },
];

const meta: Meta<typeof UI.Navbar> = {
  title: "Shadcn/ResizableNavbar",
  component: UI.Navbar,
  tags: ["autodocs", "navigation"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "带滚动反馈的响应式导航栏。适用于营销页、产品首页和沉浸式顶部导航。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-[720px] bg-linear-to-b from-background to-muted/40 p-6">
      <UI.Navbar>
        <UI.NavBody>
          <UI.NavbarLogo />
          <UI.NavItems items={items} />
          <UI.NavbarButton variant="dark">开始使用</UI.NavbarButton>
        </UI.NavBody>
      </UI.Navbar>
      <div className="mx-auto mt-32 max-w-3xl text-center">
        <h2 className="text-4xl font-semibold">向下滚动以查看导航栏状态变化</h2>
      </div>
    </div>
  ),
};
