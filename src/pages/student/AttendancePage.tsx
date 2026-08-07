import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { StatCard } from "@/components/portal/StatCard";
import { ProgressBar } from "@/components/portal/ProgressBar";
import { CalendarIcon, CheckCircleIcon } from "@/components/icons";

const MONTHS = [
  { month: "March", pct: 0.98 },
  { month: "April", pct: 0.94 },
  { month: "May", pct: 0.9 },
  { month: "June", pct: 0.97 },
  { month: "July", pct: 0.96 },
];

export default function StudentAttendancePage() {
  return (
    <PortalShell
      role="student"
      userName="Amara Chen"
      userSubtitle="Grade 10 · Student"
      title="Attendance"
      subtitle="Your attendance record for this academic session."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={CalendarIcon} value="96%" label="Overall attendance" delta="+2%" />
        <StatCard icon={CheckCircleIcon} value="142" label="Days present" />
        <StatCard icon={CalendarIcon} value="6" label="Days absent" deltaGood={false} />
      </div>

      <div className="mt-6">
        <PanelCard title="Monthly Summary" icon={CalendarIcon}>
          <div className="divide-y divide-lightbg">
            {MONTHS.map((m) => (
              <ProgressBar key={m.month} label={m.month} pct={m.pct} />
            ))}
          </div>
        </PanelCard>
      </div>
    </PortalShell>
  );
}
