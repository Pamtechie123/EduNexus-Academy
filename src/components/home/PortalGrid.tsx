import { PORTALS } from "@/lib/constants";
import { IconBadge } from "@/components/ui/IconBadge";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/icons";
import { Link } from "react-router-dom";
import { useReveal } from "@/lib/useReveal";

export function PortalGrid() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="portals" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal">
            One platform, four experiences
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
            Every portal is built for one job
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Students, teachers, parents, and administrators all sign in at the
            same address &mdash; but each one lands somewhere designed
            entirely around what they need to do next.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PORTALS.map((portal, i) => (
            <div
              key={portal.key}
              className={`flex flex-col rounded-2xl border border-edge bg-lightbg p-6 transition-shadow hover:shadow-panel ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: visible ? `${i * 90}ms` : undefined }}
            >
              <IconBadge icon={portal.icon} tone={portal.accent} size="lg" />
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {portal.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {portal.description}
              </p>

              <ul className="mt-4 flex-1 space-y-2">
                {portal.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-navy">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={portal.loginPath}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-teal"
              >
                Sign in as {portal.shortLabel}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
