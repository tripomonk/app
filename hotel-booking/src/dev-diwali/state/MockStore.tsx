/**
 * In-memory mock store for the Dev Deepawali prototype.
 * Nothing here is persisted — state resets on reload. Each action maps to a
 * future API call (see the comment on each) so the backend phase can swap
 * implementations without touching pages.
 */
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type {
  Booking,
  CommissionAdjustment,
  CommissionStatus,
  EventDate,
  Hotel,
  HotelAdmin,
  ModuleSettings,
  Package,
  Room,
  TimeSlot,
} from '../data/types';
import {
  DEFAULT_SETTINGS,
  MOCK_ADJUSTMENTS,
  MOCK_BOOKINGS,
  MOCK_EVENT_DATES,
  MOCK_HOTEL_ADMINS,
  MOCK_HOTELS,
  MOCK_PACKAGES,
  MOCK_ROOMS,
  MOCK_SLOT_AVAILABILITY,
  MOCK_TIME_SLOTS,
} from '../data/mockDevDiwaliData';

const TINTS = ['#2F6FE0', '#C2671C', '#1E8C6E', '#7A4FC4', '#9A5B3B', '#0E7C9B', '#B5476B'];

export type NewHotelInput = Omit<Hotel, 'id' | 'tint'>;
export type NewRoomInput = Omit<Room, 'id'>;
export type NewAdminInput = Omit<HotelAdmin, 'id' | 'createdAt'>;

interface StoreValue {
  hotels: Hotel[];
  rooms: Room[];
  admins: HotelAdmin[];
  bookings: Booking[];
  adjustments: CommissionAdjustment[];
  settings: ModuleSettings;
  packages: Package[];
  dates: EventDate[];
  slots: TimeSlot[];
  slotAvailability: Record<string, number>;
  /** Simulated Hotel Admin session (no real authentication). */
  hotelSession: { adminId: string } | null;

  hotelById: (id: string | null | undefined) => Hotel | undefined;
  roomById: (id: string | null | undefined) => Room | undefined;
  packageById: (id: string) => Package | undefined;
  dateById: (id: string) => EventDate | undefined;
  slotById: (id: string) => TimeSlot | undefined;
  nextHotelCode: () => string;

