import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";

interface StatCardProps {
  icon: ComponentType<IconProps>;
  value: string;
  label: string;
  delta?: string;
  deltaGood?: boolean;
}

export function StatCard({ icon: Icon, value, label, delta, deltaGood = true }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-edge bg-white p-4 shadow-card">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lightbg text-teal">
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-3 font-display text-2xl font-semibold text-navy">{value}</p>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-xs text-slate">{label}</p>
        {delta && (
          <span className={`text-[11px] font-semibold ${deltaGood ? "text-emerald-600" : "text-red-500"}`}>
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}
