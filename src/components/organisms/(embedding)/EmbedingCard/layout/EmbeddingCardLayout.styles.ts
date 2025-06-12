import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const EmbeddingCardLayoutStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex flex-col items-center",
      sizing: "w-full h-auto",
      spacing: "p-4 gap-2",
      visual: "bg-background rounded-xl shadow-md",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const EmbeddingCardBodyStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex flex-col items-center justify-center",
      sizing: "w-full h-full",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const EmbeddingCardContentContainerStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex flex-col items-center",
      sizing: "w-full min-h-[6rem]",
      spacing: "gap-y-2",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);
