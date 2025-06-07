import type { VariantStylesDefault } from "@/types/tailwind";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// cn 유틸리티 함수 - clsx와 tailwind-merge 결합
export const cn = (...inputs: Parameters<typeof clsx>) => {
  return twMerge(clsx(inputs));
};

// CVA variants 형태의 객체를 받아서 default 값들만 추출하여 조합하는 헬퍼 함수
export const combineDefaultStyles = (variantStyles: VariantStylesDefault) =>
  Object.values(variantStyles.default).filter(Boolean).join(" ");
