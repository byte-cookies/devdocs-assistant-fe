"use client";

import { useChatStore } from "@/store/chatStore";
import { useLangchainRagAsk } from "../apis/useLangchainRagAsk";

const useChat = () => {
  const { mutate, isPending, error: langchainError } = useLangchainRagAsk();
  const { clearChat: clearChatStore } = useChatStore();
  const useCrawlerCheck = (): /*any*/ {
    mutate: () => void;
    isPending: boolean;
  } => ({ mutate: () => {}, isPending: false }); // 임시 정의 타입 구체화
  const { mutate: checkMutate, isPending: isChecking } = useCrawlerCheck();
  const useCrawlerIngest = (): /*any*/ {
    mutate: () => void;
    isPending: boolean;
  } => ({ mutate: () => {}, isPending: false }); // 임시 정의 타입 구체화
  const { mutate: ingestMutate, isPending: ingestPending } = useCrawlerIngest();
  const useForm = (): /*any*/ {
    handleInputChange: () => void;
    handleSubmit: () => void;
  } => ({
    handleInputChange: () => {},
    handleSubmit: () => {},
  }); // 임시 정의 타입 구체화
  const {
    handleInputChange: formHandleInputChange,
    handleSubmit: formHandleSubmit,
  } = useForm();

  const {
    messages: chatMessages,
    input: currentInput, // useChatStore의 input 사용
    isLoading, // useChatStore의 isLoading 사용
    error, // error 변수 사용되지 않음 처리
    addMessage,
    setInput,
    setLoading,
    setError,
    clearChat, // clearChat 변수 사용되지 않음 처리
  } = useChatStore();
  // const { mutate, isPending, error: apiError } = useLangchainRagAsk(); // 중복 제거

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (message: string) => {
    if (!message.trim()) return;

    addMessage({ type: "user", text: message });
    setLoading(true);
    setError(null);

    try {
      mutate(
        { query: message }, // message 사용
        {
          onSuccess: (data) => {
            addMessage({
              type: "ai",
              text: data.answer,
              sources: data.sources,
            });
            setLoading(false);
          },
          onError: (err: Error) => {
            addMessage({
              type: "ai",
              text: "죄송합니다. 답변을 생성하는 동안 오류가 발생했습니다.",
              error: true,
            });
            setError(err.message || "알 수 없는 오류가 발생했습니다.");
            setLoading(false);
          },
        }
      );
    } catch (err: unknown) {
      // 이 catch 블록은 일반적으로 mutate 내부의 onError에서 처리되므로 중복될 수 있습니다.
      // 하지만 네트워크 요청 자체의 실패 등 예외적인 경우를 위해 남겨둘 수 있습니다.
      const errorMessage =
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";
      addMessage({
        type: "ai",
        text: `오류: ${errorMessage}`,
        error: true,
      });
      setError(errorMessage);
      setLoading(false);
    }

    setInput(""); // 입력 필드 초기화
  };

  return {
    chatMessages,
    sendMessage: handleSubmit,
    isLoading,
    langchainError, // apiError에서 langchainError로 변수명 변경
    currentInput,
    setCurrentInput: setInput,
    handleInputChange, // handleInputChange 추가
  };
};

export default useChat;
