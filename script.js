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
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenuState(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 850) setMenuState(false); });

const effects = document.createElement('link');
effects.rel = 'stylesheet';
effects.href = 'hover-effects.css';
document.head.appendChild(effects);
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const whatsappNumber = '919775552239';
const referralNumber = '9332095869';
const makeWhatsAppUrl = (tour = '') => {
  const subject = tour ? ` I am interested in the ${tour} tour.` : ' I would like to enquire about a Sikkim tour.';
  const message = `Hello Sawaaden Tours & Travels, I came to your website and was referred by ${referralNumber}.${subject} Please share the itinerary, price, inclusions and availability.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach((link) => { link.href = makeWhatsAppUrl(); });

const common = {
  inclusions: ['Hotel / homestay on twin sharing', 'Breakfast and dinner as specified', 'Private or shared sightseeing vehicle as quoted', 'Driver, fuel and standard route transfers', 'Sightseeing listed in the itinerary', 'Permit assistance for restricted areas where applicable'],
  exclusions: ['Lunch unless specifically included', 'Flights / train tickets', 'Personal expenses and tips', 'Entry fees unless specifically mentioned', 'Special permit charges where applicable'],
  note: 'Prices are market benchmarks, not a guaranteed Sawaaden quote. Final pricing depends on travel date, group size, hotel category, vehicle type, permits, meals and road conditions. Sawaaden should confirm the final itinerary and quote before booking.'
};

const tourDetails = {
  'Gangtok': {
    region:'East Sikkim', duration:'3 Nights / 4 Days', price:'₹11,000–₹15,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Singtam / Rangpo → Gangtok → local sightseeing → departure',
    description:'A comfortable first-time Sikkim package centred on Gangtok, the state capital. The journey begins from Siliguri, NJP or Bagdogra and follows the Teesta valley through Rangpo and Singtam before climbing to Gangtok. Two or three nights can be used for MG Marg, viewpoints, monasteries and optional East Sikkim excursions. The package is easy to customise for couples, families and groups.',
    highlights:['MG Marg','Tashi View Point','Ganesh Tok','Hanuman Tok','Enchey Monastery','Rumtek optional'],
    days:[
      'Day 1 • 08:00–09:00 — Pickup from NJP/Bagdogra/Siliguri. Drive via Rangpo/Singtam and Teesta valley. Reach Gangtok around 15:00–17:00. Hotel check-in and evening at MG Marg. Dinner and overnight in Gangtok.',
      'Day 2 • 09:00–17:00 — Breakfast, then Gangtok sightseeing: Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery and selected local attractions. Return by evening. Dinner and overnight in Gangtok.',
      'Day 3 • 08:00–17:00 — Breakfast and optional Tsomgo/Baba Mandir excursion subject to permit and road conditions, or a relaxed Gangtok/Rumtek sightseeing day. Dinner and overnight in Gangtok.',
      'Day 4 • 07:30–09:00 — Breakfast and checkout. Transfer to NJP/Bagdogra/Siliguri or continue to another Sikkim destination.'
    ], meals:'Breakfast daily + dinner on stay nights; lunch normally at traveller’s own cost.', stay:'2–3 nights in Gangtok depending on the selected variant.', inclusions:common.inclusions, exclusions:common.exclusions, note:common.note
  },
  'Nathula & Tsomgo': {
    region:'East Sikkim', duration:'3 Nights / 4 Days', price:'₹8,000–₹12,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Gangtok → Tsomgo Lake → Baba Mandir → Nathula → Gangtok → departure',
    description:'This package combines a Gangtok stay with the high-altitude East Sikkim circuit of Tsomgo Lake, Baba Mandir and Nathula Pass. The route is permit-controlled and access depends on weather, road and government restrictions. Nathula is an Indian-tourist-only restricted destination under current Sikkim Tourism guidance, so the final itinerary must be checked before travel.',
    highlights:['Tsomgo Lake','Baba Mandir','Nathula Pass','Gangtok','MG Marg','Mountain viewpoints'],
    days:['Day 1 • 08:00–17:00 — Pickup from NJP/Bagdogra/Siliguri, drive through Rangpo/Singtam to Gangtok. Evening MG Marg. Dinner and overnight.', 'Day 2 • 09:00–16:00 — Breakfast and Gangtok local sightseeing. Dinner and overnight.', 'Day 3 • 06:30–16:00 — Early breakfast and permit-based drive to Tsomgo Lake, Baba Mandir and Nathula. Return to Gangtok by late afternoon/evening. Dinner and overnight.', 'Day 4 • 07:30–09:00 — Breakfast, checkout and transfer to NJP/Bagdogra/Siliguri or onward destination.'],
    meals:'Breakfast daily + dinner on stay nights. Lunch during sightseeing is normally extra.', stay:'3 nights Gangtok.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Nathula/Tsomgo access is permit and weather dependent. The current market benchmark for comparable Gangtok packages starts around ₹11,000–₹15,000; specialist high-altitude add-ons vary by vehicle and permit conditions.'
  },
  'Tsomgo Lake': {
    region:'East Sikkim', duration:'2 Nights / 3 Days', price:'₹7,000–₹10,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Gangtok → Tsomgo Lake + Baba Mandir → Gangtok → departure',
    description:'A shorter East Sikkim escape for travellers who want Gangtok plus Tsomgo Lake without committing to a longer circuit. The package keeps the first and last day for transfers and gives the middle day to the high-altitude Tsomgo and Baba Mandir route, with Nathula available as an optional permit-based extension.',
    highlights:['Tsomgo Lake','Baba Mandir','Gangtok','MG Marg','Optional Nathula'],
    days:['Day 1 • 08:00–17:00 — Siliguri/NJP/Bagdogra pickup and transfer to Gangtok via Rangpo/Singtam. Evening at MG Marg. Dinner and overnight.', 'Day 2 • 06:30–16:00 — Breakfast and permit-based Tsomgo Lake + Baba Mandir excursion. Optional Nathula if permitted. Return to Gangtok. Dinner and overnight.', 'Day 3 • 07:30–09:00 — Breakfast, checkout and transfer to NJP/Bagdogra/Siliguri.'],
    meals:'Breakfast and dinner included on the usual package plan; lunch extra.', stay:'2 nights Gangtok.', inclusions:common.inclusions, exclusions:common.exclusions, note:common.note
  },
  'Old Silk Route': {
    region:'East Sikkim', duration:'4 Nights / 5 Days', price:'₹9,500–₹14,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Aritar / Mankhim → Rongli → Zuluk → Nathang → Kupup → Gangtok / NJP',
    description:'A dedicated Old Silk Route road circuit following the historic East Sikkim trade-road landscape. The journey leaves the Siliguri side, enters the protected Rongli corridor and climbs towards Zuluk, Nathang Valley and the high viewpoints around Kupup. Expect homestays rather than conventional hotels on the Zuluk side, winding roads, sunrise viewpoints and a much quieter experience than central Gangtok.',
    highlights:['Aritar / Lampokhari','Rongli','Zuluk','32 hairpin bends','Thambi View Point','Nathang Valley','Kupup Lake'],
    days:['Day 1 • 07:30–17:00 — Pickup from NJP/Bagdogra/Siliguri. Drive towards Aritar/Mankhim via the Teesta and lower East Sikkim roads. Check in. Dinner and overnight.', 'Day 2 • 08:00–17:00 — Breakfast, permit/checkpoint formalities around Rongli and drive towards Lingtam/Zuluk/Padamchen. Scenic stops and village sightseeing. Dinner and overnight in the Silk Route homestay area.', 'Day 3 • 05:00–17:00 — Early start for Thambi View Point sunrise, then Lungthung, Nathang Valley, Kupup and accessible high-altitude viewpoints. Return to the scheduled homestay. Breakfast and dinner.', 'Day 4 • 08:00–16:00 — Breakfast and descend through the Silk Route towards Gangtok or another overnight point, depending on the chosen circuit.', 'Day 5 • 08:00–17:00 — Breakfast and final transfer to NJP/Bagdogra/Siliguri or onward Sikkim destination.'],
    meals:'Breakfast + dinner throughout the standard market package; lunches normally extra.', stay:'Village homestays on the Silk Route plus one Gangtok/other hotel night depending on the route.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Current 2026 market references place a 4N/5D Zuluk Silk Route package around ₹12,000/person, with breakfast and dinner, permit and transport in some packages. Sawaaden should quote according to actual vehicle, hotel/homestay and group size.'
  },
  'Silk Route': {
    region:'East Sikkim', duration:'4 Nights / 5 Days', price:'₹9,500–₹14,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Aritar → Zuluk → Nathang → Kupup → Gangtok / NJP',
    description:'A broader Silk Route option covering Aritar/Lampokhari, Zuluk, Nathang Valley and the high-route viewpoints. It is designed for travellers who want more time on the route rather than treating Zuluk as a quick overnight stop.',
    highlights:['Aritar','Lampokhari Lake','Zuluk','Thambi','Nathang','Kupup'],
    days:['Day 1 • 07:30–17:00 — Pickup and transfer to Aritar/Mankhim. Check in and local sightseeing.', 'Day 2 • 08:00–17:00 — Rongli checkpoint and onward drive to Zuluk/Padamchen. Homestay and dinner.', 'Day 3 • 05:00–17:00 — Sunrise at Thambi, Lungthung, Nathang and Kupup depending on road access. Return to homestay.', 'Day 4 • 08:00–16:00 — Descend and continue to Gangtok. Evening MG Marg. Dinner and overnight.', 'Day 5 • 08:00–17:00 — Breakfast and departure to NJP/Bagdogra/Siliguri.'],
    meals:'Breakfast + dinner; lunch extra unless quoted.', stay:'Homestay on the route + Gangtok hotel.', inclusions:common.inclusions, exclusions:common.exclusions, note:common.note
  },
  'Rumtek & Monasteries': {
    region:'East Sikkim', duration:'2 Nights / 3 Days', price:'₹7,000–₹10,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Gangtok → Rumtek → Gangtok monasteries → departure',
    description:'A culture-focused Gangtok package for travellers who prefer monasteries, viewpoints and local heritage over long high-altitude drives. Rumtek Monastery is the main excursion, supported by Enchey Monastery, Do Drul Chorten, MG Marg and selected city viewpoints.',
    highlights:['Rumtek Monastery','Enchey Monastery','Do Drul Chorten','MG Marg','Gangtok viewpoints'],
    days:['Day 1 • 08:00–17:00 — Siliguri/NJP/Bagdogra pickup and transfer to Gangtok. Evening MG Marg. Dinner and overnight.', 'Day 2 • 09:00–17:00 — Breakfast, Rumtek Monastery excursion and Gangtok monastery/viewpoint circuit. Return to hotel. Dinner and overnight.', 'Day 3 • 08:00–10:00 — Breakfast and checkout. Departure or extension to another Sikkim circuit.'],
    meals:'Breakfast + dinner.', stay:'2 nights Gangtok.', inclusions:common.inclusions, exclusions:common.exclusions, note:common.note
  },
  'North Sikkim': {
    region:'North Sikkim', duration:'4 Nights / 5 Days', price:'₹15,000–₹20,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Gangtok → Lachung → Yumthang → Zero Point → Gangtok → departure',
    description:'A classic North Sikkim package built around Gangtok, Lachung, Yumthang Valley and optional Zero Point. The route crosses high-altitude terrain and restricted areas, so permits and road access must be confirmed before departure. This package is intentionally paced with a Gangtok night before the North Sikkim drive.',
    highlights:['Gangtok','Chungthang','Lachung','Yumthang Valley','Zero Point','North Sikkim waterfalls'],
    days:['Day 1 • 08:00–17:00 — Pickup from NJP/Bagdogra/Siliguri and transfer to Gangtok via Rangpo/Singtam. Dinner and overnight.', 'Day 2 • 07:00–17:00 — Breakfast and Gangtok local sightseeing or preparation/permit formalities. Dinner and overnight.', 'Day 3 • 07:00–17:00 — Early breakfast and drive to Lachung via Mangan/Chungthang with waterfall and valley stops. Dinner and overnight in Lachung.', 'Day 4 • 05:30–17:00 — Breakfast/early tea, Yumthang Valley and Zero Point if open. Return towards Lachung/Gangtok according to the current permit itinerary.', 'Day 5 • 07:00–17:00 — Breakfast and return to Gangtok/NJP/Bagdogra as scheduled.'],
    meals:'Breakfast + dinner are commonly included; lunch is generally extra.', stay:'1–2 nights Gangtok + Lachung stay depending on permit itinerary.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Current 2026 market references show North Sikkim packages from about ₹14,999 for 3N/4D and ₹16,999 for 4N/5D; more extensive 5N/6D circuits start around ₹19,999. Final Sawaaden pricing depends on vehicle, hotel and permits.'
  },
  'Lachung & Yumthang': {
    region:'North Sikkim', duration:'3 Nights / 4 Days', price:'₹14,000–₹18,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Gangtok → Lachung → Yumthang + Zero Point → Gangtok / departure',
    description:'A dedicated Lachung and Yumthang Valley package for travellers who want the flower valley, alpine landscapes and high mountain roads without the Lachen/Gurudongmar circuit. The standard structure uses Gangtok as the gateway and Lachung as the North Sikkim stay.',
    highlights:['Lachung','Seven Sisters Waterfall','Chungthang','Yumthang','Hot Springs','Zero Point'],
    days:['Day 1 • 08:00–17:00 — NJP/Bagdogra/Siliguri pickup, drive to Gangtok. Hotel check-in and dinner.', 'Day 2 • 07:00–17:00 — Early transfer Gangtok → Mangan → Chungthang → Lachung. En-route waterfalls and mountain scenery. Dinner and overnight in Lachung.', 'Day 3 • 05:30–16:00 — Yumthang Valley excursion and Zero Point when accessible. Return to Lachung. Breakfast and dinner.', 'Day 4 • 07:00–17:00 — Breakfast and return towards Gangtok/NJP/Bagdogra depending on the confirmed route.'],
    meals:'Breakfast + dinner; lunches extra unless specifically included.', stay:'1 night Gangtok + 1–2 nights Lachung depending on package.', inclusions:common.inclusions, exclusions:common.exclusions, note:'A current sharing operator lists 3D/2N Lachung + Yumthang from ₹4,000/seat from Gangtok, while full private North Sikkim packages are materially higher. Comparable full packages commonly start around ₹14,999–₹17,999/person.'
  },
  'Lachen & Gurudongmar': {
    region:'North Sikkim', duration:'4 Nights / 5 Days', price:'₹15,000–₹20,000/person', pickup:'NJP / Bagdogra / Siliguri',
    route:'NJP / Bagdogra → Gangtok → Lachen → Thangu → Gurudongmar → Lachung/Yumthang → Gangtok',
    description:'A high-altitude North Sikkim circuit combining Lachen and Gurudongmar Lake with the Lachung/Yumthang side. It is one of the more demanding road itineraries because the route rises rapidly to very high altitude. The schedule therefore uses early starts, permit checks and flexible sightseeing windows.',
    highlights:['Lachen','Thangu','Chopta Valley','Gurudongmar Lake','Lachung','Yumthang'],
    days:['Day 1 • 08:00–17:00 — NJP/Bagdogra/Siliguri pickup to Gangtok. Dinner and overnight.', 'Day 2 • 06:30–17:00 — Breakfast and Gangtok → Mangan → Lachen. Check in and rest. Dinner and overnight.', 'Day 3 • 04:30–16:00 — Early departure for Thangu and Gurudongmar Lake. Return and continue according to the approved permit itinerary. Dinner and overnight.', 'Day 4 • 06:30–17:00 — Transfer towards Lachung, with Yumthang/Zero Point depending on the confirmed route and access. Overnight as scheduled.', 'Day 5 • 07:00–17:00 — Breakfast and return towards Gangtok/NJP/Bagdogra.'],
    meals:'Breakfast + dinner commonly included; lunch extra.', stay:'Gangtok + Lachen + Lachung/North Sikkim stays according to permit itinerary.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Gurudongmar is restricted and permit-controlled. Current market benchmarks for 4N/5D North Sikkim circuits are roughly ₹15,000–₹17,000+, with more complete circuits higher.'
  },
  'Lachen Village': {
    region:'North Sikkim', duration:'3 Nights / 4 Days', price:'₹12,000–₹16,000/person', pickup:'Gangtok / NJP / Bagdogra',
    route:'NJP / Bagdogra → Gangtok → Lachen → Thangu / Chopta Valley → Gangtok',
    description:'A Lachen-focused itinerary for travellers who want the quieter North Sikkim village experience and access towards Thangu and Chopta Valley. It can be expanded into a Gurudongmar package when permits and road conditions allow.',
    highlights:['Lachen village','Thangu','Chopta Valley','Mountain roads','North Sikkim landscapes'],
    days:['Day 1 • 08:00–17:00 — NJP/Bagdogra/Siliguri to Gangtok. Dinner and overnight.', 'Day 2 • 06:30–17:00 — Gangtok to Lachen via Mangan and Chungthang. Check in and rest. Dinner.', 'Day 3 • 04:30–16:00 — High-altitude Thangu/Chopta Valley sightseeing where permitted. Return to Lachen. Breakfast and dinner.', 'Day 4 • 07:00–17:00 — Breakfast and return to Gangtok/NJP/Bagdogra.'],
    meals:'Breakfast + dinner; lunch extra.', stay:'Gangtok + Lachen.', inclusions:common.inclusions, exclusions:common.exclusions, note:common.note
  },
  'Gurudongmar': {
    region:'North Sikkim', duration:'4 Nights / 5 Days', price:'₹15,000–₹20,000/person', pickup:'Gangtok / NJP / Bagdogra',
    route:'Gangtok → Lachen → Thangu → Gurudongmar → Lachung/Yumthang → Gangtok',
    description:'A dedicated Gurudongmar Lake package focused on one of North Sikkim’s most dramatic high-altitude destinations. The journey is early-start heavy because the lake is best visited during the morning access window. The package includes Lachen as the base for the high-altitude excursion.',
    highlights:['Lachen','Thangu','Gurudongmar Lake','Chopta Valley','Lachung optional'],
    days:['Day 1 • 08:00–17:00 — Arrival/transfer to Gangtok. Dinner and overnight.', 'Day 2 • 06:30–17:00 — Gangtok to Lachen through Mangan and North Sikkim. Dinner and overnight.', 'Day 3 • 04:30–15:00 — Early Lachen → Thangu → Gurudongmar excursion. Return to Lachen and rest.', 'Day 4 • 06:30–17:00 — Continue towards Lachung/Yumthang if included, or return towards Gangtok.', 'Day 5 • 07:00–17:00 — Breakfast and final transfer.'],
    meals:'Breakfast + dinner; lunch extra.', stay:'Gangtok + Lachen plus optional Lachung night.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Gurudongmar is for eligible travellers under current permit rules and is subject to weather/road conditions. Current full North Sikkim benchmarks start around ₹15,000/person.'
  },
  'Pelling Escape': {
    region:'West Sikkim', duration:'2 Nights / 3 Days', price:'₹7,000–₹10,000/person', pickup:'NJP / Bagdogra / Siliguri / Gangtok',
    route:'NJP / Bagdogra / Gangtok → Pelling → Pemayangtse → Rabdentse → Skywalk → departure',
    description:'A compact West Sikkim escape centred on Pelling, combining Kanchenjunga-facing viewpoints with monasteries and heritage sites. Pelling works well as a standalone 2-night trip or as a middle stop between Gangtok and Darjeeling/NJP.',
    highlights:['Pelling Skywalk','Pemayangtse Monastery','Rabdentse Ruins','Kanchenjunga viewpoints','Local monasteries'],
    days:['Day 1 • 08:00–17:00 — Pickup from NJP/Bagdogra/Gangtok and scenic drive to Pelling. Check in around 15:00–17:00. Dinner and overnight.', 'Day 2 • 08:00–17:00 — Breakfast and West Sikkim sightseeing: Skywalk, Pemayangtse, Rabdentse and selected viewpoints. Dinner and overnight.', 'Day 3 • 08:00–17:00 — Breakfast, checkout and departure to NJP/Bagdogra/Gangtok or onward destination.'],
    meals:'Breakfast + dinner; lunch extra.', stay:'2 nights Pelling.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Comparable 3N/4D Gangtok-Pelling packages currently start around ₹14,999/person, while specialist Pelling combinations start around ₹14,999. A shorter 2N/3D Sawaaden quote can be lower depending on vehicle and hotel.'
  },
  'Khecheopalri Lake': {
    region:'West Sikkim', duration:'3 Nights / 4 Days', price:'₹9,000–₹14,000/person', pickup:'NJP / Bagdogra / Gangtok',
    route:'NJP / Bagdogra / Gangtok → Pelling → Khecheopalri Lake → West Sikkim → departure',
    description:'A quieter West Sikkim package built around the sacred forest-framed Khecheopalri Lake, with Pelling and nearby heritage attractions included. The route is ideal for travellers who prefer nature, monasteries and slower sightseeing rather than a packed city itinerary.',
    highlights:['Khecheopalri Lake','Pelling','Pemayangtse','Rabdentse','Forest trails'],
    days:['Day 1 • 08:00–17:00 — Transfer to Pelling/West Sikkim. Hotel check-in and rest. Dinner and overnight.', 'Day 2 • 08:00–17:00 — Breakfast, Khecheopalri Lake excursion and nearby forest/monastery stops. Return to Pelling. Dinner.', 'Day 3 • 08:00–17:00 — Breakfast, Pelling Skywalk, Pemayangtse and Rabdentse sightseeing. Dinner and overnight.', 'Day 4 • 08:00–17:00 — Breakfast, checkout and departure.'],
    meals:'Breakfast + dinner.', stay:'3 nights West Sikkim/Pelling area.', inclusions:common.inclusions, exclusions:common.exclusions, note:common.note
  },
  'Rabdentse Ruins': {
    region:'West Sikkim', duration:'3 Nights / 4 Days', price:'₹9,000–₹14,000/person', pickup:'NJP / Bagdogra / Gangtok',
    route:'NJP / Bagdogra / Gangtok → Pelling → Rabdentse → Pemayangtse → Skywalk → departure',
    description:'A heritage-focused Pelling itinerary centred on Rabdentse, the historic ruins surrounded by forest, with Pemayangtse and the Pelling Skywalk added for a balanced culture-and-landscape trip.',
    highlights:['Rabdentse Ruins','Pemayangtse Monastery','Pelling Skywalk','Kanchenjunga views'],
    days:['Day 1 • 08:00–17:00 — Transfer to Pelling and hotel check-in. Dinner and overnight.', 'Day 2 • 08:00–17:00 — Breakfast, Rabdentse Ruins, Pemayangtse and surrounding viewpoints. Dinner and overnight.', 'Day 3 • 08:00–17:00 — Breakfast, Pelling Skywalk and flexible local sightseeing. Dinner and overnight.', 'Day 4 • 08:00–17:00 — Breakfast and departure.'],
    meals:'Breakfast + dinner.', stay:'3 nights Pelling area.', inclusions:common.inclusions, exclusions:common.exclusions, note:common.note
  },
  'Yuksom': {
    region:'West Sikkim', duration:'3 Nights / 4 Days', price:'₹9,000–₹14,000/person', pickup:'NJP / Bagdogra / Gangtok / Pelling',
    route:'Gangtok / Pelling → Yuksom → Norbugang → Dubdi → West Sikkim → departure',
    description:'A historic West Sikkim circuit around Yuksom, the traditional gateway to the Kanchenjunga trekking region. The package is designed for travellers interested in Sikkim’s early history, monasteries, forests and village landscapes, with optional trekking extensions available separately.',
    highlights:['Yuksom','Norbugang','Dubdi Monastery','Forest trails','Historic sites'],
    days:['Day 1 • 08:00–17:00 — Transfer to Yuksom and hotel/homestay check-in. Local village walk. Dinner and overnight.', 'Day 2 • 08:00–16:00 — Breakfast, Norbugang and Dubdi Monastery sightseeing, with optional short forest walk. Dinner.', 'Day 3 • 08:00–17:00 — Breakfast and optional Khecheopalri/Pelling extension or relaxed Yuksom day. Dinner and overnight.', 'Day 4 • 08:00–17:00 — Breakfast and departure.'],
    meals:'Breakfast + dinner.', stay:'3 nights Yuksom/Pelling area.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Trekking beyond local sightseeing requires separate route planning, guide support and applicable permissions.'
  },
  'Ravangla & Temi': {
    region:'South Sikkim', duration:'2 Nights / 3 Days', price:'₹6,000–₹9,000/person', pickup:'NJP / Bagdogra / Gangtok',
    route:'NJP / Bagdogra / Gangtok → Ravangla → Buddha Park → Temi Tea Garden → departure',
    description:'A relaxed South Sikkim package connecting Ravangla’s Buddha Park with Temi Tea Garden and the quieter roads of the south. It is a good short extension after Gangtok and can be combined with Namchi, Samdruptse or Pelling.',
    highlights:['Ravangla','Buddha Park','Temi Tea Garden','South Sikkim villages','Mountain viewpoints'],
    days:['Day 1 • 08:00–17:00 — Pickup from Gangtok/NJP/Bagdogra and drive to Ravangla. Buddha Park and local sightseeing. Dinner and overnight.', 'Day 2 • 08:00–17:00 — Breakfast, Temi Tea Garden and nearby scenic points. Return to Ravangla. Dinner and overnight.', 'Day 3 • 08:00–17:00 — Breakfast, checkout and departure towards Gangtok/NJP/Bagdogra or onward Pelling.'],
    meals:'Breakfast + dinner.', stay:'2 nights Ravangla/South Sikkim.', inclusions:common.inclusions, exclusions:common.exclusions, note:'The ₹6,000–₹9,000 range is a practical benchmark for a short 2N/3D South Sikkim circuit; final private-cab pricing depends heavily on group size.'
  },
  'Temi': {
    region:'South Sikkim', duration:'1 Night / 2 Days', price:'₹4,500–₹7,000/person', pickup:'Gangtok / NJP / Bagdogra',
    route:'Gangtok / NJP → Temi Tea Garden → Ravangla / South Sikkim → departure',
    description:'A short tea-country escape focused on Temi Tea Garden and the surrounding South Sikkim landscape. It works particularly well as an add-on to Gangtok, Ravangla or Pelling rather than as a long standalone holiday.',
    highlights:['Temi Tea Garden','Tea estate roads','Ravangla optional','Village landscapes'],
    days:['Day 1 • 08:00–17:00 — Pickup and drive towards Temi. Tea-garden visit and scenic stops. Check in at South Sikkim stay. Dinner and overnight.', 'Day 2 • 08:00–17:00 — Breakfast, optional Ravangla/Buddha Park stop and departure to Gangtok/NJP/Bagdogra.'],
    meals:'Breakfast + dinner.', stay:'1 night South Sikkim.', inclusions:common.inclusions, exclusions:common.exclusions, note:common.note
  },
  'Darjeeling': {
    region:'Darjeeling', duration:'2 Nights / 3 Days', price:'₹7,000–₹10,000/person', pickup:'NJP / Bagdogra / Siliguri / Sikkim',
    route:'NJP / Bagdogra / Sikkim → Darjeeling → Tiger Hill → Batasia → Ghoom → departure',
    description:'A classic Darjeeling hill-station package covering the sunrise viewpoint, heritage railway surroundings, monasteries, tea-country scenery and Chowrasta. It can be combined with Sikkim before or after the stay.',
    highlights:['Tiger Hill','Batasia Loop','Ghoom','Chowrasta / Mall','Tea gardens','Himalayan views'],
    days:['Day 1 • 08:00–17:00 — Pickup from NJP/Bagdogra/Sikkim and drive to Darjeeling. Check-in and evening around Chowrasta/Mall. Dinner and overnight.', 'Day 2 • 04:00–09:00 — Early Tiger Hill sunrise, Batasia Loop and Ghoom, followed by breakfast and local sightseeing. Afternoon tea garden/market time. Dinner and overnight.', 'Day 3 • 08:00–17:00 — Breakfast, checkout and departure to NJP/Bagdogra/Sikkim.'],
    meals:'Breakfast + dinner.', stay:'2 nights Darjeeling.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Comparable 3N/4D Darjeeling packages are currently listed around ₹14,999/person; shorter 2N/3D packages can be lower.'
  },
  'Kalimpong': {
    region:'Kalimpong', duration:'2 Nights / 3 Days', price:'₹6,000–₹10,000/person', pickup:'NJP / Bagdogra / Siliguri / Sikkim',
    route:'NJP / Bagdogra / Siliguri → Kalimpong → Deolo → Durpin Dara → local sightseeing → departure',
    description:'A slower Himalayan hill escape in Kalimpong, suitable for travellers who want viewpoints, heritage buildings, monasteries, rivers and forested landscapes without the denser sightseeing schedule of Darjeeling. Kalimpong also works well as a connecting stop between Sikkim and Darjeeling.',
    highlights:['Deolo Hill','Durpin Dara','Morgan House','Relli River','Changey Waterfall','Neora Valley area'],
    days:['Day 1 • 08:00–16:00 — Pickup from NJP/Bagdogra/Siliguri/Sikkim and transfer to Kalimpong. Town and viewpoint sightseeing. Dinner and overnight.', 'Day 2 • 08:00–17:00 — Breakfast, Deolo Hill, Durpin Dara, Morgan House and selected local attractions. Optional Relli River/Changey Falls depending on road time. Dinner and overnight.', 'Day 3 • 08:00–17:00 — Breakfast, checkout and departure towards NJP/Bagdogra, Darjeeling or Sikkim.'],
    meals:'Breakfast + dinner.', stay:'2 nights Kalimpong.', inclusions:common.inclusions, exclusions:common.exclusions, note:'Current 2026 comparable multi-destination packages including Kalimpong start around ₹29,999 for 8N/9D, while short local packages vary by hotel and vehicle. This ₹6,000–₹10,000 range is a benchmark for a 2N/3D land package.'
  }
};

const tourCatalog = {
  'Darjeeling':['Darjeeling'],
  'East Sikkim':['Gangtok','Nathula & Tsomgo','Tsomgo Lake','Old Silk Route','Silk Route','Rumtek & Monasteries'],
  'North Sikkim':['North Sikkim','Lachen & Gurudongmar','Lachen Village','Lachung & Yumthang','Gurudongmar'],
  'West Sikkim':['Pelling Escape','Khecheopalri Lake','Rabdentse Ruins','Yuksom'],
  'South Sikkim':['Ravangla & Temi','Temi'],
  'Kalimpong':['Kalimpong']
};

const planPackages = [
  {name:'Sikkim Darjeeling Tour Package',duration:'4 Days / 3 Nights',price:'₹6,600',description:'Sawaaden publicly listed starting package.'},
  {name:'Sikkim & Darjeeling Tour Package',duration:'5 Days / 4 Nights',price:'₹7,900',description:'Sawaaden publicly listed starting package.'},
  {name:'Sikkim Darjeeling Tour',duration:'6 Days / 5 Nights',price:'₹8,300',description:'Sawaaden publicly listed starting package.'}
];

const defaultTour = (name) => ({region:'Custom',duration:'Custom itinerary',price:'₹6,000+',pickup:'Siliguri / NJP / Bagdogra',route:`Pickup → ${name} → sightseeing → departure`,description:`A customised Sawaaden itinerary for ${name}. The route, hotel category, vehicle, meal plan and sightseeing schedule can be adjusted around your dates and group size.`,highlights:[name,'Local sightseeing','Flexible transport and stay'],days:[`Day 1 • 08:00–17:00 — Pickup and transfer towards ${name}. Check-in and local sightseeing.`, `Day 2 • 08:00–17:00 — Breakfast and full-day sightseeing around ${name}.`, 'Day 3 • 08:00–17:00 — Breakfast and onward transfer or departure.'],meals:'Breakfast + dinner unless otherwise quoted.',stay:'Hotel/homestay according to selected category.',inclusions:common.inclusions,exclusions:common.exclusions,note:common.note});

const modalStyles = document.createElement('style');
modalStyles.textContent = `
.tour-modal-backdrop{position:fixed;inset:0;background:rgba(10,22,18,.72);display:none;align-items:center;justify-content:center;padding:18px;z-index:9999;backdrop-filter:blur(5px)}
.tour-modal-backdrop.open{display:flex}.tour-modal{width:min(920px,100%);max-height:min(92vh,900px);overflow:auto;background:#fffdf8;border-radius:22px;box-shadow:0 25px 80px rgba(0,0,0,.3);position:relative;color:#172c25}.tour-modal-close{position:sticky;top:14px;float:right;margin:14px 14px 0 0;width:42px;height:42px;border:0;border-radius:50%;background:#173a31;color:#fff;font-size:25px;cursor:pointer;z-index:2}.tour-modal-content{padding:34px}.tour-modal-eyebrow{font-size:12px;letter-spacing:2.5px;font-weight:700;color:#b17c45;margin:0 0 10px}.tour-modal h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(30px,5vw,46px);line-height:1.05;margin:0 0 10px}.tour-duration{font-weight:700;font-size:18px;margin:0 0 7px}.tour-price-large{font-size:20px;font-weight:800;color:#b15f27;margin:0 0 12px}.tour-route{color:#68716e;line-height:1.65;margin:0 0 18px}.tour-description{font-size:15px;line-height:1.75;color:#4f5d57;margin:0 0 18px}.tour-meta-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}.tour-meta{background:#f5efe6;border-radius:14px;padding:12px}.tour-meta strong{display:block;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:#b17c45;margin-bottom:5px}.tour-meta span{font-size:12px;line-height:1.45}.tour-modal h3{font-size:18px;margin:24px 0 10px}.tour-highlights{display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0;list-style:none}.tour-highlights li{background:#edf2ed;border-radius:999px;padding:8px 12px;font-size:13px}.tour-days{padding-left:20px;margin:0}.tour-days li{padding:8px 0;line-height:1.65;font-size:14px}.tour-inclusion-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.tour-list{margin:0;padding-left:20px}.tour-list li{font-size:13px;line-height:1.55;margin:5px 0}.tour-note{background:#f4eee5;border-left:4px solid #b17c45;padding:13px 14px;margin:22px 0;color:#5c5147;line-height:1.55;font-size:13px}.tour-modal-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}.tour-modal-actions a{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-radius:999px;padding:13px 20px;font-weight:700}.tour-wa{background:#173a31;color:#fff}.tour-close-link{border:1px solid #173a31;color:#173a31;background:#fffdf8}
.plan-modal .tour-modal-content{padding-bottom:32px}.plan-intro{color:#66716a;max-width:720px;margin:0 0 22px;line-height:1.6}.plan-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 20px}.plan-tab{border:1px solid #d9d1c5;background:#f7f3eb;color:#173a31;border-radius:999px;padding:9px 13px;font-weight:700;font-size:12px;cursor:pointer}.plan-tab.active{background:#173a31;color:#fff;border-color:#173a31}.plan-catalog-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.plan-tour-card{border:1px solid #e2dbd0;background:#f7f3eb;padding:16px;border-radius:16px;display:flex;flex-direction:column;min-width:0}.plan-tour-card .tour-region{font-size:9px;letter-spacing:1.5px;color:#b17c45;font-weight:800}.plan-tour-card h3{font-family:Georgia,'Times New Roman',serif;font-size:21px;margin:7px 0 4px}.plan-tour-card .tour-card-duration{font-size:12px;color:#68716e;margin-bottom:8px}.plan-tour-card p{font-size:12px;color:#66716a;line-height:1.5;margin:0;flex:1}.plan-tour-card .tour-price{font-size:15px;font-weight:800;color:#173a31;margin:11px 0}.plan-tour-card a{margin-top:10px;text-align:center;background:#c97937;color:#fff;border-radius:999px;padding:10px 12px;font-size:11px;font-weight:800;text-decoration:none}.plan-price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:0 0 20px}.plan-package{border:1px solid #e2dbd0;background:#f7f3eb;padding:14px;border-radius:14px}.plan-package h3{font-family:Georgia,'Times New Roman',serif;font-size:17px;margin:6px 0}.plan-package .plan-duration{font-size:11px;color:#68716e}.plan-package .plan-price{font-size:18px;font-weight:800;color:#173a31;margin:7px 0}.plan-package p{font-size:11px;color:#66716a;line-height:1.45;margin:0}.plan-disclaimer{font-size:10px;color:#7b827e;margin-top:16px;line-height:1.5}
@media(max-width:700px){.plan-catalog-grid{grid-template-columns:1fr 1fr}.plan-price-grid{grid-template-columns:1fr}.tour-modal-content{padding:28px 20px 24px}.tour-modal{border-radius:18px}.tour-meta-grid,.tour-inclusion-grid{grid-template-columns:1fr}}
@media(max-width:430px){.plan-catalog-grid{grid-template-columns:1fr}.tour-modal-backdrop{padding:8px}.tour-modal-content{padding:24px 15px 20px}.plan-tabs{gap:6px}.plan-tab{font-size:10px;padding:8px 10px}.tour-description{font-size:13px}.tour-days li{font-size:13px}}
@media(max-width:600px){.section{padding-left:12px;padding-right:12px}.section-heading{padding:0 2px}.package-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.package-card,.package-card.featured{min-width:0}.package-card img,.package-card.featured img{height:140px!important}.card-body{padding:11px}.tag{font-size:8px;letter-spacing:1.1px}.card-body h3{font-size:18px;line-height:1.15;margin:5px 0}.card-body p{font-size:11px;line-height:1.45;margin-bottom:9px}.card-body a{font-size:10px;line-height:1.25}.option-grid,.photo-more-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding-left:10px;padding-right:10px}.option-grid img{height:140px}.option-grid article>div{padding:11px}.option-grid h3{font-size:18px}.option-grid p{font-size:11px;line-height:1.4}.gallery-grid,.review-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.gallery-grid img{height:145px}.gallery-grid figcaption{font-size:10px;padding:8px 9px}.review-card{padding:12px;min-height:0}.review-card h3{font-size:17px}.review-card p{font-size:11px}.photo-more-grid img{height:145px}.photo-more-grid figcaption{font-size:15px;padding:9px 10px 1px}.photo-more-grid p{font-size:10px;padding:3px 10px 10px}}
@media(max-width:380px){.package-grid,.gallery-grid,.review-grid,.option-grid,.photo-more-grid{gap:8px}.package-card img,.package-card.featured img{height:125px!important}.card-body{padding:9px}.card-body h3{font-size:16px}.card-body p{font-size:10px}.card-body a{font-size:9px}}
`;
document.head.appendChild(modalStyles);

const modal = document.createElement('div');
modal.className='tour-modal-backdrop';
modal.innerHTML='<div class="tour-modal" role="dialog" aria-modal="true"><button class="tour-modal-close" type="button" aria-label="Close">×</button><div class="tour-modal-content"></div></div>';
document.body.appendChild(modal);
const modalContent=modal.querySelector('.tour-modal-content');
const planModal=document.createElement('div');
planModal.className='tour-modal-backdrop plan-modal';
planModal.innerHTML='<div class="tour-modal" role="dialog" aria-modal="true"><button class="tour-modal-close" type="button" aria-label="Close">×</button><div class="tour-modal-content"></div></div>';
document.body.appendChild(planModal);
const planContent=planModal.querySelector('.tour-modal-content');
const closeModal=()=>{modal.classList.remove('open');planModal.classList.remove('open');document.body.style.overflow='';};

const openTour=(name)=>{
  const data=tourDetails[name]||defaultTour(name);
  modalContent.innerHTML=`<p class="tour-modal-eyebrow">${data.region.toUpperCase()} • SAWAADEN TOUR PLAN</p><h2>${name}</h2><p class="tour-duration">${data.duration}</p><p class="tour-price-large">Plan starts from ${data.price}</p><p class="tour-route"><strong>Pickup:</strong> ${data.pickup}<br><strong>Route:</strong> ${data.route}</p><p class="tour-description">${data.description}</p><div class="tour-meta-grid"><div class="tour-meta"><strong>Stay</strong><span>${data.stay}</span></div><div class="tour-meta"><strong>Meals</strong><span>${data.meals}</span></div><div class="tour-meta"><strong>Package type</strong><span>Customisable for couples, families and groups</span></div></div><h3>Highlights</h3><ul class="tour-highlights">${data.highlights.map((x)=>`<li>${x}</li>`).join('')}</ul><h3>Detailed day-by-day plan</h3><ol class="tour-days">${data.days.map((x)=>`<li>${x}</li>`).join('')}</ol><h3>Package includes</h3><div class="tour-inclusion-grid"><div><strong>Included</strong><ul class="tour-list">${data.inclusions.map((x)=>`<li>✓ ${x}</li>`).join('')}</ul></div><div><strong>Normally extra</strong><ul class="tour-list">${data.exclusions.map((x)=>`<li>• ${x}</li>`).join('')}</ul></div></div><div class="tour-note"><strong>Important:</strong> ${data.note}</div><div class="tour-modal-actions"><a class="tour-wa" href="${makeWhatsAppUrl(name)}" target="_blank" rel="noopener noreferrer">WhatsApp about this tour →</a><a class="tour-close-link" href="#">Close</a></div>`;
  modal.classList.add('open');document.body.style.overflow='hidden';
};

const renderPlanCatalog=(category='Darjeeling')=>{
  const names=tourCatalog[category]||[];
  planContent.querySelectorAll('.plan-tab').forEach((b)=>b.classList.toggle('active',b.dataset.category===category));
  const grid=planContent.querySelector('.plan-catalog-grid');if(!grid)return;
  grid.innerHTML=names.map((name)=>{const d=tourDetails[name]||defaultTour(name);return `<article class="plan-tour-card"><span class="tour-region">${d.region.toUpperCase()}</span><h3>${name}</h3><div class="tour-card-duration">${d.duration}</div><p>${d.description.slice(0,190)}...</p><div class="tour-price">Starts from ${d.price}</div><a href="#">View full package →</a></article>`;}).join('');
  grid.querySelectorAll('a').forEach((link)=>link.addEventListener('click',(event)=>{event.preventDefault();const name=link.closest('.plan-tour-card')?.querySelector('h3')?.textContent?.trim();if(name){planModal.classList.remove('open');openTour(name);}}));
};

const openPlan=()=>{
  planContent.innerHTML=`<p class="tour-modal-eyebrow">PLAN YOUR TRIP</p><h2>Choose your region.</h2><p class="plan-intro">Every destination now has its own package description, route, pickup point, day-by-day timing, stay plan, meals, sightseeing, inclusions and a 2026 market-based starting price.</p><div class="plan-price-grid">${planPackages.map((x)=>`<article class="plan-package"><span class="tour-region">SAWAADEN PACKAGE</span><h3>${x.name}</h3><div class="plan-duration">${x.duration}</div><div class="plan-price">Starts from ${x.price}</div><p>${x.description}</p></article>`).join('')}</div><div class="plan-tabs">${Object.keys(tourCatalog).map((c)=>`<button class="plan-tab" type="button" data-category="${c}">${c}</button>`).join('')}</div><div class="plan-catalog-grid"></div><p class="plan-disclaimer">Market ranges are researched 2026 benchmarks from current Sikkim travel listings. They are not copied as Sawaaden prices. Final Sawaaden pricing changes with dates, group size, hotel category, vehicle, permits and exact inclusions.</p><div class="tour-modal-actions"><a class="tour-wa" href="${makeWhatsAppUrl('Custom trip')}" target="_blank" rel="noopener noreferrer">Plan a custom trip →</a><a class="tour-close-link" href="#">Close</a></div>`;
  planContent.querySelectorAll('.plan-tab').forEach((b)=>b.addEventListener('click',()=>renderPlanCatalog(b.dataset.category)));
  renderPlanCatalog('Darjeeling');planModal.classList.add('open');document.body.style.overflow='hidden';
};

document.querySelector('.nav-cta')?.addEventListener('click',(event)=>{event.preventDefault();setMenuState(false);openPlan();});

document.querySelectorAll('.package-card a,.option-grid a,.destination-list a,.band-more-grid a').forEach((link)=>link.addEventListener('click',(event)=>{const card=link.closest('article,a');const title=card?.querySelector('h3')?.textContent?.trim()||link.textContent.replace(/→|\+/g,'').trim();if(title){event.preventDefault();openTour(title);}}));
modal.addEventListener('click',(event)=>{if(event.target===modal||event.target.closest('.tour-modal-close')||event.target.closest('.tour-close-link')){event.preventDefault();closeModal();}});
planModal.addEventListener('click',(event)=>{if(event.target===planModal||event.target.closest('.tour-modal-close')||event.target.closest('.tour-close-link')){event.preventDefault();closeModal();}});
document.addEventListener('keydown',(event)=>{if(event.key==='Escape')closeModal();});

const destinationList=document.querySelector('.destination-list');
if(destinationList){destinationList.innerHTML=`<a href="#contact"><span>01 <b>Gangtok</b><small>MG Marg • monasteries • viewpoints</small></span></a><a href="#contact"><span>02 <b>Nathula Pass</b><small>High-altitude border pass</small></span></a><a href="#contact"><span>03 <b>Tsomgo Lake</b><small>Changu Lake • Baba Mandir</small></span></a><a href="#contact"><span>04 <b>Zuluk & Nathang</b><small>Silk Route • Thambi • Kupup</small></span></a><a href="#contact"><span>05 <b>Lachung</b><small>Yumthang • Zero Point</small></span></a><a href="#contact"><span>06 <b>Lachen</b><small>Thangu • Chopta • Gurudongmar</small></span></a><a href="#contact"><span>07 <b>Pelling</b><small>Skywalk • monasteries • Kanchenjunga</small></span></a><a href="#contact"><span>08 <b>Khecheopalri</b><small>Sacred lake • West Sikkim</small></span></a><a href="#contact"><span>09 <b>Ravangla</b><small>Buddha Park • South Sikkim</small></span></a><a href="#contact"><span>10 <b>Temi Tea Garden</b><small>Himalayan tea estate</small></span></a><a href="#contact"><span>11 <b>Darjeeling</b><small>Tiger Hill • Batasia • tea gardens</small></span></a><a href="#contact"><span>12 <b>Kalimpong</b><small>Deolo • Durpin Dara • Morgan House</small></span></a>`;}
const destinationBand=document.querySelector('.destination-band');
const existingBandMore=destinationBand?.querySelector('.band-more');
if(destinationBand&&existingBandMore){const catalog=document.createElement('div');catalog.className='destination-catalog';catalog.innerHTML=`<div class="destination-region"><h3>East Sikkim</h3><p>Gateway sights, monasteries, lakes and the historic Silk Route.</p><div class="destination-place-list"><span>Gangtok</span><span>Rumtek</span><span>Tsomgo Lake</span><span>Nathula Pass</span><span>Baba Mandir</span><span>Zuluk</span><span>Nathang Valley</span><span>Thambi View Point</span><span>Aritar</span><span>Rongli</span><span>Kupup</span></div></div><div class="destination-region"><h3>North Sikkim</h3><p>High-altitude valleys and mountain routes around Lachung and Lachen.</p><div class="destination-place-list"><span>Lachung</span><span>Yumthang</span><span>Zero Point / Yumesamdong</span><span>Lachen</span><span>Thangu</span><span>Chopta Valley</span><span>Gurudongmar Lake</span><span>Chungthang</span></div></div><div class="destination-region"><h3>West Sikkim</h3><p>Heritage, sacred lakes, monasteries and Kanchenjunga-facing landscapes.</p><div class="destination-place-list"><span>Pelling</span><span>Skywalk</span><span>Khecheopalri Lake</span><span>Rabdentse Ruins</span><span>Pemayangtse</span><span>Yuksom</span><span>Dubdi Monastery</span><span>Norbugang</span></div></div><div class="destination-region"><h3>South Sikkim</h3><p>Tea gardens, Buddhist landmarks, viewpoints and quieter mountain towns.</p><div class="destination-place-list"><span>Ravangla</span><span>Buddha Park</span><span>Temi Tea Garden</span><span>Namchi</span><span>Samdruptse</span><span>Tendong</span><span>Maenam</span></div></div><div class="destination-region"><h3>Darjeeling</h3><p>Classic Himalayan hill-town experiences and tea-country sightseeing.</p><div class="destination-place-list"><span>Tiger Hill</span><span>Batasia Loop</span><span>Ghoom</span><span>Chowrasta / Mall</span><span>Tea Estates</span><span>Rock Garden</span><span>HMI</span><span>Darjeeling Toy Train</span></div></div><div class="destination-region"><h3>Kalimpong</h3><p>A relaxed hill destination with viewpoints, heritage buildings, rivers and forest attractions.</p><div class="destination-place-list"><span>Deolo Hill</span><span>Durpin Dara</span><span>Morgan House</span><span>Relli River</span><span>Changey Waterfall</span><span>Nokdara</span><span>Neora Valley</span><span>Lava</span><span>Loleygaon</span><span>Pedong</span></div></div>`;existingBandMore.insertAdjacentElement('afterend',catalog);}
