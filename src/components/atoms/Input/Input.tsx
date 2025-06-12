import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import { inputContainerStyles, inputStyles } from "./Input.styles";

export interface InputProps
  extends VariantProps<typeof inputContainerStyles>,
    VariantProps<typeof inputStyles> {
  className?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Input({
  inputVisual,
  inputSizing,
  disabled,
  className,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <div
      className={cn(
        inputContainerStyles({ inputSizing, inputVisual }),
        className
      )}
    >
      <textarea
        className={cn(inputStyles({ inputSizing }))}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
