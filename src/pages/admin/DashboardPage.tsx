import { PortalShell } from "@/components/portal/PortalShell";
import { StatCard } from "@/components/portal/StatCard";
import { PanelCard } from "@/components/portal/PanelCard";
import {
  UsersIcon,
  UserRoundIcon,
  HouseIcon,
  LayoutDashboardIcon,
  BarChartIcon,
  PlusIcon,
  BookOpenIcon,
  BellIcon,
  ClipboardListIcon,
} from "@/components/icons";
import { Link } from "react-router-dom";

const ENROLLMENT = [
  { term: "Fall '23", value: 1080 },
  { term: "Spr '24", value: 1105 },
  { term: "Fall '24", value: 1150 },
  { term: "Spr '25", value: 1170 },
  { term: "Fall '25", value: 1210 },
  { term: "Spr '26", value: 1240 },
];
const MAX_VALUE = Math.max(...ENROLLMENT.map((d) => d.value));

const QUICK_ACTIONS = [
  { label: "Create User", icon: PlusIcon, to: "/admin/users" },
  { label: "Manage Classes", icon: BookOpenIcon, to: "/admin/classes" },
  { label: "Send Announcement", icon: BellIcon, to: "/admin/reports" },
  { label: "Generate Report", icon: ClipboardListIcon, to: "/admin/reports" },
];

export default function AdminDashboardPage() {
  return (
    <PortalShell
      role="admin"
      userName="Grace Adeyemi"
      userSubtitle="System Administrator"
      title="System Overview"
      subtitle="EduNexus Academy · 2025–26 Academic Session"
    >
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={UsersIcon} value="1,240" label="Total students" delta="+18 this term" />
        <StatCard icon={UserRoundIcon} value="86" label="Total teachers" delta="+3 this term" />
        <StatCard icon={HouseIcon} value="1,980" label="Total parents" />
        <StatCard icon={LayoutDashboardIcon} value="512" label="Active users today" delta="Live" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <PanelCard title="Enrollment by Term" icon={BarChartIcon} className="lg:col-span-3">
          <div className="flex h-48 items-end gap-3 sm:gap-4">
            {ENROLLMENT.map((d) => (
              <div key={d.term} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-36 w-full items-end">
                  <div
                    className="w-full rounded-t-md bg-teal transition-all"
                    style={{ height: `${(d.value / MAX_VALUE) * 100}%` }}
                    title={`${d.value}`}
                  />
                </div>
                <span className="text-[11px] text-slate">{d.term}</span>
              </div>
            ))}
          </div>
        </PanelCard>

        <PanelCard title="Quick Actions" icon={PlusIcon} className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {QUICK_ACTIONS.map((action) => (
              <Link
                key={action.label}
                to={action.to}
                className="flex flex-col items-center gap-2 rounded-xl border border-edge bg-lightbg px-3 py-5 text-center transition-colors hover:border-navy"
              >
                <action.icon className="h-5 w-5 text-navy" />
                <span className="text-xs font-semibold text-navy">{action.label}</span>
              </Link>
            ))}
          </div>
        </PanelCard>
      </div>
    </PortalShell>
  );
}
