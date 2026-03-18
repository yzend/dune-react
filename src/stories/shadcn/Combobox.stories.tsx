import type { Meta, StoryObj } from "@storybook/react-vite";
import * as UI from "../../components/shadcn/combobox";

const frameworks = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

const meta: Meta<typeof UI.Combobox> = {
  title: "Shadcn/Combobox",
  component: UI.Combobox,
  tags: ["autodocs", "input", "form"],
  parameters: {
    docs: {
      description: {
        component: "可搜索下拉选择器。适用于选项较多、需要模糊搜索或多选扩展的表单场景。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[320px]">
      <UI.Combobox items={frameworks} defaultValue={frameworks[0]}>
        <UI.ComboboxInput placeholder="选择框架" />
        <UI.ComboboxContent>
          <UI.ComboboxEmpty>没有匹配结果</UI.ComboboxEmpty>
          <UI.ComboboxList>
            <UI.ComboboxCollection items={frameworks}>
              {(item) => (
                <UI.ComboboxItem key={item.value} value={item}>
                  {item.label}
                </UI.ComboboxItem>
              )}
            </UI.ComboboxCollection>
          </UI.ComboboxList>
        </UI.ComboboxContent>
      </UI.Combobox>
    </div>
  ),
};
