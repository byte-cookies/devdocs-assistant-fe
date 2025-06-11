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
  contentTest?: string; // Optional prop for testing purposes
};
export default function ChatUserOutputCore({
  children,
  contentTest,
}: ChatUserOutputCoreProps) {
  return (
    <ChatUserOutputContext.Provider
      value={{ content: contentTest || "Default content" }}
    >
      {children}
    </ChatUserOutputContext.Provider>
  );
}

ChatUserOutputCore.Layout = ChatUserOutputLayout;
ChatUserOutputCore.Content = ChatUserOutputContent;
