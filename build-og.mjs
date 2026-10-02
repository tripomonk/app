// Tripomonk — static share-card + SEO page generator for GitHub Pages.
//
// WHY: the app is a single-page app served from GitHub Pages (a static host, no
// server). Social crawlers (WhatsApp, Instagram, X, iMessage, Facebook) and
// Google don't run its JavaScript, so a shared #trek / #trip link showed the
// same generic card and no trek page was crawlable. This script pre-renders a
// real HTML page per trek/trip — with its OWN Open-Graph tags (photo, title,
// price) and JSON-LD — into /t/<slug>/ and /trip/<slug>/, which GitHub Pages
// serves as plain files. It replaces the old Netlify edge function (og.ts).
//
// Run:  node build-og.mjs   (or: npm run build:og)
// Re-run whenever the catalogue changes, or a host adds/edits a live trip.
import { writeFileSync, mkdirSync, rmSync } from 'fs';
import { TREKS } from './og-data.mjs';

const SITE = 'https://app.tripomonk.com';
const SUPA_URL = 'https://pdenkohcsjnagcfvwbfi.supabase.co';
// anon (publishable) key — read-only, RLS-guarded; safe to ship.
const SUPA_ANON = 'sb_publishable_nC4q3VEA4nfWQaZeBSoZsQ__e5OC-X2';
const FALLBACK_IMG = SITE + '/icons/icon-512.png';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slugify = (s) => String(s ?? '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const inr = (n) => '₹' + (Number(n) || 0).toLocaleString('en-IN');
// nudge Unsplash images up to a card-friendly width; harmless on other hosts
const bigImg = (u) => String(u || '').replace(/\bw=\d+/, 'w=1200');

const ORG = SITE + '/#org';
/* Product + TouristTrip + Offer (+ AggregateRating when real) + BreadcrumbList, so each
   trek/trip landing page is machine-readable and eligible for price/star rich results. */
function jsonLd(o) {
  const sd = o.sd; if (!sd) return '';
  const product = {
    '@type': ['Product', 'TouristTrip'],
    '@id': o.url + '#item',
    name: o.heading,
    description: o.desc,
    image: [o.img],
    url: o.url,
    brand: { '@type': 'Brand', name: 'Tripomonk' },
    provider: { '@id': ORG },
    touristType: ['Trekkers', 'Adventure travellers'],
  };
  if (sd.price != null && sd.price !== '') product.offers = {
    '@type': 'Offer', url: o.url, price: String(sd.price), priceCurrency: 'INR',
    availability: sd.soon ? 'https://schema.org/PreOrder' : 'https://schema.org/InStock',
    seller: { '@id': ORG },
  };
  if (sd.rating && sd.reviews) product.aggregateRating = {
    '@type': 'AggregateRating', ratingValue: String(sd.rating),
    reviewCount: String(sd.reviews), bestRating: '5', worstRating: '1',
  };
  const crumbs = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
    { '@type': 'ListItem', position: 2, name: sd.type === 'trip' ? 'Road Trips & Tours' : 'Treks', item: SITE + '/' },
  ];
  if (sd.region) crumbs.push({ '@type': 'ListItem', position: 3, name: sd.region });
  crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: o.heading });
  const graph = { '@context': 'https://schema.org', '@graph': [product, { '@type': 'BreadcrumbList', '@id': o.url + '#breadcrumb', itemListElement: crumbs }] };
  return `<script type="application/ld+json">${JSON.stringify(graph)}</script>`;
}

function page(o) {
  const img = o.img ? bigImg(o.img) : FALLBACK_IMG;
  const facts = o.facts.filter(([, v]) => v && String(v).trim() && String(v).trim() !== 'days')
    .map(([k, v]) => `<div class="fact"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('');
  return `<!doctype html><html lang="en"><head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.desc)}"/>
