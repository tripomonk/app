import { useState } from 'react';
import { CalendarDays, CircleQuestionMark, Clock } from 'lucide-react';
import type { CommissionBasis, CommissionModel, ModuleSettings, PaymentPolicy } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { useToast } from '../../state/Toasts';
import { amountDueNow, describeCommissionRule } from '../../utils/mockCalculations';
import { formatDate, formatINR } from '../../utils/format';
import { ConfirmDialog, DemoTag, Field } from '../../components/ui/primitives';
import { PageHead } from './saShared';

const EXAMPLE = { packageAmount: 2400, accommodationAmount: 4500 };

export function SettingsPage() {
  const { settings, updateSettings, dates, slots, slotAvailability } = useMockStore();
  const toast = useToast();
  const [draft, setDraft] = useState<ModuleSettings>(settings);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirming, setConfirming] = useState(false);

  const dirty = JSON.stringify(draft) !== JSON.stringify(settings);
  const setCommission = (patch: Partial<ModuleSettings['commission']>) =>
    setDraft((d) => ({ ...d, commission: { ...d.commission, ...patch } }));

  const exampleBase =
    draft.commission.basis === 'package' ? EXAMPLE.packageAmount : EXAMPLE.packageAmount + EXAMPLE.accommodationAmount;
  const exampleCommission =
    draft.commission.model === 'unset'
      ? 0
      : draft.commission.model === 'fixed'
        ? draft.commission.value
        : Math.round((exampleBase * draft.commission.value) / 100);
  const exampleTotal = Math.round((EXAMPLE.packageAmount + EXAMPLE.accommodationAmount) * (1 + draft.mockTaxRate));

  const validate = () => {
    const err: Record<string, string> = {};
    const v = draft.commission.value;
    if (draft.commission.model === 'percentage' && (!Number.isFinite(v) || v <= 0 || v > 100)) err.value = 'Enter a percentage between 0 and 100.';
    if (draft.commission.model === 'fixed' && (!Number.isFinite(v) || v <= 0)) err.value = 'Enter an amount greater than ₹0.';
    if (draft.paymentPolicy === 'advance' && (draft.advancePercent < 5 || draft.advancePercent > 95)) err.advance = 'Advance must be between 5% and 95%.';
    if (draft.mockTaxRate < 0 || draft.mockTaxRate > 0.28) err.tax = 'Enter a rate between 0% and 28%.';
    if (!Number.isInteger(draft.maxGuestsPerBooking) || draft.maxGuestsPerBooking < 1 || draft.maxGuestsPerBooking > 20) err.maxGuests = 'Enter a whole number from 1 to 20.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  return (
    <div className="dd-stack-lg dd-sa-settings">
      <PageHead
        title="Settings"
        description="Campaign configuration for the prototype. Changes apply across the demo immediately after saving and reset on reload."
      />

      <div className="dd-callout dd-callout--warn">
        <CircleQuestionMark aria-hidden="true" />
        <div className="dd-stack-sm">
          <strong>Open business decisions — Tripomonk to confirm</strong>
          <ul className="dd-sa-list">
            <li>Hotel commission model: percentage, fixed amount, or another agreed model.</li>
            <li>Accommodation model: whether rooms are sold / reserved through Tripomonk or only recorded as guest context.</li>
            <li>Payment policy: full payment, partial advance, or payment at venue.</li>
            <li>Actual packages, prices, event dates, time slots, guest capacities, cancellation rules and room inventory.</li>
          </ul>
          <span className="dd-small">Values below are demo placeholders until these are decided.</span>
        </div>
      </div>

      <div className="dd-grid-2">
        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Hotel commission rule</h2>
            <DemoTag>Open business decision — demo value</DemoTag>
          </div>
          <div className="dd-card-body dd-stack">
            <fieldset className="dd-sa-fieldset">
              <legend className="dd-label">Commission model</legend>
              <div className="dd-sa-radios">
                {([
                  ['unset', 'Not set', 'No commission is calculated'],
                  ['percentage', 'Percentage', 'A % of the eligible booking value'],
                  ['fixed', 'Fixed amount', 'A fixed ₹ per eligible booking'],
                ] as [CommissionModel, string, string][]).map(([value, label, help]) => (
                  <label key={value} className={`dd-sa-radio ${draft.commission.model === value ? 'checked' : ''}`}>
                    <input
                      type="radio"
                      name="dd-commission-model"
                      value={value}
                      checked={draft.commission.model === value}
                      onChange={() => setCommission({ model: value, value: value === 'fixed' ? Math.max(draft.commission.value, 100) : value === 'percentage' ? Math.min(Math.max(draft.commission.value, 1), 100) : draft.commission.value })}
                    />
                    <span>
                      <strong>{label}</strong>
                      <span className="dd-small dd-muted">{help}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="dd-form-grid">
              <Field
                label={draft.commission.model === 'fixed' ? 'Amount per booking (₹)' : 'Rate (%)'}
                htmlFor="set-value"
                error={errors.value}
              >
                <input
                  id="set-value"
                  className="dd-input"
                  type="number"
                  min={0}
                  step={draft.commission.model === 'fixed' ? 50 : 0.5}
                  disabled={draft.commission.model === 'unset'}
                  value={draft.commission.value}
                  aria-invalid={!!errors.value}
                  onChange={(e) => setCommission({ value: Number(e.target.value) })}
                />
              </Field>
              <Field label="Calculated on" htmlFor="set-basis" help="Taxes and fees are always excluded.">
                <select
                  id="set-basis"
                  className="dd-select"
                  disabled={draft.commission.model !== 'percentage'}
                  value={draft.commission.basis}
                  onChange={(e) => setCommission({ basis: e.target.value as CommissionBasis })}
                >
                  <option value="package">Package value only</option>
                  <option value="package+stay">Package + stay value</option>
                </select>
              </Field>
            </div>

            <div className="dd-sa-preview">
              <div className="dd-eyebrow">Live preview</div>
              <div className="dd-cell-title">{describeCommissionRule(draft)}</div>
              <div className="dd-small dd-muted">
                Example hotel-partner booking: package {formatINR(EXAMPLE.packageAmount)} + stay {formatINR(EXAMPLE.accommodationAmount)} →
                commission <strong>{formatINR(exampleCommission)}</strong>. Direct bookings: none by default.
              </div>
            </div>
          </div>
        </section>

        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Payment policy</h2>
            <DemoTag>Open business decision — demo value</DemoTag>
          </div>
          <div className="dd-card-body dd-stack">
            <fieldset className="dd-sa-fieldset">
              <legend className="dd-label">What customers pay at booking</legend>
              <div className="dd-sa-radios">
                {([
                  ['full', 'Full payment', 'Customer pays the full total online'],
                  ['advance', 'Partial advance', 'Customer pays a % now, the rest later'],
                  ['venue', 'Pay at venue', 'Nothing is collected online'],
                ] as [PaymentPolicy, string, string][]).map(([value, label, help]) => (
                  <label key={value} className={`dd-sa-radio ${draft.paymentPolicy === value ? 'checked' : ''}`}>
                    <input type="radio" name="dd-payment-policy" value={value} checked={draft.paymentPolicy === value} onChange={() => setDraft((d) => ({ ...d, paymentPolicy: value }))} />
                    <span>
                      <strong>{label}</strong>
                      <span className="dd-small dd-muted">{help}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <Field label="Advance (%)" htmlFor="set-advance" error={errors.advance} help="Used only with partial advance.">
              <input
                id="set-advance"
                className="dd-input"
                type="number"
                min={5}
                max={95}
                disabled={draft.paymentPolicy !== 'advance'}
                value={draft.advancePercent}
                aria-invalid={!!errors.advance}
                onChange={(e) => setDraft((d) => ({ ...d, advancePercent: Number(e.target.value) }))}
              />
            </Field>
            <div className="dd-sa-preview">
              <div className="dd-eyebrow">Customer payment step</div>
              <div className="dd-small dd-muted">
                On a {formatINR(exampleTotal)} booking the customer would pay <strong>{formatINR(amountDueNow(exampleTotal, draft))}</strong> now
                (simulated — no real payment is taken).
              </div>
            </div>
          </div>
        </section>

        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Booking rules</h2>
            <DemoTag>Mock values</DemoTag>
          </div>
          <div className="dd-card-body dd-stack">
            <div className="dd-form-grid">
              <Field label="Mock tax & fee rate (%)" htmlFor="set-tax" error={errors.tax} help="Applies to new demo bookings only.">
                <input
                  id="set-tax"
                  className="dd-input"
                  type="number"
                  min={0}
                  max={28}
                  step={0.5}
                  value={Math.round(draft.mockTaxRate * 1000) / 10}
                  aria-invalid={!!errors.tax}
                  onChange={(e) => setDraft((d) => ({ ...d, mockTaxRate: Number(e.target.value) / 100 }))}
                />
              </Field>
              <Field label="Max guests per booking" htmlFor="set-maxguests" error={errors.maxGuests}>
                <input
                  id="set-maxguests"
                  className="dd-input"
                  type="number"
                  min={1}
                  max={20}
                  value={draft.maxGuestsPerBooking}
                  aria-invalid={!!errors.maxGuests}
                  onChange={(e) => setDraft((d) => ({ ...d, maxGuestsPerBooking: Number(e.target.value) }))}
                />
              </Field>
            </div>
            <label className="dd-sa-switch">
              <input
                type="checkbox"
                role="switch"
                checked={draft.bookingsOpen}
                onChange={(e) => setDraft((d) => ({ ...d, bookingsOpen: e.target.checked }))}
              />
              <span className="dd-sa-switch-track" aria-hidden="true" />
              <span>
                <strong>Bookings open</strong>
                <span className="dd-small dd-muted" style={{ display: 'block' }}>
                  {draft.bookingsOpen ? 'Customers can start new bookings (demo).' : 'New bookings are paused (demo).'}
                </span>
              </span>
            </label>
          </div>
        </section>

        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Sample dates & time slots</h2>
            <DemoTag>Read-only sample</DemoTag>
          </div>
          <div className="dd-card-body dd-stack">
            <div className="dd-stack-sm">
              {dates.map((d) => (
                <div key={d.id} className="dd-row" style={{ gap: 8 }}>
                  <CalendarDays size={16} aria-hidden="true" color="var(--dd-subtle)" />
                  <span className="dd-cell-title" style={{ fontSize: 14 }}>{formatDate(d.date)}</span>
                  <span className="dd-small dd-muted">{d.label}</span>
                </div>
              ))}
            </div>
            <div className="dd-table-wrap">
              <table className="dd-table">
                <caption className="dd-sr-only">Seats left per slot (mock)</caption>
                <thead>
                  <tr>
                    <th scope="col">Slot</th>
                    {dates.map((d) => (
                      <th key={d.id} scope="col" className="dd-num">{formatDate(d.date).split(',')[1]?.trim().replace(/ \d{4}$/, '') ?? d.date}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slots.map((s) => (
                    <tr key={s.id}>
                      <td>
                        <span className="dd-row" style={{ gap: 6, flexWrap: 'nowrap' }}>
                          <Clock size={14} aria-hidden="true" color="var(--dd-subtle)" />
                          <span className="dd-cell-title">{s.label}</span>
                        </span>
                        <span className="dd-cell-sub">{s.note}</span>
                      </td>
                      {dates.map((d) => {
                        const left = slotAvailability[`${d.id}|${s.id}`] ?? 0;
                        return (
                          <td key={d.id} className="dd-num">
                            {left === 0 ? <span style={{ color: 'var(--dd-bad)' }}>Sold out</span> : `${left} left`}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="dd-small dd-muted">Real dates, slots and capacities will be configured once confirmed by Tripomonk.</p>
          </div>
        </section>
      </div>

      <div className={`dd-sa-savebar ${dirty ? 'dirty' : ''}`} role="region" aria-label="Save settings">
        <span className="dd-grow dd-small">{dirty ? 'You have unsaved changes.' : 'No changes.'}</span>
        <button type="button" className="dd-btn dd-btn--secondary" disabled={!dirty} onClick={() => { setDraft(settings); setErrors({}); }}>
          Discard
        </button>
        <button type="button" className="dd-btn dd-btn--primary" disabled={!dirty} onClick={() => validate() && setConfirming(true)}>
          Save settings
        </button>
      </div>

      {confirming && (
        <ConfirmDialog
          title="Apply these settings?"
          message={
            <>
              <p>Commission: <strong>{describeCommissionRule(draft)}</strong></p>
              <p>
                Payment policy:{' '}
                <strong>
                  {draft.paymentPolicy === 'full' ? 'Full payment' : draft.paymentPolicy === 'advance' ? `Partial advance (${draft.advancePercent}%)` : 'Pay at venue'}
                </strong>
              </p>
              <p className="dd-muted">
                Dashboards, commission figures and the customer payment step update straight away. This changes demo state only and is not
                saved.
              </p>
            </>
          }
          confirmLabel="Apply settings"
          onConfirm={() => {
            updateSettings(draft);
            setConfirming(false);
            toast('Settings updated in demo state only — not saved.', 'demo');
          }}
          onCancel={() => setConfirming(false)}
        />
      )}
    </div>
  );
}
