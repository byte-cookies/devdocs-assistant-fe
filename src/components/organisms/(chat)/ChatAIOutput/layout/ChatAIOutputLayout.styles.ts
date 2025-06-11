import { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const ChatAIOutputStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex flex-col justify-between",
      sizing: "w-full h-auto min-h-[6.5rem]",
      spacing: "",
      visual: "border-2 rounded-md shadow-md border-gray-300 bg-background ",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);
