"use client";

import { cn } from "@/utils/tailwindHelper";
import Image from "next/image";
import { EmbeddingCardContentStyles } from "./EmbeddingCardComponents.styles";

// Content Component (Icon Area)
const EmbeddingCardContent = () => {
  return (
    <div className={cn(EmbeddingCardContentStyles(), "p-2")}>
      <Image
        src="/embedding.png"
        alt="Embedding Icon"
        fill
        className="object-cover w-full h-auto"
        priority
      />
    </div>
  );
};
EmbeddingCardContent.displayName = "EmbeddingCardContent";

export default EmbeddingCardContent;
