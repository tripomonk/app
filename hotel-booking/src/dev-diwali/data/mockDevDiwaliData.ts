/**
 * Dev Deepawali 2026 — centralized MOCK data.
 *
 * Everything in this file is illustrative sample data for the frontend prototype:
 * hotels, rooms, prices, dates, availability, bookings and commission values are
 * NOT real and must be replaced by API responses in the backend phase.
 *
 * Relationships are kept consistent: every room belongs to one hotel, every
 * booking's room belongs to the booking's stay hotel, and hotel-partner bookings
 * are attributed to the same hotel whose room they use.
 */
import type {
  Booking,
  BookingStatus,
  Channel,
  CommissionAdjustment,
  CommissionStatus,
  EventDate,
  Hotel,
  HotelAdmin,
  ModuleSettings,
  Package,
  PaymentStatus,
  Room,
  SlotAvailability,
  TimeSlot,
} from './types';
import { priceBooking } from '../utils/mockCalculations';

/* ------------------------------------------------------------------ */
/* Campaign constants                                                  */
/* ------------------------------------------------------------------ */

export const CAMPAIGN = {
  name: 'Dev Deepawali 2026',
  /** Kartik Purnima 2026 falls on Tuesday 24 November. */
  festivalDate: '2026-11-24',
  bookingUrl: 'https://app.tripomonk.com/dev-diwali',
};

/** Universal hotel-partner QR (same for every hotel; the printed code identifies the hotel). */
export const HOTEL_QR_URL = `${CAMPAIGN.bookingUrl}?src=hotel-qr`;
/** Tripomonk direct-marketing QR. */
export const DIRECT_QR_URL = `${CAMPAIGN.bookingUrl}?src=direct-qr`;

/** Fixed "today" so the demo dashboards always read the same. */
export const DEMO_TODAY = '2026-10-17';

/* ------------------------------------------------------------------ */
/* Hotels                                                              */
/* ------------------------------------------------------------------ */

export const MOCK_HOTELS: Hotel[] = [
  {
    id: 'h1',
    name: 'Hotel Ganga View',
    code: 'VAR001',
    area: 'Near Dashashwamedh Ghat',
    address: 'D-14/22 Dashashwamedh Road, Varanasi 221001 (sample address)',
    contactPerson: 'Rohit Mishra',
    phone: '+91 90000 10001',
    email: 'reservations@hotelgangaview.example',
    description: 'Riverside property with Ganga-facing rooms, a five-minute walk from the main ghat.',
    status: 'Active',
    tint: '#2F6FE0',
  },
  {
    id: 'h2',
    name: 'Shivam Palace',
    code: 'VAR002',
    area: 'Godowlia',
    address: 'C-27/115 Godowlia Chowk, Varanasi 221001 (sample address)',
    contactPerson: 'Anjali Srivastava',
    phone: '+91 90000 10002',
    email: 'frontdesk@shivampalace.example',
    description: 'Family-run hotel in the old city, popular with pilgrim groups.',
    status: 'Active',
    tint: '#C2671C',
  },
  {
    id: 'h3',
    name: 'Kashi Residency',
    code: 'VAR003',
    area: 'Assi Ghat',
    address: 'B-1/158 Assi Road, Varanasi 221005 (sample address)',
    contactPerson: 'Vikram Pandey',
    phone: '+91 90000 10003',
    email: 'stay@kashiresidency.example',
    description: 'Quiet stay near Assi Ghat with a rooftop overlooking the river.',
    status: 'Active',
    tint: '#1E8C6E',
  },
  {
    id: 'h4',
    name: 'Riverfront Inn',
    code: 'VAR004',
    area: 'Kedar Ghat',
    address: 'B-6/102 Kedar Ghat Lane, Varanasi 221001 (sample address)',
    contactPerson: 'Sameer Khan',
    phone: '+91 90000 10004',
    email: 'hello@riverfrontinn.example',
    description: 'Compact boutique inn on the ghat steps. Fully booked for the festival week (sample).',
    status: 'Active',
    tint: '#7A4FC4',
  },
  {
    id: 'h5',
    name: 'Panchganga Haveli',
    code: 'VAR005',
    area: 'Panchganga Ghat',
    address: 'K-22/9 Panchganga Ghat, Varanasi 221001 (sample address)',
    contactPerson: 'Neelam Rai',
    phone: '+91 90000 10005',
    email: 'haveli@panchganga.example',
    description: 'Heritage haveli, onboarding paused for this campaign (sample inactive partner).',
    status: 'Inactive',
    tint: '#9A5B3B',
  },
];

