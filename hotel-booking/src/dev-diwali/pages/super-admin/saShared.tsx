/** Helpers shared by the Super Admin pages (kept inside the super-admin folder). */
import { useState } from 'react';
import type { ReactNode } from 'react';
import { FileSpreadsheet, FileText } from 'lucide-react';
import type { Booking, BookingStatus, Channel, PaymentStatus } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { commissionFor } from '../../utils/mockCalculations';
import { formatDate, formatDateTime } from '../../utils/format';
import { ExportPreviewModal } from '../../components/ExportPreviewModal';
import type { Series } from '../../components/charts/Charts';

export const CHANNEL_SERIES: Series[] = [
  { key: 'hotel', label: 'Hotel partner', color: '#0065ff' },
  { key: 'direct', label: 'Tripomonk Direct', color: '#eb6834' },
];

/** Status palette for payment charts (always paired with a text label). */
export const PAYMENT_COLORS: Record<string, string> = {
  Paid: '#0ca30c',
  Pending: '#e0a030',
  Failed: '#d03b3b',
  Refunded: '#9aa6ba',
};

export function PageHead({ title, description, actions }: { title: string; description?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="dd-page-head">
      <div style={{ minWidth: 0 }}>
        <div className="dd-eyebrow">Dev Deepawali 2026</div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {actions && <div className="dd-row" style={{ gap: 8 }}>{actions}</div>}
    </div>
  );
}

export const PAYMENT_FILTER: { value: 'all' | PaymentStatus; label: string }[] = [
  { value: 'all', label: 'All payments' },
  { value: 'Paid', label: 'Paid' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Failed', label: 'Failed' },
  { value: 'Refunded', label: 'Refunded' },
];

export const BOOKING_FILTER: { value: 'all' | BookingStatus; label: string }[] = [
  { value: 'all', label: 'All statuses' },
  { value: 'Confirmed', label: 'Confirmed' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Cancelled', label: 'Cancelled' },
];

export const CHANNEL_FILTER: { value: 'all' | Channel; label: string }[] = [
  { value: 'all', label: 'All channels' },
  { value: 'hotel', label: 'Hotel partner' },
  { value: 'direct', label: 'Tripomonk Direct' },
];

export function useDateOptions() {
  const { dates } = useMockStore();
  return [{ value: 'all', label: 'All event dates' }, ...dates.map((d) => ({ value: d.id, label: formatDate(d.date) }))];
}

export function useHotelOptions(includeAll = true, allLabel = 'All hotels') {
  const { hotels } = useMockStore();
  const opts = hotels.map((h) => ({ value: h.id, label: `${h.name}${h.status === 'Inactive' ? ' (inactive)' : ''}` }));
  return includeAll ? [{ value: 'all', label: allLabel }, ...opts] : opts;
}

export function matchesSearch(b: Booking, q: string): boolean {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  const digits = s.replace(/\D/g, '');
  return (
    b.id.toLowerCase().includes(s) ||
    b.customer.name.toLowerCase().includes(s) ||
    b.customer.email.toLowerCase().includes(s) ||
    (digits.length >= 3 && b.customer.mobile.replace(/\D/g, '').includes(digits))
  );
}

export function sortNewest(list: Booking[]): Booking[] {
  return [...list].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Rows for the mock export preview. */
export function useBookingExport() {
  const { hotelById, roomById, packageById, dateById, slotById, settings } = useMockStore();
  return (list: Booking[]) => ({
    columns: ['Booking ID', 'Booked on', 'Customer', 'Channel', 'Hotel', 'Room', 'Package', 'Event', 'Guests', 'Amount (₹)', 'Payment', 'Status', 'Commission (₹)'],
    rows: list.map((b) => [
      b.id,
      formatDateTime(b.createdAt),
      b.customer.name,
      b.channel === 'hotel' ? 'Hotel partner' : 'Tripomonk Direct',
      hotelById(b.hotelId)?.name ?? '—',
      (() => {
        const r = roomById(b.roomId);
        return r ? `${r.name} ${r.number}` : '—';
      })(),
      packageById(b.packageId)?.name ?? '',
      `${dateById(b.dateId)?.date ?? ''} ${slotById(b.slotId)?.label ?? ''}`,
      b.guests,
      b.amounts.total,
      b.paymentStatus,
      b.bookingStatus,
      b.channel === 'hotel' ? commissionFor(b, settings) : 0,
    ]),
  });
}

/** CSV / PDF buttons that open the mock export preview. */
export function ExportButtons({ title, build }: { title: string; build: () => { columns: string[]; rows: (string | number)[][] } }) {
  const [format, setFormat] = useState<'CSV' | 'PDF' | null>(null);
  const data = format ? build() : null;
  return (
    <>
      <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={() => setFormat('CSV')}>
        <FileSpreadsheet /> Export CSV
      </button>
      <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={() => setFormat('PDF')}>
        <FileText /> Export PDF
      </button>
      {format && data && (
        <ExportPreviewModal title={title} format={format} columns={data.columns} rows={data.rows} onClose={() => setFormat(null)} />
      )}
    </>
  );
}

/** Basic validators used by the Super Admin forms. */
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v: string) => {
  const d = v.replace(/\D/g, '');
  return d.length >= 10 && d.length <= 13;
};
