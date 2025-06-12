import { createContext, ReactNode, useContext } from "react";

import ChatInputLayout from "../layout";
import ChatInputAttachButton from "./ChatInputAttachButton";
import ChatInputField from "./ChatInputField";
import ChatInputSendButton from "./ChatInputSendButton";

type ChatInputContextType = {
  handleAttach?: () => void; // handleAttach 속성 추가 (optional)
};

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
  onAttach?: () => void; // onAttach prop 추가
};

export default function ChatInputCore({
  children,
  onAttach,
}: ChatInputCoreProps) {
  return (
    <ChatInputContext.Provider value={{ handleAttach: onAttach }}>
      {children}
    </ChatInputContext.Provider>
  );
}

ChatInputCore.Field = ChatInputField;
ChatInputCore.AttachButton = ChatInputAttachButton;
ChatInputCore.SendButton = ChatInputSendButton;
ChatInputCore.Layout = ChatInputLayout;
