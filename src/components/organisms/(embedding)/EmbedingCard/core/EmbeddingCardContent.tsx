import { cn } from "@/utils/tailwindHelper";
import Image from "next/image";
import { EmbeddingCardContentStyles } from "./EmbeddingCardComponents.styles";
import { useEmbeddingCardContext } from "./EmbeddingCardCore";

// Content Component (Icon Area)
const EmbeddingCardContent = () => {
  const { docsImageSrc, docsImageAlt } = useEmbeddingCardContext();

  return (
    <div className={cn(EmbeddingCardContentStyles())}>
      <Image
        src={docsImageSrc || "/embedding.png"}
        alt={docsImageAlt || "Document Image"}
        fill
        className="object-cover rounded-md"
      />
    </div>
  );
};

export default EmbeddingCardContent;
