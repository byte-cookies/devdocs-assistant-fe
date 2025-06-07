import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const inputStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "block w-full",
      sizing: "",
      spacing: "px-3 py-2",
      visual: "border border-gray-300 rounded-md shadow-sm bg-white",
      typography: "text-sm",
      interactive:
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100",
      behavior: "transition-colors duration-200",
    } satisfies TailwindClassCategories,
  }),
  {
    variants: {
      variant: {
        default: {
          responsive: "",
          layout: "",
          sizing: "",
          spacing: "",
          visual: "border-gray-300",
          typography: "",
          interactive: "focus:ring-blue-500 focus:border-blue-500",
          behavior: "",
        } satisfies TailwindClassCategories,
        error: {
          responsive: "",
          layout: "",
          sizing: "",
          spacing: "",
          visual: "border-red-300",
          typography: "",
          interactive: "focus:ring-red-500 focus:border-red-500",
          behavior: "",
        } satisfies TailwindClassCategories,
        success: {
          responsive: "",
          layout: "",
          sizing: "",
          spacing: "",
          visual: "border-green-300",
          typography: "",
          interactive: "focus:ring-green-500 focus:border-green-500",
          behavior: "",
        } satisfies TailwindClassCategories,
      },
      size: {
        sm: {
          responsive: "",
          layout: "",
          sizing: "",
          spacing: "px-2 py-1",
          visual: "",
          typography: "text-xs",
          interactive: "",
          behavior: "",
        } satisfies TailwindClassCategories,
        md: {
          responsive: "",
          layout: "",
          sizing: "",
          spacing: "px-3 py-2",
          visual: "",
          typography: "text-sm",
          interactive: "",
          behavior: "",
        } satisfies TailwindClassCategories,
        lg: {
          responsive: "",
          layout: "",
          sizing: "",
          spacing: "px-4 py-3",
          visual: "",
          typography: "text-base",
          interactive: "",
          behavior: "",
        } satisfies TailwindClassCategories,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
