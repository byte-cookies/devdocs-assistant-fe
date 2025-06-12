import Button from "@/components/molecules/Button";
import { cn } from "@/utils/tailwindHelper";
import { EmbeddingCardActionsStyles } from "./EmbeddingCardComponents.styles";
import { useEmbeddingCardContext } from "./EmbeddingCardCore";

const EmbeddingCardActions = () => {
  const { url, crawledAt, status, id } = useEmbeddingCardContext();

  const handleUrlClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleReCrawl = () => {};

  return (
    <div className={cn(EmbeddingCardActionsStyles(), "gap-1")}>
      {" "}
      <Button
        text={url ? "Open URL" : "No URL"}
        buttonSizing="full"
        buttonVisual="secondary"
        textSizing="xs"
        textLayout={"justify-center"}
        textVisual="white"
        className="basis-1/2 bg-iconPrimary rounded-lg"
        onClick={handleUrlClick}
        disabled={!url}
      />
      {status === "failed" && (
        <Button
          text="Re-Crawl"
          buttonSizing="full"
          buttonVisual="warning"
          textSizing="xs"
          textLayout={"justify-center"}
          textVisual="white"
          className="basis-1/2 bg-yellow-500 rounded-lg"
          onClick={handleReCrawl}
          disabled={!url}
        />
      )}
      {status === "loaded" && (
        <Button
          text={
            crawledAt ? new Date(crawledAt).toLocaleDateString() : "Date N/A"
          }
          buttonSizing="full"
          buttonVisual="secondary"
          textSizing="xs"
          textLayout={"justify-center"}
          textVisual="white"
          className="basis-1/2 bg-iconPrimary rounded-lg cursor-default"
          disabled
        />
      )}
    </div>
  );
};

export default EmbeddingCardActions;
