import { PortalShell } from "@/components/portal/PortalShell";
import { StatCard } from "@/components/portal/StatCard";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Badge } from "@/components/portal/Badge";
import { BookOpenIcon, ClipboardListIcon, CalendarIcon, UsersIcon } from "@/components/icons";

const SCHEDULE_ROWS = [
  { time: "8:30 AM", cls: "Grade 10 – A", subject: "Algebra II", room: "204" },
  { time: "10:00 AM", cls: "Grade 11 – B", subject: "Geometry", room: "204" },
  { time: "12:15 PM", cls: "Grade 9 – C", subject: "Pre-Calculus", room: "118" },
  { time: "2:00 PM", cls: "Grade 10 – A", subject: "Statistics", room: "204" },
];

const SUBMISSION_ROWS = [
  { student: "Zainab Musa", assignment: "Problem Set 4", status: "pending" },
  { student: "Kwame Boateng", assignment: "Quiz Review", status: "graded" },
  { student: "Lena Osei", assignment: "Problem Set 4", status: "pending" },
  { student: "Tunde Bakare", assignment: "Chapter Quiz", status: "pending" },
];

export default function TeacherDashboardPage() {
  return (
    <PortalShell
      role="teacher"
      userName="Mr. Daniel Okafor"
      userSubtitle="Mathematics Teacher"
      title="Good morning, Mr. Okafor"
      subtitle="You have 4 classes and 12 submissions waiting for review."
    >
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={BookOpenIcon} value="5" label="Assigned classes" />
        <StatCard icon={ClipboardListIcon} value="12" label="Pending grading" delta="Action needed" deltaGood={false} />
        <StatCard icon={CalendarIcon} value="4" label="Classes today" delta="Next: 10:00 AM" />
        <StatCard icon={UsersIcon} value="148" label="Total students" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PanelCard title="Today's Schedule" icon={CalendarIcon}>
          <DataTable
            columns={[
              { key: "time", label: "Time" },
              { key: "cls", label: "Class" },
              { key: "subject", label: "Subject" },
              { key: "room", label: "Room" },
            ]}
            rows={SCHEDULE_ROWS.map((r) => ({ time: r.time, cls: r.cls, subject: r.subject, room: r.room }))}
          />
        </PanelCard>

        <PanelCard title="Pending Submissions" icon={ClipboardListIcon}>
          <DataTable
            columns={[
              { key: "student", label: "Student" },
              { key: "assignment", label: "Assignment" },
              { key: "status", label: "Status" },
            ]}
            rows={SUBMISSION_ROWS.map((r) => ({
              student: r.student,
              assignment: r.assignment,
              status: <Badge tone={r.status === "graded" ? "teal" : "amber"}>{r.status === "graded" ? "Graded" : "Pending"}</Badge>,
            }))}
          />
        </PanelCard>
      </div>
    </PortalShell>
  );
}
