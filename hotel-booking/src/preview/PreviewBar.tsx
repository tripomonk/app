/** Prototype navigator — harness only, not part of the Dev Deepawali module. */
import { useLocation, useNavigate } from 'react-router-dom';
import { useMockStore } from '../dev-diwali/state/MockStore';
import { useToast } from '../dev-diwali/state/Toasts';

const LINKS = [
  { label: 'Customer · Hotel QR', to: '/dev-diwali?src=hotel-qr', match: (p: string, s: string) => p.startsWith('/dev-diwali') && s.includes('hotel-qr') },
  { label: 'Customer · Direct QR', to: '/dev-diwali?src=direct-qr', match: (p: string, s: string) => p.startsWith('/dev-diwali') && s.includes('direct-qr') },
  { label: 'Customer · Generic link', to: '/dev-diwali', match: (p: string, s: string) => p === '/dev-diwali' && !s },
  { label: 'Hotel Admin', to: '/hotel-admin/dashboard', match: (p: string) => p.startsWith('/hotel-admin') },
  { label: 'Super Admin', to: '/admin/dev-deepawali-2026/dashboard', match: (p: string) => p.startsWith('/admin') },
];

export function PreviewBar() {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { resetDemo } = useMockStore();
  const toast = useToast();
  return (
    <div className="pv-bar" role="navigation" aria-label="Prototype navigator">
      <span className="pv-tag">Prototype</span>
      <span className="pv-sep" aria-hidden="true" />
      {LINKS.map((l) => (
        <button key={l.label} type="button" className={`pv-link ${l.match(pathname, search) ? 'active' : ''}`} onClick={() => navigate(l.to)}>
          {l.label}
        </button>
      ))}
      <span className="pv-sep" aria-hidden="true" />
      <button
        type="button"
        className="pv-link"
        onClick={() => {
          resetDemo();
          toast('Demo data reset to the original sample records.', 'demo');
        }}
      >
        Reset demo data
      </button>
    </div>
  );
}
