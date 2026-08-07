import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { InfoRow } from "@/components/portal/InfoRow";
import { Button } from "@/components/ui/Button";
import { ShieldCheckIcon, LockIcon } from "@/components/icons";

export default function AdminSettingsPage() {
  return (
    <PortalShell
      role="admin"
      userName="Grace Adeyemi"
      userSubtitle="System Administrator"
      title="Settings"
      subtitle="School information, branding, and portal configuration."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PanelCard title="School Information" icon={ShieldCheckIcon}>
          <InfoRow label="School name" value="EduNexus Academy" />
          <InfoRow label="Academic session" value="2025–26" />
          <InfoRow label="Current term" value="Term 2" />
          <InfoRow label="Time zone" value="West Africa Time (WAT)" />
        </PanelCard>

        <PanelCard title="Account" icon={LockIcon}>
          <InfoRow label="Administrator" value="Grace Adeyemi" />
          <InfoRow label="Email address" value="g.adeyemi@edunexus.academy" />
          <div className="mt-4">
            <Button to="/change-password" variant="secondary" icon={<LockIcon className="h-4 w-4" />}>
              Change password
            </Button>
          </div>
        </PanelCard>
      </div>
    </PortalShell>
  );
}
