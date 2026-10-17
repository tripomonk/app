import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, CircleCheck, Clock, Download, FileText, IndianRupee, Lock, Scale, SearchX, Wallet } from 'lucide-react';
import type { CommissionStatus } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { MOCK_PAYOUT_DATE } from '../../data/mockDevDiwaliData';
import { DD_PATHS } from '../../paths';
import { commissionBase, commissionFor, derivePayouts, describeCommissionRule, summarizeCommission } from '../../utils/mockCalculations';
import { formatDate, formatDateTime, formatINR } from '../../utils/format';
import { DashboardMetricCard } from '../../components/DashboardMetricCard';
import { ExportPreviewModal } from '../../components/ExportPreviewModal';
import { SelectFilter } from '../../components/FilterBar';
import { DemoBanner, EmptyState, Pagination, Segmented, StatusBadge, paginate } from '../../components/ui/primitives';
import { useHotelData } from './useHotelData';

type Range = 'all' | 'w1' | 'w2' | 'w3';
const RANGES: Record<Range, [string, string] | null> = {
  all: null,
  w1: ['2026-10-01', '2026-10-07'],
  w2: ['2026-10-08', '2026-10-14'],
  w3: ['2026-10-15', '2026-10-31'],
};

export function HotelCommissionPage() {
  const { settings, hotels } = useMockStore();
  const { hotel, attributed, adjustments } = useHotelData();
  const [range, setRange] = useState<Range>('all');
  const [status, setStatus] = useState<'all' | CommissionStatus>('all');
  const [page, setPage] = useState(1);
  const [exporting, setExporting] = useState<'CSV' | 'PDF' | null>(null);

  const inRange = useMemo(() => {
    const r = RANGES[range];
    return attributed.filter((b) => !r || (b.createdAt.slice(0, 10) >= r[0] && b.createdAt.slice(0, 10) <= r[1]));
  }, [attributed, range]);
  const adjInRange = adjustments.filter((a) => {
    const r = RANGES[range];
    return !r || (a.date >= r[0] && a.date <= r[1]);
  });
  const summary = summarizeCommission(inRange, adjInRange, settings);
  const rows = inRange.filter((b) => status === 'all' || b.commissionStatus === status);
  const payouts = hotel ? derivePayouts(attributed, hotels, settings, MOCK_PAYOUT_DATE).filter((p) => p.hotelId === hotel.id) : [];

  if (!hotel) return null;

  return (
    <>
      <div className="dd-page-head">
        <div>
          <h1>Commission</h1>
          <p>Commission on bookings made with your code {hotel.code}. Direct Tripomonk bookings don't earn hotel commission.</p>
        </div>
        <div className="dd-row">
          <button type="button" className="dd-btn dd-btn--secondary" onClick={() => setExporting('CSV')}><Download /> CSV</button>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={() => setExporting('PDF')}><FileText /> PDF</button>
        </div>
      </div>

      <div className="dd-ha-rule">
        <Lock aria-hidden="true" />
        <div>
          <strong>Your commission rule: {describeCommissionRule(settings)}</strong>
          <span>Set by Tripomonk. This is a demo value, not a production rate, and it can't be changed from the partner portal.</span>
        </div>
      </div>

      <DemoBanner>Commission amounts, statuses and payouts below are mock data.</DemoBanner>

      <div className="dd-row-between">
        <Segmented<Range>
          label="Booking date range"
          value={range}
          onChange={(v) => { setRange(v); setPage(1); }}
          options={[
            { value: 'all', label: 'All time' },
            { value: 'w1', label: '1–7 Oct' },
            { value: 'w2', label: '8–14 Oct' },
            { value: 'w3', label: '15 Oct onward' },
          ]}
        />
      </div>

      <div className="dd-metrics dd-metrics--6">
        <DashboardMetricCard label="Eligible booking value" icon={<IndianRupee />} value={formatINR(summary.eligibleValue)} sub={`${summary.eligibleBookings} bookings, excl. cancelled & taxes`} />
        <DashboardMetricCard accent label="Commission earned" icon={<Wallet />} value={formatINR(summary.earned)} />
        <DashboardMetricCard label="Pending" icon={<Clock />} value={formatINR(summary.pending)} sub="Awaiting payment or approval" />
        <DashboardMetricCard label="Approved" icon={<BadgeCheck />} value={formatINR(summary.approved)} sub="Due in next payout" />
        <DashboardMetricCard label="Paid" icon={<CircleCheck />} value={formatINR(summary.paid)} />
        <DashboardMetricCard label="Adjustments" icon={<Scale />} value={`${summary.adjustments < 0 ? '−' : '+'}${formatINR(Math.abs(summary.adjustments))}`} sub={`${adjInRange.length} in this range`} />
      </div>

      <section className="dd-card">
        <div className="dd-card-head">
          <h2>Commission history</h2>
          <div style={{ minWidth: 180 }}>
            <SelectFilter
              id="hc-status"
              label="Status"
              value={status}
              onChange={(v) => { setStatus(v); setPage(1); }}
              options={[{ value: 'all', label: 'All statuses' }, ...(['Pending', 'Approved', 'Paid', 'Void'] as const).map((s) => ({ value: s, label: s }))]}
            />
          </div>
        </div>
        <div className="dd-card-body dd-stack">
          {rows.length === 0 ? (
            <EmptyState icon={<SearchX />} title="No commission records">Nothing matches this range and status.</EmptyState>
          ) : (
            <>
              <div className="dd-table-wrap">
                <table className="dd-table dd-table--stack">
                  <caption className="dd-sr-only">Commission by booking</caption>
                  <thead>
                    <tr>
                      <th>Booking</th>
                      <th>Booked on</th>
                      <th className="dd-num">Eligible value</th>
                      <th className="dd-num">Commission</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginate(rows, page, 10).map((b) => (
                      <tr key={b.id}>
                        <td className="dd-td-primary" data-label="Booking">
                          <Link to={DD_PATHS.hotel.booking(b.id)} className="dd-cell-title dd-num">{b.id}</Link>
                          <div className="dd-cell-sub">{b.customer.name}</div>
                        </td>
                        <td data-label="Booked on">{formatDateTime(b.createdAt)}</td>
                        <td data-label="Eligible value" className="dd-num">{b.bookingStatus === 'Cancelled' ? '—' : formatINR(commissionBase(b, settings))}</td>
                        <td data-label="Commission" className="dd-num">{formatINR(commissionFor(b, settings))}</td>
                        <td data-label="Status"><StatusBadge kind="commission" value={b.commissionStatus} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination page={page} pageSize={10} total={rows.length} onPage={setPage} />
            </>
          )}
        </div>
      </section>

      <div className="dd-grid-2">
        <section className="dd-card">
          <div className="dd-card-head"><h2>Payouts</h2></div>
          <div className="dd-card-body">
            {payouts.length === 0 ? (
              <p className="dd-muted">No payouts yet.</p>
            ) : (
              <div className="dd-list">
                {payouts.map((p) => (
                  <div key={p.id} className="dd-list-item">
                    <span className="dd-grow">
                      <span className="dd-cell-title" style={{ display: 'block' }}>{formatDate(p.date)}</span>
                      <span className="dd-cell-sub">{p.reference} · {p.bookings} bookings</span>
                    </span>
                    <strong className="dd-num">{formatINR(p.amount)}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="dd-card">
          <div className="dd-card-head"><h2>Adjustments</h2></div>
          <div className="dd-card-body">
            {adjInRange.length === 0 ? (
              <p className="dd-muted">No adjustments in this range.</p>
            ) : (
              <div className="dd-list">
                {adjInRange.map((a) => (
                  <div key={a.id} className="dd-list-item">
                    <span className="dd-grow">
                      <span className="dd-cell-title" style={{ display: 'block' }}>{a.reason}</span>
                      <span className="dd-cell-sub">{formatDate(a.date)}</span>
                    </span>
                    <strong className="dd-num" style={{ color: a.amount < 0 ? 'var(--dd-bad)' : 'var(--dd-good)' }}>
                      {a.amount < 0 ? '−' : '+'}{formatINR(Math.abs(a.amount))}
                    </strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {exporting && (
        <ExportPreviewModal
          title={`${hotel.name} commission`}
          format={exporting}
          columns={['Booking', 'Guest', 'Booked on', 'Eligible value', 'Commission', 'Status']}
          rows={rows.map((b) => [b.id, b.customer.name, formatDateTime(b.createdAt), formatINR(commissionBase(b, settings)), formatINR(commissionFor(b, settings)), b.commissionStatus])}
          onClose={() => setExporting(null)}
        />
      )}
    </>
  );
}
