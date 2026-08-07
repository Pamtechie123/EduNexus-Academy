import { PortalShell } from "@/components/portal/PortalShell";
import { PanelCard } from "@/components/portal/PanelCard";
import { ProgressBar } from "@/components/portal/ProgressBar";
import { BookOpenIcon as SubjectIcon } from "@/components/icons";

const COURSES = [
  { subject: "Mathematics", teacher: "Mr. Daniel Okafor", materials: 12, progress: 0.78 },
  { subject: "Science", teacher: "Mrs. Ijeoma Lawal", materials: 9, progress: 0.65 },
  { subject: "English Literature", teacher: "Mr. Bello", materials: 14, progress: 0.9 },
  { subject: "World History", teacher: "Ms. Patricia Nwosu", materials: 7, progress: 0.55 },
  { subject: "Computer Science", teacher: "Mr. Emeka Obi", materials: 11, progress: 0.82 },
];

export default function StudentCoursesPage() {
  return (
    <PortalShell
      role="student"
      userName="Amara Chen"
      userSubtitle="Grade 10 · Student"
      title="Courses"
      subtitle="Your enrolled subjects, teachers, and learning materials."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {COURSES.map((course) => (
          <PanelCard key={course.subject} title={course.subject} icon={SubjectIcon}>
            <p className="text-sm text-slate">Taught by {course.teacher}</p>
            <p className="mt-1 text-xs text-slate">{course.materials} learning materials available</p>
            <div className="mt-4">
              <ProgressBar label="Course progress" pct={course.progress} />
            </div>
          </PanelCard>
        ))}
      </div>
    </PortalShell>
  );
}
