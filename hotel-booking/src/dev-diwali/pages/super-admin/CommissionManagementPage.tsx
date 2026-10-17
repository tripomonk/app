import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { BadgeCheck, CircleAlert, CircleCheck, Plus, Settings, Wallet } from 'lucide-react';
import type { CommissionStatus } from '../../data/types';
import { DEMO_TODAY, MOCK_PAYOUT_DATE } from '../../data/mockDevDiwaliData';
import { useMockStore } from '../../state/MockStore';
import { useToast } from '../../state/Toasts';
import {
  commissionBase,
  commissionFor,
  derivePayouts,
  describeCommissionRule,
  summarizeCommission,
} from '../../utils/mockCalculations';
import type { CommissionSummary } from '../../utils/mockCalculations';
import { formatDate, formatINR } from '../../utils/format';
import { DD_PATHS } from '../../paths';
import { CommissionCard } from '../../components/CommissionCard';
import { FilterBar, SelectFilter } from '../../components/FilterBar';
import { HotelThumb } from '../../components/Thumbs';
import {
  ConfirmDialog,
  DemoBanner,
  DemoTag,
  EmptyState,
  Field,
  Modal,
  Pagination,
  Segmented,
  StatusBadge,
  paginate,
} from '../../components/ui/primitives';
import { ExportButtons, PageHead, useHotelOptions } from './saShared';

type Tab = 'overview' | 'bookings' | 'adjustments' | 'payouts';
const PAGE_SIZE = 15;

