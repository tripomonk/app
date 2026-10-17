import { useMemo, useState } from 'react';
import { SearchX } from 'lucide-react';
import type { Booking, BookingStatus, Channel, PaymentStatus } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { summarizeBookings } from '../../utils/mockCalculations';
import { formatINR } from '../../utils/format';
import { BookingTable } from '../../components/BookingTable';
import { FilterBar, SearchFilter, SelectFilter } from '../../components/FilterBar';
import { EmptyState, Pagination, paginate } from '../../components/ui/primitives';
import { BookingDetailsModal } from './BookingDetailsModal';
import {
  BOOKING_FILTER,
  CHANNEL_FILTER,
  ExportButtons,
  PAYMENT_FILTER,
  PageHead,
  matchesSearch,
  sortNewest,
  useBookingExport,
  useDateOptions,
  useHotelOptions,
} from './saShared';

const PAGE_SIZE = 12;

export function AllBookingsPage() {
  const { bookings } = useMockStore();
  const dateOptions = useDateOptions();
  const hotelOptions = useHotelOptions(true, 'All hotels');
  const buildExport = useBookingExport();

  const [q, setQ] = useState('');
  const [date, setDate] = useState('all');
  const [hotel, setHotel] = useState('all');
  const [channel, setChannel] = useState<'all' | Channel>('all');
  const [payment, setPayment] = useState<'all' | PaymentStatus>('all');
  const [status, setStatus] = useState<'all' | BookingStatus>('all');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<Booking | null>(null);

  const reset = () => {
    setQ(''); setDate('all'); setHotel('all'); setChannel('all'); setPayment('all'); setStatus('all'); setPage(1);
  };
  const withReset = <T,>(fn: (v: T) => void) => (v: T) => {
    fn(v);
    setPage(1);
  };

  const filtered = useMemo(
    () =>
      sortNewest(
        bookings.filter(
          (b) =>
            matchesSearch(b, q) &&
            (date === 'all' || b.dateId === date) &&
            (hotel === 'all' || b.hotelId === hotel) &&
            (channel === 'all' || b.channel === channel) &&
            (payment === 'all' || b.paymentStatus === payment) &&
            (status === 'all' || b.bookingStatus === status),
        ),
      ),
    [bookings, q, date, hotel, channel, payment, status],
  );
  const m = summarizeBookings(filtered);
  const active = !!q || date !== 'all' || hotel !== 'all' || channel !== 'all' || payment !== 'all' || status !== 'all';

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="All Bookings"
        description="Every Dev Deepawali booking across both channels. Hotel filter matches the attributed hotel only."
        actions={<ExportButtons title="All bookings" build={() => buildExport(filtered)} />}
      />

      <FilterBar onReset={reset} active={active}>
        <SearchFilter id="sa-all-q" value={q} onChange={withReset(setQ)} placeholder="Booking ID, customer name, email or phone" />
        <SelectFilter id="sa-all-date" label="Event date" value={date} onChange={withReset(setDate)} options={dateOptions} />
        <SelectFilter id="sa-all-hotel" label="Hotel" value={hotel} onChange={withReset(setHotel)} options={hotelOptions} />
        <SelectFilter id="sa-all-channel" label="Channel" value={channel} onChange={withReset(setChannel)} options={CHANNEL_FILTER} />
        <SelectFilter id="sa-all-payment" label="Payment" value={payment} onChange={withReset(setPayment)} options={PAYMENT_FILTER} />
        <SelectFilter id="sa-all-status" label="Booking status" value={status} onChange={withReset(setStatus)} options={BOOKING_FILTER} />
      </FilterBar>

      <div className="dd-sa-summary dd-num" aria-live="polite">
        <span><strong>{m.bookings}</strong> bookings</span>
        <span><strong>{m.guests}</strong> guests</span>
        <span><strong>{formatINR(m.bookingValue)}</strong> booking value</span>
        <span><strong>{formatINR(m.collected)}</strong> collected</span>
        <span className="dd-muted">Sample data</span>
      </div>

      <BookingTable
        caption="All bookings"
        bookings={paginate(filtered, page, PAGE_SIZE)}
        columns={['id', 'customer', 'channel', 'hotel', 'room', 'package', 'event', 'guests', 'amount', 'payment', 'status', 'commission', 'action']}
        onOpen={setOpen}
        empty={
          <EmptyState
            icon={<SearchX />}
            title="No bookings match these filters"
            action={<button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={reset}>Reset filters</button>}
          >
            Try a different date, channel or status.
          </EmptyState>
        }
      />
      {filtered.length > 0 && <Pagination page={page} pageSize={PAGE_SIZE} total={filtered.length} onPage={setPage} />}

      {open && <BookingDetailsModal booking={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