/* ------------------------------------------------------------------ */
/* Rooms                                                               */
/* ------------------------------------------------------------------ */

export const ROOM_FACILITIES = [
  'Air conditioning',
  'Ganga view',
  'Wi-Fi',
  'Breakfast',
  'Balcony',
  'Hot water',
  'TV',
  'Extra bed on request',
];

export const MOCK_ROOMS: Room[] = [
  // Hotel Ganga View
  { id: 'r101', hotelId: 'h1', name: 'Deluxe Room', number: '101', type: 'Deluxe', capacity: 2, bedConfig: '1 queen bed', facilities: ['Air conditioning', 'Wi-Fi', 'Breakfast', 'Hot water'], description: 'City-side room on the first floor.', pricePerNight: 4500, available: true, status: 'Active' },
  { id: 'r102', hotelId: 'h1', name: 'Deluxe Room', number: '102', type: 'Deluxe', capacity: 2, bedConfig: '2 single beds', facilities: ['Air conditioning', 'Wi-Fi', 'Breakfast'], description: 'Twin room on the first floor.', pricePerNight: 4500, available: false, status: 'Active' },
  { id: 'r204', hotelId: 'h1', name: 'Premium Room', number: '204', type: 'Premium', capacity: 3, bedConfig: '1 king bed + sofa bed', facilities: ['Air conditioning', 'Ganga view', 'Wi-Fi', 'Breakfast', 'Balcony'], description: 'River-facing room with a private balcony.', pricePerNight: 6000, available: true, status: 'Active' },
  { id: 'r301', hotelId: 'h1', name: 'Suite Room', number: '301', type: 'Suite', capacity: 4, bedConfig: '1 king bed + 2 singles', facilities: ['Air conditioning', 'Ganga view', 'Wi-Fi', 'Breakfast', 'Balcony', 'TV'], description: 'Top-floor suite with a sitting area facing the ghats.', pricePerNight: 8500, available: true, status: 'Active' },
  // Shivam Palace
  { id: 'r211', hotelId: 'h2', name: 'Deluxe Room', number: '11', type: 'Deluxe', capacity: 2, bedConfig: '1 queen bed', facilities: ['Air conditioning', 'Wi-Fi', 'Hot water'], description: 'Courtyard-facing room.', pricePerNight: 3800, available: true, status: 'Active' },
  { id: 'r212', hotelId: 'h2', name: 'Premium Room', number: '12', type: 'Premium', capacity: 3, bedConfig: '1 king bed + extra bed', facilities: ['Air conditioning', 'Wi-Fi', 'Breakfast', 'TV'], description: 'Larger room with space for an extra bed.', pricePerNight: 5200, available: true, status: 'Active' },
  { id: 'r221', hotelId: 'h2', name: 'Family Room', number: '21', type: 'Family', capacity: 5, bedConfig: '2 queen beds + extra bed', facilities: ['Air conditioning', 'Wi-Fi', 'Breakfast', 'Extra bed on request'], description: 'Two connected bedrooms for families.', pricePerNight: 7000, available: true, status: 'Active' },
  // Kashi Residency
  { id: 'r3a1', hotelId: 'h3', name: 'Standard Room', number: 'A1', type: 'Standard', capacity: 2, bedConfig: '1 double bed', facilities: ['Wi-Fi', 'Hot water'], description: 'Simple, quiet room near the stairs to the rooftop.', pricePerNight: 3200, available: true, status: 'Active' },
  { id: 'r3a2', hotelId: 'h3', name: 'Deluxe Room', number: 'A2', type: 'Deluxe', capacity: 2, bedConfig: '1 queen bed', facilities: ['Air conditioning', 'Wi-Fi', 'Breakfast'], description: 'Bright room with garden view.', pricePerNight: 4200, available: true, status: 'Active' },
  { id: 'r3b1', hotelId: 'h3', name: 'Suite Room', number: 'B1', type: 'Suite', capacity: 4, bedConfig: '1 king bed + 2 singles', facilities: ['Air conditioning', 'Ganga view', 'Wi-Fi', 'Breakfast', 'Balcony'], description: 'Corner suite with river view.', pricePerNight: 7800, available: false, status: 'Active' },
  // Riverfront Inn (no eligible rooms → demonstrates the empty state)
  { id: 'r401', hotelId: 'h4', name: 'Deluxe Room', number: '1', type: 'Deluxe', capacity: 2, bedConfig: '1 queen bed', facilities: ['Air conditioning', 'Ganga view', 'Wi-Fi'], description: 'Ghat-facing room.', pricePerNight: 5000, available: false, status: 'Active' },
  { id: 'r402', hotelId: 'h4', name: 'Premium Room', number: '2', type: 'Premium', capacity: 3, bedConfig: '1 king bed + sofa bed', facilities: ['Air conditioning', 'Ganga view', 'Wi-Fi', 'Balcony'], description: 'Balcony room above the ghat.', pricePerNight: 6500, available: false, status: 'Active' },
  // Panchganga Haveli (inactive hotel)
  { id: 'r501', hotelId: 'h5', name: 'Heritage Room', number: 'H1', type: 'Premium', capacity: 2, bedConfig: '1 king bed', facilities: ['Air conditioning', 'Ganga view', 'Wi-Fi'], description: 'Restored haveli room.', pricePerNight: 6800, available: true, status: 'Inactive' },
];

