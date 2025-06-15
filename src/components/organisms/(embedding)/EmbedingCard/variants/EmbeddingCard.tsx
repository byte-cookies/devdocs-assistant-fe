"use client";

import EmbeddingCardCore, { type EmbeddingCardCoreProps } from "../core";

export interface EmbeddingCardProps
  extends Omit<EmbeddingCardCoreProps, "children"> {
  className?: string;
  id?: string; // Added id here as well to ensure it's passed through
}

export default function EmbeddingCard({
  id, // Added
  name,
  isLoading,
  url,
  crawledAt,
  docsImageAlt,
  docsImageSrc,
  onUrlClick,
  onCrawledAtClick,
  preview,
  status,
  className,
}: EmbeddingCardProps) {
  return (
    <EmbeddingCardCore
      id={id} // Added
      name={name}
      isLoading={isLoading}
      url={url}
      crawledAt={crawledAt}
      docsImageSrc={docsImageSrc}
      docsImageAlt={docsImageAlt}
      onUrlClick={onUrlClick}
      onCrawledAtClick={onCrawledAtClick}
      preview={preview}
      status={status}
      // className={className} // This line caused an error previously, EmbeddingCardCore doesn't accept className
    >
      {/* Pass className to Layout if needed, or handle styling within EmbeddingCardCore's children */}
      <EmbeddingCardCore.Layout className={className}>
        <EmbeddingCardCore.Header />
        <EmbeddingCardCore.Loading />
        <EmbeddingCardCore.Content />
        <EmbeddingCardCore.Actions />
      </EmbeddingCardCore.Layout>
    </EmbeddingCardCore>
  );
}
