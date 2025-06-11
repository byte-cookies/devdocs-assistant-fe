import Button from "@/components/molecules/Button";
import { useChatInputContext } from "./ChatInputCore";

const ChatInputAttachButton = () => {
  const { handleAttach } = useChatInputContext();

  return (
    <Button
      leftIcon={{
        src: "/clip.svg",
        alt: "Attach Icon",
        iconSizing: "md",
      }}
      onClick={handleAttach}
      buttonSizing="full"
      buttonVisual="secondary"
      iconSizing="md"
      className="rounded-full shadow-none"
    />
  );
};

export default ChatInputAttachButton;
