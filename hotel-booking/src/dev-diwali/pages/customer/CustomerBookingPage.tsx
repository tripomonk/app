/**
 * /dev-diwali — customer booking page.
 *
 * Entry channel comes from the QR the guest scanned:
 *   ?src=hotel-qr   universal hotel-partner QR → guest picks hotel or enters printed code
 *   ?src=direct-qr  Tripomonk direct QR       → no hotel attribution
 *   (none)          generic link              → guest chooses; never auto-attributed (BR-10)
 * Query parameters are a UI preview only — production attribution is verified by the backend.
 */
import { useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  CreditCard,
  Globe,
  Hotel as HotelIcon,
  Info,
  Landmark,
  LifeBuoy,
  Lock,
  Minus,
  Moon,
  Plus,
  QrCode,
  Sailboat,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Ticket,
} from 'lucide-react';
import type { Booking, Channel } from '../../data/types';
import { DEMO_TODAY } from '../../data/mockDevDiwaliData';
import { useMockStore } from '../../state/MockStore';
import { useToast } from '../../state/Toasts';
import { amountDueNow, nextBookingId, priceBooking } from '../../utils/mockCalculations';
import { formatINR, formatWeekdayDay } from '../../utils/format';
import { DD_PATHS } from '../../paths';
import { GhatScene } from '../../components/GhatScene';
import { HotelSelector } from '../../components/HotelSelector';
import { PackageCard } from '../../components/PackageCard';
import { RoomSelector } from '../../components/RoomSelector';
import { BookingSummary } from '../../components/BookingSummary';
import { ChannelBadge, DemoBanner, DemoTag, Field, Logo, Modal } from '../../components/ui/primitives';

type StepKey = 'channel' | 'experience' | 'room' | 'details' | 'pay';
type Entry = 'hotel' | 'direct' | 'unknown';

export function CustomerBookingPage() {
  const [params] = useSearchParams();
  const src = params.get('src');
  const entry: Entry = src === 'hotel-qr' ? 'hotel' : src === 'direct-qr' ? 'direct' : 'unknown';
  // Remount the flow when the entry channel changes (e.g. switching preview links).
  return <BookingFlow key={`${entry}|${params.get('code') ?? ''}`} entry={entry} codeParam={params.get('code')} />;
}

interface FormState {
  name: string;
  mobile: string;
  email: string;
  checkIn: string;
  assistance: boolean;
  requests: string;
  agree: boolean;
}

const EMPTY_FORM: FormState = { name: '', mobile: '', email: '', checkIn: '', assistance: false, requests: '', agree: false };

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
}