<link rel="canonical" href="${esc(o.url)}"/>
<meta name="theme-color" content="#0b1220"/>
<meta property="og:type" content="article"/>
<meta property="og:site_name" content="Tripomonk"/>
<meta property="og:title" content="${esc(o.title)}"/>
<meta property="og:description" content="${esc(o.desc)}"/>
<meta property="og:url" content="${esc(o.url)}"/>
<meta property="og:image" content="${esc(img)}"/>
<meta property="og:image:alt" content="${esc(o.heading)}"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:locale" content="en_IN"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${esc(o.title)}"/>
<meta name="twitter:description" content="${esc(o.desc)}"/>
<meta name="twitter:image" content="${esc(img)}"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:#0b1220;color:#eaf0fb;-webkit-font-smoothing:antialiased;line-height:1.5}
.wrap{max-width:640px;margin:0 auto;min-height:100vh;display:flex;flex-direction:column}
.hero{position:relative;aspect-ratio:1200/700;background:#16233b center/cover no-repeat}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,18,32,.05) 40%,rgba(11,18,32,.85) 88%,#0b1220)}
.badge{position:absolute;top:16px;left:16px;z-index:2;background:#0065ff;color:#fff;font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;letter-spacing:.02em}
.brand{position:absolute;top:16px;right:16px;z-index:2;font-weight:800;font-size:15px;color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.5)}
.htxt{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:20px 22px}
.htxt .reg{font-size:13px;color:#9fc0ff;font-weight:600;margin-bottom:4px}
.htxt h1{font-size:30px;line-height:1.15;font-weight:800}
.body{padding:20px 22px 30px;flex:1}
.facts{display:flex;flex-wrap:wrap;gap:8px;margin:2px 0 18px}
.fact{background:#16233b;border:1px solid #24365a;border-radius:12px;padding:9px 13px;min-width:0}
.fact span{display:block;font-size:11px;color:#8aa1c6}
.fact b{font-size:14px;color:#eaf0fb;font-weight:700}
.desc{font-size:15px;color:#c3d2ec;margin-bottom:24px}
.cta{display:block;background:#0065ff;color:#fff;text-decoration:none;text-align:center;font-weight:700;font-size:16px;padding:16px;border-radius:14px;box-shadow:0 10px 30px -10px rgba(0,101,255,.7)}
.cta:active{transform:scale(.99)}
.sub{text-align:center;font-size:12.5px;color:#7f93b5;margin-top:14px}
.sub a{color:#9fc0ff;text-decoration:none}
</style>${jsonLd(o)}</head>
<body><div class="wrap">
  <div class="hero" style="background-image:url('${esc(img)}')">
    <span class="badge">${esc(o.badge)}</span>
    <span class="brand">Tripomonk</span>
    <div class="htxt">${o.region ? `<div class="reg">${esc(o.region)}</div>` : ''}<h1>${esc(o.heading)}</h1></div>
  </div>
  <div class="body">
    <div class="facts">${facts}</div>
    <p class="desc">${esc(o.desc)}</p>
    <a class="cta" href="${esc(o.deeplink)}">${esc(o.cta)} &rarr;</a>
    <div class="sub">Guided Himalayan treks · certified leaders · safety-first<br><a href="${SITE}/">Explore all treks on Tripomonk</a></div>
  </div>
</div></body></html>`;
}

function writePage(dir, html) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(dir + '/index.html', html, 'utf8');
}

// Rebuild from scratch so removed treks/trips don't linger as stale pages.
rmSync('t', { recursive: true, force: true });
rmSync('trip', { recursive: true, force: true });

// ---- catalogue treks (from og-data.mjs) ----
const trekUrls = [];
for (const [slug, t] of Object.entries(TREKS)) {
  const soon = !!t.soon;
  writePage('t/' + slug, page({
    title: `${t.name} Trek — ${t.region} | Tripomonk`,
    desc: t.desc || `A guided ${String(t.lvl || '').toLowerCase()} trek in ${t.region}: ${t.days} days, up to ${t.alt}. Certified leaders, fixed departures and gear rental with Tripomonk.`,
    img: t.img,
    url: `${SITE}/t/${slug}`,
    heading: `${t.name} Trek`,
    region: t.region,
    badge: soon ? 'Coming soon' : 'Now booking',
    facts: [
      ['Region', t.region],
      ['Duration', t.days ? `${t.days} days` : ''],
      ['Difficulty', t.lvl],
      ['Max altitude', t.alt],
      ['From', `${inr(t.price)} / person`],
    ],
    deeplink: `${SITE}/#trek=${encodeURIComponent(t.name)}`,
    cta: soon ? 'View on Tripomonk' : 'Book on Tripomonk',
    sd: { type: 'trek', price: t.price, region: t.region, days: t.days, soon, rating: t.r, reviews: t.rev },
  }));
  trekUrls.push(`${SITE}/t/${slug}`);
}

// ---- host-created live trips (best-effort live fetch; needs Node 18+ fetch) ----
const tripUrls = [];
try {
  if (typeof fetch === 'function') {
    const r = await fetch(`${SUPA_URL}/rest/v1/host_trips?status=eq.live&select=id,title,destination,description,img,price,days,difficulty`,
      { headers: { apikey: SUPA_ANON, Authorization: `Bearer ${SUPA_ANON}` } });
    if (r.ok) {
      const rows = await r.json();
      for (const t of (rows || [])) {
        const slug = slugify(t.title) || String(t.id);
        writePage('trip/' + slug, page({
          title: `${t.title}${t.destination ? ' — ' + t.destination : ''} | Tripomonk`,
          desc: (t.description || `Join this guided trek${t.destination ? ' to ' + t.destination : ''}, hosted on Tripomonk. Book your spot now.`).replace(/\s+/g, ' ').trim().slice(0, 190),
          img: t.img || FALLBACK_IMG,
          url: `${SITE}/trip/${slug}`,
          heading: t.title,
          region: t.destination || '',
          badge: 'Hosted trek',
          facts: [
            ['Destination', t.destination],
            ['Duration', t.days ? `${t.days} days` : ''],
            ['Difficulty', t.difficulty],
            ['From', `${inr(t.price)} / person`],
          ],
          deeplink: `${SITE}/#trip=${encodeURIComponent(slug)}`,
          cta: 'Book this trek',
          sd: { type: 'trip', price: t.price, region: t.destination || '', days: t.days },
        }));
        tripUrls.push(`${SITE}/trip/${slug}`);
      }
    } else {
      console.warn('• host_trips fetch returned', r.status, '— skipping trip pages');
    }
  } else {
    console.warn('• global fetch unavailable (need Node 18+) — skipping trip pages');
  }
} catch (e) {
  console.warn('• trip pages skipped:', e.message);
}

// ---- sitemap.xml (static pages + every generated trek/trip) ----
const staticPages = [
  ['/', 'daily', '1.0'],
  ['/landing.html', 'weekly', '0.9'],
  ['/about', 'monthly', '0.6'],
  ['/privacy.html', 'yearly', '0.3'],
  ['/terms.html', 'yearly', '0.3'],
];
const urlTag = (loc, freq, pri) =>
  `  <url>\n    <loc>${loc}</loc>${freq ? `\n    <changefreq>${freq}</changefreq>` : ''}${pri ? `\n    <priority>${pri}</priority>` : ''}\n  </url>`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(([p, f, pr]) => urlTag(SITE + p, f, pr)).join('\n')}
${trekUrls.map((u) => urlTag(u + '/', 'weekly', '0.8')).join('\n')}
${tripUrls.map((u) => urlTag(u + '/', 'weekly', '0.7')).join('\n')}
</urlset>`;
writeFileSync('sitemap.xml', sitemap, 'utf8');

console.log(`✓ Generated ${trekUrls.length} trek pages (/t/), ${tripUrls.length} trip pages (/trip/), and sitemap.xml`);
