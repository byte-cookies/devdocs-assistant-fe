"use client";

import { cn } from "@/utils/tailwindHelper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"; // okaidia 스타일로 변경
import Text from "../Text"; // For language display

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({
  code,
  language,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn("bg-gray-800 rounded-md my-2 overflow-x-auto", className)}
    >
      {language && (
        <Text
          content={language}
          textSizing="xs"
          textVisual="gray"
          className="mb-2 text-gray-400"
        />
      )}
      <SyntaxHighlighter
        language={language}
        style={okaidia} // okaidia 스타일 적용
        customStyle={{
          margin: "1em 0",
          padding: "1em",
          borderRadius: "0.375rem",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
