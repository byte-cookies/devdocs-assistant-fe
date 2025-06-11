import { createContext, useContext } from "react";
import ChatAIOutputLayout from "../layout";
import ChatAIOutputContent from "./ChatAIOutputContent";
import ChatAIOutputToggle from "./ChatAIOutputToggle";

// Context
interface ChatAIOutputContextProps {
  content: string;
  aiName?: string;
  avatarSrc?: string;
  showActions?: boolean;
  onCopy?: () => void;
  onRegenerate?: () => void;
  onLike?: () => void;
  onDislike?: () => void;
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
  content?: string;
};

export default function ChatAIOutputCore({
  children,
  content = "AI 응답입니다.",
}: ChatAIOutputCoreProps) {
  return (
    <ChatAIOutputContext.Provider
      value={{
        content,
      }}
    >
      {children}
    </ChatAIOutputContext.Provider>
  );
}

ChatAIOutputCore.Content = ChatAIOutputContent;
ChatAIOutputCore.Toggle = ChatAIOutputToggle;
ChatAIOutputCore.Layout = ChatAIOutputLayout;
