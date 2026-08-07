import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { LockIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/icons";

export default function ChangePasswordPage() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<{ current?: string; next?: string; confirm?: string }>({});
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!current) nextErrors.current = "Enter your current password.";
    if (next.length < 8) nextErrors.next = "Use at least 8 characters.";
    if (confirm !== next) nextErrors.confirm = "Passwords don't match.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setDone(true);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-lightbg px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-edge bg-white p-8 shadow-panel">
        <IconBadge icon={LockIcon} tone="navy" size="lg" />

        {done ? (
          <div className="mt-5 text-center">
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
              <CheckCircleIcon className="h-5 w-5" />
            </span>
            <h1 className="mt-3 font-display text-xl font-semibold text-navy">Password changed</h1>
            <p className="mt-2 text-sm text-slate">Your password has been updated successfully.</p>
            <Link to="/" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
              Back to home <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <>
            <h1 className="mt-5 font-display text-xl font-semibold text-navy">Change password</h1>
            <p className="mt-1.5 text-sm text-slate">
              Update the password on your EduNexus account. You&apos;ll stay signed in on this device.
            </p>
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <TextField
                label="Current Password"
                icon={LockIcon}
                type="password"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                error={errors.current}
              />
              <TextField
                label="New Password"
                icon={LockIcon}
                type="password"
                value={next}
                onChange={(e) => setNext(e.target.value)}
                error={errors.next}
              />
              <TextField
                label="Confirm New Password"
                icon={LockIcon}
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                error={errors.confirm}
              />
              <Button type="submit" className="w-full">
                Update password
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
