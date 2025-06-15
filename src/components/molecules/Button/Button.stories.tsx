import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Molecules/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "기본 버튼",
    buttonVisual: "primary",
    buttonSizing: "full",
    buttonInteractive: true,
  },
};

export const WithTextProp: Story = {
  args: {
    text: "텍스트 prop 사용",
    buttonVisual: "primary",
    buttonSizing: "full",
    buttonInteractive: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    text: "왼쪽 아이콘",
    buttonVisual: "primary",
    buttonSizing: "full",
    buttonInteractive: true,
    leftIcon: {
      src: "/down.svg",
      alt: "Down Icon",
      iconSizing: "md",
    },
  },
};

export const WithRightIcon: Story = {
  args: {
    text: "오른쪽 아이콘",
    buttonVisual: "primary",
    buttonSizing: "full",
    buttonInteractive: true,
    rightIcon: {
      src: "/down.svg",
      alt: "Down Icon",
      iconSizing: "md",
    },
  },
};

export const WithLeftAndRightIcons: Story = {
  args: {
    text: "양쪽 아이콘",
    buttonVisual: "primary",
    buttonSizing: "full",
    buttonInteractive: true,
    leftIcon: {
      src: "/down.svg",
      alt: "Down Icon",
      iconSizing: "md",
    },
    rightIcon: {
      src: "/down.svg",
      alt: "Down Icon",
      iconSizing: "md",
    },
  },
};

export const Disabled: Story = {
  args: {
    text: "비활성화된 버튼",
    buttonVisual: "primary",
    buttonSizing: "full",
    buttonInteractive: false,
  },
};
