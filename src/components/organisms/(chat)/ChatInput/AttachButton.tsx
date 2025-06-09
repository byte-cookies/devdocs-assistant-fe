import Button from "@/components/molecules/Button";
import { useChatInputContext } from "./ChatInput.context";

const AttachButton = () => {
  const { onAttach } = useChatInputContext();

  const handleClick = () => {
    if (onAttach) {
      onAttach();
    }
  };

  return (
    <Button
      leftIcon="/clip.svg"
      onClick={handleClick}
      buttonSizing="full"
      buttonVisual="secondary"
      iconSizing="md"
      className="rounded-full shadow-none"
    />
  );
};

export default AttachButton;
