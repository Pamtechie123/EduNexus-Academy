import { Link } from "react-router-dom";
import { GraduationCapIcon } from "@/components/icons";
import { PORTALS, SITE_NAME } from "@/lib/constants";

export function PublicFooter() {
  return (
    <footer className="border-t border-edge bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-navy-dark">
                <GraduationCapIcon className="h-4 w-4" />
              </span>
              <span className="font-display text-lg font-semibold">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              One learning management system, four secure portals. Built for
              students, teachers, parents, and administrators who all need
              something different from the same school day.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber">
              Sign in
            </p>
            <ul className="mt-4 space-y-2.5">
              {PORTALS.map((portal) => (
                <li key={portal.key}>
                  <Link
                    to={portal.loginPath}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {portal.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber">
              Support
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/forgot-password" className="transition-colors hover:text-white">
                  Forgot password
                </Link>
              </li>
              <li>Contact your school administrator</li>
              <li>help@edunexus.academy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Built page by page, portal by portal.</p>
        </div>
      </div>
    </footer>
  );
}
