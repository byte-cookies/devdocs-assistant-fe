import Button from "@/components/molecules/Button";
import { useState } from "react";

export default function EmbeddingBarInput() {
  const [inputState, setInputState] = useState(false);

  return (
    <div className="w-full p-2 flex flex-col gap-4 h-[4rem]">
      {inputState ? (
        <div className="flex items-center justify-between gap-2 w-full h-full">
          <input
            type="text"
            placeholder="Enter your input here"
            className="flex-1 p-2 border rounded-md w-full h-full bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button
            leftIcon={{
              src: "/send.svg",
              alt: "Send",
              iconSizing: "lg",
            }}
            buttonVisual={"primary"}
            className="h-full rounded-md"
          />
        </div>
      ) : (
        <Button
          leftIcon={{
            src: "/plus.svg",
            alt: "Add Input",
            iconSizing: "lg",
          }}
          buttonVisual={"primary"}
          onClick={() => setInputState(true)}
          className="w-full h-full rounded-full"
        />
      )}
    </div>
  );
}
