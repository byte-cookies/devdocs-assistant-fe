import CodeBlock from "@/components/atoms/CodeBlock";
import Text from "@/components/atoms/Text";
import { cn } from "@/utils/tailwindHelper";
import { ChatAIOutputContentStyles } from "./ChatAIOutputContent.styles";
import { useChatAIOutputContext } from "./ChatAIOutputCore";

const parseContent = (text: string) => {
  const parts = [];
  let lastIndex = 0;
  const regex = /```(\w*\n)?([\s\S]*?)```/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        value: text.substring(lastIndex, match.index),
      });
    }
    const language = match[1] ? match[1].trim() : undefined;
    parts.push({ type: "code", value: match[2].trim(), language });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", value: text.substring(lastIndex) });
  }
  return parts;
};

export default function ChatAIOutputContent() {
  const { content } = useChatAIOutputContext();
  const processedContent = content || "No content provided.";

  const sentenceFormattedContent = processedContent
    .replace(/\. (?!\n|$)/g, ".\n")
    .replace(/\.(?=\w)/g, ".\n");

  const contentParts = parseContent(sentenceFormattedContent);

  return (
    <div className={cn(ChatAIOutputContentStyles())}>
      {contentParts.map((part, index) => {
        if (part.type === "code") {
          return (
            <CodeBlock key={index} code={part.value} language={part.language} />
          );
        }
        return (
          <Text
            key={index}
            content={part.value}
            textLayout="justify-start"
            textSizing="md"
            textVisual="secondary"
          />
        );
      })}
    </div>
  );
}
