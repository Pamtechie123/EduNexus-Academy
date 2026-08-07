import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { ListItem } from "@/components/portal/ListItem";
import { MessageSquareIcon, BellIcon } from "@/components/icons";

const MESSAGES = [
  { title: "Mr. Okafor: Great work on the last problem set", meta: "Mathematics · 1 hour ago" },
  { title: "Mrs. Lawal: Lab report feedback is ready", meta: "Science · Yesterday" },
  { title: "Mr. Bello: Reminder — essay due Sunday", meta: "English Literature · 2 days ago" },
];

const ANNOUNCEMENTS = [
  { title: "Midterm exam schedule released", meta: "School-wide · 2 hours ago" },
  { title: "Library closed this Friday", meta: "School-wide · Yesterday" },
  { title: "Sports day sign-up open", meta: "School-wide · 2 days ago" },
];

export default function StudentMessagesPage() {
  return (
    <PortalShell
      role="student"
      userName="Amara Chen"
      userSubtitle="Grade 10 · Student"
      title="Messages"
      subtitle="Messages from your teachers and school-wide announcements."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PanelCard title="Messages from Teachers" icon={MessageSquareIcon}>
          <div className="divide-y divide-lightbg">
            {MESSAGES.map((m) => (
              <ListItem key={m.title} icon={MessageSquareIcon} title={m.title} meta={m.meta} />
            ))}
          </div>
        </PanelCard>
        <PanelCard title="School Announcements" icon={BellIcon}>
          <div className="divide-y divide-lightbg">
            {ANNOUNCEMENTS.map((a) => (
              <ListItem key={a.title} icon={BellIcon} title={a.title} meta={a.meta} />
            ))}
          </div>
        </PanelCard>
      </div>
    </PortalShell>
  );
}
