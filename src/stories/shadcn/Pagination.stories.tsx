import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/pagination";

const meta: Meta<typeof UI.Pagination> = {
  title: "Shadcn/Pagination",
  component: UI.Pagination,
  tags: ["autodocs", "navigation"],
  parameters: {
    docs: {
      description: {
        component: "分页导航。适用于表格、列表和搜索结果页。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Pagination>
      <UI.PaginationContent>
        <UI.PaginationItem>
          <UI.PaginationPrevious href="#" />
        </UI.PaginationItem>
        <UI.PaginationItem>
          <UI.PaginationLink href="#" isActive>
            1
          </UI.PaginationLink>
        </UI.PaginationItem>
        <UI.PaginationItem>
          <UI.PaginationLink href="#">2</UI.PaginationLink>
        </UI.PaginationItem>
        <UI.PaginationItem>
          <UI.PaginationEllipsis />
        </UI.PaginationItem>
        <UI.PaginationItem>
          <UI.PaginationNext href="#" />
        </UI.PaginationItem>
      </UI.PaginationContent>
    </UI.Pagination>
  ),
};
