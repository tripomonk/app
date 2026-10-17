/**
 * Dev Deepawali 2026 — shared types.
 * These mirror the shapes the backend API is expected to return later,
 * so pages can switch from mock data to API calls without UI changes.
 */

export type Channel = 'hotel' | 'direct';
export type RecordStatus = 'Active' | 'Inactive';
export type BookingStatus = 'Confirmed' | 'Pending' | 'Cancelled';
export type PaymentStatus = 'Paid' | 'Pending' | 'Failed' | 'Refunded';
export type CommissionStatus = 'Pending' | 'Approved' | 'Paid' | 'Not applicable' | 'Void';
export type Availability = 'Available' | 'Few left' | 'Sold out';
export type RoomType = 'Standard' | 'Deluxe' | 'Premium' | 'Suite' | 'Family';

export interface Hotel {
  id: string;
  name: string;
  /** Printed attribution code shown on the hotel's QR poster. */
  code: string;
  area: string;
  address: string;
  contactPerson: string;
  phone: string;
  email: string;
  description: string;
  status: RecordStatus;
  /** Hue used for the illustrated placeholder thumbnail. */
  tint: string;
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  number: string;
  type: RoomType;
  capacity: number;
  bedConfig: string;
  facilities: string[];
  description: string;
  /** Placeholder price per night (INR). null = price not applicable / not set. */
  pricePerNight: number | null;
  available: boolean;
  status: RecordStatus;
}

export interface HotelAdmin {
  id: string;
  name: string;
  email: string;
  phone: string;
  hotelId: string;
  status: RecordStatus;
  createdAt: string; // ISO date
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  inclusions: string[];
  duration: string;
  boat: string;
  /** Placeholder price per guest (INR). Not a commercial price. */
  pricePerGuest: number;
  includesAccommodation: boolean;
  nights: number;
  availability: Availability;
  maxGuests: number;
}

export interface EventDate {
  id: string;
  date: string; // YYYY-MM-DD
  label: string;
  highlight?: boolean;
}

export interface TimeSlot {
  id: string;
  time: string; // 24h HH:mm
  label: string;
  note: string;
}

/** seats left for date x slot, keyed `${dateId}|${slotId}` */
export type SlotAvailability = Record<string, number>;

export interface Customer {
  name: string;
  mobile: string;
  email: string;
  city?: string;
}

export interface BookingAmounts {
  packageAmount: number;
  accommodationAmount: number;
  taxes: number;
  total: number;
}

export interface Booking {
  id: string;
  createdAt: string; // ISO datetime
  customer: Customer;
  channel: Channel;
  /** Attribution hotel. Only set for the hotel-partner channel. */
  hotelId: string | null;
  /** Accommodation hotel. Can be set on direct bookings without creating attribution. */
  stayHotelId: string | null;
  roomId: string | null;
  packageId: string;
  dateId: string;
  slotId: string;
  guests: number;
  amounts: BookingAmounts;
  paymentStatus: PaymentStatus;
  bookingStatus: BookingStatus;
  /** Stored workflow status; the amount is always derived from current commission settings. */
  commissionStatus: CommissionStatus;
  specialRequests?: string;
  /** 'seed' = sample record, 'session' = created in this browser session via the demo flow. */
  source: 'seed' | 'session';
}

export interface CommissionAdjustment {
  id: string;
  hotelId: string;
  bookingId: string | null;
  amount: number; // signed INR
  reason: string;
  date: string; // YYYY-MM-DD
}

export interface CommissionPayout {
  id: string;
  hotelId: string;
  amount: number;
  date: string;
  reference: string;
}

export type CommissionModel = 'unset' | 'percentage' | 'fixed';
export type CommissionBasis = 'package' | 'package+stay';
export type PaymentPolicy = 'full' | 'advance' | 'venue';

export interface CommissionSettings {
  model: CommissionModel;
  /** percentage (e.g. 10 = 10%) or fixed INR per booking */
  value: number;
  basis: CommissionBasis;
}

export interface ModuleSettings {
  commission: CommissionSettings;
  paymentPolicy: PaymentPolicy;
  advancePercent: number;
  /** Mock tax/fee rate applied in demo totals only. */
  mockTaxRate: number;
  bookingsOpen: boolean;
  maxGuestsPerBooking: number;
}
