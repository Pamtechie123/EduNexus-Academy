import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { ShieldCheckIcon } from "@/components/icons";

export default function AdminLoginPage() {
  return (
    <AuthLayout
      roleLabel="Administrator"
      icon={ShieldCheckIcon}
      excludeRoleKey="admin"
      features={[
        "Full system & user management",
        "School-wide academic setup",
        "Reports across every portal",
      ]}
    >
      <LoginForm roleLabel="Administrator" dashboardPath="/admin/dashboard" sampleEmail="g.adeyemi@edunexus.academy" />
    </AuthLayout>
  );
}
