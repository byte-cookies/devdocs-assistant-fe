"use client";

import { useCrawlerStore } from "@/store/crawlerStore";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // uuid 추가
import { useCrawlerCheck } from "../apis/useCrawlerCheck";
import { useCrawlerDocument } from "../apis/useCrawlerDocument";
import { useCrawlerIngest } from "../apis/useCrawlerIngest";

export const useDocsAdd = () => {
  const [urlInput, setUrlInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {
    isCrawlable,
    setIsCrawlable,
    setLastCrawledURL,
    setIngestResult,
    documents,
    setDocuments,
  } = useCrawlerStore();

  const {
    data: checkData,
    error: checkError,
    isLoading: isChecking,
    refetch: checkUrl,
  } = useCrawlerCheck(
    urlInput ? `url=${encodeURIComponent(urlInput)}` : undefined,
    { enabled: false }
  );

  const {
    mutate: ingestUrl,
    isPending: isIngesting,
    error: ingestError,
  } = useCrawlerIngest();

  const {
    data: newDocumentsData,
    isLoading: isLoadingNewDocuments,
    error: newDocumentsError,
    refetch: fetchNewDocuments,
  } = useCrawlerDocument(50);

  // 1. URL 크롤링 가능성 체크
  const handleCheckAndIngestUrl = useCallback(async () => {
    if (!urlInput.trim()) {
      setError("URL을 입력해주세요.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setIsCrawlable(false); // 이전 상태 초기화
    setIngestResult(""); // 이전 결과 초기화

    try {
      const checkResult = await checkUrl();
      if (checkResult.data && checkResult.data.crawlable) {
        setIsCrawlable(true);
        // 2. 크롤링 가능하면 Ingest 실행
        ingestUrl(
          { url: checkResult.data.url },
          {
            onSuccess: (ingestSuccessData) => {
              setIngestResult(ingestSuccessData.message);
              setLastCrawledURL(checkResult.data.url);
              // 3. Ingest 성공 시 문서 목록 업데이트
              fetchNewDocuments();
            },
            onError: (ingestErr: Error) => {
              setError(
                ingestErr.message || "문서 인덱싱 중 오류가 발생했습니다."
              );
              setIngestResult("인덱싱 실패");
              setIsCrawlable(false); // 인덱싱 실패 시 크롤링 불가능으로 간주하거나, 다른 상태로 관리
            },
            onSettled: () => {
              setIsLoading(false);
            },
          }
        );
      } else {
        setIsCrawlable(false);
        setError(
          checkResult.data?.reason ||
            checkError?.message ||
            "URL을 크롤링할 수 없거나 유효성 검사에 실패했습니다."
        );
        setIsLoading(false);
      }
    } catch (e: unknown) {
      setError(
        (e as Error).message || "URL 검사 중 예상치 못한 오류가 발생했습니다."
      );
      setIsCrawlable(false);
      setIsLoading(false);
    }
  }, [
    urlInput,
    checkUrl,
    ingestUrl,
    fetchNewDocuments,
    setIsCrawlable,
    setIngestResult,
    setLastCrawledURL,
    checkError, // checkError 추가
    // ingestData, // 의존성 배열에서 제거
  ]);

  // 새 문서 데이터 로드 시 스토어 업데이트
  useEffect(() => {
    if (newDocumentsData && newDocumentsData.documents) {
      const fetchedDocs: { source: string; preview: string }[] =
        newDocumentsData.documents;
      const formattedDocs = fetchedDocs.map((doc) => ({
        id: uuidv4(), // 고유 ID로 uuid 사용
        url: doc.source,
        status: "loaded", // 초기 상태
        preview: doc.preview,
      }));
      setDocuments(formattedDocs); // 전체 문서 목록을 새 목록으로 교체
    }
  }, [newDocumentsData, setDocuments]); // 의존성 배열에서 documents 제거

  // API 에러 처리 (check, ingest, document 로드)
  useEffect(() => {
    if (checkError) {
      setError(checkError.message || "URL 검사 중 오류가 발생했습니다.");
      // setIsCrawlable(false); // 이미 handleCheckAndIngestUrl 에서 처리
    }
  }, [checkError, setError]);

  useEffect(() => {
    if (ingestError) {
      // setError(ingestError.message || "문서 인덱싱 중 오류가 발생했습니다."); // 이미 handleCheckAndIngestUrl 에서 처리
    }
  }, [ingestError, setError]);

  useEffect(() => {
    if (newDocumentsError) {
      setError(
        newDocumentsError.message || "문서 목록 로드 중 오류가 발생했습니다."
      );
    }
  }, [newDocumentsError, setError]);

  return {
    urlInput,
    setUrlInput,
    handleCheckAndIngestUrl, // 변경된 함수 이름
    isChecking: isChecking || isLoading, // isChecking은 useCrawlerCheck의 로딩 상태
    isIngesting,
    isLoadingDocuments: isLoadingNewDocuments, // 새 문서 로드 로딩 상태
    checkResult: checkData, // checkData를 checkResult로 명칭 유지 또는 변경
    ingestResult: useCrawlerStore.getState().ingestResult, // 스토어에서 직접 가져오거나, 상태로 관리
    documents, // 스토어에서 가져온 문서 목록
    error,
    isCrawlable, // 스토어에서 가져온 크롤링 가능 여부
    fetchDocuments: fetchNewDocuments, // 문서 목록 수동 새로고침 함수 (이름 일관성 유지)
  };
};
