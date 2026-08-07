import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Badge } from "@/components/portal/Badge";
import { Button } from "@/components/ui/Button";
import { HouseIcon, PlusIcon } from "@/components/icons";

const STUDENTS = [
  { name: "Amara Chen", id: "STU-10284", grade: "Grade 10 – A", guardian: "Folake Adeyemi", status: "enrolled" as const },
  { name: "Tobi Adeyemi", id: "STU-10391", grade: "Grade 6 – B", guardian: "Folake Adeyemi", status: "enrolled" as const },
  { name: "Ada Adeyemi", id: "STU-10392", grade: "Grade 9 – C", guardian: "Folake Adeyemi", status: "enrolled" as const },
  { name: "Zainab Musa", id: "STU-10105", grade: "Grade 10 – A", guardian: "Ibrahim Musa", status: "enrolled" as const },
  { name: "Kwame Boateng", id: "STU-10118", grade: "Grade 11 – B", guardian: "Ama Boateng", status: "pending" as const },
];

const TONE = { enrolled: "teal", pending: "amber" } as const;

export default function AdminStudentsPage() {
  return (
    <PortalShell
      role="admin"
      userName="Grace Adeyemi"
      userSubtitle="System Administrator"
      title="Students"
      subtitle="Admissions, student records, and class allocation."
    >
      <PanelCard
        title="Student Records"
        icon={HouseIcon}
        action={<Button icon={<PlusIcon className="h-4 w-4" />}>Add student</Button>}
      >
        <DataTable
          columns={[
            { key: "name", label: "Name" },
            { key: "id", label: "Student ID" },
            { key: "grade", label: "Class" },
            { key: "guardian", label: "Guardian" },
            { key: "status", label: "Status" },
          ]}
          rows={STUDENTS.map((s) => ({
            name: s.name,
            id: s.id,
            grade: s.grade,
            guardian: s.guardian,
            status: <Badge tone={TONE[s.status]}>{s.status === "enrolled" ? "Enrolled" : "Pending"}</Badge>,
          }))}
        />
      </PanelCard>
    </PortalShell>
  );
}
