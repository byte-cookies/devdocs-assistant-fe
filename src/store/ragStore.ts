// store/ragStore.ts
import { create } from 'zustand';

interface RagState {
  answer: string;
  setAnswer: (a: string) => void;
  resetAnswer: () => void;
}

export const useRagStore = create<RagState>((set) => ({
  answer: "",
  setAnswer: (a) => set({ answer: a }),
  resetAnswer: () => set({ answer: "" }),
}));