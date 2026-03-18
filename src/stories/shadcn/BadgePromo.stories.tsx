import type { Meta, StoryObj } from "@storybook/react-vite";
import ShinyPromoBadge from "../../components/shadcn/badge-promo";

const meta: Meta<typeof ShinyPromoBadge> = {
  title: "Shadcn/BadgePromo",
  component: ShinyPromoBadge,
  tags: ["autodocs", "feedback"],
  parameters: {
    docs: {
      description: {
        component: "促销或活动标签。适用于限时活动、新功能上线和营销提示。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "限时升级 20% OFF",
    showArrow: true,
  },
};
