import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { inputStyles } from "./Input.styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Input({
  variant,
  size,
  className,
  label,
  error,
  helperText,
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const inputVariant = error ? "error" : variant;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(inputStyles({ variant: inputVariant, size }), className)}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {!error && helperText && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
