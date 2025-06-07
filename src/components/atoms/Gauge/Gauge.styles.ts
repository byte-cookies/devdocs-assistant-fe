import { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

// Gauge 배경 스타일
export const gaugeBackgroundStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "relative",
      sizing: "w-full h-full",
      spacing: "",
      visual: "border-2 border-baseLine bg-white rounded-full shadow-md",
      typography: "",
      interactive: "overflow-hidden",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

// Gauge 채우기 스타일
export const gaugeFillStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "absolute top-0 left-0 z-10",
      sizing: "h-full",
      spacing: "",
      visual: "rounded-full",
      typography: "",
      interactive: "",
      behavior: "ease-in-out transition-all duration-300",
    } satisfies TailwindClassCategories,
  }),
  {
    variants: {
      visual: {
        blue: "bg-blue-500",
        green: "bg-green-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
        purple: "bg-purple-500",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
      },
    } satisfies TailwindClassCategories,
    defaultVariants: {
      visual: "blue",
    },
  }
);
