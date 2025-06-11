import { ChatAIOutputCore } from "../core";

interface ChatAIOutputProps {
  content?: string;
}

function ChatAIOutput({ content }: ChatAIOutputProps) {
  return (
    <ChatAIOutputCore content={content}>
      <ChatAIOutputCore.Layout>
        <ChatAIOutputCore.Content />
        <ChatAIOutputCore.Toggle />
      </ChatAIOutputCore.Layout>
    </ChatAIOutputCore>
  );
}

export default ChatAIOutput;
export type { ChatAIOutputProps };
