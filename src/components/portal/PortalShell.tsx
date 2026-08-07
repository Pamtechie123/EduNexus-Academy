import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  GraduationCapIcon,
  BellIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
} from "@/components/icons";
import type { PortalKey } from "@/lib/constants";
import { PORTAL_NAV, PORTAL_ROLE_LABEL } from "@/lib/portalNav";

interface PortalShellProps {
  role: PortalKey;
  userName: string;
  userSubtitle: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PortalShell({ role, userName, userSubtitle, title, subtitle, children }: PortalShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const items = PORTAL_NAV[role];

  return (
    <div className="flex min-h-screen bg-lightbg">
      {/* Sidebar — desktop */}
      <aside className="hidden w-60 shrink-0 bg-navy text-white lg:flex lg:flex-col">
        <SidebarContent role={role} items={items} />
      </aside>

      {/* Sidebar — mobile drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-navy-dark/60"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden
          />
          <aside className="relative flex w-64 flex-col bg-navy text-white">
            <button
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10"
            >
              <XIcon className="h-4 w-4" />
            </button>
            <SidebarContent role={role} items={items} onNavigate={() => setMobileNavOpen(false)} />
          </aside>
        </div>
      )}

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-edge bg-white px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-navy hover:bg-lightbg lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <div className="relative hidden sm:block">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
              <input
                type="search"
                placeholder="Search..."
                className="w-56 rounded-full border border-edge bg-lightbg py-2 pl-9 pr-3 text-sm text-navy placeholder:text-slate/70 focus:border-teal focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Notifications"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-navy hover:bg-lightbg"
            >
              <BellIcon className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-amber-dark" />
            </button>
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-navy">{userName}</p>
              <p className="text-xs text-slate">{userSubtitle}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-semibold text-white">
              {userName.charAt(0)}
            </span>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-display text-2xl font-semibold text-navy">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-slate">{subtitle}</p>}
            <div className="mt-6">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarContent({
  role,
  items,
  onNavigate,
}: {
  role: PortalKey;
  items: typeof PORTAL_NAV[PortalKey];
  onNavigate?: () => void;
}) {
  return (
    <>
      <Link to="/" className="flex items-center gap-2.5 px-5 py-5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-navy-dark">
          <GraduationCapIcon className="h-4 w-4" />
        </span>
        <span>
          <span className="block font-display text-sm font-semibold leading-tight">EduNexus</span>
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/50">
            {PORTAL_ROLE_LABEL[role]}
          </span>
        </span>
      </Link>
      <div className="mx-5 border-t border-white/10" />
      <nav className="flex-1 space-y-1 px-3 py-4">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive ? "bg-navy-light text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
