"use client";

import { MessageSource } from "@/store/chatStore";
import { ChatAIOutputCore } from "../core";

interface ChatAIOutputProps {
  content: string;
  sources?: MessageSource[];
  isError?: boolean;
}

function ChatAIOutput({ content, sources, isError }: ChatAIOutputProps) {
  return (
    <ChatAIOutputCore content={content} sources={sources} isError={isError}>
      <ChatAIOutputCore.Layout>
        <ChatAIOutputCore.Content />
        <ChatAIOutputCore.Toggle />
      </ChatAIOutputCore.Layout>
    </ChatAIOutputCore>
  );
}

export default ChatAIOutput;
export type { ChatAIOutputProps };
