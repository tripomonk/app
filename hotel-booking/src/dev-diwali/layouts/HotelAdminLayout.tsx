import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ChartColumn, BedDouble, LayoutDashboard, ListOrdered, LogOut, Menu, Store, Wallet, X } from 'lucide-react';
import { DD_PATHS } from '../paths';
import { useHotelSession, useMockStore } from '../state/MockStore';
import { HotelThumb } from '../components/Thumbs';
import { DemoTag, Logo } from '../components/ui/primitives';

const NAV = [
  { to: DD_PATHS.hotel.dashboard, label: 'Dashboard', icon: LayoutDashboard },
  { to: DD_PATHS.hotel.bookings, label: 'Bookings', icon: ListOrdered },
  { to: DD_PATHS.hotel.rooms, label: 'Rooms', icon: BedDouble },
  { to: DD_PATHS.hotel.commission, label: 'Commission', icon: Wallet },
  { to: DD_PATHS.hotel.reports, label: 'Reports', icon: ChartColumn },
  { to: DD_PATHS.hotel.profile, label: 'Hotel profile', icon: Store },
];

export function HotelAdminLayout() {
  const { admin, hotel } = useHotelSession();
  const { logoutHotelAdmin } = useMockStore();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!admin || !hotel) return null;

  const logout = () => {
    logoutHotelAdmin();
    navigate(DD_PATHS.hotel.login);
  };

  return (
    <div className="dd-scope dd-admin dd-hotel-admin">
      {open && <div className="dd-sidebar-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
      <aside className={`dd-sidebar ${open ? 'open' : ''}`} aria-label="Hotel portal navigation">
        <div className="dd-sidebar-brand" style={{ justifyContent: 'space-between' }}>
          <Logo variant="dark" height={28} />
          <button type="button" className="dd-btn dd-btn--ghost dd-btn--icon dd-btn--sm dd-desktop-hide" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <div className="dd-sidebar-section">
          <div className="dd-ha-hotelcard">
            <HotelThumb tint={hotel.tint} label={hotel.name} size={40} />
            <div style={{ minWidth: 0 }}>
              <div className="dd-cell-title" style={{ fontSize: 14 }}>{hotel.name}</div>
              <div className="dd-small dd-muted">Code <span className="dd-num">{hotel.code}</span> · Partner portal</div>
            </div>
          </div>
        </div>
        <nav className="dd-sidebar-section dd-nav">
          {NAV.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `dd-nav-item ${isActive ? 'active' : ''}`}>
              <Icon aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="dd-sidebar-section" style={{ marginTop: 'auto' }}>
          <div className="dd-row" style={{ padding: '8px 4px', gap: 10 }}>
            <span className="dd-avatar">{admin.name.split(' ').map((p) => p[0]).join('')}</span>
            <div className="dd-grow">
              <div className="dd-cell-title" style={{ fontSize: 13.5 }}>{admin.name}</div>
              <div className="dd-small dd-muted" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{admin.email}</div>
            </div>
          </div>
          <button type="button" className="dd-nav-item" onClick={logout}>
            <LogOut aria-hidden="true" /> Log out
          </button>
        </div>
      </aside>

      <div className="dd-main">
        <header className="dd-topbar">
          <div className="dd-row" style={{ gap: 10 }}>
            <button type="button" className="dd-btn dd-btn--secondary dd-btn--icon dd-btn--sm dd-mobile-only" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu />
            </button>
            <span className="dd-mobile-only"><Logo variant="icon" height={28} /></span>
            <div>
              <div className="dd-eyebrow">Dev Deepawali 2026</div>
              <div className="dd-cell-title" style={{ fontSize: 14.5 }}>{hotel.name}</div>
            </div>
          </div>
          <DemoTag>Demo session</DemoTag>
        </header>
        <main className="dd-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
