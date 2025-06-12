import Text from "@/components/atoms/Text";
import { useChatUserOutputContext } from "./ChatUserOutputCore";

const ChatUserOutputContent = () => {
  const { content } = useChatUserOutputContext();

  return (
    <Text
      content={content}
      textLayout="justify-start"
      textSizing="lg"
      textVisual="secondary"
    />
  );
};

export default ChatUserOutputContent;
