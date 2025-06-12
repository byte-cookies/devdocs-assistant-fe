import { create } from "zustand";

// LangchainRagAsk 응답의 source 타입 정의
export interface MessageSource {
  timestamp?: string;
  source: string;
  // 필요한 경우 여기에 다른 source 관련 필드 추가
}

// 메시지 타입 정의
export interface Message {
  id: string; // 고유 ID (예: timestamp 또는 UUID)
  type: "user" | "ai";
  text: string;
  timestamp: number;
  sources?: MessageSource[]; // AI 메시지의 경우 출처 정보 포함 가능
  error?: boolean; // 메시지 전송/처리 오류 여부
}

// Chat 스토어 상태 타입 정의
interface ChatState {
  messages: Message[];
  input: string;
  isLoading: boolean;
  error: string | null;
  addMessage: (
    message: Omit<Message, "id" | "timestamp"> & { timestamp?: number }
  ) => void;
  setInput: (input: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearChat: () => void;
  // 필요에 따라 특정 메시지 업데이트 또는 삭제 액션 추가 가능
  // updateMessage: (id: string, updates: Partial<Message>) => void;
  // removeMessage: (id: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  input: "",
  isLoading: false,
  error: null,
  addMessage: (messageContent) => {
    const newMessage: Message = {
      id:
        (messageContent.timestamp || Date.now()).toString() +
        "-" +
        Math.random().toString(36).substring(2, 15), // 간단한 고유 ID 생성
      timestamp: messageContent.timestamp || Date.now(),
      ...messageContent,
    };
    set((state) => ({ messages: [...state.messages, newMessage] }));
  },
  setInput: (input) => set({ input }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  clearChat: () =>
    set({ messages: [], input: "", isLoading: false, error: null }),
  // updateMessage: (id, updates) =>
  //   set((state) => ({
  //     messages: state.messages.map((msg) =>
  //       msg.id === id ? { ...msg, ...updates } : msg
  //     ),
  //   })),
  // removeMessage: (id) =>
  //   set((state) => ({
  //     messages: state.messages.filter((msg) => msg.id !== id),
  //   })),
}));
