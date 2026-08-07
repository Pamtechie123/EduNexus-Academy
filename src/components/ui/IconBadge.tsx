import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";

type Tone = "teal" | "amber" | "navy" | "slate" | "white";

const toneClasses: Record<Tone, string> = {
  teal: "bg-teal text-white",
  amber: "bg-amber text-navy-dark",
  navy: "bg-navy text-white",
  slate: "bg-slate text-white",
  white: "bg-white text-navy",
};

interface IconBadgeProps {
  icon: ComponentType<IconProps>;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function IconBadge({ icon: Icon, tone = "teal", size = "md", className = "" }: IconBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${toneClasses[tone]} ${sizeClasses[size]} ${className}`}
    >
      <Icon className={iconSizeClasses[size]} />
    </span>
  );
}
