import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { InfoRow } from "@/components/portal/InfoRow";
import { Button } from "@/components/ui/Button";
import { UserRoundIcon, LockIcon } from "@/components/icons";

export default function TeacherProfilePage() {
  return (
    <PortalShell
      role="teacher"
      userName="Mr. Daniel Okafor"
      userSubtitle="Mathematics Teacher"
      title="Profile"
      subtitle="Your personal information and account settings."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <PanelCard title="" className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-teal text-2xl font-semibold text-white">
              D
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-navy">Daniel Okafor</p>
            <p className="text-sm text-slate">Mathematics Department</p>
          </div>
        </PanelCard>

        <PanelCard title="Personal Information" icon={UserRoundIcon} className="lg:col-span-2">
          <InfoRow label="Full name" value="Daniel Okafor" />
          <InfoRow label="Email address" value="d.okafor@edunexus.academy" />
          <InfoRow label="Department" value="Mathematics" />
          <InfoRow label="Assigned classes" value="5 classes" />
          <InfoRow label="Staff since" value="August 2019" />
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
