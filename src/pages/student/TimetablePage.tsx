import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { CalendarIcon } from "@/components/icons";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const PERIODS = [
  { time: "8:30", subjects: ["Mathematics", "Science", "Mathematics", "English Lit.", "Computer Sci."] },
  { time: "9:30", subjects: ["Science", "Mathematics", "World History", "Mathematics", "English Lit."] },
  { time: "10:45", subjects: ["English Lit.", "World History", "Science", "Computer Sci.", "Mathematics"] },
  { time: "12:15", subjects: ["Computer Sci.", "English Lit.", "Mathematics", "Science", "World History"] },
];

export default function StudentTimetablePage() {
  return (
    <PortalShell
      role="student"
      userName="Amara Chen"
      userSubtitle="Grade 10 · Student"
      title="Timetable"
      subtitle="Your weekly class schedule."
    >
      <PanelCard title="Grade 10 – A · Weekly Timetable" icon={CalendarIcon}>
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
              {PERIODS.map((row) => (
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
