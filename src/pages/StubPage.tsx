import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { ClipboardListIcon, ArrowRightIcon } from "@/components/icons";
import type { IconProps } from "@/components/icons";

interface StubPageProps {
  title: string;
  phase: string;
  description: string;
  icon?: ComponentType<IconProps>;
}

export function StubPage({ title, phase, description, icon: Icon = ClipboardListIcon }: StubPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-lightbg">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <IconBadge icon={Icon} tone="navy" size="lg" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-teal">
          {phase}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
          {description}
        </p>
        <p className="mt-2 text-sm text-slate">
          This page is next up on the build plan &mdash; see{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs text-navy">
            docs/PAGE_PLAN.md
          </code>{" "}
          for the full page-by-page order.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button to="/" variant="secondary" icon={<ArrowRightIcon className="h-4 w-4 rotate-180" />}>
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-lightbg px-6 text-center">
      <p className="font-display text-6xl font-semibold text-navy">404</p>
      <h1 className="mt-2 text-xl font-semibold text-navy">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-slate">
        We couldn&apos;t find that page. It may not be built yet, or the link may be out of date.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light"
      >
        Back to home
      </Link>
    </div>
  );
}
