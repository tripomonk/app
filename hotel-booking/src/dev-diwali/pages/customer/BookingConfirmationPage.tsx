import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BedDouble, CalendarClock, Check, Download, Eye, Globe, Hotel, IndianRupee, MessageCircle, SearchX, Sailboat, User, Users } from 'lucide-react';
import { useMockStore } from '../../state/MockStore';
import { useToast } from '../../state/Toasts';
import { DD_PATHS } from '../../paths';
import { formatDate, formatINR } from '../../utils/format';
import { amountDueNow } from '../../utils/mockCalculations';
import { GhatScene } from '../../components/GhatScene';
import { BookingVoucherModal } from '../../components/BookingVoucher';
import { BookingSummary } from '../../components/BookingSummary';
import { DemoBanner, DemoTag, EmptyState, Logo, Modal, StatusBadge } from '../../components/ui/primitives';

export function BookingConfirmationPage() {
  const { bookingId } = useParams();
  const store = useMockStore();
  const toast = useToast();
  const [voucher, setVoucher] = useState(false);
  const [details, setDetails] = useState(false);
  const b = store.bookings.find((x) => x.id === bookingId);

  const header = (
    <header className="dd-conf-band">
      <div className="dd-hero-scene" aria-hidden="true">
        <GhatScene width={1920} height={300} skylineAt={0.5} waterAt={0.76} density={0.7} boats={false} animate={false} />
      </div>
      <div className="dd-wrap dd-conf-band-inner">
        <Link to={DD_PATHS.customer} aria-label="Tripomonk Dev Deepawali home">
          <Logo variant="light" height={30} />
        </Link>
      </div>
    </header>
  );

  if (!b) {
    return (
      <div className="dd-scope dd-cust">
        {header}
        <main className="dd-wrap dd-conf">
          <div className="dd-card">
            <EmptyState
              icon={<SearchX />}
              title="We can't find that demo booking"
              action={<Link className="dd-btn dd-btn--primary" to={`${DD_PATHS.customer}?src=hotel-qr`}>Start a new booking</Link>}
            >
              Demo bookings live only in this browser tab and reset when the page reloads.
            </EmptyState>
          </div>
        </main>
      </div>
    );
  }

  const pkg = store.packageById(b.packageId);
  const date = store.dateById(b.dateId);
  const slot = store.slotById(b.slotId);
  const room = store.roomById(b.roomId);
  const stay = store.hotelById(b.stayHotelId);
  const attribution = store.hotelById(b.hotelId);
  const src = b.channel === 'hotel' ? 'hotel-qr' : 'direct-qr';

  return (
    <div className="dd-scope dd-cust">
      {header}
      <main className="dd-wrap dd-conf">
        <div className="dd-card dd-conf-card">
          <div className="dd-conf-top">
            <span className="dd-conf-check" aria-hidden="true"><Check /></span>
            <h1>Demo booking complete</h1>
            <p className="dd-muted">This is a simulated confirmation. No real booking was made and no payment was taken.</p>
            <div className="dd-conf-ref">
              <span className="dd-small dd-muted">Booking reference</span>
              <strong className="dd-num">{b.id}</strong>
              <DemoTag>Demo reference</DemoTag>
            </div>
          </div>

          <ul className="dd-conf-rows">
            <li><User aria-hidden="true" /><div><span>Guest</span><strong>{b.customer.name}</strong><em>{b.customer.mobile} · {b.customer.email}</em></div></li>
            <li><Sailboat aria-hidden="true" /><div><span>Experience</span><strong>{pkg?.name}</strong></div></li>
            <li><CalendarClock aria-hidden="true" /><div><span>Date & time</span><strong>{date ? formatDate(date.date) : ''} · {slot?.label}</strong></div></li>
            <li><Users aria-hidden="true" /><div><span>Guests</span><strong>{b.guests} {b.guests === 1 ? 'person' : 'people'}</strong></div></li>
            {room && (
              <li><BedDouble aria-hidden="true" /><div><span>Stay</span><strong>{stay?.name} · {room.name} {room.number}</strong><em>{pkg?.nights} {pkg?.nights === 1 ? 'night' : 'nights'}</em></div></li>
            )}
            <li>
              {b.channel === 'hotel' ? <Hotel aria-hidden="true" /> : <Globe aria-hidden="true" />}
              <div>
                <span>Booking channel</span>
                <strong>{b.channel === 'hotel' ? `Hotel partner · ${attribution?.name}` : 'Tripomonk Direct'}</strong>
              </div>
            </li>
            <li>
              <IndianRupee aria-hidden="true" />
              <div>
                <span>Payment</span>
                <strong className="dd-row" style={{ gap: 8 }}>
                  {formatINR(b.amounts.total)} <StatusBadge kind="payment" value={b.paymentStatus} />
                </strong>
                <em>
                  {store.settings.paymentPolicy === 'full'
                    ? 'Simulated payment'
                    : store.settings.paymentPolicy === 'advance'
                      ? `Simulated ${store.settings.advancePercent}% advance of ${formatINR(amountDueNow(b.amounts.total, store.settings))}; balance due at venue`
                      : 'Pay at venue (demo policy)'}
                </em>
              </div>
            </li>
          </ul>

          <div className="dd-conf-actions">
            <button type="button" className="dd-btn dd-btn--primary dd-btn--lg" onClick={() => setDetails(true)}>
              <Eye /> View Booking
            </button>
            <button type="button" className="dd-btn dd-btn--secondary dd-btn--lg" onClick={() => setVoucher(true)}>
              <Download /> Download Confirmation
            </button>
            <button
              type="button"
              className="dd-btn dd-btn--ghost"
              onClick={() => toast('Demo: WhatsApp sharing and confirmations will be connected in the backend phase. Nothing was sent.', 'demo')}
            >
              <MessageCircle /> Share on WhatsApp
            </button>
          </div>

          <DemoBanner>
            Email and WhatsApp confirmations are simulated — nothing was sent. This demo booking now shows in the Hotel Admin and Super
            Admin screens until the page reloads.
          </DemoBanner>
          <Link to={`${DD_PATHS.customer}?src=${src}`} className="dd-link-btn" style={{ alignSelf: 'center' }}>
            Book another ride
          </Link>
        </div>
      </main>

      {voucher && <BookingVoucherModal booking={b} onClose={() => setVoucher(false)} />}
      {details && (
        <Modal title="Your booking" subtitle={`${b.id} · demo`} onClose={() => setDetails(false)}>
          <BookingSummary
            title="Booking details"
            channel={b.channel}
            attributionHotel={attribution}
            pkg={pkg}
            date={date}
            slot={slot}
            guests={b.guests}
            stayHotel={stay}
            room={room}
            amounts={b.amounts}
            dueNow={amountDueNow(b.amounts.total, store.settings)}
            settings={store.settings}
          />
        </Modal>
      )}
    </div>
  );
}
