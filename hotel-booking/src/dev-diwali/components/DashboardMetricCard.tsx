import type { ReactNode } from 'react';

export function DashboardMetricCard({
  label,
  value,
  sub,
  icon,
  accent = false,
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={`dd-metric ${accent ? 'dd-metric--accent' : ''}`}>
      <span className="dd-metric-label">
        {icon}
        {label}
      </span>
      <span className="dd-metric-value">{value}</span>
      {sub && <span className="dd-metric-sub">{sub}</span>}
    </div>
  );
}
