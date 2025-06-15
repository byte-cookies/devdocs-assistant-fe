"use client";

import Input from "@/components/atoms/Input";

interface ChatInputFieldProps {
  value: string;
  onValueChange: (value: string) => void;
  disabled: boolean;
}

const ChatInputField = ({
  value,
  onValueChange,
  disabled,
}: ChatInputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange(e.target.value);
  };

  return (
    <Input
      inputVisual={"chatInput"}
      inputSizing={"chatInput"}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      placeholder="메세지를 입력해주세요..."
    />
  );
};
ChatInputField.displayName = "ChatInputField";

export default ChatInputField;
