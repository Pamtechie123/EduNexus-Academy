import { IconBadge } from "@/components/ui/IconBadge";
import {
  LayoutDashboardIcon,
  ShieldCheckIcon,
  MessageSquareIcon,
  BarChartIcon,
  LockIcon,
  CalendarIcon,
} from "@/components/icons";
import { useReveal } from "@/lib/useReveal";

const FEATURES = [
  {
    icon: LayoutDashboardIcon,
    title: "One design system, four dashboards",
    description:
      "Shared components and one visual language, so every screen feels like it belongs to the same school.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Strict role isolation",
    description:
      "A student session can never render a teacher route, and an access attempt outside your role is redirected, not exposed.",
  },
  {
    icon: LockIcon,
    title: "Secure by default",
    description:
      "Protected routes, session handling, and validation are built into the foundation, not added at the end.",
  },
  {
    icon: CalendarIcon,
    title: "Built around the school week",
    description:
      "Timetables, attendance, and assignment due dates stay in sync across every portal that needs them.",
  },
  {
    icon: MessageSquareIcon,
    title: "Everyone stays in the loop",
    description:
      "Announcements and direct messages reach students, parents, and teachers without leaving the platform.",
  },
  {
    icon: BarChartIcon,
    title: "Reporting that means something",
    description:
      "From a single student's report card to school-wide enrollment trends, the same data powers every view.",
  },
];

export function FeatureChecklist() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber">
            Why EduNexus
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Fast for the people who use it every day
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            The details that matter most in a school LMS aren&apos;t
            flashy &mdash; they&apos;re the ones nobody has to think about.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2"
        >
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex gap-4 ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: visible ? `${i * 80}ms` : undefined }}
            >
              <IconBadge icon={feature.icon} tone="white" size="md" />
              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
