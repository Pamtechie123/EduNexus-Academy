import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Badge } from "@/components/portal/Badge";
import { ClipboardListIcon } from "@/components/icons";

const ASSIGNMENTS = [
  { title: "Problem Set 4", cls: "Grade 10 – A", due: "Aug 12, 2026", submissions: "24 / 32" },
  { title: "Quiz Review", cls: "Grade 11 – B", due: "Aug 10, 2026", submissions: "29 / 29" },
  { title: "Chapter Quiz", cls: "Grade 9 – C", due: "Aug 8, 2026", submissions: "30 / 34" },
  { title: "Statistics Worksheet", cls: "Grade 10 – A", due: "Aug 6, 2026", submissions: "32 / 32" },
];

export default function TeacherAssignmentsPage() {
  return (
    <PortalShell
      role="teacher"
      userName="Mr. Daniel Okafor"
      userSubtitle="Mathematics Teacher"
      title="Assignments"
      subtitle="Create, edit, and track assignments across your classes."
    >
      <PanelCard title="All Assignments" icon={ClipboardListIcon}>
        <DataTable
          columns={[
            { key: "title", label: "Assignment" },
            { key: "cls", label: "Class" },
            { key: "due", label: "Due Date" },
            { key: "submissions", label: "Submitted" },
          ]}
          rows={ASSIGNMENTS}
        />
      </PanelCard>
      <p className="mt-4 text-xs text-slate">
        Grading detail view and the assignment builder are next up — see{" "}
        <code className="rounded bg-white px-1.5 py-0.5">docs/PAGE_PLAN.md</code>.
      </p>
    </PortalShell>
  );
}
