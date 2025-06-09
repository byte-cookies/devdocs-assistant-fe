import type { TailwindClassCategories } from "@/types/tailwindClassCategories";
import { cva } from "class-variance-authority";

const chatOutputCategories: TailwindClassCategories = {
  layout: ["flex", "flex-col", "gap-4"],
  spacing: ["p-4"],
  visual: ["bg-white", "dark:bg-gray-800"],
  borders: ["border", "border-gray-200", "dark:border-gray-700", "rounded-lg"],
} as const;

const messageContainerCategories: TailwindClassCategories = {
  layout: ["flex", "gap-3"],
  spacing: ["p-3"],
  visual: ["bg-gray-50", "dark:bg-gray-900"],
  borders: ["rounded-lg"],
} as const;

const avatarCategories: TailwindClassCategories = {
  layout: ["flex-shrink-0"],
  sizing: ["w-8", "h-8"],
  visual: ["bg-blue-500"],
  borders: ["rounded-full"],
} as const;

const messageContentCategories: TailwindClassCategories = {
  layout: ["flex-1", "flex", "flex-col", "gap-2"],
} as const;

const headerCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "justify-between"],
  spacing: ["mb-1"],
} as const;

const nameCategories: TailwindClassCategories = {
  typography: ["font-medium", "text-sm"],
  visual: ["text-gray-900", "dark:text-white"],
} as const;

const timestampCategories: TailwindClassCategories = {
  typography: ["text-xs"],
  visual: ["text-gray-500", "dark:text-gray-400"],
} as const;

const messageBodyCategories: TailwindClassCategories = {
  typography: ["text-sm", "leading-relaxed"],
  visual: ["text-gray-700", "dark:text-gray-300"],
} as const;

const actionsCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-2"],
  spacing: ["mt-2"],
} as const;

export const chatOutputStyles = cva([
  ...chatOutputCategories.layout,
  ...chatOutputCategories.spacing,
  ...chatOutputCategories.visual,
  ...chatOutputCategories.borders,
]);

export const messageContainerStyles = cva([
  ...messageContainerCategories.layout,
  ...messageContainerCategories.spacing,
  ...messageContainerCategories.visual,
  ...messageContainerCategories.borders,
]);

export const avatarStyles = cva([
  ...avatarCategories.layout,
  ...avatarCategories.sizing,
  ...avatarCategories.visual,
  ...avatarCategories.borders,
]);

export const messageContentStyles = cva([...messageContentCategories.layout]);

export const headerStyles = cva([
  ...headerCategories.layout,
  ...headerCategories.spacing,
]);

export const nameStyles = cva([
  ...nameCategories.typography,
  ...nameCategories.visual,
]);

export const timestampStyles = cva([
  ...timestampCategories.typography,
  ...timestampCategories.visual,
]);

export const messageBodyStyles = cva([
  ...messageBodyCategories.typography,
  ...messageBodyCategories.visual,
]);

export const actionsStyles = cva([
  ...actionsCategories.layout,
  ...actionsCategories.spacing,
]);
