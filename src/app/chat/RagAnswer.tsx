// app/chat/RagAnswer.tsx
"use client";

import { useRagStore } from "@/store/ragStore";

export default function RagAnswer() {
  const answer = useRagStore((s) => s.answer);

  if (!answer) return null;

  return (
    <div className="mt-4 bg-white p-4 rounded-xl border shadow text-gray-800">
      <p className="text-sm whitespace-pre-wrap">{answer}</p>
    </div>
  );
}