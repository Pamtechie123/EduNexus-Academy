type Tone = "amber" | "teal" | "slate";

const toneClasses: Record<Tone, string> = {
  amber: "bg-amber/15 text-amber-dark",
  teal: "bg-teal/10 text-teal",
  slate: "bg-lightbg text-slate",
};

export function Badge({ children, tone = "slate" }: { children: string; tone?: Tone }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
