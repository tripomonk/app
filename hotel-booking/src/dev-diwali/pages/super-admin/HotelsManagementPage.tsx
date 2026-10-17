import { useMemo, useState } from 'react';
import { Eye, Hotel as HotelIcon, Pencil, Plus, Power } from 'lucide-react';
import type { Hotel, RecordStatus } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { useToast } from '../../state/Toasts';
import { commissionFor } from '../../utils/mockCalculations';
import { formatINR } from '../../utils/format';
import { HotelThumb } from '../../components/Thumbs';
import { HotelForm } from '../../components/HotelForm';
import { FilterBar, SearchFilter, SelectFilter } from '../../components/FilterBar';
import { ConfirmDialog, DemoTag, EmptyState, Modal, StatusBadge } from '../../components/ui/primitives';
import { PageHead } from './saShared';

export function HotelsManagementPage() {
  const store = useMockStore();
  const { hotels, rooms, bookings, admins, settings, addHotel, updateHotel, nextHotelCode } = store;
  const toast = useToast();
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | RecordStatus>('all');
  const [editing, setEditing] = useState<Hotel | 'new' | null>(null);
  const [viewing, setViewing] = useState<Hotel | null>(null);
  const [toggling, setToggling] = useState<Hotel | null>(null);

  const stats = useMemo(() => {
    const map = new Map<string, { rooms: number; bookings: number; guests: number; value: number; commission: number }>();
    for (const h of hotels) {
      const list = bookings.filter((b) => b.hotelId === h.id);
      const live = list.filter((b) => b.bookingStatus !== 'Cancelled');
      map.set(h.id, {
        rooms: rooms.filter((r) => r.hotelId === h.id).length,
        bookings: list.length,
        guests: live.reduce((s, b) => s + b.guests, 0),
        value: live.reduce((s, b) => s + b.amounts.total, 0),
        commission: list.reduce((s, b) => s + commissionFor(b, settings), 0),
      });
    }
    return map;
  }, [hotels, rooms, bookings, settings]);

  const filtered = hotels.filter((h) => {
    const s = q.trim().toLowerCase();
    const matches = !s || h.name.toLowerCase().includes(s) || h.code.toLowerCase().includes(s) || h.area.toLowerCase().includes(s);
    return matches && (status === 'all' || h.status === status);
  });

  const confirmToggle = () => {
    if (!toggling) return;
    const next: RecordStatus = toggling.status === 'Active' ? 'Inactive' : 'Active';
    updateHotel(toggling.id, { status: next });
    toast(`${toggling.name} marked ${next.toLowerCase()} in demo state — not saved.`, 'demo');
    setToggling(null);
  };

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="Hotels"
        description="Partner hotels taking part in Dev Deepawali 2026. Each hotel gets a unique attribution code printed on the universal QR poster."
        actions={
          <button type="button" className="dd-btn dd-btn--primary" onClick={() => setEditing('new')}>
            <Plus /> Add hotel
          </button>
        }
      />

      <FilterBar onReset={() => { setQ(''); setStatus('all'); }} active={!!q || status !== 'all'}>
        <SearchFilter id="sa-hotels-q" value={q} onChange={setQ} placeholder="Search by hotel, code or area" />
        <SelectFilter
          id="sa-hotels-status"
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

      {filtered.length === 0 ? (
        <div className="dd-table-wrap">
          <EmptyState icon={<HotelIcon />} title="No hotels match these filters">
            Try a different name or code, or reset the filters.
          </EmptyState>
        </div>
      ) : (
        <div className="dd-table-wrap">
          <table className="dd-table">
            <caption className="dd-sr-only">Partner hotels</caption>
            <thead>
              <tr>
                <th scope="col">Hotel</th>
                <th scope="col">Code</th>
                <th scope="col" className="dd-num">Rooms</th>
                <th scope="col" className="dd-num">Bookings</th>
                <th scope="col" className="dd-num">Guests</th>
                <th scope="col" className="dd-num">Commission</th>
                <th scope="col">Status</th>
                <th scope="col"><span className="dd-sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((h) => {
                const s = stats.get(h.id)!;
                return (
                  <tr key={h.id}>
                    <td>
                      <div className="dd-row" style={{ gap: 10, flexWrap: 'nowrap' }}>
                        <HotelThumb tint={h.tint} label={h.name} size={38} />
                        <div style={{ minWidth: 0 }}>
                          <div className="dd-cell-title">{h.name}</div>
                          <div className="dd-cell-sub">{h.area}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="dd-code">{h.code}</span></td>
                    <td className="dd-num">{s.rooms}</td>
                    <td className="dd-num">{s.bookings}</td>
                    <td className="dd-num">{s.guests}</td>
                    <td className="dd-num">{formatINR(s.commission)}</td>
                    <td><StatusBadge kind="record" value={h.status} /></td>
                    <td>
                      <div className="dd-row" style={{ gap: 6, flexWrap: 'nowrap' }}>
                        <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={() => setViewing(h)}>
                          <Eye /> View
                        </button>
                        <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={() => setEditing(h)}>
                          <Pencil /> Edit
                        </button>
                        <button
                          type="button"
                          className={`dd-btn dd-btn--sm ${h.status === 'Active' ? 'dd-btn--soft-danger' : 'dd-btn--secondary'}`}
                          onClick={() => setToggling(h)}
                        >
                          <Power /> {h.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <HotelForm
          hotel={editing === 'new' ? undefined : editing}
          suggestedCode={nextHotelCode()}
          onCancel={() => setEditing(null)}
          onSave={(input) => {
            if (editing === 'new') {
              const h = addHotel(input);
              toast(`${h.name} (${h.code}) added to demo state — not saved to a database.`, 'demo');
            } else {
              updateHotel(editing.id, input);
              toast(`${input.name} updated in demo state — not saved to a database.`, 'demo');
            }
            setEditing(null);
          }}
        />
      )}

      {viewing && (() => {
        const h = hotels.find((x) => x.id === viewing.id) ?? viewing;
        const s = stats.get(h.id)!;
        const hotelRooms = rooms.filter((r) => r.hotelId === h.id);
        const hotelAdmins = admins.filter((a) => a.hotelId === h.id);
        return (
          <Modal
            title={h.name}
            subtitle={<span className="dd-row" style={{ gap: 8 }}><span className="dd-code">{h.code}</span><StatusBadge kind="record" value={h.status} /></span>}
            onClose={() => setViewing(null)}
            size="wide"
            footer={
              <>
                <button type="button" className="dd-btn dd-btn--secondary" onClick={() => { setViewing(null); setEditing(h); }}>
                  <Pencil /> Edit hotel
                </button>
                <button type="button" className="dd-btn dd-btn--primary" onClick={() => setViewing(null)}>Close</button>
              </>
            }
          >
            <div className="dd-stack">
              <div className="dd-metrics">
                <div className="dd-metric"><span className="dd-metric-label">Bookings</span><span className="dd-metric-value">{s.bookings}</span></div>
                <div className="dd-metric"><span className="dd-metric-label">Guests</span><span className="dd-metric-value">{s.guests}</span></div>
                <div className="dd-metric"><span className="dd-metric-label">Booking value</span><span className="dd-metric-value">{formatINR(s.value)}</span></div>
                <div className="dd-metric"><span className="dd-metric-label">Commission <DemoTag>Demo</DemoTag></span><span className="dd-metric-value">{formatINR(s.commission)}</span></div>
              </div>
              <div className="dd-grid-2">
                <section className="dd-stack-sm">
                  <h3>Details</h3>
                  <dl className="dd-dl">
                    <dt>Area</dt><dd>{h.area}</dd>
                    <dt>Address</dt><dd>{h.address}</dd>
                    <dt>Contact</dt><dd>{h.contactPerson}</dd>
                    <dt>Phone</dt><dd className="dd-num">{h.phone}</dd>
                    <dt>Email</dt><dd>{h.email}</dd>
                    <dt>Description</dt><dd>{h.description || '—'}</dd>
                    <dt>Hotel Admins</dt>
                    <dd>{hotelAdmins.length ? hotelAdmins.map((a) => `${a.name} (${a.status.toLowerCase()})`).join(', ') : 'None yet'}</dd>
                  </dl>
                </section>
                <section className="dd-stack-sm">
                  <h3>Rooms ({hotelRooms.length})</h3>
                  {hotelRooms.length === 0 ? (
                    <p className="dd-muted">No rooms added for this hotel yet.</p>
                  ) : (
                    <div className="dd-table-wrap">
                      <table className="dd-table">
                        <thead>
                          <tr><th>Room</th><th className="dd-num">Guests</th><th>Availability</th></tr>
                        </thead>
                        <tbody>
                          {hotelRooms.map((r) => (
                            <tr key={r.id}>
                              <td><div className="dd-cell-title">{r.name} {r.number}</div><div className="dd-cell-sub">{r.type}</div></td>
                              <td className="dd-num">{r.capacity}</td>
                              <td>{r.status === 'Inactive' ? <StatusBadge kind="record" value="Inactive" /> : r.available ? <StatusBadge kind="availability" value="Available" /> : <StatusBadge kind="availability" value="Sold out" />}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </Modal>
        );
      })()}

      {toggling && (
        <ConfirmDialog
          title={toggling.status === 'Active' ? `Deactivate ${toggling.name}?` : `Activate ${toggling.name}?`}
          message={
            toggling.status === 'Active' ? (
              <p>
                The hotel will no longer appear in the customer hotel list and code <strong>{toggling.code}</strong> will stop matching.
                Existing bookings stay as they are. This changes demo state only.
              </p>
            ) : (
              <p>
                The hotel will appear in the customer hotel list and code <strong>{toggling.code}</strong> will match again. This changes
                demo state only.
              </p>
            )
          }
          confirmLabel={toggling.status === 'Active' ? 'Deactivate' : 'Activate'}
          tone={toggling.status === 'Active' ? 'danger' : 'primary'}
          onConfirm={confirmToggle}
          onCancel={() => setToggling(null)}
        />
      )}
    </div>
  );
}
