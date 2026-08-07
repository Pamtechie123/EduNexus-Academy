import type { ComponentType, InputHTMLAttributes, ReactNode } from "react";
import type { IconProps } from "@/components/icons";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ComponentType<IconProps>;
  error?: string;
  endAdornment?: ReactNode;
}

export function TextField({ label, icon: Icon, error, endAdornment, id, ...rest }: TextFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
        <input
          id={fieldId}
          {...rest}
          className={`w-full rounded-lg border bg-lightbg py-2.5 pl-10 text-sm text-navy placeholder:text-slate/60 focus:border-teal focus:bg-white focus:outline-none ${
            endAdornment ? "pr-10" : "pr-3.5"
          } ${error ? "border-red-400" : "border-edge"}`}
        />
        {endAdornment && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{endAdornment}</div>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}
