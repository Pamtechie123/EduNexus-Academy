import { PORTALS } from "@/lib/constants";
import { Link } from "react-router-dom";

export function CtaBanner() {
  return (
    <section className="bg-lightbg py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal">
          Ready when you are
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
          Sign in to your portal
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
          Pick the portal that matches your role. If you&apos;re not sure,
          your school administrator can help.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PORTALS.map((portal) => (
            <Link
              key={portal.key}
              to={portal.loginPath}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-edge bg-white px-5 py-7 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-panel"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lightbg text-navy transition-colors group-hover:bg-navy group-hover:text-amber">
                <portal.icon className="h-5 w-5" />
              </span>
              <span className="font-semibold text-navy">{portal.shortLabel}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
