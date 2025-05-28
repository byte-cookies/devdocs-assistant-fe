import React from "react";
import clsx from "clsx";

type Props = {
  role: "user" | "ai";
  content: string;
};

function ChatMessage({ role, content }: Props) {
  const isUser = role === "user";
  return (
    <div
      className={clsx(
        "w-full flex mb-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className="max-w-xs bg-background rounded-2xl px-4 py-2 text-[1.25rem] shadow border-1 border-gray-200 text-gray-600">
        {content}
      </div>
    </div>
  );
}

export default ChatMessage;
