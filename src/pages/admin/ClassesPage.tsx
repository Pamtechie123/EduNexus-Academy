import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Button } from "@/components/ui/Button";
import { BookOpenIcon, PlusIcon } from "@/components/icons";

const CLASSES = [
  { name: "Grade 9 – C", teacher: "Daniel Okafor", students: 34, term: "Term 2, 2025–26" },
  { name: "Grade 10 – A", teacher: "Daniel Okafor", students: 32, term: "Term 2, 2025–26" },
  { name: "Grade 11 – B", teacher: "Daniel Okafor", students: 29, term: "Term 2, 2025–26" },
  { name: "Grade 12 – A", teacher: "Daniel Okafor", students: 21, term: "Term 2, 2025–26" },
];

export default function AdminClassesPage() {
  return (
    <PortalShell
      role="admin"
      userName="Grace Adeyemi"
      userSubtitle="System Administrator"
      title="Classes & Subjects"
      subtitle="Academic structure — classes, subjects, and teacher assignment."
    >
      <PanelCard
        title="Classes"
        icon={BookOpenIcon}
        action={<Button icon={<PlusIcon className="h-4 w-4" />}>Add class</Button>}
      >
        <DataTable
          columns={[
            { key: "name", label: "Class" },
            { key: "teacher", label: "Lead Teacher" },
            { key: "students", label: "Students" },
            { key: "term", label: "Term" },
          ]}
          rows={CLASSES.map((c) => ({ name: c.name, teacher: c.teacher, students: String(c.students), term: c.term }))}
        />
      </PanelCard>
    </PortalShell>
  );
}
