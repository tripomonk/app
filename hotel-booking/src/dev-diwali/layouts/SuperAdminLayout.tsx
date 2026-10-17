/**
 * Stand-in for the EXISTING Main Admin Panel shell, used only so the prototype
 * runs on its own. In the real app, render the Dev Deepawali pages inside the
 * existing admin layout and add <DevDeepawaliAdminMenu /> to its sidebar.
 * The greyed "existing" items below are placeholders, not new features.
 */
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ChevronRight, CreditCard, House, ListOrdered, Menu, Mountain, Settings, Users, UsersRound, X } from 'lucide-react';
import { DevDeepawaliAdminMenu, DEV_DEEPAWALI_MENU } from './DevDeepawaliAdminMenu';
import { DemoTag, Logo } from '../components/ui/primitives';

const EXISTING = [
  { label: 'Overview', icon: House },
  { label: 'Treks & Trips', icon: Mountain },
  { label: 'Bookings', icon: ListOrdered },
  { label: 'Payments', icon: CreditCard },
  { label: 'Community', icon: UsersRound },
  { label: 'Users', icon: Users },
  { label: 'Settings', icon: Settings },
];

export function SuperAdminLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const current = [...DEV_DEEPAWALI_MENU]
    .sort((a, b) => b.to.length - a.to.length)
    .find((m) => location.pathname.startsWith(m.to));

  return (
    <div className="dd-scope dd-admin dd-super-admin">
      {open && <div className="dd-sidebar-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
      <aside className={`dd-sidebar ${open ? 'open' : ''}`} aria-label="Main Admin navigation">
        <div className="dd-sidebar-brand" style={{ justifyContent: 'space-between' }}>
          <div className="dd-row" style={{ gap: 8 }}>
            <Logo variant="dark" height={26} />
            <span className="dd-badge dd-badge--navy" style={{ height: 20, fontSize: 11 }}>Admin</span>
          </div>
          <button type="button" className="dd-btn dd-btn--ghost dd-btn--icon dd-btn--sm dd-desktop-hide" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <div className="dd-sidebar-section">
          <div className="dd-eyebrow" style={{ padding: '4px 10px 6px' }}>Existing menu</div>
          <div className="dd-nav">
            {EXISTING.map(({ label, icon: Icon }) => (
              <span key={label} className="dd-nav-item dd-sa-existing" title="Existing Main Admin item — unchanged by this module (placeholder)">
                <Icon aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="dd-sidebar-section">
          <DevDeepawaliAdminMenu onNavigate={() => setOpen(false)} />
        </div>
      </aside>

      <div className="dd-main">
        <header className="dd-topbar">
          <div className="dd-row" style={{ gap: 10, minWidth: 0 }}>
            <button type="button" className="dd-btn dd-btn--secondary dd-btn--icon dd-btn--sm dd-mobile-only" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu />
            </button>
            <nav aria-label="Breadcrumb" className="dd-sa-crumbs">
              <span>Main Admin</span>
              <ChevronRight aria-hidden="true" />
              <span>Dev Deepawali 2026</span>
              {current && (
                <>
                  <ChevronRight aria-hidden="true" />
                  <strong>{current.label}</strong>
                </>
              )}
            </nav>
          </div>
          <div className="dd-row" style={{ gap: 10 }}>
            <DemoTag>Mock data</DemoTag>
            <span className="dd-avatar" title="Super Admin (demo)">SA</span>
          </div>
        </header>
        <main className="dd-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
