"use client";

import React from "react";

interface EmbeddingBarLayoutProps {
  children: React.ReactNode;
}

const EmbeddingBarLayout: React.FC<EmbeddingBarLayoutProps> = ({
  children,
}: EmbeddingBarLayoutProps) => {
  const items = React.Children.toArray(children) as React.ReactElement[];

  const cardList = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.displayName === "EmbeddingBarCardList"
  );

  const input = items.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c) => (c.type as any)?.displayName === "EmbeddingBarInput"
  );

  return (
    <section className="flex flex-col bg-primary w-full h-full p-4">
      {input}
      {cardList}
    </section>
  );
};

export default EmbeddingBarLayout;
