import { useMutation, useQueryClient } from "@tanstack/react-query";

// API 요청 타입 (필요에 따라 수정)
interface LangchainRagAskRequest {
  query: string;
}

// API 응답 타입 (필요에 따라 수정)

interface LangchainRagAskResponse {
  answer: string;
  sources: {
    timestamp?: string;
    source: string;
  }[];
}

// API 호출 함수
const postLangchainRagAsk = async (
  payload: LangchainRagAskRequest
): Promise<LangchainRagAskResponse> => {
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_API_URL}/Langchain/rag/ask`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: payload.query,
      }),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// TanStack Query 훅
export const useLangchainRagAsk = (options?: any) => {
  const queryClient = useQueryClient();
  return useMutation<LangchainRagAskResponse, Error, LangchainRagAskRequest>({
    mutationFn: postLangchainRagAsk,
    onSuccess: () => {
      // 성공 시 관련 쿼리 무효화 (예시)
      // queryClient.invalidateQueries({ queryKey: ['relatedQueriesForRag'] });
    },
    ...options,
  });
};

// Successful response example
/* {
  "answer": "React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. React는 컴포넌트라는 개념을 사용하여 UI를 구성합니다. 컴포넌트는 자체 로직과 외관을 가진 UI의 한 부분이며, 버튼만큼 작거나 전체 페이지만큼 클 수 있습니다.\n\nReact 컴포넌트는 마크업을 반환하는 JavaScript 함수입니다. 예를 들어, 다음은 간단한 버튼 컴포넌트를 만드는 방법입니다:\n\n```javascript\nfunction MyButton() {\n  return (\n    <button>\n      I'm a button\n    </button>\n  );\n}\n```\n\n이제 `MyButton` 컴포넌트를 선언했으므로 다른 컴포넌트에 중첩시킬 수 있습니다:\n\n```javascript\nexport default function MyApp() {\n  return (\n    <div>\n      <h1>\n        Welcome to my app\n      </h1>\n      <MyButton/>\n    </div>\n  );\n}\n```\n\nReact에서는 CSS 클래스를 `className`으로 지정합니다. HTML `class` 속성과 동일한 방식으로 작동합니다. 데이터를 표시하기 위해 JSX를 사용하여 JavaScript에 마크업을 넣을 수 있습니다. 중괄호를 사용하면 JavaScript로 \"탈출\"하여 코드의 변수를 임베드하고 사용자에게 표시할 수 있습니다.\n\nReact는 이벤트에 응답하도록 이벤트 핸들러 함수를 컴포넌트 내에 선언할 수 있습니다. 이를 통해 사용자와의 상호작용을 처리하고 화면을 업데이트할 수 있습니다.",
  "sources": [
    {
      "timestamp": "2025-06-11 15:06",
      "source": "https://ko.wikipedia.org/wiki/%EC%BD%94%EB%94%A9"
    },
    {
      "source": "https://react.dev/learn"
    },
    {
      "source": "https://react.dev/learn"
    },
    {
      "source": "https://react.dev/learn"
    }
  ]
} */
