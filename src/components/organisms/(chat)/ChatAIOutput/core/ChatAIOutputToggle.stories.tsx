import type { Meta, StoryObj } from "@storybook/react";
import ChatAIOutputToggle from "./ChatAIOutputToggle";

const meta: Meta<typeof ChatAIOutputToggle> = {
  title: "Components/Organisms/Chat/ChatAIOutput/ChatAIOutputToggle",
  component: ChatAIOutputToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "AI 응답의 검증 상태를 토글하고 복사/재생성 기능을 제공하는 컴포넌트입니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "100px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
