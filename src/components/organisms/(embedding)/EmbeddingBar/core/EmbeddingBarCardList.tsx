import EmbeddingCard from "../../EmbedingCard";

export default function EmbeddingBarCardList() {
  const exampleCards = [
    {
      id: "1",
      title: "Example Document 1",
      url: "https://example.com/doc1",
      crawledAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Example Document 2",
      url: "https://example.com/doc2",
      crawledAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Example Document 3",
      url: "https://example.com/doc3",
      crawledAt: new Date().toISOString(),
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-y-auto p-2 mt-2">
      {exampleCards.map((card) => (
        <EmbeddingCard
          key={card.id}
          isLoading={false}
          name={card.title}
          docsImageSrc="/embedding.png"
          docsImageAlt="Placeholder Image"
          url={card.url}
          crawledAt={card.crawledAt}
          onCrawledAtClick={() => {}}
          onUrlClick={() => {}}
        />
      ))}
    </div>
  );
}
