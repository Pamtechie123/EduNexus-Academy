import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Badge } from "@/components/portal/Badge";
import { AwardIcon } from "@/components/icons";

const ASSESSMENTS = [
  { title: "Unit 4 Quiz", cls: "Grade 10 – A", avg: "86%", status: "published" as const },
  { title: "Midterm Exam", cls: "Grade 11 – B", avg: "79%", status: "published" as const },
  { title: "Chapter 6 Test", cls: "Grade 9 – C", avg: "—", status: "grading" as const },
  { title: "Final Review Quiz", cls: "Grade 12 – A", avg: "—", status: "scheduled" as const },
];

const TONE = { published: "teal", grading: "amber", scheduled: "slate" } as const;
const LABEL = { published: "Published", grading: "Grading", scheduled: "Scheduled" } as const;

export default function TeacherAssessmentsPage() {
  return (
    <PortalShell
      role="teacher"
      userName="Mr. Daniel Okafor"
      userSubtitle="Mathematics Teacher"
      title="Assessments"
      subtitle="Quizzes and exams across your classes."
    >
      <PanelCard title="Quizzes & Exams" icon={AwardIcon}>
        <DataTable
          columns={[
            { key: "title", label: "Assessment" },
            { key: "cls", label: "Class" },
            { key: "avg", label: "Class Average" },
            { key: "status", label: "Status" },
          ]}
          rows={ASSESSMENTS.map((a) => ({
            title: a.title,
            cls: a.cls,
            avg: a.avg,
            status: <Badge tone={TONE[a.status]}>{LABEL[a.status]}</Badge>,
          }))}
        />
      </PanelCard>
    </PortalShell>
  );
}
