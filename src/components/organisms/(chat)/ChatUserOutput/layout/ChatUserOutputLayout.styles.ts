import { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const ChatUserOutputContentStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex justify-center items-center",
      sizing: "w-[70%] h-auto",
      spacing: "p-8",
      visual: "bg-background rounded-md border-2 border-gray-300 shadow-md",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);
