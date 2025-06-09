import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const spinnerStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "inline-block",
      sizing: "",
      spacing: "",
      visual:
        "border-2 border-solid border-gray-200 border-t-transparent rounded-full",
      typography: "",
      interactive: "",
      behavior: "animate-spin",
    } satisfies TailwindClassCategories,
  }),
  {
    variants: {
      spinnerSizing: {
        sm: "w-[1rem] h-[1rem] border",
        md: "w-[1.5rem] h-[1.5rem] border-2",
        lg: "w-[2rem] h-[2rem] border-3",
      },
      spinnerVisual: {
        primary: "border-primary border-t-transparent",
        secondary: "border-buttonPrimary border-t-transparent",
      },
    },
    defaultVariants: {
      spinnerSizing: "md",
      spinnerVisual: "primary",
    },
  }
);
