import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { ListItem } from "@/components/portal/ListItem";
import { MessageSquareIcon } from "@/components/icons";

const STUDENT_MESSAGES = [
  { title: "Zainab Musa: Question about Problem Set 4", meta: "1 hour ago" },
  { title: "Tunde Bakare: Can I get an extension?", meta: "Yesterday" },
];

const PARENT_MESSAGES = [
  { title: "Mrs. Adeyemi: Thank you for the feedback on Ada's essay", meta: "3 hours ago" },
  { title: "Mr. Musa: Requesting a parent-teacher meeting", meta: "2 days ago" },
];

export default function TeacherMessagesPage() {
  return (
    <PortalShell
      role="teacher"
      userName="Mr. Daniel Okafor"
      userSubtitle="Mathematics Teacher"
      title="Messages"
      subtitle="Conversations with students and parents."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PanelCard title="From Students" icon={MessageSquareIcon}>
          <div className="divide-y divide-lightbg">
            {STUDENT_MESSAGES.map((m) => (
              <ListItem key={m.title} icon={MessageSquareIcon} title={m.title} meta={m.meta} />
            ))}
          </div>
        </PanelCard>
        <PanelCard title="From Parents" icon={MessageSquareIcon}>
          <div className="divide-y divide-lightbg">
            {PARENT_MESSAGES.map((m) => (
              <ListItem key={m.title} icon={MessageSquareIcon} title={m.title} meta={m.meta} />
            ))}
          </div>
        </PanelCard>
      </div>
    </PortalShell>
  );
}
