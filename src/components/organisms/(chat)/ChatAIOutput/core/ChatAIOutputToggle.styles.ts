import { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const ChatAIOutputToggleStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-between",
      sizing: "w-full h-[3rem]",
      spacing: "p-[1rem]",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const ChatAIOutputIconAreaStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-between",
      sizing: "w-[auto] h-full",
      spacing: "gap-[1rem]",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const ChatAIOutputButtonAreaStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-center",
      sizing: "w-[8rem] h-full",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);
