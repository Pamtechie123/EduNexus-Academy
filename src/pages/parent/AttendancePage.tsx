import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { StatCard } from "@/components/portal/StatCard";
import { CalendarIcon } from "@/components/icons";

const CHILDREN = [
  { name: "Tobi Adeyemi", grade: "Grade 6", pct: "94%", absences: 5 },
  { name: "Ada Adeyemi", grade: "Grade 9", pct: "97%", absences: 2 },
];

export default function ParentAttendancePage() {
  return (
    <PortalShell
      role="parent"
      userName="Mrs. Folake Adeyemi"
      userSubtitle="Parent · 2 linked children"
      title="Attendance"
      subtitle="Attendance records for each of your children."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {CHILDREN.map((child) => (
          <PanelCard key={child.name} title={`${child.name} · ${child.grade}`} icon={CalendarIcon}>
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={CalendarIcon} value={child.pct} label="Attendance rate" />
              <StatCard icon={CalendarIcon} value={String(child.absences)} label="Absences this term" deltaGood={false} />
            </div>
          </PanelCard>
        ))}
      </div>
    </PortalShell>
  );
}
