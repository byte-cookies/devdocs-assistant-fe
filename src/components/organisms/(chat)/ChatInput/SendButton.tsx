import Button from "@/components/molecules/Button";
import { useChatInputContext } from "./ChatInput.context";

const SendButton = () => {
  const { onSend } = useChatInputContext();

  const handleClick = () => {
    if (onSend) {
      onSend();
    }
  };

  return (
    <Button
      text="Send"
      rightIcon="/send.svg"
      buttonSizing="full"
      buttonVisual="primary"
      iconSizing="md"
      textLayout="justify-start"
      textSizing="xs"
      textVisual="white"
      onClick={handleClick}
      className="rounded-full shadow-none"
    />
  );
};

export default SendButton;
