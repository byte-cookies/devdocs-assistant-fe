import { cn } from "@/utils/tailwindHelper";
import React, { ReactNode } from "react";
import {
  AttachButtonLayoutStyles,
  centerLayoutStyles,
  endLayoutStyles,
  SendButtonLayoutStyles,
  whiteCardContainerStyles,
} from "./ChatInputLayout.styles";

type LayoutProps = {
  children: ReactNode;
};

function ChatInputLayout({ children }: LayoutProps) {
  const items = React.Children.toArray(children) as React.ReactElement[];

  const field = items.find((c) => (c.type as any)?.name === "ChatInputField");
  const attachButton = items.find(
    (c) => (c.type as any)?.name === "ChatInputAttachButton"
  );
  const sendButton = items.find(
    (c) => (c.type as any)?.name === "ChatInputSendButton"
  );

  return (
    <section className={cn(whiteCardContainerStyles())}>
      <div className={cn(centerLayoutStyles())}>{field}</div>
      <article className={cn(endLayoutStyles())}>
        <div className={cn(AttachButtonLayoutStyles())}>{attachButton}</div>
        <div className={cn(SendButtonLayoutStyles())}>{sendButton}</div>
      </article>
    </section>
  );
}

export default ChatInputLayout;
