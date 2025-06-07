import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { spinnerStyles } from "./Spinner.styles";

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerStyles> {
  label?: string;
}

export default function Spinner({
  size,
  color,
  className,
  label = "Loading...",
  ...props
}: SpinnerProps) {
  return (
    <div
      className={cn(spinnerStyles({ size, color }), className)}
      role="status"
      aria-label={label}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}
