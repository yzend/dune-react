import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/table";

const rows = [
  { name: "Starter", members: 3, status: "Active" },
  { name: "Pro", members: 12, status: "Trial" },
  { name: "Enterprise", members: 42, status: "Active" },
];

const meta: Meta<typeof UI.Table> = {
  title: "Shadcn/Table",
  component: UI.Table,
  tags: ["autodocs", "data", "layout"],
  parameters: {
    docs: {
      description: {
        component: "通用表格组件。适用于后台列表、计费方案、成员管理和数据摘要展示。支持表头、正文与脚注结构。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[560px] rounded-xl border">
      <UI.Table>
        <UI.TableHeader>
          <UI.TableRow>
            <UI.TableHead>Plan</UI.TableHead>
            <UI.TableHead>Members</UI.TableHead>
            <UI.TableHead>Status</UI.TableHead>
          </UI.TableRow>
        </UI.TableHeader>
        <UI.TableBody>
          {rows.map((row) => (
            <UI.TableRow key={row.name}>
              <UI.TableCell>{row.name}</UI.TableCell>
              <UI.TableCell>{row.members}</UI.TableCell>
              <UI.TableCell>{row.status}</UI.TableCell>
            </UI.TableRow>
          ))}
        </UI.TableBody>
      </UI.Table>
    </div>
  ),
};
