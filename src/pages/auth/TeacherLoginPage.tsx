import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { ClipboardListIcon } from "@/components/icons";

export default function TeacherLoginPage() {
  return (
    <AuthLayout
      roleLabel="Teacher Portal"
      icon={ClipboardListIcon}
      excludeRoleKey="teacher"
      features={[
        "Manage classes & materials",
        "Grade assignments faster",
        "Message students & parents",
      ]}
    >
      <LoginForm roleLabel="Teacher Portal" dashboardPath="/teacher/dashboard" sampleEmail="d.okafor@edunexus.academy" />
    </AuthLayout>
  );
}
