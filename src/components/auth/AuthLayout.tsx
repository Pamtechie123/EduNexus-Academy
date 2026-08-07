import type { ComponentType, ReactNode } from "react";
import { Link } from "react-router-dom";
import { GraduationCapIcon } from "@/components/icons";
import type { IconProps } from "@/components/icons";
import { PORTALS } from "@/lib/constants";

interface AuthLayoutProps {
  roleLabel: string;
  icon: ComponentType<IconProps>;
  features: string[];
  excludeRoleKey?: string;
  children: ReactNode;
}

export function AuthLayout({ roleLabel, icon: Icon, features, excludeRoleKey, children }: AuthLayoutProps) {
  const otherPortals = PORTALS.filter((p) => p.key !== excludeRoleKey);

  return (
    <div className="flex min-h-screen bg-lightbg">
      <div className="mx-auto flex w-full max-w-5xl flex-1 items-center px-4 py-10 sm:px-6">
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-edge bg-white shadow-panel lg:grid-cols-5">
          {/* Brand panel */}
          <div className="flex flex-col justify-between bg-navy p-8 text-white lg:col-span-2">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-navy-dark">
                  <GraduationCapIcon className="h-4 w-4" />
                </span>
                <span className="font-display text-lg font-semibold">EduNexus Academy</span>
              </Link>

              <div className="mt-14 flex flex-col items-start">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber text-navy-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber">
                  {roleLabel}
                </p>
                <ul className="mt-6 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-10 text-xs text-white/50">
              &copy; {new Date().getFullYear()} EduNexus Academy
            </p>
          </div>

          {/* Form panel */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-3">
            <div className="mb-6 flex flex-wrap justify-end gap-x-3 gap-y-1 text-xs text-slate">
              <span>Not {roleLabel.toLowerCase()}?</span>
              {otherPortals.map((portal, i) => (
                <span key={portal.key}>
                  <Link to={portal.loginPath} className="font-semibold text-teal hover:underline">
                    {portal.shortLabel}
                  </Link>
                  {i < otherPortals.length - 1 && <span className="ml-3 text-edge">|</span>}
                </span>
              ))}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
