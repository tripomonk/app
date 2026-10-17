import { useState } from 'react';
import type { FormEvent } from 'react';
import { Lock } from 'lucide-react';
import type { Hotel, RecordStatus } from '../data/types';
import type { NewHotelInput } from '../state/MockStore';
import { Field, Modal } from './ui/primitives';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isPhone = (v: string) => {
  const d = v.replace(/\D/g, '');
  return d.length >= 10 && d.length <= 13;
};

type Values = Omit<NewHotelInput, 'code'>;
type Errors = Partial<Record<keyof Values, string>>;

/** Add / edit hotel (Super Admin). Saves to mock frontend state only. */
export function HotelForm({
  hotel,
  suggestedCode,
  onCancel,
  onSave,
}: {
  hotel?: Hotel;
  suggestedCode: string;
  onCancel: () => void;
  onSave: (input: NewHotelInput) => void;
}) {
  const [v, setV] = useState<Values>({
    name: hotel?.name ?? '',
    area: hotel?.area ?? '',
    address: hotel?.address ?? '',
    contactPerson: hotel?.contactPerson ?? '',
    phone: hotel?.phone ?? '',
    email: hotel?.email ?? '',
    description: hotel?.description ?? '',
    status: hotel?.status ?? 'Active',
  });
  const [errors, setErrors] = useState<Errors>({});
  const code = hotel?.code ?? suggestedCode;

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setV((s) => ({ ...s, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Errors = {};
    if (!v.name.trim()) err.name = 'Enter the hotel name.';
    if (!v.address.trim()) err.address = 'Enter the hotel address.';
    if (!v.contactPerson.trim()) err.contactPerson = 'Enter a contact person.';
    if (!isPhone(v.phone)) err.phone = 'Enter a valid phone number (10–13 digits).';
    if (!isEmail(v.email)) err.email = 'Enter a valid email address.';
    setErrors(err);
    const first = Object.keys(err)[0];
    if (first) {
      document.getElementById(`hf-${first}`)?.focus();
      return;
    }
    onSave({ ...v, name: v.name.trim(), area: v.area.trim() || 'Varanasi', code });
  };

  const invalid = (k: keyof Values) => (errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `hf-${k}-error` } : {});

  return (
    <Modal
      title={hotel ? `Edit ${hotel.name}` : 'Add hotel'}
      subtitle="Changes update demo state only — nothing is saved to a database."
      onClose={onCancel}
      footer={
        <>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" form="dd-hotel-form" className="dd-btn dd-btn--primary">
            {hotel ? 'Save changes' : 'Add hotel'}
          </button>
        </>
      }
    >
      <form id="dd-hotel-form" className="dd-form-grid" onSubmit={submit} noValidate>
        <Field label="Hotel name" htmlFor="hf-name" required error={errors.name} className="dd-span-2">
          <input id="hf-name" className="dd-input" value={v.name} onChange={(e) => set('name', e.target.value)} {...invalid('name')} />
        </Field>
        <Field label="Attribution code" htmlFor="hf-code" help="Issued by Tripomonk and printed on the QR poster.">
          <div className="dd-input-icon">
            <Lock aria-hidden="true" />
            <input id="hf-code" className="dd-input" value={code} readOnly disabled />
          </div>
        </Field>
        <Field label="Area / landmark" htmlFor="hf-area" help="e.g. Near Dashashwamedh Ghat">
          <input id="hf-area" className="dd-input" value={v.area} onChange={(e) => set('area', e.target.value)} />
        </Field>
        <Field label="Address" htmlFor="hf-address" required error={errors.address} className="dd-span-2">
          <input id="hf-address" className="dd-input" value={v.address} onChange={(e) => set('address', e.target.value)} {...invalid('address')} />
        </Field>
        <Field label="Contact person" htmlFor="hf-contactPerson" required error={errors.contactPerson}>
          <input id="hf-contactPerson" className="dd-input" value={v.contactPerson} onChange={(e) => set('contactPerson', e.target.value)} {...invalid('contactPerson')} />
        </Field>
        <Field label="Phone" htmlFor="hf-phone" required error={errors.phone}>
          <input id="hf-phone" className="dd-input" inputMode="tel" value={v.phone} placeholder="+91 …" onChange={(e) => set('phone', e.target.value)} {...invalid('phone')} />
        </Field>
        <Field label="Email" htmlFor="hf-email" required error={errors.email}>
          <input id="hf-email" className="dd-input" type="email" value={v.email} onChange={(e) => set('email', e.target.value)} {...invalid('email')} />
        </Field>
        <Field label="Status" htmlFor="hf-status">
          <select id="hf-status" className="dd-select" value={v.status} onChange={(e) => set('status', e.target.value as RecordStatus)}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </Field>
        <Field label="Description" htmlFor="hf-description" className="dd-span-2">
          <textarea id="hf-description" className="dd-textarea" value={v.description} onChange={(e) => set('description', e.target.value)} />
        </Field>
      </form>
    </Modal>
  );
}
