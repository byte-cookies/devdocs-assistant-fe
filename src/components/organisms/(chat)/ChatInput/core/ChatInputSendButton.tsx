"use client";

import Button from "@/components/molecules/Button";

interface ChatInputSendButtonProps {
  onSendMessage: () => void;
  disabled?: boolean;
}

function ChatInputSendButton({
  onSendMessage,
  disabled,
}: ChatInputSendButtonProps) {
  return (
    <Button
      text="Send"
      rightIcon={{ src: "/send.svg", alt: "Send Icon", iconSizing: "xl" }}
      buttonSizing="full"
      buttonVisual="primary"
      iconSizing="md"
      textLayout="justify-start"
      textSizing="md"
      textVisual="white"
      onClick={onSendMessage}
      className="rounded-full shadow-none"
      disabled={disabled}
    />
  );
}
ChatInputSendButton.displayName = "ChatInputSendButton";

export default ChatInputSendButton;
