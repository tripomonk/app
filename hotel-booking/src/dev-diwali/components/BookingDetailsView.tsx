import { Lock } from 'lucide-react';
import type { Booking } from '../data/types';
import { useMockStore } from '../state/MockStore';
import { commissionBase, commissionFor, describeCommissionRule } from '../utils/mockCalculations';
import { formatDate, formatDateTime, formatINR } from '../utils/format';
import { ChannelBadge, DemoTag, StatusBadge } from './ui/primitives';

/** Full booking detail used by the Hotel Admin details page and the Super Admin booking modal. */
export function BookingDetailsView({ booking: b, audience }: { booking: Booking; audience: 'hotel' | 'admin' }) {
  const { hotelById, roomById, packageById, dateById, slotById, settings } = useMockStore();
  const pkg = packageById(b.packageId);
  const date = dateById(b.dateId);
  const slot = slotById(b.slotId);
  const room = roomById(b.roomId);
  const attribution = hotelById(b.hotelId);
  const stayHotel = hotelById(b.stayHotelId);
  const commission = commissionFor(b, settings);

  return (
    <div className="dd-grid-2">
      <section className="dd-card dd-card-pad dd-stack" aria-labelledby={`cust-${b.id}`}>
        <h3 id={`cust-${b.id}`}>Customer</h3>
        <dl className="dd-dl">
          <dt>Name</dt>
          <dd>{b.customer.name}</dd>
          <dt>Mobile</dt>
          <dd className="dd-num">{b.customer.mobile}</dd>
          <dt>Email</dt>
          <dd>{b.customer.email}</dd>
          {b.customer.city && (
            <>
              <dt>City</dt>
              <dd>{b.customer.city}</dd>
            </>
          )}
          {b.specialRequests && (
            <>
              <dt>Requests</dt>
              <dd>{b.specialRequests}</dd>
            </>
          )}
        </dl>
      </section>

      <section className="dd-card dd-card-pad dd-stack" aria-labelledby={`exp-${b.id}`}>
        <h3 id={`exp-${b.id}`}>Experience</h3>
        <dl className="dd-dl">
          <dt>Package</dt>
          <dd>{pkg?.name}</dd>
          <dt>Event date</dt>
          <dd>{date ? formatDate(date.date) : '—'}</dd>
          <dt>Time slot</dt>
          <dd>{slot?.label} · {slot?.note}</dd>
          <dt>Guests</dt>
          <dd>{b.guests}</dd>
          <dt>Channel</dt>
          <dd><ChannelBadge channel={b.channel} /></dd>
          {audience === 'admin' && (
            <>
              <dt>Attributed hotel</dt>
              <dd>{attribution ? `${attribution.name} (${attribution.code})` : 'None — direct channel'}</dd>
            </>
          )}
        </dl>
      </section>

      <section className="dd-card dd-card-pad dd-stack" aria-labelledby={`stay-${b.id}`}>
        <h3 id={`stay-${b.id}`}>Stay</h3>
        {room ? (
          <dl className="dd-dl">
            <dt>Hotel</dt>
            <dd>{stayHotel?.name}</dd>
            <dt>Room</dt>
            <dd>{room.name} · No. {room.number}</dd>
            <dt>Type / capacity</dt>
            <dd>{room.type} · up to {room.capacity} guests</dd>
            <dt>Nights</dt>
            <dd>{pkg?.nights}</dd>
            {b.channel === 'direct' && (
              <>
                <dt>Note</dt>
                <dd className="dd-muted">Accommodation only — this booking stays a Tripomonk Direct booking.</dd>
              </>
            )}
          </dl>
        ) : (
          <p className="dd-muted">Boat-only package. No room assigned.</p>
        )}
      </section>

      <section className="dd-card dd-card-pad dd-stack" aria-labelledby={`pay-${b.id}`}>
        <div className="dd-row-between">
          <h3 id={`pay-${b.id}`}>Payment</h3>
          <DemoTag>Mock amounts</DemoTag>
        </div>
        <div className="dd-sum-rows">
          <div className="dd-sum-row"><span>Package ({b.guests} × guest)</span><span>{formatINR(b.amounts.packageAmount)}</span></div>
          {b.amounts.accommodationAmount > 0 && (
            <div className="dd-sum-row"><span>Accommodation</span><span>{formatINR(b.amounts.accommodationAmount)}</span></div>
          )}
          <div className="dd-sum-row"><span>Taxes & fees (mock)</span><span>{formatINR(b.amounts.taxes)}</span></div>
          <div className="dd-sum-total"><span>Total</span><span>{formatINR(b.amounts.total)}</span></div>
        </div>
        <dl className="dd-dl">
          <dt>Payment status</dt>
          <dd><StatusBadge kind="payment" value={b.paymentStatus} /></dd>
          <dt>Booking status</dt>
          <dd><StatusBadge kind="booking" value={b.bookingStatus} /></dd>
        </dl>
        <p className="dd-small dd-muted dd-row" style={{ gap: 6 }}>
          <Lock size={14} aria-hidden="true" /> Payment method details are never shown here.
        </p>
      </section>

      <section className="dd-card dd-card-pad dd-stack" aria-labelledby={`com-${b.id}`}>
        <div className="dd-row-between">
          <h3 id={`com-${b.id}`}>Commission</h3>
          <DemoTag>Demo rule</DemoTag>
        </div>
        {b.channel === 'direct' ? (
          <p className="dd-muted">Direct booking — no hotel commission by default.</p>
        ) : (
          <dl className="dd-dl">
            <dt>Rule</dt>
            <dd>{describeCommissionRule(settings)}</dd>
            <dt>Eligible value</dt>
            <dd className="dd-num">{b.bookingStatus === 'Cancelled' ? '—' : formatINR(commissionBase(b, settings))}</dd>
            <dt>Commission</dt>
            <dd className="dd-num">{formatINR(commission)}</dd>
            <dt>Status</dt>
            <dd><StatusBadge kind="commission" value={b.commissionStatus} /></dd>
          </dl>
        )}
      </section>

      <section className="dd-card dd-card-pad dd-stack" aria-labelledby={`conf-${b.id}`}>
        <h3 id={`conf-${b.id}`}>Confirmation</h3>
        <dl className="dd-dl">
          <dt>Reference</dt>
          <dd className="dd-num">{b.id}</dd>
          <dt>Booked on</dt>
          <dd>{formatDateTime(b.createdAt)}</dd>
          <dt>Email / WhatsApp</dt>
          <dd className="dd-muted">Not sent — notifications are simulated in this prototype</dd>
        </dl>
      </section>
    </div>
  );
}
