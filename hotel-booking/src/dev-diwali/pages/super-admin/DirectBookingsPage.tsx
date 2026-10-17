import { useMemo, useState } from 'react';
import { BedDouble, Globe, IndianRupee, ListOrdered, SearchX, Users } from 'lucide-react';
import type { Booking, BookingStatus, PaymentStatus } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { summarizeBookings } from '../../utils/mockCalculations';
import { formatINR } from '../../utils/format';
import { BookingTable } from '../../components/BookingTable';
import { DashboardMetricCard } from '../../components/DashboardMetricCard';
import { FilterBar, SearchFilter, SelectFilter } from '../../components/FilterBar';
import { EmptyState, Pagination, paginate } from '../../components/ui/primitives';
import { BookingDetailsModal } from './BookingDetailsModal';
import {
  BOOKING_FILTER,
  ExportButtons,
  PAYMENT_FILTER,
  PageHead,
  matchesSearch,
  sortNewest,
  useBookingExport,
  useDateOptions,
} from './saShared';

const PAGE_SIZE = 12;

export function DirectBookingsPage() {
  const { bookings } = useMockStore();
  const dateOptions = useDateOptions();
  const buildExport = useBookingExport();
  const [q, setQ] = useState('');
  const [date, setDate] = useState('all');
  const [payment, setPayment] = useState<'all' | PaymentStatus>('all');
  const [status, setStatus] = useState<'all' | BookingStatus>('all');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<Booking | null>(null);

  const direct = useMemo(() => bookings.filter((b) => b.channel === 'direct'), [bookings]);
  const all = summarizeBookings(direct);
  const withStay = direct.filter((b) => b.roomId).length;

  const filtered = sortNewest(
    direct.filter(
      (b) =>
        matchesSearch(b, q) &&
        (date === 'all' || b.dateId === date) &&
        (payment === 'all' || b.paymentStatus === payment) &&
        (status === 'all' || b.bookingStatus === status),
    ),
  );
  const reset = () => { setQ(''); setDate('all'); setPayment('all'); setStatus('all'); setPage(1); };
  const withReset = <T,>(fn: (v: T) => void) => (v: T) => { fn(v); setPage(1); };

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="Direct Bookings"
        description="Bookings made through the Tripomonk Direct QR and direct marketing links."
        actions={<ExportButtons title="Direct bookings" build={() => buildExport(filtered)} />}
      />

      <div className="dd-sa-nocommission" role="note">
        <Globe aria-hidden="true" />
        <div>
          <strong>No Hotel Commission by Default</strong>
          <span>
            Direct bookings belong to Tripomonk. Picking a hotel stay inside a direct booking records accommodation only — it does not
            attribute the booking to that hotel or create commission.
          </span>
        </div>
      </div>

      <div className="dd-metrics">
        <DashboardMetricCard icon={<ListOrdered />} label="Direct bookings" value={all.bookings} sub={`${all.cancellations} cancelled`} />
        <DashboardMetricCard icon={<Users />} label="Guests" value={all.guests} />
        <DashboardMetricCard icon={<IndianRupee />} label="Booking value" value={formatINR(all.bookingValue)} sub={`${formatINR(all.collected)} collected`} />
        <DashboardMetricCard icon={<BedDouble />} label="With a hotel stay" value={withStay} sub="Stay recorded, no hotel attribution" />
      </div>

      <FilterBar onReset={reset} active={!!q || date !== 'all' || payment !== 'all' || status !== 'all'}>
        <SearchFilter id="sa-direct-q" value={q} onChange={withReset(setQ)} placeholder="Booking ID, customer name, email or phone" />
        <SelectFilter id="sa-direct-date" label="Event date" value={date} onChange={withReset(setDate)} options={dateOptions} />
        <SelectFilter id="sa-direct-payment" label="Payment" value={payment} onChange={withReset(setPayment)} options={PAYMENT_FILTER} />
        <SelectFilter id="sa-direct-status" label="Booking status" value={status} onChange={withReset(setStatus)} options={BOOKING_FILTER} />
      </FilterBar>

      <BookingTable
        caption="Direct bookings"
        bookings={paginate(filtered, page, PAGE_SIZE)}
        columns={['id', 'customer', 'package', 'event', 'guests', 'hotel', 'room', 'amount', 'payment', 'status', 'action']}
        onOpen={setOpen}
        empty={
          <EmptyState icon={<SearchX />} title="No direct bookings match these filters">
            Reset the filters to see all direct-channel records.
          </EmptyState>
        }
      />
      {filtered.length > 0 && <Pagination page={page} pageSize={PAGE_SIZE} total={filtered.length} onPage={setPage} />}

      {open && <BookingDetailsModal booking={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
