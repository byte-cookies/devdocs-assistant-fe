import Button from "@/components/molecules/Button";
import { cn } from "@/utils/tailwindHelper";
import { EmbeddingCardActionsStyles } from "./EmbeddingCardComponents.styles";
import { useEmbeddingCardContext } from "./EmbeddingCardCore";

// Actions Component (URL and Crawled at buttons)
const EmbeddingCardActions = () => {
  const { onUrlClick, onCrawledAtClick } = useEmbeddingCardContext();

  return (
    <div className={cn(EmbeddingCardActionsStyles())}>
      <Button
        text="URL"
        buttonSizing="full"
        buttonVisual="secondary"
        textSizing="xs"
        textLayout={"justify-center"}
        textVisual="white"
        className="basis-1/2 bg-iconPrimary rounded-lg"
        onClick={onUrlClick}
      />
      <Button
        text="Crawled at"
        buttonSizing="full"
        buttonVisual="secondary"
        textSizing="xs"
        textLayout={"justify-center"}
        textVisual="white"
        className="basis-1/2 bg-iconPrimary rounded-lg"
        onClick={onCrawledAtClick}
      />
    </div>
  );
};

export default EmbeddingCardActions;
