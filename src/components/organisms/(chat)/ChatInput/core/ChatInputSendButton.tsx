import Button from "@/components/molecules/Button";
import { useChatInputContext } from "./ChatInputCore";

function ChatInputSendButton() {
  const { handleSend } = useChatInputContext();

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
      onClick={handleSend}
      className="rounded-full shadow-none"
    />
  );
}

export default ChatInputSendButton;
