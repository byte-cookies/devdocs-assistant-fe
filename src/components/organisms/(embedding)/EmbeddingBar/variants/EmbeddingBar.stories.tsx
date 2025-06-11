import type { Meta, StoryObj } from "@storybook/react";
import EmbeddingBar from "./EmbeddingBar";

const meta: Meta<typeof EmbeddingBar> = {
  title: "Components/Organisms/Embedding/EmbeddingBar",
  component: EmbeddingBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "EmbeddingBar is a component for managing and displaying embedding documents.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          width: "400px",
          height: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: false,
      description: "Child components to render inside the EmbeddingBar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
};
