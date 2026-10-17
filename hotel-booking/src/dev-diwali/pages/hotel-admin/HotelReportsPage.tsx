import { useMemo, useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { useMockStore } from '../../state/MockStore';
import type { Period } from '../../utils/mockCalculations';
import { groupByPeriod, paymentBreakdown, summarizeBookings, summarizeCommission } from '../../utils/mockCalculations';
import { formatINR } from '../../utils/format';
import { ChartCard, ColumnChart } from '../../components/charts/Charts';
import { ExportPreviewModal } from '../../components/ExportPreviewModal';
import { DemoBanner, Segmented, StatusBadge } from '../../components/ui/primitives';
import { useHotelData } from './useHotelData';

export function HotelReportsPage() {
  const { settings } = useMockStore();
  const { hotel, attributed, adjustments } = useHotelData();
  const [period, setPeriod] = useState<Period>('daily');
  const [exporting, setExporting] = useState<'CSV' | 'PDF' | null>(null);

  const rows = useMemo(() => groupByPeriod(attributed, period, settings), [attributed, period, settings]);
  const m = summarizeBookings(attributed);
  const c = summarizeCommission(attributed, adjustments, settings);
  const pay = paymentBreakdown(attributed);
  const chronological = [...rows].reverse();

  if (!hotel) return null;

  const columns = ['Period', 'Bookings', 'Guests', 'Booking value', 'Collected', 'Pending', 'Commission', 'Cancelled'];
  const exportRows = rows.map((r) => [r.label, r.bookings, r.guests, formatINR(r.value), formatINR(r.collected), formatINR(r.pending), formatINR(r.commission), r.cancellations]);

  return (
    <>
      <div className="dd-page-head">
        <div>
          <h1>Reports</h1>
          <p>Bookings, guests, payments and commission for {hotel.name}, grouped by when the booking was made.</p>
        </div>
        <div className="dd-row">
          <button type="button" className="dd-btn dd-btn--secondary" onClick={() => setExporting('CSV')}><Download /> Export CSV</button>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={() => setExporting('PDF')}><FileText /> Export PDF</button>
        </div>
      </div>
      <DemoBanner>Reports are generated from mock bookings in this prototype.</DemoBanner>

      <Segmented<Period>
        label="Report period"
        value={period}
        onChange={setPeriod}
        options={[
          { value: 'daily', label: 'Daily' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' },
        ]}
      />

      <ChartCard
        title={`Bookings by ${period === 'daily' ? 'day' : period === 'weekly' ? 'week' : 'month'}`}
        subtitle="Number of bookings made with your code"
        table={{ columns: ['Period', 'Bookings', 'Guests'], rows: chronological.map((r) => [r.label, r.bookings, r.guests]), numeric: [1, 2] }}
      >
        <ColumnChart
          ariaLabel="Bookings per period"
          series={[{ key: 'b', label: 'Bookings', color: '#0065ff' }]}
          data={chronological.map((r) => ({ label: period === 'daily' ? r.label.split(' ')[0] : r.label, title: r.label, values: { b: r.bookings } }))}
          height={200}
        />
      </ChartCard>

      <div className="dd-table-wrap">
        <table className="dd-table">
          <caption className="dd-sr-only">Report by period</caption>
          <thead>
            <tr>
              {columns.map((c, i) => <th key={c} className={i > 0 ? 'dd-num' : undefined}>{c}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key}>
                <td className="dd-nowrap">{r.label}</td>
                <td className="dd-num">{r.bookings}</td>
                <td className="dd-num">{r.guests}</td>
                <td className="dd-num">{formatINR(r.value)}</td>
                <td className="dd-num">{formatINR(r.collected)}</td>
                <td className="dd-num">{formatINR(r.pending)}</td>
                <td className="dd-num">{formatINR(r.commission)}</td>
                <td className="dd-num">{r.cancellations}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td className="dd-num">{m.bookings}</td>
              <td className="dd-num">{m.guests}</td>
              <td className="dd-num">{formatINR(m.bookingValue)}</td>
              <td className="dd-num">{formatINR(m.collected)}</td>
              <td className="dd-num">{formatINR(m.pendingValue)}</td>
              <td className="dd-num">{formatINR(c.earned)}</td>
              <td className="dd-num">{m.cancellations}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="dd-grid-2">
        <section className="dd-card">
          <div className="dd-card-head"><h2>Payment summary</h2></div>
          <div className="dd-card-body dd-sum-rows">
            {pay.map((p) => (
              <div className="dd-sum-row" key={p.status}>
                <span className="dd-row" style={{ gap: 8 }}><StatusBadge kind="payment" value={p.status} /> {p.count} bookings</span>
                <span>{formatINR(p.value)}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="dd-card">
          <div className="dd-card-head"><h2>Commission summary</h2></div>
          <div className="dd-card-body dd-sum-rows">
            <div className="dd-sum-row"><span>Earned</span><span>{formatINR(c.earned)}</span></div>
            <div className="dd-sum-row"><span>Pending</span><span>{formatINR(c.pending)}</span></div>
            <div className="dd-sum-row"><span>Approved</span><span>{formatINR(c.approved)}</span></div>
            <div className="dd-sum-row"><span>Paid</span><span>{formatINR(c.paid)}</span></div>
            <div className="dd-sum-row"><span>Adjustments</span><span>{c.adjustments < 0 ? '−' : '+'}{formatINR(Math.abs(c.adjustments))}</span></div>
          </div>
        </section>
      </div>

      {exporting && (
        <ExportPreviewModal title={`${hotel.name} ${period} report`} format={exporting} columns={columns} rows={exportRows} onClose={() => setExporting(null)} />
      )}
    </>
  );
}
