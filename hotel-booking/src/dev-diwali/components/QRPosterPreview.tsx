/**
 * QR poster previews.
 * - Hotel partner: one universal QR for every hotel + the hotel's printed attribution code.
 * - Tripomonk Direct: a visually distinct poster with its own QR and channel label.
 * QR codes are generated with qrcode.react and encode the real /dev-diwali URL.
 * Frontend parameters are preview-only; production attribution is verified by the backend.
 */
import { QRCodeSVG } from 'qrcode.react';
import type { Hotel } from '../data/types';
import { DIRECT_QR_URL, HOTEL_QR_URL } from '../data/mockDevDiwaliData';
import { GhatScene } from './GhatScene';
import { Logo } from './ui/primitives';

interface Props {
  variant: 'hotel' | 'direct';
  hotel?: Hotel | null;
  /** rendered width in px; everything scales from it */
  width?: number;
}

export function QRPosterPreview({ variant, hotel, width = 300 }: Props) {
  const fontSize = (width / 300) * 16;
  const qrSize = Math.round(width * 0.42);

  if (variant === 'direct') {
    return (
      <div style={{ width, maxWidth: '100%', fontSize }}>
        <div className="dd-poster dd-poster--direct" aria-label="Tripomonk Direct QR poster preview">
          <div className="dd-poster-inner">
            <div className="dd-poster-logo">
              <Logo variant="light" height={fontSize * 1.55} />
            </div>
            <div className="dd-poster-direct-title">
              Book Directly
              <br />
              with <em>Tripomonk</em>
            </div>
            <div className="dd-poster-kicker" style={{ opacity: 0.9 }}>Dev Deepawali · Boat rides</div>
            <div className="dd-poster-qr" style={{ width: qrSize + fontSize * 1.1 }}>
              <QRCodeSVG value={DIRECT_QR_URL} size={qrSize} fgColor="#0b1f44" bgColor="#ffffff" level="M" />
            </div>
            <div className="dd-poster-scan">Scan to book</div>
            <div className="dd-poster-channel">
              <i aria-hidden="true" />
              Booking Channel: Tripomonk Direct
            </div>
            <div className="dd-poster-url">app.tripomonk.com/dev-diwali</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width, maxWidth: '100%', fontSize }}>
      <div className="dd-poster dd-poster--hotel" aria-label="Hotel partner QR poster preview">
        <div className="dd-poster-scene" aria-hidden="true">
          <GhatScene width={600} height={340} density={0.55} seed={11} boats={false} animate={false} />
        </div>
        <div className="dd-poster-inner">
          <div className="dd-poster-logo">
            <Logo variant="light" height={fontSize * 1.55} />
          </div>
          <div className="dd-poster-deva" lang="hi">देव दीपावली</div>
          <div className="dd-poster-title">Dev Deepawali</div>
          <div className="dd-poster-kicker">Boat ride experience</div>
          <div className="dd-poster-qr" style={{ width: qrSize + fontSize * 1.1 }}>
            <QRCodeSVG value={HOTEL_QR_URL} size={qrSize} fgColor="#0b1f44" bgColor="#ffffff" level="M" />
          </div>
          <div className="dd-poster-scan">Scan to book</div>
          <div className="dd-poster-sub">Your Dev Deepawali experience</div>
          <div className={`dd-poster-code ${hotel ? '' : 'dd-poster-code--placeholder'}`}>
            Hotel Code: {hotel ? hotel.code : '— select a hotel —'}
          </div>
          <div className="dd-poster-ask">(Ask at reception)</div>
        </div>
      </div>
    </div>
  );
}
