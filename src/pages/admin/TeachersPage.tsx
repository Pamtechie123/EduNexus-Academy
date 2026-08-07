import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Badge } from "@/components/portal/Badge";
import { Button } from "@/components/ui/Button";
import { UserRoundIcon, PlusIcon } from "@/components/icons";

const TEACHERS = [
  { name: "Daniel Okafor", id: "TCH-2091", department: "Mathematics", classes: 5, status: "active" as const },
  { name: "Ijeoma Lawal", id: "TCH-2032", department: "Science", classes: 4, status: "active" as const },
  { name: "Patricia Nwosu", id: "TCH-2077", department: "History", classes: 3, status: "active" as const },
  { name: "Emeka Obi", id: "TCH-2103", department: "Computer Science", classes: 4, status: "on leave" as const },
];

const TONE = { active: "teal", "on leave": "amber" } as const;

export default function AdminTeachersPage() {
  return (
    <PortalShell
      role="admin"
      userName="Grace Adeyemi"
      userSubtitle="System Administrator"
      title="Teachers"
      subtitle="Teacher records, subject allocation, and class assignment."
    >
      <PanelCard
        title="Teaching Staff"
        icon={UserRoundIcon}
        action={<Button icon={<PlusIcon className="h-4 w-4" />}>Add teacher</Button>}
      >
        <DataTable
          columns={[
            { key: "name", label: "Name" },
            { key: "id", label: "Staff ID" },
            { key: "department", label: "Department" },
            { key: "classes", label: "Classes" },
            { key: "status", label: "Status" },
          ]}
          rows={TEACHERS.map((t) => ({
            name: t.name,
            id: t.id,
            department: t.department,
            classes: String(t.classes),
            status: <Badge tone={TONE[t.status]}>{t.status === "active" ? "Active" : "On leave"}</Badge>,
          }))}
        />
      </PanelCard>
    </PortalShell>
  );
}
