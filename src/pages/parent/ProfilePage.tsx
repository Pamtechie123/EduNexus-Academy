import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { InfoRow } from "@/components/portal/InfoRow";
import { Button } from "@/components/ui/Button";
import { UserRoundIcon, LockIcon, UsersIcon } from "@/components/icons";

export default function ParentProfilePage() {
  return (
    <PortalShell
      role="parent"
      userName="Mrs. Folake Adeyemi"
      userSubtitle="Parent · 2 linked children"
      title="Profile"
      subtitle="Your personal information and linked students."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <PanelCard title="" className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-teal text-2xl font-semibold text-white">
              F
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-navy">Folake Adeyemi</p>
            <p className="text-sm text-slate">Parent / Guardian</p>
          </div>
        </PanelCard>

        <PanelCard title="Personal Information" icon={UserRoundIcon} className="lg:col-span-2">
          <InfoRow label="Full name" value="Folake Adeyemi" />
          <InfoRow label="Email address" value="f.adeyemi@edunexus.academy" />
          <InfoRow label="Phone number" value="+234 803 555 0142" />
          <InfoRow label="Relationship" value="Mother / Guardian" />
          <div className="mt-4">
            <Button to="/change-password" variant="secondary" icon={<LockIcon className="h-4 w-4" />}>
              Change password
            </Button>
          </div>
        </PanelCard>
      </div>

      <div className="mt-6">
        <PanelCard title="Linked Students" icon={UsersIcon}>
          <InfoRow label="Tobi Adeyemi" value="Grade 6" />
          <InfoRow label="Ada Adeyemi" value="Grade 9" />
        </PanelCard>
      </div>
    </PortalShell>
  );
}
