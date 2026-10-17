/**
 * The new "Dev Deepawali 2026" menu group. This is the only piece that is added
 * to the existing Main Admin Panel sidebar — existing menu items stay as they are.
 */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BedDouble,
  ChartColumn,
  ChevronDown,
  Globe,
  Hotel,
  LayoutDashboard,
  ListOrdered,
  QrCode,
  Settings,
  UserCog,
  Wallet,
  Handshake,
} from 'lucide-react';
import { DD_PATHS } from '../paths';

const P = DD_PATHS.admin;

export const DEV_DEEPAWALI_MENU = [
  { to: P.dashboard, label: 'Dashboard', icon: LayoutDashboard },
  { to: P.hotels, label: 'Hotels', icon: Hotel },
  { to: P.rooms, label: 'Rooms', icon: BedDouble },
  { to: P.accounts, label: 'Hotel Admin Accounts', icon: UserCog },
  { to: P.qr, label: 'QR Codes & Sales Channels', icon: QrCode },
  { to: P.bookings, label: 'All Bookings', icon: ListOrdered, end: true },
  { to: P.direct, label: 'Direct Bookings', icon: Globe },
  { to: P.partner, label: 'Hotel Partner Bookings', icon: Handshake },
  { to: P.commissions, label: 'Commissions & Earnings', icon: Wallet },
  { to: P.reports, label: 'Reports & Analytics', icon: ChartColumn },
  { to: P.settings, label: 'Settings', icon: Settings },
];

export function DevDeepawaliAdminMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="dd-sa-menu">
      <button type="button" className="dd-sa-menu-head" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span className="dd-grow">Dev Deepawali 2026</span>
        <span className="dd-badge dd-badge--gold" style={{ height: 20, fontSize: 11 }}>New</span>
        <ChevronDown aria-hidden="true" className="dd-sa-chevron" />
      </button>
      {open && (
        <nav className="dd-nav dd-sa-menu-items" aria-label="Dev Deepawali 2026">
          {DEV_DEEPAWALI_MENU.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={onNavigate} className={({ isActive }) => `dd-nav-item ${isActive ? 'active' : ''}`}>
              <Icon aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}
