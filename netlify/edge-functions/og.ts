// Tripomonk — social share cards + crawlable landing pages.
//
// WHY: the app is a single-page app; social crawlers (WhatsApp, Facebook,
// Instagram, X, iMessage, Google) don't run its JavaScript, so a shared
// #trek= / #trip= hash link always showed the same generic card. This edge
// function serves real HTML per trek/trip with its OWN Open-Graph tags (photo,
// title, description) — so shared links render a rich card — and doubles as a
// crawlable landing page (SEO/GEO) with a CTA that opens the trek in the app.
//
// Routes (see `config` at the bottom):
//   /t/:slug     -> catalog trek   (data bundled in ./treks-og.js)
//   /trip/:slug  -> host-created trip (fetched live from Supabase)

import { TREKS } from "./treks-og.js";

const SITE = "https://app.tripomonk.com";
const SUPA_URL = "https://pdenkohcsjnagcfvwbfi.supabase.co";
// anon (publishable) key — safe in the browser and here; read-only, RLS-guarded.
const SUPA_ANON = "sb_publishable_nC4q3VEA4nfWQaZeBSoZsQ__e5OC-X2";
const FALLBACK_IMG = SITE + "/icons/icon-512.png";

function esc(s: unknown): string {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
function slugify(s: unknown): string {
  return String(s ?? "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function inr(n: unknown): string {
  const v = Number(n) || 0;
  return "₹" + v.toLocaleString("en-IN");
}
// nudge Unsplash images up to a card-friendly width; harmless on other hosts
function bigImg(u: string): string {
  return String(u || "").replace(/\bw=\d+/, "w=1200");
}

interface PageData {
  title: string; desc: string; img: string; url: string;
  heading: string; region: string; badge: string;
  facts: [string, string][]; deeplink: string; cta: string;
}

function page(o: PageData): string {
  const img = o.img ? bigImg(o.img) : FALLBACK_IMG;
  const facts = o.facts.filter(([, v]) => v && String(v).trim() && String(v).trim() !== "days")
    .map(([k, v]) => `<div class="fact"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join("");
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
</style></head>
<body><div class="wrap">
  <div class="hero" style="background-image:url('${esc(img)}')">
    <span class="badge">${esc(o.badge)}</span>
    <span class="brand">Tripomonk</span>
    <div class="htxt">${o.region ? `<div class="reg">${esc(o.region)}</div>` : ""}<h1>${esc(o.heading)}</h1></div>
  </div>
  <div class="body">
    <div class="facts">${facts}</div>
    <p class="desc">${esc(o.desc)}</p>
    <a class="cta" href="${esc(o.deeplink)}">${esc(o.cta)} &rarr;</a>
    <div class="sub">Guided Himalayan treks · certified leaders · safety-first<br><a href="${SITE}/">Explore all treks on Tripomonk</a></div>
  </div>
</div></body></html>`;
}

async function fetchTrip(slug: string) {
  try {
    const r = await fetch(
      `${SUPA_URL}/rest/v1/host_trips?status=eq.live&select=id,title,destination,description,img,price,days,difficulty`,
      { headers: { apikey: SUPA_ANON, Authorization: `Bearer ${SUPA_ANON}` } },
    );
    if (!r.ok) return null;
    const rows = await r.json();
    return (rows || []).find((t: any) => slugify(t.title) === slug) || null;
  } catch {
    return null;
  }
}

export default async (request: Request, context: any) => {
  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean); // ["t","slug"] | ["trip","slug"]
  const kind = parts[0];
  const slug = decodeURIComponent(parts[1] || "");
  if (!slug) return context.next();

  if (kind === "t") {
    const t: any = (TREKS as any)[slug];
    if (!t) return context.next(); // unknown trek -> fall through to the app
    const soon = !!t.soon;
    const html = page({
      title: `${t.name} Trek — ${t.region} | Tripomonk`,
      desc: t.desc || `A guided ${String(t.lvl || "").toLowerCase()} trek in ${t.region}: ${t.days} days, up to ${t.alt}. Certified leaders, fixed departures and gear rental with Tripomonk.`,
      img: t.img,
      url: `${SITE}/t/${slug}`,
      heading: `${t.name} Trek`,
      region: t.region,
      badge: soon ? "Coming soon" : "Now booking",
      facts: [
        ["Region", t.region],
        ["Duration", t.days ? `${t.days} days` : ""],
        ["Difficulty", t.lvl],
        ["Max altitude", t.alt],
        ["From", `${inr(t.price)} / person`],
      ],
      deeplink: `${SITE}/#trek=${encodeURIComponent(t.name)}`,
      cta: soon ? "View on Tripomonk" : "Book on Tripomonk",
    });
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=600" } });
  }

  if (kind === "trip") {
    const t: any = await fetchTrip(slug);
    if (!t) return context.next(); // not found / not live -> app handles it
    const html = page({
      title: `${t.title}${t.destination ? " — " + t.destination : ""} | Tripomonk`,
      desc: (t.description || `Join this guided trek${t.destination ? " to " + t.destination : ""}, hosted on Tripomonk. Book your spot now.`).replace(/\s+/g, " ").trim().slice(0, 190),
      img: t.img || FALLBACK_IMG,
      url: `${SITE}/trip/${slug}`,
      heading: t.title,
      region: t.destination || "",
      badge: "Hosted trek",
      facts: [
        ["Destination", t.destination],
        ["Duration", t.days ? `${t.days} days` : ""],
        ["Difficulty", t.difficulty],
        ["From", `${inr(t.price)} / person`],
      ],
      deeplink: `${SITE}/#trip=${encodeURIComponent(slug)}`,
      cta: "Book this trek",
    });
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
  }

  return context.next();
};

export const config = { path: ["/t/:slug", "/trip/:slug"] };
