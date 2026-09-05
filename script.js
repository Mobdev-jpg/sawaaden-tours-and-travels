const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

const setMenuState = (open) => {
  nav?.classList.toggle('open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  if (menuButton) menuButton.textContent = open ? '×' : '☰';
};

menuButton?.addEventListener('click', () => {
  setMenuState(!(nav?.classList.contains('open')));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('open')) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (!nav.contains(target) && !menuButton?.contains(target)) setMenuState(false);
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

/* Tour details and enquiry flow */
const tourDetails = {
  'Old Silk Route': {
    duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Aritar or Mankhim → Zuluk / Padamchen → Nathang Valley → Gangtok',
    highlights: ['Rongli and the historic Silk Route', 'Zuluk and its famous zig-zag roads', 'Thambi View Point and Lungthung', 'Nathang Valley', 'Kupup Lake, Old Baba Mandir and high-altitude viewpoints'],
    days: [
      'Day 1 — Arrival from NJP/Bagdogra and transfer towards Aritar or Mankhim. Enjoy the mountain roads and local scenery. Overnight stay.',
      'Day 2 — Continue through Rongli towards Zuluk/Padamchen, with stops around Lingtam, waterfalls and viewpoints. Overnight stay.',
      'Day 3 — Early sightseeing around Thambi View Point, Lungthung, Zuluk and Nathang Valley, with high-altitude lakes and border-area viewpoints. Overnight stay.',
      'Day 4 — Morning views around Nathang, then descend towards Gangtok with sightseeing en route. Drop/ onward travel as arranged.'
    ],
    note: 'Permit, route access and individual sightseeing stops can change with weather and local administration.'
  },
  'Nathula & Tsomgo': {
    duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Gangtok → Tsomgo Lake + Baba Mandir + Nathula → Gangtok → Departure',
    highlights: ['Gangtok and MG Marg', 'Tsomgo (Changu) Lake', 'Baba Harbhajan Singh Mandir', 'Nathula Pass, subject to permit and access', 'Gangtok viewpoints and monasteries'],
    days: [
      'Day 1 — Arrival at NJP/Bagdogra and scenic transfer to Gangtok. Evening at leisure around MG Marg. Overnight stay in Gangtok.',
      'Day 2 — Gangtok local sightseeing such as Tashi View Point, monasteries and city attractions. Overnight stay in Gangtok.',
      'Day 3 — Full-day excursion to Tsomgo Lake and Baba Mandir, with Nathula Pass added when eligible and permitted. Return to Gangtok. Overnight stay.',
      'Day 4 — Breakfast, checkout and transfer to NJP/Bagdogra or onward destination.'
    ],
    note: 'Nathula is permit-controlled and access may be restricted by weather, road conditions or government/army rules.'
  },
  'North Sikkim': {
    duration: '5 Days / 4 Nights',
    route: 'NJP / Bagdogra → Gangtok → Lachung → Yumthang + Zero Point → Gangtok → Departure',
    highlights: ['Gangtok and MG Marg', 'Lachung mountain village', 'Yumthang Valley', 'Zero Point / Yumesamdong when accessible', 'Scenic North Sikkim waterfalls and valleys'],
    days: [
      'Day 1 — NJP/Bagdogra to Gangtok via the Teesta valley. Evening free in Gangtok. Overnight stay.',
      'Day 2 — Gangtok local sightseeing or an East Sikkim excursion, depending on the final package. Overnight stay.',
      'Day 3 — Early departure for Lachung via scenic mountain roads, waterfalls and Chungthang. Overnight stay in Lachung.',
      'Day 4 — Early excursion to Yumthang Valley and, if accessible, Zero Point. Return to Lachung and continue towards Gangtok as scheduled. Overnight stay according to the final itinerary.',
      'Day 5 — Breakfast and departure towards NJP/Bagdogra or onward destination.'
    ],
    note: 'North Sikkim routes are subject to permits, road conditions, weather and local operating rules. The final stay pattern should be confirmed with Sawaaden before booking.'
  },
  'Lachen & Gurudongmar': {
    duration: '5 Days / 4 Nights',
    route: 'Gangtok → Lachen → Gurudongmar Lake → Lachung → Yumthang / Zero Point → Gangtok',
    highlights: ['Lachen village', 'Thangu and high-altitude landscapes', 'Gurudongmar Lake', 'Lachung', 'Yumthang Valley and optional Zero Point'],
    days: [
      'Day 1 — Arrival and stay in Gangtok after the transfer from NJP/Bagdogra.',
      'Day 2 — Gangtok to Lachen through Mangan and North Sikkim mountain roads. Overnight stay in Lachen.',
      'Day 3 — Early morning Gurudongmar Lake excursion, return to Lachen and continue towards Lachung. Overnight stay in Lachung.',
      'Day 4 — Yumthang Valley excursion with Zero Point where permitted and accessible. Return/continue according to the selected package. Overnight stay.',
      'Day 5 — Return towards Gangtok and onward transfer to NJP/Bagdogra, depending on the final itinerary.'
    ],
    note: 'Gurudongmar and other high-altitude areas require eligibility/permits and are highly dependent on road and weather conditions.'
  },
  'Ravangla & Temi': {
    duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Ravangla → Temi Tea Garden → Gangtok / NJP',
    highlights: ['Ravangla and Buddha Park', 'Temi Tea Garden', 'Mountain viewpoints', 'Quiet South Sikkim villages'],
    days: [
      'Day 1 — Transfer to Ravangla and check in. Visit Buddha Park and explore the surrounding area. Overnight stay.',
      'Day 2 — Visit Temi Tea Garden and nearby scenic points, with time for local sightseeing. Overnight stay in Ravangla or as arranged.',
      'Day 3 — Breakfast and departure towards Gangtok, NJP/Bagdogra or the next destination.'
    ],
    note: 'This is a suggested short circuit; Sawaaden can adjust the route and number of nights to suit your dates.'
  },
  'Pelling Escape': {
    duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Pelling → Local West Sikkim sightseeing → Departure',
    highlights: ['Pelling viewpoints', 'Skywalk', 'Pemayangtse Monastery', 'Rabdentse Ruins', 'Kanchenjunga-facing landscapes'],
    days: [
      'Day 1 — Scenic transfer to Pelling and hotel check-in. Evening at leisure with mountain views. Overnight stay.',
      'Day 2 — Explore Pelling and nearby attractions such as Pemayangtse Monastery, Rabdentse and the Skywalk, depending on time and access. Overnight stay.',
      'Day 3 — Breakfast and departure towards Gangtok/NJP/Bagdogra or onward travel.'
    ],
    note: 'Sightseeing order can be changed to match road conditions and the traveller’s pace.'
  },
  'Lachen Village': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok → Lachen → North Sikkim sightseeing → Gangtok',
    highlights: ['Lachen village', 'Mountain roads and waterfalls', 'Thangu / Chopta Valley where accessible', 'North Sikkim landscapes'],
    days: [
      'Day 1 — Gangtok to Lachen through the Teesta and North Sikkim valleys. Overnight stay in Lachen.',
      'Day 2 — Early high-altitude sightseeing towards Thangu/Chopta Valley or other permitted areas. Return to Lachen. Overnight stay.',
      'Day 3 — Flexible North Sikkim sightseeing or onward transfer towards Lachung, depending on the selected package. Overnight stay.',
      'Day 4 — Return towards Gangtok and onward transfer.'
    ],
    note: 'North Sikkim access is permit-controlled and the exact route depends on current conditions.'
  },
  'Lachung & Yumthang': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok → Lachung → Yumthang + Zero Point → Gangtok',
    highlights: ['Lachung', 'Bhim Nala and other waterfalls', 'Yumthang Valley', 'Hot Spring area', 'Zero Point / Yumesamdong when accessible'],
    days: [
      'Day 1 — Gangtok to Lachung via scenic North Sikkim roads, waterfalls and Chungthang. Overnight stay in Lachung.',
      'Day 2 — Yumthang Valley excursion and optional Zero Point. Return to Lachung. Overnight stay.',
      'Day 3 — Relaxed Lachung morning or additional sightseeing, then return towards Gangtok according to the package. Overnight stay.',
      'Day 4 — Breakfast and onward departure from Gangtok.'
    ],
    note: 'Yumthang and Zero Point access depends on permits, weather and road conditions.'
  },
  'Khecheopalri Lake': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok / NJP → Pelling / Khecheopalri → West Sikkim sightseeing → Departure',
    highlights: ['Sacred Khecheopalri Lake', 'Forest and mountain scenery', 'Pelling', 'Nearby monasteries and heritage sites'],
    days: [
      'Day 1 — Transfer towards Pelling/West Sikkim and overnight stay.',
      'Day 2 — Visit Khecheopalri Lake and surrounding West Sikkim attractions. Overnight stay.',
      'Day 3 — Pelling, monasteries and viewpoints such as Pemayangtse/Rabdentse. Overnight stay.',
      'Day 4 — Breakfast and departure.'
    ],
    note: 'The itinerary can be shortened or combined with Pelling, Yuksom and Rabdentse.'
  },
  'Rabdentse Ruins': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok / NJP → Pelling → Rabdentse + West Sikkim → Departure',
    highlights: ['Rabdentse historic ruins', 'Pemayangtse Monastery', 'Pelling Skywalk', 'Kanchenjunga views'],
    days: [
      'Day 1 — Transfer to Pelling and check in. Overnight stay.',
      'Day 2 — Visit Rabdentse Ruins and Pemayangtse Monastery. Overnight stay.',
      'Day 3 — Pelling Skywalk and additional local sightseeing. Overnight stay.',
      'Day 4 — Breakfast and departure.'
    ],
    note: 'A good add-on to a wider Pelling or West Sikkim itinerary.'
  },
  'Yuksom': {
    duration: '4 Days / 3 Nights',
    route: 'Gangtok / Pelling → Yuksom → West Sikkim → Departure',
    highlights: ['Historic Yuksom', 'Dubdi Monastery', 'Norbugang Coronation Throne', 'Forest and Himalayan scenery'],
    days: [
      'Day 1 — Transfer to Yuksom and check in. Explore the village if time permits. Overnight stay.',
      'Day 2 — Visit historic sites such as Norbugang and Dubdi Monastery. Overnight stay.',
      'Day 3 — Flexible local sightseeing or combine with Khecheopalri/Pelling depending on the route. Overnight stay.',
      'Day 4 — Breakfast and departure.'
    ],
    note: 'Yuksom is also a gateway for trekking; trekking plans require separate preparation.'
  },
  'Rumtek & Monasteries': {
    duration: '3 Days / 2 Nights',
    route: 'Gangtok → Rumtek → Gangtok local sightseeing → Departure',
    highlights: ['Rumtek Monastery', 'Enchey Monastery', 'Do Drul Chorten', 'Gangtok viewpoints and MG Marg'],
    days: [
      'Day 1 — Arrival in Gangtok and evening around MG Marg. Overnight stay.',
      'Day 2 — Visit Rumtek Monastery and selected Gangtok monasteries/viewpoints. Overnight stay.',
      'Day 3 — Breakfast and departure or continuation to another Sikkim circuit.'
    ],
    note: 'A compact option for travellers who want culture and local sightseeing without long North Sikkim drives.'
  },
  'Gangtok': {
    duration: '3 Days / 2 Nights',
    route: 'NJP / Bagdogra → Gangtok → Gangtok sightseeing → Departure',
    highlights: ['MG Marg', 'Tashi View Point', 'Ganesh Tok / Hanuman Tok', 'Monasteries and local attractions'],
    days: [
      'Day 1 — Arrival in Gangtok and evening at MG Marg. Overnight stay.',
      'Day 2 — Full-day local sightseeing covering selected viewpoints, monasteries and city attractions. Overnight stay.',
      'Day 3 — Breakfast and departure or continue to Nathula/North/West/South Sikkim.'
    ],
    note: 'The route can be combined with Tsomgo/Nathula or another Sikkim circuit.'
  },
  'Darjeeling': {
    duration: '3 Days / 2 Nights',
    route: 'Sikkim / NJP → Darjeeling → Local sightseeing → Departure',
    highlights: ['Tiger Hill', 'Batasia Loop', 'Darjeeling Mall', 'Tea gardens', 'Himalayan views'],
    days: [
      'Day 1 — Transfer to Darjeeling and evening around the Mall/Chowrasta. Overnight stay.',
      'Day 2 — Early Tiger Hill sunrise followed by local sightseeing and tea garden visits. Overnight stay.',
      'Day 3 — Breakfast and departure to NJP/Bagdogra or onward destination.'
    ],
    note: 'Darjeeling can be added before or after a Sikkim itinerary.'
  },
  'Tsomgo Lake': {
    duration: '3 Days / 2 Nights',
    route: 'NJP / Bagdogra → Gangtok → Tsomgo Lake + Baba Mandir → Departure',
    highlights: ['Tsomgo (Changu) Lake', 'Baba Mandir', 'Gangtok', 'Optional Nathula Pass'],
    days: [
      'Day 1 — Transfer to Gangtok and evening at leisure. Overnight stay.',
      'Day 2 — Excursion to Tsomgo Lake and Baba Mandir; Nathula can be added when permitted. Return to Gangtok. Overnight stay.',
      'Day 3 — Breakfast and departure.'
    ],
    note: 'High-altitude access is permit- and weather-dependent.'
  },
  'Gurudongmar': {
    duration: '5 Days / 4 Nights',
    route: 'Gangtok → Lachen → Gurudongmar → Lachung → Gangtok',
    highlights: ['Lachen', 'Thangu', 'Gurudongmar Lake', 'Lachung', 'North Sikkim scenery'],
    days: [
      'Day 1 — Gangtok arrival and overnight stay.',
      'Day 2 — Gangtok to Lachen via North Sikkim mountain roads. Overnight stay.',
      'Day 3 — Early Gurudongmar excursion, return to Lachen and transfer towards Lachung. Overnight stay.',
      'Day 4 — Lachung/Yumthang sightseeing and return/continue according to the package. Overnight stay.',
      'Day 5 — Return towards Gangtok and onward departure.'
    ],
    note: 'Gurudongmar is a high-altitude, permit-controlled destination and access can change without notice.'
  },
  'Silk Route': {
    duration: '4 Days / 3 Nights',
    route: 'NJP / Bagdogra → Aritar / Mankhim → Zuluk → Nathang → Gangtok / NJP',
    highlights: ['Aritar / Lampokhari', 'Zuluk and zig-zag roads', 'Thambi View Point', 'Nathang Valley', 'Kupup Lake and Baba Mandir'],
    days: [
      'Day 1 — NJP/Bagdogra to Aritar or Mankhim with local sightseeing. Overnight stay.',
      'Day 2 — Continue via Rongli and Lingtam towards Zuluk/Padamchen. Overnight stay.',
      'Day 3 — Sunrise/viewpoints around Zuluk, then Nathang Valley, Kupup Lake and other accessible high-altitude attractions. Overnight stay.',
      'Day 4 — Descend and transfer towards Gangtok or NJP/Bagdogra depending on the chosen route.'
    ],
    note: 'East Sikkim protected-area permits and route access must be confirmed before travel.'
  },
  'Temi': {
    duration: '3 Days / 2 Nights',
    route: 'Gangtok / NJP → Temi → Ravangla / South Sikkim → Departure',
    highlights: ['Temi Tea Garden', 'South Sikkim mountain scenery', 'Ravangla/Buddha Park option', 'Local villages'],
    days: [
      'Day 1 — Transfer towards South Sikkim and visit Temi Tea Garden if time permits. Overnight stay.',
      'Day 2 — Explore Temi and nearby South Sikkim attractions such as Ravangla/Buddha Park. Overnight stay.',
      'Day 3 — Breakfast and departure.'
    ],
    note: 'Best used as part of a wider South Sikkim circuit.'
  }
};

