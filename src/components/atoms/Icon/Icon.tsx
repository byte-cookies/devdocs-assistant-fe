"use client";

import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { iconStyles } from "./Icon.styles";

export interface IconProps extends VariantProps<typeof iconStyles> {
  src: string;
  alt: string;
  priority?: boolean; // Next.js Image priority 속성
  className?: string;
  onClick?: () => void; // 클릭 이벤트 핸들러 추가
}

export default function Icon({
  src,
  alt,
  iconSizing,
  priority = false,
  className,
  onClick,
}: IconProps) {
  return (
    <div
      className={cn(iconStyles({ iconSizing }), className)}
      onClick={onClick}
    >
      <Image src={src} alt={alt} fill priority={priority} />
    </div>
  );
}
