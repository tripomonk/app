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
  t.hl=HL; t.dur=t.days+(t.days>1?' Days':' Day');
  /* location-based conditions derived from elevation + season */
  const ft=parseInt(String(t.alt).replace(/[^0-9]/g,''))||10000;
  t.elev=t.alt;
  t.climate = ft>14000?'Alpine · Harsh':(ft>11500?'Alpine · Cold':'Himalayan · Cool');
  t.temp = ft>14000?'-8° to 6°C':(ft>11500?'-5° to 10°C':'2° to 15°C');
  t.aqiVal = 18+((i*9)%34);
  t.aqi = t.aqiVal<=50?'Good':'Moderate';
});}
deriveTreks();

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
function swrGet(key){try{const v=JSON.parse(localStorage.getItem('tmk_swr_'+key)||'null');return (v&&'data'in v)?v:null;}catch(e){return null;}}
function swrSet(key,data){try{localStorage.setItem('tmk_swr_'+key,JSON.stringify({t:Date.now(),data}));}catch(e){}}
function swrFresh(key,ttl){const v=swrGet(key);return !!(v&&ttl&&(Date.now()-v.t<ttl));}
async function loadTreks(){ if(!sbOn) return;
  try{let r=await fetch(SB.SUPABASE_URL+'/rest/v1/treks?select=*&order=sort.asc',{headers:sbHeaders(),cache:'no-store'});
    /* table may not have a `sort` column — retry ordering by id */
    if(!r.ok) r=await fetch(SB.SUPABASE_URL+'/rest/v1/treks?select=*&order=id.asc',{headers:sbHeaders(),cache:'no-store'});
    if(!r.ok) return; const rows=await r.json(); if(!rows||!rows.length) return;
    /* DB is the source of truth for editable fields. Merge DB rows OVER the hardcoded
       fallback by name — so an admin edit persists for everyone even when not all treks
       were pre-imported, the trek keeps its rich display fields (highlights etc.), and it
       picks up the DB _id so the NEXT edit updates the same row instead of inserting. */
    const dbByName={};
    rows.forEach(d=>{const row={n:d.name,region:d.region,img:d.img,r:d.rating,rev:d.reviews,lvl:d.level,days:d.days,
      alt:d.altitude,dist:d.distance,best:d.best_time,price:d.price,soon:d.soon,desc:d.description,packing:d.packing||null,batches:(Array.isArray(d.batches)?d.batches:null),req:(typeof d.req_score==='number'?d.req_score:null),_id:d.id};
      if(d.credit)row.credit=d.credit; dbByName[d.name]=row;});
    const seen=new Set();
    treks.forEach(t=>{const d=dbByName[t.n];if(d){Object.assign(t,d);seen.add(t.n);}});
    rows.forEach(d=>{if(!seen.has(d.name)){treks.push(dbByName[d.name]);seen.add(d.name);}});
    deriveTreks();
    renderHomeChips(); renderHome(); renderQuick();
    if(cur==='explore') renderExplore();
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
  "Roopkund":[["Lohajung to Didna","Climb to Didna village.","7 km","5 hrs"],["Didna to Ali Bugyal","Vast alpine meadows.","11 km","6 hrs"],["Ali to Patar Nachauni","Ridge walk over Bedni.","6 km","4 hrs"],["Patar to Bhagwabasa","Climb past Kalu Vinayak.","5 km","5 hrs"],["Summit Roopkund","The mystery lake at dawn.","6 km","8 hrs"],["Descend to Lohajung","Long descent via Wan.","13 km","7 hrs"]]
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
let photoByName={},hostByName={},unameByName={},socialsByName={};
/* when each name was last fetched — so a changed DP/username refreshes instead of
   sticking on the first cached copy for the whole session */
let _authorFetchedAt={};
/* profile header counts — declared up here (renderProfile can run early); -1 = not loaded yet */
let _myPostCount=-1,_myFollowerCount=-1;
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
/* same, always @-prefixed for the muted sub-line under a name */
function atHandle(n){const h=handleFor(n);return h?('@'+String(h).replace(/^@/,'')):'';}
function avatar(n,size){size=size||38;const g=AVG[avHash(n)%AVG.length];const fs=Math.round(size*.4);
  const photo=photoFor(n);
  const bg=photo?`background-image:url('${photo}');background-size:cover;background-position:center`:`background:linear-gradient(135deg,${g[0]},${g[1]})`;
  return `<div class="av-i" onclick="openPerson('${jsq(n)}')" style="width:${size}px;height:${size}px;font-size:${fs}px;${bg}">${photo?'':initials(n)}</div>`;}

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
    if(on){const{error}=await sb.from('follows').upsert({follower_id:uid,following_name:n},{onConflict:'follower_id,following_name'});if(error)throw error;}
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
function toggleFollow(n){
  const wasFollowing=!!followState[n];
  /* optimistic: flip the button now, reconcile with the server after */
  followState[n]=!wasFollowing;saveFollows();
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
const menu=[['bookings','My Bookings','bookings'],['shield','Trek Passport','passport'],['like','My Preferences','onboarding'],['monitor','Trek Health','health'],['distance','Trek Navigation','navmap'],['heartmenu','My Wishlist','wishlist'],['starline','My Reviews','reviews'],['settings','Settings','settings'],['help','Help & Support','help']];
const setList=[['user','Account & security','account'],['bell','Notifications','notifPrefs'],['globe','Language','language'],['card','Payment methods','payments'],['shield','Privacy Policy','privacy'],['help','About Tripomonk','about']];
/* demo notifications removed — the notifications screen shows only real activity now */
const faqs=[['How do I book a trek?','Pick a trek, choose a batch on Select Date, add travellers and pay 25% to confirm your seat.'],['What is the cancellation policy?','Free cancellation up to 15 days before departure (full refund). Within 15 days, a 50% charge applies.'],['Do you provide gear on rent?','Yes — add the gear kit (jacket, boots, poles) as an add-on at checkout.'],['Are permits included?','We arrange forest / eco-zone permits for you as an assisted service.'],['What fitness level do I need?','Easy treks suit beginners; Moderate+ need regular cardio for 3–4 weeks before.']];
const reviewsData=[];  /* real reviews only — demo reviews removed */
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
function isLoggedIn(){return!!currentUser;}
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
  const sb=getSupaClient();if(!sb)return;
  /* did we just come back from an OAuth (Google) redirect? */
  const fromOAuth=/[#&](access_token|code)=/.test(window.location.hash||'')||/[?&]code=/.test(window.location.search||'');
  const{data:{session}}=await sb.auth.getSession();
  if(session){
    currentUser=session.user;
    /* restore name/photo/follows BEFORE upserting, or an empty local copy overwrites the stored one */
    await loadProfileFromServer();
    upsertProfile();   /* register this user so others can @mention/follow/notify them */
    loadStaff();       /* role check */
    if(cur==='profile')renderProfile();
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
    /* arrived via a password-reset link — let them set a new password now */
    if(evt==='PASSWORD_RECOVERY'){promptNewPassword();return;}
    if(!session){_profileLoadedFor=null;}
    /* reload whenever a DIFFERENT account is in play — keyed on the user id, not on
       "was anyone logged in", so switching accounts swaps identity properly.
       Token refreshes keep the same id, so they don't re-fetch. */
    else if(_profileLoadedFor!==session.user.id){
      await loadProfileFromServer();
      upsertProfile();
      loadStaff();
      renderFeedIfOpen();
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

async function socialLogin(provider){
  const sb=getSupaClient();
  if(!sb){note('Backend not connected.','Error');return;}
  const redirectTo=window.location.origin+window.location.pathname;
  const{error}=await sb.auth.signInWithOAuth({provider,options:{redirectTo}});
  if(error)note(error.message,'Error');
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
  await loadProfileFromServer();upsertProfile();loadStaff();
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
  currentUser=null;_profileLoadedFor=null;
  clearLocalIdentity();
  try{['tmk_contact','tmk_uid','tmk_nav'].forEach(k=>localStorage.removeItem(k));}catch(e){}
  hist=[];_loginReturn='home';
  go('login');
  note('Signed out successfully.','Done');
}
function getUserEmail(){return currentUser?currentUser.email||'':''}
function getSavedName(){try{return localStorage.getItem('tmk_uname')||'';}catch(e){return'';}}
function saveUserName(n){try{if(n)localStorage.setItem('tmk_uname',n);}catch(e){}}
function getSavedMobile(){try{return localStorage.getItem('tmk_umobile')||'';}catch(e){return'';}}
function getSavedPhoto(){try{return localStorage.getItem('tmk_uphoto')||'';}catch(e){return'';}}
/* paint an avatar tile safely: show the photo, but ALWAYS fall back to the
   person's initial when there's no photo, a junk value ("null"), or the image
   fails to load (broken / expired storage URL). Never leaves a blank tile —
   this was the "profile picture invisible" bug in light mode. */
function setAvatarEl(el,name,photo){
  if(!el)return;
  const letter=(String(name||'E').trim()[0]||'E').toUpperCase();
  el.textContent=letter;el.style.backgroundImage='';
  if(!photo||!/^(data:image\/|https?:\/\/|blob:)/i.test(photo))return;
  const im=new Image();
  im.onload=()=>{
    /* set size/position inline too — the light-theme CSS uses a `background`
       shorthand that would otherwise reset background-size to auto, cropping the
       photo to its top-left corner (looked like the image "not showing"). */
    el.style.backgroundImage="url('"+photo.replace(/'/g,'%27')+"')";
    el.style.backgroundSize='cover';el.style.backgroundPosition='center';
    el.textContent='';
  };
  im.onerror=()=>{el.style.backgroundImage='';el.textContent=letter;};
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
function renderEditProfile(){
  const name=getSavedName();const mobile=getSavedMobile();const email=getUserEmail()||'';const photo=getSavedPhoto();
  /* build the social-link inputs from SOCIALS and fill saved values */
  const soc=getSavedSocials();const sc=document.getElementById('epSocials');
  if(sc)sc.innerHTML=SOCIALS.map(s=>`<div class="inp soc-inp"><span class="soc-dot" style="background:${s[2]}"></span><input id="epSoc_${s[0]}" placeholder="${esc(s[1])} — handle or link" autocapitalize="none" autocorrect="off" spellcheck="false" value="${esc(soc[s[0]]||'')}"/></div>`).join('');
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
    pa.innerHTML='<button type="button" class="photo-link" onclick="document.getElementById(\'epPhoto\').click()"><span class="msr" style="font-size:14px">add_a_photo</span> Change photo</button>'
      +(photo?'<span class="photo-sep">·</span><button type="button" class="photo-link" onclick="reCropPhoto()"><span class="msr" style="font-size:14px">crop_rotate</span> Reposition &amp; resize</button>':'');
  }
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
    let url;
    try{url=out.toDataURL('image/jpeg',.86);}catch(e){note('Could not process that image.','Error');return;}
    /* keep a downscaled copy of the original so the user can re-crop / resize later
       without re-uploading. Capture it before close() nulls _crop. Best-effort. */
    let srcCopy='';try{srcCopy=downscaleToDataURL(_crop.img,1280);}catch(err){}
    close();
    try{localStorage.setItem('tmk_uphoto',url);}catch(err){note('Photo is too large to store on this device.','Storage full');return;}
    try{if(srcCopy)localStorage.setItem('tmk_uphoto_src',srcCopy);}catch(err){}
    renderEditProfile();
    upsertProfile();          /* sync to the server so it survives sign-out / other devices */
    if(cur==='profile')renderProfile();
    if(cur==='hostProfile')renderHostProfile();   /* hosts change their photo here too */
    if(cur==='hostDash')renderHostDash();
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
  }catch(e){}
  await upsertProfile();   /* keep the public profile (name/photo/username/socials) in sync */
  restore();
  renderProfile();
  note('Profile saved successfully!','Saved ✓');
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
    return `<div class="pg" style="background-image:url('${c.src}${String(c.src).startsWith('http')?Q:''}')" onclick="openPostDetail('${c.post.id}')"></div>`;
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
  const roleCards=`<div class="sec" style="margin:6px 2px 10px"><h2 style="font-size:14.5px">How will you use Tripomonk?</h2></div>
    <div class="rolerow">
      <div class="rolecard ${_prefRole==='Explorer'?'on':''}" onclick="pickRole('Explorer')">
        <span class="msr">explore</span><b>Explorer</b><small>Book adventures and join trips</small></div>
      <div class="rolecard ${_prefRole==='Host'?'on':''}" onclick="pickRole('Host')">
        <span class="msr">landscape</span><b>Host</b><small>Run trips — we handle operations</small></div>
    </div>
    ${_prefRole==='Host'?`<p class="host-note" style="margin:-4px 2px 16px">We'll take you to the host application after this.</p>`:''}`;
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
let staffSet=new Set();
async function loadStaff(){const sb=getSupaClient();if(!sb)return;try{const{data}=await sb.from('staff').select('email');staffSet=new Set((data||[]).map(r=>(r.email||'').toLowerCase()));}catch(e){}}
function isStaffUser(){return isAdminUser()||(!!userEmail()&&staffSet.has(userEmail()));}
/* Escape a value for use inside onclick="fn('HERE')".
   esc() alone is not enough: it leaves backslashes and lets a crafted name break
   out of the quoted JS string. Strip the dangerous chars, then HTML-escape. */
function jsq(s){return esc(String(s==null?'':s).replace(/[\'"`<>]/g,''));}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
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
function bigCard(t){return `<div class="bigcard" onclick="openDetail(${t.idx})" data-bg="${esc(t.img||'')}" style="background-color:#12243f">
  ${trekScoreBadge(t,'on-photo')}<span class="pr">${t.soon?'Coming Soon':INR(t.price)}</span>
  <div class="info"><h3>${t.n}</h3><div class="reg">${ic('pin',12)} ${t.region} · ${t.dur} · ${t.lvl}</div></div></div>`;}

let homeFilter='All';
const diffs=['All','Easy','Moderate','Difficult'];
const diffIcon={All:'treks',Easy:'pine',Moderate:'altitude',Difficult:'flame'};
function renderHomeChips(){document.getElementById('homeChips').innerHTML=diffs.map(d=>`<div class="chip ${d===homeFilter?'on':''}" onclick="setHomeFilter('${d}')"><span style="display:grid;place-items:center">${ic(diffIcon[d],20)}</span>${d==='All'?'All Treks':d}</div>`).join('');hydrate(document.getElementById('homeChips'));}
function setHomeFilter(d){homeFilter=d;renderHomeChips();renderHome();}
function trekCardH(t){return `<div class="hcard" onclick="openDetail(${t.idx})"><div class="hph" style="background-image:url('${t.img}')">${t.soon?'<span class="soon">Coming Soon</span>':''}${trekScoreBadge(t,'on-photo')}</div>
  <div class="hbd"><h3>${t.n}</h3><div class="reg">${ic('pin',12)} ${t.region}</div>
  <div class="rt"><span class="star">★</span> <b>${t.r}</b> <span style="color:var(--muted)">(${t.rev})</span></div>
  <div class="ft"><span class="tag">${ic('clock',12)} ${t.dur}</span><span class="tag">${t.lvl}</span></div></div></div>`;}
/* ===== Reusable dynamic 3D coverflow stack (index-based, swipe/drag, infinite, virtualized) ===== */
let _cfMoved=false;
/* card builders */
function trekCardCF(t,i){return `<div class="fcx" data-cf="${i}" onclick="cfTapCard(this)">
  <div class="fcx-img" style="background-image:url('${t.img}')">${t.soon?'<span class="soon">Coming Soon</span>':''}${trekScoreBadge(t,'on-photo')}</div>
  <div class="fcx-bd">
    <h3>${esc(t.n)}</h3>
    <div class="fcx-loc">${ic('pin',13)} ${esc(t.region)}</div>
    <div class="fcx-desc">${esc(t.desc||'A beautiful Himalayan trek with Tripomonk.')}</div>
    <div class="fcx-stats">
      <div><small>Distance</small><b>${esc(t.dist||'—')}</b></div>
      <div><small>Best time</small><b>${esc(t.best||'—')}</b></div>
      <div><small>Rating</small><b>★ ${t.r}</b></div>
    </div>
    <div class="fcx-foot"><div><small>Total Price</small><div class="fcx-price">₹${Number(t.price).toLocaleString('en-IN')}</div></div>
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
  let raf=0;
  const update=()=>{raf=0;
    const mid=el.scrollLeft+el.clientWidth/2;
    cards.forEach(c=>{
      const cc=c.offsetLeft+c.offsetWidth/2;
      const d=Math.min(1.4,Math.abs(cc-mid)/(c.offsetWidth||1));   /* 0 = centre */
      const scale=1-Math.min(d,1)*0.15;
      const op=1-Math.min(d,1)*0.4;
      const rot=Math.max(-10,Math.min(10,(cc<mid?1:-1)*d*9));
      c.style.transform='scale('+scale.toFixed(3)+') rotateY('+rot.toFixed(1)+'deg)';
      c.style.opacity=op.toFixed(2);
      c.style.zIndex=String(100-Math.round(Math.min(d,1)*100));
    });
  };
  if(el._cfScroll)el.removeEventListener('scroll',el._cfScroll);
  el._cfScroll=()=>{if(!raf)raf=requestAnimationFrame(update);};
  el.addEventListener('scroll',el._cfScroll,{passive:true});
  update();setTimeout(update,80);setTimeout(update,320);   /* re-run after images size */
}
function renderHomeHero(){
  const box=document.getElementById('homeHero');if(!box)return;
  const f=treks.find(t=>!t.soon)||treks[0];if(!f){box.innerHTML='';return;}
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
function cmpAvail(){return treks.filter(t=>!t.soon);}
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
  const url=window.location.origin+window.location.pathname.replace(/index\.html$/,'')+'#trek='+encodeURIComponent(name);
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
  /* Popular Treks is a small featured rail — bookable first, then a few coming-soon.
     Capping it is essential: rendering all 130+ treks here crashed iOS Safari (memory). */
  const pool=homeFilter==='All'?treks:treks.filter(t=>t.lvl===homeFilter);
  const list=[...pool].sort((a,b)=>(a.soon?1:0)-(b.soon?1:0)).slice(0,12);
  makeCoverflow('homeList',list,trekCardCF,(t)=>openDetail(t.idx));
  /* paint the host slot now (CTA), then swap in the rail if any trips are live */
  renderHomeHosts();
  renderGiftHome();
  /* seed the rail from the last cached copy so it appears instantly on repeat visits */
  const cLt=swrGet('livehosttrips'),cVh=swrGet('verifiedhosts');
  if(cLt&&Array.isArray(cLt.data))liveHostTrips=cLt.data;
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
  if(cc)cc.innerHTML=DEP_CITIES.map(c=>`<div class="chip pill ${exploreLabel===('From '+c)?'on':''}" onclick="filterByCity('${c}')">${ic('pin',13)} ${c}</div>`).join('');
  /* filtered views (a region / difficulty / city) show their full set — always small.
     The unfiltered "Top Picks" is capped so we never render 130+ image cards at once
     (that crashed iOS Safari). Everything stays reachable via the region tiles above. */
  const list=exploreView||treks.slice(0,30);
  const head=document.getElementById('topHead'); if(head)head.textContent=exploreLabel||'Top Picks For You';
  const el=document.getElementById('exploreList');el.className='';
  el.innerHTML=list.length?list.map(bigCard).join(''):`<div class="empty"><img src="illustrations/hiker-mountains.svg" alt=""/>No treks in ${esc(exploreLabel||'this filter').replace(' Treks','')} yet — more coming soon.<br><br><button class="btn sm" onclick="filterAll()">Show all treks</button></div>`;
  hydrate(document.getElementById('explore'));
  lazyBg(el);   /* only load photos as cards scroll into view (keeps iOS memory sane) */
}
let exploreView=null, exploreLabel='';
function scrollToPicks(){const el=document.getElementById('topSec');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function filterByRegion(r){exploreView=treks.filter(t=>t.region===r);exploreLabel=r+' Treks';renderExplore();scrollToPicks();}
function filterByDiff(d){exploreView=treks.filter(t=>t.lvl===d);exploreLabel=d+' Treks';renderExplore();scrollToPicks();}
function filterByCity(c){exploreView=treks.filter(t=>depCity(t)===c);exploreLabel='From '+c;renderExplore();scrollToPicks();}
function filterAll(){exploreView=null;exploreLabel='';renderExplore();}

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
function openDetail(i){const t=treks[i];if(!t)return;cart.trek=t;
  const hh=document.getElementById('dHero');hh.style.transform='';
  hh.classList.add('img-loading');hh.style.backgroundImage=`url('${t.img}')`;
  const _hi=new Image();_hi.onload=_hi.onerror=()=>hh.classList.remove('img-loading');_hi.src=t.img;   /* shimmer skeleton until the hero photo is ready */
  const dc=document.getElementById('dCredit');
  if(dc){if(t.credit){dc.innerHTML='<span class="msr">photo_camera</span> '+esc(t.credit);dc.classList.add('on');}else dc.classList.remove('on');}
  document.getElementById('dName').textContent=t.n;
  document.getElementById('dReg').textContent=t.region;
  document.getElementById('dRate').textContent=t.r;
  document.getElementById('dRev').textContent='('+t.rev+' reviews)';
  const _dl=document.getElementById('dLvl');if(_dl)_dl.textContent=t.lvl;   /* difficulty removed from the header; guarded in case the element returns */
  const dsb=document.getElementById('dScoreBadge');if(dsb)dsb.innerHTML=trekScoreBadge(t,'trek-score-lg')+'<span class="d-score-cap">Trek score</span>';
  document.getElementById('dDesc').textContent=t.desc;
  const stats=[['altitude',t.alt,'Altitude'],['clock',t.dur,'Duration'],['distance',t.dist,'Distance'],['calendar',t.best,'Best Time']];
  document.getElementById('dStats').innerHTML=stats.map(s=>`<div class="stat"><div class="ic" style="display:grid;place-items:center">${ic(s[0],20)}</div><b>${s[1]}</b><small>${s[2]}</small></div>`).join('');
  document.getElementById('dHl').innerHTML=t.hl.map(h=>`<div class="hlc"><span class="ic">${ic(h[0],22)}</span>${h[1]}</div>`).join('');
  document.getElementById('dCond').innerHTML=[['altitude',t.elev,'Elevation'],['cloud',t.climate,'Climate'],['temp',t.temp,'Temp'],['air',t.aqi+' · '+t.aqiVal,'Air Quality']].map((c,j)=>`<div class="stat"><div class="ic" style="display:grid;place-items:center;${j===3?'color:#6ee7a0':''}">${ic(c[0],20)}</div><b style="font-size:11.5px">${c[1]}</b><small>${c[2]}</small></div>`).join('');
  document.getElementById('dKnow').innerHTML=KNOW.map(k=>`<div class="stat"><div class="ic" style="display:grid;place-items:center">${ic(k[0],20)}</div><b>${k[1]}</b><small>${k[2]}</small></div>`).join('');
  const incRow=x=>`<div style="display:flex;align-items:flex-start;gap:8px;font-size:12.5px;color:var(--muted);padding:5px 0;line-height:1.35"><span class="ic" style="color:#6ee7a0;flex:none;margin-top:1px">${ic('check',15)}</span>${x[1]}</div>`;
  const excRow=x=>`<div style="display:flex;align-items:flex-start;gap:8px;font-size:12.5px;color:var(--muted2);padding:5px 0;line-height:1.35"><span style="color:#ff7a7a;font-weight:600;flex:none;width:15px;text-align:center;margin-top:-1px">✕</span><span style="text-decoration:line-through">${x}</span></div>`;
  document.getElementById('dIncl').innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
    <div><div style="font-size:11px;font-weight:600;color:var(--text);opacity:.85;margin-bottom:4px">Included</div>${INCL.map(incRow).join('')}</div>
    <div><div style="font-size:11px;font-weight:600;color:var(--text);opacity:.85;margin-bottom:4px">Not included</div>${EXCL.map(excRow).join('')}</div></div>`;
  const dit=ITIN[t.n]||[];
  document.getElementById('dItinPrev').innerHTML=dit.slice(0,3).map((d,i)=>`<div class="tl"><div class="line"><div class="dot"></div>${i<2?'<div class="rod"></div>':''}</div><div class="bd"><div class="d">Day ${i+1}</div><h3>${d[0]}</h3></div></div>`).join('');
  document.getElementById('dRevPrev').innerHTML=reviewsData.length?reviewsData.slice(0,2).map(reviewCard).join(''):'<div style="font-size:12.5px;color:var(--muted)">No reviews yet — be the first after your trek.</div>';
  document.getElementById('dFav').classList.remove('on');
  const cta=document.getElementById('dCta');
  if(t.soon){cta.innerHTML=ic('bell',16)+' Coming Soon · Notify me';cta.onclick=()=>wa(t.n+' — please notify me when it goes live.');}
  else{cta.innerHTML='View Dates &amp; Price&nbsp; →';cta.onclick=()=>go('selectDate');}
  const rd=document.getElementById('dReadiness');if(rd){rd.innerHTML=readinessCardHTML(t);hydrate(rd);}
  renderDetailGetting(t);
  refreshGearReco(t);          /* AI recommended gear, personalised to this trek */
  renderDetailNews(t.n);
  go('detail');
}
async function shareTrek(){
  const t=cart.trek;if(!t)return;
  const url=window.location.origin+window.location.pathname+'#trek='+encodeURIComponent(t.n);
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

function renderItinerary(){const t=cart.trek,it=ITIN[t.n]||[];
  document.getElementById('itinList').innerHTML=it.map((d,i)=>`<div class="tl"><div class="line"><div class="dot"></div>${i<it.length-1?'<div class="rod"></div>':''}</div>
    <div class="ph" style="background-image:url('${dayImg(d,i,t)}')"></div>
    <div class="bd"><div class="d">Day ${i+1}</div><h3>${d[0]}</h3><p>${d[1]}</p><div class="km"><span>${ic('distance',12)} ${d[2]}</span><span>${ic('clock',12)} ${d[3]}</span></div></div></div>`).join('');
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
  cart.date=chosen?chosen.label:''; cart.total=chosen?(chosen.price||t.price):t.price;
  document.getElementById('batches').innerHTML=batches.length?batches.map((b,i)=>{
    const st=batchState(b.seats);const full=st==='full';
    const d=parseStartDate(b.label);
    const sLabel=full?(b.seats||'Sold out'):(b.seats||'Available');
    const sIcon=full?'block':st==='few'?'local_fire_department':'check_circle';
    const onClick=full?'':`onclick="selBatch(this,'${(b.label||'').replace(/'/g,'')}',${b.price||t.price})"`;
    return `<div class="batch ${i===sel&&!full?'on':''} ${full?'full':''}" ${onClick}>
      <div class="calb"><span class="mo">${d.mo}</span><span class="dy">${d.day}</span></div>
      <div class="bd"><b>${esc(b.label)}</b><div class="s ${st==='few'?'few':full?'full':''}"><span class="msr" style="font-size:13px">${sIcon}</span>${esc(sLabel)}</div></div>
      <div class="rt"><div class="pr">${INR(b.price||t.price)}</div>${full?'':'<div class="radio"></div>'}</div>
    </div>`;
  }).join(''):`<div class="empty"><p>No departures scheduled yet. Tap below to enquire on WhatsApp.</p></div>`;
  document.getElementById('inclusions').innerHTML=INCL.map(x=>`<div class="inclc"><div class="ic">${ic(x[0],20)}</div>${x[1]}</div>`).join('');
  hydrate(document.getElementById('selectDate'));
}
function selBatch(el,d,price){document.querySelectorAll('#batches .batch').forEach(b=>b.classList.remove('on'));el.classList.add('on');cart.date=d;cart.total=price;}

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
  cart.contact={name,phone,email,emName,emPhone};
  saveUserName(name);saveContact(cart.contact);
  go('review');
}
function saveContact(c){try{localStorage.setItem('tmk_contact',JSON.stringify(c));}catch(e){}}
function getContact(){try{return JSON.parse(localStorage.getItem('tmk_contact')||'null');}catch(e){return null;}}
function prefillTravellers(){
  const g=id=>document.getElementById(id);const c=getContact()||{};
  if(g('leadName')&&!g('leadName').value)g('leadName').value=getSavedName()||c.name||'';
  if(g('leadPhone')&&!g('leadPhone').value)g('leadPhone').value=c.phone||'';
  if(g('leadEmail')&&!g('leadEmail').value)g('leadEmail').value=c.email||getUserEmail()||'';
  if(g('emName')&&!g('emName').value)g('emName').value=c.emName||'';
  if(g('emPhone')&&!g('emPhone').value)g('emPhone').value=c.emPhone||'';
}
/* departure / pickup city per trek (primary boarding point) */
const DEP_CITIES=['Delhi','Rishikesh','Dehradun'];
const TREK_DEP={'Kedarkantha':'Dehradun','Har Ki Dun':'Dehradun','Brahmatal':'Dehradun','Roopkund':'Dehradun','Nag Tibba':'Dehradun','Valley of Flowers':'Rishikesh','Hampta Pass':'Delhi'};
function depCity(t){return (t&&(t.dep||TREK_DEP[t.n]))||'Dehradun';}
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
  const city=depCity(t);
  const itin=(ITIN[t.n]||[]).slice(0,3);
  return `
  <div class="sec" style="margin-top:18px"><h2 style="font-size:15px">Trip summary</h2></div>
  <div class="rv-block"><div class="rv-h">${ic('distance',16)} Itinerary</div>
    ${itin.length?itin.map((d,i)=>`<div class="rv-it"><b>Day ${i+1}:</b> ${esc(d[0])}</div>`).join('')+(ITIN[t.n].length>3?`<div class="rv-more" onclick="go('itinerary')">View full itinerary →</div>`:''):'<div class="rv-it">Detailed day-wise plan shared on confirmation.</div>'}
  </div>
  <div class="rv-block"><div class="rv-h">${ic('pin',16)} Pickup &amp; reporting</div>
    <div class="rv-it"><b>Pickup city:</b> ${city} (also boardable from ${DEP_CITIES.filter(c=>c!==city).join(' / ')} en route)</div>
    <div class="rv-it"><b>Reporting:</b> by 6:30 AM on Day 1 at the ${city} pickup point (exact spot shared after booking)</div>
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
    <div class="rv-it" style="font-size:15px;color:var(--text)"><b>${INR(Math.round((cart.grand||cart.total)*0.25))}</b> advance (25%) · Total ${INR(cart.grand||cart.total)}</div>
  </div>`;
}
function syncReview(){const t=cart.trek;cart.gear=false;cart.permit=false;
  document.getElementById('rvPh').style.backgroundImage=`url('${t.img}')`;
  document.getElementById('rvName').textContent=t.n;
  document.getElementById('rvDate').textContent=cart.date;
  document.getElementById('rvPax').textContent=cart.pax+' trekker'+(cart.pax>1?'s':'');
  document.querySelectorAll('#review .toggle').forEach(x=>x.classList.remove('on'));
  document.getElementById('sGear').style.display='none';document.getElementById('sPermit').style.display='none';
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
function addon(el,k,amt){el.classList.toggle('on');cart[k]=el.classList.contains('on');
  document.getElementById(k==='gear'?'sGear':'sPermit').style.display=cart[k]?'flex':'none';computeTotal();
  const d=document.getElementById('rvDetails');if(d&&cart.trek){d.innerHTML=reviewDetailsHTML(cart.trek);hydrate(d);}}
function computeTotal(){const t=cart.trek;let sum=cart.total*cart.pax;if(cart.gear)sum+=2700;if(cart.permit)sum+=350;cart.grand=sum;
  document.getElementById('sPax').textContent=cart.pax;
  document.getElementById('sBase').textContent=INR(cart.total*cart.pax);
  document.getElementById('sTot').textContent=INR(sum);
  document.getElementById('payAmt').textContent=INR(sum);
  document.getElementById('payNow').textContent=INR(Math.round(sum*0.25));}
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
  const bookingReq={kind:'trek',trek:t.n,date:cart.date,pax:cart.pax,name:name,email:c.email||getUserEmail()||'',phone:c.phone||'',emergency_name:c.emName||'',emergency_phone:c.emPhone||'',addons:{gear:!!cart.gear,permit:!!cart.permit}};
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
        <button class="bk-btn" onclick="openPackingFor('${trekName}')">${ic('list',15)} Packing</button>
      </div>
    </div></div>`;
}
function bkPopCard(t,i){
  return `<div class="bk-pop-c" onclick="openDetail(${i})">
    <div class="bk-pop-img" style="background-image:url('${esc(t.img||'')}')"></div>
    <div class="bk-pop-tx"><b>${esc(t.n)}</b><small>${esc(t.region||'')} · ${INR(t.price||0)}</small></div></div>`;
}
function renderBookings(){
  const bs=getBookings();const box=document.getElementById('bookList');
  if(bs.length){
    box.innerHTML='<div class="bk-list">'+bs.map(bookingCard).join('')+'</div>';
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
let _svGroup=null,_svIdx=0,_svTimer=null;
function openStory(name){
  const g=storyGroups.find(x=>x.n===name);if(!g||!g.items.length)return;
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
  /* only your own story can be deleted */
  const del=document.getElementById('svDel');
  del.classList.toggle('show',g.n===myName());
  clearTimeout(_svTimer);
  _svTimer=setTimeout(()=>stepStory(1),STORY_MS);
}
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
function reviewCard(r){return `<div class="panel" style="margin-bottom:12px"><div style="display:flex;align-items:center;gap:10px;margin-bottom:7px"><div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#ffd27a,#ff7a59);display:grid;place-items:center;font-weight:600;color:#5a2a00">${r[0][0]}</div><div><b style="font-size:13px">${r[0]}</b><div class="star" style="font-size:11px">${'★'.repeat(r[1])}${'☆'.repeat(5-r[1])} <span style="color:var(--muted2)">· ${r[3]}</span></div></div></div><p style="margin:0;font-size:12.5px;color:var(--muted);line-height:1.55">${r[2]}</p></div>`;}
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
      data.forEach(r=>{if(r.name)hostByName[r.name]=!!r.is_host;});
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
  const url=src.startsWith('data:')?src:src+Q;
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
   <div class="ig-actions">
     <div class="ig-left">
       <span class="ig-ic ig-like ${liked?'liked':''}" onclick="likePost('${p.id}')">${ic('like',24)}${likeCount?`<b>${likeCount.toLocaleString('en-IN')}</b>`:''}</span>
       <span class="ig-ic ig-comment" onclick="openComments('${p.id}')">${ic('comment',24)}${nc?`<b>${nc}</b>`:''}</span>
       <span class="ig-ic" onclick="repostPost('${p.id}')" title="Repost to your feed">${ic('repeat',22)}</span>
     </div>
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
  const row={id:uid,updated_at:new Date().toISOString()};
  const nm=getSavedName();if(nm)row.name=nm;
  const ph=getSavedPhoto();if(ph)row.photo=ph;
  const un=getSavedUsername();if(un)row.username=un;
  const cv=getSavedCover();if(cv)row.cover=cv;
  const soc=getSavedSocials();if(soc&&Object.keys(soc).length)row.socials=soc;
  try{await sb.from('profiles').upsert(row);}catch(e){}
}
/* everything that identifies ONE person on this device */
const IDENTITY_KEYS=['tmk_uname','tmk_uhandle','tmk_uphoto','tmk_ucover','tmk_socials','tmk_umobile','tmk_follows','tmk_posts','tmk_likes','tmk_comments','tmk_bookings','tmk_notif_seen','tmk_admin','tmk_admin_key','tmk_captain'];
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
    const{data}=await sb.from('profiles').select('name,photo,prefs,username,cover,socials').eq('id',currentUser.id).maybeSingle();
    if(data){
      if(data.name)try{localStorage.setItem('tmk_uname',data.name);}catch(e){}
      if(data.photo)try{localStorage.setItem('tmk_uphoto',data.photo);}catch(e){}
      if(data.username)try{localStorage.setItem('tmk_uhandle',data.username);}catch(e){}
      if(data.cover)try{localStorage.setItem('tmk_ucover',data.cover);}catch(e){}
      if(data.socials)try{localStorage.setItem('tmk_socials',JSON.stringify(data.socials));}catch(e){}
    }
  }catch(e){}
  await loadFollowsFromServer();
  loadCart();   /* cart is keyed per account — swap to this user's one */
  _profileLoadedFor=currentUser.id;
}
async function uidForName(name){
  const sb=getSupaClient();if(!sb||!name)return null;
  /* profiles first (covers users who haven't posted yet), then posts */
  try{const{data}=await sb.from('profiles').select('id').eq('name',name).limit(1);if(data&&data[0])return data[0].id;}catch(e){}
  const{data:d2}=await sb.from('community_posts').select('user_id').eq('author_name',name).not('user_id','is',null).limit(1);
  return(d2&&d2[0])?d2[0].user_id:null;
}
async function loadNotifsRemote(){
  const sb=getSupaClient();if(!sb)return null;
  const name=myName();
  return await breaker(async()=>{
    let q=sb.from('notifications').select('*').order('created_at',{ascending:false}).limit(60);
    if(currentUser)q=q.or(`recipient_id.eq.${currentUser.id},recipient_name.eq.${name}`);
    else q=q.eq('recipient_name',name);
    const{data,error}=await q;
    if(error)throw error;
    return data||[];
  });
}
const NOTIF_ICON={like:'favorite',comment:'chat_bubble',follow:'person_add',mention:'alternate_email'};
/* Magic-UI style icon tiles: an emoji on a coloured rounded square per type */
const NOTIF_STYLE={like:{e:'💗',c:'#FF3D71'},comment:{e:'💬',c:'#1E86FF'},follow:{e:'👤',c:'#FFB800'},mention:{e:'📣',c:'#00C9A7'}};
function notifDesc(n){
  const p=n.preview?'“'+esc(n.preview)+'”':'';
  if(n.type==='like')return 'liked your post';
  if(n.type==='comment')return 'commented '+p;
  if(n.type==='follow')return 'started following you';
  if(n.type==='mention')return 'mentioned you '+p;
  return 'interacted with you';
}
function notifText(n){
  const who=esc(handleFor(n.actor_name));
  if(n.type==='like')return `<b>${who}</b> liked your post`;
  if(n.type==='comment')return `<b>${who}</b> commented: ${n.preview?'“'+esc(n.preview)+'”':''}`;
  if(n.type==='follow')return `<b>${who}</b> started following you`;
  if(n.type==='mention')return `<b>${who}</b> mentioned you: ${n.preview?'“'+esc(n.preview)+'”':''}`;
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
  const url=media?(media.startsWith('data:')?media:media+Q):'';
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
  body.innerHTML=`<div class="prof-top">${avatar(p.n,84)}<h2>${esc(p.n)}</h2><div class="handle">${esc(p.h)}</div></div><div class="skel skel-card" style="height:120px;margin:16px 0"></div>`;
  const posts=await loadUserPosts(p.n);
  await Promise.all([loadEngagement(posts.map(x=>x.id)),loadAuthorPhotos([p.n])]);
  const disp=handleFor(p.n),at=atHandle(p.n);
  /* real follower / following counts for THIS person from the follows table */
  let followers=0,following=me?followCount():0;
  const sb=getSupaClient();
  if(sb){try{
    const uid=await uidForName(p.n);
    const[fr,fg]=await Promise.all([
      sb.from('follows').select('*',{count:'exact',head:true}).eq('following_name',p.n),
      uid?sb.from('follows').select('*',{count:'exact',head:true}).eq('follower_id',uid):Promise.resolve({count:me?followCount():0})
    ]);
    followers=fr.count||0; following=fg.count||0;
  }catch(e){}}
  /* base excludes my own optimistic follow so toggling adds/removes cleanly */
  const base=Math.max(0,followers-(isFollowing(p.n)?1:0));
  const flwr=base+(isFollowing(p.n)?1:0);
  body.innerHTML=`
    <div class="prof-top">${avatar(p.n,84)}
      <h2>${esc(disp)}${hostBadge(p.n)}</h2><div class="handle">${esc(at||p.h)}</div>
      <p class="pbio">${p.bio||''}</p>
      <div class="pstats"><div><b>${posts.length}</b><small>Posts</small></div><div><b id="pFlwr" data-person="${esc(p.n)}" data-base="${base}">${flwr.toLocaleString()}</b><small>Followers</small></div><div><b>${Number(following).toLocaleString()}</b><small>Following</small></div></div>
      ${me?'':`<div class="profile-actions" style="margin:14px 0 0"><button class="${isFollowing(p.n)?'on':''}" data-follow="${esc(p.n)}" onclick="toggleFollow('${jsq(p.n)}')">${isFollowing(p.n)?'Following':'Follow'}</button><button onclick="openChat('${jsq(p.n)}')">Message</button></div>`}
      <div style="margin-top:12px">${socialLinks(me?getSavedSocials():socialsByName[p.n])}</div>
    </div>
    <div class="sec-h" style="margin:18px 4px 8px"><b>Posts</b></div>
    ${posts.length?`<div class="pgrid">${posts.map(gridCell).join('')}</div>`:`<div class="empty"><p>${me?'You have not posted yet.':'No posts yet.'}</p></div>`}`;
  hydrate(body);}
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
    ${bs.length?bs.map(b=>{const t=treks.find(x=>x.n===(b.trek||'').replace(' (Activity)',''));return `<div class="pp-stamp"><div class="ps-img" style="background-image:url('${b.img||(t?t.img:'')}')"></div><div class="ps-bd"><b>${esc(b.trek)}</b><small>${esc(b.date)}</small></div><span class="ps-done">${b.checkedIn?'✓ Completed':'Booked'}</span></div>`;}).join(''):`<div class="empty"><p>No treks yet — book your first to start your passport! 🏔️</p><button class="btn sm" style="margin-top:10px" onclick="go('explore')">Browse Treks</button></div>`}
    <div style="height:20px"></div>`;
  hydrate(box);
}
function getSavedCover(){try{return localStorage.getItem('tmk_ucover')||'';}catch(e){return'';}}
/* upload a wide cover image (URL in storage, never base64 — keeps profiles light) */
async function coverPickPhoto(input){
  const file=input.files&&input.files[0];if(!file)return;input.value='';
  if(!/^image\//.test(file.type)){note('Please choose an image file.','Not an image');return;}
  if(!isLoggedIn()){note('Please sign in to set a cover.','Sign in required');return;}
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in to set a cover.','Sign in required');return;}
  note('Updating your cover…','Just a moment');
  try{
    const small=await compressImage(file,{maxW:1280,quality:.8});
    const path='covers/'+Date.now()+'_'+Math.random().toString(36).slice(2)+'.jpg';
    const up=await sb.storage.from('community').upload(path,small,{cacheControl:'3600',upsert:false});
    if(up.error)throw new Error(up.error.message);
    const url=sb.storage.from('community').getPublicUrl(path).data.publicUrl;
    try{localStorage.setItem('tmk_ucover',url);}catch(e){}
    await sb.from('profiles').update({cover:url}).eq('id',uid);
    document.getElementById('modal').classList.remove('show');
    renderProfile();
    note('Cover updated.','Saved ✓');
  }catch(e){document.getElementById('modal').classList.remove('show');note('Could not update cover: '+e.message,'Error');}
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
/* ============================================================
   ACCOUNT & SETTINGS MENU (hamburger) — everything that isn't the
   social profile lives here: bookings, payments, tools, support.
   ============================================================ */
async function openAccountMenu(){go('accountMenu');if(isLoggedIn())await loadHostApp().catch(()=>{});renderAccountMenu();}
function menuGo(t){
  if(t==='signout'){signOut();return;}
  if(t==='hostDash'){openHostDash();return;}
  if(t.indexOf('soon:')===0){note(t.slice(5)+' is coming soon — we\'re building it into Tripomonk.','Coming soon');return;}
  go(t);
}
function accountMenuGroups(){
  const groups=[
    ['Account & activity',[
      ['confirmation_number','My Bookings','bookings'],
      ['favorite','Wishlist','wishlist'],
      ['bookmark','Saved Posts','soon:Saved posts'],
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
      ['checklist','Packing Lists','packing'],
      ['explore','Trek Navigation','navmap'],
      ['star','My Reviews','reviews']
    ]]
  ];
  const host=(typeof isVerifiedHost==='function'&&isVerifiedHost())
    ? [['dashboard','Host Dashboard','hostDash']]
    : [['hiking','Become a Host','becomeHost']];
  groups.push(['Hosting',host]);
  groups.push(['Support & legal',[
    ['help','Help & Support','help'],
    ['emergency','Emergency Contacts','soon:Emergency contacts'],
    ['lock','Privacy Policy','privacy'],
    ['description','Terms & Conditions','soon:Terms & Conditions'],
    ['settings','Settings','settings']
  ]]);
  return groups;
}
function renderAccountMenu(){
  const box=document.getElementById('accountMenuBody');if(!box)return;
  const row=a=>'<button type="button" class="amrow" onclick="menuGo(\''+jsq(a[2])+'\')"><span class="msr amic">'+a[0]+'</span><span class="amt">'+esc(a[1])+'</span><span class="msr amch">chevron_right</span></button>';
  let html=accountMenuGroups().map(g=>'<div class="amgrp"><div class="amgrp-h">'+esc(g[0])+'</div>'+g[1].map(row).join('')+'</div>').join('');
  const extra=[];
  if(isStaffUser())extra.push(['verified','Trip Captain Check-in','captain']);
  if(isAdminUser())extra.push(['admin_panel_settings','Admin Dashboard','admin']);
  if(extra.length)html+='<div class="amgrp">'+extra.map(row).join('')+'</div>';
  html+=isLoggedIn()
    ? '<button type="button" class="amrow amlogout" onclick="menuGo(\'signout\')"><span class="msr amic">logout</span><span class="amt">Logout</span></button>'
    : '<button type="button" class="amrow amsignin" onclick="menuGo(\'login\')"><span class="msr amic">login</span><span class="amt">Sign in / Create account</span></button>';
  box.innerHTML=html;
}
/* ---- gift cards (welcome-gift picker) ---- */
const GIFT_CARDS=[
  {file:'escape-together',name:'Escape Together'},
  {file:'explorer-buddy',name:'The Explorer Buddy'},
  {file:'solo-warrior',name:'The Solo Warrior'},
  {file:'soul-sisters',name:'The Soul Sisters'},
  {file:'story-collector',name:'The Story Collector'},
  {file:'unscripted-wanderer',name:'The Unscripted Wanderer'},
  {file:'wanderer-queen',name:'The Wanderer Queen'}
];
const GIFT_AMOUNTS=[2000,5000,8000,10000,15000];
let _giftSel=0,_giftAmt=2000;
function inr(n){return '₹'+Number(n||0).toLocaleString('en-IN');}
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
}
function renderGiftCards(){
  const row=document.getElementById('gcRow');
  if(row)row.innerHTML=GIFT_CARDS.map((g,i)=>'<div class="gc-card'+(i===_giftSel?' on':'')+'" onclick="selGift('+i+')"><img src="giftcards/'+g.file+'.svg" alt="'+esc(g.name)+'" loading="lazy"/></div>').join('');
  renderGiftAmts();
}
function renderGiftAmts(){
  const nm=document.getElementById('gcName');if(nm)nm.textContent=GIFT_CARDS[_giftSel].name;
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
  document.querySelectorAll('#gcRow .gc-card').forEach((c,j)=>c.classList.toggle('on',j===i));
  const el=document.querySelectorAll('#gcRow .gc-card')[i];if(el)el.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
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
  const gc={kind:'giftcard',amount,card:card.file,card_name:card.name,name,email,phone:getSavedMobile()||''};
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
      note('Your '+inr(amount)+' '+card.name+' gift card is ready 🎁  Code: '+code+' (copied). Redeem it in your Wallet, or share the code with a friend to gift it.','Gift card ready').then(()=>go('wallet'));
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
  if(pav){pav.style.backgroundSize='cover';pav.style.backgroundPosition='center';setAvatarEl(pav,uname,photo);}
  const pname=document.getElementById('profileName');if(pname)pname.textContent=isLoggedIn()?uname:'Guest';
  /* the Hosting hub card adapts to host status once the application loads */
  if(isLoggedIn())loadHostApp().then(()=>{const h=document.getElementById('hostHub');if(h)h.innerHTML=hostHubCard();}).catch(()=>{});
  const psub=document.getElementById('profileSub');
  if(psub){
    const un=getSavedUsername();
    psub.textContent=isLoggedIn()?(un?'@'+un:(getUserEmail()||'Trekker')):'Sign in to track your treks';
  }
  /* dynamic, tappable stat tiles — social first (posts / followers / following), trek count kept */
  const bs=getBookings();
  const trekCount=new Set(bs.map(b=>b.trek)).size;
  const following=followCount();
  const ps=document.getElementById('pStats');
  if(ps){ps.innerHTML=[
    ['grid_view',(_myPostCount>=0?_myPostCount:'…'),'Posts',"go('profile')",'pStatPosts'],
    ['group',(_myFollowerCount>=0?_myFollowerCount.toLocaleString('en-IN'):'…'),'Followers',"go('profile')",'pStatFlwr'],
    ['person_add',following,'Following',"go('profile')",'pStatFollowing'],
    ['landscape',trekCount,'Treks',"go('bookings')",'']
  ].map(s=>`<div class="pstat" onclick="${s[3]}"><b${s[4]?` id="${s[4]}"`:''}>${s[1]}</b><small>${s[2]}</small></div>`).join('');hydrate(ps);}
  if(isLoggedIn())loadMyCounts();
  renderProfileGallery();
  /* the profile is now social: only the hosting hub + social links + a guest sign-in
     prompt live here. All account/utility items moved to the hamburger (accountMenu). */
  const pb=document.getElementById('profileBio');
  if(pb){const bio=(_hostApp&&_hostApp.bio)||'';pb.textContent=bio;pb.style.display=bio?'':'none';}
  let rows=socialLinks(getSavedSocials())+fitnessProfileCard()+'<div id="hostHub">'+hostHubCard()+'</div>';
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
    }
  }catch(e){}
  if(_myPostCount<0)_myPostCount=userPosts.filter(p=>p.n===mine||p.n==='You').length;
  if(_myFollowerCount<0)_myFollowerCount=0;
  const pe=document.getElementById('pStatPosts');if(pe)pe.textContent=_myPostCount;
  const fe=document.getElementById('pStatFlwr');if(fe)fe.textContent=_myFollowerCount.toLocaleString('en-IN');
}


/* ---------- messages / chat UI ---------- */
let chatWith='Tripomonk Team';
function chatKey(n){return 'tmk_chat_'+String(n||'team').toLowerCase().replace(/[^a-z0-9]+/g,'_');}
/* Only the Tripomonk Team chat is pre-seeded — with a single welcome message.
   Every other conversation starts empty (no fake demo thread). */
function chatSeed(n){
  if(n==='Tripomonk Team'){
    const nm=getSavedName();
    return [{who:'them',txt:'Welcome to Tripomonk'+(nm?', '+nm:'')+'! 🏔️ We’re glad to have you. Message us anytime for help with bookings, payments or picking your next trek.'}];
  }
  return [];
}
function getChat(n){try{const raw=localStorage.getItem(chatKey(n));return raw?JSON.parse(raw):chatSeed(n);}catch(e){return chatSeed(n);}}
function saveChat(n,rows){try{localStorage.setItem(chatKey(n),JSON.stringify(rows));}catch(e){}}
function chatContacts(){return [{n:'Tripomonk Team',h:'Official support',bio:'Bookings, payments and trek help',flwr:0}].concat(people.slice(0,8));}
function renderMessages(){
  const recent=document.getElementById('recentChats'),list=document.getElementById('messageList');if(!recent||!list)return;
  const rows=chatContacts();
  recent.innerHTML=rows.slice(0,8).map(p=>`<div class="recent-chat" onclick="openChat('${jsq(p.n)}')"><div class="ring">${avatar(p.n,52)}</div><small>${esc(p.n.split(' ')[0])}</small></div>`).join('');
  list.innerHTML=rows.map((p,i)=>{const msgs=getChat(p.n),last=msgs[msgs.length-1]||{txt:'Start a conversation'};return `<div class="chat-row" onclick="openChat('${jsq(p.n)}')">${avatar(p.n,46)}<div class="meta"><b>${esc(p.n)}</b><p>${esc(last.txt)}</p></div><time>${i?'Yesterday':'Now'}</time></div>`;}).join('');
  hydrate(document.getElementById('messages'));
}
function openChat(n){chatWith=n||'Tripomonk Team';go('chat');}
function renderChat(){
  const head=document.getElementById('chatPerson'),thread=document.getElementById('chatThread');if(!head||!thread)return;
  head.innerHTML=`<b>${esc(chatWith)}</b><small>Usually replies soon</small>`;
  const rows=getChat(chatWith);
  thread.innerHTML=rows.map(m=>`<div class="bubble ${m.who==='me'?'me':'them'}">${esc(m.txt)}</div>`).join('');
  setTimeout(()=>{thread.scrollTop=thread.scrollHeight;},30);
}
function sendChat(){
  const input=document.getElementById('chatInput');if(!input)return;
  const txt=(input.value||'').trim();if(!txt)return;
  const rows=getChat(chatWith);rows.push({who:'me',txt});saveChat(chatWith,rows);input.value='';renderChat();
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
    box.innerHTML=`<div class="empty" style="padding:26px 0"><p>Sign in to manage your account.</p><div style="text-align:center;margin-top:14px"><button class="btn sm" onclick="_loginReturn='account';go('login')">Sign in</button></div></div>`;
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
  document.getElementById('setList').innerHTML=soundRow+setList.map(s=>{
    const action=s[2]?`go('${s[2]}')`:`note('${s[1]} - coming soon')`;
    return `<div class="mrow" onclick="${action}"><span class="ic">${ic(s[0],20)}</span><span class="t">${s[1]}</span><span class="ch" style="transform:scaleX(-1)">${ic('back',16)}</span></div>`;
  }).join('');
  hydrate(document.getElementById('settings'));
}
function calPick(el){document.querySelectorAll('#cal .grid .d').forEach(d=>{if(!d.classList.contains('off'))d.classList.remove('on');});el.classList.add('on');}
function renderSearch(){document.getElementById('searchSug').innerHTML=['Kedarkantha','Valley of Flowers','Uttarakhand','Easy treks','Roopkund'].map(s=>`<div class="chip pill" onclick="doSearch('${s}')">${s}</div>`).join('');doSearch('');const inp=document.getElementById('searchInput');if(inp&&!inp._w){inp._w=1;inp.addEventListener('input',()=>doSearch(inp.value));}}
function doSearch(q){const inp=document.getElementById('searchInput');if(inp&&q&&inp.value!==q)inp.value=q;q=(q||'').toLowerCase();
  const f=treks.filter(t=>!q||t.n.toLowerCase().includes(q)||t.region.toLowerCase().includes(q)||t.lvl.toLowerCase().includes(q));
  const el=document.getElementById('searchResults');el.innerHTML=(f.length?f:treks).map(trekCard).join('');hydrate(el);}
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
    activity=`<div class="empty" style="padding:30px 0;font-size:13px"><span class="msr" style="font-size:32px;display:block;opacity:.35;margin-bottom:8px">notifications_none</span>No activity yet. Likes, comments and follows will show here.</div>`;
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
function renderReviews(){document.getElementById('reviewList').innerHTML=reviewsData.length?reviewsData.map(reviewCard).join(''):'<div class="empty"><p>No reviews yet. Be the first to review after your trek!</p></div>';hydrate(document.getElementById('reviewList'));}
function renderHelp(){document.getElementById('faqList').innerHTML=faqs.map(f=>`<div class="panel" style="margin-bottom:10px"><b style="font-size:13.5px;display:block;margin-bottom:6px">${f[0]}</b><span style="font-size:12.5px;color:var(--muted);line-height:1.55">${f[1]}</span></div>`).join('');hydrate(document.getElementById('help'));}
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
/* base town + nearest rail/air per trek, for "Getting there" + directions */
const BASE={
  'Kedarkantha':{town:'Sankri',rail:'Dehradun (~200 km)',air:'Dehradun'},
  'Har Ki Dun':{town:'Sankri',rail:'Dehradun (~200 km)',air:'Dehradun'},
  'Brahmatal':{town:'Lohajung',rail:'Kathgodam (~215 km)',air:'Dehradun'},
  'Roopkund':{town:'Lohajung',rail:'Kathgodam (~215 km)',air:'Dehradun'},
  'Valley of Flowers':{town:'Govindghat',rail:'Rishikesh (~275 km)',air:'Dehradun'},
  'Nag Tibba':{town:'Pantwari',rail:'Dehradun (~90 km)',air:'Dehradun'},
  'Hampta Pass':{town:'Manali',rail:'Chandigarh (~310 km)',air:'Bhuntar / Kullu'}
};
function baseInfo(t){return BASE[t.n]||{town:t.region,rail:'Nearest major railhead',air:'Nearest airport'};}
function getDirections(){
  const t=cart.trek;if(!t)return;const b=baseInfo(t);const c=coordsFor(t);
  const dest=(b.town&&b.town!==t.region)?encodeURIComponent(b.town+', '+t.region+', India'):`${c[0]},${c[1]}`;
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${dest}`,'_blank','noopener');
}
function renderDetailGetting(t){
  const box=document.getElementById('dGetting');if(!box)return;const b=baseInfo(t);
  box.innerHTML=`<div class="stats">
    <div class="stat"><div class="ic" style="display:grid;place-items:center">${ic('pin',20)}</div><b>${esc(b.town)}</b><small>Base town</small></div>
    <div class="stat"><div class="ic" style="display:grid;place-items:center">${ic('distance',20)}</div><b style="font-size:11px">${esc(b.rail)}</b><small>Nearest rail</small></div>
    <div class="stat"><div class="ic" style="display:grid;place-items:center"><span class="msr" style="font-size:20px;color:var(--accent2)">flight</span></div><b>${esc(b.air)}</b><small>Airport</small></div>
  </div>
  <button class="btn ghost" style="margin-top:12px" onclick="getDirections()">${ic('pin',16)} Get directions on Google Maps</button>
  <button class="btn ghost" style="margin-top:9px" onclick="openNav(cart.trek)">${ic('distance',16)} Live trail map</button>`;
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
function trekToRow(t){return {name:t.n,region:t.region,img:(t.img||'').split('?')[0],rating:t.r,reviews:t.rev,level:t.lvl,days:t.days,altitude:t.alt,distance:t.dist,best_time:t.best,price:t.price,soon:!!t.soon,description:t.desc,packing:t.packing||null,req_score:(typeof t.req==='number'?t.req:null)};}
let editIdx=-1, adminTab='Treks', depTrek=null;
const ADM_TAB_IC={Bookings:'receipt_long',Treks:'landscape',Departures:'event',Packing:'checklist',Hosts:'groups',Staff:'badge',Settings:'settings'};
function renderAdmin(){
  document.getElementById('adminTabs').innerHTML=['Bookings','Treks','Departures','Packing','Hosts','Staff','Settings'].map(x=>`<div class="adm-tab ${x===adminTab?'on':''}" onclick="setAdminTab('${x}')"><span class="msr">${ADM_TAB_IC[x]||'circle'}</span>${x}</div>`).join('');
  const f=document.getElementById('adminForm'); if(f){f.style.display='none';f.innerHTML='';}
  if(adminTab==='Bookings')renderAdminBookings();
  else if(adminTab==='Treks')renderAdminTreks();
  else if(adminTab==='Departures')renderDepartures();
  else if(adminTab==='Packing')renderAdminPacking();
  else if(adminTab==='Hosts')renderAdminHosts();
  else if(adminTab==='Staff')renderAdminStaff();
  else renderAdminSettings();
}
async function renderAdminStaff(){
  const box=document.getElementById('adminBody');
  await loadStaff();
  const staff=[...staffSet];
  box.innerHTML=`<div class="note2" style="margin-bottom:12px">Staff you add here can open <b>Trip Captain check-in</b> (ticket scanning) with their signed-in email. Only you (the admin) see this tab.</div>`+
    (staff.length?staff.map(e=>`<div class="mrow" style="cursor:default"><span class="ic">${ic('user',18)}</span><span class="t">${esc(e)}</span><span class="ic" onclick="removeStaff('${esc(e)}')" style="color:#ff7a7a;cursor:pointer">${ic('close',18)}</span></div>`).join(''):'<div class="empty" style="padding:14px 0"><p>No staff added yet.</p></div>')+
    `<div class="panel" style="margin-top:6px"><b style="display:block;margin-bottom:8px">Add staff by email</b><div class="field"><div class="inp"><span class="ic" data-i="mail"></span><input id="staffEmail" type="email" placeholder="captain@email.com"></div></div><button class="btn sm" onclick="addStaff()">Add staff</button></div>
    <button class="btn ghost" style="margin-top:14px" onclick="go('captain')"><span class="ic" data-i="ticket"></span> Open ticket check-in / scanner</button>`;
  hydrate(box);
}
async function addStaff(){
  const inp=document.getElementById('staffEmail');const email=(inp.value||'').trim().toLowerCase();
  if(!email||!email.includes('@')){note('Enter a valid email.','Invalid');return;}
  const sb=getSupaClient();if(!sb){note('Backend not connected.','Error');return;}
  const{error}=await sb.from('staff').insert({email});
  if(error){note('Could not add staff: '+error.message,'Error');return;}
  staffSet.add(email);note('Staff added ✓');renderAdminStaff();
}
async function removeStaff(email){
  if(!(await askConfirm('Remove '+email+' from staff?','Remove staff')))return;
  const sb=getSupaClient();if(!sb)return;
  const{error}=await sb.from('staff').delete().eq('email',email);
  if(error){note('Could not remove: '+error.message,'Error');return;}
  staffSet.delete(email);note('Staff removed.');renderAdminStaff();
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
  if(ok){await loadTreks();note('Packing list saved for '+pkAdminTrek+' ✓');}
}
async function renderAdminBookings(){
  const box=document.getElementById('adminBody');
  if(!sbOn){box.innerHTML='<div class="note2">Connect Supabase to see bookings.</div>';return;}
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  const res=await adminCall('list_bookings');
  if(!res||!res.ok){box.innerHTML='<div class="note2">'+esc((res&&res.error)||'Could not load bookings.')+'</div>';return;}
  const rows=res.rows||[];
  if(!rows.length){box.innerHTML='<div class="empty"><p>No bookings yet.</p></div>';return;}
  const total=rows.reduce((s,b)=>s+(Number(b.paid)||0),0);
  const pax=rows.reduce((s,b)=>s+(Number(b.pax)||1),0);
  box.innerHTML=`<div class="adm-stat"><div><b>${rows.length}</b><small>Bookings</small></div><div><b>${pax}</b><small>Trekkers</small></div><div><b>${INR(total)}</b><small>Collected</small></div></div>`
    +`<div class="adm-hint" style="margin:0 2px 10px">Tap a booking to see the trekker's full details.</div>`
    +rows.map(admBookingCard).join('');
  hydrate(box);
}
/* a whatsapp-ready number: strip non-digits, add 91 for a bare 10-digit Indian mobile */
function waNumber(p){let d=String(p||'').replace(/\D/g,'');if(d.length===10)d='91'+d;return d;}
function admBookingCard(b){
  const wa=waNumber(b.phone);
  const paid=Number(b.paid)||0, tot=Number(b.total)||0;
  const st=b.checked_in?'Checked in':esc(b.status||'Confirmed');
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
    </div>
  </div>`;
}
function setAdminTab(t){adminTab=t;renderAdmin();}
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
      <div class="adm-tc-tags"><span class="adm-tc-lvl">${esc(t.lvl||'—')}</span><span class="adm-tc-req">Score ${req}</span></div></div>
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
  if(ok){await loadTreks();note('Departures saved for everyone ✓');}
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
/* ----- Settings ----- */
const APP_BUILD='282';   /* bump with the service-worker CACHE version — lets the admin confirm the phone is on the latest code */
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
function showAdminForm(t){const f=document.getElementById('adminForm');
  const lv=t.lvl||'Easy', img=(t.img||'').split('?')[0];
  const reqVal=(t.req!=null?t.req:''), reqAuto=t.n?trekReqScore(t):'';
  f.innerHTML=`<div class="adm-editor">
    <div class="adm-ed-head"><b>${editIdx<0?'Add a trek':'Edit trek'}</b><button class="adm-ic" onclick="closeAdminForm()" title="Close"><span class="msr">close</span></button></div>

    <div class="adm-sec">Basics</div>
    ${fld('admN','Trek name',t.n,'Kedarkantha')}
    ${fld('admReg','Region',t.region,'Uttarakhand')}
    <div class="adm-row2">
      <div class="field"><label>Difficulty</label><div class="inp"><select id="admLvl" style="all:unset;flex:1;color:var(--text)">${['Easy','Moderate','Difficult'].map(o=>`<option ${o===lv?'selected':''} style="color:#000">${o}</option>`).join('')}</select></div></div>
      <div class="field"><label>Status</label><div class="adm-status"><button type="button" class="adm-status-btn ${!t.soon?'on':''}" id="admStatusLive" onclick="admSetStatus(true)">Live</button><button type="button" class="adm-status-btn ${t.soon?'on':''}" id="admStatusSoon" onclick="admSetStatus(false)">Soon</button></div></div>
    </div>

    <div class="adm-sec">Trip details</div>
    <div class="adm-row2">${fld('admDays','Days',t.days,'5')}${fld('admAlt','Max altitude',t.alt,'12,500 ft')}</div>
    <div class="adm-row2">${fld('admDist','Distance',t.dist,'20 km')}${fld('admBest','Best time',t.best,'Dec – Apr')}</div>

    <div class="adm-sec">Pricing &amp; readiness</div>
    <div class="adm-row2">${fld('admPrice','Price (₹)',t.price,'8999')}
      <div class="field"><label>Required trek score</label><div class="inp"><input id="admReq" type="number" min="0" max="100" value="${esc(reqVal)}" placeholder="auto${reqAuto!==''?' ('+reqAuto+')':''}"></div></div></div>
    <div class="adm-hint">Leave the score blank to auto-calculate it from difficulty, altitude &amp; days.</div>

    <div class="adm-sec">Ratings</div>
    <div class="adm-row2">${fld('admRate','Rating',t.r,'4.8')}${fld('admRev','Reviews',t.rev,'860')}</div>

    <div class="adm-sec">Media</div>
    ${fld('admImg','Image URL',img,'https://…')}
    <div class="adm-imgprev" id="admImgPrev" style="${img?`background-image:url('${esc(img)}')`:''}"></div>

    <div class="adm-sec">Description</div>
    <div class="field"><textarea id="admDesc" class="adm-ta" placeholder="A short, inviting description of the trek…">${esc(t.desc||'')}</textarea></div>

    <div class="adm-ed-foot"><button class="btn ghost" onclick="closeAdminForm()">Cancel</button><button class="btn" onclick="saveTrek()"><span class="msr">check</span> Save trek</button></div>
  </div>`;
  f.style.display='block';hydrate(f);f.scrollIntoView({behavior:'smooth',block:'start'});
  const imgInp=document.getElementById('admImg');
  if(imgInp)imgInp.addEventListener('input',()=>{const p=document.getElementById('admImgPrev');if(p)p.style.backgroundImage=imgInp.value.trim()?`url('${imgInp.value.split('?')[0].replace(/'/g,'%27')}')`:'';});
}
function newTrek(){editIdx=-1;adminTab='Treks';renderAdmin();showAdminForm({lvl:'Easy',region:'Uttarakhand'});}
function editTrek(i){editIdx=i;showAdminForm(treks[i]);}
function closeAdminForm(){const f=document.getElementById('adminForm');f.style.display='none';f.innerHTML='';}
async function saveTrek(){const g=id=>document.getElementById(id);
  const reqRaw=(g('admReq')?g('admReq').value:'').trim();
  const req=reqRaw===''?null:Math.max(0,Math.min(100,parseInt(reqRaw)||0));
  const soon=g('admStatusSoon')?g('admStatusSoon').classList.contains('on'):false;
  const t={n:g('admN').value.trim()||'Untitled',region:g('admReg').value.trim()||'Uttarakhand',lvl:g('admLvl').value,
    price:parseInt(g('admPrice').value)||0,days:parseInt(g('admDays').value)||1,alt:g('admAlt').value.trim(),
    dist:g('admDist').value.trim(),best:g('admBest').value.trim(),r:parseFloat(g('admRate').value)||4.7,
    rev:g('admRev').value.trim()||'0',img:g('admImg').value.trim(),desc:g('admDesc').value.trim(),
    req:req,soon:soon};
  if(editIdx<0){treks.push(t);} else {t._id=treks[editIdx]._id;treks[editIdx]=t;}
  deriveTreks();renderHomeChips();renderHome();renderQuick();
  closeAdminForm();renderAdmin();
  /* persist to backend */
  if(!sbOn){note('Saved on this device only (Supabase not connected).');return;}
  const ok = t._id
    ? await sbWriteChecked('PATCH','treks?id=eq.'+t._id,trekToRow(t))
    : await sbWriteChecked('POST','treks',trekToRow(t));
  if(ok){await loadTreks();note('Saved for everyone ✓');}
}
async function delTrek(i){const t=treks[i];if(!(await askConfirm('Delete "'+t.n+'"? This cannot be undone.','Delete trek')))return;
  if(sbOn&&t._id){const ok=await sbWriteChecked('DELETE','treks?id=eq.'+t._id);if(!ok)return;}
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
  if(btn)btn.disabled=false;
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
  return `<div class="dcell" onclick="openDest('${d.id}')" style="background-image:url('${d.img+Q}')">
    <span class="dcell-n">${n}</span>
    <div class="dcell-b"><b>${esc(d.n)}</b><small>${esc(d.state)}</small></div></div>`;
}
function renderDests(){
  const el=document.getElementById('destList');if(!el)return;
  el.innerHTML=`<div class="dgrid">${DESTS.map(destCard).join('')}</div>`;
  hydrate(el);
}
/* ---- one destination ---- */
let curDest=null;
function openDest(id){
  const d=destById(id);if(!d){note('That destination is not available yet.','Not found');return;}
  curDest=id;go('dest');renderDest();
}
function renderDest(){
  const d=destById(curDest);if(!d)return;
  const hero=document.getElementById('destHero');if(hero)hero.style.backgroundImage=`url('${d.img+Q}')`;
  document.getElementById('destName').textContent=d.n;
  document.getElementById('destState').textContent=d.state;
  document.getElementById('destBlurb').textContent=d.blurb||'';
  const stats=[['calendar',d.best||'—','Best time'],['altitude',d.lvl||'—','Level'],['card',d.budget||'—','Avg budget']];
  document.getElementById('destStats').innerHTML=stats.map(s=>
    `<div class="stat"><div class="ic" style="display:grid;place-items:center">${ic(s[0],20)}</div><b style="font-size:11px">${esc(s[1])}</b><small>${s[2]}</small></div>`).join('');
  /* activities */
  const acts=actsFor(d.id);
  document.getElementById('destActs').innerHTML=acts.length
    ?acts.map(a=>`<div class="arow" onclick="openAct('${a.id}')">
      <div class="aph" style="background-image:url('${a.img+Q}')"></div>
      <div class="abd"><h4>${esc(a.n)}</h4><small>${esc(a.cat)} · ${esc(a.grade||'')}</small>
        <div class="atags"><i>${ic('clock',10)} ${esc(a.dur)}</i><i>${esc(a.lvl)}</i><i>Age ${a.minAge}+</i></div></div>
      <div class="apr"><b>${INR(a.price)}</b><small>per person</small></div></div>`).join('')
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
/* gear the user already owns — excluded from every recommendation */
function getOwnedGear(){try{return JSON.parse(localStorage.getItem('tmk_owngear')||'[]');}catch(e){return[];}}
function toggleOwnGear(id){const o=getOwnedGear();const i=o.indexOf(id);if(i>=0)o.splice(i,1);else o.push(id);try{localStorage.setItem('tmk_owngear',JSON.stringify(o));}catch(e){}}
function recommendGear(t){if(!t)return[];const own=getOwnedGear();return GEAR_CATALOG.filter(g=>{try{return g.when(t)&&own.indexOf(g.id)<0;}catch(e){return false;}});}
/* reusable card — the same component everywhere gear is upsold */
function gearRecoCard(t){
  const list=recommendGear(t);
  if(!list.length)return '';
  const total=list.reduce((s,g)=>s+g.price,0);
  const kit=Math.max(10,Math.round(total*0.82/10)*10);   /* ~18% bundle discount */
  const save=total-kit;
  const ctx=[t.lvl,gSnow(t)?'snow':(gCold(t)?'cold':''),gMonsoon(t)?'monsoon':''].filter(Boolean).join(' · ');
  const rows=list.map(g=>'<div class="gr-item"><span class="msr gr-ic">'+g.icon+'</span>'
    +'<div class="gr-tx"><b>'+esc(g.name)+'</b><small>₹'+g.price+'/day · '+esc(g.why)+'</small></div>'
    +'<button class="gr-own" type="button" onclick="ownGear(\''+g.id+'\')" title="I already own this">'+ic('check',13)+'</button></div>').join('');
  return '<div class="gearreco">'
    +'<div class="gr-head"><span class="gr-emoji">🎒</span><b>AI Recommended Gear</b><span class="gr-count">'+list.length+' item'+(list.length>1?'s':'')+(ctx?' · '+esc(ctx):'')+'</span></div>'
    +'<div class="gr-list">'+rows+'</div>'
    +'<div class="gr-kit"><div class="gr-kit-tx"><b>Rent the complete kit</b><small>₹'+kit+'/day'+(save>0?' · <span class="gr-save">save ₹'+save+'</span>':'')+'</small></div>'
    +'<button class="btn gr-add" onclick="rentKit(\''+jsq(t.n)+'\')">Rent kit</button></div>'
    +'<p class="gr-note">Personalised for '+esc(t.n)+' by altitude, season & difficulty. Tap ✓ on anything you already own.</p>'
    +'</div>';
}
function ownGear(id){toggleOwnGear(id);if(cart.trek)refreshGearReco(cart.trek);}
function refreshGearReco(t){
  const el=document.getElementById('dGear');if(!el)return;
  const blk=document.getElementById('dGearBlk');
  const html=gearRecoCard(t);
  if(html){el.innerHTML=html;if(blk)blk.style.display='';hydrate(el);}
  else if(blk){blk.style.display='none';}
}
function rentKit(trekName){
  const t=(treks||[]).find(x=>x.n===trekName)||cart.trek;
  const list=t?recommendGear(t):[];
  const lines=list.map(g=>'• '+g.name+' (₹'+g.price+'/day)');
  wa('Hi Tripomonk, I want to rent the recommended gear kit for '+trekName+':\n'+lines.join('\n')+'\n\nPlease confirm availability and delivery / pickup.');
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
    `<div class="pcard"><div class="p-ic">${ic(permitIcon(p[0]),22)}</div><div class="p-bd"><b>${esc(p[0])}</b><p>${esc(p[1])}</p><div class="p-ft"><span class="p-badge">${ic('clock',12)} ${esc(p[2])} · ${esc(p[3])}</span><button class="p-apply" onclick="wa('I need the ${jsq(p[0])} — please assist.')">Apply</button></div></div></div>`
  ).join(''):'<div class="empty"><p>No permits match your search.</p></div>';
  hydrate(document.getElementById('permits'));}
const ACT_GRAD=['linear-gradient(135deg,#2f6bff,#0a3aa0)','linear-gradient(135deg,#1f9e6b,#0c6b48)','linear-gradient(135deg,#ff7a59,#c43b1b)','linear-gradient(135deg,#5a8cff,#2f4fd0)','linear-gradient(135deg,#e0a200,#b06b00)','linear-gradient(135deg,#16b3c9,#0a6b88)'];
function renderActivities(){const el=document.getElementById('actList');el.className='';el.innerHTML=activitiesData.map((a,i)=>`<div class="atile"><div class="ai-banner" style="background:${ACT_GRAD[i%ACT_GRAD.length]}"><span class="msr">${IMAP[a[0]]||'sports'}</span></div><b>${a[1]}</b><small>${a[2]}</small><div class="ap">${a[3]}<button class="bk" onclick="bookActivity('${a[1].replace(/'/g,'')}','${a[3]}')">Book</button></div></div>`).join('');hydrate(document.getElementById('activities'));}
async function bookActivity(name,priceStr){
  const amount=parseInt(String(priceStr).replace(/[^\d]/g,''))||0;
  if(amount<1){note('This activity is not bookable online yet — please contact us.','Unavailable');return;}
  if(!isLoggedIn()){note('Please sign in to book this activity.','Sign in required').then(()=>{_loginReturn='activities';go('login');});return;}
  if(!window.Razorpay){note('Payment gateway is still loading — please wait a few seconds and tap Book again.','Please wait');return;}
  if(!sbOn){note('Payment service not configured. Please contact Tripomonk.','Payment error');return;}
  const leadName=getSavedName()||(getUserEmail()?getUserEmail().split('@')[0]:'Guest');
  let order;
  try{order=await rzpCall('create',{booking:{kind:'activity',activity:name,trek:name,name:leadName,email:getUserEmail()||'',phone:getSavedMobile()||''}});}
  catch(e){note('Could not reach payment service: '+e,'Payment error');return;}
  if(!order||!order.order_id){note('Could not start payment — '+((order&&order.error)?order.error:'no order returned')+' (amount ₹'+amount+')','Payment error');return;}
  const rzp=new window.Razorpay({
    key:order.key_id, order_id:order.order_id, amount:order.amount, currency:order.currency||'INR',
    name:'Tripomonk', description:name+' — Adventure Activity', image:'icons/icon-192.png',
    prefill:{name:leadName, email:getUserEmail()||''}, notes:{activity:name}, theme:{color:'#2f6bff'},
    handler:async function(response){
      const booking={kind:'activity',activity:name,trek:name,name:leadName,email:getUserEmail()||'',phone:getSavedMobile()||''};
      let res;
      try{res=await rzpCall('verify',{razorpay_order_id:response.razorpay_order_id,razorpay_payment_id:response.razorpay_payment_id,razorpay_signature:response.razorpay_signature,booking});}catch(e){res=null;}
      if(!res||!res.ok){note('Payment received but we could not verify it instantly. Our team will confirm shortly — payment ID: '+(response.razorpay_payment_id||'—'),'Verification pending');return;}
      saveUserName(leadName);
      const sbk=(res&&res.booking)||{};
      const b={id:response.razorpay_payment_id,name:leadName,trek:sbk.trek||name+' (Activity)',img:'',date:sbk.date||'To be scheduled',pax:1,total:sbk.total||amount,paid:sbk.paid||amount,ts:Date.now(),status:'Confirmed',checkedIn:false,paymentId:response.razorpay_payment_id};
      const all=getBookings();all.unshift(b);saveBookings(all);
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
/* Download: prefer YOUR uploaded PDF (itineraries/<slug>.pdf); else auto-generate a
   detailed itinerary PDF for that trek. */
function downloadItinerary(){const t=cart.trek,url='itineraries/'+itinSlug(t)+'.pdf?t='+Date.now();
  fetch(url,{method:'HEAD',cache:'no-store'}).then(r=>{
    if(r.ok){const a=document.createElement('a');a.href=url;a.setAttribute('download',itinSlug(t)+'.pdf');document.body.appendChild(a);a.click();a.remove();}
    else genItineraryPDF(t);
  }).catch(()=>genItineraryPDF(t));}
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
  const it=ITIN[t.n]||[];
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
  'Kedarkantha':62,'Brahmatal':64,'Kuari Pass':58,'Har Ki Dun':60,'Phulara Ridge':56,'Sar Pass':60,'Pindari Glacier':62,'Sandakphu':60,'Nubra Valley':58,'Bhrigu Lake':58,'Chandrakhani Pass':60,'Dodital Darwa Pass':58,'Seven Lakes':60,
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
function planSave(p){try{localStorage.setItem('tmk_plan',JSON.stringify(p));}catch(e){}}
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
}
function go(id){const el=document.getElementById(id);if(!el)return;
  stopAllMedia();
  if(id==='captain'&&!isStaffUser()){note('Trip Captain access is for staff only.','Restricted');return;}
  if((id==='admin'||id==='adminTrip')&&!isAdminUser()){note('Admin access is restricted to the account owner.','Restricted');return;}
  /* hide any live news banner when entering the login/signup flow */
  if(NO_BANNER_SCREENS.includes(id)){const b=document.getElementById('alertBanner');if(b)b.className='';}
  if(id!==cur){trackScreenLeave();hist.push(cur);try{history.pushState({s:id},'');}catch(e){}}cur=id;if(el.dataset.tab)lastTab=el.dataset.tab;
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
  if(id==='community')renderFeed();
  if(id==='person')renderPerson();
  if(id==='search')renderSearch();
  if(id==='messages')renderMessages();
  if(id==='chat')renderChat();
  if(id==='notifications')renderNotifications();
  if(id==='reviews')renderReviews();
  if(id==='help')renderHelp();
  if(id==='health')renderHealth(); else stopHealth();
  if(id==='navmap')renderNav(); else stopNav();
  if(id!=='captain')capStopScan();
  if(id==='admin')renderAdmin();
  if(id==='gear')renderGear();
  if(id==='permits')renderPermits();
  if(id==='activities')renderActivities();
  if(id==='dests')renderDests();
  if(id==='dest')renderDest();
  if(id==='act')renderAct();
  if(id==='cart')renderCart();
  if(id==='becomeHost')renderBecomeHost();
  if(id==='hostTrip')renderHostTrip();
  if(id==='hostDash')renderHostDash();
  if(id==='hostProfile')renderHostProfile();
  if(id==='community')renderFeed();
  if(id==='peopleSearch'){_peoplePool=null;setTimeout(()=>{const i=document.getElementById('peopleSearchInput');if(i){i.value='';i.focus();}searchPeople('');},80);}
  if(id==='news')renderNews();
  if(id==='passport')renderPassport();
  if(id==='packing'){pkTrek=_pkForce||(cart.trek&&cart.trek.n)||'';_pkForce='';renderPacking();}
  if(id==='bookings')renderBookings();
  if(id==='wishlist')renderWishlist();
  if(id==='profile')renderProfile();
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
/* remember the current screen + context so a refresh stays put */
function saveNav(){try{localStorage.setItem('tmk_nav',JSON.stringify({s:cur,t:(cart.trek?cart.trek.idx:0),b:(cart.booking?cart.booking.id:'')}));}catch(e){}}
function restoreNav(){try{const n=JSON.parse(localStorage.getItem('tmk_nav')||'null');if(!n||!n.s||n.s==='splash')return;
  if(typeof n.t==='number'&&treks[n.t])cart.trek=treks[n.t];
  if(!document.getElementById(n.s))return;
  if(n.s==='detail'){openDetail(n.t||0);return;}
  if(n.s==='ticket'||n.s==='success'){const b=getBookings().find(x=>x.id===n.b);if(b){openTicket(b.id);}else go('bookings');return;}
  if(n.s==='captain'){isCaptain()?go('captain'):go('profile');return;}
  if(n.s==='admin'){isAdmin()?go('admin'):go('profile');return;}
  if(n.s==='person'){go('community');return;}
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
Object.assign(window,{go,back,openDetail,setHomeFilter,filterByRegion,filterByDiff,filterAll,pickF,resetFilters,applyFilters,selBatch,trav,checkTravellers,addon,selPay,confirmBooking,openTicket,setPk,togPk,captainLogin,captainExit,captainVerify,captainTestLast,downloadItinerary,shareTrek,toggleFav,selCommTab,likePost,addPost,calPick,doSearch,wa,downloadChecklist,togGear,gearEnquire,connectWatch,openNav,toggleNav,recenterNav,adminLogin,adminExit,newTrek,editTrek,delTrek,saveTrek,closeAdminForm,saveAdminKey,setAdminTab,addBatch,delBatch,saveSettings,sendOtp,sendPhoneOtp,verifyOtp,resendOtp,continueAsGuest,signOut,saveProfile,epPickPhoto,startJourney,authTab,otpBoxInput,otpBoxKey,socialLogin,passwordAuth,togglePw,forgotPassword,searchPeople,renderPeopleResults,openPerson,toggleFollow,suggestFollow,rmPostPic,bookActivity,carScroll,deletePost,repostPost,openNews,openNewsDetail,dblLike,openDetailByName,toggleTagPerson,pkAddItem,pkDelItem,savePackingAdmin,dismissAlert,cfTapCard,cfOpenCard,setTheme,renderMessages,openChat,renderChat,sendChat,openPackingFor,renderPermits,filterByCity,getDirections,addStaff,removeStaff,togglePref,savePrefs,skipOnboarding,capScan,capStopScan,setProfTab});

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
renderHomeNews();     /* trek news & alerts strip on home */
refreshNotifBadge();  /* show red dot if there's new community activity */
setInterval(refreshNotifBadge,60000);  /* poll for new activity every minute */
handleDeepLink();     /* open a trek directly from a shared link */
/* ---- pull-to-refresh ---- */
/* soft refresh — reloads the current screen's data in the background, no page reload / no layout shift */
async function refreshCurrent(){
  try{
    await loadTreks();
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
function hwReset(){_hwStep=0;_hwAns={host_type:'',experiences:[],destinations:[],experience_level:'',group_size:'',languages:[],hosting_style:[],acquisition:[],audience_size:'',why_host:'',basic:{},socials:{},bio:''};
  /* prefill basic + socials from the signed-in profile */
  _hwAns.basic={bd_name:getSavedName()||'',bd_mobile:getSavedMobile()||'',bd_whatsapp:getSavedMobile()||'',bd_email:getUserEmail()||'',bd_city:'',bd_dob:''};
  const soc=getSavedSocials()||{};
  _hwAns.socials={so_insta:soc.instagram||'',so_yt:soc.youtube||'',so_fb:soc.facebook||'',so_li:soc.linkedin||'',so_web:soc.website||''};
}
function hwPick(key,val){_hwAns[key]=val;renderHostWizard();}
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
  if(st.type==='form'){hwSaveForm();return st.fields.filter(f=>f[3]).every(f=>(_hwAns[st.key][f[0]]||'').trim());}
  return true;
}
function hwNext(){
  const st=HOST_WIZARD[_hwStep];
  if(st.type==='form')hwSaveForm();if(st.type==='bio')hwSaveBio();
  if(!hwStepValid()){toast(st.type==='multi'?'Please select at least one':'Please complete this step');return;}
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
  const sb=getSupaClient();const uid=sb?await authUid():null;
  if(!sb||!uid){note('Please sign in to apply.','Sign in required');return;}
  const btn=document.querySelector('#hostBody .hw-nav .btn:not(.ghost)');
  if(btn){btn.disabled=true;btn.textContent='Submitting…';}
  /* flat columns keep the admin view working; `answers` holds the full structured response */
  const row={user_id:uid,full_name:name,mobile:mobile,city:b.bd_city||'',
    instagram:s.so_insta||'',youtube:s.so_yt||'',website:s.so_web||'',
    languages:(_hwAns.languages||[]).join(', '),experience:_hwAns.experience_level||'',
    trip_types:(_hwAns.experiences||[]).join(', '),destinations:(_hwAns.destinations||[]).join(', '),
    about:_hwAns.bio||'',status:'pending',commission_pct:10,commission_consent:true,consent_at:new Date().toISOString(),
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
  /* await, then re-render — otherwise the status screen paints behind the modal
     and the applicant never sees that their application actually landed */
  await note('Application received. We usually review within 2–3 days and may message you on WhatsApp.','Submitted ✓');
  await loadHostApp();     /* pull the row back so the status screen is real, not assumed */
  renderBecomeHost();
}

/* ---- admin: review host applications ---- */
const instaUrl=h=>{h=String(h||'').trim();if(/^https?:/i.test(h))return h;return 'https://instagram.com/'+h.replace(/^@/,'');};

async function renderAdminHosts(){
  const box=document.getElementById('adminBody');if(!box)return;
  box.innerHTML='<div class="skel skel-card" style="height:90px"></div>';
  const sb=getSupaClient();if(!sb)return;
  const r=await sb.from('host_applications').select('*').order('created_at',{ascending:false});
  if(r.error){box.innerHTML='<div class="empty"><p>Could not load applications: '+esc(r.error.message)+'</p></div>';return;}
  const apps=r.data||[];
  const pending=apps.filter(a=>a.status==='pending');
  box.innerHTML=(!apps.length?'<div class="empty" style="padding:20px 0"><p>No host applications yet.</p></div>':'')
    +(pending.length?'<p class="host-note" style="margin:0 0 12px">'+pending.length+' awaiting review</p>':'')
    +apps.map(a=>{
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
    }).join('');
  await renderAdminTrips(box);
  hydrate(box);
}
/* trips submitted by hosts, newest first — drafts get Publish/Reject */
async function renderAdminTrips(box){
  const sb=getSupaClient();if(!sb)return;
  const r=await sb.from('host_trips').select('*').order('created_at',{ascending:false});
  if(r.error||!r.data||!r.data.length)return;
  await resolveHostNames(r.data);
  const drafts=r.data.filter(t=>t.status==='draft').length;
  box.insertAdjacentHTML('beforeend',
    '<div class="rv-sec"><h2>Host trips</h2>'
    +(drafts?'<span class="rv-count">'+drafts+' to review</span>':'')
    +'</div>'
    +r.data.map(adminTripCard).join(''));
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
  renderAdminHosts();
}

/* ============================================================
   HOST · CREATE A TRIP
   Drafts only. Nothing a host submits can go live without admin review —
   that rule is enforced by RLS, not by this screen.
   ============================================================ */
const HT_DIFF=['Easy','Moderate','Difficult'];

function htChip(list,sel,fn){
  return list.map(o=>'<span class="tap '+(sel.includes(o)?'sel':'')+'" onclick="'+fn+'(\''+jsq(o)+'\')">'+esc(o)+'</span>').join('');
}
function toggleInc(o){const i=_htInc.indexOf(o);i>=0?_htInc.splice(i,1):_htInc.push(o);renderHostTrip();}
function toggleExc(o){const i=_htExc.indexOf(o);i>=0?_htExc.splice(i,1):_htExc.push(o);renderHostTrip();}
function renderHostTrip(){
  const d=document.getElementById('htDiff');
  if(d)d.innerHTML=HT_DIFF.map(x=>'<span class="tap '+(_htDiff===x?'sel':'')+'" onclick="pickHtDiff(\''+x+'\')">'+x+'</span>').join('');
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
    return r.data||[];}catch(e){return [];}
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
  renderAdminHosts();
}

/* ============================================================
   HOME · HOST TRIPS
   A rail of live host trips. Until any exist, the same slot recruits
   hosts instead — an empty section on the home screen is dead space.
   ============================================================ */
/* verified hosts for the home rail. name is required — a badged profile with a
   null name cannot be rendered or opened, so it is excluded rather than shown blank. */
async function loadVerifiedHosts(){
  const sb=getSupaClient();if(!sb){verifiedHosts=[];return;}
  try{
    const r=await sb.from('profiles').select('name,username,is_host')
      .eq('is_host',true).not('name','is',null).limit(12);
    verifiedHosts=(r.data||[]).filter(h=>String(h.name||'').trim());
    verifiedHosts.forEach(h=>{hostByName[h.name]=true;});
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
async function loadLiveHostTrips(){
  const sb=getSupaClient();if(!sb){liveHostTrips=[];return;}
  try{
    const r=await sb.from('host_trips').select('*').eq('status','live')
      .gte('start_date',todayISO(0)).order('start_date',{ascending:true}).limit(10);
    liveHostTrips=await resolveHostNames(r.data||[]);
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
    +'<small>'+esc(String(h.name).split(' ')[0])+'</small>'
    +'<span class="vhtick"><span class="msr">check</span></span></div>';
}
function renderVerifiedHostsRail(){
  if(!verifiedHosts.length)return '';
  return '<div class="sec" style="margin-top:20px"><h2>Verified Hosts</h2>'
    +'<a onclick="go(\'becomeHost\')">Become one</a></div>'
    +'<div class="vhostrail">'+verifiedHosts.map(verifiedHostChip).join('')+'</div>';
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
  const when=t.start_date?new Date(t.start_date+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):'';
  const dateRange=when+(t.end_date?' → '+new Date(t.end_date+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short'}):'');
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
    +(t.inclusions?`<div class="blk" style="padding:0"><h2>What's included</h2><p style="white-space:pre-line">${esc(t.inclusions)}</p></div>`:'')
    +(t.exclusions?`<div class="blk" style="padding:0"><h2>Not included</h2><p style="white-space:pre-line">${esc(t.exclusions)}</p></div>`:'')
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
      const b={id:response.razorpay_payment_id,name,trek:sbk.trek||t.title,img:t.img||'',date:sbk.date||t.start_date||'As scheduled',pax:_htvPax,total:sbk.total||(t.price*_htvPax),paid:sbk.paid,ts:Date.now(),status:'Confirmed (advance paid)',checkedIn:false,paymentId:response.razorpay_payment_id};
      const all=getBookings();all.unshift(b);saveBookings(all);
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
  const base=window.location.origin+window.location.pathname.replace(/index\.html$/,'');
  const slug=slugify(title);
  return base+'#trip='+(slug||encodeURIComponent(id));
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
