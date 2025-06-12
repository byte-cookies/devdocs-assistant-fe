"use client";

import ChatAIOutput from "@/components/organisms/(chat)/ChatAIOutput";
import ChatInput from "@/components/organisms/(chat)/ChatInput";
import ChatUserOutput from "@/components/organisms/(chat)/ChatUserOutput";
import { useChat } from "@/hooks/services/useChat"; // useChat 임포트
import { Message } from "@/store/chatStore"; // Message 타입 임포트
import { useEffect, useRef } from "react";

export default function ChatDefalutLayout() {
  // useChat 훅 사용
  const {
    chatMessages,
    sendMessage,
    isLoading,
    currentInput,
    setCurrentInput,
  } = useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 스크롤을 최하단으로 이동
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]); // chatMessages 변경 시 스크롤

  return (
    <div className="flex flex-col justify-center items-center w-[60rem] h-full p-8 gap-8">
      {/* 채팅 메시지 영역 */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 bg-white p-4 rounded-lg shadow-md w-full">
        {chatMessages.map(
          (
            message: Message // chatMessages 사용 및 타입 명시
          ) => (
            <div key={message.id}>
              {message.type === "ai" ? (
                <ChatAIOutput
                  content={message.text}
                  sources={message.sources}
                  isError={message.error}
                />
              ) : (
                <div className="flex justify-end w-full h-auto">
                  <ChatUserOutput content={message.text} />
                </div>
              )}
            </div>
          )
        )}

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
        <ChatInput
          value={currentInput}
          onValueChange={setCurrentInput}
          onSendMessage={sendMessage}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
