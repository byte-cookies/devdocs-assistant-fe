import React, { createContext, ReactNode, useContext, useState } from "react";

type ChatInputContextType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSend?: () => void;
  onAttach?: () => void;
};

const ChatInputContext = createContext<ChatInputContextType | undefined>(
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

type ChatInputProviderProps = {
  onSend?: (value: string) => void;
  onAttach?: () => void;
  children: ReactNode;
};

export function ChatInputProvider({
  onSend,
  onAttach,
  children,
}: ChatInputProviderProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (onSend && value.trim()) {
      onSend(value);
      setValue("");
    }
  };

  const handleAttach = () => {
    if (onAttach) {
      onAttach();
    }
  };

  return (
    <ChatInputContext.Provider
      value={{ value, setValue, onSend: handleSend, onAttach: handleAttach }}
    >
      {children}
    </ChatInputContext.Provider>
  );
}
