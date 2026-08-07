import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { Badge } from "@/components/portal/Badge";
import { CalendarIcon } from "@/components/icons";

const ROSTER = [
  { name: "Zainab Musa", status: "present" as const },
  { name: "Kwame Boateng", status: "present" as const },
  { name: "Lena Osei", status: "absent" as const },
  { name: "Tunde Bakare", status: "present" as const },
  { name: "Chidera Nwankwo", status: "late" as const },
  { name: "Femi Adisa", status: "present" as const },
];

const TONE = { present: "teal", absent: "amber", late: "slate" } as const;
const LABEL = { present: "Present", absent: "Absent", late: "Late" } as const;

export default function TeacherAttendancePage() {
  return (
    <PortalShell
      role="teacher"
      userName="Mr. Daniel Okafor"
      userSubtitle="Mathematics Teacher"
      title="Attendance"
      subtitle="Mark today's attendance for Grade 10 – A · Algebra II."
    >
      <PanelCard title="Today · Grade 10 – A" icon={CalendarIcon}>
        <div className="divide-y divide-lightbg">
          {ROSTER.map((s) => (
            <div key={s.name} className="flex items-center justify-between py-3">
              <span className="text-sm font-medium text-navy">{s.name}</span>
              <Badge tone={TONE[s.status]}>{LABEL[s.status]}</Badge>
            </div>
          ))}
        </div>
      </PanelCard>
    </PortalShell>
  );
}
