import { createContext, useContext } from "react";
import EmbeddingBarLayout from "../layout/EmbeddingBarLayout";
import EmbeddingBarCardList from "./EmbeddingBarCardList";
import EmbeddingBarInput from "./EmbeddingBarInput";

interface EmbeddingBarContextProps {
  // Define the properties and methods that will be provided by the context;
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
  return (
    <EmbeddingBarContext.Provider value={undefined}>
      {children}
    </EmbeddingBarContext.Provider>
  );
}

EmbeddingBarCore.Layout = EmbeddingBarLayout;
EmbeddingBarCore.Input = EmbeddingBarInput;
EmbeddingBarCore.CardList = EmbeddingBarCardList;
