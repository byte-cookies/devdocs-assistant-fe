import ChatUserOutputCore from "../core/ChatUserOutputCore";

function ChatUserOutput({ contentTest }: { contentTest?: string }) {
  return (
    <ChatUserOutputCore contentTest={contentTest}>
      <ChatUserOutputCore.Layout>
        <ChatUserOutputCore.Content />
      </ChatUserOutputCore.Layout>
    </ChatUserOutputCore>
  );
}

export default ChatUserOutput;
