import { useState } from 'react';
import { FileText } from 'lucide-react';
import type { Booking } from '../../data/types';
import { BookingDetailsView } from '../../components/BookingDetailsView';
import { BookingVoucherModal } from '../../components/BookingVoucher';
import { ChannelBadge, Modal, StatusBadge } from '../../components/ui/primitives';

/** Super Admin booking details (wide modal) with access to the demo confirmation. */
export function BookingDetailsModal({ booking, onClose }: { booking: Booking; onClose: () => void }) {
  const [voucher, setVoucher] = useState(false);

  if (voucher) return <BookingVoucherModal booking={booking} onClose={() => setVoucher(false)} />;

  return (
    <Modal
      title={`Booking ${booking.id}`}
      subtitle={
        <span className="dd-row" style={{ gap: 6 }}>
          <ChannelBadge channel={booking.channel} />
          <span className="dd-small dd-muted" style={{ marginLeft: 6 }}>Booking</span>
          <StatusBadge kind="booking" value={booking.bookingStatus} />
          <span className="dd-small dd-muted" style={{ marginLeft: 6 }}>Payment</span>
          <StatusBadge kind="payment" value={booking.paymentStatus} />
        </span>
      }
      onClose={onClose}
      size="wide"
      footer={
        <>
          <span className="dd-small dd-muted dd-grow">Sample record · read-only in this prototype</span>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={() => setVoucher(true)}>
            <FileText /> View confirmation
          </button>
          <button type="button" className="dd-btn dd-btn--primary" onClick={onClose}>
            Close
          </button>
        </>
      }
    >
      <BookingDetailsView booking={booking} audience="admin" />
    </Modal>
  );
}