const defaultTour = (name) => ({
  duration: 'Custom itinerary',
  route: `${name} • Sikkim`,
  highlights: [`Explore ${name}`, 'Local sightseeing and scenic Himalayan viewpoints', 'Customised transport and stay options'],
  days: [
    `Day 1 — Arrive/transfer and begin exploring ${name}.`,
    `Day 2 — Local sightseeing around ${name} and nearby attractions.`,
    'Day 3 — Continue sightseeing or connect with another Sikkim destination. Final duration can be extended or shortened.'
  ],
  note: 'This is a suggested outline. Sawaaden should confirm the final route, duration, permits and inclusions before booking.'
});

const whatsappNumber = '919775552239';
const referralNumber = '9332095869';
const whatsappMessage = (tour = '') => {
  const subject = tour ? ` I am interested in the ${tour} tour.` : ' I would like to enquire about a Sikkim tour.';
  return `Hello Sawaaden Tours & Travels, I came to your website and was referred by ${referralNumber}.${subject} Please share the itinerary, price and availability.`;
};

const makeWhatsAppUrl = (tour = '') => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage(tour))}`;

/* Make every existing WhatsApp button open a pre-filled enquiry. */
document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach((link) => {
  link.href = makeWhatsAppUrl();
});

const modalStyles = document.createElement('style');
modalStyles.textContent = `
.tour-modal-backdrop{position:fixed;inset:0;background:rgba(10,22,18,.68);display:none;align-items:center;justify-content:center;padding:18px;z-index:9999;backdrop-filter:blur(4px)}
.tour-modal-backdrop.open{display:flex}
.tour-modal{width:min(760px,100%);max-height:min(88vh,820px);overflow:auto;background:#fffdf8;border-radius:22px;box-shadow:0 25px 80px rgba(0,0,0,.3);position:relative;color:#172c25}
.tour-modal-close{position:sticky;top:14px;float:right;margin:14px 14px 0 0;width:42px;height:42px;border:0;border-radius:50%;background:#173a31;color:#fff;font-size:25px;cursor:pointer;z-index:2}
.tour-modal-content{padding:34px 34px 30px}.tour-modal-eyebrow{font-size:12px;letter-spacing:2.5px;font-weight:700;color:#b17c45;margin:0 0 10px}.tour-modal h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(30px,5vw,44px);line-height:1.05;margin:0 0 10px}.tour-duration{font-weight:700;font-size:18px;margin:0 0 8px}.tour-route{color:#68716e;line-height:1.6;margin:0 0 22px}.tour-modal h3{font-size:18px;margin:24px 0 10px}.tour-highlights{display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0;list-style:none}.tour-highlights li{background:#edf2ed;border-radius:999px;padding:8px 12px;font-size:14px}.tour-days{padding-left:20px;margin:0}.tour-days li{padding:7px 0;line-height:1.55}.tour-note{background:#f4eee5;border-left:4px solid #b17c45;padding:12px 14px;margin:22px 0;color:#5c5147;line-height:1.5}.tour-modal-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}.tour-modal-actions a{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-radius:999px;padding:13px 20px;font-weight:700}.tour-wa{background:#173a31;color:#fff}.tour-close-link{border:1px solid #173a31;color:#173a31;background:#fffdf8}
@media(max-width:600px){.tour-modal-content{padding:28px 20px 24px}.tour-modal{border-radius:18px}.tour-highlights li{font-size:13px}}
`;
document.head.appendChild(modalStyles);

const modal = document.createElement('div');
modal.className = 'tour-modal-backdrop';
modal.innerHTML = `<div class="tour-modal" role="dialog" aria-modal="true" aria-labelledby="tour-modal-title"><button class="tour-modal-close" type="button" aria-label="Close tour details">×</button><div class="tour-modal-content"></div></div>`;
document.body.appendChild(modal);

const modalContent = modal.querySelector('.tour-modal-content');
const closeModal = () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';
};

const openTour = (name) => {
  const data = tourDetails[name] || defaultTour(name);
  const safeName = String(name);
  modalContent.innerHTML = `
    <p class="tour-modal-eyebrow">SAWAADEN TOUR PLAN</p>
    <h2 id="tour-modal-title">${safeName}</h2>
    <p class="tour-duration">${data.duration}</p>
    <p class="tour-route">${data.route}</p>
    <h3>Highlights</h3>
    <ul class="tour-highlights">${data.highlights.map((item) => `<li>${item}</li>`).join('')}</ul>
    <h3>Day-by-day plan</h3>
    <ol class="tour-days">${data.days.map((day) => `<li>${day}</li>`).join('')}</ol>
    <div class="tour-note"><strong>Important:</strong> ${data.note}</div>
    <div class="tour-modal-actions">
      <a class="tour-wa" href="${makeWhatsAppUrl(safeName)}" target="_blank" rel="noopener noreferrer">WhatsApp about this tour →</a>
      <a class="tour-close-link" href="#">Close</a>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const tourLinkSelector = '.package-card a, .option-grid a, .destination-list a, .band-more-grid a';
document.querySelectorAll(tourLinkSelector).forEach((link) => {
  link.addEventListener('click', (event) => {
    const card = link.closest('article, a');
    const title = card?.querySelector('h3')?.textContent?.trim() || link.textContent.replace(/→|\+/g, '').trim();
    if (!title) return;
    event.preventDefault();
    openTour(title);
  });
});

modal.addEventListener('click', (event) => {
  if (event.target === modal || event.target.closest('.tour-modal-close') || event.target.closest('.tour-close-link')) {
    event.preventDefault();
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
