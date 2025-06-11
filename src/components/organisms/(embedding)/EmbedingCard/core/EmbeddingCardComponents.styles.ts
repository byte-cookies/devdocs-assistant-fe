// filepath: /Users/limjeonghoon/Desktop/프로젝트Lab/devdocs-assistant-fe/src/components/organisms/(embedding)/EmbedingCard/core/EmbeddingCardComponents.styles.ts
import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const EmbeddingCardHeaderStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-center",
      sizing: "w-full h-[2rem]",
      spacing: "",
      typography: "",
      visual: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const EmbeddingCardContentStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "relative flex items-center justify-center",
      sizing: "w-full h-[6rem]",
      spacing: "p-2",
      typography: "",
      visual: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const EmbeddingCardActionsStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-between",
      sizing: "w-full h-[2rem]",
      spacing: "gap-2",
      typography: "",
      visual: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const EmbeddingCardLoadingStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-center",
      sizing: "w-full h-[6rem]",
      spacing: "gap-2",
      typography: "",
      visual: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);
