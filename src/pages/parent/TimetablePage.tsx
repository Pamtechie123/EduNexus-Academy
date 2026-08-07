import { useState } from "react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { CalendarIcon } from "@/components/icons";

const CHILDREN = ["Tobi Adeyemi", "Ada Adeyemi"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const ROWS = [
  { time: "8:30", subjects: ["Mathematics", "English", "Science", "Mathematics", "Art"] },
  { time: "9:30", subjects: ["Science", "Mathematics", "English", "Geography", "Mathematics"] },
  { time: "10:45", subjects: ["English", "Geography", "Mathematics", "Science", "English"] },
];

export default function ParentTimetablePage() {
  const [child, setChild] = useState(CHILDREN[0]);

  return (
    <PortalShell
      role="parent"
      userName="Mrs. Folake Adeyemi"
      userSubtitle="Parent · 2 linked children"
      title="Timetable"
      subtitle="Weekly class schedule for your children."
    >
      <div className="mb-4 flex gap-2">
        {CHILDREN.map((c) => (
          <button
            key={c}
            onClick={() => setChild(c)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              child === c ? "border-transparent bg-navy text-white" : "border-edge bg-white text-slate hover:border-navy hover:text-navy"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <PanelCard title={`${child} · Weekly Timetable`} icon={CalendarIcon}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-edge text-xs uppercase tracking-wide text-slate">
                <th className="w-20 pb-2.5 pr-4 font-semibold">Time</th>
                {DAYS.map((d) => (
                  <th key={d} className="pb-2.5 pr-4 font-semibold">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.time} className="border-b border-lightbg last:border-0">
                  <td className="py-3 pr-4 text-xs font-semibold text-slate">{row.time}</td>
                  {row.subjects.map((s, i) => (
                    <td key={i} className="py-3 pr-4">
                      <span className="inline-flex rounded-lg bg-lightbg px-2.5 py-1.5 text-xs font-medium text-navy">
                        {s}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PanelCard>
    </PortalShell>
  );
}
