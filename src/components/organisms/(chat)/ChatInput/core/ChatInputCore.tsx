import { createContext, ReactNode, useContext } from "react";

import ChatInputLayout from "../layout/ChatInputLayout";
import ChatInputAttachButton from "./ChatInputAttachButton";
import ChatInputField from "./ChatInputField";
import ChatInputSendButton from "./ChatInputSendButton";

type ChatInputContextType = {};

export const ChatInputContext = createContext<ChatInputContextType | undefined>(
  undefined
);

export function useChatInputContext() {
  const ctx = useContext(ChatInputContext);
  if (!ctx) {
    throw new Error(
      "ChatInput compound components must be used within <ChatInput>"
    );
  }
  return ctx;
}

export type ChatInputCoreProps = {
  children: ReactNode;
};

export default function ChatInputCore({ children }: ChatInputCoreProps) {
  return (
    <ChatInputContext.Provider value={{}}>{children}</ChatInputContext.Provider>
  );
}

ChatInputCore.Field = ChatInputField;
ChatInputCore.AttachButton = ChatInputAttachButton;
ChatInputCore.SendButton = ChatInputSendButton;
ChatInputCore.Layout = ChatInputLayout;
