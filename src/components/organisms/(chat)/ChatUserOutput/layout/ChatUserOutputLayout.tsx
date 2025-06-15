"use client";

import { cn } from "@/utils/tailwindHelper";
import React from "react";
import { ChatUserOutputContentStyles } from "./ChatUserOutputLayout.styles";

interface ChatUserOutputLayoutProps {
  ContentComponent?: React.ElementType; // 옵셔널로 변경
  contentProps?: { [key: string]: unknown }; // 옵셔널로 변경
  className?: string;
  children?: React.ReactNode; // children 추가
}

const ChatUserOutputLayout: React.FC<ChatUserOutputLayoutProps> = ({
  className,
  children, // children 사용
}) => {
  // children으로부터 ContentComponent를 찾거나, 직접 children을 렌더링합니다.
  // 이 예시에서는 children을 직접 렌더링하는 간단한 방법을 사용합니다.
  // 필요에 따라 ChatInputLayout.tsx처럼 특정 displayName을 가진 자식 컴포넌트를 찾는 로직을 추가할 수 있습니다.
  return (
    <article className={cn(ChatUserOutputContentStyles(), className)}>
      {children}
    </article>
  );
};

export default ChatUserOutputLayout;
