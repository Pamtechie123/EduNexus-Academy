import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { ListItem } from "@/components/portal/ListItem";
import { MessageSquareIcon, BellIcon } from "@/components/icons";

const MESSAGES = [
  { title: "Mrs. Lawal: Tobi's science project is due Monday", meta: "1 hour ago" },
  { title: "Mr. Bello: Ada's essay feedback is ready", meta: "3 days ago" },
];

const NOTICES = [
  { title: "Half-term break dates confirmed", meta: "Yesterday" },
  { title: "Parent-teacher conference sign-up open", meta: "4 days ago" },
];

export default function ParentMessagesPage() {
  return (
    <PortalShell
      role="parent"
      userName="Mrs. Folake Adeyemi"
      userSubtitle="Parent · 2 linked children"
      title="Messages"
      subtitle="Messages from teachers and school-wide notices."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PanelCard title="From Teachers" icon={MessageSquareIcon}>
          <div className="divide-y divide-lightbg">
            {MESSAGES.map((m) => (
              <ListItem key={m.title} icon={MessageSquareIcon} title={m.title} meta={m.meta} />
            ))}
          </div>
        </PanelCard>
        <PanelCard title="School Notices" icon={BellIcon}>
          <div className="divide-y divide-lightbg">
            {NOTICES.map((n) => (
              <ListItem key={n.title} icon={BellIcon} title={n.title} meta={n.meta} />
            ))}
          </div>
        </PanelCard>
      </div>
    </PortalShell>
  );
}
