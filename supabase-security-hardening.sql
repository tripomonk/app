-- Tripomonk security hardening
-- Run once in Supabase SQL Editor after deploying the hardened Edge Functions.
-- This removes public booking access and keeps paid bookings server-created only.

-- Bookings need these columns for verified Razorpay writes and admin/captain checks.
alter table bookings add column if not exists payment_id text;
alter table bookings add column if not exists order_id text;
alter table bookings add column if not exists email text;
alter table bookings add column if not exists phone text;
alter table bookings add column if not exists emergency_name text;
alter table bookings add column if not exists emergency_phone text;

-- Enable RLS on sensitive tables.
alter table bookings enable row level security;
alter table enquiries enable row level security;
alter table treks enable row level security;
alter table batches enable row level security;

-- Public app can read public catalogue data.
drop policy if exists "read treks" on treks;
drop policy if exists "read batches" on batches;
create policy "read treks" on treks for select using (true);
create policy "read batches" on batches for select using (true);

-- IMPORTANT: Customers must not read or insert bookings directly.
-- Confirmed bookings are inserted only by the Razorpay Edge Function using service role.
drop policy if exists "add booking" on bookings;
drop policy if exists "read booking" on bookings;
drop policy if exists "public add booking" on bookings;
drop policy if exists "public read booking" on bookings;

-- Enquiries can still be submitted publicly because they contain non-payment lead/support messages.
-- Keep this small and monitor for spam; move to an Edge Function later if abused.
drop policy if exists "add enquiry" on enquiries;
create policy "add enquiry" on enquiries for insert with check (true);

-- Optional performance indexes.
create index if not exists bookings_created_at_idx on bookings (created_at desc);
create index if not exists bookings_payment_id_idx on bookings (payment_id);
create index if not exists batches_trek_label_idx on batches (trek_id, label);
-- Trek news schedule with secret header
-- 1) In Supabase Edge Function secrets, set TREKNEWS_CRON_SECRET to a long random value.
-- 2) Replace REPLACE_WITH_TREKNEWS_CRON_SECRET below with that same value before running.
-- 3) This prevents outsiders from triggering your news API.

create extension if not exists pg_cron;
create extension if not exists pg_net;
select cron.unschedule('treknews-3x-daily') where exists (select 1 from cron.job where jobname='treknews-3x-daily');
select cron.schedule(
  'treknews-3x-daily',
  '30 1,7,13 * * *',
  $$ select net.http_post(
       url:='https://pdenkohcsjnagcfvwbfi.supabase.co/functions/v1/treknews',
       headers:='{"Content-Type":"application/json","x-cron-secret":"REPLACE_WITH_TREKNEWS_CRON_SECRET"}'::jsonb
     ) $$
);

-- Community RLS hardening. These blocks run only if the tables exist.
do $$
begin
  if to_regclass('public.community_posts') is not null then
    execute 'alter table public.community_posts enable row level security';
    execute 'drop policy if exists "community posts read" on public.community_posts';
    execute 'drop policy if exists "community posts insert own" on public.community_posts';
    execute 'drop policy if exists "community posts update own" on public.community_posts';
    execute 'drop policy if exists "community posts delete own" on public.community_posts';
    execute 'create policy "community posts read" on public.community_posts for select using (true)';
    execute 'create policy "community posts insert own" on public.community_posts for insert with check (auth.uid() = user_id)';
    execute 'create policy "community posts update own" on public.community_posts for update using (auth.uid() = user_id) with check (auth.uid() = user_id)';
    execute 'create policy "community posts delete own" on public.community_posts for delete using (auth.uid() = user_id)';
  end if;

  if to_regclass('public.post_likes') is not null then
    execute 'alter table public.post_likes enable row level security';
    execute 'drop policy if exists "post likes read" on public.post_likes';
    execute 'drop policy if exists "post likes insert own" on public.post_likes';
    execute 'drop policy if exists "post likes delete own" on public.post_likes';
    execute 'create policy "post likes read" on public.post_likes for select using (true)';
    execute 'create policy "post likes insert own" on public.post_likes for insert with check (auth.uid() = user_id)';
    execute 'create policy "post likes delete own" on public.post_likes for delete using (auth.uid() = user_id)';
  end if;

  if to_regclass('public.post_comments') is not null then
    execute 'alter table public.post_comments enable row level security';
    execute 'drop policy if exists "post comments read" on public.post_comments';
    execute 'drop policy if exists "post comments insert own" on public.post_comments';
    execute 'drop policy if exists "post comments delete own" on public.post_comments';
    execute 'create policy "post comments read" on public.post_comments for select using (true)';
    execute 'create policy "post comments insert own" on public.post_comments for insert with check (auth.uid() = user_id)';
    execute 'create policy "post comments delete own" on public.post_comments for delete using (auth.uid() = user_id)';
  end if;

  if to_regclass('public.notifications') is not null then
    execute 'alter table public.notifications enable row level security';
    execute 'drop policy if exists "notifications authenticated read" on public.notifications';
    execute 'drop policy if exists "notifications authenticated insert" on public.notifications';
    execute 'create policy "notifications authenticated read" on public.notifications for select using (auth.role() = ''authenticated'')';
    execute 'create policy "notifications authenticated insert" on public.notifications for insert with check (auth.role() = ''authenticated'')';
  end if;
end $$;

-- Community storage bucket hardening. New uploads are stored at posts/{user_id}/file.ext.
insert into storage.buckets (id, name, public)
values ('community', 'community', true)
on conflict (id) do update set public = true;

drop policy if exists "community media public read" on storage.objects;
drop policy if exists "community media insert own folder" on storage.objects;
drop policy if exists "community media delete own folder" on storage.objects;
create policy "community media public read" on storage.objects for select using (bucket_id = 'community');
create policy "community media insert own folder" on storage.objects for insert with check (bucket_id = 'community' and auth.uid()::text = (storage.foldername(name))[2]);
create policy "community media delete own folder" on storage.objects for delete using (bucket_id = 'community' and auth.uid()::text = (storage.foldername(name))[2]);
