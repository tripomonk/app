import type { ReactNode } from 'react';
import type { CommissionSummary } from '../utils/mockCalculations';
import { formatINR } from '../utils/format';
import { DemoTag } from './ui/primitives';

const PARTS = [
  { key: 'paid', label: 'Paid out', color: '#127a3b' },
  { key: 'approved', label: 'Approved', color: '#5b3fc9' },
  { key: 'pending', label: 'Pending', color: '#e0a030' },
] as const;

/** Commission summary: earned, with paid / approved / pending split. */
export function CommissionCard({
  summary,
  rule,
  title = 'Commission summary',
  footer,
}: {
  summary: CommissionSummary;
  rule: string;
  title?: string;
  footer?: ReactNode;
}) {
  const total = Math.max(1, summary.paid + summary.approved + summary.pending);
  return (
    <section className="dd-card">
      <div className="dd-card-head">
        <h2>{title}</h2>
        <DemoTag>Demo rule</DemoTag>
      </div>
      <div className="dd-card-body dd-stack">
        <div>
          <div className="dd-small dd-muted">Commission earned</div>
          <div className="dd-metric-value" style={{ fontSize: 28 }}>{formatINR(summary.earned)}</div>
          <div className="dd-small dd-muted">
            on {formatINR(summary.eligibleValue)} eligible value · {rule}
          </div>
        </div>
        <div className="dd-meter" role="img" aria-label={`Paid ${formatINR(summary.paid)}, approved ${formatINR(summary.approved)}, pending ${formatINR(summary.pending)}`}>
          {PARTS.map((p) =>
            summary[p.key] > 0 ? (
              <span key={p.key} style={{ width: `${(summary[p.key] / total) * 100}%`, background: p.color }} />
            ) : null,
          )}
        </div>
        <div className="dd-sum-rows">
          {PARTS.map((p) => (
            <div className="dd-sum-row" key={p.key}>
              <span className="dd-row" style={{ gap: 8 }}>
                <i className="dd-swatch" style={{ background: p.color }} aria-hidden="true" />
                {p.label}
              </span>
              <span>{formatINR(summary[p.key])}</span>
            </div>
          ))}
          <div className="dd-sum-row">
            <span>Adjustments</span>
            <span>{summary.adjustments >= 0 ? '+' : '−'}{formatINR(Math.abs(summary.adjustments))}</span>
          </div>
          <div className="dd-sum-total">
            <span>Outstanding (approved + adjustments)</span>
            <span>{formatINR(summary.outstanding)}</span>
          </div>
        </div>
        {footer}
      </div>
    </section>
  );
}
