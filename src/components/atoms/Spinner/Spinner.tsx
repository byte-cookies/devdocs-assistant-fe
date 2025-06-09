import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { spinnerStyles } from "./Spinner.styles";

export interface SpinnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof spinnerStyles> {
  label?: string;
}

export default function Spinner({
  spinnerSizing = "md",
  spinnerVisual = "primary",
  className,
  label = "Loading...",
  ...props
}: SpinnerProps) {
  return (
    <div
      className={cn(spinnerStyles({ spinnerSizing, spinnerVisual }), className)}
      role="status"
      aria-label={label}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}