function BookingFlow({ entry, codeParam }: { entry: Entry; codeParam: string | null }) {
  const store = useMockStore();
  const { settings } = store;
  const toast = useToast();
  const navigate = useNavigate();

  const activeHotels = useMemo(() => store.hotels.filter((h) => h.status === 'Active'), [store.hotels]);
  const presetHotel = codeParam ? activeHotels.find((h) => h.code === codeParam.toUpperCase()) : undefined;

  const [channel, setChannel] = useState<Channel | null>(entry === 'unknown' ? null : entry);
  const [hotelId, setHotelId] = useState<string | null>(entry === 'hotel' && presetHotel ? presetHotel.id : null);
  const [stayHotelId, setStayHotelId] = useState<string | null>(null);
  const [packageId, setPackageId] = useState<string | null>(null);
  const [dateId, setDateId] = useState<string>('d24');
  const [slotId, setSlotId] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | 'step', string>>>({});
  const [step, setStep] = useState<StepKey>('channel');
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [method, setMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [payState, setPayState] = useState<'idle' | 'processing' | 'failed'>('idle');
  const wizardRef = useRef<HTMLDivElement>(null);

  const pkg = packageId ? store.packageById(packageId) : undefined;
  const date = store.dateById(dateId);
  const slot = slotId ? store.slotById(slotId) : undefined;
  const attributionHotel = store.hotelById(hotelId);
  const effectiveStayHotelId = channel === 'hotel' ? hotelId : stayHotelId;
  const stayHotel = store.hotelById(effectiveStayHotelId);
  const hotelRooms = store.rooms.filter((r) => r.hotelId === effectiveStayHotelId && r.status === 'Active');
  const room = store.roomById(roomId);
  const seatsLeft = slotId ? store.slotAvailability[`${dateId}|${slotId}`] ?? 0 : Infinity;
  const guestLimit = Math.min(pkg?.maxGuests ?? settings.maxGuestsPerBooking, settings.maxGuestsPerBooking, seatsLeft);

  const amounts = pkg ? priceBooking(pkg, room ?? null, guests, settings.mockTaxRate) : null;
  const dueNow = amounts ? amountDueNow(amounts.total, settings) : null;

  const steps: { key: StepKey; label: string }[] = [
    { key: 'channel', label: entry === 'direct' ? 'Channel' : entry === 'hotel' ? 'Hotel' : 'Booking type' },
    { key: 'experience', label: 'Experience' },
    ...(pkg?.includesAccommodation ? [{ key: 'room' as StepKey, label: 'Room' }] : []),
    { key: 'details', label: 'Details' },
    { key: 'pay', label: 'Review & pay' },
  ];
  const stepIndex = Math.max(0, steps.findIndex((s) => s.key === step));

  /* ---------- state transitions that keep selections valid ---------- */

  const selectAttributionHotel = (id: string) => {
    if (id !== hotelId && roomId) {
      setRoomId(null);
      toast('Room selection cleared because you changed hotel.', 'info');
    }
    setHotelId(id);
    setErrors({});
  };

  const selectStayHotel = (id: string) => {
    if (id !== stayHotelId && roomId) {
      setRoomId(null);
      toast('Room selection cleared because you changed hotel.', 'info');
    }
    setStayHotelId(id);
  };

  const selectPackage = (id: string) => {
    const next = store.packageById(id)!;
    setPackageId(id);
    if (!next.includesAccommodation) {
      setRoomId(null);
      setStayHotelId(null);
    }
    if (guests > next.maxGuests) setGuests(next.maxGuests);
    setErrors({});
  };

  const selectDate = (id: string) => {
    setDateId(id);
    if (slotId) {
      const left = store.slotAvailability[`${id}|${slotId}`] ?? 0;
      if (left < guests) {
        setSlotId(null);
        toast('Your time slot is not available on that date. Please pick another.', 'info');
      }
    }
  };

  const changeGuests = (n: number) => {
    const next = Math.max(1, Math.min(guestLimit, n));
    setGuests(next);
    if (room && room.capacity < next) {
      setRoomId(null);
      toast(`${room.name} ${room.number} fits up to ${room.capacity} guests, so it was cleared.`, 'info');
    }
  };

  /* ---------- step validation ---------- */

  const validateStep = (key: StepKey): boolean => {
    const e: typeof errors = {};
    if (key === 'channel') {
      if (!channel) e.step = 'Choose how you are booking to continue.';
      else if (channel === 'hotel' && !hotelId) e.step = 'Select your hotel or enter the code from the QR poster.';
    }
    if (key === 'experience') {
      if (!pkg) e.step = 'Choose a package to continue.';
      else if (!slotId) e.step = 'Choose a time slot to continue.';
      else if (guests > guestLimit) e.step = `This slot has ${seatsLeft} seats left. Reduce guests or pick another slot.`;
    }
    if (key === 'room') {
      if (!effectiveStayHotelId) e.step = 'Choose where you would like to stay.';
      else if (!room) e.step = 'Choose a room to continue.';
      else if (room.hotelId !== effectiveStayHotelId) e.step = 'That room belongs to a different hotel. Choose again.';
    }
    if (key === 'details') {
      if (form.name.trim().length < 2) e.name = 'Enter the lead guest’s full name.';
      const digits = form.mobile.replace(/\D/g, '');
      if (!/^[6-9]\d{9}$/.test(digits)) e.mobile = 'Enter a 10-digit Indian mobile number.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address for your confirmation.';
      if (pkg?.includesAccommodation && !form.checkIn) e.checkIn = 'Tell us roughly when you will check in.';
      if (!form.agree) e.agree = 'Please accept the booking terms to continue.';
    }
    setErrors(e);
    if (Object.keys(e).length && key === 'details') {
      const first = (['name', 'mobile', 'email', 'checkIn', 'agree'] as const).find((k) => e[k]);
      if (first) document.getElementById(`dd-f-${first}`)?.focus();
    }
    return Object.keys(e).length === 0;
  };

  const goTo = (key: StepKey) => {
    setStep(key);
    setErrors({});
    setPayState('idle');
    requestAnimationFrame(() => {
      const el = wizardRef.current;
      if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    });
  };

  const next = () => {
    if (!validateStep(step)) return;
    const n = steps[stepIndex + 1];
    if (n) goTo(n.key);
  };
  const back = () => {
    const p = steps[stepIndex - 1];
    if (p) goTo(p.key);
  };

  /* ---------- simulated payment ---------- */

  const simulatePayment = (success: boolean) => {
    if (!pkg || !slotId || !amounts || !channel) return;
    setPayState('processing');
    window.setTimeout(() => {
      if (!success) {
        setPayState('failed');
        return;
      }
      const digits = form.mobile.replace(/\D/g, '');
      const now = new Date();
      const booking: Booking = {
        id: nextBookingId(store.bookings),
        createdAt: `${DEMO_TODAY}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:00+05:30`,
        customer: { name: form.name.trim(), mobile: `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`, email: form.email.trim() },
        channel,
        hotelId: channel === 'hotel' ? hotelId : null,
        stayHotelId: pkg.includesAccommodation ? effectiveStayHotelId : null,
        roomId: pkg.includesAccommodation ? roomId : null,
        packageId: pkg.id,
        dateId,
        slotId,
        guests,
        amounts,
        paymentStatus: settings.paymentPolicy === 'full' ? 'Paid' : 'Pending',
        bookingStatus: 'Confirmed',
        commissionStatus: channel === 'hotel' ? 'Pending' : 'Not applicable',
        specialRequests: [form.requests.trim(), form.assistance ? 'Needs boarding assistance' : '', form.checkIn ? `Check-in: ${form.checkIn}` : '']
          .filter(Boolean)
          .join(' · ') || undefined,
        source: 'session',
      };
      store.addBooking(booking);
      navigate(DD_PATHS.confirmation(booking.id));
    }, 1400);
  };

  const onDetailsSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  /* ---------- render ---------- */

  const summary = (
    <BookingSummary
      channel={channel}
      attributionHotel={attributionHotel}
      pkg={pkg}
      date={date}
      slot={slot}
      guests={guests}
      stayHotel={stayHotel}
      room={room}
      amounts={amounts}
      dueNow={dueNow}
      settings={settings}
    />
  );

  return (
    <div className="dd-scope dd-cust">
      {/* ================= HERO ================= */}
      <header className="dd-hero">
        <div className="dd-hero-scene" aria-hidden="true">
          <GhatScene width={1920} height={760} skylineAt={0.72} waterAt={0.84} />
        </div>
        <div className="dd-hero-inner dd-wrap">
          <div className="dd-hero-nav">
            <Logo variant="light" height={32} />
            {channel === 'hotel' && attributionHotel ? (
              <span className="dd-channel-chip"><HotelIcon aria-hidden="true" /> Booking via {attributionHotel.name}</span>
            ) : channel === 'direct' ? (
              <span className="dd-channel-chip"><Globe aria-hidden="true" /> Tripomonk Direct</span>
            ) : entry === 'hotel' ? (
              <span className="dd-channel-chip"><QrCode aria-hidden="true" /> Hotel partner QR</span>
            ) : null}
          </div>
          <div className="dd-hero-copy">
            <p className="dd-hero-deva" lang="hi">देव दीपावली · काशी</p>
            <h1 className="dd-hero-title">
              Experience <span>Dev Deepawali</span> in Varanasi
            </h1>
            <p className="dd-hero-lead">
              On Kartik Purnima the ghats of Kashi are lit end to end with lakhs of diyas. Watch it from the river on a hosted
              boat ride, timed for the lighting and the aarti.
            </p>
            <div className="dd-hero-ctas">
              <button type="button" className="dd-btn dd-btn--primary dd-btn--lg" onClick={() => scrollToId('dd-book')}>
                <Sailboat /> Book Your Boat Ride
              </button>
              <button type="button" className="dd-btn dd-btn--lg dd-btn--ondark" onClick={() => scrollToId('dd-explore')}>
                Explore Experience
              </button>
            </div>
            <ul className="dd-hero-facts">
              <li><Moon aria-hidden="true" /> Kartik Purnima · Tue, 24 Nov 2026</li>
              <li><Clock aria-hidden="true" /> Evening slots from 4:30 PM <span className="dd-hero-sample">sample</span></li>
              <li><Sailboat aria-hidden="true" /> Shared and private boats</li>
            </ul>
          </div>
        </div>
      </header>

      {/* ================= EXPLORE ================= */}
      <section id="dd-explore" className="dd-section dd-explore">
        <div className="dd-wrap dd-stack-lg">
          <div className="dd-section-head">
            <p className="dd-eyebrow">The experience</p>
            <h2>An evening on the Ganga</h2>
          </div>
          <div className="dd-explore-grid">
            <article className="dd-feature">
              <span className="dd-feature-icon"><Sparkles aria-hidden="true" /></span>
              <h3>Ghats lit end to end</h3>
              <p>Steps from Assi to Rajghat glow with diyas as the full moon rises over the river.</p>
            </article>
            <article className="dd-feature">
              <span className="dd-feature-icon"><Landmark aria-hidden="true" /></span>
              <h3>The aarti from the water</h3>
              <p>See the Ganga Aarti from a boat, away from the crowds packed on the ghat steps.</p>
            </article>
            <article className="dd-feature">
              <span className="dd-feature-icon"><LifeBuoy aria-hidden="true" /></span>
              <h3>Hosted and safety-first</h3>
              <p>A host on every boat, a life jacket for every guest, and fixed boarding times.</p>
            </article>
          </div>
          <ol className="dd-howto" aria-label="How booking works">
            <li>
              <span className="dd-howto-n">1</span>
              <ScanLine aria-hidden="true" />
              <div><strong>Scan the QR</strong><span>At your hotel's reception or room, or from a Tripomonk poster.</span></div>
            </li>
            <li>
              <span className="dd-howto-n">2</span>
              {entry === 'direct' ? <Globe aria-hidden="true" /> : <HotelIcon aria-hidden="true" />}
              <div>
                <strong>{entry === 'direct' ? 'Book directly' : 'Pick your hotel'}</strong>
                <span>{entry === 'direct' ? 'No hotel needed. You book straight with Tripomonk.' : 'Select it from the list or enter the code on the poster.'}</span>
              </div>
            </li>
            <li>
              <span className="dd-howto-n">3</span>
              <CalendarDays aria-hidden="true" />
              <div><strong>Choose your ride</strong><span>Package, date, time and guests. Add a room if your package includes a stay.</span></div>
            </li>
            <li>
              <span className="dd-howto-n">4</span>
              <Ticket aria-hidden="true" />
              <div><strong>Pay and confirm</strong><span>Get your booking reference on screen, by email and on WhatsApp.</span></div>
            </li>
          </ol>
        </div>
      </section>

      {/* ================= BOOKING ================= */}
      <section id="dd-book" className="dd-section dd-book">
        <div className="dd-wrap dd-stack-lg">
          <div className="dd-row-between" style={{ alignItems: 'flex-end' }}>
            <div className="dd-section-head">
              <p className="dd-eyebrow">Dev Deepawali 2026</p>
              <h2>Book your boat ride</h2>
            </div>
            {channel && <ChannelBadge channel={channel} />}
          </div>
          <DemoBanner>
            <strong>Prototype.</strong> Prices, dates, availability and payment are simulated. No real booking is made and no payment is
            taken.
          </DemoBanner>
          {!settings.bookingsOpen && (
            <div className="dd-callout dd-callout--warn">
              <Info aria-hidden="true" />
              <div>Bookings are paused in Settings (demo). You can explore the flow, but payment is disabled.</div>
            </div>
          )}

          <div className="dd-book-grid">
            <div className="dd-wizard" ref={wizardRef}>
              <ol className="dd-steps" aria-label="Booking progress">
                {steps.map((s, i) => {
                  const done = i < stepIndex;
                  const current = i === stepIndex;
                  return (
                    <li key={s.key} className={`dd-step ${done ? 'is-done' : ''} ${current ? 'is-current' : ''}`}>
                      <button type="button" disabled={!done} onClick={() => goTo(s.key)} aria-current={current ? 'step' : undefined}>
                        <span className="dd-step-n">{done ? <Check aria-hidden="true" /> : i + 1}</span>
                        <span className="dd-step-label">{s.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>

              <div className="dd-step-panel">
                {/* ---------- STEP: CHANNEL / HOTEL ---------- */}
                {step === 'channel' && (
                  <div className="dd-stack">
                    {entry === 'direct' && (
                      <div className="dd-direct-card">
                        <div className="dd-direct-icon"><Globe aria-hidden="true" /></div>
                        <div className="dd-stack-sm">
                          <h3>Book Directly with Tripomonk</h3>
                          <span className="dd-direct-indicator">
                            <i aria-hidden="true" /> Booking Channel: Tripomonk Direct
                          </span>
                          <p className="dd-muted">
                            No hotel selection needed. If your package includes a stay, you can choose accommodation later. Your
                            booking stays a Tripomonk Direct booking.
                          </p>
                        </div>
                      </div>
                    )}

                    {entry === 'unknown' && (
                      <div className="dd-stack">
                        <div className="dd-step-head">
                          <h3>How are you booking?</h3>
                          <p className="dd-muted">We couldn't tell where you came from, so this booking isn't linked to any hotel unless you choose one.</p>
                        </div>
                        <div className="dd-option-cards" role="radiogroup" aria-label="Booking type">
                          <button
                            type="button"
                            role="radio"
                            aria-checked={channel === 'hotel'}
                            className={`dd-option ${channel === 'hotel' ? 'is-selected' : ''}`}
                            onClick={() => {
                              setChannel('hotel');
                              setRoomId(null);
                              setStayHotelId(null);
                            }}
                          >
                            <HotelIcon aria-hidden="true" />
                            <strong>I'm staying at a partner hotel</strong>
                            <span>I have the hotel's QR poster or code</span>
                          </button>
                          <button
                            type="button"
                            role="radio"
                            aria-checked={channel === 'direct'}
                            className={`dd-option ${channel === 'direct' ? 'is-selected' : ''}`}
                            onClick={() => {
                              setChannel('direct');
                              setHotelId(null);
                              setRoomId(null);
                            }}
                          >
                            <Globe aria-hidden="true" />
                            <strong>Book directly with Tripomonk</strong>
                            <span>No hotel needed</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {channel === 'hotel' && (
                      <div className="dd-stack">
                        {entry === 'hotel' && (
                          <div className="dd-step-head">
                            <h3>Select your hotel</h3>
                          </div>
                        )}
                        <HotelSelector
                          hotels={activeHotels}
                          selectedId={hotelId}
                          onSelect={(id) => selectAttributionHotel(id)}
                          helper="Select your hotel or enter the code printed on the QR poster provided by your hotel."
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* ---------- STEP: EXPERIENCE ---------- */}
                {step === 'experience' && (
                  <div className="dd-stack-lg">
                    <div className="dd-stack">
                      <div className="dd-step-head">
                        <h3>Choose your experience</h3>
                      </div>
                      <div className="dd-pkg-grid">
                        {store.packages.map((p) => (
                          <PackageCard key={p.id} pkg={p} selected={p.id === packageId} onSelect={() => selectPackage(p.id)} />
                        ))}
                      </div>
                    </div>

                    <div className="dd-stack">
                      <div className="dd-row-between">
                        <h3 id="dd-date-h">Date</h3>
                        <DemoTag>Sample dates</DemoTag>
                      </div>
                      <div className="dd-choice-grid dd-choice-grid--3" role="radiogroup" aria-labelledby="dd-date-h">
                        {store.dates.map((d) => {
                          const w = formatWeekdayDay(d.date);
                          return (
                            <button
                              key={d.id}
                              type="button"
                              role="radio"
                              aria-checked={d.id === dateId}
                              className={`dd-choice dd-choice--date ${d.id === dateId ? 'is-selected' : ''} ${d.highlight ? 'is-festival' : ''}`}
                              onClick={() => selectDate(d.id)}
                            >
                              <span className="dd-choice-top">{w.weekday}</span>
                              <span className="dd-choice-big">{w.day} {w.month}</span>
                              <span className="dd-choice-note">{d.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="dd-stack">
                      <div className="dd-row-between">
                        <h3 id="dd-slot-h">Time slot</h3>
                        <DemoTag>Mock availability</DemoTag>
                      </div>
                      <div className="dd-choice-grid dd-choice-grid--4" role="radiogroup" aria-labelledby="dd-slot-h">
                        {store.slots.map((s) => {
                          const left = store.slotAvailability[`${dateId}|${s.id}`] ?? 0;
                          const disabled = left === 0 || left < guests;
                          return (
                            <button
                              key={s.id}
                              type="button"
                              role="radio"
                              aria-checked={s.id === slotId}
                              disabled={disabled}
                              className={`dd-choice ${s.id === slotId ? 'is-selected' : ''}`}
                              onClick={() => {
                                setSlotId(s.id);
                                setErrors({});
                              }}
                            >
                              <span className="dd-choice-big">{s.label}</span>
                              <span className="dd-choice-note">{s.note}</span>
                              <span className={`dd-choice-seats ${left === 0 ? 'none' : left < 10 ? 'low' : ''}`}>
                                {left === 0 ? 'Sold out' : left < guests ? `Only ${left} seats` : `${left} seats left`}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="dd-row-between dd-guests-row">
                      <div>
                        <h3 id="dd-guests-h">Number of guests</h3>
                        <p className="dd-small dd-muted">
                          Up to {Number.isFinite(guestLimit) ? guestLimit : pkg?.maxGuests ?? settings.maxGuestsPerBooking} for{' '}
                          {pkg ? 'this package' : 'a booking'}
                          {slotId && seatsLeft < (pkg?.maxGuests ?? 99) ? ' and slot' : ''}.
                        </p>
                      </div>
                      <div className="dd-guests" role="group" aria-labelledby="dd-guests-h">
                        <button type="button" aria-label="Fewer guests" onClick={() => changeGuests(guests - 1)} disabled={guests <= 1}>
                          <Minus />
                        </button>
                        <output aria-live="polite">{guests}</output>
                        <button type="button" aria-label="More guests" onClick={() => changeGuests(guests + 1)} disabled={guests >= guestLimit}>
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ---------- STEP: ROOM ---------- */}
                {step === 'room' && pkg?.includesAccommodation && (
                  <div className="dd-stack">
                    <div className="dd-step-head">
                      <h3>{channel === 'hotel' ? `Choose your room at ${attributionHotel?.name}` : 'Choose where you would like to stay'}</h3>
                      <p className="dd-muted">
                        {pkg.name} includes {pkg.nights} {pkg.nights === 1 ? 'night' : 'nights'}.{' '}
                        {channel === 'hotel' ? 'Only rooms from your selected hotel are shown.' : ''}
                      </p>
                    </div>

                    {channel === 'hotel' ? (
                      <div className="dd-row dd-small dd-muted" style={{ gap: 8 }}>
                        <HotelIcon size={16} aria-hidden="true" /> {attributionHotel?.name} · Code {attributionHotel?.code}
                        <button type="button" className="dd-link-btn" onClick={() => goTo('channel')}>Change hotel</button>
                      </div>
                    ) : (
                      <>
                        <div className="dd-callout">
                          <Info aria-hidden="true" />
                          <div>
                            Your booking stays with <strong>Tripomonk Direct</strong>. Choosing where to stay doesn't link this booking to the
                            hotel.
                          </div>
                        </div>
                        <HotelSelector hotels={activeHotels} selectedId={stayHotelId} onSelect={(id) => selectStayHotel(id)} showCode={false} />
                      </>
                    )}

                    <RoomSelector
                      rooms={hotelRooms}
                      hotelName={stayHotel?.name ?? null}
                      selectedId={roomId}
                      guests={guests}
                      nights={pkg.nights}
                      onSelect={(id) => {
                        setRoomId(id);
                        setErrors({});
                      }}
                      emptyAction={
                        <button type="button" className="dd-btn dd-btn--secondary" onClick={() => goTo('experience')}>
                          <ArrowLeft /> Change package or guests
                        </button>
                      }
                    />
                  </div>
                )}

                {/* ---------- STEP: DETAILS ---------- */}
                {step === 'details' && (
                  <form id="dd-details-form" className="dd-stack" onSubmit={onDetailsSubmit} noValidate>
                    <div className="dd-step-head">
                      <h3>Lead guest details</h3>
                      <p className="dd-muted">We'll send the confirmation to this mobile number and email.</p>
                    </div>
                    <div className="dd-form-grid">
                      <Field label="Full name" htmlFor="dd-f-name" required error={errors.name} className="dd-span-2">
                        <input
                          id="dd-f-name"
                          className="dd-input"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => set('name', e.target.value)}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'dd-f-name-error' : undefined}
                        />
                      </Field>
                      <Field label="Mobile number" htmlFor="dd-f-mobile" required error={errors.mobile} help="For WhatsApp and SMS updates">
                        <div className="dd-input-group">
                          <span className="dd-input-addon">+91</span>
                          <input
                            id="dd-f-mobile"
                            className="dd-input"
                            inputMode="numeric"
                            autoComplete="tel-national"
                            placeholder="98765 43210"
                            value={form.mobile}
                            onChange={(e) => set('mobile', e.target.value)}
                            aria-invalid={!!errors.mobile}
                            aria-describedby={errors.mobile ? 'dd-f-mobile-error' : 'dd-f-mobile-help'}
                          />
                        </div>
                      </Field>
                      <Field label="Email" htmlFor="dd-f-email" required error={errors.email} help="Your confirmation is sent here">
                        <input
                          id="dd-f-email"
                          className="dd-input"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => set('email', e.target.value)}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'dd-f-email-error' : 'dd-f-email-help'}
                        />
                      </Field>
                      <Field label="Guests" htmlFor="dd-f-guests" help={`Up to ${Number.isFinite(guestLimit) ? guestLimit : settings.maxGuestsPerBooking} for this booking`}>
                        <select id="dd-f-guests" className="dd-select" value={guests} onChange={(e) => changeGuests(Number(e.target.value))}>
                          {Array.from({ length: Number.isFinite(guestLimit) ? guestLimit : settings.maxGuestsPerBooking }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                          ))}
                        </select>
                      </Field>
                      {pkg?.includesAccommodation && (
                        <Field label="Expected check-in" htmlFor="dd-f-checkIn" required error={errors.checkIn}>
                          <select
                            id="dd-f-checkIn"
                            className="dd-select"
                            value={form.checkIn}
                            onChange={(e) => set('checkIn', e.target.value)}
                            aria-invalid={!!errors.checkIn}
                          >
                            <option value="">Select a time</option>
                            <option>Morning (before 12 PM)</option>
                            <option>Afternoon (12–4 PM)</option>
                            <option>Evening (after 4 PM)</option>
                          </select>
                        </Field>
                      )}
                      <Field label="Special requests" htmlFor="dd-f-requests" className="dd-span-2" help="Optional">
                        <textarea
                          id="dd-f-requests"
                          className="dd-textarea"
                          rows={3}
                          value={form.requests}
                          onChange={(e) => set('requests', e.target.value)}
                          placeholder="Dietary needs, a celebration, seating preferences…"
                        />
                      </Field>
                      <label className="dd-check dd-span-2">
                        <input type="checkbox" checked={form.assistance} onChange={(e) => set('assistance', e.target.checked)} />
                        <span>Someone in our group needs help boarding the boat</span>
                      </label>
                      <div className="dd-span-2 dd-stack-sm">
                        <label className="dd-check">
                          <input
                            id="dd-f-agree"
                            type="checkbox"
                            checked={form.agree}
                            onChange={(e) => set('agree', e.target.checked)}
                            aria-invalid={!!errors.agree}
                          />
                          <span>
                            I agree to the booking and cancellation terms <DemoTag>Terms to be added</DemoTag>
                          </span>
                        </label>
                        {errors.agree && <span className="dd-error">{errors.agree}</span>}
                      </div>
                    </div>
                  </form>
                )}

                {/* ---------- STEP: REVIEW & PAY ---------- */}
                {step === 'pay' && (
                  <div className="dd-stack-lg">
                    <div className="dd-step-head">
                      <h3>Review and pay</h3>
                      <p className="dd-muted">Check your details, then continue to the demo payment.</p>
                    </div>
                    <div className="dd-review">
                      <div>
                        <span className="dd-small dd-muted">Lead guest</span>
                        <strong>{form.name}</strong>
                        <span className="dd-small">+91 {form.mobile} · {form.email}</span>
                      </div>
                      <button type="button" className="dd-link-btn" onClick={() => goTo('details')}>Edit</button>
                    </div>
                    <div className="dd-mobile-summary">{summary}</div>

                    <section className="dd-pay" aria-labelledby="dd-pay-h">
                      <div className="dd-row-between">
                        <h3 id="dd-pay-h">Payment</h3>
                        <DemoTag>Simulated</DemoTag>
                      </div>
                      <div className="dd-seg dd-pay-methods" role="group" aria-label="Payment method">
                        <button type="button" aria-pressed={method === 'upi'} onClick={() => setMethod('upi')}><Smartphone size={15} /> UPI</button>
                        <button type="button" aria-pressed={method === 'card'} onClick={() => setMethod('card')}><CreditCard size={15} /> Card</button>
                        <button type="button" aria-pressed={method === 'netbanking'} onClick={() => setMethod('netbanking')}><Landmark size={15} /> Net banking</button>
                      </div>
                      <div className="dd-pay-placeholder">
                        <Lock aria-hidden="true" />
                        <div>
                          <strong>Payment gateway not connected in this prototype.</strong>
                          <span>No {method === 'upi' ? 'UPI ID' : method === 'card' ? 'card details' : 'bank login'} is collected. Use the buttons below to simulate an outcome.</span>
                        </div>
                      </div>
                      {settings.paymentPolicy !== 'full' && dueNow !== null && (
                        <div className="dd-callout">
                          <Info aria-hidden="true" />
                          <div>
                            {settings.paymentPolicy === 'advance'
                              ? `Payment policy (demo): ${settings.advancePercent}% advance now — ${formatINR(dueNow)}. Balance at the venue.`
                              : 'Payment policy (demo): pay at the venue. Nothing is charged now.'}
                          </div>
                        </div>
                      )}
                      {payState === 'failed' && (
                        <div className="dd-callout dd-callout--bad" role="alert">
                          <Info aria-hidden="true" />
                          <div><strong>Demo payment failed.</strong> No money was taken. You can try again.</div>
                        </div>
                      )}
                      <div className="dd-pay-actions">
                        <button
                          type="button"
                          className="dd-btn dd-btn--primary dd-btn--lg"
                          onClick={() => simulatePayment(true)}
                          disabled={payState === 'processing' || !settings.bookingsOpen}
                        >
                          {payState === 'processing' ? (
                            <><span className="dd-spinner" aria-hidden="true" /> Processing demo payment…</>
                          ) : settings.paymentPolicy === 'venue' ? (
                            <><ShieldCheck /> Confirm booking (demo)</>
                          ) : (
                            <><ShieldCheck /> Simulate successful payment · {formatINR(dueNow ?? 0)}</>
                          )}
                        </button>
                        <button
                          type="button"
                          className="dd-btn dd-btn--secondary"
                          onClick={() => simulatePayment(false)}
                          disabled={payState === 'processing' || !settings.bookingsOpen || settings.paymentPolicy === 'venue'}
                        >
                          Simulate failed payment
                        </button>
                      </div>
                    </section>
                  </div>
                )}

                {errors.step && (
                  <div className="dd-callout dd-callout--warn" role="alert" style={{ marginTop: 16 }}>
                    <Info aria-hidden="true" />
                    <div>{errors.step}</div>
                  </div>
                )}

                {step !== 'pay' && (
                  <div className="dd-step-actions">
                    {stepIndex > 0 ? (
                      <button type="button" className="dd-btn dd-btn--secondary" onClick={back}>
                        <ArrowLeft /> Back
                      </button>
                    ) : (
                      <span />
                    )}
                    {step === 'details' ? (
                      <button type="submit" form="dd-details-form" className="dd-btn dd-btn--primary dd-btn--lg">
                        Review booking <ArrowRight />
                      </button>
                    ) : (
                      <button type="button" className="dd-btn dd-btn--primary dd-btn--lg" onClick={next}>
                        Continue <ArrowRight />
                      </button>
                    )}
                  </div>
                )}
                {step === 'pay' && (
                  <div className="dd-step-actions">
                    <button type="button" className="dd-btn dd-btn--secondary" onClick={back} disabled={payState === 'processing'}>
                      <ArrowLeft /> Back
                    </button>
                    <span />
                  </div>
                )}
              </div>
            </div>

            <aside className="dd-aside">{summary}</aside>
          </div>
        </div>
      </section>

      <footer className="dd-footer">
        <div className="dd-wrap dd-row-between">
          <Logo variant="light" height={26} />
          <p className="dd-small">Dev Deepawali 2026 · Varanasi · Prototype — prices, dates and availability are placeholders.</p>
        </div>
      </footer>

      {/* Mobile summary bar */}
      <div className="dd-mbar">
        <div>
          <span className="dd-small dd-muted">{pkg ? `${pkg.name} · ${guests} ${guests === 1 ? 'guest' : 'guests'}` : 'No package selected'}</span>
          <strong>{amounts ? formatINR(amounts.total) : '—'}</strong>
        </div>
        <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={() => setSummaryOpen(true)}>
          View summary
        </button>
      </div>
      {summaryOpen && (
        <Modal title="Booking summary" onClose={() => setSummaryOpen(false)}>
          {summary}
        </Modal>
      )}
    </div>
  );
}
