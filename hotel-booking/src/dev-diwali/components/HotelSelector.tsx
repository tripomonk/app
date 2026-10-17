import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import { Check, ChevronRight, CircleAlert, KeyRound, Search } from 'lucide-react';
import type { Hotel } from '../data/types';
import { HotelThumb } from './Thumbs';

interface Props {
  hotels: Hotel[];
  selectedId: string | null;
  onSelect: (hotelId: string, via: 'list' | 'code') => void;
  /** Compact mode is used for accommodation choice on direct bookings */
  showCode?: boolean;
  helper?: string;
}

/**
 * Searchable hotel list + hotel attribution code entry.
 * Codes are matched against mock data only; production validation happens server-side.
 */
export function HotelSelector({ hotels, selectedId, onSelect, showCode = true, helper }: Props) {
  const id = useId();
  const [query, setQuery] = useState('');
  const [code, setCode] = useState('');
  const [codeMsg, setCodeMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [expanded, setExpanded] = useState(!selectedId);

  const selected = hotels.find((h) => h.id === selectedId);
  const q = query.trim().toLowerCase();
  const filtered = q ? hotels.filter((h) => `${h.name} ${h.area}`.toLowerCase().includes(q)) : hotels;

  const applyCode = (e: FormEvent) => {
    e.preventDefault();
    const value = code.trim().toUpperCase();
    if (!value) {
      setCodeMsg({ ok: false, text: 'Enter the code printed on the QR poster, for example VAR001.' });
      return;
    }
    const match = hotels.find((h) => h.code === value);
    if (!match) {
      setCodeMsg({ ok: false, text: `We couldn't find code ${value}. Check the poster at reception, or pick your hotel from the list.` });
      return;
    }
    setCodeMsg({ ok: true, text: `Code ${value} matched ${match.name}.` });
    onSelect(match.id, 'code');
    setExpanded(false);
  };

  if (selected && !expanded) {
    return (
      <div className="dd-stack-sm">
        <div className="dd-hs-selected" aria-live="polite">
          <HotelThumb tint={selected.tint} label={selected.name} size={48} />
          <div className="dd-grow">
            <div className="dd-eyebrow" style={{ color: 'var(--dd-blue-700)' }}>Selected hotel</div>
            <div className="dd-cell-title" style={{ fontSize: 16 }}>{selected.name}</div>
            <div className="dd-small dd-muted">
              {selected.area}
              {showCode && <> · Code <span className="dd-num">{selected.code}</span></>}
            </div>
          </div>
          <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={() => setExpanded(true)}>
            Change
          </button>
        </div>
        {codeMsg?.ok && (
          <span className="dd-small" style={{ color: 'var(--dd-good)', display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            <Check size={15} aria-hidden="true" /> {codeMsg.text}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="dd-stack">
      {helper && <p className="dd-muted" style={{ fontSize: 14.5 }}>{helper}</p>}
      <div className="dd-field">
        <label className="dd-label" htmlFor={`${id}-q`}>Select your hotel</label>
        <div className="dd-input-icon">
          <Search aria-hidden="true" />
          <input
            id={`${id}-q`}
            className="dd-input"
            type="search"
            placeholder="Search hotel name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="dd-hs-list" role="list" aria-label="Participating hotels">
        {filtered.map((h) => (
          <button
            key={h.id}
            type="button"
            role="listitem"
            className={`dd-hs-item ${h.id === selectedId ? 'is-selected' : ''}`}
            aria-current={h.id === selectedId ? 'true' : undefined}
            onClick={() => {
              onSelect(h.id, 'list');
              setCodeMsg(null);
              setExpanded(false);
            }}
          >
            <HotelThumb tint={h.tint} label={h.name} size={42} />
            <span className="dd-grow" style={{ textAlign: 'left' }}>
              <span className="dd-cell-title" style={{ display: 'block' }}>{h.name}</span>
              <span className="dd-small dd-muted">{h.area}</span>
            </span>
            {h.id === selectedId ? <Check aria-hidden="true" className="dd-hs-check" /> : <ChevronRight aria-hidden="true" className="dd-hs-chev" />}
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="dd-hs-empty">
            No hotel matches “{query}”.{showCode ? ' Try the code printed on the QR poster.' : ''}
          </div>
        )}
      </div>

      {showCode && (
        <>
          <div className="dd-hs-or" aria-hidden="true"><span>or</span></div>
          <form className="dd-field" onSubmit={applyCode} noValidate>
            <label className="dd-label" htmlFor={`${id}-code`}>Enter hotel code</label>
            <div className="dd-row" style={{ gap: 8, flexWrap: 'nowrap' }}>
              <div className="dd-input-icon dd-grow">
                <KeyRound aria-hidden="true" />
                <input
                  id={`${id}-code`}
                  className="dd-input"
                  placeholder="e.g. VAR001"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setCodeMsg(null);
                  }}
                  aria-invalid={codeMsg && !codeMsg.ok ? true : undefined}
                  aria-describedby={`${id}-code-msg`}
                  autoCapitalize="characters"
                  autoComplete="off"
                  style={{ textTransform: 'uppercase' }}
                />
              </div>
              <button type="submit" className="dd-btn dd-btn--secondary">Apply</button>
            </div>
            <span id={`${id}-code-msg`}>
              {codeMsg && !codeMsg.ok ? (
                <span className="dd-error"><CircleAlert aria-hidden="true" />{codeMsg.text}</span>
              ) : (
                <span className="dd-help">The code is printed on the poster at your hotel's reception.</span>
              )}
            </span>
          </form>
        </>
      )}
    </div>
  );
}
