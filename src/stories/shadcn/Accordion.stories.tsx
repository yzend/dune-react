import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/accordion";

const meta: Meta<typeof UI.Accordion> = {
  title: "Shadcn/Accordion",
  component: UI.Accordion,
  tags: ["autodocs", "layout"],
  parameters: {
    docs: {
      description: {
        component:
          "折叠面板组件。适用于 FAQ、设置分组和按需展开的信息块。支持单项或多项展开。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[420px]">
      <UI.Accordion defaultValue={["item-1"]} multiple>
        <UI.AccordionItem value="item-1">
          <UI.AccordionTrigger>组件是否支持多项展开？</UI.AccordionTrigger>
          <UI.AccordionContent>
            支持，通过 <code>type=&quot;multiple&quot;</code> 配置即可。
          </UI.AccordionContent>
        </UI.AccordionItem>
        <UI.AccordionItem value="item-2">
          <UI.AccordionTrigger>是否适合放在设置页？</UI.AccordionTrigger>
          <UI.AccordionContent>
            适合，尤其适合信息密度较高的长表单或帮助文档。
          </UI.AccordionContent>
        </UI.AccordionItem>
      </UI.Accordion>
    </div>
  ),
};
