import { useDocsAdd } from "@/hooks/services/useDocsAdd";
import { useDocsSearch } from "@/hooks/services/useDocsSearch";

interface DisplayedDocument {
  id: string;
  url: string;
  status: string;
  preview: string; // 타입을 string으로 변경
}

// useDocsSearch 훅에서 반환되는 searchResults 내부 객체의 타입을 정의합니다.
// useDocsSearch.ts 파일의 SearchResult 인터페이스를 참고하여 필요한 필드를 포함합니다.
interface SearchResultItem {
  id: string;
  source: string;
  snippet?: string; // snippet은 preview로 사용되므로 optional 유지
  // title 필드도 있지만 여기서는 사용되지 않습니다.
}

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

  const displayedDocuments: DisplayedDocument[] = useMemo(() => {
    if (searchResults && searchResults.length > 0) {
      return searchResults.map((sr: SearchResultItem) => ({
        id: sr.id,
        url: sr.source,
        status: "loaded",
        preview: sr.snippet || "", // snippet이 undefined일 경우 빈 문자열 사용
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
