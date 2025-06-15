"use client";

import { useMutation } from "@tanstack/react-query";

interface CrawlerIngestRequest {
  url: string;
}

// API 응답 타입 (필요에 따라 수정)
interface CrawlerIngestResponse {
  success: boolean;
  message: string;
  source: string;
}

// API 호출 함수
const postCrawlerIngest = async (
  payload: CrawlerIngestRequest
): Promise<CrawlerIngestResponse> => {
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_API_URL}/api/crawler/ingest`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: payload.url,
      }),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// TanStack Query 훅
export const useCrawlerIngest = (options?: Record<string, unknown>) => {
  return useMutation<CrawlerIngestResponse, Error, CrawlerIngestRequest>({
    mutationFn: postCrawlerIngest,
    onSuccess: () => {
      // 성공 시 관련 쿼리 무효화 (예시)
      // queryClient.invalidateQueries({ queryKey: ['someRelatedQuery'] });
    },
    ...(options || {}),
  });
};

// Successful response example
/* {
  "success": true,
  "message": "Document crawled, split and stored.",
  "source": "https://ko.wikipedia.org/wiki/%EC%BD%94%EB%94%A9"
} */

// Error response example
/* {
  "success": false,
  "message": "크롤링 불가: URL must use http or https scheme",
  "status_code": null
} */