  // POST /hotels
  addHotel: (input: NewHotelInput) => Hotel;
  // PATCH /hotels/:id
  updateHotel: (id: string, patch: Partial<Hotel>) => void;
  // POST /rooms
  addRoom: (input: NewRoomInput) => Room;
  // PATCH /rooms/:id
  updateRoom: (id: string, patch: Partial<Room>) => void;
  // POST /hotel-admins
  addAdmin: (input: NewAdminInput) => HotelAdmin;
  // PATCH /hotel-admins/:id
  updateAdmin: (id: string, patch: Partial<HotelAdmin>) => void;
  // POST /bookings (after payment webhook in production)
  addBooking: (b: Booking) => void;
  // PATCH /commissions/:bookingId
  setCommissionStatus: (bookingIds: string[], status: CommissionStatus) => void;
  // POST /commission-adjustments
  addAdjustment: (a: Omit<CommissionAdjustment, 'id'>) => void;
  // PUT /settings
  updateSettings: (patch: Partial<ModuleSettings>) => void;
  // POST /hotel-admin/session (simulated)
  loginHotelAdmin: (adminId: string) => void;
  logoutHotelAdmin: () => void;
  resetDemo: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

export function MockStoreProvider({ children }: { children: ReactNode }) {
  const [hotels, setHotels] = useState<Hotel[]>(MOCK_HOTELS);
  const [rooms, setRooms] = useState<Room[]>(MOCK_ROOMS);
  const [admins, setAdmins] = useState<HotelAdmin[]>(MOCK_HOTEL_ADMINS);
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [adjustments, setAdjustments] = useState<CommissionAdjustment[]>(MOCK_ADJUSTMENTS);
  const [settings, setSettings] = useState<ModuleSettings>(DEFAULT_SETTINGS);
  const [hotelSession, setHotelSession] = useState<{ adminId: string } | null>(null);

  const hotelById = useCallback((id: string | null | undefined) => hotels.find((h) => h.id === id), [hotels]);
  const roomById = useCallback((id: string | null | undefined) => rooms.find((r) => r.id === id), [rooms]);
  const packageById = useCallback((id: string) => MOCK_PACKAGES.find((p) => p.id === id), []);
  const dateById = useCallback((id: string) => MOCK_EVENT_DATES.find((d) => d.id === id), []);
  const slotById = useCallback((id: string) => MOCK_TIME_SLOTS.find((s) => s.id === id), []);

  const nextHotelCode = useCallback(() => {
    const max = hotels.reduce((m, h) => Math.max(m, Number(h.code.replace(/\D/g, '')) || 0), 0);
    return `VAR${String(max + 1).padStart(3, '0')}`;
  }, [hotels]);

  const addHotel = useCallback(
    (input: NewHotelInput) => {
      const hotel: Hotel = { ...input, id: `h${Date.now().toString(36)}`, tint: TINTS[hotels.length % TINTS.length] };
      setHotels((list) => [...list, hotel]);
      return hotel;
    },
    [hotels.length],
  );
  const updateHotel = useCallback((id: string, patch: Partial<Hotel>) => {
    setHotels((list) => list.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  }, []);

  const addRoom = useCallback((input: NewRoomInput) => {
    const room: Room = { ...input, id: `r${Date.now().toString(36)}` };
    setRooms((list) => [...list, room]);
    return room;
  }, []);
  const updateRoom = useCallback((id: string, patch: Partial<Room>) => {
    setRooms((list) => list.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }, []);

  const addAdmin = useCallback((input: NewAdminInput) => {
    const admin: HotelAdmin = { ...input, id: `ha${Date.now().toString(36)}`, createdAt: new Date().toISOString().slice(0, 10) };
    setAdmins((list) => [...list, admin]);
    return admin;
  }, []);
  const updateAdmin = useCallback((id: string, patch: Partial<HotelAdmin>) => {
    setAdmins((list) => list.map((a) => (a.id === id ? { ...a, ...patch } : a)));
  }, []);

  const addBooking = useCallback((b: Booking) => setBookings((list) => [...list, b]), []);

  const setCommissionStatus = useCallback((ids: string[], status: CommissionStatus) => {
    const set = new Set(ids);
    setBookings((list) => list.map((b) => (set.has(b.id) ? { ...b, commissionStatus: status } : b)));
  }, []);

  const addAdjustment = useCallback((a: Omit<CommissionAdjustment, 'id'>) => {
    setAdjustments((list) => [...list, { ...a, id: `adj${Date.now().toString(36)}` }]);
  }, []);

  const updateSettings = useCallback((patch: Partial<ModuleSettings>) => {
    setSettings((s) => ({ ...s, ...patch }));
  }, []);

  const loginHotelAdmin = useCallback((adminId: string) => setHotelSession({ adminId }), []);
  const logoutHotelAdmin = useCallback(() => setHotelSession(null), []);

  const resetDemo = useCallback(() => {
    setHotels(MOCK_HOTELS);
    setRooms(MOCK_ROOMS);
    setAdmins(MOCK_HOTEL_ADMINS);
    setBookings(MOCK_BOOKINGS);
    setAdjustments(MOCK_ADJUSTMENTS);
    setSettings(DEFAULT_SETTINGS);
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      hotels, rooms, admins, bookings, adjustments, settings,
      packages: MOCK_PACKAGES, dates: MOCK_EVENT_DATES, slots: MOCK_TIME_SLOTS, slotAvailability: MOCK_SLOT_AVAILABILITY,
      hotelSession,
      hotelById, roomById, packageById, dateById, slotById, nextHotelCode,
      addHotel, updateHotel, addRoom, updateRoom, addAdmin, updateAdmin, addBooking,
      setCommissionStatus, addAdjustment, updateSettings, loginHotelAdmin, logoutHotelAdmin, resetDemo,
    }),
    [
      hotels, rooms, admins, bookings, adjustments, settings, hotelSession,
      hotelById, roomById, packageById, dateById, slotById, nextHotelCode,
      addHotel, updateHotel, addRoom, updateRoom, addAdmin, updateAdmin, addBooking,
      setCommissionStatus, addAdjustment, updateSettings, loginHotelAdmin, logoutHotelAdmin, resetDemo,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useMockStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useMockStore must be used inside <DevDiwaliProvider>');
  return ctx;
}

/** The Hotel Admin's hotel + account for the simulated session. */
export function useHotelSession() {
  const store = useMockStore();
  const admin = store.hotelSession ? store.admins.find((a) => a.id === store.hotelSession!.adminId) : undefined;
  const hotel = admin ? store.hotelById(admin.hotelId) : undefined;
  return { admin, hotel };
}
