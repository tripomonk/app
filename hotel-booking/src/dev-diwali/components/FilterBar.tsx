import type { ReactNode } from 'react';
import { RotateCcw, Search } from 'lucide-react';

export function FilterBar({ children, onReset, active }: { children: ReactNode; onReset?: () => void; active?: boolean }) {
  return (
    <div className="dd-filterbar" role="search">
      {children}
      {onReset && (
        <button type="button" className="dd-btn dd-btn--ghost dd-btn--sm" style={{ height: 38 }} onClick={onReset} disabled={!active}>
          <RotateCcw /> Reset
        </button>
      )}
    </div>
  );
}

export function SearchFilter({
  id,
  label = 'Search',
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="dd-field dd-filter-search">
      <label className="dd-label" htmlFor={id}>{label}</label>
      <div className="dd-input-icon">
        <Search aria-hidden="true" />
        <input id={id} className="dd-input" type="search" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
}

export function SelectFilter<T extends string>({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="dd-field">
      <label className="dd-label" htmlFor={id}>{label}</label>
      <select id={id} className="dd-select" value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
