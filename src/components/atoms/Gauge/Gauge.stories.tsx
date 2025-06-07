import type { Meta, StoryObj } from "@storybook/react";
import Gauge from "./Gauge";

const meta: Meta<typeof Gauge> = {
  title: "Components/Atoms/Gauge",
  component: Gauge,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "8rem", height: "2rem" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
      description: "Current gauge value (0-100)",
    },
    max: {
      control: {
        type: "number",
        min: 1,
        max: 200,
        step: 1,
      },
      description: "Maximum gauge value",
    },
    visual: {
      control: "color",
      description: "Color of the gauge fill",
    },
  },
  args: {
    value: 65,
    max: 100,
    visual: "blue",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    value: 60,
    max: 100,
    visual: "blue",
  },
};

// 애니메이션 활성화
export const WithAnimation: Story = {
  args: {
    value: 75,
    max: 100,
    visual: "green",
  },
};
