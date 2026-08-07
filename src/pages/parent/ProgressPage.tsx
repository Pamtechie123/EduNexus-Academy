import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { ProgressBar } from "@/components/portal/ProgressBar";
import { BarChartIcon } from "@/components/icons";

const CHILDREN = [
  {
    name: "Tobi Adeyemi",
    grade: "Grade 6",
    subjects: [
      { label: "Mathematics", pct: 0.86 },
      { label: "Science", pct: 0.81 },
      { label: "English", pct: 0.9 },
    ],
  },
  {
    name: "Ada Adeyemi",
    grade: "Grade 9",
    subjects: [
      { label: "Mathematics", pct: 0.88 },
      { label: "Biology", pct: 0.93 },
      { label: "Literature", pct: 0.95 },
    ],
  },
];

export default function ParentProgressPage() {
  return (
    <PortalShell
      role="parent"
      userName="Mrs. Folake Adeyemi"
      userSubtitle="Parent · 2 linked children"
      title="Child Progress"
      subtitle="Subject-by-subject performance for each of your children."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CHILDREN.map((child) => (
          <PanelCard key={child.name} title={`${child.name} · ${child.grade}`} icon={BarChartIcon}>
            <div className="divide-y divide-lightbg">
              {child.subjects.map((s) => (
                <ProgressBar key={s.label} label={s.label} pct={s.pct} />
              ))}
            </div>
          </PanelCard>
        ))}
      </div>
    </PortalShell>
  );
}
