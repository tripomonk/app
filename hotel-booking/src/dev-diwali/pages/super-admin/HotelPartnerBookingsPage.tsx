import { useMemo, useState } from 'react';
import { SearchX } from 'lucide-react';
import type { Booking, CommissionStatus, PaymentStatus } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { commissionFor, describeCommissionRule } from '../../utils/mockCalculations';
import { formatINR } from '../../utils/format';
import { BookingTable } from '../../components/BookingTable';
import { HotelThumb } from '../../components/Thumbs';
import { FilterBar, SearchFilter, SelectFilter } from '../../components/FilterBar';
import { DemoTag, EmptyState, Pagination, paginate } from '../../components/ui/primitives';
import { BookingDetailsModal } from './BookingDetailsModal';
import { ExportButtons, PAYMENT_FILTER, PageHead, matchesSearch, sortNewest, useBookingExport, useDateOptions, useHotelOptions } from './saShared';

const PAGE_SIZE = 12;
const COMMISSION_FILTER: { value: 'all' | CommissionStatus; label: string }[] = [
  { value: 'all', label: 'All commission' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Paid', label: 'Paid' },
  { value: 'Void', label: 'Void (cancelled)' },
];

export function HotelPartnerBookingsPage() {
  const { bookings, hotels, settings } = useMockStore();
  const hotelOptions = useHotelOptions();
  const dateOptions = useDateOptions();
  const buildExport = useBookingExport();
  const [q, setQ] = useState('');
  const [hotel, setHotel] = useState('all');
  const [date, setDate] = useState('all');
  const [payment, setPayment] = useState<'all' | PaymentStatus>('all');
  const [commission, setCommission] = useState<'all' | CommissionStatus>('all');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<Booking | null>(null);

  const partner = useMemo(() => bookings.filter((b) => b.channel === 'hotel'), [bookings]);

  const perHotel = hotels
    .map((h) => {
      const list = partner.filter((b) => b.hotelId === h.id);
      const live = list.filter((b) => b.bookingStatus !== 'Cancelled');
      return {
        h,
        bookings: list.length,
        guests: live.reduce((s, b) => s + b.guests, 0),
        value: live.reduce((s, b) => s + b.amounts.total, 0),
        commission: list.reduce((s, b) => s + commissionFor(b, settings), 0),
      };
    })
    .filter((x) => x.bookings > 0 || x.h.status === 'Active');

  const filtered = sortNewest(
    partner.filter(
      (b) =>
        matchesSearch(b, q) &&
        (hotel === 'all' || b.hotelId === hotel) &&
        (date === 'all' || b.dateId === date) &&
        (payment === 'all' || b.paymentStatus === payment) &&
        (commission === 'all' || b.commissionStatus === commission),
    ),
  );
  const reset = () => { setQ(''); setHotel('all'); setDate('all'); setPayment('all'); setCommission('all'); setPage(1); };
  const withReset = <T,>(fn: (v: T) => void) => (v: T) => { fn(v); setPage(1); };

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="Hotel Partner Bookings"
        description={<>Bookings attributed to partner hotels through the hotel QR and printed code. Commission: {describeCommissionRule(settings)} <DemoTag>Demo rule</DemoTag></>}
        actions={<ExportButtons title="Hotel partner bookings" build={() => buildExport(filtered)} />}
      />

      <div className="dd-sa-hotelstrip" role="list" aria-label="Per-hotel summary">
        {perHotel.map(({ h, bookings: n, guests, value, commission: c }) => (
          <button
            key={h.id}
            type="button"
            role="listitem"
            className={`dd-sa-hotelchip ${hotel === h.id ? 'active' : ''}`}
            aria-pressed={hotel === h.id}
            onClick={() => { setHotel(hotel === h.id ? 'all' : h.id); setPage(1); }}
          >
            <span className="dd-row" style={{ gap: 8, flexWrap: 'nowrap' }}>
              <HotelThumb tint={h.tint} label={h.name} size={28} />
              <span className="dd-cell-title" style={{ fontSize: 13.5 }}>{h.name}</span>
            </span>
            <span className="dd-sa-hotelchip-stats dd-num">
              <span><strong>{n}</strong> bookings</span>
              <span><strong>{guests}</strong> guests</span>
            </span>
            <span className="dd-sa-hotelchip-stats dd-num">
              <span>{formatINR(value)}</span>
              <span className="dd-muted">Comm. {formatINR(c)}</span>
            </span>
          </button>
        ))}
      </div>

      <FilterBar onReset={reset} active={!!q || hotel !== 'all' || date !== 'all' || payment !== 'all' || commission !== 'all'}>
        <SearchFilter id="sa-hp-q" value={q} onChange={withReset(setQ)} placeholder="Booking ID, customer name, email or phone" />
        <SelectFilter id="sa-hp-hotel" label="Hotel" value={hotel} onChange={withReset(setHotel)} options={hotelOptions} />
        <SelectFilter id="sa-hp-date" label="Event date" value={date} onChange={withReset(setDate)} options={dateOptions} />
        <SelectFilter id="sa-hp-payment" label="Payment" value={payment} onChange={withReset(setPayment)} options={PAYMENT_FILTER} />
        <SelectFilter id="sa-hp-comm" label="Commission" value={commission} onChange={withReset(setCommission)} options={COMMISSION_FILTER} />
      </FilterBar>

      <BookingTable
        caption="Hotel partner bookings"
        bookings={paginate(filtered, page, PAGE_SIZE)}
        columns={['hotel', 'id', 'customer', 'event', 'guests', 'amount', 'commission', 'commissionStatus', 'payment', 'action']}
        onOpen={setOpen}
        empty={
          <EmptyState icon={<SearchX />} title="No hotel-partner bookings match these filters">
            Reset the filters or choose another hotel.
          </EmptyState>
        }
      />
      {filtered.length > 0 && <Pagination page={page} pageSize={PAGE_SIZE} total={filtered.length} onPage={setPage} />}

      {open && <BookingDetailsModal booking={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
