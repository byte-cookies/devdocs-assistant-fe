import type { TailwindClassCategories } from "@/types/tailwind";
import { combineDefaultStyles } from "@/utils/tailwindHelper";
import { cva } from "class-variance-authority";

export const whiteCardContainerStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex flex-col",
      sizing: "w-full h-full",
      spacing: "gap-2 p-4",
      visual: "bg-white rounded-md shadow-md",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const centerLayoutStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-center",
      sizing: "flex-1 w-full",
      spacing: "p-P4",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const endLayoutStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-end",
      sizing: "w-full h-[3rem]",
      spacing: "gap-[1rem]",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const AttachButtonLayoutStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-center",
      sizing: "w-auto h-full",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);

export const SendButtonLayoutStyles = cva(
  combineDefaultStyles({
    default: {
      responsive: "",
      layout: "flex items-center justify-center",
      sizing: "w-auto h-full",
      spacing: "",
      visual: "",
      typography: "",
      interactive: "",
      behavior: "",
    } satisfies TailwindClassCategories,
  })
);
