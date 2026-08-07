import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";
import { MailIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/icons";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(undefined);
    setSent(true);
  }

  return (
    <AuthLayout
      roleLabel="Password Recovery"
      icon={MailIcon}
      features={[
        "Works for every EduNexus portal",
        "Reset links expire after 30 minutes",
        "Your school administrator can help too",
      ]}
    >
      {sent ? (
        <div className="text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
            <CheckCircleIcon className="h-6 w-6" />
          </span>
          <h1 className="mt-4 font-display text-2xl font-semibold text-navy">Check your email</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            If an account exists for <span className="font-semibold text-navy">{email}</span>,
            we&apos;ve sent a link to reset your password.
          </p>
          <Link
            to="/reset-password"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
          >
            Continue to reset password (demo)
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <>
          <h1 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Forgot password?</h1>
          <p className="mt-1.5 text-sm text-slate">
            Enter the email on your account and we&apos;ll send you a reset link.
          </p>
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <TextField
              label="Email Address"
              icon={MailIcon}
              type="email"
              placeholder="you@edunexus.academy"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              autoComplete="email"
            />
            <Button type="submit" className="w-full" icon={<ArrowRightIcon className="h-4 w-4" />}>
              Send reset link
            </Button>
            <p className="text-center text-sm text-slate">
              Remembered it after all?{" "}
              <Link to="/login/student" className="font-semibold text-teal hover:underline">
                Back to sign in
              </Link>
            </p>
          </form>
        </>
      )}
    </AuthLayout>
  );
}
