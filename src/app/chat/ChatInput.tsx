"use client";

import { useState, KeyboardEvent, useRef, useEffect } from "react";
import { useChatStore } from "../../store/chatStore";
import { nanoid } from "nanoid";
import Image from "next/image";

function ChatInput() {
  const [input, setInput] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);
  const inputRef = useRef<string>("");
  const isSendingRef = useRef(false);

  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  const onSendMessage = () => {
    const trimmed = inputRef.current.trim();
    if (!trimmed) return;

    isSendingRef.current = true;

    addMessage({
      id: nanoid(),
      role: "user",
      content: trimmed,
    });

    setInput("");
    inputRef.current = "";

    setTimeout(() => {
      // Mock AI response
      addMessage({
        id: nanoid(),
        role: "ai",
        content: "AI response to: " + trimmed,
      });

      isSendingRef.current = false;
    }, 500);
  };

  return (
    <div className="bg-white rounded-[1.2rem] px-[1rem] py-3 shadow border-1 border-gray-200">
      <textarea
        className="w-full resize-none text-[1.25rem] placeholder-textSecondary focus:outline-none"
        rows={2}
        placeholder="Message to slothpilot..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="w-full h-[2.4rem] relative">
        <div className="flex absolute right-0 bottom-0">
          <Image
            src="/fileAddIcon.svg"
            alt="Add File"
            width={32}
            height={32}
            className="cursor-pointer mr-2"
          />
          <button
            className="flex items-center justify-center w-[6.2rem] h-[2.4rem] font-bold bg-blue-500 text-white rounded-3xl"
            onClick={onSendMessage}
            disabled={isSendingRef.current}
          >
            <p className="pr-2.5">Send</p>
            <Image src="/sendIcon.svg" alt="Send" width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
