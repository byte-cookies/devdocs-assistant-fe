import { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const ChatAIOutputContentStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex justify-center items-center",
      sizing: "w-full h-auto",
      spacing: "p-4",
      visual: "bg-background rounded-md border-b-2 border-gray-300",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);
