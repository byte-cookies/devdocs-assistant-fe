import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { iconStyles } from "./Icon.styles";

export interface IconProps extends VariantProps<typeof iconStyles> {
  src: string;
  alt: string;
  priority?: boolean; // Next.js Image priority 속성
  className?: string;
}

export default function Icon({
  src,
  alt,
  iconSizing,
  priority = false,
  className,
}: IconProps) {
  return (
    <div className={cn(iconStyles({ iconSizing }), className)}>
      <Image src={src} alt={alt} fill priority={priority} />
    </div>
  );
}
