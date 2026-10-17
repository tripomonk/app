/** Display helpers (locale: en-IN). */

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

export function formatINR(n: number): string {
  return inr.format(Math.round(n));
}

/** Compact INR for axis ticks / tiles: ₹1.2L, ₹45K */
export function formatINRCompact(n: number): string {
  const abs = Math.abs(n);
  const sign = n < 0 ? '−' : '';
  if (abs >= 1e7) return `${sign}₹${(abs / 1e7).toFixed(abs >= 1e8 ? 0 : 1).replace(/\.0$/, '')}Cr`;
  if (abs >= 1e5) return `${sign}₹${(abs / 1e5).toFixed(abs >= 1e6 ? 1 : 2).replace(/\.?0+$/, '')}L`;
  if (abs >= 1e3) return `${sign}₹${(abs / 1e3).toFixed(abs >= 1e4 ? 0 : 1).replace(/\.0$/, '')}K`;
  return `${sign}₹${abs}`;
}

function toDate(s: string): Date {
  return s.length === 10 ? new Date(`${s}T00:00:00`) : new Date(s);
}

/** "Tue, 24 Nov 2026" */
export function formatDate(s: string): string {
  return toDate(s).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

/** "24 Nov" */
export function formatDateShort(s: string): string {
  return toDate(s).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

/** "Tue 24" */
export function formatWeekdayDay(s: string): { weekday: string; day: string; month: string } {
  const d = toDate(s);
  return {
    weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }),
    day: d.toLocaleDateString('en-IN', { day: 'numeric' }),
    month: d.toLocaleDateString('en-IN', { month: 'short' }),
  };
}

/** "12 Oct 2026, 4:05 pm" */
export function formatDateTime(s: string): string {
  const d = toDate(s);
  return `${d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}, ${d
    .toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })
    .toLowerCase()}`;
}

/** "12 Oct, 4:05 pm" — compact, for tables */
export function formatDateTimeShort(s: string): string {
  const d = toDate(s);
  return `${d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}, ${d
    .toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })
    .toLowerCase()}`;
}

/** Hotel staff see a masked mobile number: "+91 ••••••4521" */
export function maskMobile(mobile: string): string {
  const digits = mobile.replace(/\D/g, '');
  return `+91 ••••••${digits.slice(-4)}`;
}

export function pluralize(n: number, one: string, many = `${one}s`): string {
  return `${n.toLocaleString('en-IN')} ${n === 1 ? one : many}`;
}
