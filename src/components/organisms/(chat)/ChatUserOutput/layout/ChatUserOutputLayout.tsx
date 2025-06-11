import { cn } from "@/utils/tailwindHelper";
import React, { ReactNode } from "react";
import { ChatUserOutputContentStyles } from "./ChatUserOutputLayout.styles";

type LayoutProps = {
  children: ReactNode;
};

function ChatUserOutputLayout({ children }: LayoutProps) {
  const items = React.Children.toArray(children) as React.ReactElement[];

  const content = items.find(
    (c) => (c.type as any)?.name === "ChatUserOutputContent"
  );

  return (
    <article className={cn(ChatUserOutputContentStyles())}>{content}</article>
  );
}

export default ChatUserOutputLayout;
