import { cn } from "@/utils/tailwindHelper";
import React, { ReactNode } from "react";
import { ChatAIOutputStyles } from "./ChatAIOutputLayout.styles";

type LayoutProps = {
  children: ReactNode;
};

function ChatAIOutputLayout({ children }: LayoutProps) {
  const items = React.Children.toArray(children) as React.ReactElement[];

  const content = items.find(
    (c) => (c.type as any)?.name === "ChatAIOutputContent"
  );
  const toggle = items.find(
    (c) => (c.type as any)?.name === "ChatAIOutputToggle"
  );

  return (
    <article className={cn(ChatAIOutputStyles())}>
      {content}
      {toggle}
    </article>
  );
}

export default ChatAIOutputLayout;
