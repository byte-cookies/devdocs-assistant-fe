import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const textStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center",
      sizing: "w-full h-full",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  }),
  {
    variants: {
      textLayout: {
        "justify-center": "justify-center",
        "justify-start": "justify-start",
        "justify-end": "justify-end",
      },
      textSizing: {
        xs: "text-xs font-normal",
        sm: "text-sm font-normal",
        md: "text-md font-normal",
        lg: "text-lg font-normal",
      },
      textVisual: {
        primary: "text-textPrimary",
        secondary: "text-textSecondary",
        tertiary: "text-textTertiary",
        white: "text-white",
      },
    },
  }
);
