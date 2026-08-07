import { PortalShell } from "@/components/portal/PortalShell";
import { StatCard } from "@/components/portal/StatCard";
import { PanelCard } from "@/components/portal/PanelCard";
import { ProgressBar } from "@/components/portal/ProgressBar";
import { ListItem } from "@/components/portal/ListItem";
import {
  CalendarIcon,
  ClipboardListIcon,
  AwardIcon,
  BellIcon,
} from "@/components/icons";

const GRADES = [
  { label: "Mathematics", pct: 0.92 },
  { label: "Science", pct: 0.88 },
  { label: "English Literature", pct: 0.95 },
  { label: "World History", pct: 0.84 },
];

const ANNOUNCEMENTS = [
  { title: "Midterm exam schedule released", meta: "2 hours ago" },
  { title: "Library closed this Friday", meta: "Yesterday" },
  { title: "Sports day sign-up open", meta: "2 days ago" },
];

export default function StudentDashboardPage() {
  return (
    <PortalShell
      role="student"
      userName="Amara Chen"
      userSubtitle="Grade 10 · Student"
      title="Welcome back, Amara"
      subtitle="Here's what's happening in your classes today."
    >
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={CalendarIcon} value="96%" label="Attendance rate" delta="+2%" />
        <StatCard icon={ClipboardListIcon} value="3" label="Upcoming assignments" delta="Due soon" deltaGood={false} />
        <StatCard icon={AwardIcon} value="A-" label="Overall grade" delta="+0.3" />
        <StatCard icon={BellIcon} value="2" label="New announcements" delta="Today" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <PanelCard title="Recent Grades" icon={AwardIcon} className="lg:col-span-3">
          <div className="divide-y divide-lightbg">
            {GRADES.map((g) => (
              <ProgressBar key={g.label} label={g.label} pct={g.pct} />
            ))}
          </div>
        </PanelCard>

        <PanelCard title="Announcements" icon={BellIcon} className="lg:col-span-2">
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
