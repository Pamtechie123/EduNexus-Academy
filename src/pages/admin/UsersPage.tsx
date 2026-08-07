import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Badge } from "@/components/portal/Badge";
import { Button } from "@/components/ui/Button";
import { UserRoundIcon, PlusIcon } from "@/components/icons";

const USERS = [
  { name: "Amara Chen", email: "amara.chen@edunexus.academy", role: "Student", status: "active" as const },
  { name: "Daniel Okafor", email: "d.okafor@edunexus.academy", role: "Teacher", status: "active" as const },
  { name: "Folake Adeyemi", email: "f.adeyemi@edunexus.academy", role: "Parent", status: "active" as const },
  { name: "Grace Adeyemi", email: "g.adeyemi@edunexus.academy", role: "Administrator", status: "active" as const },
  { name: "Tunde Bakare", email: "t.bakare@edunexus.academy", role: "Student", status: "inactive" as const },
];

const STATUS_TONE = { active: "teal", inactive: "amber" } as const;

export default function AdminUsersPage() {
  return (
    <PortalShell
      role="admin"
      userName="Grace Adeyemi"
      userSubtitle="System Administrator"
      title="User Management"
      subtitle="Create, edit, and manage every account across all four portals."
    >
      <PanelCard
        title="All Users"
        icon={UserRoundIcon}
        action={<Button icon={<PlusIcon className="h-4 w-4" />}>Create user</Button>}
      >
        <DataTable
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "role", label: "Role" },
            { key: "status", label: "Status" },
          ]}
          rows={USERS.map((u) => ({
            name: u.name,
            email: u.email,
            role: u.role,
            status: <Badge tone={STATUS_TONE[u.status]}>{u.status === "active" ? "Active" : "Inactive"}</Badge>,
          }))}
        />
      </PanelCard>
    </PortalShell>
  );
}