/* ------------------------------------------------------------------ */
/* Hotel Admin accounts                                                */
/* ------------------------------------------------------------------ */

export const MOCK_HOTEL_ADMINS: HotelAdmin[] = [
  { id: 'ha1', name: 'Rohit Mishra', email: 'frontdesk@hotelgangaview.example', phone: '+91 90000 20001', hotelId: 'h1', status: 'Active', createdAt: '2026-09-22' },
  { id: 'ha2', name: 'Anjali Srivastava', email: 'manager@shivampalace.example', phone: '+91 90000 20002', hotelId: 'h2', status: 'Active', createdAt: '2026-09-24' },
  { id: 'ha3', name: 'Vikram Pandey', email: 'ops@kashiresidency.example', phone: '+91 90000 20003', hotelId: 'h3', status: 'Active', createdAt: '2026-09-25' },
  { id: 'ha4', name: 'Sameer Khan', email: 'sameer@riverfrontinn.example', phone: '+91 90000 20004', hotelId: 'h4', status: 'Active', createdAt: '2026-09-29' },
  { id: 'ha5', name: 'Neelam Rai', email: 'neelam@panchganga.example', phone: '+91 90000 20005', hotelId: 'h5', status: 'Inactive', createdAt: '2026-10-02' },
];

/* ------------------------------------------------------------------ */
/* Packages, dates, time slots                                         */
/* ------------------------------------------------------------------ */

