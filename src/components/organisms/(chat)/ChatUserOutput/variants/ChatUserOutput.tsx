import ChatUserOutputCore from "../core/ChatUserOutputCore";

function ChatUserOutput({ content }: { content: string }) {
  return (
    <ChatUserOutputCore content={content}>
      <ChatUserOutputCore.Layout>
        <ChatUserOutputCore.Content />
      </ChatUserOutputCore.Layout>
    </ChatUserOutputCore>
  );
}

export default ChatUserOutput;
