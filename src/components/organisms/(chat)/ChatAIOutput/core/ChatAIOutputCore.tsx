"use client";

import { MessageSource } from "@/store/chatStore";
import { createContext, useContext } from "react";
import ChatAIOutputLayout from "../layout";
import ChatAIOutputContent from "./ChatAIOutputContent";
import ChatAIOutputToggle from "./ChatAIOutputToggle";

// Context
interface ChatAIOutputContextProps {
  content: string;
  sources?: MessageSource[];
  isError?: boolean;
}

export const ChatAIOutputContext = createContext<
  ChatAIOutputContextProps | undefined
>(undefined);

export const useChatAIOutputContext = () => {
  const context = useContext(ChatAIOutputContext);
  if (!context) {
    throw new Error(
      "useChatAIOutputContext must be used within a ChatAIOutputProvider"
    );
  }
  return context;
};

// Provider (Core)
export type ChatAIOutputCoreProps = {
  children: React.ReactNode;
  content: string;
  sources?: MessageSource[];
  isError?: boolean;
};

export default function ChatAIOutputCore({
  children,
  content,
  sources,
  isError,
}: ChatAIOutputCoreProps) {
  return (
    <ChatAIOutputContext.Provider
      value={{
        content,
        sources,
        isError,
      }}
    >
      {children}
    </ChatAIOutputContext.Provider>
  );
}

ChatAIOutputCore.Content = ChatAIOutputContent;
ChatAIOutputCore.Toggle = ChatAIOutputToggle;
ChatAIOutputCore.Layout = ChatAIOutputLayout;
