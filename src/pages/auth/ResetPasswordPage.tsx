import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";
import { LockIcon, CheckCircleIcon, EyeIcon, EyeOffIcon, ArrowRightIcon } from "@/components/icons";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirm?: string }>({});
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (password.length < 8) next.password = "Use at least 8 characters.";
    if (confirm !== password) next.confirm = "Passwords don't match.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  return (
    <AuthLayout
      roleLabel="Reset Password"
      icon={LockIcon}
      features={["One-time secure link", "Choose a strong, unique password", "You'll be signed out everywhere else"]}
    >
      {done ? (
        <div className="text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
            <CheckCircleIcon className="h-6 w-6" />
          </span>
          <h1 className="mt-4 font-display text-2xl font-semibold text-navy">Password updated</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            Your password has been reset. You can now sign back in.
          </p>
          <Link
            to="/login/student"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
          >
            Back to sign in
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <>
          <h1 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Set a new password</h1>
          <p className="mt-1.5 text-sm text-slate">Choose a new password for your account.</p>
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <TextField
              label="New Password"
              icon={LockIcon}
              type={show ? "text" : "password"}
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              endAdornment={
                <button type="button" onClick={() => setShow((v) => !v)} className="text-slate hover:text-navy">
                  {show ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </button>
              }
            />
            <TextField
              label="Confirm New Password"
              icon={LockIcon}
              type={show ? "text" : "password"}
              placeholder="Re-enter password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              error={errors.confirm}
            />
            <Button type="submit" className="w-full" icon={<ArrowRightIcon className="h-4 w-4" />}>
              Update password
            </Button>
          </form>
        </>
      )}
    </AuthLayout>
  );
}
