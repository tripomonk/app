import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import type { Booking } from '../data/types';
import { useMockStore } from '../state/MockStore';
import { commissionFor } from '../utils/mockCalculations';
import { formatDateShort, formatDateTimeShort, formatINR, maskMobile } from '../utils/format';
import { Badge, ChannelBadge, StatusBadge } from './ui/primitives';

export type BookingColumn =
  | 'id'
  | 'customer'
  | 'createdAt'
  | 'event'
  | 'guests'
  | 'room'
  | 'hotel'
  | 'channel'
  | 'package'
  | 'amount'
  | 'payment'
  | 'status'
  | 'commission'
  | 'commissionStatus'
  | 'action';

const HEAD: Record<BookingColumn, string> = {
  id: 'Booking ID',
  customer: 'Customer',
  createdAt: 'Booked on',
  event: 'Event date & time',
  guests: 'Guests',
  room: 'Room',
  hotel: 'Hotel',
  channel: 'Channel',
  package: 'Package',
  amount: 'Amount',
  payment: 'Payment',
  status: 'Booking',
  commission: 'Commission',
  commissionStatus: 'Commission status',
  action: 'Actions',
};

const NUMERIC: BookingColumn[] = ['guests', 'amount', 'commission'];

interface Props {
  bookings: Booking[];
  columns: BookingColumn[];
  onOpen?: (b: Booking) => void;
  /** Stack rows into cards on phones (Hotel Admin) */
  stack?: boolean;
  maskPhone?: boolean;
  empty?: ReactNode;
  caption: string;
}

export function BookingTable({ bookings, columns, onOpen, stack = false, maskPhone = false, empty, caption }: Props) {
  const { hotelById, roomById, packageById, dateById, slotById, settings } = useMockStore();

  if (bookings.length === 0 && empty) {
    return <div className="dd-table-wrap">{empty}</div>;
  }

  const cell = (b: Booking, col: BookingColumn): ReactNode => {
    switch (col) {
      case 'id':
        return (
          <div className="dd-stack-sm" style={{ gap: 2 }}>
            <span className="dd-cell-title dd-tnum">{b.id}</span>
            {b.source === 'session' && <Badge tone="gold">New · this session</Badge>}
          </div>
        );
      case 'customer':
        return (
          <div className="dd-nowrap">
            <div className="dd-cell-title">{b.customer.name}</div>
            <div className="dd-cell-sub">{maskPhone ? maskMobile(b.customer.mobile) : b.customer.mobile}</div>
          </div>
        );
      case 'createdAt':
        return <span className="dd-nowrap">{formatDateTimeShort(b.createdAt)}</span>;
      case 'event': {
        const d = dateById(b.dateId);
        const s = slotById(b.slotId);
        return (
          <span className="dd-nowrap">
            {d ? formatDateShort(d.date) : '—'} · {s?.label}
          </span>
        );
      }
      case 'guests':
        return b.guests;
      case 'room': {
        const r = roomById(b.roomId);
        return r ? (
          <span className="dd-nowrap">
            {r.name} {r.number}
          </span>
        ) : (
          <span className="dd-subtle">Boat only</span>
        );
      }
      case 'hotel': {
        const h = hotelById(b.hotelId);
        const stay = b.channel === 'direct' ? hotelById(b.stayHotelId) : undefined;
        return (
          <div>
            <div className={h ? 'dd-cell-title' : 'dd-subtle'}>{h ? h.name : '—'}</div>
            {stay && <div className="dd-cell-sub">Stay only: {stay.name}</div>}
          </div>
        );
      }
      case 'channel':
        return <ChannelBadge channel={b.channel} short />;
      case 'package':
        return <span>{packageById(b.packageId)?.name}</span>;
      case 'amount':
        return formatINR(b.amounts.total);
      case 'payment':
        return <StatusBadge kind="payment" value={b.paymentStatus} />;
      case 'status':
        return <StatusBadge kind="booking" value={b.bookingStatus} />;
      case 'commission':
        return b.channel === 'direct' ? (
          <span className="dd-subtle">—</span>
        ) : (
          <div>
            <div>{formatINR(commissionFor(b, settings))}</div>
            {!columns.includes('commissionStatus') && <div className="dd-cell-sub">{b.commissionStatus}</div>}
          </div>
        );
      case 'commissionStatus':
        return <StatusBadge kind="commission" value={b.commissionStatus} />;
      case 'action':
        return (
          <button
            type="button"
            className="dd-btn dd-btn--secondary dd-btn--sm"
            onClick={(e) => {
              e.stopPropagation();
              onOpen?.(b);
            }}
          >
            View <ChevronRight />
          </button>
        );
    }
  };

  return (
    <div className="dd-table-wrap">
      <table className={`dd-table dd-booking-table ${stack ? 'dd-table--stack' : ''}`}>
        <caption className="dd-sr-only">{caption}</caption>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col" className={NUMERIC.includes(c) ? 'dd-num' : undefined}>
                {c === 'action' ? <span className="dd-sr-only">{HEAD[c]}</span> : HEAD[c]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className={onOpen ? 'dd-row-link' : undefined} onClick={() => onOpen?.(b)}>
              {columns.map((c, i) => (
                <td
                  key={c}
                  data-label={HEAD[c]}
                  className={[NUMERIC.includes(c) ? 'dd-num' : '', stack && i === 0 ? 'dd-td-primary' : ''].join(' ')}
                >
                  {cell(b, c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
