import { cn } from "@/utils/tailwindHelper";
import React from "react";
import {
  AttachButtonLayoutStyles,
  centerLayoutStyles,
  endLayoutStyles,
  SendButtonLayoutStyles,
  whiteCardContainerStyles,
} from "./ChatInputLayout.styles";

export interface ChatInputLayoutProps {
  children: React.ReactNode; // children 속성 유지
}

export default function ChatInputLayout({ children }: ChatInputLayoutProps) {
  const items = React.Children.toArray(children) as React.ReactElement[];

  const input = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "ChatInputField"
  );
  const attachButton = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "ChatInputAttachButton"
  );
  const sendButton = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "ChatInputSendButton"
  );

  return (
    <div className={cn(whiteCardContainerStyles())}>
      {input && <div className={cn(centerLayoutStyles())}>{input}</div>}
      <div className={cn(endLayoutStyles())}>
        {attachButton && (
          <div className={cn(AttachButtonLayoutStyles())}>{attachButton}</div>
        )}
        {sendButton && (
          <div className={cn(SendButtonLayoutStyles())}>{sendButton}</div>
        )}
      </div>
    </div>
  );
}
