import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "기본 텍스트입니다.",
    textLayout: "justify-start",
    textSizing: "md",
    textVisual: "primary",
  },
};

export const AllTypography: Story = {
  render: () => (
    <div className="space-y-4">
      <Text as="h1" textSizing="lg" content="Heading 1 스타일 - 가장 큰 제목" />
      <Text as="h2" textSizing="md" content="Heading 2 스타일 - 중간 제목" />
      <Text as="h3" textSizing="sm" content="Heading 3 스타일 - 작은 제목" />
    </div>
  ),
};

export const AllVisualStyles: Story = {
  render: () => (
    <div className="space-y-2">
      <Text textVisual="primary" content="Primary 색상 텍스트" />
      <Text textVisual="secondary" content="Secondary 색상 텍스트" />
      <Text textVisual="tertiary" content="Tertiary 색상 텍스트" />
    </div>
  ),
};

export const AllLayouts: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <div className="w-[20rem] h-auto border p-4">
        <Text
          content="왼쪽 정렬된 텍스트"
          textLayout="justify-start"
          textSizing="md"
          textVisual="primary"
        />
      </div>
      <div className="w-[20rem] h-auto border p-4">
        <Text
          content="가운데 정렬된 텍스트"
          textLayout="justify-center"
          textSizing="md"
          textVisual="primary"
        />
      </div>
      <div className="w-[20rem] h-auto border p-4">
        <Text
          content="오른쪽 정렬된 텍스트"
          textLayout="justify-end"
          textSizing="md"
          textVisual="primary"
        />
      </div>
    </div>
  ),
};
