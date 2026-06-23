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
function hydrate(root){(root||document).querySelectorAll('[data-i]').forEach(el=>{el.innerHTML=ic(el.dataset.i,+el.dataset.sz||20);el.removeAttribute('data-i');});}

/* ---------- data ---------- */
const U='https://images.unsplash.com/photo-';
const Q='?auto=format&fit=crop&w=900&q=70';
const HL=[['summit','Summit View'],['snow','Snow Trails'],['pine','Pine Forest'],['tent','Camping']];
const treks=[
  {n:"Kedarkantha",region:"Uttarakhand",img:U+"1513614835783-51537729c8ba",r:4.8,rev:"1.2k",lvl:"Easy",days:5,alt:"12,500 ft",dist:"20 km",best:"Dec – Apr",price:6499,
   desc:"Kedarkantha is the perfect winter trek for beginners. It offers stunning views, snow-covered trails and an unforgettable summit."},
  {n:"Brahmatal",region:"Uttarakhand",img:U+"1644902560705-740850bc47b8",r:4.7,rev:"860",lvl:"Moderate",days:6,alt:"12,250 ft",dist:"22 km",best:"Dec – Mar",price:8999,
   desc:"Ridge walks with grand views of Mt. Trishul and Nanda Ghunti, plus the legendary frozen Brahmatal lake."},
  {n:"Valley of Flowers",region:"Uttarakhand",img:U+"1756847845343-7a1053567775",r:4.9,rev:"2.0k",lvl:"Moderate",days:6,alt:"14,100 ft",dist:"38 km",best:"Jul – Sep",price:9499,
   desc:"A UNESCO World Heritage site that bursts into hundreds of alpine flowers in the monsoon, paired with Hemkund Sahib."},
  {n:"Hampta Pass",region:"Himachal",img:U+"1644902560705-740850bc47b8",r:4.7,rev:"890",lvl:"Moderate",days:5,alt:"14,100 ft",dist:"26 km",best:"Jun – Sep",price:9999,soon:true,
   desc:"A dramatic crossover trek from the green Kullu valley to the barren landscapes of Lahaul — a trek of two worlds."},
  {n:"Har Ki Dun",region:"Uttarakhand",img:U+"1732510951898-416631a45e35",r:4.8,rev:"740",lvl:"Moderate",days:7,alt:"11,700 ft",dist:"44 km",best:"Apr – Jun",price:10499,
   desc:"The 'Valley of Gods' — ancient villages, the Swargarohini massif and gentle river-side camps."},
  {n:"Nag Tibba",region:"Uttarakhand",img:U+"1714744715493-ad89b7ff503e",r:4.6,rev:"1.5k",lvl:"Easy",days:2,alt:"9,915 ft",dist:"16 km",best:"Oct – Mar",price:3499,
   desc:"The perfect weekend trek from Dehradun — summit views of the Bandarpunch range in a single night out."},
  {n:"Roopkund",region:"Uttarakhand",img:U+"1718429205172-0d91b73ab23c",r:4.7,rev:"410",lvl:"Difficult",days:8,alt:"15,750 ft",dist:"53 km",best:"May – Jun",price:13999,
   desc:"The mysterious skeleton lake — a demanding high-altitude classic for experienced trekkers."},
  /* ---- Coming soon (other regions) ---- */
  {n:"Triund",region:"Himachal",img:U+"1606898296502-40d8c37e994b",r:4.6,rev:"—",lvl:"Easy",days:2,alt:"9,350 ft",dist:"14 km",best:"Mar – Jun",price:4999,soon:true,desc:"A short, scenic ridge trek above McLeod Ganj with sweeping views of the Dhauladhar range."},
  {n:"Bhrigu Lake",region:"Himachal",img:U+"1629976791862-5749e12b2f40",r:4.7,rev:"—",lvl:"Moderate",days:4,alt:"14,100 ft",dist:"25 km",best:"May – Oct",price:9499,soon:true,desc:"High-altitude alpine lake above Manali, reached through rolling meadows."},
  {n:"Kashmir Great Lakes",region:"Kashmir",img:U+"1756847845343-7a1053567775",r:4.9,rev:"—",lvl:"Moderate",days:7,alt:"13,800 ft",dist:"72 km",best:"Jul – Sep",price:16999,soon:true,desc:"India's most beautiful trek — a string of alpine lakes set in emerald meadows."},
  {n:"Tarsar Marsar",region:"Kashmir",img:U+"1732510291351-43c68b3ca022",r:4.8,rev:"—",lvl:"Moderate",days:6,alt:"13,000 ft",dist:"48 km",best:"Jul – Sep",price:15499,soon:true,desc:"Twin almond-shaped alpine lakes in the Kashmir valley, surrounded by wildflowers."},
  {n:"Markha Valley",region:"Ladakh",img:U+"1718429205172-0d91b73ab23c",r:4.7,rev:"—",lvl:"Difficult",days:7,alt:"17,060 ft",dist:"65 km",best:"Jun – Sep",price:18999,soon:true,desc:"A classic Ladakh teahouse trek through remote villages and high passes."},
  {n:"Chadar Trek",region:"Ladakh",img:U+"1577516311194-eb14c570a137",r:4.8,rev:"—",lvl:"Difficult",days:9,alt:"11,150 ft",dist:"62 km",best:"Jan – Feb",price:24999,soon:true,desc:"The legendary walk on the frozen Zanskar river — a true winter expedition."},
  {n:"Goecha La",region:"Sikkim",img:U+"1724733613256-a1ed7936bb70",r:4.8,rev:"—",lvl:"Difficult",days:10,alt:"16,200 ft",dist:"90 km",best:"Apr – May",price:21999,soon:true,desc:"Up close with Kanchenjunga, the world's third-highest peak, through rhododendron forest."},
  {n:"Sandakphu",region:"Sikkim",img:U+"1589340532046-e505aa832cd1",r:4.6,rev:"—",lvl:"Moderate",days:6,alt:"11,930 ft",dist:"50 km",best:"Oct – Dec",price:13499,soon:true,desc:"Walk the Singalila ridge for views of four of the five highest peaks on earth."}
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
async function loadTreks(){ if(!sbOn) return;
  try{let r=await fetch(SB.SUPABASE_URL+'/rest/v1/treks?select=*&order=sort.asc',{headers:sbHeaders()});
    /* table may not have a `sort` column — retry ordering by id */
    if(!r.ok) r=await fetch(SB.SUPABASE_URL+'/rest/v1/treks?select=*&order=id.asc',{headers:sbHeaders()});
    if(!r.ok) return; const rows=await r.json(); if(!rows||!rows.length) return;
    treks.length=0;
    rows.forEach(d=>treks.push({n:d.name,region:d.region,img:d.img,r:d.rating,rev:d.reviews,lvl:d.level,days:d.days,
      alt:d.altitude,dist:d.distance,best:d.best_time,price:d.price,soon:d.soon,desc:d.description,_id:d.id}));
    deriveTreks();
    renderHomeChips(); renderHome(); renderQuick();
    if(cur==='explore') renderExplore();
  }catch(e){}}
function saveBookingRemote(b){ if(!sbOn) return;
  fetch(SB.SUPABASE_URL+'/rest/v1/bookings',{method:'POST',headers:sbHeaders({'Content-Type':'application/json',Prefer:'return=minimal'}),
    body:JSON.stringify({id:b.id,trek:b.trek,name:b.name,date:b.date,pax:b.pax,total:b.total,paid:b.paid,status:b.status,checked_in:false})}).catch(()=>{});}
/* ---- Trek News & Alerts (AI-summarized, refreshed by a scheduled function) ---- */
let _newsCache=null;
async function loadNews(){
  if(!sbOn)return[];
  try{const r=await fetch(SB.SUPABASE_URL+'/rest/v1/news?select=*&order=published_at.desc&limit=30',{headers:sbHeaders()});
    if(!r.ok)return[];_newsCache=await r.json();return _newsCache;}catch(e){return[];}
}
function newsCard(n){
  const alert=/landslide|closed|closure|weather|warning|alert|flood|rescue|avalanche|cloudburst/i.test((n.title||'')+(n.summary||''));
  const when=n.published_at?timeAgo(n.published_at):'';
  const img=n.image?`<div class="nimg" style="background-image:url('${n.image}')"></div>`:`<div class="nimg" style="display:grid;place-items:center"><span class="msr" style="color:var(--muted2);font-size:26px">newspaper</span></div>`;
  return `<div class="ncard" onclick="openNews('${(n.url||'').replace(/'/g,'')}')">${img}<div class="nbd"><span class="ntag ${alert?'alert':''}">${alert?'⚠ Alert':'Trek News'}</span><h4>${esc(n.title||'')}</h4><small>${esc(n.summary||'')}</small><div class="nmeta">${esc(n.source||'')}${when?' · '+when:''}</div></div></div>`;
}
function openNews(url){if(url)window.open(url,'_blank','noopener');}
async function renderHomeNews(){
  const box=document.getElementById('homeNews');if(!box)return;
  const list=_newsCache||await loadNews();
  if(!list||!list.length){box.innerHTML=`<div class="empty" style="padding:18px 0;font-size:12.5px;color:var(--muted)">No trek news right now — check back soon.</div>`;return;}
  box.innerHTML=list.slice(0,3).map(newsCard).join('');hydrate(box);
}
async function renderNews(){
  const box=document.getElementById('newsList');if(!box)return;
  box.innerHTML=`<div class="skel skel-card"></div><div class="skel skel-card"></div><div class="skel skel-card"></div>`;
  const list=await loadNews();
  box.innerHTML=(list&&list.length)?list.map(newsCard).join(''):`<div class="empty"><p>No trek news available right now. Fresh updates arrive a few times a day.</p></div>`;
  hydrate(box);
}
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
const people=[
  {n:"Ananya Sharma",h:"@ananya.treks",bio:"Mountain chaser • 14 summits • Kedarkantha forever ❤️",home:"Kedarkantha",flwr:1240},
  {n:"Rohit Verma",h:"@rohit.wanders",bio:"Two worlds in one trek. Lahaul calling.",home:"Hampta Pass",flwr:860},
  {n:"Karthik V.",h:"@karthik.v",bio:"First-timer turned addict. Brahmatal was magic.",home:"Brahmatal",flwr:430},
  {n:"Meera & Sam",h:"@meerasam",bio:"Couple who treks together, stays together 🌸",home:"Valley of Flowers",flwr:980},
  {n:"Dev Rana",h:"@dev.himalaya",bio:"Local guide • Uttarakhand born • DM for routes.",home:"Roopkund",flwr:2100},
  {n:"Priya Nair",h:"@priya.peaks",bio:"Weekend warrior from Dehradun. Nag Tibba regular.",home:"Nag Tibba",flwr:610}
];
const personMap={};people.forEach(p=>personMap[p.n]=p);
const ME={n:"You",h:"@you",bio:"Trekker with Tripomonk 🏔️",home:"",flwr:0};
function getPerson(n){return personMap[n]||(n==='You'?ME:{n:n,h:'@'+n.toLowerCase().replace(/[^a-z]/g,''),bio:'Tripomonk trekker',home:'',flwr:0});}
/* deterministic avatar gradient + initials from a name */
const AVG=[['#ffd27a','#ff7a59'],['#7ad1ff','#2f6bff'],['#b7f5c0','#2fb56b'],['#ffb3d9','#c44bd6'],['#ffe08a','#f59e0b'],['#c9b7ff','#7c5cff']];
function initials(n){return n.split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase();}
function avHash(n){let h=0;for(let i=0;i<n.length;i++)h=(h*31+n.charCodeAt(i))|0;return Math.abs(h);}
function avatar(n,size){size=size||38;const g=AVG[avHash(n)%AVG.length];const fs=Math.round(size*.38);
  return `<div class="av-i" onclick="openPerson('${n.replace(/'/g,"")}')" style="width:${size}px;height:${size}px;font-size:${fs}px;background:linear-gradient(135deg,${g[0]},${g[1]})">${initials(n)}</div>`;}

let postSeq=2;
const feed=[
  {id:'p1',n:"Ananya Sharma",when:"2h ago · Kedarkantha Trek",txt:"The summit view was worth every step! 🏔️ Grateful for this amazing experience.",imgs:[U+"1551632811-561732d1e306",U+"1454496522488-7a8e488e8606"],likes:124,
    comments:[{n:"Karthik V.",txt:"Stunning! Adding this to my list.",when:"1h"},{n:"Dev Rana",txt:"Glad you loved it 🙏",when:"45m"}]},
  {id:'p2',n:"Rohit Verma",when:"1d ago · Hampta Pass",txt:"From green valleys to barren landscapes, what a surreal journey!",imgs:[U+"1644902560705-740850bc47b8"],likes:88,
    comments:[{n:"Priya Nair",txt:"The crossover day is unreal isn't it!",when:"20h"}]}
];
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
function saveLikes(){try{localStorage.setItem('tmk_likes',JSON.stringify(likeState));}catch(e){}}
function savePosts(){try{localStorage.setItem('tmk_posts',JSON.stringify(userPosts));}catch(e){}}
function saveComments(){try{const cm={};allPosts().forEach(p=>{if(p.comments&&p.comments.length)cm[p.id]=p.comments;});localStorage.setItem('tmk_comments',JSON.stringify(cm));}catch(e){}}
function allPosts(){return userPosts.concat(feed);}
let _lastFeed=[];
function postById(id){return _lastFeed.find(p=>p.id===id)||allPosts().find(p=>p.id===id);}
function isFollowing(n){return !!followState[n];}
function followCount(){return Object.values(followState).filter(Boolean).length;}
function toggleFollow(n){
  const wasFollowing=!!followState[n];
  followState[n]=!followState[n];saveFollows();
  if(cur==='community')renderFeed();if(cur==='person')renderPerson();
  /* notify the user when newly followed */
  if(!wasFollowing){
    uidForName(n).then(uid=>pushNotif({recipientId:uid,recipientName:uid?null:n,type:'follow'}));
  }
}
const menu=[['bookings','My Bookings','bookings'],['shield','Trek Passport','passport'],['monitor','Trek Health','health'],['distance','Trek Navigation','navmap'],['heartmenu','My Wishlist','wishlist'],['list','Packing List','packing'],['starline','My Reviews','reviews'],['settings','Settings','settings'],['help','Help & Support','help']];
const setList=[['user','Account & security'],['bell','Notifications'],['globe','Language · English'],['card','Payment methods'],['shield','Privacy'],['help','About Tripomonk']];
const notis=[['check','Booking confirmed','Your seat is confirmed — view your e-ticket.','2m'],['bell','Pack your bags!','Your trek departs in 5 days. See the packing list.','1d'],['permits','Permit approved','Your forest permit is ready to download.','2d'],['heart','EARLYBIRD: 15% off','Winter trek discount ends soon.','3d']];
const faqs=[['How do I book a trek?','Pick a trek, choose a batch on Select Date, add travellers and pay 25% to confirm your seat.'],['What is the cancellation policy?','Free cancellation up to 15 days before departure (full refund). Within 15 days, a 50% charge applies.'],['Do you provide gear on rent?','Yes — add the gear kit (jacket, boots, poles) as an add-on at checkout.'],['Are permits included?','We arrange forest / eco-zone permits for you as an assisted service.'],['What fitness level do I need?','Easy treks suit beginners; Moderate+ need regular cardio for 3–4 weeks before.']];
const reviewsData=[['Ananya Sharma',5,'Best organised trek I have done — guides were superb and safety was clearly the priority.','Kedarkantha'],['Karthik V.',5,'First-timer and felt totally looked after. In-app gear rental saved me a lot.','Brahmatal'],['Meera & Sam',4,'Stunning route and great food. Pickup was a little delayed but handled well.','Valley of Flowers'],['Rohit Verma',5,'Permits were sorted for me, I just showed up. Worth every rupee.','Hampta Pass']];
const KNOW=[['community','8–15','Group size'],['user','10+ yrs','Min age'],['altitude','Moderate','Fitness']];
const EXCL=['Personal expenses','Travel to the base city','Anything not in inclusions'];

/* ---------- Auth ---------- */
let _supa=null,currentUser=null,_loginReturn=null,_loginEmail='';
function getSupaClient(){
  if(_supa)return _supa;
  if(!sbOn||!window.supabase)return null;
  _supa=window.supabase.createClient(SB.SUPABASE_URL,SB.SUPABASE_ANON_KEY);
  return _supa;
}
function isLoggedIn(){return!!currentUser;}
async function initAuth(){
  const sb=getSupaClient();if(!sb)return;
  /* did we just come back from an OAuth (Google) redirect? */
  const fromOAuth=/[#&](access_token|code)=/.test(window.location.hash||'')||/[?&]code=/.test(window.location.search||'');
  const{data:{session}}=await sb.auth.getSession();
  if(session){
    currentUser=session.user;
    if(fromOAuth){
      /* clean the token hash out of the URL and land on home */
      try{history.replaceState(null,'',window.location.pathname);}catch(e){}
      go('home');
    } else if(cur==='login'||cur==='splash'||cur==='otp'){
      const ret=_loginReturn;_loginReturn=null;
      go(ret||'home');
    }
  }
  sb.auth.onAuthStateChange((_,session)=>{
    currentUser=session?session.user:null;
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
  if(si&&su){
    if(mode==='signup'){
      su.style.background='var(--accent)';su.style.color='#fff';
      si.style.background='transparent';si.style.color='rgba(255,255,255,.75)';
      if(nameRow)nameRow.style.display='block';
    } else {
      si.style.background='var(--accent)';si.style.color='#fff';
      su.style.background='transparent';su.style.color='rgba(255,255,255,.75)';
      if(nameRow)nameRow.style.display='none';
    }
  }
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

function initLoginBg(){
  const bg=document.getElementById('loginBg');
  const obg=document.getElementById('otpBg');
  const img=treks&&treks[1]?treks[1].img:(treks&&treks[0]?treks[0].img:'');
  if(img){if(bg)bg.style.backgroundImage=`url('${img}')`;if(obg)obg.style.backgroundImage=`url('${img}')`;}
}

async function sendOtp(){
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
  const ph=document.getElementById('otpPhone');if(ph)ph.textContent=email;
  /* clear otp boxes */
  document.querySelectorAll('.otp-box').forEach(b=>{b.value='';b.classList.remove('filled');});
  go('otp');
  setTimeout(()=>{const b=document.querySelector('.otp-box');if(b)b.focus();},350);
}
async function resendOtp(){
  const sb=getSupaClient();if(!sb||!_loginEmail)return;
  const btn=document.getElementById('sendOtpBtn');
  await sb.auth.signInWithOtp({email:_loginEmail,options:{shouldCreateUser:true}});
  note('OTP resent to '+_loginEmail,'Sent');
}
async function verifyOtp(){
  const token=getOtpValue().trim();
  if(token.length<6){note('Enter the 6-digit OTP.','Invalid OTP');return;}
  const sb=getSupaClient();if(!sb)return;
  const btn=document.getElementById('verifyOtpBtn');if(btn){btn.textContent='Verifying…';btn.disabled=true;}
  const{data,error}=await sb.auth.verifyOtp({email:_loginEmail,token,type:'email'});
  if(btn){btn.textContent='Verify & Continue';btn.disabled=false;}
  if(error){note('Incorrect OTP. Please try again.','Wrong OTP');return;}
  currentUser=data.user;
  const ret=_loginReturn;_loginReturn=null;
  go(ret||lastTab||'home');
}
async function signOut(){
  const sb=getSupaClient();if(sb)await sb.auth.signOut();
  currentUser=null;
  /* clear personal data so the next user starts fresh */
  try{localStorage.removeItem('tmk_uname');localStorage.removeItem('tmk_contact');}catch(e){}
  hist=[];_loginReturn='home';
  go('login');
  note('Signed out successfully.','Done');
}
function getUserEmail(){return currentUser?currentUser.email||'':''}
function getSavedName(){try{return localStorage.getItem('tmk_uname')||'';}catch(e){return'';}}
function saveUserName(n){try{if(n)localStorage.setItem('tmk_uname',n);}catch(e){}}
function getSavedMobile(){try{return localStorage.getItem('tmk_umobile')||'';}catch(e){return'';}}
function getSavedPhoto(){try{return localStorage.getItem('tmk_uphoto')||'';}catch(e){return'';}}

function renderEditProfile(){
  const name=getSavedName();const mobile=getSavedMobile();const email=getUserEmail()||'';const photo=getSavedPhoto();
  const inp=id=>document.getElementById(id);
  if(inp('epName'))inp('epName').value=name;
  if(inp('epMobile'))inp('epMobile').value=mobile;
  if(inp('epEmail'))inp('epEmail').value=email;
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
}

function epPickPhoto(input){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{localStorage.setItem('tmk_uphoto',e.target.result);}catch(err){}
    renderEditProfile();
  };
  reader.readAsDataURL(file);
}

function saveProfile(){
  const name=(document.getElementById('epName').value||'').trim();
  const mobile=(document.getElementById('epMobile').value||'').trim();
  if(!name){note('Please enter your full name.','Name required');document.getElementById('epName').focus();return;}
  try{
    if(name)localStorage.setItem('tmk_uname',name);
    if(mobile)localStorage.setItem('tmk_umobile',mobile);
  }catch(e){}
  renderProfile();
  note('Profile saved successfully!','Saved ✓');
}

/* ---------- bookings + signed QR ---------- */
const CAPTAIN_SECRET='tripomonk-captain-shared-2026', CAPTAIN_CODE='TMK-CAPTAIN';
function getCaptainCode(){try{return localStorage.getItem('tmk_cap_code')||CAPTAIN_CODE;}catch(e){return CAPTAIN_CODE;}}
function getAdminCode(){try{return localStorage.getItem('tmk_admin_code')||'TMK-ADMIN';}catch(e){return 'TMK-ADMIN';}}
function getWa(){try{return localStorage.getItem('tmk_wa')||'918924813959';}catch(e){return '918924813959';}}
function genId(){return 'TMK-'+(Date.now().toString(36)+Math.random().toString(36).slice(2,4)).toUpperCase();}
function sign(s){let h1=0xdeadbeef,h2=0x41c6ce57;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677);}h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return (4294967296*(2097151&h2)+(h1>>>0)).toString(36);}
function ticketPayload(b){const core=[b.id,(b.name||'Guest').replace(/[|]/g,' '),b.trek,b.date,b.pax].join('|');return 'TMK1|'+core+'|'+sign(core+CAPTAIN_SECRET);}
function parseTicket(s){const p=(s||'').trim().split('|');if(p[0]!=='TMK1'||p.length<7)return{ok:false};const core=p.slice(1,6).join('|');return{ok:sign(core+CAPTAIN_SECRET)===p[6],id:p[1],name:p[2],trek:p[3],date:p[4],pax:p[5]};}
function getBookings(){try{return JSON.parse(localStorage.getItem('tmk_bookings')||'[]');}catch(e){return[];}}
function saveBookings(a){try{localStorage.setItem('tmk_bookings',JSON.stringify(a));}catch(e){}}
function isCaptain(){try{return localStorage.getItem('tmk_captain')==='1';}catch(e){return false;}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
const INR=n=>'₹'+Number(n).toLocaleString('en-IN');

/* ---------- render ---------- */
function trekCard(t){return `<div class="tcard" onclick="openDetail(${t.idx})"><div class="ph" style="background-image:url('${t.img}')">${t.soon?'<span class="soon">Coming Soon</span>':''}</div>
  <div class="bd"><h3>${t.n}</h3><div class="reg">${ic('pin',13)} ${t.region}</div>
  <div class="rt"><span class="star">★</span> <b>${t.r}</b> <span class="g">(${t.rev})</span></div>
  <div class="ft"><span class="tag">${ic('clock',12)} ${t.dur}</span><span class="tag">${t.lvl}</span></div></div></div>`;}
function bigCard(t){return `<div class="bigcard" onclick="openDetail(${t.idx})" style="background-image:url('${t.img}')">
  <span class="pr">${t.soon?'Coming Soon':INR(t.price)}</span>
  <div class="info"><h3>${t.n}</h3><div class="reg">${ic('pin',12)} ${t.region} · ${t.dur} · ${t.lvl}</div></div></div>`;}

let homeFilter='All';
const diffs=['All','Easy','Moderate','Difficult'];
const diffIcon={All:'treks',Easy:'pine',Moderate:'altitude',Difficult:'flame'};
function renderHomeChips(){document.getElementById('homeChips').innerHTML=diffs.map(d=>`<div class="chip ${d===homeFilter?'on':''}" onclick="setHomeFilter('${d}')"><span style="display:grid;place-items:center">${ic(diffIcon[d],20)}</span>${d==='All'?'All Treks':d}</div>`).join('');hydrate(document.getElementById('homeChips'));}
function setHomeFilter(d){homeFilter=d;renderHomeChips();renderHome();}
function trekCardH(t){return `<div class="hcard" onclick="openDetail(${t.idx})"><div class="hph" style="background-image:url('${t.img}')">${t.soon?'<span class="soon">Coming Soon</span>':''}</div>
  <div class="hbd"><h3>${t.n}</h3><div class="reg">${ic('pin',12)} ${t.region}</div>
  <div class="rt"><span class="star">★</span> <b>${t.r}</b> <span style="color:var(--muted)">(${t.rev})</span></div>
  <div class="ft"><span class="tag">${ic('clock',12)} ${t.dur}</span><span class="tag">${t.lvl}</span></div></div></div>`;}
function renderHome(){const list=homeFilter==='All'?treks:treks.filter(t=>t.lvl===homeFilter);
  document.getElementById('homeList').innerHTML=list.length?list.map(trekCardH).join(''):'<div class="empty">No treks at this level yet.</div>';hydrate(document.getElementById('homeList'));}

function renderExplore(){
  document.getElementById('regions').innerHTML=regions.map(r=>`<div class="region" onclick="filterByRegion('${r[0]}')"><div class="av" style="background-image:url('${r[1]+Q}')"></div><span>${r[0]}</span></div>`).join('');
  const dd=[['Easy','For Beginners'],['Moderate','For Trekkers'],['Difficult','For Adventurers']];
  document.getElementById('diffGrid').innerHTML=dd.map(d=>`<div class="diffc" onclick="filterByDiff('${d[0]}')"><b>${d[0]}</b><small>${d[1]}</small></div>`).join('');
  const list=exploreView||treks;
  const head=document.getElementById('topHead'); if(head)head.textContent=exploreLabel||'Top Picks For You';
  document.getElementById('exploreList').innerHTML=list.length?list.map(bigCard).join(''):`<div class="empty"><img src="illustrations/hiker-mountains.svg" alt=""/>No treks in ${esc(exploreLabel||'this filter').replace(' Treks','')} yet — more coming soon.<br><br><button class="btn sm" onclick="filterAll()">Show all treks</button></div>`;
  hydrate(document.getElementById('explore'));
}
let exploreView=null, exploreLabel='';
function scrollToPicks(){const el=document.getElementById('topSec');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function filterByRegion(r){exploreView=treks.filter(t=>t.region===r);exploreLabel=r+' Treks';renderExplore();scrollToPicks();}
function filterByDiff(d){exploreView=treks.filter(t=>t.lvl===d);exploreLabel=d+' Treks';renderExplore();scrollToPicks();}
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
function openDetailByName(n){const i=treks.findIndex(t=>t.n===n);if(i>=0)openDetail(i);else note('This trek isn’t available right now.','Not found');}
function openDetail(i){const t=treks[i];if(!t)return;cart.trek=t;
  const hh=document.getElementById('dHero');hh.style.backgroundImage=`url('${t.img}')`;hh.style.transform='';
  document.getElementById('dName').textContent=t.n;
  document.getElementById('dReg').textContent=t.region;
  document.getElementById('dRate').textContent=t.r;
  document.getElementById('dRev').textContent='('+t.rev+' reviews)';
  document.getElementById('dLvl').textContent=t.lvl;
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
  document.getElementById('dRevPrev').innerHTML=reviewsData.slice(0,2).map(reviewCard).join('');
  document.getElementById('dFav').classList.remove('on');
  const cta=document.getElementById('dCta');
  if(t.soon){cta.innerHTML=ic('bell',16)+' Coming Soon · Notify me';cta.onclick=()=>wa(t.n+' — please notify me when it goes live.');}
  else{cta.innerHTML='View Dates &amp; Price&nbsp; →';cta.onclick=()=>go('selectDate');}
  go('detail');
}
function shareTrek(){note('Share '+cart.trek.n+' — opens share sheet.');}
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
function syncReview(){const t=cart.trek;cart.gear=false;cart.permit=false;
  document.getElementById('rvPh').style.backgroundImage=`url('${t.img}')`;
  document.getElementById('rvName').textContent=t.n;
  document.getElementById('rvDate').textContent=cart.date;
  document.getElementById('rvPax').textContent=cart.pax+' trekker'+(cart.pax>1?'s':'');
  document.querySelectorAll('#review .toggle').forEach(x=>x.classList.remove('on'));
  document.getElementById('sGear').style.display='none';document.getElementById('sPermit').style.display='none';
  computeTotal();hydrate(document.getElementById('review'));
}
function addon(el,k,amt){el.classList.toggle('on');cart[k]=el.classList.contains('on');
  document.getElementById(k==='gear'?'sGear':'sPermit').style.display=cart[k]?'flex':'none';computeTotal();}
function computeTotal(){const t=cart.trek;let sum=cart.total*cart.pax;if(cart.gear)sum+=2700;if(cart.permit)sum+=350;cart.grand=sum;
  document.getElementById('sPax').textContent=cart.pax;
  document.getElementById('sBase').textContent=INR(cart.total*cart.pax);
  document.getElementById('sTot').textContent=INR(sum);
  document.getElementById('payAmt').textContent=INR(sum);
  document.getElementById('payNow').textContent=INR(Math.round(sum*0.25));}
function selPay(el){document.querySelectorAll('#payment .pay').forEach(p=>p.classList.remove('on'));el.classList.add('on');}

/* call the secure Razorpay Edge Function */
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
  const advanceAmt=Math.round(total*0.25);
  /* 1) create a server-side order (amount in paise) */
  let order;
  try{order=await rzpCall('create',{amount:advanceAmt*100,currency:'INR'});}catch(e){order=null;}
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
        booking:{trek:t.n,name:name,date:cart.date,pax:cart.pax,total:total,paid:advanceAmt,email:c.email||getUserEmail()||'',phone:c.phone||'',emergency_name:c.emName||'',emergency_phone:c.emPhone||''}
      });}catch(e){res=null;}
      if(!res||!res.ok){
        note('Payment received but we could not verify it instantly. Our team will confirm your seat shortly — please save your payment ID: '+(response.razorpay_payment_id||'—'),'Verification pending');
        return;
      }
      saveUserName(name);
      const b={id:response.razorpay_payment_id,name:name,trek:t.n,img:t.img,date:cart.date,pax:cart.pax,total:total,paid:advanceAmt,ts:Date.now(),status:'Confirmed',checkedIn:false,paymentId:response.razorpay_payment_id};
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
function renderBookings(){const bs=getBookings();
  document.getElementById('bookList').innerHTML=bs.length?bs.map(b=>`<div class="tcard" onclick="openTicket('${b.id}')"><div class="ph" style="background-image:url('${b.img}')"></div>
    <div class="bd"><h3>${b.trek}</h3><div class="rt"><span class="ic" style="color:var(--muted)">${ic('calendar',13)}</span> <span class="g">${b.date}</span></div>
    <div class="ft"><span class="tag" style="color:${b.checkedIn?'#7dd3fc':'#6ee7a0'}">${b.checkedIn?'Checked in':b.status}</span><span class="tag">${b.id}</span></div></div></div>`).join('')
    :'<div class="empty"><img src="illustrations/hiker-mountains.svg" alt=""/>No bookings yet. Find a trek and book your spot!<br><br><button class="btn sm" onclick="go(\'explore\')">Browse Treks</button></div>';
  hydrate(document.getElementById('bookList'));
}
function renderWishlist(){document.getElementById('wishList').innerHTML=treks.slice(2,5).map(trekCard).join('');hydrate(document.getElementById('wishList'));}

/* community + packing + profile */
let commTab='For You';
function renderCommTabs(){document.getElementById('commTabs').innerHTML=['For You','Following','Recent'].map(t=>`<div class="chip pill ${t===commTab?'on':''}" onclick="selCommTab('${t}')">${t}</div>`).join('');}
function selCommTab(t){commTab=t;renderFeed();}
function reviewCard(r){return `<div class="panel" style="margin-bottom:12px"><div style="display:flex;align-items:center;gap:10px;margin-bottom:7px"><div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#ffd27a,#ff7a59);display:grid;place-items:center;font-weight:600;color:#5a2a00">${r[0][0]}</div><div><b style="font-size:13px">${r[0]}</b><div class="star" style="font-size:11px">${'★'.repeat(r[1])}${'☆'.repeat(5-r[1])} <span style="color:var(--muted2)">· ${r[3]}</span></div></div></div><p style="margin:0;font-size:12.5px;color:var(--muted);line-height:1.55">${r[2]}</p></div>`;}
/* "Trekkers to follow" strip */
/* ---- people search ---- */
async function loadPeopleRemote(){
  const sb=getSupaClient();if(!sb)return[];
  /* get distinct authors from community_posts */
  const{data}=await sb.from('community_posts').select('author_name,user_id').limit(200);
  if(!data)return[];
  const seen=new Set();
  return data.filter(r=>{if(seen.has(r.author_name))return false;seen.add(r.author_name);return true;})
    .map(r=>({n:r.author_name,h:'@'+r.author_name.toLowerCase().replace(/[^a-z0-9]/g,''),bio:'Tripomonk trekker',flwr:0}));
}
function personRow(p){
  const sn=p.n.replace(/'/g,'');
  return `<div class="mrow" style="gap:12px;padding:10px 0">
    ${avatar(p.n,44)}
    <div style="flex:1;min-width:0">
      <b style="font-size:13.5px;display:block;cursor:pointer" onclick="openPerson('${sn}')">${p.n}</b>
      <span style="font-size:12px;color:var(--muted)">${p.h}</span>
      ${p.bio?`<span style="font-size:12px;color:var(--muted2);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px">${p.bio}</span>`:''}
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
    <div class="fcard">${avatar(p.n,52)}<b onclick="openPerson('${p.n.replace(/'/g,"")}')">${p.n}</b><small>${p.h}</small>
    <button class="fbtn" onclick="toggleFollow('${p.n.replace(/'/g,"")}')">Follow</button></div>`).join('')}</div>`;
  hydrate(box);}
function mediaItem(src){
  if(src.startsWith('data:video')||src.includes('.mp4')||src.includes('.mov')){
    return `<div class="slide vid" onclick="this.querySelector('video').paused?this.querySelector('video').play():this.querySelector('video').pause()">
      <video src="${src}" playsinline preload="metadata" loop></video>
      <div class="play-ic"><span class="msr" style="font-size:44px;color:rgba(255,255,255,.9);text-shadow:0 2px 12px rgba(0,0,0,.5)">play_circle</span></div>
    </div>`;}
  const url=src.startsWith('data:')?src:src+Q;
  return `<div class="slide" style="background-image:url('${url}')"></div>`;}
let likeCounts={},likedByMe={},commentCounts={};
function postCard(p){
  const liked=!!likedByMe[p.id];const nc=commentCounts[p.id]||0;
  const me=p.n==='You'||p.n===myName();const sn=p.n.replace(/'/g,'');
  const media=p.imgs&&p.imgs.length?p.imgs:[];
  const likeCount=(likeCounts[p.id]||0);
  const dots=media.length>1?`<div class="car-dots">${media.map((_,i)=>`<span class="${i===0?'on':''}"></span>`).join('')}</div>`:'';
  const follow=(!me&&!isFollowing(p.n))?` · <span class="ig-follow" onclick="toggleFollow('${sn}')">Follow</span>`:'';
  const more=me?`<span class="ig-more" onclick="deletePost('${p.id}')">${ic('trash',20)}</span>`:'';
  /* tagged trekkers chips */
  const tagged=(p.tagged&&p.tagged.length)
    ?`<div class="ig-tags">${ic('user',13)} with ${p.tagged.map(nm=>`<span class="ig-tagn" onclick="openPerson('${String(nm).replace(/'/g,'')}')">${esc(nm)}</span>`).join(', ')}</div>`:'';
  return `<div class="post">
   <div class="ig-head">
     <div class="ig-ava" onclick="openPerson('${sn}')">${avatar(p.n,34)}</div>
     <div class="ig-meta"><b onclick="openPerson('${sn}')">${p.n}</b>${follow}</div>
     ${more}
   </div>
   ${p.trek?`<div class="ig-trek" onclick="openDetailByName('${p.trek.replace(/'/g,'')}')">${ic('pin',13)} ${esc(p.trek)}</div>`:''}
   ${media.length?`<div class="car" ondblclick="dblLike('${p.id}',this)"><div class="car-track" onscroll="carScroll(this)">${media.map(mediaItem).join('')}</div>${dots}<div class="heart-burst">${ic('like',96)}</div></div>`:''}
   <div class="ig-actions">
     <div class="ig-left">
       <span class="ig-ic ${liked?'liked':''}" onclick="likePost('${p.id}')">${ic('like',26)}</span>
       <span class="ig-ic" onclick="openComments('${p.id}')">${ic('comment',26)}</span>
       <span class="ig-ic" onclick="repostPost('${p.id}')" title="Repost to your feed">${ic('repeat',24)}</span>
     </div>
     <span class="ig-ic ig-save" onclick="note('Saved to your collection.','Saved')">${ic('starline',24)}</span>
   </div>
   ${tagged}
   ${likeCount?`<div class="ig-likes">${likeCount.toLocaleString('en-IN')} like${likeCount>1?'s':''}</div>`:''}
   ${p.txt?`<div class="ig-cap ${p.txt.length>120?'clamp':''}" onclick="this.classList.remove('clamp')"><b onclick="event.stopPropagation();openPerson('${sn}')">${p.n}</b> ${esc(p.txt)}</div>`:''}
   ${nc?`<div class="ig-comments" onclick="openComments('${p.id}')">View all ${nc} comment${nc>1?'s':''}</div>`:`<div class="ig-comments" onclick="openComments('${p.id}')">Add a comment…</div>`}
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
  note('Reposted to your feed ✓');
}
function carScroll(track){
  const i=Math.round(track.scrollLeft/track.clientWidth);
  const dots=track.parentElement.querySelectorAll('.car-dots span');
  dots.forEach((d,j)=>d.classList.toggle('on',j===i));
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
  renderCommTabs();renderFollowStrip();
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
  await loadEngagement(list.map(p=>p.id));
  box.innerHTML=list.length?list.map(postCard).join(''):`<div class="empty"><p>No posts yet. Share your trek story!</p></div>`;
  hydrate(box);
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
async function likePost(id){
  if(!isLoggedIn()){note('Please sign in to like posts.','Sign in required').then(()=>{_loginReturn='community';go('login');});return;}
  const sb=getSupaClient();if(!sb)return;
  const wasLiked=!!likedByMe[id];
  /* optimistic UI */
  likedByMe[id]=!wasLiked;
  likeCounts[id]=(likeCounts[id]||0)+(wasLiked?-1:1);if(likeCounts[id]<0)likeCounts[id]=0;
  if(cur==='person')renderPerson();else renderFeed();
  if(wasLiked){
    await sb.from('post_likes').delete().eq('post_id',id).eq('user_id',currentUser.id);
  }else{
    const{error}=await sb.from('post_likes').insert({post_id:id,user_id:currentUser.id});
    if(!error){const p=postById(id);if(p&&(p.uid||p.n))pushNotif({recipientId:p.uid,recipientName:p.uid?null:p.n,type:'like',postId:id});}
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
/* ---- Supabase Storage upload ---- */
async function uploadMedia(file){
  const sb=getSupaClient();if(!sb)return null;
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
  const{error}=await sb.from('community_posts').insert({
    id:post.id,user_id:currentUser?currentUser.id:null,
    author_name:post.n,txt:post.txt||'',imgs:post.imgs||[],likes:0,trek_tag:post.trek||null,tagged:post.tagged||[]
  });
  if(error)note('Post saved locally but could not sync: '+error.message,'Sync error');
}
async function loadPostsRemote(){
  const sb=getSupaClient();if(!sb)return null;
  const{data,error}=await sb.from('community_posts').select('*').order('created_at',{ascending:false}).limit(60);
  if(error){console.error('loadPostsRemote:',error.message);return null;}
  return(data||[]).map(p=>({id:p.id,uid:p.user_id||null,n:p.author_name||'Trekker',when:timeAgo(p.created_at),txt:p.txt||'',imgs:p.imgs||[],likes:p.likes||0,comments:[],trek:p.trek_tag||'',tagged:p.tagged||[]}));
}
function timeAgo(ts){
  const s=Math.floor((Date.now()-new Date(ts))/1000);
  if(s<60)return 'just now';if(s<3600)return Math.floor(s/60)+'m ago';
  if(s<86400)return Math.floor(s/3600)+'h ago';return Math.floor(s/86400)+'d ago';
}

/* ===== Community notifications (Instagram-style, cross-user via Supabase) ===== */
function myName(){return getSavedName()||(currentUser&&currentUser.email?currentUser.email.split('@')[0]:'You');}
async function pushNotif({recipientId,recipientName,type,postId,preview}){
  const sb=getSupaClient();if(!sb)return;
  const actor=myName();
  /* never notify yourself */
  if(recipientId&&currentUser&&recipientId===currentUser.id)return;
  if(!recipientId&&recipientName&&recipientName===actor)return;
  const{error}=await sb.from('notifications').insert({
    recipient_id:recipientId||null,
    recipient_name:recipientName||null,
    actor_name:actor,
    type:type,
    post_id:postId||null,
    preview:preview||null,
    read:false
  });
  if(error)console.warn('pushNotif:',error.message);
}
/* resolve a display name to a user_id via their posts (best-effort) */
async function uidForName(name){
  const sb=getSupaClient();if(!sb||!name)return null;
  const{data}=await sb.from('community_posts').select('user_id').eq('author_name',name).not('user_id','is',null).limit(1);
  return(data&&data[0])?data[0].user_id:null;
}
async function loadNotifsRemote(){
  const sb=getSupaClient();if(!sb)return null;
  const name=myName();
  let q=sb.from('notifications').select('*').order('created_at',{ascending:false}).limit(60);
  if(currentUser)q=q.or(`recipient_id.eq.${currentUser.id},recipient_name.eq.${name}`);
  else q=q.eq('recipient_name',name);
  const{data,error}=await q;
  if(error){console.warn('loadNotifsRemote:',error.message);return null;}
  return data||[];
}
const NOTIF_ICON={like:'favorite',comment:'chat_bubble',follow:'person_add'};
function notifText(n){
  if(n.type==='like')return `<b>${n.actor_name}</b> liked your post`;
  if(n.type==='comment')return `<b>${n.actor_name}</b> commented: ${n.preview?'“'+n.preview+'”':''}`;
  if(n.type==='follow')return `<b>${n.actor_name}</b> started following you`;
  return `<b>${n.actor_name}</b> interacted with you`;
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
async function refreshNotifBadge(){
  const dot=document.getElementById('notifDot');if(!dot)return;
  const remote=await loadNotifsRemote();
  const lastSeen=+(localStorage.getItem('tmk_notif_seen')||0);
  const unread=(remote||[]).filter(n=>new Date(n.created_at).getTime()>lastSeen).length;
  dot.style.display=unread>0?'block':'none';
  /* play a chime when NEW activity arrives (not on first load) */
  if(_lastUnread>=0&&unread>_lastUnread)playNotifSound();
  _lastUnread=unread;
}

/* ---- Post composer ---- */
let postImgs=[],postFileRefs=[],postTags=[];
function renderTagList(){
  const box=document.getElementById('postTagList');if(!box)return;
  const mine=myName();
  const followed=people.filter(p=>isFollowing(p.n)&&p.n!==mine);
  const others=people.filter(p=>!isFollowing(p.n)&&p.n!==mine);
  const list=[...followed,...others];
  if(!list.length){box.innerHTML='<span style="font-size:12px;color:var(--muted2)">Follow trekkers to tag them.</span>';return;}
  box.innerHTML=list.map(p=>`<span class="tag-chip ${postTags.includes(p.n)?'on':''}" onclick="toggleTagPerson('${p.n.replace(/'/g,'')}')">${avatar(p.n,18)} ${esc(p.n)}</span>`).join('');
  hydrate(box);
}
function toggleTagPerson(n){
  const i=postTags.indexOf(n);
  if(i>=0)postTags.splice(i,1);else postTags.push(n);
  renderTagList();
}
function renderPostPics(){const box=document.getElementById('postPics');
  box.innerHTML=postImgs.map((src,i)=>{
    const isVid=src.startsWith('data:video');
    const inner=isVid
      ?`<video src="${src}" style="width:100%;height:100%;object-fit:cover;border-radius:12px" muted playsinline></video><span class="msr" style="position:absolute;bottom:4px;left:5px;font-size:16px;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.7)">videocam</span>`
      :``;
    return `<div class="pp" style="${isVid?'':'background-image:url(\''+src+'\')'};position:relative">${inner}<button onclick="rmPostPic(${i})" style="position:absolute;top:-7px;right:-7px;z-index:2">${ic('close',13)}</button></div>`;
  }).join('');
  hydrate(box);}
function rmPostPic(i){postImgs.splice(i,1);postFileRefs.splice(i,1);renderPostPics();}
function addPost(){
  /* posting now requires an account (DB policies reject anonymous writes) */
  if(!isLoggedIn()){
    note('Please sign in to share with the community.','Sign in required').then(()=>{_loginReturn='community';go('login');});
    return;
  }
  postImgs=[];postFileRefs=[];
  const m=document.getElementById('postModal'),ta=document.getElementById('postText'),
    files=document.getElementById('postFiles'),ok=document.getElementById('postOk'),cn=document.getElementById('postCancel');
  ta.value='';renderPostPics();
  /* populate trek tag dropdown */
  const sel=document.getElementById('postTrek');
  if(sel)sel.innerHTML='<option value="">📍 Tag a trek (optional)</option>'+treks.map(t=>`<option value="${esc(t.n)}">${esc(t.n)}</option>`).join('');
  /* populate people-tag chips (people you follow first, then others) */
  postTags=[];renderTagList();
  document.getElementById('postAddIc').innerHTML=ic('camera',18);hydrate(document.getElementById('postAddIc').parentElement);
  m.classList.add('show');setTimeout(()=>ta.focus(),80);
  function close(){m.classList.remove('show');files.onchange=ok.onclick=cn.onclick=m.onclick=null;ok.textContent='Post';ok.disabled=false;}
  files.onchange=e=>{[...e.target.files].slice(0,4-postImgs.length).forEach(f=>{
    postFileRefs.push(f);
    const r=new FileReader();r.onload=ev=>{postImgs.push(ev.target.result);renderPostPics();};r.readAsDataURL(f);
  });files.value='';};
  ok.onclick=async()=>{
    const txt=ta.value.trim();if(!txt&&!postFileRefs.length){close();return;}
    ok.textContent='Uploading…';ok.disabled=true;
    /* upload each file to Supabase Storage */
    const mediaUrls=[];
    for(let i=0;i<postFileRefs.length;i++){
      const url=await uploadMedia(postFileRefs[i]);
      mediaUrls.push(url||postImgs[i]); /* fallback to base64 if upload fails */
    }
    const authorName=getSavedName()||( currentUser?( currentUser.email?currentUser.email.split('@')[0]:'Trekker'):'You');
    const trekTag=(document.getElementById('postTrek')||{}).value||'';
    const post={id:'p'+Date.now(),uid:currentUser?currentUser.id:null,n:authorName,when:'just now',txt:txt||'',imgs:mediaUrls,likes:0,comments:[],trek:trekTag,tagged:postTags.slice()};
    userPosts.unshift(post);
    savePosts();
    await savePostRemote(post);
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
  setTimeout(()=>inp.focus(),80);
  function close(){m.classList.remove('show');ok.onclick=cl.onclick=inp.onkeydown=m.onclick=null;}
  async function send(){
    const v=inp.value.trim();if(!v)return;
    if(!isLoggedIn()){note('Please sign in to comment.','Sign in required').then(()=>{close();_loginReturn='community';go('login');});return;}
    const sb=getSupaClient();if(!sb)return;
    inp.value='';
    const{error}=await sb.from('post_comments').insert({post_id:id,user_id:currentUser.id,author_name:myName(),txt:v});
    if(error){note('Could not post comment: '+error.message,'Error');return;}
    if(p.uid||p.n)pushNotif({recipientId:p.uid,recipientName:p.uid?null:p.n,type:'comment',postId:id,preview:v.slice(0,60)});
    commentCounts[id]=(commentCounts[id]||0)+1;
    await loadComments(id);
  }
  ok.onclick=send;inp.onkeydown=e=>{if(e.key==='Enter')send();};
  cl.onclick=close;m.onclick=e=>{if(e.target===m)close();};
}
async function loadComments(id){
  const sb=getSupaClient();
  if(sb){try{const{data}=await sb.from('post_comments').select('*').eq('post_id',id).order('created_at',{ascending:true});cmList=data||[];}catch(e){cmList=[];}}
  commentCounts[id]=cmList.length;
  renderComments();
}
function renderComments(){
  const list=document.getElementById('cmList');if(!list)return;
  document.getElementById('cmCount').textContent=cmList.length?cmList.length+(cmList.length>1?' comments':' comment'):'No comments yet';
  list.innerHTML=cmList.length?cmList.map(c=>`<div class="cm"><div class="cm-h">${avatar(c.author_name||'Trekker',30)}<div><b>${esc(c.author_name||'Trekker')}</b> <small>${timeAgo(c.created_at)}</small></div></div><p>${esc(c.txt)}</p></div>`).join(''):`<div class="cm-empty">Be the first to comment 💬</div>`;
  hydrate(list);
}
/* ---------- person profile ---------- */
let curPerson=null;
function openPerson(n){curPerson=n;go('person');}
async function loadUserPosts(name){
  const sb=getSupaClient();let remote=[];
  if(sb){try{const{data}=await sb.from('community_posts').select('*').eq('author_name',name).order('created_at',{ascending:false});
    remote=(data||[]).map(p=>({id:p.id,uid:p.user_id||null,n:p.author_name||'Trekker',when:timeAgo(p.created_at),txt:p.txt||'',imgs:p.imgs||[],trek:p.trek_tag||''}));}catch(e){}}
  const localNew=userPosts.filter(p=>p.n===name&&!remote.find(r=>r.id===p.id));
  return [...localNew,...remote];
}
function gridCell(p){
  const media=(p.imgs&&p.imgs.length)?p.imgs[0]:'';
  const isVid=media&&(media.startsWith('data:video')||/\.(mp4|mov)/.test(media));
  const url=media?(media.startsWith('data:')?media:media+Q):'';
  const badge=p.imgs&&p.imgs.length>1?`<span class="g-multi msr">filter_none</span>`:(isVid?`<span class="g-multi msr">play_arrow</span>`:'');
  const inner=media?(isVid?`<video src="${media}" muted playsinline></video>`:`<div class="g-img" style="background-image:url('${url}')"></div>`):`<div class="g-img g-txt">${esc((p.txt||'').slice(0,40))}</div>`;
  return `<div class="g-cell" onclick="openComments('${p.id}')">${inner}${badge}</div>`;
}
async function renderPerson(){if(!curPerson){go('community');return;}const p=getPerson(curPerson);if(!p)return;
  const me=p.n==='You'||p.n===myName();
  const body=document.getElementById('personBody');
  body.innerHTML=`<div class="prof-top">${avatar(p.n,84)}<h2>${p.n}</h2><div class="handle">${p.h}</div></div><div class="skel skel-card" style="height:120px;margin:16px 0"></div>`;
  const posts=await loadUserPosts(p.n);
  await loadEngagement(posts.map(x=>x.id));
  const flwr=(p.flwr||0)+(isFollowing(p.n)?1:0);
  body.innerHTML=`
    <div class="prof-top">${avatar(p.n,84)}
      <h2>${p.n}</h2><div class="handle">${p.h}</div>
      <p class="pbio">${p.bio||''}</p>
      <div class="pstats"><div><b>${posts.length}</b><small>Posts</small></div><div><b>${flwr.toLocaleString()}</b><small>Followers</small></div><div><b>${me?followCount():'—'}</b><small>Following</small></div></div>
      ${me?'':`<button class="btn ${isFollowing(p.n)?'ghost':''}" style="margin-top:14px" onclick="toggleFollow('${p.n.replace(/'/g,"")}')">${isFollowing(p.n)?'Following ✓':'Follow'}</button>`}
    </div>
    <div class="sec-h" style="margin:18px 4px 8px"><b>Posts</b></div>
    ${posts.length?`<div class="pgrid">${posts.map(gridCell).join('')}</div>`:`<div class="empty"><p>${me?'You have not posted yet.':'No posts yet.'}</p></div>`}`;
  hydrate(body);}
let pkTab='Essentials',pkDone={};
function renderPacking(){
  document.getElementById('pkTabs').innerHTML=Object.keys(packing).map(k=>`<div class="chip pill ${k===pkTab?'on':''}" onclick="setPk('${k}')">${k}</div>`).join('');
  document.getElementById('pkList').innerHTML=packing[pkTab].map((it,i)=>{const key=pkTab+i;return `<div class="pk ${pkDone[key]?'done':''}" onclick="togPk('${key}')"><span class="ic">${ic(it[0],20)}</span><span class="t">${it[1]}</span><span class="box">${ic('check',14)}</span></div>`;}).join('');
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
function renderProfile(){document.getElementById('pCover').style.backgroundImage=`url('${treks[0].img}')`;
  const uname=getSavedName()||'Explorer';const photo=getSavedPhoto();
  const pav=document.getElementById('profileAv');
  if(pav){
    if(photo){pav.style.backgroundImage=`url('${photo}')`;pav.style.backgroundSize='cover';pav.style.backgroundPosition='center';pav.textContent='';}
    else{pav.style.backgroundImage='';pav.textContent=(uname[0]||'E').toUpperCase();}
  }
  const pname=document.getElementById('profileName');if(pname)pname.textContent=isLoggedIn()?uname:'Guest';
  const psub=document.getElementById('profileSub');if(psub)psub.textContent=isLoggedIn()?(getUserEmail()||'Trekker'):'Sign in to track your treks';
  /* dynamic, tappable stat tiles */
  const bs=getBookings();
  const upcoming=bs.filter(b=>!b.checkedIn).length;
  const completed=bs.filter(b=>b.checkedIn).length;
  const trekCount=new Set(bs.map(b=>b.trek)).size;
  const badges=computePassport().earned; /* match the Trek Passport badge count */
  const ps=document.getElementById('pStats');
  if(ps){ps.innerHTML=[
    ['landscape',trekCount,'Treks',"go('bookings')"],
    ['calendar',upcoming,'Upcoming',"go('bookings')"],
    ['check',completed,'Completed',"go('bookings')"],
    ['shield',badges,'Badges',"go('passport')"]
  ].map(s=>`<div class="pstat" onclick="${s[3]}"><b>${s[1]}</b><small>${s[2]}</small></div>`).join('');hydrate(ps);}
  let rows=menu.map(m=>`<div class="mrow" onclick="${m[2]?`go('${m[2]}')`:'void 0'}"><span class="ic">${ic(m[0],20)}</span><span class="t">${m[1]}</span><span class="ch">${ic('back',16)}</span></div>`).join('');
  rows+=isLoggedIn()
    ?`<div class="mrow" onclick="signOut()"><span class="ic">${ic('logout',20)}</span><span class="t" style="color:#ff7a7a">Sign out</span></div>`
    :`<div class="mrow" onclick="go('login')"><span class="ic">${ic('user',20)}</span><span class="t" style="color:var(--accent2)">Sign in / Create account</span><span class="ch">${ic('back',16)}</span></div>`;
  rows+=isCaptain()
    ?`<div class="mrow" onclick="go('captain')"><span class="ic">${ic('shield',20)}</span><span class="t">Trip Captain Check-in</span><span class="ch">${ic('back',16)}</span></div><div class="mrow" onclick="captainExit()"><span class="ic">${ic('logout',20)}</span><span class="t">Exit captain mode</span></div>`
    :`<div class="mrow" onclick="captainLogin()"><span class="ic">${ic('lock',20)}</span><span class="t">Staff / Captain login</span><span class="ch">${ic('back',16)}</span></div>`;
  rows+=isAdmin()
    ?`<div class="mrow" onclick="go('admin')"><span class="ic">${ic('edit',20)}</span><span class="t">Admin · Manage treks</span><span class="ch">${ic('back',16)}</span></div><div class="mrow" onclick="adminExit()"><span class="ic">${ic('logout',20)}</span><span class="t">Exit admin</span></div>`
    :`<div class="mrow" onclick="adminLogin()"><span class="ic">${ic('settings',20)}</span><span class="t">Admin login</span><span class="ch">${ic('back',16)}</span></div>`;
  document.getElementById('menu').innerHTML=rows;
  const cover=document.getElementById('pCover');cover.querySelectorAll('.ch').forEach(c=>c.style.transform='rotate(180deg)');
  document.querySelectorAll('#menu .ch svg').forEach(s=>s.style.transform='scaleX(-1)');
  hydrate(document.getElementById('profile'));
  document.querySelectorAll('#menu .ch svg').forEach(s=>s.style.transform='scaleX(-1)');
}
function renderSettings(){document.getElementById('setList').innerHTML=setList.map(s=>`<div class="mrow" onclick="note('${s[1]} — coming soon')"><span class="ic">${ic(s[0],20)}</span><span class="t">${s[1]}</span><span class="ch" style="transform:scaleX(-1)">${ic('back',16)}</span></div>`).join('');hydrate(document.getElementById('setList'));}
function calPick(el){document.querySelectorAll('#cal .grid .d').forEach(d=>{if(!d.classList.contains('off'))d.classList.remove('on');});el.classList.add('on');}
function renderSearch(){document.getElementById('searchSug').innerHTML=['Kedarkantha','Valley of Flowers','Uttarakhand','Easy treks','Roopkund'].map(s=>`<div class="chip pill" onclick="doSearch('${s}')">${s}</div>`).join('');doSearch('');const inp=document.getElementById('searchInput');if(inp&&!inp._w){inp._w=1;inp.addEventListener('input',()=>doSearch(inp.value));}}
function doSearch(q){const inp=document.getElementById('searchInput');if(inp&&q&&inp.value!==q)inp.value=q;q=(q||'').toLowerCase();
  const f=treks.filter(t=>!q||t.n.toLowerCase().includes(q)||t.region.toLowerCase().includes(q)||t.lvl.toLowerCase().includes(q));
  const el=document.getElementById('searchResults');el.innerHTML=(f.length?f:treks).map(trekCard).join('');hydrate(el);}
async function renderNotifications(){
  const box=document.getElementById('notiList');
  const lastSeen=+(localStorage.getItem('tmk_notif_seen')||0);
  /* demo / system notifications */
  const sysRows=notis.map(n=>`<div class="mrow" style="align-items:flex-start;cursor:default"><span class="ic" style="color:var(--accent2);margin-top:1px">${ic(n[0],20)}</span><div class="t" style="font-weight:400"><b style="font-size:13.5px;display:block">${n[1]}</b><span style="font-size:12px;color:var(--muted)">${n[2]}</span></div><span style="font-size:10px;color:var(--muted2)">${n[3]}</span></div>`).join('');
  box.innerHTML=`<div style="color:var(--muted);font-size:12px;margin:0 2px 8px">Activity</div><div class="skel-row"><div class="skel sk-av" style="width:38px;height:38px;border-radius:50%"></div><div class="sk-l"><div class="skel" style="width:70%"></div><div class="skel" style="width:40%"></div></div></div><div class="skel-row"><div class="skel sk-av" style="width:38px;height:38px;border-radius:50%"></div><div class="sk-l"><div class="skel" style="width:60%"></div><div class="skel" style="width:35%"></div></div></div>`+( sysRows?`<div style="color:var(--muted);font-size:12px;margin:14px 2px 8px">Updates</div>`+sysRows:'');
  hydrate(box);
  const remote=await loadNotifsRemote();
  let activity='';
  if(remote&&remote.length){
    activity=remote.map(n=>{
      const unread=new Date(n.created_at).getTime()>lastSeen;
      const clr=n.type==='like'?'#ff5a7a':n.type==='follow'?'#6ee7a0':'var(--accent2)';
      return `<div class="mrow" style="align-items:flex-start;cursor:default;${unread?'background:rgba(47,107,255,.07);border-radius:12px;':''}">
        ${avatar(n.actor_name,38)}
        <div class="t" style="font-weight:400;flex:1"><span style="font-size:13px;line-height:1.4">${notifText(n)}</span></div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span class="msr" style="font-size:16px;color:${clr}">${NOTIF_ICON[n.type]||'notifications'}</span>
          <span style="font-size:10px;color:var(--muted2)">${timeAgo(n.created_at)}</span>
        </div>
      </div>`;
    }).join('');
  } else {
    activity=`<div class="empty" style="padding:24px 0;font-size:13px"><span class="msr" style="font-size:30px;display:block;opacity:.35;margin-bottom:6px">notifications_none</span>No activity yet. Likes, comments and follows will show here.</div>`;
  }
  box.innerHTML=`<div style="color:var(--muted);font-size:12px;margin:0 2px 8px">Activity</div>${activity}`+( sysRows?`<div style="color:var(--muted);font-size:12px;margin:18px 2px 8px">Updates</div>${sysRows}`:'');
  hydrate(box);
  /* mark all as seen */
  localStorage.setItem('tmk_notif_seen',String(Date.now()));
  const dot=document.getElementById('notifDot');if(dot)dot.style.display='none';
}
function renderReviews(){document.getElementById('reviewList').innerHTML=reviewsData.map(reviewCard).join('');hydrate(document.getElementById('reviewList'));}
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
async function adminLogin(){const c=await askCode('Admin login',{password:true,sub:'Enter your admin access code.',placeholder:'Access code'});if(c==null)return;if(c.trim()===getAdminCode()){try{localStorage.setItem('tmk_admin','1');}catch(e){}go('admin');}else note('Incorrect access code.');}
function adminExit(){try{localStorage.removeItem('tmk_admin');}catch(e){}renderProfile();go('profile');}
function adminKey(){try{return localStorage.getItem('tmk_admin_key')||'';}catch(e){return '';}}
function saveAdminKey(){const v=document.getElementById('admKey').value.trim();try{localStorage.setItem('tmk_admin_key',v);}catch(e){}note(v?'Admin write key saved on this device.':'Key cleared.');renderAdmin();}
function sbWrite(method,path,body){const key=adminKey()||SB.SUPABASE_ANON_KEY;
  return fetch(SB.SUPABASE_URL+'/rest/v1/'+path,{method,headers:{apikey:key,Authorization:'Bearer '+key,'Content-Type':'application/json',Prefer:'return=minimal'},body:body?JSON.stringify(body):undefined});}
/* await a write and surface any backend error so admin isn't guessing */
async function sbWriteChecked(method,path,body){
  if(!adminKey()){note('Add your Supabase service_role key in Admin → Settings → Backend write key first.','Write key missing');return false;}
  try{
    const r=await sbWrite(method,path,body);
    if(!r.ok){const txt=await r.text();note('Backend rejected the change ('+r.status+'): '+(txt||'no details'),'Save failed');return false;}
    return true;
  }catch(e){note('Network error saving: '+e,'Save failed');return false;}
}
function trekToRow(t){return {name:t.n,region:t.region,img:(t.img||'').split('?')[0],rating:t.r,reviews:t.rev,level:t.lvl,days:t.days,altitude:t.alt,distance:t.dist,best_time:t.best,price:t.price,soon:!!t.soon,description:t.desc};}
let editIdx=-1, adminTab='Treks', depTrek=null;
function renderAdmin(){
  document.getElementById('adminTabs').innerHTML=['Bookings','Treks','Departures','Settings'].map(x=>`<div class="chip pill ${x===adminTab?'on':''}" onclick="setAdminTab('${x}')">${x}</div>`).join('');
  const f=document.getElementById('adminForm'); if(f){f.style.display='none';f.innerHTML='';}
  if(adminTab==='Bookings')renderAdminBookings();
  else if(adminTab==='Treks')renderAdminTreks();
  else if(adminTab==='Departures')renderDepartures();
  else renderAdminSettings();
}
async function renderAdminBookings(){
  const box=document.getElementById('adminBody');
  if(!sbOn){box.innerHTML='<div class="note2">Connect Supabase to see bookings.</div>';return;}
  if(!adminKey()){box.innerHTML='<div class="note2">Add your Supabase service_role key in the Settings tab to view bookings.</div>';return;}
  box.innerHTML='<div class="skel skel-card"></div><div class="skel skel-card"></div>';
  try{
    const key=adminKey();const h={apikey:key,Authorization:'Bearer '+key};
    let r=await fetch(SB.SUPABASE_URL+'/rest/v1/bookings?select=*&order=created_at.desc&limit=100',{headers:h});
    if(!r.ok) r=await fetch(SB.SUPABASE_URL+'/rest/v1/bookings?select=*&limit=100',{headers:h});
    if(!r.ok){box.innerHTML='<div class="note2">Could not load bookings ('+r.status+'). Check your service_role key.</div>';return;}
    const rows=await r.json();
    if(!rows.length){box.innerHTML='<div class="empty"><p>No bookings yet.</p></div>';return;}
    const total=rows.reduce((s,b)=>s+(Number(b.paid)||0),0);
    box.innerHTML=`<div class="panel" style="margin-bottom:12px;display:flex;justify-content:space-between"><div><b style="font-size:18px">${rows.length}</b><small style="display:block;color:var(--muted)">bookings</small></div><div style="text-align:right"><b style="font-size:18px">${INR(total)}</b><small style="display:block;color:var(--muted)">collected</small></div></div>`+
      rows.map(b=>`<div class="mrow" style="cursor:default;align-items:flex-start"><div class="t"><b>${esc(b.trek||'—')}</b><small>${esc(b.name||'')} · ${esc(b.date||'')} · ${b.pax||1} pax</small><small style="display:block;color:var(--muted2)">${esc(b.payment_id||b.id||'')}</small></div><div style="text-align:right"><b style="font-size:13px">${INR(b.paid||0)}</b><small style="display:block;color:#6ee7a0">${esc(b.status||'Confirmed')}</small></div></div>`).join('');
    hydrate(box);
  }catch(e){box.innerHTML='<div class="note2">Network error loading bookings.</div>';}
}
function setAdminTab(t){adminTab=t;renderAdmin();}
function renderAdminTreks(){document.getElementById('adminBody').innerHTML=
  treks.map((t,i)=>`<div class="mrow" style="cursor:default"><div class="t" onclick="editTrek(${i})" style="cursor:pointer"><b>${esc(t.n)}</b><small>${esc(t.region)} · ₹${Number(t.price).toLocaleString('en-IN')} · ${t.lvl}${t.soon?' · Coming soon':''}</small></div><span class="ic" onclick="editTrek(${i})" style="color:var(--accent2);cursor:pointer">${ic('edit',18)}</span><span class="ic" onclick="delTrek(${i})" style="color:#ff7a7a;cursor:pointer;margin-left:10px">${ic('alert',18)}</span></div>`).join('')
  +'<button class="btn ghost" style="margin-top:6px" onclick="newTrek()">+ Add a trek</button>';
  hydrate(document.getElementById('adminBody'));
}
/* ----- Departures (batches) ----- */
function getBatchMap(){try{return JSON.parse(localStorage.getItem('tmk_batches')||'{}');}catch(e){return {};}}
function setBatchMap(m){try{localStorage.setItem('tmk_batches',JSON.stringify(m));}catch(e){}}
function getBatches(name){const m=getBatchMap();if(m[name]&&m[name].length)return m[name];
  const t=treks.find(x=>x.n===name)||{price:0};
  return [{label:'18 May – 22 May',seats:'Few seats left',price:t.price},{label:'25 May – 29 May',seats:'Available',price:t.price},{label:'01 Jun – 05 Jun',seats:'Available',price:t.price+500}];}
function renderDepartures(){const sel=depTrek||((treks.find(t=>!t.soon)||treks[0]).n); depTrek=sel;
  const opts=treks.map(t=>`<option ${t.n===sel?'selected':''}>${esc(t.n)}</option>`).join('');
  const list=getBatches(sel);
  document.getElementById('adminBody').innerHTML=`
    <div class="field"><label>Trek</label><div class="inp"><select id="depSel" onchange="depTrek=this.value;renderDepartures()" style="all:unset;flex:1;color:var(--text)">${opts}</select></div></div>
    ${list.map((b,i)=>`<div class="mrow" style="cursor:default"><div class="t"><b>${esc(b.label)}</b><small>${esc(b.seats||'Available')} · ₹${Number(b.price||0).toLocaleString('en-IN')}</small></div><span class="ic" onclick="delBatch(${i})" style="color:#ff7a7a;cursor:pointer">${ic('alert',18)}</span></div>`).join('')||'<div class="note2" style="margin-bottom:12px">No departures yet — add one below.</div>'}
    <div class="panel" style="margin-top:6px"><b style="display:block;margin-bottom:8px">Add a departure</b>
      <div class="field"><div class="inp"><input id="bLabel" placeholder="e.g. 18 May – 22 May"></div></div>
      <div class="field"><div class="inp"><input id="bSeats" placeholder="Few seats left / Available"></div></div>
      <div class="field"><div class="inp"><input id="bPrice" placeholder="Price ₹ (blank = trek price)"></div></div>
      <button class="btn" onclick="addBatch()">Add departure</button></div>`;
  hydrate(document.getElementById('adminBody'));
}
function addBatch(){const g=id=>document.getElementById(id);const label=g('bLabel').value.trim();if(!label){note('Enter the dates.');return;}
  const t=treks.find(x=>x.n===depTrek)||{price:0};
  const m=getBatchMap();if(!m[depTrek]||!m[depTrek].length)m[depTrek]=getBatches(depTrek).slice();
  m[depTrek].push({label,seats:g('bSeats').value.trim()||'Available',price:parseInt(g('bPrice').value)||t.price});
  setBatchMap(m);renderDepartures();}
function delBatch(i){const m=getBatchMap();if(!m[depTrek]||!m[depTrek].length)m[depTrek]=getBatches(depTrek).slice();
  m[depTrek].splice(i,1);setBatchMap(m);renderDepartures();}
/* ----- Settings ----- */
function renderAdminSettings(){document.getElementById('adminBody').innerHTML=`
  <div class="panel" style="margin-bottom:14px"><b style="display:block;margin-bottom:10px">Contact & access</b>
    <div class="field"><label>WhatsApp number (country code, no +)</label><div class="inp"><input id="setWa" value="${esc(getWa())}" placeholder="918924813959"></div></div>
    <div class="field"><label>Admin password / code</label><div class="inp"><input id="setAdminCode" value="${esc(getAdminCode())}"></div></div>
    <div class="field"><label>Captain password / code</label><div class="inp"><input id="setCapCode" value="${esc(getCaptainCode())}"></div></div>
    <button class="btn" onclick="saveSettings()">Save settings</button></div>
  ${sbOn?`<div class="panel" style="margin-bottom:14px"><b style="display:block;margin-bottom:8px">Backend write key</b><div class="note2" style="margin-bottom:10px">Paste your Supabase service_role key to save trek edits for everyone (stays on this device only).</div><div class="field"><div class="inp"><span class="ic" data-i="lock"></span><input id="admKey" type="password" placeholder="service_role key" value="${adminKey()?'••••••••':''}"></div></div><button class="btn ghost sm" onclick="saveAdminKey()">Save key</button> ${adminKey()?'<span style="color:#6ee7a0;font-size:11px;margin-left:8px">set ✓</span>':''}</div>`:`<div class="note2" style="margin-bottom:14px">Connect Supabase (see BACKEND-SETUP) to save changes for all users.</div>`}
  <button class="btn ghost" onclick="adminExit()"><span class="ic" data-i="logout"></span> Log out of admin</button>`;
  hydrate(document.getElementById('adminBody'));
}
function saveSettings(){const g=id=>document.getElementById(id);
  try{const wa=g('setWa').value.replace(/[^0-9]/g,'');if(wa)localStorage.setItem('tmk_wa',wa);
    const ac=g('setAdminCode').value.trim();if(ac)localStorage.setItem('tmk_admin_code',ac);
    const cc=g('setCapCode').value.trim();if(cc)localStorage.setItem('tmk_cap_code',cc);}catch(e){}
  note('Settings saved.');}
function fld(id,label,val,ph){return `<div class="field"><label>${label}</label><div class="inp"><input id="${id}" value="${esc(val==null?'':val)}" placeholder="${ph||''}"></div></div>`;}
function showAdminForm(t){const f=document.getElementById('adminForm');
  const lv=t.lvl||'Easy';
  f.innerHTML=`<div class="panel" style="margin-bottom:16px">
    <b style="display:block;margin-bottom:10px">${editIdx<0?'Add trek':'Edit trek'}</b>
    ${fld('admN','Name',t.n,'Trek name')}
    ${fld('admReg','Region',t.region,'Uttarakhand')}
    <div class="field"><label>Difficulty</label><div class="inp"><select id="admLvl" style="all:unset;flex:1;color:var(--text)">
      ${['Easy','Moderate','Difficult'].map(o=>`<option ${o===lv?'selected':''} style="color:#000">${o}</option>`).join('')}</select></div></div>
    ${fld('admPrice','Price (₹)',t.price,'8999')}
    ${fld('admDays','Days',t.days,'5')}
    ${fld('admAlt','Max altitude',t.alt,'12,500 ft')}
    ${fld('admDist','Distance',t.dist,'20 km')}
    ${fld('admBest','Best time',t.best,'Dec – Apr')}
    ${fld('admRate','Rating',t.r,'4.8')}
    ${fld('admRev','Reviews',t.rev,'860')}
    ${fld('admImg','Image URL',(t.img||'').split('?')[0],'https://...')}
    <div class="field"><label>Description</label><div class="inp"><input id="admDesc" value="${esc(t.desc||'')}" placeholder="Short description"></div></div>
    <div class="addon" style="margin:4px 0 12px"><div class="t">Coming soon (not bookable)</div><div class="toggle ${t.soon?'on':''}" id="admSoon" onclick="this.classList.toggle('on')"><i></i></div></div>
    <div style="display:flex;gap:10px"><button class="btn ghost" style="flex:1" onclick="closeAdminForm()">Cancel</button><button class="btn" style="flex:1.3" onclick="saveTrek()">Save trek</button></div>
  </div>`;
  f.style.display='block';hydrate(f);f.scrollIntoView({behavior:'smooth',block:'start'});
}
function newTrek(){editIdx=-1;adminTab='Treks';renderAdmin();showAdminForm({lvl:'Easy',region:'Uttarakhand'});}
function editTrek(i){editIdx=i;showAdminForm(treks[i]);}
function closeAdminForm(){const f=document.getElementById('adminForm');f.style.display='none';f.innerHTML='';}
async function saveTrek(){const g=id=>document.getElementById(id);
  const t={n:g('admN').value.trim()||'Untitled',region:g('admReg').value.trim()||'Uttarakhand',lvl:g('admLvl').value,
    price:parseInt(g('admPrice').value)||0,days:parseInt(g('admDays').value)||1,alt:g('admAlt').value.trim(),
    dist:g('admDist').value.trim(),best:g('admBest').value.trim(),r:parseFloat(g('admRate').value)||4.7,
    rev:g('admRev').value.trim()||'0',img:g('admImg').value.trim(),desc:g('admDesc').value.trim(),
    soon:g('admSoon').classList.contains('on')};
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
const gearItems=[['jacket','Down Jacket','-10°C rated','₹150/day'],['shoe','Trekking Shoes','Waterproof, all sizes','₹120/day'],['backpack','Backpack 60L','Rain cover included','₹100/day'],['poles','Trek Poles','Pair, foldable','₹60/day'],['bed','Sleeping Bag','-15°C comfort','₹120/day'],['snow','Micro-spikes','Grip for snow treks','₹90/day']];
const permitTypes=[['Forest Entry Permit','Required for most Uttarakhand treks (Sankri, Govindghat).','1–2 days','₹350'],['National Park Permit','Valley of Flowers & Hemkund route entry.','1 day','₹400'],['Eco-Zone / Camping','Designated camping & eco-sensitive-zone clearance.','2 days','₹300'],['Foreigner Permit','Extra documentation for non-Indian trekkers.','3–4 days','₹900']];
const activitiesData=[['raft','River Rafting','Rishikesh · Grade III','₹1,200'],['para','Paragliding','Mussoorie / Tehri','₹2,500'],['bungee','Bungee Jump','Rishikesh · 83 m','₹3,700'],['ski','Skiing','Auli · with gear','₹2,200'],['camp','Camping','Lakeside · per night','₹999'],['kayak','Kayaking','Tehri Lake','₹1,500']];
let gearSel={};
function renderQuick(){const q=[['treks','Treks','explore'],['backpack','Rent Gear','gear'],['permits','Permits','permits'],['para','Activities','activities']];const el=document.getElementById('quick');if(!el)return;el.innerHTML=q.map(a=>`<div class="qa" onclick="go('${a[2]}')"><div class="qi">${ic(a[0],20)}</div><span>${a[1]}</span></div>`).join('');hydrate(el);}
function renderGear(){document.getElementById('gearList').innerHTML=gearItems.map((g,i)=>`<div class="gitem ${gearSel[i]?'sel':''}" onclick="togGear(${i})"><span class="gi ic">${ic(g[0],22)}</span><div class="t"><b>${g[1]}</b><small>${g[2]}</small></div><span class="rate">${g[3]}</span><span class="chk">${ic('check',14)}</span></div>`).join('');hydrate(document.getElementById('gear'));}
function togGear(i){gearSel[i]=!gearSel[i];renderGear();}
function gearEnquire(){const picked=gearItems.filter((g,i)=>gearSel[i]).map(g=>g[1]);wa(picked.length?('I want to rent: '+picked.join(', ')):'I want to rent trek gear.');}
function renderPermits(){document.getElementById('permitList').innerHTML=permitTypes.map(p=>`<div class="perm"><b>${p[0]}</b><p>${p[1]}</p><div class="pf"><span class="badge">${ic('clock',12)} ${p[2]} · ${p[3]}</span><button class="pa" onclick="wa('I need the ${p[0]} — please assist.')">Apply</button></div></div>`).join('');hydrate(document.getElementById('permits'));}
function renderActivities(){document.getElementById('actList').innerHTML=activitiesData.map(a=>`<div class="atile"><div class="ai ic">${ic(a[0],22)}</div><b>${a[1]}</b><small>${a[2]}</small><div class="ap">${a[3]}<button class="bk" onclick="bookActivity('${a[1].replace(/'/g,'')}','${a[3]}')">Book</button></div></div>`).join('');hydrate(document.getElementById('activities'));}
async function bookActivity(name,priceStr){
  const amount=parseInt(String(priceStr).replace(/[^\d]/g,''))||0;
  if(amount<1){note('This activity is not bookable online yet — please contact us.','Unavailable');return;}
  if(!isLoggedIn()){note('Please sign in to book this activity.','Sign in required').then(()=>{_loginReturn='activities';go('login');});return;}
  if(!window.Razorpay){note('Payment gateway is still loading — please wait a few seconds and tap Book again.','Please wait');return;}
  if(!sbOn){note('Payment service not configured. Please contact Tripomonk.','Payment error');return;}
  const leadName=getSavedName()||(getUserEmail()?getUserEmail().split('@')[0]:'Guest');
  let order;
  try{order=await rzpCall('create',{amount:amount*100,currency:'INR'});}
  catch(e){note('Could not reach payment service: '+e,'Payment error');return;}
  if(!order||!order.order_id){note('Could not start payment — '+((order&&order.error)?order.error:'no order returned')+' (amount ₹'+amount+')','Payment error');return;}
  const rzp=new window.Razorpay({
    key:order.key_id, order_id:order.order_id, amount:order.amount, currency:order.currency||'INR',
    name:'Tripomonk', description:name+' — Adventure Activity', image:'icons/icon-192.png',
    prefill:{name:leadName, email:getUserEmail()||''}, notes:{activity:name}, theme:{color:'#2f6bff'},
    handler:async function(response){
      const booking={trek:name+' (Activity)',name:leadName,date:'To be scheduled',pax:1,total:amount,paid:amount,email:getUserEmail()||''};
      let res;
      try{res=await rzpCall('verify',{razorpay_order_id:response.razorpay_order_id,razorpay_payment_id:response.razorpay_payment_id,razorpay_signature:response.razorpay_signature,booking});}catch(e){res=null;}
      if(!res||!res.ok){note('Payment received but we could not verify it instantly. Our team will confirm shortly — payment ID: '+(response.razorpay_payment_id||'—'),'Verification pending');return;}
      saveUserName(leadName);
      const b={id:response.razorpay_payment_id,name:leadName,trek:name+' (Activity)',img:'',date:'To be scheduled',pax:1,total:amount,paid:amount,ts:Date.now(),status:'Confirmed',checkedIn:false,paymentId:response.razorpay_payment_id};
      const all=getBookings();all.unshift(b);saveBookings(all);
      note('Payment successful! '+name+' is booked. Our team will contact you to schedule the date.','Booked ✓').then(()=>go('bookings'));
    },
    modal:{ondismiss:function(){note('Payment cancelled — your activity is not yet booked.','Cancelled');}}
  });
  rzp.open();
}
function downloadChecklist(){const NL=String.fromCharCode(10);let lines=['TRIPOMONK — PACKING CHECKLIST',''];Object.keys(packing).forEach(k=>{lines.push(k.toUpperCase());packing[k].forEach(i=>lines.push('  [ ] '+i[1]));lines.push('');});const a=document.createElement('a');a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(lines.join(NL));a.download='Tripomonk_Packing_Checklist.txt';document.body.appendChild(a);a.click();a.remove();}

/* captain */
async function captainLogin(){const c=await askCode('Trip Captain login',{password:true,sub:'For trip captains only.',placeholder:'Access code'});if(c==null)return;if(c.trim()===getCaptainCode()){try{localStorage.setItem('tmk_captain','1');}catch(e){}go('captain');}else note('Incorrect access code.');}
function captainExit(){try{localStorage.removeItem('tmk_captain');}catch(e){}renderProfile();}
function captainVerify(txt){const t=parseTicket(txt),r=document.getElementById('capResult');
  if(!t.ok){r.innerHTML=`<div class="verify bad"><b>${ic('alert',20)} Not verified</b><div style="font-size:13px;color:var(--muted)">This QR isn't a valid Tripomonk ticket.</div></div>`;hydrate(r);return;}
  const all=getBookings(),b=all.find(x=>x.id===t.id);let note='';if(b){if(b.checkedIn)note='Already checked in earlier.';else{b.checkedIn=true;saveBookings(all);note='Marked as checked in ✓';}}
  r.innerHTML=`<div class="verify good"><b>${ic('check',20)} Valid ticket</b>
    <div class="vrow"><span>Trekker</span><b>${esc(t.name)}</b></div><div class="vrow"><span>Trek</span><b>${esc(t.trek)}</b></div>
    <div class="vrow"><span>Date</span><b>${esc(t.date)}</b></div><div class="vrow"><span>Trekkers</span><b>${esc(t.pax)}</b></div>
    <div class="vrow"><span>Booking</span><b>${esc(t.id)}</b></div>${note?`<div style="margin-top:10px;font-size:12px;color:var(--muted)">${note}</div>`:''}</div>`;
  hydrate(r);
}
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
function go(id){const el=document.getElementById(id);if(!el)return;
  if(id==='captain'&&!isCaptain()){captainLogin();return;}
  if(id==='admin'&&!isAdmin()){adminLogin();return;}
  if(id!==cur){hist.push(cur);try{history.pushState({s:id},'');}catch(e){}}cur=id;if(el.dataset.tab)lastTab=el.dataset.tab;
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
  if(id==='notifications')renderNotifications();
  if(id==='reviews')renderReviews();
  if(id==='help')renderHelp();
  if(id==='health')renderHealth(); else stopHealth();
  if(id==='navmap')renderNav(); else stopNav();
  if(id==='admin')renderAdmin();
  if(id==='gear')renderGear();
  if(id==='permits')renderPermits();
  if(id==='activities')renderActivities();
  if(id==='community')renderFeed();
  if(id==='peopleSearch'){_peoplePool=null;setTimeout(()=>{const i=document.getElementById('peopleSearchInput');if(i){i.value='';i.focus();}searchPeople('');},80);}
  if(id==='news')renderNews();
  if(id==='passport')renderPassport();
  if(id==='packing')renderPacking();
  if(id==='bookings')renderBookings();
  if(id==='wishlist')renderWishlist();
  if(id==='profile')renderProfile();
  if(id==='editProfile')renderEditProfile();
  if(id==='settings')renderSettings();
  staggerActive();saveNav();
}
/* in-app back button → use browser history so it stays in sync with device back */
function back(){history.back();}
/* actually move the app to the previous screen (called by device/browser back) */
function _showPrev(){const p=hist.pop();if(p){cur=p;document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));const el=document.getElementById(p);el.classList.add('active');document.getElementById('nav').classList.toggle('hide',el.hasAttribute('data-nonav'));if(el.dataset.tab){lastTab=el.dataset.tab;document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===el.dataset.tab));}staggerActive();saveNav();}else{cur='__root';go(lastTab||'home');}}
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
Object.assign(window,{go,back,openDetail,setHomeFilter,filterByRegion,filterByDiff,filterAll,pickF,resetFilters,applyFilters,selBatch,trav,checkTravellers,addon,selPay,confirmBooking,openTicket,setPk,togPk,captainLogin,captainExit,captainVerify,captainTestLast,downloadItinerary,shareTrek,toggleFav,selCommTab,likePost,addPost,calPick,doSearch,wa,downloadChecklist,togGear,gearEnquire,connectWatch,openNav,toggleNav,recenterNav,adminLogin,adminExit,newTrek,editTrek,delTrek,saveTrek,closeAdminForm,saveAdminKey,setAdminTab,addBatch,delBatch,saveSettings,sendOtp,verifyOtp,resendOtp,continueAsGuest,signOut,saveProfile,epPickPhoto,startJourney,authTab,otpBoxInput,otpBoxKey,socialLogin,searchPeople,renderPeopleResults,openPerson,toggleFollow,rmPostPic,bookActivity,carScroll,deletePost,repostPost,openNews,dblLike,openDetailByName,toggleTagPerson});

/* init */
loadSocial();   /* follows, likes, your posts & comments */
initAuth();     /* restore login session if user was previously signed in */
document.getElementById('splashBg').style.backgroundImage=`url('${treks[0].img.replace('w=900','w=1200')}')`;
initLoginBg();
renderHomeChips();renderHome();renderQuick();
hydrate();
restoreNav();   /* stay on the last screen after a refresh */
try{history.replaceState({s:cur},'');history.pushState({s:cur},'');}catch(e){} /* buffer so device back navigates in-app instead of closing */
loadTreks();    /* pull live treks from Supabase if configured (else built-in) */
renderHomeNews();     /* trek news & alerts strip on home */
refreshNotifBadge();  /* show red dot if there's new community activity */
setInterval(refreshNotifBadge,60000);  /* poll for new activity every minute */
