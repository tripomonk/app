/* ============================================================
   Tripomonk app v2 — logic (icons, data, screens, booking, QR, captain)
   Edit the data arrays below to change treks/packing/community.
   ============================================================ */

/* ---------- inline icons (line style, offline) ---------- */
const ICONS={
  menu:'<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  back:'<polyline points="15 18 9 12 15 6"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/>',
  heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  altitude:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
  distance:'<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M6 16V9a4 4 0 0 1 4-4h4"/><path d="m18 8 .01 7a4 4 0 0 1-4 4h-4"/>',
  summit:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="m9 11 3-3 3 3"/>',
  snow:'<line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
  pine:'<path d="M12 2 6 10h3l-4 6h5v6h4v-6h5l-4-6h3z"/>',
  tent:'<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 16l-3.5 5"/><path d="M2 21h20"/>',
  meals:'<path d="M3 2v7a2 2 0 0 0 4 0V2"/><path d="M5 11v11"/><path d="M19 2a3 3 0 0 0-3 3v6h3"/><path d="M19 2v20"/>',
  stay:'<path d="M2 4v16"/><path d="M2 9h16a3 3 0 0 1 3 3v8"/><path d="M2 14h19"/><path d="M7 9V6h8"/>',
  guide:'<path d="M4 22V4"/><path d="M4 4h11l-2 4 2 4H4"/>',
  permits:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>',
  firstaid:'<rect x="3" y="6" width="18" height="14" rx="2"/><line x1="12" y1="10" x2="12" y2="16"/><line x1="9" y1="13" x2="15" y2="13"/><path d="M9 6V4h6v2"/>',
  backpack:'<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M9 6V5a3 3 0 0 1 6 0v1"/><path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/>',
  shoe:'<path d="M2 17h12l4-2c2 0 4 1 4 3v1H2z"/><path d="M2 17v-5l4-1 2 3 3-1"/>',
  jacket:'<path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.1a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.3-2.2z"/><path d="M12 4v18"/>',
  thermal:'<path d="M12 3v12"/><circle cx="12" cy="18" r="3"/><path d="M9 7h6"/><path d="M9 11h6"/>',
  rain:'<path d="M20 16.5A5 5 0 0 0 18 7a6 6 0 0 0-11.6-1A4.5 4.5 0 0 0 6 15"/><line x1="8" y1="19" x2="8" y2="22"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="16" y1="19" x2="16" y2="22"/>',
  bottle:'<path d="M9 2h6"/><path d="M9 5h6v3l-1 2v10a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V10L9 8z"/>',
  headlamp:'<circle cx="12" cy="12" r="4"/><path d="M5 12H2"/><path d="M22 12h-3"/><path d="M12 5V2"/><path d="M6.3 6.3 4.2 4.2"/>',
  sunglasses:'<path d="M2 10h4l1 4a3 3 0 0 0 6 0 3 3 0 0 1 6 0 3 3 0 0 0 6 0l1-4"/><path d="M2 10l2-3h4"/>',
  sunblock:'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>',
  poles:'<path d="M7 3 4 21"/><path d="M5 4h4"/><path d="m17 3 3 18"/><path d="M15 4h4"/>',
  bed:'<path d="M2 4v16"/><path d="M2 9h16a3 3 0 0 1 3 3v8"/><path d="M2 14h19"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  upi:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
  bank:'<line x1="3" y1="22" x2="21" y2="22"/><line x1="5" y1="10" x2="5" y2="18"/><line x1="12" y1="10" x2="12" y2="18"/><line x1="19" y1="10" x2="19" y2="18"/><polygon points="12 2 21 8 3 8 12 2"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  chat:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.9L3 21l1.9-5A8.4 8.4 0 1 1 21 11.5Z"/>',
  plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/><path d="M9 21v-6h6v6"/>',
  treks:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
  community:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 5.8"/><path d="M21 20a6 6 0 0 0-4-5.6"/>',
  bookings:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4Z"/>',
  ticket:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4Z"/>',
  like:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>',
  comment:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.9L3 21l1.9-5A8.4 8.4 0 1 1 21 11.5Z"/>',
  heartmenu:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>',
  starline:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  list:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 2.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 7 2.6h.1A1.6 1.6 0 0 0 8.8 1.1V1a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 15 2.6a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1.1H23a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
  help:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12" y2="17"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  alert:'<path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12" y2="17"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M12 2a15 15 0 0 0 0 20"/>'
};
/* Filled icons via Google Material Symbols (Rounded, FILL=1). Maps the app's
   internal icon names to Material Symbol names so all existing ic()/data-i calls
   keep working with no changes. */
const IMAP={menu:'menu',bell:'notifications',search:'search',sliders:'tune',back:'arrow_back_ios_new',share:'ios_share',
  heart:'favorite',pin:'location_on',download:'download',user:'person',phone:'call',mail:'mail',calendar:'calendar_month',
  clock:'schedule',altitude:'terrain',distance:'route',summit:'landscape',snow:'ac_unit',pine:'forest',tent:'festival',
  meals:'restaurant',stay:'hotel',guide:'flag',permits:'description',firstaid:'medical_services',backpack:'backpack',
  shoe:'footprint',jacket:'checkroom',thermal:'thermostat',rain:'umbrella',bottle:'water_drop',headlamp:'flashlight_on',
  sunglasses:'eyeglasses',sunblock:'sunny',poles:'nordic_walking',bed:'airline_seat_flat',lock:'lock',upi:'account_balance_wallet',card:'credit_card',
  bank:'account_balance',check:'check',chat:'chat',plus:'add',home:'home',treks:'landscape',community:'groups',
  bookings:'confirmation_number',ticket:'confirmation_number',like:'favorite',comment:'mode_comment',heartmenu:'favorite',
  starline:'star',list:'checklist',settings:'settings',help:'help',shield:'verified_user',alert:'warning',logout:'logout',globe:'language',
  raft:'kayaking',para:'paragliding',bungee:'sports',ski:'downhill_skiing',camp:'festival',kayak:'kayaking',
  cloud:'partly_cloudy_day',air:'air',temp:'device_thermostat',flame:'whatshot',hills:'landscape_2',
  monitor:'monitor_heart',spo2:'spo2',steps:'directions_walk',fire:'local_fire_department',speed:'speed',watch:'watch',
  camera:'photo_camera',close:'close',photo:'image',powerbank:'battery_charging_full',trash:'delete',message:'send',lock2:'lock',repeat:'repeat'};
/* a few icons render poorly in the Material font — use crisp inline SVGs instead */
const SVGIC={
  backpack:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 3.2A2.5 2.5 0 0 1 14.5 3.2 6 6 0 0 1 18 8.6V19a2 2 0 0 1-2 2h-1v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H8a2 2 0 0 1-2-2V8.6a6 6 0 0 1 3.5-5.4Zm.5.9A5 5 0 0 0 8.2 6h7.6A5 5 0 0 0 14 4.1a1.5 1.5 0 0 0-4 0ZM10 16h4v5h-4z"/><path d="M6 11H4.6a1.6 1.6 0 0 0-1.6 1.6V16h3zM18 11h1.4a1.6 1.6 0 0 1 1.6 1.6V16h-3z"/></svg>'
};
function ic(n,s){s=s||20;
  if(SVGIC[n])return `<span class="ic" style="display:inline-flex;width:${s}px;height:${s}px">${SVGIC[n].replace('<svg','<svg width="'+s+'" height="'+s+'"')}</span>`;
  return `<span class="msr" style="font-size:${s}px">${IMAP[n]||'circle'}</span>`;}
function hydrate(root){(root||document).querySelectorAll('[data-i]').forEach(el=>{el.innerHTML=ic(el.dataset.i,+el.dataset.sz||20);el.removeAttribute('data-i');});fitCarousels(root);if(typeof animateTrekScores==='function')animateTrekScores();}

/* ---------- data ---------- */
const U='https://images.unsplash.com/photo-';
const Q='?auto=format&fit=crop&w=900&q=70';
const HL=[['summit','Summit View'],['snow','Snow Trails'],['pine','Pine Forest'],['tent','Camping']];
/* Admin-selectable trip highlights: label -> Material Symbol icon. Stored per-trek as a
   labels array (treks.highlights); rendered via hlHTML(). See normHl()/deriveTreks(). */
const HL_ICON={'Summit View':'landscape','Snow Trails':'ac_unit','Pine Forest':'forest','Camping':'festival',
  'Waterfalls':'water_drop','Alpine Lake':'water','Meadows':'grass','Wildlife':'pets','River Crossing':'kayaking',
  'Bonfire':'local_fire_department','Stargazing':'nights_stay','Sunrise Point':'wb_twilight','Local Village':'holiday_village',
  'Monastery':'temple_buddhist','Glacier':'severe_cold','Ridge Walk':'hiking','Hot Springs':'hot_tub','Photography':'photo_camera'};
const HL_LABELS=Object.keys(HL_ICON);
/* normalise a trek's highlights to a labels array (handles legacy [[icon,label]] + the new labels array) */
function normHl(t){const h=t&&t.hl;
  if(Array.isArray(h)&&h.length)return h.map(x=>Array.isArray(x)?(x[1]||x[0]):String(x)).filter(Boolean);
  return HL.map(x=>x[1]);}
function hlHTML(t){return normHl(t).map(l=>`<span class="hl-pill"><span class="ic"><span class="msr" style="font-size:15px;color:var(--accent2)">${HL_ICON[l]||'check'}</span></span>${esc(l)}</span>`).join('');}
const treks=[
  {n:"Kedarkantha",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Kedarkantha_Hill%2C_Uttarakhand.jpg/1280px-Kedarkantha_Hill%2C_Uttarakhand.jpg",credit:"Sachinbauriyan · CC BY-SA 4.0 · Wikimedia Commons",r:4.8,rev:"1.2k",lvl:"Easy",days:5,alt:"12,500 ft",dist:"20 km",best:"Dec – Apr",price:6499,
   desc:"Kedarkantha is the perfect winter trek for beginners. It offers stunning views, snow-covered trails and an unforgettable summit."},
  {n:"Brahmatal",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Brahmatal_%28cropped%29.jpg/1280px-Brahmatal_%28cropped%29.jpg",credit:"Arijit95jitu · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"860",lvl:"Moderate",days:6,alt:"12,250 ft",dist:"22 km",best:"Dec – Mar",price:8999,
   desc:"Ridge walks with grand views of Mt. Trishul and Nanda Ghunti, plus the legendary frozen Brahmatal lake."},
  {n:"Valley of Flowers",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Valley_of_flowers_national_park%2C_Uttarakhand%2C_India_03_%28edit%29.jpg/1280px-Valley_of_flowers_national_park%2C_Uttarakhand%2C_India_03_%28edit%29.jpg",credit:"Original: Rohit Sharma Derivative work: UnpetitproleX · CC BY-SA 4.0 · Wikimedia Commons",r:4.9,rev:"2.0k",lvl:"Moderate",days:6,alt:"14,100 ft",dist:"38 km",best:"Jul – Sep",price:9499,
   desc:"A UNESCO World Heritage site that bursts into hundreds of alpine flowers in the monsoon, paired with Hemkund Sahib."},
  {n:"Hampta Pass",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mesmerising_beauty_of_Hampta_pass_on_Chandrataal_Trek_Himachal_India.jpg/1280px-Mesmerising_beauty_of_Hampta_pass_on_Chandrataal_Trek_Himachal_India.jpg",credit:"Photos Worldwide · CC0 · Wikimedia Commons",r:4.7,rev:"890",lvl:"Moderate",days:5,alt:"14,100 ft",dist:"26 km",best:"Jun – Sep",price:9999,soon:true,
   desc:"A dramatic crossover trek from the green Kullu valley to the barren landscapes of Lahaul — a trek of two worlds."},
  {n:"Har Ki Dun",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Entering_Har_Ki_Dun.JPG/1280px-Entering_Har_Ki_Dun.JPG",credit:"Omkar · CC BY-SA 4.0 · Wikimedia Commons",r:4.8,rev:"740",lvl:"Moderate",days:7,alt:"11,700 ft",dist:"44 km",best:"Apr – Jun",price:10499,
   desc:"The 'Valley of Gods' — ancient villages, the Swargarohini massif and gentle river-side camps."},
  {n:"Nag Tibba",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Nag_Tibba_04.jpg",credit:"Bhuwan Mahajan · CC BY-SA 4.0 · Wikimedia Commons",r:4.6,rev:"1.5k",lvl:"Easy",days:2,alt:"9,915 ft",dist:"16 km",best:"Oct – Mar",price:3499,
   desc:"The perfect weekend trek from Dehradun — summit views of the Bandarpunch range in a single night out."},
  {n:"Roopkund",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Roopkund_Lake.jpg/1280px-Roopkund_Lake.jpg",credit:"Schwiki · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"410",lvl:"Difficult",days:8,alt:"15,750 ft",dist:"53 km",best:"May – Jun",price:13999,
   desc:"The mysterious skeleton lake — a demanding high-altitude classic for experienced trekkers."},
  {n:"Yulla Kanda",region:"Himachal",img:U+"1606898296502-40d8c37e994b",r:4.8,rev:"New",lvl:"Moderate",days:5,alt:"11,700 ft",dist:"18 km",best:"May – Oct",price:10500,dep:"Shimla",
   desc:"A quiet Kinnaur trail to the Yulla Kanda meadow, home to a Lord Krishna temple believed to be the highest of its kind. Apple orchards and cedar give way to open ridges with Kinner Kailash across the valley — and because Kinnaur sits in the rain shadow, it walks well right through the monsoon."},
  /* ---- Coming soon (other regions) ---- */
  {n:"Triund",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Triund_%2822356802630%29.jpg/1280px-Triund_%2822356802630%29.jpg",credit:"Ashish Gupta from Noida, India · CC BY 2.0 · Wikimedia Commons",r:4.6,rev:"—",lvl:"Easy",days:2,alt:"9,350 ft",dist:"14 km",best:"Mar – Jun",price:4999,soon:true,desc:"A short, scenic ridge trek above McLeod Ganj with sweeping views of the Dhauladhar range."},
  {n:"Bhrigu Lake",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bhrigu_Lake_by_Ahmad_Faiz_Mustafa_%281%29.jpg/1280px-Bhrigu_Lake_by_Ahmad_Faiz_Mustafa_%281%29.jpg",credit:"In Transit · CC BY 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:4,alt:"14,100 ft",dist:"25 km",best:"May – Oct",price:9499,soon:true,desc:"High-altitude alpine lake above Manali, reached through rolling meadows."},
  {n:"Kashmir Great Lakes",region:"Kashmir",img:"https://upload.wikimedia.org/wikipedia/commons/3/30/Kashmir_Great_Lakes.jpg",credit:"Prajna Prabhu · CC0 · Wikimedia Commons",r:4.9,rev:"—",lvl:"Moderate",days:7,alt:"13,800 ft",dist:"72 km",best:"Jul – Sep",price:16999,soon:true,desc:"India's most beautiful trek — a string of alpine lakes set in emerald meadows."},
  {n:"Tarsar Marsar",region:"Kashmir",img:"https://upload.wikimedia.org/wikipedia/commons/e/e5/Tarsar_Marsar_Trek.jpg",credit:"Riteshmishera951150 · CC0 · Wikimedia Commons",r:4.8,rev:"—",lvl:"Moderate",days:6,alt:"13,000 ft",dist:"48 km",best:"Jul – Sep",price:15499,soon:true,desc:"Twin almond-shaped alpine lakes in the Kashmir valley, surrounded by wildflowers."},
  {n:"Markha Valley",region:"Ladakh",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Kongmaru_La_Pass%2C_Markha_Valley_trek%2C_Ladakh%2C_India_%282018%29.jpg/1280px-Kongmaru_La_Pass%2C_Markha_Valley_trek%2C_Ladakh%2C_India_%282018%29.jpg",credit:"Chris Hunkeler from Carlsbad, California, USA · CC BY-SA 2.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:7,alt:"17,060 ft",dist:"65 km",best:"Jun – Sep",price:18999,soon:true,desc:"A classic Ladakh teahouse trek through remote villages and high passes."},
  {n:"Chadar Trek",region:"Ladakh",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Chadar_trek_image_2.jpg/1280px-Chadar_trek_image_2.jpg",credit:"Goutam1962 · CC BY-SA 4.0 · Wikimedia Commons",r:4.8,rev:"—",lvl:"Difficult",days:9,alt:"11,150 ft",dist:"62 km",best:"Jan – Feb",price:24999,soon:true,desc:"The legendary walk on the frozen Zanskar river — a true winter expedition."},
  {n:"Goecha La",region:"Sikkim",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Indian_hikers_with_country_flag_on_hills_of_Goecha_La_Trek%2C_in_West_Sikkim_district_of_Sikkim%2C_photographed_by_Yogabrata_Chakraborty%2C_on_October_18%2C_2021.jpg/1280px-Indian_hikers_with_country_flag_on_hills_of_Goecha_La_Trek%2C_in_West_Sikkim_district_of_Sikkim%2C_photographed_by_Yogabrata_Chakraborty%2C_on_October_18%2C_2021.jpg",credit:"Billjones94 · CC BY-SA 4.0 · Wikimedia Commons",r:4.8,rev:"—",lvl:"Difficult",days:10,alt:"16,200 ft",dist:"90 km",best:"Apr – May",price:21999,soon:true,desc:"Up close with Kanchenjunga, the world's third-highest peak, through rhododendron forest."},
  {n:"Sandakphu",region:"Sikkim",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Abies_densa_foliage%2C_Sandakphu%2C_Singalila_National_Park%2C_Sikkim.jpg/1280px-Abies_densa_foliage%2C_Sandakphu%2C_Singalila_National_Park%2C_Sikkim.jpg",credit:"Debojyoti Dey · CC BY-SA 4.0 · Wikimedia Commons",r:4.6,rev:"—",lvl:"Moderate",days:6,alt:"11,930 ft",dist:"50 km",best:"Oct – Dec",price:13499,soon:true,desc:"Walk the Singalila ridge for views of four of the five highest peaks on earth."},
  /* ---- imported from All-treks sheet (coming soon) ---- */
  {n:"Hemkund Sahib",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hemkund_Sahib_and_Lokpal_Lake.jpg/1280px-Hemkund_Sahib_and_Lokpal_Lake.jpg",credit:"Harshit SR · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"15,200 ft",dist:"—",best:"May – Oct",price:12000,soon:true,dep:"Rishikesh",desc:"A 6-day moderate trek in Uttarakhand, topping out at 15,200 ft. Best time to go: May – Oct."},
  {n:"Dayara Bugyal",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/En_route_to_Dayara_Bugyal_at_Gui_camp_03.jpg/1280px-En_route_to_Dayara_Bugyal_at_Gui_camp_03.jpg",credit:"Satdeep Gill · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"12,100 ft",dist:"—",best:"May – Jun, Oct – Nov",price:10500,soon:true,dep:"Dehradun",desc:"A 5-day moderate trek in Uttarakhand, topping out at 12,100 ft. Best time to go: May – Jun, Oct – Nov."},
  {n:"Kuari Pass",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Dunagiri_from_Kuari_Pass.jpg/1280px-Dunagiri_from_Kuari_Pass.jpg",credit:"Sumodm · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"12,500 ft",dist:"—",best:"Mar – Jun, Oct – Feb",price:12000,soon:true,dep:"Rishikesh",desc:"A 6-day moderate trek in Uttarakhand, topping out at 12,500 ft. Best time to go: Mar – Jun, Oct – Feb."},
  {n:"Chopta Chandrashila",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chandrashila_Panorama.jpg/1280px-Chandrashila_Panorama.jpg",credit:"Drashokk · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:3,alt:"13,100 ft",dist:"—",best:"Apr – Jun, Sep – Nov",price:7500,soon:true,dep:"Rishikesh",desc:"A 3-day easy trek in Uttarakhand, topping out at 13,100 ft. Best time to go: Apr – Jun, Sep – Nov."},
  {n:"Pangarchulla Peak",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pangarchulla_Peak.jpg/1280px-Pangarchulla_Peak.jpg",credit:"ShwethaSulegai · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:7,alt:"15,100 ft",dist:"—",best:"Apr – May",price:13500,soon:true,dep:"Dehradun",desc:"A 7-day difficult trek in Uttarakhand, topping out at 15,100 ft. Best time to go: Apr – May."},
  {n:"Satopanth Lake",region:"Uttarakhand",img:U+"1714744715493-ad89b7ff503e",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"15,100 ft",dist:"—",best:"May – Jun, Sep – Oct",price:15500,soon:true,dep:"Dehradun",desc:"A 8-day difficult trek in Uttarakhand, topping out at 15,100 ft. Best time to go: May – Jun, Sep – Oct."},
  {n:"Bali Pass",region:"Uttarakhand",img:U+"1513614835783-51537729c8ba",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"16,200 ft",dist:"—",best:"May – Jun, Sep – Oct",price:15500,soon:true,dep:"Dehradun",desc:"A 8-day difficult trek in Uttarakhand, topping out at 16,200 ft. Best time to go: May – Jun, Sep – Oct."},
  {n:"Dodital Darwa Pass",region:"Uttarakhand",img:U+"1732510951898-416631a45e35",r:4.7,rev:"—",lvl:"Moderate",days:7,alt:"13,500 ft",dist:"—",best:"Apr – Jun, Sep – Nov",price:13500,soon:true,dep:"Dehradun",desc:"A 7-day moderate trek in Uttarakhand, topping out at 13,500 ft. Best time to go: Apr – Jun, Sep – Nov."},
  {n:"Gaumukh Tapovan",region:"Uttarakhand",img:U+"1714744715493-ad89b7ff503e",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"14,600 ft",dist:"—",best:"May – Jun, Sep – Oct",price:15500,soon:true,dep:"Dehradun",desc:"A 8-day difficult trek in Uttarakhand, topping out at 14,600 ft. Best time to go: May – Jun, Sep – Oct."},
  {n:"Pindari Glacier",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pindari_glacier%2C_Uttarakhand%2C_India.jpg/1280px-Pindari_glacier%2C_Uttarakhand%2C_India.jpg",credit:"Yann (talk) · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:7,alt:"12,300 ft",dist:"—",best:"Apr – Jun, Sep – Oct",price:13500,soon:true,dep:"Kathgodam",desc:"A 7-day moderate trek in Uttarakhand, topping out at 12,300 ft. Best time to go: Apr – Jun, Sep – Oct."},
  {n:"Kedartal",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kedartal.jpg/1280px-Kedartal.jpg",credit:"Peter Andersen · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:7,alt:"15,500 ft",dist:"—",best:"May – Jun, Sep – Oct",price:13500,soon:true,dep:"Dehradun",desc:"A 7-day difficult trek in Uttarakhand, topping out at 15,500 ft. Best time to go: May – Jun, Sep – Oct."},
  {n:"Rupin Pass",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Male_Plumbeous_Water_Redstart_at_Rupin_Pass_02.jpg/1280px-Male_Plumbeous_Water_Redstart_at_Rupin_Pass_02.jpg",credit:"Fossegrimx · CC BY 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"15,250 ft",dist:"—",best:"May – Jun, Sep – Oct",price:15500,soon:true,dep:"Dehradun",desc:"A 8-day difficult trek in Uttarakhand, topping out at 15,250 ft. Best time to go: May – Jun, Sep – Oct."},
  {n:"Phulara Ridge",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Phulara_ridge.jpg/1280px-Phulara_ridge.jpg",credit:"Pathaharapathik · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"12,100 ft",dist:"—",best:"May – Jun, Sep – Nov",price:12000,soon:true,dep:"Dehradun",desc:"A 6-day moderate trek in Uttarakhand, topping out at 12,100 ft. Best time to go: May – Jun, Sep – Nov."},
  {n:"Borasu Pass",region:"Uttarakhand",img:"https://upload.wikimedia.org/wikipedia/commons/8/86/Borasupass22.jpg",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"17,224 ft",dist:"—",best:"May – Jun, Sep – Oct",price:15500,soon:true,dep:"Dehradun",desc:"A 8-day difficult trek in Uttarakhand, topping out at 17,224 ft. Best time to go: May – Jun, Sep – Oct."},
  {n:"Beas Kund",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Beas_kund_holy_place.jpg/1280px-Beas_kund_holy_place.jpg",credit:"Gaurav Dhingra · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:3,alt:"12,700 ft",dist:"—",best:"May – Oct",price:7500,soon:true,dep:"Manali",desc:"A 3-day easy trek in Himachal, topping out at 12,700 ft. Best time to go: May – Oct."},
  {n:"Pin Parvati Pass",region:"Himachal",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Difficult",days:11,alt:"17,450 ft",dist:"—",best:"Jul – Sep",price:20000,soon:true,dep:"Manali",desc:"A 11-day difficult trek in Himachal, topping out at 17,450 ft. Best time to go: Jul – Sep."},
  {n:"Sar Pass",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sar_pass%2C_himachal_pradesh.jpg/1280px-Sar_pass%2C_himachal_pradesh.jpg",credit:"T.prachi · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"13,800 ft",dist:"—",best:"May – Jun",price:10500,soon:true,dep:"Kasol",desc:"A 5-day moderate trek in Himachal, topping out at 13,800 ft. Best time to go: May – Jun."},
  {n:"Kareri Lake",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Shiva_Temple_at_Kareri_Lake.jpg/1280px-Shiva_Temple_at_Kareri_Lake.jpg",credit:"Tanvi.sharmaaa · CC BY 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:3,alt:"9,650 ft",dist:"—",best:"May – Jul, Sep – Nov",price:7500,soon:true,dep:"Dharamshala",desc:"A 3-day moderate trek in Himachal, topping out at 9,650 ft. Best time to go: May – Jul, Sep – Nov."},
  {n:"Indrahar Pass",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Looking_up_to_the_Indrahar_Pass_%2822356846090%29.jpg/1280px-Looking_up_to_the_Indrahar_Pass_%2822356846090%29.jpg",credit:"Ashish Gupta from Noida, India · CC BY 2.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:5,alt:"14,245 ft",dist:"—",best:"May – Oct",price:10500,soon:true,dep:"McLeodganj",desc:"A 5-day difficult trek in Himachal, topping out at 14,245 ft. Best time to go: May – Oct."},
  {n:"Kheerganga",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Kheerganga_is_a_pious_hot_water_spring_Himachal_India.jpg/1280px-Kheerganga_is_a_pious_hot_water_spring_Himachal_India.jpg",credit:"Photos Worldwide · CC0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"9,700 ft",dist:"—",best:"Apr – Jun, Sep – Oct",price:5500,soon:true,dep:"Kasol",desc:"A 2-day easy trek in Himachal, topping out at 9,700 ft. Best time to go: Apr – Jun, Sep – Oct."},
  {n:"Chandrakhani Pass",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chandrakhani_pass_1%2C_himachal_pradesh.jpg/1280px-Chandrakhani_pass_1%2C_himachal_pradesh.jpg",credit:"Premdasan · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"12,030 ft",dist:"—",best:"May – Oct",price:10500,soon:true,dep:"Manali",desc:"A 5-day moderate trek in Himachal, topping out at 12,030 ft. Best time to go: May – Oct."},
  {n:"Deo Tibba Base Camp",region:"Himachal",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"14,700 ft",dist:"—",best:"May – Oct",price:12000,soon:true,dep:"Manali",desc:"A 6-day moderate trek in Himachal, topping out at 14,700 ft. Best time to go: May – Oct."},
  {n:"Friendship Peak",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2022-07-16_13_46_04_View_south_along_Delaware_State_Route_15_%28Brenford_Road%29_at_Mount_Friendship_Road_in_Seven_Hickories%2C_Kent_County%2C_Delaware.jpg/1280px-2022-07-16_13_46_04_View_south_along_Delaware_State_Route_15_%28Brenford_Road%29_at_Mount_Friendship_Road_in_Seven_Hickories%2C_Kent_County%2C_Delaware.jpg",credit:"Famartin · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"17,350 ft",dist:"—",best:"May – Oct",price:15500,soon:true,dep:"Manali",desc:"A 8-day difficult trek in Himachal, topping out at 17,350 ft. Best time to go: May – Oct."},
  {n:"Bara Bhangal",region:"Himachal",img:U+"1644902560705-740850bc47b8",r:4.7,rev:"—",lvl:"Difficult",days:9,alt:"16,000 ft",dist:"—",best:"Jun – Oct",price:17000,soon:true,dep:"Manali",desc:"A 9-day difficult trek in Himachal, topping out at 16,000 ft. Best time to go: Jun – Oct."},
  {n:"Miyar Valley",region:"Himachal",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Moderate",days:7,alt:"13,800 ft",dist:"—",best:"Jun – Sep",price:13500,soon:true,dep:"Manali",desc:"A 7-day moderate trek in Himachal, topping out at 13,800 ft. Best time to go: Jun – Sep."},
  {n:"Lamadugh",region:"Himachal",img:U+"1629976791862-5749e12b2f40",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"9,900 ft",dist:"—",best:"Apr – Jun, Sep – Dec",price:5500,soon:true,dep:"Manali",desc:"A 2-day easy trek in Himachal, topping out at 9,900 ft. Best time to go: Apr – Jun, Sep – Dec."},
  {n:"Patalsu Peak",region:"Himachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Patalsu_Trek_-_Basic_Mountaineering_course_-_Inu_Etc.jpg/1280px-Patalsu_Trek_-_Basic_Mountaineering_course_-_Inu_Etc.jpg",credit:"Inu Etc · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:3,alt:"13,845 ft",dist:"—",best:"May – Oct",price:7500,soon:true,dep:"Manali",desc:"A 3-day moderate trek in Himachal, topping out at 13,845 ft. Best time to go: May – Oct."},
  {n:"Seven Lakes",region:"Himachal",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"13,800 ft",dist:"—",best:"May – Jun, Sep – Oct",price:12000,soon:true,dep:"Dharamshala",desc:"A 6-day moderate trek in Himachal, topping out at 13,800 ft. Best time to go: May – Jun, Sep – Oct."},
  {n:"Kugti Pass",region:"Himachal",img:U+"1629976791862-5749e12b2f40",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"16,600 ft",dist:"—",best:"Mid-Jun – Mid-Oct",price:15500,soon:true,dep:"Pathankot",desc:"A 8-day difficult trek in Himachal, topping out at 16,600 ft. Best time to go: Mid-Jun – Mid-Oct."},
  {n:"Sham Valley",region:"Ladakh",img:"https://upload.wikimedia.org/wikipedia/commons/5/50/Sham_Valley_Ladakh.jpg",credit:"Himalayan community and knowledge · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:3,alt:"12,500 ft",dist:"—",best:"May – Sep",price:7500,soon:true,dep:"Leh",desc:"A 3-day easy trek in Ladakh, topping out at 12,500 ft. Best time to go: May – Sep."},
  {n:"Stok Kangri Base Camp",region:"Ladakh",img:U+"1577516311194-eb14c570a137",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"16,500 ft",dist:"—",best:"Jul – Sep",price:10500,soon:true,dep:"Leh",desc:"A 5-day moderate trek in Ladakh, topping out at 16,500 ft. Best time to go: Jul – Sep."},
  {n:"Kang Yatse II",region:"Ladakh",img:U+"1718429205172-0d91b73ab23c",r:4.7,rev:"—",lvl:"Difficult",days:9,alt:"20,500 ft",dist:"—",best:"Jun – Sep",price:17000,soon:true,dep:"Leh",desc:"A 9-day difficult trek in Ladakh, topping out at 20,500 ft. Best time to go: Jun – Sep."},
  {n:"Rumtse to Tso Moriri",region:"Ladakh",img:U+"1577516311194-eb14c570a137",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"17,500 ft",dist:"—",best:"Jun – Sep",price:15500,soon:true,dep:"Leh",desc:"A 8-day difficult trek in Ladakh, topping out at 17,500 ft. Best time to go: Jun – Sep."},
  {n:"Lamayuru to Chilling",region:"Ladakh",img:U+"1718429205172-0d91b73ab23c",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"16,800 ft",dist:"—",best:"Jun – Sep",price:10500,soon:true,dep:"Leh",desc:"A 5-day moderate trek in Ladakh, topping out at 16,800 ft. Best time to go: Jun – Sep."},
  {n:"Nubra Valley",region:"Ladakh",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Nubra_Valley_2.jpg/1280px-Nubra_Valley_2.jpg",credit:"KennyOMG · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"17,000 ft",dist:"—",best:"Jun – Sep",price:12000,soon:true,dep:"Leh",desc:"A 6-day moderate trek in Ladakh, topping out at 17,000 ft. Best time to go: Jun – Sep."},
  {n:"Dzo Jongo",region:"Ladakh",img:U+"1718429205172-0d91b73ab23c",r:4.7,rev:"—",lvl:"Difficult",days:8,alt:"20,000 ft",dist:"—",best:"Jul – Sep",price:15500,soon:true,dep:"Leh",desc:"A 8-day difficult trek in Ladakh, topping out at 20,000 ft. Best time to go: Jul – Sep."},
  {n:"Stok La",region:"Ladakh",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Stok_Palace%2C_Ladakh_06.jpg/1280px-Stok_Palace%2C_Ladakh_06.jpg",credit:"Deepank Ranka · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"16,600 ft",dist:"—",best:"Jun – Sep",price:10500,soon:true,dep:"Leh",desc:"A 5-day moderate trek in Ladakh, topping out at 16,600 ft. Best time to go: Jun – Sep."},
  {n:"Snow Leopard",region:"Ladakh",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/A_snow_leopard_wild_Ladakh_DSCN4780_02.jpg/1280px-A_snow_leopard_wild_Ladakh_DSCN4780_02.jpg",credit:"T. R. Shankar Raman · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:8,alt:"15,500 ft",dist:"—",best:"Nov – Apr",price:15500,soon:true,dep:"Leh",desc:"A 8-day moderate trek in Ladakh, topping out at 15,500 ft. Best time to go: Nov – Apr."},
  {n:"Parang La",region:"Ladakh",img:U+"1577516311194-eb14c570a137",r:4.7,rev:"—",lvl:"Difficult",days:12,alt:"18,300 ft",dist:"—",best:"Jun – Sep",price:21500,soon:true,dep:"Manali",desc:"A 12-day difficult trek in Ladakh, topping out at 18,300 ft. Best time to go: Jun – Sep."},
  {n:"Nafran Valley",region:"Kashmir",img:U+"1756847845343-7a1053567775",r:4.7,rev:"—",lvl:"Moderate",days:7,alt:"13,100 ft",dist:"—",best:"Jul – Sep",price:13500,soon:true,dep:"Srinagar",desc:"A 7-day moderate trek in Kashmir, topping out at 13,100 ft. Best time to go: Jul – Sep."},
  {n:"Tulian Lake",region:"Kashmir",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tulian_Lake.jpg/1280px-Tulian_Lake.jpg",credit:"Raqueeb Mir · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:4,alt:"12,900 ft",dist:"—",best:"May – Oct",price:9000,soon:true,dep:"Srinagar",desc:"A 4-day moderate trek in Kashmir, topping out at 12,900 ft. Best time to go: May – Oct."},
  {n:"Gangbal Lake",region:"Kashmir",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GangbalPanorama.jpg/1280px-GangbalPanorama.jpg",credit:"Mohamad Talib Bhat · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"11,800 ft",dist:"—",best:"Jun – Sep",price:10500,soon:true,dep:"Srinagar",desc:"A 5-day moderate trek in Kashmir, topping out at 11,800 ft. Best time to go: Jun – Sep."},
  {n:"Lidderwat",region:"Kashmir",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tiya_on_Pony_Trek_from_Aru_to_Lidderwat_%2814391496017%29.jpg/1280px-Tiya_on_Pony_Trek_from_Aru_to_Lidderwat_%2814391496017%29.jpg",credit:"Mike Prince from Bangalore, India · CC BY 2.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:3,alt:"9,100 ft",dist:"—",best:"Apr – Oct",price:7500,soon:true,dep:"Srinagar",desc:"A 3-day easy trek in Kashmir, topping out at 9,100 ft. Best time to go: Apr – Oct."},
  {n:"Gurez Valley",region:"Kashmir",img:"https://upload.wikimedia.org/wikipedia/commons/7/76/A_calm_morning_in_the_farmland_of_Markoot_Village_%2C_Gurez_Valley%2C_Kashmir.jpg",credit:"Captured by Kausar Akhoon · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"11,500 ft",dist:"—",best:"Jul – Sep",price:12000,soon:true,dep:"Srinagar",desc:"A 6-day moderate trek in Kashmir, topping out at 11,500 ft. Best time to go: Jul – Sep."},
  {n:"Naranag Mahlish",region:"Kashmir",img:U+"1732510291351-43c68b3ca022",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"12,800 ft",dist:"—",best:"Jun – Sep",price:12000,soon:true,dep:"Srinagar",desc:"A 6-day moderate trek in Kashmir, topping out at 12,800 ft. Best time to go: Jun – Sep."},
  {n:"Great Kolahoi Glacier",region:"Kashmir",img:U+"1756847845343-7a1053567775",r:4.7,rev:"—",lvl:"Difficult",days:6,alt:"12,500 ft",dist:"—",best:"Jun – Sep",price:12000,soon:true,dep:"Srinagar",desc:"A 6-day difficult trek in Kashmir, topping out at 12,500 ft. Best time to go: Jun – Sep."},
  {n:"Sunset Peak",region:"Kashmir",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sunset_Peak_Swimming_Pool.jpg/1280px-Sunset_Peak_Swimming_Pool.jpg",credit:"Starcopter · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:7,alt:"15,000 ft",dist:"—",best:"Jul – Sep",price:13500,soon:true,dep:"Srinagar",desc:"A 7-day difficult trek in Kashmir, topping out at 15,000 ft. Best time to go: Jul – Sep."},
  {n:"Harmukh Peak Base Camp",region:"Kashmir",img:U+"1756847845343-7a1053567775",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"13,000 ft",dist:"—",best:"Jun – Sep",price:10500,soon:true,dep:"Srinagar",desc:"A 5-day moderate trek in Kashmir, topping out at 13,000 ft. Best time to go: Jun – Sep."},
  {n:"Kousarnag Lake",region:"Kashmir",img:U+"1732510291351-43c68b3ca022",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"13,200 ft",dist:"—",best:"Jun – Sep",price:10500,soon:true,dep:"Srinagar",desc:"A 5-day moderate trek in Kashmir, topping out at 13,200 ft. Best time to go: Jun – Sep."},
  {n:"Dzongri",region:"Sikkim",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Dzongri_La.jpg/1280px-Dzongri_La.jpg",credit:"Rizimd · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"13,200 ft",dist:"—",best:"Mar – May, Sep – Nov",price:12000,soon:true,dep:"Bagdogra / NJP",desc:"A 6-day moderate trek in Sikkim, topping out at 13,200 ft. Best time to go: Mar – May, Sep – Nov."},
  {n:"Green Lake",region:"Sikkim",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Difficult",days:11,alt:"16,000 ft",dist:"—",best:"Apr – May, Oct – Nov",price:20000,soon:true,dep:"Gangtok",desc:"A 11-day difficult trek in Sikkim, topping out at 16,000 ft. Best time to go: Apr – May, Oct – Nov."},
  {n:"Singalila Ridge",region:"Sikkim",img:"https://upload.wikimedia.org/wikipedia/commons/f/fc/Kanchendzonga_from_sandakaphu.jpg",r:4.7,rev:"—",lvl:"Moderate",days:7,alt:"12,000 ft",dist:"—",best:"Mar – May, Oct – Nov",price:13500,soon:true,dep:"Darjeeling",desc:"A 7-day moderate trek in Sikkim, topping out at 12,000 ft. Best time to go: Mar – May, Oct – Nov."},
  {n:"Kanchenjunga Base Camp",region:"Sikkim",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Samiti_lake%2C_near_Kanchenjunga.jpg/1280px-Samiti_lake%2C_near_Kanchenjunga.jpg",credit:"Wikimedia Commons · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:12,alt:"17,200 ft",dist:"—",best:"Mar – May, Sep – Nov",price:21500,soon:true,dep:"Kathmandu",desc:"A 12-day difficult trek in Sikkim, topping out at 17,200 ft. Best time to go: Mar – May, Sep – Nov."},
  {n:"Kasturi Orar",region:"Sikkim",img:U+"1724733613256-a1ed7936bb70",r:4.7,rev:"—",lvl:"Difficult",days:9,alt:"16,200 ft",dist:"—",best:"Apr – May, Oct – Nov",price:17000,soon:true,dep:"Bagdogra",desc:"A 9-day difficult trek in Sikkim, topping out at 16,200 ft. Best time to go: Apr – May, Oct – Nov."},
  {n:"Phoktey Dara",region:"Sikkim",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"12,300 ft",dist:"—",best:"Mar – May, Oct – Jan",price:12000,soon:true,dep:"NJP / Bagdogra",desc:"A 6-day moderate trek in Sikkim, topping out at 12,300 ft. Best time to go: Mar – May, Oct – Jan."},
  {n:"Barsey Rhododendron",region:"Sikkim",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Barsey_Rhododendron_Sanctuary_in_late_april.jpg/1280px-Barsey_Rhododendron_Sanctuary_in_late_april.jpg",credit:"Spattadar · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:3,alt:"10,000 ft",dist:"—",best:"Mar – May",price:7500,soon:true,dep:"Siliguri",desc:"A 3-day easy trek in Sikkim, topping out at 10,000 ft. Best time to go: Mar – May."},
  {n:"Varsey",region:"Sikkim",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Rhododendrone_near_barsey_rhododendrone_sanctuary_02.jpg/1280px-Rhododendrone_near_barsey_rhododendrone_sanctuary_02.jpg",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"10,000 ft",dist:"—",best:"Mar – May",price:5500,soon:true,dep:"Siliguri",desc:"A 2-day easy trek in Sikkim, topping out at 10,000 ft. Best time to go: Mar – May."},
  {n:"Tendong Hill",region:"Sikkim",img:U+"1724733613256-a1ed7936bb70",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"8,530 ft",dist:"—",best:"Mar – May, Oct – Nov",price:5500,soon:true,dep:"Namchi",desc:"A 2-day easy trek in Sikkim, topping out at 8,530 ft. Best time to go: Mar – May, Oct – Nov."},
  {n:"Maenam Hill",region:"Sikkim",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"10,600 ft",dist:"—",best:"Mar – May",price:5500,soon:true,dep:"Ravangla",desc:"A 2-day easy trek in Sikkim, topping out at 10,600 ft. Best time to go: Mar – May."},
  {n:"Tawang",region:"Arunachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bhavachakra_or_the_Buddhist_Wheel_of_Life_at_Tawang_Monastery%2C_Tawang%2C_Arunachal_Pradesh%2C_India.jpg/1280px-Bhavachakra_or_the_Buddhist_Wheel_of_Life_at_Tawang_Monastery%2C_Tawang%2C_Arunachal_Pradesh%2C_India.jpg",credit:"Kingshuk Mondal · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"11,500 ft",dist:"—",best:"Mar – Jun",price:12000,soon:true,dep:"Guwahati",desc:"A 6-day moderate trek in Arunachal, topping out at 11,500 ft. Best time to go: Mar – Jun."},
  {n:"Gorichen Base Camp",region:"Arunachal",img:U+"1724733613256-a1ed7936bb70",r:4.7,rev:"—",lvl:"Difficult",days:10,alt:"15,500 ft",dist:"—",best:"Apr – Jun, Sep – Oct",price:18500,soon:true,dep:"Guwahati",desc:"A 10-day difficult trek in Arunachal, topping out at 15,500 ft. Best time to go: Apr – Jun, Sep – Oct."},
  {n:"Bailey Trail",region:"Arunachal",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Difficult",days:12,alt:"13,500 ft",dist:"—",best:"Apr – Jun, Oct – Nov",price:21500,soon:true,dep:"Guwahati",desc:"A 12-day difficult trek in Arunachal, topping out at 13,500 ft. Best time to go: Apr – Jun, Oct – Nov."},
  {n:"Mechuka",region:"Arunachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Natural_beauty_of_Mechuka%2C_Arunachal_Pradesh.jpg/1280px-Natural_beauty_of_Mechuka%2C_Arunachal_Pradesh.jpg",credit:"কুমুদ ঘোষ · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"10,500 ft",dist:"—",best:"Mar – Jun, Sep – Nov",price:10500,soon:true,dep:"Dibrugarh",desc:"A 5-day moderate trek in Arunachal, topping out at 10,500 ft. Best time to go: Mar – Jun, Sep – Nov."},
  {n:"Talley Valley",region:"Arunachal",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Easy",days:4,alt:"8,000 ft",dist:"—",best:"Oct – Apr",price:9000,soon:true,dep:"Guwahati",desc:"A 4-day easy trek in Arunachal, topping out at 8,000 ft. Best time to go: Oct – Apr."},
  {n:"Ziro Valley",region:"Arunachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/An_Apatani_Old_lady_in_Ziro_valley_of_Arunachal_Pradesh.jpg/1280px-An_Apatani_Old_lady_in_Ziro_valley_of_Arunachal_Pradesh.jpg",credit:"Arunachal2007 · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:3,alt:"5,600 ft",dist:"—",best:"Mar – May, Sep – Nov",price:7500,soon:true,dep:"Guwahati",desc:"A 3-day easy trek in Arunachal, topping out at 5,600 ft. Best time to go: Mar – May, Sep – Nov."},
  {n:"Namdapha Rainforest",region:"Arunachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Rainforest_vertical.jpg/1280px-Rainforest_vertical.jpg",credit:"T. R. Shankar Raman · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:6,alt:"4,500 ft",dist:"—",best:"Nov – Feb",price:12000,soon:true,dep:"Dibrugarh",desc:"A 6-day moderate trek in Arunachal, topping out at 4,500 ft. Best time to go: Nov – Feb."},
  {n:"Dong Valley",region:"Arunachal",img:U+"1724733613256-a1ed7936bb70",r:4.7,rev:"—",lvl:"Moderate",days:4,alt:"8,000 ft",dist:"—",best:"Oct – Apr",price:9000,soon:true,dep:"Dibrugarh",desc:"A 4-day moderate trek in Arunachal, topping out at 8,000 ft. Best time to go: Oct – Apr."},
  {n:"Pangsau Pass",region:"Arunachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M.M._Pallam_Raju_and_the_Aruncahl_Pradesh_Chief_Minister_Shri_Dorjee_Khandu_inaugurated_the_3-day_Pangsau_Pass_winter_festival%2C_at_Nampong%2C_Changlang_in_Arunachal_Pradesh_on_January_20%2C_2010.jpg/1280px-thumbnail.jpg",credit:"Ministry of Defence · GODL-India · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:5,alt:"3,700 ft",dist:"—",best:"Oct – Apr",price:10500,soon:true,dep:"Dibrugarh",desc:"A 5-day moderate trek in Arunachal, topping out at 3,700 ft. Best time to go: Oct – Apr."},
  {n:"Bum La",region:"Arunachal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mountain_range_near_Bum_La_Pass%2C_Tawang%2C_Arunachal_Pradesh%2C_India.jpg/1280px-Mountain_range_near_Bum_La_Pass%2C_Tawang%2C_Arunachal_Pradesh%2C_India.jpg",credit:"Rohit Sharma · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"15,200 ft",dist:"—",best:"May – Oct",price:5500,soon:true,dep:"Tawang",desc:"A 2-day moderate trek in Arunachal, topping out at 15,200 ft. Best time to go: May – Oct."},
  {n:"David Scott Trail",region:"Meghalaya",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/David_Scott_Trail.jpg/1280px-David_Scott_Trail.jpg",credit:"Wann Majaw · CC0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"4,900 ft",dist:"—",best:"Oct – Apr",price:5500,soon:true,dep:"Shillong",desc:"A 2-day easy trek in Meghalaya, topping out at 4,900 ft. Best time to go: Oct – Apr."},
  {n:"Living Root Bridge",region:"Meghalaya",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Living_root_bridge%2C_Maghalaya%2C_India1.jpg/1280px-Living_root_bridge%2C_Maghalaya%2C_India1.jpg",credit:"Joydeep Chakraborty · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"2,400 ft",dist:"—",best:"Oct – Apr",price:4000,soon:true,dep:"Shillong",desc:"A 1-day easy trek in Meghalaya, topping out at 2,400 ft. Best time to go: Oct – Apr."},
  {n:"Double Decker Root Bridge",region:"Meghalaya",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Double_decker_living_root_bridge_02.jpg/1280px-Double_decker_living_root_bridge_02.jpg",credit:"Chiranjeeb Baul · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:1,alt:"2,500 ft",dist:"—",best:"Oct – Apr",price:4000,soon:true,dep:"Cherrapunji",desc:"A 1-day moderate trek in Meghalaya, topping out at 2,500 ft. Best time to go: Oct – Apr."},
  {n:"Nongriat",region:"Meghalaya",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Living_root_bridges_of_Nongriat_village_in_East_Khasi_Hills_district%2C_Meghalaya_JEG7387.jpg/1280px-Living_root_bridges_of_Nongriat_village_in_East_Khasi_Hills_district%2C_Meghalaya_JEG7387.jpg",credit:"PJeganathan · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:1,alt:"2,500 ft",dist:"—",best:"Oct – Apr",price:4000,soon:true,dep:"Shillong",desc:"A 1-day moderate trek in Meghalaya, topping out at 2,500 ft. Best time to go: Oct – Apr."},
  {n:"Mawryngkhang Bamboo",region:"Meghalaya",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Moderate",days:1,alt:"3,000 ft",dist:"—",best:"Oct – Apr",price:4000,soon:true,dep:"Shillong",desc:"A 1-day moderate trek in Meghalaya, topping out at 3,000 ft. Best time to go: Oct – Apr."},
  {n:"Laitlum Canyon",region:"Meghalaya",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Laitlum_Canyon%2C_Meghalaya.jpg/1280px-Laitlum_Canyon%2C_Meghalaya.jpg",credit:"Medhi jyoti · CC BY 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"4,500 ft",dist:"—",best:"Oct – May",price:4000,soon:true,dep:"Shillong",desc:"A 1-day easy trek in Meghalaya, topping out at 4,500 ft. Best time to go: Oct – May."},
  {n:"Sohra Waterfall",region:"Meghalaya",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"4,000 ft",dist:"—",best:"Oct – May",price:4000,soon:true,dep:"Shillong",desc:"A 1-day easy trek in Meghalaya, topping out at 4,000 ft. Best time to go: Oct – May."},
  {n:"Mawphlang Sacred Forest",region:"Meghalaya",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Mawphlang_Sacred_Forest%2C_Mawphlang%2C_Meghalaya.jpg/1280px-Mawphlang_Sacred_Forest%2C_Mawphlang%2C_Meghalaya.jpg",credit:"Anushtup · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"5,000 ft",dist:"—",best:"Oct – Apr",price:4000,soon:true,dep:"Shillong",desc:"A 1-day easy trek in Meghalaya, topping out at 5,000 ft. Best time to go: Oct – Apr."},
  {n:"Shnongpdeng Riverside",region:"Meghalaya",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"1,800 ft",dist:"—",best:"Oct – Apr",price:4000,soon:true,dep:"Shillong",desc:"A 1-day easy trek in Meghalaya, topping out at 1,800 ft. Best time to go: Oct – Apr."},
  {n:"Balpakram National Park",region:"Meghalaya",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Matcha_Nokpante_%28tiger%27s_meeting_place%29_in_Balpakram_National_Park.jpg/1280px-Matcha_Nokpante_%28tiger%27s_meeting_place%29_in_Balpakram_National_Park.jpg",credit:"Hgm2016 · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:4,alt:"3,000 ft",dist:"—",best:"Oct – Mar",price:9000,soon:true,dep:"Baghmara",desc:"A 4-day moderate trek in Meghalaya, topping out at 3,000 ft. Best time to go: Oct – Mar."},
  {n:"Dzukou Valley",region:"Nagaland",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Breathtaking_beauty_of_Dzukou_Valley_in_Manipur-Nagaland_border_%28edit%29.jpg/1280px-Breathtaking_beauty_of_Dzukou_Valley_in_Manipur-Nagaland_border_%28edit%29.jpg",credit:"Original: Samudra Bikash Hazarika Derivative work: Unpetitpr · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"8,045 ft",dist:"—",best:"Jun – Sep",price:5500,soon:true,dep:"Kohima",desc:"A 2-day moderate trek in Nagaland, topping out at 8,045 ft. Best time to go: Jun – Sep."},
  {n:"Japfu Peak",region:"Nagaland",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"9,843 ft",dist:"—",best:"Oct – Apr",price:5500,soon:true,dep:"Kohima",desc:"A 2-day moderate trek in Nagaland, topping out at 9,843 ft. Best time to go: Oct – Apr."},
  {n:"Mount Saramati",region:"Nagaland",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Difficult",days:5,alt:"12,553 ft",dist:"—",best:"Sep – Apr",price:10500,soon:true,dep:"Dimapur",desc:"A 5-day difficult trek in Nagaland, topping out at 12,553 ft. Best time to go: Sep – Apr."},
  {n:"Puliebadze",region:"Nagaland",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"7,300 ft",dist:"—",best:"Oct – May",price:4000,soon:true,dep:"Kohima",desc:"A 1-day easy trek in Nagaland, topping out at 7,300 ft. Best time to go: Oct – May."},
  {n:"Benreu",region:"Nagaland",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"6,000 ft",dist:"—",best:"Oct – Apr",price:5500,soon:true,dep:"Kohima",desc:"A 2-day moderate trek in Nagaland, topping out at 6,000 ft. Best time to go: Oct – Apr."},
  {n:"Intanki National Park",region:"Nagaland",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"4,000 ft",dist:"—",best:"Nov – Apr",price:5500,soon:true,dep:"Dimapur",desc:"A 2-day easy trek in Nagaland, topping out at 4,000 ft. Best time to go: Nov – Apr."},
  {n:"Phalut",region:"West Bengal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Lhotse%2C_Everest%2C_Makalu_and_Chomolonzo_from_Phalut%2C_Oct_2011.jpg/1280px-Lhotse%2C_Everest%2C_Makalu_and_Chomolonzo_from_Phalut%2C_Oct_2011.jpg",credit:"Shilbhadra · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:7,alt:"11,800 ft",dist:"—",best:"Oct – Apr",price:13500,soon:true,dep:"Manebhanjan",desc:"A 7-day moderate trek in West Bengal, topping out at 11,800 ft. Best time to go: Oct – Apr."},
  {n:"Tonglu",region:"West Bengal",img:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Tonglu%2CDarjeeling%2CWest_Bengal%2C_India.jpg",credit:"Atudu · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"10,130 ft",dist:"—",best:"Mar – May, Sep – Dec",price:5500,soon:true,dep:"Darjeeling",desc:"A 2-day easy trek in West Bengal, topping out at 10,130 ft. Best time to go: Mar – May, Sep – Dec."},
  {n:"Senchal Wildlife",region:"West Bengal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Rusty-flanked_Treecreeper_in_Senchal_Wildlife_Sanctuary_May_2025_by_Tisha_Mukherjee_10.jpg/1280px-Rusty-flanked_Treecreeper_in_Senchal_Wildlife_Sanctuary_May_2025_by_Tisha_Mukherjee_10.jpg",credit:"Tisha Mukherjee · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"8,160 ft",dist:"—",best:"Oct – Nov",price:4000,soon:true,dep:"Darjeeling",desc:"A 1-day easy trek in West Bengal, topping out at 8,160 ft. Best time to go: Oct – Nov."},
  {n:"Tiger Hill Sunrise",region:"West Bengal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/View_from_Tiger_Hill.jpg/1280px-View_from_Tiger_Hill.jpg",credit:"Owasim raja ahmed · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"8,500 ft",dist:"—",best:"Oct – Dec",price:4000,soon:true,dep:"Darjeeling",desc:"A 1-day easy trek in West Bengal, topping out at 8,500 ft. Best time to go: Oct – Dec."},
  {n:"Neora Valley",region:"West Bengal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Sikkim_Treecreeper_in_Neora_Valley_National_Park.jpg/1280px-Sikkim_Treecreeper_in_Neora_Valley_National_Park.jpg",credit:"Ikshan Ganpathi · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:4,alt:"10,500 ft",dist:"—",best:"Oct – Apr",price:9000,soon:true,dep:"Lava",desc:"A 4-day moderate trek in West Bengal, topping out at 10,500 ft. Best time to go: Oct – Apr."},
  {n:"Lava Lolegaon",region:"West Bengal",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"7,200 ft",dist:"—",best:"Oct – Apr",price:5500,soon:true,dep:"Siliguri",desc:"A 2-day easy trek in West Bengal, topping out at 7,200 ft. Best time to go: Oct – Apr."},
  {n:"Harishchandragad",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Harishchandragad_view_from_caves.jpg/1280px-Harishchandragad_view_from_caves.jpg",credit:"Tokendra · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"4,671 ft",dist:"—",best:"Oct – Feb",price:5500,soon:true,dep:"Pune",desc:"A 2-day moderate trek in Maharashtra, topping out at 4,671 ft. Best time to go: Oct – Feb."},
  {n:"Rajmachi",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rajmachi_fort_-_Pune_-Maharashtra_-DSC001.jpg/1280px-Rajmachi_fort_-_Pune_-Maharashtra_-DSC001.jpg",credit:"Nikhil Thokal · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"2,710 ft",dist:"—",best:"Jun – Sep",price:5500,soon:true,dep:"Lonavala",desc:"A 2-day easy trek in Maharashtra, topping out at 2,710 ft. Best time to go: Jun – Sep."},
  {n:"Kalsubai Peak",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sunrise_from_Kalsubai_peak_1.jpg/1280px-Sunrise_from_Kalsubai_peak_1.jpg",credit:"Ragz13 · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:1,alt:"5,400 ft",dist:"—",best:"Jun – Feb",price:4000,soon:true,dep:"Mumbai",desc:"A 1-day moderate trek in Maharashtra, topping out at 5,400 ft. Best time to go: Jun – Feb."},
  {n:"Lohagad Fort",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lohagad_Fort_Tomb_3.jpg/1280px-Lohagad_Fort_Tomb_3.jpg",credit:"Rangan Datta Wiki · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"3,389 ft",dist:"—",best:"Jun – Feb",price:4000,soon:true,dep:"Lonavala",desc:"A 1-day easy trek in Maharashtra, topping out at 3,389 ft. Best time to go: Jun – Feb."},
  {n:"Visapur Fort",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Visapur_fort_in_monsoon.jpg/1280px-Visapur_fort_in_monsoon.jpg",credit:"Sumedh.dorwat · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"3,556 ft",dist:"—",best:"Jun – Feb",price:4000,soon:true,dep:"Lonavala",desc:"A 1-day easy trek in Maharashtra, topping out at 3,556 ft. Best time to go: Jun – Feb."},
  {n:"Torna Fort",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Torna_Fort.png",credit:"Purplesky91 · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:1,alt:"4,603 ft",dist:"—",best:"Oct – Feb",price:4000,soon:true,dep:"Pune",desc:"A 1-day moderate trek in Maharashtra, topping out at 4,603 ft. Best time to go: Oct – Feb."},
  {n:"Rajgad Fort",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bali_Khila_Rajgad_Maharashtra.jpg/1280px-Bali_Khila_Rajgad_Maharashtra.jpg",credit:"Cj.samson · CC BY 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:1,alt:"4,514 ft",dist:"—",best:"Jul – Feb",price:4000,soon:true,dep:"Pune",desc:"A 1-day moderate trek in Maharashtra, topping out at 4,514 ft. Best time to go: Jul – Feb."},
  {n:"Ratangad",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Ratangad_nedhe.jpg",credit:"Elroy Serrao · CC BY-SA 2.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"4,255 ft",dist:"—",best:"Jun – Feb",price:5500,soon:true,dep:"Pune",desc:"A 2-day moderate trek in Maharashtra, topping out at 4,255 ft. Best time to go: Jun – Feb."},
  {n:"Alang Madan Kulang",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Alang_Madan_Kulang_from_Kalsubai_Maharashtra.JPG/1280px-Alang_Madan_Kulang_from_Kalsubai_Maharashtra.JPG",credit:"Kul Patil · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:3,alt:"4,850 ft",dist:"—",best:"Oct – Feb",price:7500,soon:true,dep:"Mumbai / Pune",desc:"A 3-day difficult trek in Maharashtra, topping out at 4,850 ft. Best time to go: Oct – Feb."},
  {n:"Kalavantin Durg",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KALAVANTIN_DURG_%28FORT%29.jpg/1280px-KALAVANTIN_DURG_%28FORT%29.jpg",credit:"Anthonyrosyl · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:1,alt:"2,300 ft",dist:"—",best:"Oct – Mar",price:4000,soon:true,dep:"Panvel",desc:"A 1-day moderate trek in Maharashtra, topping out at 2,300 ft. Best time to go: Oct – Mar."},
  {n:"Peb Fort",region:"Maharashtra",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Peb_Fort_%28Wikatgadh%29_-_panoramio.jpg/1280px-Peb_Fort_%28Wikatgadh%29_-_panoramio.jpg",credit:"Rohan Patil · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"2,100 ft",dist:"—",best:"Jun – Oct",price:4000,soon:true,dep:"Neral",desc:"A 1-day easy trek in Maharashtra, topping out at 2,100 ft. Best time to go: Jun – Oct."},
  {n:"Andharban Forest",region:"Maharashtra",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"327",dist:"—",best:"Jun – Sep",price:5500,soon:true,dep:"",desc:"A 2-day easy trek in Maharashtra, topping out at 327. Best time to go: Jun – Sep."},
  {n:"Kumara Parvatha",region:"Karnataka",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Difficult",days:2,alt:"5,617 ft",dist:"—",best:"Oct – Feb",price:5500,soon:true,dep:"Bangalore",desc:"A 2-day difficult trek in Karnataka, topping out at 5,617 ft. Best time to go: Oct – Feb."},
  {n:"Kudremukh",region:"Karnataka",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kudremukh_national_park.jpg/1280px-Kudremukh_national_park.jpg",credit:"Naveen · Public domain · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"6,207 ft",dist:"—",best:"Oct – Mar",price:5500,soon:true,dep:"Bangalore",desc:"A 2-day moderate trek in Karnataka, topping out at 6,207 ft. Best time to go: Oct – Mar."},
  {n:"Tadiandamol",region:"Karnataka",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Shola_tadiandamol.jpg/1280px-Shola_tadiandamol.jpg",credit:"L. Shyamal · CC BY-SA 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"5,735 ft",dist:"—",best:"Oct – Feb",price:4000,soon:true,dep:"Bangalore",desc:"A 1-day easy trek in Karnataka, topping out at 5,735 ft. Best time to go: Oct – Feb."},
  {n:"Mullayanagiri",region:"Karnataka",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mullayanagiri_peak.jpg/1280px-Mullayanagiri_peak.jpg",credit:"Anvesh1103 · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"6,330 ft",dist:"—",best:"Sep – Feb",price:4000,soon:true,dep:"Chikmagalur",desc:"A 1-day easy trek in Karnataka, topping out at 6,330 ft. Best time to go: Sep – Feb."},
  {n:"Kodachadri",region:"Karnataka",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kodachadri%2CKarnataka%2CIndia.jpg/1280px-Kodachadri%2CKarnataka%2CIndia.jpg",credit:"Rayabhari · CC BY 3.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"4,411 ft",dist:"—",best:"Oct – Feb",price:5500,soon:true,dep:"Bangalore",desc:"A 2-day moderate trek in Karnataka, topping out at 4,411 ft. Best time to go: Oct – Feb."},
  {n:"Nishani Motte",region:"Karnataka",img:U+"1589340532046-e505aa832cd1",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"4,127 ft",dist:"—",best:"Oct – Feb",price:5500,soon:true,dep:"Bangalore",desc:"A 2-day moderate trek in Karnataka, topping out at 4,127 ft. Best time to go: Oct – Feb."},
  {n:"Narasimha Parvatha",region:"Karnataka",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Narasimha_feet_Narasimha_Parvatha_Kigga.jpg/1280px-Narasimha_feet_Narasimha_Parvatha_Kigga.jpg",credit:"NithishKWiki · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"3,772 ft",dist:"—",best:"Oct – Jan",price:5500,soon:true,dep:"Bangalore",desc:"A 2-day moderate trek in Karnataka, topping out at 3,772 ft. Best time to go: Oct – Jan."},
  {n:"Ettina Bhuja",region:"Karnataka",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ettina_Bhuja_1.jpg/1280px-Ettina_Bhuja_1.jpg",credit:"Shashidhara halady · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"4,265 ft",dist:"—",best:"Oct – Feb",price:4000,soon:true,dep:"Bangalore",desc:"A 1-day easy trek in Karnataka, topping out at 4,265 ft. Best time to go: Oct – Feb."},
  {n:"Ballalarayana Durga",region:"Karnataka",img:U+"1606898296502-40d8c37e994b",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"4,940 ft",dist:"—",best:"Sep – Feb",price:4000,soon:true,dep:"Bengaluru",desc:"A 1-day easy trek in Karnataka, topping out at 4,940 ft. Best time to go: Sep – Feb."},
  {n:"Gokarna Beach",region:"Karnataka",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/PXL_20260103_054657562.MP_Paradise_beach_gokarna_Paradise_Beach_Trail%2C_Gokarna%2C_Karnataka_581326_06.jpg/1280px-PXL_20260103_054657562.MP_Paradise_beach_gokarna_Paradise_Beach_Trail%2C_Gokarna%2C_Karnataka_581326_06.jpg",credit:"Sourabh.biswas003 · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"Sea Level",dist:"—",best:"Oct – Mar",price:5500,soon:true,dep:"Bangalore",desc:"A 2-day easy trek in Karnataka. Best time to go: Oct – Mar."},
  {n:"Kolukkumalai",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/8/8d/Kolukkumalai_sunrise_view.jpg",credit:"Kaartic · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"7,130 ft",dist:"—",best:"Sep – Mar",price:4000,soon:true,dep:"Munnar",desc:"A 1-day easy trek in Tamil Nadu, topping out at 7,130 ft. Best time to go: Sep – Mar."},
  {n:"Velliangiri Hills",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Velliangiri_hills.jpg",credit:"Nancy Anburaj · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:2,alt:"6,000 ft",dist:"—",best:"Feb – May",price:5500,soon:true,dep:"Coimbatore",desc:"A 2-day difficult trek in Tamil Nadu, topping out at 6,000 ft. Best time to go: Feb – May."},
  {n:"Perumal Peak",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Perumal%27s_Peak.jpg/1280px-Perumal%27s_Peak.jpg",credit:"Challiyil Eswaramangalath Pavithran Vipin · CC BY-SA 2.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:1,alt:"8,005 ft",dist:"—",best:"Dec – Apr",price:4000,soon:true,dep:"Kodaikanal",desc:"A 1-day moderate trek in Tamil Nadu, topping out at 8,005 ft. Best time to go: Dec – Apr."},
  {n:"Top Station",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Munnar_Top_station.jpg",credit:"Bimal K C from Cochin, India · CC BY 2.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"6,800 ft",dist:"—",best:"Sep – Mar",price:4000,soon:true,dep:"Munnar",desc:"A 1-day easy trek in Tamil Nadu, topping out at 6,800 ft. Best time to go: Sep – Mar."},
  {n:"Dolphin's Nose",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dolphin%27s_Nose%2C_Coonoor%2C_Nilgiris_District%2C_Tamil_Nadu%2C_India.jpg/1280px-Dolphin%27s_Nose%2C_Coonoor%2C_Nilgiris_District%2C_Tamil_Nadu%2C_India.jpg",credit:"N. Vivekananthamoorthy · CC BY 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"5,100 ft",dist:"—",best:"Oct – Mar",price:4000,soon:true,dep:"Kodaikanal",desc:"A 1-day easy trek in Tamil Nadu, topping out at 5,100 ft. Best time to go: Oct – Mar."},
  {n:"Meghamalai",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Meghamalai_elephants.jpg",credit:"Mprabaharan at English Wikipedia · Public domain · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:2,alt:"4,900 ft",dist:"—",best:"Oct – Mar",price:5500,soon:true,dep:"Madurai",desc:"A 2-day easy trek in Tamil Nadu, topping out at 4,900 ft. Best time to go: Oct – Mar."},
  {n:"Mukurthi National Park",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mukurthi_National_Park.jpg/1280px-Mukurthi_National_Park.jpg",credit:"Marcus Sherman · CC BY-SA 2.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Moderate",days:2,alt:"8,554 ft",dist:"—",best:"Feb – May, Sep – Nov",price:5500,soon:true,dep:"Ooty",desc:"A 2-day moderate trek in Tamil Nadu, topping out at 8,554 ft. Best time to go: Feb – May, Sep – Nov."},
  {n:"Ooty Peak",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/East_Peak_Club_Hill_Ooty_Aug25_A7CR_07244.jpg/1280px-East_Peak_Club_Hill_Ooty_Aug25_A7CR_07244.jpg",credit:"Timothy A. Gonsalves · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"7,350 ft",dist:"—",best:"Oct – Jun",price:4000,soon:true,dep:"Ooty",desc:"A 1-day easy trek in Tamil Nadu, topping out at 7,350 ft. Best time to go: Oct – Jun."},
  {n:"Kotagiri Longwood",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Longwood_Shola_Reserve_Forest%2C_Kotagiri%2C_Tamil_Nadu.jpg/1280px-Longwood_Shola_Reserve_Forest%2C_Kotagiri%2C_Tamil_Nadu.jpg",credit:"SeethaG · CC BY-SA 4.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Easy",days:1,alt:"6,000 ft",dist:"—",best:"Oct – Mar",price:4000,soon:true,dep:"Kotagiri",desc:"A 1-day easy trek in Tamil Nadu, topping out at 6,000 ft. Best time to go: Oct – Mar."},
  {n:"Thalaiyar Falls",region:"Tamil Nadu",img:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Thalaiyar_Falls.jpg",credit:"Barbara Gail Block · CC BY-SA 2.0 · Wikimedia Commons",r:4.7,rev:"—",lvl:"Difficult",days:2,alt:"5,900 ft",dist:"—",best:"Oct – Mar",price:5500,soon:true,dep:"Kodaikanal",desc:"A 2-day difficult trek in Tamil Nadu, topping out at 5,900 ft. Best time to go: Oct – Mar."},
];
function deriveTreks(){treks.forEach((t,i)=>{t.idx=i;
  if(t.img && t.img.indexOf('?')<0)t.img=t.img+Q;     // append sizing only if not already present
  t.hl=(Array.isArray(t.highlights)&&t.highlights.length)?t.highlights:HL;   /* admin-picked highlights, else the default set */
  t.dur=t.days+(t.days>1?' Days':' Day');
  /* location-based conditions derived from elevation + season */
  const ft=parseInt(String(t.alt).replace(/[^0-9]/g,''))||10000;
  t.elev=t.alt;
  t.climate = ft>14000?'Alpine · Harsh':(ft>11500?'Alpine · Cold':'Himalayan · Cool');
  /* TYPICAL range for the altitude band — labelled as such in the UI. Live values,
     when we can fetch them, overwrite t.tempLive / t.aqiLive below.
     There used to be a `t.aqiVal = 18+((i*9)%34)` here: an "Air Quality" reading
     derived from the trek's position in the array. It looked like a measurement and
     was shown as one. Removed — we now show a real number or no number. */
  t.temp = ft>14000?'-8° to 6°C':(ft>11500?'-5° to 10°C':'2° to 15°C');
});}
deriveTreks();
/* product type: a catalog item is a "trek" by default, or a "tour" (Road Trips & Tours —
   e.g. Spiti/Ladakh/Bhutan). Tours reuse the whole trek engine (itinerary, batches, booking,
   share cards) but live in their own section and are hidden from every trek browse surface. */
function trekType(t){return (t&&t.type)||'trek';}
function isTour(t){return trekType(t)==='tour';}
function tourList(){return treks.filter(isTour);}
/* road trips are linked to a destination (dest_id) and shown highlighted on that
   destination's page. Departure type: 'group' (fixed dates), 'custom' (tailored),
   or 'both' (default). */
function toursForDest(id){id=String(id||'');return treks.filter(t=>isTour(t)&&String(t.dest_id||'')===id);}
function tourDep(t){return (t&&t.departure_type)||'both';}
function depLabel(t){const d=tourDep(t);return d==='group'?'Group departures':d==='custom'?'Custom trips':'Group & custom';}
/* day-by-day itinerary: admin-built (t.itinerary) wins, else the built-in ITIN map */
function trekItin(t){const a=t&&t.itinerary;if(Array.isArray(a)&&a.length)return a;return (t&&typeof ITIN!=='undefined'&&ITIN[t.n])||[];}
/* a pasted Wikimedia Commons FILE-PAGE link (…/wiki/File:Foo.jpg) isn't a loadable image;
   convert it to Special:FilePath which redirects to the real file. Direct URLs pass through. */
function normalizeImageUrl(u){u=String(u||'').trim();if(!u)return u;const m=u.match(/\/wiki\/(?:File|Image):([^?#]+)/i);if(m)return 'https://commons.wikimedia.org/wiki/Special:FilePath/'+m[1];return u;}
/* home "Featured Road Trips" rail → open the trip's destination (fallback: the trip itself) */
function openTourHome(idx){const t=treks[idx];if(t&&t.dest_id&&destById(t.dest_id))openDest(t.dest_id);else openDetail(idx);}
/* Admin → Destinations manages road trips by launching the full trek editor, pre-linked */
function addTourForDest(destId){
  editIdx=-1;adminTab='Treks';_admHub=false;if(typeof _destEdit!=='undefined')_destEdit=null;renderAdmin();
  loadGuides().then(()=>showAdminForm({lvl:'Easy',type:'tour',dest_id:destId,departure_type:'both',region:(destById(destId)||{}).state||'Uttarakhand'}));
}
function editTourFromDest(key){
  let i=treks.findIndex(x=>String(x._id||'')===String(key));
  if(i<0)i=treks.findIndex(x=>x.n===key);
  if(i<0){note('Open this trip from the Treks tab to edit it.','Not found');return;}
  editIdx=i;adminTab='Treks';_admHub=false;if(typeof _destEdit!=='undefined')_destEdit=null;renderAdmin();
  loadGuides().then(()=>showAdminForm(treks[i]));
}
/* road trip booking: group departures (in-app, 25% deposit) or a custom/private trip (quote) */
let _tourDepIdx=-1;
function openTourDepart(idx){
  const t=treks[idx];if(!t)return;
  const dep=tourDep(t);
  if(dep==='group'){go('selectDate');return;}
  if(dep==='custom'){openTourCustom(idx);return;}
  _tourDepIdx=idx;
  const m=document.getElementById('tourDepModal');if(!m){go('selectDate');return;}
  const g=id=>document.getElementById(id);
  g('tdName').textContent=t.n;
  m.classList.add('show');
  const close=()=>{m.classList.remove('show');g('tdGroup').onclick=g('tdCustom').onclick=g('tdCancel').onclick=m.onclick=null;};
  g('tdCancel').onclick=close;m.onclick=e=>{if(e.target===m)close();};
  g('tdGroup').onclick=()=>{close();go('selectDate');};
  g('tdCustom').onclick=()=>{close();openTourCustom(idx);};
}
function openTourCustom(idx){
  const t=treks[idx];if(!t)return;
  const nm=getSavedName()||'';
  wa('Hi Tripomonk! I\'d like a CUSTOM / private trip 🏔️\n\nTrip: '+t.n+'\nName: '+nm+'\nPreferred dates: \nGroup size: \nAnything else: \n\nPlease share a custom quote and how to pay a deposit to hold it.');
}

/* ---------- Supabase backend (optional; falls back to built-in data) ---------- */
const SB = window.TMK_CONFIG || {};
const sbOn = !!(SB.SUPABASE_URL && SB.SUPABASE_ANON_KEY);
function sbHeaders(extra){return Object.assign({apikey:SB.SUPABASE_ANON_KEY,Authorization:'Bearer '+SB.SUPABASE_ANON_KEY},extra||{});}
/* ---- stale-while-revalidate cache for shared, rarely-changing data ----
   News, the live-host rail and the verified-host list are identical for every
   user and change only occasionally, but the service worker deliberately
   bypasses Supabase, so each of these views waited on a network round trip.
   These helpers stash the last result in localStorage: callers paint from it
   INSTANTLY, then revalidate in the background and repaint only if it actually
   changed. There is no locale/currency variation in this app, so the cache key
   is just the dataset name — add a suffix here if that ever changes. */
/* Bump ONLY when a cached payload's shape changes (a new column the UI depends on).
   Deliberately not tied to APP_BUILD — that changes every deploy and would throw away
   the cache each time, which is the opposite of what this is for. */
const SWR_V=2;   /* v2: weather forecast is now 7 days (was 5) — invalidate the old cached payloads */
function swrGet(key){try{const v=JSON.parse(localStorage.getItem('tmk_swr_'+key)||'null');
  if(!v||!('data'in v))return null;
  if((v.v||0)!==SWR_V){localStorage.removeItem('tmk_swr_'+key);return null;}   /* stale shape */
  return v;}catch(e){return null;}}
function swrSet(key,data){try{localStorage.setItem('tmk_swr_'+key,JSON.stringify({t:Date.now(),v:SWR_V,data}));}
  catch(e){ /* quota full: drop our own cache entries and retry once */
    try{Object.keys(localStorage).filter(k=>k.indexOf('tmk_swr_')===0).forEach(k=>localStorage.removeItem(k));
      localStorage.setItem('tmk_swr_'+key,JSON.stringify({t:Date.now(),v:SWR_V,data}));}catch(e2){}
  }}
function swrFresh(key,ttl){const v=swrGet(key);return !!(v&&ttl&&(Date.now()-v.t<ttl));}
/* DB is the source of truth for editable fields. Merge DB rows OVER the hardcoded
   fallback by name — so an admin edit persists for everyone even when not all treks
   were pre-imported, the trek keeps its rich display fields (highlights etc.), and it
   picks up the DB _id so the NEXT edit updates the same row instead of inserting. */
function applyTrekRows(rows){
  if(!rows||!rows.length)return false;
  const dbByName={};
  rows.forEach(d=>{const row={n:d.name,region:d.region,img:d.img,r:d.rating,rev:d.reviews,lvl:d.level,days:d.days,
    alt:d.altitude,dist:d.distance,best:d.best_time,price:d.price,soon:d.soon,desc:d.description,packing:d.packing||null,batches:(Array.isArray(d.batches)?d.batches:null),req:(typeof d.req_score==='number'?d.req_score:null),pop:!!d.popular,feat:!!d.featured,type:d.type||'trek',dest_id:d.dest_id||'',departure_type:d.departure_type||'both',itinerary:(Array.isArray(d.itinerary)?d.itinerary:[]),pickup:d.pickup||'',dropoff:d.dropoff||'',pickup_map:d.pickup_map||'',tag:d.tag||'',offer:d.offer||'',discount:(d.discount!=null?d.discount:0),highlights:(Array.isArray(d.highlights)?d.highlights:null),itin:d.itinerary_url||'',hvid:d.hero_video||'',hvideo:!!d.hero_use_video,guide_id:d.guide_id||null,_id:d.id};
    if(d.credit)row.credit=d.credit; dbByName[d.name]=row;});
  const seen=new Set();
  treks.forEach(t=>{const d=dbByName[t.n];if(d){Object.assign(t,d);seen.add(t.n);}});
  rows.forEach(d=>{if(!seen.has(d.name)){treks.push(dbByName[d.name]);seen.add(d.name);}});
  deriveTreks();
  renderHomeChips(); renderHome(); renderQuick();
  if(cur==='explore') renderExplore();
  return true;
}
/* Treks are ~140 rows and every launch re-fetched them before the DB prices could show.
   Now: paint the last known rows from localStorage immediately (no network), then
   revalidate in the background and only repaint if the payload actually changed. */
const TREKS_KEY='treks';
function bustTreksCache(){try{localStorage.removeItem('tmk_swr_'+TREKS_KEY);}catch(e){}}
/* fresh=true is used right after an ADMIN WRITE: it skips the paint-from-cache step, so
   the just-saved change can't be reverted by an older localStorage copy, and it always
   applies whatever the DB returns (no "unchanged, skip" shortcut). fresh=false is the
   normal launch path: paint the cache instantly, then repaint only if the DB differs. */
async function loadTreks(fresh){ if(!sbOn) return;
  let painted='';
  if(!fresh){
    const cached=swrGet(TREKS_KEY);
    if(cached&&Array.isArray(cached.data)&&cached.data.length){
      try{painted=JSON.stringify(cached.data);applyTrekRows(cached.data);}catch(e){}
    }
  }
  try{let r=await fetch(SB.SUPABASE_URL+'/rest/v1/treks?select=*&order=sort.asc',{headers:sbHeaders(),cache:'no-store'});
    /* table may not have a `sort` column — retry ordering by id */
    if(!r.ok) r=await fetch(SB.SUPABASE_URL+'/rest/v1/treks?select=*&order=id.asc',{headers:sbHeaders(),cache:'no-store'});
    if(!r.ok) return; const rows=await r.json(); if(!rows||!rows.length) return;
    swrSet(TREKS_KEY,rows);
    /* skip the repaint (and the reflow) when nothing actually moved */
    if(!fresh&&JSON.stringify(rows)===painted) return;
    applyTrekRows(rows);
  }catch(e){}}
function saveBookingRemote(b){ if(!sbOn) return;
  fetch(SB.SUPABASE_URL+'/rest/v1/bookings',{method:'POST',headers:sbHeaders({'Content-Type':'application/json',Prefer:'return=minimal'}),
    body:JSON.stringify({id:b.id,trek:b.trek,name:b.name,date:b.date,pax:b.pax,total:b.total,paid:b.paid,status:b.status,checked_in:false})}).catch(()=>{});}
/* ---- Trek News & Alerts (AI-summarized, refreshed by a scheduled function) ---- */
let _newsCache=null;
const ALERT_RE=/landslide|closed|closure|road block|weather|warning|alert|flood|rescue|avalanche|cloudburst|stranded|evacuat|shut|ban\b|emergency|trapped|snowfall/i;
/* drop crime / politics / negative items that aren't trek-safety alerts */
const NEG_RE=/murder|killed|death|dead|crime|arrest|standoff|clash|riot|protest|attack|assault|court|fir\b|police|scam|fraud|rape|violence|dispute|controversy|politic|election|encroach|raid/i;
function isAlert(n){return (n.severity||'')==='alert' || ALERT_RE.test((n.title||'')+' '+(n.summary||''));}
function isNegative(n){const t=(n.title||'')+' '+(n.summary||'');return NEG_RE.test(t)&&!ALERT_RE.test(t);}
/* signature of a story so the same news from different sources dedupes */
const NEWS_STOP=new Set(['news','india','uttarakhand','himalaya','himalayan','trek','trekking','the','and','for','with','from','over','into','after','amid','says','will','have','been','that','this','your']);
function newsKey(n){
  const w=(n.title||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(x=>x.length>3&&!NEWS_STOP.has(x));
  return w.slice(0,4).sort().join(' ');
}
async function loadNews(){
  if(!sbOn)return[];
  try{const r=await fetch(SB.SUPABASE_URL+'/rest/v1/news?select=*&order=published_at.desc&limit=60',{headers:sbHeaders()});
    if(!r.ok)return[];
    let raw=(await r.json()).filter(n=>!isNegative(n));
    /* keep the most relevant version: alerts first, then newest */
    raw.sort((x,y)=>(isAlert(y)-isAlert(x))||(new Date(y.published_at)-new Date(x.published_at)));
    const seen=new Set();
    _newsCache=raw.filter(n=>{const k=newsKey(n);if(!k)return true;if(seen.has(k))return false;seen.add(k);return true;});
    return _newsCache;
  }catch(e){return[];}
}
/* clean redesigned news card — priority pill over image, tight hierarchy */
function newsCard(n){
  const a=isAlert(n);const when=n.published_at?timeAgo(n.published_at):'';
  const pri=a?`<span class="npill high">${ic('alert',12)} Alert</span>`:`<span class="npill low">${ic('bell',12)} Update</span>`;
  const img=n.image
    ?`<div class="nimg" style="background-image:url('${n.image}')">${pri}</div>`
    :`<div class="nimg noimg">${pri}<span class="msr" style="font-size:30px;color:var(--muted2)">landscape</span></div>`;
  const trekChip=n.trek?`<span class="nchip">${ic('pin',11)} ${esc(n.trek)}</span>`:'';
  return `<div class="ncard2 ${a?'alert':''}" onclick="openNewsDetail('${(n.url||'').replace(/'/g,'')}')">
    ${img}
    <div class="nbody">
      <h4>${esc(n.title||'')}</h4>
      ${n.summary?`<p>${esc(n.summary)}</p>`:''}
      <div class="nmeta">${trekChip}<span class="nsrc">${esc(n.source||'news')}</span>${when?`<span class="ndot2">•</span>${when}`:''}<span class="nread">Read ${ic('back',12)}</span></div>
    </div>
  </div>`;
}
function openNews(url){if(url)window.open(url,'_blank','noopener');}
function openNewsDetail(url){
  const n=(_newsCache||[]).find(x=>x.url===url);if(!n){openNews(url);return;}
  const a=isAlert(n);const g=id=>document.getElementById(id);
  const img=g('nmImg');
  if(n.image){img.style.display='';img.style.backgroundImage=`url('${n.image}')`;}else img.style.display='none';
  g('nmPri').className='npri '+(a?'high':'low');g('nmPri').innerHTML=a?`${ic('alert',13)} High priority`:`${ic('bell',13)} Trek update`;
  g('nmTitle').textContent=n.title||'';
  g('nmMeta').textContent=(n.trek?n.trek+' · ':'')+(n.source||'')+(n.published_at?' · '+timeAgo(n.published_at):'');
  g('nmText').textContent=n.summary||'Open the full article for details.';
  g('nmOpen').onclick=()=>openNews(n.url);
  const m=g('newsModal');m.classList.add('show');hydrate(m);
  g('nmClose').onclick=()=>m.classList.remove('show');
  m.onclick=e=>{if(e.target===m)m.classList.remove('show');};
}
async function renderDetailNews(trekName){
  const blk=document.getElementById('dNewsBlk'),box=document.getElementById('dNews');if(!box)return;
  const list=_newsCache||await loadNews();
  const mine=(list||[]).filter(n=>n.trek===trekName);
  if(!mine.length){if(blk)blk.style.display='none';return;}
  if(blk)blk.style.display='';
  box.innerHTML=mine.slice(0,4).map(newsCard).join('');hydrate(box);
}
async function renderHomeNews(){
  const box=document.getElementById('homeNews');if(!box)return;
  const list=_newsCache||await loadNews();
  if(!list||!list.length){box.className='';box.innerHTML=`<div class="empty" style="padding:14px 0;font-size:12.5px;color:var(--muted)">No trek updates right now.</div>`;return;}
  const alerts=list.filter(isAlert),news=list.filter(n=>!isAlert(n));
  /* alerts first (priority), then a couple of news — horizontal cards like Popular Treks */
  const show=[...alerts.slice(0,3),...news.slice(0,3)];
  box.className='news-hrow';
  box.innerHTML=show.map(newsCard).join('');hydrate(box);
  checkAlerts(list);
}
let _newsQuery='';
async function renderNews(){
  const box=document.getElementById('newsList');if(!box)return;
  /* opening the news screen clears the "new news" bell dot */
  markNewsSeen();
  _newsQuery='';const si=document.getElementById('newsSearch');if(si)si.value='';
  /* paint the last cached news INSTANTLY — no skeleton, no network wait */
  const cached=swrGet('news');
  const hadCache=!!(cached&&cached.data&&cached.data.length);
  if(hadCache){_newsCache=cached.data;paintNews(cached.data);}
  else box.innerHTML=`<div class="skel skel-card" style="height:54px"></div><div class="skel skel-card" style="height:54px"></div>`;
  /* opened news moments ago? cache is fresh — skip the refetch entirely */
  if(swrFresh('news',120000))return;
  /* revalidate in the background; repaint only if it changed and the user hasn't started searching */
  const list=await loadNews();
  if(list&&list.length){swrSet('news',list);if(!_newsQuery)paintNews(list);}
  else if(!hadCache&&!_newsQuery)paintNews(list||[]);   /* keep good cache if revalidation came back empty (likely transient) */
}
/* filter the loaded news by the search box and render */
function paintNews(list){
  const box=document.getElementById('newsList');if(!box)return;
  const q=_newsQuery.trim().toLowerCase();
  const match=n=>!q||((n.title||'')+' '+(n.summary||'')+' '+(n.source||'')).toLowerCase().includes(q);
  const filtered=list.filter(match);
  if(!list.length){box.innerHTML=`<div class="empty"><p>No trek updates right now. Fresh alerts arrive a few times a day.</p></div>`;return;}
  if(!filtered.length){box.innerHTML=`<div class="empty"><p>No news matches “${esc(_newsQuery)}”.</p></div>`;return;}
  const alerts=filtered.filter(isAlert),news=filtered.filter(n=>!isAlert(n));
  let html='';
  if(alerts.length)html+=`<div class="nsec">⚠ Alerts</div>`+alerts.map(newsCard).join('');
  if(news.length)html+=`<div class="nsec"${alerts.length?' style="margin-top:18px"':''}>Trek News</div>`+news.map(newsCard).join('');
  box.innerHTML=html;hydrate(box);
}
function searchNews(q){_newsQuery=q||'';paintNews(_newsCache||[]);}
/* serious-alert notification: banner + chime when a NEW alert appears */
/* screens where a popup banner is intrusive — pre-login / auth flow */
const NO_BANNER_SCREENS=['login','otp','splash','onboarding'];
/* is there fresh news the user hasn't opened yet? drives the bell dot.
   "seen" = the newest news url the last time they opened the News screen. */
function newestNewsUrl(){const l=_newsCache||[];return l.length?(l[0].url||''):'';}
function hasUnseenNews(){
  const top=newestNewsUrl();if(!top)return false;
  return top!==(localStorage.getItem('tmk_news_seen')||'');
}
function markNewsSeen(){try{localStorage.setItem('tmk_news_seen',newestNewsUrl());}catch(e){}
  const d=document.getElementById('notifDot');if(d&&_lastUnread<=0)d.style.display='none';}
function checkAlerts(list){
  /* new / alert news no longer floats a banner over the app — it only lights the
     bell (notification icon). Tap the bell to see it in the News section. */
  refreshNotifBadge();
}
function showAlertBanner(n){
  if(NO_BANNER_SCREENS.includes(cur))return;   /* never on auth screens */
  let b=document.getElementById('alertBanner');
  if(!b){b=document.createElement('div');b.id='alertBanner';document.querySelector('.screen').appendChild(b);}
  b.innerHTML=`<span class="msr" style="font-size:20px">warning</span><div class="ab-tx"><b>Trek Alert</b><span>${esc(n.title||'')}</span></div><button onclick="dismissAlert('${(n.url||'').replace(/'/g,'')}')">${ic('close',16)}</button>`;
  b.className='show';hydrate(b);
  b.onclick=function(e){if(e.target.closest('button'))return;openNewsDetail(n.url);};
}
function dismissAlert(url){try{localStorage.setItem('tmk_alert_seen',url);}catch(e){}const b=document.getElementById('alertBanner');if(b)b.className='';}
function saveEnquiry(kind,detail){ if(!sbOn) return;
  fetch(SB.SUPABASE_URL+'/rest/v1/enquiries',{method:'POST',headers:sbHeaders({'Content-Type':'application/json',Prefer:'return=minimal'}),
    body:JSON.stringify({kind:kind,detail:detail})}).catch(()=>{});}

const ITIN={
  "Kedarkantha":[["Sankri to Juda Ka Talab","Trek through pine forests to a beautiful campsite.","4 km","4–5 hrs"],["Juda Ka Talab to Kedarkantha Base","Gradual ascent with scenic views.","5 km","4–5 hrs"],["Kedarkantha Summit & Base Camp","Early morning summit trek. Return to base.","6 km","6–7 hrs"],["Base Camp to Hargaon","Descent through forests and charming villages.","6 km","4–5 hrs"],["Hargaon to Sankri","Drive back with beautiful memories.","3 km","1–2 hrs"]],
  "Brahmatal":[["Lohajung to Bekaltal","Climb through oak & rhododendron forest.","6 km","5 hrs"],["Bekaltal to Brahmatal","Ridge walk with Trishul views.","5 km","4 hrs"],["Brahmatal Top & lake","Summit the ridge and frozen lake.","7 km","6 hrs"],["Descend to Lohajung","Long descent through meadows.","8 km","5 hrs"],["Lohajung to Kathgodam","Drive back.","—","10 hrs"]],
  "Valley of Flowers":[["Govindghat to Ghangaria","Trek to the base village.","10 km","6 hrs"],["Valley of Flowers","Day hike into the bloom valley.","7 km","6 hrs"],["Hemkund Sahib","Steep climb to the glacial lake.","12 km","8 hrs"],["Ghangaria to Govindghat","Descend and drive to Joshimath.","10 km","5 hrs"],["Drive to Rishikesh","Journey ends.","—","9 hrs"]],
  "Hampta Pass":[["Manali to Jobra to Chika","Drive then short trek by the river.","2 km","2 hrs"],["Chika to Balu Ka Ghera","Walk along the Rani river.","7 km","5 hrs"],["Cross Hampta Pass to Shea Goru","The big crossover day.","7 km","8 hrs"],["Shea Goru to Chatru","Descend into Lahaul.","6 km","4 hrs"],["Chandratal & drive back","Visit the moon lake, drive to Manali.","—","8 hrs"]],
  "Har Ki Dun":[["Sankri to Taluka to Gangad","Drive then trek along the Supin.","11 km","6 hrs"],["Gangad to Osla","Through ancient villages.","8 km","5 hrs"],["Osla to Har Ki Dun","Into the valley of gods.","8 km","6 hrs"],["Explore & descend","Marinda Tal and back.","8 km","6 hrs"],["Osla to Taluka","Long descent.","12 km","6 hrs"],["Taluka to Sankri to Dehradun","Drive back.","—","10 hrs"]],
  "Nag Tibba":[["Pantwari to base camp","Trek to the base, bonfire night.","4 km","3–4 hrs"],["Summit & return to Dehradun","Sunrise summit, descend and drive.","8 km","6 hrs"]],
  "Roopkund":[["Lohajung to Didna","Climb to Didna village.","7 km","5 hrs"],["Didna to Ali Bugyal","Vast alpine meadows.","11 km","6 hrs"],["Ali to Patar Nachauni","Ridge walk over Bedni.","6 km","4 hrs"],["Patar to Bhagwabasa","Climb past Kalu Vinayak.","5 km","5 hrs"],["Summit Roopkund","The mystery lake at dawn.","6 km","8 hrs"],["Descend to Lohajung","Long descent via Wan.","13 km","7 hrs"]],
  /* DRAFT — structure matches the trek record (5 days, ~18 km, Shimla base). The staging
     villages and timings are approximate: confirm them against your recce before this
     trek is promoted, then correct this entry or attach a real PDF in Admin → Treks. */
  "Yulla Kanda":[["Shimla to Sarahan","Drive up the Sutlej valley into Kinnaur.","—","8–9 hrs"],["Sarahan to Yulla village","Drive to the roadhead, short walk to the village.","3 km","2 hrs"],["Yulla to Yulla Kanda meadow","Climb through apple orchards and cedar to the meadow camp.","7 km","5–6 hrs"],["Krishna temple & descend","Early visit to the temple, then descend to the village.","8 km","6 hrs"],["Drive back to Shimla","Journey ends.","—","8–9 hrs"]]
};
/* pick a scene image per itinerary day from its text, so days look different */
function dayImg(d,i,trek){
  const s=((d[0]||'')+' '+(d[1]||'')).toLowerCase();
  const w=id=>U+id+'?auto=format&fit=crop&w=200&q=70';
  const SUMMIT=w('1465056836041-7f43ac27dcb5'),LAKE=w('1506744038136-46273834b3fb'),
    FOREST=w('1470071459604-3b5ec3a7fe05'),MEADOW=w('1469474968028-56623f02e42e'),
    VILLAGE=w('1426604966848-d7adac402bff'),RIDGE=w('1483728642387-6c3bdd6c93e5'),
    RIVER=w('1454496522488-7a8e488e8606'),DRIVE=w('1551632811-561732d1e306');
  const POOL=[LAKE,MEADOW,SUMMIT,FOREST,VILLAGE,RIDGE];
  if(/summit|peak|\btop\b|pass|kalu vinayak/.test(s))return SUMMIT;
  if(/lake|\btal\b|talab|chandratal|hemkund|roopkund|brahmatal/.test(s))return LAKE;
  if(/forest|pine|oak|rhododend|wood/.test(s))return FOREST;
  if(/meadow|bugyal|valley|flower|bloom|alpine/.test(s))return MEADOW;
  if(/village|osla|gangad|didna|sankri|camp|base|bonfire|chika/.test(s))return VILLAGE;
  if(/ridge|trishul|crossover|nachauni/.test(s))return RIDGE;
  if(/river|supin|rani|stream/.test(s))return RIVER;
  if(/drive|journey|back|return|ends|kathgodam|dehradun|rishikesh|manali/.test(s))return DRIVE;
  return POOL[i%POOL.length];
}
const INCL=[['meals','Meals'],['stay','Stay'],['guide','Guide'],['permits','Permits'],['firstaid','First Aid']];
const regions=[["Himachal",U+"1644902560705-740850bc47b8"],["Uttarakhand",U+"1513614835783-51537729c8ba"],["Kashmir",U+"1756847845343-7a1053567775"],["Ladakh",U+"1718429205172-0d91b73ab23c"],["Sikkim",U+"1732510951898-416631a45e35"]];
const packing={
  Essentials:[['backpack','Backpack (40–60L)'],['shoe','Trekking Shoes'],['bottle','Water Bottle'],['headlamp','Headlamp'],['sunglasses','Sunglasses'],['sunblock','Sunblock'],['firstaid','First Aid Kit']],
  Clothing:[['jacket','Down Jacket'],['thermal','Thermal Wear'],['rain','Rain Jacket / Poncho'],['jacket','Trek Pants'],['thermal','Warm Socks & Gloves']],
  Gear:[['poles','Trek Poles'],['bed','Sleeping Bag'],['snow','Micro-spikes'],['backpack','Day Pack']],
  Others:[['powerbank','Power Bank'],['meals','Trail Snacks'],['permits','ID Copies'],['firstaid','Personal Meds']]
};
/* ---------- social: people directory ---------- */
const people=[];  /* legacy demo array — kept empty; real members live in peoplePool */
/* Shared member list, loaded once from `profiles`. Mentions, @-tagging and the story
   tray all read this — before, they each filtered the empty `people` array, which is
   why the mention popup never appeared. */
let peoplePool=[],_peopleLoaded=0;
async function ensurePeople(force){
  const fresh=Date.now()-_peopleLoaded<120000;   /* 2 min cache */
  if(peoplePool.length&&fresh&&!force)return peoplePool;
  const remote=await loadPeopleRemote();
  const mine=myName();
  peoplePool=(remote||[]).filter(p=>p.n&&p.n!==mine);
  _peopleLoaded=Date.now();
  return peoplePool;
}
const personMap={};people.forEach(p=>personMap[p.n]=p);
const ME={n:"You",h:"@you",bio:"Trekker with Tripomonk 🏔️",home:"",flwr:0};
function getPerson(n){return personMap[n]||(n==='You'?ME:{n:n,h:'@'+n.toLowerCase().replace(/[^a-z]/g,''),bio:'Tripomonk trekker',home:'',flwr:0});}
/* deterministic avatar gradient + initials from a name */
const AVG=[['#ffd27a','#ff7a59'],['#7ad1ff','#2f6bff'],['#b7f5c0','#2fb56b'],['#ffb3d9','#c44bd6'],['#ffe08a','#f59e0b'],['#c9b7ff','#7c5cff']];
function initials(n){return n.split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase();}
function avHash(n){let h=0;for(let i=0;i<n.length;i++)h=(h*31+n.charCodeAt(i))|0;return Math.abs(h);}
/* other people's profile photos, keyed by display name (filled from `profiles`) */
let photoByName={},hostByName={},unameByName={},socialsByName={},bioByName={},categoryByName={};
/* when each name was last fetched — so a changed DP/username refreshes instead of
   sticking on the first cached copy for the whole session */
let _authorFetchedAt={};
/* profile header counts — declared up here (renderProfile can run early); -1 = not loaded yet */
let _myPostCount=-1,_myFollowerCount=-1,_myFollowingCount=-1;
/* declared up here on purpose: renderHome() runs during boot, far above the
   host-trip functions at the bottom of this file. Declaring it next to them
   put it in the temporal dead zone and killed the rest of the script. */
let liveHostTrips=[],verifiedHosts=[];
/* All host-module state lives up here, ABOVE the boot sequence.
   restoreNav() can send a user straight back to becomeHost / hostDash / hostTrip
   on load, and those renderers read these. Declared beside their functions at the
   bottom of the file, they'd be in the temporal dead zone and kill the script. */
let _hostApp=null,_hostLoaded=false;
let hdTab='Trips',_hdTrips=[],_editTripId=null;
let _htDiff='Moderate',_htFile=null,_htImgData='',_htInc=[],_htExc=[],_htMedia=[];
/* common options so hosts tap instead of typing */
const INC_OPTIONS=['Accommodation','All meals','Transport','Trek guide','Permits','Camping equipment','First aid','Porter support','Bonfire','Sightseeing'];
const EXC_OPTIONS=['Travel to base city','Personal expenses','Insurance','Tips','Gear rental','Meals en route','Anything not listed'];
/* a verified host gets a tick next to their name — public trust signal, admin-set only */
function hostBadge(n){return hostByName[n]?'<span class="vbadge" title="Verified Host"><span class="msr">check</span></span>':'';}
function photoFor(n){
  if(n==='You'||n===myName())return getSavedPhoto();
  return photoByName[n]||'';
}
/* the username to SHOW for an author (kept internal data keyed by name).
   Real @handle when we know it, else the person's name as a fallback. */
function handleFor(n){
  if(!n)return '';
  if(n==='You'||n===myName()){const u=getSavedUsername();return u||getSavedName()||'You';}
  return unameByName[n]||n;
}
/* same, always @-prefixed for the muted sub-line under a name. A real username can
   never contain a space (the app strips everything outside a-z0-9._), so a value with
   a space is the name fallback — return '' rather than render a broken "@Full Name". */
function atHandle(n){const s=String(handleFor(n)).replace(/^@/,'').trim();
  if(!s||/\s/.test(s))return '';
  return '@'+s;}
function avatar(n,size){size=size||38;const g=AVG[avHash(n)%AVG.length];const fs=Math.round(size*.4);
  const photo=photoFor(n);
  const bg=photo?`background-image:url('${esc(photo)}');background-size:cover;background-position:center`:`background:linear-gradient(135deg,${g[0]},${g[1]})`;
  /* border-radius + overflow are baked in inline so the avatar is ALWAYS a circle, even
     if the stylesheet is stale/partial on a device — a square photo was the symptom. */
  return `<div class="av-i" onclick="openPerson('${jsq(n)}')" style="width:${size}px;height:${size}px;font-size:${fs}px;border-radius:50%;overflow:hidden;${bg}">${photo?'':initials(n)}</div>`;}

let postSeq=2;
const feed=[];  /* real posts come from the database, not demo data */
/* persisted social state */
let followState={},likeState={},userPosts=[];
function loadSocial(){try{
  followState=JSON.parse(localStorage.getItem('tmk_follows')||'{}');
  likeState=JSON.parse(localStorage.getItem('tmk_likes')||'{}');
  userPosts=JSON.parse(localStorage.getItem('tmk_posts')||'[]');
  const cm=JSON.parse(localStorage.getItem('tmk_comments')||'{}');
  feed.forEach(p=>{if(cm[p.id])p.comments=cm[p.id];});
}catch(e){}}
function saveFollows(){try{localStorage.setItem('tmk_follows',JSON.stringify(followState));}catch(e){}}
/* follows live on the server too, so they survive sign-out and follow you across devices */
async function loadFollowsFromServer(){
  const sb=getSupaClient();if(!sb||!currentUser)return;
  try{
    const{data}=await sb.from('follows').select('following_name').eq('follower_id',currentUser.id);
    if(data){
      followState={};
      data.forEach(r=>{if(r.following_name)followState[r.following_name]=true;});
      saveFollows();
    }
  }catch(e){}
}
/* returns true on success, false if the server rejected the change (so the
   caller can roll the optimistic UI back). No backend = demo mode = local-only
   = treat as success (nothing to reconcile against). */
async function syncFollow(n,on){
  const sb=getSupaClient();if(!sb)return true;
  const uid=await authUid();if(!uid)return false;
  try{
    if(on){const{error}=await sb.from('follows').upsert({follower_id:uid,follower_name:myName(),following_name:n},{onConflict:'follower_id,following_name'});if(error)throw error;}
    else{const{error}=await sb.from('follows').delete().eq('follower_id',uid).eq('following_name',n);if(error)throw error;}
    return true;
  }catch(e){return false;}
}
function saveLikes(){try{localStorage.setItem('tmk_likes',JSON.stringify(likeState));}catch(e){}}
function savePosts(){try{localStorage.setItem('tmk_posts',JSON.stringify(userPosts));}catch(e){}}
function saveComments(){try{const cm={};allPosts().forEach(p=>{if(p.comments&&p.comments.length)cm[p.id]=p.comments;});localStorage.setItem('tmk_comments',JSON.stringify(cm));}catch(e){}}
function allPosts(){return userPosts.concat(feed);}
let _lastFeed=[],_feedToken=0;
function postById(id){return _lastFeed.find(p=>p.id===id)||allPosts().find(p=>p.id===id);}
function isFollowing(n){return !!followState[n];}
function followCount(){return Object.values(followState).filter(Boolean).length;}
/* update only the follow buttons for this person — a full re-render made the whole feed flicker */
function updateFollowUI(n){
  const on=!!followState[n];
  document.querySelectorAll('[data-follow]').forEach(el=>{
    if(el.dataset.follow!==n)return;
    el.classList.toggle('on',on);
    el.textContent=on?'Following':'Follow';
    el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');
  });
  /* follower tally on the person screen */
  const f=document.getElementById('pFlwr');
  if(f&&f.dataset.person===n){
    const base=+f.dataset.base||0;
    f.textContent=(base+(on?1:0)).toLocaleString();
  }
}
/* ============================================================
   PRIVACY, FOLLOW REQUESTS & CALL CONSENT
   - A private account gates its posts + messaging behind an accepted follow.
   - Following a private account sends a REQUEST (pending) until they accept.
   - Calling never reveals a phone number: it sends a call request first, and the
     dialer only opens once the other person allows it (or for Tripomonk support).
   Client layer here; real cross-device enforcement needs the SQL/RLS (follows.status,
   profiles.private) — see SQL-add-privacy.sql. ============================================================ */
let privateByName={};                 /* name -> bool, filled as profiles load */
function isPrivateAccount(){const p=getPrefs()||{};return !!p.private;}
function isPrivatePerson(n){
  if(!n||n==='Tripomonk Team')return false;
  if(n==='You'||n===myName())return isPrivateAccount();
  return !!privateByName[n];
}
/* pending follow requests I've SENT to private accounts (localStorage; mirrors follows.status='pending') */
let followReqState=null;
function followReqs(){if(!followReqState){try{followReqState=JSON.parse(localStorage.getItem('tmk_followreqs')||'{}');}catch(e){followReqState={};}}return followReqState;}
function saveFollowReqs(){try{localStorage.setItem('tmk_followreqs',JSON.stringify(followReqs()));}catch(e){}}
function hasRequested(n){return !!followReqs()[n];}
/* can I see this person's posts / message them? Yes if public, myself, or an accepted follower. */
function canSeePerson(n){return !isPrivatePerson(n)||n===myName()||n==='You'||isFollowing(n);}
/* the follow button: public -> follow/unfollow; private -> request/requested/following */
function followAction(n){
  logEvent('follow',{name:n});
  if(isPrivatePerson(n)&&!isFollowing(n)){
    const req=followReqs();
    if(req[n]){delete req[n];saveFollowReqs();syncFollow(n,false);toast('Request withdrawn');}
    else{req[n]=Date.now();saveFollowReqs();
      uidForName(n).then(uid=>pushNotif({recipientId:uid,recipientName:uid?null:n,type:'follow_request'}));
      syncFollowReq(n);toast('Follow request sent');}
    if(cur==='person')renderPerson();else updateFollowUI(n);
    return;
  }
  toggleFollow(n);
}
async function syncFollowReq(n){
  const sb=getSupaClient();if(!sb)return;const uid=await authUid();if(!uid)return;
  try{await sb.from('follows').upsert({follower_id:uid,following_name:n,status:'pending',follower_name:myName()},{onConflict:'follower_id,following_name'});}catch(e){}
}
function followBtnLabel(n){return isFollowing(n)?'Following':(hasRequested(n)?'Requested':(isPrivatePerson(n)?'Request':'Follow'));}
function toggleFollow(n){
  const wasFollowing=!!followState[n];
  /* optimistic: flip the button now, reconcile with the server after */
  followState[n]=!wasFollowing;saveFollows();
  const req=followReqs();if(req[n]){delete req[n];saveFollowReqs();}
  updateFollowUI(n);
  /* notify the user when newly followed */
  if(!wasFollowing){
    uidForName(n).then(uid=>pushNotif({recipientId:uid,recipientName:uid?null:n,type:'follow'}));
  }
  syncFollow(n,!wasFollowing).then(okr=>{
    if(okr===false){                 /* server rejected — roll the button back */
      followState[n]=wasFollowing;saveFollows();updateFollowUI(n);
      toast(wasFollowing?'Could not unfollow — try again':'Could not follow — check your connection');
    }
  });
}
/* ---- call consent ---- */
function nowT(){try{return new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});}catch(e){return '';}}
function callAllowedSet(){try{return JSON.parse(localStorage.getItem('tmk_callok')||'{}');}catch(e){return{};}}
function isCallAllowed(n){return !!callAllowedSet()[n];}
function callNumberFor(n){const m=callAllowedSet()[n];return (m&&m.num)||'';}
function allowCall(n){const s=callAllowedSet();s[n]={num:getSavedMobile()||'',t:Date.now()};try{localStorage.setItem('tmk_callok',JSON.stringify(s));}catch(e){}
  const rows=getChat(n);rows.push({who:'me',type:'sys',txt:'You allowed '+properName(n)+' to call you.'});saveChat(n,rows);renderChat();}
function requestCall(n){
  n=n||chatWith;
  if(n==='Tripomonk Team'){location.href='tel:+'+getWa();return;}   /* company support: dial directly */
  if(isPrivatePerson(n)&&!isFollowing(n)){note(properName(n)+' has a private account. Send a follow request and get accepted before you can reach them.','Private account');return;}
  if(isCallAllowed(n)){const num=callNumberFor(n);if(num){location.href='tel:'+num;return;}}
  const rows=getChat(n);
  if(rows.some(m=>m.type==='callreq'&&m.who==='me'&&m.status==='pending')){note('You already asked '+properName(n)+' for a call. Please wait for them to allow it.','Already requested');return;}
  const cid='c'+(++_cidSeq);
  rows.push({cid,who:'me',type:'callreq',status:'pending',t:nowT(),_pending:true});saveChat(n,rows);
  if(cur!=='chat'){openChat(n);}else renderChat();
  note('We’ve asked '+properName(n)+' for a call. To protect their privacy their number stays hidden — you’ll be able to call only if they allow it.','Call request sent');
  deliverMessage(n,{type:'callreq',status:'pending'},cid);
}
const menu=[['bookings','My Bookings','bookings'],['shield','Trek Passport','passport'],['like','My Preferences','onboarding'],['monitor','Trek Health','health'],['distance','Trek Navigation','navmap'],['heartmenu','My Wishlist','wishlist'],['starline','My Reviews','reviews'],['settings','Settings','settings'],['help','Help & Support','help']];
const setList=[['user','Account & security','account'],['bell','Notifications','notifPrefs'],['globe','Language','language'],['card','Payment methods','payments'],['shield','Privacy Policy','privacy'],['help','About Tripomonk','about']];
/* demo notifications removed — the notifications screen shows only real activity now */
const faqs=[['How do I book a trek?','Pick a trek, choose a batch on Select Date, add travellers and pay 25% to confirm your seat.'],['What is the cancellation policy?','Free cancellation up to 15 days before departure (full refund). Within 15 days, a 50% charge applies.'],['Do you provide gear on rent?','Yes — add the gear kit (jacket, boots, poles) as an add-on at checkout.'],['Are permits included?','We arrange forest / eco-zone permits for you as an assisted service.'],['What fitness level do I need?','Easy treks suit beginners; Moderate+ need regular cardio for 3–4 weeks before.']];
let reviewsData=[];  /* {id,trek,author,rating,body,ts,date} — loaded from Supabase / localStorage (see loadReviews) */
const KNOW=[['community','8–15','Group size'],['user','10+ yrs','Min age'],['altitude','Moderate','Fitness']];
const EXCL=['Personal expenses','Travel to the base city','Anything not in inclusions'];

/* ---------- Auth ---------- */
let _supa=null,currentUser=null,_loginReturn=null,_loginEmail='',_profileLoadedFor=null;
let _loginChannel='email',_loginPhone='';   /* which OTP the verify screen is checking */
function getSupaClient(){
  if(_supa)return _supa;
  if(!sbOn||!window.supabase)return null;
  _supa=window.supabase.createClient(SB.SUPABASE_URL,SB.SUPABASE_ANON_KEY);
  return _supa;
}
/* --- Circuit breaker for the Supabase read path ---
   A slow or dead backend must not leave every screen stuck on skeletons. Each
   remote read runs through breaker(): it races the query against a TIMEOUT and
   caps how many run at once (MAXINFLIGHT). After THRESH consecutive failures the
   breaker OPENS and reads fast-fail to their fallback INSTANTLY — no network wait
   — for COOLDOWN ms. It then HALF-OPENS to let a single probe test recovery: the
   probe succeeding closes it, failing re-opens it. Callers already treat the
   fallback (null) as "use cached / demo data", so a degraded dependency simply
   makes the app serve stale content instead of hanging. */
const CB={fails:0,open:false,openedAt:0,inflight:0,
  THRESH:3, COOLDOWN:15000, TIMEOUT:8000, MAXINFLIGHT:6};
function cbState(){                       /* 'closed' | 'open' | 'half' */
  if(!CB.open)return 'closed';
  return (Date.now()-CB.openedAt>=CB.COOLDOWN)?'half':'open';
}
async function breaker(run,fallback){
  if(fallback===undefined)fallback=null;
  const st=cbState();
  if(st==='open')return fallback;                    /* fast-fail: no network wait */
  if(CB.inflight>=CB.MAXINFLIGHT)return fallback;    /* shed load past the concurrency cap */
  CB.inflight++;
  let timer;
  try{
    const out=await Promise.race([
      Promise.resolve().then(run),
      new Promise((_,rej)=>{timer=setTimeout(()=>rej(new Error('cb-timeout')),CB.TIMEOUT);})
    ]);
    CB.open=false;CB.fails=0;                         /* success (incl. a half-open probe) closes it */
    return out;
  }catch(e){
    CB.fails++;
    if(st==='half'||CB.fails>=CB.THRESH){CB.open=true;CB.openedAt=Date.now();}  /* trip / re-open */
    return fallback;
  }finally{clearTimeout(timer);CB.inflight--;}
}
/* Is a Supabase session persisted in storage? Synchronous, unlike getSession(), so the
   boot path can tell "this device is signed in" BEFORE the async restore finishes.
   supabase-js keeps its token under `sb-<project-ref>-auth-token`. */
function hasStoredSession(){
  try{
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);
      if(k&&/^sb-.+-auth-token$/.test(k)&&localStorage.getItem(k))return true;
    }
  }catch(e){}
  return false;
}
/* Optimistic ONLY while initAuth() is still resolving. The boot sequence renders the
   whole app (and restoreNav() re-opens the last screen) synchronously, so without this
   an auth-gated screen bounced to the login page on every reload — which read as being
   silently signed out after each update. Once auth resolves we go strictly by
   currentUser, so a stale or revoked token can never keep the UI looking signed in. */
let _authResolved=false;
function isLoggedIn(){return !!currentUser||(!_authResolved&&hasStoredSession());}
/* Re-paint everything that depends on who's signed in, once the session really lands. */
function refreshAuthUI(){
  try{
    renderHome();                                   /* header avatar + greeting */
    if(cur==='profile')renderProfile();
    else if(cur==='accountMenu')renderAccountMenu();
    else if(cur==='community')renderFeedIfOpen();
    else if(cur==='bookings')renderBookings();
    refreshNotifBadge();
  }catch(e){}
}
function renderFeedIfOpen(){if(cur==='community')renderFeed();else if(cur==='person')renderPerson();}
/* The live session's user id — never trust a cached currentUser for writes. If the
   session changed underneath us, an insert built from a stale id fails the RLS check
   ("new row violates row-level security policy"), which is exactly what a user hits
   after switching accounts. */
async function authUid(){
  const sb=getSupaClient();if(!sb)return null;
  try{
    const{data:{session}}=await sb.auth.getSession();
    if(!session)return null;
    if(!currentUser||currentUser.id!==session.user.id)currentUser=session.user;
    return session.user.id;
  }catch(e){return currentUser?currentUser.id:null;}
}
async function initAuth(){
  const sb=getSupaClient();
  if(!sb){_authResolved=true;return;}
  /* did we just come back from an OAuth (Google) redirect? */
  const fromOAuth=/[#&](access_token|code)=/.test(window.location.hash||'')||/[?&]code=/.test(window.location.search||'');
  let session=null;
  try{({data:{session}}=await sb.auth.getSession());}catch(e){}
  currentUser=session?session.user:null;
  _authResolved=true;          /* from here on isLoggedIn() is strict, not optimistic */
  refreshAuthUI();             /* repaint the shell that booted before we knew */
  if(session){
    /* restore name/photo/follows BEFORE upserting, or an empty local copy overwrites the stored one */
    await loadProfileFromServer();
    seedIdentityFromAuth();   /* fill name/photo from the Google account if still unset */
    upsertProfile();   /* register this user so others can @mention/follow/notify them */
    loadStaff();       /* role check */
    _myUid=null;ensureMsgSub();loadAiCfg().then(registerSupportInbox);   /* messaging + support inbox */
    refreshAuthUI();   /* again, now that the name/photo are back */
    if(fromOAuth){
      /* clean the token hash out of the URL and land on home */
      try{history.replaceState(null,'',window.location.pathname);}catch(e){}
      go('home');
    } else if(cur==='login'||cur==='splash'||cur==='otp'){
      const ret=_loginReturn;_loginReturn=null;
      go(ret||'home');
    }
    setTimeout(maybeOnboard,600);  /* first-time users pick their preferences */
  }
  sb.auth.onAuthStateChange(async(evt,session)=>{
    currentUser=session?session.user:null;
    _authResolved=true;
    /* arrived via a password-reset link — let them set a new password now */
    if(evt==='PASSWORD_RECOVERY'){promptNewPassword();return;}
    if(!session){_profileLoadedFor=null;refreshAuthUI();}
    /* reload whenever a DIFFERENT account is in play — keyed on the user id, not on
       "was anyone logged in", so switching accounts swaps identity properly.
       Token refreshes keep the same id, so they don't re-fetch. */
    else if(_profileLoadedFor!==session.user.id){
      await loadProfileFromServer();
      seedIdentityFromAuth();   /* fill name/photo from the Google account if still unset */
      upsertProfile();
      loadStaff();
      _myUid=null;stopMsgSub();ensureMsgSub();loadAiCfg().then(registerSupportInbox);   /* resubscribe + support inbox */
      renderFeedIfOpen();
      refreshAuthUI();
    }
    if(cur==='profile')renderProfile();
    /* catch session arriving after OAuth redirect */
    if(session&&(cur==='login'||cur==='otp')){
      const ret=_loginReturn;_loginReturn=null;
      go(ret||'home');
    }
  });
}
function requireLogin(returnTo){
  if(isLoggedIn())return true;
  _loginReturn=returnTo||'travellers';
  go('login');return false;
}
function continueAsGuest(){_loginReturn=null;go(lastTab||'home');}

/* ============================================================
   DPDP consent (Digital Personal Data Protection Act, 2023)
   Consent must be a free, specific, informed, UNAMBIGUOUS affirmative action
   (Section 6) — so it gates sign-in behind an actively ticked box, never a
   pre-ticked one, and can be withdrawn as easily as it was given (Section 6(4)).
   The record lives in localStorage immediately and mirrors to profiles.consent
   once signed in, so it survives across devices and is auditable.
   Bump CONSENT_VERSION whenever the notice or the purposes change — a stored
   consent for an older version is treated as not-yet-given, forcing re-consent. */
const CONSENT_VERSION='2026-07-25.v1';
const CONSENT_PURPOSES=['account','bookings_payments','trek_safety','service_updates','app_improvement'];
function getConsent(){try{return JSON.parse(localStorage.getItem('tmk_consent')||'null');}catch(e){return null;}}
function hasValidConsent(){const c=getConsent();return !!(c&&c.version===CONSENT_VERSION&&c.given&&!c.withdrawn);}
function recordConsent(){
  const c={version:CONSENT_VERSION,purposes:CONSENT_PURPOSES,given:true,withdrawn:false,at:new Date().toISOString()};
  try{localStorage.setItem('tmk_consent',JSON.stringify(c));}catch(e){}
  /* mirror to the profile if we already have a session (e.g. re-consent after a version bump) */
  const sb=getSupaClient();
  if(sb)authUid().then(uid=>{if(uid)sb.from('profiles').upsert({id:uid,consent:c,updated_at:new Date().toISOString()}).then(()=>{},()=>{});}).catch(()=>{});
  return c;
}
function onConsentToggle(){
  const chk=document.getElementById('consentChk'),btn=document.getElementById('googleBtn'),row=document.getElementById('consentRow');
  const on=!!(chk&&chk.checked);
  if(btn){btn.disabled=!on;btn.style.opacity=on?'1':'.5';btn.style.pointerEvents=on?'':'none';}
  if(row)row.classList.remove('shake');
}
/* the sign-in button calls this — belt and braces even though it's disabled until ticked */
function consentedLogin(){
  const chk=document.getElementById('consentChk');
  if(!chk||!chk.checked){
    const row=document.getElementById('consentRow');
    if(row){row.classList.remove('shake');void row.offsetWidth;row.classList.add('shake');}
    note('Please tick the box to continue.','Almost there');
    return;
  }
  recordConsent();
  socialLogin('google');
}
async function socialLogin(provider){
  const sb=getSupaClient();
  if(!sb){note('Backend not connected.','Error');return;}
  if(!hasValidConsent()){note('Please give consent on the sign-in screen first.','Consent needed');go('login');return;}
  const redirectTo=window.location.origin+window.location.pathname;
  const{error}=await sb.auth.signInWithOAuth({provider,options:{redirectTo}});
  if(error)note(error.message,'Error');
}
/* ---- withdrawal + status screen (Menu → Data & privacy) ---- */
function renderDataPrivacy(){
  const box=document.getElementById('dataPrivacyBody');if(!box)return;
  const c=getConsent();
  const given=hasValidConsent();
  const when=c&&c.at?new Date(c.at).toLocaleString('en-IN'):'—';
  const plabels={account:'Creating & running your account',bookings_payments:'Bookings & payments',
    trek_safety:'Your safety on treks (incl. emergency contact)',service_updates:'Trip-related updates',
    app_improvement:'Improving the app'};
  const purposes=(c&&c.purposes||CONSENT_PURPOSES).map(p=>'<li>'+esc(plabels[p]||p)+'</li>').join('');
  box.innerHTML=
    '<div class="dp-card '+(given?'ok':'off')+'">'
      +'<div class="dp-status"><span class="msr">'+(given?'verified_user':'gpp_maybe')+'</span>'
      +'<div><b>'+(given?'Consent given':(c&&c.withdrawn?'Consent withdrawn':'No consent recorded'))+'</b>'
      +'<small>'+(given?('On '+esc(when)+' · version '+esc(c.version)):'You have not consented to data processing on this device.')+'</small></div></div>'
    +'</div>'
    +'<div class="dp-sec">What you consented to</div>'
    +'<div class="note2">Under the DPDP Act, 2023, Tripomonk uses your personal data (name, contact, profile, booking &amp; safety details) only for:</div>'
    +'<ul class="dp-list">'+purposes+'</ul>'
    +'<div class="dp-sec">Your rights</div>'
    +'<div class="note2">You can access, correct or erase your data, and withdraw consent at any time. Withdrawing does not affect processing already done, and some data may be kept where the law requires (e.g. booking/tax records).</div>'
    +'<button class="btn ghost" style="margin-top:14px" onclick="go(\'privacy\')"><span class="msr">description</span> Read the full Privacy Policy</button>'
    +(given
      ? '<button class="btn" style="margin-top:10px;background:#c0392b" onclick="withdrawConsent()"><span class="msr">block</span> Withdraw my consent</button>'
      : '<button class="btn" style="margin-top:10px" onclick="go(\'login\')"><span class="msr">login</span> Give consent &amp; sign in</button>')
    +'<div class="dp-sec">Grievances</div>'
    +'<div class="note2">Questions or complaints about your data: <b>grievance@tripomonk.com</b>. You may also complain to the Data Protection Board of India.</div>';
  hydrate(box);
}
async function withdrawConsent(){
  if(!(await askConfirm('Withdrawing your consent signs you out and stops further data processing on this device. Continue?','Withdraw consent')))return;
  const c=getConsent()||{version:CONSENT_VERSION};
  c.given=false;c.withdrawn=true;c.withdrawnAt=new Date().toISOString();
  try{localStorage.setItem('tmk_consent',JSON.stringify(c));}catch(e){}
  const sb=getSupaClient();
  try{const uid=sb?await authUid():null;if(sb&&uid)await sb.from('profiles').upsert({id:uid,consent:c,updated_at:new Date().toISOString()});}catch(e){}
  await note('Your consent has been withdrawn and you have been signed out.','Consent withdrawn');
  signOut();
}

function startJourney(){
  if(isLoggedIn()){go('home');return;}
  _loginReturn='home';
  go('login');
}

let _authMode='signin';
function authTab(mode){
  _authMode=mode;
  const si=document.getElementById('tabSignin');
  const su=document.getElementById('tabSignup');
  const nameRow=document.getElementById('signupName');
  const idIn=document.getElementById('emailInput');
  const idIcon=document.getElementById('emailIcon');
  const pw=document.getElementById('authPassword');
  const pwBtn=document.getElementById('pwBtn');
  const pwHint=document.getElementById('pwHint');
  const on=(el)=>{if(el){el.style.background='var(--accent)';el.style.color='#fff';}};
  const off=(el)=>{if(el){el.style.background='transparent';el.style.color='rgba(255,255,255,.75)';}};
  if(mode==='signup'){
    on(su);off(si);
    if(nameRow)nameRow.style.display='block';
    /* signup must use a real email (that's where the verify link goes) */
    if(idIn){idIn.placeholder='your@email.com';idIn.type='email';idIn.setAttribute('autocomplete','email');}
    if(idIcon)idIcon.textContent='mail';
    if(pw)pw.setAttribute('autocomplete','new-password');
    if(pwBtn)pwBtn.textContent='Create account';
    if(pwHint)pwHint.textContent='At least 6 characters. We’ll email you a link to verify.';
  }else{
    on(si);off(su);
    if(nameRow)nameRow.style.display='none';
    if(idIn){idIn.placeholder='Email or username';idIn.type='text';idIn.setAttribute('autocomplete','username');}
    if(idIcon)idIcon.textContent='alternate_email';
    if(pw)pw.setAttribute('autocomplete','current-password');
    if(pwBtn)pwBtn.textContent='Sign in';
    if(pwHint)pwHint.textContent='';
  }
}
function togglePw(){
  const p=document.getElementById('authPassword'),t=document.getElementById('pwToggle');
  if(!p)return;const show=p.type==='password';p.type=show?'text':'password';
  if(t)t.textContent=show?'visibility_off':'visibility';
}
/* reveal the email/password sign-in form on the login card */
function showPwLogin(){
  _authMode='signin';
  const f=document.getElementById('pwLoginForm'),b=document.getElementById('pwOpenBtn');
  if(f)f.style.display='';if(b)b.style.display='none';
  const e=document.getElementById('emailInput');if(e)setTimeout(()=>e.focus(),50);
}
/* same consent gate as Google sign-in, then run the existing (secure) password auth */
function pwLoginGated(){
  const chk=document.getElementById('consentChk');
  if(!chk||!chk.checked){
    const row=document.getElementById('consentRow');
    if(row){row.classList.remove('shake');void row.offsetWidth;row.classList.add('shake');}
    note('Please tick the box to continue.','Almost there');return;
  }
  recordConsent();_authMode='signin';passwordAuth();
}
/* set / change a password for the CURRENT signed-in account. Supabase Auth hashes and
   stores it — the app never sees or keeps the raw password. Lets the user then sign in
   with email + password on any device. */
async function setMyPassword(){
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in first, then set a password.','Sign in required');return;}
  const pw=await askCode('Set a password',{password:true,placeholder:'New password (min 8)'});
  if(pw==null)return;
  if(pw.length<8){await note('Use at least 8 characters.','Too short');return setMyPassword();}
  const pw2=await askCode('Confirm password',{password:true,placeholder:'Re-enter password'});
  if(pw2==null)return;
  if(pw!==pw2){await note('The two entries did not match.','Try again');return setMyPassword();}
  const{error}=await sb.auth.updateUser({password:pw});
  if(error){note(error.message,'Could not set password');return;}
  const email=(currentUser&&currentUser.email)||(typeof getUserEmail==='function'?getUserEmail():'')||'your email';
  note('Password set. You can now sign in with '+email+' and this password on any device. It is stored securely (hashed) by our sign-in provider — we never see it.','Password saved ✓');
}
/* email + password signup, or username/email + password login */
async function passwordAuth(){
  const id=(document.getElementById('emailInput').value||'').trim();
  const pass=(document.getElementById('authPassword').value||'');
  const sb=getSupaClient();
  if(!sb){note('Backend not connected.','Error');return;}
  const btn=document.getElementById('pwBtn');
  const busy=(t)=>{if(btn){btn.disabled=true;btn.textContent=t;}};
  const done=()=>{if(btn){btn.disabled=false;btn.textContent=_authMode==='signup'?'Create account':'Sign in';}};

  if(_authMode==='signup'){
    if(!id.includes('@')){note('Enter a valid email address to sign up.','Invalid email');return;}
    if(pass.length<6){note('Password must be at least 6 characters.','Weak password');return;}
    busy('Creating…');
    const{data,error}=await sb.auth.signUp({email:id,password:pass});
    done();
    if(error){note(error.message,'Could not sign up');return;}
    const n=(document.getElementById('authName').value||'').trim();if(n)saveUserName(n);
    /* Supabase emails a verification link. If confirmations are ON, there's no
       session yet; if OFF, the user is already signed in. Handle both. */
    if(data&&data.session){
      currentUser=data.session.user;await loadProfileFromServer();upsertProfile();
      note('Account created!','Welcome to Tripomonk').then(()=>{const r=_loginReturn;_loginReturn=null;go(r||lastTab||'home');setTimeout(maybeOnboard,500);});
    }else{
      note('Account created. Check '+id+' for a verification link, then sign in.','Verify your email')
        .then(()=>authTab('signin'));
    }
    return;
  }

  /* sign in */
  if(!id){note('Enter your email or username.','Missing details');return;}
  if(!pass){note('Enter your password.','Missing password');return;}
  busy('Signing in…');
  try{
    if(id.includes('@')){
      /* plain email login — no lookup, no enumeration risk */
      const{data,error}=await sb.auth.signInWithPassword({email:id,password:pass});
      if(error)throw error;
      await afterPasswordLogin(data.user);
    }else{
      /* username login — resolve + authenticate SERVER-SIDE so the browser
         never sees anyone's email. The edge function returns a session. */
      const res=await authByUsername(id,pass);
      if(res.error)throw new Error(res.error);
      if(!res.access_token)throw new Error('Login failed.');
      const{data,error}=await sb.auth.setSession({access_token:res.access_token,refresh_token:res.refresh_token});
      if(error)throw error;
      await afterPasswordLogin(data.user||(data.session&&data.session.user));
    }
  }catch(e){
    done();
    const m=(e&&e.message)||'Login failed.';
    note(/invalid login|credentials|not found/i.test(m)?'Wrong username/email or password.':m,'Could not sign in');
    return;
  }
  done();
}
async function afterPasswordLogin(user){
  if(user)currentUser=user;
  await loadProfileFromServer();upsertProfile();loadStaff();_myUid=null;ensureMsgSub();loadAiCfg().then(registerSupportInbox);
  logEvent('login');
  const r=_loginReturn;_loginReturn=null;
  go(r||lastTab||'home');
  setTimeout(maybeOnboard,500);
}
/* call the authlogin edge function (username -> email resolved server-side) */
async function authByUsername(username,password){
  try{
    const r=await fetch(SB.SUPABASE_URL+'/functions/v1/authlogin',{
      method:'POST',
      headers:{'Content-Type':'application/json',apikey:SB.SUPABASE_ANON_KEY,Authorization:'Bearer '+SB.SUPABASE_ANON_KEY},
      body:JSON.stringify({username:username,password:password})
    });
    return await r.json();
  }catch(e){return{error:'Could not reach the login service.'};}
}
/* fired when the user opens a reset link — collect a new password and set it */
async function promptNewPassword(){
  const pw=await askCode('Set a new password',{password:true,placeholder:'New password (min 6)'});
  if(pw==null)return;
  if(pw.length<6){note('Password must be at least 6 characters.','Too short').then(promptNewPassword);return;}
  const sb=getSupaClient();if(!sb)return;
  const{error}=await sb.auth.updateUser({password:pw});
  if(error){note(error.message,'Error');return;}
  try{history.replaceState(null,'',window.location.pathname);}catch(e){}
  note('Password updated. You are signed in.','Done').then(()=>go(lastTab||'home'));
}
async function forgotPassword(){
  const id=(document.getElementById('emailInput').value||'').trim();
  if(!id.includes('@')){note('Enter the email address for your account, then tap Forgot password.','Enter your email');return;}
  const sb=getSupaClient();if(!sb)return;
  const{error}=await sb.auth.resetPasswordForEmail(id,{redirectTo:window.location.origin+window.location.pathname});
  if(error){note(error.message,'Error');return;}
  note('Password reset link sent to '+id+'.','Check your email');
}

function otpBoxInput(el,idx){
  el.classList.toggle('filled',el.value.length>0);
  if(el.value.length>1){
    const digits=el.value.replace(/\D/g,'').slice(0,6).split('');
    const boxes=document.querySelectorAll('.otp-box');
    digits.forEach((d,i)=>{if(boxes[i]){boxes[i].value=d;boxes[i].classList.add('filled');}});
    const last=Math.min(digits.length,5);
    if(boxes[last])boxes[last].focus();
    return;
  }
  if(el.value&&idx<5){
    const next=document.querySelectorAll('.otp-box')[idx+1];
    if(next)next.focus();
  }
}

function otpBoxKey(e,idx){
  if(e.key==='Backspace'&&!e.target.value&&idx>0){
    const prev=document.querySelectorAll('.otp-box')[idx-1];
    if(prev){prev.value='';prev.classList.remove('filled');prev.focus();}
  }
}

function getOtpValue(){
  return Array.from(document.querySelectorAll('.otp-box')).map(b=>b.value).join('');
}

/* onboarding splash — masonry collage of colourful trek photos that stagger in
   with a blur-to-focus rise (vanilla port of the GSAP Masonry effect) */
function renderSplashCollage(){
  const box=document.getElementById('splashCollage');if(!box)return;
  const imgs=[...new Set(treks.map(t=>t.img).filter(Boolean))];
  if(!imgs.length)return;
  const heights=[150,210,168,238,186,160,222,178,196];   /* varied for the masonry look */
  const N=Math.max(9,Math.min(12,imgs.length*2));
  const perCol=Math.ceil(N/3);                            /* CSS columns fill top→bottom */
  let html='';
  for(let i=0;i<N;i++){
    const src=imgs[i%imgs.length].replace(/w=\d+/,'w=420');
    const h=heights[i%heights.length];
    /* bottom-up diagonal wave: lower rows rise first, then up + slightly rightward */
    const col=Math.floor(i/perCol),row=i%perCol;
    const delay=Math.min(0.42,(((perCol-1-row)*0.9)+col*0.7)*0.06).toFixed(3);
    html+=`<div class="sm-tile" style="animation-delay:${delay}s"><img src="${esc(src)}" alt="" loading="eager" style="height:${h}px"/></div>`;
  }
  box.innerHTML=html;
}
function initLoginBg(){
  const bg=document.getElementById('loginBg');
  const obg=document.getElementById('otpBg');
  const img=treks&&treks[1]?treks[1].img:(treks&&treks[0]?treks[0].img:'');
  if(img){if(bg)bg.style.backgroundImage=`url('${img}')`;if(obg)obg.style.backgroundImage=`url('${img}')`;}
}

/* set the OTP screen's heading/icon for whichever channel we used */
function setOtpScreen(channel,dest){
  const h=document.querySelector('#otp h2');
  const sub=document.querySelector('#otp p');
  const icon=document.querySelector('#otp .msr');
  if(channel==='sms'){
    if(h)h.textContent='Check your phone';
    if(icon)icon.textContent='sms';
  }else{
    if(h)h.textContent='Check your email';
    if(icon)icon.textContent='mark_email_read';
  }
  if(sub)sub.innerHTML='We sent a 6-digit code to<br><b id="otpPhone" style="color:#fff">'+esc(dest)+'</b>';
}
/* Phone + SMS OTP — the fast, India-first login.
   Needs an SMS provider set up in Supabase (Auth → Providers → Phone). */
async function sendPhoneOtp(){
  const cc=((document.getElementById('ccInput')||{}).value||'+91').trim();
  let num=((document.getElementById('phoneInput')||{}).value||'').replace(/\D/g,'');
  if(!num||num.length<7){note('Enter a valid phone number.','Invalid number');return;}
  /* E.164: +<country><number>, digits only */
  const phone=(cc.startsWith('+')?cc:'+'+cc).replace(/[^\d+]/g,'')+num;
  _loginPhone=phone;_loginChannel='sms';
  const sb=getSupaClient();if(!sb){note('Backend not connected.','Error');return;}
  const btn=document.getElementById('sendPhoneBtn');if(btn){btn.textContent='Sending…';btn.disabled=true;}
  const{error}=await sb.auth.signInWithOtp({phone});
  if(btn){btn.textContent='Continue with Phone →';btn.disabled=false;}
  if(error){
    /* the usual cause is no SMS provider configured yet */
    note(/provider|not enabled|unsupported/i.test(error.message)
      ? 'Phone login isn’t switched on yet. Use email or Google for now.'
      : error.message,'Could not send OTP');
    return;
  }
  if(_authMode==='signup'){const n=(document.getElementById('authName').value||'').trim();if(n)saveUserName(n);}
  setOtpScreen('sms',phone);
  document.querySelectorAll('.otp-box').forEach(b=>{b.value='';b.classList.remove('filled');});
  go('otp');
  setTimeout(()=>{const b=document.querySelector('.otp-box');if(b)b.focus();},350);
}
async function sendOtp(){
  _loginChannel='email';
  const email=(document.getElementById('emailInput').value||'').trim();
  if(!email||!email.includes('@')){note('Enter a valid email address.','Invalid email');return;}
  _loginEmail=email;
  const sb=getSupaClient();
  if(!sb){note('Backend not connected.','Error');return;}
  const btn=document.getElementById('sendOtpBtn');if(btn){btn.textContent='Sending…';btn.disabled=true;}
  const{error}=await sb.auth.signInWithOtp({email,options:{shouldCreateUser:true}});
  if(btn){btn.textContent='Continue with Email →';btn.disabled=false;}
  if(error){note(error.message,'Error');return;}
  /* save name early if signup mode */
  if(_authMode==='signup'){const n=(document.getElementById('authName').value||'').trim();if(n)saveUserName(n);}
  setOtpScreen('email',email);
  /* clear otp boxes */
  document.querySelectorAll('.otp-box').forEach(b=>{b.value='';b.classList.remove('filled');});
  go('otp');
  setTimeout(()=>{const b=document.querySelector('.otp-box');if(b)b.focus();},350);
}
async function resendOtp(){
  const sb=getSupaClient();if(!sb)return;
  if(_loginChannel==='sms'){
    if(!_loginPhone)return;
    await sb.auth.signInWithOtp({phone:_loginPhone});
    note('OTP resent to '+_loginPhone,'Sent');
  }else{
    if(!_loginEmail)return;
    await sb.auth.signInWithOtp({email:_loginEmail,options:{shouldCreateUser:true}});
    note('OTP resent to '+_loginEmail,'Sent');
  }
}
async function verifyOtp(){
  const token=getOtpValue().trim();
  if(token.length<6){note('Enter the 6-digit OTP.','Invalid OTP');return;}
  const sb=getSupaClient();if(!sb)return;
  const btn=document.getElementById('verifyOtpBtn');if(btn){btn.textContent='Verifying…';btn.disabled=true;}
  /* verify against the channel the code was sent on */
  const args=_loginChannel==='sms'?{phone:_loginPhone,token,type:'sms'}:{email:_loginEmail,token,type:'email'};
  const{data,error}=await sb.auth.verifyOtp(args);
  if(btn){btn.textContent='Verify & Continue';btn.disabled=false;}
  if(error){note('Incorrect OTP. Please try again.','Wrong OTP');return;}
  currentUser=data.user;
  await loadProfileFromServer();   /* pull back name/photo/follows before writing anything */
  upsertProfile();loadStaff();
  const ret=_loginReturn;_loginReturn=null;
  go(ret||lastTab||'home');
  setTimeout(maybeOnboard,600);
}
async function signOut(){
  const sb=getSupaClient();if(sb)await sb.auth.signOut();
  currentUser=null;_profileLoadedFor=null;_myUid=null;stopMsgSub();
  clearLocalIdentity();
  try{['tmk_contact','tmk_uid','tmk_nav'].forEach(k=>localStorage.removeItem(k));}catch(e){}
  hist=[];_loginReturn='home';
  go('login');
  note('Signed out successfully.','Done');
}
function getUserEmail(){return currentUser?currentUser.email||'':''}
function getSavedName(){try{return localStorage.getItem('tmk_uname')||'';}catch(e){return'';}}
function saveUserName(n){try{if(n)localStorage.setItem('tmk_uname',n);}catch(e){}}
/* Seed a new OAuth user's name & photo from their Google account — but ONLY when
   they have none yet. Without this, a fresh Google sign-in is stuck showing the
   default "Explorer" name and an "E" avatar until they edit their profile by hand.
   Never overrides a name/photo the user chose themselves. Returns true if it set one. */
function seedIdentityFromAuth(){
  const u=(typeof currentUser!=='undefined')?currentUser:null;if(!u)return false;
  const m=u.user_metadata||{};let changed=false;
  if(!getSavedName()){
    const nm=String(m.full_name||m.name||m.user_name||'').trim();
    if(nm){try{localStorage.setItem('tmk_uname',nm);}catch(e){}changed=true;}
  }
  if(!getSavedPhoto()){
    const ph=String(m.avatar_url||m.picture||'').trim();
    if(/^https?:\/\//i.test(ph)){try{localStorage.setItem('tmk_uphoto',ph);}catch(e){}changed=true;}
  }
  return changed;
}
function getSavedMobile(){try{return localStorage.getItem('tmk_umobile')||'';}catch(e){return'';}}
function getSavedPhoto(){try{return localStorage.getItem('tmk_uphoto')||'';}catch(e){return'';}}
/* paint an avatar tile safely: show the photo, but ALWAYS fall back to the
   person's initial when there's no photo, a junk value ("null"), or the image
   fails to load (broken / expired storage URL). Never leaves a blank tile —
   this was the "profile picture invisible" bug in light mode. */
/* set the avatar's letter/clear its text WITHOUT dropping a .pav-cam badge child
   (the tappable "change photo" affordance on the profile avatar) */
function setAvKeepCam(el,txt){const cam=el.querySelector('.pav-cam');el.textContent=txt;if(cam)el.appendChild(cam);}
function editAvatarTap(){if(!isLoggedIn()){go('login');return;}const i=document.getElementById('profilePhoto');if(i)i.click();}
function setAvatarEl(el,name,photo){
  if(!el)return;
  const letter=(String(name||'E').trim()[0]||'E').toUpperCase();
  setAvKeepCam(el,letter);el.style.backgroundImage='';el.classList.remove('has-photo');
  if(!photo||!/^(data:image\/|https?:\/\/|blob:)/i.test(photo))return;
  const im=new Image();
  im.onload=()=>{
    /* set size/position inline too — the light-theme CSS uses a `background`
       shorthand that would otherwise reset background-size to auto, cropping the
       photo to its top-left corner (looked like the image "not showing"). */
    el.style.backgroundImage="url('"+photo.replace(/'/g,'%27')+"')";
    el.style.backgroundSize='cover';el.style.backgroundPosition='center';
    setAvKeepCam(el,'');el.classList.add('has-photo');
  };
  im.onerror=()=>{el.style.backgroundImage='';setAvKeepCam(el,letter);};
  im.src=photo;
}
function getSavedUsername(){try{return localStorage.getItem('tmk_uhandle')||'';}catch(e){return'';}}

/* ---------- username: pick, check, keep ---------- */
const USERNAME_RESERVED=['admin','tripomonk','support','help','root','staff','team','official','captain','moderator','mod','api','www'];
/* returns an error string, or '' when the shape is valid */
function usernameError(u){
  if(!u)return 'Pick a username so trekkers can find you.';
  if(u.length<3)return 'Too short — at least 3 characters.';
  if(u.length>20)return 'Too long — 20 characters max.';
  if(!/^[a-z0-9._]+$/.test(u))return 'Only lowercase letters, numbers, dots and underscores.';
  if(/^[._]|[._]$/.test(u))return 'Cannot start or end with a dot or underscore.';
  if(/[._]{2,}/.test(u))return 'No two dots or underscores in a row.';
  if(USERNAME_RESERVED.includes(u))return 'That username is reserved.';
  return '';
}
/* is it free? checks every profile except your own */
async function usernameAvailable(u){
  const sb=getSupaClient();if(!sb)return{ok:false,err:'Cannot reach the server right now.'};
  try{
    let q=sb.from('profiles').select('id').ilike('username',u).limit(1);
    if(currentUser)q=q.neq('id',currentUser.id);
    const{data,error}=await q;
    if(error)return{ok:false,err:'Could not check that username.'};
    return{ok:!(data&&data.length)};
  }catch(e){return{ok:false,err:'Could not check that username.'};}
}
let _unameTimer=null,_unameSeq=0,_unameOk=false;
function setUnameMsg(txt,cls){
  const m=document.getElementById('epUserMsg');if(!m)return;
  m.textContent=txt;m.className='uname-msg'+(cls?' '+cls:'');
}
function unameSpin(on){const s=document.getElementById('epUserSpin');if(s)s.classList.toggle('on',!!on);}
function onUsernameInput(v){
  const inp=document.getElementById('epUser');
  /* usernames are always lowercase — normalise as they type */
  const u=(v||'').toLowerCase().replace(/[^a-z0-9._]/g,'');
  if(inp&&inp.value!==u)inp.value=u;
  _unameOk=false;
  clearTimeout(_unameTimer);unameSpin(false);
  if(u===getSavedUsername()&&u){_unameOk=true;setUnameMsg('This is your current username.','ok');return;}
  const err=usernameError(u);
  if(err){setUnameMsg(err,u?'bad':'');return;}
  setUnameMsg('Checking availability…');
  unameSpin(true);
  const seq=++_unameSeq;
  _unameTimer=setTimeout(async()=>{
    const res=await usernameAvailable(u);
    if(seq!==_unameSeq)return;            /* a newer keystroke won */
    unameSpin(false);
    if(res.err){setUnameMsg(res.err,'bad');return;}
    _unameOk=res.ok;
    setUnameMsg(res.ok?'@'+u+' is available 🎉':'@'+u+' is already taken.',res.ok?'ok':'bad');
  },450);
}

/* social links a user can add to their profile — [key, label, brand colour] */
const SOCIALS=[['instagram','Instagram','#E1306C'],['facebook','Facebook','#1877F2'],['youtube','YouTube','#FF0000'],
  ['linkedin','LinkedIn','#0A66C2'],['x','X (Twitter)','#111827'],['reddit','Reddit','#FF4500'],['website','Website','#2f6bff']];
function getSavedSocials(){try{return JSON.parse(localStorage.getItem('tmk_socials')||'{}')||{};}catch(e){return{};}}
/* brand glyphs for the social icon chips (Material Symbols + brand letters) */
const SOC_ICON={instagram:'<span class="msr">photo_camera</span>',facebook:'<b>f</b>',youtube:'<span class="msr">smart_display</span>',linkedin:'<b>in</b>',x:'<b>X</b>',reddit:'<span class="msr">forum</span>',website:'<span class="msr">language</span>'};
function renderSocialChips(){
  const sc=document.getElementById('epSocials');if(!sc)return;const soc=getSavedSocials();
  sc.innerHTML='<div class="soc-chips">'+SOCIALS.map(s=>`<button type="button" class="soc-chip${soc[s[0]]?' on':''}" id="socchip_${s[0]}" style="--sc:${s[2]}" title="${esc(s[1])}" onclick="toggleSoc('${s[0]}')">${SOC_ICON[s[0]]||'<span class="msr">link</span>'}</button>`).join('')+'</div>'
    +'<div id="socInputs">'+SOCIALS.map(s=>`<div class="soc-inp-row" id="socrow_${s[0]}" style="display:${soc[s[0]]?'flex':'none'}"><span class="soc-dot" style="background:${s[2]}"></span><input id="epSoc_${s[0]}" placeholder="${esc(s[1])} — handle or link" autocapitalize="none" autocorrect="off" spellcheck="false" value="${esc(soc[s[0]]||'')}" oninput="markSocChip('${s[0]}',this.value)"/></div>`).join('')+'</div>';
}
function toggleSoc(key){const row=document.getElementById('socrow_'+key);if(!row)return;const show=(row.style.display==='none'||!row.style.display);row.style.display=show?'flex':'none';if(show){const inp=document.getElementById('epSoc_'+key);if(inp)inp.focus();}}
function markSocChip(key,val){const c=document.getElementById('socchip_'+key);if(c)c.classList.toggle('on',!!String(val).trim());}
/* gender + category (stored locally + best-effort to profiles.gender / profiles.category) */
const GENDERS=['Male','Female','Other','Prefer not to say'];
const CATEGORIES=['Traveller','Trekker','Backpacker','Solo Traveller','Mountaineer','Hiker','Camper','Cyclist','Road Tripper','Explorer','Creator','Blogger','Vlogger','Influencer','Photographer','Videographer','Host','Trip Organiser','Guide','Trek Leader','Student','Nature Lover','Wildlife Enthusiast','Adventure Pro'];
function getSavedGender(){try{return localStorage.getItem('tmk_gender')||'';}catch(e){return'';}}
function getSavedCategory(){try{return localStorage.getItem('tmk_category')||'';}catch(e){return'';}}
function getSavedBio(){try{return localStorage.getItem('tmk_bio')||'';}catch(e){return'';}}
function renderSelect(id,icon,ph,opts,cur,fn){const el=document.getElementById(id);if(!el)return;
  el.innerHTML='<div class="inp sel-inp"><span class="msr" style="font-size:20px;color:var(--muted)">'+icon+'</span><select onchange="'+fn+'(this.value)"><option value="">'+esc(ph)+'</option>'+opts.map(o=>`<option ${o===cur?'selected':''}>${esc(o)}</option>`).join('')+'</select><span class="msr sel-caret">expand_more</span></div>';}
function pickGender(v){try{localStorage.setItem('tmk_gender',v);}catch(e){}}
function pickCategory(v){try{localStorage.setItem('tmk_category',v);}catch(e){}}
/* turn a handle or partial into a full https link */
function socialUrl(key,val){
  val=String(val||'').trim();if(!val)return '';
  if(/^https?:\/\//i.test(val))return val;
  const h=val.replace(/^@/,'').replace(/^u\//i,'');
  switch(key){
    case 'instagram':return 'https://instagram.com/'+h;
    case 'facebook': return 'https://facebook.com/'+h;
    case 'youtube':  return 'https://youtube.com/'+(val[0]==='@'?val:'@'+h);
    case 'linkedin': return 'https://linkedin.com/in/'+h;
    case 'x':        return 'https://x.com/'+h;
    case 'reddit':   return 'https://reddit.com/user/'+h;
    default:         return 'https://'+val.replace(/^\/+/,'');
  }
}

/* ============================================================
   PHONE — country-code selector (separate from the number) +
   automatic country-code / city fill from the visitor's location.
   ============================================================ */
/* [dial, iso, flag, name] — flag emojis show as ISO letters on Windows, still clear */
const COUNTRY_CODES=[
  ['+91','IN','🇮🇳','India'],['+977','NP','🇳🇵','Nepal'],['+975','BT','🇧🇹','Bhutan'],
  ['+94','LK','🇱🇰','Sri Lanka'],['+880','BD','🇧🇩','Bangladesh'],['+92','PK','🇵🇰','Pakistan'],
  ['+1','US','🇺🇸','USA / Canada'],['+44','GB','🇬🇧','UK'],['+61','AU','🇦🇺','Australia'],
  ['+64','NZ','🇳🇿','New Zealand'],['+971','AE','🇦🇪','UAE'],['+966','SA','🇸🇦','Saudi Arabia'],
  ['+974','QA','🇶🇦','Qatar'],['+965','KW','🇰🇼','Kuwait'],['+968','OM','🇴🇲','Oman'],
  ['+65','SG','🇸🇬','Singapore'],['+60','MY','🇲🇾','Malaysia'],['+66','TH','🇹🇭','Thailand'],
  ['+62','ID','🇮🇩','Indonesia'],['+63','PH','🇵🇭','Philippines'],['+84','VN','🇻🇳','Vietnam'],
  ['+81','JP','🇯🇵','Japan'],['+82','KR','🇰🇷','South Korea'],['+86','CN','🇨🇳','China'],
  ['+852','HK','🇭🇰','Hong Kong'],['+49','DE','🇩🇪','Germany'],['+33','FR','🇫🇷','France'],
  ['+39','IT','🇮🇹','Italy'],['+34','ES','🇪🇸','Spain'],['+31','NL','🇳🇱','Netherlands'],
  ['+41','CH','🇨🇭','Switzerland'],['+46','SE','🇸🇪','Sweden'],['+47','NO','🇳🇴','Norway'],
  ['+353','IE','🇮🇪','Ireland'],['+351','PT','🇵🇹','Portugal'],['+7','RU','🇷🇺','Russia'],
  ['+90','TR','🇹🇷','Turkey'],['+972','IL','🇮🇱','Israel'],['+27','ZA','🇿🇦','South Africa'],
  ['+254','KE','🇰🇪','Kenya'],['+20','EG','🇪🇬','Egypt'],['+55','BR','🇧🇷','Brazil'],
  ['+52','MX','🇲🇽','Mexico'],['+54','AR','🇦🇷','Argentina']
];
function ccSelect(id,dial){
  dial=dial||'+91';
  let opts=COUNTRY_CODES;
  if(!opts.some(c=>c[0]===dial))opts=[[dial,'','🏳️',dial]].concat(opts);   /* keep an unknown saved code selectable */
  return '<select id="'+id+'" class="cc-sel" aria-label="Country code" onchange="this.dataset.userset=1">'
    +opts.map(c=>'<option value="'+c[0]+'"'+(c[0]===dial?' selected':'')+'>'+c[2]+' '+c[0]+'</option>').join('')
    +'</select>';
}
/* split a stored number ("+91 98765 43210") into its dial code + local part */
function splitPhone(full){
  full=String(full||'').trim();
  if(!full)return{dial:'+91',num:''};
  if(full[0]==='+'){
    const codes=COUNTRY_CODES.map(c=>c[0]).sort((a,b)=>b.length-a.length);   /* longest match first */
    for(const code of codes){if(full.indexOf(code)===0)return{dial:code,num:full.slice(code.length).replace(/^[\s-]+/,'').trim()};}
    const m=full.match(/^(\+\d{1,4})[\s-]*(.*)$/);if(m)return{dial:m[1],num:m[2].trim()};
  }
  return{dial:'+91',num:full.replace(/^0+/,'')};
}
function joinPhone(dial,num){num=String(num||'').replace(/\D/g,'');return num?((dial||'+91')+' '+num):'';}
/* markup for a country-code select + number input as one field. id is the NUMBER
   input id; the select is id+'_cc'. Read the combined value with readTel(id). */
function telInput(id,fullValue,opts){
  opts=opts||{};const p=splitPhone(fullValue);
  return '<div class="inp tel-inp">'+ccSelect(id+'_cc',p.dial)
    +'<input id="'+id+'" type="tel" inputmode="numeric" autocomplete="tel-national" value="'+esc(p.num)+'" placeholder="'+esc(opts.ph||'98765 43210')+'"'+(opts.extra||'')+'/></div>';
}
function readTel(id){
  const sel=document.getElementById(id+'_cc'),inp=document.getElementById(id);
  return joinPhone(sel?sel.value:'+91',inp?inp.value:'');
}
/* best-effort IP geolocation — no permission prompt, cached 7 days, falls back to India */
async function detectLocale(){
  try{const c=JSON.parse(localStorage.getItem('tmk_geo')||'null');if(c&&c.dial&&c.t&&Date.now()-c.t<6048e5)return c;}catch(e){}
  const fb={dial:'+91',iso:'IN',city:'',region:'',t:Date.now()};
  try{
    const ctrl=new AbortController();const to=setTimeout(()=>ctrl.abort(),3500);
    const r=await fetch('https://ipwho.is/',{signal:ctrl.signal});clearTimeout(to);
    const d=await r.json();
    if(d&&d.success!==false){
      const g={dial:d.calling_code?('+'+String(d.calling_code).replace(/^\+/,'')):'+91',
               iso:d.country_code||'IN',city:d.city||'',region:d.region||'',t:Date.now()};
      try{localStorage.setItem('tmk_geo',JSON.stringify(g));}catch(e){}
      return g;
    }
  }catch(e){}
  return fb;
}
/* fill each country-code select whose number is still empty, and each empty city
   input, from the detected location. Never overrides what the user already typed. */
async function applyGeoAutofill(telIds,cityIds){
  let g;try{g=await detectLocale();}catch(e){return;}
  if(!g)return;
  (telIds||[]).forEach(id=>{
    const sel=document.getElementById(id+'_cc'),inp=document.getElementById(id);
    if(sel&&inp&&!inp.value.trim()&&!sel.dataset.userset&&g.dial&&COUNTRY_CODES.some(c=>c[0]===g.dial))sel.value=g.dial;
  });
  (cityIds||[]).forEach(id=>{const el=document.getElementById(id);if(el&&!el.value.trim()&&g.city)el.value=g.city;});
}

/* tappable brand chips for a socials object (used on own + others' profiles) */
function socialLinks(soc){
  soc=soc||{};
  const items=SOCIALS.filter(s=>soc[s[0]]&&String(soc[s[0]]).trim());
  if(!items.length)return '';
  return '<div class="socrow">'+items.map(s=>
    '<a class="socchip" style="--sc:'+s[2]+'" href="'+esc(socialUrl(s[0],soc[s[0]]))+'" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">'+esc(s[1].split(' ')[0])+'</a>'
  ).join('')+'</div>';
}
/* ---- preset trekker avatars (choose instead of uploading a photo) ---- */
const AVATARS=Array.from({length:12},(_,i)=>'avatars/avatar-'+(i+1)+'.jpg');
function avatarUrl(n){return location.origin+'/avatars/avatar-'+n+'.jpg';}
function renderAvatarGrid(){
  const ag=document.getElementById('avatarSheetGrid');if(!ag)return;
  const cur=getSavedPhoto();
  ag.innerHTML=AVATARS.map((rel,i)=>{const on=cur&&(cur===avatarUrl(i+1)||cur.endsWith(rel));return `<img src="${rel}" alt="Trekker avatar ${i+1}" loading="lazy" class="${on?'on':''}" onclick="pickAvatar(${i+1})"/>`;}).join('');
}
function openAvatarSheet(){renderAvatarGrid();const s=document.getElementById('avatarSheet');if(s)s.classList.add('show');}
function closeAvatarSheet(){const s=document.getElementById('avatarSheet');if(s)s.classList.remove('show');}
function pickAvatar(n){
  const full=avatarUrl(n);
  try{localStorage.setItem('tmk_uphoto',full);localStorage.removeItem('tmk_uphoto_src');}catch(e){}
  const av=document.getElementById('epAv');
  if(av){av.style.backgroundImage=`url('${full}')`;av.style.backgroundSize='cover';av.style.backgroundPosition='center';av.textContent='';
    const badge=document.createElement('span');badge.style.cssText='position:absolute;bottom:0;right:0;width:26px;height:26px;border-radius:50%;background:var(--accent);display:grid;place-items:center';badge.innerHTML='<span class="msr" style="font-size:14px;color:#fff">photo_camera</span>';av.appendChild(badge);}
  closeAvatarSheet();
  if(typeof toast==='function')toast('Avatar selected — tap Save Changes to keep it');
}
function renderEditProfile(){
  const name=getSavedName();const mobile=getSavedMobile();const email=getUserEmail()||'';const photo=getSavedPhoto();
  /* social links (icon chips + tap-to-fill), gender + category */
  renderSocialChips();
  renderSelect('epGender','wc','Select gender',GENDERS,getSavedGender(),'pickGender');
  renderSelect('epCategory','category','Choose your category',CATEGORIES,getSavedCategory(),'pickCategory');
  const bioEl=document.getElementById('epBio');if(bioEl)bioEl.value=getSavedBio();
  const inp=id=>document.getElementById(id);
  if(inp('epName'))inp('epName').value=name;
  /* mobile = country-code selector + number; auto-fill the code from the visitor's location */
  const mw=inp('epMobileWrap');
  if(mw){mw.innerHTML=telInput('epMobile',mobile);applyGeoAutofill(['epMobile'],[]);}
  if(inp('epEmail'))inp('epEmail').value=email;
  const uname=getSavedUsername();
  if(inp('epUser')){
    inp('epUser').value=uname;
    _unameOk=!!uname;unameSpin(false);
    setUnameMsg(uname?'This is your current username.':'3–20 characters · letters, numbers, dots and underscores',uname?'ok':'');
  }
  const av=document.getElementById('epAv');
  if(av){
    if(photo){av.style.backgroundImage=`url('${photo}')`;av.style.backgroundSize='cover';av.style.backgroundPosition='center';av.textContent='';}
    else{av.style.backgroundImage='';av.textContent=(name?name[0]:'E').toUpperCase();}
    /* re-add camera badge */
    const badge=document.createElement('span');
    badge.style.cssText='position:absolute;bottom:0;right:0;width:26px;height:26px;border-radius:50%;background:var(--accent);display:grid;place-items:center';
    badge.innerHTML='<span class="msr" style="font-size:14px;color:#fff">photo_camera</span>';
    av.appendChild(badge);
  }
  const pa=document.getElementById('epPhotoActions');
  if(pa){
    pa.innerHTML='<button type="button" class="photo-link" onclick="openAvatarSheet()"><span class="msr" style="font-size:14px">face</span> Choose an avatar</button>'
      +'<span class="photo-sep">·</span><button type="button" class="photo-link" onclick="document.getElementById(\'epPhoto\').click()"><span class="msr" style="font-size:14px">add_a_photo</span> Upload photo</button>'
      +(photo?'<span class="photo-sep">·</span><button type="button" class="photo-link" onclick="reCropPhoto()"><span class="msr" style="font-size:14px">crop_rotate</span> Reposition</button>':'');
  }
  renderAvatarGrid();
}

/* ---------- profile photo: crop / zoom / reposition before saving ---------- */
let _crop=null;
function epPickPhoto(input){
  const file=input.files[0];if(!file)return;
  if(!/^image\//.test(file.type)){note('Please choose an image file.','Not an image');input.value='';return;}
  const reader=new FileReader();
  reader.onload=e=>openCropper(e.target.result);
  reader.onerror=()=>note('Could not read that file.','Error');
  reader.readAsDataURL(file);
  input.value='';   /* so picking the same file again still fires change */
}
/* the re-editable original (downscaled) kept from the last crop */
function getSavedPhotoSrc(){try{return localStorage.getItem('tmk_uphoto_src')||'';}catch(e){return'';}}
/* shrink an image to fit within `max` px on its longest side, as a JPEG data URL */
function downscaleToDataURL(img,max){
  const w=img.naturalWidth||img.width,h=img.naturalHeight||img.height;if(!w||!h)return'';
  const s=Math.min(1,max/Math.max(w,h));
  const c=document.createElement('canvas');c.width=Math.max(1,Math.round(w*s));c.height=Math.max(1,Math.round(h*s));
  c.getContext('2d').drawImage(img,0,0,c.width,c.height);
  try{return c.toDataURL('image/jpeg',.85);}catch(e){return'';}
}
/* re-open the cropper on the photo the user already saved, so they can
   re-position / resize it without picking the file again. Falls back to the
   file picker when there's no photo yet. */
function reCropPhoto(){
  const src=getSavedPhotoSrc()||getSavedPhoto();
  if(src){openCropper(src);return;}
  const inp=document.getElementById('epPhoto')||document.getElementById('hpPhoto');
  if(inp)inp.click();
}
function drawCrop(){
  if(!_crop)return;
  const{ctx,img,S,scale,x,y}=_crop;
  ctx.clearRect(0,0,S,S);
  ctx.drawImage(img,x,y,img.width*scale,img.height*scale);
  /* mirror the crop window into the live preview canvases at avatar size */
  (_crop.previews||[]).forEach(p=>{
    const k=p.P/S;
    p.pctx.clearRect(0,0,p.P,p.P);
    p.pctx.drawImage(img,x*k,y*k,img.width*scale*k,img.height*scale*k);
  });
}
/* keep the photo covering the crop window — no empty gaps at the edges */
function clampCrop(){
  const{img,S,scale}=_crop;
  const w=img.width*scale,h=img.height*scale;
  _crop.x=Math.min(0,Math.max(S-w,_crop.x));
  _crop.y=Math.min(0,Math.max(S-h,_crop.y));
}
function setCropScale(mult,ox,oy){
  const c=_crop;const old=c.scale;
  c.scale=c.minScale*mult;
  /* zoom about a focal point so it doesn't drift */
  const fx=(ox==null?c.S/2:ox),fy=(oy==null?c.S/2:oy);
  const k=c.scale/old;
  c.x=fx-(fx-c.x)*k;c.y=fy-(fy-c.y)*k;
  clampCrop();drawCrop();
}
function openCropper(src){
  const m=document.getElementById('cropModal'),cv=document.getElementById('cropCanvas'),
        stage=document.getElementById('cropStage'),zoom=document.getElementById('cropZoom'),
        ok=document.getElementById('cropOk'),cancel=document.getElementById('cropCancel');
  if(!m||!cv)return;
  const img=new Image();
  img.onerror=()=>note('Could not read that image.','Error');
  img.onload=()=>{
    m.classList.add('show');
    /* measure after the modal is visible, or the stage has no size yet */
    const S=Math.round(stage.getBoundingClientRect().width)||300;
    const dpr=Math.min(window.devicePixelRatio||1,3);
    cv.width=S*dpr;cv.height=S*dpr;
    const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
    const minScale=Math.max(S/img.width,S/img.height);   /* cover the window */
    _crop={img,S,ctx,minScale,scale:minScale,x:0,y:0};
    _crop.x=(S-img.width*minScale)/2;_crop.y=(S-img.height*minScale)/2;
    /* wire up the live preview canvases (large + small) */
    _crop.previews=[['cropPreview',128],['cropPreviewSm',76]].map(([id,P])=>{
      const c=document.getElementById(id);if(!c)return null;
      c.width=P;c.height=P;return{pctx:c.getContext('2d'),P};
    }).filter(Boolean);
    zoom.value=1;drawCrop();

    /* drag to reposition + pinch to zoom */
    const pts=new Map();let pinch0=0,scale0=1;
    const flag=on=>stage.classList.toggle('adjusting',on);
    stage.onpointerdown=e=>{stage.setPointerCapture(e.pointerId);flag(true);pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(pts.size===2){const[a,b]=[...pts.values()];pinch0=Math.hypot(a.x-b.x,a.y-b.y);scale0=+zoom.value;}};
    stage.onpointermove=e=>{
      if(!pts.has(e.pointerId))return;
      const prev=pts.get(e.pointerId);
      const cur={x:e.clientX,y:e.clientY};
      pts.set(e.pointerId,cur);
      if(pts.size===2){
        const[a,b]=[...pts.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(pinch0>0){
          const mult=Math.min(4,Math.max(1,scale0*(d/pinch0)));
          zoom.value=mult;
          const r=stage.getBoundingClientRect();
          setCropScale(mult,(a.x+b.x)/2-r.left,(a.y+b.y)/2-r.top);
        }
        return;
      }
      _crop.x+=cur.x-prev.x;_crop.y+=cur.y-prev.y;
      clampCrop();drawCrop();
    };
    const end=e=>{pts.delete(e.pointerId);if(pts.size<2)pinch0=0;if(pts.size===0)flag(false);};
    stage.onpointerup=end;stage.onpointercancel=end;
    let gridT=0;
    zoom.oninput=()=>{setCropScale(+zoom.value);flag(true);clearTimeout(gridT);gridT=setTimeout(()=>flag(false),450);};
  };
  img.src=src;

  function close(){
    m.classList.remove('show');stage.classList.remove('adjusting');
    stage.onpointerdown=stage.onpointermove=stage.onpointerup=stage.onpointercancel=null;
    zoom.oninput=null;ok.onclick=cancel.onclick=m.onclick=null;_crop=null;
  }
  cancel.onclick=close;
  m.onclick=e=>{if(e.target===m)close();};
  ok.onclick=async()=>{
    if(!_crop){close();return;}
    /* render the visible window to a fixed 512px square — small enough to store & sync */
    const out=document.createElement('canvas');out.width=512;out.height=512;
    const octx=out.getContext('2d');
    const k=512/_crop.S;
    octx.drawImage(_crop.img,_crop.x*k,_crop.y*k,_crop.img.width*_crop.scale*k,_crop.img.height*_crop.scale*k);
    let dataUrl='';
    try{dataUrl=out.toDataURL('image/jpeg',.86);}catch(e){note('Could not process that image.','Error');return;}
    /* keep a downscaled copy of the original so the user can re-crop / resize later
       without re-uploading. Capture it before close() nulls _crop. Best-effort. */
    let srcCopy='';try{srcCopy=downscaleToDataURL(_crop.img,1280);}catch(err){}
    const blob=await new Promise(res=>{try{out.toBlob(res,'image/jpeg',.86);}catch(e){res(null);}});
    close();
    /* show the crop instantly from the data URL … */
    try{localStorage.setItem('tmk_uphoto',dataUrl);}catch(err){}
    try{if(srcCopy)localStorage.setItem('tmk_uphoto_src',srcCopy);}catch(err){}
    const repaint=()=>{renderEditProfile();if(cur==='profile')renderProfile();if(cur==='hostProfile')renderHostProfile();if(cur==='hostDash')renderHostDash();};
    repaint();
    /* … then upload to Storage and swap in the lightweight URL (keeps profiles.photo tiny
       and fast to sync across devices — base64 is only a local fallback if the upload fails) */
    const url=blob?await uploadToStorage(blob,'avatars'):null;
    if(url){try{localStorage.setItem('tmk_uphoto',url);}catch(e){}repaint();}
    upsertProfile();          /* writes the URL (or base64 fallback) to profiles.photo */
  };
}

async function saveProfile(){
  const name=(document.getElementById('epName').value||'').trim();
  const mobile=readTel('epMobile');
  /* usernames never contain spaces (or any char outside a-z0-9._) — strip before saving,
     so nothing can slip through even if the live field somehow held one */
  const uname=((document.getElementById('epUser')||{}).value||'').toLowerCase().replace(/[^a-z0-9._]/g,'');
  if(!name){note('Please enter your full name.','Name required');document.getElementById('epName').focus();return;}
  if(uname){
    const err=usernameError(uname);
    if(err){note(err,'Check your username');document.getElementById('epUser').focus();return;}
  }
  const btn=document.getElementById('epSaveBtn');
  if(btn){btn.disabled=true;btn.textContent='Saving…';}
  const restore=()=>{if(btn){btn.disabled=false;btn.textContent='Save Changes';}};

  /* the username is claimed on the server first — a unique index there is the real guard,
     since an availability check can always be beaten by someone typing at the same moment */
  if(uname&&uname!==getSavedUsername()){
    const sb=getSupaClient();
    const uid=sb?await authUid():null;
    if(!sb||!uid){restore();note('Please sign in to set a username.','Sign in required');return;}
    const{error}=await sb.from('profiles').upsert({id:uid,username:uname,updated_at:new Date().toISOString()});
    if(error){
      restore();
      const taken=error.code==='23505'||/duplicate|unique/i.test(error.message||'');
      if(taken){setUnameMsg('@'+uname+' was just taken. Try another.','bad');note('That username was just taken by someone else. Please pick another.','Username taken');}
      else note('Could not save your username: '+error.message,'Error');
      return;
    }
    try{localStorage.setItem('tmk_uhandle',uname);}catch(e){}
  }
  /* collect social links */
  const soc={};SOCIALS.forEach(s=>{const el=document.getElementById('epSoc_'+s[0]);const v=el?el.value.trim():'';if(v)soc[s[0]]=v;});
  try{
    if(name)localStorage.setItem('tmk_uname',name);
    if(mobile)localStorage.setItem('tmk_umobile',mobile);
    localStorage.setItem('tmk_socials',JSON.stringify(soc));
    const bioEl=document.getElementById('epBio');if(bioEl)localStorage.setItem('tmk_bio',(bioEl.value||'').trim());
  }catch(e){}
  await upsertProfile();   /* keep the public profile (name/photo/username/socials) in sync */
  restore();
  renderProfile();
  /* await the popup, THEN leave the form — staying on the edit screen after "Saved ✓"
     reads as if it didn't take, and people tap Save again */
  await note('Profile saved successfully!','Saved ✓');
  go('profile');
}

/* profile gallery — only the logged-in user's own posts, filtered by tab */
let _profTab='All';
function setProfTab(t,el){_profTab=t;if(el){document.querySelectorAll('#profTabs span').forEach(s=>s.classList.toggle('on',s===el));}renderProfileGallery();}
async function renderProfileGallery(){
  const grid=document.getElementById('pMiniGrid');if(!grid)return;
  if(!isLoggedIn()){grid.innerHTML='<div class="empty" style="grid-column:1/-1">Sign in to see your posts here.</div>';return;}
  grid.innerHTML='<div class="skel skel-card" style="grid-column:1/-1;height:90px"></div>';
  const name=getSavedName()||'You';
  let posts=[];try{posts=await loadUserPosts(name);}catch(e){posts=userPosts.filter(p=>p.n===name);}
  const items=[];
  posts.forEach(p=>(p.imgs||[]).forEach(src=>{items.push({src,post:p,isVid:isAnyVideo(src)});}));
  let show=items;
  if(_profTab==='Photos')show=items.filter(i=>!i.isVid);
  else if(_profTab==='Videos')show=items.filter(i=>i.isVid);
  grid.innerHTML=show.length?show.map(c=>{
    if(c.isVid){
      const poster=videoPoster(c.src);
      const bg=poster?`background-image:url('${esc(poster)}')`:(String(c.src).startsWith('data:video')?'':'background:#0a1626');
      const vid=(!poster&&String(c.src).startsWith('data:video'))?`<video src="${esc(c.src)}" muted playsinline style="width:100%;height:100%;object-fit:cover"></video>`:'';
      return `<div class="pg" style="${bg}" onclick="openPostDetail('${c.post.id}')">${vid}<span class="msr pg-play">play_arrow</span></div>`;
    }
    return `<div class="pg" style="background-image:url('${esc(c.src)}${String(c.src).startsWith('http')?Q:''}')" onclick="openPostDetail('${c.post.id}')"></div>`;
  }).join(''):`<div class="empty" style="grid-column:1/-1">${_profTab==='All'?'You haven\'t posted yet. Share your first trek moment!':'No '+_profTab.toLowerCase()+' yet.'}</div>`;
}

/* ---------- preferences (onboarding) — used to connect like-minded trekkers ---------- */
/* options in a single-select group — picking one clears the others in the group */
const EXP_OPTIONS=['Beginner','Intermediate','Advanced'];
const PREF_GROUPS=[
  ['🏔️','Regions you love',['Uttarakhand','Himachal','Ladakh','Kashmir','Northeast','Spiritual']],
  ['🥾','Trek style',['Trekking','Backpacking','Spiritual tours','Family trips','Solo','Group departures']],
  ['✨','Interests',['Photography','Camping','Road trips','Bike expeditions','Adventure sports','Wildlife','Culture & food','Fitness & endurance']],
  ['📈','Experience level',EXP_OPTIONS]
];
let _prefSel=[],_prefSkippedSession=false,_prefRole='';
/* per-ACCOUNT storage key — different accounts on the same device stay independent */
function prefKey(){return currentUser?('tmk_prefs_'+currentUser.id):'tmk_prefs_guest';}
function getPrefs(){try{return JSON.parse(localStorage.getItem(prefKey())||'null');}catch(e){return null;}}
function isPrefsDone(){const p=getPrefs();return !!(p&&p.length);}
/* pull this account's prefs from their profile so completion is known on any device */
async function loadPrefsFromProfile(){
  const sb=getSupaClient();if(!sb||!currentUser)return;
  try{const{data}=await sb.from('profiles').select('prefs').eq('id',currentUser.id).maybeSingle();
    if(data&&data.prefs&&data.prefs.length){try{localStorage.setItem(prefKey(),JSON.stringify(data.prefs));}catch(e){}}
  }catch(e){}
}
/* called when the screen opens — loads current selection once */
function initPrefs(){
  const saved=(getPrefs()||[]).slice();
  /* role is stored in the same prefs array, prefixed, so no schema change */
  const r=saved.find(x=>String(x).startsWith('role:'));
  _prefRole=r?r.slice(5):'';
  _prefSel=saved.filter(x=>!String(x).startsWith('role:'));
  renderPrefs();
}
function renderPrefs(){
  const box=document.getElementById('prefBody');if(!box)return;
  /* Role first — it changes what the rest of the app offers you.
     Choosing Host does NOT make you one; it just routes you to the application. */
  const roleCards=`<div class="rolepick-h">How will you use Tripomonk?</div>
    <div class="rolerow">
      <div class="rolecard ${_prefRole==='Explorer'?'on':''}" onclick="pickRole('Explorer')">
        <span class="rc-check msr">check</span>
        <div class="rc-ic exp"><span class="msr">hiking</span></div>
        <b>Explorer</b>
        <small>Book treks, join trips &amp; meet fellow trekkers</small>
      </div>
      <div class="rolecard host ${_prefRole==='Host'?'on':''}" onclick="pickRole('Host')">
        <span class="rc-check msr">check</span>
        <div class="rc-ic host"><span class="msr">flag</span></div>
        <b>Host <span class="rc-badge">Earn</span></b>
        <small>Lead your own trips — keep 90%, we run operations</small>
      </div>
    </div>
    ${_prefRole==='Host'?`<div class="role-hint"><span class="msr">info</span>Choosing Host takes you to a quick application after this — you can still book as an Explorer too.</div>`:''}`;
  const intro=`<div class="pref-intro"><b>🧭 Your trek vibe</b><small>Pick what excites you — we use it to match you with like-minded trekkers and trips.</small></div>`;
  const groups=PREF_GROUPS.map(g=>{
    const n=g[2].filter(o=>_prefSel.includes(o)).length;
    return `<div class="pref-group">
      <div class="pref-group-h"><span class="pgi">${g[0]}</span>${esc(g[1])}${n?`<span class="pgn">${n}</span>`:''}</div>
      <div class="chips" style="flex-wrap:wrap">${g[2].map(o=>`<div class="chip pill ${_prefSel.includes(o)?'on':''}" onclick="togglePref('${jsq(o)}')">${esc(o)}</div>`).join('')}</div>
    </div>`;}).join('');
  box.innerHTML=roleCards+intro+groups;
  hydrate(box);
}
function pickRole(r){_prefRole=_prefRole===r?'':r;renderPrefs();}
function togglePref(o){
  const i=_prefSel.indexOf(o);
  if(i>=0){_prefSel.splice(i,1);}
  else{
    /* experience level is single-select — clear any other level first */
    if(EXP_OPTIONS.includes(o))_prefSel=_prefSel.filter(x=>!EXP_OPTIONS.includes(x));
    _prefSel.push(o);
  }
  renderPrefs();
}
async function savePrefs(){
  if(!_prefSel.length&&!_prefRole){note('Pick your role or at least one preference — or skip for now.','Add a preference');return;}
  /* role rides along in the same prefs array, prefixed — no schema change needed */
  const out=_prefRole?['role:'+_prefRole].concat(_prefSel):_prefSel.slice();
  try{localStorage.setItem(prefKey(),JSON.stringify(out));}catch(e){}
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(sb&&uid){try{await sb.from('profiles').update({prefs:out}).eq('id',uid);}catch(e){}}
  const wantsHost=_prefRole==='Host';
  await note(wantsHost?'Saved. Let\'s get your host application started.':'Preferences saved! We\'ll suggest trekkers who share your vibe.','Saved ✓');
  if(wantsHost){go('becomeHost');return;}
  if(cur==='onboarding')go(lastTab||'community');else back();
}
/* skip = don't complete; not marked done, so it keeps being offered next login (per account) */
function skipOnboarding(){_prefSkippedSession=true;go(lastTab||'home');}
async function maybeOnboard(){
  if(!isLoggedIn())return;
  await loadPrefsFromProfile();          /* know THIS account's completion status */
  if(_prefSkippedSession||isPrefsDone())return;
  go('onboarding');
}
/* shared-interest count between me and another person's prefs */
function sharedPrefs(otherPrefs){
  const mine=getPrefs()||[];if(!mine.length||!otherPrefs||!otherPrefs.length)return 0;
  const set=new Set(mine);return otherPrefs.filter(p=>set.has(p)).length;
}

/* ---------- bookings + signed QR ---------- */
const CAPTAIN_CODE='';
function getCaptainCode(){return '';}
function getWa(){try{return localStorage.getItem('tmk_wa')||'918924813959';}catch(e){return '918924813959';}}
function genId(){return 'TMK-'+(Date.now().toString(36)+Math.random().toString(36).slice(2,4)).toUpperCase();}
function sign(s){let h1=0xdeadbeef,h2=0x41c6ce57;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677);}h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return (4294967296*(2097151&h2)+(h1>>>0)).toString(36);}
function ticketPayload(b){return 'TMK2|'+encodeURIComponent(b.id||'');}
function parseTicket(s){const raw=(s||'').trim();const p=raw.split('|');if(p[0]==='TMK2'&&p[1])return{ok:true,id:decodeURIComponent(p[1])};if(p[0]==='TMK1'&&p[1])return{ok:true,id:p[1]};if(/^pay_[A-Za-z0-9_]+$/.test(raw))return{ok:true,id:raw};return{ok:false};}function getBookings(){try{return JSON.parse(localStorage.getItem('tmk_bookings')||'[]');}catch(e){return[];}}
function saveBookings(a){try{localStorage.setItem('tmk_bookings',JSON.stringify(a));}catch(e){}}
function isCaptain(){try{return localStorage.getItem('tmk_captain')==='1';}catch(e){return false;}}
/* ---- role-based access (by signed-in email) ---- */
const ADMIN_EMAILS=['vikasupadhyay9@gmail.com'];  /* real admins only */
function userEmail(){return ((currentUser&&currentUser.email)||'').toLowerCase();}
function isAdminUser(){return !!userEmail()&&ADMIN_EMAILS.includes(userEmail());}
let staffSet=new Set(), staffRoles={};
async function loadStaff(){const sb=getSupaClient();if(!sb)return;
  try{const{data}=await sb.from('staff').select('email,role');
    staffSet=new Set((data||[]).map(r=>(r.email||'').toLowerCase()));
    staffRoles={};(data||[]).forEach(r=>{if(r.email)staffRoles[(r.email||'').toLowerCase()]=r.role||'captain';});
  }catch(e){ /* role column not deployed yet — fall back to email-only (everyone = captain) */
    try{const{data}=await sb.from('staff').select('email');staffSet=new Set((data||[]).map(r=>(r.email||'').toLowerCase()));}catch(e2){}
  }
  /* the Trip Captain card is gated on staffSet, which only exists once this resolves */
  try{const h=document.getElementById('staffHub');if(h)h.innerHTML=staffHubCard();}catch(e){}}
function isStaffUser(){return isAdminUser()||(!!userEmail()&&staffSet.has(userEmail()));}
/* ---- role-based admin access ----
   Owner email = Super Admin (all tools). Team members get a role via Admin → Staff;
   each admin role sees only its own sections. 'captain' = Trip Captain (no admin panel). */
const ADMIN_ROLES=['super','operations','finance','content','community'];
const ROLE_LABEL={super:'Super Admin',operations:'Operations',finance:'Finance',content:'Content',community:'Community',captain:'Trek Captain'};
const ROLE_TABS={
  super:null,   /* null = every tab */
  operations:['Overview','Bookings','Users','CRM','Treks','Destinations','Departures','Packing','Guides','Gear','Permits','Support','Vendors','Staff'],
  finance:['Overview','Bookings','Users','Payments'],
  content:['Overview','Treks','Destinations','Home','Reviews'],
  community:['Overview','Users','Community','Reviews','Hosts','Support']
};
function currentAdminRole(){
  if(isAdminUser())return 'super';
  const e=userEmail();const r=e&&staffRoles[e];
  return (r&&ADMIN_ROLES.includes(r))?r:null;
}
function canOpenAdmin(){return !!currentAdminRole();}
function roleCanTab(tab){const r=currentAdminRole();if(!r)return false;const allow=ROLE_TABS[r];return !allow||allow.indexOf(tab)>=0;}
/* Escape a value for use inside onclick="fn('HERE')".
   esc() alone is not enough: it leaves backslashes and lets a crafted name break
   out of the quoted JS string. Strip the dangerous chars, then HTML-escape. */
function jsq(s){return esc(String(s==null?'':s).replace(/[\'"`<>]/g,''));}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
/* Tidy a user-entered display name: trim, collapse runs of spaces, and capitalize the
   first letter of each word so "sawan kumar verma" shows as "Sawan Kumar Verma". Only
   the first letter is touched, so intentional casing (e.g. "McDonald") is preserved.
   DISPLAY ONLY — never use for lookups; the raw name is still the key everywhere. */
function properName(n){return String(n==null?'':n).trim().replace(/\s+/g,' ').replace(/(^|\s)([a-z])/g,(m,s,c)=>s+c.toUpperCase());}
const INR=n=>'₹'+Number(n).toLocaleString('en-IN');

/* ---------- render ---------- */
function trekCard(t){return `<div class="tcard" onclick="openDetail(${t.idx})"><div class="ph" style="background-image:url('${t.img}')">${t.soon?'<span class="soon">Coming Soon</span>':''}${trekScoreBadge(t,'on-photo')}</div>
  <div class="bd"><h3>${t.n}</h3><div class="reg">${ic('pin',13)} ${t.region}</div>
  <div class="rt"><span class="star">★</span> <b>${t.r}</b> <span class="g">(${t.rev})</span></div>
  <div class="ft"><span class="tag">${ic('clock',12)} ${t.dur}</span><span class="tag">${t.lvl}</span>${readinessChip(t)}</div></div></div>`;}
/* lazy-load card background images: only paint a card's photo when it is near the
   viewport. Without this, a long list (130+ treks) loads every image at once and
   iOS Safari runs out of memory and crashes the tab. Geometry-based (not
   IntersectionObserver) because the view transitions leave elements at opacity:0
   mid-animation, which IO can miss — getBoundingClientRect ignores opacity. */
let _lazyT=0,_lazyScroll=null,_lazyScroller=null,_lazyObs=null;
function lazyBg(root){
  root=root||document;
  const paint=el=>{if(el.dataset&&el.dataset.bg){el.style.backgroundImage="url('"+String(el.dataset.bg).replace(/'/g,'%27')+"')";el.removeAttribute('data-bg');}};
  /* geometric pass — paints only the cards currently near the viewport */
  const loadVisible=()=>{const vh=window.innerHeight||800;root.querySelectorAll('[data-bg]').forEach(el=>{const r=el.getBoundingClientRect();if(r.width>0&&r.bottom>-500&&r.top<vh+500)paint(el);});};
  /* (1) IntersectionObserver loads cards as they scroll into view */
  if('IntersectionObserver'in window){
    if(!_lazyObs)_lazyObs=new IntersectionObserver((ents,obs)=>{ents.forEach(e=>{if(e.isIntersecting){paint(e.target);obs.unobserve(e.target);}});},{rootMargin:'500px'});
    root.querySelectorAll('[data-bg]').forEach(el=>_lazyObs.observe(el));
  }
  /* (2) geometric passes for the initially-visible cards — robust against the
     view still animating in (opacity/transform) when IO first checks */
  loadVisible();setTimeout(loadVisible,180);setTimeout(loadVisible,600);
  /* (3) belt-and-suspenders: a scroll listener on the actual scroll container */
  let sc=root.parentElement;
  while(sc&&sc!==document.body){const o=getComputedStyle(sc).overflowY;if(o==='auto'||o==='scroll')break;sc=sc.parentElement;}
  sc=sc||window;
  if(_lazyScroll&&_lazyScroller)_lazyScroller.removeEventListener('scroll',_lazyScroll);
  _lazyScroll=()=>{clearTimeout(_lazyT);_lazyT=setTimeout(loadVisible,80);};
  _lazyScroller=sc;
  sc.addEventListener('scroll',_lazyScroll,{passive:true});
}
/* ---- Special tag (Offer / Discount / Festival Special …) ----
   Stored as ONE free-text column so the admin isn't boxed into a fixed list. The
   presets below are just the quick picks in the admin panel; the colour is looked up
   from the label, and anything custom falls back to brand gold. */
const TREK_TAGS=['Offer','Discount','Festival Special','Bestseller','Filling Fast','New','Early Bird'];
const TAG_STYLE={'offer':'gold','discount':'green','festival special':'violet','bestseller':'gold',
  'filling fast':'red','new':'blue','early bird':'green'};
function tagStyle(v){return TAG_STYLE[String(v||'').trim().toLowerCase()]||'gold';}
function trekTag(t){return String((t&&t.tag)||'').trim();}
function tagBadge(t){
  const v=trekTag(t);if(!v)return '';
  return '<span class="trek-tag '+tagStyle(v)+'">'+esc(v)+'</span>';
}
function bigCard(t){return `<div class="bigcard" onclick="openDetail(${t.idx})" data-bg="${esc(t.img||'')}" style="background-color:#12243f">
  ${trekScoreBadge(t,'on-photo')}<span class="pr">${t.soon?'Coming Soon':INR(t.price)}</span>${tagBadge(t)}
  <div class="info"><h3>${t.n}</h3><div class="reg">${ic('pin',12)} ${t.region} · ${t.dur} · ${t.lvl}</div></div></div>`;}

let homeFilter='All';
const diffs=['All','Easy','Moderate','Difficult'];
const diffIcon={All:'treks',Easy:'pine',Moderate:'altitude',Difficult:'flame'};
function renderHomeChips(){document.getElementById('homeChips').innerHTML=diffs.map(d=>`<div class="chip ${d===homeFilter?'on':''}" onclick="setHomeFilter('${d}')"><span style="display:grid;place-items:center">${ic(diffIcon[d],20)}</span>${d==='All'?'All Treks':d}</div>`).join('');hydrate(document.getElementById('homeChips'));}
function setHomeFilter(d){homeFilter=d;renderHomeChips();renderHome();}
function trekCardH(t){return `<div class="hcard" onclick="openDetail(${t.idx})"><div class="hph" style="background-image:url('${t.img}')">${t.soon?'<span class="soon">Coming Soon</span>':''}${tagBadge(t)}${trekScoreBadge(t,'on-photo')}</div>
  <div class="hbd"><h3>${t.n}</h3><div class="reg">${ic('pin',12)} ${t.region}</div>
  <div class="rt"><span class="star">★</span> <b>${t.r}</b> <span style="color:var(--muted)">(${t.rev})</span></div>
  <div class="ft"><span class="tag">${ic('clock',12)} ${t.dur}</span><span class="tag">${t.lvl}</span></div></div></div>`;}
/* ===== Reusable dynamic 3D coverflow stack (index-based, swipe/drag, infinite, virtualized) ===== */
let _cfMoved=false;
/* card builders */
function trekCardCF(t,i){return `<div class="fcx" data-cf="${i}" onclick="cfTapCard(this)">
  <div class="fcx-img" style="background-image:url('${t.img}')">${t.soon?'<span class="soon">Coming Soon</span>':''}${tagBadge(t)}${trekScoreBadge(t,'on-photo')}</div>
  <div class="fcx-bd">
    <h3>${esc(t.n)}</h3>
    <div class="fcx-loc">${ic('pin',13)} ${esc(t.region)}</div>
    <div class="fcx-desc">${esc(t.desc||'A beautiful Himalayan trek with Tripomonk.')}</div>
    <div class="fcx-stats">
      <div><small>Distance</small><b>${esc(t.dist||'—')}</b></div>
      <div><small>Best time</small><b>${esc(t.best||'—')}</b></div>
      <div><small>Rating</small><b>★ ${t.r}</b></div>
    </div>
    <div class="fcx-foot"><div><small>${priceOf(t).off?priceOf(t).off+'% OFF · from':'Total Price'}</small><div class="fcx-price">${priceTag(t)}</div></div>
      <button class="fcx-go" onclick="event.stopPropagation();cfOpenCard(this)"><span class="msr">hiking</span> View trek</button></div>
  </div></div>`;}
function actCardCF(a,i){return `<div class="fcx" data-cf="${i}" onclick="cfTapCard(this)">
  <div class="fcx-img act" style="background:linear-gradient(150deg,#0b5cff,#0a3aa0)"><span class="msr act-ic">${IMAP[a[0]]||'sports'}</span></div>
  <div class="fcx-bd">
    <h3>${esc(a[1])}</h3>
    <div class="fcx-loc">${ic('pin',13)} ${esc(a[2])}</div>
    <div class="fcx-desc">Adventure activity — pay in-app, our team coordinates your slot.</div>
    <div class="fcx-foot"><div><small>Price</small><div class="fcx-price">${esc(a[3])}</div></div>
      <button class="fcx-go" onclick="event.stopPropagation();cfOpenCard(this)"><span class="msr">confirmation_number</span> Book now</button></div>
  </div></div>`;}
function cfTapCard(card){const el=card.closest('.coverflow');if(!el||!el._cf)return;const i=+card.dataset.cf;el._cf.open(el._cf.list[i],i);}
function cfOpenCard(btn){const card=btn.closest('.fcx'),el=card.closest('.coverflow'),i=+card.dataset.cf;el._cf.open(el._cf.list[i],i);}
function makeCoverflow(elId,list,cardFn,openFn){
  const el=document.getElementById(elId);if(!el)return;
  if(!list.length){el.className='';el.innerHTML='<div class="empty"><p>Nothing here yet.</p></div>';return;}
  el._cf={list,open:openFn};
  el.className='coverflow';
  el.innerHTML=list.map((it,i)=>cardFn(it,i)).join('');
  hydrate(el);
  wireCoverflowFocus(el);
}
/* center-focus: the centred card is full size, neighbours scale down, fade + tilt in */
function wireCoverflowFocus(el){
  const cards=[...el.querySelectorAll('.fcx')];if(!cards.length)return;
  let raf=0,geo=[],half=0;
  /* Card offsets don't change while scrolling, but reading offsetLeft/offsetWidth per
     card per frame forced a synchronous layout on every frame — the single biggest
     cause of the stutter on iPhone. Measure once, re-measure only on resize/rotate. */
  const measure=()=>{
    half=el.clientWidth/2;
    geo=cards.map(c=>({c,mid:c.offsetLeft+c.offsetWidth/2,w:c.offsetWidth||1}));
  };
  const update=()=>{raf=0;
    /* The rail is often built while its view is still hidden, so the first measure()
       can capture a zero-width layout and freeze every card at the off-centre clamp.
       clientWidth is cheap to read (our transform writes don't dirty layout), so use it
       as a validity check — it also covers rotation and the view being shown later. */
    if(!geo.length||el.clientWidth/2!==half)measure();
    if(!geo.length||!half)return;
    const mid=el.scrollLeft+half;
    for(let i=0;i<geo.length;i++){
      const g=geo[i];
      const d=Math.min(1.4,Math.abs(g.mid-mid)/g.w);              /* 0 = centre */
      const k=Math.min(d,1);
      const scale=1-k*0.15;
      const rot=Math.max(-10,Math.min(10,(g.mid<mid?1:-1)*d*9));
      /* translateZ(0) keeps each card on its own compositor layer on iOS, which stops
         the sub-pixel shimmer you get when a rotateY layer is re-rasterised mid-scroll */
      g.c.style.transform='translateZ(0) scale('+scale.toFixed(3)+') rotateY('+rot.toFixed(1)+'deg)';
      g.c.style.opacity=(1-k*0.4).toFixed(2);
      g.c.style.zIndex=String(100-Math.round(k*100));
    }
  };
  const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update);};
  if(el._cfScroll)el.removeEventListener('scroll',el._cfScroll);
  if(el._cfResize)window.removeEventListener('resize',el._cfResize);
  el._cfScroll=onScroll;
  el._cfResize=()=>{measure();update();};
  el.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',el._cfResize,{passive:true});
  measure();update();
  /* images change card height as they load — re-measure, don't just repaint */
  setTimeout(el._cfResize,80);setTimeout(el._cfResize,320);
}
function renderHomeHero(){
  const box=document.getElementById('homeHero');if(!box)return;
  /* admin's pick (Admin → Home) wins; otherwise fall back to the first live trek */
  const f=treks.find(t=>t.feat&&!t.soon)||treks.find(t=>t.feat)||treks.find(t=>!t.soon)||treks[0];
  if(!f){box.innerHTML='';return;}
  box.innerHTML=`<div class="hhero" style="background-image:url('${f.img}')" onclick="openDetail(${f.idx})">
    <span class="hh-price">From ₹${Number(f.price).toLocaleString('en-IN')}</span>
    <div class="hh-c"><span class="hh-tag">Featured trek</span>
      <h3>${esc(f.n)}</h3>
      <p>${esc(f.region)} · ${esc(f.lvl)} · ${esc(f.days+'D')}</p>
      <span class="hh-go">Explore ${ic('back',14)}</span>
    </div></div>`;
  hydrate(box);
  const go=box.querySelector('.hh-go .msr');if(go)go.style.transform='scaleX(-1)';
}
/* ============================================================
   COMPARE TREKS — pick up to 3 treks, side-by-side table + a
   rules-based "best match" using the user's onboarding prefs.
   ============================================================ */
let _cmpSel=[],_cmpQ='',_cmpShow=false;
function cmpAvail(){return treks.filter(t=>!t.soon&&!isTour(t));}
function fitnessOf(lvl){lvl=(lvl||'').toLowerCase();
  if(/difficult|hard|advanced|challeng/.test(lvl))return 'High';
  if(/moderate/.test(lvl))return 'Moderate';
  return 'Low';}
function isBeginnerFriendly(lvl){return /easy|beginner/i.test(lvl||'');}
/* the real Individual Fitness Score once assessed; else a soft estimate from onboarding */
function userFitnessScore(){
  if(typeof hasFitness==='function'&&hasFitness())return computeFitness().score;
  const p=getPrefs()||[];
  if(p.includes('Advanced'))return 88;
  if(p.includes('Intermediate'))return 75;
  if(p.includes('Beginner'))return 60;
  return 72;
}
function cmpScore(t){
  const prefs=getPrefs()||[];let s=(t.r||0)*2;
  if(prefs.some(p=>t.region&&String(t.region).toLowerCase().includes(String(p).toLowerCase())))s+=3;
  const exp=prefs.find(p=>['Beginner','Intermediate','Advanced'].includes(p));
  const lvl=(t.lvl||'').toLowerCase();
  if(exp==='Beginner'&&/easy|beginner/.test(lvl))s+=3;
  else if(exp==='Advanced'&&/difficult|hard|advanced/.test(lvl))s+=3;
  else if(exp==='Intermediate'&&/moderate/.test(lvl))s+=3;
  s-=(t.price||0)/5000;   /* nudge toward better value */
  return s;
}
function toggleCmp(name){
  const i=_cmpSel.indexOf(name);
  if(i>=0)_cmpSel.splice(i,1);
  else{ if(_cmpSel.length>=3){toast('You can compare up to 3 treks');return;} _cmpSel.push(name); }
  _cmpShow=false;   /* selection changed — require an explicit "Compare now" tap again */
  renderCompare();
}
function clearCmp(){_cmpSel=[];_cmpShow=false;renderCompare();}
/* explicit compare action — the table only appears when the user asks for it */
function doCompare(){
  if(_cmpSel.length<2){toast('Pick at least 2 treks to compare');return;}
  _cmpShow=true;renderCompare();
  const t=document.querySelector('#compareBody .cmp-table-wrap');
  if(t)t.scrollIntoView({behavior:'smooth',block:'center'});
}
function cmpSearch(v){_cmpQ=v||'';renderCompare();}
function shareTrekByName(name){
  const url=window.location.origin+'/t/'+slugify(name);
  const data={title:'Tripomonk — '+name,text:'Check out the '+name+' trek on Tripomonk 🏔️',url};
  if(navigator.share){navigator.share(data).catch(()=>{});return;}
  try{navigator.clipboard.writeText(url);toast('Trek link copied');}catch(e){note(url,'Share');}
}
function renderCompare(){
  const box=document.getElementById('compareBody');if(!box)return;
  const pool=cmpAvail();
  const sel=_cmpSel.map(n=>pool.find(t=>t.n===n)).filter(Boolean);
  const q=_cmpQ.trim().toLowerCase();
  const picker=pool.filter(t=>!q||(t.n+' '+t.region).toLowerCase().includes(q));
  /* selected chips */
  const chips=sel.length?`<div class="cmp-chips">${sel.map(t=>`<span class="cmp-chip" onclick="toggleCmp('${jsq(t.n)}')">${esc(t.n)} <span class="msr">close</span></span>`).join('')}${sel.length?`<span class="cmp-clear" onclick="clearCmp()">Clear</span>`:''}</div>`:'';
  /* picker list */
  const list=`<div class="cmp-pick">${picker.map(t=>{
    const on=_cmpSel.includes(t.n);
    return `<div class="cmp-po ${on?'on':''}" onclick="toggleCmp('${jsq(t.n)}')"><div class="cmp-po-img" style="background-image:url('${esc(t.img||'')}')"></div><div class="cmp-po-tx"><b>${esc(t.n)}</b><small>${esc(t.region||'')} · ${INR(t.price||0)}</small></div><span class="cmp-po-chk">${on?ic('check',14):'+'}</span></div>`;
  }).join('')||'<div class="empty"><p>No treks match your search.</p></div>'}</div>`;

  let compare='';
  if(sel.length>=2&&!_cmpShow){
    /* 2–3 picked, but wait for an explicit tap before showing the comparison */
    compare=`<button class="btn cmp-go" onclick="doCompare()"><span class="msr">compare_arrows</span> Compare ${sel.length} treks now</button>`;
  }else if(sel.length>=2){
    /* recommended = highest score */
    let best=sel[0];sel.forEach(t=>{if(cmpScore(t)>cmpScore(best))best=t;});
    const ROWS=[
      ['Price',t=>INR(t.price||0)],
      ['Duration',t=>t.days?t.days+' days':'—'],
      ['Distance',t=>t.dist||'—'],
      ['Max altitude',t=>t.alt||'—'],
      ['Difficulty',t=>t.lvl||'—'],
      ['Required score',t=>trekReqScore(t)],
      ['Your readiness',t=>{const req=trekReqScore(t);if(!hasFitness())return '—';const rd=readiness(computeFitness().score,req);return `<span class="cmp-fit fit-${rd.k}"><span class="fit-dot"></span>${rd.label}</span>`;}],
      ['Fitness needed',t=>fitnessOf(t.lvl)],
      ['Best season',t=>t.best||'—'],
      ['Region',t=>t.region||'—'],
      ['Rating',t=>t.r?('⭐ '+t.r):'—'],
      ['Reviews',t=>{if(t.rev==null||t.rev==='')return '—';const n=Number(t.rev);return isNaN(n)?String(t.rev):n.toLocaleString('en-IN');}],
      ['Beginner friendly',t=>isBeginnerFriendly(t.lvl)?'✅ Yes':'—']
    ];
    const head=`<tr><th class="cmp-corner"></th>${sel.map(t=>`<th class="${t.n===best.n?'best':''}"><div class="cmp-th-img" style="background-image:url('${esc(t.img||'')}')"></div><b>${esc(t.n)}</b>${t.n===best.n?'<span class="cmp-best-tag">Best match</span>':''}</th>`).join('')}</tr>`;
    const rows=ROWS.map(r=>`<tr><td class="cmp-lbl">${r[0]}</td>${sel.map(t=>`<td class="${t.n===best.n?'best':''}">${r[1](t)}</td>`).join('')}</tr>`).join('');
    const ctas=`<tr><td class="cmp-lbl"></td>${sel.map(t=>`<td class="cmp-cta ${t.n===best.n?'best':''}"><button onclick="openDetailByName('${jsq(t.n)}')">Book / Details</button><button class="ghost" onclick="shareTrekByName('${jsq(t.n)}')">Share</button></td>`).join('')}</tr>`;
    const fs=userFitnessScore();
    const prefs=getPrefs()||[];
    const reason=[];
    if(isBeginnerFriendly(best.lvl)||/moderate/i.test(best.lvl))reason.push('the difficulty suits your fitness level');
    if(prefs.some(p=>String(best.region).toLowerCase().includes(String(p).toLowerCase())))reason.push('it matches your preferred region');
    if(best.r>=4.5)reason.push('it has one of the highest trekker ratings');
    reason.push('it offers strong value for the price');
    compare=`<div class="cmp-table-wrap"><table class="cmp-table cmp-cols-${sel.length}"><thead>${head}</thead><tbody>${rows}${ctas}</tbody></table></div>
      <div class="cmp-rec">
        <div class="cmp-rec-h"><span class="msr">auto_awesome</span> Recommended for you</div>
        <p>Based on your fitness score (<b>${fs}</b>) and preferences, <b>${esc(best.n)}</b> is your best match — ${reason.slice(0,3).join(', ')}.</p>
        <button class="btn" onclick="openDetailByName('${jsq(best.n)}')">View ${esc(best.n)}</button>
      </div>`;
  }else{
    compare=`<div class="cmp-hint"><span class="msr">touch_app</span> Pick ${sel.length?'1 more trek':'2–3 treks'} to see them side by side.</div>`;
  }

  box.innerHTML=`<p class="host-note" style="margin:0 0 12px">Torn between two treks? Add up to 3 and compare every detail in one place.</p>
    <div class="search" style="margin-bottom:12px"><span class="msr" style="font-size:20px;color:var(--muted)">search</span><input type="text" placeholder="Search treks to add…" value="${esc(_cmpQ)}" oninput="cmpSearch(this.value)" style="all:unset;flex:1;font-size:14px;color:var(--text)"/></div>
    ${chips}${compare}
    <div class="sec" style="margin:18px 2px 10px"><h2 style="font-size:14.5px">${sel.length?'Add or swap treks':'Choose treks to compare'}</h2></div>
    ${list}`;
  hydrate(box);
}
function renderHome(){
  const hav=document.getElementById('homeUserAv');
  if(hav)setAvatarEl(hav,getSavedName()||'Explorer',getSavedPhoto());
  const hg=document.getElementById('homeGreet');if(hg){const nm=getSavedName();hg.textContent=nm?'Hello, '+nm:'Hello there';}
  renderHomeHero();
  /* Popular Treks is a small featured rail — admin's picks (Admin → Home) float to the
     front, then bookable, then a few coming-soon. Sorting rather than filtering keeps the
     rail full even when a difficulty chip excludes every picked trek.
     Capping it is essential: rendering all 130+ treks here crashed iOS Safari (memory). */
  const pool=(homeFilter==='All'?treks:treks.filter(t=>t.lvl===homeFilter)).filter(t=>!isTour(t));
  const list=[...pool].sort((a,b)=>(b.pop?1:0)-(a.pop?1:0)||(a.soon?1:0)-(b.soon?1:0)).slice(0,12);
  makeCoverflow('homeList',list,trekCardCF,(t)=>openDetail(t.idx));
  renderHomeTours();   /* Road Trips & Tours rail (hidden until a tour exists) */
  renderInspire('homeInspire');   /* rotating travel quotes + trek fun facts, below Trek News */
  /* paint the host slot now (CTA), then swap in the rail if any trips are live */
  renderHomeHosts();
  renderGiftHome();
  /* seed the rail from the last cached copy so it appears instantly on repeat visits */
  const cLt=swrGet('livehosttrips'),cVh=swrGet('verifiedhosts');
  if(cLt&&Array.isArray(cLt.data))liveHostTrips=cLt.data.filter(t=>!hostTripEnded(t));   /* stale cache may hold trips that ended overnight */
  if(cVh&&Array.isArray(cVh.data)){verifiedHosts=cVh.data;verifiedHosts.forEach(h=>{if(h&&h.name)hostByName[h.name]=true;});}
  if(liveHostTrips.length||verifiedHosts.length){
    loadAuthorPhotos(liveHostTrips.map(t=>t.host_name).concat(verifiedHosts.map(h=>h.name))).catch(()=>{}).then(()=>renderHomeHosts());
  }
  Promise.all([loadLiveHostTrips(),loadVerifiedHosts()]).then(async()=>{
    /* refresh the cache with what the server just returned */
    swrSet('livehosttrips',liveHostTrips);swrSet('verifiedhosts',verifiedHosts);
    /* await the photos, or the rails paint before the host avatars exist */
    const names=liveHostTrips.map(t=>t.host_name).concat(verifiedHosts.map(h=>h.name));
    try{await loadAuthorPhotos(names);}catch(e){}
    renderHomeHosts();
  }).catch(()=>{});
}

function renderExplore(){
  document.getElementById('regions').innerHTML=regions.map(r=>`<div class="region" onclick="filterByRegion('${r[0]}')"><div class="av" style="background-image:url('${r[1]+Q}')"></div><span>${r[0]}</span></div>`).join('');
  const dd=[['Easy','For Beginners'],['Moderate','For Trekkers'],['Difficult','For Adventurers']];
  document.getElementById('diffGrid').innerHTML=dd.map(d=>`<div class="diffc" onclick="filterByDiff('${d[0]}')"><b>${d[0]}</b><small>${d[1]}</small></div>`).join('');
  const cc=document.getElementById('cityChips');
  if(cc){
    /* departure-city chips are built automatically from the treks that exist — every
       region's real boarding city appears (Manali, Leh, Siliguri/NJP…), sorted by how
       many treks use it. No fixed list to maintain. */
    const cnt={},live={};
    treks.forEach(t=>{if(isTour(t))return;const c=depCity(t);if(!c)return;cnt[c]=(cnt[c]||0)+1;if(!t.soon)live[c]=(live[c]||0)+1;});
    /* departure cities of LIVE treks lead; then the rest by how many treks use them. Cap so the row stays clean. */
    const cities=Object.keys(cnt).sort((a,b)=>(live[b]||0)-(live[a]||0)||cnt[b]-cnt[a]||a.localeCompare(b)).slice(0,12);
    const csec=document.getElementById('cityChipsSec');if(csec)csec.style.display=cities.length?'':'none';
    cc.innerHTML=cities.map(c=>`<div class="chip pill ${exploreLabel===('From '+c)?'on':''}" onclick="filterByCity('${jsq(c)}')">${ic('pin',13)} ${esc(c)}</div>`).join('');
  }
  /* filtered views (a region / difficulty / city) show their full set — always small.
     The unfiltered "Top Picks" is capped so we never render 130+ image cards at once
     (that crashed iOS Safari). Everything stays reachable via the region tiles above. */
  const list=exploreView||treks.filter(t=>!isTour(t)).slice(0,30);
  const head=document.getElementById('topHead'); if(head)head.textContent=exploreLabel||'Top Picks For You';
  const el=document.getElementById('exploreList');el.className='';
  el.innerHTML=list.length?list.map(bigCard).join(''):`<div class="empty"><img src="illustrations/hiker-mountains.svg" alt=""/>No treks in ${esc(exploreLabel||'this filter').replace(' Treks','')} yet — more coming soon.<br><br><button class="btn sm" onclick="filterAll()">Show all treks</button></div>`;
  hydrate(document.getElementById('explore'));
  lazyBg(el);   /* only load photos as cards scroll into view (keeps iOS memory sane) */
}
let exploreView=null, exploreLabel='';
function scrollToPicks(){const el=document.getElementById('topSec');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function filterByRegion(r){exploreView=treks.filter(t=>t.region===r&&!isTour(t));exploreLabel=r+' Treks';renderExplore();scrollToPicks();}
function filterByDiff(d){exploreView=treks.filter(t=>t.lvl===d&&!isTour(t));exploreLabel=d+' Treks';renderExplore();scrollToPicks();}
function filterByCity(c){exploreView=treks.filter(t=>depCity(t)===c&&!isTour(t));exploreLabel='From '+c;renderExplore();scrollToPicks();}
function filterAll(){exploreView=null;exploreLabel='';renderExplore();}
/* ---- Road Trips & Tours: their own section (Spiti/Ladakh/Bhutan etc.) ---- */
function renderTours(){
  const box=document.getElementById('toursBody');if(!box)return;
  const list=tourList();
  box.innerHTML=list.length
    ? list.map(bigCard).join('')
    : '<div class="empty"><img src="illustrations/hiker-mountains.svg" alt=""/>No road trips or tours yet — check back soon.</div>';
  hydrate(box);lazyBg(box);
}
/* the home rail — only shows once at least one tour exists */
/* one premium road-trip card — shared by the home "Featured Road Trips" rail
   and the destination "Road trip packages" list, so both look identical.
   Image-forward, warm-orange identity, tap opens the trip detail (#trip). */
function roadTripCard(t){
  const meta=[t.days?esc(String(t.days))+'D':'',t.lvl?esc(t.lvl):'',t.best?esc(t.best):''].filter(Boolean);
  const of=(t.offer||'').trim();
  const img=normalizeImageUrl(t.img||'');
  return `<div class="rtcard" onclick="openDetail(${t.idx})" style="background-image:url('${img}')">
      <span class="rt-dep">${esc(depLabel(t))}</span>
      ${of?`<span class="rt-offer"><span class="msr">local_offer</span>${esc(of)}</span>`:''}
      <div class="rt-b">
        <b>${esc(t.n)}</b>
        <div class="rt-meta">${meta.map(m=>'<span>'+m+'</span>').join('<i>·</i>')}</div>
        <div class="rt-ft"><span class="rt-p">${priceOf(t).off?`<small>from</small> <s>${INR(priceOf(t).base)}</s> <b>${INR(priceOf(t).now)}</b>`:`<small>from</small> <b>${INR(priceOf(t).now)}</b>`}</span><span class="rt-go">View trip ${ic('back',13)}</span></div>
      </div></div>`;
}
/* Home "Featured Road Trips" card — mirrors the Popular Treks coverflow card
   (trekCardCF) so both rails read the same, just rendered slightly smaller. */
function tripCardCF(t,i){
  const dest=(destById(t.dest_id)||{}).n||t.region||'';
  const of=(t.offer||'').trim();
  const img=normalizeImageUrl(t.img||'');
  return `<div class="fcx" data-cf="${i}" onclick="cfTapCard(this)">
    <div class="fcx-img" style="background-image:url('${img}')">${of?`<span class="fcx-offer"><span class="msr">local_offer</span>${esc(of)}</span>`:''}<span class="fcx-dep">${esc(depLabel(t))}</span></div>
    <div class="fcx-bd">
      <h3>${esc(t.n)}</h3>
      <div class="fcx-loc">${ic('pin',13)} ${esc(dest)}</div>
      <div class="fcx-desc">${esc(t.desc||'A guided road trip with Tripomonk.')}</div>
      <div class="fcx-stats">
        <div><small>Duration</small><b>${t.days?esc(String(t.days))+' days':esc(t.dur||'—')}</b></div>
        <div><small>Best time</small><b>${esc(t.best||'—')}</b></div>
        <div><small>Rating</small><b>★ ${esc(String(t.r||'—'))}</b></div>
      </div>
      <div class="fcx-foot"><div><small>${priceOf(t).off?priceOf(t).off+'% OFF · from':'From'}</small><div class="fcx-price">${priceTag(t)}</div></div>
        <button class="fcx-go" onclick="event.stopPropagation();cfOpenCard(this)">View trip</button></div>
    </div></div>`;
}
function renderHomeTours(){
  const sec=document.getElementById('homeToursSec'),rail=document.getElementById('homeTours');
  if(!rail)return;
  const list=tourList();
  if(!list.length){if(sec)sec.style.display='none';rail.className='';rail.innerHTML='';return;}
  if(sec)sec.style.display='';
  /* same coverflow as Popular Treks, but with the cf-sm modifier = slightly smaller */
  makeCoverflow('homeTours',list.slice(0,10),tripCardCF,t=>openDetail(t.idx));
  rail.classList.add('cf-sm');
  if(rail._cfResize)rail._cfResize();
}

/* filters */
const fOpts={diff:['Easy','Moderate','Difficult'],dur:['1–3 Days','4–7 Days','8–14 Days','15+ Days'],reg:['Himachal','Uttarakhand','Kashmir','Ladakh','Sikkim'],time:['Jan–Mar','Apr–Jun','Jul–Sep','Oct–Dec']};
let fState={diff:'',dur:'',reg:'',time:''};
function renderFilters(){
  const mk=(key,arr)=>arr.map(o=>`<div class="chip pill ${fState[key]===o?'on':''}" onclick="pickF('${key}','${o}')">${o}</div>`).join('');
  document.getElementById('fDiff').innerHTML=mk('diff',fOpts.diff);
  document.getElementById('fDur').innerHTML=mk('dur',fOpts.dur);
  document.getElementById('fReg').innerHTML=mk('reg',fOpts.reg);
  document.getElementById('fTime').innerHTML=mk('time',fOpts.time);
  updateFCount();
}
function pickF(k,v){fState[k]=fState[k]===v?'':v;renderFilters();}
function computeF(){let f=treks.slice();
  if(fState.diff)f=f.filter(t=>t.lvl===fState.diff);
  if(fState.reg)f=f.filter(t=>t.region===fState.reg);
  if(fState.dur)f=f.filter(t=>{const d=t.days;if(/1.3/.test(fState.dur))return d<=3;if(/4.7/.test(fState.dur))return d>=4&&d<=7;if(/8.14/.test(fState.dur))return d>=8&&d<=14;return d>=15;});
  if(fState.time)f=f.filter(t=>(t.best||'').toLowerCase().includes(fState.time.split('–')[0].toLowerCase().slice(0,3)));
  return f;}
function updateFCount(){const n=computeF().length;const b=document.getElementById('fBtn');if(b)b.textContent='Show '+n+' Trek'+(n!==1?'s':'');}
function resetFilters(){fState={diff:'',dur:'',reg:'',time:''};renderFilters();}
function applyFilters(){exploreView=computeF();renderExplore();go('explore');}

/* detail */
let cur='splash',hist=[],lastTab='home',exploreInit=false;
let cart={trek:treks[0],date:'',pax:1,gear:false,permit:false,total:0,booking:null};
async function openDetailByName(n){
  const i=treks.findIndex(t=>t.n===n);
  if(i>=0){openDetail(i);return;}
  /* host-led trips aren't in the static list — match a live host trip by title and open it */
  let ht=(liveHostTrips||[]).find(t=>String(t.title||'').toLowerCase()===String(n||'').toLowerCase());
  if(!ht){const sb=getSupaClient();if(sb){try{const{data}=await sb.from('host_trips').select('id').eq('status','live').ilike('title',n).limit(1);if(data&&data[0])ht=data[0];}catch(e){}}}
  if(ht){openHostTripDetail(ht.id);return;}
  note('This trek isn’t available right now.','Not found');
}
/* ---- Inclusions / exclusions, icon-based ----
   Host trips store these as free text (one item per line, from the chips the host
   ticked). Rendering that as a <p> gave a tall wall of plain words. Split it back into
   items, give each a meaningful icon, and lay them out two-up. Unknown items still work
   — they fall back to a tick or a cross. */
const INCL_ICON={'accommodation':'hotel','stay':'hotel','all meals':'restaurant','meals':'restaurant',
  'transport':'directions_bus','trek guide':'flag','guide':'flag','permits':'description',
  'camping equipment':'festival','camping':'festival','first aid':'medical_services','firstaid':'medical_services',
  'porter support':'backpack','porter':'backpack','bonfire':'local_fire_department','sightseeing':'photo_camera'};
const EXCL_ICON={'travel to base city':'flight','travel to the base city':'flight','personal expenses':'account_balance_wallet',
  'insurance':'health_and_safety','tips':'payments','gear rental':'backpack','meals en route':'restaurant',
  'anything not listed':'more_horiz','anything not in inclusions':'more_horiz'};
function inclItems(raw){
  if(Array.isArray(raw))return raw.map(x=>Array.isArray(x)?x[1]:String(x)).filter(Boolean);
  return String(raw||'').split(/\r?\n|·|,/)               /* hosts type one per line; tolerate , and · */
    .map(s=>s.replace(/^[•\-•*]\s*/,'').trim()).filter(Boolean);
}
function inclGrid(raw,kind){
  const items=inclItems(raw);if(!items.length)return '';
  const map=kind==='inc'?INCL_ICON:EXCL_ICON, fb=kind==='inc'?'check':'close';
  return '<div class="incl-grid">'+items.map(x=>
    '<div class="incl-item '+kind+'"><span class="incl-ic msr">'+(map[x.toLowerCase()]||fb)+'</span>'
    +'<span>'+esc(x)+'</span></div>').join('')+'</div>';
}
/* one card holding both lists — they're the same question, so they shouldn't be two blocks */
function inclCard(inc,exc){
  const i=inclGrid(inc,'inc'),e=inclGrid(exc,'exc');
  if(!i&&!e)return '';
  return '<div class="incl-card">'
    +(i?'<div class="incl-h inc"><span class="msr">check_circle</span>Included</div>'+i:'')
    +(e?'<div class="incl-h exc'+(i?' sep':'')+'"><span class="msr">do_not_disturb_on</span>Not included</div>'+e:'')
    +'</div>';
}
/* One compact spec row: icon, muted label, value. Conditions / Good to Know / Getting
   there used to be three headed sections of boxed tiles — ten cards' worth of borders
   and padding for ten short facts, which made the page roughly twice as tall as the
   content needed. They're now one plain list under a single heading. */
function dRow(icon,label,val,cls){
  const glyph=String(icon||'').indexOf('msr:')===0
    ? '<span class="msr">'+icon.slice(4)+'</span>'
    : ic(icon,17);
  return '<div class="dfact'+(cls?' '+cls:'')+'"><span class="dfact-ic">'+glyph+'</span>'
    +'<span class="dfact-l">'+esc(label)+'</span>'
    +'<span class="dfact-v">'+esc(val==null||val===''?'—':val)+'</span></div>';
}
/* ---- Live conditions (temperature + air quality) ----
   Open-Meteo: free, no API key, CORS-enabled, so this needs no new secret and no
   extra deploy. Cached per rounded coordinate for 3h, so opening ten treks in the
   same region is one request, and a repeat visit the same morning is zero.
   NOTE: only the 7 treks in COORDS have real coordinates; everything else falls back
   to a region centroid, so the reading is regional. The UI says which. */
const AQI_BANDS=[[50,'Good'],[100,'Moderate'],[150,'Poor'],[200,'Unhealthy'],[300,'Very poor'],[1e9,'Hazardous']];
function aqiBand(v){for(const b of AQI_BANDS)if(v<=b[0])return b[1];return '—';}
function condKey(c){return 'cond_'+c[0].toFixed(2)+'_'+c[1].toFixed(2);}
const COND_TTL=3*60*60*1000;
async function loadConditions(t){
  const c=coordsFor(t),key=condKey(c);
  const cached=swrGet(key);
  /* Use the cache only while it's fresh AND still starts on today's date — otherwise a
     forecast fetched yesterday keeps labelling yesterday as "Today". Refetch at the day boundary. */
  if(cached&&cached.data&&(Date.now()-cached.t<COND_TTL)){
    const d0=cached.data.days&&cached.data.days[0]&&cached.data.days[0].date;
    if(!d0||d0>=localTodayISO())return cached.data;
  }
  const q='latitude='+c[0]+'&longitude='+c[1]+'&timezone=auto';
  try{
    const [w,a]=await Promise.all([
      fetch('https://api.open-meteo.com/v1/forecast?'+q+'&forecast_days=7&daily=weathercode,temperature_2m_max,temperature_2m_min').then(r=>r.json()).catch(()=>null),
      fetch('https://air-quality-api.open-meteo.com/v1/air-quality?'+q+'&forecast_days=1&hourly=us_aqi').then(r=>r.json()).catch(()=>null)
    ]);
    const d=(w&&w.daily)||{};
    const tmax=Array.isArray(d.temperature_2m_max)?d.temperature_2m_max[0]:null;
    const tmin=Array.isArray(d.temperature_2m_min)?d.temperature_2m_min[0]:null;
    /* 7-day forecast for the strip */
    const days=(Array.isArray(d.time)?d.time:[]).map((dt,i)=>({date:dt,code:(d.weathercode||[])[i],tmax:(d.temperature_2m_max||[])[i],tmin:(d.temperature_2m_min||[])[i]}));
    const arr=((a&&a.hourly&&a.hourly.us_aqi)||[]).filter(v=>typeof v==='number');
    const aqi=arr.length?Math.round(arr.reduce((s,v)=>s+v,0)/arr.length):null;
    if(tmin==null&&aqi==null)return cached?cached.data:null;   /* nothing usable — keep the old copy */
    const data={tmin,tmax,aqi,days,exact:!!COORDS[t.n]};
    swrSet(key,data);
    return data;
  }catch(e){return cached?cached.data:null;}
}
/* Open-Meteo weathercode → a simple emoji */
function wxIcon(code){code=+code||0;if(code===0)return '☀️';if(code<=3)return '⛅';if(code<=48)return '🌫️';if(code<=67)return '🌧️';if(code<=77)return '❄️';if(code<=82)return '🌧️';return '⛈️';}
/* local calendar date as YYYY-MM-DD — used to keep the forecast pinned to the real today */
function localTodayISO(){const d=new Date(),p=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate());}
function forecastStrip(days){
  if(!Array.isArray(days)||!days.length)return '';
  const today=localTodayISO();
  /* drop any days before today so a slightly-stale cache never shows yesterday as "Today" */
  let list=days.filter(d=>!d.date||d.date>=today);
  if(!list.length)list=days;
  list=list.slice(0,7);
  const dn=d=>{try{return new Date(d+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short'});}catch(e){return '';}};
  const dd=d=>{try{return new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short'});}catch(e){return '';}};
  return '<div class="fc-strip">'+list.map((d,i)=>{const isToday=d.date?d.date===today:(i===0);
    return `<div class="fc-day${isToday?' today':''}">`
    +`<span class="fc-dn">${isToday?'Today':esc(dn(d.date))}</span>`
    +`<span class="fc-dd">${esc(dd(d.date))}</span>`
    +`<span class="fc-ic">${wxIcon(d.code)}</span>`
    +`<span class="fc-t">${d.tmax!=null?Math.round(d.tmax)+'°':'—'}</span>`
    +`<span class="fc-tl">${d.tmin!=null?Math.round(d.tmin)+'°':''}</span>`
    +`</div>`;}).join('')+'</div>';
}
function factsHTML(t,live){
  const fc=(live&&live.days)?forecastStrip(live.days):'';
  const tempRow=(live&&live.tmin!=null&&live.tmax!=null)
    ? dRow('temp','Temperature today',Math.round(live.tmin)+'° to '+Math.round(live.tmax)+'°C')
    : dRow('temp','Temperature (typical)',t.temp);
  /* no live reading = no air-quality row at all, rather than a made-up number */
  const aqiRow=(live&&live.aqi!=null)
    ? dRow('air','Air quality today',aqiBand(live.aqi)+' · '+live.aqi,'good')
    : '';
  if(isTour(t)){
    /* road trips get a TRIP-appropriate set — no elevation/fitness/railhead trek placeholders */
    const pk=pickupInfo(t);
    return fc
      +dRow('calendar','Best time',t.best)
      +dRow('altitude','Level',t.lvl)
      +dRow('clock','Duration',t.dur)
      +tempRow+aqiRow
      +dRow('community','Group size',(KNOW[0]&&KNOW[0][1])||'8–15','gsep')
      +dRow('user','Min age',(KNOW[1]&&KNOW[1][1])||'10+ yrs')
      +dRow('pin','Pickup',pk.city,'gsep')
      +(pk.drop?dRow('pin','Drop-off',pk.drop):'');
  }
  const b=baseInfo(t);
  return fc
    +dRow('altitude','Elevation',t.elev)
    +dRow('cloud','Climate',t.climate)
    +tempRow+aqiRow
    +KNOW.map((k,i)=>dRow(k[0],k[2],k[1],i===0?'gsep':'')).join('')
    +dRow('pin','Base town',b.town,'gsep')
    +dRow('distance','Nearest rail',b.rail)
    +dRow('msr:flight','Airport',b.air);
}
function renderDetailFacts(t){
  const box=document.getElementById('dFacts');if(!box)return;
  /* paint immediately from what we know, then fill in the live readings */
  box.innerHTML=factsHTML(t,swrGet(condKey(coordsFor(t)))?swrGet(condKey(coordsFor(t))).data:null);
  hydrate(box);
  loadConditions(t).then(live=>{
    if(!live)return;
    const el=document.getElementById('dFacts');
    if(!el||cart.trek!==t)return;            /* user moved on while it loaded */
    el.innerHTML=factsHTML(t,live);
    const note=el.parentElement&&el.parentElement.querySelector('.dfacts-src');
    if(note)note.textContent=live.exact?'Live forecast · Open-Meteo':'Area forecast for '+(t.region||'this region')+' · Open-Meteo';
    hydrate(el);
  }).catch(()=>{});
}
/* ============================================================
   INSPIRE — travel quotes + trek fun facts, shown below the news
   section as a swipeable, auto-rotating carousel. Users can swipe back
   to re-read; auto-advance pauses right after a manual swipe and while
   the view is hidden.
   ============================================================ */
const INSPO=[
  {t:'quote',x:'The mountains are calling and I must go.',a:'John Muir'},
  {t:'fact', x:'The Himalayas are still growing — India pushes north about 5 cm a year, nudging the peaks a few millimetres taller each year.'},
  {t:'quote',x:'It is not the mountain we conquer, but ourselves.',a:'Sir Edmund Hillary'},
  {t:'fact', x:'At 4,000 m the air holds roughly 40% less oxygen than at sea level — exactly why we build in acclimatisation days.'},
  {t:'quote',x:'Jobs fill your pocket, but adventures fill your soul.',a:'Jaime Lyn Beatty'},
  {t:'fact', x:'Uttarakhand’s Valley of Flowers bursts into over 500 species of wild alpine flowers every monsoon.'},
  {t:'quote',x:'Not all those who wander are lost.',a:'J. R. R. Tolkien'},
  {t:'fact', x:'Descending is often harder on your knees than climbing — trekking poles can cut the load by up to 25%.'},
  {t:'quote',x:'Travel far enough, you meet yourself.',a:'David Mitchell'},
  {t:'fact', x:'Chandratal — “Moon Lake” in Spiti at 4,300 m — shifts from turquoise to deep blue through the day.'},
  {t:'quote',x:'The journey of a thousand miles begins with a single step.',a:'Lao Tzu'},
  {t:'fact', x:'Trekking at altitude can burn 400–700 calories an hour — eat well and keep sipping water.'},
  {t:'quote',x:'Life is either a daring adventure or nothing at all.',a:'Helen Keller'},
  {t:'fact', x:'The Ganga begins as a glacier snout at Gaumukh, nearly 4,000 m up in the Uttarakhand Himalaya.'}
];
const _inspoIv={};
function renderInspire(id){
  const box=document.getElementById(id);if(!box)return;
  /* shuffle a copy so it doesn't always open on the same line */
  const list=INSPO.slice();for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const tmp=list[i];list[i]=list[j];list[j]=tmp;}
  box.innerHTML='<div class="insp-track" id="'+id+'_tr">'+list.map(q=>
      '<div class="insp-slide '+q.t+'">'
      +'<span class="insp-badge">'+(q.t==='quote'?'<span class="msr">format_quote</span>Travel wisdom':'<span class="msr">lightbulb</span>Trek fact')+'</span>'
      +'<p class="insp-x">'+esc(q.x)+'</p>'
      +(q.a?'<div class="insp-a">— '+esc(q.a)+'</div>':'')
      +'</div>').join('')
    +'</div>';
  hydrate(box);
  const tr=document.getElementById(id+'_tr');
  let idx=0,paused=false,pauseT=null,prog=false,progT=null;
  const jump=i=>{i=(i+list.length)%list.length;idx=i;prog=true;clearTimeout(progT);
    tr.scrollTo({left:i*tr.clientWidth,behavior:'smooth'});progT=setTimeout(()=>{prog=false;},700);};
  tr.addEventListener('scroll',()=>{
    const i=Math.round(tr.scrollLeft/Math.max(1,tr.clientWidth));
    if(i>=0&&i<list.length&&i!==idx)idx=i;
    if(prog)return;                       /* ignore our own smooth-scroll */
    paused=true;clearTimeout(pauseT);pauseT=setTimeout(()=>{paused=false;},9000);
  },{passive:true});
  clearInterval(_inspoIv[id]);
  _inspoIv[id]=setInterval(()=>{
    if(paused||!tr.offsetParent)return;   /* skip after a recent swipe, or while the view is hidden */
    jump(idx+1);
  },6500);
}
function openDetail(i){const t=treks[i];if(!t)return;
  if(isTour(t)){openTrip(i);return;}   /* road trips get their own distinct detail view */
  logEvent('view_trek',{trek:t.n});
  cart.trek=t;
  const hh=document.getElementById('dHero');hh.style.transform='';
  renderHero(hh,t);   /* shimmer skeleton until the hero photo is ready */
  const dc=document.getElementById('dCredit');
  if(dc){if(t.credit){dc.innerHTML='<span class="msr">photo_camera</span> '+esc(t.credit);dc.classList.add('on');}else dc.classList.remove('on');}
  const dtg=document.getElementById('dTag');
  if(dtg){dtg.innerHTML=tagBadge(t);dtg.style.display=trekTag(t)?'':'none';}
  const doff=document.getElementById('dOffer');
  if(doff){const of=(t.offer||'').trim();if(of){doff.innerHTML='<span class="msr">local_offer</span><div><b>Offer</b><span>'+esc(of)+'</span></div>';doff.style.display='flex';}else doff.style.display='none';}
  document.getElementById('dName').textContent=t.n;
  document.getElementById('dReg').textContent=t.region;
  document.getElementById('dRate').textContent=t.r;
  document.getElementById('dRev').textContent='('+t.rev+' reviews)';
  const _dl=document.getElementById('dLvl');if(_dl)_dl.textContent=t.lvl;   /* difficulty removed from the header; guarded in case the element returns */
  const _tour=isTour(t);
  const dsb=document.getElementById('dScoreBadge');if(dsb){if(_tour){dsb.innerHTML='';dsb.style.display='none';}else{dsb.style.display='';dsb.innerHTML=trekScoreBadge(t,'trek-score-lg')+'<span class="d-score-cap">Trek score</span>';}}
  const _ft=document.getElementById('dFactsTitle');if(_ft)_ft.textContent=_tour?'Trip details':'Trek details';
  const _fm=document.getElementById('dFactsMap');if(_fm)_fm.textContent=_tour?'Route map →':'Trail map →';
  document.getElementById('dDesc').textContent=t.desc;
  renderDetailLeader(t);                       /* paint now if guides are loaded… */
  if(!_guidesLoaded)loadGuides().then(()=>{if(cart.trek===t)renderDetailLeader(t);});   /* …else fill in when they arrive */
  const stats=[['altitude',t.alt,'Altitude'],['clock',t.dur,'Duration'],['distance',t.dist,'Distance'],['calendar',t.best,'Best Time']];
  document.getElementById('dStats').innerHTML=stats.map(s=>`<div class="stat"><div class="ic" style="display:grid;place-items:center">${ic(s[0],20)}</div><b>${(s[1]==null||s[1]==='')?'—':esc(String(s[1]))}</b><small>${s[2]}</small></div>`).join('');
  document.getElementById('dHl').innerHTML=hlHTML(t);
  renderDetailFacts(t);
  document.getElementById('dIncl').innerHTML=inclCard(INCL,EXCL);
  const dit=trekItin(t);
  document.getElementById('dItinPrev').innerHTML=dit.slice(0,3).map((d,i)=>`<div class="tl"><div class="line"><div class="dot"></div>${i<2?'<div class="rod"></div>':''}</div><div class="bd"><div class="d">Day ${i+1}</div><h3>${d[0]}</h3></div></div>`).join('');
  document.getElementById('dRevPrev').innerHTML=reviewPreviewHTML(t);
  document.getElementById('dFav').classList.remove('on');
  const cta=document.getElementById('dCta');
  if(t.soon){cta.innerHTML=ic('bell',16)+' Coming Soon · Notify me';cta.onclick=()=>wa(t.n+' — please notify me when it goes live.');}
  else if(isTour(t)){cta.innerHTML='Book this trip&nbsp; →';cta.onclick=()=>openTourDepart(t.idx);}
  else{cta.innerHTML='View Dates &amp; Price&nbsp; →';cta.onclick=()=>go('selectDate');}
  const rd=document.getElementById('dReadiness');if(rd){rd.innerHTML=readinessCardHTML(t);hydrate(rd);}
  renderDetailGetting(t);
  refreshGearReco(t);          /* recommended gear, selected for this trek */
  renderDetailNews(t.n);
  go('detail');
}
/* ============================================================
   ROAD TRIP DETAIL (#trip) — a distinct layout from the trek page.
   Same data + booking engine, but a route timeline is the centrepiece,
   the facts are a compact chip band, and a sticky booking bar carries
   the price + "Book this trip". Reached via openDetail() routing tours here.
   ============================================================ */
function openTrip(i){const t=treks[i];if(!t)return;renderTrip(t);go('trip');}
function renderTrip(t){
  cart.trek=t;
  const g=id=>document.getElementById(id);
  const hh=g('tripHero');if(hh){hh.style.transform='';renderHero(hh,t);}
  const cr=g('tripCredit');
  if(cr){if(t.credit){cr.innerHTML='<span class="msr">photo_camera</span> '+esc(t.credit);cr.classList.add('on');}else cr.classList.remove('on');}
  const db=g('tripDepBadge');if(db){db.textContent=depLabel(t);db.style.display=depLabel(t)?'':'none';}
  g('tripName').textContent=t.n;
  g('tripReg').textContent=(destById(t.dest_id)||{}).n||t.region||'';
  g('tripRate').textContent=t.r;
  g('tripRev').textContent='('+t.rev+' reviews)';
  /* compact fact band instead of the trek 4-stat grid */
  const q=[['clock',t.dur||((t.days||'')+' days')],['altitude',t.lvl||'—'],['calendar',t.best||'—'],['community',((typeof KNOW!=='undefined'&&KNOW[0]&&KNOW[0][1])||'8–15')+' group']];
  g('tripQuick').innerHTML=q.map(x=>`<span class="tq"><span class="ic">${ic(x[0],14)}</span>${esc(String(x[1]))}</span>`).join('');
  /* offer banner */
  const of=g('tripOffer'),ov=(t.offer||'').trim();
  if(of){if(ov){of.innerHTML='<span class="msr">local_offer</span><div><b>Offer</b><span>'+esc(ov)+'</span></div>';of.style.display='flex';of.parentElement.style.display='';}else{of.style.display='none';of.parentElement.style.display='none';}}
  g('tripDesc').textContent=t.desc||'';
  renderTripWeather(t);
  g('tripRoute').innerHTML=routeTimeline(t);
  g('tripIncl').innerHTML=inclCard(INCL,EXCL);
  g('tripPickup').innerHTML=pickupBlockHTML(t);
  g('tripHl').innerHTML=hlHTML(t);
  g('tripRevPrev').innerHTML=reviewPreviewHTML(t);
  const fv=g('tripFav');if(fv)fv.classList.remove('on');
  /* sticky booking bar */
  const cta=g('tripCta'),cap=g('tripCtaCap'),pr=g('tripCtaPrice');
  if(pr)pr.innerHTML=priceTag(t);
  if(t.soon){if(cta){cta.innerHTML=ic('bell',16)+' Notify me';cta.onclick=()=>wa(t.n+' — please notify me when it goes live.');}if(cap)cap.textContent='coming soon';}
  else{if(cta){cta.innerHTML='Book this trip&nbsp; →';cta.onclick=()=>openTourDepart(t.idx);}if(cap)cap.textContent='from';}
  hydrate(g('trip'));
}
/* live 5-day forecast strip; hide the block if there's nothing to show */
function renderTripWeather(t){
  const box=document.getElementById('tripWx'),blk=document.getElementById('tripWxBlk');if(!box)return;
  const paint=live=>{
    const fc=(live&&live.days)?forecastStrip(live.days):'';
    if(!fc){if(blk)blk.style.display='none';return;}
    if(blk)blk.style.display='';
    box.innerHTML=fc+'<div class="dfacts-src" style="margin-top:8px">'+(live.exact?'Live forecast · Open-Meteo':'Area forecast for '+esc(t.region||'this region')+' · Open-Meteo')+'</div>';
  };
  const cached=swrGet(condKey(coordsFor(t)));
  paint(cached?cached.data:null);
  loadConditions(t).then(live=>{if(live&&cart.trek===t)paint(live);}).catch(()=>{});
}
/* the signature element: a dashed "road" timeline of day-by-day stops */
function routeTimeline(t){
  const it=trekItin(t);
  if(!it.length)return '<div class="route-empty">The full day-by-day route is shared on confirmation. Tap “Book this trip” or chat with us for the detailed plan.</div>';
  return '<div class="route-track">'+it.map((d,i)=>{
    const last=i===it.length-1;
    return '<div class="route-stop'+(last?' last':'')+'">'
      +'<div class="route-node"><span>'+(i+1)+'</span></div>'
      +'<div class="route-bd"><div class="route-day">Day '+(i+1)+'</div>'
      +'<h4>'+esc(d[0])+'</h4>'
      +(d[1]?'<p>'+esc(d[1])+'</p>':'')
      +'</div></div>';
  }).join('')+'</div>';
}
/* pickup / drop-off card (reuses pickupInfo — admin-set values win) */
function pickupBlockHTML(t){
  const pk=pickupInfo(t);
  return '<div class="pickup-card">'
    +'<div class="pickup-row"><span class="pickup-ic msr">trip_origin</span><div><small>Pickup</small><b>'+esc(pk.city)+'</b>'+(pk.alt.length?'<span class="pickup-alt">Also boardable en route: '+pk.alt.map(esc).join(' · ')+'</span>':'')+'</div></div>'
    +(pk.drop?'<div class="pickup-row"><span class="pickup-ic msr">place</span><div><small>Drop-off</small><b>'+esc(pk.drop)+'</b></div></div>':'')
    +(pk.map?'<a class="pickup-map" href="'+esc(pk.map)+'" target="_blank" rel="noopener"><span class="msr">map</span>Open pickup point in Maps →</a>':'')
    +'</div>';
}
async function shareTrek(){
  const t=cart.trek;if(!t)return;
  /* path URL (not #hash) so it gets a rich share card via the /t/ edge function */
  const url=window.location.origin+'/t/'+slugify(t.n);
  const data={title:'Tripomonk — '+t.n,text:`Check out the ${t.n} trek (${t.region}) on Tripomonk`,url};
  if(navigator.share){try{await navigator.share(data);return;}catch(e){if(e&&e.name==='AbortError')return;}}
  try{await navigator.clipboard.writeText(url);note('Trip link copied — share it anywhere!','Link copied');}
  catch(e){note(url,'Share this trip');}
}
/* open a trek/post directly from a shared deep link (#trek=Name) */
function handleDeepLink(){
  const h=window.location.hash||'';
  const m=h.match(/#trek=([^&]+)/);
  if(m){const name=decodeURIComponent(m[1]);setTimeout(()=>{try{openDetailByName(name);}catch(e){}},400);return;}
  /* new clean host-trip link: #trip=<slug> */
  const mt=h.match(/#trip=([^&]+)/);
  if(mt){const key=decodeURIComponent(mt[1]);setTimeout(()=>{try{openHostTripBySlug(key);}catch(e){}},400);return;}
  /* legacy host-trip link: #htrip=<id> (keep working for already-shared links) */
  const mh=h.match(/#htrip=([^&]+)/);
  if(mh){const id=decodeURIComponent(mh[1]);setTimeout(()=>{try{openHostTripDetail(id);}catch(e){}},400);}
}
function toggleFav(el){el.classList.toggle('on');el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');}

/* Day photos are gone on purpose: they were generic stock shots repeated down the page,
   so they read as noise, pushed the real content down and cost bandwidth. The day number
   now lives in the timeline node, which is what people actually scan for. */
function renderItinerary(){const t=cart.trek,it=trekItin(t);
  const totKm=it.reduce((s,d)=>s+(parseFloat(d[2])||0),0);
  const head=document.getElementById('itinHead');
  if(head){
    head.innerHTML=`<div class="itin-sum">
        <div><b>${it.length}</b><small>Days</small></div>
        <div><b>${totKm?totKm.toFixed(0)+' km':'—'}</b><small>Distance</small></div>
        <div><b>${esc(t.lvl||'—')}</b><small>Grade</small></div>
      </div>`
      +(trekItinUrl(t)?`<button class="btn ghost sm itin-dl" onclick="downloadItinerary()">${ic('download',15)} Download full itinerary (PDF)</button>`:'');
    hydrate(head);
  }
  document.getElementById('itinList').innerHTML=it.map((d,i)=>`<div class="itd${i===it.length-1?' last':''}">
    <div class="itd-rail"><span class="itd-num">${i+1}</span></div>
    <div class="itd-bd">
      <div class="itd-day">Day ${i+1}</div>
      <h3>${esc(d[0])}</h3>
      <p>${esc(d[1])}</p>
      <div class="itd-meta">${d[2]?`<span>${ic('distance',12)} ${esc(d[2])}</span>`:''}${d[3]?`<span>${ic('clock',12)} ${esc(d[3])}</span>`:''}</div>
    </div></div>`).join('')
    ||'<div class="empty"><p>Day-wise plan shared on confirmation.</p></div>';
  hydrate(document.getElementById('itinList'));
}

/* select date — only real bookable departures, no confusing month grid */
function parseStartDate(label){
  /* label like "18 May – 22 May" or "01 Jun – 05 Jun" → {day:'18', mo:'MAY'} */
  const m=(label||'').match(/(\d{1,2})\s*([A-Za-z]{3})/);
  if(!m)return{day:'',mo:''};
  return{day:m[1].replace(/^0/,''),mo:m[2].toUpperCase()};
}
function batchState(seats){
  const s=(seats||'').toLowerCase();
  if(/(sold|full|closed|waitlist)/.test(s))return 'full';
  if(/few/.test(s))return 'few';
  return 'ok';
}
function renderSelectDate(){const t=cart.trek;
  const batches=getBatches(t.n);
  /* pick first non-full batch as default selection */
  const firstIdx=batches.findIndex(b=>batchState(b.seats)!=='full');
  const sel=firstIdx>=0?firstIdx:0;
  const chosen=batches[sel];
  cart.date=chosen?chosen.label:''; cart.total=discPrice(chosen?(chosen.price||t.price):t.price,t);
  document.getElementById('batches').innerHTML=batches.length?batches.map((b,i)=>{
    const st=batchState(b.seats);const full=st==='full';
    const d=parseStartDate(b.label);
    const seatsRaw=String(b.seats||'').trim();const isNum=/^\d+$/.test(seatsRaw);
    const sLabel=full?(seatsRaw||'Sold out'):(isNum?seatsRaw+' seats available':(seatsRaw||'Available'));
    const sIcon=full?'block':st==='few'?'local_fire_department':'check_circle';
    const onClick=full?'':`onclick="selBatch(this,'${(b.label||'').replace(/'/g,'')}',${b.price||t.price})"`;
    return `<div class="batch ${i===sel&&!full?'on':''} ${full?'full':''}" ${onClick}>
      <div class="calb"><span class="mo">${d.mo}</span><span class="dy">${d.day}</span></div>
      <div class="bd"><b>${esc(b.label)}</b><div class="s ${st==='few'?'few':full?'full':''}"><span class="msr" style="font-size:13px">${sIcon}</span>${esc(sLabel)}</div></div>
      <div class="rt"><div class="pr">${trekDiscount(t)?`<s style="opacity:.6;font-weight:600;font-size:.8em">${INR(b.price||t.price)}</s> ${INR(discPrice(b.price||t.price,t))}`:INR(b.price||t.price)}</div>${full?'':'<div class="radio"></div>'}</div>
    </div>`;
  }).join(''):`<div class="empty"><p>No departures scheduled yet. Tap below to enquire on WhatsApp.</p></div>`;
  document.getElementById('inclusions').innerHTML=INCL.map(x=>`<div class="inclc"><div class="ic">${ic(x[0],20)}</div>${x[1]}</div>`).join('');
  hydrate(document.getElementById('selectDate'));
}
function selBatch(el,d,price){document.querySelectorAll('#batches .batch').forEach(b=>b.classList.remove('on'));el.classList.add('on');cart.date=d;cart.total=discPrice(price,cart.trek);}

/* travellers + review + pay */
function trav(n){cart.pax=Math.max(1,cart.pax+n);document.getElementById('travN').textContent=cart.pax;
  document.getElementById('travTot').textContent=INR(cart.total*cart.pax);}
function checkTravellers(){
  const g=id=>document.getElementById(id);
  const name=(g('leadName').value||'').trim();
  const phone=(g('leadPhone').value||'').replace(/\D/g,'');
  const email=(g('leadEmail').value||'').trim();
  const emName=(g('emName').value||'').trim();
  const emPhone=(g('emPhone').value||'').replace(/\D/g,'');
  if(!name){note('Please enter the lead trekker name.','Name required');g('leadName').focus();return;}
  if(phone.length<10){note('Please enter a valid 10-digit mobile number.','Mobile required');g('leadPhone').focus();return;}
  if(!email||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){note('Please enter a valid email address.','Email required');g('leadEmail').focus();return;}
  if(!emName){note('Please enter an emergency contact name.','Emergency contact required');g('emName').focus();return;}
  if(emPhone.length<10){note('Please enter a valid emergency contact mobile.','Emergency contact required');g('emPhone').focus();return;}
  if(emPhone===phone){note('Emergency contact should be different from your own number.','Check emergency contact');g('emPhone').focus();return;}
  /* stash on the cart so it flows into the booking + payment */
  cart.contact={name,phone,email,emName,emPhone,bookedFor:_bookFor};
  /* only update the account's saved name/contact when booking for YOURSELF —
     otherwise a "someone else" booking would overwrite your own profile */
  if(_bookFor==='self'){saveUserName(name);saveContact(cart.contact);}
  go('review');
}
/* who the booking is for — 'self' (autofill from profile) or 'other' (blank form) */
let _bookFor='self';
function setBookFor(v){
  _bookFor=v;const g=id=>document.getElementById(id);
  const bs=g('bookForSelf'),bo=g('bookForOther'),nt=g('bookForNote');
  if(bs)bs.classList.toggle('on',v==='self');
  if(bo)bo.classList.toggle('on',v==='other');
  if(v==='self'){
    const c=getContact()||{};
    const nm=getSavedName()||c.name||'',ph=String(getSavedMobile()||c.phone||'').replace(/\D/g,'').slice(-10),em=getUserEmail()||c.email||'';
    if(g('leadName'))g('leadName').value=nm;
    if(g('leadPhone'))g('leadPhone').value=ph;
    if(g('leadEmail'))g('leadEmail').value=em;
    const miss=[];if(!nm)miss.push('name');if(!ph)miss.push('mobile');if(!em)miss.push('email');
    if(nt){
      if(miss.length){nt.style.display='';nt.innerHTML='Your profile is missing your '+esc(miss.join(', '))+'. <a onclick="go(\'editProfile\')" style="color:var(--accent2);font-weight:600;cursor:pointer">Complete your profile →</a> or just fill it in below.';}
      else{nt.style.display='none';nt.innerHTML='';}
    }
  }else{
    if(g('leadName'))g('leadName').value='';
    if(g('leadPhone'))g('leadPhone').value='';
    if(g('leadEmail'))g('leadEmail').value='';
    if(nt){nt.style.display='';nt.textContent="Enter the traveller's details below. Your emergency contact stays the same.";}
    if(g('leadName'))setTimeout(()=>{try{g('leadName').focus();}catch(e){}},50);
  }
}
function saveContact(c){try{localStorage.setItem('tmk_contact',JSON.stringify(c));}catch(e){}}
function getContact(){try{return JSON.parse(localStorage.getItem('tmk_contact')||'null');}catch(e){return null;}}
function prefillTravellers(){
  const g=id=>document.getElementById(id);const c=getContact()||{};
  if(g('emName')&&!g('emName').value)g('emName').value=c.emName||'';
  if(g('emPhone')&&!g('emPhone').value)g('emPhone').value=c.emPhone||'';
  _bookFor='self';setBookFor('self');   /* default: booking for yourself, autofilled from profile */
}
/* departure / pickup city per trek (primary boarding point) */
const DEP_CITIES=['Delhi','Rishikesh','Dehradun'];
const TREK_DEP={'Kedarkantha':'Dehradun','Har Ki Dun':'Dehradun','Brahmatal':'Dehradun','Roopkund':'Dehradun','Nag Tibba':'Dehradun','Valley of Flowers':'Rishikesh','Hampta Pass':'Delhi'};
/* real departure city per trek = the region-aware pickup/assembly city
   (Dehradun, Manali, Leh, Srinagar, Siliguri/NJP, Guwahati…), not a North-only default */
function depCity(t){return (pickupInfo(t)||{}).city||'Dehradun';}
/* Region-aware pickup / assembly city for the booking flow. The gateway city where
   trekkers gather before the road transfer to the base town — NOT the North-only
   Dehradun/Rishikesh chain, which was wrong for Sikkim, the Northeast and the South. */
const REGION_PICKUP={
  'Uttarakhand':{city:'Dehradun',alt:['Rishikesh','Haridwar','Delhi']},
  'Himachal':{city:'Manali',alt:['Chandigarh','Delhi']},
  'Ladakh':{city:'Leh',alt:[]},
  'Kashmir':{city:'Srinagar',alt:[]},
  'Sikkim':{city:'Siliguri / NJP',alt:['Bagdogra','Gangtok']},
  'Arunachal':{city:'Guwahati',alt:['Tezpur']},
  'Meghalaya':{city:'Guwahati',alt:['Shillong']},
  'Nagaland':{city:'Dimapur',alt:['Kohima']},
  'West Bengal':{city:'Siliguri / NJP',alt:['Bagdogra']},
  'Maharashtra':{city:'Pune',alt:['Mumbai']},
  'Karnataka':{city:'Bengaluru',alt:['Mangaluru']},
  'Tamil Nadu':{city:'Coimbatore',alt:['Ooty']}
};
/* within-region pickup exceptions (a trek far from the region's main gateway) */
const TREK_PICKUP={
  'Roopkund':'Kathgodam','Brahmatal':'Kathgodam','Pindari Glacier':'Kathgodam',
  'Triund':'Dharamshala','Indrahar Pass':'Dharamshala','Kareri Lake':'Dharamshala','Bara Bhangal':'Dharamshala','Kugti Pass':'Dharamshala',
  'Yulla Kanda':'Shimla','Parang La':'Manali'
};
function pickupInfo(t){
  const name=t&&t.n;
  const r=REGION_PICKUP[t&&t.region]||{city:(t&&t.region)||'—',alt:[]};
  /* admin-set pickup wins over the region default (fixes "random pickup points") */
  const city=(t&&(t.pickup||t.dep))||TREK_PICKUP[name]||TREK_DEP[name]||r.city;
  const alt=(r.alt||[]).filter(c=>c!==city);
  const drop=(t&&t.dropoff||'').trim();
  const map=(t&&t.pickup_map||'').trim();
  return {city,alt,drop,map};
}
/* standard cancellation policy */
const CANCELLATION=[
  'More than 30 days before departure — full refund (less payment-gateway charges).',
  '15–29 days before — 75% refund.',
  '7–14 days before — 50% refund.',
  'Less than 7 days before, or no-show — no refund.',
  'If Tripomonk cancels for weather/safety, you get a full refund or a free date change.',
  'Refunds are processed to the original payment method within 7–10 working days.'
];
function reviewDetailsHTML(t){
  const pk=pickupInfo(t);const city=pk.city;
  const itin=trekItin(t).slice(0,3);
  return `
  <div class="sec" style="margin-top:18px"><h2 style="font-size:15px">Trip summary</h2></div>
  <div class="rv-block"><div class="rv-h">${ic('distance',16)} Itinerary</div>
    ${itin.length?itin.map((d,i)=>`<div class="rv-it"><b>Day ${i+1}:</b> ${esc(d[0])}</div>`).join('')+(trekItin(t).length>3?`<div class="rv-more" onclick="go('itinerary')">View full itinerary →</div>`:''):'<div class="rv-it">Detailed day-wise plan shared on confirmation.</div>'}
  </div>
  <div class="rv-block"><div class="rv-h">${ic('pin',16)} Pickup &amp; drop-off</div>
    <div class="rv-it"><b>Pickup:</b> ${esc(city)}${pk.alt.length?' (also boardable from '+pk.alt.map(esc).join(' / ')+' en route)':''}${pk.map?` · <a href="${esc(pk.map)}" target="_blank" rel="noopener" style="color:var(--accent2);font-weight:600">Open in Maps →</a>`:''}</div>
    ${pk.drop?`<div class="rv-it"><b>Drop-off:</b> ${esc(pk.drop)}</div>`:''}
    <div class="rv-it"><b>Reporting:</b> by 6:30 AM on Day 1 at the ${esc(city)} pickup point (exact spot shared after booking)</div>
  </div>
  <div class="rv-block"><div class="rv-h">${ic('check',16)} Inclusions</div>
    <div class="rv-it">Accommodation, all meals on trek, certified trek leader &amp; guides, permits &amp; forest fees, safety equipment and first-aid.</div>
    <div class="rv-h" style="margin-top:10px">${ic('close',16)} Exclusions</div>
    <div class="rv-it">Travel to/from the pickup city, personal expenses, insurance, anything not listed in inclusions.</div>
  </div>
  <div class="rv-block"><div class="rv-h">${ic('alert',16)} Cancellation policy</div>
    ${CANCELLATION.map(c=>`<div class="rv-it">• ${c}</div>`).join('')}
  </div>
  <div class="rv-block"><div class="rv-h">${ic('list',16)} Important instructions</div>
    <div class="rv-it">Carry a valid government photo ID. Start light cardio 2–3 weeks before. Mobile network is limited on the trail. Follow your trek leader's safety instructions at all times.</div>
  </div>
  <div class="rv-block" style="background:rgba(47,107,255,.1);border-color:rgba(47,107,255,.3)"><div class="rv-h">${ic('card',16)} Amount payable now</div>
    <div class="rv-it" style="font-size:15px;color:var(--text)"><b>${INR(cart.payNow||Math.round((cart.grand||cart.total)*0.25))}</b> due now (gear + 25% trek) · Total ${INR(cart.grand||cart.total)}</div>
  </div>`;
}
function syncReview(){const t=cart.trek;
  document.getElementById('rvPh').style.backgroundImage=`url('${t.img}')`;
  document.getElementById('rvName').textContent=t.n;
  document.getElementById('rvDate').textContent=cart.date;
  document.getElementById('rvPax').textContent=cart.pax+' trekker'+(cart.pax>1?'s':'');
  renderReviewGear(t);          /* the gear the user ticked on the trek page flows in here */
  computeTotal();
  const fc=document.getElementById('rvFitness');if(fc){fc.innerHTML=bookingFitnessHTML(t);hydrate(fc);}
  const d=document.getElementById('rvDetails');if(d){d.innerHTML=reviewDetailsHTML(t);}
  hydrate(document.getElementById('review'));
}
/* the pre-payment fitness check — informs, never blocks */
function bookingFitnessHTML(t){
  const req=trekReqScore(t);
  if(!hasFitness()){
    return `<div class="fit-check"><div class="fit-check-h"><span class="msr">bolt</span> Fitness check</div>
      <p class="fit-check-p">This trek needs a readiness score of about <b>${req}</b>. Take a 2-min check so we can help you prepare.</p>
      <button class="btn ghost" onclick="go('fitness')"><span class="msr">fitness_center</span> Check my readiness</button></div>`;
  }
  const you=computeFitness().score,rd=readiness(you,req);
  return `<div class="fit-check fit-b-${rd.k}"><div class="fit-check-h"><span class="msr">bolt</span> Fitness check</div>
    <div class="fit-check-row"><div><small>Your score</small><b class="fit-${rd.k}">${you}</b></div><div><small>Required</small><b>${req}</b></div><div class="fit-check-st fit-${rd.k}"><span class="fit-dot"></span>${rd.label}</div></div>
    ${rd.k==='green'?'<p class="fit-check-p">You\'re ready for this trek. Continue below.</p>':`<p class="fit-check-p">${rd.msg}</p><div class="fit-check-cta"><button class="btn ghost sm" onclick="openTrainingPlan('${jsq(t.n)}')"><span class="msr">calendar_month</span> Prep plan</button><button class="btn ghost sm" onclick="go('home')"><span class="msr">landscape</span> Easier trek</button></div>`}</div>`;
}
/* gear rental = the items ticked on the trek page, priced per-day × trek length */
function gearDaysCount(t){return Math.max(1,parseInt(String(t&&t.days||1),10)||1);}
function reviewGearTotal(t){const items=t?gearSelected(t):[];const daily=items.reduce((s,g)=>s+g.price,0);return daily*gearDaysCount(t);}
/* render the "Rented gear" block on the Review & Pay screen from the current selection */
function renderReviewGear(t){
  const box=document.getElementById('rvGear');if(!box)return;
  const items=t?gearSelected(t):[];
  if(!items.length){
    box.innerHTML='<div class="rv-block rg-block rg-empty" onclick="editReviewGear()"><div class="rv-h">'+ic('backpack',16)+' Rented gear</div>'
      +'<div class="rv-it">No rental gear added. <b class="rg-link">Pick gear →</b></div></div>';
    hydrate(box);return;
  }
  const days=gearDaysCount(t),daily=items.reduce((s,g)=>s+g.price,0),tot=daily*days;
  const rows=items.map(g=>'<div class="rg-row"><span class="msr rg-ic">'+g.icon+'</span>'
    +'<div class="rg-tx"><b>'+esc(g.name)+'</b><small>'+INR(g.price)+'/day × '+days+'d</small></div>'
    +'<span class="rg-amt">'+INR(g.price*days)+'</span></div>').join('');
  box.innerHTML='<div class="rv-block rg-block"><div class="rv-h">'+ic('backpack',16)+' Rented gear · '+items.length+' item'+(items.length>1?'s':'')
    +'<button type="button" class="rg-edit" onclick="editReviewGear()">Edit</button></div>'
    +rows
    +'<div class="rg-row rg-sub"><div class="rg-tx"><b>Gear subtotal</b><small>'+days+'-day rental</small></div><span class="rg-amt">'+INR(tot)+'</span></div></div>';
  hydrate(box);
}
/* jump back to the trek's gear picker to change the selection */
function editReviewGear(){const t=cart.trek;if(!t)return;openDetail(t);setTimeout(()=>{const el=document.getElementById('dGearBlk');if(el)el.scrollIntoView({behavior:'smooth',block:'center'});},350);}
function computeTotal(){const t=cart.trek;const base=cart.total*cart.pax;const gear=reviewGearTotal(t);const sum=base+gear;
  /* Pay-now = rental gear IN FULL + 25% of the trek fee. Gear is a small rental we
     collect upfront; only the trek carries a 25% deposit. Balance = the other 75% of trek. */
  const now=gear+Math.round(base*0.25);const bal=sum-now;cart.grand=sum;cart.gearTotal=gear;cart.payNow=now;
  /* Review & Pay summary */
  const px=document.getElementById('sPax');if(px)px.textContent=cart.pax;
  const b=document.getElementById('sBase');if(b)b.textContent=INR(base);
  const sg=document.getElementById('sGear'),sga=document.getElementById('sGearAmt');
  if(sg){if(gear>0){sg.style.display='flex';if(sga)sga.textContent=INR(gear);}else sg.style.display='none';}
  const tt=document.getElementById('sTot');if(tt)tt.textContent=INR(sum);
  /* Payment screen breakdown — total is the FULL amount incl. rented gear */
  const pa=document.getElementById('payAmt');if(pa)pa.textContent=INR(sum);
  const pyB=document.getElementById('pyBase');if(pyB)pyB.textContent=INR(base);
  const pyG=document.getElementById('pyGear'),pyGr=document.getElementById('pyGearRow');
  if(pyGr){if(gear>0){pyGr.style.display='flex';if(pyG)pyG.textContent=INR(gear);}else pyGr.style.display='none';}
  const pyN=document.getElementById('pyNow');if(pyN)pyN.textContent=INR(now);
  const pyBal=document.getElementById('pyBal');if(pyBal)pyBal.textContent=INR(bal);
  const pn=document.getElementById('payNow');if(pn)pn.textContent=INR(now);}
/* Ask the server for the AUTHORITATIVE price when the payment screen opens, then show
   exactly that — so the amount shown always equals what Razorpay charges, even if the
   client's cached trek price is stale. Silent no-op (keeps client numbers) if the
   server is old / offline; the charge itself is always the server's number anyway. */
async function refreshPayQuote(){
  const t=cart.trek;if(!t)return;
  const gearIds=(gearSelected(t)||[]).map(g=>g.id);
  let q;try{q=await rzpCall('quote',{booking:{trek:t.n,date:cart.date,pax:cart.pax,gear_ids:gearIds}});}catch(e){return;}
  if(!q||q.error||typeof q.paid!=='number'||typeof q.total!=='number')return;
  const base=Number(q.base)||0,gear=Number(q.gearTotal)||0,sum=Number(q.total)||0,now=Number(q.paid)||0,bal=sum-now;
  cart.grand=sum;cart.gearTotal=gear;cart.payNow=now;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=INR(v);};
  set('payAmt',sum);set('pyBase',base);
  const gr=document.getElementById('pyGearRow');if(gr){if(gear>0){gr.style.display='flex';set('pyGear',gear);}else gr.style.display='none';}
  set('pyNow',now);set('pyBal',bal);set('payNow',now);
}
function selPay(el){document.querySelectorAll('#payment .pay').forEach(p=>p.classList.remove('on'));el.classList.add('on');}

/* call the secure Razorpay Edge Function */
/* the logged-in user's access token — lets the edge function credit the right wallet */
async function authToken(){
  const sb=getSupaClient();if(!sb)return'';
  try{const{data}=await sb.auth.getSession();return (data&&data.session&&data.session.access_token)||'';}catch(e){return'';}
}
async function rzpCall(action,payload){
  const r=await fetch(SB.SUPABASE_URL+'/functions/v1/razorpay',{
    method:'POST',
    headers:{'Content-Type':'application/json',Authorization:'Bearer '+SB.SUPABASE_ANON_KEY,apikey:SB.SUPABASE_ANON_KEY},
    body:JSON.stringify(Object.assign({action},payload))
  });
  return r.json();
}
async function confirmBooking(){
  const t=cart.trek, total=cart.grand||cart.total;
  const c=cart.contact||getContact()||{};
  const name=c.name||(document.getElementById('leadName')?document.getElementById('leadName').value:'').trim()||'Guest';
  if(!c.phone||!c.email||!c.emName||!c.emPhone){note('Please complete your contact and emergency details first.','Details required');go('travellers');return;}
  if(!window.Razorpay){note('Payment gateway is loading — please wait a moment and try again.','Please wait');return;}
  if(!sbOn){note('Payment service not configured. Please contact Tripomonk.','Payment error');return;}
  const gearIds=(cart.trek?gearSelected(cart.trek):[]).map(g=>g.id);
  const bookingReq={kind:'trek',trek:t.n,date:cart.date,pax:cart.pax,name:name,email:c.email||getUserEmail()||'',phone:c.phone||'',emergency_name:c.emName||'',emergency_phone:c.emPhone||'',gear_ids:gearIds};
  let advanceAmt=Math.round(total*0.25);
  let pricedBooking=null;
  /* 1) create a server-side order; server calculates the trusted amount */
  let order;
  try{order=await rzpCall('create',{booking:bookingReq});pricedBooking=order&&order.booking?order.booking:null;if(pricedBooking){advanceAmt=Number(pricedBooking.paid)||advanceAmt;}}catch(e){order=null;}
  if(!order||!order.order_id){note((order&&order.error)?order.error:'Could not start payment. Please try again.','Payment error');return;}
  const rzp=new window.Razorpay({
    key: order.key_id,
    order_id: order.order_id,
    amount: order.amount,
    currency: order.currency||'INR',
    name: 'Tripomonk',
    description: t.n+' Trek — '+cart.date,
    image: 'icons/icon-192.png',
    prefill: {name: name, email: c.email||'', contact: c.phone||''},
    notes: {trek: t.n, date: cart.date, pax: String(cart.pax), emergency: (c.emName||'')+' '+(c.emPhone||'')},
    theme: {color: '#2f6bff'},
    handler: async function(response){
      /* 2) verify the signature server-side before confirming */
      let res;
      try{res=await rzpCall('verify',{
        razorpay_order_id:response.razorpay_order_id,
        razorpay_payment_id:response.razorpay_payment_id,
        razorpay_signature:response.razorpay_signature,
        booking:bookingReq
      });}catch(e){res=null;}
      if(!res||!res.ok){
        note('Payment received but we could not verify it instantly. Our team will confirm your seat shortly — please save your payment ID: '+(response.razorpay_payment_id||'—'),'Verification pending');
        return;
      }
      saveUserName(name);
      const sbk=(res&&res.booking)||pricedBooking||bookingReq;
      const b={id:response.razorpay_payment_id,name:sbk.name||name,trek:sbk.trek||t.n,img:t.img,date:sbk.date||cart.date,pax:sbk.pax||cart.pax,total:sbk.total||total,paid:sbk.paid||advanceAmt,ts:Date.now(),status:'Confirmed',checkedIn:false,paymentId:response.razorpay_payment_id};
      const all=getBookings();all.unshift(b);saveBookings(all);cart.booking=b;
      logEvent('booking',{trek:b.trek,amount:Number(b.paid)||0});
      if(window.fbTrack)window.fbTrack('Purchase',{value:Number(b.total)||Number(b.paid)||0,currency:'INR',content_name:b.trek||'',content_type:'product'});
      document.getElementById('scName').textContent=t.n;
      showTicket(b);go('success');
    },
    modal:{ondismiss:function(){note('Payment cancelled — your seat is not yet confirmed.','Cancelled');}}
  });
  rzp.open();
}
function showTicket(b){const t=treks.find(x=>x.n===b.trek)||cart.trek;
  document.getElementById('tkPh').style.backgroundImage=`url('${b.img||t.img}')`;
  document.getElementById('tkName').textContent=b.trek;
  document.getElementById('tkId').textContent=b.id;document.getElementById('tkDate').textContent=b.date;
  document.getElementById('tkPax').textContent=b.pax;document.getElementById('tkPaid').textContent=INR(b.paid)+' / '+INR(b.total);
  /* lead traveller name on the ticket */
  const trav=document.getElementById('tkTravellerRow');
  if(trav){if(b.name){trav.style.display='';document.getElementById('tkTraveller').textContent=b.name;}else trav.style.display='none';}
  /* pickup point + a Maps link on the ticket */
  const pk=pickupInfo(t||{}),pr=document.getElementById('tkPickupRow');
  if(pr){
    if(pk&&pk.city){pr.style.display='';document.getElementById('tkPickup').textContent=pk.city+(pk.drop?' · Drop-off: '+pk.drop:'');
      const ml=document.getElementById('tkPickupMap');if(ml){if(pk.map){ml.href=pk.map;ml.style.display='inline-flex';}else ml.style.display='none';}}
    else pr.style.display='none';
  }
  buildQR(ticketPayload(b));hydrate(document.getElementById('ticket'));
}
function openTicket(id){const b=getBookings().find(x=>x.id===id);if(!b)return;cart.booking=b;showTicket(b);go('ticket');}
function buildQR(p){const el=document.getElementById('qr');try{if(typeof qrcode==='undefined')throw 0;const q=qrcode(0,'M');q.addData(p||'TMK');q.make();el.innerHTML=q.createSvgTag({cellSize:4,margin:1,scalable:true});}catch(e){el.innerHTML='<div style="color:#0a1626;text-align:center;padding-top:60px;font-weight:600">'+(cart.booking?cart.booking.id:'QR')+'</div>';}}

/* bookings + wishlist */
function bookingCard(b){
  const st=b.checkedIn?'in':String(b.status||'').toLowerCase();
  const label=b.checkedIn?'Checked in':(b.status||'Confirmed');
  const trekName=jsq(String(b.trek||'').replace(' (Activity)',''));
  return `<div class="bkcard">
    <div class="bk-hero" onclick="openTicket('${b.id}')" style="background-image:url('${esc(b.img||'')}')">
      <span class="bk-status ${st}">${esc(label)}</span>
      <div class="bk-hero-t">${esc(b.trek)}</div>
    </div>
    <div class="bk-body">
      <div class="bk-meta"><span>${ic('calendar',13)} ${esc(b.date)}</span><span>${ic('ticket',13)} ${esc(b.id)}</span></div>
      <div class="bk-actions">
        <button class="bk-btn primary" onclick="openTicket('${b.id}')">${ic('ticket',15)} E-Ticket</button>
        <button class="bk-btn bk-guard" onclick="openGuardian('${b.id}')"><span class="msr">shield</span> Guardian</button>
        <button class="bk-btn" onclick="openPackingFor('${trekName}')">${ic('list',15)} Packing</button>
      </div>
    </div></div>`;
}
function bkPopCard(t,i){
  return `<div class="bk-pop-c" onclick="openDetail(${i})">
    <div class="bk-pop-img" style="background-image:url('${esc(t.img||'')}')"></div>
    <div class="bk-pop-tx"><b>${esc(t.n)}</b><small>${esc(t.region||'')} · ${INR(t.price||0)}</small></div></div>`;
}
/* ============================================================
   TREK GUARDIAN — an OFFLINE safety companion for a booked trek.
   Reads only client data (the saved booking, the trek, baseInfo, ITIN) +
   constants, so it works with NO signal on the trail. tel: links and this
   whole page work offline; sharing/SOS need signal (that's the whole point
   of "if you don't hear from me…").
   ============================================================ */
const GUARDIAN_SOS=[
  ['112','Emergency — police · fire · medical'],
  ['108','Ambulance / medical response'],
  ['1070','State disaster (SDRF) helpline']
];
const AMS_SIGNS=['Headache that water &amp; rest won’t shift','Nausea or vomiting','Dizziness / feeling unsteady','Breathless even while resting','No appetite on the climb','Poor sleep, unusual exhaustion'];
const AMS_DO=['Stop — do NOT climb any higher','Rest, hydrate, tell your trek leader','If it gets worse, DESCEND at once','Never leave someone with AMS alone'];
let _guardBk=null;
function openGuardian(id){const b=getBookings().find(x=>x.id===id);if(!b){note('Booking not found.','Trek Guardian');return;}_guardBk=b;go('guardian');}
function guardianTrek(){const b=_guardBk;if(!b)return null;return treks.find(x=>x.n===String(b.trek||'').replace(' (Activity)',''))||null;}
function renderGuardian(){
  const b=_guardBk;const box=document.getElementById('guardianBody');if(!box)return;
  if(!b){box.innerHTML='<div class="empty" style="padding:30px 6px"><p>Open Trek Guardian from one of your bookings.</p><button class="btn sm" style="margin-top:10px" onclick="go(\'bookings\')">My bookings</button></div>';return;}
  const t=guardianTrek();const base=t?baseInfo(t):{town:'—',rail:'—',air:'—'};
  const itin=trekItin(t);const wnum=getWa();
  const trekName=esc(String(b.trek||'').replace(' (Activity)',''));
  box.innerHTML=`
    <div class="gd-note"><span class="msr">wifi_off</span> Works offline — open it on the trail even with no signal. Keep the app installed and screenshot this page before you start.</div>
    <div class="gd-card gd-trek">
      <div class="gd-trek-top"><span class="msr gd-shield">shield</span><div class="gd-trek-tx"><b>${trekName}</b><small>${esc(b.date||'')} · ${b.pax||1} trekker${(b.pax||1)>1?'s':''}</small></div></div>
      <div class="gd-facts">
        <div class="gd-fact"><span class="msr">pin_drop</span><small>Base town</small><b>${esc(base.town)}</b></div>
        <div class="gd-fact"><span class="msr">directions_railway</span><small>Nearest rail</small><b>${esc(base.rail)}</b></div>
        <div class="gd-fact"><span class="msr">flight</span><small>Nearest airport</small><b>${esc(base.air)}</b></div>
      </div>
    </div>
    <div class="gd-actions">
      <button class="gd-sos-btn" onclick="guardianSOS()"><span class="msr">sos</span> SOS — alert Tripomonk</button>
      <div class="gd-sos-hint"><span class="msr">priority_high</span> Life-threatening? Call <b>112</b> first — it's the first contact below.</div>
      <button class="gd-share" onclick="shareMyTrek()"><span class="msr">share_location</span> Share my trek with family</button>
    </div>
    <div class="gd-h"><span class="msr">contact_phone</span>Emergency contacts<small>tap to call — works offline</small></div>
    <div class="gd-card gd-contacts">
      ${GUARDIAN_SOS.map(c=>`<a class="gd-con" href="tel:${c[0]}"><span class="gd-con-ic msr">call</span><div class="gd-con-tx"><b>${c[0]}</b><small>${c[1]}</small></div><span class="msr gd-chev">chevron_right</span></a>`).join('')}
      <a class="gd-con" href="tel:+${esc(wnum)}"><span class="gd-con-ic msr">support_agent</span><div class="gd-con-tx"><b>Tripomonk support</b><small>+${esc(wnum)}</small></div><span class="msr gd-chev">chevron_right</span></a>
      <div class="gd-con gd-con-note"><span class="gd-con-ic msr">hiking</span><div class="gd-con-tx"><b>Your trek leader</b><small>Number is shared on WhatsApp before departure — save it in your phone.</small></div></div>
    </div>
    <div class="gd-h"><span class="msr">landscape</span>Altitude sickness (AMS)<small>know the signs</small></div>
    <div class="gd-card gd-ams">
      <div class="gd-ams-col"><div class="gd-ams-t warn"><span class="msr">warning</span> Watch for</div>${AMS_SIGNS.map(s=>`<div class="gd-ams-i">${s}</div>`).join('')}</div>
      <div class="gd-ams-col"><div class="gd-ams-t ok"><span class="msr">health_and_safety</span> What to do</div>${AMS_DO.map(s=>`<div class="gd-ams-i">${esc(s)}</div>`).join('')}</div>
    </div>
    ${itin.length?`<div class="gd-h"><span class="msr">map</span>Route &amp; itinerary</div><div class="gd-card gd-itin">${itin.map((d,i)=>`<div class="gd-day"><span class="gd-day-n">${i+1}</span><div class="gd-day-b"><b>${esc(d[0])}</b>${(d[2]||d[3])?`<small>${esc(d[2]||'')}${d[2]&&d[3]?' · ':''}${esc(d[3]||'')}</small>`:''}</div></div>`).join('')}</div>`:''}
    <div style="height:24px"></div>`;
  hydrate(box);
}
function shareMyTrek(){
  const b=_guardBk;if(!b)return;const t=guardianTrek();const base=t?baseInfo(t):{town:''};
  const msg='🏔️ I’m going trekking with Tripomonk.\n'
    +'Trek: '+String(b.trek||'').replace(' (Activity)','')+'\n'
    +'Dates: '+(b.date||'')+'\n'
    +(base.town&&base.town!=='—'?('Base: '+base.town+'\n'):'')
    +'Booking: '+b.id+'\n\n'
    +'Mobile network is limited on the trail — I may be out of touch for a few days. If you don’t hear from me by the end date, contact Tripomonk at +'+getWa()+'.';
  if(navigator.share){navigator.share({title:'My trek — Tripomonk',text:msg}).catch(()=>{try{wa(msg);}catch(e){}});}
  else wa(msg);
}
function guardianSOS(){
  const b=_guardBk;const name=String((b&&b.trek)||'my trek').replace(' (Activity)','');
  /* fire synchronously from the tap so the WhatsApp window isn't popup-blocked;
     112 is right above as a one-tap call for a true life-threatening emergency */
  wa('🆘 SOS — I need help on '+name+'.\nBooking: '+((b&&b.id)||'—')+'\nPlease call me / send help. If this is life-threatening I am also calling 112.');
}
/* best-effort trip date for a booking, as YYYY-MM-DD — used to split Upcoming vs Past.
   Prefers a stamped startISO; else parses the human date label ("1 Sept", "15 Jun 2026",
   "2026-09-01 · 6:30 AM"). Returns '' when it truly can't tell (then treated as upcoming). */
const _BK_MON={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
function bookingStartISO(b){
  if(b&&b.startISO)return b.startISO;
  const s=String((b&&b.date)||'').trim();if(!s)return '';
  let m=s.match(/(\d{4})-(\d{2})-(\d{2})/);if(m)return m[1]+'-'+m[2]+'-'+m[3];       /* already ISO */
  m=s.match(/(\d{1,2})\s*([A-Za-z]{3,})\.?\s*(\d{4})?/);                              /* "1 Sept 2026" */
  if(m){const mon=_BK_MON[m[2].toLowerCase().slice(0,3)];
    if(mon!=null){const day=+m[1],pad=n=>String(n).padStart(2,'0');
      let yr=m[3]?+m[3]:new Date().getFullYear();
      let iso=yr+'-'+pad(mon+1)+'-'+pad(day);
      if(!m[3]&&iso<todayISO(0)){iso=(yr+1)+'-'+pad(mon+1)+'-'+pad(day);}            /* no year + past → next year */
      return iso;}}
  return '';
}
function bookingIsPast(b){const iso=bookingStartISO(b);return iso?iso<todayISO(0):false;}
function renderBookings(){
  const bs=getBookings();const box=document.getElementById('bookList');
  if(bs.length){
    const up=[],past=[];
    bs.forEach(b=>{(bookingIsPast(b)?past:up).push(b);});
    up.sort((a,b)=>(bookingStartISO(a)||'9999').localeCompare(bookingStartISO(b)||'9999'));   /* soonest first */
    past.sort((a,b)=>(bookingStartISO(b)||'').localeCompare(bookingStartISO(a)||''));          /* most recent first */
    let html='';
    if(up.length)html+='<div class="bk-sec">Upcoming</div><div class="bk-list">'+up.map(bookingCard).join('')+'</div>';
    if(past.length)html+='<div class="bk-sec">Past trips</div><div class="bk-list bk-past">'+past.map(bookingCard).join('')+'</div>';
    box.innerHTML=html;
  }else{
    const pop=treks.slice(0,6).map((t,i)=>bkPopCard(t,i)).join('');
    box.innerHTML=`<div class="bk-empty">
      <div class="bk-empty-ill"><img src="illustrations/trekss.svg" alt="A trekker on the trail"/></div>
      <b>No bookings yet</b>
      <small>Your booked treks and e-tickets will show up here. Your next Himalayan adventure is one tap away.</small>
      <button class="bk-cta" onclick="go('explore')"><span class="msr">hiking</span> Browse Treks</button>
      <div class="bk-pop-h">🔥 Popular right now</div>
      <div class="bk-pop-row">${pop}</div>
    </div>`;
  }
  hydrate(box);
}
let _pkForce='';
function openPackingFor(trekName){_pkForce=trekName||'';go('packing');}
function renderWishlist(){document.getElementById('wishList').innerHTML=treks.slice(2,5).map(trekCard).join('');hydrate(document.getElementById('wishList'));}

/* community + packing + profile */
let commTab='Discover';
function renderCommTabs(){document.getElementById('commTabs').innerHTML=['Discover','Following'].map(t=>`<div class="ctab ${t===commTab?'on':''}" onclick="selCommTab('${t}')">${t}</div>`).join('');}
function selCommTab(t){commTab=t;renderFeed();}
/* Instagram-style stories row: Your Story + trekkers */
/* ============================================================
   STORIES — separate from posts. Live 24h, then stop showing.
   Ring spins while unseen; goes flat once viewed.
   ============================================================ */
let storyGroups=[];           /* [{n, uid, items:[...]}] */
const STORY_MS=5000;
function seenStories(){try{return JSON.parse(localStorage.getItem('tmk_seen_stories')||'{}');}catch(e){return{};}}
function markStorySeen(id){try{const s=seenStories();s[id]=1;localStorage.setItem('tmk_seen_stories',JSON.stringify(s));}catch(e){}}
const groupSeen=g=>{const s=seenStories();return g.items.every(i=>s[i.id]);};

async function loadStories(){
  const sb=getSupaClient();if(!sb){storyGroups=[];return;}
  const since=new Date(Date.now()-24*3600e3).toISOString();
  try{
    const{data}=await sb.from('stories').select('*').gt('created_at',since).order('created_at',{ascending:true});
    const by={};
    (data||[]).forEach(r=>{(by[r.author_name]=by[r.author_name]||[]).push(r);});
    const mine=myName();
    storyGroups=Object.keys(by).map(n=>({n,uid:(by[n][0]||{}).user_id||null,items:by[n]}))
      /* unseen first, your own always first */
      .sort((a,b)=>(a.n===mine?-1:b.n===mine?1:0)||(groupSeen(a)-groupSeen(b)));
    await loadAuthorPhotos(storyGroups.map(g=>g.n));
  }catch(e){storyGroups=[];}   /* table missing = no stories, not a crash */
}
function renderStories(){
  const box=document.getElementById('storiesRow');if(!box)return;
  const mine=myName();
  const myGroup=storyGroups.find(g=>g.n===mine);
  const others=storyGroups.filter(g=>g.n!==mine);
  const yours=`<div class="story ${myGroup?'mine-has':'add'}" onclick="${myGroup?`openStory('${jsq(mine)}')`:'addStory()'}">
      <div class="ring">${avatar(mine,57)}<span class="sadd" onclick="event.stopPropagation();addStory()">+</span></div>
      <small>Your story</small></div>`;
  box.innerHTML=yours+others.map(g=>{
    const seen=groupSeen(g);
    return `<div class="story ${seen?'seen':'unseen'}" onclick="openStory('${jsq(g.n)}')">
      <div class="ring">${avatar(g.n,57)}</div><small>${esc(handleFor(g.n))}</small></div>`;}).join('');
  hydrate(box);
}
/* ---- add a story ---- */
function addStory(){
  if(!isLoggedIn()){note('Please sign in to add a story.','Sign in required').then(()=>{_loginReturn='community';go('login');});return;}
  const f=document.getElementById('storyFile');if(f){f.value='';f.click();}
}
async function onStoryPick(input){
  const file=input.files&&input.files[0];if(!file)return;
  input.value='';
  if(!/^image\//.test(file.type)){note('Stories support photos right now.','Photo only');return;}
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in to add a story.','Sign in required');return;}
  note('Uploading your story…','Just a moment');
  try{
    /* stories are viewed full-screen on a phone — 1080px is plenty and uploads fast */
    const small=await compressImage(file,{maxW:1080,quality:.78});
    const path=`stories/${Date.now()}_${Math.random().toString(36).slice(2)}.jpg`;
    const{error:upErr}=await sb.storage.from('community').upload(path,small,{cacheControl:'3600',upsert:false});
    if(upErr)throw new Error(upErr.message);
    const{data:pub}=sb.storage.from('community').getPublicUrl(path);
    const{error}=await sb.from('stories').insert({user_id:uid,author_name:myName(),img:pub.publicUrl});
    if(error)throw new Error(error.message);
    document.getElementById('modal').classList.remove('show');
    await loadStories();renderStories();
    sfx('repost');
    note('Story added — it stays up for 24 hours.','Posted ✓');
  }catch(e){
    document.getElementById('modal').classList.remove('show');
    note('Could not add your story: '+e.message,'Error');
  }
}
/* ---- viewer ---- */
let _svGroup=null,_svIdx=0,_svTimer=null,_svLiked=false;
function openStory(name){
  const g=storyGroups.find(x=>x.n===name);if(!g||!g.items.length)return;
  if(name!==myName())logEvent('story_view',{who:name});
  _svGroup=g;_svIdx=0;
  const v=document.getElementById('storyViewer');v.classList.add('show');
  document.getElementById('svClose').onclick=closeStory;
  document.getElementById('svNext').onclick=()=>stepStory(1);
  document.getElementById('svPrev').onclick=()=>stepStory(-1);
  document.getElementById('svDel').onclick=deleteCurrentStory;
  showStoryFrame();
}
function closeStory(){
  clearTimeout(_svTimer);_svTimer=null;_svGroup=null;
  const vp=document.getElementById('svViewers');if(vp)vp.classList.remove('show');
  const v=document.getElementById('storyViewer');if(v)v.classList.remove('show');
  renderStories();   /* rings update to 'seen' */
}
function stepStory(d){
  if(!_svGroup)return;
  const next=_svIdx+d;
  if(next<0){_svIdx=0;showStoryFrame();return;}
  if(next>=_svGroup.items.length){
    /* roll on to the next person who still has something unseen */
    const mine=myName();
    const rest=storyGroups.filter(g=>g!==_svGroup&&g.n!==mine&&!groupSeen(g));
    if(rest.length){_svGroup=rest[0];_svIdx=0;showStoryFrame();return;}
    closeStory();return;
  }
  _svIdx=next;showStoryFrame();
}
function showStoryFrame(){
  const g=_svGroup;if(!g)return;
  const it=g.items[_svIdx];if(!it)return;
  markStorySeen(it.id);
  /* progress bars */
  const bars=document.getElementById('svBars');
  bars.innerHTML=g.items.map((_,i)=>`<div class="sb ${i<_svIdx?'done':i===_svIdx?'live':''}" style="--sbdur:${STORY_MS}ms"><i></i></div>`).join('');
  document.getElementById('svWho').innerHTML=`${avatar(g.n,30)}<div>${esc(g.n)}<br><small>${timeAgo(it.created_at)}</small></div>`;
  const stage=document.getElementById('svStage');
  stage.innerHTML=`<img src="${esc(it.img)}" alt=""/>`;
  hydrate(document.getElementById('storyViewer'));
  const mine=g.n===myName();
  const del=document.getElementById('svDel');if(del)del.classList.remove('show');   /* delete now lives in the footer */
  _svLiked=false;
  const foot=document.getElementById('svFoot');
  if(foot){
    if(mine){
      foot.innerHTML=`<button class="sv-seen" onclick="showStoryViewers()"><span class="msr">visibility</span> Seen by <b id="svSeenN">…</b></button>`
        +`<button class="sv-foot-del" onclick="deleteCurrentStory()" title="Delete story"><span class="msr">delete</span></button>`;
    }else{
      foot.innerHTML=`<div class="sv-reply"><input id="svReplyInput" placeholder="Reply to ${esc(properName(g.n).split(' ')[0])}…" autocomplete="off" onfocus="pauseStory()" onblur="resumeStory()" onkeydown="if(event.key==='Enter'){event.preventDefault();sendStoryReply();}"/>`
        +`<button class="sv-like" id="svLikeBtn" onclick="toggleStoryLike()" aria-label="Like story"><span class="msr">favorite</span></button>`
        +`<button class="sv-rsend" onclick="sendStoryReply()" aria-label="Send reply"><span class="msr">send</span></button></div>`;
    }
  }
  if(!mine)recordStoryView(it);
  refreshStoryFoot(it,mine);
  clearTimeout(_svTimer);
  _svTimer=setTimeout(()=>stepStory(1),STORY_MS);
}
/* ---- story views + reactions (5 & 6) — stored in `story_views` (SQL-add-story-views.sql) ---- */
async function recordStoryView(it){
  if(!it||!it.id)return;
  const sb=getSupaClient();const uid=sb?await authUid():null;if(!sb||!uid)return;
  /* record the view once — ignoreDuplicates so it never wipes an existing like */
  try{await sb.from('story_views').upsert({story_id:it.id,viewer_id:uid,viewer_name:myName()},{onConflict:'story_id,viewer_id',ignoreDuplicates:true});}catch(e){}
}
async function refreshStoryFoot(it,mine){
  if(!it)return;const sb=getSupaClient();if(!sb)return;
  if(mine){
    try{const{count}=await sb.from('story_views').select('*',{count:'exact',head:true}).eq('story_id',it.id);
      const el=document.getElementById('svSeenN');if(el)el.textContent=(count||0);}catch(e){const el=document.getElementById('svSeenN');if(el)el.textContent='0';}
  }else{
    const uid=await authUid();if(!uid)return;
    try{const{data}=await sb.from('story_views').select('liked').eq('story_id',it.id).eq('viewer_id',uid).maybeSingle();
      _svLiked=!!(data&&data.liked);const b=document.getElementById('svLikeBtn');if(b)b.classList.toggle('liked',_svLiked);}catch(e){}
  }
}
async function toggleStoryLike(){
  const g=_svGroup;if(!g)return;const it=g.items[_svIdx];if(!it)return;
  const sb=getSupaClient();const uid=sb?await authUid():null;if(!sb||!uid){note('Sign in to react to stories.','Sign in required');return;}
  _svLiked=!_svLiked;
  const b=document.getElementById('svLikeBtn');if(b)b.classList.toggle('liked',_svLiked);
  if(_svLiked)sfx('like');
  try{await sb.from('story_views').upsert({story_id:it.id,viewer_id:uid,viewer_name:myName(),liked:_svLiked},{onConflict:'story_id,viewer_id'});}catch(e){}
}
async function sendStoryReply(){
  const g=_svGroup;if(!g)return;
  const inp=document.getElementById('svReplyInput');if(!inp)return;
  const txt=(inp.value||'').trim();if(!txt)return;
  if(!isLoggedIn()){note('Sign in to reply to stories.','Sign in required');return;}
  inp.value='';inp.blur();
  const owner=g.n,msg='↩ Replied to your story: '+txt;
  const cid='c'+(++_cidSeq);
  const rows=getChat(owner);rows.push({cid,who:'me',type:'text',txt:msg,t:nowT(),_pending:true});saveChat(owner,rows);
  await deliverMessage(owner,{body:msg,type:'text'},cid);
  toast('Reply sent to '+properName(owner).split(' ')[0]);
}
function pauseStory(){clearTimeout(_svTimer);_svTimer=null;const live=document.querySelector('#svBars .sb.live i');if(live)live.style.animationPlayState='paused';}
function resumeStory(){if(!_svGroup)return;const live=document.querySelector('#svBars .sb.live i');if(live)live.style.animationPlayState='running';clearTimeout(_svTimer);_svTimer=setTimeout(()=>stepStory(1),STORY_MS);}
async function showStoryViewers(){
  const g=_svGroup;if(!g)return;const it=g.items[_svIdx];if(!it)return;
  pauseStory();
  const panel=document.getElementById('svViewers'),list=document.getElementById('svvList');if(!panel||!list)return;
  list.innerHTML='<div class="svv-empty">Loading…</div>';panel.classList.add('show');
  const sb=getSupaClient();let rows=[];
  try{const{data}=await sb.from('story_views').select('viewer_name,liked,created_at').eq('story_id',it.id).order('created_at',{ascending:false});rows=data||[];}catch(e){}
  if(!rows.length){list.innerHTML='<div class="svv-empty">No views yet. When people watch your story, they’ll show up here.</div>';return;}
  const likes=rows.filter(r=>r.liked).length;
  const head=document.getElementById('svvCount');if(head)head.textContent=rows.length+' view'+(rows.length>1?'s':'')+(likes?' · '+likes+' like'+(likes>1?'s':''):'');
  list.innerHTML=rows.map(r=>`<div class="svv-row">${avatar(r.viewer_name||'Trekker',36)}<b>${esc(properName(r.viewer_name||'Trekker'))}</b>${r.liked?'<span class="msr liked">favorite</span>':''}</div>`).join('');
}
function closeStoryViewers(){const p=document.getElementById('svViewers');if(p)p.classList.remove('show');resumeStory();}
async function deleteCurrentStory(){
  const g=_svGroup;if(!g)return;
  const it=g.items[_svIdx];if(!it)return;
  clearTimeout(_svTimer);
  if(!(await askConfirm('Delete this story?','Delete'))){_svTimer=setTimeout(()=>stepStory(1),STORY_MS);return;}
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid)return;
  const{data,error}=await sb.from('stories').delete().eq('id',it.id).eq('user_id',uid).select('id');
  if(error||!data||!data.length){note('Could not delete that story.','Error');return;}
  closeStory();
  await loadStories();renderStories();
}
/* ============================================================
   REVIEWS — stored in the Supabase `reviews` table when available, with a
   localStorage cache so new reviews REFLECT instantly (and work in preview /
   before the table is deployed). Users write reviews from the Reviews screen;
   admin adds them manually from Admin → Reviews. Every field is escaped on
   render (reviews are user-generated).
   ============================================================ */
function reviewCard(r){
  const nm=String(r.author||'Trekker');const rt=Math.max(1,Math.min(5,+r.rating||5));
  return `<div class="panel" style="margin-bottom:12px"><div style="display:flex;align-items:center;gap:10px;margin-bottom:7px"><div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#ffd27a,#ff7a59);display:grid;place-items:center;font-weight:600;color:#5a2a00">${esc((nm[0]||'T').toUpperCase())}</div><div style="min-width:0"><b style="font-size:13px">${esc(nm)}</b><div class="star" style="font-size:11px">${'★'.repeat(rt)}${'☆'.repeat(5-rt)} <span style="color:var(--muted2)">· ${esc(r.date||'')}${r.trek?' · '+esc(r.trek):''}</span></div></div></div><p style="margin:0;font-size:12.5px;color:var(--muted);line-height:1.55">${esc(r.body||'')}</p></div>`;
}
function reviewsLocal(){try{return JSON.parse(localStorage.getItem('tmk_reviews')||'[]');}catch(e){return[];}}
function reviewsSaveLocal(a){try{localStorage.setItem('tmk_reviews',JSON.stringify((a||[]).slice(0,200)));}catch(e){}}
function reviewDateLabel(ts){try{return new Date(ts).toLocaleDateString('en-IN',{month:'short',year:'numeric'});}catch(e){return '';}}
function reviewsForTrek(name){name=String(name||'');return reviewsData.filter(r=>!r.trek||r.trek===name);}
function reviewPreviewHTML(t){
  const list=reviewsForTrek(t&&t.n);
  return list.length?list.slice(0,2).map(reviewCard).join('')
    :'<div style="font-size:12.5px;color:var(--muted)">No reviews yet — be the first after your '+(isTour(t)?'trip':'trek')+'.</div>';
}
function repaintReviews(){
  if(cur==='reviews')renderReviews();
  if(cur==='detail'&&cart.trek){const el=document.getElementById('dRevPrev');if(el){el.innerHTML=reviewPreviewHTML(cart.trek);hydrate(el);}}
  if(cur==='trip'&&cart.trek){const el=document.getElementById('tripRevPrev');if(el){el.innerHTML=reviewPreviewHTML(cart.trek);hydrate(el);}}
  if(cur==='admin'&&adminTab==='Reviews'){const el=document.getElementById('arList');if(el)renderAdminReviewList();}
}
async function loadReviews(){
  let list=reviewsLocal();
  const sb=getSupaClient();
  if(sb){try{
    const{data}=await sb.from('reviews').select('id,trek,author,rating,body,created_at').order('created_at',{ascending:false}).limit(200);
    if(Array.isArray(data)){
      list=data.map(r=>({id:r.id,trek:r.trek||'',author:r.author||'Trekker',rating:Math.max(1,Math.min(5,+r.rating||5)),body:r.body||'',ts:r.created_at?Date.parse(r.created_at):Date.now(),date:reviewDateLabel(r.created_at||Date.now())}));
      reviewsSaveLocal(list);
    }
  }catch(e){/* table not deployed yet, or offline — fall back to the local cache */}}
  reviewsData=list.map(r=>({...r,date:r.date||reviewDateLabel(r.ts||Date.now())}));
  repaintReviews();
  return reviewsData;
}
/* add a review (used by both the user modal and admin manual entry). Optimistic:
   it reflects instantly from the local cache, then syncs to Supabase if present. */
async function addReview(o){
  o=o||{};
  const author=String(o.author||getSavedName()||'Trekker').trim()||'Trekker';
  const rating=Math.max(1,Math.min(5,+o.rating||5));
  const body=String(o.body||'').trim();
  if(!body)return false;
  const ts=Date.now();
  const rec={id:'loc_'+ts+'_'+Math.floor(Math.random()*1e4),trek:String(o.trek||'').trim(),author,rating,body,ts,date:reviewDateLabel(ts)};
  reviewsData=[rec].concat(reviewsData);
  reviewsSaveLocal(reviewsData);
  repaintReviews();
  const sb=getSupaClient();
  if(sb){try{
    const uid=(currentUser&&currentUser.id)||null;
    const{data,error}=await sb.from('reviews').insert({trek:rec.trek,author:rec.author,rating:rec.rating,body:rec.body,user_id:uid}).select('id').single();
    if(!error&&data&&data.id){rec.id=data.id;reviewsSaveLocal(reviewsData);}
  }catch(e){}}
  return true;
}
async function delReview(id){
  reviewsData=reviewsData.filter(r=>String(r.id)!==String(id));
  reviewsSaveLocal(reviewsData);
  const sb=getSupaClient();
  if(sb&&String(id).indexOf('loc_')!==0){try{await sb.from('reviews').delete().eq('id',id);}catch(e){}}
  repaintReviews();
}
/* ---- user "Write a review" modal ---- */
let _revRating=5;
function setRevStars(n){_revRating=Math.max(1,Math.min(5,+n||5));const el=document.getElementById('revStars');if(!el)return;
  el.innerHTML=[1,2,3,4,5].map(i=>'<span class="rv-star'+(i<=_revRating?' on':'')+'" onclick="setRevStars('+i+')">★</span>').join('');}
function openReviewModal(){
  const m=document.getElementById('reviewModal');if(!m)return;
  _revRating=5;setRevStars(5);
  const nm=document.getElementById('revName');if(nm)nm.value=getSavedName()||'';
  const bd=document.getElementById('revBody');if(bd)bd.value='';
  const tn=document.getElementById('revTrekName');
  if(tn){if(cart.trek){tn.textContent='For '+cart.trek.n;tn.style.display='';}else{tn.textContent='';tn.style.display='none';}}
  m.classList.add('show');
}
function closeReviewModal(){const m=document.getElementById('reviewModal');if(m)m.classList.remove('show');}
async function submitReview(){
  const body=document.getElementById('revBody').value,name=document.getElementById('revName').value;
  if(!body.trim()){note('Please write a few words for your review.','Add a review');return;}
  await addReview({trek:(cart.trek&&cart.trek.n)||'',author:name,rating:_revRating,body});
  closeReviewModal();
  toast('Thanks — your review is live!');
}
/* "Trekkers to follow" strip */
/* ---- people search ---- */
async function loadPeopleRemote(){
  const sb=getSupaClient();if(!sb)return[];
  /* pull registered members (with their preferences) from profiles */
  /* photo is deliberately NOT selected here. It holds base64 (some rows are >1.5MB),
     so pulling it for 300 profiles shipped ~3MB on every community open. Photos come
     from loadAuthorPhotos(), which fetches only the handful actually on screen. */
  try{const{data}=await sb.from('profiles').select('name,prefs,username,is_host').limit(300);
    if(data&&data.length){const seen=new Set();
      data.forEach(r=>{if(r.name){hostByName[r.name]=!!r.is_host;privateByName[r.name]=!!(r.prefs&&r.prefs.private);}});
      return data.filter(r=>r.name&&!seen.has(r.name)&&seen.add(r.name))
        .map(r=>({n:r.name,h:'@'+(r.username||r.name.toLowerCase().replace(/[^a-z0-9]/g,'')),prefs:r.prefs||[],bio:(r.prefs&&r.prefs.length)?r.prefs.slice(0,3).join(' · '):'Tripomonk trekker',flwr:0}));
    }
  }catch(e){}
  /* fallback: authors from posts */
  const{data:d2}=await sb.from('community_posts').select('author_name').limit(200);
  const seen2=new Set();
  return (d2||[]).filter(r=>r.author_name&&!seen2.has(r.author_name)&&seen2.add(r.author_name))
    .map(r=>({n:r.author_name,h:'@'+r.author_name.toLowerCase().replace(/[^a-z0-9]/g,''),prefs:[],bio:'Tripomonk trekker',flwr:0}));
}
/* Like-minded suggestions: trekkers who share your onboarding interests.
   Ranked by shared prefs, most in common first. Only shows people you don't
   already follow, and hides itself entirely when there's no good match. */
async function renderSuggestions(){
  const box=document.getElementById('commSuggest');if(!box)return;
  const mine=getPrefs()||[];
  /* nothing to match on yet — nudge them to complete onboarding instead */
  if(!mine.length){
    if(isLoggedIn()&&!isPrefsDone()){
      box.innerHTML='<div class="suggest-wrap"><div class="pref-prompt" onclick="go(\'onboarding\')">'
        +'<span class="msr">interests</span><div><b>Find your people</b><small>Pick a few interests and we\'ll suggest like-minded trekkers.</small></div>'
        +'<span class="msr" style="margin-left:auto">chevron_right</span></div></div>';
    }else box.innerHTML='';
    return;
  }
  const pool=await ensurePeople();
  const ranked=pool
    .map(p=>({p,s:sharedPrefs(p.prefs)}))
    .filter(x=>x.s>0 && !isFollowing(x.p.n))
    .sort((a,b)=>b.s-a.s)
    .slice(0,10);
  if(!ranked.length){box.innerHTML='';return;}
  /* fetch faces before rendering so avatars aren't blank on first paint */
  try{await loadAuthorPhotos(ranked.map(x=>x.p.n));}catch(e){}
  box.innerHTML='<div class="suggest-wrap"><div class="suggest-head"><b>Trekkers like you</b>'
    +'<span onclick="go(\'peopleSearch\')">See all</span></div>'
    +'<div class="suggest-rail">'+ranked.map(x=>suggestCard(x.p,x.s)).join('')+'</div></div>';
  hydrate(box);
}
function suggestCard(p,shared){
  const sn=jsq(p.n);const on=isFollowing(p.n);
  return '<div class="scard" data-sg="'+esc(p.n)+'">'
    +'<div class="sav" onclick="openPerson(\''+sn+'\')">'+avatar(p.n,52)+'</div>'
    +'<b onclick="openPerson(\''+sn+'\')">'+esc(handleFor(p.n))+'</b>'
    +'<span class="smatch">'+ic('like',10)+' '+shared+' shared</span>'
    +'<button class="sfollow'+(on?' on':'')+'" onclick="suggestFollow(\''+sn+'\',this)">'+(on?'Following':'Follow')+'</button>'
    +'</div>';
}
/* follow from a suggestion card without re-rendering the whole strip */
function suggestFollow(n,btn){
  toggleFollow(n);
  const now=isFollowing(n);
  if(btn){btn.classList.toggle('on',now);btn.textContent=now?'Following':'Follow';}
}
function personRow(p){
  const sn=jsq(p.n);
  const shared=sharedPrefs(p.prefs);
  const match=shared>0?`<span class="pmatch">${ic('like',11)} ${shared} shared interest${shared>1?'s':''}</span>`:'';
  return `<div class="mrow" style="gap:12px;padding:12px 14px">
    ${avatar(p.n,44)}
    <div style="flex:1;min-width:0">
      <b style="font-size:13.5px;display:block;cursor:pointer" onclick="openPerson('${sn}')">${esc(p.n)}</b>
      ${match||`<span style="font-size:12px;color:var(--muted)">${esc(p.h)}</span>`}
      ${p.bio?`<span style="font-size:12px;color:var(--muted2);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:210px">${esc(p.bio)}</span>`:''}
    </div>
    <button class="fbtn ${isFollowing(p.n)?'on':''}" onclick="toggleFollow('${sn}');renderPeopleResults(_lastPeopleQ)">${isFollowing(p.n)?'Following':'Follow'}</button>
  </div>`;}
let _lastPeopleQ='',_peoplePool=null;
async function searchPeople(q){
  _lastPeopleQ=q||'';
  const box=document.getElementById('peopleResults');if(!box)return;
  if(!_peoplePool){
    /* merge demo people + remote authors */
    const remote=await loadPeopleRemote();
    const remoteNames=new Set(remote.map(r=>r.n));
    const mine=myName();
    _peoplePool=[...remote,...people.filter(p=>!remoteNames.has(p.n))].filter(p=>p.n!==mine);
    /* like-minded first: most shared interests on top */
    _peoplePool.sort((a,b)=>sharedPrefs(b.prefs)-sharedPrefs(a.prefs));
  }
  const lq=(q||'').toLowerCase().trim();
  const results=lq
    ?_peoplePool.filter(p=>p.n.toLowerCase().includes(lq)||p.h.toLowerCase().includes(lq)||(p.bio||'').toLowerCase().includes(lq))
    :_peoplePool;
  if(!results.length){box.innerHTML=`<div class="empty"><p>No trekkers found for "${q}"</p></div>`;return;}
  box.innerHTML=`<div style="color:var(--muted);font-size:12px;margin-bottom:8px">${results.length} trekker${results.length>1?'s':''} found</div>`+results.map(personRow).join('');
  hydrate(box);
}
function renderPeopleResults(q){searchPeople(q);}

function renderFollowStrip(){const box=document.getElementById('followStrip');if(!box)return;
  const mine=myName();
  const sugg=people.filter(p=>!isFollowing(p.n)&&p.n!==mine);
  if(!sugg.length){box.innerHTML='';return;}
  box.innerHTML=`<div class="sec-h"><b>Trekkers to follow</b></div><div class="frow">${sugg.map(p=>`
    <div class="fcard">${avatar(p.n,52)}<b onclick="openPerson('${jsq(p.n)}')">${esc(p.n)}</b><small>${esc(p.h)}</small>
    <button class="fbtn" onclick="toggleFollow('${jsq(p.n)}')">Follow</button></div>`).join('')}</div>`;
  hydrate(box);}
/* ---- video links: photos are uploaded, videos are added as links (YouTube / Vimeo /
   direct file) so we never store or serve heavy video files ourselves ---- */
function parseVideoLink(url){
  url=String(url||'').trim();if(!url)return null;
  let m;
  if((m=url.match(/(?:youtube\.com\/(?:watch\?[^ ]*\bv=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/i)))
    return{kind:'youtube',id:m[1],embed:'https://www.youtube.com/embed/'+m[1],thumb:'https://img.youtube.com/vi/'+m[1]+'/hqdefault.jpg'};
  if((m=url.match(/instagram\.com\/(reel|reels|p|tv)\/([\w-]+)/i))){
    const type=m[1].toLowerCase()==='reels'?'reel':m[1].toLowerCase();
    return{kind:'instagram',id:m[2],embed:'https://www.instagram.com/'+type+'/'+m[2]+'/embed',thumb:''};
  }
  if((m=url.match(/vimeo\.com\/(?:video\/)?(\d+)/i)))
    return{kind:'vimeo',id:m[1],embed:'https://player.vimeo.com/video/'+m[1],thumb:''};
  if(/\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(url))return{kind:'file',embed:url,thumb:''};
  if(/^https?:\/\//i.test(url))return{kind:'link',embed:url,thumb:''};
  return null;
}
/* true if a stored media entry is a video (uploaded file, or a video link) */
function isAnyVideo(src){
  if(!src)return false;
  if(String(src).startsWith('data:video'))return true;
  const v=parseVideoLink(src);
  return !!(v&&(v.kind==='youtube'||v.kind==='vimeo'||v.kind==='file'||v.kind==='instagram'));
}
/* a poster/thumbnail image for a video link, when one is available (YouTube) */
function videoPoster(src){const v=parseVideoLink(src);return (v&&v.thumb)||'';}
/* playable HTML for a video link: embed for YT/Vimeo, <video> for a direct file,
   a "Watch video" button for anything else */
function videoEmbedHTML(url){
  const v=parseVideoLink(url);if(!v)return '';
  if(v.kind==='youtube'||v.kind==='vimeo'||v.kind==='instagram')
    return '<div class="vembed'+(v.kind==='instagram'?' vembed-ig':'')+'"><iframe src="'+esc(v.embed)+'" title="Trek video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>';
  if(v.kind==='file')
    return '<video src="'+esc(url)+'#t=0.1" controls preload="metadata" playsinline></video>';
  return '<a class="vlink" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer"><span class="msr">play_circle</span> Watch video</a>';
}
/* lazily swap a video-link thumbnail slide for its real embed on tap (keeps the feed light) */
function loadEmbed(el){
  const url=el&&el.getAttribute('data-embed');if(!url)return;
  el.onclick=null;
  el.innerHTML='<iframe src="'+esc(url)+(url.indexOf('?')>=0?'&':'?')+'autoplay=1" title="Video" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen style="width:100%;height:100%;border:0;display:block"></iframe>';
}
function mediaItem(src){
  if(isAnyVideo(src)){
    const v=parseVideoLink(src);
    if(v&&(v.kind==='youtube'||v.kind==='vimeo'||v.kind==='instagram')){
      const poster=v.thumb;
      return `<div class="slide vid emb${v.kind==='instagram'?' ig':''}" data-embed="${esc(v.embed)}" data-poster="${esc(poster||'')}" onclick="loadEmbed(this)">
        <div class="slide" style="position:absolute;inset:0;${poster?`background-image:url('${esc(poster)}')`:'background:#000'}"></div>
        <div class="play-ic"><span class="msr" style="font-size:44px;color:rgba(255,255,255,.95);text-shadow:0 2px 12px rgba(0,0,0,.5)">play_circle</span></div>
      </div>`;
    }
    return `<div class="slide vid" onclick="this.querySelector('video').paused?this.querySelector('video').play():this.querySelector('video').pause()">
      <video src="${esc(src)}" playsinline preload="metadata" loop></video>
      <div class="play-ic"><span class="msr" style="font-size:44px;color:rgba(255,255,255,.9);text-shadow:0 2px 12px rgba(0,0,0,.5)">play_circle</span></div>
    </div>`;}
  const url=src.startsWith('data:')?esc(src):esc(src)+Q;
  return `<div class="slide" style="background-image:url('${url}')"></div>`;}
/* --- Feed media keeps its OWN shape ---------------------------------------
   Instead of force-cropping every post into a fixed 4:5 box, each carousel adopts
   the natural aspect ratio of its FIRST photo/video. Ratio is clamped to a sane
   range (9:16 tall portrait … 1.91:1 wide landscape) so an extreme upload can't
   blow up the feed, but virtually every real phone photo/video shows uncropped.
   The measured ratio is cached by url so re-renders/revisits are flash-free. */
const _carRatio={};
function clampRatio(r){return (!r||!isFinite(r)||r<=0)?0:Math.max(0.5625,Math.min(1.91,r));}
/* the same resolved url mediaItem() paints, so postCard() and fitCarousels() share a cache key */
function mediaFitUrl(src){return src&&!isAnyVideo(src)?(src.startsWith('data:')?src:src+Q):'';}
function fitCarousels(root){
  (root||document).querySelectorAll('.car').forEach(car=>{
    if(car._fitDone)return; car._fitDone=1;
    const first=car.querySelector('.car-track > .slide'); if(!first)return;
    const set=r=>{const c=clampRatio(r);if(c)car.style.aspectRatio=c.toFixed(4);};
    if(first.classList.contains('emb')){set(first.classList.contains('ig')?0.8:16/9);return;}   /* Instagram → 4:5 portrait, else 16:9 */
    const vid=first.querySelector('video');
    if(vid){
      if(vid.videoWidth)set(vid.videoWidth/vid.videoHeight);
      else vid.addEventListener('loadedmetadata',()=>set(vid.videoWidth/vid.videoHeight),{once:true});
      return;
    }
    const m=(first.style.backgroundImage||'').match(/url\(["']?(.*?)["']?\)/);
    const url=m&&m[1]; if(!url)return;
    if(_carRatio[url]!=null){car.style.aspectRatio=_carRatio[url];return;}
    const im=new Image();
    im.onload=()=>{const c=clampRatio(im.naturalWidth/im.naturalHeight);if(c){_carRatio[url]=c.toFixed(4);car.style.aspectRatio=_carRatio[url];}};
    im.src=url;
  });
}
let likeCounts={},likedByMe={},commentCounts={};
function postCard(p){
  const liked=!!likedByMe[p.id];const nc=commentCounts[p.id]||0;
  const me=p.n==='You'||p.n===myName()||(p.uid&&currentUser&&p.uid===currentUser.id);const sn=jsq(p.n);
  const media=p.imgs&&p.imgs.length?p.imgs:[];
  const textOnly=!media.length&&p.txt;
  const likeCount=(likeCounts[p.id]||0);
  const dots=media.length>1?`<div class="car-dots">${media.map((_,i)=>`<span class="${i===0?'on':''}"></span>`).join('')}</div>`:'';
  const follow=me?'':` · <span class="ig-follow${isFollowing(p.n)?' on':''}" data-follow="${esc(p.n)}" onclick="toggleFollow('${sn}')">${isFollowing(p.n)?'Following':'Follow'}</span>`;
  const more=me?`<span class="ig-more" onclick="postMenu('${p.id}')" title="Post options"><span class="msr" style="font-size:21px">more_horiz</span></span>`:'';
  /* the actions live under the photo only — no duplicate overlay rail */
  /* tagged trekkers chips */
  const tagged=(p.tagged&&p.tagged.length)
    ?`<div class="ig-tags">${ic('user',13)} with ${p.tagged.map(nm=>`<span class="ig-tagn" onclick="openPerson('${jsq(nm)}')">${esc(nm)}</span>`).join(', ')}</div>`:'';
  return `<div class="post" data-pid="${p.id}">
   <div class="ig-head">
     <div class="ig-ava" onclick="openPerson('${sn}')">${avatar(p.n,34)}</div>
     <div class="ig-meta"><b onclick="openPerson('${sn}')">${esc(handleFor(p.n))}${hostBadge(p.n)}</b>${follow}</div>
     ${more}
   </div>
   ${p.trek?`<div class="ig-trek" onclick="openDetailByName('${jsq(p.trek)}')">${ic('pin',13)} ${esc(p.trek)}</div>`:''}
   ${media.length?`<div class="car"${(()=>{const u=mediaFitUrl(media[0]);return u&&_carRatio[u]!=null?` style="aspect-ratio:${_carRatio[u]}"`:'';})()} ondblclick="dblLike('${p.id}',this)"><div class="car-track" onscroll="carScroll(this)">${media.map(mediaItem).join('')}</div>${dots}<div class="heart-burst">${ic('like',96)}</div></div>`:''}
   ${textOnly?`<div class="ig-textpost">${linkifyMentions(esc(p.txt))}</div>`:''}
   ${p.trek?`<div class="ig-book" onclick="openDetailByName('${jsq(p.trek)}')"><span class="msr">confirmation_number</span><span>View trip &amp; book</span><span class="ig-book-go">${ic('back',15)}</span></div>`:''}
   ${tagged}
   <div class="ig-actions" style="display:flex;align-items:center;justify-content:space-between">
     <div class="ig-left">
       <span class="ig-ic ig-like ${liked?'liked':''}" onclick="likePost('${p.id}')">${ic('like',24)}${likeCount?`<b>${likeCount.toLocaleString('en-IN')}</b>`:''}</span>
       <span class="ig-ic ig-comment" onclick="openComments('${p.id}')">${ic('comment',24)}${nc?`<b>${nc}</b>`:''}</span>
       <span class="ig-ic" onclick="repostPost('${p.id}')" title="Repost to your feed">${ic('repeat',22)}</span>
     </div>
     <span class="ig-ic ig-save${isSavedPost(p.id)?' on':''}" onclick="toggleSavePost('${p.id}',this)" title="Save post"><span class="msr" style="font-size:23px">${isSavedPost(p.id)?'bookmark':'bookmark_border'}</span></span>
   </div>
   ${(!textOnly&&p.txt)?`<div class="ig-cap ${p.txt.length>120?'clamp':''}" onclick="this.classList.remove('clamp')"><b onclick="event.stopPropagation();openPerson('${sn}')">${esc(handleFor(p.n))}</b> ${linkifyMentions(esc(p.txt))}</div>`:''}
   <div class="ig-comments" onclick="openComments('${p.id}')">${nc?`View all ${nc} comment${nc>1?'s':''}`:'Add a comment…'}</div>
   <div class="ig-time">${p.when}</div>
  </div>`;}
/* Repost a post to your own community feed (stays in-app, no external share) */
async function repostPost(id){
  if(!isLoggedIn()){note('Please sign in to repost.','Sign in required').then(()=>{_loginReturn='community';go('login');});return;}
  const orig=postById(id);if(!orig){note('Post not found.','Error');return;}
  if((orig.txt||'').startsWith('🔁')){note('This is already a repost.','Heads up');return;}
  if(!(await askConfirm('Repost this to your community feed?','Repost')))return;
  const authorName=getSavedName()||(getUserEmail()?getUserEmail().split('@')[0]:'You');
  const post={id:'p'+Date.now(),uid:currentUser.id,n:authorName,when:'just now',
    txt:'🔁 Reposted from '+orig.n+(orig.txt?': '+orig.txt.replace(/^🔁[^:]*:\s*/,''):''),
    imgs:orig.imgs||[],likes:0,comments:[],trek:orig.trek||'',tagged:[]};
  userPosts.unshift(post);savePosts();
  await savePostRemote(post);
  commTab='For You';renderFeed();
  sfx('repost');
  note('Reposted to your feed ✓');
}
function carScroll(track){
  const i=Math.round(track.scrollLeft/track.clientWidth);
  const dots=track.parentElement.querySelectorAll('.car-dots span');
  dots.forEach((d,j)=>d.classList.toggle('on',j===i));
}
/* three-dot sheet on your own posts */
function postMenu(id){
  const m=document.getElementById('postMenuModal');if(!m)return;
  const ed=document.getElementById('pmEdit'),del=document.getElementById('pmDelete'),cx=document.getElementById('pmCancel');
  function close(){m.classList.remove('show');ed.onclick=del.onclick=cx.onclick=m.onclick=null;}
  ed.onclick=()=>{close();editPostCaption(id);};
  del.onclick=()=>{close();deletePost(id);};
  cx.onclick=close;
  m.onclick=e=>{if(e.target===m)close();};
  m.classList.add('show');
}
function editPostCaption(id){
  const p=postById(id);if(!p){note('Post not found.','Error');return;}
  const m=document.getElementById('editPostModal'),ta=document.getElementById('epCaption'),
        save=document.getElementById('epCapSave'),cancel=document.getElementById('epCapCancel');
  ta.value=p.txt||'';
  function close(){m.classList.remove('show');save.onclick=cancel.onclick=m.onclick=null;}
  cancel.onclick=close;
  m.onclick=e=>{if(e.target===m)close();};
  save.onclick=async()=>{
    const txt=(ta.value||'').trim();
    const sb=getSupaClient();
    const uid=sb?await authUid():null;
    if(!sb||!uid){note('Please sign in to edit this post.','Sign in required');return;}
    save.disabled=true;save.textContent='Saving…';
    /* scope to the owner as well as the id — the DB policy is the real guard,
       this just fails fast and never edits someone else's row */
    /* .select() matters: a row blocked by RLS comes back as 0 rows and NO error,
       so without this an edit that never happened would report success */
    const{data,error}=await sb.from('community_posts').update({txt}).eq('id',id).eq('user_id',uid).select('id');
    save.disabled=false;save.textContent='Save';
    if(error){note('Could not save: '+error.message,'Error');return;}
    if(!data||!data.length){note('This post could not be updated — you can only edit your own posts.','Not saved');return;}
    /* update in place — no full feed re-render */
    p.txt=txt;
    const local=userPosts.find(x=>x.id===id);if(local){local.txt=txt;try{localStorage.setItem('tmk_posts',JSON.stringify(userPosts));}catch(e){}}
    close();
    updatePostCaptionUI(id,txt);
    note('Caption updated.','Saved ✓');
  };
  m.classList.add('show');
  setTimeout(()=>ta.focus(),80);
}
/* refresh just this post's caption text */
function updatePostCaptionUI(id,txt){
  const p=postById(id);
  document.querySelectorAll('.post[data-pid="'+id+'"]').forEach(post=>{
    const cap=post.querySelector('.ig-cap');
    const textpost=post.querySelector('.ig-textpost');
    if(textpost){textpost.textContent=txt;return;}
    if(cap){cap.innerHTML=`<b onclick="event.stopPropagation();openPerson('${jsq(p?p.n:'')}')">${esc(p?p.n:'')}</b> ${esc(txt)}`;}
    else if(txt&&p&&!(p.imgs&&p.imgs.length)){renderFeedIfOpen();}
  });
}
async function deletePost(id){
  if(!(await askConfirm('Delete this post? This cannot be undone.','Delete post')))return;
  /* remove locally first */
  userPosts=userPosts.filter(p=>p.id!==id);savePosts();
  /* remove from Supabase (owner-only RLS) */
  const sb=getSupaClient();
  if(sb){
    const{error}=await sb.from('community_posts').delete().eq('id',id);
    if(error){note('Could not delete from server: '+error.message,'Delete failed');return;}
  }
  await renderFeed();
  note('Post deleted.');
}
async function renderFeed(){
  renderCommTabs();renderStories();
  /* stories + member list load alongside the feed, then the tray + suggestions re-render */
  Promise.all([loadStories(),ensurePeople()]).then(()=>{renderStories();renderSuggestions();}).catch(()=>{});
  renderSuggestions();   /* paint immediately from cache; refreshes when the pool loads */
  const box=document.getElementById('feed');
  box.innerHTML=`<div class="skel skel-post"></div><div class="skel skel-post"></div>`;
  /* try remote first; null = error, [] = genuinely empty */
  const remote=await loadPostsRemote();
  let list;
  if(remote===null){
    /* network/auth error — show local + demo */
    list=allPosts();
  } else {
    const remoteIds=new Set(remote.map(p=>p.id));
    const localNew=userPosts.filter(p=>!remoteIds.has(p.id));
    list=[...localNew,...remote];
  }
  if(commTab==='Following')list=list.filter(p=>isFollowing(p.n)||(p.n===(getSavedName()||'You')));
  if(commTab==='Recent')list=[...list].sort((a,b)=>b.id.localeCompare(a.id));
  _lastFeed=list;
  /* Show posts IMMEDIATELY. Waiting on like/comment counts + author photos before
     the first paint added ~1s of blank feed — the app felt broken. Paint now,
     then enrich (counts, avatars) and re-render once when they arrive. */
  const empty='<div class="empty"><p>No posts yet. Share your trek story!</p></div>';
  box.innerHTML=list.length?list.map(postCard).join(''):empty;
  hydrate(box);
  if(list.length){
    const token=++_feedToken;
    /* resolveAuthors rewrites each post's name to the author's CURRENT identity
       (by user id), so a renamed / re-photo'd / re-usernamed author shows fresh */
    Promise.all([loadEngagement(list.map(p=>p.id)),resolveAuthors(list,'uid','n')]).then(()=>{
      /* another render started meanwhile — don't clobber it */
      if(token!==_feedToken||cur!=='community')return;
      box.innerHTML=list.map(postCard).join('');
      hydrate(box);
    }).catch(()=>{});
  }
}
/* pull profile photos for the authors on screen — one query, cached, skips names we already have */
const AUTHOR_TTL=30000;   /* re-check a name at most this often — fresh enough to feel instant, cheap enough */
async function loadAuthorPhotos(names){
  const sb=getSupaClient();if(!sb)return;
  const mine=myName();const now=Date.now();
  /* refresh names we haven't fetched in the last TTL, so a changed DP/username
     shows up instead of the stale first copy sticking for the whole session */
  const need=[...new Set(names)].filter(n=>n&&n!==mine&&n!=='You'&&(!(n in photoByName)||now-(_authorFetchedAt[n]||0)>AUTHOR_TTL));
  if(!need.length)return;
  try{
    const{data}=await sb.from('profiles').select('name,photo,is_host,username,socials').in('name',need);
    (data||[]).forEach(r=>{if(r.name){photoByName[r.name]=r.photo||'';hostByName[r.name]=!!r.is_host;unameByName[r.name]=r.username||'';socialsByName[r.name]=r.socials||null;_authorFetchedAt[r.name]=now;}});
    /* bio + category live in optional columns — fetched separately so a missing column
       never breaks author photos/names in the feed */
    try{const{data:xd}=await sb.from('profiles').select('name,bio,category').in('name',need);(xd||[]).forEach(r=>{if(r.name){if(r.bio!=null)bioByName[r.name]=r.bio;if(r.category!=null)categoryByName[r.name]=r.category;}});}catch(e){}
  }catch(e){}
  /* remember the misses too, so we don't re-query every render */
  need.forEach(n=>{if(!(n in photoByName))photoByName[n]='';_authorFetchedAt[n]=now;});
}
/* Resolve display identity by the STABLE user id, not the name snapshot. Rewrites
   each row's name field to the author's CURRENT profile name and fills the
   name-keyed display maps — so an old post/comment shows the current name,
   username and photo even after the author renames. Mirrors resolveHostNames().
   Rows without a uid (legacy/demo) fall back to name-based lookup. */
async function resolveAuthors(rows,idKey,nameKey){
  const sb=getSupaClient();if(!sb||!rows||!rows.length)return rows;
  const now=Date.now();
  const ids=[...new Set(rows.map(r=>r[idKey]).filter(Boolean))];
  const byId={};
  if(ids.length){
    try{
      const{data}=await sb.from('profiles').select('id,name,username,photo,is_host,socials').in('id',ids);
      (data||[]).forEach(p=>{if(p.id)byId[p.id]=p;});
    }catch(e){}
  }
  rows.forEach(r=>{
    const p=byId[r[idKey]];
    if(!p||!p.name)return;
    r[nameKey]=p.name;                               /* show the current name */
    photoByName[p.name]=p.photo||'';
    hostByName[p.name]=!!p.is_host;
    unameByName[p.name]=p.username||'';
    socialsByName[p.name]=p.socials||null;
    _authorFetchedAt[p.name]=now;
  });
  const noId=rows.filter(r=>!r[idKey]).map(r=>r[nameKey]);
  if(noId.length)await loadAuthorPhotos(noId);
  return rows;
}
/* fetch shared like + comment counts for the visible posts (one query each) */
async function loadEngagement(ids){
  likeCounts={};likedByMe={};commentCounts={};
  const sb=getSupaClient();if(!sb||!ids.length)return;
  const inList='("'+ids.map(i=>String(i).replace(/"/g,'')).join('","')+'")';
  try{
    const{data:likes}=await sb.from('post_likes').select('post_id,user_id').filter('post_id','in',inList);
    (likes||[]).forEach(l=>{likeCounts[l.post_id]=(likeCounts[l.post_id]||0)+1;if(currentUser&&l.user_id===currentUser.id)likedByMe[l.post_id]=true;});
    const{data:cm}=await sb.from('post_comments').select('post_id').filter('post_id','in',inList);
    (cm||[]).forEach(c=>{commentCounts[c.post_id]=(commentCounts[c.post_id]||0)+1;});
  }catch(e){}
}
function dblLike(id,carEl){
  /* heart burst animation */
  const h=carEl&&carEl.querySelector('.heart-burst');
  if(h){h.classList.remove('go');void h.offsetWidth;h.classList.add('go');}
  /* only like (never unlike) on double-tap, like Instagram */
  if(!likedByMe[id])likePost(id);
}
/* update the like heart + count for a post in place (no full re-render, so the pop animates) */
function updateLikeUI(id){
  const liked=!!likedByMe[id];const n=likeCounts[id]||0;
  document.querySelectorAll('.post[data-pid="'+id+'"] .ig-like').forEach(el=>{
    el.classList.toggle('liked',liked);
    /* rebuild heart + count; fresh .msr with .liked replays the likepop animation */
    el.innerHTML=ic('like',24)+(n?'<b>'+n.toLocaleString('en-IN')+'</b>':'');
  });
}
async function likePost(id){
  if(!isLoggedIn()){note('Please sign in to like posts.','Sign in required').then(()=>{_loginReturn='community';go('login');});return;}
  const sb=getSupaClient();if(!sb)return;
  const wasLiked=!!likedByMe[id];
  const prevCount=likeCounts[id]||0;
  /* optimistic UI — update just the tapped heart in place so the pop animation plays */
  likedByMe[id]=!wasLiked;
  likeCounts[id]=prevCount+(wasLiked?-1:1);if(likeCounts[id]<0)likeCounts[id]=0;
  updateLikeUI(id);
  sfx(wasLiked?'unlike':'like');
  /* reconcile: any failure restores the exact pre-tap heart + count so the UI never lies */
  const rollback=()=>{likedByMe[id]=wasLiked;likeCounts[id]=prevCount;updateLikeUI(id);};
  const uid=await authUid();
  if(!uid){rollback();return;}
  try{
    if(wasLiked){
      const{error}=await sb.from('post_likes').delete().eq('post_id',id).eq('user_id',uid);
      if(error)throw error;
    }else{
      const{error}=await sb.from('post_likes').insert({post_id:id,user_id:uid});
      if(error)throw error;
      const p=postById(id);if(p&&(p.uid||p.n))pushNotif({recipientId:p.uid,recipientName:p.uid?null:p.n,type:'like',postId:id});
    }
  }catch(e){
    rollback();
    toast(wasLiked?'Could not remove like — try again':'Could not like — check your connection');
  }
}
/* custom centered glass modal — replaces native prompt() */
function askCode(title,opts){opts=opts||{};return new Promise(res=>{
  const m=document.getElementById('modal'),t=document.getElementById('modalTitle'),sub=document.getElementById('modalSub'),i=document.getElementById('modalInput'),ok=document.getElementById('modalOk'),cn=document.getElementById('modalCancel');
  t.textContent=title; if(opts.sub){sub.textContent=opts.sub;sub.style.display='block';}else sub.style.display='none';
  i.style.display=''; cn.style.display=''; ok.textContent='OK';
  i.value=opts.value||''; i.type=opts.password?'password':'text'; i.placeholder=opts.placeholder||'';
  m.classList.add('show'); setTimeout(()=>i.focus(),80);
  function done(v){m.classList.remove('show');ok.onclick=cn.onclick=i.onkeydown=m.onclick=null;res(v);}
  ok.onclick=()=>done(i.value); cn.onclick=()=>done(null);
  m.onclick=e=>{if(e.target===m)done(null);};
  i.onkeydown=e=>{if(e.key==='Enter')done(i.value);else if(e.key==='Escape')done(null);};
});}
/* lightweight auto-dismiss toast — used to explain optimistic-action rollbacks
   (a failed like/follow) where a full modal would be far too heavy. */
let _toastTimer=null;
function toast(msg,ms){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}
  t.textContent=msg;t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer=setTimeout(()=>{t.classList.remove('show');},ms||2600);
}
/* styled message (replaces alert) */
function note(msg,title){return new Promise(res=>{
  const m=document.getElementById('modal'),t=document.getElementById('modalTitle'),sub=document.getElementById('modalSub'),i=document.getElementById('modalInput'),ok=document.getElementById('modalOk'),cn=document.getElementById('modalCancel');
  t.textContent=title||'Tripomonk'; sub.textContent=msg; sub.style.display='block';
  i.style.display='none'; cn.style.display='none'; ok.textContent='OK';
  m.classList.add('show');
  function done(){m.classList.remove('show');ok.onclick=m.onclick=null;res();}
  ok.onclick=done; m.onclick=e=>{if(e.target===m)done();};
});}
/* styled confirm (replaces confirm) */
function askConfirm(msg,title){return new Promise(res=>{
  const m=document.getElementById('modal'),t=document.getElementById('modalTitle'),sub=document.getElementById('modalSub'),i=document.getElementById('modalInput'),ok=document.getElementById('modalOk'),cn=document.getElementById('modalCancel');
  t.textContent=title||'Please confirm'; sub.textContent=msg; sub.style.display='block';
  i.style.display='none'; cn.style.display=''; ok.textContent='Yes';
  m.classList.add('show');
  function done(v){m.classList.remove('show');ok.onclick=cn.onclick=m.onclick=null;ok.textContent='OK';res(v);}
  ok.onclick=()=>done(true); cn.onclick=()=>done(false); m.onclick=e=>{if(e.target===m)done(false);};
});}
/* ---- image compression ----
   Phone photos are 3–8 MB. Uploading them raw is slow to send on a hill signal and
   slow to load in the feed. Resize + re-encode before upload; videos and GIFs pass
   through untouched, and we keep the original if compressing didn't actually help. */
async function compressImage(file,opts){
  opts=opts||{};
  const maxW=opts.maxW||1440, quality=opts.quality||.82;
  if(!file||!/^image\//.test(file.type||'')||/gif/i.test(file.type||''))return file;
  try{
    let src;
    if(window.createImageBitmap){ src=await createImageBitmap(file); }
    else{
      const url=URL.createObjectURL(file);
      src=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=url;});
      URL.revokeObjectURL(url);
    }
    const w0=src.width||src.naturalWidth, h0=src.height||src.naturalHeight;
    if(!w0||!h0)return file;
    const scale=Math.min(1,maxW/w0);
    const w=Math.round(w0*scale), h=Math.round(h0*scale);
    const c=document.createElement('canvas');c.width=w;c.height=h;
    const ctx=c.getContext('2d');
    ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
    ctx.drawImage(src,0,0,w,h);
    if(src.close)src.close();
    const blob=await new Promise(res=>c.toBlob(res,'image/jpeg',quality));
    /* an already-small or well-compressed file can come out BIGGER — keep the original */
    if(!blob||blob.size>=file.size)return file;
    return new File([blob],(file.name||'photo').replace(/\.\w+$/,'')+'.jpg',{type:'image/jpeg'});
  }catch(e){return file;}   /* compression is a nicety, never a blocker */
}
/* ---- Supabase Storage upload ---- */
async function uploadMedia(file){
  const sb=getSupaClient();if(!sb)return null;
  file=await compressImage(file);
  const ext=(file.name||'').split('.').pop()||( file.type.startsWith('video')?'mp4':'jpg');
  const path=`posts/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
  const{error}=await sb.storage.from('community').upload(path,file,{cacheControl:'3600',upsert:false});
  if(error){console.warn('upload error',error.message);return null;}
  const{data}=sb.storage.from('community').getPublicUrl(path);
  return data.publicUrl;
}

/* ---- Remote posts (Supabase DB) ---- */
async function savePostRemote(post){
  const sb=getSupaClient();if(!sb)return;
  const uid=await authUid();
  const{error}=await sb.from('community_posts').insert({
    id:post.id,user_id:uid,
    author_name:post.n,txt:post.txt||'',imgs:post.imgs||[],likes:0,trek_tag:post.trek||null,tagged:post.tagged||[]
  });
  if(error)note('Post saved locally but could not sync: '+error.message,'Sync error');
}
async function loadPostsRemote(){
  const sb=getSupaClient();if(!sb)return null;
  /* older posts stored images as base64 inline (huge). New posts use storage URLs
     (tiny). Keep the window small so one legacy base64 post doesn't bloat the feed. */
  return await breaker(async()=>{
    const{data,error}=await sb.from('community_posts').select('*').order('created_at',{ascending:false}).limit(30);
    if(error)throw error;
    return(data||[]).map(p=>({id:p.id,uid:p.user_id||null,n:p.author_name||'Trekker',when:timeAgo(p.created_at),txt:p.txt||'',imgs:p.imgs||[],likes:p.likes||0,comments:[],trek:p.trek_tag||'',tagged:p.tagged||[]}));
  });
}
function timeAgo(ts){
  const s=Math.floor((Date.now()-new Date(ts))/1000);
  if(s<60)return 'just now';if(s<3600)return Math.floor(s/60)+'m ago';
  if(s<86400)return Math.floor(s/3600)+'h ago';return Math.floor(s/86400)+'d ago';
}

/* ===== Community notifications (Instagram-style, cross-user via Supabase) ===== */
function myName(){return getSavedName()||(currentUser&&currentUser.email?currentUser.email.split('@')[0]:'You');}
/* shape one notification row — shared by the single + batched inserts so they can't drift */
function notifRow({recipientId,recipientName,type,postId,preview}){
  return {recipient_id:recipientId||null,recipient_name:recipientName||null,
    actor_name:myName(),type:type,post_id:postId||null,preview:preview||null,read:false};
}
/* drop rows that would notify the actor themselves */
function notNotifSelf(r){
  return !(r.recipient_id&&currentUser&&r.recipient_id===currentUser.id)
      && !(!r.recipient_id&&r.recipient_name&&r.recipient_name===myName());
}
async function pushNotif({recipientId,recipientName,type,postId,preview}){
  const sb=getSupaClient();if(!sb)return;
  const row=notifRow({recipientId,recipientName,type,postId,preview});
  if(!notNotifSelf(row))return;   /* never notify yourself */
  const{error}=await sb.from('notifications').insert(row);
  if(error)console.warn('pushNotif:',error.message);
}
/* resolve a display name to a user_id via their posts (best-effort) */
/* register/refresh this user's public profile so follows/notifications can reach them.
   Only writes fields we actually have — an empty local value must never blank the stored one. */
async function upsertProfile(){
  const sb=getSupaClient();if(!sb)return;
  const uid=await authUid();if(!uid)return;
  /* No email here. `profiles` is publicly readable so the community can show
     names and photos — writing emails into it leaked every user's address to
     anyone with the anon key. The address already lives in auth.users. */
  const ts=new Date().toISOString();
  const nm=getSavedName(),ph=getSavedPhoto(),un=getSavedUsername(),cv=getSavedCover();
  const soc=getSavedSocials(),con=getConsent();
  /* A single upsert fails ATOMICALLY if ANY column is refused — and `consent`/`fitness`/
     `training` are locked down by column-level grants on this project. That silently
     dropped the profile PHOTO. So try richest → leanest and stop at the first that lands,
     guaranteeing name/photo/cover/username always save even when consent is refused. */
  const full={id:uid,updated_at:ts};
  if(nm)full.name=nm; if(ph)full.photo=ph; if(un)full.username=un;
  if(cv)full.cover=cv; if(soc&&Object.keys(soc).length)full.socials=soc; if(con)full.consent=con;
  const core={id:uid,updated_at:ts};
  if(nm)core.name=nm; if(ph)core.photo=ph; if(un)core.username=un;
  if(cv)core.cover=cv; if(soc&&Object.keys(soc).length)core.socials=soc;   /* drop consent */
  const minimal={id:uid,updated_at:ts};
  if(nm)minimal.name=nm; if(ph)minimal.photo=ph; if(un)minimal.username=un; /* drop cover/socials too */
  let saved=false;
  for(const row of [full,core,minimal]){
    try{const{error}=await sb.from('profiles').upsert(row);if(!error){saved=true;break;}}catch(e){}
  }
  /* gender + category live in optional columns — saved separately so a missing column
     never blocks the core profile save (needs SQL-add-profile-fields.sql to persist) */
  const g=getSavedGender(),cat=getSavedCategory(),bio=getSavedBio();
  if(saved&&(g||cat||bio)){try{await sb.from('profiles').upsert({id:uid,updated_at:ts,gender:g||null,category:cat||null,bio:bio||null});}catch(e){}}
}
/* everything that identifies ONE person on this device */
const IDENTITY_KEYS=['tmk_uname','tmk_uhandle','tmk_uphoto','tmk_ucover','tmk_socials','tmk_umobile','tmk_gender','tmk_category','tmk_bio','tmk_follows','tmk_posts','tmk_likes','tmk_comments','tmk_bookings','tmk_notif_seen','tmk_admin','tmk_admin_key','tmk_captain','tmk_plan'];
function clearLocalIdentity(){
  try{IDENTITY_KEYS.forEach(k=>localStorage.removeItem(k));}catch(e){}
  followState={};staffSet=new Set();_prefSkippedSession=false;
}
/* pull the stored profile back down after a login — localStorage is cleared on sign-out,
   so the server copy is the source of truth for name/photo/follows across devices */
async function loadProfileFromServer(){
  const sb=getSupaClient();if(!sb||!currentUser)return;
  /* if a DIFFERENT account signed in on this device, wipe the previous person's
     name/photo/follows first — otherwise they post under the old identity */
  let prev=null;try{prev=localStorage.getItem('tmk_uid');}catch(e){}
  if(prev&&prev!==currentUser.id)clearLocalIdentity();
  try{localStorage.setItem('tmk_uid',currentUser.id);}catch(e){}
  try{
    /* consent is fetched SEPARATELY: it's a column-level-restricted column on this project,
       and including it here would fail the WHOLE read (photo/name/cover) with 42501. */
    const{data}=await sb.from('profiles').select('name,photo,prefs,username,cover,socials').eq('id',currentUser.id).maybeSingle();
    let dbConsent=null;try{const{data:cd}=await sb.from('profiles').select('consent').eq('id',currentUser.id).maybeSingle();if(cd)dbConsent=cd.consent;}catch(e){}
    /* gender + category fetched separately so a missing column never fails the whole read */
    try{const{data:gc}=await sb.from('profiles').select('gender,category,bio').eq('id',currentUser.id).maybeSingle();if(gc){if(gc.gender)localStorage.setItem('tmk_gender',gc.gender);if(gc.category)localStorage.setItem('tmk_category',gc.category);if(gc.bio)localStorage.setItem('tmk_bio',gc.bio);}}catch(e){}
    if(data){
      if(data.name)try{localStorage.setItem('tmk_uname',data.name);}catch(e){}
      if(data.photo)try{localStorage.setItem('tmk_uphoto',data.photo);}catch(e){}
      if(data.username)try{localStorage.setItem('tmk_uhandle',data.username);}catch(e){}
      if(data.cover)try{localStorage.setItem('tmk_ucover',data.cover);}catch(e){}
      if(data.socials)try{localStorage.setItem('tmk_socials',JSON.stringify(data.socials));}catch(e){}
      /* DPDP consent — get the account association exactly right:
         - a fresh consent from the sign-in screen has no uid yet: claim it for THIS account
         - a local consent stamped with a DIFFERENT uid (shared device) must be dropped
         - otherwise the profile copy is authoritative for a returning account */
      try{
        let local=getConsent();
        if(local&&!local.uid){local.uid=currentUser.id;localStorage.setItem('tmk_consent',JSON.stringify(local));}
        else if(local&&local.uid&&local.uid!==currentUser.id){local=null;localStorage.removeItem('tmk_consent');}
        const dbC=dbConsent;
        if(dbC&&(!local||(dbC.at||'')>=(local.at||'')))localStorage.setItem('tmk_consent',JSON.stringify(dbC));
      }catch(e){}
    }
  }catch(e){}
  await loadFollowsFromServer();
  loadCart();   /* cart is keyed per account — swap to this user's one */
  planPull();   /* training plan follows the account, not the device */
  _profileLoadedFor=currentUser.id;
}
/* Re-pull MY photo/cover/name from the server and update this device. loadProfileFromServer
   only runs once per login, so a DP/cover changed on ANOTHER device wouldn't show here until
   re-login. This refreshes on Profile open + app foreground so other devices stay in sync. */
async function refreshMyProfile(){
  const sb=getSupaClient();if(!sb||!currentUser)return;
  try{
    const{data}=await sb.from('profiles').select('name,photo,username,cover,socials').eq('id',currentUser.id).maybeSingle();
    if(!data)return;
    let changed=false;
    const set=(k,v)=>{if(v!=null&&v!==''&&localStorage.getItem(k)!==v){try{localStorage.setItem(k,v);changed=true;}catch(e){}}};
    set('tmk_uphoto',data.photo);set('tmk_ucover',data.cover);set('tmk_uname',data.name);
    set('tmk_uhandle',data.username);
    if(data.socials)set('tmk_socials',JSON.stringify(data.socials));
    if(changed){
      if(cur==='profile')renderProfile();
      else if(cur==='home')renderHome();
      else if(cur==='editProfile')renderEditProfile();
      else if(cur==='hostProfile'&&typeof renderHostProfile==='function')renderHostProfile();
      else if(cur==='accountMenu')renderAccountMenu();
    }
  }catch(e){}
}
let _uidForNameCache={};
async function uidForName(name){
  const sb=getSupaClient();if(!sb||!name)return null;
  name=String(name).trim();if(!name)return null;
  if(_uidForNameCache[name])return _uidForNameCache[name];   /* cache successes only, so a later signup still resolves */
  let uid=null;
  try{
    /* 1) exact name  2) case-insensitive/trimmed name  3) username (handles a @handle or username passed as name) */
    let r=await sb.from('profiles').select('id').eq('name',name).limit(1);
    if(r.data&&r.data[0])uid=r.data[0].id;
    if(!uid){r=await sb.from('profiles').select('id').ilike('name',name).limit(1);if(r.data&&r.data[0])uid=r.data[0].id;}
    if(!uid){const h=name.replace(/^@/,'');if(h){r=await sb.from('profiles').select('id').ilike('username',h).limit(1);if(r.data&&r.data[0])uid=r.data[0].id;}}
    /* 4) fall back to whoever authored posts under this name */
    if(!uid){const r2=await sb.from('community_posts').select('user_id').eq('author_name',name).not('user_id','is',null).limit(1);if(r2.data&&r2.data[0])uid=r2.data[0].user_id;}
  }catch(e){}
  if(uid)_uidForNameCache[name]=uid;
  return uid;
}
/* Notifications the user swiped away. The DB delete can be a no-op (the table has
   no delete RLS policy on older projects), so we also remember dismissals locally
   and never re-show them. Capped so it can't grow without bound. */
function getDismissedNotifs(){try{return JSON.parse(localStorage.getItem('tmk_notif_dismissed')||'[]');}catch(e){return[];}}
function dismissNotifLocal(id){if(!id&&id!==0)return;id=String(id);const d=getDismissedNotifs();if(d.indexOf(id)<0){d.push(id);if(d.length>400)d.splice(0,d.length-400);try{localStorage.setItem('tmk_notif_dismissed',JSON.stringify(d));}catch(e){}}}
async function loadNotifsRemote(){
  const sb=getSupaClient();if(!sb)return null;
  const name=myName();
  return await breaker(async()=>{
    let q=sb.from('notifications').select('*').order('created_at',{ascending:false}).limit(60);
    if(currentUser)q=q.or(`recipient_id.eq.${currentUser.id},recipient_name.eq.${name}`);
    else q=q.eq('recipient_name',name);
    const{data,error}=await q;
    if(error)throw error;
    const dis=getDismissedNotifs();
    return (data||[]).filter(n=>dis.indexOf(String(n.id))<0);   /* hide anything swiped away */
  });
}
const NOTIF_ICON={like:'favorite',comment:'chat_bubble',follow:'person_add',mention:'alternate_email',admin:'campaign',message:'sms'};
/* Magic-UI style icon tiles: an emoji on a coloured rounded square per type */
const NOTIF_STYLE={like:{e:'💗',c:'#FF3D71'},comment:{e:'💬',c:'#1E86FF'},follow:{e:'👤',c:'#FFB800'},mention:{e:'📣',c:'#00C9A7'},admin:{e:'📣',c:'#2f6bff'},message:{e:'✉️',c:'#2f6bff'}};
function notifDesc(n){
  const p=n.preview?'“'+esc(n.preview)+'”':'';
  if(n.type==='like')return 'liked your post';
  if(n.type==='comment')return 'commented '+p;
  if(n.type==='follow')return 'started following you';
  if(n.type==='mention')return 'mentioned you '+p;
  if(n.type==='message')return 'messaged you '+p;
  if(n.type==='admin')return p||'sent you a message';
  return 'interacted with you';
}
function notifText(n){
  const who=esc(handleFor(n.actor_name));
  if(n.type==='like')return `<b>${who}</b> liked your post`;
  if(n.type==='comment')return `<b>${who}</b> commented: ${n.preview?'“'+esc(n.preview)+'”':''}`;
  if(n.type==='follow')return `<b>${who}</b> started following you`;
  if(n.type==='mention')return `<b>${who}</b> mentioned you: ${n.preview?'“'+esc(n.preview)+'”':''}`;
  if(n.type==='message')return `<b>${who}</b> messaged you${n.preview?': “'+esc(n.preview)+'”':''}`;
  if(n.type==='admin')return `<b>Tripomonk</b> ${n.preview?'“'+esc(n.preview)+'”':'sent you a message'}`;
  return `<b>${who}</b> interacted with you`;
}
let _lastUnread=-1;
function playNotifSound(){
  try{
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    const ctx=new AC();const o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type='sine';o.frequency.setValueAtTime(880,ctx.currentTime);o.frequency.setValueAtTime(1175,ctx.currentTime+0.1);
    g.gain.setValueAtTime(0.0001,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.25,ctx.currentTime+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+0.35);
    o.start();o.stop(ctx.currentTime+0.36);
  }catch(e){}
}
/* simple dot on every bell when there's unread activity or fresh news */
function setNotifBadges(count,newsOnly){
  const on=count>0||newsOnly;
  document.querySelectorAll('.notif-badge').forEach(b=>b.classList.toggle('show',on));
}
async function refreshNotifBadge(){
  if(!document.querySelector('.notif-badge'))return;
  const np=getNotifPrefs();
  const remote=await loadNotifsRemote();
  const lastSeen=+(localStorage.getItem('tmk_notif_seen')||0);
  const unread=(remote||[]).filter(n=>np[n.type]!==false&&new Date(n.created_at).getTime()>lastSeen).length;
  const newsOnly=unread===0&&np.news!==false&&hasUnseenNews();
  setNotifBadges(unread,newsOnly);
  /* play a chime when NEW activity arrives (not on first load) */
  if(_lastUnread>=0&&unread>_lastUnread)playNotifSound();
  _lastUnread=unread;
}

/* ---------- @mentions ---------- */
function personByUsername(u){
  const h='@'+String(u||'').toLowerCase();
  return people.find(p=>String(p.h||'').toLowerCase()===h)||null;
}
function openMention(u){
  const p=personByUsername(u);
  if(p)openPerson(p.n);
  else note('No trekker with the username @'+u+' yet.','Not found');
}
/* turn @username into a link. Runs on ALREADY-ESCAPED text — the pattern only ever
   matches [a-z0-9._], so nothing can break out of the onclick string. */
/* the @ must start the text or follow a space/bracket — otherwise "vikas@gmail.com"
   would turn "@gmail.com" into a mention */
const MENTION_RE=/(^|[\s([{])@([a-zA-Z0-9][a-zA-Z0-9._]{1,18}[a-zA-Z0-9])/g;
function linkifyMentions(escaped){
  return String(escaped==null?'':escaped).replace(MENTION_RE,(m,pre,u)=>
    `${pre}<span class="mention" onclick="event.stopPropagation();openMention('${u.toLowerCase()}')">@${u}</span>`);
}
/* every @username actually present in the text */
function mentionsIn(txt){
  const out=[];const re=new RegExp(MENTION_RE.source,'g');let m;
  while((m=re.exec(String(txt||'')))){const u=m[2].toLowerCase();if(!out.includes(u))out.push(u);}
  return out;
}
/* tell the people who were mentioned */
async function notifyMentions(txt,postId){
  const sb=getSupaClient();if(!sb)return;
  const mine=(getSavedUsername()||'').toLowerCase();
  const people=mentionsIn(txt).filter(u=>u!==mine).map(personByUsername).filter(Boolean);
  if(!people.length)return;
  const preview=String(txt||'').slice(0,60);
  /* resolve every recipient id in parallel, then write all mention notifications in ONE insert */
  const uids=await Promise.all(people.map(p=>uidForName(p.n)));
  const rows=people
    .map((p,i)=>notifRow({recipientId:uids[i],recipientName:uids[i]?null:p.n,type:'mention',postId,preview}))
    .filter(notNotifSelf);
  if(!rows.length)return;
  const{error}=await sb.from('notifications').insert(rows);
  if(error)console.warn('notifyMentions:',error.message);
}

/* ---- Post composer ---- */
let postImgs=[],postFileRefs=[],postTags=[];
/* @-autocomplete inside the composer */
let _mentionRange=null;
function hideMentionBox(){const b=document.getElementById('mentionBox');if(b)b.classList.remove('show');_mentionRange=null;}
function onPostTextInput(ta){
  const box=document.getElementById('mentionBox');if(!box)return;
  const pos=ta.selectionStart;
  /* only when the caret sits right after an @word */
  const m=ta.value.slice(0,pos).match(/(?:^|\s)@([a-zA-Z0-9._]*)$/);
  if(!m){hideMentionBox();return;}
  const q=m[1].toLowerCase();
  const mine=myName();
  const list=peoplePool.filter(p=>{
    if(p.n===mine)return false;
    const h=String(p.h||'').replace(/^@/,'').toLowerCase();
    return !q||h.startsWith(q)||p.n.toLowerCase().includes(q);
  }).slice(0,6);
  if(!list.length){hideMentionBox();return;}
  _mentionRange={start:pos-m[1].length-1,end:pos};   /* the "@word" span itself */
  box.innerHTML=list.map(p=>{
    const h=String(p.h||'').replace(/^@/,'');
    return `<div class="mention-row" onclick="pickMention('${jsq(h)}')">${avatar(p.n,26)}<div><b>${esc(p.n)}</b><small>@${esc(h)}</small></div></div>`;
  }).join('');
  hydrate(box);box.classList.add('show');
}
function pickMention(u){
  const ta=document.getElementById('postText');
  if(!ta||!_mentionRange)return;
  const v=ta.value;
  const ins='@'+u+' ';
  ta.value=v.slice(0,_mentionRange.start)+ins+v.slice(_mentionRange.end);
  const caret=_mentionRange.start+ins.length;
  hideMentionBox();
  ta.focus();ta.setSelectionRange(caret,caret);
}
function renderTagList(){
  const box=document.getElementById('postTagList');if(!box)return;
  const mine=myName();
  const followed=peoplePool.filter(p=>isFollowing(p.n)&&p.n!==mine);
  const others=peoplePool.filter(p=>!isFollowing(p.n)&&p.n!==mine);
  const list=[...followed,...others];
  if(!list.length){box.innerHTML='<span style="font-size:12px;color:var(--muted2)">No other trekkers yet.</span>';}
  else box.innerHTML=list.map(p=>`<span class="tag-chip ${postTags.includes(p.n)?'on':''}" onclick="toggleTagPerson('${jsq(p.n)}')">${avatar(p.n,18)} ${esc(p.h||p.n)}</span>`).join('');
  hydrate(box);
  updatePeopleVal();
}
/* ---- composer rows: Tag trekkers / Tag a trek (Instagram-style) ---- */
let _postTrek='';
function updatePeopleVal(){const v=document.getElementById('pcPeopleVal');if(v){v.textContent=postTags.length?postTags.length+(postTags.length===1?' trekker':' trekkers'):'None';v.classList.toggle('set',!!postTags.length);}}
function updateTrekVal(){const v=document.getElementById('pcTrekVal');if(v){v.textContent=_postTrek||'None';v.classList.toggle('set',!!_postTrek);}}
function pcToggle(which){
  const rows={trek:['pcTrekRow','pcTrekPanel'],people:['pcPeopleRow','pcPeoplePanel']};
  const [rid,pid]=rows[which];const panel=document.getElementById(pid);
  const opening=!panel.classList.contains('open');
  Object.values(rows).forEach(([r,p])=>{document.getElementById(r).classList.remove('open');document.getElementById(p).classList.remove('open');});
  if(!opening)return;
  document.getElementById(rid).classList.add('open');panel.classList.add('open');
  if(which==='people'){renderTagList();}
  else{
    panel.innerHTML='<div class="pc-search"><span class="msr">search</span><input id="pcTrekSearch" placeholder="Search treks" autocomplete="off" oninput="filterTrekPicker(this.value)"/></div><div class="pc-list" id="pcTrekList"></div>';
    filterTrekPicker('');
    setTimeout(()=>{const s=document.getElementById('pcTrekSearch');if(s)s.focus();},60);
  }
}
function filterTrekPicker(q){
  const box=document.getElementById('pcTrekList');if(!box)return;
  q=(q||'').toLowerCase().trim();
  const list=treks.filter(t=>!q||t.n.toLowerCase().includes(q)||String(t.region||'').toLowerCase().includes(q));
  box.innerHTML='<div class="pc-opt'+(_postTrek?'':' on')+'" onclick="pickPostTrek(\'\')"><b>No trek</b></div>'
    +list.map(t=>'<div class="pc-opt'+(_postTrek===t.n?' on':'')+'" onclick="pickPostTrek(\''+jsq(t.n)+'\')"><b>'+esc(t.n)+'</b><small>'+esc(t.region||'')+'</small></div>').join('');
}
function pickPostTrek(n){_postTrek=n;updateTrekVal();pcToggle('trek');/* close */}
function toggleTagPerson(n){
  const i=postTags.indexOf(n);
  if(i>=0)postTags.splice(i,1);else postTags.push(n);
  renderTagList();
}
function renderPostPics(){const box=document.getElementById('postPics');
  box.innerHTML=postImgs.map((src,i)=>{
    const vid=isAnyVideo(src);const poster=vid?videoPoster(src):'';
    let inner='',bg='';
    if(vid){
      bg=poster?'background-image:url(\''+esc(poster)+'\')':'background:#0a1626';
      inner=(!poster&&String(src).startsWith('data:video'))
        ?`<video src="${esc(src)}" style="width:100%;height:100%;object-fit:cover;border-radius:12px" muted playsinline></video>`:'';
      inner+=`<span class="msr" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.7)">play_circle</span>`;
    }else{bg='background-image:url(\''+esc(src)+'\')';}
    return `<div class="pp" style="${bg};position:relative">${inner}<button onclick="rmPostPic(${i})" style="position:absolute;top:-7px;right:-7px;z-index:2">${ic('close',13)}</button></div>`;
  }).join('');
  hydrate(box);}
function rmPostPic(i){postImgs.splice(i,1);postFileRefs.splice(i,1);renderPostPics();}
async function postAddVideoLink(){
  if(postImgs.length>=4){note('You can add up to 4 items per post.','Limit reached');return;}
  const url=await askCode('Paste an Instagram or YouTube link',{placeholder:'instagram.com/reel/… or youtube.com/watch?v=…'});
  if(url==null)return;
  const v=parseVideoLink((url||'').trim());
  if(!v||(v.kind!=='instagram'&&v.kind!=='youtube')){note('Please paste an Instagram or YouTube video link.','Invalid link');return;}
  postFileRefs.push(null);postImgs.push(url.trim());renderPostPics();
}
function addPost(){
  /* posting now requires an account (DB policies reject anonymous writes) */
  if(!isLoggedIn()){
    note('Please sign in to share with the community.','Sign in required').then(()=>{_loginReturn='community';go('login');});
    return;
  }
  postImgs=[];postFileRefs=[];
  /* warm the member list so @-mentions suggest instantly instead of on second keystroke */
  ensurePeople().then(()=>renderTagList());
  const m=document.getElementById('postModal'),ta=document.getElementById('postText'),
    files=document.getElementById('postFiles'),ok=document.getElementById('postOk'),cn=document.getElementById('postCancel');
  ta.value='';renderPostPics();
  /* reset the Tag-trek / Tag-trekkers rows to collapsed + empty */
  _postTrek='';postTags=[];updateTrekVal();updatePeopleVal();
  ['pcTrekRow','pcTrekPanel','pcPeopleRow','pcPeoplePanel'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.remove('open');});
  renderTagList();
  document.getElementById('postAddIc').innerHTML=ic('camera',18);hydrate(document.getElementById('postAddIc').parentElement);
  m.classList.add('show');setTimeout(()=>ta.focus(),80);
  function close(){m.classList.remove('show');files.onchange=ok.onclick=cn.onclick=m.onclick=null;ok.textContent='Post';ok.disabled=false;}
  files.onchange=e=>{[...e.target.files].slice(0,4-postImgs.length).forEach(f=>{
    if(!/^image\//.test(f.type)){note('Only photos can be uploaded. Add videos with the “Video link” button.','Photos only');return;}
    postFileRefs.push(f);
    const r=new FileReader();r.onload=ev=>{postImgs.push(ev.target.result);renderPostPics();};r.readAsDataURL(f);
  });files.value='';};
  ok.onclick=async()=>{
    const txt=ta.value.trim();if(!txt&&!postImgs.length){close();return;}
    ok.textContent='Uploading…';ok.disabled=true;
    /* upload each photo file; video links are kept as-is (no upload) */
    const mediaUrls=[];
    for(let i=0;i<postImgs.length;i++){
      const url=postFileRefs[i]?await uploadMedia(postFileRefs[i]):postImgs[i];
      mediaUrls.push(url||postImgs[i]); /* fallback to base64 if upload fails */
    }
    const authorName=getSavedName()||( currentUser?( currentUser.email?currentUser.email.split('@')[0]:'Trekker'):'You');
    const trekTag=_postTrek||'';
    const post={id:'p'+Date.now(),uid:currentUser?currentUser.id:null,n:authorName,when:'just now',txt:txt||'',imgs:mediaUrls,likes:0,comments:[],trek:trekTag,tagged:postTags.slice()};
    userPosts.unshift(post);
    savePosts();
    await savePostRemote(post);
    notifyMentions(post.txt,post.id);   /* ping anyone @mentioned in the caption */
    close();commTab='For You';renderFeed();
  };
  cn.onclick=close;m.onclick=e=>{if(e.target===m)close();};
}
/* ---------- comments (shared via Supabase) ---------- */
let cmId=null,cmList=[];
async function openComments(id){
  cmId=id;cmList=[];const p=postById(id);if(!p)return;
  const m=document.getElementById('cmModal'),inp=document.getElementById('cmInput'),ok=document.getElementById('cmSend'),cl=document.getElementById('cmClose');
  document.getElementById('cmList').innerHTML=`<div class="skel skel-card" style="height:48px"></div><div class="skel skel-card" style="height:48px"></div>`;
  document.getElementById('cmCount').textContent='Comments';
  inp.value='';m.classList.add('show');
  await loadComments(id);
  subscribeComments(id);
  setTimeout(()=>inp.focus(),80);
  function close(){unsubscribeComments();m.classList.remove('show');ok.onclick=cl.onclick=inp.onkeydown=m.onclick=null;}
  async function send(){
    const v=inp.value.trim();if(!v)return;
    if(!isLoggedIn()){note('Please sign in to comment.','Sign in required').then(()=>{close();_loginReturn='community';go('login');});return;}
    const sb=getSupaClient();if(!sb)return;
    /* use the LIVE session id — a stale one fails the row-level security check */
    const uid=await authUid();
    if(!uid){note('Your session expired. Please sign in again.','Sign in required').then(()=>{close();_loginReturn='community';go('login');});return;}
    inp.value='';
    /* show it straight away, then confirm with the server */
    const tmp={id:'tmp-'+Date.now(),post_id:id,author_name:myName(),txt:v,created_at:new Date().toISOString()};
    cmList.push(tmp);commentCounts[id]=cmList.length;
    appendComment(tmp);updateCommentUI(id);sfx('comment');
    const{data,error}=await sb.from('post_comments').insert({post_id:id,user_id:uid,author_name:myName(),txt:v}).select().single();
    if(error){
      cmList=cmList.filter(c=>c.id!==tmp.id);commentCounts[id]=cmList.length;
      const el=document.querySelector('#cmList .cm[data-cid="'+tmp.id+'"]');if(el)el.remove();
      updateCmHeader();updateCommentUI(id);
      note('Could not post comment: '+error.message,'Error');return;
    }
    /* adopt the real id so the realtime echo doesn't duplicate it */
    const el=document.querySelector('#cmList .cm[data-cid="'+tmp.id+'"]');
    if(el)el.dataset.cid=data.id;
    tmp.id=data.id;
    if(p.uid||p.n)pushNotif({recipientId:p.uid,recipientName:p.uid?null:p.n,type:'comment',postId:id,preview:v.slice(0,60)});
    notifyMentions(v,id);   /* ping anyone @mentioned in the comment */
  }
  ok.onclick=send;inp.onkeydown=e=>{if(e.key==='Enter')send();};
  cl.onclick=close;m.onclick=e=>{if(e.target===m)close();};
}
async function loadComments(id){
  const sb=getSupaClient();
  if(sb){try{const{data}=await sb.from('post_comments').select('*').eq('post_id',id).order('created_at',{ascending:true});cmList=data||[];}catch(e){cmList=[];}}
  commentCounts[id]=cmList.length;
  /* resolve each commenter's CURRENT name/username/photo by user id (falls back to name) */
  await resolveAuthors(cmList,'user_id','author_name');
  renderComments();
}
function commentHTML(c,isNew){
  return `<div class="cm${isNew?' new':''}" data-cid="${esc(c.id)}"><div class="cm-h">${avatar(c.author_name||'Trekker',30)}<div><b>${esc(handleFor(c.author_name||'Trekker'))}</b> <small>${timeAgo(c.created_at)}</small></div></div><p>${linkifyMentions(esc(c.txt))}</p></div>`;
}
function updateCmHeader(){
  const h=document.getElementById('cmCount');if(!h)return;
  h.textContent=cmList.length?cmList.length+(cmList.length>1?' comments':' comment'):'No comments yet';
}
function renderComments(){
  const list=document.getElementById('cmList');if(!list)return;
  updateCmHeader();
  /* existing comments render without .new, so nothing re-animates on every open */
  list.innerHTML=cmList.length?cmList.map(c=>commentHTML(c,false)).join(''):`<div class="cm-empty">Be the first to comment 💬</div>`;
  hydrate(list);
}
/* add a single comment with a slide-in — only the new node animates */
function appendComment(c){
  const list=document.getElementById('cmList');if(!list)return;
  const empty=list.querySelector('.cm-empty');if(empty)empty.remove();
  list.insertAdjacentHTML('beforeend',commentHTML(c,true));
  const el=list.lastElementChild;
  hydrate(el);
  updateCmHeader();
  el.scrollIntoView({block:'nearest',behavior:'smooth'});
}
/* keep the post's comment count in sync without touching the rest of the feed */
function updateCommentUI(id){
  const nc=commentCounts[id]||0;
  document.querySelectorAll('.post[data-pid="'+id+'"]').forEach(post=>{
    const cIc=post.querySelector('.ig-ic.ig-comment');
    if(cIc)cIc.innerHTML=ic('comment',24)+(nc?'<b>'+nc+'</b>':'');
    const link=post.querySelector('.ig-comments');
    if(link)link.textContent=nc?'View all '+nc+' comment'+(nc>1?'s':''):'Add a comment…';
  });
}
/* live comments from other users (needs post_comments in the supabase_realtime publication) */
let cmChannel=null;
function subscribeComments(id){
  const sb=getSupaClient();if(!sb||!sb.channel)return;
  unsubscribeComments();
  try{
    cmChannel=sb.channel('cm-'+id)
      .on('postgres_changes',{event:'INSERT',schema:'public',table:'post_comments',filter:'post_id=eq.'+id},payload=>{
        const c=payload.new;if(!c)return;
        if(cmId!==id)return;
        if(cmList.some(x=>String(x.id)===String(c.id)))return; /* our own echo */
        cmList.push(c);commentCounts[id]=cmList.length;
        appendComment(c);updateCommentUI(id);sfx('notif');   /* someone else commented, live */
      }).subscribe();
  }catch(e){}
}
function unsubscribeComments(){
  if(!cmChannel)return;
  try{getSupaClient().removeChannel(cmChannel);}catch(e){}
  cmChannel=null;
}
/* ---------- person profile ---------- */
let curPerson=null;
function openPerson(n){
  /* tapping yourself (e.g. the host of your own trip) opens YOUR real profile,
     not the stripped public person page */
  if(isLoggedIn()&&(n==='You'||n===myName())){go('profile');return;}
  curPerson=n;go('person');
}
async function loadUserPosts(name){
  const sb=getSupaClient();let remote=[];
  if(sb){try{const{data}=await sb.from('community_posts').select('*').eq('author_name',name).order('created_at',{ascending:false});
    remote=(data||[]).map(p=>({id:p.id,uid:p.user_id||null,n:p.author_name||'Trekker',when:timeAgo(p.created_at),txt:p.txt||'',imgs:p.imgs||[],trek:p.trek_tag||''}));}catch(e){}}
  const localNew=userPosts.filter(p=>p.n===name&&!remote.find(r=>r.id===p.id));
  return [...localNew,...remote];
}
function gridCell(p){
  const media=(p.imgs&&p.imgs.length)?p.imgs[0]:'';
  const isVid=media&&isAnyVideo(media);
  const url=media?(media.startsWith('data:')?esc(media):esc(media)+Q):'';
  const badge=p.imgs&&p.imgs.length>1?`<span class="g-multi msr">filter_none</span>`:(isVid?`<span class="g-multi msr">play_arrow</span>`:'');
  let inner;
  if(!media)inner=`<div class="g-img g-txt">${esc((p.txt||'').slice(0,40))}</div>`;
  else if(isVid){
    const poster=videoPoster(media);
    inner=poster?`<div class="g-img" style="background-image:url('${esc(poster)}')"></div>`
      :(String(media).startsWith('data:video')?`<video src="${esc(media)}" muted playsinline></video>`:`<div class="g-img" style="background:#0a1626"></div>`);
  }else inner=`<div class="g-img" style="background-image:url('${url}')"></div>`;
  return `<div class="g-cell" onclick="openPostDetail('${p.id}')">${inner}${badge}</div>`;
}
async function renderPerson(){if(!curPerson){go('community');return;}const p=getPerson(curPerson);if(!p)return;
  const me=p.n==='You'||p.n===myName();
  const body=document.getElementById('personBody');
  body.innerHTML=`<div class="prof-top">${avatar(p.n,84)}<h2>${esc(properName(p.n))}</h2><div class="handle">${esc(p.h)}</div></div><div class="skel skel-card" style="height:120px;margin:16px 0"></div>`;
  const posts=await loadUserPosts(p.n);
  await Promise.all([loadEngagement(posts.map(x=>x.id)),loadAuthorPhotos([p.n])]);
  const at=atHandle(p.n);
  /* real follower / following counts for THIS person from the follows table */
  let followers=0,following=me?followCount():0;
  const sb=getSupaClient();
  if(sb){try{
    const uid=await uidForName(p.n);
    const[fr,fg]=await Promise.all([
      sb.from('follows').select('*',{count:'exact',head:true}).ilike('following_name',p.n),
      uid?sb.from('follows').select('*',{count:'exact',head:true}).eq('follower_id',uid):Promise.resolve({count:me?followCount():0})
    ]);
    followers=fr.count||0; following=fg.count||0;
    if(!me){try{const pr=await sb.from('profiles').select('prefs').ilike('name',p.n).limit(1);if(pr.data&&pr.data[0])privateByName[p.n]=!!(pr.data[0].prefs&&pr.data[0].prefs.private);}catch(e){}}
  }catch(e){}}
  /* base excludes my own optimistic follow so toggling adds/removes cleanly */
  const base=Math.max(0,followers-(isFollowing(p.n)?1:0));
  const flwr=base+(isFollowing(p.n)?1:0);
  body.innerHTML=`
    <div class="prof-top">${avatar(p.n,84)}
      <h2>${esc(properName(p.n))}${hostBadge(p.n)}</h2>${at?`<div class="handle">${esc(at)}</div>`:''}
      ${(me?getSavedCategory():(categoryByName[p.n]||''))?`<div class="pcat"><span class="msr">hiking</span>${esc(me?getSavedCategory():categoryByName[p.n])}</div>`:''}
      ${(me?getSavedBio():(bioByName[p.n]||''))?`<p class="pbio">${esc(me?getSavedBio():bioByName[p.n])}</p>`:''}
      <div class="pstats"><div><b>${posts.length}</b><small>Posts</small></div><div onclick="openFollowList('followers','${jsq(p.n)}')"><b id="pFlwr" data-person="${esc(p.n)}" data-base="${base}">${flwr.toLocaleString()}</b><small>Followers</small></div><div onclick="openFollowList('following','${jsq(p.n)}')"><b>${Number(following).toLocaleString()}</b><small>Following</small></div></div>
      ${me?'':`<div class="profile-actions" style="margin:14px 0 0"><button class="${isFollowing(p.n)?'on':''}${(!isFollowing(p.n)&&hasRequested(p.n))?' req':''}" data-follow="${esc(p.n)}" onclick="followAction('${jsq(p.n)}')">${followBtnLabel(p.n)}</button><button onclick="${isBlocked(p.n)?`note('Unblock ${jsq(properName(p.n))} first.','Blocked')`:(canSeePerson(p.n)?`openChat('${jsq(p.n)}')`:`note('Follow this private account to message them.','Private account')`)}">Message</button></div>
      <div style="text-align:center;margin-top:10px"><button onclick="toggleBlock('${jsq(p.n)}')" style="background:none;border:0;color:${isBlocked(p.n)?'var(--accent2)':'#ff6b6b'};font-size:12.5px;font-weight:700;cursor:pointer">${isBlocked(p.n)?'Unblock':'Block'} ${esc(properName(p.n))}</button></div>`}
      <div style="margin-top:12px">${socialLinks(me?getSavedSocials():socialsByName[p.n])}</div>
    </div>
    <div id="personTrips"></div>
    <div class="sec-h" style="margin:18px 4px 8px"><b>Posts</b>${(!me&&isPrivatePerson(p.n))?' <span class="msr" style="font-size:14px;color:var(--muted2);vertical-align:-2px">lock</span>':''}</div>
    ${(!me&&isBlocked(p.n))
      ?`<div class="priv-lock"><span class="msr">block</span><b>You blocked ${esc(properName(p.n))}</b><p>Unblock to see their posts, message and call.</p></div>`
      :((!me&&isPrivatePerson(p.n)&&!canSeePerson(p.n))
        ?`<div class="priv-lock"><span class="msr">lock</span><b>This account is private</b><p>Follow ${esc(properName(p.n))} to see their posts, message and call.</p></div>`
        :(posts.length?`<div class="pgrid">${posts.map(gridCell).join('')}</div>`:`<div class="empty"><p>${me?'You have not posted yet.':'No posts yet.'}</p></div>`))}`;
  hydrate(body);
  /* a host's trips are the main thing people come here for — load them after the
     profile paints so the page never waits on a second query. Always attempt: the
     hostByName flag isn't always set (e.g. profile opened via a deep link), and
     renderPersonTrips hides itself when there are no live trips anyway. */
  renderPersonTrips(p.n);
}
/* live trips for one host. Match by BOTH the frozen host_name AND the resolved
   host_id, then merge — because either can miss on its own:
   - host_name is a snapshot from trip-creation time, so it drifts if the host renames;
   - uidForName() can resolve to the WRONG profile when duplicate profiles share a name
     (limit 1), which made a host's live trips vanish on their profile even though they
     showed in the home rail (that rail doesn't filter by host). */
async function loadHostTripsFor(name){
  const sb=getSupaClient();if(!sb||!name)return [];
  try{
    const key=String(name).trim().toLowerCase();
    const uid=await uidForName(name);
    /* Match EXACTLY like loadTripCountsByHost so the profile shows the same trips the
       "N live trips" count promised. Pull every live trip, resolve each to the host's
       CURRENT profile name, then keep any trip that matches on the current name, the
       frozen host_name, OR the host_id — case-insensitive. This survives host renames
       and the duplicate-profile problem, which used to make a host's trips vanish here
       even though the count on the list said 2. */
    const r=await sb.from('host_trips').select('*').eq('status','live').limit(200);
    const raw=r.data||[];
    const orig=raw.map(t=>t.host_name);
    const resolved=await resolveHostNames(raw);
    const seen=new Set(),trips=[];
    resolved.forEach((t,i)=>{
      const names=[t.host_name,orig[i]].filter(Boolean).map(s=>String(s).trim().toLowerCase());
      const match=names.includes(key)||(uid&&t.host_id===uid);
      if(match&&!seen.has(t.id)){seen.add(t.id);trips.push(t);}
    });
    trips.sort((a,b)=>String(a.start_date||'').localeCompare(String(b.start_date||'')));
    return trips.filter(t=>!hostTripEnded(t));   /* a host's public profile shows only current/upcoming trips */
  }catch(e){return [];}
}
async function renderPersonTrips(name){
  const box=document.getElementById('personTrips');if(!box)return;
  const trips=await loadHostTripsFor(name);
  if(!document.getElementById('personTrips'))return;   /* navigated away while loading */
  if(!trips.length){box.innerHTML='';return;}
  box.innerHTML='<div class="sec-h" style="margin:18px 4px 8px"><b>Hosted trips</b>'
    +'<span class="sec-count">'+trips.length+'</span></div>'
    +'<div class="hostrail">'+trips.map(hostTripCard).join('')+'</div>';
  hydrate(box);
}
let pkTab='Essentials',pkDone={},pkTrek='';
/* per-trek packing: a trek's custom list (stored on the trek) or the default */
function getPacking(trekName){
  const t=treks.find(x=>x.n===trekName);
  if(t&&t.packing&&typeof t.packing==='object'&&Object.keys(t.packing).length){
    const out={};Object.keys(t.packing).forEach(k=>{out[k]=(t.packing[k]||[]).map(it=>Array.isArray(it)?it:['check',String(it)]);});
    return out;
  }
  return packing;
}
function renderPacking(){
  if(!pkTrek&&cart.trek)pkTrek=cart.trek.n;
  const data=getPacking(pkTrek);
  const cats=Object.keys(data);
  if(!cats.includes(pkTab))pkTab=cats[0]||'Essentials';
  const lbl=document.getElementById('pkTrekName');if(lbl)lbl.textContent=pkTrek?('For '+pkTrek):'';
  document.getElementById('pkTabs').innerHTML=cats.map(k=>`<div class="chip pill ${k===pkTab?'on':''}" onclick="setPk('${k}')">${k}</div>`).join('');
  document.getElementById('pkList').innerHTML=(data[pkTab]||[]).map((it,i)=>{const key=pkTrek+pkTab+i;return `<div class="pk ${pkDone[key]?'done':''}" onclick="togPk('${key.replace(/'/g,'')}')"><span class="ic">${ic(it[0],20)}</span><span class="t">${esc(it[1])}</span><span class="box">${ic('check',14)}</span></div>`;}).join('')||'<div class="empty"><p>No packing items for this trek yet.</p></div>';
  hydrate(document.getElementById('packing'));
}
function setPk(k){pkTab=k;renderPacking();}
function togPk(key){pkDone[key]=!pkDone[key];renderPacking();}

/* ---------- Trek Passport + badges ---------- */
function trekLevel(n){
  if(n>=15)return'Summit Legend';if(n>=10)return'Mountaineer';if(n>=5)return'Trail Veteran';
  if(n>=2)return'Explorer';if(n>=1)return'First-Timer';return'Aspiring Trekker';}
function computePassport(){
  const bs=getBookings();
  const trekNames=[...new Set(bs.map(b=>(b.trek||'').replace(' (Activity)','')))].filter(Boolean);
  const done=bs.length;
  let km=0,ft=0;const regions=new Set();let hardest=0;const lvlRank={Easy:1,Moderate:2,'Moderate-Hard':3,Difficult:4,Hard:4};
  trekNames.forEach(tn=>{const t=treks.find(x=>x.n===tn);if(t){km+=parseInt(String(t.dist).replace(/[^\d]/g,''))||0;ft+=parseInt(String(t.alt).replace(/[^\d]/g,''))||0;if(t.region)regions.add(t.region);hardest=Math.max(hardest,lvlRank[t.lvl]||0);}});
  const badges=[
    {em:'🥾',t:'First Summit',d:'Complete 1 trek',on:done>=1},
    {em:'⛰️',t:'Trail Veteran',d:'5 treks',on:done>=5},
    {em:'🏔️',t:'Mountaineer',d:'10 treks',on:done>=10},
    {em:'🧗',t:'Peak Bagger',d:'Finish a Difficult trek',on:hardest>=4},
    {em:'🗺️',t:'Explorer',d:'2+ regions',on:regions.size>=2},
    {em:'❄️',t:'Snow Walker',d:'A winter trek',on:trekNames.some(tn=>{const t=treks.find(x=>x.n===tn);return t&&/Dec|Jan|Feb/.test(t.best||'');})},
    {em:'📸',t:'Storyteller',d:'Share a post',on:userPosts.length>0},
    {em:'🌄',t:'Altitude Club',d:'10,000+ ft total',on:ft>=10000},
    {em:'👑',t:'Summit Legend',d:'15 treks',on:done>=15},
  ];
  return{bs,done,km,ft,regions,hardest,badges,earned:badges.filter(b=>b.on).length};
}
function renderPassport(){
  const box=document.getElementById('passportBody');if(!box)return;
  const name=getSavedName()||'Trekker';
  const{bs,done,km,ft,badges,earned}=computePassport();
  box.innerHTML=`
    ${pledgeCard()}
    <div class="pp-hero">
      <div class="lbl">Trek Passport</div>
      <h2>${esc(name)}</h2>
      <div class="lvl">${trekLevel(done)} · ${earned}/${badges.length} badges earned</div>
    </div>
    <div class="pp-grid">
      <div class="pp-stat"><b>${done}</b><small>Journeys</small></div>
      <div class="pp-stat"><b>${km}</b><small>km trekked</small></div>
      <div class="pp-stat"><b>${ft.toLocaleString('en-IN')}</b><small>ft climbed</small></div>
    </div>
    <div class="sec" style="margin:4px 2px 10px"><h2 style="font-size:15px">Badges</h2></div>
    <div class="pp-badges">${badges.map(b=>`<div class="pp-badge ${b.on?'':'locked'}"><span class="em">${b.em}</span><b>${b.t}</b><small>${b.on?'Earned':b.d}</small></div>`).join('')}</div>
    <div class="sec" style="margin:20px 2px 10px"><h2 style="font-size:15px">Your Treks</h2></div>
    ${bs.length?bs.map(b=>{const t=treks.find(x=>x.n===(b.trek||'').replace(' (Activity)',''));return `<div class="pp-stamp"><div class="ps-img" style="background-image:url('${b.img||(t?t.img:'')}')"></div><div class="ps-bd"><b>${esc(b.trek)}</b><small>${esc(b.date)}</small></div><span class="ps-done">${b.checkedIn?'✓ Completed':'Booked'}</span></div>`;}).join(''):`<div class="pp-empty"><span class="pp-empty-ic">🏔️</span><b>Your passport is waiting</b><p>Book your first trek and it’ll be stamped here — every journey, badge and summit you collect.</p><button class="btn" style="max-width:220px;margin:2px auto 0" onclick="go('explore')"><span class="msr">explore</span> Browse treks</button></div>`}
    <div style="height:20px"></div>`;
  hydrate(box);
}
function getSavedCover(){try{return localStorage.getItem('tmk_ucover')||'';}catch(e){return'';}}
/* upload a JPEG blob to the community bucket, return its public URL (or null on failure).
   Used for avatars + covers so profiles store a light URL, not heavy base64. */
async function uploadToStorage(blob,folder){
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid||!blob)return null;
  const netErr=m=>/failed to fetch|network|load failed/i.test(String(m||''));
  const path=(folder||'uploads')+'/'+uid+'/'+Date.now()+'.jpg';
  const doUp=()=>sb.storage.from('community').upload(path,blob,{cacheControl:'3600',upsert:true,contentType:'image/jpeg'}).catch(e=>({error:{message:String((e&&e.message)||e)}}));
  let up=await doUp();
  if(up&&up.error&&netErr(up.error.message)){await new Promise(r=>setTimeout(r,900));up=await doUp();}   /* one quiet retry on a dropped mobile connection */
  if(up&&up.error)return null;
  try{return sb.storage.from('community').getPublicUrl(path).data.publicUrl||null;}catch(e){return null;}
}
/* upload a wide cover image (URL in storage, never base64 — keeps profiles light) */
async function coverPickPhoto(input){
  const file=input.files&&input.files[0];if(!file)return;input.value='';
  if(!/^image\//.test(file.type)){note('Please choose an image file.','Not an image');return;}
  if(!isLoggedIn()){note('Please sign in to set a cover.','Sign in required');return;}
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in to set a cover.','Sign in required');return;}
  const hideModal=()=>{const m=document.getElementById('modal');if(m)m.classList.remove('show');};
  const netErr=m=>/failed to fetch|network|load failed/i.test(String(m||''));
  note('Updating your cover…','Just a moment');
  try{
    const small=await compressImage(file,{maxW:1280,quality:.8});
    /* store under the user's own folder so it satisfies a folder-scoped storage RLS
       policy (auth.uid() as the 2nd path segment) as well as a permissive one */
    const path='covers/'+uid+'/'+Date.now()+'.jpg';
    const doUpload=()=>sb.storage.from('community').upload(path,small,{cacheControl:'3600',upsert:true})
      .catch(e=>({error:{message:String((e&&e.message)||e)}}));
    let up=await doUpload();
    /* mobile networks drop mid-upload — one quiet retry on a bare network failure */
    if(up.error&&netErr(up.error.message)){await new Promise(r=>setTimeout(r,900));up=await doUpload();}
    if(up.error)throw new Error('storage upload — '+up.error.message);
    const url=sb.storage.from('community').getPublicUrl(path).data.publicUrl;
    try{localStorage.setItem('tmk_ucover',url);}catch(e){}
    const upd=await sb.from('profiles').update({cover:url}).eq('id',uid)
      .catch(e=>({error:{message:String((e&&e.message)||e)}}));
    hideModal();renderProfile();
    if(upd&&upd.error)note('Cover uploaded, but saving it to your profile failed: '+upd.error.message,'Almost there');
    else note('Cover updated.','Saved ✓');
  }catch(e){
    hideModal();
    const msg=String((e&&e.message)||e);
    note('Could not update cover: '+(netErr(msg)
      ? 'couldn’t reach storage — check your connection and try again. If it keeps failing, the community storage bucket / upload policy needs setup (run the SQL below).'
      : msg),'Error');
  }
}
/* one adaptive Hosting hub for the profile — apply / under-review / dashboard */
function hostHubCard(){
  if(!isLoggedIn())return '';
  const st=_hostApp&&_hostApp.status;
  const chev='<span class="ch">'+ic('back',16)+'</span>';
  if(st==='approved'){
    return '<div class="host-hub verified" onclick="openHostDash()">'
      +'<div class="hh-ic">'+ic('landscape',22)+'</div>'
      +'<div class="hh-tx"><b>Host Dashboard <span class="hh-badge">Verified</span></b>'
      +'<small>Manage your trips, create new ones & track bookings</small></div>'+chev+'</div>';
  }
  if(st==='pending'){
    return '<div class="host-hub pending" onclick="go(\'becomeHost\')">'
      +'<div class="hh-ic">'+ic('clock',22)+'</div>'
      +'<div class="hh-tx"><b>Host application <span class="hh-badge pend">Under review</span></b>'
      +'<small>We’re reviewing your application — tap to view</small></div>'+chev+'</div>';
  }
  return '<div class="host-hub" onclick="go(\'becomeHost\')">'
    +'<div class="hh-ic">'+ic('landscape',22)+'</div>'
    +'<div class="hh-tx"><b>Host with Tripomonk</b>'
    +'<small>Lead treks & earn — we handle operations, safety & payments</small></div>'+chev+'</div>';
}
/* Staff tools, shown on the profile directly under the Host Dashboard card.
   Only rendered for the people who actually have them: the Admin Dashboard for
   admin emails, Trip Captain check-in for admins + anyone in the staff table.
   Everyone else gets an empty string, so nothing shifts for a normal trekker. */
function staffHubCard(){
  if(!isLoggedIn())return '';
  const chev='<span class="ch">'+ic('back',16)+'</span>';
  let h='';
  const msr=n=>'<span class="msr" style="font-size:22px">'+n+'</span>';
  if(canOpenAdmin()){
    h+='<div class="host-hub staff" onclick="openAdminConsole()">'
      +'<div class="hh-ic">'+msr('open_in_new')+'</div>'
      +'<div class="hh-tx"><b>Admin Console</b>'
      +'<small>Opens the Tripomonk admin console in a new tab</small></div>'+chev+'</div>';
  }
  if(isStaffUser()){
    h+='<div class="host-hub staff" onclick="go(\'captain\')">'
      +'<div class="hh-ic">'+msr('verified')+'</div>'
      +'<div class="hh-tx"><b>Trip Captain Check-in</b>'
      +'<small>Scan tickets and check trekkers in at the trailhead</small></div>'+chev+'</div>';
  }
  return h;
}
/* The full admin panel now lives OUTSIDE the app as a standalone console at
   app.tripomonk.com/admin/. The app no longer renders admin screens — it just
   launches the console in a new tab for the owner / assigned team roles. */
function openAdminConsole(){
  if(!canOpenAdmin()){note('Admin access is restricted to the owner and assigned team roles.','Restricted');return;}
  try{window.open('/admin/','_blank','noopener');}catch(e){location.href='/admin/';}
}
/* ============================================================
   ACCOUNT & SETTINGS MENU (hamburger) — everything that isn't the
   social profile lives here: bookings, payments, tools, support.
   ============================================================ */
async function openAccountMenu(){go('accountMenu');if(isLoggedIn())await loadHostApp().catch(()=>{});renderAccountMenu();}
function menuGo(t){
  if(t==='signout'){signOut();return;}
  if(t==='hostDash'){openHostDash();return;}
  if(t==='vendorDash'){openVendorDash();return;}
  if(t.indexOf('soon:')===0){note(t.slice(5)+' is coming soon — we\'re building it into Tripomonk.','Coming soon');return;}
  go(t);
}
function accountMenuGroups(){
  const groups=[
    ['Account & activity',[
      ['confirmation_number','My Bookings','bookings'],
      ['favorite','Wishlist','wishlist'],
      ['bookmark','Saved Posts','savedPosts'],
      ['notifications','Notifications','notifications'],
      ['chat','Messages','messages'],
      ['verified_user','Adventure Passport','passport'],
      ['fitness_center','Fitness Score','fitness'],
      ['monitor_heart','Trek Health','health']
    ]],
    ['Wallet & payments',[
      ['card_giftcard','Gift Cards','giftCards'],
      ['account_balance_wallet','Wallet','wallet'],
      ['credit_card','Payment Methods','soon:Payment methods'],
      ['local_offer','Coupons','soon:Coupons'],
      ['download','Downloaded Tickets','bookings']
    ]],
    ['Trek tools',[
      ['eco','Mountain Promise','pledge'],
      ['checklist','Packing Lists','packing'],
      ['explore','Trek Navigation','navmap'],
      ['star','My Reviews','reviews']
    ]]
  ];
  const host=(typeof isVerifiedHost==='function'&&isVerifiedHost())
    ? [['dashboard','Host Dashboard','hostDash']]
    : [['hiking','Become a Host','becomeHost']];
  groups.push(['Hosting',host]);
  groups.push(['Partner with us',[['storefront','List your hotel / transport / gear','vendorDash']]]);
  groups.push(['Support & legal',[
    ['help','Help & Support','help'],
    ['emergency','Emergency Contacts','emergency'],
    ['shield','Data & privacy','dataPrivacy'],
    ['lock','Privacy Policy','privacy'],
    ['description','Terms & Conditions','terms'],
    ['settings','Settings','settings']
  ]]);
  return groups;
}
function renderAccountMenu(){
  const box=document.getElementById('accountMenuBody');if(!box)return;
  const row=a=>'<button type="button" class="amrow" onclick="menuGo(\''+jsq(a[2])+'\')"><span class="msr amic">'+a[0]+'</span><span class="amt">'+esc(a[1])+'</span><span class="msr amch">chevron_right</span></button>';
  let html=accountMenuGroups().map(g=>'<div class="amgrp"><div class="amgrp-h">'+esc(g[0])+'</div>'+g[1].map(row).join('')+'</div>').join('');
  /* Admin Dashboard + Trip Captain check-in used to sit here. They're staff tools, so
     they now live on the profile directly under the Host Dashboard card (staffHubCard). */
  html+=isLoggedIn()
    ? '<button type="button" class="amrow amlogout" onclick="menuGo(\'signout\')"><span class="msr amic">logout</span><span class="amt">Logout</span></button>'
    : '<button type="button" class="amrow amsignin" onclick="menuGo(\'login\')"><span class="msr amic">login</span><span class="amt">Sign in / Create account</span></button>';
  box.innerHTML=html;
}
/* ---- Emergency Contacts ---- */
const EMERGENCY_NUMS=[
  ['112','All-in-one emergency','emergency'],
  ['108','Ambulance','ambulance'],
  ['100','Police','local_police'],
  ['101','Fire','local_fire_department'],
  ['1363','Tourist helpline','support_agent'],
  ['1070','Disaster helpline','crisis_alert']
];
/* ---- Mountain Promise: a personal responsible-trekking pledge every trekker can take.
   Stored on the device (tmk_pledge = ISO date). No backend needed. ---- */
const PLEDGE_POINTS=[
  ['forest','Tread lightly','I stay on the marked trail, keep my distance from wildlife, and never pick or disturb what grows here.'],
  ['delete_sweep','Leave no trace','I carry back every wrapper, bottle and scrap. The mountain stays cleaner than I found it.'],
  ['health_and_safety','Trek safe','I follow my trek leader, respect my limits, and never risk the group for a photo or a summit.'],
  ['volunteer_activism','Support local','I respect village life and culture, and put my money into local hands — guides, porters and homestays.'],
  ['water_drop','Use less','I go easy on water, fuel and plastic, and share what I can on the trail.'],
  ['diversity_3','Leave it better','I help fellow trekkers, speak up for the mountains, and bring others into the promise.']
];
function pledgeDate(){try{return localStorage.getItem('tmk_pledge')||'';}catch(e){return '';}}
function renderPledge(){
  const box=document.getElementById('pledgeBody');if(!box)return;
  const taken=pledgeDate();
  const name=getSavedName()||'Trekker';
  const dateStr=taken?new Date(taken).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}):'';
  box.innerHTML=`
    <div class="pledge-hero">
      <span class="msr pledge-mk">landscape</span>
      <div class="lbl">The Mountain Promise</div>
      <h2>Trek light. Leave it better.</h2>
      <p>Every Tripomonk trekker makes one promise to the Himalaya. Read it, mean it, and take it.</p>
    </div>
    <div class="pledge-count" id="pledgeCountTxt">${_pledgeCount!=null?'<span class="msr">group</span>'+esc(pledgeCountLabel()):'<span class="msr">group</span>Be part of the promise circle'}</div>
    ${taken?`<div class="pledge-signed"><span class="msr">verified</span><div><b>${esc(name)} took the Mountain Promise</b><small>${esc(dateStr)}</small></div></div>`:''}
    <div class="pledge-list">
      ${PLEDGE_POINTS.map(p=>`<div class="pledge-item"><div class="pi-ic"><span class="msr">${p[0]}</span></div><div class="pi-tx"><b>${esc(p[1])}</b><span>${esc(p[2])}</span></div></div>`).join('')}
    </div>
    <div class="pledge-cta">
      ${taken
        ? `<button class="btn ghost" onclick="sharePledge()"><span class="msr">ios_share</span> Share the promise</button><button class="btn" onclick="retakePledge()"><span class="msr">favorite</span> Re-affirm my promise</button>`
        : `<button class="btn" onclick="takePledge()"><span class="msr">front_hand</span> Take the Mountain Promise</button>`}
    </div>
    <p class="pledge-foot">The Mountain Promise is a personal commitment, not a contract — it’s how we keep Uttarakhand’s trails wild and welcoming for every trekker after you.</p>`;
  hydrate(box);
  loadPledgeCount();
  loadMyPledge();
}
/* real, shared count of trekkers who took the promise (RPC over the pledges table) */
let _pledgeCount=null;
function pledgeCountLabel(){const n=_pledgeCount;if(!n||n<1)return 'Be the first to take the promise';return n.toLocaleString('en-IN')+' trekker'+(n===1?'':'s')+' have taken the promise';}
async function loadPledgeCount(){
  const sb=getSupaClient();if(!sb)return;
  try{const {data,error}=await sb.rpc('pledge_count');if(!error&&data!=null){_pledgeCount=Number(data);const el=document.getElementById('pledgeCountTxt');if(el)el.innerHTML='<span class="msr">group</span>'+esc(pledgeCountLabel());}}catch(e){}
}
/* cross-device: if this account already pledged (stored in the DB), reflect it on THIS
   device so every device shows the signed / "re-affirm" state — never "take" it again. */
async function loadMyPledge(){
  if(pledgeDate())return;                       /* already known on this device */
  const sb=getSupaClient();if(!sb||!isLoggedIn())return;
  try{const uid=await authUid();if(!uid)return;
    const {data}=await sb.from('pledges').select('created_at').eq('user_id',uid).maybeSingle();
    if(data){try{localStorage.setItem('tmk_pledge',data.created_at||new Date().toISOString());}catch(e){}if(cur==='pledge')renderPledge();}
  }catch(e){}
}
/* Gentle nudge: after a trekker has spent a little time on the home screen (and hasn't
   pledged yet), invite them once per session to take the Mountain Promise. */
let _pledgeTimer=null;
function schedulePledgePrompt(){
  clearTimeout(_pledgeTimer);
  if(pledgeDate())return;                                   /* already took it */
  try{if(sessionStorage.getItem('tmk_pledge_prompted')==='1')return;}catch(e){}
  loadPledgeCount();                                        /* warm the count for the copy */
  loadMyPledge();                                           /* sync DB pledge state before prompting */
  _pledgeTimer=setTimeout(async()=>{
    if(cur!=='home'||pledgeDate())return;                   /* moved on, or pledged meanwhile */
    try{sessionStorage.setItem('tmk_pledge_prompted','1');}catch(e){}
    const join=(_pledgeCount&&_pledgeCount>0)?('Join '+_pledgeCount.toLocaleString('en-IN')+' trekkers who already promised. '):'';
    const yes=await askConfirm(join+'Take the Mountain Promise — our pledge to keep the Himalaya wild and clean. It takes ten seconds.','The Mountain Promise');
    if(yes)go('pledge');
  },16000);
}
async function takePledge(){
  try{localStorage.setItem('tmk_pledge',new Date().toISOString());}catch(e){}
  try{logEvent('pledge');}catch(e){}
  renderPledge();
  /* record to the shared count when signed in, so the number on screen is real */
  const sb=getSupaClient();
  if(sb&&isLoggedIn()){
    try{const uid=await authUid();if(uid)await sb.from('pledges').upsert({user_id:uid,name:getSavedName()||'Trekker'},{onConflict:'user_id'});}catch(e){}
    loadPledgeCount();
  }
  note('Thank you for taking the Mountain Promise. Trek light, and leave it better.','Promise taken');
}
function retakePledge(){note('Your promise still stands — thank you for keeping it.','Mountain Promise');}
/* compact banner reused on the Passport (and anywhere) to promote / show the pledge */
function pledgeCard(){
  if(pledgeDate())return `<div class="pledge-signed" style="cursor:pointer" onclick="go('pledge')"><span class="msr">verified</span><div><b>Mountain Promise taken</b><small>Tap to view your pledge</small></div><span class="msr" style="margin-left:auto;color:var(--muted)">chevron_right</span></div>`;
  return `<div class="pledge-signed" style="cursor:pointer;background:linear-gradient(150deg,#0b5cff,#0a3aa0);border-color:transparent" onclick="go('pledge')"><span class="msr" style="color:#fff">front_hand</span><div><b style="color:#fff">Take the Mountain Promise</b><small style="color:rgba(255,255,255,.85)">Our responsible-trekking pledge</small></div><span class="msr" style="margin-left:auto;color:rgba(255,255,255,.9)">chevron_right</span></div>`;
}
const PLEDGE_LINK='https://app.tripomonk.com/#take-promise';
/* a real Himalayan trek photo (Unsplash, CORS-safe) used when no featured trek image is loaded */
const PLEDGE_BG='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1080&q=70';
function loadImg(src){return new Promise((res,rej)=>{const i=new Image();i.crossOrigin='anonymous';i.onload=()=>res(i);i.onerror=rej;i.src=src;});}
/* build a 1080×1920 Instagram-story card — editorial "postcard from the mountains".
   Background = a REAL trek photo (never a drawn vector). Type stays ≤ semibold (600).
   Only ever built at share time. */
const FONT='-apple-system,"Segoe UI Semibold","Segoe UI",system-ui,Arial,sans-serif';
function _spaced(s,n){return String(s).split('').join(n===2?'  ':' ');} /* thin-space letter tracking */
function _rrect(x,rx,ry,rw,rh,r){x.beginPath();x.moveTo(rx+r,ry);x.arcTo(rx+rw,ry,rx+rw,ry+rh,r);x.arcTo(rx+rw,ry+rh,rx,ry+rh,r);x.arcTo(rx,ry+rh,rx,ry,r);x.arcTo(rx,ry,rx+rw,ry,r);x.closePath();}
function _gradText(x,txt,px,py,font){x.font=font;const w=x.measureText(txt).width;const g=x.createLinearGradient(px,0,px+w,0);g.addColorStop(0,'#2f6bff');g.addColorStop(.52,'#ff7a1a');g.addColorStop(1,'#ffce1f');x.fillStyle=g;x.fillText(txt,px,py);return w;}
async function makePledgeImage(name){
  const W=1080,H=1920,PAD=96,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
  const wrap=(text,px,py,maxW,lh)=>{const words=String(text).split(' ');let line='',yy=py;for(let i=0;i<words.length;i++){const test=line?line+' '+words[i]:words[i];if(x.measureText(test).width>maxW&&line){x.fillText(line,px,yy);line=words[i];yy+=lh;}else line=test;}if(line)x.fillText(line,px,yy);return yy;};
  /* real trek photo — featured/first loaded trek if CORS-safe Unsplash, else curated Himalaya */
  let bg=PLEDGE_BG;
  try{const t=(window.treks||[]).find(k=>k.feat&&/unsplash\.com/.test(k.img||''))||(window.treks||[]).find(k=>/unsplash\.com/.test(k.img||''));if(t&&t.img)bg=t.img;}catch(e){}
  try{const im=await loadImg(bg);const iw=im.naturalWidth||im.width,ih=im.naturalHeight||im.height,s=Math.max(W/iw,H/ih),dw=iw*s,dh=ih*s;x.drawImage(im,(W-dw)/2,(H-dh)/2,dw,dh);}
  catch(e){const gg=x.createLinearGradient(0,0,W,H);gg.addColorStop(0,'#0b5cff');gg.addColorStop(1,'#08183a');x.fillStyle=gg;x.fillRect(0,0,W,H);}
  /* scrims: overall cool darken + stronger top (for the description) + heavy bottom */
  x.fillStyle='rgba(6,14,30,.34)';x.fillRect(0,0,W,H);
  let tg=x.createLinearGradient(0,0,0,H*0.34);tg.addColorStop(0,'rgba(4,10,24,.72)');tg.addColorStop(1,'rgba(4,10,24,0)');x.fillStyle=tg;x.fillRect(0,0,W,H*0.34);
  let bd=x.createLinearGradient(0,H*0.30,0,H);bd.addColorStop(0,'rgba(3,9,22,0)');bd.addColorStop(.5,'rgba(3,9,22,.74)');bd.addColorStop(1,'rgba(3,9,22,.97)');x.fillStyle=bd;x.fillRect(0,H*0.30,W,H*0.70);
  /* top brand row (left) — wordmark is "Tripomonk", normal case, no letter-spacing */
  try{const logo=await loadImg('icons/icon-512.png');x.drawImage(logo,PAD,92,86,86);}catch(e){}
  x.textAlign='left';x.textBaseline='alphabetic';
  x.fillStyle='rgba(255,255,255,.98)';x.font='700 40px '+FONT;x.fillText('Tripomonk',PAD+104,152);
  /* heading + explanation of the Mountain Promise */
  x.save();x.shadowColor='rgba(0,0,0,.55)';x.shadowBlur=12;x.shadowOffsetY=2;
  x.fillStyle='#ffffff';x.font='700 44px '+FONT;x.fillText('What is the Mountain Promise?',PAD,600);
  x.fillStyle='rgba(255,255,255,.9)';x.font='500 32px '+FONT;
  wrap('Every Tripomonk trekker makes one promise to the mountains. Tread lightly, leave no trace, and keep the Himalaya wild for those who follow.',PAD,672,840,44);
  x.restore();
  /* frosted-glass confirmation chip */
  const chipY=H-1084,chipW=W-2*PAD,chipH=150;
  x.save();x.shadowColor='rgba(0,0,0,.35)';x.shadowBlur=30;x.shadowOffsetY=10;x.fillStyle='rgba(255,255,255,.14)';_rrect(x,PAD,chipY,chipW,chipH,28);x.fill();x.restore();
  x.strokeStyle='rgba(255,255,255,.22)';x.lineWidth=1.5;_rrect(x,PAD,chipY,chipW,chipH,28);x.stroke();
  try{const l2=await loadImg('icons/icon-512.png');x.drawImage(l2,PAD+28,chipY+37,76,76);}catch(e){}
  x.fillStyle='#ffffff';x.font='700 32px '+FONT;x.fillText('Tripomonk',PAD+130,chipY+62);
  x.fillStyle='rgba(255,255,255,.82)';x.font='500 28px '+FONT;
  const chipMsg=(_pledgeCount&&_pledgeCount>0)?('You joined '+_pledgeCount.toLocaleString('en-IN')+' trekkers who promised'):'You took the Mountain Promise';
  x.fillText(chipMsg,PAD+130,chipY+104);
  /* circular user profile picture (photo if available, else initials) */
  const acx=PAD+70,acy=H-812,ar=70;
  x.save();x.shadowColor='rgba(0,0,0,.45)';x.shadowBlur=26;x.shadowOffsetY=8;x.beginPath();x.arc(acx,acy,ar+6,0,Math.PI*2);x.fillStyle='rgba(255,255,255,.96)';x.fill();x.restore();
  let drew=false;const avSrc=(typeof getSavedPhoto==='function'?getSavedPhoto():'')||'';
  if(avSrc){try{const pi=await loadImg(avSrc);x.save();x.beginPath();x.arc(acx,acy,ar,0,Math.PI*2);x.clip();const pw=pi.naturalWidth||pi.width,ph=pi.naturalHeight||pi.height,ps=Math.max((ar*2)/pw,(ar*2)/ph);x.drawImage(pi,acx-pw*ps/2,acy-ph*ps/2,pw*ps,ph*ps);x.restore();drew=true;}catch(e){}}
  if(!drew){x.save();x.beginPath();x.arc(acx,acy,ar,0,Math.PI*2);x.clip();const ig=x.createLinearGradient(acx-ar,acy-ar,acx+ar,acy+ar);ig.addColorStop(0,'#2f6bff');ig.addColorStop(1,'#0a3aa0');x.fillStyle=ig;x.fillRect(acx-ar,acy-ar,ar*2,ar*2);x.fillStyle='#fff';x.font='700 58px '+FONT;x.textAlign='center';x.textBaseline='middle';const ini=((name||'Trekker').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('')||'T').toUpperCase();x.fillText(ini,acx,acy+3);x.restore();x.textAlign='left';x.textBaseline='alphabetic';}
  /* big display headline with gradient accent */
  x.fillStyle='rgba(255,255,255,.72)';x.font='700 30px '+FONT;x.fillText(_spaced('THE MOUNTAIN PROMISE'),PAD,H-660);
  x.save();x.shadowColor='rgba(0,0,0,.4)';x.shadowBlur=16;x.shadowOffsetY=3;
  x.fillStyle='#ffffff';x.font='800 88px '+FONT;x.fillText('I took the',PAD,H-568);
  _gradText(x,'Mountain',PAD,H-452,'800 112px '+FONT);
  _gradText(x,'Promise.',PAD,H-336,'800 112px '+FONT);
  x.restore();
  /* name and date */
  const dISO=pledgeDate();const dTxt=dISO?new Date(dISO).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):'';
  const who=(name||'A Tripomonk trekker').slice(0,26);
  x.fillStyle='rgba(255,255,255,.9)';x.font='600 36px '+FONT;x.fillText(dTxt?who+'   ·   '+dTxt:who,PAD,H-252);
  /* CTA (big bottom padding below this) */
  x.fillStyle='rgba(255,255,255,.7)';x.font='600 32px '+FONT;const pre='Take yours at  ';x.fillText(pre,PAD,H-192);
  const pw2=x.measureText(pre).width;_gradText(x,'app.tripomonk.com',PAD+pw2,H-192,'700 32px '+FONT);
  /* my trek score (Adventure Readiness), bottom-right ring */
  try{
    if(typeof computeFitness==='function'){
      const has=(typeof hasFitness==='function')?hasFitness():false;
      const fs=computeFitness()||{};const sc=Math.round(fs.score||0),col=(typeof scoreColor==='function')?scoreColor(sc):'#38d39f';
      const cx2=W-PAD-150,cy2=H-330,r2=90;
      x.textAlign='center';
      x.save();x.shadowColor='rgba(0,0,0,.5)';x.shadowBlur=12;x.shadowOffsetY=2;x.fillStyle='rgba(255,255,255,.82)';x.font='700 24px '+FONT;x.fillText(_spaced('MY TREK SCORE'),cx2,cy2-r2-32);x.restore();
      x.lineWidth=15;x.strokeStyle='rgba(255,255,255,.25)';x.beginPath();x.arc(cx2,cy2,r2,0,Math.PI*2);x.stroke();
      if(has){x.strokeStyle=col;x.lineCap='round';x.beginPath();x.arc(cx2,cy2,r2,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.max(0.001,sc/100));x.stroke();x.lineCap='butt';}
      x.textBaseline='middle';
      x.fillStyle='#ffffff';x.font='800 66px '+FONT;x.fillText(has?String(sc):'—',cx2,cy2-6);
      x.fillStyle='rgba(255,255,255,.7)';x.font='600 22px '+FONT;x.fillText('/ 100',cx2,cy2+40);
      x.textBaseline='alphabetic';
      x.fillStyle=has?col:'rgba(255,255,255,.7)';x.font='700 27px '+FONT;x.fillText(has?String(fs.level||''):'Take the test',cx2,cy2+r2+42);
      x.textAlign='left';
    }
  }catch(e){}
  return await new Promise(r=>{try{c.toBlob(r,'image/png',.92);}catch(e){r(null);}});
}
async function sharePledge(){
  const name=getSavedName()||'';
  const text='I took the Tripomonk Mountain Promise — trek light and leave the Himalaya better than I found it. Take yours:';
  let file=null;
  try{const blob=await makePledgeImage(name);if(blob)file=new File([blob],'mountain-promise.png',{type:'image/png'});}catch(e){}
  try{
    if(file&&navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],text,url:PLEDGE_LINK});return;}
    if(navigator.share){await navigator.share({title:'The Mountain Promise',text,url:PLEDGE_LINK});return;}
  }catch(e){if(e&&e.name==='AbortError')return;}
  /* fallback (desktop / no share sheet): save the image + copy the invite link */
  if(file){const a=document.createElement('a');a.href=URL.createObjectURL(file);a.download='mountain-promise.png';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000);}
  try{await navigator.clipboard.writeText(PLEDGE_LINK);}catch(e){}
  note('Promise card saved and invite link copied — post it to your Instagram story so your trek crew can take the promise too.','Share the promise');
}
function renderEmergency(){
  const box=document.getElementById('emergencyBody');if(!box)return;
  const wa=getWa();
  const c=(typeof getContact==='function'?getContact():null)||{};
  const emName=c.emName||'',emPhone=c.emPhone||'';
  box.innerHTML=
    '<div class="em-sos">'
    +'<div class="em-sos-h"><span class="msr">sos</span><div><b>Tripomonk 24×7 helpline</b><small>Trek emergencies, delays, medical &amp; safety</small></div></div>'
    +'<div class="em-sos-btns">'
    +'<a class="em-cta call" href="tel:+'+esc(wa)+'"><span class="msr">call</span>Call now</a>'
    +'<a class="em-cta wa" href="https://wa.me/'+esc(wa)+'?text='+encodeURIComponent(typeof aiCfg==='function'?aiCfg('sos'):'EMERGENCY — I need help on my Tripomonk trek.')+'" target="_blank" rel="noopener"><span class="msr">chat</span>WhatsApp</a>'
    +'</div></div>'
    +'<div class="sec" style="margin:18px 2px 8px"><h2 style="font-size:15px">On a trek, in an emergency</h2></div>'
    +'<ol class="em-steps">'
    +'<li>Stop, stay together and keep calm — don’t move or descend alone.</li>'
    +'<li>Tell your <b>trek leader / guide</b> right away. They carry first-aid and know the evacuation route.</li>'
    +'<li>Open <b>Trek Guardian</b> and hit <b>SOS</b> to share your live location.</li>'
    +'<li>Call the Tripomonk helpline above, then the national numbers below if needed.</li>'
    +'</ol>'
    +'<button class="btn" style="margin:2px 0 16px" onclick="go(\'guardian\')"><span class="msr">health_and_safety</span> Open Trek Guardian &amp; SOS</button>'
    +'<div class="sec" style="margin:8px 2px 8px"><h2 style="font-size:15px">National emergency numbers</h2></div>'
    +'<div class="em-grid">'+EMERGENCY_NUMS.map(n=>'<a class="em-num" href="tel:'+esc(n[0])+'"><span class="msr">'+n[2]+'</span><b>'+esc(n[0])+'</b><small>'+esc(n[1])+'</small></a>').join('')+'</div>'
    +'<div class="sec" style="margin:18px 2px 8px"><h2 style="font-size:15px">Your emergency contact</h2></div>'
    +((emName||emPhone)
       ? '<div class="em-contact"><div class="em-c-tx"><b>'+esc(emName||'Contact')+'</b><small>'+esc(emPhone||'—')+'</small></div>'+(emPhone?'<a class="em-mini" href="tel:'+esc(emPhone)+'"><span class="msr">call</span></a>':'')+'</div>'
       : '<div class="em-empty">Add an emergency contact when you book a trek — it’s saved here and shared with your trek leader.</div>')
    +'<div style="height:24px"></div>';
  hydrate(box);
}
/* ---- Saved Posts (bookmark community posts, kept locally) ---- */
function getSavedPostIds(){try{return JSON.parse(localStorage.getItem('tmk_savedposts')||'[]');}catch(e){return[];}}
function isSavedPost(id){return getSavedPostIds().indexOf(String(id))>=0;}
function toggleSavePost(id,el){
  id=String(id);let a=getSavedPostIds();const i=a.indexOf(id);const nowSaved=i<0;
  if(i>=0)a.splice(i,1);else a.unshift(id);
  try{localStorage.setItem('tmk_savedposts',JSON.stringify(a.slice(0,200)));}catch(e){}
  if(el){el.classList.toggle('on',nowSaved);const g=el.querySelector('.msr');if(g)g.textContent=nowSaved?'bookmark':'bookmark_border';}
  toast(nowSaved?'Saved ✓':'Removed from Saved');
  if(cur==='savedPosts')renderSavedPosts();
}
async function renderSavedPosts(){
  const box=document.getElementById('savedPostsBody');if(!box)return;
  const empty='<div class="ss-empty"><span class="msr">bookmark_border</span><b>No saved posts yet</b><p>Tap the bookmark on any community post to keep it here for later.</p><button class="btn" style="max-width:220px;margin:4px auto 0" onclick="go(\'community\')">Explore community</button></div>';
  const ids=getSavedPostIds();
  if(!ids.length){box.innerHTML=empty;hydrate(box);return;}
  box.innerHTML='<div class="empty"><p>Loading your saved posts…</p></div>';
  try{if(typeof loadPostsRemote==='function')await loadPostsRemote();}catch(e){}
  const posts=ids.map(id=>postById(id)).filter(Boolean);
  box.innerHTML=posts.length?posts.map(postCard).join('')
    :'<div class="ss-empty"><span class="msr">bookmark_border</span><b>Nothing to show</b><p>Your saved posts may have been removed, or you’re offline.</p><button class="btn" style="max-width:220px;margin:4px auto 0" onclick="go(\'community\')">Explore community</button></div>';
  hydrate(box);
  if(typeof lazyBg==='function')lazyBg(box);
}
/* ---- gift cards (welcome-gift picker) ---- */
/* Each card carries its OWN perk — a themed inclusion shown on the card and
   honoured at booking. perkIc = a material-symbol glyph for the badge. */
const GIFT_CARDS=[
  {file:'escape-together',name:'Escape Together',perkIc:'favorite',perk:'Couple’s tent upgrade',perkDesc:'A private tent for two on your trek — on us'},
  {file:'explorer-buddy',name:'The Explorer Buddy',perkIc:'group_add',perk:'Bring a friend',perkDesc:'Your +1 gets 10% off the same departure'},
  {file:'solo-warrior',name:'The Solo Warrior',perkIc:'hiking',perk:'Solo safety kit',perkDesc:'Free gear rental for one trek — headlamp, poles & gaiters'},
  {file:'soul-sisters',name:'The Soul Sisters',perkIc:'diversity_3',perk:'Squad discount',perkDesc:'Groups of 3+ get an extra 8% off'},
  {file:'story-collector',name:'The Story Collector',perkIc:'photo_camera',perk:'Trek photo album',perkDesc:'Free pro photos from your departure'},
  {file:'unscripted-wanderer',name:'The Unscripted Wanderer',perkIc:'event_repeat',perk:'Flexi reschedule',perkDesc:'Change your trek date once, no fee'},
  {file:'wanderer-queen',name:'The Wanderer Queen',perkIc:'workspace_premium',perk:'VIP arrival',perkDesc:'Priority booking + a welcome hamper on arrival'}
];
const GIFT_AMOUNTS=[2000,5000,8000,10000,15000];
let _giftSel=0,_giftAmt=2000;
function inr(n){return '₹'+Number(n||0).toLocaleString('en-IN');}
/* ---- discounts: a trek's `discount` is % off. priceOf() gives the payable price; the
   server (Razorpay edge fn) applies the SAME % so the charge matches what's shown. ---- */
function trekDiscount(t){return Math.max(0,Math.min(90,parseInt(t&&t.discount)||0));}
function priceOf(t){const base=Number(t&&t.price)||0;const off=trekDiscount(t);return {base,off,now:off?Math.round(base*(100-off)/100):base,was:off?base:0};}
/* inline price for cards/detail: strikethrough original + discounted, or just the price */
function priceTag(t){const p=priceOf(t);return p.off
  ? `<span class="pr-was">${INR(p.base)}</span> <span class="pr-now">${INR(p.now)}</span>`
  : INR(p.now);}
/* apply a trek's % discount to any base amount (batch price or trek price), matching the
   Razorpay edge fn — so the booking total shown = the amount charged */
function discPrice(base,t){return priceOf({price:Number(base)||0,discount:t&&t.discount}).now;}
function openGiftCards(){_giftSel=0;_giftAmt=2000;go('giftCards');renderGiftCards();}
function openGiftCardAt(i){_giftSel=i||0;_giftAmt=2000;go('giftCards');renderGiftCards();}
/* home-page gift-card preview rail (below Compare Treks) */
function renderGiftHome(){
  const el=document.getElementById('gcHome');if(!el)return;
  el.innerHTML=
    '<div class="sec" style="margin-top:22px"><h2>Gift Cards</h2><a onclick="openGiftCards()">See all</a></div>'
    +'<div class="gc-home-sub">Give the gift of adventure — they choose the trek.</div>'
    +'<div class="gc-home-rail">'
    +GIFT_CARDS.map((c,i)=>'<div class="gc-home-card" onclick="openGiftCardAt('+i+')"><img src="giftcards/'+c.file+'.svg" alt="'+esc(c.name)+'" loading="lazy"></div>').join('')
    +'<div class="gc-home-more" onclick="openGiftCards()"><span class="msr">card_giftcard</span><span>Send a<br>gift card</span></div>'
    +'</div>';
  /* same centred swipe feel as the main gift page */
  const rail=el.querySelector('.gc-home-rail');
  if(rail)gcFocusRail(rail,'.gc-home-card',null);
}
/* centre a card inside its rail. scrollTo on the rail (not scrollIntoView) so the
   page behind it never jumps. */
function gcCenter(rail,i,smooth){
  const c=rail.querySelectorAll('.gc-card')[i];
  if(!c)return;
  const left=c.offsetLeft-(rail.clientWidth-c.offsetWidth)/2;
  rail.scrollTo({left:Math.max(0,left),behavior:smooth?'smooth':'auto'});
}
/* mark whichever card is centred as .on — the CSS scale/glow then animates as you swipe */
function gcFocusRail(rail,cardSel,onChange){
  const cards=[...rail.querySelectorAll(cardSel)];if(!cards.length)return;
  let raf=0;
  const sync=()=>{raf=0;
    const mid=rail.scrollLeft+rail.clientWidth/2;
    let best=0,bd=1e9;
    cards.forEach((c,i)=>{const cc=c.offsetLeft+c.offsetWidth/2;const d=Math.abs(cc-mid);if(d<bd){bd=d;best=i;}});
    cards.forEach((c,j)=>c.classList.toggle('on',j===best));
    if(onChange)onChange(best);
  };
  if(rail._gcFocus)rail.removeEventListener('scroll',rail._gcFocus);
  rail._gcFocus=()=>{if(!raf)raf=requestAnimationFrame(sync);};
  rail.addEventListener('scroll',rail._gcFocus,{passive:true});
  sync();setTimeout(sync,80);setTimeout(sync,260);
}
function renderGiftCards(){
  const row=document.getElementById('gcRow');
  if(row){
    row.innerHTML=GIFT_CARDS.map((g,i)=>'<div class="gc-card'+(i===_giftSel?' on':'')+'" onclick="selGift('+i+')"><img src="giftcards/'+g.file+'.svg" alt="'+esc(g.name)+'" loading="lazy"/></div>').join('');
    /* open on the card that was picked (e.g. tapped on the home rail), THEN wire the
       swipe focus — otherwise the focus pass would snap the selection back to card 1 */
    const want=_giftSel;
    gcCenter(row,want,false);
    requestAnimationFrame(()=>{
      gcCenter(row,want,false);
      gcFocusRail(row,'.gc-card',i=>{if(i!==_giftSel){_giftSel=i;renderGiftAmts();}});
    });
  }
  renderGiftAmts();
}
function renderGiftAmts(){
  const card=GIFT_CARDS[_giftSel];
  const nm=document.getElementById('gcName');if(nm)nm.textContent=card.name;
  const pk=document.getElementById('gcPerk');
  if(pk){pk.innerHTML=card.perk
    ? '<span class="gc-perk-ic msr">'+(card.perkIc||'redeem')+'</span><span class="gc-perk-tx"><b>'+esc(card.perk)+'</b><small>'+esc(card.perkDesc||'')+'</small></span>'
    : '';
  }
  const el=document.getElementById('gcAmts');
  if(el){
    const custom=!GIFT_AMOUNTS.includes(_giftAmt);
    el.innerHTML=GIFT_AMOUNTS.map(a=>'<button type="button" class="gc-amt'+(_giftAmt===a?' on':'')+'" onclick="pickGiftAmt('+a+')">'+inr(a)+'</button>').join('')
      +'<button type="button" class="gc-amt'+(custom?' on':'')+'" onclick="pickGiftAmtCustom()">'+(custom?inr(_giftAmt):'Custom')+'</button>';
  }
  const btn=document.getElementById('gcBuyBtn');if(btn)btn.textContent='Buy gift card · '+inr(_giftAmt);
}
function pickGiftAmt(a){_giftAmt=a;renderGiftAmts();}
async function pickGiftAmtCustom(){
  const v=await askCode('Custom gift card amount (₹)',{placeholder:'e.g. 3500'});
  if(v==null)return;
  const n=Math.round(parseFloat(String(v).replace(/[^\d.]/g,''))||0);
  if(n<500||n>100000){note('Enter an amount between ₹500 and ₹1,00,000.','Invalid amount');return;}
  _giftAmt=n;renderGiftAmts();
}
function selGift(i){
  _giftSel=i;
  const row=document.getElementById('gcRow');
  if(row){row.querySelectorAll('.gc-card').forEach((c,j)=>c.classList.toggle('on',j===i));gcCenter(row,i,true);}
  renderGiftAmts();
}
/* buy a gift card — priced & credited server-side (booking.kind = 'giftcard') */
async function buyGiftCard(){
  const card=GIFT_CARDS[_giftSel],amount=_giftAmt;
  if(!(amount>=500)){note('Choose an amount first.','Amount required');return;}
  if(!isLoggedIn()){note('Please sign in to buy a gift card.','Sign in required').then(()=>{_loginReturn='giftCards';go('login');});return;}
  if(!window.Razorpay){note('Payment is still loading — try again in a moment.','Please wait');return;}
  if(!sbOn){note('Payment service not configured. Please contact Tripomonk.','Payment error');return;}
  const btn=document.getElementById('gcBuyBtn');if(btn){btn.disabled=true;btn.textContent='Starting payment…';}
  const restore=()=>{if(btn)btn.disabled=false;renderGiftAmts();};
  const email=getUserEmail()||'',name=getSavedName()||'Trekker';
  const gc={kind:'giftcard',amount,card:card.file,card_name:card.name,card_perk:card.perk||'',name,email,phone:getSavedMobile()||''};
  const token=await authToken();
  let order;try{order=await rzpCall('create',{booking:gc,token});}catch(e){order=null;}
  if(!order||!order.order_id){restore();note((order&&order.error)?order.error:'Could not start payment — the gift-card service may not be enabled on the server yet.','Payment error');return;}
  const rzp=new window.Razorpay({
    key:order.key_id,order_id:order.order_id,amount:order.amount,currency:order.currency||'INR',
    name:'Tripomonk',description:'Gift card · '+card.name,image:'icons/icon-192.png',
    prefill:{name,email,contact:getSavedMobile()||''},notes:{giftcard:card.file},theme:{color:'#2f6bff'},
    handler:async function(response){
      let res;try{res=await rzpCall('verify',{razorpay_order_id:response.razorpay_order_id,razorpay_payment_id:response.razorpay_payment_id,razorpay_signature:response.razorpay_signature,booking:gc,token});}catch(e){res=null;}
      if(!res||!res.ok){note('Payment received — your gift code is being generated. If it doesn\'t appear, contact us with payment ID: '+(response.razorpay_payment_id||'—'),'Almost done');return;}
      const code=res.code||'';
      try{if(code&&navigator.clipboard)navigator.clipboard.writeText(code);}catch(e){}
      note('Your '+inr(amount)+' '+card.name+' gift card is ready 🎁  Code: '+code+' (copied).'+(card.perk?' Includes: '+card.perk+' — quote it when booking.':'')+' Redeem it in your Wallet, or share the code with a friend to gift it.','Gift card ready').then(()=>go('wallet'));
    },
    modal:{ondismiss:function(){restore();note('Payment cancelled — nothing was charged.','Cancelled');}}
  });
  rzp.open();restore();
}
/* ---- wallet ---- */
let _walletBal=0;
function renderWallet(){loadWallet();}
async function loadWallet(){
  const bEl=document.getElementById('wcBal'),tEl=document.getElementById('wcTxns');
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){if(bEl)bEl.textContent='₹0';if(tEl)tEl.innerHTML='<div class="empty" style="padding:22px 6px"><p>Sign in to see your wallet.</p></div>';return;}
  try{
    const{data}=await sb.from('wallet_transactions').select('amount,kind,note,created_at').eq('user_id',uid).order('created_at',{ascending:false});
    const rows=data||[];
    _walletBal=rows.reduce((s,r)=>s+(+r.amount||0),0);
    if(bEl)bEl.textContent=inr(_walletBal);
    if(tEl)tEl.innerHTML=rows.length?rows.map(r=>{const pos=(+r.amount||0)>=0;
      return '<div class="wtxn"><div class="wtxn-tx"><b>'+esc(r.note||r.kind||'Transaction')+'</b><small>'+new Date(r.created_at).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})+'</small></div><div class="wtxn-amt '+(pos?'pos':'neg')+'">'+(pos?'+':'−')+inr(Math.abs(+r.amount||0)).slice(1)+'</div></div>';
    }).join(''):'<div class="empty" style="padding:22px 6px"><p>No wallet activity yet. Buy or redeem a gift card to add funds.</p></div>';
  }catch(e){if(bEl)bEl.textContent='₹0';if(tEl)tEl.innerHTML='<div class="empty" style="padding:22px 6px"><p>Wallet isn’t set up on the server yet.</p></div>';}
}
async function redeemGiftCode(){
  const el=document.getElementById('wcCode');const code=(el?el.value:'').trim().toUpperCase();
  if(!code){note('Enter a gift card code.','Code required');return;}
  if(!isLoggedIn()){note('Please sign in to redeem.','Sign in required');return;}
  if(!sbOn){note('Redemption service not configured.','Error');return;}
  const btn=document.getElementById('wcRedeemBtn');if(btn){btn.disabled=true;btn.textContent='Redeeming…';}
  try{
    const token=await authToken();
    const res=await rzpCall('redeem_giftcard',{code,token});
    if(res&&res.ok){note(inr(res.amount||0)+' added to your wallet! 🎉','Redeemed').then(()=>{if(el)el.value='';loadWallet();});}
    else note((res&&res.error)||'That code is invalid or already used.','Could not redeem');
  }catch(e){note('Could not redeem right now — please try again.','Error');}
  if(btn){btn.disabled=false;btn.textContent='Redeem to wallet';}
}
/* share the traveller's public profile */
function shareProfile(){
  const un=getSavedUsername();
  const base=window.location.origin+window.location.pathname.replace(/index\.html$/,'');
  const url=base+(un?'#@'+un:'');
  const data={title:'Tripomonk — '+(getSavedName()||'Trekker'),text:'Follow my treks on Tripomonk 🏔️',url};
  if(navigator.share){navigator.share(data).catch(()=>{});return;}
  try{navigator.clipboard.writeText(url);toast('Profile link copied');}catch(e){note(url,'Your profile link');}
}
function renderProfile(){document.getElementById('pCover').style.backgroundImage=`url('${getSavedCover()||treks[0].img}')`;
  const ce=document.getElementById('coverEdit');if(ce)ce.classList.toggle('on',isLoggedIn());
  const uname=getSavedName()||'Explorer';const photo=getSavedPhoto();
  const pav=document.getElementById('profileAv');
  if(pav){pav.style.backgroundSize='cover';pav.style.backgroundPosition='center';setAvatarEl(pav,uname,photo);
    /* camera badge = the "tap to change your photo" affordance, for everyone */
    const hasCam=pav.querySelector('.pav-cam');
    if(isLoggedIn()){if(!hasCam)pav.insertAdjacentHTML('beforeend','<span class="pav-cam"><span class="msr">photo_camera</span></span>');}
    else if(hasCam)hasCam.remove();
    hydrate(pav);
  }
  const pname=document.getElementById('profileName');if(pname)pname.textContent=isLoggedIn()?uname:'Guest';
  /* the Hosting hub card adapts to host status once the application loads */
  if(isLoggedIn())loadHostApp().then(()=>{const h=document.getElementById('hostHub');if(h)h.innerHTML=hostHubCard();}).catch(()=>{});
  const psub=document.getElementById('profileSub');
  if(psub){
    const un=getSavedUsername();
    psub.textContent=isLoggedIn()?(un?'@'+un:(getUserEmail()||'Trekker')):'Sign in to track your treks';
  }
  const pbEl=document.getElementById('profileBio');
  if(pbEl){const cat=getSavedCategory(),bio=getSavedBio();
    pbEl.innerHTML=isLoggedIn()?((cat?`<span class="pcat"><span class="msr">hiking</span>${esc(cat)}</span>`:'')+(bio?`<div style="margin-top:6px">${esc(bio)}</div>`:'')):'';
    hydrate(pbEl);}
  /* dynamic, tappable stat tiles — social first (posts / followers / following), trek count kept */
  const bs=getBookings();
  const trekCount=new Set(bs.map(b=>b.trek)).size;
  const following=followCount();
  const ps=document.getElementById('pStats');
  if(ps){ps.innerHTML=[
    ['grid_view',(_myPostCount>=0?_myPostCount:'…'),'Posts',"go('profile')",'pStatPosts'],
    ['group',(_myFollowerCount>=0?_myFollowerCount.toLocaleString('en-IN'):'…'),'Followers',"openFollowList('followers')",'pStatFlwr'],
    ['person_add',(_myFollowingCount>=0?_myFollowingCount:following),'Following',"openFollowList('following')",'pStatFollowing'],
    ['landscape',trekCount,'Treks',"go('bookings')",'']
  ].map(s=>`<div class="pstat" onclick="${s[3]}"><b${s[4]?` id="${s[4]}"`:''}>${s[1]}</b><small>${s[2]}</small></div>`).join('');hydrate(ps);}
  if(isLoggedIn())loadMyCounts();
  renderProfileGallery();
  /* the profile is now social: only the hosting hub + social links + a guest sign-in
     prompt live here. All account/utility items moved to the hamburger (accountMenu). */
  const pb=document.getElementById('profileBio');
  if(pb){const bio=(_hostApp&&_hostApp.bio)||'';pb.textContent=bio;pb.style.display=bio?'':'none';}
  let rows=socialLinks(getSavedSocials())+fitnessProfileCard()
    +'<div id="hostHub">'+hostHubCard()+'</div>'
    +'<div id="staffHub">'+staffHubCard()+'</div>';   /* admin / trip-captain, staff only */
  if(isLoggedIn()&&!isPrefsDone())rows+=`<div class="pref-prompt" onclick="go('onboarding')"><span class="msr">interests</span><div><b>Complete your preferences</b><small>Help us connect you with like-minded trekkers</small></div><span class="msr" style="margin-left:auto">chevron_right</span></div>`;
  if(!isLoggedIn())rows+=`<div class="mrow" onclick="go('login')"><span class="ic">${ic('user',20)}</span><span class="t" style="color:var(--accent2)">Sign in / Create account</span><span class="ch">${ic('back',16)}</span></div>`;
  document.getElementById('menu').innerHTML=rows;
  const cover=document.getElementById('pCover');cover.querySelectorAll('.ch').forEach(c=>c.style.transform='rotate(180deg)');
  document.querySelectorAll('#menu .ch svg').forEach(s=>s.style.transform='scaleX(-1)');
  hydrate(document.getElementById('profile'));
  document.querySelectorAll('#menu .ch svg').forEach(s=>s.style.transform='scaleX(-1)');
}
/* my Posts + Followers counts for the profile header (Following is local state) */
async function loadMyCounts(){
  const sb=getSupaClient();const mine=myName();
  try{
    if(sb&&currentUser){
      /* how many people follow me — rows in follows where following_name = me */
      const{count:fc}=await sb.from('follows').select('*',{count:'exact',head:true}).eq('following_name',mine);
      if(typeof fc==='number')_myFollowerCount=fc;
      /* my posts — count by the stable user_id (rename-proof), table is community_posts */
      const{count:pc}=await sb.from('community_posts').select('*',{count:'exact',head:true}).eq('user_id',currentUser.id);
      if(typeof pc==='number')_myPostCount=pc;
      /* how many I follow — rows in follows where follower_id = me (real, not local state) */
      const{count:gc}=await sb.from('follows').select('*',{count:'exact',head:true}).eq('follower_id',currentUser.id);
      if(typeof gc==='number')_myFollowingCount=gc;
    }
  }catch(e){}
  if(_myPostCount<0)_myPostCount=userPosts.filter(p=>p.n===mine||p.n==='You').length;
  if(_myFollowerCount<0)_myFollowerCount=0;
  if(_myFollowingCount<0)_myFollowingCount=followCount();   /* fall back to local until the query lands */
  const pe=document.getElementById('pStatPosts');if(pe)pe.textContent=_myPostCount;
  const fe=document.getElementById('pStatFlwr');if(fe)fe.textContent=_myFollowerCount.toLocaleString('en-IN');
  const ge=document.getElementById('pStatFollowing');if(ge)ge.textContent=_myFollowingCount.toLocaleString('en-IN');
}


/* ---------- messages / chat UI ---------- */
let chatWith='Tripomonk Team';
let _myUid=null;            /* cached auth uid for messaging */
let _nameUidCache={};       /* display name -> user_id (best effort) */
let _inboxNames=[];         /* names with a real DB conversation (owner: excludes support chats) */
let _supportNames=[];       /* owner only: customer conversations that came via 'Tripomonk Team' */
let msgChannel=null;        /* realtime channel for inbound messages */
let _cidSeq=0;              /* client id for optimistic (un-acked) messages */
let _supportUid=null;       /* the account that receives 'Tripomonk Team' chats (owner), from app_config */
let _msgUnread=false;       /* unread-message dot on the Messages icon */
function setMsgUnread(on){_msgUnread=!!on;try{document.querySelectorAll('.msg-badge').forEach(b=>b.classList.toggle('show',_msgUnread));}catch(e){}}
function chatKey(n){return 'tmk_chat_'+String(n||'team').toLowerCase().replace(/[^a-z0-9]+/g,'_');}
/* Only the Tripomonk Team chat is pre-seeded — with a single welcome message.
   Every other conversation starts empty (no fake demo thread). */
function chatSeed(n){
  if(n==='Tripomonk Team'){
    /* welcome message is admin-editable in Admin → AI & Automation (aiCfg) */
    return [{who:'them',txt:(typeof aiCfg==='function'?aiCfg('welcome'):'Welcome to Tripomonk! 🏔️ Message us anytime for help with bookings, payments or picking your next trek.')}];
  }
  return [];
}
function getChat(n){try{const raw=localStorage.getItem(chatKey(n));return raw?JSON.parse(raw):chatSeed(n);}catch(e){return chatSeed(n);}}
function saveChat(n,rows){try{localStorage.setItem(chatKey(n),JSON.stringify(rows));}catch(e){}}
/* ---- delete (for me): per-thread "cleared before" timestamp + per-message hidden ids ---- */
function clearedChats(){try{return JSON.parse(localStorage.getItem('tmk_chat_cleared')||'{}');}catch(e){return{};}}
function clearedAt(n){return clearedChats()[n]||'';}
function setChatCleared(n){try{const c=clearedChats();c[n]=new Date().toISOString();localStorage.setItem('tmk_chat_cleared',JSON.stringify(c));}catch(e){}}
function hiddenMsgSet(){try{return new Set(JSON.parse(localStorage.getItem('tmk_hidden_msgs')||'[]').map(String));}catch(e){return new Set();}}
function hideMsg(id){if(id==null)return;try{const a=JSON.parse(localStorage.getItem('tmk_hidden_msgs')||'[]');const s=String(id);if(a.indexOf(s)<0){a.push(s);if(a.length>800)a.splice(0,a.length-800);localStorage.setItem('tmk_hidden_msgs',JSON.stringify(a));}}catch(e){}}
/* reusable bottom action sheet → resolves the chosen item key (or null) */
function actionSheet(title,items){return new Promise(res=>{
  const wrap=document.getElementById('actionSheet');if(!wrap){res(null);return;}
  const t=document.getElementById('sheetTitle'),o=document.getElementById('sheetOpts'),c=document.getElementById('sheetCancel');
  t.textContent=title||'';t.style.display=title?'block':'none';
  o.innerHTML=items.map((it,idx)=>`<button class="sheet-opt${it.danger?' danger':''}" data-i="${idx}">${esc(it.label)}</button>`).join('');
  wrap.classList.add('show');
  function done(v){wrap.classList.remove('show');o.onclick=c.onclick=wrap.onclick=null;res(v);}
  o.onclick=e=>{const b=e.target.closest('[data-i]');if(b)done(items[+b.dataset.i].key);};
  c.onclick=()=>done(null);wrap.onclick=e=>{if(e.target===wrap)done(null);};
});}

/* ---------- real cross-user messaging (Supabase `messages` table + realtime) ----
   The localStorage cache above stays as the instant + offline copy; the DB is the
   source of truth so two different phones see the same thread. 'Tripomonk Team' is
   a local support bot (no real user id) — it stays on-device.  Needs SQL-add-messages.sql
   run + `messages` added to the supabase_realtime publication to work cross-device. */
function msgTime(iso){try{return new Date(iso).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});}catch(e){return nowT();}}
function msgToRow(m,me){return {id:m.id,who:(m.sender_id===me?'me':'them'),txt:m.body||'',type:m.type||'text',status:m.status||'',t:msgTime(m.created_at),ts:m.created_at,read:!!m.read_at};}
/* mark every unread message THEY sent ME in this thread as read (powers their "Seen") */
async function markThreadRead(name){
  if(!name||name==='Tripomonk Team')return;
  const sb=getSupaClient();const me=await myUid();if(!sb||!me)return;
  const other=await nameToUid(name);if(!other)return;
  try{await sb.from('messages').update({read_at:new Date().toISOString()}).eq('recipient_id',me).eq('sender_id',other).is('read_at',null);}catch(e){}
}
async function myUid(){if(_myUid)return _myUid;_myUid=await authUid();return _myUid;}
async function nameToUid(name){
  if(!name)return null;
  if(name==='Tripomonk Team')return teamIsLive()?_supportUid:null;   /* Team routes to the support account */
  if(name==='You'||name===myName())return await myUid();
  if(_nameUidCache[name])return _nameUidCache[name];   /* cache successes only — a failed lookup must retry, or the message never delivers */
  const uid=await uidForName(name);if(uid)_nameUidCache[name]=uid;return uid;
}
/* 'Tripomonk Team' is a real conversation with the support account when one is configured
   AND I'm a customer (not the support account itself). Otherwise it's the local welcome bot. */
function teamIsLive(){return !!_supportUid&&_myUid!==_supportUid;}
/* always-fresh read of the support account id (loadAiCfg is memoised, so it can't pick up a
   support inbox configured LATER in the same session — this can) */
async function loadSupportUid(){
  const sb=getSupaClient();if(!sb)return _supportUid;
  try{const{data}=await sb.from('app_config').select('value').eq('key','support_uid').maybeSingle();if(data&&data.value)_supportUid=data.value;}catch(e){}
  return _supportUid;
}
/* the owner account registers itself as the support inbox so every user's Team chat reaches it */
async function registerSupportInbox(){
  if(!isAdminUser())return;
  const sb=getSupaClient();const uid=await authUid();if(!sb||!uid)return;
  if(_supportUid===uid)return;
  try{await sb.from('app_config').upsert({key:'support_uid',value:uid},{onConflict:'key'});_supportUid=uid;}catch(e){}
}
/* pull one conversation from the DB and refresh the local cache (keeps queued-offline rows) */
async function loadThread(name){
  const sb=getSupaClient();const me=await myUid();
  if(!sb||!me)return getChat(name);
  const other=await nameToUid(name);
  if(!other)return getChat(name);   /* Team with no support configured (or I AM support) → local welcome */
  try{
    const{data,error}=await sb.from('messages').select('*')
      .or(`and(sender_id.eq.${me},recipient_id.eq.${other}),and(sender_id.eq.${other},recipient_id.eq.${me})`)
      .order('created_at',{ascending:true}).limit(300);
    if(error)throw error;
    const cl=clearedAt(name),hid=hiddenMsgSet();   /* hide deleted-for-me content */
    const server=(data||[]).filter(m=>(!cl||(m.created_at||'')>cl)&&!hid.has(String(m.id))).map(m=>msgToRow(m,me));
    const pending=getChat(name).filter(r=>r._pending);   /* not-yet-delivered local rows */
    let rows=server.concat(pending);
    if(name==='Tripomonk Team')rows=chatSeed('Tripomonk Team').concat(rows);   /* keep the welcome on top */
    syncCallState(name,rows);   /* reveal an allowed call after a refresh */
    saveChat(name,rows);
    if(!isBlocked(name))await markThreadRead(name);   /* opening the thread = I read their messages */
    return rows;
  }catch(e){return getChat(name);}
}
/* pull every conversation once so the Messages list shows real previews */
async function loadInbox(){
  const sb=getSupaClient();const me=await myUid();
  if(!sb||!me)return;
  try{
    const{data}=await sb.from('messages').select('*')
      .or(`sender_id.eq.${me},recipient_id.eq.${me}`)
      .order('created_at',{ascending:true}).limit(400);
    if(!data)return;
    const byName={},supportSet={},cleared=clearedChats(),hid=hiddenMsgSet();
    data.forEach(m=>{
      if(hid.has(String(m.id)))return;   /* deleted-for-me message */
      const outbound=m.sender_id===me;
      const other=outbound?m.recipient_id:m.sender_id;
      let name=outbound?(m.recipient_name||''):(m.sender_name||'');
      /* a customer files every message to/from the support account under 'Tripomonk Team',
         whatever staff name is on it — so support stays one stable thread */
      if(_supportUid&&me!==_supportUid&&other===_supportUid)name='Tripomonk Team';
      if(!name)return;
      if(cleared[name]&&(m.created_at||'')<=cleared[name])return;   /* deleted-chat cutoff */
      if(isBlocked(name))return;   /* blocked person — keep them out of the inbox entirely */
      /* owner side: a thread that carries a customer→'Tripomonk Team' message is a SUPPORT chat,
         kept out of the owner's personal inbox and shown in Admin → Support instead */
      if(me===_supportUid&&m.recipient_name==='Tripomonk Team')supportSet[name]=1;
      if(other)_nameUidCache[name]=other;
      (byName[name]=byName[name]||[]).push(msgToRow(m,me));
    });
    Object.keys(byName).forEach(nm=>{
      const pending=getChat(nm).filter(r=>r._pending);
      saveChat(nm,byName[nm].concat(pending));
    });
    const names=Object.keys(byName);
    if(me===_supportUid){
      _supportNames=names.filter(n=>supportSet[n]);
      _inboxNames=names.filter(n=>!supportSet[n]);
    }else{_inboxNames=names;_supportNames=[];}
    /* unread dot: any message addressed to me that I haven't opened yet */
    let unread=false;data.forEach(m=>{if(m.recipient_id===me&&m.sender_id!==me&&!m.read_at)unread=true;});
    setMsgUnread(unread);
  }catch(e){}
}
/* realtime: messages addressed to me. I only ever receive INBOUND here, so my own
   sends never echo back (I add those optimistically in sendChat). */
async function ensureMsgSub(){
  const sb=getSupaClient();if(!sb||!sb.channel||msgChannel)return;
  const me=await myUid();if(!me)return;
  try{
    msgChannel=sb.channel('msg-'+me)
      .on('postgres_changes',{event:'INSERT',schema:'public',table:'messages',filter:'recipient_id=eq.'+me},payload=>onIncomingMsg(payload.new))
      /* when someone READS a message I sent, its read_at flips → show "Seen" live */
      .on('postgres_changes',{event:'UPDATE',schema:'public',table:'messages',filter:'sender_id=eq.'+me},payload=>onMsgUpdated(payload.new))
      .subscribe();
    refreshMsgBadge();   /* show the unread dot on app open */
  }catch(e){}
  startMsgPoll();   /* fallback delivery even if realtime is down/blocked */
}
function stopMsgSub(){if(!msgChannel)return;try{getSupaClient().removeChannel(msgChannel);}catch(e){}msgChannel=null;setMsgUnread(false);stopMsgPoll();}
/* Realtime can be off/blocked on some networks — poll as a safety net so messages still
   arrive. Cheap: only refreshes what's on screen; badge count otherwise. */
let _msgPollTimer=null;
function startMsgPoll(){
  if(_msgPollTimer)return;
  _msgPollTimer=setInterval(async()=>{
    try{
      if(!currentUser||document.hidden)return;
      if(cur==='chat'&&chatWith){
        const before=getChat(chatWith).length;
        await loadThread(chatWith);
        if(cur==='chat'&&getChat(chatWith).length!==before)renderChat();
      }else if(cur==='messages'){
        await loadInbox();if(cur==='messages')paintMessages();
      }else{refreshMsgBadge();}
    }catch(e){}
  },6000);
}
function stopMsgPoll(){if(_msgPollTimer){clearInterval(_msgPollTimer);_msgPollTimer=null;}}
/* accurate unread dot — count messages addressed to me that I haven't read */
async function refreshMsgBadge(){
  const sb=getSupaClient();const me=await myUid();if(!sb||!me){setMsgUnread(false);return;}
  try{const{count}=await sb.from('messages').select('*',{count:'exact',head:true}).eq('recipient_id',me).is('read_at',null);setMsgUnread((count||0)>0);}catch(e){}
}
/* a message I sent was updated (typically read_at set) — reflect "Seen" without a reopen */
function onMsgUpdated(m){
  if(!m||!m.read_at)return;
  let name=m.recipient_name||'';
  if(_supportUid&&_myUid!==_supportUid&&m.recipient_id===_supportUid)name='Tripomonk Team';
  if(!name)return;
  const rows=getChat(name);let changed=false;
  rows.forEach(r=>{if(r.id&&String(r.id)===String(m.id)&&!r.read){r.read=true;changed=true;}});
  if(changed){saveChat(name,rows);if(cur==='chat'&&chatWith===name)renderChat();else if(cur==='messages')renderMessages();}
}
function onIncomingMsg(m){
  if(!m)return;
  let name=m.sender_name||'';if(!name)return;
  /* a reply from the support account always lands in the customer's 'Tripomonk Team' thread */
  if(_supportUid&&_myUid!==_supportUid&&m.sender_id===_supportUid)name='Tripomonk Team';
  if(isBlocked(name))return;   /* blocked user — silently drop */
  if(m.sender_id)_nameUidCache[name]=m.sender_id;
  const rows=getChat(name);
  if(m.id&&rows.some(x=>String(x.id)===String(m.id)))return;   /* dedupe */
  if(m.type==='callok'){                       /* they allowed my call — I can dial now */
    const s=callAllowedSet();s[name]={num:m.body||'',t:Date.now()};
    try{localStorage.setItem('tmk_callok',JSON.stringify(s));}catch(e){}
    rows.forEach(r=>{if(r.type==='callreq'&&r.who==='me'&&r.status==='pending')r.status='allowed';});
    rows.push({id:m.id,who:'them',type:'sys',txt:properName(name)+' allowed your call — tap the call button to dial.',t:msgTime(m.created_at),ts:m.created_at});
  }else{
    rows.push(msgToRow(m,_myUid));
  }
  saveChat(name,rows);
  if(_inboxNames.indexOf(name)<0)_inboxNames.push(name);
  if(cur==='chat'&&chatWith===name){renderChat();markThreadRead(name);sfx('notif');}  /* I'm looking at it → mark read */
  else{if(m.type!=='callok')setMsgUnread(true);if(cur==='messages')renderMessages();sfx('notif');}
}
/* deliver an outbound message to the DB. `cid` (optional) reconciles the optimistic
   local row on success/failure. Returns true if it reached the server. */
async function deliverMessage(name,payload,cid){
  const finish=(realId,ok)=>{
    if(!cid)return;
    const rows=getChat(name);const r=rows.find(x=>x.cid===cid);
    if(!r)return;
    if(ok){delete r._pending;if(realId)r.id=realId;}else{r._pending=true;}
    saveChat(name,rows);
  };
  const sb=getSupaClient();const me=await myUid();
  if(!sb||!me){finish(null,false);return false;}
  const other=await nameToUid(name);
  if(!other){finish(null,false);return false;}   /* unknown / unresolvable recipient — stays local */
  try{
    const row={sender_id:me,sender_name:myName(),recipient_id:other,recipient_name:name,body:payload.body||'',type:payload.type||'text'};
    if(payload.status)row.status=payload.status;
    const{data,error}=await sb.from('messages').insert(row).select('id').single();
    if(error)throw error;
    finish(data&&data.id,true);
    /* notify the recipient (in-app bell) for real messages, not internal call/sys rows */
    if((payload.type||'text')==='text'){try{pushNotif({recipientId:other,recipientName:name,type:'message',preview:(payload.body||'').slice(0,80)});}catch(e){}}
    return true;
  }catch(e){finish(null,false);return false;}
}
/* re-send any messages that were queued while offline / before the table/login existed */
async function flushPending(name){
  const sb=getSupaClient();const me=await myUid();
  if(!sb||!me||!name||name==='Tripomonk Team')return;
  const pend=getChat(name).filter(r=>r._pending&&r.cid);
  for(const r of pend){await deliverMessage(name,{body:r.txt||'',type:r.type||'text',status:r.status},r.cid);}
}
function chatContacts(){
  const list=[{n:'Tripomonk Team',h:'Official support',bio:'Bookings, payments and trek help',flwr:0}];
  const seen={'Tripomonk Team':1};
  _inboxNames.forEach(nm=>{if(nm&&!seen[nm]&&!isBlocked(nm)){seen[nm]=1;list.push({n:nm});}});   /* real conversations */
  (peoplePool||[]).slice(0,8).forEach(p=>{if(p&&p.n&&!seen[p.n]&&!isBlocked(p.n)){seen[p.n]=1;list.push(p);}});  /* suggested new chats */
  return list;
}
function chatPreview(msgs){const last=msgs[msgs.length-1];if(!last)return 'Start a conversation';
  if(last.type==='callreq')return '📞 '+(last.who==='me'?'You requested a call':'Wants to call you');
  if(last.type==='sys')return last.txt;
  return (last.who==='me'?'You: ':'')+(last.txt||'');}
function chatWhen(msgs){const last=msgs&&msgs[msgs.length-1];if(!last)return '';if(last.ts)return timeAgo(last.ts);return last.t||'';}
function renderMessages(){
  ensureMsgSub();
  paintMessages();                                   /* instant, from cache */
  loadInbox().then(()=>{if(cur==='messages')paintMessages();
    /* fetch real profile photos for the contacts so their DP shows (not just initials) */
    loadAuthorPhotos(chatContacts().map(c=>c.n)).then(()=>{if(cur==='messages')paintMessages();});
  });
}
function paintMessages(){
  const recent=document.getElementById('recentChats'),list=document.getElementById('messageList');if(!recent||!list)return;
  const rows=chatContacts();
  recent.innerHTML=rows.slice(0,8).map(p=>`<div class="recent-chat" onclick="openChat('${jsq(p.n)}')"><div class="ring">${avatar(p.n,52)}</div><small>${esc(properName(p.n).split(' ')[0])}</small></div>`).join('');
  list.innerHTML=rows.map(p=>{const msgs=getChat(p.n);return `<div class="chat-row" onclick="openChat('${jsq(p.n)}')">${avatar(p.n,50)}<div class="meta"><b>${esc(properName(p.n))}${p.n==='Tripomonk Team'?'<span class="ch-verif msr">verified</span>':''}</b><p>${esc(chatPreview(msgs))}</p></div><time>${esc(chatWhen(msgs))}</time></div>`;}).join('');
  hydrate(document.getElementById('messages'));
}
function openChat(n){chatWith=n||'Tripomonk Team';ensureMsgSub();go('chat');refreshOpenThread();}
async function refreshOpenThread(){const name=chatWith;if(name==='Tripomonk Team'&&!_supportUid)await loadSupportUid();/* pick up support_uid */await flushPending(name);await loadThread(name);if(cur==='chat'&&chatWith===name)renderChat();refreshMsgBadge();
  loadAuthorPhotos([name]).then(()=>{if(cur==='chat'&&chatWith===name)renderChat();});   /* show the person's real DP in the header */}
/* a call-request card in the thread — the requester sees "waiting", the recipient gets Allow/Decline */
function callReqBubble(m,i){
  if(m.who==='me'){   /* MY request, shown on the requester's side */
    if(m.status==='allowed')
      return `<div class="chat-sys">📞 ${esc(properName(chatWith))} allowed your call. <a onclick="requestCall('${jsq(chatWith)}')" style="color:var(--accent2);font-weight:700;cursor:pointer">Call now →</a></div>`;
    if(m.status==='declined')
      return `<div class="chat-sys">📞 ${esc(properName(chatWith))} declined the call request.</div>`;
    return `<div class="chat-sys">📞 Call request sent — waiting for ${esc(properName(chatWith))} to allow. Their number stays private until they do.</div>`;
  }
  /* a request someone sent ME — once I've answered it, the card is gone (a sys line is shown instead) */
  if(m.status==='allowed'||m.status==='declined')return '';
  return `<div class="callreq-card"><div class="cr-top"><span class="msr">call</span><div><b>${esc(properName(chatWith))} wants to call you</b><small>Allow to share your number for this call.</small></div></div>`
    +`<div class="cr-btns"><button class="cr-no" onclick="declineCall('${jsq(chatWith)}',${i})">Not now</button><button class="cr-yes" onclick="allowCallMsg('${jsq(chatWith)}',${i})">Allow call</button></div></div>`;
}
/* persist the answer on the shared message rows so the card can't reappear after a refresh */
async function markCallreqStatus(ids,status){
  const sb=getSupaClient();if(!sb||!ids||!ids.length)return;
  try{await sb.from('messages').update({status}).in('id',ids);}catch(e){}
}
/* mark EVERY still-open incoming call request from this person (collapses duplicates too) */
function resolveIncomingCallreqs(rows,status){
  const ids=[];
  rows.forEach(r=>{if(r.type==='callreq'&&r.who==='them'&&r.status!=='allowed'&&r.status!=='declined'){r.status=status;if(r.id)ids.push(r.id);}});
  return ids;
}
function declineCall(n,i){
  const rows=getChat(n);const ids=resolveIncomingCallreqs(rows,'declined');
  rows.push({who:'me',type:'sys',txt:'You declined the call request. Your number was not shared.'});
  saveChat(n,rows);renderChat();
  markCallreqStatus(ids,'declined');
  deliverMessage(n,{type:'sys',body:'Your call request was declined — the number was not shared.'});
}
async function allowCallMsg(n,i){
  /* we can only share a number if we HAVE one — ask for it if the profile has none,
     otherwise the requester gets "allowed" but nothing to dial (the reported bug) */
  let num=getSavedMobile()||'';
  if(!num){
    const v=await askCode('Share your number',{sub:'Enter the mobile '+properName(n)+' can call you on. Shared only with them.',placeholder:'10-digit mobile'});
    if(v===null)return;
    num=String(v).replace(/[^\d+]/g,'');
    if(num.replace(/\D/g,'').length<10){note('Please enter a valid mobile number.','Invalid number');return;}
    try{localStorage.setItem('tmk_umobile',num);}catch(e){}
  }
  const rows=getChat(n);const ids=resolveIncomingCallreqs(rows,'allowed');
  /* IMPORTANT: allowing someone to call ME does NOT give me a number to call THEM back.
     Do not write callAllowedSet here — that made my own call button dial my own number.
     Only the requester stores a number (their copy of MY number, via the callok below). */
  rows.push({who:'me',type:'sys',txt:'You allowed the call — '+properName(n)+' can now call you.'});
  saveChat(n,rows);renderChat();
  markCallreqStatus(ids,'allowed');
  deliverMessage(n,{type:'callok',body:num});   /* sends my number ONLY to this person, only because I allowed it */
}
/* Absorb an incoming "call allowed" so the REQUESTER shows "Call now" + can dial even
   after a plain refresh. Realtime only carries INSERTs (the callok row); a reopened
   thread reads it back here via loadThread. Returns true if it changed anything. */
function syncCallState(name,rows){
  let num=null,allowed=false;
  rows.forEach(m=>{if(m.type==='callok'&&m.who==='them'){allowed=true;const v=m.body||m.txt;if(v)num=v;}});
  if(!allowed)return false;
  const s=callAllowedSet();const have=s[name]&&s[name].num;
  if(!s[name]||(num&&have!==num)){s[name]={num:num||have||'',t:Date.now()};try{localStorage.setItem('tmk_callok',JSON.stringify(s));}catch(e){}}
  let changed=false;
  rows.forEach(r=>{if(r.type==='callreq'&&r.who==='me'&&r.status!=='allowed'&&r.status!=='declined'){r.status='allowed';changed=true;}});
  return changed;
}
/* ---- block / unblock (safety) — on-device blocklist. Blocked people can't reach your
   chat, their inbound messages are dropped, and their posts/profile are hidden. ---- */
function blockedSet(){try{return JSON.parse(localStorage.getItem('tmk_blocked')||'[]');}catch(e){return[];}}
function isBlocked(n){return !!n&&blockedSet().indexOf(String(n).toLowerCase())>=0;}
function setBlockedSet(l){try{localStorage.setItem('tmk_blocked',JSON.stringify(l));}catch(e){}}
async function blockUser(n){
  if(!n||n==='Tripomonk Team'||n===myName()||n==='You')return;
  if(!(await askConfirm('Block '+properName(n)+'? They won’t be able to message or call you, and you won’t see their chat or posts.','Block '+properName(n)+'?')))return;
  const l=blockedSet(),k=String(n).toLowerCase();if(l.indexOf(k)<0)l.push(k);setBlockedSet(l);
  toast(properName(n)+' blocked');
  if(cur==='chat')go('messages');else if(cur==='person')renderPerson();
  if(typeof renderFeedIfOpen==='function')renderFeedIfOpen();
}
async function unblockUser(n){
  if(!n)return;
  setBlockedSet(blockedSet().filter(x=>x!==String(n).toLowerCase()));
  toast(properName(n)+' unblocked');
  if(cur==='chat')renderChat();else if(cur==='person')renderPerson();
}
function toggleBlock(n){return isBlocked(n)?unblockUser(n):blockUser(n);}
/* chat header ⋮ menu */
async function chatMenu(){
  const n=chatWith;if(!n)return;
  const items=[{label:'Delete chat',key:'delete',danger:true}];
  if(n!=='Tripomonk Team')items.push({label:isBlocked(n)?'Unblock '+properName(n).split(' ')[0]:'Block '+properName(n).split(' ')[0],key:'block',danger:!isBlocked(n)});
  const pick=await actionSheet(properName(n),items);
  if(pick==='delete')deleteChat(n);
  else if(pick==='block')toggleBlock(n);
}
/* delete a whole conversation FOR ME (their copy stays theirs) */
async function deleteChat(n){
  if(!(await askConfirm('Delete this chat? It will be removed from your device.','Delete chat')))return;
  /* clear locally first for instant feedback, then remove my server copies in the background */
  setChatCleared(n);                       /* hide everything up to now on this device */
  try{localStorage.removeItem(chatKey(n));}catch(e){}
  _inboxNames=(_inboxNames||[]).filter(x=>x!==n);_supportNames=(_supportNames||[]).filter(x=>x!==n);
  toast('Chat deleted');
  if(cur==='chat')go('messages'); else renderMessages();
  const sb=getSupaClient();const me=await myUid();const other=await nameToUid(n);
  if(sb&&me&&other){try{await sb.from('messages').delete().eq('sender_id',me).eq('recipient_id',other);}catch(e){}}   /* remove my own sent copies */
}
/* delete one message */
async function deleteMessage(i){
  const rows=getChat(chatWith);const m=rows[i];if(!m||m.type==='sys'||m.type==='callok')return;
  const mine=m.who==='me';
  if(!(await askConfirm(mine&&m.id?'Delete this message for everyone?':'Delete this message?','Delete message')))return;
  if(m.id)hideMsg(m.id);                    /* persist the local removal across refetches */
  rows.splice(i,1);saveChat(chatWith,rows);renderChat();   /* instant */
  if(mine&&m.id){const sb=getSupaClient();if(sb)try{await sb.from('messages').delete().eq('id',m.id);}catch(e){}}   /* delete for everyone, in background */
}
async function msgActions(i){
  const rows=getChat(chatWith);const m=rows[i];if(!m||m.type==='sys'||m.type==='callok')return;
  const pick=await actionSheet('Message',[{label:'Delete message',key:'del',danger:true}]);
  if(pick==='del')deleteMessage(i);
}
/* long-press a bubble → message actions */
let _lpTimer=null;
function bindThreadLongPress(thread){
  if(!thread)return;
  const start=e=>{const b=e.target.closest('.bubble');if(!b)return;const i=+b.dataset.mi;if(isNaN(i))return;
    clearTimeout(_lpTimer);_lpTimer=setTimeout(()=>{try{navigator.vibrate&&navigator.vibrate(12);}catch(e){}msgActions(i);},500);};
  const cancel=()=>{clearTimeout(_lpTimer);_lpTimer=null;};
  thread.onpointerdown=start;thread.onpointerup=cancel;thread.onpointermove=cancel;thread.onpointercancel=cancel;thread.onpointerleave=cancel;
  thread.oncontextmenu=e=>{const b=e.target.closest('.bubble');if(b){e.preventDefault();const i=+b.dataset.mi;if(!isNaN(i))msgActions(i);}};
}
function renderChat(){
  const head=document.getElementById('chatPerson'),thread=document.getElementById('chatThread');if(!head||!thread)return;
  const team=chatWith==='Tripomonk Team';
  const priv=isPrivatePerson(chatWith)&&!isFollowing(chatWith);
  head.innerHTML=`<div class="ch-ava">${avatar(chatWith,42)}</div><div class="ch-id"><b>${esc(properName(chatWith))}${team?'<span class="ch-verif msr">verified</span>':''}</b><small>${team?'Official support · replies fast':(priv?'Private account':'Usually replies soon')}</small></div>`;
  const rows=getChat(chatWith);
  syncCallState(chatWith,rows);   /* reflect any "call allowed" that arrived */
  const compose=document.querySelector('#chat .chat-compose');
  const menuBtn=document.getElementById('chatMenuBtn');
  if(menuBtn)menuBtn.style.display=(team)?'none':'';
  if(isBlocked(chatWith)){
    thread.innerHTML=`<div class="chat-empty"><span class="msr" style="font-size:46px;color:var(--muted2)">block</span><b>You blocked ${esc(properName(chatWith))}</b><p>They can’t message or call you. Unblock to chat again.</p><button class="btn" style="max-width:220px;margin:6px auto 0" onclick="unblockUser('${jsq(chatWith)}')">Unblock</button></div>`;
    if(compose)compose.style.display='none';
    return;
  }
  if(priv&&!canSeePerson(chatWith)){
    thread.innerHTML=`<div class="chat-empty"><span class="msr" style="font-size:46px;color:var(--muted2)">lock</span><b>${esc(properName(chatWith))}'s account is private</b><p>Send a follow request. Once they accept, you can message and call.</p><button class="btn" style="max-width:220px;margin:6px auto 0" onclick="followAction('${jsq(chatWith)}')">${hasRequested(chatWith)?'Requested':'Send follow request'}</button></div>`;
    if(compose)compose.style.display='none';
    return;
  }
  if(compose)compose.style.display='';
  if(!rows.length){
    thread.innerHTML=`<div class="chat-empty"><div class="ce-ava">${avatar(chatWith,66)}</div><b>${esc(properName(chatWith))}</b><p>${team?'Ask us anything about bookings, payments or picking your next trek.':'Say hi 👋 — this is the start of your conversation.'}</p></div>`;
  }else{
    /* WhatsApp-style: show a delivery/read receipt only under the LAST message I sent */
    let lastMeIdx=-1;rows.forEach((m,i)=>{if(m.who==='me'&&(m.type==='text'||!m.type))lastMeIdx=i;});
    thread.innerHTML=rows.map((m,i)=>{
      if(m.type==='callok')return '';   /* the number is absorbed by syncCallState, never shown raw */
      if(m.type==='callreq')return callReqBubble(m,i);
      if(m.type==='sys')return `<div class="chat-sys">${esc(m.txt)}</div>`;
      const bubble=`<div class="bubble ${m.who==='me'?'me':'them'}${m._pending?' sending':''}" data-mi="${i}">${esc(m.txt)}${m.t?`<time>${esc(m.t)}${m._pending?' · sending…':''}</time>`:''}</div>`;
      const receipt=(i===lastMeIdx&&!team)?`<div class="msg-receipt">${m._pending?'Sending…':(m.read?'✓✓ Seen':'✓ Delivered')}</div>`:'';
      return bubble+receipt;
    }).join('');
  }
  bindThreadLongPress(thread);   /* long-press a message to delete it */
  setTimeout(()=>{thread.scrollTop=thread.scrollHeight;},30);
}
async function sendChat(){
  const input=document.getElementById('chatInput');if(!input)return;
  const txt=(input.value||'').trim();if(!txt)return;
  if(isBlocked(chatWith)){note('You blocked '+properName(chatWith)+'. Unblock to message them.','Blocked');return;}
  if(isPrivatePerson(chatWith)&&!canSeePerson(chatWith)){note('Send a follow request first — this account is private.','Private account');return;}
  logEvent('message',{to:chatWith});
  await myUid();
  /* local-only when it's the Team welcome bot AND no support inbox is configured yet */
  const localOnly=(chatWith==='Tripomonk Team'&&!teamIsLive());
  const cid='c'+(++_cidSeq);
  const rows=getChat(chatWith);rows.push({cid,who:'me',txt,t:nowT(),type:'text',_pending:!localOnly});saveChat(chatWith,rows);
  input.value='';renderChat();
  if(!localOnly){await deliverMessage(chatWith,{body:txt,type:'text'},cid);renderChat();}
}

/* ---- theme (dark / light / system) ---- */
let _themeMq=null;
function getTheme(){try{return localStorage.getItem('tmk_theme')||'system';}catch(e){return'system';}}
function applyTheme(mode){
  mode=mode||getTheme();
  const sysLight=window.matchMedia&&window.matchMedia('(prefers-color-scheme:light)').matches;
  const light=(mode==='light')||(mode==='system'&&sysLight);
  document.documentElement.classList.toggle('light',light);
  /* keep following the system if set to system */
  if(window.matchMedia){
    if(!_themeMq){_themeMq=window.matchMedia('(prefers-color-scheme:light)');_themeMq.addEventListener('change',()=>{if(getTheme()==='system')applyTheme('system');});}
  }
}
function setTheme(mode){try{localStorage.setItem('tmk_theme',mode);}catch(e){}applyTheme(mode);if(cur==='settings')renderSettings();}
/* ---------- Account & security ---------- */
function renderAccount(){
  const box=document.getElementById('accountBody');if(!box)return;
  if(!isLoggedIn()){
    box.innerHTML=`<div class="empty" style="padding:26px 0;text-align:center"><p>Sign in to manage your account.</p><div style="display:flex;justify-content:center;margin-top:14px"><button class="btn sm" style="min-width:150px" onclick="_loginReturn='account';go('login')">Sign in</button></div></div>`;
    hydrate(box);return;
  }
  const row=(l,v)=>`<div class="br"><span>${l}</span><b style="max-width:60%;text-align:right;word-break:break-word">${esc(v)}</b></div>`;
  const un=getSavedUsername();
  box.innerHTML=`<div class="bill">
      ${row('Name',getSavedName()||'Not set')}
      ${row('Username',un?'@'+un:'Not set')}
      ${row('Email',getUserEmail()||'Not set')}
      ${row('Mobile',getSavedMobile()||'Not set')}
    </div>
    <div class="mrow" onclick="go('editProfile')"><span class="ic">${ic('user',20)}</span><span class="t">Edit profile</span><span class="ch">${ic('back',16)}</span></div>
    <div class="mrow" onclick="sendPasswordReset()"><span class="ic"><span class="msr" style="font-size:20px">lock_reset</span></span><span class="t">Change password<small style="display:block;color:var(--muted2);font-size:10.5px">We email you a secure reset link</small></span><span class="ch">${ic('back',16)}</span></div>
    <div class="mrow" onclick="signOut()"><span class="ic">${ic('logout',20)}</span><span class="t" style="color:#ff7a7a">Sign out</span></div>
    <div class="mrow" onclick="requestAccountDeletion()"><span class="ic"><span class="msr" style="font-size:20px;color:#ff5a6e">delete_forever</span></span><span class="t" style="color:#ff5a6e">Delete my account</span><span class="ch">${ic('back',16)}</span></div>
    <p class="host-note">Tripomonk never stores your card details — payments are handled by Razorpay. Your email is never shown publicly.</p>`;
  hydrate(box);
}
async function sendPasswordReset(){
  const email=getUserEmail();
  if(!email){note('There is no email on this account, so we cannot send a reset link.','Not available');return;}
  const sb=getSupaClient();if(!sb){note('Cannot reach the server right now.','Try again');return;}
  if(!(await askConfirm('Send a password reset link to '+email+'?','Change password')))return;
  try{
    const{error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+window.location.pathname});
    if(error)throw error;
    note('Reset link sent to '+email+'. Check your inbox (and spam).','Email sent ✓');
  }catch(e){note('Could not send the reset link: '+(e.message||e),'Error');}
}
async function requestAccountDeletion(){
  if(!(await askConfirm('This sends a deletion request to our team. Your profile, posts and bookings will be removed. Continue?','Delete account')))return;
  wa('Please delete my Tripomonk account ('+(getUserEmail()||getSavedName()||'')+'). I understand my profile, posts and bookings will be removed.');
}
/* ---------- Notification preferences ---------- */
const NOTIF_PREFS=[['like','Likes','favorite'],['comment','Comments','chat_bubble'],['follow','New followers','person_add'],['mention','Mentions','alternate_email'],['news','Trek news & alerts','newspaper']];
function getNotifPrefs(){
  const d={like:true,comment:true,follow:true,mention:true,news:true};
  try{const p=JSON.parse(localStorage.getItem('tmk_notifprefs')||'null');return p?Object.assign(d,p):d;}catch(e){return d;}
}
function setNotifPref(k,v){
  const p=getNotifPrefs();p[k]=!!v;
  try{localStorage.setItem('tmk_notifprefs',JSON.stringify(p));}catch(e){}
  renderNotifPrefs();refreshNotifBadge();
}
function renderNotifPrefs(){
  const box=document.getElementById('notifPrefsBody');if(!box)return;
  const p=getNotifPrefs();
  box.innerHTML='<p class="host-note" style="margin:0 0 14px">Choose what appears in your notifications. Turning one off hides it from the bell too.</p>'
    +NOTIF_PREFS.map(n=>`<div class="mrow" onclick="setNotifPref('${n[0]}',${!p[n[0]]})"><span class="ic"><span class="msr" style="font-size:20px">${n[2]}</span></span><span class="t">${n[1]}</span><span class="tgl ${p[n[0]]?'on':''}"><i></i></span></div>`).join('');
  hydrate(box);
}
/* ---------- Language ---------- */
const LANGS=[['en','English',''],['hi','हिन्दी · Hindi','Coming soon'],['gbk','गढ़वळी · Garhwali','Coming soon']];
function getLang(){try{return localStorage.getItem('tmk_lang')||'en';}catch(e){return 'en';}}
function setLang(code){
  const l=LANGS.find(x=>x[0]===code);if(!l)return;
  if(l[2]){note(l[1].split('·').pop().trim()+' is not ready yet — we are working on it. The app stays in English for now.','Coming soon');return;}
  try{localStorage.setItem('tmk_lang',code);}catch(e){}
  renderLanguage();toast('Language set to '+l[1]);
}
function renderLanguage(){
  const box=document.getElementById('languageBody');if(!box)return;
  const cur=getLang();
  box.innerHTML='<p class="host-note" style="margin:0 0 14px">Tripomonk is available in English today. We are adding more languages — turn one on here once it is ready.</p>'
    +LANGS.map(l=>`<div class="mrow" onclick="setLang('${l[0]}')"><span class="ic">${ic('globe',20)}</span><span class="t">${esc(l[1])}${l[2]?'<small style="display:block;color:var(--muted2);font-size:10.5px">'+l[2]+'</small>':''}</span>${cur===l[0]&&!l[2]?'<span class="msr" style="color:var(--accent2);font-size:20px">check_circle</span>':''}</div>`).join('');
  hydrate(box);
}
/* ---------- Payment methods ---------- */
function renderPayments(){
  const box=document.getElementById('paymentsBody');if(!box)return;
  const methods=[['UPI','GPay, PhonePe, Paytm — any UPI app','account_balance_wallet'],
    ['Cards','Credit & debit — Visa, Mastercard, RuPay','credit_card'],
    ['Net banking','All major Indian banks','account_balance'],
    ['Wallets','Paytm, Amazon Pay and more','wallet']];
  box.innerHTML=`<div class="panel" style="font-size:12.5px;color:var(--muted);line-height:1.55;margin-bottom:16px">
      Payments are processed securely by <b style="color:var(--text)">Razorpay</b>. Tripomonk never sees or stores your card details — there is nothing to save here. You choose your method at checkout.</div>
    <div class="sec" style="margin:6px 2px 10px"><h2 style="font-size:14.5px">Accepted at checkout</h2></div>
    ${methods.map(m=>`<div class="mrow" style="cursor:default"><span class="ic"><span class="msr" style="font-size:20px">${m[2]}</span></span><span class="t">${m[0]}<small style="display:block;color:var(--muted2);font-size:10.5px">${m[1]}</small></span></div>`).join('')}
    <div class="sec" style="margin:20px 2px 10px"><h2 style="font-size:14.5px">How payment works</h2></div>
    <div class="bill">
      <div class="br"><span>To confirm a booking</span><b>25% advance</b></div>
      <div class="br"><span>Balance</span><b>Before departure</b></div>
      <div class="br"><span>Refunds</span><b>As per trek policy</b></div>
    </div>
    <div class="mrow" onclick="go('bookings')"><span class="ic">${ic('ticket',20)}</span><span class="t">Payment history &amp; e-tickets</span><span class="ch">${ic('back',16)}</span></div>
    <button class="btn ghost" style="margin-top:12px" onclick="wa('I have a payment question about my Tripomonk booking.')"><span class="ic" data-i="chat"></span> Payment help</button>`;
  hydrate(box);
}
function renderSettings(){
  const cur2=getTheme();
  const opts=[['system','brightness_auto','System'],['light','light_mode','Light'],['dark','dark_mode','Dark']];
  const tp=document.getElementById('themePick');
  if(tp)tp.innerHTML=opts.map(o=>`<div class="tp ${cur2===o[0]?'on':''}" onclick="setTheme('${o[0]}')"><span class="msr">${o[1]}</span><small>${o[2]}</small></div>`).join('');
  /* sounds must be mutable — an app you can't silence is one people close */
  const soundRow=`<div class="mrow" onclick="setSound(!soundOn())">
    <span class="ic"><span class="msr" style="font-size:20px">volume_up</span></span>
    <span class="t">Sound effects</span>
    <span class="tgl ${soundOn()?'on':''}" id="soundToggle"><i></i></span></div>`;
  /* set/change a password for the current account (signed-in users only) */
  const pwRow=isLoggedIn()?`<div class="mrow" onclick="setMyPassword()">
    <span class="ic"><span class="msr" style="font-size:20px">password</span></span>
    <span class="t"><b style="display:block;font-size:13.5px">Password &amp; sign-in</b><small style="color:var(--muted)">Set a password to sign in without Google</small></span>
    <span class="ch" style="transform:scaleX(-1)">${ic('back',16)}</span></div>`:'';
  /* private account: gate posts + messaging + calls behind an approved follow */
  const privRow=isLoggedIn()?`<div class="mrow" onclick="togglePrivateAccount()">
    <span class="ic"><span class="msr" style="font-size:20px">lock</span></span>
    <span class="t"><b style="display:block;font-size:13.5px">Private account</b><small style="color:var(--muted)">You approve followers; only they see your posts & can message or call you</small></span>
    <span class="tgl ${isPrivateAccount()?'on':''}" id="privToggle"><i></i></span></div>
    <div class="mrow" onclick="go('followRequests')">
    <span class="ic"><span class="msr" style="font-size:20px">group_add</span></span>
    <span class="t">Follow requests</span>
    <span class="ch" style="transform:scaleX(-1)">${ic('back',16)}</span></div>`:'';
  document.getElementById('setList').innerHTML=soundRow+pwRow+privRow+setList.map(s=>{
    const action=s[2]?`go('${s[2]}')`:`note('${s[1]} - coming soon')`;
    return `<div class="mrow" onclick="${action}"><span class="ic">${ic(s[0],20)}</span><span class="t">${s[1]}</span><span class="ch" style="transform:scaleX(-1)">${ic('back',16)}</span></div>`;
  }).join('');
  hydrate(document.getElementById('settings'));
}
async function togglePrivateAccount(){
  if(!isLoggedIn()){note('Sign in to change this.','Sign in required');return;}
  const p=getPrefs()||{};p.private=!p.private;
  try{localStorage.setItem(prefKey(),JSON.stringify(p));}catch(e){}
  privateByName[myName()]=!!p.private;
  renderSettings();
  toast(p.private?'Your account is now private 🔒':'Your account is now public');
  try{const sb=getSupaClient();const uid=sb?await authUid():null;if(sb&&uid)await sb.from('profiles').update({prefs:p}).eq('id',uid);}catch(e){}
}
/* incoming follow requests for MY (private) account */
async function renderFollowRequests(){
  const box=document.getElementById('followReqBody');if(!box)return;
  box.innerHTML='<div class="empty"><p>Loading requests…</p></div>';
  const sb=getSupaClient();const me=myName();
  let reqs=[];
  if(sb){try{const r=await sb.from('follows').select('follower_id,follower_name,status').eq('following_name',me).eq('status','pending');reqs=r.data||[];}catch(e){}}
  if(!reqs.length){box.innerHTML='<div class="ss-empty"><span class="msr">group_add</span><b>No follow requests</b><p>When someone asks to follow your private account, it shows up here.</p></div>';hydrate(box);return;}
  box.innerHTML=reqs.map(r=>{const nm=r.follower_name||'Trekker';return `<div class="freq-row">${avatar(nm,46)}<div class="freq-tx"><b>${esc(properName(nm))}</b><small>wants to follow you</small></div><div class="freq-btns"><button class="freq-no" onclick="declineFollowReq('${jsq(r.follower_id)}')">Decline</button><button class="freq-yes" onclick="acceptFollowReq('${jsq(r.follower_id)}','${jsq(nm)}')">Accept</button></div></div>`;}).join('');
  hydrate(box);
}
async function acceptFollowReq(fid,nm){const sb=getSupaClient();if(!sb)return;const me=myName();
  try{await sb.from('follows').update({status:'accepted'}).eq('follower_id',fid).eq('following_name',me);}catch(e){}
  uidForName(nm);pushNotif({recipientId:fid,type:'follow_accept'});toast('Accepted');renderFollowRequests();}
async function declineFollowReq(fid){const sb=getSupaClient();if(!sb)return;const me=myName();
  try{await sb.from('follows').delete().eq('follower_id',fid).eq('following_name',me);}catch(e){}toast('Declined');renderFollowRequests();}
/* ---- Followers / Following lists (tap a stat to see the exact people) ---- */
let _flMode='following',_flName='';
function openFollowList(mode,name){_flMode=(mode==='followers')?'followers':'following';_flName=name||myName();go('followList');}
async function renderFollowList(){
  const box=document.getElementById('followListBody');const title=document.getElementById('flTitle');
  const followers=_flMode==='followers';
  if(title)title.textContent=followers?'Followers':'Following';
  if(!box)return;
  box.innerHTML='<div class="empty"><p>Loading…</p></div>';
  const sb=getSupaClient();if(!sb){box.innerHTML='<div class="empty"><p>Connect to see this list.</p></div>';return;}
  const name=_flName;let names=[];
  try{
    if(followers){
      /* who follows this person → rows where following_name = them (accepted only) */
      const{data}=await sb.from('follows').select('follower_name,follower_id,status').ilike('following_name',name);
      const rows=(data||[]).filter(r=>(r.status||'accepted')==='accepted');
      /* older follow rows saved no follower_name — resolve those from the profile id so
         nobody is silently missing from the list */
      const missIds=[...new Set(rows.filter(r=>!r.follower_name&&r.follower_id).map(r=>r.follower_id))];
      if(missIds.length){try{const{data:profs}=await sb.from('profiles').select('id,name').in('id',missIds);const byId={};(profs||[]).forEach(p=>{if(p.id)byId[p.id]=p.name;});rows.forEach(r=>{if(!r.follower_name&&byId[r.follower_id])r.follower_name=byId[r.follower_id];});}catch(e){}}
      names=rows.map(r=>r.follower_name).filter(Boolean);
    }else{
      /* who this person follows → rows where follower_id = their uid */
      const uid=(name===myName()&&currentUser)?currentUser.id:await uidForName(name);
      if(uid){const{data}=await sb.from('follows').select('following_name,status').eq('follower_id',uid);
        names=(data||[]).filter(r=>(r.status||'accepted')!=='declined').map(r=>r.following_name).filter(Boolean);}
    }
  }catch(e){}
  names=[...new Set(names)];
  const who=name===myName()?'you':esc(properName(name));
  if(!names.length){
    const msg=followers?('People who follow '+who+' will show here.'):('People '+who+' '+(name===myName()?'follow':'follows')+' will show here.');
    box.innerHTML=`<div class="ss-empty"><span class="msr">group</span><b>${followers?'No followers yet':'Not following anyone yet'}</b><p>${msg}</p></div>`;hydrate(box);return;}
  await loadAuthorPhotos(names);
  box.innerHTML=names.map(n=>{const h=handleFor(n);const sub=(h&&h.toLowerCase()!==properName(n).toLowerCase())?`<small>${esc(h)}</small>`:'';
    return `<div class="fl-row" onclick="openPerson('${jsq(n)}')">${avatar(n,46)}<div class="fl-meta"><b>${esc(properName(n))}</b>${sub}</div><span class="msr fl-go">chevron_right</span></div>`;}).join('');
  hydrate(box);
}
function calPick(el){document.querySelectorAll('#cal .grid .d').forEach(d=>{if(!d.classList.contains('off'))d.classList.remove('on');});el.classList.add('on');}
function renderSearch(){document.getElementById('searchSug').innerHTML=['Kedarkantha','Valley of Flowers','Uttarakhand','Easy treks','Roopkund'].map(s=>`<div class="chip pill" onclick="doSearch('${s}')">${s}</div>`).join('');doSearch('');const inp=document.getElementById('searchInput');if(inp&&!inp._w){inp._w=1;inp.addEventListener('input',()=>doSearch(inp.value));}}
function doSearch(q){const inp=document.getElementById('searchInput');if(inp&&q&&inp.value!==q)inp.value=q;q=(q||'').toLowerCase();
  /* empty query = browse treks only (tours live in their own section); an ACTIVE search
     matches everything incl. tours, so someone typing "Ladakh"/"Spiti" still finds the tour */
  const f=treks.filter(t=>q?(t.n.toLowerCase().includes(q)||t.region.toLowerCase().includes(q)||t.lvl.toLowerCase().includes(q)):!isTour(t));
  const el=document.getElementById('searchResults');el.innerHTML=(f.length?f:treks.filter(t=>!isTour(t))).map(trekCard).join('');hydrate(el);}
async function renderNotifications(){
  const box=document.getElementById('notiList');
  const lastSeen=+(localStorage.getItem('tmk_notif_seen')||0);
  box.innerHTML=`<div style="color:var(--muted);font-size:12px;margin:0 2px 10px">Activity</div><div class="skel-row"><div class="skel sk-av" style="width:38px;height:38px;border-radius:50%"></div><div class="sk-l"><div class="skel" style="width:70%"></div><div class="skel" style="width:40%"></div></div></div><div class="skel-row"><div class="skel sk-av" style="width:38px;height:38px;border-radius:50%"></div><div class="sk-l"><div class="skel" style="width:60%"></div><div class="skel" style="width:35%"></div></div></div>`;
  hydrate(box);
  const np=getNotifPrefs();
  /* respect the user's notification preferences — a muted type never shows */
  const remote=(await loadNotifsRemote()||[]).filter(n=>np[n.type]!==false);
  let activity='';
  if(remote&&remote.length){
    /* pull each actor's photo + username so their face and @handle show, not just initials */
    try{await loadAuthorPhotos(remote.map(n=>n.actor_name));}catch(e){}
    activity=remote.map((n,idx)=>{
      const unread=new Date(n.created_at).getTime()>lastSeen;
      const st=NOTIF_STYLE[n.type]||{e:'🔔',c:'#2f6bff'};
      /* staggered slide-up entrance (AnimatedList feel), capped so it never drags */
      const delay=Math.min(idx*0.06,0.55);
      return `<div class="noti-sw" data-nid="${esc(n.id)}" style="animation-delay:${delay}s">
        <div class="noti-del">${ic('trash',20)}</div>
        <div class="noti-card ${unread?'unread':''}" data-type="${esc(n.type||'')}" data-post="${esc(n.post_id||'')}" data-actor="${esc(n.actor_name||'')}">
          <div class="noti-ico" style="background:${st.c}">${st.e}</div>
          <div class="noti-t"><span class="noti-name">${esc(handleFor(n.actor_name))}<b class="noti-time"> · ${timeAgo(n.created_at)}</b></span><span class="noti-desc">${notifDesc(n)}</span></div>
        </div>
      </div>`;
    }).join('');
  } else {
    activity=`<div class="noti-empty"><div class="noti-empty-ic"><span class="msr">notifications_none</span></div>`
      +`<b>You're all caught up</b><small>Likes, comments and new followers will show up here.</small></div>`;
  }
  box.innerHTML=`<div style="color:var(--muted);font-size:12px;margin:0 2px 10px">Activity</div>${activity}`;
  hydrate(box);
  wireNotifSwipe();
  /* mark all as seen — activity AND news — so the bell dot fully clears */
  localStorage.setItem('tmk_notif_seen',String(Date.now()));
  try{markNewsSeen();}catch(e){}
  setNotifBadges(0,false);_lastUnread=0;
}
/* tap a notification -> open what it's about (the post, or the person who followed you) */
/* fetch a single post (from memory or the server) into a usable object */
async function ensurePost(id){
  let p=postById(id);if(p)return p;
  const sb=getSupaClient();if(!sb)return null;
  try{const{data}=await sb.from('community_posts').select('*').eq('id',id).maybeSingle();
    if(data)return {id:data.id,uid:data.user_id||null,n:data.author_name||'Trekker',when:timeAgo(data.created_at),txt:data.txt||'',imgs:data.imgs||[],likes:0,comments:[],trek:data.trek_tag||'',tagged:data.tagged||[]};
  }catch(e){}
  return null;
}
/* open ONE post full-screen (used by a like notification, or tapping a grid post) */
async function openPostDetail(id){
  go('postView');
  const box=document.getElementById('postViewBody');if(box)box.innerHTML='<div class="skel skel-post"></div>';
  const p=await ensurePost(id);
  if(!box)return;
  if(!p){box.innerHTML='<div class="empty" style="padding:30px 0"><p>This post is no longer available.</p></div>';return;}
  _lastFeed=[p,..._lastFeed.filter(x=>x.id!==p.id)];   /* so like/comment/repost handlers find it */
  const paint=()=>{box.innerHTML='<div id="postViewFeed">'+postCard(p)+'</div>';hydrate(box);};
  paint();
  try{await Promise.all([loadEngagement([p.id]),resolveAuthors([p],'uid','n')]);paint();}catch(e){}
}
async function openNotif(nid,type,postId,actor){
  if(type==='follow'){if(actor)openPerson(actor);return;}
  if(postId){
    /* a LIKE opens the whole post; a COMMENT / MENTION opens the comment thread */
    if(type==='like'){openPostDetail(postId);return;}
    go('community');
    if(!postById(postId)){const p=await ensurePost(postId);if(p)_lastFeed.unshift(p);}
    if(postById(postId))openComments(postId);
    return;
  }
  go('community');
}
/* remove one notification (swipe or the reveal button) — optimistic, server delete after */
async function deleteNotif(nid,sw){
  if(sw)sw.remove();
  dismissNotifLocal(nid);   /* remember locally so it never comes back on refresh */
  const sb=getSupaClient();const uid=await authUid();
  if(sb&&uid){try{await sb.from('notifications').delete().eq('id',nid);}catch(e){}}
  const list=document.getElementById('notiList');
  if(list&&!list.querySelector('.noti-sw'))renderNotifications();   /* last one gone -> show empty state */
}
/* swipe-left to delete, tap to open — wired after each render */
function wireNotifSwipe(){
  document.querySelectorAll('#notiList .noti-card').forEach(card=>{
    const sw=card.closest('.noti-sw');let x0=0,dx=0,drag=false;
    card.addEventListener('pointerdown',e=>{drag=true;x0=e.clientX;dx=0;card.style.transition='none';try{card.setPointerCapture(e.pointerId);}catch(_){}});
    card.addEventListener('pointermove',e=>{if(!drag)return;dx=Math.min(0,e.clientX-x0);card.style.transform='translateX('+dx+'px)';sw.classList.toggle('arm',dx<-90);});
    const end=()=>{if(!drag)return;drag=false;card.style.transition='transform .18s';
      if(dx<-90){card.style.transform='translateX(-100%)';setTimeout(()=>deleteNotif(sw.dataset.nid,sw),160);}
      else card.style.transform='';sw.classList.remove('arm');};
    card.addEventListener('pointerup',end);card.addEventListener('pointercancel',end);
    card.addEventListener('click',()=>{if(Math.abs(dx)>8)return;   /* was a swipe, not a tap */
      openNotif(sw.dataset.nid,card.dataset.type,card.dataset.post,card.dataset.actor);});
  });
}
function renderReviews(){
  const box=document.getElementById('reviewList');if(!box)return;
  const list=reviewsData;
  box.innerHTML='<button class="btn" style="margin-bottom:16px" onclick="openReviewModal()"><span class="msr" style="font-size:18px">rate_review</span> Write a review</button>'
    +(list.length?list.map(reviewCard).join(''):'<div class="empty"><p>No reviews yet. Be the first to review after your trek!</p></div>');
  const avg=list.length?(list.reduce((s,r)=>s+(+r.rating||0),0)/list.length):0;
  const av=document.getElementById('revAvg'),ac=document.getElementById('revCount'),as=document.getElementById('revStarRow');
  if(av)av.textContent=list.length?avg.toFixed(1):'—';
  if(as){const full=Math.round(avg);as.textContent=list.length?('★'.repeat(full)+'☆'.repeat(5-full)):'☆☆☆☆☆';}
  if(ac)ac.textContent=list.length?('Based on '+list.length+' review'+(list.length!==1?'s':'')):'Be the first to review';
  hydrate(box);
}
function renderHelp(){document.getElementById('faqList').innerHTML='<button class="btn" style="margin-bottom:14px" onclick="raiseTicket()"><span class="msr">support_agent</span> Raise a support ticket</button>'+faqs.map(f=>`<div class="panel" style="margin-bottom:10px"><b style="font-size:13.5px;display:block;margin-bottom:6px">${f[0]}</b><span style="font-size:12.5px;color:var(--muted);line-height:1.55">${f[1]}</span></div>`).join('');hydrate(document.getElementById('help'));}
function wa(msg){saveEnquiry('whatsapp',msg||'');window.open('https://wa.me/'+getWa()+'?text='+encodeURIComponent(msg||'Hi Tripomonk'),'_blank');}
/* ---- Trek Health (live HR via Web Bluetooth where supported; else demo) ---- */
let health={bpm:96,spo2:97,steps:7480,dist:5.2,cal:412,elev:840,pace:'14:20',live:false}, healthTimer=null;
function paintHealth(){const g=id=>document.getElementById(id);
  if(g('hrNum'))g('hrNum').textContent=health.bpm;
  if(g('spo2V'))g('spo2V').textContent=health.spo2;
  if(g('stepsV'))g('stepsV').textContent=health.steps.toLocaleString('en-IN');
  if(g('distV'))g('distV').textContent=health.dist.toFixed(1);
  if(g('calV'))g('calV').textContent=health.cal;
  if(g('elevV'))g('elevV').textContent=health.elev;
  if(g('paceV'))g('paceV').textContent=health.pace;}
function renderHealth(){paintHealth();if(healthTimer)clearInterval(healthTimer);
  healthTimer=setInterval(()=>{ if(!health.live)health.bpm=88+Math.round(Math.random()*16);
    health.spo2=95+Math.round(Math.random()*4); health.steps+=Math.round(Math.random()*24);
    health.dist=+(health.steps/1370).toFixed(1); health.cal=380+Math.round(health.steps*0.045);
    paintHealth(); },1600);}
function stopHealth(){if(healthTimer){clearInterval(healthTimer);healthTimer=null;}}
async function connectWatch(){const c=document.getElementById('hConn');
  if(!navigator.bluetooth){note('Live device connect needs Chrome on Android or desktop over an https:// link. Showing demo data for now.');return;}
  try{const dev=await navigator.bluetooth.requestDevice({filters:[{services:['heart_rate']}]});
    const srv=await dev.gatt.connect();const s=await srv.getPrimaryService('heart_rate');
    const ch=await s.getCharacteristic('heart_rate_measurement');await ch.startNotifications();
    ch.addEventListener('characteristicvaluechanged',e=>{const v=e.target.value,f=v.getUint8(0);health.bpm=(f&1)?v.getUint16(1,true):v.getUint8(1);health.live=true;paintHealth();});
    if(c){c.textContent='● Live · '+(dev.name||'device connected');c.style.color='#6ee7a0';}
  }catch(e){/* user cancelled or no device */}}
/* ---- Trek Navigation (live GPS + Leaflet/OpenStreetMap) ---- */
const COORDS={"Kedarkantha":[31.13,78.20],"Brahmatal":[30.10,79.62],"Valley of Flowers":[30.72,79.60],"Hampta Pass":[32.24,77.19],"Har Ki Dun":[31.13,78.20],"Nag Tibba":[30.55,78.18],"Roopkund":[30.10,79.62]};
const REGION_C={Himachal:[32.24,77.19],Uttarakhand:[30.73,79.07],Kashmir:[34.10,75.30],Ladakh:[34.20,77.60],Sikkim:[27.50,88.30]};
let _map=null,_base=null,_uM=null,_acc=null,_last=null,navOn=false,navDist=0,navTrek=null;
function coordsFor(t){return (t&&COORDS[t.n])||(t&&REGION_C[t.region])||[30.73,79.07];}
/* base town + nearest rail/air per trek, for "Getting there" + directions.
   Rail/air default to the region's usual gateway (REGION_GATEWAY) and are only
   overridden per-trek when the nearest railhead/airport actually differs. Every trek
   gets a real roadhead "town" — the point you start from after the road journey. */
const REGION_GATEWAY={
  'Uttarakhand':{rail:'Dehradun',air:'Dehradun (Jolly Grant)'},
  'Himachal':{rail:'Chandigarh',air:'Bhuntar / Kullu'},
  'Ladakh':{rail:'Jammu Tawi (~700 km)',air:'Leh (Kushok Bakula Rimpochee)'},
  'Kashmir':{rail:'Jammu Tawi',air:'Srinagar'},
  'Sikkim':{rail:'New Jalpaiguri (NJP)',air:'Bagdogra / Pakyong'},
  'Arunachal':{rail:'Naharlagun',air:'Guwahati'},
  'Meghalaya':{rail:'Guwahati',air:'Shillong (Umroi) / Guwahati'},
  'Nagaland':{rail:'Dimapur',air:'Dimapur'},
  'West Bengal':{rail:'New Jalpaiguri (NJP)',air:'Bagdogra'},
  'Maharashtra':{rail:'Pune',air:'Pune / Mumbai'},
  'Karnataka':{rail:'Mangaluru',air:'Mangaluru / Bengaluru'},
  'Tamil Nadu':{rail:'Coimbatore',air:'Coimbatore'}
};
const BASE={
  /* ---- Uttarakhand (Garhwal rail = Dehradun/Rishikesh/Haridwar; Kumaon rail = Kathgodam, air = Pantnagar) ---- */
  'Kedarkantha':{town:'Sankri',rail:'Dehradun (~200 km)'},
  'Har Ki Dun':{town:'Sankri / Taluka',rail:'Dehradun (~210 km)'},
  'Bali Pass':{town:'Sankri',rail:'Dehradun (~200 km)'},
  'Phulara Ridge':{town:'Sankri',rail:'Dehradun (~200 km)'},
  'Borasu Pass':{town:'Sankri',rail:'Dehradun (~200 km)'},
  'Rupin Pass':{town:'Dhaula (start) → Sankri (end)',rail:'Dehradun (~200 km)'},
  'Nag Tibba':{town:'Pantwari',rail:'Dehradun (~90 km)'},
  'Dayara Bugyal':{town:'Raithal / Barsu',rail:'Dehradun (~180 km)'},
  'Dodital Darwa Pass':{town:'Sangam Chatti (Uttarkashi)',rail:'Dehradun (~150 km)'},
  'Gaumukh Tapovan':{town:'Gangotri',rail:'Dehradun (~240 km)'},
  'Kedartal':{town:'Gangotri',rail:'Dehradun (~240 km)'},
  'Valley of Flowers':{town:'Govindghat / Pulna',rail:'Rishikesh (~275 km)'},
  'Hemkund Sahib':{town:'Govindghat',rail:'Rishikesh (~275 km)'},
  'Satopanth Lake':{town:'Mana (Badrinath)',rail:'Rishikesh (~295 km)'},
  'Kuari Pass':{town:'Joshimath / Auli',rail:'Rishikesh (~250 km)'},
  'Pangarchulla Peak':{town:'Joshimath',rail:'Rishikesh (~250 km)'},
  'Chopta Chandrashila':{town:'Chopta / Sari',rail:'Rishikesh (~200 km)'},
  'Brahmatal':{town:'Lohajung',rail:'Kathgodam (~215 km)',air:'Pantnagar / Dehradun'},
  'Roopkund':{town:'Lohajung',rail:'Kathgodam (~215 km)',air:'Pantnagar / Dehradun'},
  'Pindari Glacier':{town:'Loharkhet / Song',rail:'Kathgodam (~180 km)',air:'Pantnagar'},
  /* ---- Himachal ---- */
  'Hampta Pass':{town:'Manali (Jobra roadhead)',rail:'Chandigarh (~310 km)',air:'Bhuntar / Kullu (~50 km)'},
  'Bhrigu Lake':{town:'Gulaba (Manali)',air:'Bhuntar / Kullu'},
  'Beas Kund':{town:'Solang (Manali)',air:'Bhuntar / Kullu'},
  'Lamadugh':{town:'Manali',air:'Bhuntar / Kullu'},
  'Patalsu Peak':{town:'Solang (Manali)',air:'Bhuntar / Kullu'},
  'Friendship Peak':{town:'Solang (Manali)',air:'Bhuntar / Kullu'},
  'Deo Tibba Base Camp':{town:'Jagatsukh (Manali)',air:'Bhuntar / Kullu'},
  'Seven Lakes':{town:'Manali',air:'Bhuntar / Kullu'},
  'Chandrakhani Pass':{town:'Naggar / Rumsu',air:'Bhuntar / Kullu'},
  'Sar Pass':{town:'Kasol / Grahan',air:'Bhuntar / Kullu'},
  'Kheerganga':{town:'Barsheni (Kasol)',air:'Bhuntar / Kullu'},
  'Pin Parvati Pass':{town:'Barsheni (Kasol)',air:'Bhuntar / Kullu'},
  'Triund':{town:'McLeodganj (Dharamshala)',rail:'Pathankot (~90 km)',air:'Gaggal / Dharamshala (~20 km)'},
  'Indrahar Pass':{town:'McLeodganj (Dharamshala)',rail:'Pathankot (~90 km)',air:'Gaggal / Dharamshala'},
  'Kareri Lake':{town:'Kareri village (Dharamshala)',rail:'Pathankot (~90 km)',air:'Gaggal / Dharamshala'},
  'Bara Bhangal':{town:'Bir (Baijnath)',rail:'Pathankot',air:'Gaggal / Dharamshala'},
  'Kugti Pass':{town:'Kugti village (Bharmour, Chamba)',rail:'Pathankot',air:'Gaggal / Dharamshala'},
  'Miyar Valley':{town:'Udaipur (Lahaul)',air:'Bhuntar / Kullu'},
  'Yulla Kanda':{town:'Sarahan → Yulla (Kinnaur)',rail:'Shimla (~230 km)',air:'Shimla / Chandigarh'},
  /* ---- Ladakh (fly to Leh; no nearby railhead) ---- */
  'Markha Valley':{town:'Chilling / Skiu'},
  'Chadar Trek':{town:'Chilling / Tilat Sumdo'},
  'Chadar':{town:'Chilling / Tilat Sumdo'},
  'Sham Valley':{town:'Likir'},
  'Stok Kangri Base Camp':{town:'Stok village'},
  'Kang Yatse II':{town:'Chilling / Skiu'},
  'Rumtse to Tso Moriri':{town:'Rumtse'},
  'Lamayuru to Chilling':{town:'Lamayuru'},
  'Nubra Valley':{town:'Diskit / Hunder'},
  'Dzo Jongo':{town:'Chilling'},
  'Stok La':{town:'Spituk / Stok'},
  'Snow Leopard':{town:'Zingchen (Hemis NP)'},
  'Parang La':{town:'Kibber (Spiti) → Korzok',air:'Leh / Bhuntar'},
  /* ---- Kashmir (fly to Srinagar) ---- */
  'Kashmir Great Lakes':{town:'Sonamarg (Shitkadi)'},
  'Tarsar Marsar':{town:'Aru (Pahalgam)'},
  'Nafran Valley':{town:'Aru (Pahalgam)'},
  'Tulian Lake':{town:'Pahalgam'},
  'Lidderwat':{town:'Aru (Pahalgam)'},
  'Great Kolahoi Glacier':{town:'Aru (Pahalgam)'},
  'Kousarnag Lake':{town:'Aharbal'},
  'Sunset Peak':{town:'Pahalgam'},
  'Gangbal Lake':{town:'Naranag'},
  'Naranag Mahlish':{town:'Naranag'},
  'Harmukh Peak Base Camp':{town:'Naranag'},
  'Gurez Valley':{town:'Dawar (Bandipora)'},
  /* ---- Sikkim (rail NJP, air Bagdogra/Pakyong) ---- */
  'Goecha La':{town:'Yuksom'},
  'Goechala':{town:'Yuksom'},
  'Dzongri':{town:'Yuksom'},
  'Kanchenjunga Base Camp':{town:'Yuksom'},
  'Green Lake':{town:'Lachen'},
  'Sandakphu':{town:'Manebhanjan'},
  'Singalila Ridge':{town:'Manebhanjan'},
  'Phoktey Dara':{town:'Uttarey (West Sikkim)'},
  'Kasturi Orar':{town:'Uttarey (West Sikkim)'},
  'Barsey Rhododendron':{town:'Hilley / Okhrey'},
  'Varsey':{town:'Hilley / Okhrey'},
  'Tendong Hill':{town:'Damthang (Namchi)'},
  'Maenam Hill':{town:'Ravangla'},
  /* ---- Arunachal ---- */
  'Tawang':{town:'Tawang town',rail:'Tezpur / Rangapara',air:'Tezpur / Guwahati'},
  'Bum La':{town:'Tawang',rail:'Tezpur / Rangapara',air:'Tezpur / Guwahati'},
  'Bailey Trail':{town:'Tawang / Jang',rail:'Tezpur / Rangapara',air:'Tezpur / Guwahati'},
  'Gorichen Base Camp':{town:'Jang (Tawang)',rail:'Tezpur / Rangapara',air:'Tezpur / Guwahati'},
  'Mechuka':{town:'Aalo → Mechuka',rail:'Silapathar',air:'Dibrugarh / Guwahati'},
  'Talley Valley':{town:'Ziro',rail:'Naharlagun',air:'Lilabari / Guwahati'},
  'Ziro Valley':{town:'Ziro',rail:'Naharlagun',air:'Lilabari / Guwahati'},
  'Namdapha Rainforest':{town:'Miao / Deban',rail:'Tinsukia / Ledo',air:'Dibrugarh'},
  'Pangsau Pass':{town:'Nampong (Jairampur)',rail:'Tinsukia / Ledo',air:'Dibrugarh'},
  'Dong Valley':{town:'Walong / Dong',rail:'Tinsukia',air:'Dibrugarh'},
  /* ---- Meghalaya (rail Guwahati, air Shillong/Guwahati) ---- */
  'David Scott Trail':{town:'Mawphlang → Ladmawphlang'},
  'Living Root Bridge':{town:'Tyrna (Cherrapunji)'},
  'Double Decker Root Bridge':{town:'Tyrna → Nongriat'},
  'Nongriat':{town:'Tyrna (Cherrapunji)'},
  'Mawryngkhang Bamboo':{town:'Wahkhen'},
  'Laitlum Canyon':{town:'Smit (Shillong)'},
  'Sohra Waterfall':{town:'Sohra / Cherrapunji'},
  'Mawphlang Sacred Forest':{town:'Mawphlang'},
  'Shnongpdeng Riverside':{town:'Shnongpdeng (Dawki)'},
  'Balpakram National Park':{town:'Baghmara (South Garo Hills)',air:'Guwahati'},
  /* ---- Nagaland (rail + air Dimapur) ---- */
  'Dzukou Valley':{town:'Viswema / Zakhama (Kohima)'},
  'Japfu Peak':{town:'Kigwema (Kohima)'},
  'Puliebadze':{town:'Kohima'},
  'Mount Saramati':{town:'Thanamir village (Kiphire)'},
  'Benreu':{town:'Benreu village (Peren)'},
  'Intanki National Park':{town:'Peren'},
  /* ---- West Bengal (Darjeeling hills — rail NJP, air Bagdogra) ---- */
  'Phalut':{town:'Manebhanjan / Sepi'},
  'Tonglu':{town:'Manebhanjan'},
  'Senchal Wildlife':{town:'Darjeeling'},
  'Tiger Hill Sunrise':{town:'Darjeeling'},
  'Neora Valley':{town:'Lava (Kalimpong)'},
  'Lava Lolegaon':{town:'Lava'},
  /* ---- Maharashtra (Sahyadris) ---- */
  'Harishchandragad':{town:'Khireshwar / Pachnai',rail:'Kalyan / Igatpuri',air:'Mumbai / Pune'},
  'Kalsubai Peak':{town:'Bari village',rail:'Kasara / Igatpuri',air:'Mumbai / Pune'},
  'Ratangad':{town:'Ratanwadi',rail:'Kasara / Igatpuri',air:'Mumbai / Pune'},
  'Alang Madan Kulang':{town:'Ambewadi',rail:'Kasara / Igatpuri',air:'Mumbai / Pune'},
  'Rajmachi':{town:'Udhewadi (Lonavala)',rail:'Lonavala'},
  'Lohagad Fort':{town:'Malavli',rail:'Malavli / Lonavala'},
  'Visapur Fort':{town:'Malavli',rail:'Malavli / Lonavala'},
  'Torna Fort':{town:'Velhe',rail:'Pune'},
  'Rajgad Fort':{town:'Gunjavane (Velhe)',rail:'Pune'},
  'Andharban Forest':{town:'Pimpri (Tamhini)',rail:'Pune'},
  'Kalavantin Durg':{town:'Prabalmachi (Panvel)',rail:'Panvel',air:'Mumbai'},
  'Peb Fort':{town:'Neral',rail:'Neral',air:'Mumbai'},
  /* ---- Karnataka (Western Ghats) ---- */
  'Kumara Parvatha':{town:'Kukke Subramanya',rail:'Subrahmanya Road'},
  'Kudremukh':{town:'Kalasa / Samse'},
  'Ettina Bhuja':{town:'Kalasa'},
  'Ballalarayana Durga':{town:'Sunkasale (Kalasa)'},
  'Narasimha Parvatha':{town:'Agumbe',rail:'Shivamogga / Udupi'},
  'Kodachadri':{town:'Kollur / Nagara',rail:'Shivamogga / Kundapura'},
  'Mullayanagiri':{town:'Chikkamagaluru',rail:'Kadur / Birur',air:'Mangaluru / Bengaluru'},
  'Tadiandamol':{town:'Kakkabe (Coorg)',rail:'Mysuru',air:'Mangaluru / Mysuru'},
  'Nishani Motte':{town:'Madikeri (Coorg)',rail:'Mysuru',air:'Mangaluru / Mysuru'},
  'Gokarna Beach':{town:'Gokarna',rail:'Gokarna Road',air:'Goa (Dabolim) / Mangaluru'},
  /* ---- Tamil Nadu (Nilgiris / Western Ghats) ---- */
  'Mukurthi National Park':{town:'Ooty (Udhagamandalam)',rail:'Mettupalayam / Ooty'},
  'Ooty Peak':{town:'Ooty (Doddabetta)',rail:'Mettupalayam / Ooty'},
  'Kotagiri Longwood':{town:'Kotagiri',rail:'Mettupalayam'},
  'Velliangiri Hills':{town:'Poondi (Coimbatore)',rail:'Coimbatore'},
  'Perumal Peak':{town:'Kodaikanal',rail:'Kodai Road / Palani',air:'Madurai'},
  'Thalaiyar Falls':{town:'Batlagundu (Kodaikanal)',rail:'Kodai Road',air:'Madurai'},
  'Meghamalai':{town:'Chinnamanur (Theni)',rail:'Theni / Madurai',air:'Madurai'},
  'Top Station':{town:'Kurangani / Munnar',rail:'Madurai',air:'Madurai'},
  'Kolukkumalai':{town:'Suryanelli / Munnar',rail:'Madurai',air:'Madurai / Kochi'}
};
/* Merge the trek's roadhead with its region gateway; per-trek rail/air win when set. */
function baseInfo(t){
  const g=REGION_GATEWAY[t&&t.region]||{rail:'Nearest major railhead',air:'Nearest airport'};
  const b=(t&&BASE[t.n])||{};
  return {
    town: b.town || (t&&(t.dep||(typeof TREK_DEP!=='undefined'&&TREK_DEP[t.n]))) || (t&&t.region) || '—',
    rail: b.rail || g.rail,
    air:  b.air  || g.air
  };
}
function getDirections(){
  const t=cart.trek;if(!t)return;const b=baseInfo(t);const c=coordsFor(t);
  const dest=(b.town&&b.town!==t.region)?encodeURIComponent(b.town+', '+t.region+', India'):`${c[0]},${c[1]}`;
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${dest}`,'_blank','noopener');
}
/* the base-town / rail / airport facts moved into renderDetailFacts — this is just
   the two actions that go with them */
function renderDetailGetting(t){
  const box=document.getElementById('dGetting');if(!box)return;
  box.innerHTML=`<div class="dact-row">
    <button class="btn ghost sm" onclick="getDirections()">${ic('pin',15)} Directions</button>
    <button class="btn ghost sm" onclick="openNav(cart.trek)">${ic('distance',15)} Trail map</button>
  </div>`;
  hydrate(box);
}
function hav(a,b,c,d){const R=6371,p=Math.PI/180,x=Math.sin((c-a)*p/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin((d-b)*p/2)**2;return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
function openNav(t){navTrek=t||cart.trek;go('navmap');}
function renderNav(){const t=navTrek||cart.trek,c=coordsFor(t);
  if(typeof L==='undefined'){document.getElementById('nCoord').textContent='Map needs internet on first load — please retry.';return;}
  if(!_map){_map=L.map('map',{zoomControl:true,attributionControl:true}).setView(c,12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:17,attribution:'© OpenStreetMap'}).addTo(_map);}
  setTimeout(()=>{try{_map.invalidateSize();}catch(e){}},220);
  if(_base)_map.removeLayer(_base);
  _base=L.marker(c).addTo(_map).bindPopup((t?t.n:'Trek')+' — base');
  if(!_last)_map.setView(c,12);}
function toggleNav(){if(navOn){stopNav();return;}
  if(!navigator.geolocation){note('GPS is not available on this device/browser.');return;}
  navOn=true;navDist=0;_last=null;const b=document.getElementById('navBtn');if(b)b.innerHTML='Stop tracking';
  _watchN=navigator.geolocation.watchPosition(onPos,()=>{document.getElementById('nCoord').textContent='Location permission needed (allow it in your browser).';navOn=false;if(b)b.innerHTML='Start tracking';},{enableHighAccuracy:true,maximumAge:2000,timeout:15000});}
let _watchN=null;
function onPos(p){const lat=p.coords.latitude,lng=p.coords.longitude;
  if(_last)navDist+=hav(_last[0],_last[1],lat,lng); _last=[lat,lng];
  const g=id=>document.getElementById(id);
  if(g('nAlt'))g('nAlt').textContent=p.coords.altitude!=null?Math.round(p.coords.altitude)+' m':'—';
  if(g('nSpd'))g('nSpd').textContent=p.coords.speed!=null?(p.coords.speed*3.6).toFixed(1)+' km/h':'—';
  if(g('nDist'))g('nDist').textContent=navDist.toFixed(2);
  if(g('nCoord'))g('nCoord').textContent=lat.toFixed(4)+', '+lng.toFixed(4)+'  ±'+Math.round(p.coords.accuracy)+' m';
  const c=coordsFor(navTrek||cart.trek);if(g('nToBase'))g('nToBase').textContent=hav(lat,lng,c[0],c[1]).toFixed(1)+' km';
  if(typeof L!=='undefined'&&_map){ if(!_uM){_uM=L.circleMarker([lat,lng],{radius:7,color:'#fff',weight:2,fillColor:'#2f6bff',fillOpacity:1}).addTo(_map);} else _uM.setLatLng([lat,lng]);
    if(_acc)_map.removeLayer(_acc); _acc=L.circle([lat,lng],{radius:p.coords.accuracy||30,color:'#2f6bff',weight:1,fillOpacity:.08}).addTo(_map); _map.setView([lat,lng],15);}}
function recenterNav(){if(_last&&_map)_map.setView(_last,15);else if(_map)_map.setView(coordsFor(navTrek||cart.trek),12);}
function stopNav(){navOn=false;if(_watchN!=null){navigator.geolocation.clearWatch(_watchN);_watchN=null;}const b=document.getElementById('navBtn');if(b)b.innerHTML='Start tracking';}

/* ---------------- ADMIN · manage treks ---------------- */
const ADMIN_CODE='TMK-ADMIN';
function isAdmin(){try{return localStorage.getItem('tmk_admin')==='1';}catch(e){return false;}}
async function adminCall(action,payload){
  const sb=getSupaClient();
  if(!sb)return{ok:false,error:'Backend not connected.'};
  const {data:{session}}=await sb.auth.getSession();
  if(!session)return{ok:false,error:'Please sign in with the Tripomonk admin email first.'};
  try{
    const r=await fetch(SB.SUPABASE_URL+'/functions/v1/admin',{
      method:'POST',
      headers:{'Content-Type':'application/json',Authorization:'Bearer '+session.access_token,apikey:SB.SUPABASE_ANON_KEY},
      body:JSON.stringify(Object.assign({action},payload||{}))
    });
    const out=await r.json().catch(()=>({ok:false,error:'Admin server returned an invalid response.'}));
    if(!r.ok&&out&&!out.error)out.error='Admin request failed ('+r.status+').';
    return out;
  }catch(e){return{ok:false,error:'Network error: '+e};}
}
async function adminLogin(){
  if(!isLoggedIn()){note('Please sign in with your Tripomonk admin email.','Admin sign in').then(()=>{_loginReturn='admin';go('login');});return;}
  const res=await adminCall('ping');
  if(res&&res.ok){try{localStorage.setItem('tmk_admin','1');localStorage.removeItem('tmk_admin_key');}catch(e){}go('admin');}
  else{try{localStorage.removeItem('tmk_admin');}catch(e){}note((res&&res.error)||'Admin access denied.','Admin blocked');}
}
function adminExit(){try{localStorage.removeItem('tmk_admin');localStorage.removeItem('tmk_admin_key');}catch(e){}renderProfile();go('profile');}
function adminKey(){return '';}
function saveAdminKey(){note('Service-role keys are no longer stored in the app. Admin changes now use secure Supabase functions.','Security updated');}
async function sbWriteChecked(method,path,body){
  let res={ok:false,error:'Unsupported admin action'};
  if(path.indexOf('treks')===0){
    const id=(path.split('eq.')[1]||'');
    if(method==='POST')res=await adminCall('save_trek',{trek:body});
    /* a packing-only save carries JUST {packing:…}; a full trek save also carries name/price/etc
       (and a packing key). Route to save_packing ONLY when there's no trek name — otherwise a trek
       edit was silently going down the packing path and its price/other fields never saved. */
    else if(method==='PATCH'&&body&&Object.prototype.hasOwnProperty.call(body,'packing')&&!Object.prototype.hasOwnProperty.call(body,'name'))res=await adminCall('save_packing',{id:id,packing:body.packing});
    else if(method==='PATCH'&&body&&Object.prototype.hasOwnProperty.call(body,'batches')&&!Object.prototype.hasOwnProperty.call(body,'name'))res=await adminCall('save_batches',{id:id,batches:body.batches});
    else if(method==='PATCH')res=await adminCall('save_trek',{id:id,trek:body});
    else if(method==='DELETE')res=await adminCall('delete_trek',{id:id});
  }
  if(!res||!res.ok){note((res&&res.error)||'Admin save failed.','Save failed');return false;}
  return true;
}
function trekToRow(t){return {name:t.n,region:t.region,img:(t.img||'').split('?')[0],rating:t.r,reviews:t.rev,level:t.lvl,days:t.days,altitude:t.alt,distance:t.dist,best_time:t.best,price:t.price,soon:!!t.soon,description:t.desc,packing:t.packing||null,req_score:(typeof t.req==='number'?t.req:null),popular:!!t.pop,featured:!!t.feat,type:trekType(t),dest_id:(t.dest_id||'').trim()||null,departure_type:tourDep(t),itinerary:(Array.isArray(t.itinerary)?t.itinerary:[]),pickup:(t.pickup||'').trim()||null,dropoff:(t.dropoff||'').trim()||null,pickup_map:(t.pickup_map||'').trim()||null,tag:(t.tag||'').trim()||null,offer:(t.offer||'').trim()||null,discount:Math.max(0,Math.min(90,parseInt(t.discount)||0)),highlights:(Array.isArray(t.highlights)&&t.highlights.length?t.highlights:null),itinerary_url:(t.itin||'').trim()||null,
  hero_video:(t.hvid||'').trim()||null,hero_use_video:!!t.hvideo,
  guide_id:(t.guide_id!=null&&t.guide_id!=='')?t.guide_id:null};}
let editIdx=-1, adminTab='Treks', depTrek=null, _admHub=true;
const ADM_TAB_IC={Overview:'dashboard',Bookings:'receipt_long',Users:'group',CRM:'contacts',Payments:'account_balance',Treks:'landscape',Home:'home',Destinations:'travel_explore',Departures:'event',Packing:'checklist',Guides:'hiking',Gear:'backpack',Permits:'description',Support:'support_agent',Vendors:'storefront',Community:'forum',Reviews:'reviews',Hosts:'groups',Training:'fitness_center',AI:'smart_toy',Staff:'badge',Settings:'settings'};
const ADM_TABS=['Overview','Bookings','Users','CRM','Payments','Treks','Home','Destinations','Departures','Packing','Guides','Gear','Permits','Support','Vendors','Community','Reviews','Hosts','Training','AI','Staff','Settings'];
/* one-line description per section, shown on the hub card */
const ADM_TAB_DESC={Overview:'Today at a glance',Bookings:'Who has booked',Users:'Travellers & members',CRM:'Customer 360 timeline',AI:'Automated messages & rules',Payments:'Transactions, refunds & payouts',Treks:'Add & edit treks, prices, tags',
  Home:'Featured trek & popular rail',Departures:'Batch dates & seats',Packing:'Per-trek packing lists',
  Guides:'Your trek leaders',Gear:'Rental inventory & status',Permits:'Forest & park permit requests',Support:'Customer chats & tickets',Vendors:'Partner operators & listings',Community:'Moderate posts',Reviews:'Add & manage reviews',Hosts:'Applications & host trips',Training:'Who is training',
  Staff:'Team roles & captains',Settings:'App build & admin'};
/* Was a horizontally-SWIPED tab strip — sections off the right edge were invisible and
   the gesture read as flaky. Now a card GRID: tap a card to open that section behind a
   back header, tap back to return to the grid. */
function renderAdmin(){
  const f=document.getElementById('adminForm'); if(f){f.style.display='none';f.innerHTML='';}
  const bar=document.getElementById('adminTabs');
  if(_admHub){
    if(bar)bar.innerHTML='';
    renderAdminHub();
    return;
  }
  if(bar)bar.innerHTML='<button class="adm-secbar" onclick="adminHub()">'
    +'<span class="msr adm-secback">arrow_back</span>'
    +'<span class="msr adm-secic">'+(ADM_TAB_IC[adminTab]||'circle')+'</span>'
    +'<b>'+esc(adminTab)+'</b><span class="adm-secall">All sections</span></button>';
  if(adminTab==='Overview')renderAdminOverview();
  else if(adminTab==='Training')renderAdminTraining();
  else if(adminTab==='Bookings')renderAdminBookings();
  else if(adminTab==='Users')renderAdminUsers();
  else if(adminTab==='Payments')renderAdminPayments();
  else if(adminTab==='CRM')renderAdminCRM();
  else if(adminTab==='AI')renderAdminAI();
  else if(adminTab==='Gear')renderAdminGear();
  else if(adminTab==='Permits')renderAdminPermits();
  else if(adminTab==='Support')renderAdminSupport();
  else if(adminTab==='Vendors')renderAdminVendors();
  else if(adminTab==='Community')renderAdminCommunity();
  else if(adminTab==='Treks')renderAdminTreks();
  else if(adminTab==='Home')renderAdminHome();
  else if(adminTab==='Destinations')renderAdminDestinations();
  else if(adminTab==='Departures')renderDepartures();
  else if(adminTab==='Packing')renderAdminPacking();
  else if(adminTab==='Guides')renderAdminGuides();
  else if(adminTab==='Reviews')renderAdminReviews();
  else if(adminTab==='Hosts')renderAdminHosts();
  else if(adminTab==='Staff')renderAdminStaff();
  else renderAdminSettings();
}
let _admHubQ='';
/* grouped sidebar structure — cards a role can't access are hidden, empty groups drop out */
const ADM_GROUPS=[
  ['Dashboard',['Overview']],
  ['Bookings',['Bookings']],
  ['Money',['Payments']],
  ['Catalog',['Treks','Destinations','Departures','Packing']],
  ['Gear',['Gear']],
  ['Operations',['Permits','Support','Vendors']],
  ['People',['Users','CRM','Hosts','Guides','Staff']],
  ['Community',['Community','Reviews']],
  ['Growth',['Home','Training']],
  ['System',['AI','Settings']]
];
function filterAdminHub(v){_admHubQ=(v||'').toLowerCase();paintAdminHub();}
function paintAdminHub(){
  const wrap=document.getElementById('admHubGroups');if(!wrap)return;
  const q=_admHubQ;
  const card=name=>'<button class="adm-hubcard" onclick="openAdminTab(\''+jsq(name)+'\')">'
    +'<span class="adm-hubic"><span class="msr">'+(ADM_TAB_IC[name]||'circle')+'</span></span>'
    +'<b>'+esc(name)+'</b><small>'+esc(ADM_TAB_DESC[name]||'')+'</small></button>';
  let html='';
  ADM_GROUPS.forEach(function(grp){
    const show=grp[1].filter(t=>roleCanTab(t)&&(!q||t.toLowerCase().includes(q)||String(ADM_TAB_DESC[t]||'').toLowerCase().includes(q)));
    if(!show.length)return;
    html+='<div class="adm-grp-h">'+esc(grp[0])+'</div><div class="adm-hub">'+show.map(card).join('')+'</div>';
  });
  wrap.innerHTML=html||'<div class="empty" style="padding:20px"><p>No section matches “'+esc(_admHubQ)+'”.</p></div>';
  hydrate(wrap);
}
function renderAdminHub(){
  const box=document.getElementById('adminBody');if(!box)return;
  const r=currentAdminRole();
  box.innerHTML=
    '<div class="adm-rolebar"><span class="msr">'+(r==='super'?'shield_person':'badge')+'</span>'
    +'<div><b>'+esc(ROLE_LABEL[r]||'Admin')+'</b><small>'+(r==='super'?'Full platform access':'You see the tools for your role')+'</small></div></div>'
    +'<div class="adm-search" style="margin:0 0 12px"><span class="msr">search</span>'
    +'<input placeholder="Search admin sections…" value="'+esc(_admHubQ)+'" oninput="filterAdminHub(this.value)"></div>'
    +'<div id="admHubGroups"></div>';
  paintAdminHub();
  hydrate(box);
}
function openAdminTab(t){
  if(!roleCanTab(t)){note('Your role doesn’t have access to '+t+'.','Restricted');return;}
  adminTab=t;_admHub=false;renderAdmin();
  const el=document.getElementById('admin');if(el)el.scrollTop=0;}
function adminHub(){_admHub=true;const box=document.getElementById('adminBody');if(box)box.innerHTML='';renderAdmin();
  const el=document.getElementById('admin');if(el)el.scrollTop=0;}
/* the top-bar back arrow: leave the current section for the hub, or leave admin from the hub */
function adminBack(){ if(!_admHub)adminHub(); else back(); }
/* ============================================================
   ADMIN · OVERVIEW — one console that answers "what needs me today?"
   Everything here is a count plus a jump; the detail lives in its own tab.
   ============================================================ */
let _ovCache=null;
/* lightweight, dependency-free charts (no external lib — CSP/offline safe) */
function dashVBars(labels,values,fmt){
  const max=Math.max(1,...values);
  return '<div class="dash-vbars">'+values.map((v,i)=>
    '<div class="dvb" title="'+esc(String(labels[i])+': '+(fmt?fmt(v):String(v)))+'">'
    +'<span class="dvb-bar" style="height:'+Math.round(3+(v/max)*97)+'%"></span>'
    +'<small>'+esc(String(labels[i]))+'</small></div>').join('')+'</div>';
}
function dashHBars(items,fmt){
  if(!items||!items.length)return '<div class="adm-hint">No bookings yet.</div>';
  const max=Math.max(1,...items.map(x=>x[1]));
  return '<div class="dash-hbars">'+items.map(x=>
    '<div class="dhb"><span class="dhb-l">'+esc(String(x[0]))+'</span>'
    +'<span class="dhb-track"><span class="dhb-bar" style="width:'+Math.max(5,Math.round((x[1]/max)*100))+'%"></span></span>'
    +'<span class="dhb-v">'+esc(fmt?fmt(x[1]):String(x[1]))+'</span></div>').join('')+'</div>';
}
async function renderAdminOverview(){
  const box=document.getElementById('adminBody');if(!box)return;
  const liveTreks=treks.filter(t=>!t.soon).length;
  const paint=d=>{
    const nn=v=>v==null?'—':v, money=v=>v==null?'—':INR(v);
    const kc=(icon,val,label,cls)=>`<div class="dash-kpi ${cls||''}"><span class="dash-kpi-ic msr">${icon}</span><b>${val}</b><small>${label}</small></div>`;
    const act=(label,sub,tab,badge)=>`<div class="adm-act" onclick="setAdminTab('${tab}')"><div class="adm-act-ic"><span class="msr">${ADM_TAB_IC[tab]||'circle'}</span></div><div class="adm-act-tx"><b>${label}${badge?`<span class="adm-pill">${badge}</span>`:''}</b><small>${sub}</small></div><span class="msr adm-act-ch">chevron_right</span></div>`;
    box.innerHTML=
      `<div class="adm-sec" style="margin-top:2px">Today</div>
       <div class="dash-kgrid">
         ${kc('payments',money(d.todayRev),'Today\'s revenue','g')}
         ${kc('confirmation_number',nn(d.todayBookings),'Today\'s bookings')}
       </div>
       <div class="adm-sec">Money</div>
       <div class="dash-kgrid">
         ${kc('account_balance_wallet',money(d.revenue),'Revenue collected','g')}
         ${kc('receipt_long',money(d.value),'Booking value')}
         ${kc('percent',d.cancelRate==null?'—':d.cancelRate+'%','Cancellation rate')}
         ${kc('assignment_return',nn(d.pendingRefunds),'Pending refunds',d.pendingRefunds?'warn':'')}
       </div>
       <div class="adm-sec">Bookings & departures</div>
       <div class="dash-kgrid">
         ${kc('confirmation_number',nn(d.bookings),'Total bookings')}
         ${kc('groups',nn(d.pax),'Trekkers')}
         ${kc('landscape',liveTreks,'Active treks')}
         ${kc('event',nn(d.departures),'Departures scheduled')}
       </div>
       <div class="adm-sec">People</div>
       <div class="dash-kgrid">
         ${kc('group',nn(d.users),'Total users')}
         ${kc('person_add',nn(d.newUsers),'New (30 days)','g')}
         ${kc('hiking',nn(d.hosts),'Verified hosts')}
         ${kc('badge',nn(d.captains),'Trek captains')}
         ${kc('verified_user',nn(d.pendingApps),'Pending verifications',d.pendingApps?'warn':'')}
         ${kc('star',nn(d.reviews),'Reviews')}
       </div>
       <div class="adm-sec">Revenue collected · last 14 days</div>
       ${dashVBars(d.trendLabels||[],d.trendRev||[],INR)}
       <div class="adm-sec">Bookings · last 14 days</div>
       ${dashVBars(d.trendLabels||[],d.trendCnt||[])}
       <div class="adm-sec">Popular treks</div>
       ${dashHBars(d.topTreks||[])}
       <div class="adm-sec">Top destinations</div>
       ${dashHBars(d.topDest||[])}
       ${(d.pendingApps||d.draftTrips)?`<div class="adm-sec">Needs your review</div>
         ${d.pendingApps?act('Host applications','Verify & approve hosts','Hosts',d.pendingApps+' pending'):''}
         ${d.draftTrips?act('Host trips to publish','Review & go live','Hosts',d.draftTrips+' draft'+(d.draftTrips>1?'s':'')):''}`:''}
       <div class="adm-hint" style="margin-top:14px">Live command centre · build v${APP_BUILD}</div>`;
    hydrate(box);
  };
  if(_ovCache)paint(_ovCache); else box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  const today=todayISO(0);
  const d={liveTreks,bookings:null,revenue:null,value:null,pax:null,todayRev:null,todayBookings:null,cancelRate:null,pendingRefunds:null,users:null,newUsers:null,hosts:null,captains:null,pendingApps:0,draftTrips:0,reviews:null,departures:null,topTreks:[],topDest:[],trendLabels:[],trendRev:[],trendCnt:[]};
  const sb=getSupaClient();
  try{
    const res=await adminCall('list_bookings');
    if(res&&res.ok){const rows=res.rows||[];
      d.bookings=rows.length;
      d.revenue=rows.reduce((s,b)=>s+(+b.paid||0),0);
      d.value=rows.reduce((s,b)=>s+(+b.total||0),0);
      d.pax=rows.reduce((s,b)=>s+(+b.pax||1),0);
      const cancels=rows.filter(b=>/cancel|refund/i.test(b.status||'')).length;
      d.cancelRate=rows.length?Math.round(cancels/rows.length*100):0;
      d.pendingRefunds=rows.filter(b=>/refund/i.test(b.status||'')).length;
      const todayRows=rows.filter(b=>(b.created_at||'').slice(0,10)===today);
      d.todayRev=todayRows.reduce((s,b)=>s+(+b.paid||0),0);
      d.todayBookings=todayRows.length;
      /* 14-day trends */
      const map={},labels=[];
      for(let i=13;i>=0;i--){const dt=todayISO(-i);map[dt]={r:0,c:0};labels.push(dt.slice(8,10));}
      rows.forEach(b=>{const dt=(b.created_at||'').slice(0,10);if(map[dt]){map[dt].r+=(+b.paid||0);map[dt].c+=1;}});
      d.trendLabels=labels;d.trendRev=[];d.trendCnt=[];
      for(let i=13;i>=0;i--){const dt=todayISO(-i);d.trendRev.push(map[dt].r);d.trendCnt.push(map[dt].c);}
      /* popular treks + destinations */
      const byTrek={},byDest={},reg={};treks.forEach(t=>{reg[t.n]=t.region||'Other';});
      rows.forEach(b=>{const k=(b.trek||'—').replace(' (Activity)','');byTrek[k]=(byTrek[k]||0)+1;const r=reg[k]||'Other';byDest[r]=(byDest[r]||0)+1;});
      d.topTreks=Object.entries(byTrek).sort((a,b)=>b[1]-a[1]).slice(0,5);
      d.topDest=Object.entries(byDest).sort((a,b)=>b[1]-a[1]).slice(0,5);
    }
  }catch(e){}
  if(sb){
    try{const u=await sb.from('profiles').select('*',{count:'exact',head:true});d.users=(u.count!=null?u.count:null);}catch(e){}
    try{const nu=await sb.from('profiles').select('*',{count:'exact',head:true}).gte('created_at',todayISO(-30));d.newUsers=(nu.count!=null?nu.count:null);}catch(e){}
    try{const a=await sb.from('host_applications').select('status');const rows=a.data||[];d.pendingApps=rows.filter(x=>x.status==='pending').length;d.hosts=rows.filter(x=>x.status==='approved').length;}catch(e){}
    try{const t=await sb.from('host_trips').select('status');d.draftTrips=(t.data||[]).filter(x=>x.status==='draft').length;}catch(e){}
    try{const s=await sb.from('staff').select('*',{count:'exact',head:true});d.captains=(s.count!=null?s.count:staffSet.size);}catch(e){d.captains=staffSet.size;}
    try{const r=await sb.from('reviews').select('*',{count:'exact',head:true});d.reviews=(r.count!=null?r.count:(reviewsData?reviewsData.length:0));}catch(e){d.reviews=(reviewsData?reviewsData.length:0);}
    try{const bt=await sb.from('batches').select('*',{count:'exact',head:true});d.departures=(bt.count!=null?bt.count:null);}catch(e){}
  }
  _ovCache=d;
  if(adminTab==='Overview')paint(d);
}

/* ============================================================
   ADMIN · TRAINING — who is actually training, from profiles.training
   ============================================================ */
let _trainRows=null,_trainQ='';
function trainSummary(p){
  if(!p||typeof p!=='object')return null;
  const days=p.days||{};
  const keys=Object.keys(days).filter(k=>Object.keys(days[k]||{}).some(i=>days[k][i]));
  if(!keys.length)return null;
  keys.sort();
  /* streak counted backwards from today over days with ANY completed session */
  let streak=0;const cur=new Date();
  for(;;){const k=planDkey(cur);
    if(keys.indexOf(k)>=0){streak++;cur.setDate(cur.getDate()-1);}else break;}
  return {days:keys.length,streak,last:keys[keys.length-1],trek:p.trek||'',goal:p.goal||0};
}
async function renderAdminTraining(){
  const box=document.getElementById('adminBody');if(!box)return;
  const sb=getSupaClient();
  if(!sb){box.innerHTML='<div class="note2">Connect Supabase to see training activity.</div>';return;}
  if(!_trainRows)box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  if(!_trainRows){
    try{const r=await sb.from('profiles').select('name,username,photo,training').not('training','is',null).limit(500);
      _trainRows=(r.data||[]).map(p=>({name:p.name||'Trekker',username:p.username||'',photo:p.photo||'',s:trainSummary(p.training)}))
        .filter(x=>x.s).sort((a,b)=>b.s.streak-a.s.streak||b.s.days-a.s.days);
    }catch(e){_trainRows=[];}
  }
  if(adminTab!=='Training')return;
  const q=_trainQ.trim().toLowerCase();
  const list=_trainRows.filter(x=>!q||(x.name+' '+x.username).toLowerCase().includes(q));
  const today=planTodayKey();
  box.innerHTML=
    `<div class="adm-kgrid">
      <div class="adm-kpi"><b>${_trainRows.length}</b><small>Training</small></div>
      <div class="adm-kpi"><b>${_trainRows.filter(x=>x.s.last===today).length}</b><small>Active today</small></div>
      <div class="adm-kpi"><b>${_trainRows.filter(x=>x.s.streak>=3).length}</b><small>3+ day streak</small></div>
    </div>
    <div class="adm-search"><span class="msr">search</span><input placeholder="Search trekkers…" value="${esc(_trainQ)}" oninput="_trainQ=this.value;renderAdminTraining()"></div>`
    +(list.length?'<div class="hostlist">'+list.map(x=>
      `<div class="hostcard" onclick="openPerson('${jsq(x.name)}')">
        <div class="vhring sm">${avatar(x.name,52)}</div>
        <div class="hostcard-bd"><b>${esc(x.name)}</b>
          <small>${x.s.trek?'Training for '+esc(x.s.trek):'General fitness'}${x.s.goal?' · goal '+x.s.goal:''}</small>
          <span class="hostcard-trips">${x.s.streak} day streak · ${x.s.days} days done</span></div>
        <span class="adm-train-last">${x.s.last===today?'today':esc(x.s.last)}</span></div>`).join('')+'</div>'
      :`<div class="empty"><p>${q?'No trekkers match.':'Nobody has ticked a workout yet.'}</p></div>`);
  hydrate(box);
}

/* ============================================================
   ADMIN · GUIDES — manage your roster of trek leaders
   ============================================================ */
let _guideEdit=null;   /* the guide being edited, or {} for a new one, or null for the list */
async function renderAdminGuides(){
  const box=document.getElementById('adminBody');if(!box)return;
  if(!guides.length&&!_guidesLoaded)box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  await loadGuides(true);
  if(adminTab!=='Guides')return;
  if(_guideEdit){renderGuideForm(box);return;}
  box.innerHTML=
    `<div class="note2" style="margin-bottom:12px">Your trek leaders. Assign one to a trek in the <b>Treks</b> tab — it shows as “Your trek leader” on the trek page. Only display a certification you can actually verify.</div>`
    +(guides.length?'<div class="hostlist">'+guides.map(admGuideCard).join('')+'</div>'
      :'<div class="empty"><p>No guides yet.</p></div>')
    +'<button class="btn" style="margin-top:14px" onclick="guideNew()"><span class="msr">add</span> Add a guide</button>';
  hydrate(box);
}
function admGuideCard(g){
  const photo=(g.photo||'').trim();
  const certs=guideCerts(g).slice(0,3).join(' · ');
  const uses=treks.filter(t=>String(t.guide_id||'')===String(g.id)).length;
  return '<div class="hostcard" onclick="guideEdit(\''+jsq(String(g.id))+'\')">'
    +'<div class="vhring sm"'+(photo?' style="background-image:url(\''+esc(photo)+'\');background-size:cover;background-position:center;color:transparent"':'')+'>'+(photo?'':esc((String(g.name||'G')[0]||'G').toUpperCase()))+'</div>'
    +'<div class="hostcard-bd"><b>'+esc(g.name||'—')+(g.verified?'<span class="vbadge"><span class="msr">check</span></span>':'')+'</b>'
    +'<small>'+(certs||'No certifications listed')+'</small>'
    +'<span class="hostcard-trips">'+(uses?'Leads '+uses+' trek'+(uses>1?'s':''):'Not assigned yet')+'</span></div>'
    +'<span class="ch" style="transform:scaleX(-1)">'+ic('back',16)+'</span></div>';
}
function guideNew(){_guideEdit={name:'',photo:'',certifications:'',languages:'',years:'',treks_led:'',bio:'',verified:false};renderAdminGuides();}
function guideEdit(id){const g=guideById(id);_guideEdit=g?Object.assign({},g):null;renderAdminGuides();}
function guideCancel(){_guideEdit=null;renderAdminGuides();}
function renderGuideForm(box){
  const g=_guideEdit;const photo=(g.photo||'').trim();
  box.innerHTML=`<div class="adm-editor">
    <div class="adm-ed-head"><b>${g.id?'Edit guide':'Add a guide'}</b><button class="adm-ic" onclick="guideCancel()"><span class="msr">close</span></button></div>
    <div class="adm-sec">Basics</div>
    ${fld('gdName','Full name',g.name,'e.g. Prakash Rana')}
    ${fld('gdPhoto','Photo URL',photo,'https://…')}
    <div class="adm-imgprev" id="gdPhotoPrev" style="${photo?`background-image:url('${esc(photo)}')`:''}"></div>
    <div class="adm-sec">Credentials</div>
    ${fld('gdCerts','Certifications',g.certifications,'AMC, WFR, Wilderness First Aid')}
    <div class="adm-hint">Comma-separated. Shown as badges. Only list what you can verify — an unverified badge is worse than none.</div>
    <div class="adm-row2">${fld('gdYears','Years leading',g.years,'8')}${fld('gdTreks','Treks led',g.treks_led,'120')}</div>
    ${fld('gdLangs','Languages',g.languages,'Hindi, English, Garhwali')}
    <div class="field"><label>Verified guide</label><div class="adm-status">
      <button type="button" class="adm-status-btn ${g.verified?'on':''}" id="gdVerYes" onclick="gdSetVerified(true)">Verified</button>
      <button type="button" class="adm-status-btn ${g.verified?'':'on'}" id="gdVerNo" onclick="gdSetVerified(false)">Not yet</button>
    </div></div>
    <div class="adm-sec">Bio</div>
    <div class="field"><textarea id="gdBio" class="adm-ta" placeholder="A short line about this leader…">${esc(g.bio||'')}</textarea></div>
    <div class="adm-ed-foot">
      ${g.id?'<button class="btn ghost" style="color:#ff7a7a" onclick="guideDelete()"><span class="msr">delete</span> Delete</button>':'<button class="btn ghost" onclick="guideCancel()">Cancel</button>'}
      <button class="btn" onclick="saveGuide()"><span class="msr">check</span> Save guide</button>
    </div></div>`;
  hydrate(box);
  const p=document.getElementById('gdPhoto');
  if(p)p.addEventListener('input',()=>{const pv=document.getElementById('gdPhotoPrev');if(pv)pv.style.backgroundImage=p.value.trim()?`url('${p.value.split('?')[0].replace(/'/g,'%27')}')`:'';});
}
function gdSetVerified(v){_guideEdit.verified=v;
  const y=document.getElementById('gdVerYes'),n=document.getElementById('gdVerNo');
  if(y)y.classList.toggle('on',v);if(n)n.classList.toggle('on',!v);}
async function saveGuide(){
  const v=id=>((document.getElementById(id)||{}).value||'').trim();
  const name=v('gdName');
  if(!name){note('A guide needs a name.','Name required');return;}
  const row={name:name,photo:v('gdPhoto'),certifications:v('gdCerts'),languages:v('gdLangs'),
    years:v('gdYears'),treks_led:v('gdTreks'),bio:v('gdBio'),verified:!!(_guideEdit&&_guideEdit.verified)};
  if(_guideEdit&&_guideEdit.id)row.id=_guideEdit.id;
  const res=await adminCall('save_guide',{guide:row});
  if(!res||!res.ok){note((res&&res.error)||'Could not save the guide.','Save failed');return;}
  _guideEdit=null;await loadGuides(true);renderAdminGuides();
  note('Guide saved ✓');
}
async function guideDelete(){
  const g=_guideEdit;if(!g||!g.id)return;
  const uses=treks.filter(t=>String(t.guide_id||'')===String(g.id)).length;
  if(!(await askConfirm(uses?('This guide leads '+uses+' trek'+(uses>1?'s':'')+'. Deleting removes them from those treks. Continue?'):'Delete this guide?','Delete guide')))return;
  const res=await adminCall('delete_guide',{id:g.id});
  if(!res||!res.ok){note((res&&res.error)||'Could not delete.','Error');return;}
  _guideEdit=null;await loadGuides(true);bustTreksCache();await loadTreks(true);renderAdminGuides();
  note('Guide deleted.');
}

/* ============================================================
   DESTINATIONS — custom places for the Adventure section.
   Stored in the `destinations` table (public read, admin-only write via
   RLS). They merge OVER the built-in DESTS list by id, so an admin can add
   brand-new places or override a built-in one. See SQL-add-destinations.sql.
   ============================================================ */
let _BUILTIN_DESTS=null,_destLoaded=false,_dbDestIds=new Set();
async function loadDestinations(force){
  const sb=getSupaClient();if(!sb){_destLoaded=true;return DESTS;}
  if(_destLoaded&&!force)return DESTS;
  try{
    const r=await sb.from('destinations').select('*').order('sort',{ascending:true});
    if(!r.error&&Array.isArray(r.data))mergeDestinations(r.data);
    _destLoaded=true;
  }catch(e){_destLoaded=true;}
  return DESTS;
}
function mergeDestinations(rows){
  if(!_BUILTIN_DESTS)_BUILTIN_DESTS=DESTS.slice();   /* snapshot the code defaults once */
  const map={};_BUILTIN_DESTS.forEach(d=>{map[d.id]=d;});
  _dbDestIds=new Set();
  (rows||[]).forEach(r=>{
    if(!r||!r.id)return;
    _dbDestIds.add(r.id);
    map[r.id]={id:r.id,n:r.name||r.id,state:r.state||'',img:r.img||'',best:r.best||'',lvl:r.lvl||'',budget:r.budget||'',
      blurb:r.blurb||'',attractions:Array.isArray(r.attractions)?r.attractions:[],tips:Array.isArray(r.tips)?r.tips:[],
      near:Array.isArray(r.near)?r.near:[],soon:!!r.soon};
  });
  DESTS.length=0;Object.keys(map).forEach(k=>DESTS.push(map[k]));
}

/* ---- admin: add / edit / delete destinations ---- */
let _destEdit=null;
async function renderAdminDestinations(){
  const box=document.getElementById('adminBody');if(!box)return;
  if(!_destLoaded)box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  await loadDestinations(true);
  if(adminTab!=='Destinations')return;
  if(_destEdit){renderDestForm(box);return;}
  box.innerHTML=
    '<div class="note2" style="margin-bottom:12px">Places shown in the <b>Adventure</b> section. Add a new destination or edit any existing one. Custom places you add are saved to your database; built-in ones can be overridden here.</div>'
    +(DESTS.length?'<div class="hostlist">'+DESTS.map(admDestCard).join('')+'</div>':'<div class="empty"><p>No destinations yet.</p></div>')
    +'<button class="btn" style="margin-top:14px" onclick="destNew()"><span class="msr">add</span> Add a destination</button>';
  hydrate(box);
}
function admDestCard(d){
  const custom=_dbDestIds.has(d.id);
  const acts=(typeof actsFor==='function')?actsFor(d.id).length:0;
  return '<div class="hostcard" onclick="destEdit(\''+jsq(String(d.id))+'\')">'
    +'<div class="vhring sm"'+(d.img?' style="background-image:url(\''+esc(d.img)+'\');background-size:cover;background-position:center;color:transparent"':'')+'>'+(d.img?'':esc((String(d.n||'D')[0]||'D').toUpperCase()))+'</div>'
    +'<div class="hostcard-bd"><b>'+esc(d.n||'—')+(d.soon?' <span class="adm-tc-soon">Soon</span>':'')+'</b>'
    +'<small>'+esc(d.state||'—')+(acts?' · '+acts+' activity'+(acts>1?'s':''):'')+'</small>'
    +'<span class="hostcard-trips">'+(custom?'Custom':'Built-in')+'</span></div>'
    +'<span class="ch" style="transform:scaleX(-1)">'+ic('back',16)+'</span></div>';
}
function destNew(){_destEdit={id:'',n:'',state:'',img:'',best:'',lvl:'',budget:'',blurb:'',attractions:[],tips:[],near:[],soon:false,_new:true};renderAdminDestinations();}
function destEdit(id){const d=destById(id);_destEdit=d?Object.assign({_new:false},d):null;renderAdminDestinations();}
function destCancel(){_destEdit=null;renderAdminDestinations();}
function dstSetSoon(v){if(_destEdit)_destEdit.soon=v;const no=document.getElementById('dsSoonNo'),ys=document.getElementById('dsSoonYes');if(no)no.classList.toggle('on',!v);if(ys)ys.classList.toggle('on',v);}
function renderDestForm(box){
  const d=_destEdit;const img=(d.img||'').trim();
  const isDb=_dbDestIds.has(d.id);
  const isBuiltin=!!(_BUILTIN_DESTS&&_BUILTIN_DESTS.some(b=>b.id===d.id));
  box.innerHTML=`<div class="adm-editor">
    <div class="adm-ed-head"><b>${d._new?'Add a destination':'Edit destination'}</b><button class="adm-ic" onclick="destCancel()"><span class="msr">close</span></button></div>
    <div class="adm-sec">Basics</div>
    ${fld('dsName','Name',d.n,'e.g. Rishikesh')}
    ${fld('dsState','State / region',d.state,'e.g. Uttarakhand')}
    ${fld('dsImg','Photo URL',img,'https://…')}
    <div class="adm-imgprev" id="dsImgPrev" style="${img?`background-image:url('${esc(img)}')`:''}"></div>
    <div class="adm-hint">Paste a landscape photo URL (Unsplash, Wikimedia, or your own Supabase upload).</div>
    <div class="adm-sec">At a glance</div>
    ${fld('dsBest','Best time',d.best,'e.g. Sep – Jun')}
    ${fld('dsLvl','Level',d.lvl,'e.g. Beginner friendly')}
    ${fld('dsBudget','Avg budget / day',d.budget,'e.g. Rs 2,000 - 5,000 / day')}
    <div class="field"><label>Availability</label><div class="adm-status">
      <button type="button" class="adm-status-btn ${d.soon?'':'on'}" id="dsSoonNo" onclick="dstSetSoon(false)">Live</button>
      <button type="button" class="adm-status-btn ${d.soon?'on':''}" id="dsSoonYes" onclick="dstSetSoon(true)">Coming soon</button>
    </div></div>
    <div class="adm-sec">About</div>
    <div class="field"><textarea id="dsBlurb" class="adm-ta" placeholder="One or two lines about this place…">${esc(d.blurb||'')}</textarea></div>
    <div class="adm-sec">Details</div>
    ${fld('dsAttr','Top attractions',(d.attractions||[]).join(', '),'Laxman Jhula, Triveni Ghat, Neer Waterfall')}
    <div class="adm-hint">Comma-separated.</div>
    <div class="field"><label>Traveller tips</label><textarea id="dsTips" class="adm-ta" placeholder="One tip per line">${esc((d.tips||[]).join('\n'))}</textarea></div>
    <div class="adm-hint">One tip per line.</div>
    ${fld('dsNear','Nearby places',(d.near||[]).join(', '),'Comma-separated destination names')}
    <div class="adm-sec">Road trip packages</div>
    ${d.id?`<div class="adm-hint">Full-package road trips shown highlighted at the top of this destination's page.</div>
      ${toursForDest(d.id).map(t=>`<div class="hostcard" onclick="editTourFromDest('${jsq(String(t._id||t.n))}')"><div class="hostcard-bd"><b>${esc(t.n)}</b><small>${(t.days?esc(String(t.days))+' days · ':'')}${INR(t.price||0)} · ${esc(depLabel(t))}</small></div><span class="ch" style="transform:scaleX(-1)">${ic('back',16)}</span></div>`).join('')||'<div class="adm-hint" style="opacity:.75;margin-top:0">No road trips linked yet.</div>'}
      <button class="btn ghost" style="margin-top:8px" onclick="addTourForDest('${jsq(String(d.id))}')"><span class="msr">add</span> Add a road trip</button>`
      :'<div class="adm-hint">Save this destination first, then you can add road trip packages to it.</div>'}
    <div class="adm-ed-foot">
      ${(!d._new&&isDb)?'<button class="btn ghost" style="color:#ff7a7a" onclick="destDelete()"><span class="msr">'+(isBuiltin?'restart_alt':'delete')+'</span> '+(isBuiltin?'Reset to default':'Delete')+'</button>':'<button class="btn ghost" onclick="destCancel()">Cancel</button>'}
      <button class="btn" onclick="saveDestination()"><span class="msr">check</span> Save destination</button>
    </div></div>`;
  hydrate(box);
  const p=document.getElementById('dsImg');
  if(p)p.addEventListener('input',()=>{const pv=document.getElementById('dsImgPrev');if(pv)pv.style.backgroundImage=p.value.trim()?`url('${normalizeImageUrl(p.value).replace(/'/g,'%27')}')`:'';});
}
async function saveDestination(){
  const v=id=>((document.getElementById(id)||{}).value||'').trim();
  const name=v('dsName');
  if(!name){note('A destination needs a name.','Name required');return;}
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in as admin to save.','Sign in required');return;}
  const csv=s=>String(s||'').split(',').map(x=>x.trim()).filter(Boolean);
  const lines=s=>String(s||'').split('\n').map(x=>x.trim()).filter(Boolean);
  const id=(_destEdit&&_destEdit.id)||slugify(name)||('dest-'+Date.now());
  const row={id:id,name:name,state:v('dsState'),img:normalizeImageUrl(v('dsImg')),best:v('dsBest'),lvl:v('dsLvl'),budget:v('dsBudget'),
    blurb:v('dsBlurb'),attractions:csv(v('dsAttr')),
    tips:lines((document.getElementById('dsTips')||{}).value),near:csv(v('dsNear')),
    soon:!!(_destEdit&&_destEdit.soon)};
  const btn=document.querySelector('.adm-ed-foot .btn:not(.ghost)');if(btn){btn.disabled=true;btn.textContent='Saving…';}
  const r=await sb.from('destinations').upsert(row,{onConflict:'id'}).select('id');
  if(btn){btn.disabled=false;}
  if(r.error){note('Could not save: '+r.error.message,'Save failed');return;}
  if(!r.data||!r.data.length){note('Nothing was saved — make sure you are signed in as the admin.','Not saved');return;}
  _destEdit=null;await loadDestinations(true);renderAdminDestinations();
  try{if(document.querySelector('#dests.active'))renderDests();if(cur==='dest')renderDest();}catch(e){}
  note('Destination saved ✓');
}
async function destDelete(){
  const d=_destEdit;if(!d||!d.id)return;
  const isBuiltin=!!(_BUILTIN_DESTS&&_BUILTIN_DESTS.some(b=>b.id===d.id));
  if(!(await askConfirm(isBuiltin?'Reset this built-in destination to its default? Your custom changes will be removed.':'Delete this destination?',isBuiltin?'Reset destination':'Delete destination')))return;
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in as admin.','Sign in required');return;}
  const r=await sb.from('destinations').delete().eq('id',d.id).select('id');
  if(r.error){note('Could not delete: '+r.error.message,'Error');return;}
  _destEdit=null;await loadDestinations(true);renderAdminDestinations();
  try{if(document.querySelector('#dests.active'))renderDests();if(cur==='dest')renderDest();}catch(e){}
  note(isBuiltin?'Reset to default.':'Destination deleted.');
}

const STAFF_ROLE_OPTS=['captain','operations','finance','content','community'];
async function renderAdminStaff(){
  const box=document.getElementById('adminBody');
  await loadStaff();
  const isSuper=isAdminUser();
  const staff=[...staffSet];
  const roleCtl=e=>{const role=staffRoles[e]||'captain';
    return isSuper
      ? '<select class="adm-role-sel" onchange="setStaffRole(\''+jsq(e)+'\',this.value)">'+STAFF_ROLE_OPTS.map(o=>'<option value="'+o+'"'+(o===role?' selected':'')+'>'+esc(ROLE_LABEL[o]||o)+'</option>').join('')+'</select>'
      : '<span class="adm-role-tag">'+esc(ROLE_LABEL[role]||role)+'</span>';};
  const row=e=>'<div class="staff-row"><span class="ic">'+ic('user',18)+'</span>'
    +'<div class="staff-tx"><b>'+esc(e)+'</b>'+roleCtl(e)+'</div>'
    +(isSuper?'<span class="ic" onclick="removeStaff(\''+jsq(e)+'\')" style="color:#ff7a7a;cursor:pointer">'+ic('close',18)+'</span>':'')+'</div>';
  box.innerHTML=`<div class="note2" style="margin-bottom:12px">Give each team member a <b>role</b> — they only see their own admin tools. <b>Trek Captain</b> = ticket check-in only. <b>Operations / Finance / Content / Community</b> = a scoped admin panel.</div>`+
    (staff.length?staff.map(row).join(''):'<div class="empty" style="padding:14px 0"><p>No team members yet.</p></div>')+
    (isSuper?`<div class="panel" style="margin-top:6px"><b style="display:block;margin-bottom:8px">Add a team member</b>
      <div class="field"><div class="inp"><span class="ic" data-i="mail"></span><input id="staffEmail" type="email" placeholder="name@email.com"></div></div>
      <div class="field"><label>Role</label><div class="inp"><select id="staffRole" style="all:unset;flex:1;color:var(--text)">${STAFF_ROLE_OPTS.map(o=>'<option value="'+o+'" style="color:#000">'+esc(ROLE_LABEL[o]||o)+'</option>').join('')}</select></div></div>
      <button class="btn sm" onclick="addStaff()">Add member</button></div>`:'')+
    `<button class="btn ghost" style="margin-top:14px" onclick="go('captain')"><span class="ic" data-i="ticket"></span> Open ticket check-in / scanner</button>`;
  hydrate(box);
}
async function addStaff(){
  const inp=document.getElementById('staffEmail');const email=(inp.value||'').trim().toLowerCase();
  if(!email||!email.includes('@')){note('Enter a valid email.','Invalid');return;}
  const role=(document.getElementById('staffRole')||{}).value||'captain';
  const sb=getSupaClient();if(!sb){note('Backend not connected.','Error');return;}
  let r=await sb.from('staff').insert({email,role});
  if(r.error&&/role|column/i.test(r.error.message||''))r=await sb.from('staff').insert({email});   /* role column not deployed yet */
  if(r.error){note('Could not add: '+r.error.message,'Error');return;}
  staffSet.add(email);staffRoles[email]=role;note('Team member added ✓');renderAdminStaff();
}
async function setStaffRole(email,role){
  const sb=getSupaClient();if(!sb)return;
  const{error}=await sb.from('staff').update({role}).eq('email',email);
  if(error){note('Could not update role — deploy SQL-add-staff-roles.sql first. ('+error.message+')','Role not saved');return;}
  staffRoles[email]=role;toast(ROLE_LABEL[role]+' role set for '+email);
}
async function removeStaff(email){
  if(!(await askConfirm('Remove '+email+' from the team?','Remove member')))return;
  const sb=getSupaClient();if(!sb)return;
  const{error}=await sb.from('staff').delete().eq('email',email);
  if(error){note('Could not remove: '+error.message,'Error');return;}
  staffSet.delete(email);delete staffRoles[email];note('Removed.');renderAdminStaff();
}
/* ---- admin: per-trek packing editor ---- */
const PK_CATS=['Essentials','Clothing','Gear','Others'];
let pkAdminTrek=null,_pkEdit=null,_pkEditTrek=null;
function loadPkEdit(trekName){
  const data=getPacking(trekName);const out={};
  PK_CATS.forEach(c=>{out[c]=(data[c]||[]).map(it=>Array.isArray(it)?it[1]:String(it));});
  return out;
}
function renderAdminPacking(){
  const box=document.getElementById('adminBody');
  const sel=pkAdminTrek||((treks.find(t=>!t.soon)||treks[0]||{}).n);pkAdminTrek=sel;
  if(!_pkEdit||_pkEditTrek!==sel){_pkEdit=loadPkEdit(sel);_pkEditTrek=sel;}
  box.innerHTML=
    admTrekSelect(sel,"pkAdminTrek=this.value;_pkEdit=null;renderAdminPacking()")+
    `${PK_CATS.map(c=>`
      <div class="adm-sec">${esc(c)}</div>
      <div class="adm-pk-items">${(_pkEdit[c]||[]).map((it,i)=>`<span class="adm-pk-chip">${esc(it)}<button onclick="pkDelItem('${jsq(c)}',${i})" title="Remove"><span class="msr">close</span></button></span>`).join('')||'<span class="adm-pk-empty">No items yet</span>'}</div>
      <div class="adm-pk-add"><input id="pkAdd_${c}" placeholder="Add to ${esc(c)}…" onkeydown="if(event.key==='Enter'){event.preventDefault();pkAddItem('${jsq(c)}');}"><button class="adm-ic" onclick="pkAddItem('${jsq(c)}')" title="Add"><span class="msr">add</span></button></div>
    `).join('')}
    <button class="btn" style="margin-top:16px" onclick="savePackingAdmin()"><span class="msr">check</span> Save packing list</button>
    <div class="adm-hint" style="margin-top:8px">Saves are protected by your Supabase admin login.</div>`;
  hydrate(box);
}
function pkAddItem(cat){const inp=document.getElementById('pkAdd_'+cat);const v=(inp.value||'').trim();if(!v)return;_pkEdit[cat]=_pkEdit[cat]||[];_pkEdit[cat].push(v);renderAdminPacking();}
function pkDelItem(cat,i){_pkEdit[cat].splice(i,1);renderAdminPacking();}
async function savePackingAdmin(){
  const t=treks.find(x=>x.n===pkAdminTrek);if(!t){note('Trek not found.');return;}
  t.packing=_pkEdit;
  if(!sbOn){note('Saved on this device only (Supabase not connected).');return;}
  if(!t._id){note('This trek isn’t in the database yet — save it in the Treks tab first.','Cannot save');return;}
  const ok=await sbWriteChecked('PATCH','treks?id=eq.'+t._id,{packing:_pkEdit});
  if(ok){bustTreksCache();await loadTreks(true);note('Packing list saved for '+pkAdminTrek+' ✓');}
}
let _admBookings=[];
async function renderAdminBookings(){
  const box=document.getElementById('adminBody');
  if(!sbOn){box.innerHTML='<div class="note2">Connect Supabase to see bookings.</div>';return;}
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  if(!_guidesLoaded)loadGuides();   /* captain dropdown needs the guide list */
  const res=await adminCall('list_bookings');
  if(!res||!res.ok){box.innerHTML='<div class="note2">'+esc((res&&res.error)||'Could not load bookings.')+'</div>';return;}
  const rows=res.rows||[];_admBookings=rows;
  if(!rows.length){box.innerHTML='<div class="empty"><p>No bookings yet.</p></div>';return;}
  const total=rows.reduce((s,b)=>s+(Number(b.paid)||0),0);
  const pax=rows.reduce((s,b)=>s+(Number(b.pax)||1),0);
  box.innerHTML=`<div class="adm-stat"><div><b>${rows.length}</b><small>Bookings</small></div><div><b>${pax}</b><small>Trekkers</small></div><div><b>${INR(total)}</b><small>Collected</small></div></div>`
    +`<div class="adm-hint" style="margin:0 2px 10px">Tap a booking for details + actions.</div>`
    +rows.map(admBookingCard).join('');
  hydrate(box);
}
/* a whatsapp-ready number: strip non-digits, add 91 for a bare 10-digit Indian mobile */
function waNumber(p){let d=String(p||'').replace(/\D/g,'');if(d.length===10)d='91'+d;return d;}
function admBookingCard(b){
  const wa=waNumber(b.phone);
  const paid=Number(b.paid)||0, tot=Number(b.total)||0;
  const st=b.checked_in?'Checked in':esc(b.status||'Confirmed');
  const id=jsq(String(b.id||''));
  const batches=getBatches((b.trek||'').replace(' (Activity)',''))||[];
  return `<div class="adm-bk" onclick="this.classList.toggle('open')">
    <div class="adm-bk-top">
      <div class="adm-bk-main"><b>${esc(b.trek||'—')}</b><small>${esc(b.name||'')} · ${esc(b.date||'')} · ${b.pax||1} pax</small></div>
      <div class="adm-bk-rt"><b>${INR(paid)}</b><span class="adm-bk-st ${b.checked_in?'in':''}">${st}</span></div>
      <span class="adm-bk-chev msr">expand_more</span>
    </div>
    <div class="adm-bk-det">
      <div class="adm-bk-row"><span class="msr">call</span>${b.phone?`<a href="tel:${esc(b.phone)}" onclick="event.stopPropagation()">${esc(b.phone)}</a>${wa?`<a class="adm-bk-wa" href="https://wa.me/${esc(wa)}" target="_blank" rel="noopener" onclick="event.stopPropagation()"><span class="msr">chat</span> WhatsApp</a>`:''}`:'<span class="adm-bk-na">No phone</span>'}</div>
      <div class="adm-bk-row"><span class="msr">mail</span>${b.email?`<a href="mailto:${esc(b.email)}" onclick="event.stopPropagation()">${esc(b.email)}</a>`:'<span class="adm-bk-na">No email</span>'}</div>
      <div class="adm-bk-row"><span class="msr">emergency</span><span>Emergency: <b>${esc(b.emergency_name||'—')}</b> · ${esc(b.emergency_phone||'—')}</span></div>
      <div class="adm-bk-row"><span class="msr">payments</span><span>Paid ${INR(paid)}${tot?' of '+INR(tot):''} · <span class="adm-bk-pid">${esc(b.payment_id||b.id||'')}</span></span></div>
      ${b.captain?`<div class="adm-bk-row"><span class="msr">badge</span><span>Captain: <b>${esc(b.captain)}</b></span></div>`:''}
      <div class="adm-bk-ops" onclick="event.stopPropagation()">
        <div class="adm-bk-opsrow"><span class="msr">badge</span><select class="adm-role-sel" onchange="admAssignCaptain('${id}',this.value)"><option value="">Assign captain…</option>${(guides||[]).map(g=>`<option value="${esc(g.name)}" ${b.captain===g.name?'selected':''}>${esc(g.name)}</option>`).join('')}</select></div>
        ${batches.length?`<div class="adm-bk-opsrow"><span class="msr">event</span><select class="adm-role-sel" onchange="admChangeBatch('${id}',this.value)"><option value="${esc(b.date||'')}">${esc(b.date||'Set date')}</option>${batches.filter(x=>x.label!==b.date).map(x=>`<option value="${esc(x.label)}">${esc(x.label)}</option>`).join('')}</select></div>`:''}
        <div class="adm-bk-btns">
          <button onclick="admInvoice('${id}')"><span class="msr">receipt_long</span> Invoice</button>
          <button onclick="admRefund('${id}')"><span class="msr">currency_rupee</span> Refund</button>
          <button class="danger" onclick="admCancelBooking('${id}')"><span class="msr">cancel</span> Cancel</button>
        </div>
      </div>
    </div>
  </div>`;
}
async function admBkUpdate(id,patch,msg){
  const res=await adminCall('update_booking',Object.assign({id},patch));
  if(!res||!res.ok){note((res&&res.error)||'Could not update — redeploy the admin function?','Update failed');return false;}
  const b=_admBookings.find(x=>String(x.id)===String(id));if(b)Object.assign(b,patch);
  if(msg)toast(msg);return true;
}
function admAssignCaptain(id,name){if(!name)return;admBkUpdate(id,{captain:name},'Captain assigned: '+name);}
function admChangeBatch(id,date){if(!date)return;admBkUpdate(id,{date:date},'Batch changed to '+date);}
function _admRerender(){if(adminTab==='Payments')paintPayments();else renderAdminBookings();}
async function admRefund(id){if(!(await askConfirm('Mark this booking as refunded? Process the actual refund in Razorpay too.','Refund booking')))return;if(await admBkUpdate(id,{status:'Refunded'},'Marked refunded'))_admRerender();}
async function admCancelBooking(id){if(!(await askConfirm('Cancel this booking?','Cancel booking')))return;if(await admBkUpdate(id,{status:'Cancelled'},'Booking cancelled'))_admRerender();}
/* client-side invoice (offline, no backend) — downloads a printable HTML invoice */
function admInvoice(id){
  const b=_admBookings.find(x=>String(x.id)===String(id));if(!b){note('Booking not found.','Error');return;}
  const paid=Number(b.paid)||0,tot=Number(b.total)||0,bal=Math.max(0,tot-paid);
  const row=(l,v)=>'<tr><td style="padding:7px 0;color:#667">'+l+'</td><td style="padding:7px 0;text-align:right;font-weight:600">'+v+'</td></tr>';
  const html='<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Tripomonk Invoice '+esc(String(b.id))+'</title>'
    +'<style>body{font-family:system-ui,Segoe UI,Arial,sans-serif;color:#0a1626;max-width:640px;margin:24px auto;padding:0 20px;line-height:1.5}'
    +'h1{color:#2f6bff;margin:0;font-size:24px}.hd{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #eef;padding-bottom:14px;margin-bottom:16px}'
    +'.muted{color:#778;font-size:13px}table{width:100%;border-collapse:collapse;font-size:14px}.tot td{border-top:2px solid #eef;padding-top:12px;font-size:16px}'
    +'.pill{display:inline-block;padding:3px 10px;border-radius:999px;background:#eaf1ff;color:#2f6bff;font-size:12px;font-weight:700}@media print{body{margin:0}}</style></head><body>'
    +'<div class="hd"><div><h1>Tripomonk</h1><div class="muted">Tripomonk Travel Pvt. Ltd. · Uttarakhand, India</div></div>'
    +'<div style="text-align:right"><b>INVOICE</b><div class="muted">'+esc(String(b.id))+'</div><div class="muted">'+esc((b.created_at||'').slice(0,10))+'</div></div></div>'
    +'<p><b>Billed to:</b> '+esc(b.name||'—')+(b.email?' · '+esc(b.email):'')+(b.phone?' · '+esc(b.phone):'')+'</p>'
    +'<table>'
    +row('Trek / trip',esc(b.trek||'—'))
    +row('Date',esc(b.date||'—'))
    +row('Trekkers',String(b.pax||1))
    +(b.captain?row('Trek captain',esc(b.captain)):'')
    +row('Status','<span class="pill">'+esc(b.status||'Confirmed')+'</span>')
    +'</table><br>'
    +'<table>'
    +row('Total booking value',INR(tot))
    +row('Paid',INR(paid))
    +'<tr class="tot"><td>Balance due</td><td style="text-align:right">'+INR(bal)+'</td></tr>'
    +'</table>'
    +'<p class="muted" style="margin-top:22px">Payments processed securely via Razorpay. This is a computer-generated invoice. For GST or support, contact Tripomonk.</p>'
    +'<p class="muted" style="margin-top:6px">Payment ID: '+esc(b.payment_id||b.id||'—')+'</p>'
    +'</body></html>';
  try{const blob=new Blob([html],{type:'text/html'});const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='Tripomonk-Invoice-'+String(b.id).replace(/[^a-zA-Z0-9]/g,'').slice(-10)+'.html';
    document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);
    toast('Invoice downloaded');}catch(e){note('Could not create the invoice.','Error');}
}
/* ---- Admin · Users (travellers & members) ---- */
let _usersRows=null,_usersQ='';
async function renderAdminUsers(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="adm-search" style="margin:2px 0 12px"><span class="msr">search</span><input placeholder="Search by name or @username…" value="'+esc(_usersQ)+'" oninput="_usersQ=this.value;paintUsers()"></div><div id="admUsersList"><div class="skel skel-card"></div><div class="skel skel-card"></div></div>';
  const sb=getSupaClient();
  if(!sb){document.getElementById('admUsersList').innerHTML='<div class="note2">Connect Supabase to see users.</div>';return;}
  /* profiles has no created_at column — select only real columns. Supabase returns an
     {error} (it does NOT throw), so check it explicitly rather than relying on catch. */
  const{data,error}=await sb.from('profiles').select('name,username,photo,is_host').order('name',{ascending:true}).limit(500);
  _usersRows=(!error&&Array.isArray(data))?data:[];
  paintUsers();
}
function paintUsers(){
  const el=document.getElementById('admUsersList');if(!el||!_usersRows)return;
  const q=_usersQ.trim().toLowerCase();
  const rows=_usersRows.filter(u=>u&&u.name&&(!q||(u.name+' '+(u.username||'')).toLowerCase().includes(q)));
  const joined=d=>{try{return d?new Date(d).toLocaleDateString('en-IN',{month:'short',year:'numeric'}):'';}catch(e){return '';}};
  el.innerHTML='<div class="adm-hint" style="margin:0 2px 8px">'+rows.length+' member'+(rows.length!==1?'s':'')+'</div>'
    +(rows.length?rows.map(u=>{const nm=jsq(u.name);
      return '<div class="usr-row"><div class="usr-av" onclick="openPerson(\''+nm+'\')">'+avatar(u.name,42)+'</div>'
        +'<div class="usr-tx" onclick="openPerson(\''+nm+'\')"><b>'+esc(properName(u.name))+(u.is_host?' <span class="msr" style="font-size:13px;color:var(--accent2);vertical-align:-2px">verified</span>':'')+'</b><small>'+(u.username?'@'+esc(u.username):'')+(u.created_at?' · joined '+esc(joined(u.created_at)):'')+'</small></div>'
        +'<button class="usr-act" onclick="openUserActivity(\''+nm+'\')" title="View activity"><span class="msr">insights</span></button>'
        +'<button class="usr-act" onclick="admNotifyUser(\''+nm+'\')" title="Send a notification"><span class="msr">notifications</span></button></div>';
    }).join(''):'<div class="empty"><p>No users found.</p></div>');
  hydrate(el);
}
/* ---- per-user behaviour (Admin → Users → activity icon) ---- */
const SCREEN_LABELS={home:'Home',explore:'Explore treks',search:'Search',community:'Community',feed:'Community feed',bookings:'My Bookings',profile:'Profile',account:'Account & security',messages:'Messages',chat:'Chat',detail:'Trek details',trip:'Road trip',itinerary:'Itinerary',selectDate:'Choose dates',travellers:'Traveller details',review:'Booking review',payment:'Payment',person:'A profile',peopleSearch:'Find trekkers',notifications:'Notifications',wishlist:'Wishlist',health:'Trek Health',navmap:'Navigation',admin:'Admin',reviews:'Reviews',passport:'Trek Passport',onboarding:'Preferences',help:'Help & Support',followList:'Followers / Following',person:'A profile',trainingPlan:'Training plan'};
function screenLabel(s){return SCREEN_LABELS[s]||(s?properName(String(s).replace(/([A-Z])/g,' $1')):'App');}
const EVENT_META={login:['Signed in','login'],view_trek:['Viewed a trek','landscape'],booking:['Made a booking','receipt_long'],message:['Sent a message','chat_bubble'],post:['Created a post','add_box'],follow:['Followed someone','person_add'],story_view:['Watched a story','play_circle']};
function actIcon(r){if(r&&r.event){const m=EVENT_META[r.event];return m?m[1]:'bolt';}return 'visibility';}
function actLabel(r){
  if(!r.event)return 'Viewed '+screenLabel(r.screen);
  const m=EVENT_META[r.event],meta=r.meta||{};
  if(r.event==='view_trek'&&meta.trek)return 'Viewed trek — '+meta.trek;
  if(r.event==='booking')return 'Booked '+(meta.trek||'a trek')+(meta.amount?' · ₹'+meta.amount:'');
  if(r.event==='message'&&meta.to)return 'Messaged '+properName(meta.to);
  if(r.event==='follow'&&meta.name)return 'Followed '+properName(meta.name);
  if(r.event==='story_view'&&meta.who)return 'Watched '+properName(meta.who)+'’s story';
  return m?m[0]:properName(String(r.event).replace(/_/g,' '));
}
let _uaName='';
function openUserActivity(n){_uaName=n;go('userActivity');}
async function renderUserActivity(){
  const box=document.getElementById('userActivityBody'),head=document.getElementById('uaHead');
  if(!box)return;
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  if(head)head.innerHTML=avatar(_uaName,52)+'<div class="ua-id"><b>'+esc(properName(_uaName))+'</b><small id="uaSub">Loading…</small></div>';
  const sb=getSupaClient();const uid=await uidForName(_uaName);
  const setSub=t=>{const s=document.getElementById('uaSub');if(s)s.textContent=t;};
  if(!sb||!uid){box.innerHTML='<div class="ss-empty"><span class="msr">insights</span><b>No activity yet</b><p>This user hasn’t been seen since analytics were enabled.</p></div>';setSub('No data');return;}
  let rows=[],qerr=null;
  try{const{data,error}=await sb.from('app_events').select('screen,event,seconds,session_id,created_at,meta').eq('user_id',uid).order('created_at',{ascending:false}).limit(400);qerr=error;rows=data||[];}catch(e){}
  if(qerr){box.innerHTML='<div class="note2">Behaviour tracking isn’t enabled yet — run <b>SQL-add-user-analytics.sql</b> in Supabase, then reopen.</div>';setSub('Not enabled');return;}
  if(!rows.length){box.innerHTML='<div class="ss-empty"><span class="msr">insights</span><b>No activity yet</b><p>Once '+esc(properName(_uaName))+' uses the app, their screens & actions appear here.</p></div>';setSub('No activity yet');return;}
  const last=rows[0].created_at;
  const sessions=new Set(rows.map(r=>r.session_id)).size;
  const screens=rows.filter(r=>!r.event&&r.screen);
  const totalSec=rows.reduce((a,r)=>a+(+r.seconds||0),0);
  const byScreen={};screens.forEach(r=>{byScreen[r.screen]=(byScreen[r.screen]||0)+(+r.seconds||0);});
  const top=Object.entries(byScreen).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const maxSec=top.length?top[0][1]:1;
  const fmt=s=>s>=3600?Math.round(s/3600)+'h':s>=60?Math.round(s/60)+'m':(s||0)+'s';
  setSub('Active '+timeAgo(last));
  box.innerHTML=
    '<div class="ua-stats">'
    +'<div class="ua-stat"><b>'+esc(timeAgo(last).replace(/ ago$/,''))+'</b><small>Last active</small></div>'
    +'<div class="ua-stat"><b>'+sessions+'</b><small>Sessions</small></div>'
    +'<div class="ua-stat"><b>'+screens.length+'</b><small>Screens</small></div>'
    +'<div class="ua-stat"><b>'+fmt(totalSec)+'</b><small>Time</small></div></div>'
    +'<div class="adm-sec">Most-used screens</div>'
    +(top.length?top.map(e=>'<div class="ua-bar"><div class="ua-bar-l"><span>'+esc(screenLabel(e[0]))+'</span><b>'+fmt(e[1])+'</b></div><div class="ua-bar-t"><i style="width:'+Math.max(4,Math.round(e[1]/maxSec*100))+'%"></i></div></div>').join(''):'<div class="adm-hint">No screen data.</div>')
    +'<div class="adm-sec">Recent activity</div>'
    +rows.slice(0,50).map(r=>'<div class="ua-ev"><span class="msr">'+actIcon(r)+'</span><div class="ua-ev-tx"><b>'+esc(actLabel(r))+'</b><small>'+esc(timeAgo(r.created_at))+(r.seconds?' · '+fmt(r.seconds):'')+'</small></div></div>').join('');
  hydrate(box);
}
async function admNotifyUser(name){
  const msg=await askCode('Message '+properName(name),{placeholder:'Your message — they get a notification'});
  if(!msg||!msg.trim())return;
  try{const uid=await uidForName(name);await pushNotif({recipientId:uid,recipientName:uid?null:name,type:'admin',preview:msg.trim().slice(0,140)});toast('Sent to '+properName(name));}
  catch(e){note('Could not send the notification.','Error');}
}
/* ---- Admin · Payments (transactions, refunds, host payouts, reports) ---- */
let _payFilter='All',_payHostMap={};
function payStatus(b){const s=(b.status||'').toLowerCase();if(/refund/.test(s))return 'refunded';if(/cancel/.test(s))return 'cancelled';return 'paid';}
function downloadText(text,filename,mime){
  try{const blob=new Blob([text],{type:mime||'text/plain'});const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),5000);toast('Downloaded');}catch(e){note('Could not export.','Error');}
}
function csvEsc(s){return '"'+String(s==null?'':s).replace(/"/g,'""')+'"';}
async function renderAdminPayments(){
  const box=document.getElementById('adminBody');if(!box)return;
  if(!sbOn){box.innerHTML='<div class="note2">Connect Supabase to see payments.</div>';return;}
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  const res=await adminCall('list_bookings');
  if(!res||!res.ok){box.innerHTML='<div class="note2">'+esc((res&&res.error)||'Could not load payments.')+'</div>';return;}
  _admBookings=res.rows||[];
  const sb=getSupaClient();
  try{const ht=await sb.from('host_trips').select('title,host_name');_payHostMap={};(ht.data||[]).forEach(t=>{if(t.title)_payHostMap[t.title]=t.host_name||'Host';});}catch(e){_payHostMap={};}
  paintPayments();
}
function paintPayments(){
  const box=document.getElementById('adminBody');if(!box||adminTab!=='Payments')return;
  const rows=_admBookings||[];
  const collected=rows.reduce((s,b)=>s+(+b.paid||0),0);
  const refunded=rows.filter(b=>payStatus(b)==='refunded');
  const refundAmt=refunded.reduce((s,b)=>s+(+b.paid||0),0);
  const shown=rows.filter(b=>_payFilter==='All'||payStatus(b)===_payFilter.toLowerCase());
  const chip=l=>'<button class="pay-chip'+(_payFilter===l?' on':'')+'" onclick="admPayFilter(\''+l+'\')">'+l+'</button>';
  const kpi=(v,l,cls)=>'<div class="dash-kpi '+(cls||'')+'"><b>'+v+'</b><small>'+l+'</small></div>';
  box.innerHTML=
    '<div class="dash-kgrid">'
      +kpi(INR(collected),'Collected','g')+kpi(rows.length,'Transactions')
      +kpi(INR(refundAmt),'Refunded',refundAmt?'warn':'')+kpi(refunded.length,'Refund count')
    +'</div>'
    +'<div class="adm-bk-btns" style="margin:2px 0 12px"><button onclick="admExportCSV()"><span class="msr">download</span> Transactions CSV</button><button onclick="admRevenueCSV()"><span class="msr">summarize</span> Monthly revenue CSV</button></div>'
    +'<div class="pay-chips">'+['All','Paid','Refunded','Cancelled'].map(chip).join('')+'</div>'
    +(shown.length?shown.map(payRow).join(''):'<div class="empty"><p>No transactions in this filter.</p></div>')
    +admPayoutsHTML();
  hydrate(box);
}
function payRow(b){
  const st=payStatus(b),id=jsq(String(b.id||''));
  const stLabel={paid:'Paid',refunded:'Refunded',cancelled:'Cancelled'}[st];
  return '<div class="pay-row"><div class="pay-main"><b>'+esc(b.name||'—')+'</b><small>'+esc(b.trek||'')+' · '+esc((b.created_at||'').slice(0,10)||b.date||'')+'</small><span class="pay-pid">'+esc(b.payment_id||b.id||'')+'</span></div>'
    +'<div class="pay-rt"><b>'+INR(+b.paid||0)+'</b><span class="pay-st '+st+'">'+stLabel+'</span>'
    +'<div class="pay-acts"><button onclick="admInvoice(\''+id+'\')" title="Invoice"><span class="msr">receipt_long</span></button>'+(st==='paid'?'<button onclick="admRefund(\''+id+'\')" title="Refund"><span class="msr">currency_rupee</span></button>':'')+'</div></div></div>';
}
function admPayFilter(f){_payFilter=f;paintPayments();}
function admExportCSV(){
  const rows=_admBookings||[];
  const head=['Payment ID','Name','Trek','Date','Pax','Total','Paid','Status','Created'];
  const lines=[head.map(csvEsc).join(',')].concat(rows.map(b=>[b.payment_id||b.id,b.name,b.trek,b.date,b.pax,b.total,b.paid,b.status,(b.created_at||'').slice(0,10)].map(csvEsc).join(',')));
  downloadText(lines.join('\r\n'),'Tripomonk-transactions-'+todayISO(0)+'.csv','text/csv');
}
function admRevenueCSV(){
  const rows=_admBookings||[],by={};
  rows.forEach(b=>{const m=(b.created_at||'').slice(0,7)||'—';if(!by[m])by[m]={paid:0,total:0,n:0};by[m].paid+=(+b.paid||0);by[m].total+=(+b.total||0);by[m].n++;});
  const head=['Month','Bookings','Collected','Booking value'];
  const lines=[head.map(csvEsc).join(',')].concat(Object.keys(by).sort().map(m=>[m,by[m].n,by[m].paid,by[m].total].map(csvEsc).join(',')));
  downloadText(lines.join('\r\n'),'Tripomonk-revenue-'+todayISO(0)+'.csv','text/csv');
}
function admPayoutsHTML(){
  const by={};(_admBookings||[]).forEach(b=>{const h=_payHostMap[b.trek];if(!h||payStatus(b)!=='paid')return;if(!by[h])by[h]={gross:0,n:0};by[h].gross+=(+b.paid||0);by[h].n++;});
  const hosts=Object.entries(by).sort((a,b)=>b[1].gross-a[1].gross);
  if(!hosts.length)return '<div class="adm-sec">Host payouts</div><div class="adm-hint">No host-trip bookings matched yet. Payouts show here once a host has paid bookings. Host share = 90% of profit after operating cost (per the host commission model).</div>';
  return '<div class="adm-sec">Host payouts (estimated)</div>'
    +'<div class="adm-hint" style="margin:0 2px 8px">Gross collected on each host\'s trips. Net payout = 90% of profit after operating cost — settle manually from here.</div>'
    +hosts.map(h=>'<div class="pay-row"><div class="pay-main"><b>'+esc(h[0])+'</b><small>'+h[1].n+' paid booking'+(h[1].n!==1?'s':'')+'</small></div><div class="pay-rt"><b>'+INR(h[1].gross)+'</b><span class="pay-st paid">≈ '+INR(Math.round(h[1].gross*0.9))+' share</span></div></div>').join('');
}
/* ---- Admin · Gear inventory (localStorage-backed; syncs to gear_inventory when deployed) ---- */
let _gearInv=null;
function gearInvLocal(){try{return JSON.parse(localStorage.getItem('tmk_gear_inv')||'null');}catch(e){return null;}}
function gearInvSaveLocal(a){try{localStorage.setItem('tmk_gear_inv',JSON.stringify(a||[]));}catch(e){}}
function gearAvail(g){return Math.max(0,(+g.total||0)-(+g.rented||0)-(+g.damaged||0)-(+g.maintenance||0));}
async function renderAdminGear(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="skel skel-card"></div>';
  let inv=gearInvLocal();
  const sb=getSupaClient();
  if(sb){try{const{data}=await sb.from('gear_inventory').select('*').order('item');
    if(Array.isArray(data)){inv=data.map(r=>({id:r.id,item:r.item,category:r.category||'',total:+r.total||0,rented:+r.rented||0,damaged:+r.damaged||0,maintenance:+r.maintenance||0}));gearInvSaveLocal(inv);}}catch(e){}}
  _gearInv=inv||[];
  paintGear();
}
function paintGear(){
  const box=document.getElementById('adminBody');if(!box||adminTab!=='Gear')return;
  const inv=_gearInv||[];
  const sum=k=>inv.reduce((s,g)=>s+(+g[k]||0),0);
  const avail=inv.reduce((s,g)=>s+gearAvail(g),0),oos=sum('damaged')+sum('maintenance');
  const kpi=(v,l,cls)=>'<div class="dash-kpi '+(cls||'')+'"><b>'+v+'</b><small>'+l+'</small></div>';
  box.innerHTML=
    '<div class="dash-kgrid">'+kpi(sum('total'),'Total units')+kpi(avail,'Available','g')+kpi(sum('rented'),'Rented')+kpi(oos,'Out of service',oos?'warn':'')+'</div>'
    +(inv.length?inv.map(gearRow).join(''):'<div class="empty" style="padding:16px 0"><p>No gear tracked yet — add items or seed from the rental catalog.</p></div>')
    +'<div class="adm-bk-btns" style="margin-top:12px"><button onclick="gearAddItem()"><span class="msr">add</span> Add item</button><button onclick="gearSeed()"><span class="msr">auto_awesome</span> Seed from catalog</button></div>';
  hydrate(box);
}
function gearRow(g){
  const av=gearAvail(g);
  const step=(f,label)=>'<div class="gear-cell"><small>'+label+'</small><div class="gear-step"><button onclick="gearAdj(\''+jsq(g.id)+'\',\''+f+'\',-1)">−</button><b>'+(+g[f]||0)+'</b><button onclick="gearAdj(\''+jsq(g.id)+'\',\''+f+'\',1)">+</button></div></div>';
  return '<div class="gear-item"><div class="gear-h"><b>'+esc(g.item)+'</b><span class="gear-av'+(av<=0?' out':'')+'">'+av+' available</span></div>'
    +'<div class="gear-cells">'+step('total','Total')+step('rented','Rented')+step('damaged','Damaged')+step('maintenance','Service')+'</div>'
    +'<button class="gear-del" onclick="gearDelItem(\''+jsq(g.id)+'\')">Remove item</button></div>';
}
async function gearInvSaveRemote(g){const sb=getSupaClient();if(!sb)return;try{await sb.from('gear_inventory').upsert({id:g.id,item:g.item,category:g.category||'',total:g.total,rented:g.rented,damaged:g.damaged,maintenance:g.maintenance},{onConflict:'id'});}catch(e){}}
function gearAdj(id,field,delta){const g=(_gearInv||[]).find(x=>String(x.id)===String(id));if(!g)return;g[field]=Math.max(0,(+g[field]||0)+delta);gearInvSaveLocal(_gearInv);paintGear();gearInvSaveRemote(g);}
async function gearAddItem(){
  const name=await askCode('Add gear item',{placeholder:'e.g. Trekking Shoes'});if(!name||!name.trim())return;
  const g={id:'g_'+Date.now(),item:name.trim(),category:'',total:0,rented:0,damaged:0,maintenance:0};
  _gearInv=(_gearInv||[]).concat([g]);gearInvSaveLocal(_gearInv);paintGear();gearInvSaveRemote(g);
}
async function gearDelItem(id){if(!(await askConfirm('Remove this item from inventory?','Remove item')))return;
  _gearInv=(_gearInv||[]).filter(x=>String(x.id)!==String(id));gearInvSaveLocal(_gearInv);paintGear();
  const sb=getSupaClient();if(sb)try{await sb.from('gear_inventory').delete().eq('id',id);}catch(e){}}
function gearSeed(){
  const existing=new Set((_gearInv||[]).map(g=>String(g.item).toLowerCase()));
  const add=[];GEAR_CATS.forEach(c=>c.items.forEach(it=>{const nm=it[0];if(!existing.has(nm.toLowerCase()))add.push({id:'g_'+Date.now()+'_'+Math.floor(Math.random()*1e4),item:nm,category:c.cat,total:0,rented:0,damaged:0,maintenance:0});}));
  if(!add.length){toast('Catalog already added');return;}
  _gearInv=(_gearInv||[]).concat(add);gearInvSaveLocal(_gearInv);paintGear();add.forEach(gearInvSaveRemote);toast('Added '+add.length+' items');
}
/* ---- Admin · Community moderation ---- */
let _modPosts=null;
async function renderAdminCommunity(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  const sb=getSupaClient();if(!sb){box.innerHTML='<div class="note2">Connect Supabase to moderate community posts.</div>';return;}
  try{const{data}=await sb.from('community_posts').select('*').order('created_at',{ascending:false}).limit(60);_modPosts=data||[];}catch(e){_modPosts=[];}
  paintMod();
}
function paintMod(){
  const box=document.getElementById('adminBody');if(!box||adminTab!=='Community')return;
  const posts=_modPosts||[];
  box.innerHTML='<div class="adm-hint" style="margin:2px 2px 10px">'+posts.length+' recent post'+(posts.length!==1?'s':'')+' · remove anything inappropriate, or ★ feature the best.</div>'
    +(posts.length?posts.map(modRow).join(''):'<div class="empty"><p>No posts yet.</p></div>');
  hydrate(box);
}
function modRow(p){
  const id=jsq(String(p.id||''));
  const raw=(p.imgs&&p.imgs[0])?(typeof p.imgs[0]==='string'?p.imgs[0]:(p.imgs[0].url||'')):'';
  const feat=!!p.featured;
  return '<div class="mod-row">'
    +(raw?'<div class="mod-thumb" style="background-image:url(\''+esc(normalizeImageUrl(raw))+'\')"></div>':'<div class="mod-thumb noimg"><span class="msr">article</span></div>')
    +'<div class="mod-tx" onclick="openPerson(\''+jsq(p.author_name||'')+'\')"><b>'+esc(properName(p.author_name||'Trekker'))+'</b><small>'+esc((p.txt||'').slice(0,90)||'(photo post)')+'</small></div>'
    +'<div class="mod-acts"><button class="'+(feat?'on':'')+'" onclick="admFeaturePost(\''+id+'\','+(!feat)+')" title="Feature"><span class="msr">'+(feat?'star':'star_border')+'</span></button>'
    +'<button class="danger" onclick="admDeletePost(\''+id+'\')" title="Delete"><span class="msr">delete</span></button></div></div>';
}
async function admDeletePost(id){
  if(!(await askConfirm('Delete this post permanently?','Delete post')))return;
  const res=await adminCall('delete_post',{id});
  if(!res||!res.ok){note((res&&res.error)||'Could not delete — redeploy the admin edge function.','Delete failed');return;}
  _modPosts=(_modPosts||[]).filter(p=>String(p.id)!==String(id));paintMod();toast('Post deleted');
}
async function admFeaturePost(id,on){
  const res=await adminCall('feature_post',{id,featured:on});
  if(!res||!res.ok){note((res&&res.error)||'Could not update — run SQL-add-post-featured.sql + redeploy the admin edge function.','Update failed');return;}
  const p=(_modPosts||[]).find(x=>String(x.id)===String(id));if(p)p.featured=on;paintMod();toast(on?'Featured ★':'Unfeatured');
}
/* ---- Admin · Permits (forest / park / border permit requests) ---- */
let _permApps=null;
async function renderAdminPermits(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  const sb=getSupaClient();if(!sb){box.innerHTML='<div class="note2">Connect Supabase to see permit requests.</div>';return;}
  try{const{data,error}=await sb.from('permit_applications').select('*').order('created_at',{ascending:false}).limit(120);
    if(error)throw error;_permApps=data||[];}
  catch(e){box.innerHTML='<div class="note2">No permit requests table yet — run <b>SQL-add-permits-support.sql</b> to enable this. (Requests will then be captured when travellers tap “Apply”.)</div>';return;}
  paintPermits();
}
function paintPermits(){
  const box=document.getElementById('adminBody');if(!box||adminTab!=='Permits')return;
  const apps=_permApps||[];const pending=apps.filter(a=>(a.status||'pending')==='pending').length;
  box.innerHTML='<div class="adm-hint" style="margin:2px 2px 10px">'+apps.length+' request'+(apps.length!==1?'s':'')+' · '+pending+' pending</div>'
    +(apps.length?apps.map(permAppRow).join(''):'<div class="empty"><p>No permit requests yet.</p></div>');
  hydrate(box);
}
function permAppRow(a){
  const id=jsq(String(a.id));const st=(a.status||'pending');const wa=waNumber(a.phone);
  return '<div class="tk-row"><div class="tk-tx"><b>'+esc(a.permit||'Permit')+(a.trek?' · '+esc(a.trek):'')+'</b>'
    +'<small>'+esc(a.name||'')+' · '+(a.pax||1)+' pax'+(a.dates?' · '+esc(a.dates):'')+(a.nationality?' · '+esc(a.nationality):'')+'</small>'
    +(a.phone?'<span class="tk-links"><a href="tel:'+esc(a.phone)+'">'+esc(a.phone)+'</a>'+(wa?' · <a href="https://wa.me/'+esc(wa)+'" target="_blank" rel="noopener">WhatsApp</a>':'')+'</span>':'')+'</div>'
    +'<div class="tk-rt"><span class="tk-st '+st+'">'+esc(st)+'</span>'
    +(st==='pending'?'<div class="tk-acts"><button class="ok" onclick="permSet(\''+id+'\',\'approved\')">Approve</button><button class="no" onclick="permSet(\''+id+'\',\'rejected\')">Reject</button></div>':'')+'</div></div>';
}
async function permSet(id,status){
  const sb=getSupaClient();if(!sb)return;
  const{error}=await sb.from('permit_applications').update({status}).eq('id',id);
  if(error){note('Could not update: '+error.message,'Error');return;}
  const a=(_permApps||[]).find(x=>String(x.id)===String(id));if(a)a.status=status;paintPermits();toast('Marked '+status);
}
/* ---- Admin · Support (tickets) ---- */
let _tickets=null;
async function renderAdminSupport(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  const sb=getSupaClient();if(!sb){box.innerHTML='<div class="note2">Connect Supabase to see support.</div>';return;}
  await loadSupportUid();               /* so support threads classify correctly */
  try{await loadInbox();}catch(e){}     /* populates _supportNames (customer 'Tripomonk Team' chats) */
  try{const{data,error}=await sb.from('support_tickets').select('*').order('created_at',{ascending:false}).limit(120);
    if(error)throw error;_tickets=data||[];}
  catch(e){_tickets=null;}             /* tickets table not deployed — still show live chats */
  paintSupport();
}
/* customer live chats that came through 'Tripomonk Team' — owner replies via the normal chat */
function liveSupportHTML(){
  const names=_supportNames||[];
  let h='<div class="adm-sec">Live chats'+(names.length?' ('+names.length+')':'')+'</div>';
  if(!_supportUid)return h+'<div class="adm-hint" style="margin:2px 2px 14px">Sign in as the owner once to activate the support inbox — then customer messages to “Tripomonk Team” appear here.</div>';
  if(!names.length)return h+'<div class="adm-hint" style="margin:2px 2px 14px">No customer chats yet. Messages sent to “Tripomonk Team” from the app land here.</div>';
  h+='<div class="adm-hint" style="margin:2px 2px 8px">Customer messages to “Tripomonk Team” — tap to reply.</div><div class="chat-list">';
  h+=names.map(n=>{const msgs=getChat(n)||[];const last=msgs[msgs.length-1]||{};
    const prev=(last.who==='me'?'You: ':'')+(last.txt||'Start a conversation');
    return '<div class="chat-row" onclick="openChat(\''+jsq(n)+'\')">'+avatar(n,46)+'<div class="meta"><b>'+esc(properName(n))+'</b><p>'+esc(prev.slice(0,80))+'</p></div><time>'+esc(last.ts?timeAgo(last.ts):(last.t||''))+'</time></div>';}).join('');
  return h+'</div><div style="height:16px"></div>';
}
function paintSupport(){
  const box=document.getElementById('adminBody');if(!box||adminTab!=='Support')return;
  const t=_tickets;const list=t||[];const open=list.filter(x=>(x.status||'open')!=='resolved').length;
  box.innerHTML=liveSupportHTML()
    +'<div class="adm-sec">Support tickets</div>'
    +(t===null
      ? '<div class="adm-hint" style="margin:2px 2px 10px">No support-tickets table yet — run <b>SQL-add-permits-support.sql</b>. Travellers raise tickets from Help &amp; Support.</div>'
      : '<div class="adm-hint" style="margin:2px 2px 10px">'+list.length+' ticket'+(list.length!==1?'s':'')+' · '+open+' open</div>'
        +(list.length?list.map(ticketRow).join(''):'<div class="empty"><p>No tickets yet.</p></div>'));
  hydrate(box);
}
function ticketRow(t){
  const id=jsq(String(t.id));const st=(t.status||'open');const wa=waNumber(t.phone);
  return '<div class="tk-row"><div class="tk-tx"><b>'+esc(properName(t.name||'Trekker'))+'</b><small>'+esc((t.message||'').slice(0,140))+'</small>'
    +(t.reply?'<small style="color:var(--accent2)">↳ '+esc(t.reply)+'</small>':'')
    +'<span class="tk-links">'+(t.phone?'<a href="tel:'+esc(t.phone)+'">Call</a>':'')+(wa?' · <a href="https://wa.me/'+esc(wa)+'" target="_blank" rel="noopener">WhatsApp</a>':'')+(t.email?' · <a href="mailto:'+esc(t.email)+'">Email</a>':'')+'</span></div>'
    +'<div class="tk-rt"><span class="tk-st '+st+'">'+esc(st)+'</span><div class="tk-acts"><button onclick="ticketReply(\''+id+'\')">Reply</button>'+(st!=='resolved'?'<button class="ok" onclick="ticketResolve(\''+id+'\')">Resolve</button>':'')+'</div></div></div>';
}
async function ticketReply(id){
  const msg=await askCode('Reply to ticket',{placeholder:'Your reply — the user is notified'});if(!msg||!msg.trim())return;
  const sb=getSupaClient();if(!sb)return;
  const t=(_tickets||[]).find(x=>String(x.id)===String(id));
  try{await sb.from('support_tickets').update({reply:msg.trim().slice(0,1000),status:'answered'}).eq('id',id);
    if(t){t.reply=msg.trim();t.status='answered';try{await pushNotif({recipientId:t.user_id,type:'admin',preview:'Support: '+msg.trim().slice(0,120)});}catch(e){}}
    paintSupport();toast('Reply sent');}catch(e){note('Could not send: '+((e&&e.message)||e),'Error');}
}
async function ticketResolve(id){const sb=getSupaClient();if(!sb)return;
  try{await sb.from('support_tickets').update({status:'resolved'}).eq('id',id);const t=(_tickets||[]).find(x=>String(x.id)===String(id));if(t)t.status='resolved';paintSupport();toast('Resolved');}catch(e){}}
/* user-facing: raise a support ticket from Help */
async function raiseTicket(){
  if(!isLoggedIn()){note('Please sign in to raise a ticket.','Sign in required').then(()=>{_loginReturn='help';go('login');});return;}
  const msg=await askCode('Raise a support ticket',{placeholder:'Describe your issue…'});
  if(!msg||!msg.trim())return;
  const sb=getSupaClient();if(!sb){note('Support is unavailable offline — please WhatsApp us.','Offline');return;}
  try{const uid=await authUid();
    const{error}=await sb.from('support_tickets').insert({user_id:uid,name:getSavedName()||'',email:getUserEmail()||'',phone:getSavedMobile()||'',message:msg.trim().slice(0,1000),status:'open'});
    if(error)throw error;
    note('Ticket raised! Our team will get back to you soon. You can also reach us on WhatsApp for anything urgent.','Ticket raised ✓');}
  catch(e){note('Could not raise the ticket right now. Please WhatsApp us instead.','Try WhatsApp');}
}
/* ---- Admin · CRM (customer 360 timeline, aggregates existing data) ---- */
let _crmQ='';
async function renderAdminCRM(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="adm-search" style="margin:2px 0 12px"><span class="msr">search</span><input placeholder="Search a customer by name…" value="'+esc(_crmQ)+'" oninput="crmSearch(this.value)"></div><div id="crmBody"></div>';
  if(!_usersRows){const sb=getSupaClient();if(sb){const{data,error}=await sb.from('profiles').select('name,username,is_host').limit(500);_usersRows=(!error&&Array.isArray(data))?data:[];}}
  crmSearch(_crmQ);hydrate(box);
}
function crmSearch(q){
  _crmQ=q;const el=document.getElementById('crmBody');if(!el)return;
  const ql=(q||'').trim().toLowerCase();
  if(ql.length<2){el.innerHTML='<div class="adm-hint">Type a name to open a customer’s full timeline — bookings, payments, tickets, reviews, posts &amp; fitness.</div>';return;}
  const matches=(_usersRows||[]).filter(u=>u.name&&u.name.toLowerCase().includes(ql)).slice(0,8);
  el.innerHTML=matches.length?matches.map(u=>{const nm=jsq(u.name);
    return '<div class="usr-row" onclick="crmOpen(\''+nm+'\')"><div class="usr-av">'+avatar(u.name,40)+'</div><div class="usr-tx"><b>'+esc(properName(u.name))+'</b><small>'+(u.username?'@'+esc(u.username):'')+'</small></div><span class="usr-act"><span class="msr">arrow_forward</span></span></div>';}).join(''):'<div class="empty"><p>No customer found.</p></div>';
  hydrate(el);
}
async function crmOpen(name){
  const el=document.getElementById('crmBody');if(!el)return;
  el.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  const sb=getSupaClient();const nl=name.toLowerCase();
  let bookings=[],tickets=[],reviews=[],posts=[],prof=null;
  try{const res=await adminCall('list_bookings');if(res&&res.ok)bookings=(res.rows||[]).filter(b=>String(b.name||'').toLowerCase()===nl);}catch(e){}
  if(sb){
    try{const{data}=await sb.from('profiles').select('*').ilike('name',name).limit(1);prof=(data&&data[0])||null;}catch(e){}
    try{const{data}=await sb.from('support_tickets').select('*').ilike('name',name).order('created_at',{ascending:false}).limit(20);tickets=data||[];}catch(e){}
    try{const{data}=await sb.from('reviews').select('*').ilike('author',name).limit(20);reviews=data||[];}catch(e){}
    try{const{data}=await sb.from('community_posts').select('id,txt,created_at').ilike('author_name',name).order('created_at',{ascending:false}).limit(20);posts=data||[];}catch(e){}
  }
  const spent=bookings.reduce((s,b)=>s+(+b.paid||0),0);
  const fit=prof&&prof.training?trainSummary(prof.training):null;
  const sec=t=>'<div class="adm-sec">'+t+'</div>';
  const item=(a,b)=>'<div class="crm-item"><b>'+a+'</b>'+(b?'<small>'+b+'</small>':'')+'</div>';
  let html='<div class="crm-hero">'+avatar(name,54)+'<div><b>'+esc(properName(name))+'</b><small>'+(prof&&prof.username?'@'+esc(prof.username):'')+(prof&&prof.is_host?' · Host':'')+'</small></div></div>'
    +'<div class="dash-kgrid" style="margin-top:10px">'
      +'<div class="dash-kpi g"><b>'+INR(spent)+'</b><small>Lifetime spend</small></div>'
      +'<div class="dash-kpi"><b>'+bookings.length+'</b><small>Bookings</small></div>'
      +'<div class="dash-kpi"><b>'+reviews.length+'</b><small>Reviews</small></div>'
      +'<div class="dash-kpi"><b>'+tickets.length+'</b><small>Tickets</small></div>'
    +'</div>'
    +sec('Bookings & payments')+(bookings.length?bookings.map(b=>item(esc(b.trek||''),esc(b.date||'')+' · '+INR(+b.paid||0)+' paid · '+esc(b.status||''))).join(''):'<div class="adm-hint">No bookings.</div>')
    +sec('Support')+(tickets.length?tickets.map(t=>item(esc((t.message||'').slice(0,80)),esc(t.status||'open')+(t.reply?' · replied':''))).join(''):'<div class="adm-hint">No tickets.</div>')
    +sec('Reviews')+(reviews.length?reviews.map(r=>item('★'.repeat(Math.max(1,Math.min(5,+r.rating||5)))+' '+esc(r.trek||''),esc((r.body||'').slice(0,80)))).join(''):'<div class="adm-hint">No reviews.</div>')
    +sec('Fitness & activity')+(fit?item('Training for '+esc(fit.trek||'a trek'),fit.days+' active days · '+fit.streak+'-day streak'):'<div class="adm-hint">No training logged.</div>')
    +item(posts.length+' community post'+(posts.length!==1?'s':''),'')
    +'<button class="btn ghost" style="margin-top:12px" onclick="openPerson(\''+jsq(name)+'\')"><span class="msr">person</span> View public profile</button>'
    +'<button class="btn ghost" style="margin-top:8px" onclick="admNotifyUser(\''+jsq(name)+'\')"><span class="msr">notifications</span> Send a notification</button>';
  el.innerHTML=html;hydrate(el);
}
/* ---- Admin · AI & Automation (live message templates, stored in app_config) ---- */
let _aiCfg=null;
const AI_DEFAULTS={welcome:'Welcome to Tripomonk! 🏔️ We’re glad to have you. Message us anytime for help with bookings, payments or picking your next trek.',sos:'EMERGENCY — I need help on my Tripomonk trek. Please call me right away.',planner:'Tell us your dates, fitness and vibe — we’ll suggest the right trek for you.'};
async function loadAiCfg(){
  if(_aiCfg)return _aiCfg;
  _aiCfg=Object.assign({},AI_DEFAULTS);
  try{const l=JSON.parse(localStorage.getItem('tmk_appcfg')||'null');if(l)Object.assign(_aiCfg,l);}catch(e){}
  const sb=getSupaClient();if(sb){try{const{data}=await sb.from('app_config').select('key,value');if(Array.isArray(data)){data.forEach(r=>{if(!r.key)return;if(r.key==='support_uid')_supportUid=r.value;if(AI_DEFAULTS.hasOwnProperty(r.key))_aiCfg[r.key]=r.value;});try{localStorage.setItem('tmk_appcfg',JSON.stringify(_aiCfg));}catch(e){}}}catch(e){}}
  return _aiCfg;
}
function aiCfg(key){return (_aiCfg&&_aiCfg[key])||AI_DEFAULTS[key];}
async function renderAdminAI(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="skel skel-card"></div>';
  await loadAiCfg();
  const fldT=(k,label,hint)=>'<div class="adm-sec">'+label+'</div><div class="field"><textarea class="adm-ta" id="ai_'+k+'">'+esc(_aiCfg[k]||'')+'</textarea></div><div class="adm-hint">'+hint+'</div>';
  box.innerHTML='<div class="note2" style="margin-bottom:12px">Manage the automated messages the app sends — used live, no code change needed. (Trek fitness scores are edited per-trek in the Treks editor; gear rules stay in-app for now.)</div>'
    +fldT('welcome','Welcome message','Auto-sent in the Tripomonk Team chat when someone joins.')
    +fldT('sos','Emergency SOS message','Pre-filled WhatsApp text when a trekker requests an emergency call.')
    +fldT('planner','Trip planner nudge','A short line encouraging travellers to find the right trek.')
    +'<button class="btn" style="margin-top:8px" onclick="saveAiCfg()"><span class="msr">check</span> Save messages</button>';
  hydrate(box);
}
async function saveAiCfg(){
  const g=id=>document.getElementById(id);
  const next={welcome:(g('ai_welcome').value||'').trim()||AI_DEFAULTS.welcome,sos:(g('ai_sos').value||'').trim()||AI_DEFAULTS.sos,planner:(g('ai_planner').value||'').trim()||AI_DEFAULTS.planner};
  _aiCfg=Object.assign({},AI_DEFAULTS,next);
  try{localStorage.setItem('tmk_appcfg',JSON.stringify(_aiCfg));}catch(e){}
  const sb=getSupaClient();if(sb){try{const{error}=await sb.from('app_config').upsert(Object.keys(next).map(k=>({key:k,value:next[k]})),{onConflict:'key'});if(error)throw error;toast('Saved — live everywhere');}catch(e){note('Saved on this device. For all devices, run SQL-add-app-config.sql.','Saved locally');}}else toast('Saved on this device');
}
/* ============================================================
   VENDORS — partner operators (hotels / transport / activities / gear).
   Admin approves partners; approved partners manage their own listings from a
   dedicated Vendor Dashboard. Backed by vendors + vendor_listings tables.
   ============================================================ */
const VENDOR_TYPES=['Hotel / Stay','Transport','Activity operator','Gear rental','Other'];
let _adminVendors=null,_myVendor=null,_myVendorListings=null;
async function renderAdminVendors(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  const sb=getSupaClient();if(!sb){box.innerHTML='<div class="note2">Connect Supabase to manage vendors.</div>';return;}
  try{const{data,error}=await sb.from('vendors').select('*').order('created_at',{ascending:false}).limit(200);if(error)throw error;_adminVendors=data||[];}
  catch(e){box.innerHTML='<div class="note2">No vendors table yet — run <b>SQL-add-vendors.sql</b>. Partners then apply from “Partner with Tripomonk”.</div>';return;}
  let listings=[];try{const{data}=await sb.from('vendor_listings').select('owner_id');listings=data||[];}catch(e){}
  const cnt={};listings.forEach(l=>{cnt[l.owner_id]=(cnt[l.owner_id]||0)+1;});
  paintAdminVendors(cnt);
}
let _vendorCnt={};
function paintAdminVendors(cnt){
  if(cnt)_vendorCnt=cnt;cnt=_vendorCnt||{};
  const box=document.getElementById('adminBody');if(!box||adminTab!=='Vendors')return;
  const v=_adminVendors||[];const pending=v.filter(x=>(x.status||'pending')==='pending').length;
  box.innerHTML='<div class="adm-hint" style="margin:2px 2px 10px">'+v.length+' partner'+(v.length!==1?'s':'')+' · '+pending+' pending</div>'
    +(v.length?v.map(x=>vendorAdminRow(x,cnt[x.user_id]||0)).join(''):'<div class="empty"><p>No partner applications yet.</p></div>');
  hydrate(box);
}
function vendorAdminRow(x,listings){
  const id=jsq(String(x.id));const st=(x.status||'pending');const wa=waNumber(x.phone);
  return '<div class="tk-row"><div class="tk-tx"><b>'+esc(x.business_name||'Vendor')+'</b><small>'+esc(x.type||'')+(x.city?' · '+esc(x.city):'')+' · '+listings+' listing'+(listings!==1?'s':'')+'</small>'
    +(x.phone?'<span class="tk-links"><a href="tel:'+esc(x.phone)+'">'+esc(x.phone)+'</a>'+(wa?' · <a href="https://wa.me/'+esc(wa)+'" target="_blank" rel="noopener">WhatsApp</a>':'')+'</span>':'')+'</div>'
    +'<div class="tk-rt"><span class="tk-st '+st+'">'+esc(st)+'</span><div class="tk-acts">'
    +(st!=='approved'?'<button class="ok" onclick="vendorSet(\''+id+'\',\'approved\')">Approve</button>':'')
    +(st==='pending'?'<button class="no" onclick="vendorSet(\''+id+'\',\'rejected\')">Reject</button>':'')
    +(st==='approved'?'<button class="no" onclick="vendorSet(\''+id+'\',\'suspended\')">Suspend</button>':'')
    +'</div></div></div>';
}
async function vendorSet(id,status){
  const sb=getSupaClient();if(!sb)return;
  const{error}=await sb.from('vendors').update({status}).eq('id',id);
  if(error){note('Could not update: '+error.message,'Error');return;}
  const v=(_adminVendors||[]).find(x=>String(x.id)===String(id));if(v){v.status=status;try{await pushNotif({recipientId:v.user_id,type:'admin',preview:'Your Tripomonk partner application is '+status+'.'});}catch(e){}}
  paintAdminVendors();toast('Marked '+status);
}
/* ---- vendor self-service ---- */
async function openVendorDash(){
  if(!isLoggedIn()){note('Please sign in to partner with Tripomonk.','Sign in required').then(()=>{_loginReturn='vendorDash';go('login');});return;}
  go('vendorDash');renderVendorDash();
}
async function renderVendorDash(){
  const box=document.getElementById('vendorDashBody');if(!box)return;
  box.innerHTML='<div class="skel skel-card"></div>';
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){box.innerHTML='<div class="note2">Please sign in to continue.</div>';return;}
  try{const{data}=await sb.from('vendors').select('*').eq('user_id',uid).maybeSingle();_myVendor=data||null;}
  catch(e){box.innerHTML='<div class="note2">Partner sign-up isn’t enabled yet — the team needs to run <b>SQL-add-vendors.sql</b>.</div>';return;}
  if(!_myVendor){box.innerHTML=vendorApplyHTML();hydrate(box);return;}
  if(_myVendor.status!=='approved'){
    box.innerHTML='<div class="vend-hero"><span class="msr">storefront</span><div><b>'+esc(_myVendor.business_name)+'</b><small>'+esc(_myVendor.type||'')+'</small></div></div>'
      +'<div class="adm-hint" style="margin-top:12px">Your partner application is <b>'+esc(_myVendor.status||'pending')+'</b>. Our team reviews every partner — we’ll be in touch soon.</div>';
    hydrate(box);return;
  }
  let listings=[];try{const{data}=await sb.from('vendor_listings').select('*').eq('owner_id',uid).order('name');listings=data||[];}catch(e){}
  _myVendorListings=listings;
  box.innerHTML='<div class="vend-hero"><span class="msr">storefront</span><div><b>'+esc(_myVendor.business_name)+'</b><small>'+esc(_myVendor.type||'')+(_myVendor.city?' · '+esc(_myVendor.city):'')+' · <span style="color:#3ddc84">Approved partner</span></small></div></div>'
    +'<div class="adm-sec">Your listings</div>'
    +(listings.length?listings.map(vendorListingRow).join(''):'<div class="adm-hint">No listings yet — add your rooms, vehicles, activities or gear so Tripomonk can send you bookings.</div>')
    +'<button class="btn" style="margin-top:12px" onclick="vendorAddListing()"><span class="msr">add</span> Add a listing</button>';
  hydrate(box);
}
function vendorApplyHTML(){
  return '<div class="vend-hero"><span class="msr">handshake</span><div><b>Partner with Tripomonk</b><small>Hotels · transport · activities · gear</small></div></div>'
    +'<div class="adm-hint" style="margin:10px 0 12px">List your services and get bookings from Tripomonk trekkers. Apply below — we review every partner.</div>'
    +'<div class="field"><label>Business name</label><div class="inp"><input id="vdName" placeholder="e.g. Himalayan Stays"></div></div>'
    +'<div class="field"><label>Type</label><div class="inp"><select id="vdType" style="all:unset;flex:1;color:var(--text)">'+VENDOR_TYPES.map(t=>'<option style="color:#000">'+esc(t)+'</option>').join('')+'</select></div></div>'
    +'<div class="field"><label>City</label><div class="inp"><input id="vdCity" placeholder="e.g. Manali"></div></div>'
    +'<div class="field"><label>WhatsApp number</label><div class="inp"><input id="vdPhone" inputmode="tel" maxlength="10" placeholder="10-digit mobile"></div></div>'
    +'<button class="btn" onclick="applyVendor()"><span class="msr">send</span> Apply to partner</button>';
}
async function applyVendor(){
  const g=id=>document.getElementById(id);
  const name=(g('vdName').value||'').trim(),type=(g('vdType').value||'').trim(),city=(g('vdCity').value||'').trim(),phone=(g('vdPhone').value||'').replace(/\D/g,'');
  if(!name){note('Enter your business name.','Name needed');return;}
  if(phone.length<10){note('Enter a valid 10-digit WhatsApp number.','Number needed');return;}
  const sb=getSupaClient();const uid=sb?await authUid():null;if(!sb||!uid){note('Please sign in.','Sign in required');return;}
  const{error}=await sb.from('vendors').insert({user_id:uid,business_name:name.slice(0,120),type,city:city.slice(0,80),phone,status:'pending'});
  if(error){note('Could not apply: '+error.message,'Error');return;}
  note('Application sent! We’ll review your partner request and get back to you.','Applied ✓');renderVendorDash();
}
function vendorListingRow(l){
  const id=jsq(String(l.id));
  return '<div class="pay-row"><div class="pay-main"><b>'+esc(l.name||'')+'</b><small>'+esc(l.category||'')+' · '+INR(+l.price||0)+(l.available!=null?' · '+l.available+' available':'')+'</small></div>'
    +'<div class="pay-rt"><span class="pay-st '+(l.active?'paid':'cancelled')+'">'+(l.active?'Active':'Off')+'</span>'
    +'<div class="pay-acts"><button onclick="vendorToggleListing(\''+id+'\')" title="Active on/off"><span class="msr">'+(l.active?'toggle_on':'toggle_off')+'</span></button><button class="danger" onclick="vendorDelListing(\''+id+'\')" title="Remove"><span class="msr">delete</span></button></div></div></div>';
}
async function vendorAddListing(){
  const uid=await authUid();if(!uid)return;
  const name=await askCode('Add a listing',{placeholder:'e.g. Deluxe room / Tempo Traveller / Rafting slot'});if(!name||!name.trim())return;
  const price=await askCode('Price (₹)',{placeholder:'e.g. 2500'});
  const avail=await askCode('Available units',{placeholder:'e.g. 10'});
  const sb=getSupaClient();if(!sb)return;
  const row={id:'vl_'+Date.now(),owner_id:uid,name:name.trim().slice(0,120),category:(_myVendor&&_myVendor.type)||'',price:parseInt(price)||0,available:parseInt(avail)||0,active:true};
  const{error}=await sb.from('vendor_listings').insert(row);
  if(error){note('Could not add: '+error.message,'Error');return;}
  toast('Listing added');renderVendorDash();
}
async function vendorToggleListing(id){const sb=getSupaClient();if(!sb)return;const l=(_myVendorListings||[]).find(x=>String(x.id)===String(id));if(!l)return;
  try{await sb.from('vendor_listings').update({active:!l.active}).eq('id',id);l.active=!l.active;renderVendorDash();}catch(e){}}
async function vendorDelListing(id){if(!(await askConfirm('Remove this listing?','Remove listing')))return;const sb=getSupaClient();if(!sb)return;
  try{await sb.from('vendor_listings').delete().eq('id',id);renderVendorDash();toast('Removed');}catch(e){}}
function setAdminTab(t){openAdminTab(t);}
let _admQ='',_admStatus='All',_admRegion='All',_admDiff='All';
function admTrekFiltered(){
  const q=_admQ.trim().toLowerCase();
  return treks.map((t,i)=>({t,i})).filter(({t})=>{
    if(_admStatus==='Live'&&t.soon)return false;
    if(_admStatus==='Coming soon'&&!t.soon)return false;
    if(_admRegion!=='All'&&t.region!==_admRegion)return false;
    if(_admDiff!=='All'&&(t.lvl||'')!==_admDiff)return false;
    if(q&&!((t.n+' '+(t.region||'')).toLowerCase().includes(q)))return false;
    return true;
  });
}
function admTrekCard(t,i){
  const req=trekReqScore(t), img=(t.img||'').split('?')[0];
  return `<div class="adm-tc" onclick="editTrek(${i})">
    <div class="adm-tc-ph" style="background-image:url('${esc(img)}')">${t.soon?'<span class="adm-tc-soon">Soon</span>':''}</div>
    <div class="adm-tc-bd"><b>${esc(t.n)}</b><small>${esc(t.region||'—')} · ${t.days||'?'}d · ₹${Number(t.price||0).toLocaleString('en-IN')}</small>
      <div class="adm-tc-tags"><span class="adm-tc-lvl">${esc(t.lvl||'—')}</span><span class="adm-tc-req">Score ${req}</span>${trekTag(t)?`<span class="adm-tc-tag ${tagStyle(t.tag)}">${esc(t.tag)}</span>`:''}${hasItinerary(t)?'':'<span class="adm-tc-warn">No itinerary</span>'}</div></div>
    <div class="adm-tc-act"><button class="adm-ic" onclick="event.stopPropagation();editTrek(${i})" title="Edit"><span class="msr">edit</span></button>
      <button class="adm-ic del" onclick="event.stopPropagation();delTrek(${i})" title="Delete"><span class="msr">delete</span></button></div>
  </div>`;
}
/* only the list + count re-render on each keystroke, so the search box keeps focus */
function renderAdmTrekList(){
  const wrap=document.getElementById('admTrekList');if(!wrap)return;
  const list=admTrekFiltered();
  wrap.innerHTML=`<div class="adm-count">${list.length} trek${list.length!==1?'s':''}</div>
    <div class="adm-trek-list">${list.map(({t,i})=>admTrekCard(t,i)).join('')||'<div class="empty"><p>No treks match your filters.</p></div>'}</div>`;
  hydrate(wrap);
}
function renderAdminTreks(){
  const box=document.getElementById('adminBody');
  const live=treks.filter(t=>!t.soon).length, soon=treks.length-live;
  const regions=['All',...[...new Set(treks.map(t=>t.region).filter(Boolean))].sort()];
  const chip=(v,cur,onc)=>`<button class="adm-chip ${v===cur?'on':''}" onclick="${onc}">${esc(v)}</button>`;
  box.innerHTML=`
    <div class="adm-stat"><div><b>${treks.length}</b><small>Total</small></div><div><b>${live}</b><small>Live</small></div><div><b>${soon}</b><small>Coming soon</small></div></div>
    <div class="adm-search"><span class="msr">search</span><input placeholder="Search treks by name or region…" value="${esc(_admQ)}" oninput="_admQ=this.value;renderAdmTrekList()"></div>
    <div class="adm-chips">${['All','Live','Coming soon'].map(v=>chip(v,_admStatus,`_admStatus='${v}';renderAdminTreks()`)).join('')}</div>
    <div class="adm-chips">${['All','Easy','Moderate','Difficult'].map(v=>chip(v,_admDiff,`_admDiff='${v}';renderAdminTreks()`)).join('')}</div>
    <div class="adm-chips">${regions.map(v=>chip(v,_admRegion,`_admRegion='${jsq(v)}';renderAdminTreks()`)).join('')}</div>
    <div id="admTrekList"></div>
    <button class="btn" style="margin-top:14px" onclick="newTrek()"><span class="msr">add</span> Add a trek</button>`;
  hydrate(box);renderAdmTrekList();
}
/* ----- Home page curation: the Featured hero + the Popular Treks rail -----
   Picks are staged in _homeFeat/_homePop and only hit the network on Save, so the
   admin can tick several treks without a round trip per tap. */
let _homeQ='',_homeFeat=null,_homePop=null;
function homeSelInit(){
  if(_homePop)return;
  _homePop=new Set(treks.filter(t=>t.pop).map(t=>t.n));
  const f=treks.find(t=>t.feat);_homeFeat=f?f.n:null;
}
function homeSetFeat(n){_homeFeat=(_homeFeat===n?null:n);renderAdminHomeList();}
function homeTogglePop(n){if(_homePop.has(n))_homePop.delete(n);else _homePop.add(n);renderAdminHomeList();}
function homeSelReset(){_homePop=null;homeSelInit();renderAdminHome();}
function admHomeFiltered(){
  const q=_homeQ.trim().toLowerCase();
  return treks.filter(t=>!q||((t.n+' '+(t.region||'')).toLowerCase().includes(q)));
}
function admHomePreviewHTML(){
  const t=treks.find(x=>x.n===_homeFeat);
  if(!t)return '<div class="adm-hint" style="margin:0 0 10px">No featured trek picked — the home banner falls back to the first live trek.</div>';
  const img=(t.img||'').split('?')[0];
  return `<div class="adm-hm-prev" style="background-image:url('${esc(img)}')">
    <div><span>Featured trek</span><b>${esc(t.n)}</b><small>${esc(t.region||'')} · ${esc(t.lvl||'')} · ${t.days||'?'}D · ₹${Number(t.price||0).toLocaleString('en-IN')}</small></div></div>`;
}
/* only the list + preview re-render on a keystroke, so the search box keeps focus */
function renderAdminHomeList(){
  const wrap=document.getElementById('admHomeList');if(!wrap)return;
  const list=admHomeFiltered();
  wrap.innerHTML=list.map(t=>{
    const on=_homePop.has(t.n),fe=_homeFeat===t.n,img=(t.img||'').split('?')[0];
    return `<div class="adm-hm${on?' pop':''}">
      <div class="adm-hm-ph" style="background-image:url('${esc(img)}')"></div>
      <div class="adm-hm-bd"><b>${esc(t.n)}</b><small>${esc(t.region||'—')} · ${t.soon?'Coming soon':'Live'} · ₹${Number(t.price||0).toLocaleString('en-IN')}</small></div>
      <button class="adm-hm-btn star${fe?' on':''}" onclick="homeSetFeat('${jsq(t.n)}')" title="Set as the featured trek"><span class="msr">${fe?'star':'star_border'}</span></button>
      <button class="adm-hm-btn tick${on?' on':''}" onclick="homeTogglePop('${jsq(t.n)}')" title="Show in Popular Treks"><span class="msr">${on?'check_circle':'radio_button_unchecked'}</span></button>
    </div>`;}).join('')||'<div class="empty"><p>No treks match your search.</p></div>';
  const c=document.getElementById('admHomeCount');
  if(c)c.textContent=_homePop.size+' popular · '+(_homeFeat?'featured: '+_homeFeat:'no featured trek');
  const p=document.getElementById('admHomePreview');
  if(p)p.innerHTML=admHomePreviewHTML();
  hydrate(wrap);
}
function renderAdminHome(){
  homeSelInit();
  const box=document.getElementById('adminBody');
  /* The Save bar is STICKY at the bottom. With 141 trek rows the old footer button sat
     ~13,000px down the page — you'd never scroll to it, so it looked like there was no
     save button at all. Sticky keeps it on screen no matter where you are in the list. */
  box.innerHTML=`
    <div class="note2" style="margin-bottom:12px">Choose what shows on the <b>home page</b>. The <b>star</b> sets the big <b>Featured trek</b> banner (one trek only). The <b>tick</b> adds a trek to the <b>Popular Treks</b> rail — your picks show first and the rail fills up to 12 with the rest. Tap <b>Save home page</b> at the bottom when done.</div>
    <div id="admHomePreview">${admHomePreviewHTML()}</div>
    <div class="adm-count" id="admHomeCount"></div>
    <div class="adm-search"><span class="msr">search</span><input placeholder="Search treks by name or region…" value="${esc(_homeQ)}" oninput="_homeQ=this.value;renderAdminHomeList()"></div>
    <div id="admHomeList" class="adm-hm-list"></div>
    <div class="adm-savebar">
      <button class="btn ghost" onclick="homeSelReset()">Reset</button>
      <button class="btn" onclick="saveHomePicks()"><span class="msr">check</span> Save home page</button>
    </div>`;
  hydrate(box);renderAdminHomeList();
}
async function saveHomePicks(){
  const pop=[..._homePop];const wantFeat=_homeFeat||'';
  /* paint it locally first so the home page reflects the change even if offline */
  treks.forEach(t=>{t.pop=_homePop.has(t.n);t.feat=(t.n===_homeFeat);});
  renderHome();
  if(!sbOn){note('Saved on this device only (Supabase not connected).');return;}
  const res=await adminCall('save_home',{featured:wantFeat,popular:pop});
  if(!res||!res.ok){note((res&&res.error)||'Could not save the home page.','Save failed');return;}
  bustTreksCache();
  await loadTreks(true);          /* fresh: no stale cache to revert the pick */
  _homePop=null;homeSelInit();renderHome();renderAdminHome();
  /* the DB is the source of truth now — verify the pick actually landed there, so a
     silent persistence failure (missing columns / old function) isn't reported as a win */
  const featOk=!wantFeat||(treks.find(t=>t.feat)||{}).n===wantFeat;
  const popOk=pop.every(n=>{const t=treks.find(x=>x.n===n);return t&&t.pop;});
  if(featOk&&popOk)note('Home page updated for everyone ✓');
  else note('Saved, but it did not appear in the database. Deploy the latest admin function and run SQL-add-home-picks.sql, then try again.','Not reflected');
}
/* ----- Departures (batches) ----- */
function getBatchMap(){try{return JSON.parse(localStorage.getItem('tmk_batches')||'{}');}catch(e){return {};}}
function setBatchMap(m){try{localStorage.setItem('tmk_batches',JSON.stringify(m));}catch(e){}}
/* Departures per trek. Source of truth = the trek's DB `batches` (so they show for
   everyone). Falls back to the local cache, then to sensible defaults. */
function getBatches(name){
  const t=treks.find(x=>x.n===name)||{price:0};
  if(Array.isArray(t.batches)&&t.batches.length)return t.batches;
  const m=getBatchMap();if(m[name]&&m[name].length)return m[name];
  return [{label:'18 May – 22 May',seats:'Few seats left',price:t.price},{label:'25 May – 29 May',seats:'Available',price:t.price},{label:'01 Jun – 05 Jun',seats:'Available',price:t.price+500}];}
/* persist a trek's departures to the DB (via the admin function) so every user sees them */
async function saveBatches(name,list){
  const t=treks.find(x=>x.n===name);
  if(t)t.batches=list;                                   /* in-memory now */
  const m=getBatchMap();m[name]=list;setBatchMap(m);     /* local cache/offline */
  if(!sbOn){note('Saved on this device only (Supabase not connected).');return;}
  if(!t||!t._id){note('Save this trek in the Treks tab first, then add its departures.','Trek not in database');return;}
  const ok=await sbWriteChecked('PATCH','treks?id=eq.'+t._id,{batches:list});
  if(ok){bustTreksCache();await loadTreks(true);note('Departures saved for everyone ✓');}
}
/* selected-trek card with a tap-to-change native picker — shared by Departures + Packing */
function admTrekSelect(selName,onchangeFn){
  const sel=treks.find(t=>t.n===selName)||{};
  const opts=treks.map(t=>`<option ${t.n===selName?'selected':''} style="color:#000">${esc(t.n)}</option>`).join('');
  return `<div class="adm-picker">
    <div class="adm-tc-ph" style="background-image:url('${esc((sel.img||'').split('?')[0])}')">${sel.soon?'<span class="adm-tc-soon">Soon</span>':''}</div>
    <div class="adm-picker-tx"><small>Editing trek</small><b>${esc(sel.n||'—')}</b><span>${esc(sel.region||'')}${sel.days?' · '+sel.days+'d':''}</span></div>
    <div class="adm-picker-change"><span class="msr">unfold_more</span>Change<select onchange="${onchangeFn}">${opts}</select></div>
  </div>`;
}
function renderDepartures(){const sel=depTrek||((treks.find(t=>!t.soon)||treks[0]).n); depTrek=sel;
  const list=getBatches(sel);
  document.getElementById('adminBody').innerHTML=
    admTrekSelect(sel,"depTrek=this.value;renderDepartures()")+
    `<div class="adm-sec">Departures</div>
    <div class="adm-batch-list">${list.map((b,i)=>{const st=batchState(b.seats);const d=parseStartDate(b.label);return `<div class="adm-batch">
      <div class="adm-batch-cal"><span class="mo">${esc(d.mo||'—')}</span><span class="dy">${esc(d.day||'')}</span></div>
      <div class="adm-batch-bd"><b>${esc(b.label)}</b><span class="adm-batch-seats ${st}"><span class="dot"></span>${esc(b.seats||'Available')}</span></div>
      <div class="adm-batch-rt"><b>₹${Number(b.price||0).toLocaleString('en-IN')}</b><button class="adm-ic del" onclick="delBatch(${i})" title="Remove"><span class="msr">delete</span></button></div>
    </div>`;}).join('')||'<div class="empty" style="padding:12px 0"><p>No departures yet — add one below.</p></div>'}</div>
    <div class="adm-sec">Add a departure</div>
    <div class="adm-editor" style="padding:14px">
      <div class="adm-row2">
        <div class="field"><label>From</label><input id="bFrom" type="date" class="adm-date"></div>
        <div class="field"><label>Till</label><input id="bTill" type="date" class="adm-date"></div>
      </div>
      ${fld('bSeats','Seats status','','Few seats left / Available')}
      ${fld('bPrice','Price ₹ (blank = trek price)','','')}
      <button class="btn" style="margin-top:4px" onclick="addBatch()"><span class="msr">add</span> Add departure</button>
    </div>`;
  hydrate(document.getElementById('adminBody'));
}
/* "2026-05-18" -> "18 May" for the departure label the rest of the app reads */
function fmtBatchDate(iso){
  if(!iso)return '';
  const d=new Date(iso+'T00:00:00');if(isNaN(d))return '';
  return d.getDate()+' '+['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];
}
async function addBatch(){const g=id=>document.getElementById(id);
  const from=g('bFrom').value, till=g('bTill').value;
  if(!from){note('Pick a start date from the calendar.','Start date needed');return;}
  if(till&&till<from){note('The end date can’t be before the start date.','Check dates');return;}
  const end=till||from;
  const label=fmtBatchDate(from)+' – '+fmtBatchDate(end);
  const t=treks.find(x=>x.n===depTrek)||{price:0};
  const list=getBatches(depTrek).slice();
  list.push({label,seats:g('bSeats').value.trim()||'Available',price:parseInt(g('bPrice').value)||t.price,start:from,end:end});
  await saveBatches(depTrek,list);renderDepartures();}
async function delBatch(i){
  const list=getBatches(depTrek).slice();
  list.splice(i,1);
  await saveBatches(depTrek,list);renderDepartures();}
/* ----- Admin · Reviews (add manually + manage) ----- */
function renderAdminReviews(){
  const box=document.getElementById('adminBody');if(!box)return;
  const opts='<option value="">General (shows on all treks)</option>'
    +treks.filter(t=>!t.soon).map(t=>'<option value="'+esc(t.n)+'">'+esc(t.n)+(isTour(t)?' (road trip)':'')+'</option>').join('');
  box.innerHTML='<div class="panel">'
    +'<h3 style="margin:0 0 4px;font-size:16px">Add a review</h3>'
    +'<p style="margin:0 0 8px;font-size:12px;color:var(--muted)">Reviews you add here show on the trek page and the Reviews screen right away.</p>'
    +'<label class="rv-lbl">Trek / trip</label><select id="arTrek">'+opts+'</select>'
    +'<label class="rv-lbl">Reviewer name</label><input id="arName" placeholder="e.g. Ananya S.">'
    +'<label class="rv-lbl">Rating</label><select id="arRate"><option value="5">★★★★★ (5)</option><option value="4">★★★★ (4)</option><option value="3">★★★ (3)</option><option value="2">★★ (2)</option><option value="1">★ (1)</option></select>'
    +'<label class="rv-lbl">Review</label><textarea id="arBody" rows="3" placeholder="What did they say about the experience?"></textarea>'
    +'<button class="btn" style="margin-top:12px" onclick="adminAddReview()"><span class="msr">add</span> Add review</button>'
    +'</div>'
    +'<h3 style="margin:20px 0 10px;font-size:15px">All reviews (<span id="arCount">'+reviewsData.length+'</span>)</h3>'
    +'<div id="arList"></div>';
  renderAdminReviewList();
  hydrate(box);
  if(getSupaClient())loadReviews();   /* pull the latest so the list is authoritative */
}
function renderAdminReviewList(){
  const el=document.getElementById('arList');if(!el)return;
  const c=document.getElementById('arCount');if(c)c.textContent=reviewsData.length;
  el.innerHTML=reviewsData.length?reviewsData.map(r=>{
    const rt=Math.max(1,Math.min(5,+r.rating||5));
    return '<div class="panel" style="margin-bottom:10px">'
      +'<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">'
      +'<b style="font-size:13px">'+esc(r.author||'Trekker')+' <span style="color:#ffce1f;font-size:12px">'+'★'.repeat(rt)+'</span></b>'
      +'<button onclick="adminDelReview(\''+jsq(String(r.id))+'\')" style="background:none;border:0;color:#ff5a5a;font-size:12px;font-weight:600;cursor:pointer;flex:none">Delete</button></div>'
      +(r.trek?'<div style="font-size:11px;color:var(--accent2);margin-top:2px">'+esc(r.trek)+'</div>':'<div style="font-size:11px;color:var(--muted2);margin-top:2px">General</div>')
      +'<p style="margin:6px 0 0;font-size:12.5px;color:var(--muted);line-height:1.5">'+esc(r.body||'')+'</p>'
      +'</div>';
  }).join(''):'<div class="empty"><p>No reviews yet. Add one above.</p></div>';
}
async function adminAddReview(){
  const g=id=>document.getElementById(id);
  const name=(g('arName').value||'').trim(),body=(g('arBody').value||'').trim();
  if(!name||!body){note('Enter a reviewer name and the review text.','Add review');return;}
  await addReview({trek:g('arTrek').value,author:name,rating:g('arRate').value,body,silent:true});
  toast('Review added');
  renderAdminReviews();
}
async function adminDelReview(id){
  const ok=await askConfirm('Delete this review? This cannot be undone.','Delete review');
  if(!ok)return;
  await delReview(id);
  renderAdminReviewList();
}
/* ----- Settings ----- */
const APP_BUILD='441';   /* bump with the service-worker CACHE version — lets the admin confirm the phone is on the latest code */
function renderAdminSettings(){document.getElementById('adminBody').innerHTML=`
  <div class="panel" style="margin-bottom:14px"><b style="display:block;margin-bottom:10px">Contact</b>
    <div class="field"><label>WhatsApp number (country code, no +)</label><div class="inp"><input id="setWa" value="${esc(getWa())}" placeholder="918924813959"></div></div>
    <button class="btn" onclick="saveSettings()">Save settings</button></div>
  <div class="panel" style="margin-bottom:14px"><b style="display:block;margin-bottom:8px">Secure admin access</b><div class="note2">Trek edits, packing updates and bookings now use Supabase protected admin functions. Do not paste secret database keys in the app.</div></div>
  <div class="panel" style="margin-bottom:14px"><b style="display:block;margin-bottom:6px">App build</b><div class="note2">This device is running <b>v${APP_BUILD}</b>. If this isn't the latest you deployed, fully close &amp; reopen the app (or clear site data) so edits save correctly.</div></div>
  <button class="btn ghost" onclick="adminExit()"><span class="ic" data-i="logout"></span> Log out of admin</button>`;
  hydrate(document.getElementById('adminBody'));
}
function saveSettings(){const g=id=>document.getElementById(id);
  try{const wa=g('setWa').value.replace(/[^0-9]/g,'');if(wa)localStorage.setItem('tmk_wa',wa);
}catch(e){}
  note('Settings saved.');}
function fld(id,label,val,ph){return `<div class="field"><label>${label}</label><div class="inp"><input id="${id}" value="${esc(val==null?'':val)}" placeholder="${ph||''}"></div></div>`;}
function admSetStatus(live){const l=document.getElementById('admStatusLive'),s=document.getElementById('admStatusSoon');if(l)l.classList.toggle('on',live);if(s)s.classList.toggle('on',!live);}
/* Photo / Video choice for the trek hero. Kept separate from the link itself so a
   video can stay attached while the photo is shown. */
function admSetHero(useVideo){
  const i=document.getElementById('admHeroImg'),v=document.getElementById('admHeroVid');
  if(i)i.classList.toggle('on',!useVideo);
  if(v)v.classList.toggle('on',useVideo);
  admCheckHeroLink();
}
/* tell the admin immediately if the link won't play, instead of at save time */
function admCheckHeroLink(){
  const hint=document.getElementById('admVidHint'),inp=document.getElementById('admVid');
  if(!hint||!inp)return;
  const url=(inp.value||'').trim();
  const useVideo=(document.getElementById('admHeroVid')||{classList:{contains:()=>false}}).classList.contains('on');
  if(!url){
    hint.textContent=useVideo
      ? 'Add a video link above, or the trek page falls back to the photo.'
      : 'The photo is still used as the video’s cover, and as the card image everywhere else. Pick “Video” to show it at the top.';
    hint.style.color='';return;
  }
  const v=parseVideoLink(url);
  if(!v||v.kind==='link'){
    hint.textContent='That link isn’t a video we can play. Use YouTube, Instagram, Vimeo or a direct .mp4 URL.';
    hint.style.color='#ffce1f';
  }else{
    hint.textContent='Recognised as '+v.kind+'. '+(useVideo?'It will show at the top of the trek page.':'Pick “Video” to show it at the top.');
    hint.style.color='#6ee7a0';
  }
}
/* Upload an itinerary PDF to the existing public `community` bucket and drop the URL
   into the link field, so "upload a file" and "paste a link" end up as the same thing. */
async function admUploadItin(input){
  const file=input&&input.files&&input.files[0];if(!file)return;
  const st=document.getElementById('admItinSt');
  const sb=getSupaClient();
  if(!sb){if(st)st.textContent='Backend not connected';return;}
  if(file.size>15*1024*1024){note('That PDF is over 15 MB. Please compress it first.','Too large');return;}
  if(st)st.textContent='Uploading…';
  try{
    const name=((document.getElementById('admN')||{}).value||'itinerary').toLowerCase().replace(/[^a-z0-9]+/g,'-');
    const path='itineraries/'+name+'-'+Date.now()+'.pdf';
    const up=await sb.storage.from('community').upload(path,file,{cacheControl:'3600',contentType:'application/pdf',upsert:false});
    if(up.error)throw new Error(up.error.message);
    const url=sb.storage.from('community').getPublicUrl(path).data.publicUrl;
    const inp=document.getElementById('admItin');if(inp)inp.value=url;
    if(st)st.textContent='Uploaded ✓ — now Save the trek';
  }catch(e){
    if(st)st.textContent='Upload failed';
    note('Could not upload: '+e.message,'Upload failed');
  }finally{input.value='';}
}
/* The tag chips and the free-text box are ONE field. Tapping a chip fills the box;
   typing your own de-selects the chips unless the text matches a preset. The box is
   what gets saved, so a custom tag works exactly like a preset one. */
function admPickTag(v){const inp=document.getElementById('admTag');if(inp)inp.value=v;admSyncTagChips();}
function admSyncTagChips(){
  const inp=document.getElementById('admTag');
  const cur=((inp&&inp.value)||'').trim().toLowerCase();
  document.querySelectorAll('#admTagChips .adm-tagchip').forEach(c=>{
    c.classList.toggle('on',String(c.dataset.tag||'').trim().toLowerCase()===cur);
  });
}
/* keep the editor's title & save button in sync when the Type is switched (trek ↔ road trip) */
function admTypeSync(){
  const ty=(document.getElementById('admType')||{}).value||'trek';
  const w=ty==='tour'?'road trip':'trek';
  const h=document.getElementById('admEdWord');if(h)h.textContent=(editIdx<0?'Add a ':'Edit ')+w;
  const s=document.getElementById('admSaveWord');if(s)s.textContent='Save '+w;
}
/* day-by-day itinerary editor (admin) — each day = [title, desc, distance, hours] */
let _admItin=[];
function admItinRender(){
  const box=document.getElementById('admItinDays');if(!box)return;
  box.innerHTML=_admItin.length?_admItin.map((d,i)=>`<div class="adm-itd">
      <div class="adm-itd-h"><b>Day ${i+1}</b><button type="button" class="adm-ic" onclick="admItinDel(${i})" title="Remove day"><span class="msr">close</span></button></div>
      <div class="inp"><input id="it_t_${i}" value="${esc(d[0]||'')}" placeholder="Title — e.g. Sankri to Juda Ka Talab"></div>
      <textarea id="it_d_${i}" class="adm-ta" style="min-height:56px;margin-top:7px" placeholder="What happens this day (optional)">${esc(d[1]||'')}</textarea>
      <div class="adm-row2" style="margin-top:7px"><div class="inp"><input id="it_k_${i}" value="${esc(d[2]||'')}" placeholder="Distance — 6 km"></div><div class="inp"><input id="it_h_${i}" value="${esc(d[3]||'')}" placeholder="Hours — 5 hrs"></div></div>
    </div>`).join(''):'<div class="adm-hint" style="opacity:.7;margin-top:0">No days yet — tap “Add a day”.</div>';
  hydrate(box);
}
function admItinReadDOM(){
  _admItin=_admItin.map((_,i)=>{const g=id=>((document.getElementById(id)||{}).value||'');return [g('it_t_'+i).trim(),g('it_d_'+i).trim(),g('it_k_'+i).trim(),g('it_h_'+i).trim()];});
}
function admItinAdd(){admItinReadDOM();_admItin.push(['','','','']);admItinRender();}
function admItinDel(i){admItinReadDOM();_admItin.splice(i,1);admItinRender();}
let _admHl=[];
function admToggleHl(label){const i=_admHl.indexOf(label);if(i>=0)_admHl.splice(i,1);else{if(_admHl.length>=8){note('Up to 8 highlights.','Max reached');return;}_admHl.push(label);}renderAdmHlChips();}
function renderAdmHlChips(){const box=document.getElementById('admHlChips');if(!box)return;
  box.innerHTML=HL_LABELS.map(l=>`<button type="button" class="adm-chip ${_admHl.includes(l)?'on':''}" onclick="admToggleHl('${jsq(l)}')"><span class="msr" style="font-size:14px;vertical-align:-2px;margin-right:4px">${HL_ICON[l]||'check'}</span>${esc(l)}</button>`).join('');}
function showAdminForm(t){const f=document.getElementById('adminForm');
  _admItin=(trekItin(t)||[]).map(d=>Array.isArray(d)?[d[0]||'',d[1]||'',d[2]||'',d[3]||'']:[String(d||''),'','','']);
  const lv=t.lvl||'Easy', img=(t.img||'').split('?')[0];
  const reqVal=(t.req!=null?t.req:''), reqAuto=t.n?trekReqScore(t):'';
  const word=trekType(t)==='tour'?'road trip':'trek';   /* label the editor by product type */
  f.innerHTML=`<div class="adm-editor">
    <div class="adm-ed-head"><b id="admEdWord">${editIdx<0?'Add a '+word:'Edit '+word}</b><button class="adm-ic" onclick="closeAdminForm()" title="Close"><span class="msr">close</span></button></div>

    <div class="adm-sec">Basics</div>
    ${fld('admN','Name',t.n,'Kedarkantha')}
    ${fld('admReg','Region',t.region,'Uttarakhand')}
    <div class="field"><label>Type</label><div class="inp"><select id="admType" onchange="admTypeSync()" style="all:unset;flex:1;color:var(--text)">
      <option value="trek" ${trekType(t)!=='tour'?'selected':''} style="color:#000">Trek</option>
      <option value="tour" ${trekType(t)==='tour'?'selected':''} style="color:#000">Road Trip / Tour</option>
    </select></div></div>
    <div class="adm-row2">
      <div class="field"><label>Destination</label><div class="inp"><select id="admDest" style="all:unset;flex:1;color:var(--text)">
        <option value="" style="color:#000">— none —</option>
        ${DESTS.map(dd=>`<option value="${esc(dd.id)}" ${(t.dest_id===dd.id)?'selected':''} style="color:#000">${esc(dd.n)}</option>`).join('')}
      </select></div></div>
      <div class="field"><label>Departure type</label><div class="inp"><select id="admDepType" style="all:unset;flex:1;color:var(--text)">
        ${[['both','Group & custom'],['group','Group only'],['custom','Custom only']].map(o=>`<option value="${o[0]}" ${(tourDep(t)===o[0])?'selected':''} style="color:#000">${o[1]}</option>`).join('')}
      </select></div></div>
    </div>
    <div class="adm-hint">For a <b>Road Trip / Tour</b>: pick the <b>Destination</b> to show it highlighted on that destination's page, and its <b>departure type</b>. Ignored for regular treks.</div>
    <div class="adm-row2">
      <div class="field"><label>Difficulty</label><div class="inp"><select id="admLvl" style="all:unset;flex:1;color:var(--text)">${['Easy','Moderate','Difficult'].map(o=>`<option ${o===lv?'selected':''} style="color:#000">${o}</option>`).join('')}</select></div></div>
      <div class="field"><label>Status</label><div class="adm-status"><button type="button" class="adm-status-btn ${!t.soon?'on':''}" id="admStatusLive" onclick="admSetStatus(true)">Live</button><button type="button" class="adm-status-btn ${t.soon?'on':''}" id="admStatusSoon" onclick="admSetStatus(false)">Soon</button></div></div>
    </div>

    <div class="adm-sec">Special tag</div>
    <div class="adm-chips" id="admTagChips">
      ${['',...TREK_TAGS].map(v=>`<button type="button" class="adm-chip adm-tagchip ${tagStyle(v)} ${((t.tag||'').trim()===v)?'on':''}" data-tag="${esc(v)}" onclick="admPickTag('${jsq(v)}')">${v?esc(v):'None'}</button>`).join('')}
    </div>
    ${fld('admTag','Or type your own',t.tag,'e.g. Diwali Special')}
    <div class="adm-hint">Shows as a coloured badge on this trek everywhere in the app. Leave blank for none.</div>
    ${fld('admOffer','Offer details',t.offer,'e.g. Flat ₹2,000 off · book by 30 Sep')}
    <div class="adm-hint">The actual offer — shown as a highlighted banner on the trip page so travellers see exactly what they get. Pair with the “Offer” tag above.</div>

    <div class="adm-sec">Trip details</div>
    <div class="adm-row2">${fld('admDays','Days',t.days,'5')}${fld('admAlt','Max altitude',t.alt,'12,500 ft')}</div>
    <div class="adm-row2">${fld('admDist','Distance',t.dist,'20 km')}${fld('admBest','Best time',t.best,'Dec – Apr')}</div>

    <div class="adm-sec">Pickup &amp; drop-off</div>
    ${fld('admPickup','Pickup point',t.pickup,'e.g. Manali (Mall Road) / Delhi ISBT')}
    ${fld('admDrop','Drop-off point',t.dropoff,'e.g. back at Manali')}
    ${fld('admPickMap','Pickup map link',t.pickup_map,'Paste a Google Maps link to the exact pickup spot')}
    <div class="adm-hint">Shown on the trip page and the traveller's ticket, with an “Open in Maps” button. Leave pickup blank to use the region default.</div>

    <div class="adm-sec">Pricing &amp; readiness</div>
    <div class="adm-row2">${fld('admPrice','Price (₹)',t.price,'8999')}
      <div class="field"><label>Discount (% off)</label><div class="inp"><input id="admDiscount" type="number" min="0" max="90" value="${esc(t.discount||'')}" placeholder="0"></div></div></div>
    <div class="adm-hint">A % discount shows a struck-through original price + the discounted price everywhere, and charges the discounted amount at checkout (Razorpay). Leave blank/0 for no discount.</div>
    <div class="field"><label>Required trek score</label><div class="inp"><input id="admReq" type="number" min="0" max="100" value="${esc(reqVal)}" placeholder="auto${reqAuto!==''?' ('+reqAuto+')':''}"></div></div>
    <div class="adm-hint">Leave the score blank to auto-calculate it from difficulty, altitude &amp; days.</div>

    <div class="adm-sec">Trip highlights</div>
    <div class="adm-hint">Pick what makes this ${word} special — shown as chips on the trip page. Up to 8.</div>
    <div class="adm-chips" id="admHlChips"></div>

    <div class="adm-sec">Ratings</div>
    <div class="adm-row2">${fld('admRate','Rating',t.r,'4.8')}${fld('admRev','Reviews',t.rev,'860')}</div>

    <div class="adm-sec">Hero media</div>
    <div class="field"><label>Show at the top of the trek page</label>
      <div class="adm-status">
        <button type="button" class="adm-status-btn ${t.hvideo?'':'on'}" id="admHeroImg" onclick="admSetHero(false)">Photo</button>
        <button type="button" class="adm-status-btn ${t.hvideo?'on':''}" id="admHeroVid" onclick="admSetHero(true)">Video</button>
      </div></div>
    ${fld('admImg','Image URL',img,'https://…')}
    <div class="adm-imgprev" id="admImgPrev" style="${img?`background-image:url('${esc(img)}')`:''}"></div>
    ${fld('admVid','Video link (YouTube, Instagram, Vimeo or .mp4)',t.hvid,'https://youtube.com/watch?v=…')}
    <div class="adm-hint" id="admVidHint">The photo is still used as the video's cover, and as the card image everywhere else. Pick “Photo” to keep the video attached but hidden.</div>

    <div class="adm-sec">Day-by-day itinerary</div>
    <div class="adm-hint">Add each day — this shows on the trip page. Leave empty to use the attached PDF only.</div>
    <div id="admItinDays"></div>
    <button type="button" class="btn ghost sm" style="margin-top:8px" onclick="admItinAdd()"><span class="msr">add</span> Add a day</button>

    <div class="adm-sec">Itinerary PDF</div>
    ${fld('admItin','Link to the itinerary',t.itin,'https://… or upload below')}
    <div class="adm-itin">
      <button type="button" class="btn ghost sm" onclick="document.getElementById('admItinFile').click()">
        <span class="msr">upload_file</span> Upload a PDF</button>
      <span class="adm-itin-st" id="admItinSt">${t.itin?'Attached':'No file attached'}</span>
    </div>
    <input type="file" id="admItinFile" accept="application/pdf,.pdf" style="display:none" onchange="admUploadItin(this)">
    <div class="adm-hint">Trekkers get this from the Itinerary screen's download button. Paste any link (Drive, Notion, your site) or upload a PDF. Leave blank to keep the auto-generated one.</div>

    <div class="adm-sec">Trek leader</div>
    <div class="field"><label>Assign a guide</label><div class="inp"><select id="admGuide" style="all:unset;flex:1;color:var(--text)">
      <option value="" style="color:#000">— None —</option>
      ${guides.map(gd=>`<option value="${esc(gd.id)}" ${String(t.guide_id||'')===String(gd.id)?'selected':''} style="color:#000">${esc(gd.name)}${gd.verified?' ✓':''}</option>`).join('')}
    </select></div></div>
    <div class="adm-hint">Shown as “Your trek leader” on the trek page. Manage guides in the <b>Guides</b> tab.</div>

    <div class="adm-sec">Description</div>
    <div class="field"><textarea id="admDesc" class="adm-ta" placeholder="A short, inviting description of the trek…">${esc(t.desc||'')}</textarea></div>

    <div class="adm-ed-foot"><button class="btn ghost" onclick="closeAdminForm()">Cancel</button><button class="btn" onclick="saveTrek()"><span class="msr">check</span> <span id="admSaveWord">Save ${word}</span></button></div>
  </div>`;
  f.style.display='block';hydrate(f);admItinRender();
  _admHl=normHl(t).slice();renderAdmHlChips();
  f.scrollIntoView({behavior:'smooth',block:'start'});
  const imgInp=document.getElementById('admImg');
  if(imgInp)imgInp.addEventListener('input',()=>{const p=document.getElementById('admImgPrev');if(p)p.style.backgroundImage=imgInp.value.trim()?`url('${normalizeImageUrl(imgInp.value).replace(/'/g,'%27')}')`:'';});
  const tagInp=document.getElementById('admTag');
  if(tagInp)tagInp.addEventListener('input',admSyncTagChips);
  const vidInp=document.getElementById('admVid');
  if(vidInp){vidInp.addEventListener('input',admCheckHeroLink);admCheckHeroLink();}
}
function newTrek(){editIdx=-1;adminTab='Treks';_admHub=false;renderAdmin();loadGuides().then(()=>showAdminForm({lvl:'Easy',region:'Uttarakhand'}));}
function editTrek(i){editIdx=i;loadGuides().then(()=>showAdminForm(treks[i]));}
function closeAdminForm(){const f=document.getElementById('adminForm');f.style.display='none';f.innerHTML='';}
async function saveTrek(){const g=id=>document.getElementById(id);
  const reqRaw=(g('admReq')?g('admReq').value:'').trim();
  const req=reqRaw===''?null:Math.max(0,Math.min(100,parseInt(reqRaw)||0));
  const soon=g('admStatusSoon')?g('admStatusSoon').classList.contains('on'):false;
  admItinReadDOM();const itinArr=_admItin.filter(d=>d[0]&&d[0].trim()).map(d=>[d[0].trim(),d[1]||'',d[2]||'',d[3]||'']);
  const t={n:g('admN').value.trim()||'Untitled',region:g('admReg').value.trim()||'Uttarakhand',lvl:g('admLvl').value,
    type:(g('admType')?g('admType').value:'trek'),
    dest_id:(g('admDest')?g('admDest').value:'')||'',departure_type:(g('admDepType')?g('admDepType').value:'both'),itinerary:itinArr,
    pickup:(g('admPickup')?g('admPickup').value:'').trim(),dropoff:(g('admDrop')?g('admDrop').value:'').trim(),pickup_map:(g('admPickMap')?g('admPickMap').value:'').trim(),
    price:parseInt(g('admPrice').value)||0,days:parseInt(g('admDays').value)||1,alt:g('admAlt').value.trim(),
    dist:g('admDist').value.trim(),best:g('admBest').value.trim(),r:parseFloat(g('admRate').value)||4.7,
    rev:g('admRev').value.trim()||'0',img:normalizeImageUrl(g('admImg').value),desc:g('admDesc').value.trim(),
    tag:(g('admTag')?g('admTag').value:'').trim().slice(0,28),
    offer:(g('admOffer')?g('admOffer').value:'').trim().slice(0,160),
    discount:Math.max(0,Math.min(90,parseInt(g('admDiscount')?g('admDiscount').value:'')||0)),
    highlights:_admHl.slice(),
    itin:(g('admItin')?g('admItin').value:'').trim(),
    hvid:(g('admVid')?g('admVid').value:'').trim(),
    hvideo:!!(g('admHeroVid')&&g('admHeroVid').classList.contains('on')),
    guide_id:(g('admGuide')?g('admGuide').value:'')||null,
    req:req,soon:soon};
  if(editIdx<0){treks.push(t);} else {t._id=treks[editIdx]._id;treks[editIdx]=t;}
  deriveTreks();renderHomeChips();renderHome();renderQuick();
  closeAdminForm();renderAdmin();
  /* persist to backend */
  if(!sbOn){note('Saved on this device only (Supabase not connected).');return;}
  const ok = t._id
    ? await sbWriteChecked('PATCH','treks?id=eq.'+t._id,trekToRow(t))
    : await sbWriteChecked('POST','treks',trekToRow(t));
  if(ok){bustTreksCache();await loadTreks(true);note('Saved for everyone ✓');}
}
async function delTrek(i){const t=treks[i];if(!(await askConfirm('Delete "'+t.n+'"? This cannot be undone.','Delete trek')))return;
  if(sbOn&&t._id){const ok=await sbWriteChecked('DELETE','treks?id=eq.'+t._id);if(!ok)return;}
  bustTreksCache();   /* or the deleted trek is resurrected from the stale cache on next load */
  treks.splice(i,1);deriveTreks();renderHomeChips();renderHome();renderQuick();renderAdmin();
  note('Deleted ✓');}
/* ---- services: rent gear / permits / adventure activities ---- */
/* full rental catalog, grouped by category — [name, ₹/day] */
const GEAR_CATS=[
  {cat:'Footwear',icon:'hiking',items:[['Trekking Shoes',150],['Snow Boots',250],['Mountaineering Boots',400]]},
  {cat:'Backpacks',icon:'backpack',items:[['30L Daypack',100],['50–55L Trek Backpack',150],['65–70L Expedition Backpack',200],['Duffel Bag (90–100L)',100]]},
  {cat:'Winter Gear',icon:'ac_unit',items:[['Down Jacket',200],['Waterproof Jacket',120],['Rain Poncho',60],['Gaiters',80]]},
  {cat:'Camping',icon:'festival',items:[['Sleeping Bag (0°C to -10°C)',200],['Sleeping Bag (-20°C Expedition)',300],['Sleeping Mat',50],['2 Person Tent',400],['4 Person Tent',600],['Camping Chair',100],['Camping Table',200]]},
  {cat:'Trekking Essentials',icon:'explore',items:[['Trekking Pole (Pair)',80],['Headlamp',50],['Helmet',100],['Climbing Harness',200],['Carabiner Set',50],['Ice Axe',150],['Crampons',150],['Microspikes',100]]},
  {cat:'Technical Climbing',icon:'terrain',items:[['Static Rope',400],['Dynamic Rope',500],['Ascender (Jumar)',150],['Descender (ATC/Figure 8)',100],['Belay Device',100]]},
  {cat:'Cooking & Expedition',icon:'outdoor_grill',items:[['Camping Stove',150],['Cooking Set',150],['Mess Tent',800],['Toilet Tent',250]]},
  {cat:'Electronics',icon:'photo_camera',items:[['Power Bank',100],['GPS Device',300],['Walkie Talkie',250],['GoPro',700],['DSLR Camera',1000],['Drone (DJI Mini Class)',2000],['Tripod',150]]},
  {cat:'Cycling',icon:'directions_bike',items:[['Mountain Bike',700],['Cycling Helmet',100]]},
  {cat:'Water Sports',icon:'kayaking',items:[['Kayak',1000],['Life Jacket',150],['Snorkeling Kit',300],['Wetsuit',400]]},
  {cat:'Winter Sports',icon:'downhill_skiing',items:[['Ski Set',1000],['Snowboard',1200],['Ski Helmet',200]]}
];
function gearAllItems(){const out=[];GEAR_CATS.forEach(c=>c.items.forEach(it=>out.push({cat:c.cat,icon:c.icon,name:it[0],price:it[1]})));return out;}
const permitTypes=[['Forest Entry Permit','Required for most Uttarakhand treks (Sankri, Govindghat).','1–2 days','₹350'],['National Park Permit','Valley of Flowers & Hemkund route entry.','1 day','₹400'],['Eco-Zone / Camping','Designated camping & eco-sensitive-zone clearance.','2 days','₹300'],['Foreigner Permit','Extra documentation for non-Indian trekkers.','3–4 days','₹900']];
const activitiesData=[['raft','River Rafting','Rishikesh · Grade III','₹1,200'],['para','Paragliding','Mussoorie / Tehri','₹2,500'],['bungee','Bungee Jump','Rishikesh · 83 m','₹3,700'],['ski','Skiing','Auli · with gear','₹2,200'],['camp','Camping','Lakeside · per night','₹999'],['kayak','Kayaking','Tehri Lake','₹1,500']];

/* ============================================================
   ADVENTURE MARKETPLACE — destinations & bookable activities
   ------------------------------------------------------------
   Live: Rishikesh only. Everything else is soon:true until we
   have signed operators — an empty destination is worse than none.

   ⚠ Prices, slots and operator details are PLACEHOLDERS.
   Replace with operator-confirmed numbers before selling.
   Safety text must be signed off by the operator, not guessed.
   ============================================================ */
const DESTS=[
  {id:'rishikesh',n:'Rishikesh',state:'Uttarakhand',img:U+'1591017403286-fd8493524e1e',
   best:'Sep - Jun (rafting shuts in monsoon)',lvl:'Beginner friendly',budget:'Rs 2,000 - 5,000 / day',
   blurb:'India’s adventure capital on the Ganga — rafting, bungee, cliff jumping and riverside camps, all within a few km.',
   attractions:['Laxman Jhula','Beatles Ashram','Triveni Ghat','Neer Waterfall'],
   tips:['Carry a change of clothes for rafting days.','Alcohol and meat are banned in the temple town area.','Book the Shivpuri stretch early on weekends — it sells out.'],
   near:['Chopta','Auli']},
  {id:'manali',n:'Manali',state:'Himachal',img:U+'1626621341517-bbf3d9990a23',
   best:'Mar - Jun, Oct - Feb (snow)',lvl:'All levels',budget:'Rs 2,500 - 6,000 / day',
   blurb:'Solang and the Atal Tunnel put paragliding, snow sports and high-mountain drives within 30 minutes of town.',
   attractions:['Solang Valley','Atal Tunnel','Hadimba Temple','Old Manali'],
   tips:['Solang is busiest 11am-3pm — go early.','Carry ID for Rohtang / Atal permits.','Snow gear rents cheaper in town than at Solang.'],
   near:['Kasol','Bir Billing','Spiti Valley']},
  {id:'kasol',n:'Kasol',state:'Himachal',img:U+'1626621341517-bbf3d9990a23',
   best:'Mar - Jun, Sep - Nov',lvl:'Easy - Moderate',budget:'Rs 1,500 - 3,500 / day',
   blurb:'Parvati valley base for Kheerganga, riverside cafes and slow mountain days.',
   attractions:['Kheerganga','Tosh','Malana','Manikaran Sahib'],
   tips:['Kheerganga is a 12 km round trip — start before 9am.','Cash is king; ATMs are unreliable.','Respect Malana’s local customs and no-touch rules.'],
   near:['Manali','Bir Billing']},
  {id:'bir',n:'Bir Billing',state:'Himachal',img:U+'1600011689032-8b628b8a8747',
   best:'Mar - Jun, Sep - Nov',lvl:'Beginner friendly',budget:'Rs 1,500 - 4,000 / day',
   blurb:'India’s paragliding capital — take off at Billing, land at Bir. No experience needed.',
   attractions:['Billing take-off','Bir landing ground','Sherab Ling Monastery','Bir tea gardens'],
   tips:['Flights are morning-only, when the wind allows.','Carry a windproof layer — it is cold at take-off.','Monsoon (Jul-Aug) is closed for flying.'],
   near:['Manali','Kasol']},
  {id:'chopta',n:'Chopta',state:'Uttarakhand',img:U+'1714744715493-ad89b7ff503e',
   best:'Mar - Jun, Sep - Nov (snow Dec-Feb)',lvl:'Easy - Moderate',budget:'Rs 1,500 - 3,500 / day',
   blurb:'The “mini Switzerland” of Uttarakhand — meadows, Tungnath temple and the Chandrashila summit.',
   attractions:['Tungnath Temple','Chandrashila Summit','Deoriatal','Kanchula Korak'],
   tips:['Tungnath is the world’s highest Shiva temple — 3.5 km up.','Very limited food above Chopta; carry snacks.','Nights are cold year-round.'],
   near:['Rishikesh','Auli']},
  {id:'auli',n:'Auli',state:'Uttarakhand',img:U+'1551524559-8af4e6624178',
   best:'Jan - Mar (skiing), Apr - Jun',lvl:'Beginner - Intermediate',budget:'Rs 2,500 - 6,000 / day',
   blurb:'India’s best-known ski slope, with Nanda Devi straight ahead and Asia’s longest cable car.',
   attractions:['Auli ski slopes','Auli Ropeway','Gurson Bugyal','Nanda Devi views'],
   tips:['Snow is reliable Jan-Mar only.','Ski gear rents at the slope; book instructors ahead.','Joshimath is the base town for stays.'],
   near:['Chopta','Rishikesh']},
  {id:'leh',n:'Leh',state:'Ladakh',img:U+'1581793745862-99fde7fa73d2',
   best:'Jun - Sep',lvl:'Moderate (altitude)',budget:'Rs 3,000 - 7,000 / day',
   blurb:'High-desert Ladakh — Zanskar rafting, Khardung La rides and moonscape valleys above 11,000 ft.',
   attractions:['Pangong Lake','Nubra Valley','Khardung La','Magnetic Hill'],
   tips:['Take 48 hours to acclimatise before any activity. This is not optional.','Inner Line Permits are needed for Nubra / Pangong.','Carry cash — connectivity is patchy outside Leh.'],
   near:['Spiti Valley','Kashmir']},
  {id:'spiti',n:'Spiti Valley',state:'Himachal',img:U+'1626621341517-bbf3d9990a23',
   best:'May - Oct (road open)',lvl:'Moderate - Difficult',budget:'Rs 2,500 - 6,000 / day',
   blurb:'A cold desert of monasteries and 4,000 m villages — Chandratal, Key, Hikkim and long empty roads.',
   attractions:['Key Monastery','Chandratal Lake','Hikkim','Langza'],
   tips:['Acclimatise at Kaza before going higher.','Fuel up at Kaza — the next pump is far.','Kunzum and Rohtang close with early snow; check road status.'],
   near:['Manali','Leh']},
  {id:'goa',n:'Goa',state:'Goa',img:U+'1512343879784-a960bf40e7f2',
   best:'Nov - Mar',lvl:'Beginner friendly',budget:'Rs 2,000 - 5,000 / day',
   blurb:'Warm-water diving, snorkelling and parasailing off Grande Island and the north beaches.',
   attractions:['Grande Island','Dudhsagar Falls','Palolem Beach','Fort Aguada'],
   tips:['Water sports shut in monsoon (Jun-Sep).','Grande Island trips leave early from Mormugao.','Agree the price before boarding any boat.'],
   near:['Andaman']},
  {id:'meghalaya',n:'Meghalaya',state:'Meghalaya',img:U+'1600011689032-8b628b8a8747',
   best:'Oct - Apr',lvl:'Moderate',budget:'Rs 2,000 - 4,500 / day',
   blurb:'Living root bridges, river caves and the clearest water in India at Umngot.',
   attractions:['Double Decker Root Bridge','Dawki / Umngot River','Nohkalikai Falls','Mawsmai Cave'],
   tips:['The Double Decker is 3,000+ steps down and back — it is a real trek.','Wettest place on earth: waterproof everything.','Caves flood in monsoon and close.'],
   near:['Andaman']},
  {id:'andaman',n:'Andaman',state:'Andaman & Nicobar',img:U+'1512343879784-a960bf40e7f2',
   best:'Oct - May',lvl:'Beginner friendly',budget:'Rs 3,000 - 7,000 / day',
   blurb:'India’s best diving — coral, sea walks and Havelock’s white sand.',
   attractions:['Radhanagar Beach','Havelock Island','Cellular Jail','Neil Island'],
   tips:['Do not fly within 18-24 hours of diving.','Ferries between islands sell out — book ahead.','Mobile data is weak; download maps offline.'],
   near:['Goa']},
  {id:'kashmir',n:'Kashmir',state:'Jammu & Kashmir',img:U+'1756847845343-7a1053567775',
   best:'Apr - Oct, Dec - Feb (ski)',lvl:'All levels',budget:'Rs 2,500 - 6,000 / day',
   blurb:'Gulmarg’s gondola and powder in winter; alpine lakes and meadows through summer.',
   attractions:['Gulmarg Gondola','Dal Lake','Pahalgam','Sonmarg'],
   tips:['Gulmarg powder season is Jan-Feb.','Check local advisories before you travel.','Shikara and pony rates are negotiable — agree first.'],
   near:['Leh']}
];

/* Baseline safety per activity type. Generic, well-established rules only — the
   operator’s own briefing and medical limits always take precedence over these. */
const SAFETY_BASE={
  water:['Life jacket and helmet stay on for the whole activity.','Tell your guide if you cannot swim — you can still take part.','Declare pregnancy, heart, spine or blood-pressure conditions before booking.','The operator’s call on water conditions is final.'],
  air:['Fly only with a certified pilot on inspected equipment.','Weight and age limits are confirmed by the operator at check-in.','Declare heart, blood-pressure, epilepsy, recent surgery or pregnancy before booking.','Flights are cancelled in poor wind or visibility — no exceptions.'],
  snow:['Helmet is mandatory. Take an instructor for your first session.','Dress for wind chill; snow glare needs eye protection.','Declare any joint, heart or blood-pressure conditions.','Slopes close in poor visibility or avalanche risk.'],
  ride:['Helmet mandatory. Stay with your guide and on marked trails.','Not suitable with back, neck or heart conditions.','The operator’s call on route and weather is final.'],
  trail:['Go with a registered guide — do not trek alone.','Acclimatise properly and descend if you feel altitude sickness.','Carry water, warm layers and a headlamp.','Mountain weather turns fast; the guide’s call is final.'],
  sea:['A certified instructor supervises you at all times.','Do not fly within 18-24 hours of diving.','Declare asthma, heart, sinus or ear conditions before booking.','Never hold your breath on ascent — follow your briefing exactly.']
};
const CARRY_BASE={
  water:['Quick-dry clothes','Change of clothes','Towel','Strapped floaters'],
  air:['Fitted clothing','Sports shoes','Windproof layer','Photo ID'],
  snow:['Warm layers','Gloves','Sunglasses or goggles','Sunscreen'],
  ride:['Closed shoes','Sunglasses','Scarf or buff','Photo ID'],
  trail:['Trek shoes','Water bottle','Warm layer','Headlamp'],
  sea:['Swimwear','Towel','Sunscreen','Change of clothes']
};
const INC_BASE={
  water:['Certified guide','Safety gear','Equipment','Basic first aid'],
  air:['Certified pilot','Full harness and helmet','Pre-flight briefing'],
  snow:['Instructor session','Ski or board and boots','Helmet'],
  ride:['Guide','Vehicle and fuel','Helmet','Basic first aid'],
  trail:['Registered guide','Permits where needed','Basic first aid'],
  sea:['Certified instructor','Full gear','Briefing and shore support']
};
const EXC_BASE=['Transport to the start point','Photos and videos','Meals','Personal expenses and tips','Anything not listed under Inclusions'];

/* [id, dest, name, cat, price, dur, lvl, minAge, maxGroup, startPoint, safetyKey, grade] */
const ACT_SEED=[
  ['raft16','rishikesh','River Rafting — Shivpuri to NIM Beach','Water',1200,'3-4 hrs','Moderate',14,8,'Shivpuri (16 km stretch)','water','Grade III+'],
  ['bungee','rishikesh','Bungee Jumping — 83 m','Air',3700,'2-3 hrs','Extreme',12,1,'Mohanchatti','air','83 m platform'],
  ['zipline-rsh','rishikesh','Flying Fox / Zipline','Air',1800,'1-2 hrs','Easy',12,3,'Mohanchatti','air','1 km span'],
  ['camp-rsh','rishikesh','Riverside Camping','Camp',999,'1 night','Easy',5,20,'Byasi','trail','Tented camp'],
  ['kayak-rsh','rishikesh','Kayaking on the Ganga','Water',1500,'2 hrs','Moderate',14,6,'Brahmapuri','water','Grade II-III'],
  ['para-manali','manali','Paragliding — Solang Valley','Air',2500,'15-20 min','Easy',12,1,'Solang Valley','air','Tandem'],
  ['zip-manali','manali','Zipline — Solang','Air',900,'30 min','Easy',10,4,'Solang Valley','air','Cable span'],
  ['atv-manali','manali','ATV Ride — Solang','Ride',1200,'20-30 min','Easy',14,2,'Solang Valley','ride','Off-road track'],
  ['ski-manali','manali','Skiing — Solang (winter)','Snow',2000,'2-3 hrs','Beginner',10,6,'Solang Valley','snow','Beginner slope'],
  ['kheerganga','kasol','Kheerganga Trek','Trek',2500,'2 days','Moderate',12,15,'Barshaini','trail','12 km round trip'],
  ['camp-kasol','kasol','Parvati Riverside Camping','Camp',1200,'1 night','Easy',5,20,'Kasol','trail','Tented camp'],
  ['para-bir','bir','Paragliding — Billing to Bir','Air',3000,'20-30 min','Easy',12,1,'Billing take-off','air','Tandem, 2,400 m'],
  ['tungnath','chopta','Tungnath and Chandrashila Trek','Trek',2200,'1 day','Moderate',10,15,'Chopta','trail','9 km round trip'],
  ['camp-chopta','chopta','Meadow Camping — Chopta','Camp',1500,'1 night','Easy',5,20,'Chopta','trail','Tented camp'],
  ['ski-auli','auli','Skiing — Auli','Snow',2200,'Half day','Beginner',10,6,'Auli slopes','snow','Beginner-intermediate'],
  ['snowboard-auli','auli','Snowboarding — Auli','Snow',2600,'Half day','Intermediate',14,4,'Auli slopes','snow','Intermediate'],
  ['ropeway-auli','auli','Auli Ropeway','Ride',1000,'45 min','Easy',3,6,'Joshimath','ride','4 km cable car'],
  ['raft-zanskar','leh','Zanskar River Rafting','Water',2500,'3-4 hrs','Difficult',16,8,'Chilling','water','Grade III-IV'],
  ['safari-leh','leh','Nubra and Khardung La Jeep Safari','Ride',4500,'1 day','Moderate',8,6,'Leh','ride','5,359 m pass'],
  ['bike-leh','leh','Mountain Biking — Khardung La descent','Ride',3000,'Half day','Difficult',16,8,'Khardung La','ride','Downhill'],
  ['safari-spiti','spiti','Spiti Jeep Safari','Ride',4000,'1 day','Moderate',8,6,'Kaza','ride','High passes'],
  ['camp-chandratal','spiti','Chandratal Camping','Camp',2500,'1 night','Moderate',10,15,'Chandratal','trail','4,250 m'],
  ['bike-spiti','spiti','Mountain Biking — Spiti','Ride',2800,'Half day','Difficult',16,8,'Kaza','ride','High altitude'],
  ['scuba-goa','goa','Scuba Diving — Grande Island','Sea',3500,'Half day','Beginner',10,4,'Mormugao jetty','sea','Try-dive'],
  ['snorkel-goa','goa','Snorkelling — Grande Island','Sea',1500,'2 hrs','Easy',8,10,'Mormugao jetty','sea','Shallow reef'],
  ['para-goa','goa','Parasailing — North Goa','Air',1800,'15 min','Easy',10,2,'Calangute','air','Boat tow'],
  ['root-bridge','meghalaya','Double Decker Root Bridge Trek','Trek',2000,'1 day','Difficult',12,12,'Tyrna','trail','3,000+ steps'],
  ['kayak-dawki','meghalaya','Kayaking — Umngot River, Dawki','Water',1200,'2 hrs','Easy',8,4,'Dawki','water','Flat water'],
  ['cave-megh','meghalaya','Caving — Mawsmai','Trek',800,'1-2 hrs','Easy',6,10,'Cherrapunji','trail','Lit cave'],
  ['scuba-andaman','andaman','Scuba Diving — Havelock','Sea',4000,'Half day','Beginner',10,4,'Havelock Island','sea','Try-dive'],
  ['snorkel-andaman','andaman','Snorkelling — Elephant Beach','Sea',1500,'2 hrs','Easy',8,10,'Havelock Island','sea','Shallow reef'],
  ['seawalk-andaman','andaman','Sea Walking — North Bay','Sea',3500,'2 hrs','Easy',10,4,'North Bay Island','sea','Helmet walk, 5 m'],
  ['ski-gulmarg','kashmir','Skiing — Gulmarg','Snow',3000,'Half day','Beginner',10,6,'Gulmarg','snow','Powder'],
  ['gondola-gulmarg','kashmir','Gulmarg Gondola','Ride',1200,'1-2 hrs','Easy',3,6,'Gulmarg','ride','Phase 1 and 2'],
  ['shikara','kashmir','Shikara Ride — Dal Lake','Ride',800,'1 hr','Easy',3,6,'Dal Lake','water','Flat water']
];
const CAT_IMG={Water:U+'1530866495561-507c9faab2ed',Air:U+'1601024445121-e5b82f020549',Snow:U+'1551524559-8af4e6624178',
  Ride:U+'1581793745862-99fde7fa73d2',Camp:U+'1504280390367-361c6d9f38f4',Trek:U+'1513614835783-51537729c8ba',Sea:U+'1512343879784-a960bf40e7f2'};
/* expand the compact seed rows into full activity objects */
const ACTS=ACT_SEED.map(a=>{
  const [id,dest,n,cat,price,dur,lvl,minAge,maxGroup,start,sk,grade]=a;
  const dn=(DESTS.find(d=>d.id===dest)||{}).n||'';
  return {id,dest,n,cat,price,dur,lvl,minAge,maxGroup,start,grade,
    img:CAT_IMG[cat]||CAT_IMG.Trek,
    map:'https://maps.google.com/?q='+encodeURIComponent(start+' '+dn),
    slots:cat==='Camp'?['14:00']:['09:00','11:30','14:00'],
    desc:n+' at '+dn+'. Run by a local operator with certified guides and safety gear included.',
    inc:INC_BASE[sk]||INC_BASE.trail, exc:EXC_BASE, carry:CARRY_BASE[sk]||CARRY_BASE.trail,
    safety:SAFETY_BASE[sk]||SAFETY_BASE.trail,
    cancel:'Free cancellation up to 24 hrs before the slot. No refund after that.',
    faqs:[['Is this suitable for beginners?','Yes if the difficulty above says Easy or Beginner. Your guide briefs you before you start.'],
          ['What if the weather turns?','If the operator calls it off for safety, you get a full refund or a free reschedule.'],
          ['Do I need my own gear?','No — the safety gear listed under Inclusions is provided.']]};
});
const destById=id=>DESTS.find(d=>d.id===id)||null;
const actsFor=id=>ACTS.filter(a=>a.dest===id);
const actById=id=>ACTS.find(a=>a.id===id)||null;

/* ---- activity detail ---- */
let curAct=null;
/* what the user picked on this screen */
let actSel={date:'',slot:'',adults:1,children:0,exp:'Beginner'};
const EXP_LEVELS=['Beginner','Intermediate','Expert'];
function todayISO(d){const t=new Date();t.setDate(t.getDate()+(d||0));return t.toISOString().slice(0,10);}

function openAct(id){
  const a=actById(id);if(!a)return;
  curAct=id;
  actSel={date:'',slot:(a.slots&&a.slots[0])||'',adults:1,children:0,exp:'Beginner'};
  go('act');renderAct();
}
/* children = anyone under 18 who still clears the activity's minimum age.
   If the minimum age is 18+, children simply cannot join. */
const actAllowsChildren=a=>a.minAge<18;

function renderAct(){
  const a=actById(curAct);if(!a)return;
  const d=destById(a.dest);
  const hero=document.getElementById('actHero');if(hero)hero.style.backgroundImage=`url('${a.img+Q}')`;
  document.getElementById('actName').textContent=a.n;
  document.getElementById('actWhere').textContent=(d?d.n+' · ':'')+a.start;
  /* no invented ratings — say "new" until real reviews exist */
  document.getElementById('actMeta').innerHTML=a.r
    ?`<span class="star">★</span> <b>${a.r}</b> <span class="g" style="color:var(--muted)">(${a.rev} reviews)</span> &nbsp;·&nbsp; <span class="lvl">${esc(a.lvl)}</span>`
    :`<span class="g" style="color:var(--muted)">No reviews yet</span> &nbsp;·&nbsp; <span class="lvl">${esc(a.lvl)}</span>`;
  const stats=[['clock',a.dur,'Duration'],['altitude',a.lvl,'Difficulty'],['user','Age '+a.minAge+'+','Minimum'],['community','Max '+a.maxGroup,'Group size']];
  document.getElementById('actStats').innerHTML=stats.map(s=>
    `<div class="stat"><div class="ic" style="display:grid;place-items:center">${ic(s[0],20)}</div><b style="font-size:11.5px">${esc(s[1])}</b><small>${s[2]}</small></div>`).join('');
  document.getElementById('actDesc').textContent=a.desc||'';

  /* date: today at the earliest */
  const dt=document.getElementById('actDate');
  dt.min=todayISO(0);dt.value=actSel.date||'';

  /* slots */
  document.getElementById('actSlots').innerHTML=(a.slots||[]).map(s=>
    `<span class="tap ${actSel.slot===s?'sel':''}" onclick="pickSlot('${s}')">${s}</span>`).join('');

  /* participants */
  document.getElementById('actAdultAge').textContent='18+';
  document.getElementById('actAdults').textContent=actSel.adults;
  const childRow=document.getElementById('actChildRow');
  childRow.style.display=actAllowsChildren(a)?'':'none';
  document.getElementById('actChildAge').textContent=a.minAge+'–17 yrs';
  document.getElementById('actChildren').textContent=actSel.children;

  /* experience */
  document.getElementById('actExp').innerHTML=EXP_LEVELS.map(l=>
    `<span class="tap ${actSel.exp===l?'sel':''}" onclick="pickExp('${l}')">${l}</span>`).join('');

  /* safety */
  document.getElementById('actSafety').innerHTML=(a.safety||[]).map(s=>
    `<div><span class="msr">priority_high</span>${esc(s)}</div>`).join('');

  /* start point */
  document.getElementById('actStart').textContent=a.start;
  document.getElementById('actTimings').textContent='Slots: '+(a.slots||[]).join(' · ');
  const mp=document.getElementById('actMap');if(mp)mp.href=a.map||'#';

  document.getElementById('actInc').innerHTML=`<div class="inclist yes">${(a.inc||[]).map(x=>`<div><span class="msr">check_circle</span>${esc(x)}</div>`).join('')}</div>`;
  document.getElementById('actExc').innerHTML=`<div class="inclist no">${(a.exc||[]).map(x=>`<div><span class="msr">cancel</span>${esc(x)}</div>`).join('')}</div>`;
  document.getElementById('actCarry').innerHTML=(a.carry||[]).map(x=>`<span>${esc(x)}</span>`).join('');
  document.getElementById('actCancel').textContent=a.cancel||'';
  document.getElementById('actRev').innerHTML=`<div class="empty" style="padding:18px 0"><p style="font-size:12.5px;color:var(--muted)">No reviews yet — be the first once you've done it.</p></div>`;
  document.getElementById('actFaqs').innerHTML=(a.faqs||[]).map(f=>
    `<details class="faq"><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join('');

  recalcAct();
  hydrate(document.getElementById('act'));
}
function pickSlot(s){actSel.slot=s;renderAct();}
function pickExp(l){actSel.exp=l;renderAct();}
function stepPax(kind,delta){
  const a=actById(curAct);if(!a)return;
  if(kind==='a')actSel.adults=Math.max(0,actSel.adults+delta);
  else actSel.children=Math.max(0,actSel.children+delta);
  /* never exceed the operator's max group size */
  const total=actSel.adults+actSel.children;
  if(total>a.maxGroup){
    if(kind==='a')actSel.adults-=delta;else actSel.children-=delta;
    note('This activity allows a maximum of '+a.maxGroup+' people per booking.','Group limit');
  }
  if(actSel.adults<1&&actSel.children>0)actSel.adults=1;   /* a minor cannot go alone */
  renderAct();
}
function actPax(){return actSel.adults+actSel.children;}
function actSubtotal(){
  const a=actById(curAct);if(!a)return 0;
  const child=a.childPrice!=null?a.childPrice:a.price;
  return actSel.adults*a.price+actSel.children*child;
}
function recalcAct(){
  const a=actById(curAct);if(!a)return;
  const dt=document.getElementById('actDate');if(dt)actSel.date=dt.value||'';
  const total=actSubtotal();
  document.getElementById('actTotal').textContent=INR(total);
  document.getElementById('actPriceSub').textContent=actPax()+(actPax()===1?' person':' people')+' · '+INR(a.price)+' each';
  /* age rule stated plainly, not buried */
  const warn=document.getElementById('actAgeWarn');
  if(warn){
    const msgs=[];
    if(!actAllowsChildren(a))msgs.push('Minimum age '+a.minAge+'. Under-'+a.minAge+'s cannot take part.');
    else msgs.push('Minimum age '+a.minAge+'. Anyone younger cannot take part, and under-18s need a parent or guardian present.');
    warn.textContent=msgs.join(' ');warn.style.display='';
  }
  const btn=document.getElementById('actAdd');
  /* reset BOTH disabled + label — otherwise a prior "Starting payment…" sticks across activities */
  if(btn){btn.disabled=false;btn.innerHTML='<span class="msr" style="font-size:18px;vertical-align:-3px;margin-right:5px">bolt</span>Book now';}
}
/* Direct online booking for an adventure activity via Razorpay — no cart, no WhatsApp.
   Confirms date/slot/party, then takes payment (priced server-side by activity ID). */
async function bookActNow(){
  const a=actById(curAct);if(!a)return;
  recalcAct();
  if(!actSel.date){note('Please choose a date for your activity.','Pick a date');return;}
  if(!actSel.slot){note('Please choose a time slot.','Pick a slot');return;}
  const pax=actPax();
  if(pax<1){note('Add at least one participant.','Who\'s going?');return;}
  if(!isLoggedIn()){note('Please sign in to book this activity.','Sign in required').then(()=>{_loginReturn='act';go('login');});return;}
  if(!window.Razorpay){note('Payment gateway is still loading — please wait a few seconds and tap Book again.','Please wait');return;}
  if(!sbOn){note('Payment service not configured. Please contact Tripomonk.','Payment error');return;}
  const leadName=getSavedName()||(getUserEmail()?getUserEmail().split('@')[0]:'Guest');
  const when=actSel.date+' · '+actSel.slot;
  const bk={kind:'activity',act_id:a.id,activity:a.n,trek:a.n,pax,date:when,name:leadName,email:getUserEmail()||'',phone:getSavedMobile()||''};
  const btn=document.getElementById('actAdd');
  if(btn){btn.disabled=true;btn.textContent='Starting payment…';}
  const restore=()=>{if(btn)btn.disabled=false;renderAct();};
  let order;
  try{order=await rzpCall('create',{booking:bk});}
  catch(e){restore();note('Could not reach payment service: '+e,'Payment error');return;}
  if(!order||!order.order_id){restore();note('Could not start payment — '+((order&&order.error)?order.error:'no order returned'),'Payment error');return;}
  const rzp=new window.Razorpay({
    key:order.key_id, order_id:order.order_id, amount:order.amount, currency:order.currency||'INR',
    name:'Tripomonk', description:a.n+' — Adventure Activity', image:'icons/icon-192.png',
    prefill:{name:leadName, email:getUserEmail()||'', contact:getSavedMobile()||''}, notes:{activity:a.n,date:when}, theme:{color:'#2f6bff'},
    handler:async function(response){
      let res;
      try{res=await rzpCall('verify',{razorpay_order_id:response.razorpay_order_id,razorpay_payment_id:response.razorpay_payment_id,razorpay_signature:response.razorpay_signature,booking:bk});}catch(e){res=null;}
      if(!res||!res.ok){note('Payment received but we could not verify it instantly. Our team will confirm shortly — payment ID: '+(response.razorpay_payment_id||'—'),'Verification pending');return;}
      saveUserName(leadName);
      const sbk=(res&&res.booking)||{};
      const b={id:response.razorpay_payment_id,name:leadName,trek:sbk.trek||a.n+' (Activity)',img:a.img||'',date:sbk.date||when,startISO:(actSel.date||''),pax:sbk.pax||pax,total:sbk.total||actSubtotal(),paid:sbk.paid||actSubtotal(),ts:Date.now(),status:'Confirmed',checkedIn:false,paymentId:response.razorpay_payment_id};
      const all=getBookings();all.unshift(b);saveBookings(all);
      if(window.fbTrack)window.fbTrack('Purchase',{value:Number(b.total)||Number(b.paid)||0,currency:'INR',content_name:b.trek||'',content_type:'product'});
      note('Payment successful! '+a.n+' is booked for '+when+'.','Booked ✓').then(()=>go('bookings'));
    },
    modal:{ondismiss:function(){restore();note('Payment cancelled — your activity is not yet booked.','Cancelled');}}
  });
  rzp.open();restore();
}

/* ============================================================
   PRICING ENGINE
   ------------------------------------------------------------
   ⚠ Everything here is DISPLAY ONLY. The razorpay edge function
   already prices server-side (pricedBooking) and must keep doing
   so — a total sent from the browser can be edited by the user.
   Step 4 mirrors this function in the edge function; this copy
   only tells the customer what they're about to pay.

   Defaults match how treks are sold today: no separate GST line
   and no convenience fee. Do not switch those on without your CA.
   ============================================================ */
const MKT_PRICING={
  gstPct:0,          /* ⚠ treks show no GST line today. Confirm rate + ITC with your CA first. */
  conveniencePct:0,  /* 0 = no booking fee, matching the trek flow */
  weekendPct:0,      /* weekend/seasonal surcharge, off until operators confirm */
  groupTiers:[{min:6,pct:5},{min:10,pct:10}],
  /* ⚠ client-side coupons are visible and forgeable. The edge function MUST
     re-validate any code before it affects the amount charged. */
  coupons:{TREK10:{pct:10,label:'10% off'}}
};
const isWeekendISO=iso=>{if(!iso)return false;const d=new Date(iso+'T00:00:00').getDay();return d===0||d===6;};
const pct=(n,p)=>Math.round(n*p/100);

/* pure: same inputs -> same breakdown. Mirror this server-side. */
function priceCart(items,opts){
  opts=opts||{};
  const lines=(items||[]).map(it=>{
    /* treks are multi-day departures: one price per head, no weekend surcharge */
    if(it.kind==='trek'){
      const t=treks.find(x=>x.n===it.trekName);
      const per=it.unitPrice||(t?t.price:0);
      const base=per*(it.adults||1);
      return {kind:'trek',trekName:it.trekName,name:it.trekName,per,base,weekend:0,
              pax:it.adults||1,adults:it.adults||1,children:0,date:it.date,slot:'',total:base};
    }
    const a=actById(it.actId);
    const per=a?a.price:0;
    const childPer=(a&&a.childPrice!=null)?a.childPrice:per;
    const base=it.adults*per+it.children*childPer;
    const weekend=isWeekendISO(it.date)?pct(base,MKT_PRICING.weekendPct):0;
    return {kind:'activity',actId:it.actId,name:a?a.n:'(removed)',per,base,weekend,pax:it.adults+it.children,
            adults:it.adults,children:it.children,date:it.date,slot:it.slot,total:base+weekend};
  });
  const subtotal=lines.reduce((s,l)=>s+l.base,0);
  const weekendTotal=lines.reduce((s,l)=>s+l.weekend,0);
  const totalPax=lines.reduce((s,l)=>s+l.pax,0);
  /* biggest tier the headcount qualifies for */
  const tier=MKT_PRICING.groupTiers.filter(t=>totalPax>=t.min).sort((a,b)=>b.pct-a.pct)[0];
  const groupPctVal=tier?tier.pct:0;
  const groupDisc=pct(subtotal+weekendTotal,groupPctVal);
  const code=(opts.coupon||'').trim().toUpperCase();
  const cp=MKT_PRICING.coupons[code];
  const couponDisc=cp?pct(subtotal+weekendTotal-groupDisc,cp.pct):0;
  const net=Math.max(0,subtotal+weekendTotal-groupDisc-couponDisc);
  const convenience=pct(net,MKT_PRICING.conveniencePct);
  const gst=pct(net+convenience,MKT_PRICING.gstPct);
  const grand=net+convenience+gst;
  return {lines,subtotal,weekendTotal,totalPax,groupPct:groupPctVal,groupDisc,
          coupon:cp?code:'',couponLabel:cp?cp.label:'',couponDisc,couponInvalid:!!(code&&!cp),
          convenience,gst,grand};
}

/* ---- cart state (per account, survives reload) ---- */
let cartItems=[],cartCoupon='';
function cartKey(){return currentUser?('tmk_cart_'+currentUser.id):'tmk_cart_guest';}
function loadCart(){
  try{const r=JSON.parse(localStorage.getItem(cartKey())||'{}');
    cartItems=Array.isArray(r.items)?r.items:[];cartCoupon=r.coupon||'';}
  catch(e){cartItems=[];cartCoupon='';}
  /* drop anything whose activity/trek no longer exists — must handle BOTH kinds,
     or every trek in the cart gets silently deleted on reload */
  cartItems=cartItems.filter(i=>i.kind==='trek'?treks.some(t=>t.n===i.trekName):actById(i.actId));
  updateCartBadge();
}
function saveCart(){
  try{localStorage.setItem(cartKey(),JSON.stringify({items:cartItems,coupon:cartCoupon}));}catch(e){}
  updateCartBadge();
}
function cartCount(){return cartItems.length;}
function updateCartBadge(){
  const n=cartCount();
  document.querySelectorAll('.cart-badge').forEach(b=>{b.textContent=n;b.style.display=n?'':'none';});
  const fab=document.getElementById('cartFab');
  if(fab)fab.style.display=n?'':'none';
}

/* nothing gets added half-filled — the operator needs a real date, slot and headcount */
function validateAct(){
  const a=actById(curAct);if(!a)return 'Something went wrong — please reopen this activity.';
  if(!actSel.date)return 'Please choose a date.';
  if(actSel.date<todayISO(0))return 'That date has passed — please pick today or later.';
  if(!actSel.slot)return 'Please choose a time slot.';
  if(actPax()<1)return 'Add at least one participant.';
  if(actPax()>a.maxGroup)return 'This activity allows a maximum of '+a.maxGroup+' people per booking.';
  return '';
}
function addActToCart(){
  const err=validateAct();
  if(err){note(err,'Check your booking');return;}
  const a=actById(curAct);
  /* same activity + same date + same slot = update it, don't stack duplicates */
  const dup=cartItems.find(i=>i.actId===curAct&&i.date===actSel.date&&i.slot===actSel.slot);
  if(dup){
    const merged=dup.adults+actSel.adults+dup.children+actSel.children;
    if(merged>a.maxGroup){note('You already have this slot in your adventure, and together that exceeds the '+a.maxGroup+'-person limit.','Group limit');return;}
    dup.adults+=actSel.adults;dup.children+=actSel.children;dup.exp=actSel.exp;
  }else{
    cartItems.push({actId:curAct,dest:a.dest,date:actSel.date,slot:actSel.slot,
                    adults:actSel.adults,children:actSel.children,exp:actSel.exp});
  }
  saveCart();
  note(a.n+' added to your adventure.','Added ✓').then(()=>go('cart'));
}
/* add the selected trek + departure to the same adventure cart */
function addTrekToCart(){
  const t=cart.trek;
  if(!t){note('Please open a trek first.','Nothing selected');return;}
  if(t.soon){note('This trek is not open for booking yet.','Coming soon');return;}
  if(!cart.date){note('Please choose a departure date first.','Pick a date');return;}
  const unit=cart.total||t.price;
  const dup=cartItems.find(i=>i.kind==='trek'&&i.trekName===t.n&&i.date===cart.date);
  if(dup)dup.adults+=1;
  else cartItems.push({kind:'trek',trekName:t.n,date:cart.date,adults:1,children:0,unitPrice:unit});
  saveCart();
  note(t.n+' added to your adventure.','Added ✓').then(()=>go('cart'));
}
function removeCartItem(i){
  const it=cartItems[i];if(!it)return;
  const a=actById(it.actId);
  askConfirm('Remove '+(a?a.n:'this item')+' from your adventure?','Remove').then(ok=>{
    if(!ok)return;
    cartItems.splice(i,1);saveCart();renderCart();
  });
}
function stepCartPax(i,kind,delta){
  const it=cartItems[i];if(!it)return;
  if(kind==='a')it.adults=Math.max(0,it.adults+delta);else it.children=Math.max(0,it.children+delta);
  /* treks have no per-slot group cap — the batch seat count governs at checkout */
  const a=it.kind==='trek'?null:actById(it.actId);
  if(a&&it.adults+it.children>a.maxGroup){
    if(kind==='a')it.adults-=delta;else it.children-=delta;
    note('Maximum '+a.maxGroup+' people for '+a.n+'.','Group limit');
  }
  if(it.kind==='trek'&&it.adults>20){it.adults=20;note('For groups over 20, talk to us directly.','Large group');}
  if(it.adults<1&&it.children>0)it.adults=1;
  if(it.adults+it.children<1){removeCartItem(i);return;}
  saveCart();renderCart();
}
function applyCoupon(){
  const v=(document.getElementById('cartCoupon').value||'').trim().toUpperCase();
  cartCoupon=v;saveCart();renderCart();
}
function clearCart(){
  askConfirm('Clear everything from your adventure?','Clear all').then(ok=>{
    if(!ok)return;cartItems=[];cartCoupon='';saveCart();renderCart();
  });
}

/* ---- cart screen ---- */
const prettyDate=iso=>{if(!iso)return '';const d=new Date(iso+'T00:00:00');
  return d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});};

function renderCart(){
  const body=document.getElementById('cartBody');if(!body)return;
  const clr=document.getElementById('cartClear');if(clr)clr.style.display=cartItems.length?'':'none';
  if(!cartItems.length){
    body.innerHTML=`<div class="empty" style="padding:40px 0">
      <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Your adventure is empty.</p>
      <button class="btn" style="max-width:220px;margin:0 auto" onclick="go('dests')">Browse destinations</button></div>`;
    updateCartBadge();return;
  }
  const b=priceCart(cartItems,{coupon:cartCoupon});
  const items=cartItems.map((it,i)=>{
    const isTrek=it.kind==='trek';
    const t=isTrek?treks.find(x=>x.n===it.trekName):null;
    const a=isTrek?null:actById(it.actId);
    if(!isTrek&&!a)return '';
    if(isTrek&&!t)return '';
    const line=b.lines[i];
    const img=isTrek?t.img:a.img;
    const title=isTrek?t.n:a.n;
    const when=isTrek?`${ic('calendar',11)} ${esc(it.date)} · <i style="font-style:normal;color:var(--accent2)">${t.days} days</i>`
                     :`${ic('calendar',11)} ${esc(prettyDate(it.date))} · ${esc(it.slot)}${isWeekendISO(it.date)&&MKT_PRICING.weekendPct?' · <i style="color:#ffce1f;font-style:normal">weekend</i>':''}`;
    return `<div class="citem">
      <div class="cph" style="background-image:url('${img+Q}')"></div>
      <div class="cbd">
        <h4>${esc(title)}</h4>
        <div class="cwhen">${when}</div>
        <div class="crow">
          <div class="cmini"><small>Adults</small><button onclick="stepCartPax(${i},'a',-1)">−</button><b>${it.adults}</b><button onclick="stepCartPax(${i},'a',1)">+</button></div>
          <span class="cpr">${INR(line.total)}</span>
        </div>
        ${(!isTrek&&it.children)?`<div class="crow" style="margin-top:6px"><div class="cmini"><small>Children</small><button onclick="stepCartPax(${i},'c',-1)">−</button><b>${it.children}</b><button onclick="stepCartPax(${i},'c',1)">+</button></div></div>`:''}
      </div>
      <button class="cx" onclick="removeCartItem(${i})" title="Remove">${ic('trash',18)}</button>
    </div>`;}).join('');

  /* every line shown — no surprise charges at the end */
  const rows=[];
  const nTrek=b.lines.filter(l=>l.kind==='trek').length, nAct=b.lines.length-nTrek;
  const what=nTrek&&nAct?'Treks & activities':nTrek?'Treks':'Activities';
  rows.push(`<div class="br"><span>${what} (${b.totalPax} ${b.totalPax===1?'person':'people'})</span><b>${INR(b.subtotal)}</b></div>`);
  if(b.weekendTotal)rows.push(`<div class="br"><span>Weekend pricing</span><b>+${INR(b.weekendTotal)}</b></div>`);
  if(b.groupDisc)rows.push(`<div class="br off"><span>Group discount (${b.groupPct}% · ${b.totalPax}+ people)</span><b>−${INR(b.groupDisc)}</b></div>`);
  if(b.couponDisc)rows.push(`<div class="br off"><span>Coupon ${esc(b.coupon)} (${esc(b.couponLabel)})</span><b>−${INR(b.couponDisc)}</b></div>`);
  if(b.convenience)rows.push(`<div class="br"><span>Convenience fee</span><b>${INR(b.convenience)}</b></div>`);
  if(b.gst)rows.push(`<div class="br"><span>GST</span><b>${INR(b.gst)}</b></div>`);

  const nextTier=MKT_PRICING.groupTiers.filter(t=>b.totalPax<t.min).sort((a,c)=>a.min-c.min)[0];

  body.innerHTML=`${items}
    <div class="coupon">
      <div class="inp"><span class="msr" style="font-size:18px;color:var(--muted)">sell</span>
        <input id="cartCoupon" placeholder="Coupon code" autocapitalize="characters" value="${esc(cartCoupon)}"/></div>
      <button onclick="applyCoupon()">Apply</button>
    </div>
    ${cartCoupon?`<p class="coupon-msg ${b.couponInvalid?'bad':'ok'}">${b.couponInvalid?'“'+esc(cartCoupon)+'” is not a valid code.':esc(b.coupon)+' applied — '+esc(b.couponLabel)}</p>`:''}
    ${nextTier?`<p class="coupon-msg" style="color:var(--muted2)">Add ${nextTier.min-b.totalPax} more ${nextTier.min-b.totalPax===1?'person':'people'} to unlock ${nextTier.pct}% off.</p>`:''}
    <div class="bill">
      ${rows.join('')}
      <div class="bsep"></div>
      <div class="br grand"><span>Total</span><b>${INR(b.grand)}</b></div>
    </div>
    <button class="btn" onclick="cartCheckout()">Continue to checkout &nbsp;→</button>
    <p style="font-size:11px;color:var(--muted2);text-align:center;margin:12px 0 0;line-height:1.5">
      Final price is confirmed by Tripomonk before payment.</p>
    <div style="height:calc(var(--safe-bottom) + 20px)"></div>`;
  hydrate(body);
  updateCartBadge();
}
function cartCheckout(){
  if(!cartItems.length){note('Add an activity first.','Empty');return;}
  if(!isLoggedIn()){note('Please sign in to book.','Sign in required').then(()=>{_loginReturn='cart';go('login');});return;}
  note('Checkout and payment are the next step — the server must price this cart before it can charge anything.','Coming next');
}

/* ---- destinations grid ---- */
function destCard(d){
  const n=actsFor(d.id).length;
  const gt=toursForDest(d.id).filter(t=>tourDep(t)!=='custom').length;   /* road trips with group departures */
  const season=d.best?String(d.best).split('(')[0].trim():'';
  return `<div class="dcell" onclick="openDest('${d.id}')" style="background-image:url('${d.img+Q}')">
    ${gt?`<span class="dcell-trip"><span class="msr">groups</span>Group Trip</span>`:''}
    ${n?`<span class="dcell-n"><span class="msr">bolt</span>${n}</span>`:''}
    <div class="dcell-b">
      <b>${esc(d.n)}</b>
      <small><span class="msr">place</span>${esc(d.state)}</small>
      ${season?`<span class="dcell-season"><span class="msr">wb_sunny</span>${esc(season)}</span>`:''}
    </div></div>`;
}
function renderDests(){
  const el=document.getElementById('destList');if(!el)return;
  /* destinations that have group-departure road trips float to the top (stable otherwise) */
  const gc=d=>toursForDest(d.id).filter(t=>tourDep(t)!=='custom').length;
  const list=DESTS.map((d,i)=>({d,i})).sort((a,b)=>gc(b.d)-gc(a.d)||a.i-b.i).map(x=>x.d);
  el.innerHTML=`<div class="dgrid">${list.map(destCard).join('')}</div>`;
  hydrate(el);
}
/* ---- one destination ---- */
let curDest=null;
function openDest(id){
  const d=destById(id);if(!d){note('That destination is not available yet.','Not found');return;}
  curDest=id;go('dest');renderDest();
  /* pull the latest (admin may have changed the cover/road trips) and repaint if still open */
  loadDestinations(true).then(()=>{if(cur==='dest'&&curDest===id)renderDest();}).catch(()=>{});
}
function renderDest(){
  /* curDest is set by openDest before this runs; if it's missing (e.g. a stale
     saved-nav restore that lost the destination context) show home, not a blank page */
  const d=destById(curDest);if(!d){go(lastTab||'home');return;}
  const hero=document.getElementById('destHero');if(hero)hero.style.backgroundImage=`url('${d.img+Q}')`;
  document.getElementById('destName').textContent=d.n;
  document.getElementById('destState').textContent=d.state;
  document.getElementById('destBlurb').textContent=d.blurb||'';
  const stats=[['calendar',d.best||'—','Best time'],['altitude',d.lvl||'—','Level'],['card',d.budget||'—','Avg budget']];
  document.getElementById('destStats').innerHTML=stats.map(s=>
    `<div class="stat"><div class="ic" style="display:grid;place-items:center">${ic(s[0],20)}</div><b style="font-size:11px">${esc(s[1])}</b><small>${s[2]}</small></div>`).join('');
  /* road trip packages — highlighted above activities */
  const trips=toursForDest(d.id);
  const rb=document.getElementById('destTripsBlk'),rt=document.getElementById('destTrips');
  if(rb)rb.style.display=trips.length?'':'none';
  if(rt)rt.innerHTML=trips.map(roadTripCard).join('');
  /* activities */
  const acts=actsFor(d.id);
  document.getElementById('destActs').innerHTML=acts.length
    ?acts.map(a=>`<div class="arow" onclick="openAct('${a.id}')">
      <div class="aph" style="background-image:url('${a.img+Q}')"><span class="aph-cat">${esc(a.cat)}</span></div>
      <div class="abd"><h4>${esc(a.n)}</h4>
        <div class="atags"><i>${ic('clock',10)} ${esc(a.dur)}</i><i>${ic('altitude',10)} ${esc(a.lvl)}</i><i>${ic('user',10)} ${a.minAge}+</i></div>
        <div class="apr-in"><span class="apr-p"><small>from</small> <b>${INR(a.price)}</b><small>/person</small></span><span class="abook">Book ${ic('back',12)}</span></div>
      </div></div>`).join('')
    :`<div class="empty"><p>No activities listed here yet.</p></div>`;
  /* attractions / tips / nearby */
  document.getElementById('destAttr').innerHTML=(d.attractions||[]).map(a=>`<span>${esc(a)}</span>`).join('');
  document.getElementById('destTips').innerHTML=`<div class="tiplist">${(d.tips||[]).map(t=>`<div><span class="msr">lightbulb</span>${esc(t)}</div>`).join('')}</div>`;
  const nearBlk=document.getElementById('destNearBlk');
  const near=(d.near||[]);
  if(nearBlk)nearBlk.style.display=near.length?'':'none';
  document.getElementById('destNear').innerHTML=near.map(n=>`<span>${esc(n)}</span>`).join('');
  hydrate(document.getElementById('dest'));
}
let gearSel={};
/* ============================================================
   AI RECOMMENDED GEAR — a context-aware engine + a reusable card
   that drops into any surface (trek detail, packing list, checkout…).
   Recommendations adapt to altitude, season, difficulty & duration,
   and skip gear the user already owns.
   ============================================================ */
/* prices/names mirror the rental catalog (GEAR_CATS) so the kit total matches */
const GEAR_CATALOG=[
  {id:'shoe',   name:'Trekking Shoes',      price:150, icon:'hiking',        when:()=>true,                                                why:'grip on rocky trails'},
  {id:'backpack',name:'50–55L Trek Backpack',price:150,icon:'backpack',      when:()=>true,                                                why:'carry your load'},
  {id:'pole',   name:'Trekking Pole (Pair)',price:80,  icon:'hiking',        when:t=>gAlt(t)>=9000||/moderate|difficult/i.test(t.lvl||''), why:'saves your knees on descents'},
  {id:'headlamp',name:'Headlamp',           price:50,  icon:'flashlight_on', when:t=>(+t.days||1)>=2,                                       why:'early starts & campsites'},
  {id:'jacket', name:'Down Jacket',         price:200, icon:'checkroom',     when:t=>gCold(t),                                             why:'below-freezing nights'},
  {id:'bed',    name:'Sleeping Bag',        price:200, icon:'king_bed',      when:t=>(+t.days||1)>=2&&gCold(t),                            why:'warm nights in camp'},
  {id:'spikes', name:'Microspikes',         price:100, icon:'ac_unit',       when:t=>gSnow(t),                                             why:'traction on snow'},
  {id:'gaiters',name:'Gaiters',             price:80,  icon:'ac_unit',       when:t=>gSnow(t),                                             why:'keep snow out of your boots'},
  {id:'rain',   name:'Waterproof Jacket',   price:120, icon:'umbrella',      when:t=>gMonsoon(t),                                          why:'monsoon showers'}
];
function gAlt(t){const m=String(t&&t.alt||'').replace(/[, ]/g,'').match(/(\d+)/);return m?+m[1]:0;}
function gSeason(t){return String(t&&t.best||'').toLowerCase();}
function gSnow(t){return gAlt(t)>=13500||(/dec|jan|feb|mar/.test(gSeason(t))&&gAlt(t)>=9000);}
function gCold(t){return gAlt(t)>=11000||/dec|jan|feb|nov/.test(gSeason(t))||gSnow(t);}
function gMonsoon(t){return /jul|aug|sep/.test(gSeason(t));}
/* All gear that fits this trek. Nothing is pre-selected — the user taps the ones
   they actually want to hire. */
function gearApplicable(t){if(!t)return[];return GEAR_CATALOG.filter(g=>{try{return g.when(t);}catch(e){return false;}});}
/* the set of gear the user has picked to hire. Global, starts empty. */
function getSelGear(){try{return JSON.parse(localStorage.getItem('tmk_gearsel')||'[]');}catch(e){return[];}}
function toggleSelGear(id){const o=getSelGear();const i=o.indexOf(id);if(i>=0)o.splice(i,1);else o.push(id);try{localStorage.setItem('tmk_gearsel',JSON.stringify(o));}catch(e){}}
function gearSelected(t){const sel=getSelGear();return gearApplicable(t).filter(g=>sel.indexOf(g.id)>=0);}
/* reusable card — tap gear to add it to your rental, then rent the selected items */
function gearRecoCard(t){
  const all=gearApplicable(t);
  if(!all.length)return '';
  const selSet=getSelGear();
  const sel=all.filter(g=>selSet.indexOf(g.id)>=0);
  const total=sel.reduce((s,g)=>s+g.price,0);
  const ctx=[t.lvl,gSnow(t)?'snow':(gCold(t)?'cold':''),gMonsoon(t)?'monsoon':''].filter(Boolean).join(' · ');
  const rows=all.map(g=>{const on=selSet.indexOf(g.id)>=0;
    return '<div class="gr-item" onclick="gearToggle(\''+g.id+'\')">'
      +'<span class="gr-check'+(on?' on':'')+'">'+ic('check',14)+'</span>'
      +'<span class="msr gr-ic">'+g.icon+'</span>'
      +'<div class="gr-tx"><b>'+esc(g.name)+'</b><small>₹'+g.price+'/day · '+esc(g.why)+'</small></div></div>';
  }).join('');
  /* No WhatsApp "Rent" CTA — the selection is paid at checkout with the trek. This is
     just a running summary; the full daily total flows into the booking total. */
  const footer=sel.length
    ? '<div class="gr-kit gr-kit-sel"><span class="gr-kit-ic msr">shopping_bag</span>'
      +'<div class="gr-kit-tx"><b>'+sel.length+' item'+(sel.length>1?'s':'')+' selected · ₹'+total+'/day</b>'
      +'<small>Added to your booking at checkout</small></div></div>'
    : '<div class="gr-kit" style="justify-content:center"><small style="color:var(--muted)">Tap the gear you want to hire.</small></div>';
  return '<div class="gearreco">'
    +'<div class="gr-head"><span class="gr-emoji">🎒</span><b>Recommended Gear</b><span class="gr-count">'+sel.length+' of '+all.length+' selected'+(ctx?' · '+esc(ctx):'')+'</span></div>'
    +'<div class="gr-list">'+rows+'</div>'
    +footer
    +'<p class="gr-note">Suggested for '+esc(t.n)+' by altitude, season & difficulty. Tap the gear you want to hire.</p>'
    +'</div>';
}
function gearToggle(id){toggleSelGear(id);if(cart.trek)refreshGearReco(cart.trek);}
function refreshGearReco(t){
  const el=document.getElementById('dGear');if(!el)return;
  const blk=document.getElementById('dGearBlk');
  const html=gearRecoCard(t);
  if(html){el.innerHTML=html;if(blk)blk.style.display='';hydrate(el);}
  else if(blk){blk.style.display='none';}
}
function renderQuick(){const q=[['pin','Destinations','dests'],['backpack','Rent Gear','gear'],['permits','Permits','permits'],['para','Activities','activities']];const el=document.getElementById('quick');if(!el)return;el.style.gridTemplateColumns='repeat(4,1fr)';el.innerHTML=q.map(a=>`<div class="qa" onclick="go('${a[2]}')"><div class="qi">${ic(a[0],20)}</div><span>${a[1]}</span></div>`).join('');hydrate(el);}
let gearCat='All',gearQ='';
function pickGearCat(c){gearCat=c;renderGear();}
function gearSearch(v){gearQ=v||'';renderGear();}
function togGear(name){gearSel[name]=!gearSel[name];renderGear();}
function renderGear(){
  const catsEl=document.getElementById('gearCats');
  if(catsEl){const cats=['All'].concat(GEAR_CATS.map(c=>c.cat));
    catsEl.innerHTML=cats.map(c=>`<div class="chip pill ${gearCat===c?'on':''}" onclick="pickGearCat('${jsq(c)}')">${esc(c)}</div>`).join('');}
  const q=gearQ.toLowerCase().trim();
  const box=document.getElementById('gearList');if(!box)return;
  let html='';
  GEAR_CATS.filter(c=>gearCat==='All'||c.cat===gearCat).forEach(c=>{
    const items=c.items.filter(it=>!q||it[0].toLowerCase().includes(q));
    if(!items.length)return;
    html+=`<div class="gcat-h"><span class="msr">${c.icon}</span>${esc(c.cat)}</div>`;
    html+=items.map(it=>{const on=!!gearSel[it[0]];
      return `<div class="grow ${on?'on':''}" onclick="togGear('${jsq(it[0])}')"><div class="grow-tx"><b>${esc(it[0])}</b></div><div class="grow-price">₹${it[1]}<small>/day</small></div><span class="grow-chk">${ic('check',14)}</span></div>`;
    }).join('');
  });
  box.innerHTML=html||`<div class="empty" style="padding:26px 10px"><p>No gear matches “${esc(gearQ)}”.</p></div>`;
  const sel=gearAllItems().filter(g=>gearSel[g.name]);
  const total=sel.reduce((s,g)=>s+g.price,0);
  const btn=document.getElementById('gearCta');
  if(btn)btn.innerHTML='<span class="ic" data-i="chat"></span> '+(sel.length?`Enquire to rent (${sel.length}) · ₹${total}/day`:'Enquire to rent');
  hydrate(document.getElementById('gear'));}
function gearEnquire(){
  const sel=gearAllItems().filter(g=>gearSel[g.name]);
  if(!sel.length){wa('Hi Tripomonk, I want to rent trek gear. What do you have available?');return;}
  const lines=sel.map(g=>'• '+g.name+' (₹'+g.price+'/day)');
  const total=sel.reduce((s,g)=>s+g.price,0);
  wa('Hi Tripomonk, I want to rent:\n'+lines.join('\n')+'\n\nTotal: ₹'+total+'/day. Please confirm availability and delivery / pickup.');
}
function permitIcon(name){name=String(name||'').toLowerCase();
  if(name.includes('forest'))return 'pine';
  if(name.includes('national'))return 'altitude';
  if(name.includes('eco')||name.includes('camp'))return 'tent';
  if(name.includes('foreign'))return 'globe';
  return 'permits';}
function renderPermits(q){const lq=(q||'').toLowerCase().trim();
  const list=lq?permitTypes.filter(p=>(p[0]+' '+p[1]).toLowerCase().includes(lq)):permitTypes;
  document.getElementById('permitList').innerHTML=list.length?list.map(p=>
    `<div class="pcard"><div class="p-ic">${ic(permitIcon(p[0]),22)}</div><div class="p-bd"><b>${esc(p[0])}</b><p>${esc(p[1])}</p><div class="p-ft"><span class="p-badge">${ic('clock',12)} ${esc(p[2])} · ${esc(p[3])}</span><button class="p-apply" onclick="applyPermit('${jsq(p[0])}')">Apply</button></div></div></div>`
  ).join(''):'<div class="empty"><p>No permits match your search.</p></div>';
  hydrate(document.getElementById('permits'));}
/* Apply for a permit -> collect details in a form, THEN send a complete request to
   WhatsApp (instead of a bare "I need X" message). */
let _pmPermit='';
function applyPermit(permitName){
  _pmPermit=permitName||'permit';
  const g=id=>document.getElementById(id);
  const m=g('permitModal');if(!m)return;
  g('pmPermit').textContent=_pmPermit;
  g('pmName').value=getSavedName()||'';
  g('pmPhone').value=getSavedMobile()||'';
  g('pmTrek').value=(cart.trek&&cart.trek.n)||'';
  g('pmDates').value=cart.date||'';
  g('pmPax').value=String(cart.pax||1);
  g('pmNat').value=/foreign/i.test(_pmPermit)?'':'Indian';
  m.classList.add('show');
  const close=()=>{m.classList.remove('show');g('pmCancel').onclick=g('pmSend').onclick=m.onclick=null;};
  g('pmCancel').onclick=close;
  m.onclick=e=>{if(e.target===m)close();};
  g('pmSend').onclick=async()=>{
    const name=(g('pmName').value||'').trim();
    const phone=(g('pmPhone').value||'').replace(/\D/g,'');
    const trek=(g('pmTrek').value||'').trim();
    const dates=(g('pmDates').value||'').trim();
    const pax=Math.max(1,parseInt(g('pmPax').value||'1',10)||1);
    const nat=(g('pmNat').value||'').trim();
    if(!name){note('Please enter your name.','Name needed');return;}
    if(phone.length<10){note('Please enter a valid 10-digit WhatsApp number.','Number needed');return;}
    if(!trek){note('Please enter the trek / place you need the permit for.','Trek needed');return;}
    if(name)saveUserName(name);
    /* record the request so it shows in Admin → Permits (best-effort; the table may not be deployed) */
    try{const sb=getSupaClient();if(sb){const uid=await authUid();await sb.from('permit_applications').insert({user_id:uid,permit:_pmPermit,name,phone,trek,dates,pax,nationality:nat,status:'pending'});}}catch(e){}
    const lines=[
      'Permit: '+_pmPermit,
      'Name: '+name,
      'WhatsApp: '+phone,
      'Trek / place: '+trek,
      dates?('Dates: '+dates):'',
      'People: '+pax,
      nat?('Nationality: '+nat):''
    ].filter(Boolean);
    close();
    wa('Hi Tripomonk, I want to apply for a permit:\n'+lines.join('\n')+'\n\nPlease guide me through the process and documents needed.');
  };
}
const ACT_GRAD=['linear-gradient(135deg,#2f6bff,#0a3aa0)','linear-gradient(135deg,#1f9e6b,#0c6b48)','linear-gradient(135deg,#ff7a59,#c43b1b)','linear-gradient(135deg,#5a8cff,#2f4fd0)','linear-gradient(135deg,#e0a200,#b06b00)','linear-gradient(135deg,#16b3c9,#0a6b88)'];
/* photo per activity, mapped from its icon to a category image */
const ACT_ICON_CAT={raft:'Water',para:'Air',bungee:'Air',ski:'Snow',camp:'Camp',kayak:'Water'};
function renderActivities(){
  const el=document.getElementById('actList');if(!el)return;
  el.className='grid2';   /* 2 cards per row */
  el.innerHTML=activitiesData.map((a)=>{
    const img=(CAT_IMG[ACT_ICON_CAT[a[0]]||'Trek']||CAT_IMG.Trek)+Q;
    const nm=a[1].replace(/'/g,'');
    return `<div class="acard" onclick="activityBookForm('${nm}','${jsq(String(a[3]))}')" style="background-image:url('${img}')">`
      +`<span class="acard-go"><span class="msr">arrow_outward</span></span>`
      +`<div class="acard-b"><b>${esc(a[1])}</b>`
      +`<small><span class="msr">place</span>${esc(a[2])}</small>`
      +`<div class="acard-ft"><span class="acard-p">${esc(a[3])}<i>/person</i></span><span class="acard-bk">Book</span></div>`
      +`</div></div>`;
  }).join('');
  hydrate(document.getElementById('activities'));
}
/* Book button on an activity card → collect details first, THEN pay */
function activityBookForm(name,priceStr){
  const g=id=>document.getElementById(id);
  const m=g('actBookModal');
  if(!m){bookActivity(name,priceStr);return;}   /* graceful fallback if the modal isn't present */
  g('abAct').textContent=name;
  g('abPrice').textContent=(priceStr?priceStr+' / person':'')+' · pay to reserve your spot — our team confirms the date & any balance';
  g('abName').value=getSavedName()||'';
  g('abPhone').value=getSavedMobile()||'';
  g('abPax').value='1';g('abDate').value='';g('abNotes').value='';
  try{g('abDate').min=new Date(Date.now()+864e5).toISOString().slice(0,10);}catch(e){}
  m.classList.add('show');
  const close=()=>{m.classList.remove('show');g('abCancel').onclick=g('abSend').onclick=m.onclick=null;};
  g('abCancel').onclick=close;
  m.onclick=e=>{if(e.target===m)close();};
  g('abSend').onclick=()=>{
    const nm=(g('abName').value||'').trim();
    const phone=(g('abPhone').value||'').replace(/\D/g,'');
    if(!nm){note('Please enter your name.','Name needed');return;}
    if(phone.length<10){note('Please enter a valid 10-digit WhatsApp number.','Number needed');return;}
    const details={name:nm,phone:phone,pax:Math.max(1,parseInt(g('abPax').value||'1',10)||1),date:(g('abDate').value||'').trim(),notes:(g('abNotes').value||'').trim()};
    saveUserName(nm);
    close();
    bookActivity(name,priceStr,details);
  };
}
async function bookActivity(name,priceStr,details){
  details=details||{};
  const amount=parseInt(String(priceStr).replace(/[^\d]/g,''))||0;
  if(amount<1){note('This activity is not bookable online yet — please contact us.','Unavailable');return;}
  if(!isLoggedIn()){note('Please sign in to book this activity.','Sign in required').then(()=>{_loginReturn='activities';go('login');});return;}
  if(!window.Razorpay){note('Payment gateway is still loading — please wait a few seconds and tap Book again.','Please wait');return;}
  if(!sbOn){note('Payment service not configured. Please contact Tripomonk.','Payment error');return;}
  const leadName=(details.name||getSavedName()||(getUserEmail()?getUserEmail().split('@')[0]:'Guest'));
  const phone=details.phone||getSavedMobile()||'';
  const pax=Math.max(1,parseInt(details.pax,10)||1);
  const datePref=details.date||'';const extra=details.notes||'';
  const booking={kind:'activity',activity:name,trek:name,pax,name:leadName,email:getUserEmail()||'',phone,date:datePref,notes:extra};
  let order;
  try{order=await rzpCall('create',{booking});}
  catch(e){note('Could not reach payment service: '+e,'Payment error');return;}
  if(!order||!order.order_id){note('Could not start payment — '+((order&&order.error)?order.error:'no order returned')+' (amount ₹'+amount+')','Payment error');return;}
  const rzp=new window.Razorpay({
    key:order.key_id, order_id:order.order_id, amount:order.amount, currency:order.currency||'INR',
    name:'Tripomonk', description:name+' — Adventure Activity', image:'icons/icon-192.png',
    prefill:{name:leadName, email:getUserEmail()||'', contact:phone}, notes:{activity:name,people:String(pax),date:datePref||'flexible',info:extra}, theme:{color:'#2f6bff'},
    handler:async function(response){
      let res;
      try{res=await rzpCall('verify',{razorpay_order_id:response.razorpay_order_id,razorpay_payment_id:response.razorpay_payment_id,razorpay_signature:response.razorpay_signature,booking});}catch(e){res=null;}
      if(!res||!res.ok){note('Payment received but we could not verify it instantly. Our team will confirm shortly — payment ID: '+(response.razorpay_payment_id||'—'),'Verification pending');return;}
      saveUserName(leadName);
      const sbk=(res&&res.booking)||{};
      const b={id:response.razorpay_payment_id,name:leadName,trek:sbk.trek||name+' (Activity)',img:'',date:sbk.date||datePref||'To be scheduled',pax:pax,total:sbk.total||amount,paid:sbk.paid||amount,ts:Date.now(),status:'Confirmed',checkedIn:false,paymentId:response.razorpay_payment_id};
      const all=getBookings();all.unshift(b);saveBookings(all);
      if(window.fbTrack)window.fbTrack('Purchase',{value:Number(b.total)||Number(b.paid)||0,currency:'INR',content_name:b.trek||'',content_type:'product'});
      note('Payment successful! '+name+' is booked. Our team will contact you to schedule the date.','Booked ✓').then(()=>go('bookings'));
    },
    modal:{ondismiss:function(){note('Payment cancelled — your activity is not yet booked.','Cancelled');}}
  });
  rzp.open();
}
function downloadChecklist(){const NL=String.fromCharCode(10);let lines=['TRIPOMONK — PACKING CHECKLIST',''];Object.keys(packing).forEach(k=>{lines.push(k.toUpperCase());packing[k].forEach(i=>lines.push('  [ ] '+i[1]));lines.push('');});const a=document.createElement('a');a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(lines.join(NL));a.download='Tripomonk_Packing_Checklist.txt';document.body.appendChild(a);a.click();a.remove();}

/* captain */
async function captainLogin(){
  if(!isLoggedIn()){note('Please sign in with an authorised Tripomonk team email.','Team sign in').then(()=>{_loginReturn='captain';go('login');});return;}
  const res=await adminCall('ping');
  if(res&&res.ok){try{localStorage.setItem('tmk_captain','1');}catch(e){}go('captain');}
  else note((res&&res.error)||'Team access denied.','Access blocked');
}
function captainExit(){try{localStorage.removeItem('tmk_captain');}catch(e){}renderProfile();}
async function captainVerify(txt){const t=parseTicket(txt),r=document.getElementById('capResult');
  if(!t.ok){r.innerHTML=`<div class="verify bad"><b>${ic('alert',20)} Not verified</b><div style="font-size:13px;color:var(--muted)">This QR is not a Tripomonk booking code.</div></div>`;hydrate(r);return;}
  r.innerHTML='<div class="verify"><b>Checking booking...</b></div>';
  const res=await adminCall('verify_booking',{id:t.id});
  if(!res||!res.ok){r.innerHTML=`<div class="verify bad"><b>${ic('alert',20)} Not verified</b><div style="font-size:13px;color:var(--muted)">${esc((res&&res.error)||'Booking not found')}</div></div>`;hydrate(r);return;}
  const b=res.booking||{};
  sfx('like');
  r.innerHTML=`<div class="verify good"><b>${ic('check',20)} Valid booking</b>
    <div class="vrow"><span>Trekker</span><b>${esc(b.name)}</b></div><div class="vrow"><span>Trek</span><b>${esc(b.trek)}</b></div>
    <div class="vrow"><span>Date</span><b>${esc(b.date)}</b></div><div class="vrow"><span>Trekkers</span><b>${esc(b.pax)}</b></div>
    <div class="vrow"><span>Booking</span><b>${esc(b.id)}</b></div><div style="margin-top:10px;font-size:12px;color:var(--muted)">Marked as checked in on the server.</div></div>`;
  hydrate(r);
}
let _capStream=null,_capRAF=null;
async function capScan(){
  if(!('BarcodeDetector' in window)){note('Live QR scanning needs Chrome on Android. Please paste the ticket code below instead.','Not supported here');return;}
  try{
    const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});
    _capStream=stream;const v=document.getElementById('capVideo');v.srcObject=stream;await v.play();
    document.getElementById('capCam').style.display='';
    const det=new window.BarcodeDetector({formats:['qr_code']});
    const tick=async()=>{
      if(!_capStream)return;
      try{const codes=await det.detect(v);if(codes&&codes.length){const val=codes[0].rawValue;capStopScan();captainVerify(val);return;}}catch(e){}
      _capRAF=requestAnimationFrame(tick);
    };
    tick();
  }catch(e){note('Could not access the camera. Allow camera permission and try again.','Camera error');}
}
function capStopScan(){if(_capRAF)cancelAnimationFrame(_capRAF);_capRAF=null;if(_capStream){_capStream.getTracks().forEach(t=>t.stop());_capStream=null;}const c=document.getElementById('capCam');if(c)c.style.display='none';}
function captainTestLast(){const b=getBookings()[0];if(!b){note('Make a booking first, then test.');return;}const code=ticketPayload(b);document.getElementById('capInput').value=code;captainVerify(code);}

/* itinerary PDF (your uploaded PDF, else fallback message) */
function itinSlug(t){return t.n.toLowerCase().replace(/[^a-z0-9]+/g,'-');}
/* the itinerary the admin attached in Admin → Treks (an uploaded PDF or a pasted link) */
function trekItinUrl(t){return String((t&&t.itin)||'').trim();}
/* a trek "has" an itinerary if it has day-by-day rows OR an attached document */
function hasItinerary(t){return !!(t&&(trekItin(t).length||trekItinUrl(t)));}

/* ---- Hero media: photo (default) or a video the admin attached ----
   A YouTube / Vimeo / uploaded-file cover autoplays MUTED and looping the moment the
   trek opens (browsers only allow muted autoplay); tap the speaker to hear it with
   sound + controls. Instagram can't be autoplayed or shown chrome-free, so it keeps a
   tap-to-play badge and we crop its post UI down to mainly the reel video. */
function heroVideoUrl(t){
  if(!t||!t.hvideo)return '';                       /* admin chose the photo */
  const u=String(t.hvid||'').trim();
  return parseVideoLink(u)?u:'';                    /* unparseable link = fall back to the photo */
}
function renderHero(hh,t){
  if(!hh||!t)return;
  const vid=heroVideoUrl(t);
  const poster=(vid&&videoPoster(vid))||t.img||'';
  hh.classList.add('img-loading');
  hh.style.backgroundImage=poster?`url('${poster}')`:'';
  const pre=new Image();pre.onload=pre.onerror=()=>hh.classList.remove('img-loading');
  if(poster)pre.src=poster;else hh.classList.remove('img-loading');
  /* tear down any prior video state so switching treks never leaves a stale one */
  hh.querySelectorAll('.hero-play,.hero-embed,.hero-sound').forEach(e=>e.remove());
  if(!vid)return;
  const v=parseVideoLink(vid);if(!v)return;
  /* YouTube / Vimeo / uploaded file play as a MUTED, LOOPING cover video the moment
     the trek opens (browsers only autoplay when muted). Tap the speaker to open it
     with sound + controls. Instagram can't autoplay, so it keeps a play badge. */
  if(v.kind==='file'||v.kind==='youtube'||v.kind==='vimeo'){
    autoplayHeroCover(hh,v,vid);
    return;
  }
  const b=document.createElement('div');
  b.className='hero-play';
  b.innerHTML='<span class="msr">play_arrow</span>';
  b.onclick=e=>{e.stopPropagation();playHeroVideo(hh,vid);};
  hh.appendChild(b);
}
/* muted, controls-hidden, looping cover video — autoplays on open */
function autoplayHeroCover(hh,v,url){
  const wrap=document.createElement('div');
  wrap.className='hero-embed hero-cover';
  if(v.kind==='file'){
    wrap.innerHTML='<video src="'+esc(url)+'" autoplay muted loop playsinline preload="metadata"></video>';
  }else if(v.kind==='youtube'){
    const src='https://www.youtube.com/embed/'+v.id+'?autoplay=1&mute=1&loop=1&playlist='+v.id
      +'&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0';
    wrap.innerHTML='<iframe src="'+esc(src)+'" title="Trek video" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" scrolling="no"></iframe>';
  }else{ /* vimeo background mode = clean muted autoplay loop, no chrome */
    const src='https://player.vimeo.com/video/'+v.id+'?autoplay=1&muted=1&loop=1&background=1&dnt=1';
    wrap.innerHTML='<iframe src="'+esc(src)+'" title="Trek video" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" scrolling="no"></iframe>';
  }
  hh.appendChild(wrap);
  /* YouTube always shows a title + logo at the very edges; oversizing the iframe pushes
     those out of the visible frame (Vimeo background mode + mp4 have no chrome, so 1x). */
  if(v.kind!=='file')coverHeroIframe(hh,wrap.querySelector('iframe'),16/9,v.kind==='youtube'?1.3:1);
  /* no unmute button — the cover plays silently on loop, like a moving cover photo */
}
/* size a 16:9 iframe so it COVERS the hero box (crop the overflow) instead of letterboxing */
function coverHeroIframe(hh,ifr,aspect,scale){
  if(!ifr)return;scale=scale||1;
  const fit=()=>{const cw=hh.offsetWidth||360,ch=hh.offsetHeight||320;let w,h;
    /* fill by the SHORT side and overflow the long side — keeps the video's real aspect
       (no horizontal squish), then scale up to crop platform branding at the edges */
    if(cw/ch>aspect){w=cw;h=Math.ceil(cw/aspect);}else{h=ch;w=Math.ceil(ch*aspect);}
    w=Math.ceil(w*scale);h=Math.ceil(h*scale);
    ifr.style.position='absolute';ifr.style.left='50%';ifr.style.top='50%';
    ifr.style.transform='translate(-50%,-50%)';ifr.style.width=w+'px';ifr.style.height=h+'px';};
  requestAnimationFrame(fit);setTimeout(fit,350);
}
function playHeroVideo(hh,url){
  const v=parseVideoLink(url);if(!v)return;
  hh.querySelectorAll('.hero-play,.hero-embed,.hero-sound').forEach(e=>e.remove());
  const wrap=document.createElement('div');
  /* Instagram embeds carry the full post UI (avatar, handle, likes, caption, "view on
     Instagram"). We crop that chrome away so mainly the reel video shows. */
  wrap.className='hero-embed vembed'+(v.kind==='instagram'?' hero-ig-crop':'');
  if(v.kind==='file'){
    wrap.innerHTML='<video src="'+esc(url)+'#t=0.1" controls autoplay playsinline></video>';
  }else{
    const src=v.embed+(v.embed.indexOf('?')>=0?'&':'?')+'autoplay=1';
    wrap.innerHTML='<iframe src="'+esc(src)+'" title="Trek video" frameborder="0" '
      +'allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen scrolling="no"></iframe>';
  }
  hh.appendChild(wrap);
}
/* Download order: (1) whatever the admin attached for this trek, (2) a PDF placed in
   the repo at itineraries/<slug>.pdf, (3) an auto-generated one. */
/* ============================================================
   TREK LEADERS / GUIDES (Layer 1)
   A guide is the qualified person who leads a trek — the thing a customer is most
   anxious about when booking. Guides are admin-managed (your own roster) and assigned
   per trek (trek.guide_id). Shown on the trek page as "Your trek leader".
   Public read is fine — a guide profile is a trust signal, like a host badge.
   ============================================================ */
let guides=[],_guidesLoaded=false;
function guideById(id){if(!id)return null;return guides.find(g=>String(g.id)===String(id))||null;}
async function loadGuides(force){
  const sb=getSupaClient();if(!sb){_guidesLoaded=true;return guides;}
  if(guides.length&&!force)return guides;
  try{
    const r=await sb.from('guides').select('*').order('sort',{ascending:true});
    if(!r.error&&Array.isArray(r.data))guides=r.data;
    _guidesLoaded=true;
  }catch(e){_guidesLoaded=true;}
  return guides;
}
/* split the certifications text ("AMC, WFR") into short chips */
function guideCerts(g){return String((g&&g.certifications)||'').split(/[,;]/).map(s=>s.trim()).filter(Boolean);}
function guideVerifiedBadge(g){return g&&g.verified?'<span class="gd-verif"><span class="msr">verified</span></span>':'';}
/* the "Your trek leader" card on the trek detail page */
function guideCardHTML(g){
  if(!g)return '';
  const certs=guideCerts(g).map(c=>'<span class="gd-cert">'+esc(c)+'</span>').join('');
  const facts=[];
  if(g.years)facts.push(esc(g.years)+(/yr|year/i.test(String(g.years))?'':'+ yrs')+' leading');
  if(g.treks_led)facts.push(esc(g.treks_led)+(/trek/i.test(String(g.treks_led))?'':'+ treks led'));
  if(g.languages)facts.push(esc(g.languages));
  const photo=(g.photo||'').trim();
  return '<div class="gd-card">'
    +'<div class="gd-top">'
      +'<div class="gd-av"'+(photo?' style="background-image:url(\''+esc(photo)+'\')"':'')+'>'+(photo?'':esc((String(g.name||'G')[0]||'G').toUpperCase()))+'</div>'
      +'<div class="gd-id"><b>'+esc(g.name||'Trek leader')+guideVerifiedBadge(g)+'</b>'
      +(facts.length?'<small>'+facts.join(' · ')+'</small>':'')+'</div>'
    +'</div>'
    +(certs?'<div class="gd-certs">'+certs+'</div>':'')
    +(g.bio?'<p class="gd-bio">'+esc(g.bio)+'</p>':'')
    +'</div>';
}
function renderDetailLeader(t){
  const wrap=document.getElementById('dLeaderWrap'),box=document.getElementById('dLeader');
  if(!wrap||!box)return;
  const g=guideById(t&&t.guide_id);
  if(!g){wrap.style.display='none';box.innerHTML='';return;}
  wrap.style.display='';box.innerHTML=guideCardHTML(g);hydrate(box);
}

/* Fetch a file and hand it to the OS as a download. `<a download>` is IGNORED for
   cross-origin URLs, so the old code fell back to navigating — and inside a standalone
   PWA that replaced the whole app with a chrome-less PDF view the user couldn't leave.
   A blob download navigates nothing, so there is nothing to come back from. */
async function saveFileFromUrl(url,filename){
  try{
    const r=await fetch(url,{mode:'cors'});
    if(!r.ok)throw new Error('HTTP '+r.status);
    const blob=await r.blob();
    const obj=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=obj;a.download=filename;
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(obj),8000);
    return true;
  }catch(e){return false;}
}
/* Last resort for links we can't fetch (Drive/Notion pages, CORS-blocked hosts).
   window.open gives a separate context with its own Done/back affordance; if the
   browser blocks it we tell the user rather than hijacking the app's own window. */
function openExternalLink(url){
  let w=null;try{w=window.open(url,'_blank','noopener');}catch(e){}
  if(w)return true;
  note('Your browser blocked opening this itinerary. Copy the link and open it in your browser.','Could not open');
  return false;
}
async function downloadItinerary(){
  const t=cart.trek;if(!t)return;
  const admin=trekItinUrl(t);
  if(admin){
    /* a real PDF downloads; a page link (Drive viewer etc.) opens in its own context */
    if(/\.pdf($|\?)/i.test(admin)&&await saveFileFromUrl(admin,itinSlug(t)+'.pdf'))return;
    openExternalLink(admin);return;
  }
  const url='itineraries/'+itinSlug(t)+'.pdf?t='+Date.now();
  try{
    const r=await fetch(url,{method:'HEAD',cache:'no-store'});
    if(r.ok&&await saveFileFromUrl(url,itinSlug(t)+'.pdf'))return;
  }catch(e){}
  genItineraryPDF(t);   /* jsPDF's doc.save() is also a download, not a navigation */
}
function genItineraryPDF(t){
  if(!window.jspdf||!window.jspdf.jsPDF){note('Preparing the PDF tool (needs internet on first use). Please tap again in a moment.');return;}
  const {jsPDF}=window.jspdf, doc=new jsPDF({unit:'pt',format:'a4'});
  const W=doc.internal.pageSize.getWidth(), H=doc.internal.pageSize.getHeight(), L=48, R=W-48, MAXY=H-56;
  const BL=[11,18,32],MU=[88,98,118],AC=[47,107,255]; let y=64, page=1;
  const C=c=>doc.setTextColor(c[0],c[1],c[2]);
  function chrome(){doc.setDrawColor(214,222,236);doc.setLineWidth(1);doc.line(L,42,R,42);
    doc.setFont('helvetica','normal');doc.setFontSize(8.5);C([135,144,158]);
    doc.text('Tripomonk — '+t.n+' Trek',L,35);
    doc.text('tripomonk@gmail.com  •  +91 89248 13959',L,H-26);doc.text('Page '+page,R,H-26,{align:'right'});}
  function brk(h){if(y+h>MAXY){doc.addPage();page++;y=64;chrome();}}
  function h2(s){brk(46);doc.setFont('helvetica','bold');doc.setFontSize(14);C(AC);doc.text(s,L,y);y+=7;doc.setDrawColor(47,107,255);doc.setLineWidth(.9);doc.line(L,y,L+32,y);y+=18;}
  function para(s,sz,col){sz=sz||10.5;col=col||MU;doc.setFont('helvetica','normal');doc.setFontSize(sz);C(col);doc.splitTextToSize(s,R-L).forEach(ln=>{brk(sz+4);doc.text(ln,L,y);y+=sz+3.5;});y+=4;}
  function bullets(arr){doc.setFontSize(10);arr.forEach(it=>{C(BL);doc.setFont('helvetica','normal');const ls=doc.splitTextToSize(it,R-L-16);ls.forEach((ln,i)=>{brk(14);if(i===0){C(AC);doc.text('•',L+2,y);C(BL);}doc.text(ln,L+15,y);y+=14;});});y+=4;}
  chrome();
  doc.setFont('helvetica','bold');doc.setFontSize(12);C(AC);doc.text('TRIPOMONK',L,y);y+=22;
  doc.setFontSize(22);C(BL);doc.text(t.n+' Trek',L,y);y+=20;
  const nights=Math.max(0,t.days-1);
  doc.setFont('helvetica','bold');doc.setFontSize(11);C(AC);doc.text(t.days+' Days / '+nights+' Nights   •   '+t.region+'   •   '+t.lvl,L,y);y+=16;
  doc.setFont('helvetica','italic');doc.setFontSize(10.5);C(MU);doc.splitTextToSize(t.desc,R-L).forEach(ln=>{doc.text(ln,L,y);y+=14;});y+=10;
  h2('Trek at a glance');
  [['Region',t.region],['Max altitude',t.alt],['Total distance',t.dist+' (round trip)'],['Duration',t.days+' days / '+nights+' nights'],['Difficulty',t.lvl],['Best season',t.best],['Climate & temp',t.climate+' · '+t.temp],['Air quality',t.aqi+' (AQI '+t.aqiVal+')'],['Pickup & drop','From the trek base — transport in package']].forEach(rw=>{
    brk(18);doc.setFont('helvetica','bold');doc.setFontSize(10);C(BL);doc.text(rw[0],L,y);
    doc.setFont('helvetica','normal');C(MU);const v=doc.splitTextToSize(String(rw[1]),R-L-150);doc.text(v,L+150,y);y+=Math.max(16,v.length*13);});
  y+=6;
  h2('Day-by-day itinerary');
  const it=trekItin(t);
  it.forEach((d,i)=>{brk(54);
    doc.setFont('helvetica','bold');doc.setFontSize(11.5);C(BL);doc.text('Day '+(i+1)+' — '+d[0],L,y);y+=14;
    doc.setFont('helvetica','italic');doc.setFontSize(9.5);C(AC);doc.text(d[2]+'   •   '+d[3],L,y);y+=14;
    para(d[1],10.5,MU);
    doc.setFont('helvetica','bold');doc.setFontSize(9.5);C(BL);brk(14);
    doc.text('Overnight: '+(i===it.length-1?'Trip ends.':'Tents / guesthouse (sharing).')+'    Meals: '+(i===0?'dinner':'breakfast, lunch, dinner'),L,y);y+=20;});
  h2('Difficulty & fitness');
  para('Grade: '+t.lvl+'. '+(t.lvl==='Easy'?'A gentle, well-defined trail suitable for reasonably fit first-timers.':t.lvl==='Moderate'?'Needs basic hill fitness and stamina; some long days.':'A demanding high-altitude trek for experienced, fit trekkers.'),10.5,BL);
  para('Prepare: build stamina with 4–5 km brisk walks or jogs, 4–5 times a week, for at least 3–4 weeks before the trek — ideally with stairs or an incline.');
  para('Altitude (AMS): above ~3,000 m, mild headache or breathlessness is possible. Walk slowly, hydrate, and tell your guide immediately if you feel unwell. We never rush a trekker showing AMS symptoms — safety comes before the summit.');
  h2("What's included");
  bullets(['Transport from the trek base, to-and-fro (as per package)','Accommodation in tents / guesthouses on a sharing basis','All meals on the trek (vegetarian)','Experienced local trek guide and support staff','Forest / area permits and entry fees (Indian nationals)','Basic first-aid kit and oximeter with the guide']);
  h2('Not included');
  bullets(['Travel to and from the base city','Personal pony / porter for personal bags (own cost)','Travel insurance and GST as applicable','Personal expenses, tips and à la carte orders','Any cost from delays, landslides, weather or factors beyond our control','Anything not listed under Inclusions']);
  h2('Packing list');
  Object.keys(packing).forEach(k=>{brk(22);doc.setFont('helvetica','bold');doc.setFontSize(10.5);C(BL);doc.text(k,L,y);y+=14;bullets(packing[k].map(x=>x[1]));});
  h2('Know before you go');
  bullets(['Connectivity: mobile network is patchy on the trail — inform family in advance.','Cash: carry enough for personal expenses, ponies and tips; ATMs are unreliable beyond the base town.','ID & permits: carry original government photo ID + 2 copies.','Electricity: charging is limited on the trail — carry a power bank.','Fitness: start your walking / jogging routine at least 3–4 weeks out.','Booking & cancellation: terms are in your Tripomonk booking confirmation.']);
  brk(26);doc.setFont('helvetica','bold');doc.setFontSize(11);C(AC);
  doc.splitTextToSize('Ready to book or want custom dates? Talk to us on WhatsApp — we have walked this trail.',R-L).forEach(ln=>{doc.text(ln,L,y);y+=15;});
  doc.save(itinSlug(t)+'-itinerary.pdf');
}

/* ---------- router ---------- */
/* ---------- lightweight, privacy-friendly screen-time analytics ----------
   Records how long each screen is viewed and batches it to Supabase (app_events).
   No third party, data stays in your DB. Query which screens hold attention with:
     select screen, count(*) views, round(avg(seconds),1) avg_sec, sum(seconds) total
     from app_events group by screen order by total desc; */
let _screenEnter=Date.now(),_evBuf=[];
const _sessId=(function(){try{let s=sessionStorage.getItem('tmk_sess');if(!s){s=Math.random().toString(36).slice(2)+Date.now().toString(36);sessionStorage.setItem('tmk_sess',s);}return s;}catch(e){return 'na';}})();
function trackScreenLeave(){
  const secs=Math.round((Date.now()-_screenEnter)/1000);
  _screenEnter=Date.now();
  /* ignore <1s bounces and absurd >1h idle tabs */
  if(cur&&secs>=1&&secs<3600)_evBuf.push({session_id:_sessId,user_id:currentUser?currentUser.id:null,screen:cur,seconds:secs});
  if(_evBuf.length>=6)flushEvents();
}
async function flushEvents(){
  if(!_evBuf.length)return;
  const sb=getSupaClient();if(!sb){_evBuf=[];return;}
  const rows=_evBuf.splice(0,_evBuf.length);
  try{await sb.from('app_events').insert(rows);}catch(e){}
}
/* log a NAMED behaviour (login, view_trek, booking, message, post, follow, story_view…) */
function logEvent(action,meta){
  try{_evBuf.push({session_id:_sessId,user_id:currentUser?currentUser.id:null,screen:cur||'',event:action,seconds:0,meta:meta||null});
    if(_evBuf.length>=8)flushEvents();}catch(e){}
}
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden'){trackScreenLeave();flushEvents();}});
window.addEventListener('pagehide',function(){trackScreenLeave();flushEvents();});
/* =========================================================================
   ADVENTURE READINESS SYSTEM — Individual Fitness Score + Required Trek Score
   ========================================================================= */

/* ---- Required Trek Score (0–100). Admin-set; an explicit t.req / t.req_score
   (from the admin panel or DB) always wins. For the 100+ seeded treks we derive
   a sensible default from difficulty + altitude + duration, with named overrides
   for the treks called out in the product spec. ---- */
function clampScore(n){n=Math.round(Number(n)||0);return Math.max(0,Math.min(100,n));}
const TREK_REQ={
  'Triund':35,'Nag Tibba':34,'Kheerganga':36,'Lamadugh':34,'Sham Valley':38,'Chopta Chandrashila':40,'Kareri Lake':44,
  'Valley of Flowers':42,'Dayara Bugyal':45,'Beas Kund':46,'Hemkund Sahib':48,'Patalsu Peak':48,
  'Yulla Kanda':54,'Kedarkantha':62,'Brahmatal':64,'Kuari Pass':58,'Har Ki Dun':60,'Phulara Ridge':56,'Sar Pass':60,'Pindari Glacier':62,'Sandakphu':60,'Nubra Valley':58,'Bhrigu Lake':58,'Chandrakhani Pass':60,'Dodital Darwa Pass':58,'Seven Lakes':60,
  'Hampta Pass':74,'Kashmir Great Lakes':72,'Goecha La':78,'Rupin Pass':76,'Tarsar Marsar':70,'Deo Tibba Base Camp':72,'Miyar Valley':70,'Stok Kangri Base Camp':74,'Lamayuru to Chilling':72,
  'Roopkund':82,'Pin Parvati Pass':88,'Bali Pass':84,'Kedartal':86,'Satopanth Lake':85,'Markha Valley':80,'Chadar Trek':86,'Rumtse to Tso Moriri':84,'Pangarchulla Peak':82,'Borasu Pass':85,'Indrahar Pass':82,'Gaumukh Tapovan':80,'Kugti Pass':84,'Bara Bhangal':86,'Friendship Peak':88,
  'Kang Yatse II':92
};
function trekReqScore(t){
  if(!t)return 0;
  if(typeof t.req==='number')return clampScore(t.req);
  if(typeof t.req_score==='number')return clampScore(t.req_score);
  if(TREK_REQ[t.n]!=null)return TREK_REQ[t.n];
  const alt=parseInt(String(t.alt||'').replace(/[^0-9]/g,''),10)||10000;   /* feet */
  const base={easy:36,moderate:58,difficult:82}[String(t.lvl||'').toLowerCase()]||55;
  const s=base+Math.max(0,(alt-9500))/1000*1.4+Math.max(0,(t.days||4)-3)*1.4;
  return clampScore(s);
}
function reqBand(s){return s<40?'Easy':s<50?'Easy+':s<65?'Moderate':s<80?'Moderate+':s<90?'Difficult':'Expedition';}

/* ---- The assessment schema drives BOTH the form and the scoring ---- */
/* No wearable integration yet, so the score is built entirely from self-reported
   inputs — the smartwatch 15% is redistributed to the real physical pillars so the
   score is honest and fully functional on its own. */
const FIT_WEIGHTS={activity:.25,experience:.20,endurance:.25,health:.18,age:.06,bmi:.06};
const FIT_SECTIONS=[
 {t:'About you',icon:'person',qs:[
   {k:'age',q:'Age',type:'num',unit:'yrs',ph:'28'},
   {k:'height',q:'Height',type:'num',unit:'cm',ph:'170'},
   {k:'weight',q:'Weight',type:'num',unit:'kg',ph:'68'},
   {k:'gender',q:'Gender',type:'chips',opts:[{v:'f',l:'Female'},{v:'m',l:'Male'},{v:'o',l:'Other'}]}
 ]},
 {t:'Weekly activity',icon:'directions_run',qs:[
   {k:'exercise',q:'How much do you exercise weekly?',type:'chips',comp:'activity',opts:[{v:'0',l:'Rarely',p:0},{v:'1',l:'1–2 hrs',p:.35},{v:'2',l:'3–4 hrs',p:.7},{v:'3',l:'5+ hrs',p:1}]},
   {k:'steps',q:'Average daily steps',type:'chips',comp:'activity',opts:[{v:'0',l:'Under 3k',p:.2},{v:'1',l:'3–6k',p:.5},{v:'2',l:'6–10k',p:.8},{v:'3',l:'10k+',p:1}]},
   {k:'freq',q:'Workout days per week',type:'chips',comp:'activity',opts:[{v:'0',l:'0',p:0},{v:'1',l:'1–2',p:.4},{v:'2',l:'3–4',p:.7},{v:'3',l:'5+',p:1}]},
   {k:'sports',q:'Which do you do regularly?',type:'multi',comp:'activity',opts:[{v:'run',l:'Running'},{v:'cycle',l:'Cycling'},{v:'swim',l:'Swimming'},{v:'strength',l:'Strength'}]}
 ]},
 {t:'Endurance',icon:'monitoring',qs:[
   {k:'walk5',q:'Walk 5 km',type:'chips',comp:'endurance',opts:[{v:'2',l:'Easily',p:1},{v:'1',l:'With effort',p:.5},{v:'0',l:'Struggle',p:0}]},
   {k:'walk10',q:'Walk 10 km',type:'chips',comp:'endurance',opts:[{v:'2',l:'Easily',p:1},{v:'1',l:'With effort',p:.5},{v:'0',l:'Struggle',p:0}]},
   {k:'run5',q:'Run 5 km',type:'chips',comp:'endurance',opts:[{v:'2',l:'Yes',p:1},{v:'1',l:'Slowly',p:.5},{v:'0',l:'No',p:0}]},
   {k:'floors',q:'Climb 10 floors non-stop',type:'chips',comp:'endurance',opts:[{v:'2',l:'Easily',p:1},{v:'1',l:'Breathless',p:.5},{v:'0',l:"Can't",p:0}]},
   {k:'pack',q:'Carry a 10 kg backpack',type:'chips',comp:'endurance',opts:[{v:'2',l:'Easily',p:1},{v:'1',l:'Light only',p:.5},{v:'0',l:'No',p:.1}]}
 ]},
 {t:'Trek experience',icon:'terrain',qs:[
   {k:'done',q:'Treks completed',type:'chips',comp:'experience',opts:[{v:'0',l:'None',p:.15},{v:'1',l:'1–2',p:.45},{v:'2',l:'3–5',p:.75},{v:'3',l:'6+',p:1}]},
   {k:'altd',q:'Highest altitude reached',type:'chips',comp:'experience',opts:[{v:'0',l:'None',p:.1},{v:'1',l:'<3000 m',p:.35},{v:'2',l:'3–4000 m',p:.6},{v:'3',l:'4–5000 m',p:.85},{v:'4',l:'5000 m+',p:1}]},
   {k:'longest',q:'Longest trek so far',type:'chips',comp:'experience',opts:[{v:'0',l:'None',p:.1},{v:'1',l:'1–2 days',p:.4},{v:'2',l:'3–5 days',p:.7},{v:'3',l:'6+ days',p:1}]},
   {k:'snow',q:'Snow trek experience',type:'toggle',comp:'experience'},
   {k:'backpackx',q:'Multi-day backpacking',type:'toggle',comp:'experience'}
 ]},
 {t:'Health',icon:'monitor_heart',qs:[
   {k:'conditions',q:'Any of these? (select all that apply)',type:'multi',comp:'health',opts:[{v:'asthma',l:'Asthma'},{v:'diabetes',l:'Diabetes'},{v:'bp',l:'Blood pressure'},{v:'heart',l:'Heart condition'},{v:'knee',l:'Knee injury'},{v:'surgery',l:'Recent surgery'}]}
 ]}
];
function fitQ(k){for(const s of FIT_SECTIONS)for(const q of s.qs)if(q.k===k)return q;return null;}

/* ---- storage (session-cached; the ledger of record is localStorage, mirrored
   best-effort to profiles.fitness so the score follows the user across devices) ---- */
let _fitStoreCache,_fitComputed=null,_fitDraft=null;
function fitStore(){if(_fitStoreCache!==undefined)return _fitStoreCache;try{_fitStoreCache=JSON.parse(localStorage.getItem('tmk_fitness')||'null');}catch(e){_fitStoreCache=null;}return _fitStoreCache;}
function fitSave(d){try{localStorage.setItem('tmk_fitness',JSON.stringify(d));}catch(e){}_fitStoreCache=d;_fitComputed=null;syncFitnessCloud(d);}
function hasFitness(){const d=fitStore();return !!(d&&d.answers&&Object.keys(d.answers).length>=6);}
async function syncFitnessCloud(d){try{const sb=getSupaClient();const uid=(typeof authUid==='function')?await authUid():null;if(sb&&uid)await sb.from('profiles').update({fitness:d}).eq('id',uid);}catch(e){}}

function avg(a){a=a.filter(x=>x!=null&&!isNaN(x));return a.length?a.reduce((s,x)=>s+x,0)/a.length:0;}
function fitLevel(s){return s<=30?'Beginner':s<=50?'Improving':s<=70?'Moderate':s<=85?'Adventure Ready':'Expedition Ready';}
function scoreColor(s){return s<=30?'#ff7a7a':s<=50?'#ffb020':s<=70?'#5aa6ff':s<=85?'#38d39f':'#a06bff';}

/* ---- the score engine (PRD weightage) ---- */
function computeFitness(d){
  if(!d&&_fitComputed)return _fitComputed;
  const store=d||fitStore()||{};const a=store.answers||{};
  const P=k=>{const q=fitQ(k);if(!q)return 0;const o=(q.opts||[]).find(o=>String(o.v)===String(a[k]));return o?(o.p||0):0;};
  const T=k=>a[k]?1:0;
  const M=k=>Array.isArray(a[k])?a[k]:[];
  const activity=avg([P('exercise'),P('steps'),P('freq'),Math.min(1,M('sports').length*0.3)]);
  const endurance=avg([P('walk5'),P('walk10'),P('run5'),P('floors'),P('pack')]);
  const experience=avg([P('done'),P('altd'),P('longest'),T('snow'),T('backpackx')]);
  const HP={asthma:.2,diabetes:.2,bp:.15,heart:.4,knee:.2,surgery:.4};
  let health=1;M('conditions').forEach(c=>{health-=HP[c]||.15;});health=Math.max(0,health);
  const age=Number(store.age)||0;
  const ageP=!age?.7:age<18?.85:age<=35?1:age<=45?.85:age<=55?.65:age<=65?.45:.3;
  const h=Number(store.height)||0,w=Number(store.weight)||0;let bmiP=.6;
  if(h>0&&w>0){const bmi=w/Math.pow(h/100,2);bmiP=(bmi>=18.5&&bmi<=24.9)?1:(bmi>=17&&bmi<27)?.7:(bmi>=15&&bmi<30)?.45:.25;}
  const W=FIT_WEIGHTS;
  const score=clampScore(100*(activity*W.activity+experience*W.experience+endurance*W.endurance+health*W.health+ageP*W.age+bmiP*W.bmi));
  const r=x=>clampScore(x*100);
  const subs={
    cardio:r(avg([P('exercise'),P('steps'),P('run5'),(M('sports').includes('run')||M('sports').includes('cycle')||M('sports').includes('swim'))?1:.3])),
    strength:r(avg([M('sports').includes('strength')?1:.3,P('pack'),P('floors'),P('freq')])),
    endurance:r(endurance),
    recovery:r(avg([health,ageP,M('conditions').includes('surgery')?.3:1])),
    consistency:r(avg([P('freq'),P('exercise')]))
  };
  const res={score,level:fitLevel(score),subs,comps:{activity:r(activity),experience:r(experience),endurance:r(endurance),health:r(health)}};
  if(!d)_fitComputed=res;
  return res;
}

/* ---- readiness = user score vs required trek score (Green / Yellow / Red) ---- */
function readiness(user,req){
  const diff=user-req;
  if(diff>=0)return{k:'green',label:'Recommended',msg:"Your fitness meets this trek. You're good to go."};
  if(req-user<=10)return{k:'yellow',label:'Prepare a little',msg:'You can do this trek — we recommend training for 2–4 weeks first.'};
  return{k:'red',label:'Not ready yet',msg:'Not recommended right now. Build your score first with a short plan.'};
}

/* ---- the readiness card shown on the trek detail + booking review ---- */
function readinessCardHTML(t){
  const req=trekReqScore(t);
  if(!hasFitness()){
    return `<div class="fit-card"><div class="fit-card-h"><span class="msr">bolt</span> Adventure Readiness</div>
      <div class="fit-req-row"><div><small>Difficulty</small><b>${esc(t.lvl||reqBand(req))}</b></div><div><small>Required score</small><b>${req}</b></div><div><small>Your score</small><b>—</b></div></div>
      <button class="btn fit-cta" onclick="go('fitness')"><span class="msr">fitness_center</span> Check my readiness</button></div>`;
  }
  const you=computeFitness().score,rd=readiness(you,req);
  return `<div class="fit-card fit-b-${rd.k}"><div class="fit-card-h"><span class="msr">bolt</span> Adventure Readiness</div>
    <div class="fit-req-row"><div><small>Difficulty</small><b>${esc(t.lvl||reqBand(req))}</b></div><div><small>Required</small><b>${req}</b></div><div><small>Your score</small><b class="fit-you fit-${rd.k}">${you}</b></div></div>
    <div class="fit-status fit-${rd.k}"><span class="fit-dot"></span>${rd.label}</div>
    <p class="fit-msg">${rd.msg}</p>
    ${rd.k!=='green'?`<button class="btn ghost fit-plan" onclick="openTrainingPlan('${jsq(t.n)}')"><span class="msr">calendar_month</span> View ${req-you>10?'30-day':'2–4 week'} prep plan</button>`:''}</div>`;
}
/* difficulty-band colour for a required trek score */
function bandColor(s){return s<50?'#2fbf8f':s<65?'#2f6bff':s<80?'#e0952a':s<90?'#ff7a5c':'#a06bff';}
/* small circular Trek Score badge — the trek's REQUIRED score, band-coloured ring.
   cls 'on-photo' adds a frosted dark disc so it reads over any card image. */
function trekScoreBadge(t,cls){
  const s=trekReqScore(t);if(!s)return '';
  const col=bandColor(s),R=19,C=2*Math.PI*R;
  /* Starts empty (ring at 0, number 0). animateTrekScores() sweeps the ring + counts
     the number up to the real value the moment the badge scrolls into view. */
  return `<div class="trek-score ${cls||''}" style="color:${col}" title="Trek Score ${s} / 100" data-score="${s}" data-circ="${C.toFixed(2)}"><svg viewBox="0 0 46 46"><circle class="tsc-bg" cx="23" cy="23" r="${R}"/><circle class="tsc-fg" cx="23" cy="23" r="${R}" style="stroke:${col};stroke-dasharray:${C.toFixed(2)};stroke-dashoffset:${C.toFixed(2)}"/></svg><span class="tsc-num">0</span></div>`;
}
/* Count-up + ring sweep, fired once per badge when it scrolls into view.
   Geometric (getBoundingClientRect) not IntersectionObserver — the coverflow cards
   animate with opacity/transform, which IO can miss (same reason lazyBg is geometric). */
let _tsScrollWired=false;
function runTrekScore(el){
  if(el.getAttribute('data-tsdone'))return;
  el.setAttribute('data-tsdone','1');
  const target=+el.getAttribute('data-score')||0, C=+el.getAttribute('data-circ')||0;
  const fg=el.querySelector('.tsc-fg'), num=el.querySelector('.tsc-num');
  const finalOff=(C*(1-target/100)).toFixed(2);
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){if(fg)fg.style.strokeDashoffset=finalOff;if(num)num.textContent=String(target);return;}
  requestAnimationFrame(()=>{if(fg)fg.style.strokeDashoffset=finalOff;});   /* CSS transition sweeps the ring */
  const dur=900,t0=performance.now();
  const tick=now=>{const p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3);
    if(num)num.textContent=String(Math.round(target*e));
    if(p<1)requestAnimationFrame(tick);else if(num)num.textContent=String(target);};
  requestAnimationFrame(tick);
}
function animateTrekScores(){
  const check=()=>{const vh=window.innerHeight||800;
    document.querySelectorAll('.trek-score[data-score]:not([data-tsdone])').forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.width>0&&r.top<vh-16&&r.bottom>16)runTrekScore(el);
    });};
  check();setTimeout(check,180);setTimeout(check,650);
  if(!_tsScrollWired){_tsScrollWired=true;let t=0;
    const onScroll=()=>{clearTimeout(t);t=setTimeout(check,80);};
    window.addEventListener('scroll',onScroll,{passive:true,capture:true});   /* capture catches inner scroll containers too */
    window.addEventListener('resize',onScroll,{passive:true});
  }
}
/* compact readiness chip for the search card footer — status word only; the
   circular badge already shows the number, so we don't repeat it. */
function readinessChip(t){
  if(!hasFitness())return '';
  const rd=readiness(computeFitness().score,trekReqScore(t));
  const lbl=rd.k==='green'?'Ready':rd.k==='yellow'?'Prep':'Not ready';
  return `<span class="tag fit-chip fit-b-${rd.k}"><span class="fit-dot"></span>${lbl}</span>`;
}
/* profile entry */
function fitnessProfileCard(){
  if(hasFitness()){
    const r=computeFitness();
    return `<div class="mrow fit-prow" onclick="go('fitness')"><span class="fit-prow-score" style="background:${scoreColor(r.score)}">${r.score}</span><div class="fit-prow-tx"><b>Adventure Readiness</b><small>${esc(r.level)} · tap to view</small></div><span class="ch">${ic('back',16)}</span></div>`;
  }
  return `<div class="mrow fit-prow" onclick="go('fitness')"><span class="ic" style="color:var(--accent2)">${ic('altitude',20)}</span><span class="t">Check your Adventure Readiness</span><span class="ch">${ic('back',16)}</span></div>`;
}

/* ---- Fitness dashboard ---- */
function renderFitness(){
  const box=document.getElementById('fitnessBody');if(!box)return;
  if(!hasFitness()){box.innerHTML=fitnessIntroHTML();hydrate(box);return;}
  const r=computeFitness(),col=scoreColor(r.score);
  const C=2*Math.PI*52,off=C*(1-r.score/100);
  const ring=`<div class="fit-ring-wrap"><svg viewBox="0 0 128 128" class="fit-ring"><circle cx="64" cy="64" r="52" class="fit-ring-bg"/><circle cx="64" cy="64" r="52" class="fit-ring-fg" style="stroke:${col};stroke-dasharray:${C.toFixed(1)};stroke-dashoffset:${off.toFixed(1)}"/></svg><div class="fit-ring-c"><b>${r.score}</b><small>/100</small></div></div><div class="fit-level" style="color:${col}">${esc(r.level)}</div>`;
  const subs=[['Cardio','cardio'],['Strength','strength'],['Endurance','endurance'],['Recovery','recovery'],['Consistency','consistency']];
  const bars=subs.map(s=>`<div class="fit-bar"><div class="fit-bar-top"><span>${s[0]}</span><b>${r.subs[s[1]]}</b></div><div class="fit-bar-tr"><i style="width:${r.subs[s[1]]}%;background:${scoreColor(r.subs[s[1]])}"></i></div></div>`).join('');
  const subEntries=[['Cardio',r.subs.cardio],['Strength',r.subs.strength],['Endurance',r.subs.endurance],['Recovery',r.subs.recovery],['Consistency',r.subs.consistency]];
  const focus=subEntries.reduce((a,b)=>b[1]<a[1]?b:a);
  const meta=[['military_tech',esc(r.level),'Level',''],['landscape',String(new Set(getBookings().map(b=>b.trek)).size),'Treks',''],['target',esc(focus[0]),'Focus',''],['bolt',String(r.score),'Score',col]];
  box.innerHTML=`${ring}
    <div class="fit-subs">${bars}</div>
    <div class="fit-meta">${meta.map(m=>`<div class="fit-meta-c"><span class="fit-meta-ic msr">${m[0]}</span><b${m[3]?` style="color:${m[3]}"`:''}>${m[1]}</b><small>${m[2]}</small></div>`).join('')}</div>
    <button class="btn ghost fit-update" onclick="go('fitnessTest')"><span class="msr">edit</span> Update assessment</button>
    <div class="sec-h" style="margin:22px 4px 10px"><b>Recommended for you</b></div>
    ${aiRecoHTML(r.score)}
    <div style="height:calc(var(--safe-bottom) + 20px)"></div>`;
  hydrate(box);
}
function fitnessIntroHTML(){
  return `<div class="fit-intro"><div class="fit-intro-ic"><span class="msr">bolt</span></div>
    <h2>Know your Adventure Readiness</h2>
    <p>Answer a few quick questions and we'll score your fitness out of 100 — then match you to treks you're ready for, and build prep plans for the ones you're not ready for yet.</p>
    <div class="fit-intro-grid"><div><span class="msr">favorite</span>Cardio</div><div><span class="msr">fitness_center</span>Strength</div><div><span class="msr">directions_run</span>Endurance</div><div><span class="msr">terrain</span>Experience</div></div>
    <button class="btn" onclick="go('fitnessTest')"><span class="msr">arrow_forward</span> Start assessment</button>
    <p class="fit-intro-note">Takes about 2 minutes · Private to you</p></div>`;
}
function aiRecoHTML(score){
  const pool=(typeof cmpAvail==='function'?cmpAvail():treks).slice();
  const rec=[],chal=[],avoid=[];
  pool.forEach(t=>{const req=trekReqScore(t),d=score-req;if(d>=0)rec.push([t,req]);else if(req-score<=10)chal.push([t,req]);else avoid.push([t,req]);});
  rec.sort((x,y)=>y[1]-x[1]);chal.sort((x,y)=>x[1]-y[1]);avoid.sort((x,y)=>x[1]-y[1]);
  const colf=(title,arr,cls,icn)=>arr.length?`<div class="reco-col reco-${cls}"><div class="reco-h"><span class="msr">${icn}</span>${title}</div>${arr.slice(0,4).map(([t,req])=>`<div class="reco-row" onclick="openDetailByName('${jsq(t.n)}')"><div class="reco-ph" style="background-image:url('${esc(t.img||'')}')"></div><div class="reco-tx"><b>${esc(t.n)}</b><small>${esc(t.region||'')} · Req ${req}</small></div><span class="reco-req fit-b-${cls}">${req}</span></div>`).join('')}</div>`:'';
  return (colf('Recommended',rec,'green','check_circle')+colf('Possible challenge',chal,'yellow','trending_up')+colf('Avoid for now',avoid,'red','block'))||'<div class="empty"><p>No treks to match yet.</p></div>';
}

/* ---- Assessment form (chip/toggle driven, minimal typing) ---- */
function renderFitnessTest(){
  const box=document.getElementById('fitnessTestBody');if(!box)return;
  const d=fitStore()||{};
  _fitDraft={age:d.age||'',height:d.height||'',weight:d.weight||'',answers:Object.assign({},d.answers||{})};
  box.innerHTML=FIT_SECTIONS.map(sec=>`<div class="fit-sec"><div class="fit-sec-h"><span class="msr">${sec.icon}</span>${esc(sec.t)}</div>${sec.qs.map(fitQuestionHTML).join('')}</div>`).join('')
    +`<button class="btn fit-submit" onclick="fitSubmit()"><span class="msr">bolt</span> Calculate my score</button><div style="height:calc(var(--safe-bottom) + 20px)"></div>`;
  hydrate(box);
}
function fitQuestionHTML(q){
  const a=_fitDraft.answers,val=a[q.k];
  if(q.type==='num'){const cur=_fitDraft[q.k]||'';return `<div class="fit-q fit-q-num"><label>${esc(q.q)}</label><div class="fit-num"><input id="fitn_${q.k}" type="number" inputmode="numeric" placeholder="${esc(q.ph||'')}" value="${esc(String(cur))}"><span>${esc(q.unit||'')}</span></div></div>`;}
  if(q.type==='toggle'){return `<div class="fit-q fit-q-tog"><span>${esc(q.q)}</span><button type="button" class="fit-tog ${val?'on':''}" onclick="fitToggle('${q.k}',this)"><span class="fit-knob"></span></button></div>`;}
  const multi=q.type==='multi',arr=multi?(Array.isArray(val)?val:[]):null;
  const chips=(q.opts||[]).map(o=>{const on=multi?arr.includes(o.v):String(val)===String(o.v);const fn=multi?`fitMulti('${q.k}','${o.v}',this)`:`fitChip('${q.k}','${o.v}',this)`;return `<button type="button" class="fit-opt ${on?'on':''}" onclick="${fn}">${esc(o.l)}</button>`;}).join('');
  return `<div class="fit-q"><label>${esc(q.q)}${q.soon?' <span class="fit-soon">soon</span>':''}</label><div class="fit-opts ${multi?'multi':''}">${chips}</div></div>`;
}
function fitChip(k,v,el){_fitDraft.answers[k]=v;const w=el.parentElement;w.querySelectorAll('.fit-opt').forEach(b=>b.classList.remove('on'));el.classList.add('on');}
function fitToggle(k,el){const cur=!_fitDraft.answers[k];_fitDraft.answers[k]=cur;el.classList.toggle('on',cur);}
function fitMulti(k,v,el){let arr=Array.isArray(_fitDraft.answers[k])?_fitDraft.answers[k]:[];const i=arr.indexOf(v);if(i>=0)arr.splice(i,1);else arr.push(v);_fitDraft.answers[k]=arr;el.classList.toggle('on');}
function fitSubmit(){
  const g=id=>{const e=document.getElementById(id);return e?e.value:'';};
  _fitDraft.age=Number(g('fitn_age'))||_fitDraft.age||'';
  _fitDraft.height=Number(g('fitn_height'))||_fitDraft.height||'';
  _fitDraft.weight=Number(g('fitn_weight'))||_fitDraft.weight||'';
  if(Object.keys(_fitDraft.answers).length<6){note('Please answer a few more questions so we can score you accurately.','Almost there');return;}
  const data={age:_fitDraft.age,height:_fitDraft.height,weight:_fitDraft.weight,answers:_fitDraft.answers,updatedAt:Date.now()};
  fitSave(data);
  const r=computeFitness(data);_fitComputed=r;
  if(typeof toast==='function')toast('Fitness score: '+r.score+' · '+r.level);
  go('fitness');
  /* Collapse the assessment flow out of history: Back from the result must return to
     wherever the user started (home / trek / menu), never to the assessment form. */
  for(let i=hist.length-1;i>=0;i--){if(hist[i]==='fitness'||hist[i]==='fitnessTest')hist.splice(i,1);}
}

/* ---- AI Training Plan ----
   Renders a solid deterministic plan INSTANTLY (always works, offline-safe), then
   asks Claude (via the fitness-coach edge function) to personalise today's session
   + a coaching note. If the ANTHROPIC_API_KEY secret isn't set, or the function isn't
   deployed, the deterministic plan simply stays — nothing breaks. */
let _planTrek='';
function openTrainingPlan(name){_planTrek=name||'';go('trainingPlan');}
function trekByName(n){return treks.find(t=>t.n===n)||(typeof cmpAvail==='function'?cmpAvail().find(t=>t.n===n):null)||null;}

/* --- workout tracking: tick off today's sessions, build a streak, watch progress --- */
let _planCtx={trek:'',goal:0,total:3,items:[]};
function planStore(){try{return JSON.parse(localStorage.getItem('tmk_plan')||'null');}catch(e){return null;}}
/* ---- cross-device sync ----
   The plan lives in localStorage for instant, offline-capable ticking, and is mirrored
   to profiles.training so the same person sees one streak on every device (and so the
   admin can see who is actually training). Writes are debounced — ticking four sessions
   in a row is one network call, not four. */
let _planPushT=null;
function planSave(p,skipPush){
  p.updatedAt=new Date().toISOString();
  try{localStorage.setItem('tmk_plan',JSON.stringify(p));}catch(e){}
  if(skipPush)return;
  clearTimeout(_planPushT);_planPushT=setTimeout(planPush,900);
}
async function planPush(){
  const sb=getSupaClient();if(!sb)return;
  const uid=await authUid();if(!uid)return;          /* signed out = local only, by design */
  const p=planStore();if(!p)return;
  try{await sb.from('profiles').upsert({id:uid,training:p,updated_at:new Date().toISOString()});}catch(e){}
}
/* Union the ticks rather than letting the newer device win outright: a workout ticked
   on the phone must never be erased by an older copy on the tablet. */
function planMerge(local,remote){
  if(!local)return remote;
  if(!remote)return local;
  const newer=(remote.updatedAt||'')>(local.updatedAt||'')?remote:local;
  const out={trek:newer.trek||'',goal:newer.goal||0,updatedAt:newer.updatedAt||'',days:{}};
  [local.days||{},remote.days||{}].forEach(src=>{
    Object.keys(src).forEach(k=>{out.days[k]=Object.assign({},out.days[k]||{},src[k]||{});});
  });
  /* keep the EARLIEST start so the history (and streak) isn't truncated */
  out.startISO=[local.startISO,remote.startISO].filter(Boolean).sort()[0]||planTodayKey();
  return out;
}
async function planPull(){
  const sb=getSupaClient();if(!sb)return;
  const uid=await authUid();if(!uid)return;
  try{
    const{data}=await sb.from('profiles').select('training').eq('id',uid).maybeSingle();
    const remote=data&&data.training;if(!remote||typeof remote!=='object')return;
    const local=planStore();
    const merged=planMerge(local,remote);
    planSave(merged,true);                            /* don't echo straight back */
    /* if the union differs from what the server holds, push it so both devices agree */
    if(JSON.stringify(merged)!==JSON.stringify(remote))planPush();
    if(cur==='trainingPlan')refreshPlanTracking();
  }catch(e){}
}
function planDkey(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function planTodayKey(){return planDkey(new Date());}
function planLast14(){const a=[];for(let i=13;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);a.push(planDkey(d));}return a;}
function planEnsure(){let p=planStore();if(!p){p={trek:_planCtx.trek,goal:_planCtx.goal,startISO:planTodayKey(),days:{}};planSave(p);}return p;}
function planDayCount(day){return day?Object.keys(day).filter(i=>day[i]).length:0;}
function planStats(p,total){
  const days=p.days||{};let doneDays=0;
  Object.keys(days).forEach(k=>{const c=planDayCount(days[k]);if(c>0&&c>=total)doneDays++;});
  let streak=0;const cur=new Date();
  for(;;){const c=planDayCount(days[planDkey(cur)]);if(c>0&&c>=total){streak++;cur.setDate(cur.getDate()-1);}else break;}
  return {doneDays,streak};
}
function togglePlanItem(i){
  const p=planEnsure();const k=planTodayKey();const day=p.days[k]||(p.days[k]={});
  if(day[i])delete day[i];else day[i]=1;
  planSave(p);refreshPlanTracking();
}
function planItemsHTML(items){
  const p=planEnsure();const day=p.days[planTodayKey()]||{};
  return items.map((w,i)=>`<div class="plan-w tick${day[i]?' done':''}" onclick="togglePlanItem(${i})"><span class="msr">${w.icon}</span><div><b>${esc(w.title)}</b><small>${esc(w.detail)}</small></div><span class="plan-check"><span class="msr">check</span></span></div>`).join('');
}
function planTrackHTML(){
  const p=planEnsure();const st=planStats(p,_planCtx.total);
  const doneToday=planDayCount(p.days[planTodayKey()]);
  const allDone=doneToday>0&&doneToday>=_planCtx.total;
  const strip=planLast14().map(k=>{const c=planDayCount(p.days[k]);const cls=(c>0&&c>=_planCtx.total)?'on':c>0?'part':'';return `<span class="ptrk-dot ${cls}"></span>`;}).join('');
  return `<div class="plan-track">
    <div class="ptrk-row">
      <div class="ptrk-stat"><span class="msr" style="color:#ff8a3c">local_fire_department</span><b>${st.streak}</b><small>day streak</small></div>
      <div class="ptrk-stat"><span class="msr">event_available</span><b>${st.doneDays}</b><small>days done</small></div>
      <div class="ptrk-stat ${allDone?'done':''}"><span class="msr">${allDone?'task_alt':'radio_button_unchecked'}</span><b>${doneToday}/${_planCtx.total}</b><small>today</small></div>
    </div>
    <div class="ptrk-strip">${strip}</div>
    ${allDone?`<div class="ptrk-done"><span class="msr">celebration</span> Today complete — nice work! Keep the streak going.</div>`:''}
  </div>`;
}
function refreshPlanTracking(){
  const tk=document.getElementById('planTrack');if(tk)tk.innerHTML=planTrackHTML();
  const td=document.getElementById('planToday');if(td)td.innerHTML=planItemsHTML(_planCtx.items);
}
function renderTrainingPlan(){
  const box=document.getElementById('trainingPlanBody');if(!box)return;
  const t=_planTrek?trekByName(_planTrek):null;
  const you=hasFitness()?computeFitness().score:userFitnessScore();
  const goal=t?trekReqScore(t):Math.min(100,you+15);
  const gap=Math.max(0,goal-you);
  const days=gap>10?30:14;
  const wk=['Walk 5 km','Stairs 30 min','Jog + walk 4 km','Strength 25 min','Long walk 8 km','Pack walk 5 kg','Rest + stretch'];
  const dow=new Date().getDay();
  const today=wk[dow];
  const strengthDay=/strength/i.test(today);
  const second=strengthDay?{t:'Core & stability 15 min',d:'Plank · side plank · bird-dog'}:{t:'Strength 20 min',d:'Squats · lunges · push-ups'};
  const items=[
    {icon:'directions_walk',title:today,detail:'Main session'},
    {icon:'fitness_center',title:second.t,detail:second.d},
    {icon:'self_improvement',title:'Stretch 10 min',detail:'Calves · hips · lower back'}
  ];
  _planCtx={trek:t?t.n:'',goal,total:items.length,items};
  box.innerHTML=`
    <div class="plan-goal"><div><small>Goal score</small><b>${goal}</b></div><div class="plan-arrow"><span class="msr">arrow_forward</span></div><div><small>Your score</small><b style="color:${scoreColor(you)}">${you}</b></div><div class="plan-days"><small>Days left</small><b>${days}</b></div></div>
    ${t?`<p class="plan-for">A ${days}-day plan to get you ready for <b>${esc(t.n)}</b> (needs ${goal}).</p>`:`<p class="plan-for">A ${days}-day plan to lift your readiness by ~${Math.max(5,gap)} points.</p>`}
    <div class="plan-prog"><div class="plan-prog-tr"><i style="width:${Math.round(Math.min(100,you/goal*100))}%"></i></div><span>${you}/${goal}</span></div>
    <div id="planTrack">${planTrackHTML()}</div>
    <div id="planCoach"></div>
    <div class="sec-h" style="margin:20px 4px 6px;display:flex;align-items:center;justify-content:space-between"><b>Today's workout</b><span id="planAiBadge" class="plan-ai" style="display:none"><span class="msr">auto_awesome</span> AI personalised</span></div>
    <div class="plan-hint">Tap a session to tick it off</div>
    <div class="plan-today" id="planToday">${planItemsHTML(items)}</div>
    <div class="sec-h" style="margin:20px 4px 10px"><b>Weekly rhythm</b></div>
    <div class="plan-week">${wk.map((w,i)=>`<div class="plan-day ${i===dow?'on':''}"><b>${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][i]}</b><span>${esc(w)}</span></div>`).join('')}</div>
    <button class="btn" style="margin-top:18px" onclick="go('fitnessTest')"><span class="msr">refresh</span> Re-test my score</button>
    <div style="height:calc(var(--safe-bottom) + 20px)"></div>`;
  hydrate(box);
  aiEnhancePlan(t,you,goal,days);
}
/* ask Claude to personalise the plan; silently no-ops if unavailable */
async function aiEnhancePlan(t,you,goal,days){
  try{
    if(!(typeof SB!=='undefined'&&SB.SUPABASE_URL))return;
    const r=hasFitness()?computeFitness():null;
    const resp=await fetch(SB.SUPABASE_URL+'/functions/v1/fitness-coach',{
      method:'POST',
      headers:{'Content-Type':'application/json',Authorization:'Bearer '+SB.SUPABASE_ANON_KEY,apikey:SB.SUPABASE_ANON_KEY},
      body:JSON.stringify({score:you,goal,days,trek:t?t.n:'',level:r?r.level:'',subs:r?r.subs:null})
    });
    const d=await resp.json();
    if(!d||!d.ok||!Array.isArray(d.today)||!d.today.length||cur!=='trainingPlan')return;
    const coach=document.getElementById('planCoach');
    if(coach&&d.coach)coach.innerHTML=`<div class="plan-coach"><span class="msr">auto_awesome</span><p>${esc(d.coach)}</p></div>`;
    const icons=['directions_walk','fitness_center','self_improvement','hiking'];
    _planCtx.items=d.today.slice(0,4).map((w,i)=>({icon:icons[i%icons.length],title:w.title||'',detail:w.detail||''}));
    _planCtx.total=_planCtx.items.length;
    const box2=document.getElementById('planToday');if(box2)box2.innerHTML=planItemsHTML(_planCtx.items);
    const tk=document.getElementById('planTrack');if(tk)tk.innerHTML=planTrackHTML();
    const badge=document.getElementById('planAiBadge');if(badge)badge.style.display='inline-flex';
    hydrate(document.getElementById('trainingPlanBody'));
  }catch(e){/* deterministic plan stays */}
}

/* Kill any playing media before switching screens. A hidden view (display:none) keeps
   its <video> and — worse — its YouTube/Vimeo iframe playing audio in the background.
   Pause every video, and revert each played embed back to its tap-to-play poster. */
function stopAllMedia(){
  document.querySelectorAll('video').forEach(v=>{try{v.pause();}catch(e){}});
  document.querySelectorAll('.slide.vid.emb').forEach(cell=>{
    if(!cell.querySelector('iframe'))return;                 /* only ones that were actually played */
    const poster=cell.getAttribute('data-poster')||'';
    cell.innerHTML=`<div class="slide" style="position:absolute;inset:0;${poster?`background-image:url('${poster}')`:'background:#000'}"></div>`
      +`<div class="play-ic"><span class="msr" style="font-size:44px;color:rgba(255,255,255,.95);text-shadow:0 2px 12px rgba(0,0,0,.5)">play_circle</span></div>`;
    cell.setAttribute('onclick','loadEmbed(this)');
  });
  /* generic embeds (trek detail etc.) — blank the src so their audio stops too */
  document.querySelectorAll('.vembed iframe').forEach(f=>{try{f.src='about:blank';}catch(e){}});
  /* the hero drops back to its poster + play badge, ready for the next open */
  document.querySelectorAll('.hero-embed').forEach(el=>{
    const hh=el.parentElement;el.remove();
    if(hh&&cart.trek&&!hh.querySelector('.hero-play'))renderHero(hh,cart.trek);
  });
}
function go(id){const el=document.getElementById(id);if(!el)return;
  stopAllMedia();
  if(id==='captain'&&!isStaffUser()){note('Trip Captain access is for staff only.','Restricted');return;}
  /* In-app admin removed — the admin panel is now the standalone console at /admin/.
     Any attempt to open an admin screen inside the app launches the console instead. */
  if(id==='admin'||id==='adminTrip'){openAdminConsole();return;}
  /* hide any live news banner when entering the login/signup flow */
  if(NO_BANNER_SCREENS.includes(id)){const b=document.getElementById('alertBanner');if(b)b.className='';}
  if(id!==cur){trackScreenLeave();hist.push(cur);try{history.pushState({s:id},'');}catch(e){}if(window.fbTrack)window.fbTrack('PageView');}cur=id;if(el.dataset.tab)lastTab=el.dataset.tab;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));el.classList.add('active');
  const nav=document.getElementById('nav');nav.classList.toggle('hide',el.hasAttribute('data-nonav'));
  if(el.dataset.tab)document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===el.dataset.tab));
  el.scrollTop=0;
  if(id==='travellers'&&!isLoggedIn()){requireLogin('travellers');return;}
  if(id==='explore'){if(!exploreInit){exploreInit=true;}renderExplore();}
  if(id==='filters')renderFilters();
  if(id==='itinerary')renderItinerary();
  if(id==='selectDate')renderSelectDate();
  if(id==='travellers'){trav(0);prefillTravellers();}
  if(id==='review')syncReview();
  if(id==='payment')refreshPayQuote();
  if(id==='community')renderFeed();
  if(id==='person')renderPerson();
  if(id==='search')renderSearch();
  if(id==='messages')renderMessages();
  if(id==='chat')renderChat();
  if(id==='notifications')renderNotifications();
  if(id==='reviews'){renderReviews();loadReviews();}
  if(id==='help')renderHelp();
  if(id==='health')renderHealth(); else stopHealth();
  if(id==='navmap')renderNav(); else stopNav();
  if(id!=='captain')capStopScan();
  if(id==='admin'){_admHub=true;renderAdmin();}   /* always land on the section grid */
  if(id==='gear')renderGear();
  if(id==='permits')renderPermits();
  if(id==='activities')renderActivities();
  if(id==='dests'){renderDests();loadDestinations(true).then(()=>renderDests()).catch(()=>{});}
  if(id==='tours')renderTours();
  if(id==='dest')renderDest();
  if(id==='act')renderAct();
  if(id==='cart')renderCart();
  if(id==='becomeHost')renderBecomeHost();
  if(id==='hostTrip')renderHostTrip();
  if(id==='hostDash')renderHostDash();
  if(id==='hostProfile')renderHostProfile();
  if(id==='vendorDash')renderVendorDash();
  /* restoreNav() can land here directly on a reload, so load on demand */
  if(id==='hosts'){if(_hostsLoaded)renderHostsList();
    else Promise.all([loadAllHosts(),loadTripCountsByHost()]).then(renderHostsList).catch(()=>{});}
  if(id==='community')renderFeed();
  if(id==='peopleSearch'){_peoplePool=null;setTimeout(()=>{const i=document.getElementById('peopleSearchInput');if(i){i.value='';i.focus();}searchPeople('');},80);}
  if(id==='news')renderNews();
  if(id==='passport')renderPassport();
  if(id==='dataPrivacy')renderDataPrivacy();
  if(id==='emergency')renderEmergency();
  if(id==='pledge')renderPledge();
  if(id==='home')schedulePledgePrompt(); else clearTimeout(_pledgeTimer);
  if(id==='savedPosts')renderSavedPosts();
  if(id==='followRequests')renderFollowRequests();
  if(id==='followList')renderFollowList();
  if(id==='userActivity')renderUserActivity();
  if(id==='packing'){pkTrek=_pkForce||(cart.trek&&cart.trek.n)||'';_pkForce='';renderPacking();}
  if(id==='bookings')renderBookings();
  if(id==='guardian')renderGuardian();
  if(id==='wishlist')renderWishlist();
  if(id==='profile'){renderProfile();refreshMyProfile();}
  if(id==='accountMenu')renderAccountMenu();
  if(id==='giftCards')renderGiftCards();
  if(id==='wallet')renderWallet();
  if(id==='editProfile')renderEditProfile();
  if(id==='onboarding')initPrefs();
  if(id==='settings')renderSettings();
  if(id==='account')renderAccount();
  if(id==='notifPrefs')renderNotifPrefs();
  if(id==='language')renderLanguage();
  if(id==='payments')renderPayments();
  if(id==='compare')renderCompare();
  if(id==='fitness')renderFitness();
  if(id==='fitnessTest')renderFitnessTest();
  if(id==='trainingPlan')renderTrainingPlan();
  if(id==='htBook')renderHtBook();
  staggerActive();saveNav();
  /* animate any Trek Score badges the just-shown view revealed (view switches fire no scroll event) */
  if(typeof animateTrekScores==='function')setTimeout(animateTrekScores,60);
}
/* in-app back button → use browser history so it stays in sync with device back */
function back(){history.back();}
/* actually move the app to the previous screen (called by device/browser back) */
function _showPrev(){stopAllMedia();const p=hist.pop();if(p){cur=p;document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));const el=document.getElementById(p);el.classList.add('active');document.getElementById('nav').classList.toggle('hide',el.hasAttribute('data-nonav'));if(el.dataset.tab){lastTab=el.dataset.tab;document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===el.dataset.tab));}staggerActive();saveNav();}else{cur='__root';go(lastTab||'home');}}
/* device/browser back button handling */
window.addEventListener('popstate',function(){_showPrev();});
/* keep this device's photo/cover/name in sync when it returns to the foreground —
   so a change made on another device shows up without needing a re-login */
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')refreshMyProfile();});
window.addEventListener('focus',function(){refreshMyProfile();});
/* remember the current screen + context so a refresh stays put */
function saveNav(){try{localStorage.setItem('tmk_nav',JSON.stringify({s:cur,t:(cart.trek?cart.trek.idx:0),b:(cart.booking?cart.booking.id:''),d:(typeof curDest!=='undefined'?curDest:'')}));}catch(e){}}
function restoreNav(){try{const n=JSON.parse(localStorage.getItem('tmk_nav')||'null');if(!n||!n.s||n.s==='splash')return;
  if(typeof n.t==='number'&&treks[n.t])cart.trek=treks[n.t];
  if(!document.getElementById(n.s))return;
  if(n.s==='detail'){openDetail(n.t||0);return;}
  if(n.s==='ticket'||n.s==='success'){const b=getBookings().find(x=>x.id===n.b);if(b){openTicket(b.id);}else go('bookings');return;}
  if(n.s==='captain'){isCaptain()?go('captain'):go('profile');return;}
  if(n.s==='admin'){isAdmin()?go('admin'):go('profile');return;}
  if(n.s==='person'){go('community');return;}
  /* road trip detail needs its trek re-rendered (go('trip') alone paints nothing) */
  if(n.s==='trip'){const t=treks[n.t||0];if(t&&isTour(t)){openTrip(n.t||0);return;}go(lastTab||'home');return;}
  /* destination page needs curDest, which isn't a view id — restore it, else fall home */
  if(n.s==='dest'){
    if(n.d&&typeof destById==='function'&&destById(n.d)){openDest(n.d);return;}
    if(n.d&&typeof loadDestinations==='function'){loadDestinations(true).then(()=>{(n.d&&destById(n.d))?openDest(n.d):go(lastTab||'home');}).catch(()=>go(lastTab||'home'));return;}
    go(lastTab||'home');return;
  }
  go(n.s);
}catch(e){}}
/* ---------- motion layer ---------- */
const _io=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');_io.unobserve(e.target);}}),{threshold:.12}):null;
function observeReveal(){if(!_io)return;document.querySelectorAll('.reveal:not(.in)').forEach(el=>_io.observe(el));}
function staggerActive(){observeReveal();const v=document.querySelector('.view.active');if(!v)return;
  const els=v.querySelectorAll('.tcard,.hcard,.bigcard,.gitem,.atile,.perm,.post,.mrow,.qa,.batch,.pk,.region,.diffc,.noti,.rowi');
  els.forEach((el,i)=>{if(i>16)return;el.classList.remove('stagger');void el.offsetWidth;el.style.animationDelay=Math.min(i*40,400)+'ms';el.classList.add('stagger');});}
const TAP='.btn,.tcard,.hcard,.bigcard,.qa,.chip,.rb,.hb,.nav button,.gitem,.atile,.batch,.pay,.mrow,.pk,.region,.diffc,.bk,.add,.pa';
document.addEventListener('pointerdown',e=>{const t=e.target.closest(TAP);if(!t)return;t.classList.add('pressed');
  if(t.matches('.btn,.rb,.hb,.qa,.pa,.bk,.add')){const cs=getComputedStyle(t);if(cs.position==='static')t.style.position='relative';t.style.overflow='hidden';
    const r=t.getBoundingClientRect(),s=Math.max(r.width,r.height),sp=document.createElement('span');sp.className='ripple';sp.style.width=sp.style.height=s+'px';sp.style.left=(e.clientX-r.left-s/2)+'px';sp.style.top=(e.clientY-r.top-s/2)+'px';t.appendChild(sp);setTimeout(()=>sp.remove(),560);}});
['pointerup','pointercancel','pointerleave'].forEach(ev=>document.addEventListener(ev,()=>document.querySelectorAll('.pressed').forEach(el=>el.classList.remove('pressed'))));
(function(){const d=document.getElementById('detail');if(d)d.addEventListener('scroll',function(){const h=document.getElementById('dHero');if(h)h.style.transform='translateY('+(this.scrollTop*0.25)+'px)';});})();

/* expose */
Object.assign(window,{go,back,openDetail,setHomeFilter,filterByRegion,filterByDiff,filterAll,pickF,resetFilters,applyFilters,selBatch,trav,checkTravellers,selPay,confirmBooking,openTicket,setPk,togPk,captainLogin,captainExit,captainVerify,captainTestLast,downloadItinerary,shareTrek,toggleFav,selCommTab,likePost,addPost,calPick,doSearch,wa,downloadChecklist,togGear,gearEnquire,connectWatch,openNav,toggleNav,recenterNav,adminLogin,adminExit,newTrek,editTrek,delTrek,saveTrek,closeAdminForm,saveAdminKey,setAdminTab,addBatch,delBatch,saveSettings,sendOtp,sendPhoneOtp,verifyOtp,resendOtp,continueAsGuest,signOut,saveProfile,epPickPhoto,startJourney,authTab,otpBoxInput,otpBoxKey,socialLogin,passwordAuth,togglePw,forgotPassword,searchPeople,renderPeopleResults,openPerson,toggleFollow,suggestFollow,rmPostPic,bookActivity,carScroll,deletePost,repostPost,openNews,openNewsDetail,dblLike,openDetailByName,toggleTagPerson,pkAddItem,pkDelItem,savePackingAdmin,dismissAlert,cfTapCard,cfOpenCard,setTheme,renderMessages,openChat,renderChat,sendChat,openPackingFor,renderPermits,filterByCity,getDirections,addStaff,removeStaff,setStaffRole,togglePref,savePrefs,skipOnboarding,capScan,capStopScan,setProfTab,openReviewModal,closeReviewModal,submitReview,setRevStars,adminAddReview,adminDelReview,toggleSavePost,renderEmergency,renderSavedPosts,followAction,requestCall,declineCall,allowCallMsg,togglePrivateAccount,renderFollowRequests,acceptFollowReq,declineFollowReq,admToggleHl,filterAdminHub,admAssignCaptain,admChangeBatch,admRefund,admCancelBooking,admInvoice,renderAdminUsers,paintUsers,admNotifyUser,renderAdminPayments,admPayFilter,admExportCSV,admRevenueCSV,renderAdminGear,gearAdj,gearAddItem,gearDelItem,gearSeed,renderAdminCommunity,admDeletePost,admFeaturePost,renderAdminPermits,permSet,renderAdminSupport,ticketReply,ticketResolve,raiseTicket,renderAdminCRM,crmSearch,crmOpen,renderAdminAI,saveAiCfg,renderAdminVendors,vendorSet,openVendorDash,renderVendorDash,applyVendor,vendorAddListing,vendorToggleListing,vendorDelListing});

/* init */
applyTheme();   /* dark / light / system theme */
loadSocial();   /* follows, likes, your posts & comments */
loadCart();     /* adventure cart (per account) */
initAuth();     /* restore login session if user was previously signed in */
/* plain background behind the photo collage (no full-bleed image) */
renderSplashCollage();
initLoginBg();
renderHomeChips();renderHome();renderQuick();
hydrate();
restoreNav();   /* stay on the last screen after a refresh */
try{history.replaceState({s:cur},'');history.pushState({s:cur},'');}catch(e){} /* buffer so device back navigates in-app instead of closing */
loadTreks();    /* pull live treks from Supabase if configured (else built-in) */
loadDestinations().then(()=>{try{if(document.querySelector('#dests.active'))renderDests();}catch(e){}}).catch(()=>{});
renderHomeNews();     /* trek news & alerts strip on home */
loadReviews();        /* pull reviews so trek pages + the Reviews screen reflect them */
loadAiCfg();          /* admin-editable message templates (welcome, SOS, planner) */
refreshNotifBadge();  /* show red dot if there's new community activity */
setInterval(refreshNotifBadge,60000);  /* poll for new activity every minute */
handleDeepLink();     /* open a trek directly from a shared link */
/* ---- pull-to-refresh ---- */
/* soft refresh — reloads the current screen's data in the background, no page reload / no layout shift */
async function refreshCurrent(){
  try{
    await loadTreks(true);   /* pull-to-refresh is authoritative — go straight to the DB */
    /* pull-to-refresh is authoritative: refetch news and overwrite the SWR cache
       so renderNews() paints the just-fetched copy instead of a stale one */
    _newsCache=null;const freshNews=await loadNews();if(freshNews&&freshNews.length)swrSet('news',freshNews);
    if(cur==='community'){_lastFeed=[];await renderFeed();}
    else if(cur==='home'){renderHome();renderHomeNews();}
    else if(cur==='news')renderNews();
    else if(cur==='explore')renderExplore();
    else if(cur==='bookings')renderBookings();
    else if(cur==='profile')renderProfile();
    else if(cur==='notifications')renderNotifications();
    else{renderHomeNews();}
    refreshNotifBadge();
  }catch(e){}
}
(function(){
  let y0=0,pulling=false,busy=false;const TH=70;
  const ind=()=>document.getElementById('ptr');
  document.addEventListener('touchstart',e=>{
    if(busy||document.querySelector('.modal.show')){pulling=false;return;}
    const v=document.querySelector('.view.active');
    if(v&&v.scrollTop<=0){y0=e.touches[0].clientY;pulling=true;}else pulling=false;
  },{passive:true});
  document.addEventListener('touchmove',e=>{
    if(!pulling)return;const dy=e.touches[0].clientY-y0;const el=ind();if(!el)return;
    if(dy>0){const d=Math.min(dy,110);el.style.transform='translateX(-50%) translateY('+d+'px)';el.style.opacity=String(Math.min(1,d/60));el.classList.toggle('ready',d>=TH);}
    else{el.style.opacity='0';}
  },{passive:true});
  const retract=el=>{el.classList.remove('spin','ready');el.style.transition='transform .3s,opacity .3s';el.style.transform='translateX(-50%) translateY(0)';el.style.opacity='0';setTimeout(()=>{el.style.transition='';},320);};
  document.addEventListener('touchend',()=>{
    if(!pulling)return;pulling=false;const el=ind();if(!el)return;
    if(el.classList.contains('ready')){
      busy=true;el.classList.add('spin');el.style.transform='translateX(-50%) translateY(58px)';el.style.opacity='1';
      refreshCurrent().finally(()=>{setTimeout(()=>{retract(el);busy=false;},500);});
    }else retract(el);
  },{passive:true});
})();

/* ---------- install app prompt (mobile web only) ---------- */
(function(){
  let deferred=null;
  const DISMISS_KEY='tmk_install_dismissed';
  const isMobile=()=>/android|iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/mac/i.test(navigator.platform));
  const isIOS=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/mac/i.test(navigator.platform)&&!window.MSStream);
  const isAndroid=()=>/android/i.test(navigator.userAgent);
  /* already running as an installed app? then never nag */
  const installed=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
  const dismissed=()=>{try{return localStorage.getItem(DISMISS_KEY)==='1';}catch(e){return false;}};
  const storeUrl=()=>{
    if(isAndroid()&&SB.PLAY_STORE_URL)return SB.PLAY_STORE_URL;
    if(isIOS()&&SB.APP_STORE_URL)return SB.APP_STORE_URL;
    return '';
  };

  function show(){
    const bar=document.getElementById('installBar');if(!bar)return;
    if(!isMobile()||installed()||dismissed())return;
    const store=storeUrl();
    /* iOS Safari has no install prompt — tell people where the button is */
    if(!store&&!deferred&&isIOS()){
      const sub=document.getElementById('ibSub');
      if(sub)sub.textContent='Tap Share, then “Add to Home Screen”';
      const go=document.getElementById('ibGo');
      if(go)go.textContent='How';
    }
    /* nothing to offer: no store link, no PWA prompt, not iOS */
    if(!store&&!deferred&&!isIOS())return;
    bar.classList.add('show');
  }
  function hide(){const bar=document.getElementById('installBar');if(bar)bar.classList.remove('show');}

  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault();      /* keep the mini-infobar away; we drive it from our own button */
    deferred=e;
    show();
  });
  window.addEventListener('appinstalled',()=>{
    deferred=null;hide();
    try{localStorage.setItem(DISMISS_KEY,'1');}catch(e){}
  });

  document.addEventListener('DOMContentLoaded',()=>{
    const go=document.getElementById('ibGo'),x=document.getElementById('ibX');
    if(x)x.onclick=()=>{hide();try{localStorage.setItem(DISMISS_KEY,'1');}catch(e){}};
    if(go)go.onclick=async()=>{
      const store=storeUrl();
      if(store){window.open(store,'_blank','noopener');return;}
      if(deferred){
        deferred.prompt();
        try{const{outcome}=await deferred.userChoice;if(outcome==='accepted')hide();}catch(e){}
        deferred=null;return;
      }
      if(isIOS()){
        note('Open the Share menu in Safari, then choose “Add to Home Screen”.','Install Tripomonk');
        return;
      }
    };
    /* store link needs no browser prompt — offer it right away */
    setTimeout(show,1200);
  });
})();

/* deep link: someone opened a shared promise link — take them straight to the pledge */
document.addEventListener('DOMContentLoaded',()=>{try{if(/take-promise/.test(location.hash||'')){setTimeout(()=>{try{go('pledge');}catch(e){}},600);}}catch(e){}});

/* ---------- update prompt ---------- */
let _updateReady=false;
function showUpdateToast(){
  _updateReady=true;
  const t=document.getElementById('updateToast');if(!t)return;
  if(sessionStorage.getItem('tmk_update_dismissed')==='1')return;
  t.classList.add('show');
  sfx('notif');
}
function applyUpdate(){location.reload();}
document.addEventListener('DOMContentLoaded',()=>{
  const x=document.getElementById('utX');
  if(x)x.onclick=e=>{
    e.stopPropagation();                 /* don't trigger the toast's reload */
    document.getElementById('updateToast').classList.remove('show');
    try{sessionStorage.setItem('tmk_update_dismissed','1');}catch(err){}
  };
});

/* ---------- sound effects ----------
   Synthesised with Web Audio: no audio files to ship, cache or fail offline.
   Muted via Settings; browsers also block audio until the user interacts, and
   every trigger here IS a tap, so the context unlocks naturally. */
let _actx=null;
function soundOn(){try{return localStorage.getItem('tmk_sound')!=='0';}catch(e){return true;}}
function setSound(on){try{localStorage.setItem('tmk_sound',on?'1':'0');}catch(e){}
  if(on)sfx('like');            /* preview so the toggle is audible */
  const el=document.getElementById('soundToggle');
  if(el)el.classList.toggle('on',on);
}
const SFX={
  like:   {notes:[[880,0],[1320,.07]], dur:.13, type:'sine',     vol:.07},
  comment:{notes:[[620,0],[820,.06]],  dur:.12, type:'triangle', vol:.06},
  repost: {notes:[[520,0],[700,.05],[880,.1]], dur:.16, type:'sine', vol:.055},
  notif:  {notes:[[990,0],[1480,.09]], dur:.2,  type:'sine',     vol:.07},
  unlike: {notes:[[520,0]],            dur:.08, type:'sine',     vol:.04}
};
function sfx(kind){
  if(!soundOn())return;
  const s=SFX[kind];if(!s)return;
  try{
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    _actx=_actx||new AC();
    if(_actx.state==='suspended')_actx.resume();
    const t0=_actx.currentTime;
    s.notes.forEach(([freq,at])=>{
      const o=_actx.createOscillator(),g=_actx.createGain();
      o.type=s.type;o.frequency.setValueAtTime(freq,t0+at);
      /* quick attack, smooth decay — a click is what a raw gate sounds like */
      g.gain.setValueAtTime(0,t0+at);
      g.gain.linearRampToValueAtTime(s.vol,t0+at+.012);
      g.gain.exponentialRampToValueAtTime(.0001,t0+at+s.dur);
      o.connect(g);g.connect(_actx.destination);
      o.start(t0+at);o.stop(t0+at+s.dur+.02);
    });
  }catch(e){}
}

/* ============================================================
   HOST YOUR OWN TRIP — stage 1: apply -> admin review -> verified host
   ------------------------------------------------------------
   Not collected here on purpose: government ID, bank details, GST.
   Storing those turns this database into a KYC breach target. Take them
   on the verification call; let Razorpay Route hold KYC for payouts.
   ============================================================ */

async function loadHostApp(){
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){_hostApp=null;_hostLoaded=true;return null;}
  try{
    const{data}=await sb.from('host_applications').select('*').eq('user_id',uid).maybeSingle();
    _hostApp=data||null;
  }catch(e){_hostApp=null;}
  _hostLoaded=true;
  return _hostApp;
}
function isVerifiedHost(){return !!(_hostApp&&_hostApp.status==='approved');}

const HOST_FIELDS=[
  ['hfName','Full name','text','Your full name',true],
  ['hfEmail','Email','email','you@email.com',false],
  ['hfMobile','Mobile','tel','+91 XXXXX XXXXX',true],
  ['hfCity','City','text','Where are you based?',false],
  ['hfInsta','Instagram','text','@yourhandle or link',false],
  ['hfYt','YouTube','text','Channel link (optional)',false],
  ['hfSite','Website','text','Optional',false],
  ['hfFollowers','Total followers','text','e.g. 12k across platforms',false],
  ['hfLangs','Languages spoken','text','e.g. Hindi, English',false]
];
function hostField(f){
  const id=f[0],label=f[1],type=f[2],ph=f[3],req=f[4];
  return '<div class="field"><label>'+label+(req?' *':'')+'</label>'
    +'<div class="inp"><input id="'+id+'" type="'+type+'" placeholder="'+ph+'"/></div></div>';
}
async function renderBecomeHost(){
  const body=document.getElementById('hostBody');if(!body)return;
  if(!isLoggedIn()){
    body.innerHTML='<div class="empty" style="padding:36px 0"><p style="font-size:13px;color:var(--muted);margin-bottom:16px">Sign in to apply as a host.</p>'
      +'<button class="btn" style="max-width:220px;margin:0 auto" onclick="_loginReturn=\'becomeHost\';go(\'login\')">Sign in</button></div>';
    return;
  }
  body.innerHTML='<div class="skel skel-card" style="height:140px"></div>';
  await loadHostApp();

  /* already applied — show status, not the form again */
  if(_hostApp){
    const s=_hostApp.status;
    const label=s==='approved'?'Verified Host':s==='rejected'?'Not approved':'Under review';
    const icon=s==='approved'?'verified':s==='rejected'?'cancel':'schedule';
    const msg=s==='approved'
      ? 'You can now create trips. Tripomonk handles operations — you focus on your community.'
      : s==='rejected'
      ? 'Your application was not approved this time.'
      : 'We review applications within a few days. We may reach out on WhatsApp to verify details.';
    /* a visible 3-step tracker — "under review" with no sense of progress is
       the main reason applicants message you asking what happened */
    const step=s==='approved'?3:s==='rejected'?2:2;
    const steps=[['Applied','done'],
                 ['Tripomonk review',s==='pending'?'now':'done'],
                 [s==='rejected'?'Not approved':'Verified Host',s==='approved'?'done':s==='rejected'?'bad':'wait']];
    body.innerHTML='<div class="hstat '+esc(s)+'"><span class="msr" style="font-size:15px">'+icon+'</span> '+label+'</div>'
      +'<div class="host-hero"><h2>'+esc(_hostApp.full_name||'')+'</h2><p>'+esc(msg)+'</p></div>'
      +'<div class="hsteps">'+steps.map(function(x,i){
          return '<div class="hstep '+x[1]+'"><span class="hsdot">'+(x[1]==='done'?'✓':x[1]==='bad'?'×':(i+1))+'</span>'
            +'<small>'+esc(x[0])+'</small></div>';
        }).join('<span class="hsline"></span>')+'</div>'
      +(_hostApp.admin_note?'<p class="host-note"><b>Note from Tripomonk:</b> '+esc(_hostApp.admin_note)+'</p>':'')
      +(s==='approved'?'<button class="btn" onclick="openHostDash()">Open host dashboard</button>'
        +'<button class="btn ghost" style="margin-top:10px" onclick="openHostTrip()">Create a trip</button>'
        +'<div id="myTripsBox" style="margin-top:18px"></div>':'')
      +(s==='pending'?'<p class="host-note">Applied '+timeAgo(_hostApp.created_at)+'. We collect ID and payout details on the verification call — never in the app.</p>'
        +'<button class="btn ghost" onclick="openHostProfile()">Edit my application</button>'
        +'<button class="btn ghost" style="margin-top:10px" onclick="wa(\'Hi Tripomonk, checking on my host application.\')">Ask about my application</button>':'')
      +(s==='rejected'?'<button class="btn ghost" onclick="wa(\'Hi Tripomonk, about my host application —\')">Talk to us</button>':'');
    hydrate(body);
    if(s==='approved')renderMyTrips();
    return;
  }

  /* the multi-step application wizard */
  _hwStep=0;renderHostWizard();
}
/* ============================================================
   HOST ONBOARDING WIZARD — card-style, multi-step
   ============================================================ */
const HOST_WIZARD=[
  {key:'host_type',title:'Who are you?',sub:'Choose one',type:'single',opts:['Travel Influencer','Trek Leader','Photographer','Content Creator','Bike Ride Organizer','Camping Organizer','College Club / Community','Adventure Enthusiast','Tour Guide','Other']},
  {key:'experiences',title:'What do you want to host?',sub:'Select all that apply',type:'multi',opts:['Treks','Bike Expeditions','Camping','Photography Tours','Heritage Walks','Sunrise Hikes','Spiritual Tours','Wildlife Trips','Beach Trips','Backpacking','Trail Running','Group Tours']},
  {key:'destinations',title:'Which destinations can you host?',sub:'Select all that apply',type:'multi',opts:['Kashmir','Ladakh','Spiti','Uttarakhand','Himachal','Meghalaya','Sikkim','Goa','Rajasthan','Kerala','Nepal','Bhutan']},
  {key:'experience_level',title:'Experience level',sub:'Choose one',type:'single',opts:['First Time Host','Hosted 1–5 Trips','Hosted 5–20 Trips','Hosted 20+ Trips','Professional Tour Leader']},
  {key:'group_size',title:'Group size preference',sub:'Choose one',type:'single',opts:['5–10 People','10–20 People','20–40 People','40+ People','No Preference']},
  {key:'languages',title:'Languages',sub:'Select all you speak',type:'multi',opts:['Hindi','English','Bengali','Tamil','Marathi','Gujarati','Punjabi','Kannada','Telugu','Malayalam','Other']},
  {key:'hosting_style',title:'Your hosting style',sub:'Choose up to 3',type:'multi',max:3,opts:['Adventure','Luxury','Budget','Photography','Backpacking','Solo Travel','Women Only','Family Friendly','Corporate Retreats','Student Trips','Weekend Getaways','Wellness','Culture','Food','Motorcycling']},
  {key:'acquisition',title:'How will you bring travellers?',sub:'Select all that apply',type:'multi',opts:['Instagram','YouTube','WhatsApp Community','Telegram','Facebook','LinkedIn','College Network','Travel Community','Personal Referrals','Website','Other']},
  {key:'audience_size',title:'Audience size',sub:'Choose one',type:'single',opts:['Less than 500','500–2K','2K–10K','10K–50K','50K–100K','100K+','Prefer not to say']},
  {key:'why_host',title:'Why do you want to host?',sub:'Choose one',type:'single',opts:['Share my travel experience','Earn extra income','Build a travel community','Create amazing content','Lead adventures','Start my own travel brand']},
  {key:'basic',title:'Basic details',sub:'Mobile, WhatsApp, email and date of birth are required (hosts must be 18+)',type:'form',fields:[['bd_name','Full name','text',true],['bd_mobile','Mobile number','tel',true],['bd_whatsapp','WhatsApp number','tel',true],['bd_email','Email address','email',true],['bd_city','City','text',false],['bd_dob','Date of birth','date',true]]},
  {key:'socials',title:'Social profiles',sub:'Add any you like',type:'form',fields:[['so_insta','Instagram','text',false],['so_yt','YouTube','text',false],['so_fb','Facebook','text',false],['so_li','LinkedIn','text',false],['so_web','Website (optional)','text',false]]},
  {key:'bio',title:'Tell us about yourself',sub:'A short bio — max 300 characters',type:'bio'},
  {key:'commission',title:'How you earn',sub:'Please read and agree before you submit',type:'consent'},
  {key:'review',title:'Review & submit',sub:'Check your details, then submit for verification',type:'review'}
];
let _hwStep=0,_hwAns={};
/* 18+ age gate for hosts */
function eighteenCutoff(){const d=new Date();d.setFullYear(d.getFullYear()-18);return d;}
function maxDobStr(){return eighteenCutoff().toISOString().slice(0,10);}   /* date input max = 18y ago */
function dobIsAdult(str){if(!str)return false;const d=new Date(str);return !isNaN(d)&&d<=eighteenCutoff();}
function hwCheckDob(el){
  if(el.value&&!dobIsAdult(el.value)){
    note('You need to be 18 or older to host trips on Tripomonk.','18+ required');
    el.value='';if(_hwAns.basic)_hwAns.basic.bd_dob='';
  }else if(_hwAns.basic){_hwAns.basic.bd_dob=el.value;}
}
function hwReset(){_hwStep=0;_hwAns={host_type:'',experiences:[],destinations:[],experience_level:'',group_size:'',languages:[],hosting_style:[],acquisition:[],audience_size:'',why_host:'',basic:{},socials:{},bio:'',consent:false};
  /* prefill basic + socials from the signed-in profile */
  _hwAns.basic={bd_name:getSavedName()||'',bd_mobile:getSavedMobile()||'',bd_whatsapp:getSavedMobile()||'',bd_email:getUserEmail()||'',bd_city:'',bd_dob:''};
  const soc=getSavedSocials()||{};
  _hwAns.socials={so_insta:soc.instagram||'',so_yt:soc.youtube||'',so_fb:soc.facebook||'',so_li:soc.linkedin||'',so_web:soc.website||''};
}
function hwPick(key,val){_hwAns[key]=val;renderHostWizard();}
function hwToggleConsent(){_hwAns.consent=!_hwAns.consent;renderHostWizard();}
function hwToggle(key,val,max){
  const arr=_hwAns[key]||(_hwAns[key]=[]);const i=arr.indexOf(val);
  if(i>=0)arr.splice(i,1);
  else{ if(max&&arr.length>=max){toast('Choose up to '+max);return;} arr.push(val); }
  renderHostWizard();
}
function hwSaveForm(){
  const st=HOST_WIZARD[_hwStep];if(st.type!=='form')return;
  _hwAns[st.key]=_hwAns[st.key]||{};
  st.fields.forEach(f=>{
    if(f[2]==='tel'){if(document.getElementById(f[0]))_hwAns[st.key][f[0]]=readTel(f[0]);return;}
    const el=document.getElementById(f[0]);if(el)_hwAns[st.key][f[0]]=el.value.trim();
  });
}
function hwSaveBio(){const el=document.getElementById('hwBio');if(el)_hwAns.bio=el.value.slice(0,300);}
function hwStepValid(){
  const st=HOST_WIZARD[_hwStep];
  if(st.type==='single')return !!_hwAns[st.key];
  if(st.type==='multi')return (_hwAns[st.key]||[]).length>0;
  if(st.type==='consent')return !!_hwAns.consent;
  if(st.type==='form'){hwSaveForm();return st.fields.filter(f=>f[3]).every(f=>(_hwAns[st.key][f[0]]||'').trim());}
  return true;
}
function hwNext(){
  const st=HOST_WIZARD[_hwStep];
  if(st.type==='form')hwSaveForm();if(st.type==='bio')hwSaveBio();
  if(!hwStepValid()){toast(st.type==='consent'?'Please tick the box to agree':st.type==='multi'?'Please select at least one':'Please complete this step');return;}
  if(_hwStep<HOST_WIZARD.length-1){_hwStep++;renderHostWizard();document.querySelector('.view.active').scrollTop=0;}
}
function hwBack(){
  const st=HOST_WIZARD[_hwStep];if(st.type==='form')hwSaveForm();if(st.type==='bio')hwSaveBio();
  if(_hwStep>0){_hwStep--;renderHostWizard();document.querySelector('.view.active').scrollTop=0;}
  else renderBecomeHost();
}
function renderHostWizard(){
  const body=document.getElementById('hostBody');if(!body)return;
  if(!_hwAns.basic)hwReset();
  const st=HOST_WIZARD[_hwStep];const n=HOST_WIZARD.length;
  const pct=Math.round(((_hwStep+1)/n)*100);
  let inner='';
  if(st.type==='single'){
    inner='<div class="hw-cards">'+st.opts.map(o=>`<div class="hw-card ${_hwAns[st.key]===o?'on':''}" onclick="hwPick('${st.key}','${jsq(o)}')">${esc(o)}</div>`).join('')+'</div>';
  }else if(st.type==='multi'){
    const sel=_hwAns[st.key]||[];
    inner='<div class="hw-cards">'+st.opts.map(o=>`<div class="hw-card ${sel.includes(o)?'on':''}" onclick="hwToggle('${st.key}','${jsq(o)}',${st.max||0})">${esc(o)}</div>`).join('')+'</div>';
  }else if(st.type==='form'){
    const a=_hwAns[st.key]||{};
    inner=st.fields.map(f=>{
      const req=f[3]?' *':'';
      /* phone fields get a country-code selector; the code auto-fills from location */
      if(f[2]==='tel'){
        return `<div class="field"><label>${esc(f[1])}${req}</label>${telInput(f[0],a[f[0]]||'',{ph:f[0]==='bd_whatsapp'?'WhatsApp number':'98765 43210'})}</div>`;
      }
      const ph=f[0]==='bd_email'?'you@email.com':'';
      const extra=f[0]==='bd_dob'?` max="${maxDobStr()}" oninput="hwCheckDob(this)"`:'';
      return `<div class="field"><label>${esc(f[1])}${req}</label><div class="inp"><input id="${f[0]}" type="${f[2]}" value="${esc(a[f[0]]||'')}" placeholder="${ph}"${extra}/></div>${f[0]==='bd_dob'?'<small class="host-note" style="margin:5px 2px 0">You must be at least 18 to host trips.</small>':''}</div>`;
    }).join('');
  }else if(st.type==='bio'){
    inner=`<textarea id="hwBio" class="hw-bio" maxlength="300" placeholder="e.g. I'm an avid Himalayan trekker who has led 30+ beginner-friendly treks…" oninput="document.getElementById('hwBioC').textContent=this.value.length">${esc(_hwAns.bio||'')}</textarea><div class="hw-bioc"><span id="hwBioC">${(_hwAns.bio||'').length}</span>/300</div>`;
  }else if(st.type==='consent'){
    const on=!!_hwAns.consent;
    inner='<div class="hw-fee">'
      +'<div class="hw-fee-hero"><div class="hw-fee-big">90%</div><div class="hw-fee-lbl">of the <b>profit</b> is yours<br>Tripomonk keeps <b>10%</b> — profit-share only</div></div>'
      +'<div class="hw-fee-ex"><span>How it works — example figures</span>'
        +'<div class="hw-fee-rows">'
          +'<div class="hw-fee-row"><small>Trip booking</small><b>₹10,000</b></div>'
          +'<div class="hw-fee-row"><small>− Operations cost (stay, food, transport, guides, permits)</small><b>−₹6,000</b></div>'
          +'<div class="hw-fee-row profit"><small>= Profit</small><b>₹4,000</b></div>'
        +'</div>'
        +'<div class="hw-fee-split"><div><small>You keep · 90%</small><b>₹3,600</b></div><div><small>Tripomonk · 10%</small><b>₹400</b></div></div>'
        +'<p class="hw-fee-note">Illustrative only — actual operations cost is agreed with you per trip and can differ.</p>'
      +'</div>'
      +'<ul class="hw-fee-list">'
        +'<li><span class="msr">receipt_long</span>Operations costs are agreed with you, then deducted first</li>'
        +'<li><span class="msr">handshake</span>Only the remaining <b>profit</b> is shared — never your costs</li>'
        +'<li><span class="msr">campaign</span>Tripomonk brings payments, marketing &amp; support</li>'
        +'<li><span class="msr">account_balance</span>Payout after your trip is completed</li>'
      +'</ul>'
      +'<label class="hw-consent'+(on?' on':'')+'" onclick="hwToggleConsent()"><span class="hw-check msr">'+(on?'check_box':'check_box_outline_blank')+'</span>'
        +'<span>I understand this is <b>profit-sharing only</b>: operations costs are covered first, then the remaining profit is split <b>90% to me / 10% to Tripomonk</b>. Final costs &amp; commercials are confirmed on my verification call.</span></label>'
    +'</div>';
  }else if(st.type==='review'){
    const rev=(l,v)=>v&&v.length?`<div class="hw-rev"><small>${l}</small><b>${esc(Array.isArray(v)?v.join(', '):v)}</b></div>`:'';
    const b=_hwAns.basic||{},s=_hwAns.socials||{};
    inner='<div class="hw-review">'
      +rev('Host type',_hwAns.host_type)
      +rev('Experiences',_hwAns.experiences)
      +rev('Destinations',_hwAns.destinations)
      +rev('Experience level',_hwAns.experience_level)
      +rev('Group size',_hwAns.group_size)
      +rev('Languages',_hwAns.languages)
      +rev('Hosting style',_hwAns.hosting_style)
      +rev('Audience size',_hwAns.audience_size)
      +rev('Name',b.bd_name)+rev('Mobile',b.bd_mobile)+rev('City',b.bd_city)
      +rev('Instagram',s.so_insta)+rev('Website',s.so_web)
      +rev('Bio',_hwAns.bio)
      +(_hwAns.consent?'<div class="hw-rev"><small>Profit share</small><b>90% to you (after ops cost) — agreed ✓</b></div>':'')
      +'</div><p class="host-note">Government ID, PAN and bank/payout details are collected securely on your verification call after approval — never in the app.</p>';
  }
  const isLast=_hwStep===n-1;
  body.innerHTML=`<div class="hw-top"><div class="hw-prog"><i style="width:${pct}%"></i></div>
      <div class="hw-step">Step ${_hwStep+1} of ${n}</div></div>
    <h2 class="hw-title">${esc(st.title)}</h2>${st.sub?`<p class="hw-sub">${esc(st.sub)}</p>`:''}
    <div class="hw-body">${inner}</div>
    <div class="hw-nav">
      <button class="btn ghost" onclick="hwBack()">${_hwStep===0?'Cancel':'Back'}</button>
      <button class="btn" onclick="${isLast?'submitHostApp()':'hwNext()'}">${isLast?'Submit for verification':'Continue'}</button>
    </div>`;
  hydrate(body);
  /* on the basic-details step, pre-fill the country code + city from the visitor's location */
  if(st.type==='form'&&st.key==='basic')applyGeoAutofill(['bd_mobile','bd_whatsapp'],['bd_city']);
}
async function submitHostApp(){
  hwSaveForm();hwSaveBio();
  const b=_hwAns.basic||{},s=_hwAns.socials||{};
  const name=(b.bd_name||'').trim(),mobile=(b.bd_mobile||'').trim(),whatsapp=(b.bd_whatsapp||'').trim(),email=(b.bd_email||'').trim();
  const phoneOk=x=>/^[+\d][\d\s-]{7,}$/.test(x);
  if(!name){note('Please enter your full name.','Name required');return;}
  if(!phoneOk(mobile)){note('Please enter a valid mobile number.','Check your number');return;}
  if(!phoneOk(whatsapp)){note('Please enter a valid WhatsApp number.','WhatsApp required');return;}
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){note('Please enter a valid email address.','Email required');return;}
  if(!dobIsAdult(b.bd_dob)){note('You need to be 18 or older to host trips on Tripomonk.','18+ required');return;}
  if(!_hwAns.consent){note('Please agree to the profit-share terms (90/10 after operations cost) to continue.','Consent required');_hwStep=HOST_WIZARD.findIndex(s=>s.type==='consent');renderHostWizard();return;}
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in to apply.','Sign in required');return;}
  const btn=document.querySelector('#hostBody .hw-nav .btn:not(.ghost)');
  if(btn){btn.disabled=true;btn.textContent='Submitting…';}
  /* flat columns keep the admin view working; `answers` holds the full structured response */
  const row={user_id:uid,full_name:name,mobile:mobile,city:b.bd_city||'',
    instagram:s.so_insta||'',youtube:s.so_yt||'',website:s.so_web||'',
    languages:(_hwAns.languages||[]).join(', '),experience:_hwAns.experience_level||'',
    trip_types:(_hwAns.experiences||[]).join(', '),destinations:(_hwAns.destinations||[]).join(', '),
    about:_hwAns.bio||'',status:'pending',commission_pct:10,commission_basis:'profit_after_ops',commission_consent:!!_hwAns.consent,consent_at:_hwAns.consent?new Date().toISOString():null,
    answers:{host_type:_hwAns.host_type,experiences:_hwAns.experiences,destinations:_hwAns.destinations,
      experience_level:_hwAns.experience_level,group_size:_hwAns.group_size,languages:_hwAns.languages,
      hosting_style:_hwAns.hosting_style,acquisition:_hwAns.acquisition,audience_size:_hwAns.audience_size,
      why_host:_hwAns.why_host,whatsapp:whatsapp,email:email,dob:b.bd_dob||'',facebook:s.so_fb||'',linkedin:s.so_li||'',bio:_hwAns.bio||''}};
  const r=await sb.from('host_applications').insert(row);
  if(btn){btn.disabled=false;btn.textContent='Submit for verification';}
  if(r.error){
    const dup=r.error.code==='23505';
    note(dup?'You have already applied — we are reviewing it.':'Could not submit: '+r.error.message,dup?'Already applied':'Error');
    if(dup)renderBecomeHost();
    return;
  }
  sfx('repost');
  if(window.fbTrack)window.fbTrack('Lead',{content_name:'Host application'});
  /* await, then re-render — otherwise the status screen paints behind the modal
     and the applicant never sees that their application actually landed */
  await note('Application received. We usually review within 2–3 days and may message you on WhatsApp.','Submitted ✓');
  await loadHostApp();     /* pull the row back so the status screen is real, not assumed */
  renderBecomeHost();      /* keep the screen truthful in case they navigate back to it */
  /* Land them on HOME, not back inside the form they just finished. Nothing more is
     required of them here, and re-showing the wizard read as "it didn't submit". */
  go('home');
  /* Review takes a couple of days — use that time to get their public profile filled in,
     since that's what trekkers will see next to their trips. */
  if(!getSavedPhoto()||!getSavedUsername()){
    setTimeout(()=>{
      note('While we review, add a photo and pick a username so trekkers recognise you.','Finish your profile')
        .then(()=>go('editProfile')).catch(()=>{});
    },600);
  }
}

/* ---- admin: review host applications ---- */
const instaUrl=h=>{h=String(h||'').trim();if(/^https?:/i.test(h))return h;return 'https://instagram.com/'+h.replace(/^@/,'');};

/* Hosts is three different jobs — reviewing applications, browsing approved hosts and
   publishing their trips. At a handful of each they fitted in one list; at a few hundred
   they don't. Split into sub-tabs, each searchable and filterable by status. */
let _hostSub='Applications',_hostAppQ='',_hostAppStatus='All',_hostTripQ='',_hostTripStatus='All';
let _appsCache=null,_tripsCache=null;
function setHostSub(s){_hostSub=s;renderAdminHosts();}
async function renderAdminHosts(force){
  const box=document.getElementById('adminBody');if(!box)return;
  const sb=getSupaClient();if(!sb){box.innerHTML='<div class="note2">Connect Supabase to manage hosts.</div>';return;}
  if(force){_appsCache=null;_tripsCache=null;}
  if(!_appsCache||!_tripsCache)box.innerHTML='<div class="skel skel-card" style="height:90px"></div><div class="skel skel-card" style="height:90px"></div>';
  if(!_appsCache){
    const r=await sb.from('host_applications').select('*').order('created_at',{ascending:false});
    if(r.error){box.innerHTML='<div class="empty"><p>Could not load applications: '+esc(r.error.message)+'</p></div>';return;}
    _appsCache=r.data||[];
  }
  if(!_tripsCache){
    const r=await sb.from('host_trips').select('*').order('created_at',{ascending:false});
    _tripsCache=r.error?[]:(r.data||[]);
    await resolveHostNames(_tripsCache);
  }
  if(adminTab!=='Hosts')return;
  const apps=_appsCache,trips=_tripsCache;
  const pending=apps.filter(a=>a.status==='pending').length;
  const approved=apps.filter(a=>a.status==='approved').length;
  const drafts=trips.filter(t=>t.status==='draft').length;
  const sub=(n,count)=>`<button class="adm-sub ${n===_hostSub?'on':''}" onclick="setHostSub('${n}')">${n}${count?`<span class="adm-pill">${count}</span>`:''}</button>`;
  box.innerHTML=
    `<div class="adm-kgrid">
      <div class="adm-kpi ${pending?'warn':''}"><b>${pending}</b><small>Pending</small></div>
      <div class="adm-kpi"><b>${approved}</b><small>Verified hosts</small></div>
      <div class="adm-kpi ${drafts?'warn':''}"><b>${drafts}</b><small>Trips to review</small></div>
    </div>
    <div class="adm-subs">${sub('Applications',pending)}${sub('Trips',drafts)}</div>
    <div id="admHostBody"></div>`;
  hydrate(box);
  renderHostSubBody();
}
function renderHostSubBody(){
  const box=document.getElementById('admHostBody');if(!box)return;
  if(_hostSub==='Trips')return renderHostTripsAdmin(box);
  const chip=(v,cur,onc)=>`<button class="adm-chip ${v===cur?'on':''}" onclick="${onc}">${esc(v)}</button>`;
  const q=_hostAppQ.trim().toLowerCase();
  const list=(_appsCache||[]).filter(a=>{
    if(_hostAppStatus!=='All'&&a.status!==_hostAppStatus.toLowerCase())return false;
    if(q&&!((a.full_name+' '+(a.city||'')+' '+(a.mobile||'')).toLowerCase().includes(q)))return false;
    return true;});
  box.innerHTML=
    `<div class="adm-search"><span class="msr">search</span><input placeholder="Search by name, city or mobile…" value="${esc(_hostAppQ)}" oninput="_hostAppQ=this.value;renderHostSubBody()"></div>
     <div class="adm-chips">${['All','Pending','Approved','Rejected'].map(v=>chip(v,_hostAppStatus,`_hostAppStatus='${v}';renderHostSubBody()`)).join('')}</div>
     <div class="adm-count">${list.length} application${list.length!==1?'s':''}</div>`
    +(list.length?list.map(admHostAppCard).join('')
      :'<div class="empty"><p>No applications match.</p></div>');
  hydrate(box);
}
function renderHostTripsAdmin(box){
  const chip=(v,cur,onc)=>`<button class="adm-chip ${v===cur?'on':''}" onclick="${onc}">${esc(v)}</button>`;
  const q=_hostTripQ.trim().toLowerCase();
  const list=(_tripsCache||[]).filter(t=>{
    if(_hostTripStatus!=='All'&&t.status!==_hostTripStatus.toLowerCase())return false;
    if(q&&!((t.title+' '+(t.destination||'')+' '+(t.host_name||'')).toLowerCase().includes(q)))return false;
    return true;});
  box.innerHTML=
    `<div class="adm-search"><span class="msr">search</span><input placeholder="Search by trip, destination or host…" value="${esc(_hostTripQ)}" oninput="_hostTripQ=this.value;renderHostSubBody()"></div>
     <div class="adm-chips">${['All','Draft','Live','Rejected'].map(v=>chip(v,_hostTripStatus,`_hostTripStatus='${v}';renderHostSubBody()`)).join('')}</div>
     <div class="adm-count">${list.length} trip${list.length!==1?'s':''}</div>`
    +(list.length?list.map(adminTripCard).join('')
      :'<div class="empty"><p>No trips match.</p></div>');
  hydrate(box);
}
function admHostAppCard(a){
      const links=[a.instagram?'<a href="'+esc(instaUrl(a.instagram))+'" target="_blank" rel="noopener">Instagram</a>':'',
                   a.youtube?'<a href="'+esc(a.youtube)+'" target="_blank" rel="noopener">YouTube</a>':'',
                   a.website?'<a href="'+esc(a.website)+'" target="_blank" rel="noopener">Website</a>':''].filter(Boolean).join(' · ');
      return '<div class="happ">'
        +'<b>'+esc(a.full_name)+'</b> <span class="hstat '+esc(a.status)+'" style="margin:0 0 0 6px;padding:3px 8px;font-size:10px">'+esc(a.status)+'</span>'
        +'<div class="hmeta">'
        +esc(a.mobile||'')+(a.city?' · '+esc(a.city):'')+(a.followers?' · '+esc(a.followers)+' followers':'')+'<br>'
        +(links||'<i style="color:var(--muted2)">no links given</i>')+'<br>'
        +(a.experience?esc(a.experience)+'<br>':'')
        +(a.trip_types?'<b>Wants to host:</b> '+esc(a.trip_types)+'<br>':'')
        +(a.destinations?'<b>Destinations:</b> '+esc(a.destinations)+'<br>':'')
        +(a.about?esc(a.about):'')
        +'</div>'
        /* only offer the action that makes sense for the current status —
           an approved host showing an "Approve" button is just confusing */
        +'<div class="hact">'
        +(a.status!=='approved'
          ? '<button class="ok" onclick="reviewHost(\''+esc(a.id)+'\',\'approved\',\''+jsq(a.full_name)+'\')">'
            +(a.status==='rejected'?'Approve anyway':'Approve')+'</button>' : '')
        +(a.status==='pending'
          ? '<button class="no" onclick="reviewHost(\''+esc(a.id)+'\',\'rejected\',\''+jsq(a.full_name)+'\')">Reject</button>' : '')
        +(a.status==='approved'
          ? '<button class="no" onclick="reviewHost(\''+esc(a.id)+'\',\'rejected\',\''+jsq(a.full_name)+'\')">Revoke access</button>' : '')
        +'<button onclick="wa(\'Hi '+jsq(a.full_name)+', about your Tripomonk host application —\')">WhatsApp</button>'
        +'</div></div>';
}
/* rich review card for a host-submitted trip — hero image, status, key facts, clear actions */
function adminTripCard(t){
  const id=esc(t.id),ttl=jsq(t.title);
  const st=t.status==='live'?'approved':t.status==='rejected'?'rejected':'pending';
  const label=t.status==='live'?'Live':t.status==='rejected'?'Rejected':'Pending review';
  const dates=esc(String(t.start_date||''))+(t.end_date?' → '+esc(String(t.end_date)):'');
  const chip=(icon,txt)=>txt?'<span class="rvchip">'+ic(icon,12)+esc(String(txt))+'</span>':'';
  return '<div class="rvcard status-'+esc(t.status||'draft')+'">'
    +'<div class="rvhero" onclick="openAdminTrip(\''+id+'\')" style="background-image:url(\''+esc(t.img||'')+'\')">'
      +'<span class="rvbadge '+st+'">'+esc(label)+'</span>'
      +'<span class="rvprice">'+INR(t.price||0)+'</span>'
    +'</div>'
    +'<div class="rvbody">'
      +'<div class="rvtitle" onclick="openAdminTrip(\''+id+'\')">'+esc(t.title)+'</div>'
      +'<div class="rvhost">'+ic('user',13)+'by <b style="color:var(--text);font-weight:600;margin-left:2px">'+esc(t.host_name||'Host')+'</b></div>'
      +'<div class="rvmeta">'
        +chip('pin',t.destination)
        +chip('calendar',dates)
        +chip('clock',t.days?t.days+' days':'')
        +chip('community',t.max_people?'max '+t.max_people:'')
        +chip('altitude',t.difficulty)
      +'</div>'
      +'<div class="rvactions">'
        +'<button class="rv-review" onclick="openAdminTrip(\''+id+'\')">'+ic('search',15)+'Review</button>'
        +(t.status!=='live'
          ? '<button class="rv-ok" onclick="reviewTrip(\''+id+'\',\'live\',\''+ttl+'\')">Publish</button>'
          : '<button onclick="reviewTrip(\''+id+'\',\'draft\',\''+ttl+'\')">Unpublish</button>')
        +(t.status!=='rejected'?'<button class="rv-no" onclick="reviewTrip(\''+id+'\',\'rejected\',\''+ttl+'\')">Reject</button>':'')
      +'</div>'
    +'</div>'
  +'</div>';
}
async function reviewHost(id,status,name){
  if(!isAdminUser()){note('Admins only.','Not allowed');return;}
  if(!(await askConfirm((status==='approved'?'Approve ':'Reject ')+name+'?',status==='approved'?'Approve host':'Reject host')))return;
  const sb=getSupaClient();if(!sb)return;
  /* .select() matters: an RLS-blocked update returns 0 rows and NO error */
  const r=await sb.from('host_applications')
    .update({status:status,reviewed_at:new Date().toISOString()}).eq('id',id).select('user_id');
  if(r.error||!r.data||!r.data.length){
    note('Could not update: '+((r.error&&r.error.message)||'no rows changed — check the admin policy.'),'Error');return;
  }
  /* the public badge is synced by the host_status_sync DB trigger — doing it from
     here silently updated 0 rows, because the admin does not own that profile row */
  await note(name+(status==='approved'?' is now a Verified Host.':' was rejected.'),'Done');
  _ovCache=null;
  renderAdminHosts(true);      /* status changed — refetch, don't reuse the cached list */
}

/* ============================================================
   HOST · CREATE A TRIP
   Drafts only. Nothing a host submits can go live without admin review —
   that rule is enforced by RLS, not by this screen.
   ============================================================ */
const HT_DIFF=['Easy','Moderate','Difficult'];
const HT_MAX_OPTS=[6,8,10,12,15,20,25,30,40];
const HT_DEST_POP=['Uttarakhand','Himachal','Kashmir','Ladakh','Spiti','Sikkim','Meghalaya','Nepal'];
function pickHtMax(n){const el=document.getElementById('htMax');if(el)el.value=n;renderHostTrip();}
function pickHtDest(x){const el=document.getElementById('htDest');if(el)el.value=x;renderHostTrip();}

function htChip(list,sel,fn){
  return list.map(o=>'<span class="tap '+(sel.includes(o)?'sel':'')+'" onclick="'+fn+'(\''+jsq(o)+'\')">'+esc(o)+'</span>').join('');
}
function toggleInc(o){const i=_htInc.indexOf(o);i>=0?_htInc.splice(i,1):_htInc.push(o);renderHostTrip();}
function toggleExc(o){const i=_htExc.indexOf(o);i>=0?_htExc.splice(i,1):_htExc.push(o);renderHostTrip();}
function renderHostTrip(){
  const d=document.getElementById('htDiff');
  if(d)d.innerHTML=HT_DIFF.map(x=>'<span class="tap '+(_htDiff===x?'sel':'')+'" onclick="pickHtDiff(\''+x+'\')">'+x+'</span>').join('');
  /* tap-to-fill quick picks — a host should mostly select, not type */
  const mx=document.getElementById('htMaxChips');
  if(mx){const cur=(document.getElementById('htMax')||{}).value;
    mx.innerHTML=HT_MAX_OPTS.map(x=>'<span class="tap '+(String(cur)===String(x)?'sel':'')+'" onclick="pickHtMax('+x+')">'+x+'</span>').join('');}
  const dc=document.getElementById('htDestChips');
  if(dc){const cur=((document.getElementById('htDest')||{}).value||'').trim();
    dc.innerHTML=HT_DEST_POP.map(x=>'<span class="tap '+(cur===x?'sel':'')+'" onclick="pickHtDest(\''+jsq(x)+'\')">'+esc(x)+'</span>').join('');}
  /* destination suggestions + inclusion/exclusion pickers */
  const dl=document.getElementById('htDestList');
  if(dl&&typeof DESTS!=='undefined')dl.innerHTML=DESTS.map(x=>'<option value="'+esc(x.n)+'">').join('');
  const ic2=document.getElementById('htIncChips');if(ic2)ic2.innerHTML=htChip(INC_OPTIONS,_htInc,'toggleInc');
  const ec=document.getElementById('htExcChips');if(ec)ec.innerHTML=htChip(EXC_OPTIONS,_htExc,'toggleExc');
  const img=document.getElementById('htImg');
  if(img){
    if(_htImgData){
      img.style.backgroundImage="url('"+_htImgData+"')";
      img.classList.add('has');
      img.innerHTML='<span class="tphint">Tap to change photo</span>';
    }else{
      img.style.backgroundImage='';
      img.classList.remove('has');
      img.innerHTML='<span class="msr">add_photo_alternate</span><span class="tphint">Add a cover photo</span>';
    }
  }
  const dt=document.getElementById('htDate');if(dt)dt.min=todayISO(0);
  const et=document.getElementById('htEnd');if(et)et.min=(dt&&dt.value)||todayISO(0);
  renderHtMedia();
  htPreview();
  hydrate(document.getElementById('hostTrip'));
}
/* live preview so a host sees the card travellers will see, before submitting */
function htPreview(){
  const box=document.getElementById('htPrev');if(!box)return;
  const v=id=>((document.getElementById(id)||{}).value||'').trim();
  const title=v('htTitle')||'Your trip title';
  const dest=v('htDest')||'Destination';
  const date=v('htDate'), end=v('htEnd'), days=v('htDays'), max=v('htMax'), price=parseFloat(v('htPrice'));
  const fmt=d=>new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short'});
  const when=date?(end&&end>=date?fmt(date)+' – '+fmt(end):fmt(date)):'Date not set';
  const bits=[when];
  if(days)bits.push(days+' days');
  if(max)bits.push('max '+max);
  if(_htDiff)bits.push(_htDiff);
  box.innerHTML='<div class="tpl">Preview</div>'
    +'<b>'+esc(title)+'</b>'
    +'<small>'+ic('pin',10)+' '+esc(dest)+'</small>'
    +'<small style="margin-top:3px">'+esc(bits.join(' · '))+'</small>'
    +'<span class="tpp">'+(price>=0&&!isNaN(price)?INR(price)+' <span style="font-size:11px;color:var(--muted2);font-weight:400">per person</span>':'<span style="font-size:12px;color:var(--muted2);font-weight:400">Price not set</span>')+'</span>';
  hydrate(box);
}
/* open a native date picker even though the input's chrome is stripped */
function openPicker(id){const el=document.getElementById(id);if(!el)return;try{el.showPicker?el.showPicker():el.focus();}catch(e){el.focus();}}
/* end date can't be before start; nudge it forward and cap its min */
function htEndFromStart(){
  const s=document.getElementById('htDate'),e=document.getElementById('htEnd');if(!s||!e)return;
  if(s.value){e.min=s.value;if(e.value&&e.value<s.value)e.value=s.value;}
  htDaysFromRange();
}
/* days is derived from the range — inclusive, so a same-day trip is 1 day */
function htDaysFromRange(){
  const s=(document.getElementById('htDate')||{}).value,e=(document.getElementById('htEnd')||{}).value;
  const d=document.getElementById('htDays');if(!d)return;
  if(s&&e&&e>=s){
    const ms=new Date(e+'T00:00:00')-new Date(s+'T00:00:00');
    d.value=Math.round(ms/864e5)+1;
  }else d.value='';
}
function pickHtDiff(x){_htDiff=x;renderHostTrip();}
function htPickImg(input){
  const f=input.files&&input.files[0];if(!f)return;
  input.value='';
  if(!/^image\//.test(f.type)){note('Please choose an image.','Not an image');return;}
  _htFile=f;
  const r=new FileReader();
  r.onload=e=>{_htImgData=e.target.result;renderHostTrip();};
  r.readAsDataURL(f);
}
/* ---- trek gallery: multiple photos + videos (incl. the host's own video) ---- */
const HT_MEDIA_MAX=12, HT_VIDEO_MB=50;
function isVideoUrl(u){return /\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(String(u||''));}
function htPickMedia(input){
  const files=[...(input.files||[])];input.value='';
  if(!files.length)return;
  files.forEach(f=>{
    if(_htMedia.length>=HT_MEDIA_MAX){note('You can add up to '+HT_MEDIA_MAX+' items.','Gallery full');return;}
    if(!/^image\//.test(f.type)){note('Only photos can be uploaded. Add videos with the “Video link” button.','Photos only');return;}
    const item={kind:'image',file:f,isNew:true,preview:''};
    const r=new FileReader();r.onload=e=>{item.preview=e.target.result;_htMedia.push(item);renderHtMedia();};r.readAsDataURL(f);
  });
}
async function htAddVideoLink(){
  if(_htMedia.length>=HT_MEDIA_MAX){note('You can add up to '+HT_MEDIA_MAX+' items.','Gallery full');return;}
  const url=await askCode('Paste an Instagram or YouTube link',{placeholder:'instagram.com/reel/… or youtube.com/watch?v=…'});
  if(url==null)return;
  const v=parseVideoLink((url||'').trim());
  if(!v||(v.kind!=='instagram'&&v.kind!=='youtube')){note('Please paste an Instagram or YouTube video link.','Invalid link');return;}
  _htMedia.push({kind:'video',url:url.trim(),isNew:false});renderHtMedia();
}
function htRemoveMedia(i){
  const m=_htMedia[i];
  if(m&&m.isNew&&m.kind==='video'&&m.preview){try{URL.revokeObjectURL(m.preview);}catch(e){}}
  _htMedia.splice(i,1);renderHtMedia();
}
function renderHtMedia(){
  const g=document.getElementById('htMediaGrid');if(!g)return;
  const tiles=_htMedia.map((m,i)=>{
    const src=m.isNew?m.preview:m.url;
    let body;
    if(m.kind==='video'){
      const poster=videoPoster(src);
      const frame=(!poster&&isVideoUrl(src))?'<video src="'+esc(src)+'#t=0.1" muted preload="metadata" playsinline></video>':'';
      body='<div class="htm-thumb" style="'+(poster?'background-image:url(\''+esc(poster)+'\')':'background:#0a1626')+'">'+frame+'</div><span class="htm-play msr">play_circle</span><span class="htm-tag">Video</span>';
    }else body='<div class="htm-thumb" style="background-image:url(\''+esc(src)+'\')"></div>';
    return '<div class="htm-item">'+body+'<button class="htm-x" type="button" aria-label="Remove" onclick="htRemoveMedia('+i+')">&times;</button></div>';
  }).join('');
  const canAdd=_htMedia.length<HT_MEDIA_MAX;
  const addPhoto=canAdd?'<button type="button" class="htm-add" onclick="document.getElementById(\'htMediaFile\').click()"><span class="msr">add_photo_alternate</span><small>Add photos</small></button>':'';
  const addVid=canAdd?'<button type="button" class="htm-add" onclick="htAddVideoLink()"><span class="msr">smart_display</span><small>Video link</small></button>':'';
  g.innerHTML=tiles+addPhoto+addVid;
}
/* no id = create. id = edit that trip (drafts/rejected only; live is locked). */
async function openHostTrip(id){
  await loadHostApp();
  if(!isVerifiedHost()){note('Only verified hosts can create trips.','Not yet approved');return;}
  _editTripId=id||null;_htFile=null;
  const set=(k,v)=>{const el=document.getElementById(k);if(el)el.value=v==null?'':v;};
  if(id){
    const sb=getSupaClient();const uid=sb?await authUid():null;
    if(!sb||!uid)return;
    const r=await sb.from('host_trips').select('*').eq('id',id).eq('host_id',uid).maybeSingle();
    const t=r.data;
    if(!t){note('Trip not found.','Error');_editTripId=null;return;}
    if(t.status==='live'){note('Live trips are locked — message us to change them.','Locked');_editTripId=null;return;}
    _htDiff=t.difficulty||'Moderate';_htImgData=t.img||'';
    _htMedia=Array.isArray(t.media)?t.media.filter(x=>x&&x.url).map(x=>({kind:(x.type==='video'||isVideoUrl(x.url))?'video':'image',url:x.url,isNew:false})):[];
    set('htTitle',t.title);set('htDest',t.destination);set('htDate',t.start_date);set('htEnd',t.end_date);
    set('htDays',t.days);set('htMax',t.max_people);set('htPrice',t.price);
    set('htDesc',t.description);
    /* stored inclusions/exclusions are newline/comma text — split back into chips */
    const splt=s=>String(s||'').split(/[\n,]+/).map(x=>x.trim()).filter(Boolean);
    _htInc=splt(t.inclusions);_htExc=splt(t.exclusions);
    htDaysFromRange();
  }else{
    _htDiff='Moderate';_htImgData='';_htInc=[];_htExc=[];_htMedia=[];
    ['htTitle','htDest','htDate','htEnd','htDays','htMax','htPrice','htDesc'].forEach(k=>set(k,''));
  }
  go('hostTrip');renderHostTrip();
  const h=document.querySelector('#hostTrip .bar h1');if(h)h.textContent=id?'Edit trip':'Create a trip';
  const b=document.getElementById('htSubmit');if(b)b.textContent=id?'Save changes':'Submit for review';
}
async function submitHostTrip(){
  const v=id=>((document.getElementById(id)||{}).value||'').trim();
  const title=v('htTitle'),dest=v('htDest'),date=v('htDate'),end=v('htEnd');
  const days=parseInt(v('htDays'),10),max=parseInt(v('htMax'),10),price=parseFloat(v('htPrice'));
  if(!title){note('Give your trip a title.','Title required');return;}
  if(!dest){note('Where does this trip go?','Destination required');return;}
  if(!date){note('Pick a start date.','Date required');return;}
  if(date<todayISO(0)){note('Start date cannot be in the past.','Check the date');return;}
  if(!end){note('Pick an end date.','Date required');return;}
  if(end<date){note('End date cannot be before the start date.','Check the dates');return;}
  if(!days||days<1){note('How many days is the trip?','Duration required');return;}
  if(!max||max<1){note('How many people can join?','Group size required');return;}
  if(!(price>=0)||isNaN(price)){note('Set a price per person.','Price required');return;}

  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in.','Sign in required');return;}
  await loadHostApp();
  if(!isVerifiedHost()){note('Only verified hosts can create trips.','Not approved');return;}

  const btn=document.getElementById('htSubmit');
  if(btn){btn.disabled=true;btn.textContent='Submitting…';}
  let imgUrl='';
  try{
    if(_htFile){
      /* compress before upload — hosts will pick straight off their camera roll */
      const small=await compressImage(_htFile,{maxW:1440,quality:.82});
      const path='trips/'+Date.now()+'_'+Math.random().toString(36).slice(2)+'.jpg';
      const up=await sb.storage.from('community').upload(path,small,{cacheControl:'3600',upsert:false});
      if(up.error)throw new Error(up.error.message);
      imgUrl=sb.storage.from('community').getPublicUrl(path).data.publicUrl;
    }
    /* upload the trek gallery — photos + videos (incl. the host's own video).
       Already-uploaded items (on edit) keep their URL; new picks are uploaded. */
    const mediaArr=[];
    if(_htMedia.length&&btn)btn.textContent='Uploading media…';
    for(const m of _htMedia){
      if(!m.isNew){mediaArr.push({type:m.kind,url:m.url});continue;}
      if(m.kind==='image'){
        const small=await compressImage(m.file,{maxW:1600,quality:.82});
        const p='trips/media/'+Date.now()+'_'+Math.random().toString(36).slice(2)+'.jpg';
        const up=await sb.storage.from('community').upload(p,small,{cacheControl:'3600',contentType:'image/jpeg'});
        if(up.error)throw new Error('Photo upload failed: '+up.error.message);
        mediaArr.push({type:'image',url:sb.storage.from('community').getPublicUrl(p).data.publicUrl});
      }else{
        const ext=((m.file.name.split('.').pop()||'mp4').toLowerCase().replace(/[^a-z0-9]/g,''))||'mp4';
        const p='trips/media/'+Date.now()+'_'+Math.random().toString(36).slice(2)+'.'+ext;
        const up=await sb.storage.from('community').upload(p,m.file,{cacheControl:'3600',contentType:m.file.type||'video/mp4'});
        if(up.error)throw new Error('Video upload failed: '+up.error.message);
        mediaArr.push({type:'video',url:sb.storage.from('community').getPublicUrl(p).data.publicUrl});
      }
    }
    if(btn)btn.textContent='Submitting…';
    /* the host's real name is what they gave on their APPLICATION, not a stale
       localStorage value (which could be blank or, if the admin created it, wrong) */
    const hostName=(_hostApp&&_hostApp.full_name)||myName();
    const row={host_id:uid,host_name:hostName,title:title,destination:dest,start_date:date,end_date:end,
      days:days,max_people:max,difficulty:_htDiff,price:price,
      description:v('htDesc'),inclusions:_htInc.join('\n'),exclusions:_htExc.join('\n')};
    /* keep the existing photo on edit unless a new one was picked */
    if(imgUrl)row.img=imgUrl; else if(!_editTripId)row.img=null;
    row.media=mediaArr;   /* the trek gallery (may be empty if the host removed everything) */
    let r;
    if(_editTripId){
      /* status deliberately not sent — the DB trigger pins it regardless */
      r=await sb.from('host_trips').update(row).eq('id',_editTripId).eq('host_id',uid).select('id');
    }else{
      row.status='draft';
      r=await sb.from('host_trips').insert(row).select('id');
    }
    if(r.error)throw new Error(r.error.message);
    if(!r.data||!r.data.length)throw new Error(_editTripId?'Nothing saved — you can only edit your own trips.':'Not saved — your host approval may have changed.');
    sfx('repost');
    await note(_editTripId?'Trip updated. We review changes before they go live.':'Trip submitted. We review it before it goes live.','Saved ✓');
    const wasEdit=_editTripId;_editTripId=null;
    if(wasEdit)openHostDash();else go('becomeHost');
  }catch(e){
    note('Could not submit: '+e.message,'Error');
  }finally{
    if(btn){btn.disabled=false;btn.textContent='Submit for review';}
  }
}
/* a host's own trips, any status */
async function myHostTrips(){
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid)return [];
  try{const r=await sb.from('host_trips').select('*').eq('host_id',uid).order('created_at',{ascending:false});
    const trips=r.data||[];
    /* auto-close the host's OWN live trips whose dates are over. RLS-safe (host_id=uid).
       Existing bookings are untouched — they live in the bookings table / on the ticket. */
    const stale=trips.filter(t=>t.status==='live'&&hostTripEnded(t));
    if(stale.length){stale.forEach(t=>{t.status='closed';});
      Promise.all(stale.map(t=>sb.from('host_trips').update({status:'closed'}).eq('id',t.id).eq('host_id',uid))).catch(()=>{});}
    return trips;}catch(e){return [];}
}
function tripRow(t,admin){
  const chip='<span class="hstat '+(t.status==='live'?'approved':t.status==='rejected'?'rejected':'pending')
    +'" style="margin:0;padding:3px 8px;font-size:10px">'+esc(t.status)+'</span>';
  const id=esc(t.id),ttl=jsq(t.title);
  /* every status gets an action so a trip is never a dead end:
     draft/rejected -> Publish, live -> Unpublish. Reject always available. */
  let actions='';
  if(admin){
    actions='<div class="hact" style="margin-top:8px">'
      +'<button onclick="openAdminTrip(\''+id+'\')">Review</button>'
      +(t.status!=='live'
        ? '<button class="ok" onclick="reviewTrip(\''+id+'\',\'live\',\''+ttl+'\')">Publish</button>'
        : '<button onclick="reviewTrip(\''+id+'\',\'draft\',\''+ttl+'\')">Unpublish</button>')
      +(t.status!=='rejected'?'<button class="no" onclick="reviewTrip(\''+id+'\',\'rejected\',\''+ttl+'\')">Reject</button>':'')
      +'</div>';
  }
  const tap=admin?' onclick="openAdminTrip(\''+id+'\')" style="cursor:pointer"':'';
  return '<div class="htrip">'
    +'<div class="tph"'+tap+' style="background-image:url(\''+esc(t.img||'')+'\')'+(admin?';cursor:pointer':'')+'"></div>'
    +'<div class="tbd"><b'+tap+'>'+esc(t.title)+'</b>'
    +'<small>'+esc(t.destination)+' · '+esc(String(t.start_date||''))+(t.end_date?' → '+esc(String(t.end_date)):'')+' · '+esc(String(t.days||''))+'d · max '+esc(String(t.max_people||''))+'</small>'
    +(admin?'<small>by '+esc(t.host_name)+'</small>':'')
    +'<div style="margin-top:6px">'+chip+'</div>'
    +actions
    +'</div>'
    +'<div class="tpr">'+INR(t.price||0)+'</div></div>';
}
/* open a submitted trip full-screen so the admin can actually read it before deciding */
async function openAdminTrip(id){
  if(!isAdminUser()){note('Admins only.','Not allowed');return;}
  go('adminTrip');
  const box=document.getElementById('adminTripBody');
  if(box)box.innerHTML='<div class="skel skel-card" style="height:160px"></div>';
  const sb=getSupaClient();if(!sb)return;
  const r=await sb.from('host_trips').select('*').eq('id',id).maybeSingle();
  const t=r.data;
  if(!box)return;
  if(r.error||!t){box.innerHTML='<div class="empty"><p>Could not load this trip.</p></div>';return;}
  const line=(l,v)=>v?'<div class="br"><span>'+l+'</span><b style="max-width:60%;text-align:right;white-space:normal">'+esc(String(v))+'</b></div>':'';
  box.innerHTML=(t.img?'<div class="atrip-img" style="background-image:url(\''+esc(t.img)+'\')"></div>':'')
    +'<h2 style="margin:14px 0 4px;font-size:20px">'+esc(t.title)+'</h2>'
    +'<div class="hstat '+(t.status==='live'?'approved':t.status==='rejected'?'rejected':'pending')+'" style="margin:0 0 14px">'+esc(t.status)+'</div>'
    +'<div class="bill">'
      +line('Host',t.host_name)+line('Destination',t.destination)
      +line('Dates',(t.start_date||'')+(t.end_date?' → '+t.end_date:''))
      +line('Duration',t.days?t.days+' days':'')+line('Max people',t.max_people)
      +line('Difficulty',t.difficulty)+line('Price',INR(t.price||0)+' / person')
    +'</div>'
    +(t.description?'<div class="blk" style="padding:0"><h2>About</h2><p>'+esc(t.description)+'</p></div>':'')
    +(t.inclusions?'<div class="blk" style="padding:0"><h2>Inclusions</h2><p style="white-space:pre-line">'+esc(t.inclusions)+'</p></div>':'')
    +(t.exclusions?'<div class="blk" style="padding:0"><h2>Exclusions</h2><p style="white-space:pre-line">'+esc(t.exclusions)+'</p></div>':'')
    +'<div class="hact" style="margin-top:18px">'
      +(t.status!=='live'?'<button class="ok" onclick="reviewTrip(\''+esc(t.id)+'\',\'live\',\''+jsq(t.title)+'\',1)">Publish</button>'
                         :'<button onclick="reviewTrip(\''+esc(t.id)+'\',\'draft\',\''+jsq(t.title)+'\',1)">Unpublish</button>')
      +(t.status!=='rejected'?'<button class="no" onclick="reviewTrip(\''+esc(t.id)+'\',\'rejected\',\''+jsq(t.title)+'\',1)">Reject</button>':'')
      +'<button onclick="wa(\'Hi '+jsq(t.host_name)+', about your trip '+jsq(t.title)+' —\')">Message host</button>'
    +'</div>';
  hydrate(box);
}
async function renderMyTrips(){
  const box=document.getElementById('myTripsBox');if(!box)return;
  const trips=await myHostTrips();
  if(!trips.length){box.innerHTML='<p class="host-note">No trips yet. Create your first one above.</p>';return;}
  box.innerHTML='<div class="sec" style="margin:4px 2px 10px"><h2 style="font-size:15px">Your trips</h2></div>'
    +trips.map(t=>tripRow(t,false)).join('');
  hydrate(box);
}
async function reviewTrip(id,status,title,fromDetail){
  if(!isAdminUser()){note('Admins only.','Not allowed');return;}
  const verb=status==='live'?'Publish':status==='draft'?'Unpublish':'Reject';
  if(!(await askConfirm(verb+' "'+title+'"?',verb+' trip')))return;
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb){note('Backend not connected.','Error');return;}
  const r=await sb.from('host_trips').update({status:status}).eq('id',id).select('id');
  if(r.error){note('Could not update: '+r.error.message,'Error');return;}
  if(!r.data||!r.data.length){
    /* the update ran but changed nothing — almost always the admin RLS policy:
       the DB checks the JWT email, which must equal the owner email exactly. */
    note('The database rejected this change. It only allows the owner account ('
      +'vikasupadhyay9@gmail.com) to publish trips. You are signed in as '
      +(getUserEmail()||'an unknown account')+'. Sign in with the owner email and try again.','Not allowed by server');
    return;
  }
  const done={live:'is now live.',draft:'moved back to draft.',rejected:'was rejected.'}[status]||'updated.';
  await note('"'+title+'" '+done,'Done');
  if(fromDetail)go('admin');   /* back to the list after acting from the detail view */
  _ovCache=null;
  renderAdminHosts(true);      /* status changed — refetch, don't reuse the cached list */
}

/* ============================================================
   HOME · HOST TRIPS
   A rail of live host trips. Until any exist, the same slot recruits
   hosts instead — an empty section on the home screen is dead space.
   ============================================================ */
/* verified hosts for the home rail. name is required — a badged profile with a
   null name cannot be rendered or opened, so it is excluded rather than shown blank. */
/* Collapse profiles that share a display name to ONE card. Test/incomplete accounts
   (the founder's duplicate "Vikas" sign-ins) otherwise stack up in the rail. Keep the
   most-complete row: a custom photo beats a username beats bare existence. The real fix
   is cleaning the duplicate ACCOUNTS in the DB — this just stops the rail looking broken
   meanwhile, and does NOT hide two genuinely different same-name hosts once both have a
   photo or username. */
function dedupeHosts(rows){
  const score=h=>((h.photo&&String(h.photo).trim())?4:0)+((h.username&&String(h.username).trim())?2:0)+1;
  const by={};
  (rows||[]).forEach(h=>{
    const key=String(h.name||'').trim().toLowerCase();if(!key)return;
    if(!by[key]||score(h)>score(by[key]))by[key]=h;
  });
  return Object.values(by);
}
async function loadVerifiedHosts(){
  const sb=getSupaClient();if(!sb){verifiedHosts=[];return;}
  try{
    const r=await sb.from('profiles').select('name,username,photo,is_host')
      .eq('is_host',true).not('name','is',null).limit(40);
    verifiedHosts=dedupeHosts((r.data||[]).filter(h=>String(h.name||'').trim())).slice(0,12);
    verifiedHosts.forEach(h=>{hostByName[h.name]=true;if(h.photo)photoByName[h.name]=h.photo;
      if(h.username)unameByName[h.name]=h.username;});
  }catch(e){verifiedHosts=[];}
}
/* host_name is a snapshot frozen when each trip was created, so the same host can
   show different names across trips. Fix at display time: replace it with the host's
   CURRENT profile name (public, one source of truth), keyed by host_id. */
async function resolveHostNames(trips){
  const sb=getSupaClient();if(!sb||!trips||!trips.length)return trips;
  const ids=[...new Set(trips.map(t=>t.host_id).filter(Boolean))];
  if(!ids.length)return trips;
  try{
    const{data}=await sb.from('profiles').select('id,name').in('id',ids);
    const nameById={};(data||[]).forEach(r=>{if(r.id&&r.name)nameById[r.id]=r.name;});
    trips.forEach(t=>{if(nameById[t.host_id])t.host_name=nameById[t.host_id];});
  }catch(e){}
  return trips;
}
/* A hosted trip is "over" once today is past its last day. Uses end_date if set,
   otherwise start_date + (days-1). Ended trips auto-close: they drop off the home rail
   and host profiles — but any bookings made for them are untouched (bookings are
   self-contained, so they keep showing in the Bookings panel). */
function hostTripEnded(t){
  if(!t)return false;
  let end=t.end_date||'';
  if(!end&&t.start_date){try{const d=new Date(t.start_date+'T00:00:00');d.setDate(d.getDate()+Math.max(0,(parseInt(t.days)||1)-1));
    end=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}catch(e){}}
  if(!end)return false;                 /* no date info — never auto-hide */
  return String(end)<todayISO(0);       /* strictly before today = the trip is over */
}
async function loadLiveHostTrips(){
  const sb=getSupaClient();if(!sb){liveHostTrips=[];return;}
  try{
    /* include in-progress trips (started but not over), exclude ended ones */
    const r=await sb.from('host_trips').select('*').eq('status','live')
      .order('start_date',{ascending:true}).limit(40);
    const resolved=await resolveHostNames(r.data||[]);
    liveHostTrips=resolved.filter(t=>!hostTripEnded(t)).slice(0,10);
  }catch(e){liveHostTrips=[];}   /* table missing = no rail, not a crash */
}
function hostTripCard(t){
  const when=t.start_date?new Date(t.start_date+'T00:00:00')
    .toLocaleDateString('en-IN',{day:'numeric',month:'short'}):'';
  return '<div class="htcard" onclick="openHostTripDetail(\''+jsq(t.id)+'\')">'
    +'<div class="htph" style="background-image:url(\''+esc(t.img||'')+'\')">'
      +'<span class="htpr">'+INR(t.price||0)+'</span>'
      +'<div class="hthost">'+avatar(t.host_name,22)+'<small>'+esc(t.host_name)+'</small>'+hostBadge(t.host_name)+'</div>'
    +'</div>'
    +'<div class="htbd"><b>'+esc(t.title)+'</b>'
      +'<div class="htmeta">'
        +'<i>'+ic('pin',9)+' '+esc(t.destination)+'</i>'
        +(when?'<i>'+esc(when)+'</i>':'')
        +(t.days?'<i>'+esc(String(t.days))+'d</i>':'')
        +(t.difficulty?'<i>'+esc(t.difficulty)+'</i>':'')
      +'</div></div></div>';
}
/* a face + name + verified tick — tapping opens their community profile */
function verifiedHostChip(h){
  return '<div class="vhost" onclick="openPerson(\''+jsq(h.name)+'\')">'
    +'<div class="vhring">'+avatar(h.name,54)+'</div>'
    +'<small>'+esc(properName(h.name).split(' ')[0])+'</small>'
    +'<span class="vhtick"><span class="msr">check</span></span></div>';
}
function renderVerifiedHostsRail(){
  if(!verifiedHosts.length)return '';
  return '<div class="sec" style="margin-top:20px"><h2>Verified Hosts</h2>'
    +'<a onclick="openHosts()">See all</a></div>'
    +'<div class="vhostrail">'+verifiedHosts.map(verifiedHostChip).join('')+'</div>';
}

/* ============================================================
   BROWSE ALL VERIFIED HOSTS
   The home rail is capped at 12 faces; this is the full, searchable list.
   Tapping a host opens their public profile, which lists their live trips.
   ============================================================ */
let allHosts=[],_hostsQ='',_hostsLoaded=false;
async function loadAllHosts(){
  const sb=getSupaClient();if(!sb){allHosts=[];return;}
  try{
    const r=await sb.from('profiles').select('id,name,username,photo,is_host')
      .eq('is_host',true).not('name','is',null).order('name',{ascending:true}).limit(300);
    allHosts=dedupeHosts((r.data||[]).filter(h=>String(h.name||'').trim()));
    allHosts.forEach(h=>{hostByName[h.name]=true;if(h.photo)photoByName[h.name]=h.photo;
      if(h.username)unameByName[h.name]=h.username;});
    _hostsLoaded=true;
  }catch(e){allHosts=[];_hostsLoaded=true;}
}
/* live trips per host, keyed by name — used on the host list AND their profile */
let _tripsByHost=null;
async function loadTripCountsByHost(){
  const sb=getSupaClient();if(!sb){_tripsByHost={};return;}
  try{
    const r=await sb.from('host_trips').select('id,host_id,host_name,status').eq('status','live');
    const raw=r.data||[];
    const orig=raw.map(t=>t.host_name);                 /* frozen name, before resolve */
    const resolved=await resolveHostNames(raw);          /* host_name -> the host's CURRENT profile name by host_id */
    /* index each trip under BOTH its current name and its frozen name, using a Set of
       ids so a host is never double-counted. Fixes "No live trips yet" when the trip's
       stored host_name differs from the deduped name shown in the list. */
    const byName={};
    resolved.forEach((t,i)=>{
      [t.host_name,orig[i]].filter(Boolean).forEach(nm=>{(byName[nm]=byName[nm]||new Set()).add(t.id);});
    });
    const map={};Object.keys(byName).forEach(nm=>{map[nm]=byName[nm].size;});
    _tripsByHost=map;
  }catch(e){_tripsByHost={};}
}
async function openHosts(){
  go('hosts');
  const box=document.getElementById('hostsBody');
  if(box&&!allHosts.length)box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  await Promise.all([loadAllHosts(),loadTripCountsByHost()]);
  try{await loadAuthorPhotos(allHosts.map(h=>h.name));}catch(e){}
  renderHostsList();
}
function hostListCard(h){
  const n=h.name,trips=(_tripsByHost&&_tripsByHost[n])||0;
  const un=unameByName[n]||h.username||'';
  /* plain circular avatar — no gradient ring — to match the clean Find Trekkers rows.
     The ✓ badge beside the name already signals "verified", so the ring was redundant. */
  return '<div class="hostcard" onclick="openPerson(\''+jsq(n)+'\')">'
    +'<div class="hostcard-av">'+avatar(n,52)+'</div>'
    +'<div class="hostcard-bd"><b><span class="hostcard-name">'+esc(properName(n))+'</span><span class="vbadge"><span class="msr">check</span></span></b>'
    +(un?'<small>@'+esc(un)+'</small>':'')
    +'<span class="hostcard-trips">'+(trips?trips+' live trip'+(trips>1?'s':''):'No live trips yet')+'</span></div>'
    +'<span class="ch">'+ic('back',16)+'</span></div>';
}
function renderHostsList(){
  const box=document.getElementById('hostsBody');if(!box)return;
  const q=_hostsQ.trim().toLowerCase();
  const list=allHosts.filter(h=>!q||((h.name+' '+(unameByName[h.name]||h.username||'')).toLowerCase().includes(q)));
  if(!list.length){
    box.innerHTML=_hostsLoaded
      ? '<div class="empty"><p>'+(q?'No hosts match your search.':'No verified hosts yet.')+'</p>'
        +(q?'':'<button class="btn sm" style="margin-top:10px" onclick="go(\'becomeHost\')">Become a host</button>')+'</div>'
      : '<div class="skel skel-card"></div>';
    hydrate(box);return;
  }
  box.innerHTML='<div class="adm-count">'+list.length+' verified host'+(list.length!==1?'s':'')+'</div>'
    +'<div class="hostlist">'+list.map(hostListCard).join('')+'</div>';
  hydrate(box);
}
function renderHomeHosts(){
  const box=document.getElementById('homeHosts');if(!box)return;
  const hostsRail=renderVerifiedHostsRail();
  if(liveHostTrips.length){
    box.innerHTML=hostsRail
      +'<div class="sec" style="margin-top:20px"><h2>Hosted Trips</h2>'
      +'<a onclick="go(\'becomeHost\')">Host one</a></div>'
      +'<div class="hostrail">'+liveHostTrips.map(hostTripCard).join('')+'</div>';
  }else if(hostsRail){
    /* hosts exist but none have a live trip yet — show the faces, still recruit */
    box.innerHTML=hostsRail
      +'<div class="sec" style="margin-top:20px"><h2>Host a Trip</h2></div>'
      +'<div class="hostcta" onclick="go(\'becomeHost\')">'
        +'<div class="hcglow"></div>'
        +'<b>Bring your community.<br>We run the mountain.</b>'
        +'<p>Creators, clubs and experienced trekkers host under Tripomonk — we handle stays, transport, guides and permits.</p>'
        +'<span class="hcgo">Become a host '+ic('back',13)+'</span>'
      +'</div>';
    const g=box.querySelector('.hcgo .msr,.hcgo .ic');if(g)g.style.transform='scaleX(-1)';
    hydrate(box);return;
  }else{
    /* no live trips yet — recruit instead of showing an empty shelf */
    box.innerHTML='<div class="sec" style="margin-top:20px"><h2>Host a Trip</h2></div>'
      +'<div class="hostcta" onclick="go(\'becomeHost\')">'
        +'<div class="hcglow"></div>'
        +'<b>Bring your community.<br>We run the mountain.</b>'
        +'<p>Creators, clubs and experienced trekkers host under Tripomonk — we handle stays, transport, guides and permits.</p>'
        +'<span class="hcgo">Become a host '+ic('back',13)+'</span>'
      +'</div>';
    const go2=box.querySelector('.hcgo .msr,.hcgo .ic');
    if(go2)go2.style.transform='scaleX(-1)';   /* reuse the back chevron, flipped */
  }
  hydrate(box);
}
/* green WhatsApp button — reused on every booking screen so doubts get answered fast */
function waButton(msg,label){
  return '<button class="wa-btn" onclick="wa(\''+jsq(msg)+'\')">'
    +'<svg class="wa-ic" viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path fill="#fff" d="M12 2a10 10 0 0 0-8.53 15.2L2 22l4.94-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.93.77.78-2.86-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.13-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z"/></svg>'
    +esc(label||'Chat on WhatsApp')+'</button>';
}
/* trust card with icons — reassures people before they book */
function trustCard(host,title){
  const item=(icon,t,s)=>'<div class="trust-item"><span class="msr">'+icon+'</span><div><b>'+t+'</b><small>'+s+'</small></div></div>';
  return '<div class="trust-card">'
    +'<div class="trust-h"><span class="msr">verified_user</span> Book with confidence</div>'
    +'<div class="trust-list">'
    +item('shield','Operated by Tripomonk','All logistics, safety &amp; support handled by us'+(host?' — '+esc(host)+' leads on the ground':'')+'.')
    +item('lock','Secure payment','Paid securely via Razorpay. 25% advance to confirm, balance before departure.')
    +item('published_with_changes','Transparent cancellation','A clear refund policy is shown before you pay.')
    +item('support_agent','Real human support','Our team is one message away — before and during your trek.')
    +'</div>'
    +waButton('Hi Tripomonk, I have a question about the '+(title||'trip')+' before booking. Can you help?','Have doubts? Chat on WhatsApp')
    +'</div>';
}
let _htvTrip=null,_htvPax=1;
/* the trek gallery on the public trip page — photos + playable videos */
function mediaGallery(media){
  if(!Array.isArray(media)||!media.length)return '';
  const items=media.map(m=>{
    const url=m&&m.url;if(!url)return '';
    if((m.type||'')==='video'||isVideoUrl(url))
      return '<div class="tg-item tg-vid">'+videoEmbedHTML(url)+'</div>';
    return '<div class="tg-item tg-img" style="background-image:url(\''+esc(url)+'\')"></div>';
  }).join('');
  if(!items)return '';
  return '<div class="blk" style="padding:0"><h2>Trek gallery</h2><div class="tg-row">'+items+'</div></div>';
}
/* compact, single-line trip date range: "1–6 Sep 2026", "28 Aug – 3 Sep 2026", or cross-year */
function fmtTripRange(sd,ed){
  if(!sd)return '';
  const s=new Date(sd+'T00:00:00');if(isNaN(s))return String(sd);
  const mo=d=>d.toLocaleDateString('en-IN',{month:'short'});
  if(!ed){return s.getDate()+' '+mo(s)+' '+s.getFullYear();}
  const e=new Date(ed+'T00:00:00');if(isNaN(e))return s.getDate()+' '+mo(s)+' '+s.getFullYear();
  const sameYear=s.getFullYear()===e.getFullYear();
  const sameMonth=sameYear&&s.getMonth()===e.getMonth();
  if(sameMonth)return s.getDate()+'–'+e.getDate()+' '+mo(s)+' '+s.getFullYear();
  if(sameYear)return s.getDate()+' '+mo(s)+' – '+e.getDate()+' '+mo(e)+' '+s.getFullYear();
  return s.getDate()+' '+mo(s)+' '+s.getFullYear()+' – '+e.getDate()+' '+mo(e)+' '+e.getFullYear();
}
async function openHostTripDetail(id){
  go('hostTripView');
  const box=document.getElementById('htvBody');
  if(box)box.innerHTML='<div class="skel skel-card" style="height:200px"></div>';
  /* fetch fresh so price/status are current — a cached rail item could be stale */
  const sb=getSupaClient();
  let t=liveHostTrips.find(x=>String(x.id)===String(id));
  if(sb){try{const r=await sb.from('host_trips').select('*').eq('id',id).maybeSingle();if(r.data)t=r.data;}catch(e){}}
  if(!t){if(box)box.innerHTML='<div class="empty"><p>This trip is no longer available.</p></div>';return;}
  if(t.status&&t.status!=='live'){if(box)box.innerHTML='<div class="empty"><p>This trip isn’t open for booking right now.</p></div>';
    document.getElementById('htvBook').style.display='none';return;}
  await resolveHostNames([t]);   /* show the host's current name, not the frozen snapshot */
  _htvTrip=t;_htvPax=1;
  await loadAuthorPhotos([t.host_name]).catch(()=>{});
  const dateRange=fmtTripRange(t.start_date,t.end_date);
  const stat=(ic2,v,l)=>v?`<div class="stat"><div class="ic" style="display:grid;place-items:center">${ic(ic2,20)}</div><b style="font-size:12px">${esc(String(v))}</b><small>${l}</small></div>`:'';
  box.innerHTML=
    (t.img?`<div class="htv-img img-loading" style="background-image:url('${esc(t.img)}')"></div>`:'')
    +`<h1 style="margin:2px 0 2px;font-size:22px">${esc(t.title)}</h1>`
    +`<div class="reg" style="color:var(--muted);font-size:13px;margin-bottom:8px">${ic('pin',13)} ${esc(t.destination)}</div>`
    +`<button class="htv-share" onclick="shareHostTrip('${jsq(t.id)}','${jsq(t.title)}')">${ic('share',14)} Share this trip</button>`
    +`<div class="htv-host">${avatar(t.host_name,38)}<div class="hn"><b>${esc(t.host_name)}</b><small>Trip host</small></div><span class="hbadge">Verified</span></div>`
    +`<div class="stats">${stat('calendar',dateRange,'Dates')}${stat('clock',t.days?t.days+' days':'','Duration')}${stat('altitude',t.difficulty,'Level')}${stat('community',t.max_people?'Max '+t.max_people:'','Group')}</div>`
    +mediaGallery(t.media)
    +(t.description?`<div class="blk" style="padding:0"><h2>About this trip</h2><p>${esc(t.description)}</p></div>`:'')
    +((t.inclusions||t.exclusions)?`<div class="blk" style="padding:0"><h2>What's included</h2>${inclCard(t.inclusions,t.exclusions)}</div>`:'')
    +trustCard(t.host_name,t.title)
    +`<div class="lbl">Travellers</div>`
    +`<div class="paxrow"><div class="paxi"><div><b>People</b><small id="htvMax"></small></div>`
    +`<div class="stepper"><button onclick="htvStep(-1)">−</button><b id="htvPeople">1</b><button onclick="htvStep(1)">+</button></div></div></div>`;
  document.getElementById('htvBook').style.display='';
  const mx=document.getElementById('htvMax');if(mx&&t.max_people)mx.textContent='up to '+t.max_people;
  htvRecalc();
  hydrate(box);
  const _hti=box.querySelector('.htv-img.img-loading');
  if(_hti&&t.img){const p=new Image();p.onload=p.onerror=()=>_hti.classList.remove('img-loading');p.src=t.img;}
}
function htvStep(d){
  const t=_htvTrip;if(!t)return;
  _htvPax=Math.max(1,_htvPax+d);
  if(t.max_people&&_htvPax>t.max_people){_htvPax=t.max_people;note('This trip allows up to '+t.max_people+' people.','Group limit');}
  document.getElementById('htvPeople').textContent=_htvPax;
  htvRecalc();
}
function htvRecalc(){
  const t=_htvTrip;if(!t)return;
  const total=(t.price||0)*_htvPax;
  document.getElementById('htvPrice').textContent=INR(total);
  document.getElementById('htvPriceSub').textContent=_htvPax+(_htvPax===1?' person · ':' people · ')+INR(t.price||0)+' each · 25% advance';
}
/* book a hosted trip — opens a proper details page (like the trek flow), then pays */
async function bookHostTrip(){
  const t=_htvTrip;if(!t){note('Please reopen this trip.','Nothing selected');return;}
  if(!isLoggedIn()){note('Please sign in to book.','Sign in required').then(()=>{_loginReturn='home';go('login');});return;}
  if(!(getUserEmail()||'')){note('Your account has no email. Please sign in with email.','Cannot book');return;}
  go('htBook');
}
/* the hosted-trip booking form — collects the same details a trek booking needs, on one page */
function renderHtBook(){
  const box=document.getElementById('htBookBody');if(!box)return;
  const t=_htvTrip;
  if(!t){box.innerHTML='<div class="empty" style="padding:30px 0"><p>Please reopen the trip to book it.</p></div>';return;}
  const c=getContact()||{};
  const total=(t.price||0)*_htvPax, adv=Math.round(total*0.25);
  const when=t.start_date?new Date(t.start_date+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):'As scheduled';
  box.innerHTML=`
    <div class="tcard" style="cursor:default"><div class="ph" style="background-image:url('${esc(t.img||'')}')"></div>
      <div class="bd"><h3>${esc(t.title)}</h3>
        <div class="rt">${ic('calendar',14)} <span>${esc(when)}</span></div>
        <div class="rt">${ic('user',14)} <span>${_htvPax} ${_htvPax===1?'traveller':'travellers'} · hosted by ${esc(t.host_name||'host')}</span></div></div></div>
    <div class="sec"><h2 style="font-size:15px">Lead traveller</h2></div>
    <div class="field"><label>Full name (as per ID)</label><div class="inp"><input id="htName" value="${esc(getSavedName()||c.name||'')}" placeholder="Your full name"></div></div>
    <div class="field"><label>Mobile number</label><div class="inp"><input id="htPhone" type="tel" inputmode="numeric" value="${esc((typeof getSavedMobile==='function'&&getSavedMobile())||c.phone||'')}" placeholder="10-digit mobile"></div></div>
    <div class="field"><label>Email</label><div class="inp"><input id="htEmail" type="email" value="${esc(getUserEmail()||c.email||'')}" placeholder="you@email.com"></div></div>
    <div class="sec"><h2 style="font-size:15px">Emergency contact</h2></div>
    <div class="field"><label>Contact name</label><div class="inp"><input id="htEmName" value="${esc(c.emName||'')}" placeholder="Family / friend"></div></div>
    <div class="field"><label>Contact mobile</label><div class="inp"><input id="htEmPhone" type="tel" inputmode="numeric" value="${esc(c.emPhone||'')}" placeholder="Different from yours"></div></div>
    <div class="panel" style="margin-top:6px">
      <div class="srow"><span>${_htvPax} × ${INR(t.price||0)}</span><span>${INR(total)}</span></div>
      <div class="srow tot"><span>Advance now (25%)</span><span>${INR(adv)}</span></div>
      <div class="srow" style="border:0;padding-top:2px"><span style="font-size:11.5px;color:var(--muted)">Balance ${INR(total-adv)} paid to Tripomonk before departure</span><span></span></div></div>
    <div style="height:16px"></div>
    <div class="cta"><button class="btn" onclick="htPay()"><span class="msr">lock</span> Pay ${INR(adv)} advance</button></div>`;
  hydrate(box);
}
async function htPay(){
  const t=_htvTrip;if(!t){note('Please reopen this trip.','Nothing selected');return;}
  if(!window.Razorpay){note('Payment is still loading — wait a moment and tap again.','Please wait');return;}
  if(!sbOn){note('Payment service not configured. Please contact Tripomonk.','Payment error');return;}
  const g=id=>document.getElementById(id);
  const name=(g('htName').value||'').trim();
  const phone=(g('htPhone').value||'').replace(/\D/g,'');
  const email=(g('htEmail').value||'').trim();
  const emName=(g('htEmName').value||'').trim();
  const emPhone=(g('htEmPhone').value||'').replace(/\D/g,'');
  if(!name){note('Please enter the lead traveller name.','Name required');g('htName').focus();return;}
  if(phone.length<10){note('Please enter a valid 10-digit mobile number.','Mobile required');g('htPhone').focus();return;}
  if(!email||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){note('Please enter a valid email address.','Email required');g('htEmail').focus();return;}
  if(!emName){note('Please enter an emergency contact name.','Emergency contact required');g('htEmName').focus();return;}
  if(emPhone.length<10){note('Please enter a valid emergency contact mobile.','Emergency contact required');g('htEmPhone').focus();return;}
  if(emPhone===phone){note('Emergency contact should be different from your own number.','Check emergency contact');g('htEmPhone').focus();return;}
  saveUserName(name);saveContact({name,phone,email,emName,emPhone});
  const booking={kind:'hosttrip',hosttrip_id:t.id,trek:t.title,pax:_htvPax,name,email,phone,emergency_name:emName,emergency_phone:emPhone};
  let order;
  try{order=await rzpCall('create',{booking});}
  catch(e){note('Could not reach payment service: '+e,'Payment error');return;}
  if(!order||!order.order_id){note('Could not start payment — '+((order&&order.error)?order.error:'no order returned'),'Payment error');return;}
  const rzp=new window.Razorpay({
    key:order.key_id, order_id:order.order_id, amount:order.amount, currency:order.currency||'INR',
    name:'Tripomonk', description:t.title+' — hosted trip', image:'icons/icon-192.png',
    prefill:{name,email,contact:phone}, notes:{hosttrip:t.id}, theme:{color:'#2f6bff'},
    handler:async function(response){
      let res;try{res=await rzpCall('verify',{razorpay_order_id:response.razorpay_order_id,razorpay_payment_id:response.razorpay_payment_id,razorpay_signature:response.razorpay_signature,booking});}catch(e){res=null;}
      if(!res||!res.ok){note('Payment received but we could not verify it instantly. Our team will confirm shortly — payment ID: '+(response.razorpay_payment_id||'—'),'Verification pending');return;}
      const sbk=(res&&res.booking)||{};
      const b={id:response.razorpay_payment_id,name,trek:sbk.trek||t.title,img:t.img||'',date:sbk.date||t.start_date||'As scheduled',startISO:t.start_date||'',pax:_htvPax,total:sbk.total||(t.price*_htvPax),paid:sbk.paid,ts:Date.now(),status:'Confirmed (advance paid)',checkedIn:false,paymentId:response.razorpay_payment_id};
      const all=getBookings();all.unshift(b);saveBookings(all);
      if(window.fbTrack)window.fbTrack('Purchase',{value:Number(b.total)||Number(b.paid)||0,currency:'INR',content_name:b.trek||'',content_type:'product'});
      note('Advance paid! '+t.title+' is confirmed. Tripomonk will contact you with the rest.','Booked ✓').then(()=>go('bookings'));
    },
    modal:{ondismiss:function(){note('Payment cancelled — the trip is not booked yet.','Cancelled');}}
  });
  rzp.open();
}

/* ============================================================
   HOST DASHBOARD — for approved hosts only.
   Hosts edit their own profile and their own trips. They can never
   change status: that is pinned by a DB trigger, not by this screen.
   ============================================================ */
/* host progression levels by trips run (Ambassador is invite-only, not auto) */
function hostLevel(n){
  if(n>30)return{t:'Elite Host',em:'💎'};
  if(n>=11)return{t:'Summit Host',em:'🥇'};
  if(n>=4)return{t:'Trail Host',em:'🥈'};
  return{t:'Explorer Host',em:'🥉'};
}
async function openHostDash(){
  await loadHostApp();
  if(!isVerifiedHost()){note('Only verified hosts have a dashboard.','Not yet approved');return;}
  hdTab='Trips';go('hostDash');renderHostDash();
}
async function renderHostDash(){
  const head=document.getElementById('hdHead');if(!head)return;
  if(!_hostApp)await loadHostApp();
  if(!isVerifiedHost()){go('becomeHost');return;}
  const a=_hostApp;
  head.innerHTML='<div class="hdhead"><div class="hdtop">'
    +avatar(myName(),46)
    /* we already know they're approved to be on this screen — don't depend on the
       hostByName cache, which is only filled by the community feed */
    +'<div class="hdwho"><b>'+esc(a.full_name||myName())
    +'<span class="vbadge" title="Verified Host"><span class="msr">check</span></span></b>'
    +'<small><span id="hdLevel"></span> Verified Host'+(a.city?' · '+esc(a.city):'')+'</small></div>'
    +'<button class="hdedit" onclick="openHostProfile()">Edit profile</button>'
    +'</div><div class="hdstats" id="hdStats"></div></div>';
  document.getElementById('hdTabs').innerHTML=['Trips','Earnings','Profile'].map(t=>
    '<div class="chip pill '+(hdTab===t?'on':'')+'" onclick="setHdTab(\''+t+'\')">'+t+'</div>').join('');
  hydrate(head);
  _hdTrips=await myHostTrips();
  const live=_hdTrips.filter(t=>t.status==='live').length;
  const draft=_hdTrips.filter(t=>t.status==='draft').length;
  const seats=_hdTrips.filter(t=>t.status==='live').reduce((s,t)=>s+(t.max_people||0),0);
  const lv=hostLevel(_hdTrips.length);const lvEl=document.getElementById('hdLevel');
  if(lvEl)lvEl.innerHTML='<span class="hd-level">'+lv.em+' '+lv.t+'</span> ·';
  const st=document.getElementById('hdStats');
  if(st)st.innerHTML='<div><b>'+_hdTrips.length+'</b><small>Trips</small></div>'
    +'<div><b>'+live+'</b><small>Live</small></div>'
    +'<div><b>'+seats+'</b><small>Seats open</small></div>';
  renderHdBody();
}
function setHdTab(t){hdTab=t;renderHostDash();}
function renderHdBody(){
  const box=document.getElementById('hdBody');if(!box)return;
  if(hdTab==='Profile'){renderHdProfileSummary(box);return;}
  if(hdTab==='Earnings'){renderHdEarnings(box);return;}
  if(!_hdTrips.length){
    box.innerHTML='<div class="hdempty"><span class="msr">landscape</span>'
      +'<p>No trips yet. Create your first one — we handle the operations once it is approved.</p>'
      +'<button class="btn" style="max-width:230px;margin:0 auto" onclick="openHostTrip()">Create a trip</button></div>';
    return;
  }
  const draft=_hdTrips.filter(t=>t.status==='draft').length;
  box.innerHTML=(draft?'<p class="host-note" style="margin:0 0 12px">'+draft+' awaiting Tripomonk review</p>':'')
    +_hdTrips.map(hdTripRow).join('');
  hydrate(box);
}
function hdTripRow(t){
  const chip='<span class="hstat '+(t.status==='live'?'approved':t.status==='rejected'?'rejected':'pending')
    +'" style="margin:0;padding:3px 8px;font-size:10px">'+esc(t.status)+'</span>';
  const editable=t.status!=='live';
  /* marketing buttons on EVERY trip so a host can always share/promote it */
  const mk='<button class="mk" onclick="shareHostTrip(\''+jsq(t.id)+'\',\''+jsq(t.title)+'\')">'+ic('share',14)+' Share</button>'
          +'<button class="mk" onclick="postTripToCommunity(\''+jsq(t.id)+'\')">'+ic('community',14)+' Post to feed</button>';
  return '<div class="htrip">'
    +'<div class="tph" style="background-image:url(\''+esc(t.img||'')+'\')"></div>'
    +'<div class="tbd"><b>'+esc(t.title)+'</b>'
    +'<small>'+esc(t.destination)+' · '+esc(String(t.start_date||''))+' · '+esc(String(t.days||''))+'d · max '+esc(String(t.max_people||''))+'</small>'
    +'<div style="margin-top:6px">'+chip+'</div>'
    +(editable
       ? '<div class="tact"><button onclick="openHostTrip(\''+jsq(t.id)+'\')">Edit</button>'
         +'<button class="dz" onclick="deleteHostTrip(\''+jsq(t.id)+'\',\''+jsq(t.title)+'\')">Delete</button>'+mk+'</div>'
       : '<span class="tlock">Live trips are locked — message us to change dates, price or seats.</span>'
         +'<div class="tact">'+mk
         +'<button onclick="wa(\'Hi Tripomonk, I need to update my live trip: '+jsq(t.title)+'\')">Message us</button></div>')
    +'</div>'
    +'<div class="tpr">'+INR(t.price||0)+'</div></div>';
}
async function deleteHostTrip(id,title){
  const t=_hdTrips.find(x=>String(x.id)===String(id));
  if(t&&t.status==='live'){note('Live trips cannot be deleted here — message us.','Locked');return;}
  if(!(await askConfirm('Delete "'+title+'"? This cannot be undone.','Delete trip')))return;
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid)return;
  const r=await sb.from('host_trips').delete().eq('id',id).eq('host_id',uid).select('id');
  if(r.error||!r.data||!r.data.length){note('Could not delete that trip.','Error');return;}
  note('Trip deleted.','Done');
  renderHostDash();
}
function slugify(s){return String(s||'').toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}
/* clean, readable shareable link — e.g. app.tripomonk.com/#trip=kedarkantha-winter-summit
   (no index.html, no raw UUID). Falls back to the id if the title has no usable slug. */
function hostTripUrl(id,title){
  const slug=slugify(title);
  /* path URL (not #hash) so shared trip links get a rich card via the /trip/ edge function */
  return window.location.origin+'/trip/'+(slug||encodeURIComponent(id));
}
/* open a host trip from a shared slug (or id) */
async function openHostTripBySlug(key){
  let ht=(liveHostTrips||[]).find(t=>slugify(t.title)===key||String(t.id)===key);
  if(!ht){const sb=getSupaClient();if(sb){try{
    const{data}=await sb.from('host_trips').select('id,title').eq('status','live');
    ht=(data||[]).find(t=>slugify(t.title)===key)||(data||[]).find(t=>String(t.id)===key);
  }catch(e){}}}
  if(ht)openHostTripDetail(ht.id);
  else note('This trip isn’t available right now.','Not found');
}
function findHostTrip(id){return (_hdTrips||[]).find(x=>String(x.id)===String(id))||(liveHostTrips||[]).find(x=>String(x.id)===String(id));}
/* share a trip to OTHER platforms — native share sheet, or copy the link */
async function shareHostTrip(id,title){
  const t=findHostTrip(id);
  if(t&&t.status&&t.status!=='live'){note('This trip goes public once Tripomonk publishes it. You can share it then to get bookings.','Not live yet');return;}
  const url=hostTripUrl(id,title);
  const data={title:'Tripomonk — '+title,text:'Join my trek “'+title+'” on Tripomonk 🏔️',url};
  if(navigator.share){try{await navigator.share(data);return;}catch(e){if(e&&e.name==='AbortError')return;}}
  try{await navigator.clipboard.writeText(url);toast('Trip link copied — share it anywhere');}
  catch(e){note(url,'Share this trip');}
}
/* share a trip INSIDE the community as a post, so it markets itself in the feed */
async function postTripToCommunity(id){
  if(!isLoggedIn()){note('Please sign in to post.','Sign in required').then(()=>{_loginReturn='community';go('login');});return;}
  const t=findHostTrip(id);
  if(!t){note('Trip not found.','Error');return;}
  if(t.status!=='live'){note('Only published (live) trips can be shared to the community.','Not live yet');return;}
  if(!(await askConfirm('Share “'+t.title+'” to the community feed as a post?','Post to feed')))return;
  const dates=t.start_date?new Date(t.start_date+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):'';
  /* clean, trek-themed caption — no raw link (looks like spam). The trek tag on the
     post is the tappable CTA that opens the full trip page. */
  const txt='🏔️ Trekking together — '+t.title
    +'\n\n📍 '+t.destination
    +(dates?'\n🗓️ '+dates:'')
    +(t.days?'\n⛺ '+t.days+' days on the trail':'')
    +(t.max_people?'\n👥 Small group · max '+t.max_people:'')
    +'\n💰 ₹'+Number(t.price||0).toLocaleString('en-IN')+' per person'
    +'\n\nLed by me, with all logistics, permits & safety handled by Tripomonk. Tap the trek below to see the full itinerary and grab your spot 🎒';
  const authorName=getSavedName()||myName();
  const post={id:'p'+Date.now(),uid:currentUser?currentUser.id:null,n:authorName,when:'just now',txt,imgs:t.img?[t.img]:[],likes:0,comments:[],trek:t.title,tagged:[]};
  userPosts.unshift(post);savePosts();
  await savePostRemote(post);
  note('Shared to the community feed! 🎉 It will help trekkers discover your trip.','Posted');
}
/* ============================================================
   HOST EARNINGS — verified hosts only (this whole dashboard is
   gated by isVerifiedHost). Shows the host's 90% share from trip
   bookings + referral rewards. Numbers are real: pulled from the
   bookings table best-effort, never faked. Empty until real
   bookings exist.
   ============================================================ */
const HOST_TAKE=0.90;         /* host keeps 90% */
/* a stable, shareable referral code for this host */
function hostReferralCode(){
  const u=getSavedUsername();
  const clean=u?u.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,12):'';
  if(clean)return clean;
  const seed=String((currentUser&&currentUser.id)||myName()||'HOST');
  let h=0;for(let i=0;i<seed.length;i++)h=(h*31+seed.charCodeAt(i))>>>0;
  return 'TMK'+h.toString(36).toUpperCase().slice(0,6);
}
function referralLink(){
  const base=window.location.origin+window.location.pathname.replace(/index\.html$/,'');
  return base+'#ref='+hostReferralCode();
}
/* no referral backend yet — read any locally-credited total, default 0 (honest) */
function hostReferralEarnings(){try{return Math.max(0,+localStorage.getItem('tmk_ref_earn')||0);}catch(e){return 0;}}
function hostReferralCount(){try{return Math.max(0,+localStorage.getItem('tmk_ref_count')||0);}catch(e){return 0;}}
async function shareReferral(){
  const code=hostReferralCode(),url=referralLink();
  const data={title:'Join me on Tripomonk',text:'Explore the Himalayas with Tripomonk 🏔️ Use my code '+code+' when you book.',url};
  if(navigator.share){try{await navigator.share(data);return;}catch(e){if(e&&e.name==='AbortError')return;}}
  try{await navigator.clipboard.writeText(url);toast('Referral link copied');}catch(e){note(url,'Your referral link');}
}
function copyReferral(){
  const url=referralLink();
  if(navigator.clipboard)navigator.clipboard.writeText(url).then(()=>toast('Referral link copied')).catch(()=>note(url,'Your referral link'));
  else note(url,'Your referral link');
}
/* operations cost per person for a trip, as set by Tripomonk during costing.
   Until it's set we can't know the profit, so the host's share stays "pending". */
function tripOpsCostPP(t){
  const v=+(t&&(t.ops_cost_pp!=null?t.ops_cost_pp:t.ops_cost))||0;
  return v>0?v:0;
}
/* pull the host's real earnings from confirmed bookings on their own trips.
   MODEL: host keeps 90% of the PROFIT (booking revenue − Tripomonk's operations
   cost), never 90% of gross bookings. Trips without a finalised operations cost
   show their revenue but their payout is "awaiting costing" — we never guess it. */
async function loadHostEarnings(){
  const trips=_hdTrips||[];
  const titles=trips.map(t=>t.title).filter(Boolean);
  let rows=[];
  const sb=getSupaClient();
  if(sb&&titles.length){
    try{const{data}=await sb.from('bookings').select('trek,pax,total,paid,status').in('trek',titles);rows=data||[];}
    catch(e){rows=[];}
  }
  const counts=r=>!/cancel|refund|fail|void/i.test(String(r.status||''));   /* only money that stuck */
  const perTrip=trips.map(t=>{
    const br=rows.filter(r=>counts(r)&&r.trek===t.title);
    const seats=br.reduce((s,r)=>s+(+r.pax||0),0);
    const revenue=br.reduce((s,r)=>s+(+r.total||0),0);
    const advance=br.reduce((s,r)=>s+(+r.paid||0),0);
    const opsPP=tripOpsCostPP(t);
    const costKnown=opsPP>0;                       /* Tripomonk has finalised the cost */
    const opsCost=opsPP*seats;
    const profit=Math.max(0,revenue-opsCost);
    const net=costKnown?Math.round(profit*HOST_TAKE):0;   /* 90% of profit */
    return{t,bookings:br.length,seats,revenue,advance,opsPP,opsCost,profit,net,costKnown};
  });
  const booked=perTrip.filter(x=>x.bookings>0);
  const known=booked.filter(x=>x.costKnown);
  const revenue=booked.reduce((s,x)=>s+x.revenue,0);          /* all confirmed bookings */
  const knownRevenue=known.reduce((s,x)=>s+x.revenue,0);      /* only costed trips */
  const pendingRevenue=booked.filter(x=>!x.costKnown).reduce((s,x)=>s+x.revenue,0);
  const opsCost=known.reduce((s,x)=>s+x.opsCost,0);
  const profit=known.reduce((s,x)=>s+x.profit,0);
  const tripNet=known.reduce((s,x)=>s+x.net,0);               /* host's 90% of profit, costed trips */
  const advance=booked.reduce((s,x)=>s+x.advance,0);
  const bookings=booked.reduce((s,x)=>s+x.bookings,0);
  const refEarn=hostReferralEarnings(),refCount=hostReferralCount();
  return{perTrip,booked,revenue,knownRevenue,pendingRevenue,opsCost,profit,tripNet,advance,bookings,refEarn,refCount,total:tripNet+refEarn};
}
async function renderHdEarnings(box){
  box.innerHTML='<div class="earn-loading"><span class="msr spin">progress_activity</span> Loading your earnings…</div>';
  const e=await loadHostEarnings();
  if(hdTab!=='Earnings')return;   /* user switched tabs while loading */
  const m=v=>INR(v||0),code=hostReferralCode();
  const isEmpty=e.bookings===0&&e.refEarn===0;
  const hero='<div class="earn-hero">'
    +'<small>Your earnings so far</small>'
    +'<div class="earn-big">'+m(e.total)+'</div>'
    +'<div class="earn-heropill"><span><b>'+m(e.tripNet)+'</b> trips</span><span><b>'+m(e.refEarn)+'</b> referrals</span></div>'
    +'</div>';
  const empty=isEmpty
    ?'<div class="earn-empty"><span class="msr">savings</span><p>No earnings yet. When trekkers book your live trips, your <b>90% share of the profit</b> and referral rewards appear here.</p></div>'
    :'';
  /* revenue on trips Tripomonk hasn\'t costed yet — surfaced so we never imply a payout we can\'t compute */
  const pendingBanner=e.pendingRevenue>0
    ?'<div class="earn-pending"><span class="msr">hourglass_top</span><p><b>'+m(e.pendingRevenue)+'</b> in bookings is awaiting operations costing. Your <b>90% profit share</b> appears here once Tripomonk finalises the trip cost.</p></div>'
    :'';
  /* trip earnings = 90% of PROFIT (revenue − operations cost) on costed trips only */
  const tripCard=e.knownRevenue>0?'<div class="earn-card">'
    +'<div class="earn-ch"><span class="msr">hiking</span><b>Trip earnings</b><span class="earn-tag">'+e.bookings+' booking'+(e.bookings===1?'':'s')+'</span></div>'
    +'<div class="earn-line"><span>Booking revenue</span><b>'+m(e.knownRevenue)+'</b></div>'
    +'<div class="earn-line sub"><span>Operations cost</span><b>−'+m(e.opsCost)+'</b></div>'
    +'<div class="earn-line"><span>Profit</span><b>'+m(e.profit)+'</b></div>'
    +'<div class="earn-line grand"><span>You earn (90% of profit)</span><b>'+m(e.tripNet)+'</b></div>'
    +(e.advance?'<div class="earn-foot">'+m(e.advance)+' advance collected so far · balance settles after each trip</div>':'')
    +'</div>':'';
  /* how-it-works explainer — shows the model even before any trip is costed */
  const modelCard=(e.bookings>0&&e.knownRevenue===0)?'<div class="earn-card">'
    +'<div class="earn-ch"><span class="msr">calculate</span><b>How your payout is worked out</b></div>'
    +'<div class="earn-line"><span>Booking revenue</span><b>'+m(e.revenue)+'</b></div>'
    +'<div class="earn-line sub"><span>− Operations cost (guides, permits, stay, transport, safety)</span><b>set by Tripomonk</b></div>'
    +'<div class="earn-line sub"><span>= Trip profit</span><b>—</b></div>'
    +'<div class="earn-line grand"><span>You earn 90% of the profit</span><b>Pending</b></div>'
    +'</div>':'';
  const withEarn=e.booked.filter(x=>x.costKnown);
  const breakdown=withEarn.length
    ?'<div class="earn-card"><div class="earn-ch"><span class="msr">receipt_long</span><b>By trip</b></div>'
      +withEarn.map(x=>'<div class="earn-trip"><div class="et-h"><b>'+esc(x.t.title)+'</b><b>'+m(x.net)+'</b></div>'
        +'<small>'+x.seats+' seat'+(x.seats===1?'':'s')+' · '+m(x.revenue)+' revenue − '+m(x.opsCost)+' ops = '+m(x.profit)+' profit</small></div>').join('')
      +'</div>'
    :'';
  const refCard='<div class="earn-card">'
    +'<div class="earn-ch"><span class="msr">redeem</span><b>Referral earnings</b>'+(e.refCount?'<span class="earn-tag">'+e.refCount+' joined</span>':'')+'</div>'
    +'<div class="earn-line grand"><span>Earned from referrals</span><b>'+m(e.refEarn)+'</b></div>'
    +'<div class="ref-box"><div class="ref-code"><small>YOUR CODE</small><b>'+esc(code)+'</b></div>'
    +'<div class="ref-acts"><button class="mk" onclick="copyReferral()"><span class="msr">link</span> Copy link</button>'
    +'<button class="mk" onclick="shareReferral()"><span class="msr">ios_share</span> Share</button></div></div>'
    +'<p class="host-note" style="margin:10px 0 0">Share your code — you earn a reward for every new trekker who books their first trip through it. Rewards appear here after their trek.</p>'
    +'</div>';
  const payout='<p class="host-note" style="text-align:center;margin-top:4px">You earn 90% of the profit on each trip (booking revenue minus operations cost). Payouts settle after each trip — bank & ID details are handled on your verification call, never in the app.</p>';
  box.innerHTML=hero+empty+pendingBanner+tripCard+modelCard+breakdown+refCard+payout;
  hydrate(box);
}
/* ---- host profile (public-facing details) ---- */
/* commission info — only ever shown INSIDE the host dashboard (verified hosts) */
function commissionCard(){
  return '<div class="commission-box" style="margin:0 0 16px">'
    +'<div class="cb-row"><span class="msr">payments</span><div><b>How you earn</b>'
    +'<small>You keep <b>90% of the profit</b> on every trip — that\'s the booking revenue minus operations cost (guides, permits, stay, transport, safety), which Tripomonk runs and covers. Tripomonk keeps the other <b>10% of the profit</b>. Your payout is settled after the trip.</small></div></div>'
    +'</div>';
}
function renderHdProfileSummary(box){
  const a=_hostApp||{};
  const row=(l,v)=>v?'<div class="br"><span>'+l+'</span><b style="max-width:58%;text-align:right;white-space:normal">'+esc(v)+'</b></div>':'';
  box.innerHTML=commissionCard()+'<div class="bill">'
    +row('Name',a.full_name)+row('City',a.city)+row('Mobile',a.mobile)
    +row('Instagram',a.instagram)+row('YouTube',a.youtube)+row('Website',a.website)
    +row('Followers',a.followers)+row('Languages',a.languages)
    +row('Experience',a.experience)+row('Trip types',a.trip_types)+row('Destinations',a.destinations)
    +'</div>'
    +(a.bio?'<p class="host-note" style="margin:0 0 14px">'+esc(a.bio)+'</p>':'')
    +'<button class="btn" onclick="openHostProfile()">Edit profile</button>'
    +'<p class="host-note">ID and payout details are handled on your verification call — never in the app.</p>';
  hydrate(box);
}
const HP_FIELDS=[
  ['hpName','Full name','text'],['hpCity','City','text'],['hpMobile','Mobile','tel'],
  ['hpInsta','Instagram','text'],['hpYt','YouTube','text'],['hpSite','Website','text'],
  ['hpFollowers','Total followers','text'],['hpLangs','Languages spoken','text']
];
async function openHostProfile(){
  await loadHostApp();
  if(!_hostApp){note('Apply as a host first.','No application');return;}
  go('hostProfile');renderHostProfile();
}
function renderHostProfile(){
  const box=document.getElementById('hpBody');if(!box)return;
  const a=_hostApp||{};
  const val={hpName:a.full_name,hpCity:a.city,hpMobile:a.mobile,hpInsta:a.instagram,hpYt:a.youtube,
             hpSite:a.website,hpFollowers:a.followers,hpLangs:a.languages};
  const photo=getSavedPhoto();
  box.innerHTML='<div style="text-align:center;margin-bottom:20px">'
      +'<div id="hpAv" class="pav" style="margin:0 auto;cursor:pointer;position:relative;'
      +(photo?'background-image:url(\''+esc(photo)+'\')':'')+'" onclick="document.getElementById(\'hpPhoto\').click()">'
      +(photo?'':esc((myName()[0]||'H').toUpperCase()))
      +'<span style="position:absolute;bottom:0;right:0;width:26px;height:26px;border-radius:50%;background:var(--accent);display:grid;place-items:center"><span class="msr" style="font-size:14px;color:#fff">photo_camera</span></span></div>'
      +'<div class="photo-actions"><button type="button" class="photo-link" onclick="document.getElementById(\'hpPhoto\').click()"><span class="msr" style="font-size:14px">add_a_photo</span> Change photo</button>'
      +(photo?'<span class="photo-sep">·</span><button type="button" class="photo-link" onclick="reCropPhoto()"><span class="msr" style="font-size:14px">crop_rotate</span> Reposition &amp; resize</button>':'')+'</div>'
      +'<input type="file" id="hpPhoto" accept="image/*" hidden onchange="epPickPhoto(this)"/></div>'
    +HP_FIELDS.map(f=>'<div class="field"><label>'+f[1]+'</label>'
      +(f[2]==='tel'?telInput(f[0],val[f[0]]||'')
        :'<div class="inp"><input id="'+f[0]+'" type="'+f[2]+'" value="'+esc(val[f[0]]||'')+'"/></div>')+'</div>').join('')
    +'<div class="field"><label>Short bio</label><textarea id="hpBio" class="hw-bio" maxlength="300" placeholder="A short intro shown on your public host page — your experience, the vibe of your trips…" oninput="var c=document.getElementById(\'hpBioC\');if(c)c.textContent=this.value.length">'+esc(a.bio||'')+'</textarea><div class="hw-bioc"><span id="hpBioC">'+String(a.bio||'').length+'</span>/300</div></div>'
    +'<div class="field"><label>Travel experience</label><div class="inp"><input id="hpExp" value="'+esc(a.experience||'')+'"/></div></div>'
    +'<div class="field"><label>Trips you host</label><div class="inp"><input id="hpTypes" value="'+esc(a.trip_types||'')+'"/></div></div>'
    +'<div class="field"><label>Preferred destinations</label><div class="inp"><input id="hpDests" value="'+esc(a.destinations||'')+'"/></div></div>'
    +'<button class="btn" id="hpSave" onclick="saveHostProfile()">Save changes</button>'
    +'<p class="host-note">Your verified status is set by Tripomonk and cannot be changed here.</p>';
  hydrate(box);
  applyGeoAutofill(['hpMobile'],['hpCity']);
}
async function saveHostProfile(){
  const v=id=>((document.getElementById(id)||{}).value||'').trim();
  const name=v('hpName'),mobile=readTel('hpMobile');
  if(!name){note('Name cannot be empty.','Name required');return;}
  if(!/^[+\d][\d\s-]{7,}$/.test(mobile)){note('Please enter a valid mobile number.','Check your number');return;}
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in.','Sign in required');return;}
  const btn=document.getElementById('hpSave');
  if(btn){btn.disabled=true;btn.textContent='Saving…';}
  /* status is deliberately NOT sent — the DB trigger pins it anyway */
  const r=await sb.from('host_applications').update({
    full_name:name,city:v('hpCity'),mobile:mobile,instagram:v('hpInsta'),youtube:v('hpYt'),
    website:v('hpSite'),followers:v('hpFollowers'),languages:v('hpLangs'),bio:v('hpBio'),
    experience:v('hpExp'),trip_types:v('hpTypes'),destinations:v('hpDests')
  }).eq('id',_hostApp.id).eq('user_id',uid).select('id');
  if(btn){btn.disabled=false;btn.textContent='Save changes';}
  if(r.error){note('Could not save: '+r.error.message,'Error');return;}
  if(!r.data||!r.data.length){note('Nothing was saved — you can only edit your own profile.','Not saved');return;}
  await loadHostApp();
  await note('Profile updated.','Saved ✓');
  back();
}
