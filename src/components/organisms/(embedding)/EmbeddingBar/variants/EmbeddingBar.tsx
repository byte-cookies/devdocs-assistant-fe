"use client";

import EmbeddingBarCore from "../core/EmbeddingBarCore";

export default function EmbeddingBar() {
  return (
    <EmbeddingBarCore>
      <EmbeddingBarCore.Layout>
        <EmbeddingBarCore.Input />
        <EmbeddingBarCore.CardList />
      </EmbeddingBarCore.Layout>
    </EmbeddingBarCore>
  );
}
