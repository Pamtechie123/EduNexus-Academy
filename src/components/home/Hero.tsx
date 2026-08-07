import { useState } from "react";
import { PORTALS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, BellIcon, CheckCircleIcon } from "@/components/icons";

const accentSolid: Record<string, string> = {
  teal: "bg-teal text-white",
  amber: "bg-amber text-navy-dark",
  navy: "bg-navy text-white",
  slate: "bg-slate text-white",
};

const accentText: Record<string, string> = {
  teal: "text-teal",
  amber: "text-amber-dark",
  navy: "text-navy",
  slate: "text-slate",
};

export function Hero() {
  const [activeKey, setActiveKey] = useState(PORTALS[0].key);
  const active = PORTALS.find((p) => p.key === activeKey) ?? PORTALS[0];

  const roleForCopy =
    active.key === "admin" ? "run the school" : `be a ${active.shortLabel.toLowerCase()}`;

  return (
    <section className="relative overflow-hidden bg-lightbg">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-amber/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-edge bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate">
            One school. Four portals.
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.12] text-navy sm:text-5xl">
            Sign in to{" "}
            <span className={`transition-colors duration-300 ${accentText[active.accent]}`}>
              {roleForCopy}
            </span>{" "}
            at EduNexus Academy
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate sm:text-lg">
            {active.tagline} Every role gets its own dashboard, its own
            navigation, and its own data &mdash; never anyone else&apos;s.
          </p>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Choose a portal to preview">
            {PORTALS.map((portal) => {
              const isActive = portal.key === activeKey;
              return (
                <button
                  key={portal.key}
                  onClick={() => setActiveKey(portal.key)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? `${accentSolid[portal.accent]} border-transparent shadow-card`
                      : "border-edge bg-white text-slate hover:border-navy hover:text-navy"
                  }`}
                >
                  <portal.icon className="h-4 w-4" />
                  {portal.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to={active.loginPath} icon={<ArrowRightIcon className="h-4 w-4" />}>
              Sign in as {active.shortLabel}
            </Button>
            <a
              href="#portals"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-edge bg-transparent px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy"
            >
              Compare all portals
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -left-6 -top-6 hidden h-24 w-24 rotate-6 rounded-2xl border border-edge bg-white shadow-card sm:block"
            aria-hidden
          />

          <div className="relative rounded-2xl border border-edge bg-white p-5 shadow-panel transition-all duration-300">
            <div className="flex items-center justify-between border-b border-edge pb-4">
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${accentSolid[active.accent]}`}
                >
                  <active.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{active.label}</p>
                  <p className="text-xs text-slate">app.edunexus.academy</p>
                </div>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lightbg text-slate">
                <BellIcon className="h-4 w-4" />
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {active.features.map((feature) => (
                <div key={feature} className="rounded-xl border border-edge bg-lightbg p-3">
                  <CheckCircleIcon className={`h-4 w-4 ${accentText[active.accent]}`} />
                  <p className="mt-2 text-[11px] font-medium leading-snug text-navy">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-edge p-4">
              <p className="text-xs font-semibold text-navy">This week</p>
              <div className="mt-3 space-y-2.5">
                {[0.85, 0.6, 0.72].map((pct, i) => (
                  <div key={i} className="h-1.5 w-full rounded-full bg-lightbg">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${accentSolid[active.accent]}`}
                      style={{ width: `${pct * 100}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-5 -right-5 hidden items-center gap-2 rounded-xl border border-edge bg-white px-4 py-3 shadow-card sm:flex"
            aria-hidden
          >
            <span className="h-2 w-2 rounded-full bg-teal" />
            <span className="text-xs font-semibold text-navy">Role-based access, always on</span>
          </div>
        </div>
      </div>
    </section>
  );
}
