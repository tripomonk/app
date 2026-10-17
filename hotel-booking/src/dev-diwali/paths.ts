/**
 * Route paths for the Dev Deepawali module. Adjust the bases to match the
 * existing Tripomonk router (e.g. if the Main Admin Panel lives under /dashboard).
 */
const HOTEL = '/hotel-admin';
const ADMIN = '/admin/dev-deepawali-2026';

export const DD_PATHS = {
  customer: '/dev-diwali',
  confirmation: (id: string) => `/dev-diwali/confirmation/${id}`,
  hotel: {
    root: HOTEL,
    login: `${HOTEL}/login`,
    dashboard: `${HOTEL}/dashboard`,
    bookings: `${HOTEL}/bookings`,
    booking: (id: string) => `${HOTEL}/bookings/${id}`,
    rooms: `${HOTEL}/rooms`,
    commission: `${HOTEL}/commission`,
    reports: `${HOTEL}/reports`,
    profile: `${HOTEL}/profile`,
  },
  admin: {
    root: ADMIN,
    dashboard: `${ADMIN}/dashboard`,
    hotels: `${ADMIN}/hotels`,
    rooms: `${ADMIN}/rooms`,
    accounts: `${ADMIN}/hotel-admins`,
    qr: `${ADMIN}/qr-codes`,
    bookings: `${ADMIN}/bookings`,
    direct: `${ADMIN}/bookings/direct`,
    partner: `${ADMIN}/bookings/hotel-partner`,
    commissions: `${ADMIN}/commissions`,
    reports: `${ADMIN}/reports`,
    settings: `${ADMIN}/settings`,
  },
};
