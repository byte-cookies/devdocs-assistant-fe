import { createContext, useContext } from "react";
import EmbeddingCardLayout from "../layout/EmbeddingCardLayout";
import EmbeddingCardActions from "./EmbeddingCardActions";
import EmbeddingCardContent from "./EmbeddingCardContent";
import EmbeddingCardHeader from "./EmbeddingCardHeader";
import EmbeddingCardLoading from "./EmbeddingCardLoading";

// Context
interface EmbeddingCardContextProps {
  id?: string;
  name: string;
  isLoading: boolean;
  url?: string;
  crawledAt?: string;
  docsImageSrc?: string;
  docsImageAlt?: string;
  onUrlClick?: () => void;
  onCrawledAtClick?: () => void;
  preview?: string;
  status?: string;
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
  id?: string;
  name?: string;
  isLoading?: boolean;
  url?: string;
  crawledAt?: string;
  docsImageSrc?: string;
  docsImageAlt?: string;
  onUrlClick?: () => void;
  onCrawledAtClick?: () => void;
  preview?: string;
  status?: string;
};

export default function EmbeddingCardCore({
  children,
  id,
  name = "Document", // Changed default
  isLoading = false,
  url = "",
  crawledAt = "",
  docsImageSrc,
  docsImageAlt,
  onUrlClick,
  onCrawledAtClick,
  preview,
  status,
}: EmbeddingCardCoreProps) {
  return (
    <EmbeddingCardContext.Provider
      value={{
        id,
        name,
        isLoading,
        url,
        crawledAt,
        docsImageSrc,
        docsImageAlt,
        onUrlClick,
        onCrawledAtClick,
        preview,
        status,
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
