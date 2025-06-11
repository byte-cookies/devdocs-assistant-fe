import { createContext, useContext } from "react";
import EmbeddingCardLayout from "../layout/EmbeddingCardLayout";
import EmbeddingCardActions from "./EmbeddingCardActions";
import EmbeddingCardContent from "./EmbeddingCardContent";
import EmbeddingCardHeader from "./EmbeddingCardHeader";
import EmbeddingCardLoading from "./EmbeddingCardLoading";

// Context
interface EmbeddingCardContextProps {
  name: string;
  isLoading: boolean;
  url?: string;
  crawledAt?: string;
  docsImageSrc?: string;
  docsImageAlt?: string;
  onUrlClick?: () => void;
  onCrawledAtClick?: () => void;
}

export const EmbeddingCardContext = createContext<
  EmbeddingCardContextProps | undefined
>(undefined);

export const useEmbeddingCardContext = () => {
  const context = useContext(EmbeddingCardContext);
  if (!context) {
    throw new Error(
      "useEmbeddingCardContext must be used within a EmbeddingCardProvider"
    );
  }
  return context;
};

// Provider (Core)
export type EmbeddingCardCoreProps = {
  children: React.ReactNode;
  name?: string;
  isLoading?: boolean;
  url?: string;
  crawledAt?: string;
  docsImageSrc?: string;
  docsImageAlt?: string;
  onUrlClick?: () => void;
  onCrawledAtClick?: () => void;
};

export default function EmbeddingCardCore({
  children,
  name = "Embedding Name",
  isLoading = false,
  url = "",
  crawledAt = "",
  docsImageSrc,
  docsImageAlt,
  onUrlClick,
  onCrawledAtClick,
}: EmbeddingCardCoreProps) {
  return (
    <EmbeddingCardContext.Provider
      value={{
        name,
        isLoading,
        url,
        crawledAt,
        docsImageSrc,
        docsImageAlt,
        onUrlClick,
        onCrawledAtClick,
      }}
    >
      {children}
    </EmbeddingCardContext.Provider>
  );
}

EmbeddingCardCore.Layout = EmbeddingCardLayout;
EmbeddingCardCore.Header = EmbeddingCardHeader;
EmbeddingCardCore.Content = EmbeddingCardContent;
EmbeddingCardCore.Actions = EmbeddingCardActions;
EmbeddingCardCore.Loading = EmbeddingCardLoading;
