import Text from "@/components/atoms/Text";
import { cn } from "@/utils/tailwindHelper";
import { EmbeddingCardHeaderStyles } from "./EmbeddingCardComponents.styles";
import { useEmbeddingCardContext } from "./EmbeddingCardCore";

// Header Component
const EmbeddingCardHeader = () => {
  const { name } = useEmbeddingCardContext();

  return (
    <div className={cn(EmbeddingCardHeaderStyles())}>
      <Text
        content={name}
        textLayout="justify-center"
        textSizing="lg"
        textVisual="primary"
        className="font-semibold"
      />
    </div>
  );
};

export default EmbeddingCardHeader;
