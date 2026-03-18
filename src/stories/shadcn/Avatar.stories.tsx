import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/avatar";

const meta: Meta<typeof UI.Avatar> = {
  title: "Shadcn/Avatar",
  component: UI.Avatar,
  tags: ["autodocs", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "头像组件。适用于用户身份展示、列表成员信息和评论区作者信息。支持图片、回退文案和分组展示。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <UI.Avatar>
        <UI.AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop" alt="Taylor" />
        <UI.AvatarFallback>TY</UI.AvatarFallback>
      </UI.Avatar>
      <UI.AvatarGroup>
        <UI.Avatar>
          <UI.AvatarFallback>AR</UI.AvatarFallback>
        </UI.Avatar>
        <UI.Avatar>
          <UI.AvatarFallback>LM</UI.AvatarFallback>
        </UI.Avatar>
        <UI.AvatarGroupCount>+3</UI.AvatarGroupCount>
      </UI.AvatarGroup>
    </div>
  ),
};
