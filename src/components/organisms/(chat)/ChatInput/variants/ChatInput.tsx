import ChatInputCore from "../core/ChatInputCore";

interface ChatInputProps {
  value: string;
  onValueChange: (value: string) => void;
  onSendMessage: (messageText: string) => Promise<void>;
  disabled: boolean;
  onAttach?: () => void;
}

function ChatInput({
  value,
  onValueChange,
  onSendMessage,
  disabled,
  onAttach,
}: ChatInputProps) {
  const handleSend = () => {
    if (value.trim()) {
      onSendMessage(value);
    }
  };

  return (
    <ChatInputCore onAttach={onAttach}>
      <ChatInputCore.Layout>
        <ChatInputCore.Field
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
        />
        <ChatInputCore.AttachButton />
        <ChatInputCore.SendButton
          onSendMessage={handleSend}
          disabled={disabled || !value.trim()}
        />
      </ChatInputCore.Layout>
    </ChatInputCore>
  );
}

export default ChatInput;
