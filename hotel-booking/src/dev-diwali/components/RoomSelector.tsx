import { BedDouble, Check, Users } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Room } from '../data/types';
import { formatINR } from '../utils/format';
import { RoomThumb } from './Thumbs';
import { Badge, DemoTag, EmptyState } from './ui/primitives';

interface Props {
  /** Rooms of the selected hotel only */
  rooms: Room[];
  hotelName: string | null;
  selectedId: string | null;
  guests: number;
  nights: number;
  onSelect: (roomId: string) => void;
  emptyAction?: ReactNode;
}

function unavailableReason(room: Room, guests: number): string | null {
  if (room.status !== 'Active' || !room.available) return 'Not available';
  if (room.capacity < guests) return `Fits up to ${room.capacity} — you have ${guests} guests`;
  return null;
}

export function RoomSelector({ rooms, hotelName, selectedId, guests, nights, onSelect, emptyAction }: Props) {
  if (!hotelName) {
    return (
      <div className="dd-room-disabled" aria-disabled="true">
        <BedDouble aria-hidden="true" />
        <div>
          <div className="dd-cell-title">Select a hotel first</div>
          <div className="dd-small dd-muted">Rooms appear once you choose where you're staying.</div>
        </div>
      </div>
    );
  }

  const eligible = rooms.filter((r) => !unavailableReason(r, guests));
  if (eligible.length === 0) {
    return (
      <div className="dd-card">
        <EmptyState icon={<BedDouble />} title={`No rooms available at ${hotelName}`} action={emptyAction}>
          {rooms.length === 0
            ? 'This hotel has no rooms listed for the festival.'
            : `None of the ${rooms.length} rooms here can take ${guests} ${guests === 1 ? 'guest' : 'guests'} on these dates. Try a boat-only package or fewer guests.`}
        </EmptyState>
      </div>
    );
  }

  return (
    <div className="dd-rooms" role="radiogroup" aria-label={`Rooms at ${hotelName}`}>
      {rooms.map((r) => {
        const reason = unavailableReason(r, guests);
        const selected = r.id === selectedId;
        return (
          <label key={r.id} className={`dd-room ${selected ? 'is-selected' : ''} ${reason ? 'is-disabled' : ''}`}>
            <input
              type="radio"
              name="dd-room"
              className="dd-sr-only"
              value={r.id}
              checked={selected}
              disabled={!!reason}
              onChange={() => onSelect(r.id)}
            />
            <RoomThumb type={r.type} label={`${r.name} ${r.number}`} className="dd-room-img" />
            <div className="dd-room-body">
              <div className="dd-row-between" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                <div style={{ minWidth: 0 }}>
                  <div className="dd-cell-title" style={{ fontSize: 15.5 }}>{r.name}</div>
                  <div className="dd-small dd-muted">
                    No. {r.number} · {r.type} · {r.bedConfig}
                  </div>
                </div>
                <span className={`dd-room-radio ${selected ? 'on' : ''}`} aria-hidden="true">{selected && <Check />}</span>
              </div>
              <div className="dd-row" style={{ gap: 6 }}>
                <span className="dd-chip"><Users aria-hidden="true" /> Up to {r.capacity}</span>
                {r.facilities.slice(0, 3).map((f) => (
                  <span className="dd-chip" key={f}>{f}</span>
                ))}
                {r.facilities.length > 3 && <span className="dd-chip">+{r.facilities.length - 3}</span>}
              </div>
              <div className="dd-row-between">
                {r.pricePerNight ? (
                  <div className="dd-room-price">
                    <strong>{formatINR(r.pricePerNight)}</strong>
                    <span className="dd-small dd-muted"> / night{nights > 1 ? ` · ${formatINR(r.pricePerNight * nights)} for ${nights}` : ''}</span>
                  </div>
                ) : (
                  <span className="dd-small dd-muted">Included in package</span>
                )}
                {reason ? <Badge tone="neutral">{reason}</Badge> : <DemoTag>Placeholder price</DemoTag>}
              </div>
            </div>
          </label>
        );
      })}
    </div>
  );
}
