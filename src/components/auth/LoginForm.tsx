import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, ArrowRightIcon, ShieldCheckIcon } from "@/components/icons";

interface LoginFormProps {
  roleLabel: string;
  dashboardPath: string;
  sampleEmail: string;
}

export function LoginForm({ roleLabel, dashboardPath, sampleEmail }: LoginFormProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: { email?: string; password?: string } = {};
    if (!email.trim()) nextErrors.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!password) nextErrors.password = "Enter your password.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // No backend is wired up yet (Phase 1 is frontend-only) — simulate the
    // sign-in and continue straight to the dashboard placeholder.
    window.setTimeout(() => {
      navigate(dashboardPath);
    }, 400);
  }

  return (
    <>
      <h1 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Welcome back</h1>
      <p className="mt-1.5 text-sm text-slate">Sign in to your {roleLabel.toLowerCase()} dashboard</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <TextField
          label="Email Address"
          icon={MailIcon}
          type="email"
          placeholder={sampleEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <TextField
          label="Password"
          icon={LockIcon}
          type={showPassword ? "text" : "password"}
          placeholder="••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          autoComplete="current-password"
          endAdornment={
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-slate hover:text-navy"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </button>
          }
        />

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 text-sm text-navy">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-edge text-teal focus:ring-teal"
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-sm font-semibold text-teal hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full" icon={<ArrowRightIcon className="h-4 w-4" />}>
          {submitting ? "Signing in…" : "Sign In"}
        </Button>

        <div className="flex items-center justify-center gap-2 border-t border-edge pt-4 text-xs text-slate">
          <ShieldCheckIcon className="h-3.5 w-3.5" />
          Protected by role-based authentication
        </div>
      </form>
    </>
  );
}