export const MOCK_PACKAGES: Package[] = [
  {
    id: 'pkg-shared',
    name: 'Ghat Darshan Shared Boat',
    tagline: 'Boat ride only',
    description: 'A shared motorboat along the illuminated ghats with a host narrating the stories of Kashi.',
    inclusions: ['Shared motorboat seat', 'Host on board', 'Life jacket', 'Bottled water'],
    duration: 'About 2 hours',
    boat: 'Shared motorboat',
    pricePerGuest: 1200,
    includesAccommodation: false,
    nights: 0,
    availability: 'Available',
    maxGuests: 8,
  },
  {
    id: 'pkg-private',
    name: 'Private Bajra Evening',
    tagline: 'Boat ride only',
    description: 'A traditional wooden bajra for your group alone, timed to watch the aarti from the water.',
    inclusions: ['Private bajra for your group', 'Dedicated host', 'Tea and light snacks', 'Life jackets'],
    duration: 'About 2.5 hours',
    boat: 'Private bajra',
    pricePerGuest: 2800,
    includesAccommodation: false,
    nights: 0,
    availability: 'Few left',
    maxGuests: 10,
  },
  {
    id: 'pkg-stay-1n',
    name: 'Stay + Shared Boat',
    tagline: '1 night stay included',
    description: 'One night at your hotel plus a shared boat seat on the evening you choose.',
    inclusions: ['1 night accommodation', 'Shared motorboat seat', 'Host on board', 'Life jacket'],
    duration: '1 night + 2 hour ride',
    boat: 'Shared motorboat',
    pricePerGuest: 1200,
    includesAccommodation: true,
    nights: 1,
    availability: 'Available',
    maxGuests: 6,
  },
  {
    id: 'pkg-stay-2n',
    name: 'Kashi Festival Weekend',
    tagline: '2 nights stay included',
    description: 'Two nights in Varanasi with a private bajra on Dev Deepawali evening.',
    inclusions: ['2 nights accommodation', 'Private bajra evening', 'Dedicated host', 'Tea and light snacks'],
    duration: '2 nights + 2.5 hour ride',
    boat: 'Private bajra',
    pricePerGuest: 3200,
    includesAccommodation: true,
    nights: 2,
    availability: 'Few left',
    maxGuests: 6,
  },
  {
    id: 'pkg-frontrow',
    name: 'Aarti Front-Row Boat',
    tagline: 'Boat ride only',
    description: 'Moored boat positioned in front of the main aarti for the full ceremony.',
    inclusions: ['Front-row moored boat', 'Host on board', 'Life jacket'],
    duration: 'About 1.5 hours',
    boat: 'Moored boat',
    pricePerGuest: 2200,
    includesAccommodation: false,
    nights: 0,
    availability: 'Sold out',
    maxGuests: 6,
  },
];

export const MOCK_EVENT_DATES: EventDate[] = [
  { id: 'd23', date: '2026-11-23', label: 'Eve of Dev Deepawali' },
  { id: 'd24', date: '2026-11-24', label: 'Dev Deepawali · Kartik Purnima', highlight: true },
  { id: 'd25', date: '2026-11-25', label: 'Day after' },
];

export const MOCK_TIME_SLOTS: TimeSlot[] = [
  { id: 's1630', time: '16:30', label: '4:30 PM', note: 'Sunset, diyas being lit' },
  { id: 's1800', time: '18:00', label: '6:00 PM', note: 'Peak lighting and aarti' },
  { id: 's1930', time: '19:30', label: '7:30 PM', note: 'Ghats fully lit' },
  { id: 's2100', time: '21:00', label: '9:00 PM', note: 'Quieter late cruise' },
];

/** Mock seats left per date × slot. 0 = sold out. */
export const MOCK_SLOT_AVAILABILITY: SlotAvailability = {
  'd23|s1630': 34, 'd23|s1800': 18, 'd23|s1930': 22, 'd23|s2100': 40,
  'd24|s1630': 9, 'd24|s1800': 0, 'd24|s1930': 4, 'd24|s2100': 16,
  'd25|s1630': 40, 'd25|s1800': 26, 'd25|s1930': 30, 'd25|s2100': 40,
};

/** Mock seat capacity per date × slot (used for utilization in Super Admin). */
export const MOCK_SLOT_CAPACITY = 60;

/* ------------------------------------------------------------------ */
/* Default module settings (all demo values)                           */
/* ------------------------------------------------------------------ */

