import { PortalShell } from "@/components/portal/PortalShell";
import { StatCard } from "@/components/portal/StatCard";
import { PanelCard } from "@/components/portal/PanelCard";
import { ListItem } from "@/components/portal/ListItem";
import { ProgressBar } from "@/components/portal/ProgressBar";
import { CalendarIcon, AwardIcon, MessageSquareIcon, UserRoundIcon } from "@/components/icons";

const CHILDREN = [
  { name: "Tobi Adeyemi", grade: "Grade 6", attendance: 0.94, avg: 0.89 },
  { name: "Ada Adeyemi", grade: "Grade 9", attendance: 0.97, avg: 0.91 },
];

const MESSAGES = [
  { title: "Mrs. Lawal: Tobi's science project is due Monday", meta: "1 hour ago" },
  { title: "School notice: Half-term break dates confirmed", meta: "Yesterday" },
  { title: "Mr. Bello: Ada's essay feedback is ready", meta: "3 days ago" },
];

export default function ParentDashboardPage() {
  return (
    <PortalShell
      role="parent"
      userName="Mrs. Folake Adeyemi"
      userSubtitle="Parent · 2 linked children"
      title="Welcome back, Mrs. Adeyemi"
      subtitle="Here's how Tobi and Ada are doing this week."
    >
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={UserRoundIcon} value="2" label="Linked children" />
        <StatCard icon={CalendarIcon} value="95%" label="Avg. attendance" delta="+1%" />
        <StatCard icon={AwardIcon} value="90%" label="Avg. performance" delta="+3%" />
        <StatCard icon={MessageSquareIcon} value="3" label="New messages" delta="Today" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <PanelCard title="Child Overview" icon={UserRoundIcon} className="lg:col-span-3">
          <div className="space-y-5">
            {CHILDREN.map((child) => (
              <div key={child.name} className="rounded-xl border border-edge p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-navy">{child.name}</p>
                  <span className="text-xs text-slate">{child.grade}</span>
                </div>
                <div className="mt-3 space-y-1.5">
                  <ProgressBar label="Attendance" pct={child.attendance} color="teal" />
                  <ProgressBar label="Overall grade" pct={child.avg} color="amber" />
                </div>
              </div>
            ))}
          </div>
        </PanelCard>

        <PanelCard title="Messages & Notices" icon={MessageSquareIcon} className="lg:col-span-2">
          <div className="divide-y divide-lightbg">
            {MESSAGES.map((m) => (
              <ListItem key={m.title} icon={MessageSquareIcon} title={m.title} meta={m.meta} />
            ))}
          </div>
        </PanelCard>
      </div>
    </PortalShell>
  );
}
