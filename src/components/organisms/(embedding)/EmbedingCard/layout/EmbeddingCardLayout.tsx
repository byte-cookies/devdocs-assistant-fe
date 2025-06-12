import { cn } from "@/utils/tailwindHelper";
import React, { ReactNode } from "react";
import { useEmbeddingCardContext } from "../core/EmbeddingCardCore";
import {
  EmbeddingCardBodyStyles,
  EmbeddingCardContentContainerStyles,
  EmbeddingCardLayoutStyles,
} from "./EmbeddingCardLayout.styles";

interface EmbeddingCardLayoutProps {
  HeaderComponent?: React.ElementType; // Optional
  ContentComponent?: React.ElementType; // Optional
  ActionsComponent?: React.ElementType; // Optional
  headerProps?: { [key: string]: unknown };
  contentProps?: { [key: string]: unknown };
  actionsProps?: { [key: string]: unknown };
  className?: string;
  children?: ReactNode;
}

const EmbeddingCardLayout: React.FC<EmbeddingCardLayoutProps> = ({
  children,
  className,
}) => {
  const { isLoading } = useEmbeddingCardContext();

  const items = React.Children.toArray(children) as React.ReactElement[];

  const header = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "EmbeddingCardHeader"
  );

  const loading = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "EmbeddingCardLoading"
  );

  const content = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "EmbeddingCardContent"
  );

  const actions = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.name === "EmbeddingCardActions"
  );

  return (
    <section className={cn(EmbeddingCardLayoutStyles(), className)}>
      {/* Render children directly or use the found components */}
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
        {/* If HeaderComponent etc. are not found via children, render children directly */}
        {/* This logic might need refinement based on expected usage */}
        {!header && !loading && !content && !actions && children}
      </div>
    </section>
  );
};

export default EmbeddingCardLayout;
