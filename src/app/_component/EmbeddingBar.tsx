"use client";

import Image from "next/image";

const embedding = [
  { id: 1, title: "Docs 1" },
  { id: 2, title: "Docs 2" },
  { id: 3, title: "Docs 3" },
];

export default function EmbeddingBar() {
  return (
    <aside className="w-full h-full flex max-w-xs bg-primary border-r flex-col items-center overflow-y-auto">
      <div className="Embedding w-full flex justify-center">
        <div className="EmbeddingBox flex h-[5rem] w-[15rem] justify-between items-center">
          <button className="flex justify-center bg-buttonPrimary w-[16rem] hover:bg-gray-200 rounded-[2rem] p-2 border border-baseLine">
            <Image src="/addIcon.svg" alt="Add Icon" width={16} height={16} />
          </button>
        </div>
      </div>
      <ul>
        {embedding.map((embedding) => (
          <li key={embedding.id}>
            <h1>{embedding.title}</h1>
          </li>
        ))}
      </ul>
    </aside>
  );
}
