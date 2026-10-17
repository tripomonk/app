import { useMemo, useState } from 'react';
import { Ban, Percent, RotateCcw, Undo2 } from 'lucide-react';
import type { Channel } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import {
  commissionFor,
  describeCommissionRule,
  groupByPeriod,
  summarizeBookings,
  summarizeCommission,
} from '../../utils/mockCalculations';
import type { Period } from '../../utils/mockCalculations';
import { formatINR, formatINRCompact } from '../../utils/format';
import { ChartCard, ColumnChart, HBarChart } from '../../components/charts/Charts';
import { CommissionCard } from '../../components/CommissionCard';
import { DashboardMetricCard } from '../../components/DashboardMetricCard';
import { FilterBar, SelectFilter } from '../../components/FilterBar';
import { DemoBanner, DemoTag, Segmented, StatusBadge } from '../../components/ui/primitives';
import { CHANNEL_FILTER, CHANNEL_SERIES, ExportButtons, PageHead, sortNewest, useHotelOptions } from './saShared';

export function ReportsAnalyticsPage() {
  const { bookings, hotels, adjustments, settings, hotelById } = useMockStore();
  const hotelOptions = useHotelOptions();
  const [period, setPeriod] = useState<Period>('daily');
  const [channel, setChannel] = useState<'all' | Channel>('all');
  const [hotel, setHotel] = useState('all');

  const filtered = useMemo(
    () => bookings.filter((b) => (channel === 'all' || b.channel === channel) && (hotel === 'all' || b.hotelId === hotel)),
    [bookings, channel, hotel],
  );
  const m = summarizeBookings(filtered);
  const rows = useMemo(() => groupByPeriod(filtered, period, settings), [filtered, period, settings]);
  const asc = [...rows].reverse();
  const commission = summarizeCommission(
    filtered,
    adjustments.filter((a) => hotel === 'all' || a.hotelId === hotel),
    settings,
  );

  const channelRows = (['hotel', 'direct'] as Channel[])
    .filter((c) => channel === 'all' || c === channel)
    .map((c) => {
      const list = filtered.filter((b) => b.channel === c);
      const s = summarizeBookings(list);
      return { c, s, commission: list.reduce((n, b) => n + commissionFor(b, settings), 0) };
    });

  const hotelRows = hotels
    .filter((h) => hotel === 'all' || h.id === hotel)
    .map((h) => {
      const list = filtered.filter((b) => b.hotelId === h.id);
      return { h, s: summarizeBookings(list), commission: list.reduce((n, b) => n + commissionFor(b, settings), 0) };
    })
    .filter((r) => r.s.bookings > 0 || r.h.status === 'Active')
    .sort((a, b) => b.s.bookingValue - a.s.bookingValue);

  const cancelled = sortNewest(filtered.filter((b) => b.bookingStatus === 'Cancelled'));
  const periodLabel = period === 'daily' ? 'Day' : period === 'weekly' ? 'Week' : 'Month';

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="Reports & Analytics"
        description="Bookings, channels, hotels, payments, commission and cancellations for the campaign."
        actions={
          <ExportButtons
            title={`${period} report`}
            build={() => ({
              columns: [periodLabel, 'Bookings', 'Guests', 'Booking value (₹)', 'Collected (₹)', 'Pending (₹)', 'Commission (₹)', 'Cancellations'],
              rows: rows.map((r) => [r.label, r.bookings, r.guests, r.value, r.collected, r.pending, r.commission, r.cancellations]),
            })}
          />
        }
      />
      <DemoBanner>
        <strong>Sample report.</strong> Built from mock bookings (1–17 Oct 2026). Production reports and exports will come from live data.
      </DemoBanner>

      <FilterBar onReset={() => { setChannel('all'); setHotel('all'); setPeriod('daily'); }} active={channel !== 'all' || hotel !== 'all' || period !== 'daily'}>
        <div className="dd-field">
          <span className="dd-label">Period</span>
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
        </div>
        <SelectFilter id="sa-rep-channel" label="Channel" value={channel} onChange={setChannel} options={CHANNEL_FILTER} />
        <SelectFilter id="sa-rep-hotel" label="Hotel" value={hotel} onChange={setHotel} options={hotelOptions} />
      </FilterBar>

      <div className="dd-metrics">
        <DashboardMetricCard accent label="Bookings" value={m.bookings} sub={`${m.guests} guests`} />
        <DashboardMetricCard label="Booking value" value={formatINRCompact(m.bookingValue)} sub={formatINR(m.bookingValue)} />
        <DashboardMetricCard label="Collected" value={formatINRCompact(m.collected)} sub={`${m.paidCount} paid bookings`} />
        <DashboardMetricCard label="Pending payments" value={formatINRCompact(m.pendingValue)} sub={`${m.pendingCount} bookings`} />
        <DashboardMetricCard label="Hotel commission" value={formatINR(commission.earned)} sub="Demo rule" />
        <DashboardMetricCard label="Cancellations" value={m.cancellations} sub={`${m.refunds} refunded`} />
      </div>

      <div className="dd-grid-main-side">
        <ChartCard
          title="Bookings & guests"
          subtitle={`${periodLabel}-wise, by booking date`}
          table={{
            columns: [periodLabel, 'Bookings', 'Guests'],
            rows: asc.map((r) => [r.label, r.bookings, r.guests]),
            numeric: [1, 2],
          }}
        >
          <ColumnChart
            ariaLabel={`Bookings per ${period} period`}
            data={asc.map((r) => ({
              label: period === 'daily' ? r.label.split(' ')[0] : r.label.replace(/ – .*/, ''),
              title: r.label,
              values: { bookings: r.bookings, guests: r.guests },
            }))}
            series={[{ key: 'bookings', label: 'Bookings', color: '#0065ff' }]}
          />
        </ChartCard>

        <ChartCard
          title="Payments"
          subtitle="Booking value, collected and pending (₹)"
          table={{
            columns: ['Measure', 'Amount'],
            rows: [
              ['Booking value (excl. cancelled)', formatINR(m.bookingValue)],
              ['Collected', formatINR(m.collected)],
              ['Pending / failed', formatINR(m.pendingValue)],
              ['Refunded', formatINR(m.refundValue)],
            ],
            numeric: [1],
          }}
        >
          <HBarChart
            format={formatINRCompact}
            data={[
              { key: 'value', label: 'Booking value', value: m.bookingValue, color: '#0065ff' },
              { key: 'collected', label: 'Collected', value: m.collected, color: '#0ca30c' },
              { key: 'pending', label: 'Pending / failed', value: m.pendingValue, color: '#e0a030' },
              { key: 'refunded', label: 'Refunded', value: m.refundValue, color: '#9aa6ba' },
            ]}
          />
        </ChartCard>
      </div>

      <section className="dd-card">
        <div className="dd-card-head">
          <h2>Channel comparison</h2>
          <span className="dd-small dd-muted">Hotel partner vs Tripomonk Direct</span>
        </div>
        <div className="dd-card-body dd-stack">
          <HBarChart
            format={formatINRCompact}
            data={channelRows.map((r) => {
              const s = CHANNEL_SERIES.find((x) => x.key === r.c)!;
              return { key: r.c, label: `${s.label} · value`, value: r.s.bookingValue, color: s.color };
            })}
          />
          <div className="dd-table-wrap">
            <table className="dd-table">
              <caption className="dd-sr-only">Channel comparison</caption>
              <thead>
                <tr>
                  <th scope="col">Channel</th>
                  <th scope="col" className="dd-num">Bookings</th>
                  <th scope="col" className="dd-num">Guests</th>
                  <th scope="col" className="dd-num">Booking value</th>
                  <th scope="col" className="dd-num">Collected</th>
                  <th scope="col" className="dd-num">Pending</th>
                  <th scope="col" className="dd-num">Hotel commission</th>
                  <th scope="col" className="dd-num">Cancelled</th>
                </tr>
              </thead>
              <tbody>
                {channelRows.map(({ c, s, commission: cm }) => (
                  <tr key={c}>
                    <td className="dd-cell-title">{c === 'hotel' ? 'Hotel partner' : 'Tripomonk Direct'}</td>
                    <td className="dd-num">{s.bookings}</td>
                    <td className="dd-num">{s.guests}</td>
                    <td className="dd-num">{formatINR(s.bookingValue)}</td>
                    <td className="dd-num">{formatINR(s.collected)}</td>
                    <td className="dd-num">{formatINR(s.pendingValue)}</td>
                    <td className="dd-num">{c === 'direct' ? <span className="dd-subtle">None by default</span> : formatINR(cm)}</td>
                    <td className="dd-num">{s.cancellations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="dd-grid-main-side">
        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Hotel performance</h2>
            <DemoTag>Mock data</DemoTag>
          </div>
          <div className="dd-card-body" style={{ padding: 0 }}>
            <div className="dd-sa-flush">
              <div className="dd-table-wrap">
                <table className="dd-table">
                  <caption className="dd-sr-only">Hotel performance</caption>
                  <thead>
                    <tr>
                      <th scope="col">Hotel</th>
                      <th scope="col" className="dd-num">Bookings</th>
                      <th scope="col" className="dd-num">Guests</th>
                      <th scope="col" className="dd-num">Booking value</th>
                      <th scope="col" className="dd-num">Collected</th>
                      <th scope="col" className="dd-num">Commission</th>
                      <th scope="col" className="dd-num">Cancelled</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotelRows.map(({ h, s, commission: cm }) => (
                      <tr key={h.id}>
                        <td>
                          <div className="dd-cell-title">{h.name}</div>
                          <div className="dd-cell-sub">{h.code}</div>
                        </td>
                        <td className="dd-num">{s.bookings}</td>
                        <td className="dd-num">{s.guests}</td>
                        <td className="dd-num">{formatINR(s.bookingValue)}</td>
                        <td className="dd-num">{formatINR(s.collected)}</td>
                        <td className="dd-num">{formatINR(cm)}</td>
                        <td className="dd-num">{s.cancellations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <CommissionCard summary={commission} rule={describeCommissionRule(settings)} title="Commissions" />
      </div>

      <section className="dd-card">
        <div className="dd-card-head">
          <h2>Cancellations & refunds</h2>
        </div>
        <div className="dd-card-body dd-stack">
          <div className="dd-metrics">
            <DashboardMetricCard icon={<Ban />} label="Cancellations" value={m.cancellations} />
            <DashboardMetricCard icon={<Percent />} label="Cancellation rate" value={`${Math.round((m.cancellations / Math.max(1, m.bookings)) * 100)}%`} />
            <DashboardMetricCard icon={<RotateCcw />} label="Refunds" value={m.refunds} />
            <DashboardMetricCard icon={<Undo2 />} label="Refunded value" value={formatINR(m.refundValue)} />
          </div>
          {cancelled.length > 0 ? (
            <div className="dd-table-wrap">
              <table className="dd-table">
                <caption className="dd-sr-only">Cancelled bookings</caption>
                <thead>
                  <tr>
                    <th scope="col">Booking</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Channel / hotel</th>
                    <th scope="col" className="dd-num">Amount</th>
                    <th scope="col">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {cancelled.map((b) => (
                    <tr key={b.id}>
                      <td className="dd-cell-title dd-nowrap dd-sa-tnum">{b.id}</td>
                      <td>{b.customer.name}</td>
                      <td>{b.channel === 'hotel' ? hotelById(b.hotelId)?.name : 'Tripomonk Direct'}</td>
                      <td className="dd-num">{formatINR(b.amounts.total)}</td>
                      <td><StatusBadge kind="payment" value={b.paymentStatus} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="dd-muted">No cancellations for these filters.</p>
          )}
        </div>
      </section>

      <section className="dd-card">
        <div className="dd-card-head">
          <h2>{periodLabel}-wise summary</h2>
          <span className="dd-small dd-muted">Newest first</span>
        </div>
        <div className="dd-card-body" style={{ padding: 0 }}>
          <div className="dd-sa-flush">
            <div className="dd-table-wrap">
              <table className="dd-table">
                <caption className="dd-sr-only">{periodLabel}-wise summary</caption>
                <thead>
                  <tr>
                    <th scope="col">{periodLabel}</th>
                    <th scope="col" className="dd-num">Bookings</th>
                    <th scope="col" className="dd-num">Guests</th>
                    <th scope="col" className="dd-num">Booking value</th>
                    <th scope="col" className="dd-num">Collected</th>
                    <th scope="col" className="dd-num">Pending</th>
                    <th scope="col" className="dd-num">Commission</th>
                    <th scope="col" className="dd-num">Cancelled</th>
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
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
