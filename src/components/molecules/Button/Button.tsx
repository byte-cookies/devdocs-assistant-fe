import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { buttonStyles } from "./Button.styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
}

export default function Button({
  variant,
  size,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
