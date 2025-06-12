import { useDocsAdd } from "@/hooks/services/useDocsAdd";
import { useDocsSearch } from "@/hooks/services/useDocsSearch";
import { Document as CrawlerDocument } from "@/store/crawlerStore";
import { createContext, useContext, useMemo } from "react";
import EmbeddingBarLayout from "../layout/EmbeddingBarLayout";
import EmbeddingBarCardList from "./EmbeddingBarCardList";
import EmbeddingBarInput from "./EmbeddingBarInput";

interface EmbeddingBarContextProps {
  urlInput: string;
  setUrlInput: (url: string) => void;
  handleCheckAndIngestUrl: () => Promise<void>;
  isAddingDocs: boolean;
  addError: string | null;
  isCrawlable: boolean | null;

  displayedDocuments: CrawlerDocument[];
  isLoadingDisplayedDocs: boolean;
  searchError: Error | null;
  latestDocsError: Error | null;
  refetchLatestDocuments: () => void;
}
const EmbeddingBarContext = createContext<EmbeddingBarContextProps | undefined>(
  undefined
);
export function useEmbeddingBarContext() {
  const context = useContext(EmbeddingBarContext);
  if (!context) {
    throw new Error(
      "useEmbeddingBarContext must be used within an EmbeddingBarProvider"
    );
  }
  return context;
}

interface EmbeddingBarCoreProps {
  children: React.ReactNode;
}

export default function EmbeddingBarCore({ children }: EmbeddingBarCoreProps) {
  const {
    urlInput,
    setUrlInput,
    handleCheckAndIngestUrl,
    isChecking,
    isIngesting,
    isLoadingDocuments: isLoadingAddedDocuments,
    error: addHookError,
    isCrawlable,
    documents: addedDocuments,
  } = useDocsAdd();

  const {
    searchResults,
    isLoadingLatestDocs,
    searchError,
    latestDocsError,
    refetchLatestDocuments,
  } = useDocsSearch();

  const isAddingDocs = isChecking || isIngesting || isLoadingAddedDocuments;

  const displayedDocuments = useMemo(() => {
    if (searchResults && searchResults.length > 0) {
      return searchResults.map((sr) => ({
        id: sr.id,
        url: sr.source,
        status: "loaded",
        preview: sr.snippet,
      }));
    }
    return addedDocuments;
  }, [searchResults, addedDocuments]);

  const isLoadingDisplayedDocs = isLoadingLatestDocs || isAddingDocs;

  const contextValue: EmbeddingBarContextProps = {
    urlInput,
    setUrlInput,
    handleCheckAndIngestUrl,
    isAddingDocs,
    addError: addHookError,
    isCrawlable,
    displayedDocuments,
    isLoadingDisplayedDocs,
    searchError,
    latestDocsError,
    refetchLatestDocuments,
  };

  return (
    <EmbeddingBarContext.Provider value={contextValue}>
      <EmbeddingBarLayout>{children}</EmbeddingBarLayout>
    </EmbeddingBarContext.Provider>
  );
}

EmbeddingBarCore.Layout = EmbeddingBarLayout;
EmbeddingBarCore.Input = EmbeddingBarInput;
EmbeddingBarCore.CardList = EmbeddingBarCardList;
