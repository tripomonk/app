import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Ban,
  BedDouble,
  CircleCheck,
  Clock,
  Globe,
  Handshake,
  Hotel,
  IndianRupee,
  ListOrdered,
  Users,
  Wallet,
  Receipt,
  ArrowRight,
} from 'lucide-react';
import type { Booking } from '../../data/types';
import { DEMO_TODAY, MOCK_SLOT_CAPACITY } from '../../data/mockDevDiwaliData';
import { useMockStore } from '../../state/MockStore';
import {
  dailyTrend,
  describeCommissionRule,
  paymentBreakdown,
  summarizeBookings,
  summarizeCommission,
} from '../../utils/mockCalculations';
import { formatDate, formatDateShort, formatINR, formatINRCompact } from '../../utils/format';
import { DashboardMetricCard } from '../../components/DashboardMetricCard';
import { ChartCard, ColumnChart, HBarChart } from '../../components/charts/Charts';
import { BookingTable } from '../../components/BookingTable';
import { DemoBanner } from '../../components/ui/primitives';
import { DD_PATHS } from '../../paths';
import { BookingDetailsModal } from './BookingDetailsModal';
import { CHANNEL_SERIES, PAYMENT_COLORS, PageHead, sortNewest } from './saShared';

export function SuperAdminDashboardPage() {
  const { bookings, hotels, rooms, adjustments, settings, dates, slots } = useMockStore();
  const [open, setOpen] = useState<Booking | null>(null);

  const m = useMemo(() => summarizeBookings(bookings), [bookings]);
  const commission = useMemo(() => summarizeCommission(bookings, adjustments, settings), [bookings, adjustments, settings]);
  const trend = useMemo(() => dailyTrend(bookings, '2026-10-01', DEMO_TODAY), [bookings]);
  const payments = useMemo(() => paymentBreakdown(bookings), [bookings]);

  const activeHotels = hotels.filter((h) => h.status === 'Active').length;
  const activeRooms = rooms.filter((r) => r.status === 'Active').length;

  const live = bookings.filter((b) => b.bookingStatus !== 'Cancelled');
  const valueBy = (ch: 'hotel' | 'direct') => live.filter((b) => b.channel === ch).reduce((s, b) => s + b.amounts.total, 0);

  const hotelPerf = hotels
    .map((h) => {
      const list = live.filter((b) => b.hotelId === h.id);
      return { key: h.id, label: h.name, value: list.reduce((s, b) => s + b.amounts.total, 0), count: list.length };
    })
    .filter((h) => h.count > 0 || hotels.find((x) => x.id === h.key)?.status === 'Active')
    .sort((a, b) => b.value - a.value);

  const upcoming = dates.flatMap((d) =>
    slots.map((s) => {
      const list = live.filter((b) => b.dateId === d.id && b.slotId === s.id);
      return { d, s, bookings: list.length, guests: list.reduce((n, b) => n + b.guests, 0) };
    }),
  ).filter((r) => r.bookings > 0);

  const recent = sortNewest(bookings).slice(0, 8);

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="Dashboard"
        description="Bookings, hotels, payments and commission across the hotel-partner and Tripomonk Direct channels."
        actions={
          <Link to={DD_PATHS.admin.bookings} className="dd-btn dd-btn--secondary">
            View all bookings <ArrowRight />
          </Link>
        }
      />
      <DemoBanner>
        <strong>Demonstration data.</strong> Sample bookings created 1–17 Oct 2026 plus any demo bookings made in this session. Figures are
        not live and nothing here is saved.
      </DemoBanner>

      <div className="dd-metrics dd-sa-metrics">
        <DashboardMetricCard accent icon={<ListOrdered />} label="Total bookings" value={m.bookings.toLocaleString('en-IN')} sub={`${m.cancellations} cancelled`} />
        <DashboardMetricCard icon={<Users />} label="Guests" value={m.guests.toLocaleString('en-IN')} sub="Excludes cancelled bookings" />
        <DashboardMetricCard icon={<Hotel />} label="Participating hotels" value={`${activeHotels} / ${hotels.length}`} sub="Active / total partners" />
        <DashboardMetricCard icon={<BedDouble />} label="Rooms" value={activeRooms} sub={`${rooms.filter((r) => r.available && r.status === 'Active').length} marked available`} />
        <DashboardMetricCard icon={<CircleCheck />} label="Paid bookings" value={m.paidCount} sub={`${Math.round((m.paidCount / Math.max(1, m.bookings)) * 100)}% of all bookings`} />
        <DashboardMetricCard icon={<Clock />} label="Pending payments" value={m.pendingCount} sub={`${formatINR(m.pendingValue)} awaiting`} />
        <DashboardMetricCard icon={<Ban />} label="Cancellations" value={m.cancellations} sub={`${m.refunds} refunded · ${formatINR(m.refundValue)}`} />
        <DashboardMetricCard icon={<IndianRupee />} label="Booking value" value={formatINRCompact(m.bookingValue)} sub={formatINR(m.bookingValue)} />
        <DashboardMetricCard icon={<Receipt />} label="Collected payments" value={formatINRCompact(m.collected)} sub={formatINR(m.collected)} />
        <DashboardMetricCard icon={<Wallet />} label="Hotel commission" value={formatINR(commission.earned)} sub={`Demo rule: ${describeCommissionRule(settings)}`} />
        <DashboardMetricCard icon={<Globe />} label="Direct bookings" value={m.direct} sub={`${formatINR(valueBy('direct'))} value`} />
        <DashboardMetricCard icon={<Handshake />} label="Hotel-partner bookings" value={m.hotel} sub={`${formatINR(valueBy('hotel'))} value`} />
      </div>

      <div className="dd-grid-main-side">
        <ChartCard
          title="Daily bookings by channel"
          subtitle="Bookings created per day, 1–17 Oct 2026"
          legend={CHANNEL_SERIES}
          table={{
            columns: ['Date', 'Hotel partner', 'Tripomonk Direct', 'Total'],
            rows: trend.map((t) => [formatDateShort(t.date), t.hotel, t.direct, t.total]),
            numeric: [1, 2, 3],
          }}
        >
          <ColumnChart
            ariaLabel="Daily bookings stacked by channel"
            data={trend.map((t) => ({ label: formatDateShort(t.date).split(' ')[0], title: formatDate(t.date), values: { hotel: t.hotel, direct: t.direct } }))}
            series={CHANNEL_SERIES}
          />
        </ChartCard>

        <ChartCard
          title="Channel comparison"
          subtitle="Hotel partner vs Tripomonk Direct"
          table={{
            columns: ['Channel', 'Bookings', 'Booking value'],
            rows: [
              ['Hotel partner', m.hotel, formatINR(valueBy('hotel'))],
              ['Tripomonk Direct', m.direct, formatINR(valueBy('direct'))],
            ],
            numeric: [1, 2],
          }}
        >
          <div className="dd-stack">
            <div className="dd-stack-sm">
              <div className="dd-small dd-muted">Bookings</div>
              <HBarChart
                data={CHANNEL_SERIES.map((s) => ({ key: s.key, label: s.label, value: s.key === 'hotel' ? m.hotel : m.direct, color: s.color }))}
              />
            </div>
            <div className="dd-stack-sm">
              <div className="dd-small dd-muted">Booking value (excl. cancelled)</div>
              <HBarChart
                format={formatINRCompact}
                data={CHANNEL_SERIES.map((s) => ({ key: s.key, label: s.label, value: valueBy(s.key as 'hotel' | 'direct'), color: s.color }))}
              />
            </div>
          </div>
        </ChartCard>
      </div>

      <div className="dd-grid-2">
        <ChartCard
          title="Hotel performance"
          subtitle="Booking value attributed to each partner hotel"
          table={{
            columns: ['Hotel', 'Bookings', 'Booking value'],
            rows: hotelPerf.map((h) => [h.label, h.count, formatINR(h.value)]),
            numeric: [1, 2],
          }}
        >
          <HBarChart format={formatINRCompact} data={hotelPerf.map((h) => ({ key: h.key, label: h.label, value: h.value, sub: `${h.count} bookings` }))} />
        </ChartCard>

        <ChartCard
          title="Payment breakdown"
          subtitle="Bookings by payment status"
          table={{
            columns: ['Status', 'Bookings', 'Amount'],
            rows: payments.map((p) => [p.status, p.count, formatINR(p.value)]),
            numeric: [1, 2],
          }}
        >
          <HBarChart
            data={payments.map((p) => ({
              key: p.status,
              label: `${p.status} · ${formatINRCompact(p.value)}`,
              value: p.count,
              color: PAYMENT_COLORS[p.status],
            }))}
          />
        </ChartCard>
      </div>

      <section className="dd-card">
        <div className="dd-card-head">
          <h2>Recent bookings</h2>
          <Link to={DD_PATHS.admin.bookings} className="dd-link-btn">
            All bookings <ArrowRight />
          </Link>
        </div>
        <div className="dd-card-body" style={{ padding: 0 }}>
          <div className="dd-sa-flush">
            <BookingTable
              caption="Most recent bookings"
              bookings={recent}
              columns={['id', 'customer', 'channel', 'hotel', 'event', 'amount', 'payment', 'status']}
              onOpen={setOpen}
            />
          </div>
        </div>
      </section>

      <section className="dd-card">
        <div className="dd-card-head">
          <h2>Upcoming events</h2>
          <span className="dd-small dd-muted">Guests booked per slot of {MOCK_SLOT_CAPACITY} seats (mock capacity) · excludes cancelled</span>
        </div>
        <div className="dd-card-body">
          <div className="dd-sa-events">
            {dates.map((d) => (
              <div key={d.id} className="dd-stack-sm">
                <div className="dd-row" style={{ gap: 8 }}>
                  <span className="dd-cell-title">{formatDate(d.date)}</span>
                  {d.highlight && <span className="dd-badge dd-badge--gold" style={{ height: 20, fontSize: 11 }}>Dev Deepawali</span>}
                </div>
                <div className="dd-list">
                  {upcoming
                    .filter((u) => u.d.id === d.id)
                    .map(({ s, bookings: n, guests }) => (
                      <div className="dd-list-item" key={s.id} style={{ flexDirection: 'column', alignItems: 'stretch', gap: 6, padding: '10px 0' }}>
                        <div className="dd-row-between">
                          <span style={{ fontWeight: 600, color: 'var(--dd-navy)' }}>{s.label}</span>
                          <span className="dd-small dd-muted dd-num">
                            {n} bookings · {guests}/{MOCK_SLOT_CAPACITY} seats
                          </span>
                        </div>
                        <div className="dd-progress" role="img" aria-label={`${guests} of ${MOCK_SLOT_CAPACITY} seats used`}>
                          <span style={{ width: `${Math.min(100, (guests / MOCK_SLOT_CAPACITY) * 100)}%` }} />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {open && <BookingDetailsModal booking={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
