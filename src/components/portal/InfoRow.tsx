export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-lightbg py-3 last:border-0">
      <span className="text-sm text-slate">{label}</span>
      <span className="text-sm font-medium text-navy">{value}</span>
    </div>
  );
}
