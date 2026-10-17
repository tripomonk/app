# Tripomonk · Dev Deepawali 2026 — Frontend Prototype

Interactive frontend for the Dev Deepawali Hotel QR Booking System, built from the
*Frontend Development Brief* and *PRD v1.0*. Three connected areas:

1. **Customer booking page** — `/dev-diwali`
2. **Hotel Admin Portal** — `/hotel-admin/*`
3. **Super Admin module** — a separate **Dev Deepawali 2026** menu inside the Main Admin Panel (`/admin/dev-deepawali-2026/*`)

Everything runs on clearly labelled mock data. There is no backend, real authentication,
payment gateway, persistence or notification in this phase.

---

## Run it

```bash
npm install
npm run dev            # http://localhost:5173  (prototype navigator bar at the top)
npm run build          # type-check + production build
npm run build:preview  # one self-contained HTML in dist-preview/ (memory router) for sharing
```

Stack: React 19, TypeScript, React Router 7, Vite, `qrcode.react` (real QR codes), `lucide-react` (icons).
Fonts: Poppins (headings, matches the wordmark), Mukta (body, Latin + Devanagari), Tiro Devanagari Hindi (campaign accents).

---

## Important: integrating into the existing Tripomonk app

The existing Tripomonk codebase was **not available** while this was built, so the module
was developed as an isolated folder with its own preview harness. Nothing in the existing
app has been touched. To integrate:

