import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Hotel, RecordStatus, Room, RoomType } from '../data/types';
import type { NewRoomInput } from '../state/MockStore';
import { ROOM_FACILITIES } from '../data/mockDevDiwaliData';
import { DemoTag, Field, Modal } from './ui/primitives';

const TYPES: RoomType[] = ['Standard', 'Deluxe', 'Premium', 'Suite', 'Family'];

interface Values {
  hotelId: string;
  name: string;
  number: string;
  type: RoomType;
  capacity: string;
  bedConfig: string;
  facilities: string[];
  description: string;
  price: string;
  available: boolean;
  status: RecordStatus;
}
type Errors = Partial<Record<keyof Values, string>>;

/** Add / edit room (Super Admin). Saves to mock frontend state only. */
export function RoomForm({
  room,
  hotels,
  defaultHotelId,
  onCancel,
  onSave,
}: {
  room?: Room;
  hotels: Hotel[];
  defaultHotelId?: string;
  onCancel: () => void;
  onSave: (input: NewRoomInput) => void;
}) {
  const [v, setV] = useState<Values>({
    hotelId: room?.hotelId ?? defaultHotelId ?? '',
    name: room?.name ?? '',
    number: room?.number ?? '',
    type: room?.type ?? 'Deluxe',
    capacity: String(room?.capacity ?? 2),
    bedConfig: room?.bedConfig ?? '',
    facilities: room?.facilities ?? [],
    description: room?.description ?? '',
    price: room?.pricePerNight != null ? String(room.pricePerNight) : '',
    available: room?.available ?? true,
    status: room?.status ?? 'Active',
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setV((s) => ({ ...s, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleFacility = (f: string) =>
    set('facilities', v.facilities.includes(f) ? v.facilities.filter((x) => x !== f) : [...v.facilities, f]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Errors = {};
    if (!v.hotelId) err.hotelId = 'Choose the hotel this room belongs to.';
    if (!v.name.trim()) err.name = 'Enter a room name.';
    if (!v.number.trim()) err.number = 'Enter the room number.';
    const cap = Number(v.capacity);
    if (!Number.isInteger(cap) || cap < 1 || cap > 12) err.capacity = 'Capacity must be a whole number from 1 to 12.';
    if (!v.bedConfig.trim()) err.bedConfig = 'Describe the bed configuration.';
    if (v.price.trim() && (!/^\d+$/.test(v.price.trim()) || Number(v.price) <= 0)) err.price = 'Enter a whole rupee amount, or leave blank.';
    setErrors(err);
    const first = Object.keys(err)[0];
    if (first) {
      document.getElementById(`rf-${first}`)?.focus();
      return;
    }
    onSave({
      hotelId: v.hotelId,
      name: v.name.trim(),
      number: v.number.trim(),
      type: v.type,
      capacity: cap,
      bedConfig: v.bedConfig.trim(),
      facilities: v.facilities,
      description: v.description.trim(),
      pricePerNight: v.price.trim() ? Number(v.price) : null,
      available: v.available,
      status: v.status,
    });
  };

  const invalid = (k: keyof Values) => (errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `rf-${k}-error` } : {});

  return (
    <Modal
      title={room ? `Edit room ${room.number}` : 'Add room'}
      subtitle="Changes update demo state only — nothing is saved to a database."
      onClose={onCancel}
      size="wide"
      footer={
        <>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" form="dd-room-form" className="dd-btn dd-btn--primary">
            {room ? 'Save changes' : 'Add room'}
          </button>
        </>
      }
    >
      <form id="dd-room-form" className="dd-form-grid" onSubmit={submit} noValidate>
        <Field label="Hotel" htmlFor="rf-hotelId" required error={errors.hotelId} className="dd-span-2">
          <select id="rf-hotelId" className="dd-select" value={v.hotelId} onChange={(e) => set('hotelId', e.target.value)} {...invalid('hotelId')}>
            <option value="">Select a hotel…</option>
            {hotels.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name} ({h.code}){h.status === 'Inactive' ? ' · inactive' : ''}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Room name" htmlFor="rf-name" required error={errors.name} help="Shown to customers, e.g. Deluxe Room">
          <input id="rf-name" className="dd-input" value={v.name} onChange={(e) => set('name', e.target.value)} {...invalid('name')} />
        </Field>
        <Field label="Room number" htmlFor="rf-number" required error={errors.number}>
          <input id="rf-number" className="dd-input" value={v.number} onChange={(e) => set('number', e.target.value)} {...invalid('number')} />
        </Field>
        <Field label="Room type" htmlFor="rf-type">
          <select id="rf-type" className="dd-select" value={v.type} onChange={(e) => set('type', e.target.value as RoomType)}>
            {TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Capacity (guests)" htmlFor="rf-capacity" required error={errors.capacity}>
          <input id="rf-capacity" className="dd-input" type="number" min={1} max={12} value={v.capacity} onChange={(e) => set('capacity', e.target.value)} {...invalid('capacity')} />
        </Field>
        <Field label="Bed configuration" htmlFor="rf-bedConfig" required error={errors.bedConfig} help="e.g. 1 king bed + sofa bed">
          <input id="rf-bedConfig" className="dd-input" value={v.bedConfig} onChange={(e) => set('bedConfig', e.target.value)} {...invalid('bedConfig')} />
        </Field>
        <Field
          label="Price per night (₹)"
          htmlFor="rf-price"
          error={errors.price}
          help={<span className="dd-row" style={{ gap: 6 }}>Optional placeholder — leave blank if not applicable. <DemoTag>Placeholder</DemoTag></span>}
        >
          <input id="rf-price" className="dd-input" inputMode="numeric" value={v.price} placeholder="Not set" onChange={(e) => set('price', e.target.value)} {...invalid('price')} />
        </Field>
        <fieldset className="dd-field dd-span-2" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="dd-label" style={{ marginBottom: 8 }}>Facilities</legend>
          <div className="dd-sa-checkgrid">
            {ROOM_FACILITIES.map((f) => (
              <label key={f} className="dd-check">
                <input type="checkbox" checked={v.facilities.includes(f)} onChange={() => toggleFacility(f)} />
                {f}
              </label>
            ))}
          </div>
        </fieldset>
        <Field label="Description" htmlFor="rf-description" className="dd-span-2">
          <textarea id="rf-description" className="dd-textarea" value={v.description} onChange={(e) => set('description', e.target.value)} />
        </Field>
        <Field label="Availability" htmlFor="rf-available" help="Mock flag — live inventory comes from the backend.">
          <select id="rf-available" className="dd-select" value={v.available ? 'yes' : 'no'} onChange={(e) => set('available', e.target.value === 'yes')}>
            <option value="yes">Available</option>
            <option value="no">Unavailable</option>
          </select>
        </Field>
        <Field label="Status" htmlFor="rf-status">
          <select id="rf-status" className="dd-select" value={v.status} onChange={(e) => set('status', e.target.value as RecordStatus)}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </Field>
      </form>
    </Modal>
  );
}
