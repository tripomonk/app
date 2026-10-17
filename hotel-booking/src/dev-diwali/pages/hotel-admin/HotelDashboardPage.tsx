import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BedDouble, CalendarClock, ChevronRight, Clock, Download, IndianRupee, ListOrdered, Sailboat, Users, Wallet } from 'lucide-react';
import { useMockStore } from '../../state/MockStore';
import { DD_PATHS } from '../../paths';
import { DEMO_TODAY } from '../../data/mockDevDiwaliData';
import {
  dailyTrend,
  describeCommissionRule,
  groupByPeriod,
  paymentBreakdown,
  summarizeBookings,
  summarizeCommission,
} from '../../utils/mockCalculations';
import { formatDate, formatDateShort, formatINR } from '../../utils/format';
import { DashboardMetricCard } from '../../components/DashboardMetricCard';
import { CommissionCard } from '../../components/CommissionCard';
import { ChartCard, ColumnChart, HBarChart } from '../../components/charts/Charts';
import { ExportPreviewModal } from '../../components/ExportPreviewModal';
import { DemoBanner, EmptyState, StatusBadge } from '../../components/ui/primitives';
import { useHotelData } from './useHotelData';

const PAY_COLORS = { Paid: '#127a3b', Pending: '#e0a030', Failed: '#c94040', Refunded: '#8a97ad' } as const;

