"use client";

import { useState } from "react";

interface EmbeddingCardProps {
  name?: string;
  isLoading?: boolean;
}

function EmbeddingCard({ name, isLoading }: EmbeddingCardProps) {
  const [embeddingName, setEmbeddingName] = useState(name || "Embedding Name");
  const [loading, setLoading] = useState(isLoading || false);

  return (
    <section className="w-full min-h-[8rem] flex flex-col items-center p-4 bg-background rounded-xl shadow-md">
      {/* 헤더 */}
      <div className="w-full h-[2rem] flex items-center justify-center">
        <h2 className="text-lg font-semibold">{embeddingName}</h2>
      </div>
      {/* 바디 */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center gap-3">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary" />
            <p className="text-textSecondary font-bold">Loading...</p>
          </div>
        ) : (
          <div className="w-full min-h-[6rem] flex flex-col items-center gap-y-2">
            <div className="w-full h-[5rem] bg-gray-200 items-center rounded-lg flex justify-center">
              {/* <Image
              src="/embeddingIcon.svg"
              alt="Embedding Icon"
              width={48}
              height={48}
            /> */}
            </div>
            <div className="w-full h-[1rem] flex gap-2 justify-between">
              <button className="basis-1/2 text-sm font-medium text-textTertiaryLight bg-iconPrimary rounded-lg flex items-center justify-center">
                URL
              </button>
              <button className="basis-1/2 text-sm font-medium text-textTertiaryLight bg-iconPrimary rounded-lg flex items-center justify-center">
                Crawled at
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default EmbeddingCard;
