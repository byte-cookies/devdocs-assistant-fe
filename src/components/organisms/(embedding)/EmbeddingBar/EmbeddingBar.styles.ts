import type { TailwindClassCategories } from "@/types/tailwindClassCategories";
import { cva } from "class-variance-authority";

const barCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "justify-between"],
  spacing: ["px-6", "py-4"],
  visual: ["bg-white", "dark:bg-gray-800"],
  borders: ["border-b", "border-gray-200", "dark:border-gray-700"],
} as const;

const leftSectionCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-4"],
} as const;

const rightSectionCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-3"],
} as const;

const statsCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-6"],
} as const;

const statItemCategories: TailwindClassCategories = {
  layout: ["flex", "flex-col", "items-center"],
  spacing: ["px-3"],
} as const;

const statValueCategories: TailwindClassCategories = {
  typography: ["text-lg", "font-semibold"],
  visual: ["text-gray-900", "dark:text-white"],
} as const;

const statLabelCategories: TailwindClassCategories = {
  typography: ["text-xs", "font-medium"],
  visual: ["text-gray-500", "dark:text-gray-400"],
} as const;

const filterSectionCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-2"],
} as const;

const actionSectionCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-2"],
} as const;

const searchContainerCategories: TailwindClassCategories = {
  layout: ["relative"],
  sizing: ["w-64"],
} as const;

const progressContainerCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-2"],
  sizing: ["min-w-0", "flex-1"],
} as const;

const progressLabelCategories: TailwindClassCategories = {
  typography: ["text-sm", "font-medium"],
  visual: ["text-gray-700", "dark:text-gray-300"],
  sizing: ["whitespace-nowrap"],
} as const;

export const barStyles = cva([
  ...barCategories.layout,
  ...barCategories.spacing,
  ...barCategories.visual,
  ...barCategories.borders,
]);

export const leftSectionStyles = cva([...leftSectionCategories.layout]);

export const rightSectionStyles = cva([...rightSectionCategories.layout]);

export const statsStyles = cva([...statsCategories.layout]);

export const statItemStyles = cva([
  ...statItemCategories.layout,
  ...statItemCategories.spacing,
]);

export const statValueStyles = cva([
  ...statValueCategories.typography,
  ...statValueCategories.visual,
]);

export const statLabelStyles = cva([
  ...statLabelCategories.typography,
  ...statLabelCategories.visual,
]);

export const filterSectionStyles = cva([...filterSectionCategories.layout]);

export const actionSectionStyles = cva([...actionSectionCategories.layout]);

export const searchContainerStyles = cva([
  ...searchContainerCategories.layout,
  ...searchContainerCategories.sizing,
]);

export const progressContainerStyles = cva([
  ...progressContainerCategories.layout,
  ...progressContainerCategories.sizing,
]);

export const progressLabelStyles = cva([
  ...progressLabelCategories.typography,
  ...progressLabelCategories.visual,
  ...progressLabelCategories.sizing,
]);
