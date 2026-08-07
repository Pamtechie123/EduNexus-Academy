import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { AwardIcon } from "@/components/icons";

const TOBI_RESULTS = [
  { subject: "Mathematics", grade: "B+" },
  { subject: "Science", grade: "B" },
  { subject: "English", grade: "A-" },
];

const ADA_RESULTS = [
  { subject: "Mathematics", grade: "A-" },
  { subject: "Biology", grade: "A" },
  { subject: "Literature", grade: "A" },
];

export default function ParentResultsPage() {
  return (
    <PortalShell
      role="parent"
      userName="Mrs. Folake Adeyemi"
      userSubtitle="Parent · 2 linked children"
      title="Results"
      subtitle="Report cards for each of your children."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PanelCard title="Tobi Adeyemi · Grade 6 Report Card" icon={AwardIcon}>
          <DataTable columns={[{ key: "subject", label: "Subject" }, { key: "grade", label: "Grade" }]} rows={TOBI_RESULTS} />
        </PanelCard>
        <PanelCard title="Ada Adeyemi · Grade 9 Report Card" icon={AwardIcon}>
          <DataTable columns={[{ key: "subject", label: "Subject" }, { key: "grade", label: "Grade" }]} rows={ADA_RESULTS} />
        </PanelCard>
      </div>
    </PortalShell>
  );
}
