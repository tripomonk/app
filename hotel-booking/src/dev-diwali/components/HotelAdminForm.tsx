import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Hotel, HotelAdmin, RecordStatus } from '../data/types';
import type { NewAdminInput } from '../state/MockStore';
import { Field, Modal } from './ui/primitives';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isPhone = (v: string) => {
  const d = v.replace(/\D/g, '');
  return d.length >= 10 && d.length <= 13;
};

type Errors = Partial<Record<keyof NewAdminInput, string>>;

/** Create / edit a Hotel Admin account (Super Admin). Mock state only — no login is created. */
export function HotelAdminForm({
  admin,
  hotels,
  existingEmails,
  onCancel,
  onSave,
}: {
  admin?: HotelAdmin;
  hotels: Hotel[];
  existingEmails: string[];
  onCancel: () => void;
  onSave: (input: NewAdminInput) => void;
}) {
  const [v, setV] = useState<NewAdminInput>({
    name: admin?.name ?? '',
    email: admin?.email ?? '',
    phone: admin?.phone ?? '',
    hotelId: admin?.hotelId ?? '',
    status: admin?.status ?? 'Active',
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = <K extends keyof NewAdminInput>(k: K, val: NewAdminInput[K]) => {
    setV((s) => ({ ...s, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Errors = {};
    if (!v.name.trim()) err.name = 'Enter the person’s name.';
    if (!isEmail(v.email)) err.email = 'Enter a valid email address.';
    else if (existingEmails.includes(v.email.trim().toLowerCase()) && v.email.trim().toLowerCase() !== admin?.email.toLowerCase())
      err.email = 'Another Hotel Admin already uses this email.';
    if (!isPhone(v.phone)) err.phone = 'Enter a valid phone number (10–13 digits).';
    if (!v.hotelId) err.hotelId = 'Assign a hotel.';
    setErrors(err);
    const first = Object.keys(err)[0];
    if (first) {
      document.getElementById(`af-${first}`)?.focus();
      return;
    }
    onSave({ ...v, name: v.name.trim(), email: v.email.trim() });
  };

  const invalid = (k: keyof NewAdminInput) => (errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `af-${k}-error` } : {});

  return (
    <Modal
      title={admin ? `Edit ${admin.name}` : 'Create Hotel Admin'}
      subtitle="Demo state only — no real login, invite or password is created."
      onClose={onCancel}
      footer={
        <>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" form="dd-admin-form" className="dd-btn dd-btn--primary">
            {admin ? 'Save changes' : 'Create account'}
          </button>
        </>
      }
    >
      <form id="dd-admin-form" className="dd-form-grid" onSubmit={submit} noValidate>
        <Field label="Full name" htmlFor="af-name" required error={errors.name} className="dd-span-2">
          <input id="af-name" className="dd-input" value={v.name} onChange={(e) => set('name', e.target.value)} {...invalid('name')} />
        </Field>
        <Field label="Email" htmlFor="af-email" required error={errors.email}>
          <input id="af-email" className="dd-input" type="email" value={v.email} onChange={(e) => set('email', e.target.value)} {...invalid('email')} />
        </Field>
        <Field label="Phone" htmlFor="af-phone" required error={errors.phone}>
          <input id="af-phone" className="dd-input" inputMode="tel" placeholder="+91 …" value={v.phone} onChange={(e) => set('phone', e.target.value)} {...invalid('phone')} />
        </Field>
        <Field label="Assigned hotel" htmlFor="af-hotelId" required error={errors.hotelId} help="A Hotel Admin sees only this hotel’s bookings.">
          <select id="af-hotelId" className="dd-select" value={v.hotelId} onChange={(e) => set('hotelId', e.target.value)} {...invalid('hotelId')}>
            <option value="">Select a hotel…</option>
            {hotels.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name} ({h.code}){h.status === 'Inactive' ? ' · inactive' : ''}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Account status" htmlFor="af-status">
          <select id="af-status" className="dd-select" value={v.status} onChange={(e) => set('status', e.target.value as RecordStatus)}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </Field>
        <div className="dd-callout dd-span-2" style={{ fontSize: 13.5 }}>
          <span>
            Hotel Admins can view bookings, rooms, commission and their QR poster. They cannot edit attribution codes, commission
            rules, rooms or prices.
          </span>
        </div>
      </form>
    </Modal>
  );
}
