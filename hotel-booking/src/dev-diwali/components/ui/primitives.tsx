/**
 * Small shared UI pieces for the Dev Deepawali module.
 * Swap for the existing Tripomonk design-system components where they exist.
 */
import { useEffect, useId, useRef } from 'react';
import type { ReactNode } from 'react';
import {
  Ban,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CircleX,
  Clock,
  FlaskConical,
  Globe,
  Hotel,
  Minus,
  RotateCcw,
  X,
} from 'lucide-react';
import type {
  Availability,
  BookingStatus,
  Channel,
  CommissionStatus,
  PaymentStatus,
  RecordStatus,
} from '../../data/types';
import logoDark from '../../assets/tripomonk-logo-dark.png';
import logoLight from '../../assets/tripomonk-logo-light.png';
import logoIcon from '../../assets/tripomonk-icon.png';

/* ---------------- Logo ---------------- */

export function Logo({ variant = 'dark', height = 30 }: { variant?: 'dark' | 'light' | 'icon'; height?: number }) {
  // Wrapped so flex parents never stretch the image.
  if (variant === 'icon') {
    return (
      <span className="dd-logo">
        <img src={logoIcon} alt="Tripomonk" style={{ height, width: height, borderRadius: height * 0.22 }} />
      </span>
    );
  }
  return (
    <span className="dd-logo">
      <img src={variant === 'light' ? logoLight : logoDark} alt="Tripomonk" style={{ height, width: 'auto', maxWidth: 'none' }} />
    </span>
  );
}

/* ---------------- Demo labelling ---------------- */

export function DemoTag({ children = 'Mock data' }: { children?: ReactNode }) {
  return (
    <span className="dd-demo-tag">
      <FlaskConical aria-hidden="true" />
      {children}
    </span>
  );
}

