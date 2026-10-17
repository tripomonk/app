/**
 * Mock calculations for the Dev Deepawali prototype.
 * Kept separate from UI so the backend can replace them (pricing, tax and
 * commission must be computed server-side in production).
 */
import type {
  Booking,
  BookingAmounts,
  CommissionAdjustment,
  Hotel,
  ModuleSettings,
  Package,
  PaymentStatus,
  Room,
} from '../data/types';

/* ---------------- Pricing ---------------- */

export function priceBooking(pkg: Package, room: Room | null, guests: number, taxRate: number): BookingAmounts {
  const packageAmount = pkg.pricePerGuest * guests;
  const accommodationAmount =
    pkg.includesAccommodation && room && room.pricePerNight ? room.pricePerNight * Math.max(pkg.nights, 1) : 0;
  const taxes = Math.round((packageAmount + accommodationAmount) * taxRate);
  return { packageAmount, accommodationAmount, taxes, total: packageAmount + accommodationAmount + taxes };
}

export function amountDueNow(total: number, settings: ModuleSettings): number {
  if (settings.paymentPolicy === 'venue') return 0;
  if (settings.paymentPolicy === 'advance') return Math.round((total * settings.advancePercent) / 100);
  return total;
}

/* ---------------- Commission ---------------- */

export function isCommissionEligible(b: Booking): boolean {
  return b.channel === 'hotel' && b.bookingStatus !== 'Cancelled';
}

export function commissionBase(b: Booking, settings: ModuleSettings): number {
  return settings.commission.basis === 'package'
    ? b.amounts.packageAmount
    : b.amounts.packageAmount + b.amounts.accommodationAmount;
}

/** Commission for one booking under the current (demo) rule. Direct bookings earn none by default. */
export function commissionFor(b: Booking, settings: ModuleSettings): number {
  if (!isCommissionEligible(b)) return 0;
  const { model, value } = settings.commission;
  if (model === 'unset') return 0;
  if (model === 'fixed') return Math.round(value);
  return Math.round((commissionBase(b, settings) * value) / 100);
}

export function describeCommissionRule(settings: ModuleSettings): string {
  const { model, value, basis } = settings.commission;
  if (model === 'unset') return 'No commission rule set';
  const basisLabel = basis === 'package' ? 'package value' : 'package + stay value';
  if (model === 'fixed') return `Fixed ₹${value.toLocaleString('en-IN')} per eligible booking`;
  return `${value}% of ${basisLabel} (excl. taxes)`;
}

export interface CommissionSummary {
  eligibleValue: number;
  earned: number;
  pending: number;
  approved: number;
  paid: number;
  adjustments: number;
  outstanding: number;
  eligibleBookings: number;
}

export function summarizeCommission(
  bookings: Booking[],
  adjustments: CommissionAdjustment[],
  settings: ModuleSettings,
): CommissionSummary {
  const s: CommissionSummary = {
    eligibleValue: 0, earned: 0, pending: 0, approved: 0, paid: 0, adjustments: 0, outstanding: 0, eligibleBookings: 0,
  };
  for (const b of bookings) {
    if (!isCommissionEligible(b)) continue;
    const c = commissionFor(b, settings);
    s.eligibleBookings += 1;
    s.eligibleValue += commissionBase(b, settings);
    s.earned += c;
    if (b.commissionStatus === 'Pending') s.pending += c;
    if (b.commissionStatus === 'Approved') s.approved += c;
    if (b.commissionStatus === 'Paid') s.paid += c;
  }
  s.adjustments = adjustments.reduce((sum, a) => sum + a.amount, 0);
  s.outstanding = s.approved + s.adjustments;
  return s;
}

export interface PayoutRow {
  id: string;
  hotelId: string;
  date: string;
  amount: number;
  bookings: number;
  reference: string;
}

/** Sample payout batch, derived from bookings whose commission is marked Paid. */
export function derivePayouts(bookings: Booking[], hotels: Hotel[], settings: ModuleSettings, date: string): PayoutRow[] {
  return hotels
    .map((h, i) => {
      const paid = bookings.filter((b) => b.hotelId === h.id && b.commissionStatus === 'Paid');
      return {
        id: `po-${h.id}`,
        hotelId: h.id,
        date,
        amount: paid.reduce((s, b) => s + commissionFor(b, settings), 0),
        bookings: paid.length,
        reference: `PO-2026-10-${String(i + 1).padStart(2, '0')} (demo)`,
      };
    })
    .filter((p) => p.bookings > 0);
}

/* ---------------- Booking metrics ---------------- */

export interface BookingMetrics {
  bookings: number;
  guests: number;
  bookingValue: number;
  collected: number;
  pendingValue: number;
  pendingCount: number;
  paidCount: number;
  cancellations: number;
  refunds: number;
  refundValue: number;
  direct: number;
  hotel: number;
}

