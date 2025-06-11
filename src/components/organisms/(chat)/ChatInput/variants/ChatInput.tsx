import ChatInputCore from "../core/ChatInputCore";

function ChatInput({ disabled = false }) {
  return (
    <ChatInputCore>
      <ChatInputCore.Layout>
        <ChatInputCore.Field />
        <ChatInputCore.AttachButton />
        <ChatInputCore.SendButton />
      </ChatInputCore.Layout>
    </ChatInputCore>
  );
}

export default ChatInput;
