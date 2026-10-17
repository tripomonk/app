import { BedDouble, Check, Clock, Sailboat } from 'lucide-react';
import type { Package } from '../data/types';
import { formatINR } from '../utils/format';
import { DemoTag, StatusBadge } from './ui/primitives';

export function PackageCard({ pkg, selected, onSelect }: { pkg: Package; selected: boolean; onSelect: () => void }) {
  const soldOut = pkg.availability === 'Sold out';
  return (
    <article className={`dd-pkg ${selected ? 'is-selected' : ''} ${soldOut ? 'is-disabled' : ''}`} aria-label={pkg.name}>
      <div className="dd-row-between" style={{ alignItems: 'flex-start' }}>
        <span className={`dd-pkg-kind ${pkg.includesAccommodation ? 'stay' : ''}`}>
          {pkg.includesAccommodation ? <BedDouble aria-hidden="true" /> : <Sailboat aria-hidden="true" />}
          {pkg.tagline}
        </span>
        <StatusBadge kind="availability" value={pkg.availability} />
      </div>
      <h3 className="dd-pkg-name">{pkg.name}</h3>
      <p className="dd-pkg-desc">{pkg.description}</p>
      <ul className="dd-pkg-incl">
        {pkg.inclusions.map((i) => (
          <li key={i}>
            <Check aria-hidden="true" />
            {i}
          </li>
        ))}
      </ul>
      <div className="dd-pkg-meta">
        <span><Clock aria-hidden="true" /> {pkg.duration}</span>
        <span><Sailboat aria-hidden="true" /> {pkg.boat}</span>
      </div>
      <div className="dd-pkg-foot">
        <div>
          <div className="dd-pkg-price">
            {formatINR(pkg.pricePerGuest)}
            <span> / guest{pkg.includesAccommodation ? ' + room' : ''}</span>
          </div>
          <DemoTag>Placeholder price</DemoTag>
        </div>
        <button
          type="button"
          className={`dd-btn ${selected ? 'dd-btn--primary' : 'dd-btn--secondary'}`}
          onClick={onSelect}
          disabled={soldOut}
          aria-pressed={selected}
        >
          {soldOut ? 'Sold out' : selected ? (<><Check /> Selected</>) : 'Select'}
        </button>
      </div>
    </article>
  );
}
