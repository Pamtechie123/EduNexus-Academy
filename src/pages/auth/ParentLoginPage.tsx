import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { UsersIcon } from "@/components/icons";

export default function ParentLoginPage() {
  return (
    <AuthLayout
      roleLabel="Parent Portal"
      icon={UsersIcon}
      excludeRoleKey="parent"
      features={[
        "See every linked child in one view",
        "Real-time grades & attendance",
        "Message teachers directly",
      ]}
    >
      <LoginForm roleLabel="Parent Portal" dashboardPath="/parent/dashboard" sampleEmail="f.adeyemi@edunexus.academy" />
    </AuthLayout>
  );
}
