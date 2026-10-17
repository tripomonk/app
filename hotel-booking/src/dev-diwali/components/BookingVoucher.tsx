import { QRCodeSVG } from 'qrcode.react';
import type { Booking } from '../data/types';
import { useMockStore } from '../state/MockStore';
import { formatDate, formatINR } from '../utils/format';
import { DemoBanner, Logo, Modal } from './ui/primitives';

/** Demo confirmation document. In production this is a server-generated PDF. */
export function BookingVoucherModal({ booking: b, onClose }: { booking: Booking; onClose: () => void }) {
  const { hotelById, roomById, packageById, dateById, slotById } = useMockStore();
  const pkg = packageById(b.packageId);
  const date = dateById(b.dateId);
  const slot = slotById(b.slotId);
  const room = roomById(b.roomId);
  const stay = hotelById(b.stayHotelId);
  const attribution = hotelById(b.hotelId);

  return (
    <Modal
      title="Booking confirmation"
      subtitle={`${b.id} · demo document`}
      onClose={onClose}
      size="wide"
      footer={
        <>
          <span className="dd-small dd-muted dd-grow">PDF download connects to the backend document service later.</span>
          <button type="button" className="dd-btn dd-btn--primary" onClick={onClose}>
            Done
          </button>
        </>
      }
    >
      <div className="dd-stack">
        <DemoBanner>
          <strong>Demo confirmation.</strong> Not a valid ticket — no real booking was made and no payment was taken.
        </DemoBanner>
        <div className="dd-voucher">
          <div className="dd-voucher-watermark" aria-hidden="true">DEMO</div>
          <div className="dd-voucher-head">
            <Logo variant="dark" height={26} />
            <div style={{ textAlign: 'right' }}>
              <div className="dd-eyebrow">Dev Deepawali 2026</div>
              <div className="dd-cell-title dd-num">{b.id}</div>
            </div>
          </div>
          <div className="dd-voucher-body">
            <dl className="dd-dl">
              <dt>Guest</dt>
              <dd>{b.customer.name}</dd>
              <dt>Experience</dt>
              <dd>{pkg?.name}</dd>
              <dt>Date & time</dt>
              <dd>{date ? formatDate(date.date) : ''} · {slot?.label}</dd>
              <dt>Guests</dt>
              <dd>{b.guests}</dd>
              {room && (
                <>
                  <dt>Stay</dt>
                  <dd>{stay?.name} · {room.name} {room.number}</dd>
                </>
              )}
              <dt>Booking channel</dt>
              <dd>{b.channel === 'hotel' ? `Hotel partner · ${attribution?.name}` : 'Tripomonk Direct'}</dd>
              <dt>Payment</dt>
              <dd>{b.paymentStatus} (simulated)</dd>
              <dt>Amount</dt>
              <dd className="dd-num">{formatINR(b.amounts.total)}</dd>
            </dl>
            <div className="dd-voucher-qr">
              <QRCodeSVG value={`TRIPOMONK-DEMO:${b.id}`} size={112} fgColor="#0b1f44" />
              Check-in code (demo)
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
