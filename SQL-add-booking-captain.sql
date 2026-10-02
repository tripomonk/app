-- ============================================================
-- Tripomonk — assign a trek captain to a booking (build 395).
-- Admin → Bookings can now assign a captain, change the batch (date), and
-- mark refunded/cancelled via the `admin` edge function's new `update_booking`
-- action. `status` and `date` columns already exist; this adds `captain`.
-- Run once in the Supabase SQL editor, then REDEPLOY the `admin` edge function.
-- Idempotent.
-- ============================================================

alter table public.bookings
  add column if not exists captain text;
