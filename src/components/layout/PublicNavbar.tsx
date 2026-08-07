import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GraduationCapIcon, MenuIcon, XIcon, ChevronRightIcon } from "@/components/icons";
import { PORTALS, SITE_NAME } from "@/lib/constants";

const navLinks = [
  { label: "Portals", href: "#portals" },
  { label: "Why EduNexus", href: "#features" },
  { label: "For your school", href: "#stats" },
];

export function PublicNavbar() {
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-amber">
            <GraduationCapIcon className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold text-navy">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <div
            className="relative"
            onMouseLeave={() => setSignInOpen(false)}
          >
            <button
              onClick={() => setSignInOpen((v) => !v)}
              aria-expanded={signInOpen}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Sign in
              <ChevronRightIcon className={`h-4 w-4 transition-transform ${signInOpen ? "rotate-90" : ""}`} />
            </button>

            {signInOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl2 border border-edge bg-white shadow-panel">
                <p className="border-b border-edge px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate">
                  Choose your portal
                </p>
                {PORTALS.map((portal) => (
                  <Link
                    key={portal.key}
                    to={portal.loginPath}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-lightbg"
                  >
                    <portal.icon className="h-4 w-4 text-teal" />
                    {portal.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-edge bg-white px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate hover:bg-lightbg hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mt-4 px-2 text-xs font-semibold uppercase tracking-wide text-slate">
            Sign in to
          </p>
          <div className="mt-1 flex flex-col gap-1">
            {PORTALS.map((portal) => (
              <NavLink
                key={portal.key}
                to={portal.loginPath}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-navy hover:bg-lightbg"
              >
                <portal.icon className="h-4 w-4 text-teal" />
                {portal.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
