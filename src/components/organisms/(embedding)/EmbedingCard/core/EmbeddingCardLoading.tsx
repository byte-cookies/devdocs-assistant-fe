"use client";

// filepath: /Users/limjeonghoon/Desktop/프로젝트Lab/devdocs-assistant-fe/src/components/organisms/(embedding)/EmbedingCard/core/EmbeddingCardLoading.tsx
import Spinner from "@/components/atoms/Spinner";
import Text from "@/components/atoms/Text";
import { cn } from "@/utils/tailwindHelper";
import { EmbeddingCardLoadingStyles } from "./EmbeddingCardComponents.styles";

// Loading Component
const EmbeddingCardLoading = () => {
  return (
    <div className={cn(EmbeddingCardLoadingStyles())}>
      <Spinner spinnerSizing="sm" spinnerVisual="primary" />
      <Text
        content="Loading..."
        textLayout="justify-center"
        textSizing="md"
        textVisual="secondary"
        className="font-bold w-auto"
      />
    </div>
  );
};
EmbeddingCardLoading.displayName = "EmbeddingCardLoading";

export default EmbeddingCardLoading;
