import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "아이콘 이미지 경로",
    },
    alt: {
      control: "text",
      description: "접근성을 위한 alt 텍스트",
    },
    iconSizing: {
      control: { type: "select" },
      options: ["md", "lg", "xl", "full"],
      description: "아이콘 크기",
    },
    priority: {
      control: "boolean",
      description: "Next.js Image priority 속성",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/down.svg",
    alt: "아래 화살표 아이콘",
    iconSizing: "md",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4">
      <Icon src="/down.svg" alt="아래 화살표 아이콘" iconSizing="md" />
      <Icon src="/down.svg" alt="위 화살표 아이콘" iconSizing="lg" />
      <Icon src="/down.svg" alt="전송 아이콘" iconSizing="xl" />
    </div>
  ),
};
