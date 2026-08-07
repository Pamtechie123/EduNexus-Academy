import { SCHOOL_STATS } from "@/lib/constants";
import { useReveal } from "@/lib/useReveal";

export function StatsBar() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="stats" className="border-b border-edge bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal">
              Already running the school day
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy sm:text-3xl">
              One session away from a full academic session
            </h2>
          </div>
        </div>

        <div
          ref={ref}
          className="mt-10 grid grid-cols-2 gap-6 border-t border-edge pt-10 sm:grid-cols-4"
        >
          {SCHOOL_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: visible ? `${i * 80}ms` : undefined }}
            >
              <p className="font-display text-3xl font-semibold text-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
