import { create } from "zustand";

type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
};

interface ChatState {
  messages: Message[];
  addMessage: (msg: Message) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),
}));
