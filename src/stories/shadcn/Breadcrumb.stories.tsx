import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/breadcrumb";

const meta: Meta<typeof UI.Breadcrumb> = {
  title: "Shadcn/Breadcrumb",
  component: UI.Breadcrumb,
  tags: ["autodocs", "navigation"],
  parameters: {
    docs: {
      description: {
        component: "面包屑导航。适用于多层级页面、后台管理和详情页定位。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Breadcrumb>
      <UI.BreadcrumbList>
        <UI.BreadcrumbItem>
          <UI.BreadcrumbLink href="#">工作台</UI.BreadcrumbLink>
        </UI.BreadcrumbItem>
        <UI.BreadcrumbSeparator />
        <UI.BreadcrumbItem>
          <UI.BreadcrumbLink href="#">组件库</UI.BreadcrumbLink>
        </UI.BreadcrumbItem>
        <UI.BreadcrumbSeparator />
        <UI.BreadcrumbItem>
          <UI.BreadcrumbPage>Button</UI.BreadcrumbPage>
        </UI.BreadcrumbItem>
      </UI.BreadcrumbList>
    </UI.Breadcrumb>
  ),
};
