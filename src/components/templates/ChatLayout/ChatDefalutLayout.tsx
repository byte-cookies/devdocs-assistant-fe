"use client";

import ChatAIOutput from "@/components/organisms/(chat)/ChatAIOutput";
import ChatInput from "@/components/organisms/(chat)/ChatInput";
import ChatUserOutput from "@/components/organisms/(chat)/ChatUserOutput";
import { useEffect, useRef, useState } from "react";

// 메시지 타입 정의
interface Message {
  id: string;
  text: string;
  timestamp: Date;
  sender: "user" | "ai";
}

export default function ChatDefalutLayout() {
  // 상태 관리
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 스크롤을 최하단으로 이동
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 메시지 전송 처리
  const handleMessageSubmit = async (messageText: string) => {
    if (!messageText.trim()) return;

    // 1. 사용자 메시지 추가
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      timestamp: new Date(),
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // 2. API 호출 (실제 구현에서는 실제 API 호출)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 임시 지연

      // 3. AI 응답 추가
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "This is a sample AI response to your message.",
        timestamp: new Date(),
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[60rem] h-full p-8 gap-8">
      {/* 채팅 메시지 영역 */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 bg-white p-4 rounded-lg shadow-md w-full">
        {messages.map((message) => (
          <div key={message.id}>
            {message.sender === "ai" ? (
              <ChatAIOutput content="example AI response" />
            ) : (
              <ChatUserOutput contentTest="example user message" />
            )}
          </div>
        ))}

        {/* 로딩 표시 */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 rounded-lg p-3 animate-pulse">
              AI가 응답을 준비중입니다...
            </div>
          </div>
        )}

        {/* 스크롤 앵커 */}
        <div ref={messagesEndRef} />
      </div>

      {/* 입력 영역 */}
      <div className="w-full h-[10rem] flex justify-center items-center">
        <ChatInput disabled={isLoading} />
      </div>
    </div>
  );
}
