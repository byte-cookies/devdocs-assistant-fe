import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { textStyles } from "./Text.styles";

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textStyles> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  children: React.ReactNode;
}

export default function Text({
  as: Component = "p",
  variant,
  color,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textStyles({ variant, color }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
