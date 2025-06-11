import EmbeddingCardCore, { type EmbeddingCardCoreProps } from "../core";

export interface EmbeddingCardProps
  extends Omit<EmbeddingCardCoreProps, "children"> {
  className?: string;
}

export default function EmbeddingCard({
  name,
  isLoading,
  url,
  crawledAt,
  docsImageAlt,
  docsImageSrc,
  onUrlClick,
  onCrawledAtClick,
  className,
}: EmbeddingCardProps) {
  return (
    <EmbeddingCardCore
      name={name}
      isLoading={isLoading}
      url={url}
      crawledAt={crawledAt}
      docsImageSrc={docsImageSrc}
      docsImageAlt={docsImageAlt}
      onUrlClick={onUrlClick}
      onCrawledAtClick={onCrawledAtClick}
    >
      <EmbeddingCardCore.Layout>
        <EmbeddingCardCore.Header />
        <EmbeddingCardCore.Loading />
        <EmbeddingCardCore.Content />
        <EmbeddingCardCore.Actions />
      </EmbeddingCardCore.Layout>
    </EmbeddingCardCore>
  );
}
