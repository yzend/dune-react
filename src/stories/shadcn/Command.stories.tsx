import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/command";

const meta: Meta<typeof UI.Command> = {
  title: "Shadcn/Command",
  component: UI.Command,
  tags: ["autodocs", "input"],
  parameters: {
    docs: {
      description: {
        component: "命令面板组件。适用于全局搜索、快捷命令和键盘优先的操作入口。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[420px] rounded-xl border">
      <UI.Command>
        <UI.CommandInput placeholder="搜索命令或页面..." />
        <UI.CommandList>
          <UI.CommandEmpty>没有匹配结果</UI.CommandEmpty>
          <UI.CommandGroup heading="建议操作">
            <UI.CommandItem>新建页面</UI.CommandItem>
            <UI.CommandItem>打开组件文档</UI.CommandItem>
            <UI.CommandItem>邀请团队成员</UI.CommandItem>
          </UI.CommandGroup>
        </UI.CommandList>
      </UI.Command>
    </div>
  ),
};
