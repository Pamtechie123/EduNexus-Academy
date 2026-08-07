import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";

interface ListItemProps {
  icon: ComponentType<IconProps>;
  title: string;
  meta: string;
}

export function ListItem({ icon: Icon, title, meta }: ListItemProps) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lightbg text-teal">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-navy">{title}</p>
        <p className="text-xs text-slate">{meta}</p>
      </div>
    </div>
  );
}
