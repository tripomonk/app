import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, SearchX } from 'lucide-react';
import type { BookingStatus, PaymentStatus } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { DD_PATHS } from '../../paths';
import { formatDateShort, formatINR } from '../../utils/format';
import { commissionFor } from '../../utils/mockCalculations';
import { BookingTable } from '../../components/BookingTable';
import { FilterBar, SearchFilter, SelectFilter } from '../../components/FilterBar';
import { ExportPreviewModal } from '../../components/ExportPreviewModal';
import { DemoTag, EmptyState, Pagination, paginate } from '../../components/ui/primitives';
import { useHotelData } from './useHotelData';

const PAGE = 10;

export function HotelBookingsPage() {
  const store = useMockStore();
  const navigate = useNavigate();
  const { hotel, visible } = useHotelData();
  const [q, setQ] = useState('');
  const [date, setDate] = useState('all');
  const [pay, setPay] = useState<'all' | PaymentStatus>('all');
  const [status, setStatus] = useState<'all' | BookingStatus>('all');
  const [source, setSource] = useState<'all' | 'code' | 'stay'>('all');
  const [page, setPage] = useState(1);
  const [exporting, setExporting] = useState(false);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return visible.filter((b) => {
      if (term && !`${b.id} ${b.customer.name} ${b.customer.mobile.replace(/\s/g, '')}`.toLowerCase().includes(term.replace(/\s/g, ''))) return false;
      if (date !== 'all' && b.dateId !== date) return false;
      if (pay !== 'all' && b.paymentStatus !== pay) return false;
      if (status !== 'all' && b.bookingStatus !== status) return false;
      if (source === 'code' && b.channel !== 'hotel') return false;
      if (source === 'stay' && b.channel !== 'direct') return false;
      return true;
    });
  }, [visible, q, date, pay, status, source]);

  const active = q !== '' || date !== 'all' || pay !== 'all' || status !== 'all' || source !== 'all';
  const reset = () => {
    setQ('');
    setDate('all');
    setPay('all');
    setStatus('all');
    setSource('all');
    setPage(1);
  };
  const onFilter = <T,>(fn: (v: T) => void) => (v: T) => {
    fn(v);
    setPage(1);
  };

  if (!hotel) return null;

  return (
    <>
      <div className="dd-page-head">
        <div>
          <h1>Bookings</h1>
          <p>Bookings made with your code {hotel.code}, plus Tripomonk Direct guests who chose to stay with you.</p>
        </div>
        <div className="dd-row">
          <DemoTag>Sample records</DemoTag>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={() => setExporting(true)}>
            <Download /> Export CSV
          </button>
        </div>
      </div>

      <FilterBar onReset={reset} active={active}>
        <SearchFilter id="hb-q" value={q} onChange={onFilter(setQ)} placeholder="Booking ID, guest name or mobile" />
        <SelectFilter
          id="hb-date"
          label="Event date"
          value={date}
          onChange={onFilter(setDate)}
          options={[{ value: 'all', label: 'All dates' }, ...store.dates.map((d) => ({ value: d.id, label: formatDateShort(d.date) }))]}
        />
        <SelectFilter
          id="hb-pay"
          label="Payment"
          value={pay}
          onChange={onFilter(setPay)}
          options={[{ value: 'all', label: 'All payments' }, ...(['Paid', 'Pending', 'Failed', 'Refunded'] as const).map((s) => ({ value: s, label: s }))]}
        />
        <SelectFilter
          id="hb-status"
          label="Booking status"
          value={status}
          onChange={onFilter(setStatus)}
          options={[{ value: 'all', label: 'All statuses' }, ...(['Confirmed', 'Pending', 'Cancelled'] as const).map((s) => ({ value: s, label: s }))]}
        />
        <SelectFilter
          id="hb-src"
          label="Source"
          value={source}
          onChange={onFilter(setSource)}
          options={[
            { value: 'all', label: 'All' },
            { value: 'code', label: 'Your hotel code' },
            { value: 'stay', label: 'Direct-channel stays' },
          ]}
        />
      </FilterBar>

      <BookingTable
        caption="Hotel bookings"
        bookings={paginate(filtered, page, PAGE)}
        columns={['id', 'customer', 'createdAt', 'event', 'guests', 'room', 'amount', 'payment', 'status', 'commission', 'action']}
        onOpen={(b) => navigate(DD_PATHS.hotel.booking(b.id))}
        stack
        maskPhone
        empty={
          <EmptyState
            icon={<SearchX />}
            title="No bookings match these filters"
            action={<button type="button" className="dd-btn dd-btn--secondary" onClick={reset}>Clear filters</button>}
          >
            Try a different date or payment status.
          </EmptyState>
        }
      />
      {filtered.length > 0 && <Pagination page={page} pageSize={PAGE} total={filtered.length} onPage={setPage} />}

      {exporting && (
        <ExportPreviewModal
          title={`${hotel.name} bookings`}
          format="CSV"
          columns={['Booking ID', 'Guest', 'Event date', 'Guests', 'Amount', 'Payment', 'Status', 'Commission']}
          rows={filtered.map((b) => [
            b.id,
            b.customer.name,
            formatDateShort(store.dateById(b.dateId)!.date),
            b.guests,
            formatINR(b.amounts.total),
            b.paymentStatus,
            b.bookingStatus,
            b.channel === 'hotel' ? formatINR(commissionFor(b, store.settings)) : '—',
          ])}
          onClose={() => setExporting(false)}
        />
      )}
    </>
  );
}
