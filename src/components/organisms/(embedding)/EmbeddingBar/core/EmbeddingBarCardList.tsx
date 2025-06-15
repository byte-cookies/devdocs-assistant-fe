"use client";

import Spinner from "@/components/atoms/Spinner";
import Text from "@/components/atoms/Text";
import EmbeddingCard from "../../EmbedingCard";
import { useEmbeddingBarContext } from "./EmbeddingBarCore";

export default function EmbeddingBarCardList() {
  const {
    displayedDocuments,
    isLoadingDisplayedDocs,
    searchError,
    latestDocsError,
  } = useEmbeddingBarContext();

  if (isLoadingDisplayedDocs) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-2 mt-2">
        <div className="flex justify-center items-center gap-4 w-full h-full">
          <Spinner spinnerSizing="lg" spinnerVisual="secondary" />
          <Text
            content="Loading documents..."
            textSizing="xl"
            textLayout={"justify-center"}
            className="font-bold w-auto"
          />
        </div>
      </div>
    );
  }

  if (searchError || latestDocsError) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-2 mt-2">
        <Text
          content={`Error loading documents: ${
            searchError?.message || latestDocsError?.message
          }`}
          textSizing="md"
          textVisual="error"
        />
      </div>
    );
  }

  if (!displayedDocuments || displayedDocuments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-2 mt-2">
        <Text content="No documents found." textSizing="md" />
        <Text
          content="Add a document using the input above."
          textSizing="sm"
          textVisual="gray"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-y-auto scrollbar-hide p-2 mt-2">
      {displayedDocuments.map((doc) => (
        <EmbeddingCard
          key={doc.id}
          isLoading={isLoadingDisplayedDocs}
          name={doc.url}
          docsImageSrc="/embedding.png"
          docsImageAlt={doc.url}
          url={doc.url}
          crawledAt={
            doc.status === "loaded" && doc.id
              ? new Date().toISOString()
              : "Pending..."
          }
          preview={doc.preview}
          status={doc.status}
        />
      ))}
    </div>
  );
}
EmbeddingBarCardList.displayName = "EmbeddingBarCardList";
