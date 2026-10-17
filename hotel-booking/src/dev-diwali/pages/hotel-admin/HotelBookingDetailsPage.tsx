import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Download, SearchX } from 'lucide-react';
import { DD_PATHS } from '../../paths';
import { BookingDetailsView } from '../../components/BookingDetailsView';
import { BookingVoucherModal } from '../../components/BookingVoucher';
import { ChannelBadge, DemoTag, EmptyState, StatusBadge } from '../../components/ui/primitives';
import { useHotelData } from './useHotelData';

export function HotelBookingDetailsPage() {
  const { bookingId } = useParams();
  const { visible } = useHotelData();
  const [voucher, setVoucher] = useState(false);
  const b = visible.find((x) => x.id === bookingId);

  const back = (
    <Link to={DD_PATHS.hotel.bookings} className="dd-link-btn" style={{ alignSelf: 'flex-start' }}>
      <ArrowLeft /> Back to bookings
    </Link>
  );

  if (!b) {
    return (
      <>
        {back}
        <div className="dd-card">
          <EmptyState icon={<SearchX />} title="Booking not found for your hotel">
            Hotel partners can only open bookings made with their code or staying at their property.
          </EmptyState>
        </div>
      </>
    );
  }

  return (
    <>
      {back}
      <div className="dd-page-head">
        <div className="dd-stack-sm">
          <div className="dd-row" style={{ gap: 8 }}>
            <h1 className="dd-num">{b.id}</h1>
            <DemoTag>Sample record</DemoTag>
          </div>
          <div className="dd-row" style={{ gap: 8 }}>
            <ChannelBadge channel={b.channel} />
            <StatusBadge kind="booking" value={b.bookingStatus} />
            <StatusBadge kind="payment" value={b.paymentStatus} />
          </div>
        </div>
        <button type="button" className="dd-btn dd-btn--primary" onClick={() => setVoucher(true)}>
          <Download /> Download Confirmation
        </button>
      </div>
      <BookingDetailsView booking={b} audience="hotel" />
      {voucher && <BookingVoucherModal booking={b} onClose={() => setVoucher(false)} />}
    </>
  );
}
