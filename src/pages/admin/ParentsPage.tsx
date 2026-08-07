import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { DataTable } from "@/components/portal/DataTable";
import { Button } from "@/components/ui/Button";
import { UsersIcon, PlusIcon } from "@/components/icons";

const PARENTS = [
  { name: "Folake Adeyemi", email: "f.adeyemi@edunexus.academy", children: "Tobi Adeyemi, Ada Adeyemi" },
  { name: "Ibrahim Musa", email: "i.musa@edunexus.academy", children: "Zainab Musa" },
  { name: "Ama Boateng", email: "a.boateng@edunexus.academy", children: "Kwame Boateng" },
];

export default function AdminParentsPage() {
  return (
    <PortalShell
      role="admin"
      userName="Grace Adeyemi"
      userSubtitle="System Administrator"
      title="Parents"
      subtitle="Parent accounts and their linked students."
    >
      <PanelCard
        title="Parent Accounts"
        icon={UsersIcon}
        action={<Button icon={<PlusIcon className="h-4 w-4" />}>Link parent</Button>}
      >
        <DataTable
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "children", label: "Linked Students" },
          ]}
          rows={PARENTS}
        />
      </PanelCard>
    </PortalShell>
  );
}