1. Copy `src/dev-diwali/` into the app (adapt to its folder conventions if needed).
2. Install `react-router-dom` (if not present), `qrcode.react`, `lucide-react` — or swap icons/QR for what the app already uses.
3. Add the Google Fonts link from `index.html` (or map the three `--dd-font-*` tokens to the app's fonts).
4. Wrap the module routes with the provider and drop the route fragment into the existing `<Routes>`:

   ```tsx
   import { DevDiwaliProvider, devDiwaliRoutes } from './dev-diwali';

   <DevDiwaliProvider>
     <Routes>
       {/* existing routes stay exactly as they are */}
       {devDiwaliRoutes}
     </Routes>
   </DevDiwaliProvider>
   ```
5. **Main Admin Panel:** `layouts/SuperAdminLayout.tsx` is only a stand-in shell (its greyed "existing" items are placeholders).
   In the real admin, render the Super Admin pages inside the existing admin layout and add
   `<DevDeepawaliAdminMenu />` (from `layouts/DevDeepawaliAdminMenu.tsx`) to the existing sidebar. No existing menu item is replaced.
6. Adjust base paths in `paths.ts` if the admin lives under a different prefix.

**Style isolation:** every CSS rule is nested under `.dd-scope`, and all design tokens are defined on
`.dd-scope` (not `:root`). The only global CSS is `src/preview/preview.css`, which belongs to the
preview harness and must **not** be copied into the app.

The preview harness (`src/main.tsx`, `src/preview/`) is for demos only and is not part of the module.

---

## Pages and routes

### Customer (`pages/customer/`)
| Route | Page | Notes |
|---|---|---|
| `/dev-diwali?src=hotel-qr` | `CustomerBookingPage` | Universal hotel-partner QR → hotel list or printed code. `&code=VAR001` preselects (preview only). |
| `/dev-diwali?src=direct-qr` | `CustomerBookingPage` | Tripomonk Direct QR → no hotel attribution. |
| `/dev-diwali` | `CustomerBookingPage` | Generic link → guest chooses; never auto-attributed to a hotel (BR-10). |
| `/dev-diwali/confirmation/:bookingId` | `BookingConfirmationPage` | Demo confirmation, voucher preview, View Booking. |

Flow: Hero → Explore → wizard (**Hotel / Channel** → **Experience** → **Room** *(only when the package includes a stay)* → **Details** → **Review & pay**) with a live booking summary (sticky sidebar on desktop, bottom bar + sheet on mobile).

### Hotel Admin Portal (`pages/hotel-admin/`)
| Route | Page |
|---|---|
| `/hotel-admin/login` | `HotelAdminLoginPage` — simulated login, demo account picker, forgot-password, support info |
| `/hotel-admin/dashboard` | `HotelDashboardPage` |
| `/hotel-admin/bookings` | `HotelBookingsPage` |
| `/hotel-admin/bookings/:bookingId` | `HotelBookingDetailsPage` |
| `/hotel-admin/rooms` | `HotelRoomsPage` |
| `/hotel-admin/commission` | `HotelCommissionPage` |
| `/hotel-admin/reports` | `HotelReportsPage` |
| `/hotel-admin/profile` | `HotelProfilePage` |

### Super Admin (`pages/super-admin/`)
| Route (`/admin/dev-deepawali-2026/…`) | Page |
|---|---|
| `dashboard` | `SuperAdminDashboardPage` |
| `hotels` | `HotelsManagementPage` |
| `rooms` | `RoomsManagementPage` |
| `hotel-admins` | `HotelAdminAccountsPage` |
| `qr-codes` | `QRCodesPage` |
| `bookings` | `AllBookingsPage` |
| `bookings/direct` | `DirectBookingsPage` |
| `bookings/hotel-partner` | `HotelPartnerBookingsPage` |
| `commissions` | `CommissionManagementPage` |
| `reports` | `ReportsAnalyticsPage` |
| `settings` | `SettingsPage` |

---

## Reusable components (`components/`)
`HotelSelector` · `RoomSelector` · `PackageCard` · `BookingSummary` · `BookingTable` · `BookingDetailsView` ·
`BookingVoucher` · `CommissionCard` · `QRPosterPreview` · `HotelForm` · `RoomForm` · `HotelAdminForm` ·
`DashboardMetricCard` · `FilterBar` (+ `SearchFilter`, `SelectFilter`) · `ExportPreviewModal` · `GhatScene` (illustrated
hero art, replaceable with photography) · `Thumbs` (placeholder hotel/room images) · `charts/Charts` (`ColumnChart`,
`HBarChart`, `ChartCard` with chart/table toggle) · `ui/primitives` (`Logo`, `Modal`, `ConfirmDialog`, `StatusBadge`,
`ChannelBadge`, `DemoTag`, `DemoBanner`, `EmptyState`, `Pagination`, `Segmented`, `Field`).

## Mock data and calculations
- `data/types.ts` — shapes that mirror the future API.
- `data/mockDevDiwaliData.ts` — the single mock-data module: 5 hotels (codes VAR001–VAR005, one inactive), 13 rooms
  linked by `hotelId`, 5 Hotel Admin accounts, 5 packages (2 include a stay, 1 sold out), 3 sample dates around
  Kartik Purnima (Tue 24 Nov 2026), 4 time slots with mock seat availability, 61 deterministic sample bookings
  (1–17 Oct), commission adjustments, default demo settings.
  Relationships are consistent: a booking's room always belongs to its stay hotel; hotel-partner bookings use rooms of
  their attributed hotel; no room is double-booked on a date.
- `utils/mockCalculations.ts` — pricing, mock tax, amount due by payment policy, commission per booking, summaries,
  daily trend, period grouping, payouts. UI never computes these inline, so they can be swapped for API values.
- `state/MockStore.tsx` — in-memory store; each action is annotated with the endpoint it will become
  (`POST /hotels`, `PATCH /commissions/:bookingId`, …). Resets on reload.

---

## Interactions implemented
**Customer:** hotel search; printed-code entry with match / not-found states; selecting a hotel filters rooms;
changing hotel clears the room (with notice); direct flow skips hotel attribution; direct + stay lets the guest pick
accommodation without changing the channel (BR-04); boat-only packages skip the room step; sold-out packages and
slots disabled; rooms disabled when unavailable or too small, empty state when none fit (Riverfront Inn);
guest stepper bounded by package, settings and slot seats; summary updates on every change; details form
validation (name, Indian mobile, email, check-in for stays, terms) with focus on the first error; payment method
tabs with no credential fields; simulated success / failure; payment policy from Settings changes "due now";
demo confirmation with voucher preview and View Booking. Demo bookings appear in Hotel Admin and Super Admin until reload.

**Hotel Admin:** simulated login (inactive account is refused); guarded routes; responsive drawer navigation;
bookings search + date / payment / status / source filters + pagination; stacked cards on phones; masked mobile
numbers in lists; booking details + confirmation voucher; rooms with upcoming assignments; commission summary,
date-range and status filters, history, payouts, adjustments; daily / weekly / monthly reports; CSV/PDF export
previews; profile with locked attribution code and QR poster.

**Super Admin:** separate Dev Deepawali 2026 menu; dashboard metrics and charts (each with table view);
add / edit / view hotels; activate / deactivate with confirmation; add / edit rooms; create / edit Hotel Admin
accounts (duplicate email blocked); hotel-partner vs direct QR poster previews that change with the selected hotel;
all / direct / hotel-partner booking tables with filters, pagination and booking-detail modal; commission
bulk approve / mark paid with confirmation; adjustments; payout history; reports with period / channel / hotel
filters; settings for commission model, payment policy, mock tax, bookings open, max guests — changes flow through
the whole prototype immediately.

## Simulated features — backend work still required
| Area | In this prototype | Needed in backend phase |
|---|---|---|
| Authentication | Demo account picker; any password | Real Hotel Admin auth, password reset, role-based access, server-side hotel scoping |
| Attribution | `?src=` param + mock code match | Verified QR source and code validation server-side; tamper-proof attribution |
| Payments | Simulated success / failure; no credentials collected | Gateway integration, webhooks, refunds, partial-advance handling |
| Bookings | In-memory, lost on reload | Persistent bookings, live availability and room inventory, overbooking protection |
| Pricing & tax | Placeholder prices, mock 5% | Real packages, prices, GST rules, cancellation policy |
| Commission | Configurable demo rule (10%, package + stay) | Agreed model, server-side calculation, approvals, payouts, audit trail |
| Exports / posters / vouchers | Preview modals | Server-generated CSV, PDF reports, print-ready posters, PDF confirmations |
| Notifications | None sent | Email, SMS and WhatsApp confirmations |
| Records | Hotels, rooms, accounts held in memory | CRUD APIs and database migrations |

**Open business decisions (not invented in the UI):** commission model and rate; accommodation model (sold through
Tripomonk vs. recorded as guest context); payment policy (full / advance / at venue); actual packages, prices,
dates, time slots, capacities, cancellation rules and room inventory.

## Build & test status
- `npm run build` — passes (TypeScript strict, no errors).
- `npx oxlint src` — no errors; remaining warnings are fast-refresh hints on shared helper files.
- No test suite exists yet in this standalone module. Flows were exercised end to end in a headless browser at
  1440px, 820px and 390px widths, with no horizontal overflow and no console errors.
- **Not verified:** the existing Tripomonk app and Main Admin Panel, because their code was not available. Run the
  app's own build and tests after integrating.
