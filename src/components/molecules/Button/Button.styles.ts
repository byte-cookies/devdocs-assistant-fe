import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-center",
      sizing: "",
      spacing: "px-4 py-2 gap-[0.25rem]",
      visual: "border border-transparent rounded-md shadow-md",
      typography: "text-textPrimary font-primaryBold",
      interactive: "",
      behavior: "transition-colors duration-200",
    } satisfies TailwindClassCategories,
  }),
  {
    variants: {
      buttonVisual: {
        primary:
          "bg-blue-600 border-blue-600 text-whitehover:bg-blue-700 focus:ring-blue-500",
        secondary:
          "bg-white border-gray-300 text-gray-700hover:bg-gray-50 focus:ring-blue-500",
        outline:
          "bg-transparent border-blue-600 text-blue-600hover:bg-blue-50 focus:ring-blue-500",
        ghost:
          "bg-transparent border-transparent text-gray-700hover:bg-gray-100 focus:ring-blue-500",
        destructive:
          "bg-red-600 border-red-600 text-whitehover:bg-red-700 focus:ring-red-500",
      },
      buttonSizing: {
        full: "w-full h-full text-md",
      },
      buttonInteractive: {
        true: "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        false: "opacity-100 cursor-pointer",
      },
    },
  }
);
