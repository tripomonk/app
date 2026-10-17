/**
 * Dev Deepawali route table. Drop `devDiwaliRoutes` inside the existing app's
 * <Routes> (it is a fragment of <Route> elements) and wrap with <DevDiwaliProvider>.
 * Existing routes are untouched.
 */
import { Navigate, Route, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { DD_PATHS } from './paths';
import { useMockStore } from './state/MockStore';

import { CustomerBookingPage } from './pages/customer/CustomerBookingPage';
import { BookingConfirmationPage } from './pages/customer/BookingConfirmationPage';

import { HotelAdminLayout } from './layouts/HotelAdminLayout';
import { HotelAdminLoginPage } from './pages/hotel-admin/HotelAdminLoginPage';
import { HotelDashboardPage } from './pages/hotel-admin/HotelDashboardPage';
import { HotelBookingsPage } from './pages/hotel-admin/HotelBookingsPage';
import { HotelBookingDetailsPage } from './pages/hotel-admin/HotelBookingDetailsPage';
import { HotelRoomsPage } from './pages/hotel-admin/HotelRoomsPage';
import { HotelCommissionPage } from './pages/hotel-admin/HotelCommissionPage';
import { HotelReportsPage } from './pages/hotel-admin/HotelReportsPage';
import { HotelProfilePage } from './pages/hotel-admin/HotelProfilePage';

import { SuperAdminLayout } from './layouts/SuperAdminLayout';
import { SuperAdminDashboardPage } from './pages/super-admin/SuperAdminDashboardPage';
import { HotelsManagementPage } from './pages/super-admin/HotelsManagementPage';
import { RoomsManagementPage } from './pages/super-admin/RoomsManagementPage';
import { HotelAdminAccountsPage } from './pages/super-admin/HotelAdminAccountsPage';
import { QRCodesPage } from './pages/super-admin/QRCodesPage';
import { AllBookingsPage } from './pages/super-admin/AllBookingsPage';
import { DirectBookingsPage } from './pages/super-admin/DirectBookingsPage';
import { HotelPartnerBookingsPage } from './pages/super-admin/HotelPartnerBookingsPage';
import { CommissionManagementPage } from './pages/super-admin/CommissionManagementPage';
import { ReportsAnalyticsPage } from './pages/super-admin/ReportsAnalyticsPage';
import { SettingsPage } from './pages/super-admin/SettingsPage';

/** Simulated guard — production must enforce Hotel Admin access on the server. */
function RequireHotelSession({ children }: { children: ReactNode }) {
  const { hotelSession } = useMockStore();
  const location = useLocation();
  if (!hotelSession) return <Navigate to={DD_PATHS.hotel.login} replace state={{ from: location.pathname }} />;
  return <>{children}</>;
}

export const devDiwaliRoutes = (
  <>
    {/* Customer */}
    <Route path={DD_PATHS.customer} element={<CustomerBookingPage />} />
    <Route path={`${DD_PATHS.customer}/confirmation/:bookingId`} element={<BookingConfirmationPage />} />

    {/* Hotel Admin Portal */}
    <Route path={DD_PATHS.hotel.login} element={<HotelAdminLoginPage />} />
    <Route
      path={DD_PATHS.hotel.root}
      element={
        <RequireHotelSession>
          <HotelAdminLayout />
        </RequireHotelSession>
      }
    >
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<HotelDashboardPage />} />
      <Route path="bookings" element={<HotelBookingsPage />} />
      <Route path="bookings/:bookingId" element={<HotelBookingDetailsPage />} />
      <Route path="rooms" element={<HotelRoomsPage />} />
      <Route path="commission" element={<HotelCommissionPage />} />
      <Route path="reports" element={<HotelReportsPage />} />
      <Route path="profile" element={<HotelProfilePage />} />
    </Route>

    {/* Super Admin — "Dev Deepawali 2026" menu inside the Main Admin Panel */}
    <Route path={DD_PATHS.admin.root} element={<SuperAdminLayout />}>
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<SuperAdminDashboardPage />} />
      <Route path="hotels" element={<HotelsManagementPage />} />
      <Route path="rooms" element={<RoomsManagementPage />} />
      <Route path="hotel-admins" element={<HotelAdminAccountsPage />} />
      <Route path="qr-codes" element={<QRCodesPage />} />
      <Route path="bookings" element={<AllBookingsPage />} />
      <Route path="bookings/direct" element={<DirectBookingsPage />} />
      <Route path="bookings/hotel-partner" element={<HotelPartnerBookingsPage />} />
      <Route path="commissions" element={<CommissionManagementPage />} />
      <Route path="reports" element={<ReportsAnalyticsPage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  </>
);
