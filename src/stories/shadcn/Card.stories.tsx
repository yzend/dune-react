import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/card";
import { Button } from "../../components/shadcn/button";

const meta: Meta<typeof UI.Card> = {
  title: "Shadcn/Card",
  component: UI.Card,
  tags: ["autodocs", "container", "layout"],
  parameters: {
    docs: {
      description: {
        component: "通用卡片容器。适用于仪表盘数据块、内容摘要、设置卡片和营销信息承载。支持头部、正文和操作区分层。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UI.Card className="w-[360px]">
      <UI.CardHeader>
        <UI.CardTitle>团队用量</UI.CardTitle>
        <UI.CardDescription>查看本月 API 调用与成员协作情况。</UI.CardDescription>
      </UI.CardHeader>
      <UI.CardContent>
        <div className="text-3xl font-semibold">128,430</div>
      </UI.CardContent>
      <UI.CardFooter className="justify-between">
        <span className="text-sm text-muted-foreground">较上月增长 18%</span>
        <Button size="sm">查看详情</Button>
      </UI.CardFooter>
    </UI.Card>
  ),
};