export function DemoBanner({ children }: { children: ReactNode }) {
  return (
    <div className="dd-demo-banner" role="note">
      <FlaskConical aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

/* ---------------- Status badges (icon + label, never colour alone) ---------------- */

type Tone = 'good' | 'warn' | 'bad' | 'violet' | 'neutral' | 'blue' | 'gold' | 'direct';

const PAYMENT: Record<PaymentStatus, [Tone, typeof Clock]> = {
  Paid: ['good', CircleCheck],
  Pending: ['warn', Clock],
  Failed: ['bad', CircleX],
  Refunded: ['neutral', RotateCcw],
};
const BOOKING: Record<BookingStatus, [Tone, typeof Clock]> = {
  Confirmed: ['good', CircleCheck],
  Pending: ['warn', Clock],
  Cancelled: ['bad', Ban],
};
const COMMISSION: Record<CommissionStatus, [Tone, typeof Clock]> = {
  Pending: ['warn', Clock],
  Approved: ['violet', BadgeCheck],
  Paid: ['good', CircleCheck],
  'Not applicable': ['neutral', Minus],
  Void: ['neutral', Ban],
};
const RECORD: Record<RecordStatus, [Tone, typeof Clock]> = {
  Active: ['good', CircleCheck],
  Inactive: ['neutral', Minus],
};
const AVAIL: Record<Availability, [Tone, typeof Clock]> = {
  Available: ['good', CircleCheck],
  'Few left': ['warn', CircleAlert],
  'Sold out': ['bad', Ban],
};

type StatusProps =
  | { kind: 'payment'; value: PaymentStatus }
  | { kind: 'booking'; value: BookingStatus }
  | { kind: 'commission'; value: CommissionStatus }
  | { kind: 'record'; value: RecordStatus }
  | { kind: 'availability'; value: Availability };

export function StatusBadge(props: StatusProps) {
  const table =
    props.kind === 'payment' ? PAYMENT
      : props.kind === 'booking' ? BOOKING
        : props.kind === 'commission' ? COMMISSION
          : props.kind === 'record' ? RECORD
            : AVAIL;
  const [tone, Icon] = (table as Record<string, [Tone, typeof Clock]>)[props.value];
  return (
    <span className={`dd-badge dd-badge--${tone}`}>
      <Icon aria-hidden="true" />
      {props.value}
    </span>
  );
}

export function ChannelBadge({ channel, short = false }: { channel: Channel; short?: boolean }) {
  return channel === 'hotel' ? (
    <span className="dd-badge dd-badge--blue">
      <Hotel aria-hidden="true" />
      {short ? 'Hotel' : 'Hotel partner'}
    </span>
  ) : (
    <span className="dd-badge dd-badge--direct">
      <Globe aria-hidden="true" />
      {short ? 'Direct' : 'Tripomonk Direct'}
    </span>
  );
}

export function Badge({ tone = 'neutral', children }: { tone?: Tone; children: ReactNode }) {
  return <span className={`dd-badge dd-badge--${tone}`}>{children}</span>;
}

/* ---------------- Modal ---------------- */

interface ModalProps {
  title: ReactNode;
  subtitle?: ReactNode;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'wide';
}

export function Modal({ title, subtitle, onClose, children, footer, size = 'md' }: ModalProps) {
  const titleId = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const node = ref.current;
    const first = node?.querySelector<HTMLElement>(
      'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([data-modal-close])',
    );
    (first ?? node)?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      prev?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dd-modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={ref}
        className={`dd-modal ${size === 'wide' ? 'dd-modal--wide' : size === 'sm' ? 'dd-modal--sm' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <div className="dd-modal-head">
          <div className="dd-stack-sm" style={{ gap: 4 }}>
            <h2 id={titleId}>{title}</h2>
            {subtitle && <div className="dd-muted dd-small">{subtitle}</div>}
          </div>
          <button type="button" className="dd-btn dd-btn--ghost dd-btn--icon dd-btn--sm" aria-label="Close" data-modal-close onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="dd-modal-body">{children}</div>
        {footer && <div className="dd-modal-foot">{footer}</div>}
      </div>
    </div>
  );
}

/* ---------------- Confirmation dialog ---------------- */

export function ConfirmDialog({
  title,
  message,
  confirmLabel,
  tone = 'primary',
  onConfirm,
  onCancel,
}: {
  title: string;
  message: ReactNode;
  confirmLabel: string;
  tone?: 'primary' | 'danger';
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <Modal
      title={title}
      onClose={onCancel}
      size="sm"
      footer={
        <>
          <button type="button" className="dd-btn dd-btn--secondary" onClick={onCancel}>
            Cancel
          </button>
          <button
            type="button"
            className={`dd-btn ${tone === 'danger' ? 'dd-btn--danger' : 'dd-btn--primary'}`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </>
      }
    >
      <div className="dd-stack-sm" style={{ fontSize: 14.5 }}>
        {message}
      </div>
    </Modal>
  );
}

/* ---------------- Empty state ---------------- */

export function EmptyState({
  icon,
  title,
  children,
  action,
}: {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="dd-empty">
      <div className="dd-empty-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
}

/* ---------------- Pagination ---------------- */

export function Pagination({
  page,
  pageSize,
  total,
  onPage,
}: {
  page: number;
  pageSize: number;
  total: number;
  onPage: (p: number) => void;
}) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(total, page * pageSize);
  return (
    <div className="dd-pagination">
      <span className="dd-num">
        Showing {from}–{to} of {total}
      </span>
      <div className="dd-row">
        <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" disabled={page <= 1} onClick={() => onPage(page - 1)}>
          <ChevronLeft /> Previous
        </button>
        <span className="dd-num" aria-live="polite">
          Page {page} of {pages}
        </span>
        <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" disabled={page >= pages} onClick={() => onPage(page + 1)}>
          Next <ChevronRight />
        </button>
      </div>
    </div>
  );
}

/* ---------------- Segmented control ---------------- */

export function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div className="dd-seg" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.value} type="button" aria-pressed={value === o.value} onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ---------------- Field wrapper ---------------- */

export function Field({
  label,
  htmlFor,
  required,
  help,
  error,
  children,
  className = '',
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  help?: ReactNode;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`dd-field ${className}`}>
      <label className="dd-label" htmlFor={htmlFor}>
        {label}
        {required && <span className="dd-req" aria-hidden="true">*</span>}
      </label>
      {children}
      {error ? (
        <span className="dd-error" id={`${htmlFor}-error`}>
          <CircleAlert aria-hidden="true" />
          {error}
        </span>
      ) : (
        help && <span className="dd-help" id={`${htmlFor}-help`}>{help}</span>
      )}
    </div>
  );
}

/** Small helper to paginate a list. */
export function paginate<T>(list: T[], page: number, pageSize: number): T[] {
  return list.slice((page - 1) * pageSize, page * pageSize);
}
