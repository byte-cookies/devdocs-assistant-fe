"use client";

import { createContext, useContext } from "react";
import ChatUserOutputLayout from "../layout/ChatUserOutputLayout";
import ChatUserOutputContent from "./ChatUserOutputContent";

// Context
interface ChatUserOutputContextProps {
  content: string;
}
export const ChatUserOutputContext = createContext<
  ChatUserOutputContextProps | undefined
>(undefined);
export const useChatUserOutputContext = () => {
  const context = useContext(ChatUserOutputContext);
  if (!context) {
    throw new Error(
      "useChatUserOutputContext must be used within a ChatUserOutputProvider"
    );
  }
  return context;
};

// Provider (Core)
export type ChatUserOutputCoreProps = {
  children: React.ReactNode;
  content: string;
};
export default function ChatUserOutputCore({
  children,
  content,
}: ChatUserOutputCoreProps) {
  return (
    <ChatUserOutputContext.Provider value={{ content }}>
      {children}
    </ChatUserOutputContext.Provider>
  );
}

ChatUserOutputCore.Layout = ChatUserOutputLayout;
ChatUserOutputCore.Content = ChatUserOutputContent;
