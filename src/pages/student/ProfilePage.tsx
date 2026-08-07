import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { InfoRow } from "@/components/portal/InfoRow";
import { Button } from "@/components/ui/Button";
import { UserRoundIcon, LockIcon } from "@/components/icons";

export default function StudentProfilePage() {
  return (
    <PortalShell
      role="student"
      userName="Amara Chen"
      userSubtitle="Grade 10 · Student"
      title="Profile"
      subtitle="Your personal information and account settings."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <PanelCard title="" className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-teal text-2xl font-semibold text-white">
              A
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-navy">Amara Chen</p>
            <p className="text-sm text-slate">Grade 10 · Student ID: STU-10284</p>
          </div>
        </PanelCard>

        <PanelCard title="Personal Information" icon={UserRoundIcon} className="lg:col-span-2">
          <InfoRow label="Full name" value="Amara Chen" />
          <InfoRow label="Email address" value="amara.chen@edunexus.academy" />
          <InfoRow label="Grade / Class" value="Grade 10 – A" />
          <InfoRow label="Guardian" value="Mrs. Folake Adeyemi" />
          <InfoRow label="Enrolled since" value="September 2022" />
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