export const DEFAULT_SETTINGS: ModuleSettings = {
  // DEMO ONLY: the real commission model is an open business decision.
  commission: { model: 'percentage', value: 10, basis: 'package+stay' },
  paymentPolicy: 'full',
  advancePercent: 30,
  mockTaxRate: 0.05,
  bookingsOpen: true,
  maxGuestsPerBooking: 10,
};

/* ------------------------------------------------------------------ */
/* Bookings (deterministically generated sample records)               */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickWeighted<T>(rand: () => number, items: [T, number][]): T {
  const total = items.reduce((s, [, w]) => s + w, 0);
  let r = rand() * total;
  for (const [item, w] of items) {
    r -= w;
    if (r <= 0) return item;
  }
  return items[items.length - 1][0];
}

const CUSTOMERS: { name: string; city: string }[] = [
  { name: 'Aarav Sharma', city: 'Delhi' },
  { name: 'Priya Nair', city: 'Kochi' },
  { name: 'Rahul Verma', city: 'Lucknow' },
  { name: 'Sneha Iyer', city: 'Chennai' },
  { name: 'Karan Mehta', city: 'Mumbai' },
  { name: 'Ananya Gupta', city: 'Kolkata' },
  { name: 'Vikas Yadav', city: 'Patna' },
  { name: 'Neha Joshi', city: 'Pune' },
  { name: 'Arjun Reddy', city: 'Hyderabad' },
  { name: 'Pooja Singh', city: 'Jaipur' },
  { name: 'Siddharth Rao', city: 'Bengaluru' },
  { name: 'Meera Krishnan', city: 'Coimbatore' },
  { name: 'Emma Clarke', city: 'London, UK' },
  { name: 'Lukas Becker', city: 'Munich, Germany' },
  { name: 'Sofia Rossi', city: 'Milan, Italy' },
  { name: 'Hiroshi Tanaka', city: 'Osaka, Japan' },
  { name: 'Rohan Das', city: 'Bhubaneswar' },
  { name: 'Ishita Banerjee', city: 'Kolkata' },
  { name: 'Amit Tiwari', city: 'Prayagraj' },
  { name: 'Kavya Menon', city: 'Thiruvananthapuram' },
  { name: 'Daniel Kim', city: 'Seoul, Korea' },
  { name: 'Chloe Martin', city: 'Lyon, France' },
  { name: 'Nikhil Chauhan', city: 'Dehradun' },
  { name: 'Tanvi Kulkarni', city: 'Nagpur' },
  { name: 'Harish Agarwal', city: 'Kanpur' },
  { name: 'Ritika Saxena', city: 'Bhopal' },
];

/** Bookings created per day, 1–17 Oct 2026 (sample trend). */
const DAILY_COUNTS = [1, 2, 1, 3, 2, 3, 2, 4, 3, 3, 5, 4, 4, 6, 5, 7, 6];

