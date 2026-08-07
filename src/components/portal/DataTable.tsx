import type { ReactNode } from "react";

export interface Column {
  key: string;
  label: string;
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  rows: Record<string, ReactNode>[];
}

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-edge text-xs uppercase tracking-wide text-slate">
            {columns.map((col) => (
              <th key={col.key} className={`pb-2.5 pr-4 font-semibold ${col.className ?? ""}`}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-lightbg last:border-0">
              {columns.map((col) => (
                <td key={col.key} className="py-3 pr-4 text-navy">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
