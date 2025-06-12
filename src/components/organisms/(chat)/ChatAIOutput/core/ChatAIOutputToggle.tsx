import Gauge from "@/components/atoms/Gauge";
import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Button from "@/components/molecules/Button";
import { cn } from "@/utils/tailwindHelper";
import { useEffect, useRef, useState } from "react";
import { useChatAIOutputContext } from "./ChatAIOutputCore";
import {
  ChatAIOutputButtonAreaStyles,
  ChatAIOutputIconAreaStyles,
  ChatAIOutputToggleStyles,
} from "./ChatAIOutputToggle.styles";

export default function ChatAIOutputToggle() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const { sources } = useChatAIOutputContext();

  const Authority = 75; // 예시 값
  const Recency = 85; // 예시 값
  const Accuracy = 90; // 예시 값

  useEffect(() => {
    if (contentRef.current) {
      // content 높이를 읽어서 max-height에 설정
      setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  const verified = true;

  const handleCopy = () => {};
  const handleRegenerate = () => {};
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* 토글 영역 */}
      <div className={cn(ChatAIOutputToggleStyles())}>
        <div className={cn(ChatAIOutputIconAreaStyles())}>
          <Icon
            src="/copy.svg"
            alt="Copy Button"
            iconSizing="lg"
            className="cursor-pointer hover:opacity-70 transition-opacity"
            onClick={handleCopy}
          />
          <Icon
            src="/restore.svg"
            alt="Restore Button"
            iconSizing="lg"
            className="cursor-pointer hover:opacity-70 transition-opacity"
            onClick={handleRegenerate}
          />
        </div>
        <div className={cn(ChatAIOutputButtonAreaStyles())}>
          <Button
            leftIcon={{
              src: verified ? "/verified.svg" : "/unVerified.svg",
              alt: verified ? "Verified Icon" : "Unverified Icon",
              iconSizing: "md",
            }}
            text={verified ? "Verified" : "Unverified"}
            rightIcon={{
              src: open ? "/up.svg" : "/down.svg",
              alt: open ? "Toggle On Icon" : "Toggle Off Icon",
              iconSizing: "md",
            }}
            buttonSizing="full"
            buttonVisual="ghost"
            className="rounded-full shadow-none"
            onClick={handleToggle}
          />
        </div>
      </div>
      {/* 확장 영역 */}
      <div
        ref={contentRef}
        style={{
          maxHeight,
          transition: "max-height 0.3s ease-in-out",
          overflow: "hidden",
        }}
      >
        <div className="flex flex-col gap-4 p-4 w-full h-full">
          {sources?.map((source, index) => (
            /* 소스 컴포넌트 */
            <div
              key={`${source.source}-${index}`} // source.source와 index를 조합하여 고유 key 생성
              className="w-fit flex items-center justify-start gap-2 bg-iconPrimary rounded-full h-auto py-[0.2rem] px-3"
            >
              <Icon src="/source.svg" alt="source" iconSizing="lg" />
              <a
                href={source.source}
                className="text-white hover:underline text-[0.5rem] w-auto whitespace-normal break-all"
              >
                {source.source}
              </a>
            </div>
          ))}
          <div className="mt-4 w-full h-auto flex flex-col gap-2 items-start justify-start bg-background rounded-md border-gray-300">
            {/* 유효성 검증 */}
            <div className="flex items-center gap-2 w-full h-auto">
              <Text
                content="Authority"
                textLayout="justify-start"
                textSizing="sm"
                textVisual="tertiary"
                className="w-[4rem]"
              />
              <Gauge value={Authority} gaugeSizing="md" gaugeVisual="blue" />
            </div>
            <div className="flex items-center gap-2 w-full h-auto">
              <Text
                content="Recency"
                textLayout="justify-start"
                textSizing="sm"
                textVisual="tertiary"
                className="w-[4rem]"
              />
              <Gauge value={Recency} gaugeSizing="md" gaugeVisual="blue" />
            </div>
            <div className="flex items-center gap-2 w-full h-auto">
              <Text
                content="Accuracy"
                textLayout="justify-start"
                textSizing="sm"
                textVisual="tertiary"
                className="w-[4rem]"
              />
              <Gauge value={Accuracy} gaugeSizing="md" gaugeVisual="blue" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
