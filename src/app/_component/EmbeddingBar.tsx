"use client";

import Image from "next/image";

//추가 ---------------------------------------------------------------
import { useEffect } from "react";
import { checkCrawlable, ingestDocument, useDocuments } from "@/lib/crawler";
// ------------------------------------------------------------------

const embedding = [
  { id: 1, title: "Docs 1" },
  { id: 2, title: "Docs 2" },
  { id: 3, title: "Docs 3" },
];

export default function EmbeddingBar() {

    // 추가, (테스트용)
    const { data, isLoading, error } = useDocuments(5); // 임베딩된 카드를 5개로 고정시켜 놓음
    console.log("문서 응답 데이터: ", data);  // 문서 응답 데이터 확인용

// ------------------------------------------------------------------
    
    // 예시 URL 체크 (테스트용)
    
    /*
    //- false
    checkCrawlable("https://example.com")
      .then((res) => {
        console.log("크롤링 가능 여부:", res);
      })
      .catch((err) => {
        console.error("크롤링 체크 실패:", err.message);
      });
    
    //- true
    checkCrawlable("https://en.wikipedia.org/wiki/Web_crawler")
    .then((isCrawlable) => {
      console.log("크롤링 가능 여부:", isCrawlable);
    })
    .catch((err) => {
      console.error("크롤링 체크 실패:", err.message);
    });
  
    useEffect(() => {
      checkCrawlable("https://en.wikipedia.org/wiki/Web_crawler")
        .then((res) => {
          console.log("✅ 크롤링 가능 여부:", res);
        })
        .catch((err) => {
          console.error("❌ 크롤링 체크 실패:", err.message);
        });
    }, []);
    */
// ------------------------------------------------------------------

  return (
    <aside className="w-full h-full flex max-w-xs bg-primary border-r flex-col items-center overflow-y-auto">
      <div className="Embedding w-full flex justify-center">
        <div className="EmbeddingBox flex h-[5rem] w-[15rem] justify-between items-center">
          <button className="flex justify-center bg-buttonPrimary w-[16rem] hover:bg-gray-200 rounded-[2rem] p-2 border border-baseLine">
            <Image src="/addIcon.svg" alt="Add Icon" width={16} height={16} />
          </button>
        </div>
      </div>

      {/* 추가 ------------------------------------------------*/}
      {isLoading && <p className="text-sm text-gray-500">문서 로딩 중...</p>}
      {error && <p className="text-sm text-red-500">문서 로딩 실패: {error.message}</p>}
      {/* 추가 ------------------------------------------------*/}

      <ul>
        {/* 초기 코드
        {embedding.map((embedding) => (
          <li key={embedding.id}>
            <h1>{embedding.title}</h1>
          </li>
        ))}
          */}
        {data?.documents?.map((doc: any, index: number) => (
          <li key={index}>
            <h1>{doc.title || doc.source || `문서 ${index +1}`}</h1>
          </li>
        ))}
      </ul>
    </aside>
  );
}

