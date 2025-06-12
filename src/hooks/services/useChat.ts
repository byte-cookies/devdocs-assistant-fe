import { useChatStore } from "@/store/chatStore";
import { useCallback, useEffect } from "react";
import { useLangchainRagAsk } from "../apis/useLangchainRagAsk";

export const useChat = () => {
  // useLangchainRagAsk 훅 사용
  const {
    mutate: askQuestion,
    isPending: langchainIsLoading,
    error: langchainApiError,
    data: langchainApiResponse,
  } = useLangchainRagAsk();

  const { messages, addMessage, setInput, input, setLoading, setError } =
    useChatStore();

  const sendMessage = useCallback(
    async (messageText: string) => {
      if (!messageText.trim()) return;

      addMessage({ type: "user", text: messageText });
      setInput("");
      setLoading(true);
      setError(null);

      try {
        await askQuestion({ query: messageText });
      } catch (e: any) {
        addMessage({
          type: "ai",
          text: "메시지 전송 중 오류가 발생했습니다.",
          error: true,
        });
        setError(e.message || "메시지 전송 중 오류가 발생했습니다.");
        setLoading(false);
      }
    },
    [addMessage, setInput, setLoading, setError, askQuestion]
  );

  useEffect(() => {
    if (langchainApiResponse) {
      addMessage({
        type: "ai",
        text: langchainApiResponse.answer,
        sources: langchainApiResponse.sources,
      });
      setLoading(false);
    }
  }, [langchainApiResponse, addMessage, setLoading]);

  useEffect(() => {
    if (langchainApiError) {
      addMessage({
        type: "ai",
        text: langchainApiError.message || "응답 처리 중 오류가 발생했습니다.",
        error: true,
      });
      setError(
        langchainApiError.message || "응답 처리 중 오류가 발생했습니다."
      );
      setLoading(false);
    }
  }, [langchainApiError, addMessage, setError, setLoading]);

  return {
    chatMessages: messages,
    sendMessage,
    isLoading: langchainIsLoading,
    apiError: langchainApiError,
    currentInput: input,
    setCurrentInput: setInput,
  };
};
