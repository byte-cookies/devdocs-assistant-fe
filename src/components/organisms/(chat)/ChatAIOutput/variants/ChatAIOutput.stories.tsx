import type { Meta, StoryObj } from "@storybook/react";
import ChatAIOutput from "./ChatAIOutput";

const meta: Meta<typeof ChatAIOutput> = {
  title: "Components/Organisms/Chat/ChatAIOutput/ChatAIOutput",
  component: ChatAIOutput,
  decorators: [
    (Story) => (
      <div style={{ width: "600px", padding: "20px", height: "1000px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
