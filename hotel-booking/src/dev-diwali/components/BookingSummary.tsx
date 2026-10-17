import type { BookingAmounts, Channel, EventDate, Hotel, ModuleSettings, Package, Room, TimeSlot } from '../data/types';
import { formatDate, formatINR } from '../utils/format';
import { ChannelBadge, DemoTag } from './ui/primitives';

export interface SummaryProps {
  channel: Channel | null;
  attributionHotel?: Hotel;
  pkg?: Package;
  date?: EventDate;
  slot?: TimeSlot;
  guests: number;
  stayHotel?: Hotel;
  room?: Room;
  amounts: BookingAmounts | null;
  dueNow: number | null;
  settings: ModuleSettings;
  title?: string;
}

export function BookingSummary({
  channel,
  attributionHotel,
  pkg,
  date,
  slot,
  guests,
  stayHotel,
  room,
  amounts,
  dueNow,
  settings,
  title = 'Your booking',
}: SummaryProps) {
  const pending = <span className="dd-subtle">Not selected</span>;
  return (
    <section className="dd-summary" aria-label="Booking summary">
      <div className="dd-row-between">
        <h3>{title}</h3>
        <DemoTag>Demo totals</DemoTag>
      </div>

      <dl className="dd-summary-list">
        <div>
          <dt>Channel</dt>
          <dd>
            {channel ? <ChannelBadge channel={channel} /> : pending}
            {channel === 'hotel' && (
              <div className="dd-small dd-muted" style={{ marginTop: 4 }}>
                {attributionHotel ? `Via ${attributionHotel.name}` : 'Hotel not selected yet'}
              </div>
            )}
          </dd>
        </div>
        <div>
          <dt>Experience</dt>
          <dd>{pkg ? pkg.name : pending}</dd>
        </div>
        <div>
          <dt>Date & time</dt>
          <dd>
            {date ? formatDate(date.date) : pending}
            {date && slot && <div className="dd-small dd-muted">{slot.label} · {slot.note}</div>}
            {date && !slot && <div className="dd-small dd-subtle">Time slot not selected</div>}
          </dd>
        </div>
        <div>
          <dt>Guests</dt>
          <dd>{guests}</dd>
        </div>
        {pkg?.includesAccommodation && (
          <div>
            <dt>Stay</dt>
            <dd>
              {room ? (
                <>
                  {room.name} {room.number}
                  <div className="dd-small dd-muted">
                    {stayHotel?.name} · {pkg.nights} {pkg.nights === 1 ? 'night' : 'nights'}
                  </div>
                </>
              ) : (
                pending
              )}
            </dd>
          </div>
        )}
      </dl>

      {amounts ? (
        <div className="dd-sum-rows">
          <div className="dd-sum-row">
            <span>Boat experience ({guests} × {formatINR(pkg!.pricePerGuest)})</span>
            <span>{formatINR(amounts.packageAmount)}</span>
          </div>
          {pkg?.includesAccommodation && (
            <div className="dd-sum-row">
              <span>Accommodation{room?.pricePerNight ? ` (${pkg.nights} × ${formatINR(room.pricePerNight)})` : ''}</span>
              <span>{room ? formatINR(amounts.accommodationAmount) : '—'}</span>
            </div>
          )}
          <div className="dd-sum-row">
            <span>Taxes & fees (mock {Math.round(settings.mockTaxRate * 100)}%)</span>
            <span>{formatINR(amounts.taxes)}</span>
          </div>
          <div className="dd-sum-total">
            <span>Total</span>
            <span>{formatINR(amounts.total)}</span>
          </div>
          {dueNow !== null && settings.paymentPolicy !== 'full' && (
            <div className="dd-sum-row" style={{ fontWeight: 600, color: 'var(--dd-navy)' }}>
              <span>
                {settings.paymentPolicy === 'advance' ? `Due now (${settings.advancePercent}% advance)` : 'Due now (pay at venue)'}
              </span>
              <span>{formatINR(dueNow)}</span>
            </div>
          )}
        </div>
      ) : (
        <p className="dd-small dd-muted">Choose a package to see the price.</p>
      )}
      <p className="dd-small dd-subtle">Prices, taxes and availability are placeholders for this prototype.</p>
    </section>
  );
}
