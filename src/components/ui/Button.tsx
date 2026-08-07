import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-amber text-navy-dark hover:bg-amber-dark hover:text-white shadow-card",
  secondary: "bg-navy text-white hover:bg-navy-light shadow-card",
  ghost: "bg-transparent text-navy border border-edge hover:border-navy",
};

const shared =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 whitespace-nowrap";

export function Button({ children, variant = "primary", className = "", icon, to, onClick, type = "button" }: ButtonProps) {
  const classes = `${shared} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
