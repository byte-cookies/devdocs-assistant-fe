"use client";

import Image from "next/image";
import EmbeddingCard from "./embedding-bar/EmbeddingCard";

const embedding = [
  { id: 1, title: "Docs 1" },
  { id: 2, title: "Docs 2" },
  { id: 3, title: "Docs 3" },
];

export default function EmbeddingBar() {
  return (
    <section className="w-full min-w-[15rem] h-full flex bg-primary border-r flex-col items-center overflow-y-auto p-4 gap-y-[1.5rem]">
      <button className="flex justify-center bg-buttonPrimary w-full h-[2.5rem] hover:bg-gray-200 rounded-[2rem] p-2 border border-baseLine">
        <Image src="/addIcon.svg" alt="Add Icon" width={16} height={16} />
      </button>
      {embedding.map((embedding) => (
        <EmbeddingCard key={embedding.id} name={embedding.title} />
      ))}
    </section>
  );
}
