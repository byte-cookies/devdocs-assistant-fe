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
    gaugeSizing: {
      control: { type: "select" },
      options: ["md"],
      description: "Size of the gauge",
    },
    gaugeVisual: {
      control: { type: "select" },
      options: ["blue", "green", "yellow", "red", "purple", "gradient"],
      description: "Color of the gauge fill",
    },
  },
  args: {
    value: 65,
    max: 100,
    gaugeSizing: "md",
    gaugeVisual: "blue",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {};
