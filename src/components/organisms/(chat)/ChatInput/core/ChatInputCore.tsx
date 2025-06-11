import { createContext, ReactNode, useContext, useState } from "react";

import ChatInputLayout from "../layout/ChatInputLayout";
import ChatInputAttachButton from "./ChatInputAttachButton";
import ChatInputField from "./ChatInputField";
import ChatInputSendButton from "./ChatInputSendButton";

type ChatInputContextType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
  handleAttach: () => void;
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
};

export default function ChatInputCore({ children }: ChatInputCoreProps) {
  const [value, setValue] = useState("");
  const handleSend = () => {};
  const handleAttach = () => {};

  return (
    <ChatInputContext.Provider
      value={{
        value,
        setValue,
        handleSend,
        handleAttach,
      }}
    >
      {children}
    </ChatInputContext.Provider>
  );
}

ChatInputCore.Field = ChatInputField;
ChatInputCore.AttachButton = ChatInputAttachButton;
ChatInputCore.SendButton = ChatInputSendButton;
ChatInputCore.Layout = ChatInputLayout;
