import type { Meta, StoryObj } from "@storybook/react";
import ChatAIOutputContent from "./ChatAIOutputContent";
import ChatAIOutputCore, { ChatAIOutputCoreProps } from "./ChatAIOutputCore";

const meta: Meta<ChatAIOutputCoreProps> = {
  title: "Components/Organisms/Chat/ChatAIOutput/ChatAIOutputContent",
  component: ChatAIOutputContent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "AI 응답의 텍스트 콘텐츠를 표시하는 컴포넌트입니다. Context에서 content를 받아와 렌더링합니다.",
      },
    },
  },
  decorators: [
    (Story, { args }) => (
      <div style={{ width: "600px", padding: "20px" }}>
        <ChatAIOutputCore content={args.content || "기본 콘텐츠"}>
          <Story />
        </ChatAIOutputCore>
      </div>
    ),
  ],
  argTypes: {
    content: {
      control: "text",
      description: "표시할 AI 응답 텍스트",
    },
  },
};

export default meta;
type Story = StoryObj<ChatAIOutputCoreProps>;

export const Default: Story = {
  args: {
    content: "안녕하세요! 이것은 기본 AI 응답입니다.",
  },
};

export const ShortResponse: Story = {
  args: {
    content: "짧은 응답",
  },
};

export const LongResponse: Story = {
  args: {
    content:
      "이것은 매우 긴 AI 응답의 예시입니다. 여러 줄에 걸쳐서 표시되며, 사용자가 읽기 쉽도록 적절한 줄바꿈과 서식이 적용됩니다. 이러한 긴 텍스트는 실제 AI 모델의 응답에서 흔히 볼 수 있는 형태이며, 다양한 정보와 설명을 포함할 수 있습니다. 사용자 인터페이스는 이러한 긴 텍스트도 잘 처리할 수 있어야 합니다.",
  },
};

export const CodeExample: Story = {
  args: {
    content: `다음은 React 컴포넌트의 예시입니다:

function MyComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

이 컴포넌트는 카운터 기능을 제공합니다.`,
  },
};

export const MarkdownFormatted: Story = {
  args: {
    content: `# 제목

## 부제목

- 목록 아이템 1
- 목록 아이템 2
- 목록 아이템 3

**굵은 텍스트**와 *기울임 텍스트*를 포함한 다양한 형식의 텍스트입니다.

\`inline code\`와 함께 사용할 수 있습니다.`,
  },
};

export const Empty: Story = {
  args: {
    content: "",
  },
};
