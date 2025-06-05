import { create } from "zustand";

interface CrawlerState {
  isCrawlable: boolean | null;
  setIsCrawlable: (value: boolean) => void;
  lastCrawledURL: string | null;
  setLastCrawledURL: (url: string) => void;
  ingestResult: string | null;
  setIngestResult: (message: string) => void;
}

export const useCrawlerStore = create<CrawlerState>((set) => ({
  isCrawlable: null,
  setIsCrawlable: (value) => set({ isCrawlable: value }),
  lastCrawledURL: null,
  setLastCrawledURL: (url) => set({ lastCrawledURL: url }),
  ingestResult: null,
  setIngestResult: (message) => set({ ingestResult: message }),
}));