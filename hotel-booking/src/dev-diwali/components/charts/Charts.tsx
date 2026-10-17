/**
 * Lightweight, dependency-free charts for the Dev Deepawali dashboards.
 * Marks follow one spec: ≤24px columns with 4px rounded data-ends, 2px surface
 * gaps between stacked segments, hairline gridlines, text in ink tokens only,
 * hover tooltips, and a table view via <ChartCard>.
 */
import { useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ChartColumn, Table2 } from 'lucide-react';

/* ---------------- helpers ---------------- */

function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setWidth(el.clientWidth);
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, width] as const;
}

function niceTicks(max: number, count = 4): number[] {
  if (max <= 0) return [0, 1];
  const raw = max / count;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  const step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10) * mag;
  const ticks: number[] = [];
  for (let v = 0; v <= max + step * 0.001; v += step) ticks.push(Math.round(v * 100) / 100);
  if (ticks[ticks.length - 1] < max) ticks.push(ticks[ticks.length - 1] + step);
  return ticks;
}

export interface Series {
  key: string;
  label: string;
  color: string;
}

/* ---------------- Legend ---------------- */

export function Legend({ series }: { series: Series[] }) {
  return (
    <div className="dd-chart-legend">
      {series.map((s) => (
        <span key={s.key}>
          <i className="dd-swatch" style={{ background: s.color }} aria-hidden="true" />
          {s.label}
        </span>
      ))}
    </div>
  );
}

/* ---------------- Column chart (optionally stacked) ---------------- */

export interface ColumnDatum {
  label: string;
  /** Longer label for the tooltip */
  title?: string;
  values: Record<string, number>;
}

