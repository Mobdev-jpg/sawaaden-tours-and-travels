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
    duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Aritar / Mankhim → Zuluk / Padamchen → Nathang Valley → Gangtok',
    highlights: ['Rongli', 'Zuluk zig-zag roads', 'Thambi View Point', 'Nathang Valley', 'Kupup Lake and high-altitude viewpoints'],
    days: ['Day 1 — NJP/Bagdogra to Aritar or Mankhim. Mountain-road sightseeing and overnight stay.', 'Day 2 — Rongli and Lingtam route towards Zuluk/Padamchen with scenic stops. Overnight stay.', 'Day 3 — Zuluk, Thambi View Point, Lungthung and Nathang Valley sightseeing. Overnight stay.', 'Day 4 — Morning views around Nathang, then descend towards Gangtok or onward destination.'],
    note: 'Permits, route access and sightseeing stops depend on weather and local administration.'
  },
  'Nathula & Tsomgo': {
    duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Gangtok → Tsomgo Lake + Baba Mandir + Nathula → Gangtok → Departure',
    highlights: ['Gangtok and MG Marg', 'Tsomgo Lake', 'Baba Mandir', 'Nathula Pass subject to permit', 'Gangtok viewpoints'],
    days: ['Day 1 — Transfer to Gangtok and evening around MG Marg. Overnight stay.', 'Day 2 — Gangtok local sightseeing including selected viewpoints and monasteries. Overnight stay.', 'Day 3 — Tsomgo Lake and Baba Mandir excursion; Nathula when permitted. Return to Gangtok.', 'Day 4 — Breakfast, checkout and transfer to NJP/Bagdogra or onward destination.'],
    note: 'Nathula is permit-controlled and access can change because of weather, road or government restrictions.'
  },
  'North Sikkim': {
    duration: '5 Days / 4 Nights',
    route: 'NJP / Bagdogra → Gangtok → Lachung → Yumthang + Zero Point → Gangtok → Departure',
    highlights: ['Gangtok', 'Lachung', 'Yumthang Valley', 'Zero Point when accessible', 'North Sikkim waterfalls and valleys'],
    days: ['Day 1 — NJP/Bagdogra to Gangtok via the Teesta valley. Overnight stay.', 'Day 2 — Gangtok local sightseeing or East Sikkim excursion. Overnight stay.', 'Day 3 — Early transfer to Lachung via scenic mountain roads and Chungthang. Overnight stay.', 'Day 4 — Yumthang Valley and Zero Point where accessible, followed by return/continuation as scheduled.', 'Day 5 — Breakfast and departure towards NJP/Bagdogra or onward destination.'],
    note: 'North Sikkim routes require permits and are subject to road, weather and local operating conditions.'
  },
  'Lachen & Gurudongmar': {
    duration: '5 Days / 4 Nights',
    route: 'Gangtok → Lachen → Gurudongmar Lake → Lachung → Yumthang → Gangtok',
    highlights: ['Lachen', 'Thangu', 'Gurudongmar Lake', 'Lachung', 'Yumthang Valley'],
    days: ['Day 1 — Arrival and overnight stay in Gangtok.', 'Day 2 — Gangtok to Lachen through Mangan and North Sikkim mountain roads.', 'Day 3 — Early Gurudongmar excursion, return to Lachen and continue towards Lachung.', 'Day 4 — Yumthang Valley and Zero Point where permitted and accessible.', 'Day 5 — Return towards Gangtok and onward transfer.'],
    note: 'Gurudongmar and other high-altitude areas require eligibility/permits and are highly weather dependent.'
  },
  'Ravangla & Temi': {
    duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Ravangla → Temi Tea Garden → Gangtok / NJP',
    highlights: ['Buddha Park', 'Ravangla', 'Temi Tea Garden', 'South Sikkim scenery'],
    days: ['Day 1 — Transfer to Ravangla and visit Buddha Park. Overnight stay.', 'Day 2 — Temi Tea Garden and nearby scenic points. Overnight stay.', 'Day 3 — Breakfast and departure towards Gangtok, NJP/Bagdogra or onward destination.'],
    note: 'This short circuit can be extended or combined with other South Sikkim destinations.'
  },
  'Pelling Escape': {
    duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Pelling → West Sikkim sightseeing → Departure',
    highlights: ['Pelling', 'Skywalk', 'Pemayangtse Monastery', 'Rabdentse Ruins', 'Kanchenjunga views'],
    days: ['Day 1 — Scenic transfer to Pelling and hotel check-in.', 'Day 2 — Pelling Skywalk, Pemayangtse, Rabdentse and nearby viewpoints.', 'Day 3 — Breakfast and departure towards Gangtok/NJP/Bagdogra.'],
    note: 'Sightseeing order can be adjusted to road conditions and the traveller’s pace.'
  },
  'Lachen Village': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok → Lachen → North Sikkim sightseeing → Gangtok',
    highlights: ['Lachen village', 'Thangu', 'Chopta Valley where accessible', 'North Sikkim landscapes'],
    days: ['Day 1 — Gangtok to Lachen through the Teesta and North Sikkim valleys.', 'Day 2 — High-altitude sightseeing towards Thangu/Chopta Valley where permitted.', 'Day 3 — Flexible North Sikkim sightseeing or onward transfer.', 'Day 4 — Return towards Gangtok and onward transfer.'],
    note: 'North Sikkim access is permit-controlled and the route depends on current conditions.'
  },
  'Lachung & Yumthang': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok → Lachung → Yumthang + Zero Point → Gangtok',
    highlights: ['Lachung', 'Bhim Nala', 'Yumthang Valley', 'Hot Spring area', 'Zero Point when accessible'],
    days: ['Day 1 — Gangtok to Lachung via scenic North Sikkim roads and Chungthang.', 'Day 2 — Yumthang Valley and optional Zero Point. Return to Lachung.', 'Day 3 — Relaxed Lachung morning or additional sightseeing, then return towards Gangtok.', 'Day 4 — Breakfast and onward departure.'],
    note: 'Yumthang and Zero Point access depends on permits, weather and road conditions.'
  },
  'Khecheopalri Lake': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok / NJP → Pelling / Khecheopalri → West Sikkim → Departure',
    highlights: ['Khecheopalri Lake', 'Pelling', 'Forest scenery', 'Nearby monasteries and heritage sites'],
    days: ['Day 1 — Transfer towards Pelling/West Sikkim and overnight stay.', 'Day 2 — Visit Khecheopalri Lake and surrounding attractions.', 'Day 3 — Pelling, monasteries and viewpoints.', 'Day 4 — Breakfast and departure.'],
    note: 'Can be combined with Pelling, Yuksom and Rabdentse.'
  },
  'Rabdentse Ruins': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok / NJP → Pelling → Rabdentse + West Sikkim → Departure',
    highlights: ['Rabdentse Ruins', 'Pemayangtse Monastery', 'Pelling Skywalk', 'Kanchenjunga views'],
    days: ['Day 1 — Transfer to Pelling and check in.', 'Day 2 — Rabdentse Ruins and Pemayangtse Monastery.', 'Day 3 — Pelling Skywalk and local sightseeing.', 'Day 4 — Breakfast and departure.'],
    note: 'A good add-on to a wider Pelling or West Sikkim itinerary.'
  },
  'Yuksom': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok / Pelling → Yuksom → West Sikkim → Departure',
    highlights: ['Historic Yuksom', 'Dubdi Monastery', 'Norbugang', 'Forest and Himalayan scenery'],
    days: ['Day 1 — Transfer to Yuksom and check in.', 'Day 2 — Norbugang and Dubdi Monastery sightseeing.', 'Day 3 — Flexible local sightseeing or combine with Khecheopalri/Pelling.', 'Day 4 — Breakfast and departure.'],
    note: 'Yuksom is also a trekking gateway; trekking plans need separate preparation.'
  },
  'Rumtek & Monasteries': {
    duration: '3 Days / 2 Nights',
    route: 'Gangtok → Rumtek → Gangtok sightseeing → Departure',
    highlights: ['Rumtek Monastery', 'Enchey Monastery', 'Do Drul Chorten', 'MG Marg'],
    days: ['Day 1 — Arrival in Gangtok and evening around MG Marg.', 'Day 2 — Rumtek Monastery and selected Gangtok monasteries/viewpoints.', 'Day 3 — Breakfast and departure or continuation to another Sikkim circuit.'],
    note: 'A compact culture and sightseeing option without long North Sikkim drives.'
  },
  'Gangtok': {
    duration: '3 Days / 2 Nights',
    route: 'NJP / Bagdogra → Gangtok → Local sightseeing → Departure',
    highlights: ['MG Marg', 'Tashi View Point', 'Ganesh Tok / Hanuman Tok', 'Monasteries'],
    days: ['Day 1 — Arrival in Gangtok and evening at MG Marg.', 'Day 2 — Local sightseeing covering selected viewpoints, monasteries and city attractions.', 'Day 3 — Breakfast and departure or continue to another Sikkim circuit.'],
    note: 'Can be combined with Tsomgo/Nathula or another Sikkim circuit.'
  },
  'Darjeeling': {
    duration: '3 Days / 2 Nights',
    route: 'Sikkim / NJP → Darjeeling → Local sightseeing → Departure',
    highlights: ['Tiger Hill', 'Batasia Loop', 'Darjeeling Mall', 'Tea gardens'],
    days: ['Day 1 — Transfer to Darjeeling and evening around the Mall/Chowrasta.', 'Day 2 — Tiger Hill sunrise followed by local sightseeing and tea gardens.', 'Day 3 — Breakfast and departure to NJP/Bagdogra.'],
    note: 'Darjeeling can be added before or after a Sikkim itinerary.'
  },
  'Tsomgo Lake': {
    duration: '3 Days / 2 Nights',
    route: 'NJP / Bagdogra → Gangtok → Tsomgo Lake + Baba Mandir → Departure',
    highlights: ['Tsomgo Lake', 'Baba Mandir', 'Gangtok', 'Optional Nathula Pass'],
    days: ['Day 1 — Transfer to Gangtok and evening at leisure.', 'Day 2 — Tsomgo Lake and Baba Mandir; Nathula when permitted.', 'Day 3 — Breakfast and departure.'],
    note: 'High-altitude access is permit- and weather-dependent.'
  },
  'Gurudongmar': {
    duration: '5 Days / 4 Nights',
    route: 'Gangtok → Lachen → Gurudongmar → Lachung → Gangtok',
    highlights: ['Lachen', 'Thangu', 'Gurudongmar Lake', 'Lachung'],
    days: ['Day 1 — Gangtok arrival and overnight stay.', 'Day 2 — Gangtok to Lachen.', 'Day 3 — Gurudongmar excursion and transfer towards Lachung.', 'Day 4 — Lachung/Yumthang sightseeing.', 'Day 5 — Return towards Gangtok and onward departure.'],
    note: 'Gurudongmar is permit-controlled and access can change with weather and road conditions.'
  },
  'Silk Route': {
    duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Aritar / Mankhim → Zuluk → Nathang → Gangtok / NJP',
    highlights: ['Aritar / Lampokhari', 'Zuluk', 'Thambi View Point', 'Nathang Valley', 'Kupup Lake'],
    days: ['Day 1 — NJP/Bagdogra to Aritar or Mankhim.', 'Day 2 — Rongli and Lingtam towards Zuluk/Padamchen.', 'Day 3 — Zuluk viewpoints, Nathang Valley and accessible high-altitude attractions.', 'Day 4 — Descend towards Gangtok or NJP/Bagdogra.'],
    note: 'East Sikkim protected-area permits and route access must be confirmed before travel.'
  },
  'Temi': {
    duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Temi → Ravangla / South Sikkim → Departure',
    highlights: ['Temi Tea Garden', 'South Sikkim scenery', 'Ravangla/Buddha Park option', 'Local villages'],
    days: ['Day 1 — Transfer towards South Sikkim and visit Temi if time permits.', 'Day 2 — Temi and nearby South Sikkim attractions.', 'Day 3 — Breakfast and departure.'],
    note: 'Best used as part of a wider South Sikkim circuit.'
  }
};

