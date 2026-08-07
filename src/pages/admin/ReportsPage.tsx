import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { StatCard } from "@/components/portal/StatCard";
import { BarChartIcon, AwardIcon, CalendarIcon, UsersIcon } from "@/components/icons";

const ENROLLMENT = [
  { term: "Fall '23", value: 1080 },
  { term: "Spr '24", value: 1105 },
  { term: "Fall '24", value: 1150 },
  { term: "Spr '25", value: 1170 },
  { term: "Fall '25", value: 1210 },
  { term: "Spr '26", value: 1240 },
];
const MAX_VALUE = Math.max(...ENROLLMENT.map((d) => d.value));

export default function AdminReportsPage() {
  return (
    <PortalShell
      role="admin"
      userName="Grace Adeyemi"
      userSubtitle="System Administrator"
      title="Reports"
      subtitle="School-wide statistics across every portal."
    >
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={AwardIcon} value="87%" label="Avg. school performance" delta="+3%" />
        <StatCard icon={CalendarIcon} value="94%" label="School-wide attendance" delta="+1%" />
        <StatCard icon={UsersIcon} value="1,240" label="Total students" delta="+18" />
        <StatCard icon={BarChartIcon} value="86" label="Total teachers" delta="+3" />
      </div>

      <div className="mt-6">
        <PanelCard title="Enrollment by Term" icon={BarChartIcon}>
          <div className="flex h-48 items-end gap-3 sm:gap-4">
            {ENROLLMENT.map((d) => (
              <div key={d.term} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-36 w-full items-end">
                  <div
                    className="w-full rounded-t-md bg-teal"
                    style={{ height: `${(d.value / MAX_VALUE) * 100}%` }}
                    title={`${d.value}`}
                  />
                </div>
                <span className="text-[11px] text-slate">{d.term}</span>
              </div>
            ))}
          </div>
        </PanelCard>
      </div>
    </PortalShell>
  );
}
