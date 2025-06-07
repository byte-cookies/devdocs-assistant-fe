import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { iconStyles } from "./Icon.styles";

interface IconProps
  extends Omit<React.SVGAttributes<SVGElement>, "color">,
    VariantProps<typeof iconStyles> {
  children: React.ReactNode;
}

export default function Icon({
  size,
  color,
  className,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      className={cn(iconStyles({ size, color }), className)}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}
