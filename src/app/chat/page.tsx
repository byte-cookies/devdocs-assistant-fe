"use client";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { useChatStore } from "../../store/chatStore";

function ChatPage() {
  const { messages } = useChatStore();

  return (
    <div className="flex h-full bg-background">
      <div className="flex w-full h-full justify-center py-8">
        <div className="flex flex-col w-[70%] h-full min-w-[34.375rem] max-w-[73.75rem]">
          <div className="flex-1 overflow-y-auto w-full p-4 bg-white rounded-2xl shadow border-1 border-gray-200">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
            ))}
          </div>
          <div className="h-4" />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
