import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatOutput } from "./ChatOutput";

const meta: Meta<typeof ChatOutput.Root> = {
  title: "Organisms/Chat/ChatOutput",
  component: ChatOutput.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ChatOutput is a compound component for displaying chat messages with avatar, timestamp, actions, and interactive features.",
      },
    },
  },
  argTypes: {
    messageId: {
      control: { type: "text" },
      description: "Unique identifier for the message",
    },
    senderName: {
      control: { type: "text" },
      description: "Name of the message sender",
    },
    timestamp: {
      control: { type: "text" },
      description: "Message timestamp",
    },
    avatarSrc: {
      control: { type: "text" },
      description: "Avatar image source URL",
    },
  },
  args: {
    onCopy: fn(),
    onReply: fn(),
    onReact: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChatOutput.Root
        {...args}
        messageId="msg-1"
        senderName="Alice"
        timestamp="오후 2:30"
      >
        <ChatOutput.Container>
          <ChatOutput.Avatar />
          <ChatOutput.Content>
            <ChatOutput.Header>
              <ChatOutput.Name />
              <ChatOutput.Timestamp />
            </ChatOutput.Header>
            <ChatOutput.Body content="안녕하세요! 오늘 프로젝트 진행 상황은 어떤가요?" />
            <ChatOutput.Actions>
              <ChatOutput.CopyButton content="안녕하세요! 오늘 프로젝트 진행 상황은 어떤가요?" />
              <ChatOutput.ReplyButton />
              <ChatOutput.ReactButton reaction="👍" />
              <ChatOutput.ReactButton reaction="❤️" />
            </ChatOutput.Actions>
          </ChatOutput.Content>
        </ChatOutput.Container>
      </ChatOutput.Root>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChatOutput.Root
        {...args}
        messageId="msg-2"
        senderName="Bob"
        timestamp="오후 2:35"
        avatarSrc="/images/avatar-bob.jpg"
      >
        <ChatOutput.Container>
          <ChatOutput.Avatar />
          <ChatOutput.Content>
            <ChatOutput.Header>
              <ChatOutput.Name />
              <ChatOutput.Timestamp />
            </ChatOutput.Header>
            <ChatOutput.Body content="네, 진행이 잘 되고 있습니다. 오늘까지 UI 컴포넌트 작업을 완료할 예정입니다." />
            <ChatOutput.Actions>
              <ChatOutput.CopyButton content="네, 진행이 잘 되고 있습니다. 오늘까지 UI 컴포넌트 작업을 완료할 예정입니다." />
              <ChatOutput.ReplyButton />
              <ChatOutput.ReactButton reaction="👍" />
            </ChatOutput.Actions>
          </ChatOutput.Content>
        </ChatOutput.Container>
      </ChatOutput.Root>
    </div>
  ),
};

export const LongMessage: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChatOutput.Root
        {...args}
        messageId="msg-3"
        senderName="Charlie"
        timestamp="오후 3:00"
      >
        <ChatOutput.Container>
          <ChatOutput.Avatar />
          <ChatOutput.Content>
            <ChatOutput.Header>
              <ChatOutput.Name />
              <ChatOutput.Timestamp />
            </ChatOutput.Header>
            <ChatOutput.Body content="프로젝트의 전체적인 아키텍처에 대해서 설명드리면, React와 TypeScript를 기반으로 하는 모던 웹 애플리케이션입니다. 컴포넌트는 Atomic Design 패턴을 따라 구성되어 있으며, 각 컴포넌트는 재사용 가능하고 확장 가능한 구조로 설계되었습니다. 스타일링은 TailwindCSS와 class-variance-authority를 사용하여 일관성 있는 디자인 시스템을 구축했습니다." />
            <ChatOutput.Actions>
              <ChatOutput.CopyButton content="프로젝트의 전체적인 아키텍처에 대해서 설명드리면..." />
              <ChatOutput.ReplyButton />
              <ChatOutput.ReactButton reaction="👍" />
              <ChatOutput.ReactButton reaction="🤔" />
              <ChatOutput.ReactButton reaction="📚" />
            </ChatOutput.Actions>
          </ChatOutput.Content>
        </ChatOutput.Container>
      </ChatOutput.Root>
    </div>
  ),
};

export const CustomContent: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChatOutput.Root
        {...args}
        messageId="msg-4"
        senderName="Diana"
        timestamp="오후 3:15"
      >
        <ChatOutput.Container>
          <ChatOutput.Avatar />
          <ChatOutput.Content>
            <ChatOutput.Header>
              <ChatOutput.Name />
              <ChatOutput.Timestamp />
            </ChatOutput.Header>
            <ChatOutput.Body>
              <div className="space-y-2">
                <p>코드 리뷰 결과를 공유합니다:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>컴포넌트 구조가 잘 정리되어 있습니다</li>
                  <li>타입 정의가 명확합니다</li>
                  <li>성능 최적화 부분에서 개선점이 있습니다</li>
                </ul>
                <p>전체적으로 좋은 품질의 코드입니다! 👏</p>
              </div>
            </ChatOutput.Body>
            <ChatOutput.Actions>
              <ChatOutput.ReplyButton />
              <ChatOutput.ReactButton reaction="👏" />
              <ChatOutput.ReactButton reaction="💯" />
            </ChatOutput.Actions>
          </ChatOutput.Content>
        </ChatOutput.Container>
      </ChatOutput.Root>
    </div>
  ),
};

export const MinimalActions: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChatOutput.Root
        {...args}
        messageId="msg-5"
        senderName="Eve"
        timestamp="오후 3:30"
      >
        <ChatOutput.Container>
          <ChatOutput.Avatar />
          <ChatOutput.Content>
            <ChatOutput.Header>
              <ChatOutput.Name />
              <ChatOutput.Timestamp />
            </ChatOutput.Header>
            <ChatOutput.Body content="간단한 메시지입니다." />
            <ChatOutput.Actions>
              <ChatOutput.ReactButton reaction="👍" />
            </ChatOutput.Actions>
          </ChatOutput.Content>
        </ChatOutput.Container>
      </ChatOutput.Root>
    </div>
  ),
};