const STATUS_FILTER: { value: 'all' | CommissionStatus; label: string }[] = [
  { value: 'all', label: 'All statuses' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Paid', label: 'Paid' },
  { value: 'Void', label: 'Void' },
];

export function CommissionManagementPage() {
  const store = useMockStore();
  const { bookings, hotels, adjustments, settings, hotelById, setCommissionStatus, addAdjustment } = store;
  const toast = useToast();
  const navigate = useNavigate();
  const hotelOptions = useHotelOptions();

  const [tab, setTab] = useState<Tab>('overview');
  const [hotel, setHotel] = useState('all');
  const [status, setStatus] = useState<'all' | CommissionStatus>('all');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [confirm, setConfirm] = useState<null | { to: CommissionStatus; ids: string[] }>(null);
  const [adding, setAdding] = useState(false);

  const overall = useMemo(() => summarizeCommission(bookings, adjustments, settings), [bookings, adjustments, settings]);
  const perHotel = useMemo(
    () =>
      hotels
        .map((h) => ({
          h,
          s: summarizeCommission(
            bookings.filter((b) => b.hotelId === h.id),
            adjustments.filter((a) => a.hotelId === h.id),
            settings,
          ),
        }))
        .filter((x) => x.s.eligibleBookings > 0 || x.s.adjustments !== 0 || x.h.status === 'Active'),
    [hotels, bookings, adjustments, settings],
  );

  const partner = bookings
    .filter((b) => b.channel === 'hotel')
    .filter((b) => (hotel === 'all' || b.hotelId === hotel) && (status === 'all' || b.commissionStatus === status))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const pageRows = paginate(partner, page, PAGE_SIZE);

  const selectedRows = bookings.filter((b) => selected.has(b.id));
  const approvable = selectedRows.filter((b) => b.commissionStatus === 'Pending' && b.paymentStatus === 'Paid' && b.bookingStatus === 'Confirmed');
  const payable = selectedRows.filter((b) => b.commissionStatus === 'Approved');

  const toggle = (id: string) =>
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  const allOnPage = pageRows.length > 0 && pageRows.every((b) => selected.has(b.id));
  const togglePage = () =>
    setSelected((s) => {
      const n = new Set(s);
      if (allOnPage) pageRows.forEach((b) => n.delete(b.id));
      else pageRows.forEach((b) => n.add(b.id));
      return n;
    });

  const payouts = derivePayouts(bookings, hotels, settings, MOCK_PAYOUT_DATE);
  const sumKeys: (keyof CommissionSummary)[] = ['eligibleValue', 'earned', 'pending', 'approved', 'paid', 'adjustments', 'outstanding'];

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="Commissions & Earnings"
        description="Hotel commission is calculated from the rule in Settings. Direct bookings earn no hotel commission by default."
        actions={
          <ExportButtons
            title="Commission report"
            build={() => ({
              columns: ['Hotel', 'Code', 'Eligible bookings', 'Eligible value (₹)', 'Earned (₹)', 'Pending (₹)', 'Approved (₹)', 'Paid (₹)', 'Adjustments (₹)', 'Outstanding (₹)'],
              rows: perHotel.map(({ h, s }) => [h.name, h.code, s.eligibleBookings, s.eligibleValue, s.earned, s.pending, s.approved, s.paid, s.adjustments, s.outstanding]),
            })}
          />
        }
      />

      <DemoBanner>
        <strong>Demo commission values.</strong> The commission model and rate are open business decisions. Amounts below use the demo rule
        and update instantly if you change it in Settings. Status changes affect demo state only.
      </DemoBanner>

      {settings.commission.model === 'unset' && (
        <div className="dd-callout dd-callout--warn">
          <CircleAlert aria-hidden="true" />
          <span>No commission rule is configured, so every commission value shows ₹0 until a rule is set in Settings.</span>
        </div>
      )}

      <Segmented<Tab>
        label="Commission sections"
        value={tab}
        onChange={(t) => { setTab(t); setPage(1); }}
        options={[
          { value: 'overview', label: 'Overview' },
          { value: 'bookings', label: 'Booking calculations' },
          { value: 'adjustments', label: `Adjustments (${adjustments.length})` },
          { value: 'payouts', label: 'Payout history' },
        ]}
      />

      {tab === 'overview' && (
        <div className="dd-stack">
          <div className="dd-grid-2" style={{ alignItems: 'start' }}>
            <CommissionCard summary={overall} rule={describeCommissionRule(settings)} title="All hotels" />
            <div className="dd-stack" style={{ minWidth: 0 }}>
            <section className="dd-card dd-card-pad dd-sa-rule">
              <div className="dd-sa-rule-icon" aria-hidden="true"><Wallet /></div>
              <div className="dd-grow">
                <div className="dd-eyebrow">Current rule · demo value</div>
                <div className="dd-cell-title" style={{ fontSize: 17 }}>{describeCommissionRule(settings)}</div>
                <div className="dd-small dd-muted">Applies to hotel-partner bookings that are not cancelled. Direct bookings: none by default.</div>
              </div>
              <button type="button" className="dd-btn dd-btn--secondary" onClick={() => navigate(DD_PATHS.admin.settings)}>
                <Settings /> Change rule
              </button>
            </section>
            <section className="dd-card">
              <div className="dd-card-head"><h2>Commission statuses</h2></div>
              <div className="dd-card-body">
                <dl className="dd-dl dd-sa-statuslist">
                  <dt><StatusBadge kind="commission" value="Pending" /></dt>
                  <dd>Booking not paid yet, or paid and waiting for Tripomonk's approval.</dd>
                  <dt><StatusBadge kind="commission" value="Approved" /></dt>
                  <dd>Checked by Tripomonk and included in the next payout.</dd>
                  <dt><StatusBadge kind="commission" value="Paid" /></dt>
                  <dd>Settled to the hotel in a payout batch.</dd>
                  <dt><StatusBadge kind="commission" value="Void" /></dt>
                  <dd>Booking cancelled, so no commission is due.</dd>
                  <dt><StatusBadge kind="commission" value="Not applicable" /></dt>
                  <dd>Tripomonk Direct booking. No hotel commission by default.</dd>
                </dl>
              </div>
            </section>
            </div>
          </div>
          <section className="dd-card">
            <div className="dd-card-head">
              <h2>Hotel-wise summary</h2>
              <DemoTag>Mock data</DemoTag>
            </div>
            <div className="dd-card-body" style={{ padding: 0 }}>
              <div className="dd-sa-flush">
                <div className="dd-table-wrap">
                  <table className="dd-table">
                    <caption className="dd-sr-only">Commission by hotel</caption>
                    <thead>
                      <tr>
                        <th scope="col">Hotel</th>
                        <th scope="col" className="dd-num">Eligible value</th>
                        <th scope="col" className="dd-num">Earned</th>
                        <th scope="col" className="dd-num">Pending</th>
                        <th scope="col" className="dd-num">Approved</th>
                        <th scope="col" className="dd-num">Paid</th>
                        <th scope="col" className="dd-num">Adjustments</th>
                        <th scope="col" className="dd-num">Outstanding</th>
                      </tr>
                    </thead>
                    <tbody>
                      {perHotel.map(({ h, s }) => (
                        <tr key={h.id} className="dd-row-link" onClick={() => { setHotel(h.id); setTab('bookings'); setPage(1); }}>
                          <td>
                            <div className="dd-row" style={{ gap: 10, flexWrap: 'nowrap' }}>
                              <HotelThumb tint={h.tint} label={h.name} size={30} />
                              <div>
                                <div className="dd-cell-title dd-nowrap">{h.name}</div>
                                <div className="dd-cell-sub dd-nowrap">{s.eligibleBookings} eligible bookings</div>
                              </div>
                            </div>
                          </td>
                          {sumKeys.map((k) => (
                            <td key={k} className="dd-num">{formatINR(s[k])}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>All hotels</td>
                        {sumKeys.map((k) => (
                          <td key={k} className="dd-num">{formatINR(overall[k])}</td>
                        ))}
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {tab === 'bookings' && (
        <div className="dd-stack">
          <FilterBar onReset={() => { setHotel('all'); setStatus('all'); setPage(1); }} active={hotel !== 'all' || status !== 'all'}>
            <SelectFilter id="sa-com-hotel" label="Hotel" value={hotel} onChange={(v) => { setHotel(v); setPage(1); }} options={hotelOptions} />
            <SelectFilter id="sa-com-status" label="Commission status" value={status} onChange={(v) => { setStatus(v); setPage(1); }} options={STATUS_FILTER} />
          </FilterBar>

          <div className="dd-sa-bulkbar" aria-live="polite">
            <span className="dd-grow">
              {selected.size === 0
                ? 'Select bookings to approve commission or mark it as paid.'
                : `${selected.size} selected · ${approvable.length} can be approved · ${payable.length} can be marked paid`}
            </span>
            <button
              type="button"
              className="dd-btn dd-btn--secondary dd-btn--sm"
              disabled={approvable.length === 0}
              onClick={() => setConfirm({ to: 'Approved', ids: approvable.map((b) => b.id) })}
            >
              <BadgeCheck /> Approve ({approvable.length})
            </button>
            <button
              type="button"
              className="dd-btn dd-btn--primary dd-btn--sm"
              disabled={payable.length === 0}
              onClick={() => setConfirm({ to: 'Paid', ids: payable.map((b) => b.id) })}
            >
              <CircleCheck /> Mark as paid ({payable.length})
            </button>
            {selected.size > 0 && (
              <button type="button" className="dd-link-btn" onClick={() => setSelected(new Set())}>Clear</button>
            )}
          </div>

          <div className="dd-table-wrap">
            {partner.length === 0 ? (
              <EmptyState icon={<Wallet />} title="No commission records match">Change the hotel or status filter.</EmptyState>
            ) : (
              <table className="dd-table">
                <caption className="dd-sr-only">Booking-level commission calculations</caption>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: 40 }}>
                      <input type="checkbox" aria-label="Select all on this page" checked={allOnPage} onChange={togglePage} className="dd-sa-cb" />
                    </th>
                    <th scope="col">Booking</th>
                    <th scope="col">Hotel</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Booking</th>
                    <th scope="col" className="dd-num">Eligible value</th>
                    <th scope="col">Calculation</th>
                    <th scope="col" className="dd-num">Commission</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pageRows.map((b) => {
                    const cancelled = b.bookingStatus === 'Cancelled';
                    const base = cancelled ? 0 : commissionBase(b, settings);
                    const calc =
                      cancelled ? 'Cancelled — not eligible'
                        : settings.commission.model === 'unset' ? 'No rule set'
                          : settings.commission.model === 'fixed' ? `Fixed ${formatINR(settings.commission.value)}`
                            : `${settings.commission.value}% × ${formatINR(base)}`;
                    return (
                      <tr key={b.id}>
                        <td>
                          <input type="checkbox" className="dd-sa-cb" aria-label={`Select ${b.id}`} checked={selected.has(b.id)} onChange={() => toggle(b.id)} />
                        </td>
                        <td>
                          <div className="dd-cell-title dd-nowrap dd-sa-tnum">{b.id}</div>
                          <div className="dd-cell-sub">{b.customer.name}</div>
                        </td>
                        <td>{hotelById(b.hotelId)?.name}</td>
                        <td><StatusBadge kind="payment" value={b.paymentStatus} /></td>
                        <td><StatusBadge kind="booking" value={b.bookingStatus} /></td>
                        <td className="dd-num">{cancelled ? '—' : formatINR(base)}</td>
                        <td className="dd-small dd-muted dd-nowrap">{calc}</td>
                        <td className="dd-num">{formatINR(commissionFor(b, settings))}</td>
                        <td><StatusBadge kind="commission" value={b.commissionStatus} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          {partner.length > 0 && <Pagination page={page} pageSize={PAGE_SIZE} total={partner.length} onPage={setPage} />}
          <p className="dd-small dd-muted">
            Approve is available for Paid + Confirmed bookings with Pending commission. Mark as paid moves Approved commission to Paid. Direct
            bookings are not listed — they earn no hotel commission by default.
          </p>
        </div>
      )}

      {tab === 'adjustments' && (
        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Adjustments</h2>
            <button type="button" className="dd-btn dd-btn--primary dd-btn--sm" onClick={() => setAdding(true)}>
              <Plus /> Add adjustment
            </button>
          </div>
          <div className="dd-card-body" style={{ padding: 0 }}>
            <div className="dd-sa-flush">
              <div className="dd-table-wrap">
                {adjustments.length === 0 ? (
                  <EmptyState icon={<Wallet />} title="No adjustments yet">Manual credits or corrections appear here.</EmptyState>
                ) : (
                  <table className="dd-table">
                    <caption className="dd-sr-only">Commission adjustments</caption>
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Hotel</th>
                        <th scope="col">Booking</th>
                        <th scope="col">Reason</th>
                        <th scope="col" className="dd-num">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...adjustments].sort((a, b) => b.date.localeCompare(a.date)).map((a) => (
                        <tr key={a.id}>
                          <td className="dd-nowrap">{formatDate(a.date)}</td>
                          <td>{hotelById(a.hotelId)?.name}</td>
                          <td className="dd-nowrap dd-sa-tnum">{a.bookingId ?? '—'}</td>
                          <td>{a.reason}</td>
                          <td className="dd-num" style={{ color: a.amount < 0 ? 'var(--dd-bad)' : 'var(--dd-good)', fontWeight: 600 }}>
                            {a.amount < 0 ? '−' : '+'}{formatINR(Math.abs(a.amount))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {tab === 'payouts' && (
        <section className="dd-card">
          <div className="dd-card-head">
            <h2>Payout history</h2>
            <DemoTag>Sample payout batch</DemoTag>
          </div>
          <div className="dd-card-body" style={{ padding: 0 }}>
            <div className="dd-sa-flush">
              <div className="dd-table-wrap">
                {payouts.length === 0 ? (
                  <EmptyState icon={<Wallet />} title="No payouts yet">Commission marked as Paid appears here.</EmptyState>
                ) : (
                  <table className="dd-table">
                    <caption className="dd-sr-only">Payout history</caption>
                    <thead>
                      <tr>
                        <th scope="col">Reference</th>
                        <th scope="col">Hotel</th>
                        <th scope="col">Batch date</th>
                        <th scope="col" className="dd-num">Bookings</th>
                        <th scope="col" className="dd-num">Amount</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payouts.map((p) => (
                        <tr key={p.id}>
                          <td className="dd-nowrap dd-sa-tnum">{p.reference}</td>
                          <td>{hotelById(p.hotelId)?.name}</td>
                          <td className="dd-nowrap">{formatDate(p.date)}</td>
                          <td className="dd-num">{p.bookings}</td>
                          <td className="dd-num">{formatINR(p.amount)}</td>
                          <td><StatusBadge kind="commission" value="Paid" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
          <div className="dd-card-foot dd-small dd-muted">
            Derived from bookings whose commission is marked Paid. No money moves in this prototype; payouts are handled by finance later.
          </div>
        </section>
      )}

      {confirm && (
        <ConfirmDialog
          title={confirm.to === 'Approved' ? `Approve commission for ${confirm.ids.length} bookings?` : `Mark ${confirm.ids.length} commissions as paid?`}
          message={
            <p>
              {confirm.to === 'Approved'
                ? 'Approved commission is ready for the next payout batch.'
                : 'This records the commission as paid out to the hotel.'}{' '}
              Total {formatINR(bookings.filter((b) => confirm.ids.includes(b.id)).reduce((s, b) => s + commissionFor(b, settings), 0))}. Demo state
              only — no payment is made.
            </p>
          }
          confirmLabel={confirm.to === 'Approved' ? 'Approve' : 'Mark as paid'}
          onConfirm={() => {
            setCommissionStatus(confirm.ids, confirm.to);
            toast(`${confirm.ids.length} commission records set to ${confirm.to} in demo state — not saved.`, 'demo');
            setSelected(new Set());
            setConfirm(null);
          }}
          onCancel={() => setConfirm(null)}
        />
      )}

      {adding && (
        <AdjustmentModal
          onCancel={() => setAdding(false)}
          onSave={(a) => {
            addAdjustment(a);
            toast(`Adjustment of ${a.amount < 0 ? '−' : '+'}${formatINR(Math.abs(a.amount))} added for ${hotelById(a.hotelId)?.name} in demo state.`, 'demo');
            setAdding(false);
          }}
        />
      )}
    </div>
  );
}

function AdjustmentModal({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: (a: { hotelId: string; bookingId: string | null; amount: number; reason: string; date: string }) => void;
}) {
  const { hotels, bookings } = useMockStore();
  const [hotelId, setHotelId] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const hotelBookings = bookings.filter((b) => b.hotelId === hotelId);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!hotelId) err.hotelId = 'Choose a hotel.';
    const n = Number(amount.replace(/[,\s₹]/g, ''));
    if (!amount.trim() || !Number.isFinite(n) || !Number.isInteger(n) || n === 0) err.amount = 'Enter a whole rupee amount. Use a minus sign for deductions.';
    if (!reason.trim()) err.reason = 'Add a short reason.';
    setErrors(err);
    const first = Object.keys(err)[0];
    if (first) {
      document.getElementById(`adj-${first}`)?.focus();
      return;
    }
    onSave({ hotelId, bookingId: bookingId || null, amount: n, reason: reason.trim(), date: DEMO_TODAY });
  };

  return (
    <Modal
      title="Add commission adjustment"
      subtitle="Demo state only — not saved."
      onClose={onCancel}
      footer={
        <>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={onCancel}>Cancel</button>
          <button type="submit" form="dd-adj-form" className="dd-btn dd-btn--primary">Add adjustment</button>
        </>
      }
    >
      <form id="dd-adj-form" className="dd-form-grid" onSubmit={submit} noValidate>
        <Field label="Hotel" htmlFor="adj-hotelId" required error={errors.hotelId} className="dd-span-2">
          <select
            id="adj-hotelId"
            className="dd-select"
            value={hotelId}
            aria-invalid={!!errors.hotelId}
            onChange={(e) => { setHotelId(e.target.value); setBookingId(''); }}
          >
            <option value="">Select a hotel…</option>
            {hotels.map((h) => (
              <option key={h.id} value={h.id}>{h.name} ({h.code})</option>
            ))}
          </select>
        </Field>
        <Field label="Related booking" htmlFor="adj-bookingId" help="Optional">
          <select id="adj-bookingId" className="dd-select" value={bookingId} disabled={!hotelId} onChange={(e) => setBookingId(e.target.value)}>
            <option value="">{hotelId ? 'None' : 'Choose a hotel first'}</option>
            {hotelBookings.map((b) => (
              <option key={b.id} value={b.id}>{b.id} · {b.customer.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Amount (₹)" htmlFor="adj-amount" required error={errors.amount} help="Use −250 for a deduction, 500 for a credit.">
          <input id="adj-amount" className="dd-input" inputMode="numeric" value={amount} aria-invalid={!!errors.amount} onChange={(e) => setAmount(e.target.value)} />
        </Field>
        <Field label="Reason" htmlFor="adj-reason" required error={errors.reason} className="dd-span-2">
          <textarea id="adj-reason" className="dd-textarea" value={reason} aria-invalid={!!errors.reason} onChange={(e) => setReason(e.target.value)} />
        </Field>
      </form>
    </Modal>
  );
}
