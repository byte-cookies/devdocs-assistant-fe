import ChatInputCore from "../core/ChatInputCore";

interface ChatInputProps {
  value: string;
  onValueChange: (value: string) => void;
  onSendMessage: (messageText: string) => Promise<void>; // 이 prop은 useChat의 sendMessage를 직접 받음
  disabled: boolean;
}

function ChatInput({
  value,
  onValueChange,
  onSendMessage, // useChat의 sendMessage
  disabled,
}: ChatInputProps) {
  // SendButton이 클릭될 때 실행될 함수
  const handleSend = () => {
    if (value.trim()) {
      onSendMessage(value);
    }
  };

  return (
    <ChatInputCore>
      <ChatInputCore.Layout>
        <ChatInputCore.Field
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
        />
        <ChatInputCore.AttachButton />
        <ChatInputCore.SendButton
          onSendMessage={handleSend} // 수정된 핸들러 전달
          disabled={disabled || !value.trim()} // 입력값이 없을 때도 비활성화
        />
      </ChatInputCore.Layout>
    </ChatInputCore>
  );
}

export default ChatInput;
