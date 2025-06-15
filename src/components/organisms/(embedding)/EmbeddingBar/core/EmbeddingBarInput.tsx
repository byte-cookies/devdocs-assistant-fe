"use client";

import Text from "@/components/atoms/Text";
import Button from "@/components/molecules/Button";
import { useState } from "react";
import { useEmbeddingBarContext } from "./EmbeddingBarCore";

export default function EmbeddingBarInput() {
  const [inputState, setInputState] = useState(false);
  const {
    urlInput,
    setUrlInput,
    handleCheckAndIngestUrl,
    isAddingDocs,
    addError,
  } = useEmbeddingBarContext();

  const handleSend = async () => {
    await handleCheckAndIngestUrl();
  };

  return (
    <div className="w-full p-2 flex flex-col gap-2 h-auto">
      {inputState ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 w-full h-[2.5rem]">
            <input
              type="text"
              placeholder="URL..."
              className="flex-1 p-2 border rounded-md w-full h-full bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              disabled={isAddingDocs}
            />
            <Button
              leftIcon={{
                src: "/send.svg",
                alt: "Send",
                iconSizing: "lg",
              }}
              buttonVisual={"primary"}
              className="h-full rounded-md"
              onClick={handleSend}
              disabled={isAddingDocs || !urlInput.trim()}
            />
          </div>
          {addError && (
            <Text
              textSizing="sm"
              textVisual="error"
              content={`Error: ${addError}`}
            />
          )}
        </div>
      ) : (
        <Button
          leftIcon={{
            src: "/plus.svg",
            alt: "Add Document",
            iconSizing: "lg",
          }}
          buttonVisual={"primary"}
          onClick={() => setInputState(true)}
          className="w-full h-[2.5rem] rounded-full"
        />
      )}
    </div>
  );
}
EmbeddingBarInput.displayName = "EmbeddingBarInput";
