import { cn } from "@/utils/tailwindHelper";
import React, { ReactNode } from "react";
import { ChatAIOutputStyles } from "./ChatAIOutputLayout.styles";

interface ChatAIOutputLayoutProps {
  HeaderComponent?: React.ElementType;
  ContentComponent?: React.ElementType; // 필수에서 선택적으로 변경
  FooterComponent?: React.ElementType;
  headerProps?: { [key: string]: unknown };
  contentProps?: { [key: string]: unknown }; // 필수에서 선택적으로 변경
  footerProps?: { [key: string]: unknown };
  children?: ReactNode; // children 속성 추가
}

const ChatAIOutputLayout: React.FC<ChatAIOutputLayoutProps> = ({
  children,
}) => {
  const items = React.Children.toArray(children) as React.ReactElement[];

  const content = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "ChatAIOutputContent"
  );
  const toggle = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "ChatAIOutputToggle"
  );

  return (
    <article className={cn(ChatAIOutputStyles())}>
      {content}
      {toggle}
    </article>
  );
};

export default ChatAIOutputLayout;
