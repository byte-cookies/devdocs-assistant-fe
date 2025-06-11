import React from "react";

interface EmbeddingBarLayoutProps {
  children: React.ReactNode;
}

export default function EmbeddingBarLayout({
  children,
}: EmbeddingBarLayoutProps) {
  const items = React.Children.toArray(children) as React.ReactElement[];

  const cardList = items.find(
    (c) => (c.type as any)?.name === "EmbeddingBarCardList"
  );

  const input = items.find(
    (c) => (c.type as any)?.name === "EmbeddingBarInput"
  );

  return (
    <section className="flex flex-col bg-primary w-full h-full p-4">
      {input}
      {cardList}
    </section>
  );
}
