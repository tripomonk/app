import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Info, Users } from 'lucide-react';
import { useMockStore } from '../../state/MockStore';
import { DD_PATHS } from '../../paths';
import { formatDateShort, formatINR } from '../../utils/format';
import { RoomThumb } from '../../components/Thumbs';
import { DashboardMetricCard } from '../../components/DashboardMetricCard';
import { Badge, ChannelBadge, DemoTag, EmptyState } from '../../components/ui/primitives';
import { useHotelData } from './useHotelData';

export function HotelRoomsPage() {
  const store = useMockStore();
  const { hotel, rooms, visible } = useHotelData();

  const assignments = useMemo(() => {
    const map = new Map<string, typeof visible>();
    for (const b of visible) {
      if (!b.roomId || b.bookingStatus === 'Cancelled') continue;
      map.set(b.roomId, [...(map.get(b.roomId) ?? []), b]);
    }
    for (const list of map.values()) list.sort((a, b) => store.dateById(a.dateId)!.date.localeCompare(store.dateById(b.dateId)!.date));
    return map;
  }, [visible, store]);

  if (!hotel) return null;
  const available = rooms.filter((r) => r.available && r.status === 'Active').length;
  const assigned = [...assignments.values()].reduce((s, l) => s + l.length, 0);

  return (
    <>
      <div className="dd-page-head">
        <div>
          <h1>Rooms</h1>
          <p>Your rooms listed for Dev Deepawali packages and the guests assigned to them.</p>
        </div>
        <DemoTag>Mock availability</DemoTag>
      </div>

      <div className="dd-callout">
        <Info aria-hidden="true" />
        <div>Adding rooms, removing rooms and changing prices is handled by Tripomonk. Contact your partner manager for changes.</div>
      </div>

      <div className="dd-metrics dd-metrics--3">
        <DashboardMetricCard label="Rooms listed" icon={<BedDouble />} value={rooms.length} />
        <DashboardMetricCard label="Available to book" icon={<BedDouble />} value={available} sub={`${rooms.length - available} not available`} />
        <DashboardMetricCard label="Room assignments" icon={<Users />} value={assigned} sub="Across all festival dates" />
      </div>

      {rooms.length === 0 ? (
        <div className="dd-card">
          <EmptyState icon={<BedDouble />} title="No rooms listed">Tripomonk hasn't listed any rooms for your hotel yet.</EmptyState>
        </div>
      ) : (
        <div className="dd-ha-rooms">
          {rooms.map((r) => {
            const list = assignments.get(r.id) ?? [];
            return (
              <article key={r.id} className="dd-card dd-ha-room">
                <RoomThumb type={r.type} label={`${r.name} ${r.number}`} className="dd-ha-room-img" />
                <div className="dd-card-body dd-stack" style={{ gap: 12 }}>
                  <div className="dd-row-between" style={{ alignItems: 'flex-start' }}>
                    <div>
                      <h3>{r.name} · {r.number}</h3>
                      <div className="dd-small dd-muted">{r.type} · {r.bedConfig}</div>
                    </div>
                    {r.available && r.status === 'Active' ? <Badge tone="good">Available</Badge> : <Badge tone="neutral">Not available</Badge>}
                  </div>
                  <div className="dd-row" style={{ gap: 6 }}>
                    <span className="dd-chip"><Users aria-hidden="true" /> Up to {r.capacity}</span>
                    {r.facilities.map((f) => <span key={f} className="dd-chip">{f}</span>)}
                  </div>
                  <div className="dd-small dd-muted">
                    {r.pricePerNight ? <>Package room rate {formatINR(r.pricePerNight)}/night <DemoTag>Placeholder</DemoTag></> : 'Rate not set'}
                  </div>
                  <div className="dd-divider" />
                  <div className="dd-stack-sm">
                    <h4>Upcoming assignments</h4>
                    {list.length === 0 ? (
                      <span className="dd-small dd-muted">No guests assigned yet.</span>
                    ) : (
                      list.map((b) => (
                        <Link key={b.id} to={DD_PATHS.hotel.booking(b.id)} className="dd-ha-assign">
                          <span className="dd-num">{formatDateShort(store.dateById(b.dateId)!.date)}</span>
                          <span className="dd-grow">{b.customer.name} · {b.guests} guests</span>
                          <ChannelBadge channel={b.channel} short />
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}
