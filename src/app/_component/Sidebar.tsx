"use client";

import Link from "next/link";

const chats = [
  { id: 1, title: "Chat 1" },
  { id: 2, title: "Chat 2" },
  { id: 3, title: "Chat 3" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 border-r p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link
              href={`/chat/${chat.id}`}
              className="block p-2 rounded hover:bg-gray-200"
            >
              {chat.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
