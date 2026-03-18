import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import * as UI from "../../components/shadcn/chart";

const data = [
  { month: "Jan", visitors: 1200 },
  { month: "Feb", visitors: 1890 },
  { month: "Mar", visitors: 1640 },
  { month: "Apr", visitors: 2320 },
];

const config = {
  visitors: {
    label: "访客数",
    color: "hsl(var(--chart-1))",
  },
};

const meta: Meta<typeof UI.ChartContainer> = {
  title: "Shadcn/Chart",
  component: UI.ChartContainer,
  tags: ["autodocs", "data", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "图表容器与 Recharts 适配层。适用于仪表盘、运营报表和趋势分析场景。支持统一主题 token、图例和 tooltip 样式。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[520px] rounded-xl border p-4">
      <UI.ChartContainer config={config} className="h-[260px] w-full">
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <UI.ChartTooltip content={<UI.ChartTooltipContent />} />
          <Bar dataKey="visitors" fill="var(--color-visitors)" radius={8} />
        </BarChart>
      </UI.ChartContainer>
    </div>
  ),
};