const defaultTour = (name) => ({
  duration: 'Custom itinerary',
  route: `${name} • Sikkim`,
  highlights: [`Explore ${name}`, 'Local sightseeing and Himalayan viewpoints', 'Customised transport and stay options'],
  days: [`Day 1 — Arrive/transfer and begin exploring ${name}.`, `Day 2 — Local sightseeing around ${name} and nearby attractions.`, 'Day 3 — Continue sightseeing or connect with another destination.'],
  note: 'This is a suggested outline. Sawaaden should confirm the final route, duration, permits and inclusions before booking.'
});

const modalStyles = document.createElement('style');
modalStyles.textContent = `
.tour-modal-backdrop{position:fixed;inset:0;background:rgba(10,22,18,.68);display:none;align-items:center;justify-content:center;padding:18px;z-index:9999;backdrop-filter:blur(4px)}
.tour-modal-backdrop.open{display:flex}
.tour-modal{width:min(760px,100%);max-height:min(88vh,820px);overflow:auto;background:#fffdf8;border-radius:22px;box-shadow:0 25px 80px rgba(0,0,0,.3);position:relative;color:#172c25}
.tour-modal-close{position:sticky;top:14px;float:right;margin:14px 14px 0 0;width:42px;height:42px;border:0;border-radius:50%;background:#173a31;color:#fff;font-size:25px;cursor:pointer;z-index:2}
.tour-modal-content{padding:34px}.tour-modal-eyebrow{font-size:12px;letter-spacing:2.5px;font-weight:700;color:#b17c45;margin:0 0 10px}.tour-modal h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(30px,5vw,44px);line-height:1.05;margin:0 0 10px}.tour-duration{font-weight:700;font-size:18px;margin:0 0 8px}.tour-route{color:#68716e;line-height:1.6;margin:0 0 22px}.tour-modal h3{font-size:18px;margin:24px 0 10px}.tour-highlights{display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0;list-style:none}.tour-highlights li{background:#edf2ed;border-radius:999px;padding:8px 12px;font-size:14px}.tour-days{padding-left:20px;margin:0}.tour-days li{padding:7px 0;line-height:1.55}.tour-note{background:#f4eee5;border-left:4px solid #b17c45;padding:12px 14px;margin:22px 0;color:#5c5147;line-height:1.5}.tour-modal-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}.tour-modal-actions a{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-radius:999px;padding:13px 20px;font-weight:700}.tour-wa{background:#173a31;color:#fff}.tour-close-link{border:1px solid #173a31;color:#173a31;background:#fffdf8}
.plan-modal .tour-modal-content{padding-bottom:32px}.plan-intro{color:#66716a;max-width:620px;margin:0 0 22px}.plan-package-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.plan-package{border:1px solid #e2dbd0;background:#f7f3eb;padding:16px;border-radius:16px;display:flex;flex-direction:column}.plan-package h3{font-family:Georgia,'Times New Roman',serif;font-size:20px;margin:6px 0}.plan-duration{font-size:12px;color:#68716e;margin-bottom:8px}.plan-price{font-size:21px;font-weight:800;color:#173a31;margin:8px 0}.plan-price small{font-size:11px;font-weight:500;color:#718078}.plan-description{font-size:12px;color:#66716a;line-height:1.5;flex:1}.plan-package a{margin-top:14px;text-align:center;background:#c97937;color:#fff;border-radius:999px;padding:10px 12px;font-size:12px;font-weight:800}.plan-disclaimer{font-size:10px;color:#7b827e;margin-top:16px;line-height:1.5}
@media(max-width:700px){.plan-package-grid{grid-template-columns:1fr 1fr}.tour-modal-content{padding:28px 20px 24px}.tour-modal{border-radius:18px}}
@media(max-width:430px){.plan-package-grid{grid-template-columns:1fr}.tour-modal-backdrop{padding:8px}.tour-modal-content{padding:24px 15px 20px}}

/* Mobile-only compact card layout. Desktop/tablet layout is intentionally unchanged. */
@media(max-width:600px){
  .section{padding-left:12px;padding-right:12px}
  .section-heading{padding:0 2px}
  .package-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .package-card,.package-card.featured{min-width:0}
  .package-card img,.package-card.featured img{height:140px!important}
  .card-body{padding:11px}
  .tag{font-size:8px;letter-spacing:1.1px}
  .card-body h3{font-size:18px;line-height:1.15;margin:5px 0}
  .card-body p{font-size:11px;line-height:1.45;margin-bottom:9px}
  .card-body a{font-size:10px;line-height:1.25}
  .option-grid,.photo-more-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding-left:10px;padding-right:10px}
  .option-grid img{height:140px}
  .option-grid article>div{padding:11px}
  .option-grid h3{font-size:18px}
  .option-grid p{font-size:11px;line-height:1.4}
  .gallery-grid,.review-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .gallery-grid img{height:145px}
  .gallery-grid figcaption{font-size:10px;padding:8px 9px}
  .review-card{padding:12px;min-height:0}
  .review-card h3{font-size:17px}
  .review-card p{font-size:11px}
  .photo-more-grid img{height:145px}
  .photo-more-grid figcaption{font-size:15px;padding:9px 10px 1px}
  .photo-more-grid p{font-size:10px;padding:3px 10px 10px}
}
@media(max-width:380px){
  .package-grid,.gallery-grid,.review-grid,.option-grid,.photo-more-grid{gap:8px}
  .package-card img,.package-card.featured img{height:125px!important}
  .card-body{padding:9px}
  .card-body h3{font-size:16px}
  .card-body p{font-size:10px}
  .card-body a{font-size:9px}
}
`;
document.head.appendChild(modalStyles);

