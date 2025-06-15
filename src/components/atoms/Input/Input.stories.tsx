import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Atoms/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Input은 사용자가 텍스트를 입력할 수 있는 기본 폼 요소입니다. 에러 상태와 다양한 크기를 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    inputSizing: {
      control: { type: "select" },
      options: ["chatInput", "docsInput"],
      description: "Input 크기 및 스타일",
    },
    inputVisual: {
      control: { type: "select" },
      options: ["chatInput", "docsInput"],
      description: "Input 시각적 스타일",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    inputSizing: "docsInput",
    inputVisual: "docsInput",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <h3 className="text-sm font-medium mb-2">Docs Input Style</h3>
        <Input inputSizing="docsInput" inputVisual="docsInput" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          Chat Input Style (Full Width)
        </h3>
        <div className="w-[40rem] h-[8rem] border border-gray-300 rounded">
          <Input inputSizing="chatInput" inputVisual="chatInput" />
        </div>
      </div>
    </div>
  ),
};
