"use client";

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
ChatUserOutputContent.displayName = "ChatUserOutputContent";

export default ChatUserOutputContent;