export function ColumnChart({
  data,
  series,
  height = 220,
  format = (n: number) => n.toLocaleString('en-IN'),
  tickFormat,
  ariaLabel,
}: {
  data: ColumnDatum[];
  series: Series[];
  height?: number;
  format?: (n: number) => string;
  tickFormat?: (n: number) => string;
  ariaLabel: string;
}) {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  const pad = { l: 40, r: 6, t: 12, b: 26 };
  const innerW = Math.max(0, width - pad.l - pad.r);
  const innerH = height - pad.t - pad.b;
  const totals = data.map((d) => series.reduce((s, ser) => s + (d.values[ser.key] || 0), 0));
  const ticks = niceTicks(Math.max(1, ...totals));
  const max = ticks[ticks.length - 1];
  const band = data.length ? innerW / data.length : 0;
  const colW = Math.max(4, Math.min(24, band * 0.62));
  const y = (v: number) => pad.t + innerH - (v / max) * innerH;
  const labelEvery = band < 22 ? 3 : band < 34 ? 2 : 1;
  const tf = tickFormat ?? format;

  return (
    <div className="dd-chart" ref={ref} onMouseLeave={() => setHover(null)}>
      {width > 0 && (
        <svg width={width} height={height} role="img" aria-label={ariaLabel}>
          {ticks.map((t) => (
            <g key={t}>
              <line x1={pad.l} x2={width - pad.r} y1={y(t)} y2={y(t)} stroke={t === 0 ? '#c9d3e2' : '#edf1f7'} strokeWidth={1} />
              <text x={pad.l - 8} y={y(t)} dy="0.32em" textAnchor="end" fontSize={11.5} fill="#7d8ca5" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {tf(t)}
              </text>
            </g>
          ))}
          {data.map((d, i) => {
            const cx = pad.l + band * i + band / 2;
            let acc = 0;
            const visible = series.filter((s) => (d.values[s.key] || 0) > 0);
            return (
              <g key={i}>
                {visible.map((s, si) => {
                  const v = d.values[s.key] || 0;
                  const y0 = y(acc);
                  acc += v;
                  const y1 = y(acc);
                  const isTop = si === visible.length - 1;
                  const gap = si > 0 ? 2 : 0;
                  const h = Math.max(0, y0 - y1 - gap);
                  const x0 = cx - colW / 2;
                  const rTop = isTop ? Math.min(4, h) : 0;
                  const top = y1;
                  const path = `M${x0} ${top + h} V${top + rTop} Q${x0} ${top} ${x0 + rTop} ${top} H${x0 + colW - rTop} Q${x0 + colW} ${top} ${x0 + colW} ${top + rTop} V${top + h} Z`;
                  return <path key={s.key} d={path} fill={s.color} opacity={hover === null || hover === i ? 1 : 0.45} />;
                })}
                {i % labelEvery === 0 && (
                  <text x={cx} y={height - 8} textAnchor="middle" fontSize={11.5} fill="#7d8ca5">
                    {d.label}
                  </text>
                )}
                <rect
                  x={pad.l + band * i}
                  y={pad.t}
                  width={band}
                  height={innerH}
                  fill="transparent"
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  tabIndex={0}
                  aria-label={`${d.title ?? d.label}: ${series.map((s) => `${s.label} ${format(d.values[s.key] || 0)}`).join(', ')}`}
                />
              </g>
            );
          })}
        </svg>
      )}
      {hover !== null && width > 0 && (
        <div
          className="dd-chart-tip"
          style={{
            left: Math.min(Math.max(pad.l + band * hover + band / 2, 80), width - 80),
            top: y(totals[hover]),
          }}
        >
          <strong>{data[hover].title ?? data[hover].label}</strong>
          {series.map((s) => (
            <div className="dd-tip-row" key={s.key}>
              <span>
                <i className="dd-swatch" style={{ background: s.color }} />
                {s.label}
              </span>
              <span>{format(data[hover].values[s.key] || 0)}</span>
            </div>
          ))}
          {series.length > 1 && (
            <div className="dd-tip-row">
              <span>Total</span>
              <span>{format(totals[hover])}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------------- Horizontal bars (ranking / breakdown) ---------------- */

export interface HBarDatum {
  label: ReactNode;
  value: number;
  color?: string;
  sub?: string;
  key: string;
}

export function HBarChart({
  data,
  format = (n: number) => n.toLocaleString('en-IN'),
  color = 'var(--dd-blue)',
  max,
}: {
  data: HBarDatum[];
  format?: (n: number) => string;
  color?: string;
  max?: number;
}) {
  const top = max ?? Math.max(1, ...data.map((d) => d.value));
  return (
    <div className="dd-hbars" role="list">
      {data.map((d) => (
        <div className="dd-hbar" role="listitem" key={d.key} title={d.sub}>
          <span className="dd-hbar-label">{d.label}</span>
          <span className="dd-hbar-track" aria-hidden="true">
            <span className="dd-hbar-fill" style={{ width: `${(d.value / top) * 100}%`, background: d.color ?? color }} />
          </span>
          <span className="dd-hbar-value">{format(d.value)}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Card wrapper with Chart / Table toggle ---------------- */

export function ChartCard({
  title,
  subtitle,
  legend,
  actions,
  table,
  children,
}: {
  title: string;
  subtitle?: ReactNode;
  legend?: Series[];
  actions?: ReactNode;
  table?: { columns: string[]; rows: (string | number)[][]; numeric?: number[] };
  children: ReactNode;
}) {
  const [view, setView] = useState<'chart' | 'table'>('chart');
  return (
    <section className="dd-card">
      <div className="dd-card-head">
        <div className="dd-stack-sm" style={{ gap: 2 }}>
          <h2>{title}</h2>
          {subtitle && <span className="dd-small dd-muted">{subtitle}</span>}
        </div>
        <div className="dd-row" style={{ gap: 8 }}>
          {actions}
          {table && (
            <div className="dd-seg" role="group" aria-label={`${title} view`}>
              <button type="button" aria-pressed={view === 'chart'} onClick={() => setView('chart')} title="Chart view">
                <ChartColumn size={15} aria-hidden="true" />
                <span className="dd-sr-only">Chart</span>
              </button>
              <button type="button" aria-pressed={view === 'table'} onClick={() => setView('table')} title="Table view">
                <Table2 size={15} aria-hidden="true" />
                <span className="dd-sr-only">Table</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="dd-card-body dd-stack" style={{ gap: 14 }}>
        {legend && legend.length > 1 && view === 'chart' && <Legend series={legend} />}
        {view === 'chart' || !table ? (
          children
        ) : (
          <div className="dd-table-wrap" style={{ maxHeight: 260, overflowY: 'auto' }}>
            <table className="dd-table">
              <thead>
                <tr>
                  {table.columns.map((c, i) => (
                    <th key={c} className={table.numeric?.includes(i) ? 'dd-num' : undefined}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((cell, j) => (
                      <td key={j} className={table.numeric?.includes(j) ? 'dd-num' : undefined}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
