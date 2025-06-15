"use client";

import { useQuery } from "@tanstack/react-query";

// API 응답 타입 (필요에 따라 수정)
/* {
  "url": "https://ko.wikipedia.org/wiki/%EC%BD%94%EB%94%A9",
  "status_code": 200,
  "crawlable": true,
  "isAccessible": true,
  "reason": "Allowed by robots.txt"
} */
interface CrawlerCheckResponse {
  url: string;
  status_code: number;
  crawlable: boolean;
  isAccessible: boolean;
  reason: string;
}

// API 호출 함수
const fetchCrawlerCheck = async (
  params?: string
): Promise<CrawlerCheckResponse> => {
  const queryParams = params ? new URLSearchParams(params).toString() : "";
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_API_URL}/api/crawler/check?${queryParams}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// TanStack Query 훅
export const useCrawlerCheck = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any,
  options?: Record<string, unknown>
) => {
  return useQuery<CrawlerCheckResponse, Error>({
    queryKey: ["crawlerCheck", params],
    queryFn: () => fetchCrawlerCheck(params),
    ...(options || {}),
  });
};

// Successful response example
/* {
  "url": "https://ko.wikipedia.org/wiki/%EC%BD%94%EB%94%A9",
  "status_code": 200,
  "crawlable": true,
  "isAccessible": true,
  "reason": "Allowed by robots.txt"
} */

// error response example
/* {
  "url": "error",
  "status_code": null,
  "crawlable": false,
  "isAccessible": false,
  "reason": "URL must use http or https scheme"
} */
