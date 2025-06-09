import AttachButton from "./AttachButton";
import Field from "./Field";
import SendButton from "./SendButton";

import { cn } from "@/utils/tailwindHelper";
import { ChatInputProvider } from "./ChatInput.context";
import {
  AttachButtonLayoutStyles,
  centerLayoutStyles,
  endLayoutStyles,
  SendButtonLayoutStyles,
  whiteCardContainerStyles,
} from "./ChatInput.styles";

function ChatInput() {
  return (
    <ChatInputProvider>
      <section className={cn(whiteCardContainerStyles())}>
        <div className={cn(centerLayoutStyles())}>
          <Field />
        </div>
        <article className={cn(endLayoutStyles())}>
          <div className={cn(AttachButtonLayoutStyles())}>
            <AttachButton />
          </div>
          <div className={cn(SendButtonLayoutStyles())}>
            <SendButton />
          </div>
        </article>
      </section>
    </ChatInputProvider>
  );
}

export default ChatInput;
