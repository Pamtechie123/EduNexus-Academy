import type { ComponentType, ReactNode } from "react";
import type { IconProps } from "@/components/icons";

interface PanelCardProps {
  title: string;
  icon?: ComponentType<IconProps>;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function PanelCard({ title, icon: Icon, action, children, className = "" }: PanelCardProps) {
  return (
    <div className={`rounded-2xl border border-edge bg-white p-5 shadow-card ${className}`}>
      <div className="mb-4 flex items-center justify-between border-b border-edge pb-3">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-navy" />}
          <h3 className="font-semibold text-navy">{title}</h3>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
