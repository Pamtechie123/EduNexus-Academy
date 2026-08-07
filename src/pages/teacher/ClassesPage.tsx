import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { UsersIcon } from "@/components/icons";
import { Link } from "react-router-dom";

const CLASSES = [
  { name: "Grade 10 – A", subject: "Algebra II", students: 32, room: "204" },
  { name: "Grade 11 – B", subject: "Geometry", students: 29, room: "204" },
  { name: "Grade 9 – C", subject: "Pre-Calculus", students: 34, room: "118" },
  { name: "Grade 10 – A", subject: "Statistics", students: 32, room: "204" },
  { name: "Grade 12 – A", subject: "Calculus", students: 21, room: "204" },
];

export default function TeacherClassesPage() {
  return (
    <PortalShell
      role="teacher"
      userName="Mr. Daniel Okafor"
      userSubtitle="Mathematics Teacher"
      title="Classes"
      subtitle="Every class and subject you're assigned to teach."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CLASSES.map((c, i) => (
          <PanelCard key={i} title={c.name} icon={UsersIcon}>
            <p className="text-sm text-slate">{c.subject}</p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-navy">{c.students} students</span>
              <span className="text-slate">Room {c.room}</span>
            </div>
            <Link
              to="/teacher/attendance"
              className="mt-4 inline-flex text-sm font-semibold text-teal hover:underline"
            >
              View roster & attendance
            </Link>
          </PanelCard>
        ))}
      </div>
    </PortalShell>
  );
}
