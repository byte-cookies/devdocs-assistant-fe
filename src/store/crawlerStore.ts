import { create } from "zustand";

// Document 타입 정의 (API 응답에 맞춰 구체화 필요)
export interface Document {
  id: string; // 또는 source 등 고유 식별자
  url: string;
  status: string; // 예: "loaded", "pending", "failed"
  preview: string;
  // 기타 문서 관련 필드
}

interface CrawlerState {
  isCrawlable: boolean | null;
  setIsCrawlable: (value: boolean) => void;
  lastCrawledURL: string | null;
  setLastCrawledURL: (url: string) => void;
  ingestResult: string | null;
  setIngestResult: (message: string) => void;
  documents: Document[]; // 문서 목록 상태 추가
  setDocuments: (documents: Document[]) => void; // 문서 목록 설정 액션 추가
  addDocument: (document: Document) => void; // 단일 문서 추가 액션 (선택적)
  updateDocumentStatus: (id: string, status: string) => void; // 문서 상태 업데이트 액션 (선택적)
}

export const useCrawlerStore = create<CrawlerState>((set) => ({
  isCrawlable: null,
  setIsCrawlable: (value) => set({ isCrawlable: value }),
  lastCrawledURL: null,
  setLastCrawledURL: (url) => set({ lastCrawledURL: url }),
  ingestResult: null,
  setIngestResult: (message) => set({ ingestResult: message }),
  documents: [], // 초기 문서 목록은 빈 배열
  setDocuments: (documents) => set({ documents }),
  addDocument: (document) =>
    set((state) => ({ documents: [...state.documents, document] })),
  updateDocumentStatus: (id, status) =>
    set((state) => ({
      documents: state.documents.map((doc) =>
        doc.id === id ? { ...doc, status } : doc
      ),
    })),
}));
