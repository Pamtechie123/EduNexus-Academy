interface ProgressBarProps {
  label: string;
  pct: number;
  color?: "teal" | "amber";
}

export function ProgressBar({ label, pct, color = "teal" }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="w-32 shrink-0 truncate text-sm text-navy">{label}</span>
      <div className="h-1.5 flex-1 rounded-full bg-lightbg">
        <div
          className={`h-1.5 rounded-full ${color === "teal" ? "bg-teal" : "bg-amber"}`}
          style={{ width: `${Math.round(pct * 100)}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-right text-sm font-semibold text-slate">
        {Math.round(pct * 100)}%
      </span>
    </div>
  );
}
