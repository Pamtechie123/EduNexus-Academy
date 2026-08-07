import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Badge } from "@/components/portal/Badge";
import { ClipboardListIcon } from "@/components/icons";

const ASSIGNMENTS = [
  { title: "Problem Set 4", subject: "Mathematics", due: "Aug 12, 2026", status: "pending" as const },
  { title: "Lab Report — Titration", subject: "Science", due: "Aug 14, 2026", status: "pending" as const },
  { title: "Essay: Symbolism in Poetry", subject: "English Literature", due: "Aug 9, 2026", status: "submitted" as const },
  { title: "Chapter 6 Review", subject: "World History", due: "Aug 5, 2026", status: "graded" as const },
  { title: "Algorithm Design Exercise", subject: "Computer Science", due: "Jul 30, 2026", status: "graded" as const },
];

const STATUS_TONE = { pending: "amber", submitted: "teal", graded: "slate" } as const;
const STATUS_LABEL = { pending: "Pending", submitted: "Submitted", graded: "Graded" } as const;

export default function StudentAssignmentsPage() {
  return (
    <PortalShell
      role="student"
      userName="Amara Chen"
      userSubtitle="Grade 10 · Student"
      title="Assignments"
      subtitle="Everything due, submitted, or graded across your subjects."
    >
      <PanelCard title="All Assignments" icon={ClipboardListIcon}>
        <DataTable
          columns={[
            { key: "title", label: "Assignment" },
            { key: "subject", label: "Subject" },
            { key: "due", label: "Due Date" },
            { key: "status", label: "Status" },
          ]}
          rows={ASSIGNMENTS.map((a) => ({
            title: a.title,
            subject: a.subject,
            due: a.due,
            status: <Badge tone={STATUS_TONE[a.status]}>{STATUS_LABEL[a.status]}</Badge>,
          }))}
        />
      </PanelCard>
    </PortalShell>
  );
}
