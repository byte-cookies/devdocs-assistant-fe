import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const inputContainerStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex justify-center items-start",
      sizing: "",
      spacing: "px-3 py-2",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  }),
  {
    variants: {
      inputSizing: {
        chatInput: "w-full h-full",
        docsInput: "w-[15rem] h-[3rem]",
      },
      inputVisual: {
        chatInput: "bg-white",
        docsInput: "border-buttonPrimary bg-white rounded-md border-2",
      },
    },
  }
);

export const inputStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "w-full h-full",
      sizing: "",
      spacing: "",
      visual: "",
      typography: "text-gray-900",
      interactive: "placeholder:text-gray-500 focus:outline-none resize-none",
      behavior: "transition-colors duration-200",
    } satisfies TailwindClassCategories,
  }),
  {
    variants: {
      inputSizing: {
        chatInput: "text-P24",
        docsInput: "text-P10",
      },
    },
  }
);
