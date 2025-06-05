import { useCrawlerStore } from "@/store/crawlerStore";
import { useQuery } from "@tanstack/react-query";

// 크롤링 가능 여부를 체크하는 함수
async function checkCrawlable(url: string): Promise<string> {
  const { setIsCrawlable, setLastCrawledURL } = useCrawlerStore.getState();
  
  const res = await fetch(
    `/api/crawler/check?url=${encodeURIComponent(url)}`
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail?.[0]?.msg || "크롤링 체크 실패");
  }

  const result = await res.json();

  setIsCrawlable(result.crawlable);
  setLastCrawledURL(url);

  if(result.crawlable){
    await ingestDocument(url);
  }

  return result.crawlable;
}

// 문서 인제스트 함수 추가
async function ingestDocument(url: string): Promise<void> {
  const { setIngestResult } = useCrawlerStore.getState();
  const res = await fetch("/api/crawler/ingest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail?.[0]?.msg || "문서 수집 실패");
  }

  const result = await res.json();
  console.log("크롤링 성공 응답:", result);

  setIngestResult(result.message);
}

// 문서 조회
function useDocuments(limit: number = 5) {
  return useQuery({
    queryKey: ["documents", limit],
    queryFn: async () => {
      const res = await fetch(`/api/crawler/documents?limit=${limit}`);
      if (!res.ok) throw new Error("문서 조회 실패");
      return res.json();
    },
  });
}

export { checkCrawlable, ingestDocument, useDocuments };