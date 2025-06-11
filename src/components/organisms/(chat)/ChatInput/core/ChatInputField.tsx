import Input from "@/components/atoms/Input";
import { useChatInputContext } from "./ChatInputCore";

const ChatInputField = () => {
  const { value, setValue } = useChatInputContext();

  return (
    <Input
      inputVisual={"chatInput"}
      inputSizing={"chatInput"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default ChatInputField;
