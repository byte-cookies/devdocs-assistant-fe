import Text from "@/components/atoms/Text";
import { cn } from "@/utils/tailwindHelper";
import { ChatAIOutputContentStyles } from "./ChatAIOutputContent.styles";
import { useChatAIOutputContext } from "./ChatAIOutputCore";

export default function ChatAIOutputContent() {
  const { content } = useChatAIOutputContext();

  return (
    <div className={cn(ChatAIOutputContentStyles())}>
      <Text
        content={content || "No content provided."}
        textLayout="justify-start"
        textSizing="md"
        textVisual="secondary"
      />
    </div>
  );
}