export function summarizeBookings(bookings: Booking[]): BookingMetrics {
  const m: BookingMetrics = {
    bookings: 0, guests: 0, bookingValue: 0, collected: 0, pendingValue: 0, pendingCount: 0,
    paidCount: 0, cancellations: 0, refunds: 0, refundValue: 0, direct: 0, hotel: 0,
  };
  for (const b of bookings) {
    m.bookings += 1;
    if (b.channel === 'direct') m.direct += 1;
    else m.hotel += 1;
    if (b.bookingStatus === 'Cancelled') {
      m.cancellations += 1;
    } else {
      m.guests += b.guests;
      m.bookingValue += b.amounts.total;
    }
    if (b.paymentStatus === 'Paid') {
      m.collected += b.amounts.total;
      m.paidCount += 1;
    }
    if (b.paymentStatus === 'Pending' || b.paymentStatus === 'Failed') {
      m.pendingValue += b.amounts.total;
      m.pendingCount += 1;
    }
    if (b.paymentStatus === 'Refunded') {
      m.refunds += 1;
      m.refundValue += b.amounts.total;
    }
  }
  return m;
}

export function dayKey(iso: string): string {
  return iso.slice(0, 10);
}

export interface DailyPoint {
  date: string;
  hotel: number;
  direct: number;
  total: number;
  value: number;
}

/** Bookings created per day between from and to (inclusive), split by channel. */
export function dailyTrend(bookings: Booking[], from: string, to: string): DailyPoint[] {
  const days: DailyPoint[] = [];
  const start = new Date(`${from}T00:00:00`);
  const end = new Date(`${to}T00:00:00`);
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    days.push({ date: key, hotel: 0, direct: 0, total: 0, value: 0 });
  }
  const idx = new Map(days.map((d, i) => [d.date, i]));
  for (const b of bookings) {
    const i = idx.get(dayKey(b.createdAt));
    if (i === undefined) continue;
    const p = days[i];
    if (b.channel === 'hotel') p.hotel += 1;
    else p.direct += 1;
    p.total += 1;
    if (b.bookingStatus !== 'Cancelled') p.value += b.amounts.total;
  }
  return days;
}

export function paymentBreakdown(bookings: Booking[]): { status: PaymentStatus; count: number; value: number }[] {
  const order: PaymentStatus[] = ['Paid', 'Pending', 'Failed', 'Refunded'];
  return order.map((status) => {
    const list = bookings.filter((b) => b.paymentStatus === status);
    return { status, count: list.length, value: list.reduce((s, b) => s + b.amounts.total, 0) };
  });
}

export type Period = 'daily' | 'weekly' | 'monthly';

export interface PeriodRow {
  key: string;
  label: string;
  bookings: number;
  guests: number;
  value: number;
  collected: number;
  pending: number;
  commission: number;
  cancellations: number;
}

function weekStart(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  const day = (d.getDay() + 6) % 7; // Monday = 0
  d.setDate(d.getDate() - day);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function groupByPeriod(bookings: Booking[], period: Period, settings: ModuleSettings): PeriodRow[] {
  const map = new Map<string, PeriodRow>();
  const fmt = (s: string) =>
    new Date(`${s}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  for (const b of bookings) {
    const day = dayKey(b.createdAt);
    let key = day;
    let label = fmt(day);
    if (period === 'weekly') {
      key = weekStart(day);
      const end = new Date(`${key}T00:00:00`);
      end.setDate(end.getDate() + 6);
      const endKey = `${end.getFullYear()}-${String(end.getMonth() + 1).padStart(2, '0')}-${String(end.getDate()).padStart(2, '0')}`;
      label = `${fmt(key)} – ${fmt(endKey)}`;
    } else if (period === 'monthly') {
      key = day.slice(0, 7);
      label = new Date(`${day}T00:00:00`).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    }
    if (!map.has(key)) {
      map.set(key, { key, label, bookings: 0, guests: 0, value: 0, collected: 0, pending: 0, commission: 0, cancellations: 0 });
    }
    const r = map.get(key)!;
    r.bookings += 1;
    if (b.bookingStatus === 'Cancelled') r.cancellations += 1;
    else {
      r.guests += b.guests;
      r.value += b.amounts.total;
    }
    if (b.paymentStatus === 'Paid') r.collected += b.amounts.total;
    if (b.paymentStatus === 'Pending' || b.paymentStatus === 'Failed') r.pending += b.amounts.total;
    r.commission += commissionFor(b, settings);
  }
  return [...map.values()].sort((a, b) => b.key.localeCompare(a.key));
}

export function nextBookingId(bookings: Booking[]): string {
  const max = bookings.reduce((m, b) => Math.max(m, Number(b.id.split('-')[1]) || 0), 1000);
  return `DD2026-${max + 1}`;
}