export function HotelDashboardPage() {
  const store = useMockStore();
  const { settings } = store;
  const navigate = useNavigate();
  const { admin, hotel, attributed, stays, adjustments } = useHotelData();
  const [exporting, setExporting] = useState(false);

  const m = useMemo(() => summarizeBookings(attributed), [attributed]);
  const c = useMemo(() => summarizeCommission(attributed, adjustments, settings), [attributed, adjustments, settings]);
  const trend = useMemo(() => dailyTrend(attributed, '2026-10-01', DEMO_TODAY), [attributed]);
  const pay = useMemo(() => paymentBreakdown(attributed), [attributed]);

  const upcoming = useMemo(() => {
    const live = [...attributed, ...stays].filter((b) => b.bookingStatus !== 'Cancelled');
    const groups = new Map<string, { dateId: string; slotId: string; bookings: number; guests: number; stays: number }>();
    for (const b of live) {
      const k = `${b.dateId}|${b.slotId}`;
      const g = groups.get(k) ?? { dateId: b.dateId, slotId: b.slotId, bookings: 0, guests: 0, stays: 0 };
      g.bookings += 1;
      g.guests += b.guests;
      if (b.roomId) g.stays += 1;
      groups.set(k, g);
    }
    return [...groups.values()].sort((a, b) => {
      const da = store.dateById(a.dateId)!.date + store.slotById(a.slotId)!.time;
      const db = store.dateById(b.dateId)!.date + store.slotById(b.slotId)!.time;
      return da.localeCompare(db);
    });
  }, [attributed, stays, store]);

  if (!admin || !hotel) return null;
  const upcomingCount = attributed.filter((b) => b.bookingStatus !== 'Cancelled').length;
  const firstDate = upcoming[0] ? store.dateById(upcoming[0].dateId) : undefined;

  const exportRows = groupByPeriod(attributed, 'daily', settings).map((r) => [r.label, r.bookings, r.guests, formatINR(r.value), formatINR(r.commission)]);

  return (
    <>
      <div className="dd-page-head">
        <div>
          <h1>Namaste, {admin.name.split(' ')[0]}</h1>
          <p>{hotel.name} · bookings made with code <span className="dd-code">{hotel.code}</span> · sample data as of {formatDate(DEMO_TODAY)}</p>
        </div>
        <button type="button" className="dd-btn dd-btn--secondary" onClick={() => setExporting(true)}>
          <Download /> Download report
        </button>
      </div>

      <DemoBanner>
        <strong>Demonstration data.</strong> These bookings, amounts and commission figures are sample records, not live data.
      </DemoBanner>

      <div className="dd-metrics dd-metrics--6">
        <DashboardMetricCard label="Total bookings" icon={<ListOrdered />} value={m.bookings} sub={`${m.cancellations} cancelled`} />
        <DashboardMetricCard label="Total guests" icon={<Users />} value={m.guests} sub="Excludes cancelled bookings" />
        <DashboardMetricCard label="Total booking value" icon={<IndianRupee />} value={formatINR(m.bookingValue)} sub={`${formatINR(m.collected)} collected`} />
        <DashboardMetricCard accent label="Your commission" icon={<Wallet />} value={formatINR(c.earned)} sub={describeCommissionRule(settings)} />
        <DashboardMetricCard label="Pending payments" icon={<Clock />} value={m.pendingCount} sub={`${formatINR(m.pendingValue)} awaiting payment`} />
        <DashboardMetricCard
          label="Upcoming bookings"
          icon={<CalendarClock />}
          value={upcomingCount}
          sub={firstDate ? `First rides ${formatDateShort(firstDate.date)}` : 'None yet'}
        />
      </div>

      <div className="dd-grid-main-side">
        <ChartCard
          title="Booking trend"
          subtitle="Bookings made with your code per day, 1–17 Oct"
          table={{ columns: ['Date', 'Bookings', 'Value'], rows: trend.map((d) => [formatDateShort(d.date), d.hotel, formatINR(d.value)]), numeric: [1, 2] }}
        >
          <ColumnChart
            ariaLabel="Daily bookings for your hotel"
            series={[{ key: 'hotel', label: 'Bookings', color: '#0065ff' }]}
            data={trend.map((d) => ({ label: formatDateShort(d.date).split(' ')[0], title: formatDate(d.date), values: { hotel: d.hotel } }))}
            height={210}
          />
        </ChartCard>
        <CommissionCard
          summary={c}
          rule={describeCommissionRule(settings)}
          footer={
            <Link to={DD_PATHS.hotel.commission} className="dd-link-btn">
              View commission report <ChevronRight />
            </Link>
          }
        />
      </div>

      <div className="dd-grid-3">
        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Recent bookings</h2>
            <Link to={DD_PATHS.hotel.bookings} className="dd-link-btn">All <ChevronRight /></Link>
          </div>
          <div className="dd-card-body" style={{ paddingBlock: 4 }}>
            {attributed.length === 0 ? (
              <EmptyState icon={<ListOrdered />} title="No bookings yet">Bookings made with your hotel code will appear here.</EmptyState>
            ) : (
              <div className="dd-list">
                {attributed.slice(0, 5).map((b) => (
                  <button key={b.id} type="button" className="dd-list-item dd-ha-listbtn" onClick={() => navigate(DD_PATHS.hotel.booking(b.id))}>
                    <span className="dd-avatar" aria-hidden="true">{b.customer.name.split(' ').map((p) => p[0]).join('')}</span>
                    <span className="dd-grow" style={{ textAlign: 'left' }}>
                      <span className="dd-cell-title" style={{ display: 'block' }}>{b.customer.name}</span>
                      <span className="dd-cell-sub dd-num">{b.id} · {formatDateShort(b.createdAt)}</span>
                    </span>
                    <span style={{ textAlign: 'right' }}>
                      <span className="dd-num" style={{ display: 'block', fontWeight: 600 }}>{formatINR(b.amounts.total)}</span>
                      <StatusBadge kind="payment" value={b.paymentStatus} />
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Upcoming boat rides</h2>
            <span className="dd-small dd-muted">Your guests</span>
          </div>
          <div className="dd-card-body" style={{ paddingBlock: 4 }}>
            <div className="dd-list">
              {upcoming.slice(0, 6).map((g) => {
                const d = store.dateById(g.dateId)!;
                const s = store.slotById(g.slotId)!;
                return (
                  <div key={`${g.dateId}${g.slotId}`} className="dd-list-item">
                    <span className="dd-ha-date" aria-hidden="true">
                      <strong>{formatDateShort(d.date).split(' ')[0]}</strong>
                      <span>{formatDateShort(d.date).split(' ')[1]}</span>
                    </span>
                    <span className="dd-grow">
                      <span className="dd-cell-title" style={{ display: 'block' }}><Sailboat size={14} aria-hidden="true" style={{ verticalAlign: '-2px' }} /> {s.label}</span>
                      <span className="dd-cell-sub">{d.label}</span>
                    </span>
                    <span className="dd-small dd-num" style={{ textAlign: 'right' }}>
                      {g.bookings} {g.bookings === 1 ? 'booking' : 'bookings'}<br />
                      <span className="dd-muted">{g.guests} guests{g.stays ? ` · ${g.stays} stay` : ''}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ChartCard
          title="Payment breakdown"
          subtitle="Bookings by payment status"
          table={{ columns: ['Status', 'Bookings', 'Value'], rows: pay.map((p) => [p.status, p.count, formatINR(p.value)]), numeric: [1, 2] }}
        >
          <HBarChart data={pay.map((p) => ({ key: p.status, label: p.status, value: p.count, color: PAY_COLORS[p.status], sub: formatINR(p.value) }))} />
          <div className="dd-sum-rows" style={{ marginTop: 6 }}>
            <div className="dd-sum-row"><span className="dd-muted">Collected</span><span>{formatINR(m.collected)}</span></div>
            <div className="dd-sum-row"><span className="dd-muted">Awaiting payment</span><span>{formatINR(m.pendingValue)}</span></div>
          </div>
        </ChartCard>
      </div>

      <section className="dd-card">
        <div className="dd-card-head"><h2>Quick actions</h2></div>
        <div className="dd-card-body dd-ha-quick">
          <Link to={DD_PATHS.hotel.bookings} className="dd-btn dd-btn--secondary"><ListOrdered /> View All Bookings</Link>
          <Link to={DD_PATHS.hotel.commission} className="dd-btn dd-btn--secondary"><Wallet /> View Commission Report</Link>
          <Link to={DD_PATHS.hotel.rooms} className="dd-btn dd-btn--secondary"><BedDouble /> View Rooms</Link>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={() => setExporting(true)}><Download /> Download Report</button>
        </div>
        {stays.length > 0 && (
          <div className="dd-card-foot dd-small dd-muted">
            Also staying with you: {stays.length} Tripomonk Direct {stays.length === 1 ? 'booking' : 'bookings'} (accommodation only, no commission).
          </div>
        )}
      </section>

      {exporting && (
        <ExportPreviewModal
          title={`${hotel.name} daily summary`}
          format="PDF"
          columns={['Date', 'Bookings', 'Guests', 'Booking value', 'Commission']}
          rows={exportRows}
          onClose={() => setExporting(false)}
        />
      )}
    </>
  );
}
