import { useState } from 'react';
import { BedDouble, Pencil, Plus, Power } from 'lucide-react';
import type { RecordStatus, Room, RoomType } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { useToast } from '../../state/Toasts';
import { formatINR } from '../../utils/format';
import { RoomForm } from '../../components/RoomForm';
import { FilterBar, SearchFilter, SelectFilter } from '../../components/FilterBar';
import { Badge, ConfirmDialog, DemoTag, EmptyState, StatusBadge } from '../../components/ui/primitives';
import { PageHead, useHotelOptions } from './saShared';

const TYPES: ('all' | RoomType)[] = ['all', 'Standard', 'Deluxe', 'Premium', 'Suite', 'Family'];

export function RoomsManagementPage() {
  const { rooms, hotels, bookings, hotelById, addRoom, updateRoom } = useMockStore();
  const toast = useToast();
  const hotelOptions = useHotelOptions();
  const [q, setQ] = useState('');
  const [hotel, setHotel] = useState('all');
  const [type, setType] = useState<'all' | RoomType>('all');
  const [status, setStatus] = useState<'all' | RecordStatus>('all');
  const [editing, setEditing] = useState<Room | 'new' | null>(null);
  const [toggling, setToggling] = useState<Room | null>(null);

  const filtered = rooms.filter((r) => {
    const s = q.trim().toLowerCase();
    const h = hotelById(r.hotelId);
    const matches = !s || r.name.toLowerCase().includes(s) || r.number.toLowerCase().includes(s) || (h?.name.toLowerCase().includes(s) ?? false);
    return matches && (hotel === 'all' || r.hotelId === hotel) && (type === 'all' || r.type === type) && (status === 'all' || r.status === status);
  });

  const upcomingFor = (roomId: string) =>
    bookings.filter((b) => b.roomId === roomId && b.bookingStatus !== 'Cancelled').length;

  const active = !!q || hotel !== 'all' || type !== 'all' || status !== 'all';

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="Rooms"
        description="Rooms customers can choose when a package includes a stay. Each room belongs to exactly one hotel."
        actions={
          <button type="button" className="dd-btn dd-btn--primary" onClick={() => setEditing('new')}>
            <Plus /> Add room
          </button>
        }
      />

      <FilterBar
        onReset={() => { setQ(''); setHotel('all'); setType('all'); setStatus('all'); }}
        active={active}
      >
        <SearchFilter id="sa-rooms-q" value={q} onChange={setQ} placeholder="Search room name, number or hotel" />
        <SelectFilter id="sa-rooms-hotel" label="Hotel" value={hotel} onChange={setHotel} options={hotelOptions} />
        <SelectFilter
          id="sa-rooms-type"
          label="Type"
          value={type}
          onChange={setType}
          options={TYPES.map((t) => ({ value: t, label: t === 'all' ? 'All types' : t }))}
        />
        <SelectFilter
          id="sa-rooms-status"
          label="Status"
          value={status}
          onChange={setStatus}
          options={[
            { value: 'all', label: 'All statuses' },
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
          ]}
        />
      </FilterBar>

      <div className="dd-table-wrap">
        {filtered.length === 0 ? (
          <EmptyState icon={<BedDouble />} title="No rooms match these filters">
            Change the hotel, type or status filter, or add a room.
          </EmptyState>
        ) : (
          <table className="dd-table">
            <caption className="dd-sr-only">Rooms</caption>
            <thead>
              <tr>
                <th scope="col">Room</th>
                <th scope="col">Hotel</th>
                <th scope="col">Type</th>
                <th scope="col" className="dd-num">Capacity</th>
                <th scope="col" className="dd-num">Price / night <DemoTag>Placeholder</DemoTag></th>
                <th scope="col">Availability</th>
                <th scope="col" className="dd-num">Assignments</th>
                <th scope="col">Status</th>
                <th scope="col"><span className="dd-sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => {
                const h = hotelById(r.hotelId);
                return (
                  <tr key={r.id}>
                    <td>
                      <div className="dd-cell-title">{r.name} · {r.number}</div>
                      <div className="dd-cell-sub">{r.bedConfig}</div>
                    </td>
                    <td>
                      <div>{h?.name}</div>
                      <div className="dd-cell-sub">{h?.code}</div>
                    </td>
                    <td>{r.type}</td>
                    <td className="dd-num">{r.capacity}</td>
                    <td className="dd-num">{r.pricePerNight != null ? formatINR(r.pricePerNight) : <span className="dd-subtle">Not set</span>}</td>
                    <td>{r.available ? <Badge tone="good">Available</Badge> : <Badge tone="bad">Unavailable</Badge>}</td>
                    <td className="dd-num">{upcomingFor(r.id)}</td>
                    <td><StatusBadge kind="record" value={r.status} /></td>
                    <td>
                      <div className="dd-row" style={{ gap: 6, flexWrap: 'nowrap' }}>
                        <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={() => setEditing(r)}>
                          <Pencil /> Edit
                        </button>
                        <button
                          type="button"
                          className={`dd-btn dd-btn--sm ${r.status === 'Active' ? 'dd-btn--soft-danger' : 'dd-btn--secondary'}`}
                          onClick={() => setToggling(r)}
                        >
                          <Power /> {r.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <p className="dd-small dd-muted">
        Showing {filtered.length} of {rooms.length} rooms. Availability is a mock flag; live inventory comes from the backend phase.
      </p>

      {editing && (
        <RoomForm
          room={editing === 'new' ? undefined : editing}
          hotels={hotels}
          defaultHotelId={hotel !== 'all' ? hotel : undefined}
          onCancel={() => setEditing(null)}
          onSave={(input) => {
            if (editing === 'new') {
              addRoom(input);
              toast(`Room ${input.number} added to ${hotelById(input.hotelId)?.name} in demo state — not saved.`, 'demo');
            } else {
              updateRoom(editing.id, input);
              toast(`Room ${input.number} updated in demo state — not saved.`, 'demo');
            }
            setEditing(null);
          }}
        />
      )}

      {toggling && (
        <ConfirmDialog
          title={`${toggling.status === 'Active' ? 'Deactivate' : 'Activate'} room ${toggling.number}?`}
          message={
            <p>
              {toggling.status === 'Active'
                ? 'Customers will no longer be able to select this room. Existing bookings keep their room.'
                : 'Customers will be able to select this room again if it is marked available.'}{' '}
              This changes demo state only.
            </p>
          }
          confirmLabel={toggling.status === 'Active' ? 'Deactivate' : 'Activate'}
          tone={toggling.status === 'Active' ? 'danger' : 'primary'}
          onConfirm={() => {
            const next: RecordStatus = toggling.status === 'Active' ? 'Inactive' : 'Active';
            updateRoom(toggling.id, { status: next });
            toast(`Room ${toggling.number} marked ${next.toLowerCase()} in demo state.`, 'demo');
            setToggling(null);
          }}
          onCancel={() => setToggling(null)}
        />
      )}
    </div>
  );
}
