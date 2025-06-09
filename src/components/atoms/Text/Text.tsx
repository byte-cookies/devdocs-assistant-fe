import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import { textStyles } from "./Text.styles";

export interface TextProps extends VariantProps<typeof textStyles> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  content: string;
  className?: string;
}

export default function Text({
  as: Component = "p",
  content,
  textLayout,
  textSizing,
  textVisual,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        textStyles({ textLayout, textSizing, textVisual }),
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
}
