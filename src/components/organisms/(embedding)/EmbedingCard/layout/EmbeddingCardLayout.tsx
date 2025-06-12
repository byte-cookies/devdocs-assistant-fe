import { cn } from "@/utils/tailwindHelper";
import React, { ReactNode } from "react";
import { useEmbeddingCardContext } from "../core/EmbeddingCardCore";
import {
  EmbeddingCardBodyStyles,
  EmbeddingCardContentContainerStyles,
  EmbeddingCardLayoutStyles,
} from "./EmbeddingCardLayout.styles";

type LayoutProps = {
  children: ReactNode;
  className?: string; // Added
};

function EmbeddingCardLayout({ children, className }: LayoutProps) {
  const { isLoading } = useEmbeddingCardContext();

  const items = React.Children.toArray(children) as React.ReactElement[];

  const header = items.find(
    (c) => (c.type as any)?.name === "EmbeddingCardHeader"
  );

  const loading = items.find(
    (c) => (c.type as any)?.name === "EmbeddingCardLoading"
  );

  const content = items.find(
    (c) => (c.type as any)?.name === "EmbeddingCardContent"
  );

  const actions = items.find(
    (c) => (c.type as any)?.name === "EmbeddingCardActions"
  );

  return (
    <section className={cn(EmbeddingCardLayoutStyles(), className)}>
      {" "}
      {/* Used className */}
      {header}
      <div className={cn(EmbeddingCardBodyStyles())}>
        {isLoading ? (
          loading
        ) : (
          <div className={cn(EmbeddingCardContentContainerStyles())}>
            {content}
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}

export default EmbeddingCardLayout;
