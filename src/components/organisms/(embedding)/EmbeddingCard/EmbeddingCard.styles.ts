import type { TailwindClassCategories } from "@/types/tailwindClassCategories";
import { cva } from "class-variance-authority";

const cardCategories: TailwindClassCategories = {
  layout: ["flex", "flex-col"],
  spacing: ["p-6"],
  visual: ["bg-white", "dark:bg-gray-800"],
  borders: ["border", "border-gray-200", "dark:border-gray-700", "rounded-lg"],
  shadows: ["shadow-sm", "hover:shadow-md"],
  transitions: ["transition-shadow", "duration-200"],
} as const;

const headerCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "justify-between"],
  spacing: ["mb-4"],
} as const;

const titleCategories: TailwindClassCategories = {
  typography: ["font-semibold", "text-lg"],
  visual: ["text-gray-900", "dark:text-white"],
} as const;

const badgeCategories: TailwindClassCategories = {
  layout: ["inline-flex", "items-center"],
  spacing: ["px-2", "py-1"],
  typography: ["text-xs", "font-medium"],
  visual: [
    "bg-blue-100",
    "text-blue-800",
    "dark:bg-blue-900",
    "dark:text-blue-200",
  ],
  borders: ["rounded-full"],
} as const;

const contentCategories: TailwindClassCategories = {
  layout: ["flex-1"],
  spacing: ["mb-4"],
} as const;

const descriptionCategories: TailwindClassCategories = {
  typography: ["text-sm", "leading-relaxed"],
  visual: ["text-gray-600", "dark:text-gray-300"],
  spacing: ["mb-3"],
} as const;

const metadataCategories: TailwindClassCategories = {
  layout: ["grid", "grid-cols-2", "gap-2"],
  spacing: ["mb-4"],
} as const;

const metadataItemCategories: TailwindClassCategories = {
  layout: ["flex", "flex-col"],
  spacing: ["p-2"],
  visual: ["bg-gray-50", "dark:bg-gray-700"],
  borders: ["rounded"],
} as const;

const metadataLabelCategories: TailwindClassCategories = {
  typography: ["text-xs", "font-medium"],
  visual: ["text-gray-500", "dark:text-gray-400"],
  spacing: ["mb-1"],
} as const;

const metadataValueCategories: TailwindClassCategories = {
  typography: ["text-sm"],
  visual: ["text-gray-900", "dark:text-white"],
} as const;

const embeddingInfoCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-2"],
  spacing: ["mb-4"],
} as const;

const dimensionCategories: TailwindClassCategories = {
  typography: ["text-sm", "font-mono"],
  visual: ["text-gray-600", "dark:text-gray-300"],
} as const;

const footerCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "justify-between"],
  spacing: ["pt-4"],
  borders: ["border-t", "border-gray-200", "dark:border-gray-700"],
} as const;

const actionButtonCategories: TailwindClassCategories = {
  layout: ["inline-flex", "items-center", "gap-1"],
  spacing: ["px-3", "py-1"],
  typography: ["text-sm"],
  visual: [
    "text-blue-600",
    "hover:text-blue-800",
    "dark:text-blue-400",
    "dark:hover:text-blue-200",
  ],
  borders: ["border", "border-transparent", "hover:border-blue-300", "rounded"],
  transitions: ["transition-colors", "duration-200"],
} as const;

export const cardStyles = cva([
  ...cardCategories.layout,
  ...cardCategories.spacing,
  ...cardCategories.visual,
  ...cardCategories.borders,
  ...cardCategories.shadows,
  ...cardCategories.transitions,
]);

export const headerStyles = cva([
  ...headerCategories.layout,
  ...headerCategories.spacing,
]);

export const titleStyles = cva([
  ...titleCategories.typography,
  ...titleCategories.visual,
]);

export const badgeStyles = cva([
  ...badgeCategories.layout,
  ...badgeCategories.spacing,
  ...badgeCategories.typography,
  ...badgeCategories.visual,
  ...badgeCategories.borders,
]);

export const contentStyles = cva([
  ...contentCategories.layout,
  ...contentCategories.spacing,
]);

export const descriptionStyles = cva([
  ...descriptionCategories.typography,
  ...descriptionCategories.visual,
  ...descriptionCategories.spacing,
]);

export const metadataStyles = cva([
  ...metadataCategories.layout,
  ...metadataCategories.spacing,
]);

export const metadataItemStyles = cva([
  ...metadataItemCategories.layout,
  ...metadataItemCategories.spacing,
  ...metadataItemCategories.visual,
  ...metadataItemCategories.borders,
]);

export const metadataLabelStyles = cva([
  ...metadataLabelCategories.typography,
  ...metadataLabelCategories.visual,
  ...metadataLabelCategories.spacing,
]);

export const metadataValueStyles = cva([
  ...metadataValueCategories.typography,
  ...metadataValueCategories.visual,
]);

export const embeddingInfoStyles = cva([
  ...embeddingInfoCategories.layout,
  ...embeddingInfoCategories.spacing,
]);

export const dimensionStyles = cva([
  ...dimensionCategories.typography,
  ...dimensionCategories.visual,
]);

export const footerStyles = cva([
  ...footerCategories.layout,
  ...footerCategories.spacing,
  ...footerCategories.borders,
]);

export const actionButtonStyles = cva([
  ...actionButtonCategories.layout,
  ...actionButtonCategories.spacing,
  ...actionButtonCategories.typography,
  ...actionButtonCategories.visual,
  ...actionButtonCategories.borders,
  ...actionButtonCategories.transitions,
]);
