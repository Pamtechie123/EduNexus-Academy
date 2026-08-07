import { Link, useNavigate } from "react-router-dom";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { ShieldCheckIcon, ArrowRightIcon } from "@/components/icons";

export default function AccessDeniedPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-lightbg px-6 text-center">
      <IconBadge icon={ShieldCheckIcon} tone="navy" size="lg" />
      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-red-500">
        403 · Access Denied
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">
        You don&apos;t have access to this page
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
        Your account role doesn&apos;t include this portal. If you think this
        is a mistake, contact your school administrator.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={() => navigate(-1)} variant="secondary" icon={<ArrowRightIcon className="h-4 w-4 rotate-180" />}>
          Go back
        </Button>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-edge px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
