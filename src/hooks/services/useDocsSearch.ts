"use client";

import { useCrawlerStore } from "@/store/crawlerStore";
import { useCallback, useEffect, useState } from "react";
import { useCrawlerDocument } from "../apis/useCrawlerDocument";
import { useLangchainRagAsk } from "../apis/useLangchainRagAsk";

// 검색 결과 및 최신 문서 표시를 위한 타입
interface SearchResult {
  id: string;
  title: string;
  snippet: string;
  source: string;
  // ... 기타 필드
}

// useCrawlerDocument가 반환할 것으로 기대되는 데이터 구조
interface ExpectedLatestDocsData {
  count?: number;
  documents: Array<{ source: string; preview: string }>; // 기존 유지 또는 더 구체화 가능
  // API 응답에 따라 id, content 등이 있을 경우 추가
}

// ExpectedLatestDocsData.documents의 개별 아이템 타입
type LatestDocumentItem = {
  source: string;
  preview: string;
  [key: string]: unknown; // any 대신 unknown 사용
};

// useLangchainRagAsk의 sources 아이템 타입 (예시, 실제 API 응답에 맞게 조정 필요)
interface LangchainRagSourceItem {
  source: string;
}

// 검색 결과를 저장할 상태 (검색어, 결과, 로딩 상태, 오류 상태)
export const useDocsSearch = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const { setDocuments: setDocumentsInStore } = useCrawlerStore();

  const {
    mutate: searchDocsWithQuery,
    isPending: isSearching,
    error: searchError,
    data: searchApiResponse,
  } = useLangchainRagAsk();

  const {
    data: latestDocumentsData,
    isLoading: isLoadingLatestDocs,
    error: latestDocsError,
    refetch: refetchLatestDocuments,
  } = useCrawlerDocument(50);

  useEffect(() => {
    refetchLatestDocuments(); // 명시적으로 마운트 시 호출
  }, [refetchLatestDocuments]);

  useEffect(() => {
    const currentDocsData = latestDocumentsData as
      | ExpectedLatestDocsData
      | undefined;
    if (currentDocsData && currentDocsData.documents) {
      const formattedForStore = currentDocsData.documents.map(
        (doc: LatestDocumentItem, index: number) => ({
          // index 추가
          id: `${doc.source}-${index}`, // URL과 index를 조합하여 고유 ID 생성
          url: doc.source,
          status: "loaded",
          preview: doc.preview,
        })
      );
      setDocumentsInStore(formattedForStore);

      if (!searchInput.trim()) {
        const formattedForSearchDisplay = currentDocsData.documents.map(
          (doc: LatestDocumentItem, index: number) => ({
            // index 추가
            id: `${doc.source}-${index}`, // URL과 index를 조합하여 고유 ID 생성
            title: doc.source, // 실제 제목 필드 사용 권장
            snippet: doc.preview || "미리보기 없음",
            source: doc.source,
          })
        );
        setSearchResults(formattedForSearchDisplay);
      }
    }
  }, [latestDocumentsData, searchInput, setDocumentsInStore]);

  useEffect(() => {
    if (searchApiResponse && searchInput.trim()) {
      if (searchApiResponse.sources) {
        const formattedResults: SearchResult[] = searchApiResponse.sources.map(
          (item: LangchainRagSourceItem, index: number) => ({
            id: `${item.source}-${index}`, // 이미 index 사용 중, 일관성을 위해 포맷 변경
            title: item.source, // 실제 제목 필드 사용 권장
            snippet: `출처: ${item.source}`, // RAG 응답에 따라 적절한 스니펫 사용
            source: item.source,
          })
        );
        setSearchResults(formattedResults);
      } else if (searchApiResponse.answer) {
        // sources가 없고 answer만 있는 경우
        setSearchResults([
          {
            id: "answer-1",
            title: "검색 결과 요약",
            snippet: searchApiResponse.answer,
            source: "AI 요약",
          },
        ]);
      }
    }
  }, [searchApiResponse, searchInput]);

  const performSearch = useCallback(
    async (query: string) => {
      setSearchInput(query);
      if (!query.trim()) {
        // 검색어가 없으면 최신 문서를 표시
        const currentDocsData = latestDocumentsData as
          | ExpectedLatestDocsData
          | undefined;
        if (currentDocsData && currentDocsData.documents) {
          const formattedForSearchDisplay = currentDocsData.documents.map(
            (doc: LatestDocumentItem, index: number) => ({
              // index 추가
              id: `${doc.source}-${index}`, // URL과 index를 조합하여 고유 ID 생성
              title: doc.source,
              snippet: doc.preview || "미리보기 없음",
              source: doc.source,
            })
          );
          setSearchResults(formattedForSearchDisplay);
        } else {
          // 최신 문서 데이터가 아직 로드되지 않았다면 로드 시도
          refetchLatestDocuments();
          setSearchResults([]); // 로드 중에는 결과 비움
        }
        return;
      }
      // 검색어가 있으면 검색 API 호출
      searchDocsWithQuery({ query });
    },
    [searchDocsWithQuery, latestDocumentsData, refetchLatestDocuments] // latestDocumentsData 추가
  );

  return {
    searchInput,
    setSearchInput,
    performSearch,
    searchResults,
    isSearching, // 검색 API 로딩 상태
    isLoadingLatestDocs, // 최신 문서 로딩 상태
    searchError, // 검색 API 에러
    latestDocsError, // 최신 문서 로딩 에러
    refetchLatestDocuments, // 최신 문서 수동 새로고침 함수
  };
};

export default useDocsSearch;
