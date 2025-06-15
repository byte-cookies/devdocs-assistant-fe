import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const iconStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "relative flex items-center justify-center",
      sizing: "",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  }),
  {
    variants: {
      iconSizing: {
        md: "w-[1rem] h-[1rem]",
        lg: "w-[1.5rem] h-[1.5rem]",
        xl: "w-[2rem] h-[2rem]",
        full: "w-full h-full",
      },
    },
  }
);
