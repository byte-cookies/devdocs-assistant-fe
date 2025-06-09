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

const userProfileCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-3"],
} as const;

const avatarCategories: TailwindClassCategories = {
  layout: ["flex-shrink-0"],
  sizing: ["w-10", "h-10"],
  visual: ["bg-blue-500"],
  borders: ["rounded-full", "overflow-hidden"],
} as const;

const userDetailsCategories: TailwindClassCategories = {
  layout: ["flex", "flex-col"],
  sizing: ["min-w-0"],
} as const;

const userNameCategories: TailwindClassCategories = {
  typography: ["font-semibold", "text-sm"],
  visual: ["text-gray-900", "dark:text-white"],
  sizing: ["truncate"],
} as const;

const userRoleCategories: TailwindClassCategories = {
  typography: ["text-xs"],
  visual: ["text-gray-500", "dark:text-gray-400"],
  sizing: ["truncate"],
} as const;

const statusIndicatorCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-2"],
} as const;

const statusDotCategories: TailwindClassCategories = {
  layout: ["flex-shrink-0"],
  sizing: ["w-2", "h-2"],
  borders: ["rounded-full"],
} as const;

const statusTextCategories: TailwindClassCategories = {
  typography: ["text-xs", "font-medium"],
} as const;

const activityInfoCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-4"],
} as const;

const activityItemCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-1"],
} as const;

const activityValueCategories: TailwindClassCategories = {
  typography: ["text-sm", "font-medium"],
  visual: ["text-gray-900", "dark:text-white"],
} as const;

const activityLabelCategories: TailwindClassCategories = {
  typography: ["text-xs"],
  visual: ["text-gray-500", "dark:text-gray-400"],
} as const;

const actionButtonsCategories: TailwindClassCategories = {
  layout: ["flex", "items-center", "gap-2"],
} as const;

const notificationBadgeCategories: TailwindClassCategories = {
  layout: ["relative"],
} as const;

const badgeCountCategories: TailwindClassCategories = {
  layout: ["absolute", "flex", "items-center", "justify-center"],
  positioning: ["-top-1", "-right-1"],
  sizing: ["w-4", "h-4", "min-w-4"],
  typography: ["text-xs", "font-bold"],
  visual: ["bg-red-500", "text-white"],
  borders: ["rounded-full"],
} as const;

export const barStyles = cva([
  ...barCategories.layout,
  ...barCategories.spacing,
  ...barCategories.visual,
  ...barCategories.borders,
]);

export const leftSectionStyles = cva([...leftSectionCategories.layout]);

export const rightSectionStyles = cva([...rightSectionCategories.layout]);

export const userProfileStyles = cva([...userProfileCategories.layout]);

export const avatarStyles = cva([
  ...avatarCategories.layout,
  ...avatarCategories.sizing,
  ...avatarCategories.visual,
  ...avatarCategories.borders,
]);

export const userDetailsStyles = cva([
  ...userDetailsCategories.layout,
  ...userDetailsCategories.sizing,
]);

export const userNameStyles = cva([
  ...userNameCategories.typography,
  ...userNameCategories.visual,
  ...userNameCategories.sizing,
]);

export const userRoleStyles = cva([
  ...userRoleCategories.typography,
  ...userRoleCategories.visual,
  ...userRoleCategories.sizing,
]);

export const statusIndicatorStyles = cva([...statusIndicatorCategories.layout]);

export const statusDotStyles = cva(
  [
    ...statusDotCategories.layout,
    ...statusDotCategories.sizing,
    ...statusDotCategories.borders,
  ],
  {
    variants: {
      status: {
        online: ["bg-green-500"],
        away: ["bg-yellow-500"],
        busy: ["bg-red-500"],
        offline: ["bg-gray-400"],
      },
    },
    defaultVariants: {
      status: "offline",
    },
  }
);

export const statusTextStyles = cva([...statusTextCategories.typography], {
  variants: {
    status: {
      online: ["text-green-600", "dark:text-green-400"],
      away: ["text-yellow-600", "dark:text-yellow-400"],
      busy: ["text-red-600", "dark:text-red-400"],
      offline: ["text-gray-500", "dark:text-gray-400"],
    },
  },
  defaultVariants: {
    status: "offline",
  },
});

export const activityInfoStyles = cva([...activityInfoCategories.layout]);

export const activityItemStyles = cva([...activityItemCategories.layout]);

export const activityValueStyles = cva([
  ...activityValueCategories.typography,
  ...activityValueCategories.visual,
]);

export const activityLabelStyles = cva([
  ...activityLabelCategories.typography,
  ...activityLabelCategories.visual,
]);

export const actionButtonsStyles = cva([...actionButtonsCategories.layout]);

export const notificationBadgeStyles = cva([
  ...notificationBadgeCategories.layout,
]);

export const badgeCountStyles = cva([
  ...badgeCountCategories.layout,
  ...badgeCountCategories.positioning,
  ...badgeCountCategories.sizing,
  ...badgeCountCategories.typography,
  ...badgeCountCategories.visual,
  ...badgeCountCategories.borders,
]);
