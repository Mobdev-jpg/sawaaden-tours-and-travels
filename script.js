const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

const setMenuState = (open) => {
  nav?.classList.toggle('open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  if (menuButton) menuButton.textContent = open ? '×' : '☰';
};

menuButton?.addEventListener('click', () => setMenuState(!nav?.classList.contains('open')));
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => setMenuState(false)));
document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('open')) return;
  const target = event.target;
  if (target instanceof Node && !nav.contains(target) && !menuButton?.contains(target)) setMenuState(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 850) setMenuState(false);
});

const effects = document.createElement('link');
effects.rel = 'stylesheet';
effects.href = 'hover-effects.css';
document.head.appendChild(effects);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const whatsappNumber = '919775552239';
const referralNumber = '9332095869';
const makeWhatsAppUrl = (tour = '') => {
  const subject = tour
    ? ` I am interested in the ${tour} tour.`
    : ' I would like to enquire about a Sikkim tour.';
  const message = `Hello Sawaaden Tours & Travels, I came to your website and was referred by ${referralNumber}.${subject} Please share the itinerary, price and availability.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach((link) => {
  link.href = makeWhatsAppUrl();
});

const tourDetails = {
  'Old Silk Route': {
    region: 'East Sikkim', duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Aritar / Mankhim → Zuluk / Padamchen → Nathang Valley → Gangtok',
    highlights: ['Rongli', 'Zuluk zig-zag roads', 'Thambi View Point', 'Nathang Valley', 'Kupup Lake'],
    days: ['Day 1 — NJP/Bagdogra to Aritar or Mankhim. Mountain-road sightseeing and overnight stay.', 'Day 2 — Rongli and Lingtam route towards Zuluk/Padamchen with scenic stops. Overnight stay.', 'Day 3 — Zuluk, Thambi View Point, Lungthung and Nathang Valley sightseeing. Overnight stay.', 'Day 4 — Morning views around Nathang, then descend towards Gangtok or onward destination.'],
    note: 'Permits, route access and sightseeing stops depend on weather and local administration.'
  },
  'Nathula & Tsomgo': {
    region: 'East Sikkim', duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Gangtok → Tsomgo Lake + Baba Mandir + Nathula → Gangtok → Departure',
    highlights: ['Gangtok and MG Marg', 'Tsomgo Lake', 'Baba Mandir', 'Nathula Pass', 'Gangtok viewpoints'],
    days: ['Day 1 — Transfer to Gangtok and evening around MG Marg. Overnight stay.', 'Day 2 — Gangtok local sightseeing including selected viewpoints and monasteries. Overnight stay.', 'Day 3 — Tsomgo Lake and Baba Mandir excursion; Nathula when permitted. Return to Gangtok.', 'Day 4 — Breakfast, checkout and transfer to NJP/Bagdogra or onward destination.'],
    note: 'Nathula is permit-controlled and access can change because of weather, road or government restrictions.'
  },
  'North Sikkim': {
    region: 'North Sikkim', duration: '5 Days / 4 Nights',
    route: 'NJP / Bagdogra → Gangtok → Lachung → Yumthang + Zero Point → Gangtok → Departure',
    highlights: ['Gangtok', 'Lachung', 'Yumthang Valley', 'Zero Point / Yumesamdong', 'North Sikkim valleys'],
    days: ['Day 1 — NJP/Bagdogra to Gangtok via the Teesta valley. Overnight stay.', 'Day 2 — Gangtok local sightseeing or East Sikkim excursion. Overnight stay.', 'Day 3 — Early transfer to Lachung via scenic mountain roads and Chungthang. Overnight stay.', 'Day 4 — Yumthang Valley and Zero Point where accessible, followed by return/continuation as scheduled.', 'Day 5 — Breakfast and departure towards NJP/Bagdogra or onward destination.'],
    note: 'North Sikkim routes require permits and are subject to road, weather and local operating conditions.'
  },
  'Lachen & Gurudongmar': {
    region: 'North Sikkim', duration: '5 Days / 4 Nights',
    route: 'Gangtok → Lachen → Gurudongmar Lake → Lachung → Yumthang → Gangtok',
    highlights: ['Lachen', 'Thangu', 'Chopta Valley', 'Gurudongmar Lake', 'Lachung', 'Yumthang'],
    days: ['Day 1 — Arrival and overnight stay in Gangtok.', 'Day 2 — Gangtok to Lachen through Mangan and North Sikkim mountain roads.', 'Day 3 — Early Gurudongmar excursion, return to Lachen and continue towards Lachung.', 'Day 4 — Yumthang Valley and Zero Point where permitted and accessible.', 'Day 5 — Return towards Gangtok and onward transfer.'],
    note: 'Gurudongmar and other high-altitude areas require eligibility/permits and are highly weather dependent.'
  },
  'Ravangla & Temi': {
    region: 'South Sikkim', duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Ravangla → Temi Tea Garden → Gangtok / NJP',
    highlights: ['Buddha Park', 'Ravangla', 'Temi Tea Garden', 'South Sikkim scenery'],
    days: ['Day 1 — Transfer to Ravangla and visit Buddha Park. Overnight stay.', 'Day 2 — Temi Tea Garden and nearby scenic points. Overnight stay.', 'Day 3 — Breakfast and departure towards Gangtok, NJP/Bagdogra or onward destination.'],
    note: 'This short circuit can be extended or combined with other South Sikkim destinations.'
  },
  'Pelling Escape': {
    region: 'West Sikkim', duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Pelling → West Sikkim sightseeing → Departure',
    highlights: ['Pelling', 'Skywalk', 'Pemayangtse Monastery', 'Rabdentse Ruins', 'Kanchenjunga views'],
    days: ['Day 1 — Scenic transfer to Pelling and hotel check-in.', 'Day 2 — Pelling Skywalk, Pemayangtse, Rabdentse and nearby viewpoints.', 'Day 3 — Breakfast and departure towards Gangtok/NJP/Bagdogra.'],
    note: 'Sightseeing order can be adjusted to road conditions and the traveller’s pace.'
  },
  'Lachen Village': {
    region: 'North Sikkim', duration: '4 Days / 3 Nights',
    route: 'Gangtok → Lachen → North Sikkim sightseeing → Gangtok',
    highlights: ['Lachen village', 'Thangu', 'Chopta Valley', 'North Sikkim landscapes'],
    days: ['Day 1 — Gangtok to Lachen through the Teesta and North Sikkim valleys.', 'Day 2 — High-altitude sightseeing towards Thangu/Chopta Valley where permitted.', 'Day 3 — Flexible North Sikkim sightseeing or onward transfer.', 'Day 4 — Return towards Gangtok and onward transfer.'],
    note: 'North Sikkim access is permit-controlled and the route depends on current conditions.'
  },
  'Lachung & Yumthang': {
    region: 'North Sikkim', duration: '4 Days / 3 Nights',
    route: 'Gangtok → Lachung → Yumthang + Zero Point → Gangtok',
    highlights: ['Lachung', 'Bhim Nala', 'Yumthang Valley', 'Hot Spring area', 'Zero Point / Yumesamdong'],
    days: ['Day 1 — Gangtok to Lachung via scenic North Sikkim roads and Chungthang.', 'Day 2 — Yumthang Valley and optional Zero Point. Return to Lachung.', 'Day 3 — Relaxed Lachung morning or additional sightseeing, then return towards Gangtok.', 'Day 4 — Breakfast and onward departure.'],
    note: 'Current Sikkim Tourism guidance requires a minimum 3 Days / 2 Nights itinerary for Lachung-axis travel; final itinerary and permits must be confirmed before booking.'
  },
  'Khecheopalri Lake': {
    region: 'West Sikkim', duration: '4 Days / 3 Nights',
    route: 'Gangtok / NJP → Pelling / Khecheopalri → West Sikkim → Departure',
    highlights: ['Khecheopalri Lake', 'Pelling', 'Forest scenery', 'Nearby monasteries and heritage sites'],
    days: ['Day 1 — Transfer towards Pelling/West Sikkim and overnight stay.', 'Day 2 — Visit Khecheopalri Lake and surrounding attractions.', 'Day 3 — Pelling, monasteries and viewpoints.', 'Day 4 — Breakfast and departure.'],
    note: 'Can be combined with Pelling, Yuksom and Rabdentse.'
  },
  'Rabdentse Ruins': {
    region: 'West Sikkim', duration: '4 Days / 3 Nights',
    route: 'Gangtok / NJP → Pelling → Rabdentse + West Sikkim → Departure',
    highlights: ['Rabdentse Ruins', 'Pemayangtse Monastery', 'Pelling Skywalk', 'Kanchenjunga views'],
    days: ['Day 1 — Transfer to Pelling and check in.', 'Day 2 — Rabdentse Ruins and Pemayangtse Monastery.', 'Day 3 — Pelling Skywalk and local sightseeing.', 'Day 4 — Breakfast and departure.'],
    note: 'A good add-on to a wider Pelling or West Sikkim itinerary.'
  },
  'Yuksom': {
    region: 'West Sikkim', duration: '4 Days / 3 Nights',
    route: 'Gangtok / Pelling → Yuksom → West Sikkim → Departure',
    highlights: ['Historic Yuksom', 'Dubdi Monastery', 'Norbugang', 'Forest and Himalayan scenery'],
    days: ['Day 1 — Transfer to Yuksom and check in.', 'Day 2 — Norbugang and Dubdi Monastery sightseeing.', 'Day 3 — Flexible local sightseeing or combine with Khecheopalri/Pelling.', 'Day 4 — Breakfast and departure.'],
    note: 'Yuksom is also a trekking gateway; trekking plans need separate preparation.'
  },
  'Rumtek & Monasteries': {
    region: 'East Sikkim', duration: '3 Days / 2 Nights',
    route: 'Gangtok → Rumtek → Gangtok sightseeing → Departure',
    highlights: ['Rumtek Monastery', 'Enchey Monastery', 'Do Drul Chorten', 'MG Marg'],
    days: ['Day 1 — Arrival in Gangtok and evening around MG Marg.', 'Day 2 — Rumtek Monastery and selected Gangtok monasteries/viewpoints.', 'Day 3 — Breakfast and departure or continuation to another Sikkim circuit.'],
    note: 'A compact culture and sightseeing option without long North Sikkim drives.'
  },
  'Gangtok': {
    region: 'East Sikkim', duration: '3 Days / 2 Nights',
    route: 'NJP / Bagdogra → Gangtok → Local sightseeing → Departure',
    highlights: ['MG Marg', 'Tashi View Point', 'Ganesh Tok', 'Hanuman Tok', 'Monasteries'],
    days: ['Day 1 — Arrival in Gangtok and evening at MG Marg.', 'Day 2 — Local sightseeing covering selected viewpoints, monasteries and city attractions.', 'Day 3 — Breakfast and departure or continue to another Sikkim circuit.'],
    note: 'Can be combined with Tsomgo/Nathula or another Sikkim circuit.'
  },
  'Darjeeling': {
    region: 'Darjeeling', duration: '3 Days / 2 Nights',
    route: 'Sikkim / NJP → Darjeeling → Local sightseeing → Departure',
    highlights: ['Tiger Hill', 'Batasia Loop', 'Ghoom', 'Darjeeling Mall', 'Tea gardens'],
    days: ['Day 1 — Transfer to Darjeeling and evening around the Mall/Chowrasta.', 'Day 2 — Tiger Hill sunrise followed by Batasia, Ghoom and local sightseeing.', 'Day 3 — Breakfast and departure to NJP/Bagdogra.'],
    note: 'Darjeeling can be added before or after a Sikkim itinerary.'
  },
  'Tsomgo Lake': {
    region: 'East Sikkim', duration: '3 Days / 2 Nights',
    route: 'NJP / Bagdogra → Gangtok → Tsomgo Lake + Baba Mandir → Departure',
    highlights: ['Tsomgo Lake', 'Baba Mandir', 'Gangtok', 'Optional Nathula Pass'],
    days: ['Day 1 — Transfer to Gangtok and evening at leisure.', 'Day 2 — Tsomgo Lake and Baba Mandir; Nathula when permitted.', 'Day 3 — Breakfast and departure.'],
    note: 'Tsomgo and Nathula are permit-controlled and high-altitude access is weather dependent.'
  },
  'Gurudongmar': {
    region: 'North Sikkim', duration: '5 Days / 4 Nights',
    route: 'Gangtok → Lachen → Gurudongmar → Lachung → Gangtok',
    highlights: ['Lachen', 'Thangu', 'Gurudongmar Lake', 'Lachung'],
    days: ['Day 1 — Gangtok arrival and overnight stay.', 'Day 2 — Gangtok to Lachen.', 'Day 3 — Gurudongmar excursion and transfer towards Lachung.', 'Day 4 — Lachung/Yumthang sightseeing.', 'Day 5 — Return towards Gangtok and onward departure.'],
    note: 'Gurudongmar is permit-controlled and access can change with weather and road conditions.'
  },
  'Silk Route': {
    region: 'East Sikkim', duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Aritar / Mankhim → Zuluk → Nathang → Gangtok / NJP',
    highlights: ['Aritar / Lampokhari', 'Zuluk', 'Thambi View Point', 'Nathang Valley', 'Kupup Lake'],
    days: ['Day 1 — NJP/Bagdogra to Aritar or Mankhim.', 'Day 2 — Rongli and Lingtam towards Zuluk/Padamchen.', 'Day 3 — Zuluk viewpoints, Nathang Valley and accessible high-altitude attractions.', 'Day 4 — Descend towards Gangtok or NJP/Bagdogra.'],
    note: 'East Sikkim protected-area permits and route access must be confirmed before travel.'
  },
  'Temi': {
    region: 'South Sikkim', duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Temi → Ravangla / South Sikkim → Departure',
    highlights: ['Temi Tea Garden', 'South Sikkim scenery', 'Ravangla / Buddha Park', 'Local villages'],
    days: ['Day 1 — Transfer towards South Sikkim and visit Temi if time permits.', 'Day 2 — Temi and nearby South Sikkim attractions.', 'Day 3 — Breakfast and departure.'],
    note: 'Best used as part of a wider South Sikkim circuit.'
  },
  'Kalimpong': {
    region: 'Kalimpong', duration: '3 Days / 2 Nights',
    route: 'NJP / Bagdogra → Kalimpong → Local sightseeing → Departure',
    highlights: ['Deolo Hill', 'Durpin Dara', 'Morgan House', 'Relli River', 'Changey Falls', 'Neora Valley area'],
    days: ['Day 1 — Transfer to Kalimpong and explore the town and nearby viewpoints.', 'Day 2 — Deolo Hill, Durpin Dara, Morgan House and selected local attractions; optional Relli River / Changey Falls route.', 'Day 3 — Breakfast and departure towards NJP/Bagdogra, Darjeeling or Sikkim.'],
    note: 'Kalimpong is in West Bengal and can be combined with Darjeeling and Sikkim circuits.'
  }
};

const tourCatalog = {
  'Darjeeling': ['Darjeeling'],
  'East Sikkim': ['Gangtok', 'Nathula & Tsomgo', 'Tsomgo Lake', 'Old Silk Route', 'Silk Route', 'Rumtek & Monasteries'],
  'North Sikkim': ['North Sikkim', 'Lachen & Gurudongmar', 'Lachen Village', 'Lachung & Yumthang', 'Gurudongmar'],
  'West Sikkim': ['Pelling Escape', 'Khecheopalri Lake', 'Rabdentse Ruins', 'Yuksom'],
  'South Sikkim': ['Ravangla & Temi', 'Temi'],
  'Kalimpong': ['Kalimpong']
};

const planPackages = [
  { name: 'Sikkim Darjeeling Tour Package', duration: '4 Days / 3 Nights', price: '₹6,600', description: 'Compact Sikkim and Darjeeling circuit.' },
  { name: 'Sikkim & Darjeeling Tour Package', duration: '5 Days / 4 Nights', price: '₹7,900', description: 'More time for Gangtok, Darjeeling and sightseeing.' },
  { name: 'Sikkim Darjeeling Tour', duration: '6 Days / 5 Nights', price: '₹8,300', description: 'A fuller Sikkim-Darjeeling itinerary with a more relaxed pace.' }
];

const defaultTour = (name) => ({
  region: 'Custom', duration: 'Custom itinerary', route: `${name} • Sikkim`,
  highlights: [`Explore ${name}`, 'Local sightseeing and Himalayan viewpoints', 'Customised transport and stay options'],
  days: [`Day 1 — Arrive/transfer and begin exploring ${name}.`, `Day 2 — Local sightseeing around ${name} and nearby attractions.`, 'Day 3 — Continue sightseeing or connect with another destination.'],
  note: 'This is a suggested outline. Sawaaden should confirm the final route, duration, permits and inclusions before booking.'
});

const modalStyles = document.createElement('style');
modalStyles.textContent = `
.tour-modal-backdrop{position:fixed;inset:0;background:rgba(10,22,18,.68);display:none;align-items:center;justify-content:center;padding:18px;z-index:9999;backdrop-filter:blur(4px)}
.tour-modal-backdrop.open{display:flex}
.tour-modal{width:min(860px,100%);max-height:min(90vh,860px);overflow:auto;background:#fffdf8;border-radius:22px;box-shadow:0 25px 80px rgba(0,0,0,.3);position:relative;color:#172c25}
.tour-modal-close{position:sticky;top:14px;float:right;margin:14px 14px 0 0;width:42px;height:42px;border:0;border-radius:50%;background:#173a31;color:#fff;font-size:25px;cursor:pointer;z-index:2}
.tour-modal-content{padding:34px}.tour-modal-eyebrow{font-size:12px;letter-spacing:2.5px;font-weight:700;color:#b17c45;margin:0 0 10px}.tour-modal h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(30px,5vw,44px);line-height:1.05;margin:0 0 10px}.tour-duration{font-weight:700;font-size:18px;margin:0 0 8px}.tour-route{color:#68716e;line-height:1.6;margin:0 0 22px}.tour-modal h3{font-size:18px;margin:24px 0 10px}.tour-highlights{display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0;list-style:none}.tour-highlights li{background:#edf2ed;border-radius:999px;padding:8px 12px;font-size:14px}.tour-days{padding-left:20px;margin:0}.tour-days li{padding:7px 0;line-height:1.55}.tour-note{background:#f4eee5;border-left:4px solid #b17c45;padding:12px 14px;margin:22px 0;color:#5c5147;line-height:1.5}.tour-modal-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}.tour-modal-actions a{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-radius:999px;padding:13px 20px;font-weight:700}.tour-wa{background:#173a31;color:#fff}.tour-close-link{border:1px solid #173a31;color:#173a31;background:#fffdf8}
.plan-modal .tour-modal-content{padding-bottom:32px}.plan-intro{color:#66716a;max-width:720px;margin:0 0 22px;line-height:1.6}.plan-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 20px}.plan-tab{border:1px solid #d9d1c5;background:#f7f3eb;color:#173a31;border-radius:999px;padding:9px 13px;font-weight:700;font-size:12px;cursor:pointer}.plan-tab.active{background:#173a31;color:#fff;border-color:#173a31}.plan-catalog-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.plan-tour-card{border:1px solid #e2dbd0;background:#f7f3eb;padding:16px;border-radius:16px;display:flex;flex-direction:column;min-width:0}.plan-tour-card .tour-region{font-size:9px;letter-spacing:1.5px;color:#b17c45;font-weight:800}.plan-tour-card h3{font-family:Georgia,'Times New Roman',serif;font-size:21px;margin:7px 0 4px}.plan-tour-card .tour-card-duration{font-size:12px;color:#68716e;margin-bottom:8px}.plan-tour-card p{font-size:12px;color:#66716a;line-height:1.5;margin:0;flex:1}.plan-tour-card .tour-price{font-size:15px;font-weight:800;color:#173a31;margin:11px 0}.plan-tour-card a{margin-top:10px;text-align:center;background:#c97937;color:#fff;border-radius:999px;padding:10px 12px;font-size:11px;font-weight:800;text-decoration:none}.plan-price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:0 0 20px}.plan-package{border:1px solid #e2dbd0;background:#f7f3eb;padding:14px;border-radius:14px}.plan-package h3{font-family:Georgia,'Times New Roman',serif;font-size:17px;margin:6px 0}.plan-package .plan-duration{font-size:11px;color:#68716e}.plan-package .plan-price{font-size:18px;font-weight:800;color:#173a31;margin:7px 0}.plan-package p{font-size:11px;color:#66716a;line-height:1.45;margin:0}.plan-disclaimer{font-size:10px;color:#7b827e;margin-top:16px;line-height:1.5}
.destination-catalog{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:18px}.destination-region{border:1px solid rgba(255,255,255,.18);padding:16px;border-radius:14px;background:rgba(0,0,0,.1)}.destination-region h3{font-family:Georgia,'Times New Roman',serif;font-size:21px;margin:0 0 10px;color:#fff}.destination-region p{font-size:12px;line-height:1.6;color:rgba(255,255,255,.75);margin:0}.destination-place-list{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px}.destination-place-list span{font-size:10px;padding:7px 9px;border:1px solid rgba(255,255,255,.22);border-radius:999px;color:#fff}
@media(max-width:700px){.plan-catalog-grid{grid-template-columns:1fr 1fr}.plan-price-grid{grid-template-columns:1fr}.destination-catalog{grid-template-columns:1fr}.tour-modal-content{padding:28px 20px 24px}.tour-modal{border-radius:18px}}
@media(max-width:430px){.plan-catalog-grid{grid-template-columns:1fr}.tour-modal-backdrop{padding:8px}.tour-modal-content{padding:24px 15px 20px}.plan-tabs{gap:6px}.plan-tab{font-size:10px;padding:8px 10px}}

/* Mobile-only compact card layout. Desktop/tablet layout is intentionally unchanged. */
@media(max-width:600px){
  .section{padding-left:12px;padding-right:12px}.section-heading{padding:0 2px}
  .package-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.package-card,.package-card.featured{min-width:0}.package-card img,.package-card.featured img{height:140px!important}.card-body{padding:11px}.tag{font-size:8px;letter-spacing:1.1px}.card-body h3{font-size:18px;line-height:1.15;margin:5px 0}.card-body p{font-size:11px;line-height:1.45;margin-bottom:9px}.card-body a{font-size:10px;line-height:1.25}
  .option-grid,.photo-more-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding-left:10px;padding-right:10px}.option-grid img{height:140px}.option-grid article>div{padding:11px}.option-grid h3{font-size:18px}.option-grid p{font-size:11px;line-height:1.4}.gallery-grid,.review-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.gallery-grid img{height:145px}.gallery-grid figcaption{font-size:10px;padding:8px 9px}.review-card{padding:12px;min-height:0}.review-card h3{font-size:17px}.review-card p{font-size:11px}.photo-more-grid img{height:145px}.photo-more-grid figcaption{font-size:15px;padding:9px 10px 1px}.photo-more-grid p{font-size:10px;padding:3px 10px 10px}
}
@media(max-width:380px){.package-grid,.gallery-grid,.review-grid,.option-grid,.photo-more-grid{gap:8px}.package-card img,.package-card.featured img{height:125px!important}.card-body{padding:9px}.card-body h3{font-size:16px}.card-body p{font-size:10px}.card-body a{font-size:9px}}
`;
document.head.appendChild(modalStyles);

const modal = document.createElement('div');
modal.className = 'tour-modal-backdrop';
modal.innerHTML = `<div class="tour-modal" role="dialog" aria-modal="true" aria-labelledby="tour-modal-title"><button class="tour-modal-close" type="button" aria-label="Close">×</button><div class="tour-modal-content"></div></div>`;
document.body.appendChild(modal);
const modalContent = modal.querySelector('.tour-modal-content');

const planModal = document.createElement('div');
planModal.className = 'tour-modal-backdrop plan-modal';
planModal.innerHTML = `<div class="tour-modal" role="dialog" aria-modal="true" aria-labelledby="plan-modal-title"><button class="tour-modal-close" type="button" aria-label="Close">×</button><div class="tour-modal-content"></div></div>`;
document.body.appendChild(planModal);
const planContent = planModal.querySelector('.tour-modal-content');

const closeModal = () => {
  modal.classList.remove('open');
  planModal.classList.remove('open');
  document.body.style.overflow = '';
};

const openTour = (name) => {
  const data = tourDetails[name] || defaultTour(name);
  modalContent.innerHTML = `
    <p class="tour-modal-eyebrow">${data.region.toUpperCase()} • SAWAADEN TOUR PLAN</p>
    <h2 id="tour-modal-title">${name}</h2>
    <p class="tour-duration">${data.duration}</p>
    <p class="tour-route">${data.route}</p>
    <h3>Highlights</h3>
    <ul class="tour-highlights">${data.highlights.map((item) => `<li>${item}</li>`).join('')}</ul>
    <h3>Day-by-day plan</h3>
    <ol class="tour-days">${data.days.map((day) => `<li>${day}</li>`).join('')}</ol>
    <div class="tour-note"><strong>Important:</strong> ${data.note}</div>
    <div class="tour-modal-actions">
      <a class="tour-wa" href="${makeWhatsAppUrl(name)}" target="_blank" rel="noopener noreferrer">WhatsApp about this tour →</a>
      <a class="tour-close-link" href="#">Close</a>
    </div>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const renderPlanCatalog = (category = 'Darjeeling') => {
  const names = tourCatalog[category] || [];
  planContent.querySelectorAll('.plan-tab').forEach((button) => button.classList.toggle('active', button.dataset.category === category));
  const grid = planContent.querySelector('.plan-catalog-grid');
  if (!grid) return;
  grid.innerHTML = names.map((name) => {
    const data = tourDetails[name] || defaultTour(name);
    const listed = planPackages.find((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    const price = listed ? `Starts from ${listed.price} INR` : 'Price on request';
    return `<article class="plan-tour-card"><span class="tour-region">${data.region.toUpperCase()}</span><h3>${name}</h3><div class="tour-card-duration">${data.duration}</div><p>${data.highlights.slice(0,4).join(' • ')}</p><div class="tour-price">${price}</div><a href="#">View itinerary →</a></article>`;
  }).join('');
  grid.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const name = link.closest('.plan-tour-card')?.querySelector('h3')?.textContent?.trim();
      if (name) {
        planModal.classList.remove('open');
        openTour(name);
      }
    });
  });
};

const openPlan = () => {
  planContent.innerHTML = `
    <p class="tour-modal-eyebrow">PLAN YOUR TRIP</p>
    <h2 id="plan-modal-title">Choose your region.</h2>
    <p class="plan-intro">Browse Sawaaden's tours by destination catalog. Every listed tour can be opened to see its route, highlights and day-by-day outline.</p>
    <div class="plan-price-grid">${planPackages.map((item) => `<article class="plan-package"><span class="tour-region">SAWAADEN PACKAGE</span><h3>${item.name}</h3><div class="plan-duration">${item.duration}</div><div class="plan-price">Starts from ${item.price}</div><p>${item.description}</p></article>`).join('')}</div>
    <div class="plan-tabs">${Object.keys(tourCatalog).map((category) => `<button class="plan-tab" type="button" data-category="${category}">${category}</button>`).join('')}</div>
    <div class="plan-catalog-grid"></div>
    <p class="plan-disclaimer">*Starting prices shown above are indicative/publicly listed prices. Final pricing depends on dates, group size, hotel category, transport, permits and inclusions. Confirm the current quote with Sawaaden before booking.</p>
    <div class="tour-modal-actions"><a class="tour-wa" href="${makeWhatsAppUrl('Custom trip')}" target="_blank" rel="noopener noreferrer">Plan a custom trip →</a><a class="tour-close-link" href="#">Close</a></div>`;
  planContent.querySelectorAll('.plan-tab').forEach((button) => button.addEventListener('click', () => renderPlanCatalog(button.dataset.category)));
  renderPlanCatalog('Darjeeling');
  planModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const planButton = document.querySelector('.nav-cta');
planButton?.addEventListener('click', (event) => {
  event.preventDefault();
  setMenuState(false);
  openPlan();
});

document.querySelectorAll('.package-card a, .option-grid a, .destination-list a, .band-more-grid a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const card = link.closest('article, a');
    const title = card?.querySelector('h3')?.textContent?.trim() || link.textContent.replace(/→|\+/g, '').trim();
    if (!title) return;
    event.preventDefault();
    openTour(title);
  });
});

const closeAnyModal = (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (target.closest('.tour-modal-close') || target.closest('.tour-close-link')) {
    event.preventDefault();
    closeModal();
  }
};

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
  else closeAnyModal(event);
});
planModal.addEventListener('click', (event) => {
  if (event.target === planModal) closeModal();
  else closeAnyModal(event);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

/* Destination catalog: adds regional places to the existing destination section without changing the desktop page structure. */
const destinationList = document.querySelector('.destination-list');
if (destinationList) {
  destinationList.innerHTML = `
    <a href="#contact"><span>01 <b>Gangtok</b><small>MG Marg • monasteries • viewpoints</small></span></a>
    <a href="#contact"><span>02 <b>Nathula Pass</b><small>High-altitude border pass</small></span></a>
    <a href="#contact"><span>03 <b>Tsomgo Lake</b><small>Changu Lake • Baba Mandir</small></span></a>
    <a href="#contact"><span>04 <b>Zuluk & Nathang</b><small>Silk Route • Thambi • Kupup</small></span></a>
    <a href="#contact"><span>05 <b>Lachung</b><small>Yumthang • Zero Point</small></span></a>
    <a href="#contact"><span>06 <b>Lachen</b><small>Thangu • Chopta • Gurudongmar</small></span></a>
    <a href="#contact"><span>07 <b>Pelling</b><small>Skywalk • monasteries • Kanchenjunga</small></span></a>
    <a href="#contact"><span>08 <b>Khecheopalri</b><small>Sacred lake • West Sikkim</small></span></a>
    <a href="#contact"><span>09 <b>Ravangla</b><small>Buddha Park • South Sikkim</small></span></a>
    <a href="#contact"><span>10 <b>Temi Tea Garden</b><small>Himalayan tea estate</small></span></a>
    <a href="#contact"><span>11 <b>Darjeeling</b><small>Tiger Hill • Batasia • tea gardens</small></span></a>
    <a href="#contact"><span>12 <b>Kalimpong</b><small>Deolo • Durpin Dara • Morgan House</small></span></a>`;
}

const destinationBand = document.querySelector('.destination-band');
const existingBandMore = destinationBand?.querySelector('.band-more');
if (destinationBand && existingBandMore) {
  const catalog = document.createElement('div');
  catalog.className = 'destination-catalog';
  catalog.innerHTML = `
    <div class="destination-region"><h3>East Sikkim</h3><p>Gateway sights, monasteries, lakes and the historic Silk Route.</p><div class="destination-place-list"><span>Gangtok</span><span>Rumtek</span><span>Tsomgo Lake</span><span>Nathula Pass</span><span>Baba Mandir</span><span>Zuluk</span><span>Nathang Valley</span><span>Thambi View Point</span><span>Aritar</span><span>Rongli</span><span>Kupup</span></div></div>
    <div class="destination-region"><h3>North Sikkim</h3><p>High-altitude valleys and mountain routes around Lachung and Lachen.</p><div class="destination-place-list"><span>Lachung</span><span>Yumthang</span><span>Zero Point / Yumesamdong</span><span>Lachen</span><span>Thangu</span><span>Chopta Valley</span><span>Gurudongmar Lake</span><span>Chungthang</span></div></div>
    <div class="destination-region"><h3>West Sikkim</h3><p>Heritage, sacred lakes, monasteries and Kanchenjunga-facing landscapes.</p><div class="destination-place-list"><span>Pelling</span><span>Skywalk</span><span>Khecheopalri Lake</span><span>Rabdentse Ruins</span><span>Pemayangtse</span><span>Yuksom</span><span>Dubdi Monastery</span><span>Norbugang</span></div></div>
    <div class="destination-region"><h3>South Sikkim</h3><p>Tea gardens, Buddhist landmarks, viewpoints and quieter mountain towns.</p><div class="destination-place-list"><span>Ravangla</span><span>Buddha Park</span><span>Temi Tea Garden</span><span>Namchi</span><span>Samdruptse</span><span>Tendong</span><span>Maenam</span></div></div>
    <div class="destination-region"><h3>Darjeeling</h3><p>Classic Himalayan hill-town experiences and tea-country sightseeing.</p><div class="destination-place-list"><span>Tiger Hill</span><span>Batasia Loop</span><span>Ghoom</span><span>Chowrasta / Mall</span><span>Tea Estates</span><span>Rock Garden</span><span>HMI</span><span>Darjeeling Toy Train</span></div></div>
    <div class="destination-region"><h3>Kalimpong</h3><p>A relaxed hill destination with viewpoints, heritage buildings, rivers and forest attractions.</p><div class="destination-place-list"><span>Deolo Hill</span><span>Durpin Dara</span><span>Morgan House</span><span>Relli River</span><span>Changey Waterfall</span><span>Nokdara</span><span>Neora Valley</span><span>Lava</span><span>Loleygaon</span><span>Pedong</span></div></div>`;
  existingBandMore.insertAdjacentElement('afterend', catalog);
}
