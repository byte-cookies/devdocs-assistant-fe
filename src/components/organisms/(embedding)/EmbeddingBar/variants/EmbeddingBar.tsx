"use client";

import EmbeddingBarCore from "../core/EmbeddingBarCore";

export default function EmbeddingBar() {
  return (
    <EmbeddingBarCore>
      <EmbeddingBarCore.Input />
      <EmbeddingBarCore.CardList />
    </EmbeddingBarCore>
  );
}
