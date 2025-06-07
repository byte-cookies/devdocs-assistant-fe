import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const containerStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex",
      sizing: "h-screen w-screen",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const leftSidebarStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "hidden md:block",
      layout: "",
      sizing: "w-[19.5rem] h-full",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const rightSidebarStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "hidden sm:block",
      layout: "",
      sizing: "w-[19.5rem] h-full",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const mainContentStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex-1",
      sizing: "h-full",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "overflow-auto",
    } satisfies TailwindClassCategories,
  })
);
