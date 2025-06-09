import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { gaugeBackgroundStyles, gaugeFillStyles } from "./Gauge.styles";

export interface GaugeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof gaugeFillStyles>,
    VariantProps<typeof gaugeBackgroundStyles> {
  value: number; // 0-100 범위의 값
  max?: number; // 최대값 (기본값: 100)
}

export default function Gauge({
  value,
  max = 100,
  gaugeSizing,
  gaugeVisual,
  className,
  ...props
}: GaugeProps) {
  // 값을 0-100 범위로 정규화
  const normalizedValue = Math.min(Math.max(value, 0), max);
  const percentage = (normalizedValue / max) * 100;

  return (
    <div
      className={cn(gaugeBackgroundStyles({ gaugeSizing }), className)}
      {...props}
    >
      <div
        className={cn(gaugeFillStyles({ gaugeVisual }))}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