const modal = document.createElement('div');
modal.className = 'tour-modal-backdrop';
modal.innerHTML = `<div class="tour-modal" role="dialog" aria-modal="true" aria-labelledby="tour-modal-title"><button class="tour-modal-close" type="button" aria-label="Close">×</button><div class="tour-modal-content"></div></div>`;
document.body.appendChild(modal);
const modalContent = modal.querySelector('.tour-modal-content');

const closeModal = () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';
};

const openTour = (name) => {
  const data = tourDetails[name] || defaultTour(name);
  modalContent.innerHTML = `
    <p class="tour-modal-eyebrow">SAWAADEN TOUR PLAN</p>
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

const planModal = document.createElement('div');
planModal.className = 'tour-modal-backdrop plan-modal';
planModal.innerHTML = `<div class="tour-modal" role="dialog" aria-modal="true" aria-labelledby="plan-modal-title"><button class="tour-modal-close" type="button" aria-label="Close">×</button><div class="tour-modal-content"></div></div>`;
document.body.appendChild(planModal);
const planContent = planModal.querySelector('.tour-modal-content');

const planPackages = [
  {name:'Sikkim Darjeeling Tour Package',duration:'4 Days / 3 Nights',price:'₹6,600',description:'A short Sikkim and Darjeeling circuit for travellers looking for a compact Himalayan holiday.'},
  {name:'Sikkim & Darjeeling Tour Package',duration:'5 Days / 4 Nights',price:'₹7,900',description:'A longer circuit with more time for Gangtok, Darjeeling and sightseeing between the two destinations.'},
  {name:'Sikkim Darjeeling Tour',duration:'6 Days / 5 Nights',price:'₹8,300',description:'A fuller Sikkim-Darjeeling itinerary with additional time for sightseeing and a more relaxed pace.'}
];

const openPlan = () => {
  planContent.innerHTML = `
    <p class="tour-modal-eyebrow">PLAN YOUR SIKKIM TRIP</p>
    <h2 id="plan-modal-title">Choose a package.</h2>
    <p class="plan-intro">Tap a package to see its starting price and send an enquiry. These starting prices are based on Sawaaden's publicly listed package prices; your final quote can change with travel dates, hotel category, group size, transport, permits and inclusions.</p>
    <div class="plan-package-grid">
      ${planPackages.map((item) => `
        <article class="plan-package">
          <span class="tag">SAWAADEN PACKAGE</span>
          <h3>${item.name}</h3>
          <div class="plan-duration">${item.duration}</div>
          <div class="plan-price">Starts from ${item.price} <small>INR</small></div>
          <p class="plan-description">${item.description}</p>
          <a href="${makeWhatsAppUrl(item.name)}" target="_blank" rel="noopener noreferrer">Ask for this package →</a>
        </article>`).join('')}
    </div>
    <p class="plan-disclaimer">*Starting prices are indicative/publicly listed prices, not a guaranteed quote. Confirm current availability, inclusions and final price with Sawaaden before booking.</p>
    <div class="tour-modal-actions"><a class="tour-wa" href="${makeWhatsAppUrl('Custom Sikkim trip')}" target="_blank" rel="noopener noreferrer">Plan a custom trip →</a><a class="tour-close-link" href="#">Close</a></div>`;
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
    planModal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
  else closeAnyModal(event);
});
planModal.addEventListener('click', (event) => {
  if (event.target === planModal) {
    planModal.classList.remove('open');
    document.body.style.overflow = '';
  } else closeAnyModal(event);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    planModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});
