import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { StatCard } from "@/components/portal/StatCard";
import { DataTable } from "@/components/portal/DataTable";
import { AwardIcon, BarChartIcon, ClipboardListIcon } from "@/components/icons";

const RESULTS = [
  { subject: "Mathematics", quiz: "88%", exam: "94%", grade: "A" },
  { subject: "Science", quiz: "80%", exam: "86%", grade: "B+" },
  { subject: "English Literature", quiz: "91%", exam: "95%", grade: "A" },
  { subject: "World History", quiz: "78%", exam: "84%", grade: "B" },
  { subject: "Computer Science", quiz: "85%", exam: "90%", grade: "A-" },
];

export default function StudentResultsPage() {
  return (
    <PortalShell
      role="student"
      userName="Amara Chen"
      userSubtitle="Grade 10 · Student"
      title="Results"
      subtitle="Quiz scores, exam results, and your overall performance."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={AwardIcon} value="A-" label="Overall grade" delta="+0.3" />
        <StatCard icon={BarChartIcon} value="87%" label="Average exam score" delta="+4%" />
        <StatCard icon={ClipboardListIcon} value="Top 12%" label="Class ranking" />
      </div>

      <div className="mt-6">
        <PanelCard title="Report Card — Term 2" icon={AwardIcon}>
          <DataTable
            columns={[
              { key: "subject", label: "Subject" },
              { key: "quiz", label: "Quiz Avg." },
              { key: "exam", label: "Exam Score" },
              { key: "grade", label: "Grade" },
            ]}
            rows={RESULTS}
          />
        </PanelCard>
      </div>
    </PortalShell>
  );
}
