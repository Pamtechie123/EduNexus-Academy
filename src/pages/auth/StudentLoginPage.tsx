import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { GraduationCapIcon } from "@/components/icons";

export default function StudentLoginPage() {
  return (
    <AuthLayout
      roleLabel="Student Portal"
      icon={GraduationCapIcon}
      excludeRoleKey="student"
      features={[
        "Track assignments & grades",
        "View timetable & attendance",
        "Stay connected with teachers",
      ]}
    >
      <LoginForm roleLabel="Student Portal" dashboardPath="/student/dashboard" sampleEmail="amara.chen@edunexus.academy" />
    </AuthLayout>
  );
}
