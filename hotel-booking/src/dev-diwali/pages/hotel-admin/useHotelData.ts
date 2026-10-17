import { useMemo } from 'react';
import { useHotelSession, useMockStore } from '../../state/MockStore';

/**
 * Data visible to the signed-in (simulated) Hotel Admin.
 * Production: the API must scope these to the admin's hotel server-side.
 *  - attributed: bookings made through this hotel's code (earn commission)
 *  - stays: Tripomonk Direct bookings that only stay at this hotel (no commission)
 */
export function useHotelData() {
  const store = useMockStore();
  const { admin, hotel } = useHotelSession();
  const hotelId = hotel?.id;

  return useMemo(() => {
    const attributed = store.bookings
      .filter((b) => b.hotelId === hotelId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const stays = store.bookings
      .filter((b) => b.channel === 'direct' && b.stayHotelId === hotelId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const visible = [...attributed, ...stays].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const rooms = store.rooms.filter((r) => r.hotelId === hotelId);
    const adjustments = store.adjustments.filter((a) => a.hotelId === hotelId);
    return { admin, hotel, attributed, stays, visible, rooms, adjustments };
  }, [store.bookings, store.rooms, store.adjustments, hotelId, admin, hotel]);
}