function generateBookings(settings: ModuleSettings): Booking[] {
  const rand = mulberry32(2026);
  const out: Booking[] = [];
  const roomNights = new Set<string>(); // `${roomId}|${dateId}` to avoid double-booking a room
  let seq = 1001;

  const activeHotels = MOCK_HOTELS.filter((h) => h.status === 'Active');

  DAILY_COUNTS.forEach((count, dayIdx) => {
    for (let n = 0; n < count; n++) {
      const day = dayIdx + 1;
      const isToday = day === 17;
      const hour = isToday ? 8 + Math.floor(rand() * 6) : 8 + Math.floor(rand() * 14);
      const minute = Math.floor(rand() * 60);
      const createdAt = `2026-10-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00+05:30`;

      const person = CUSTOMERS[Math.floor(rand() * CUSTOMERS.length)];
      const [first, last] = person.name.toLowerCase().split(' ');
      const mobile = `+91 9${Math.floor(1000 + rand() * 8999)} ${Math.floor(10000 + rand() * 89999)}`;

      const channel: Channel = rand() < 0.58 ? 'hotel' : 'direct';
      const hotelId = channel === 'hotel'
        ? pickWeighted(rand, [['h1', 0.38], ['h2', 0.27], ['h3', 0.22], ['h4', 0.13]])
        : null;

      let packageId = pickWeighted(rand, [
        ['pkg-shared', 0.34], ['pkg-private', 0.2], ['pkg-stay-1n', 0.28], ['pkg-stay-2n', 0.12], ['pkg-frontrow', 0.06],
      ]);
      const guests = pickWeighted(rand, [[1, 0.1], [2, 0.42], [3, 0.18], [4, 0.18], [5, 0.07], [6, 0.05]]);
      const dateId = pickWeighted(rand, [['d23', 0.25], ['d24', 0.55], ['d25', 0.2]]);
      const slotId = pickWeighted(rand, [['s1630', 0.22], ['s1800', 0.36], ['s1930', 0.28], ['s2100', 0.14]]);

      let stayHotelId: string | null = null;
      let roomId: string | null = null;
      const pkg = MOCK_PACKAGES.find((p) => p.id === packageId)!;
      if (pkg.includesAccommodation) {
        const candidateHotelId = hotelId ?? activeHotels[Math.floor(rand() * activeHotels.length)].id;
        const candidates = MOCK_ROOMS.filter(
          (r) => r.hotelId === candidateHotelId && r.capacity >= guests && !roomNights.has(`${r.id}|${dateId}`),
        );
        if (candidates.length) {
          const room = candidates[Math.floor(rand() * candidates.length)];
          roomId = room.id;
          stayHotelId = candidateHotelId;
          roomNights.add(`${room.id}|${dateId}`);
        } else {
          packageId = 'pkg-shared'; // no eligible room → boat-only booking
        }
      }

      const payment: PaymentStatus = pickWeighted(rand, [['Paid', 0.72], ['Pending', 0.14], ['Failed', 0.06], ['Refunded', 0.08]]);
      const bookingStatus: BookingStatus =
        payment === 'Paid' ? 'Confirmed' : payment === 'Refunded' ? 'Cancelled' : 'Pending';

      let commissionStatus: CommissionStatus;
      if (channel === 'direct') commissionStatus = 'Not applicable';
      else if (bookingStatus === 'Cancelled') commissionStatus = 'Void';
      else if (payment !== 'Paid') commissionStatus = 'Pending';
      else if (day < 8) commissionStatus = 'Paid';
      else if (day < 15) commissionStatus = 'Approved';
      else commissionStatus = 'Pending';

      const finalPkg = MOCK_PACKAGES.find((p) => p.id === packageId)!;
      const room = roomId ? MOCK_ROOMS.find((r) => r.id === roomId)! : null;

      out.push({
        id: `DD2026-${seq++}`,
        createdAt,
        customer: {
          name: person.name,
          mobile,
          email: `${first}.${last}@example.com`,
          city: person.city,
        },
        channel,
        hotelId,
        stayHotelId,
        roomId,
        packageId,
        dateId,
        slotId,
        guests,
        amounts: priceBooking(finalPkg, room, guests, settings.mockTaxRate),
        paymentStatus: payment,
        bookingStatus,
        commissionStatus,
        source: 'seed',
      });
    }
  });

  return out;
}

export const MOCK_BOOKINGS: Booking[] = generateBookings(DEFAULT_SETTINGS);

/* ------------------------------------------------------------------ */
/* Commission adjustments (sample)                                     */
/* ------------------------------------------------------------------ */

export const MOCK_ADJUSTMENTS: CommissionAdjustment[] = [
  { id: 'adj1', hotelId: 'h2', bookingId: null, amount: -240, reason: 'Correction: guest count reduced after booking (sample)', date: '2026-10-09' },
  { id: 'adj2', hotelId: 'h1', bookingId: null, amount: 500, reason: 'Manual credit: booking recorded offline at reception (sample)', date: '2026-10-12' },
];

/** Date the sample payout batch was settled. */
export const MOCK_PAYOUT_DATE = '2026-10-10';
