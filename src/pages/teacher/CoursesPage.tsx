import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { Badge } from "@/components/portal/Badge";
import { BookOpenIcon } from "@/components/icons";

const MATERIALS = [
  { title: "Unit 4 — Quadratic Equations (Notes)", type: "PDF", cls: "Grade 10 – A" },
  { title: "Geometry Proofs Walkthrough", type: "Video", cls: "Grade 11 – B" },
  { title: "Pre-Calc Formula Sheet", type: "PDF", cls: "Grade 9 – C" },
  { title: "Statistics — Probability Basics", type: "Notes", cls: "Grade 10 – A" },
  { title: "Calculus Limits Practice Set", type: "PDF", cls: "Grade 12 – A" },
];

const TYPE_TONE = { PDF: "amber", Video: "teal", Notes: "slate" } as const;

export default function TeacherCoursesPage() {
  return (
    <PortalShell
      role="teacher"
      userName="Mr. Daniel Okafor"
      userSubtitle="Mathematics Teacher"
      title="Course Materials"
      subtitle="Lesson notes, PDFs, and videos organized by class."
    >
      <PanelCard title="Uploaded Materials" icon={BookOpenIcon}>
        <div className="divide-y divide-lightbg">
          {MATERIALS.map((m) => (
            <div key={m.title} className="flex items-center justify-between gap-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-navy">{m.title}</p>
                <p className="text-xs text-slate">{m.cls}</p>
              </div>
              <Badge tone={TYPE_TONE[m.type as keyof typeof TYPE_TONE]}>{m.type}</Badge>
            </div>
          ))}
        </div>
      </PanelCard>
    </PortalShell>
  );
}
