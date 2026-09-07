(function () {
  'use strict';

  const placeId = 'ChIJs2CCbxWl5jkR2Ovr-s0qSyk';
  const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
  const brandName = 'Sawaaden Tours & Travels';
  const siteTitle = 'Sawaaden Tours & Travels — Discover the Northeast with Us';
  const siteDescription = 'Sawaaden Tours & Travels, popularly known as Silk Route Tourism, is one of the most trusted travel companies based in Gangtok. We are dedicated to providing authentic and memorable travel experiences across Sikkim and the Eastern Himalayas.';
  const siteUrl = 'https://sikkimtouraandtravel.in/';
  const logoUrl = `${siteUrl}sawaaden-logo.svg?v=4`;

  const upsertMeta = (key, value, type = 'name') => {
    let el = document.head.querySelector(`meta[${type}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(type, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  };

  const applyBrandIdentity = () => {
    document.title = siteTitle;
    upsertMeta('description', siteDescription, 'name');
    upsertMeta('application-name', brandName, 'name');
    upsertMeta('og:site_name', brandName, 'property');
    upsertMeta('og:title', siteTitle, 'property');
    upsertMeta('og:description', siteDescription, 'property');
    upsertMeta('og:url', siteUrl, 'property');
    upsertMeta('og:image', logoUrl, 'property');
    upsertMeta('twitter:title', siteTitle, 'name');
    upsertMeta('twitter:description', siteDescription, 'name');
    upsertMeta('twitter:image', logoUrl, 'name');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl;

    let icon = document.querySelector('link[rel="icon"]');
    if (!icon) {
      icon = document.createElement('link');
      icon.rel = 'icon';
      document.head.appendChild(icon);
    }
    icon.href = logoUrl;
    icon.type = 'image/svg+xml';

    let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleIcon) {
      appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleIcon);
    }
    appleIcon.href = logoUrl;

    const brandMark = document.querySelector('.brand-mark');
    if (brandMark) {
      brandMark.textContent = '';
      brandMark.setAttribute('aria-hidden', 'true');
      brandMark.style.backgroundImage = `url("${logoUrl}")`;
      brandMark.style.backgroundSize = 'cover';
      brandMark.style.backgroundPosition = 'center';
      const logo = document.createElement('img');
      logo.src = logoUrl;
      logo.alt = 'Sawaaden Tours & Travels';
      logo.loading = 'eager';
      logo.decoding = 'async';
      logo.onerror = () => {
        logo.style.display = 'none';
        brandMark.style.backgroundImage = 'url("/favicon.svg")';
      };
      brandMark.appendChild(logo);
    }

    const hero = document.querySelector('.hero-content');
    let brandHeading = hero?.querySelector('.brand-identity-heading');
    const heroTitle = hero?.querySelector('h1');
    if (hero && heroTitle) {
      if (!brandHeading) {
        brandHeading = document.createElement('p');
        brandHeading.className = 'brand-identity-heading';
        brandHeading.textContent = siteTitle;
      }
      heroTitle.insertAdjacentElement('afterend', brandHeading);
    }

    const heroCopy = document.querySelector('.hero-copy');
    if (heroCopy) heroCopy.textContent = siteDescription;

    const aboutHeading = document.querySelector('.story-copy h2');
    if (aboutHeading) aboutHeading.innerHTML = 'About Sikkim Sawaaden<br>Tours & Travels.';

    const aboutSummary = document.querySelector('.story-summary');
    if (aboutSummary) aboutSummary.textContent = 'Sawaaden Tours & Travels, popularly known as Silk Route Tourism, is one of the most trusted travel companies based in Gangtok, creating personalized and memorable journeys across Sikkim and the Eastern Himalayas.';

    const aboutDetails = document.querySelector('.story-details');
    if (aboutDetails) {
      aboutDetails.setAttribute('aria-label', 'About Sikkim Sawaaden Tours and Travels');
      const summary = aboutDetails.querySelector('summary');
      if (summary) summary.firstChild.textContent = 'Read the full Sawaaden Tours & Travels description';
    }

    if (!document.querySelector('#sawaaden-website-schema')) {
      const schema = document.createElement('script');
      schema.id = 'sawaaden-website-schema';
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: brandName,
        alternateName: ['Sawaaden', 'Sawaaden Tours & Travels', 'Sikkim Sawaaden Tours and Travels', 'Silk Route Tourism'],
        description: siteDescription,
        url: siteUrl,
        publisher: {
          '@type': 'TravelAgency',
          name: brandName,
          image: logoUrl,
          url: siteUrl,
          telephone: '+91-97755-52239'
        }
      });
      document.head.appendChild(schema);
    }
  };

  const removePriceBookingNotes = () => {
    document.querySelectorAll('.tour-modal-content .tour-note, .tour-modal-content .price-note, .tour-modal-content .price-booking-note, .tour-modal-content .booking-note, .tour-modal-content .modal-note').forEach((el) => el.remove());
  };

  const packageInfo = {
    'Sikkim Darjeeling Tour Package': {
      duration: '4 Days / 3 Nights', price: '₹6,600',
      days: ['Day 1 — Arrival in Gangtok: Pickup from NJP/Bagdogra and transfer to Gangtok. Check in and relax.', 'Day 2 — Gangtok Sightseeing: Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery and MG Marg.', 'Day 3 — East Sikkim: Tsomgo Lake and Baba Mandir, with Nathula Pass subject to permit, weather and access.', 'Day 4 — Departure: Breakfast and transfer towards NJP/Bagdogra/Siliguri.'],
      note: 'A compact Sikkim and Darjeeling-style holiday for travellers with limited time. Final sightseeing order depends on permits, weather and road conditions.'
    },
    'Sikkim & Darjeeling Tour Package': {
      duration: '5 Days / 4 Nights', price: '₹7,900',
      days: ['Day 1 — Arrival in Gangtok: Pickup from NJP/Bagdogra and transfer to Gangtok.', 'Day 2 — Gangtok Sightseeing: Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery and MG Marg.', 'Day 3 — Tsomgo & Nathula Circuit: Tsomgo Lake, Baba Mandir and Nathula Pass when permitted.', 'Day 4 — Darjeeling: Transfer towards Darjeeling with local sightseeing depending on arrival time.', 'Day 5 — Departure: Breakfast and transfer to NJP/Bagdogra/Siliguri.'],
      note: 'A balanced Sikkim–Darjeeling combination covering major viewpoints and high-altitude East Sikkim highlights.'
    },
    'Sikkim Darjeeling Tour': {
      duration: '6 Days / 5 Nights', price: '₹8,300',
      days: ['Day 1 — Arrival in Gangtok: Pickup from NJP/Bagdogra and transfer to Gangtok.', 'Day 2 — Gangtok Sightseeing: Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery and MG Marg.', 'Day 3 — Tsomgo & Nathula: Tsomgo Lake, Baba Mandir and Nathula Pass when permitted.', 'Day 4 — West Sikkim / Pelling: Scenic transfer and selected Pelling sightseeing such as Skywalk, Pemayangtse or Rabdentse.', 'Day 5 — Darjeeling: Transfer to Darjeeling and local sightseeing based on arrival time.', 'Day 6 — Departure: Breakfast and transfer to NJP/Bagdogra/Siliguri.'],
      note: 'The longer option gives more time for Sikkim sightseeing before the Darjeeling connection.'
    }
  };

  const openSawaadenPackage = (name) => {
    const info = packageInfo[name];
    if (!info) return;
    document.querySelector('.sawaaden-package-detail-modal')?.remove();
    const overlay = document.createElement('div');
    overlay.className = 'sawaaden-package-detail-modal';
    overlay.innerHTML = `<div class="sawaaden-package-detail" role="dialog" aria-modal="true" aria-label="${name}"><button class="sawaaden-package-close" type="button" aria-label="Close">×</button><div class="package-eyebrow">SAWAADEN PACKAGE</div><h2>${name}</h2><div class="package-meta"><strong>${info.duration}</strong><strong>${info.price} <span>/ PERSON</span></strong></div><p class="package-detail-note">${info.note}</p><h3>Day-by-day itinerary</h3><ol>${info.days.map(day => `<li>${day}</li>`).join('')}</ol><div class="package-detail-footer"><span>Price shown per person</span><a class="package-whatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/919775552239?text=${encodeURIComponent(`Hello Sawaaden Tours & Travels, I came to your website and was referred by 9332095869. I am interested in the ${name}. Please share the exact current price, inclusions and availability.`)}">Enquire on WhatsApp →</a></div></div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelector('.sawaaden-package-close')?.addEventListener('click', close);
    overlay.addEventListener('click', (event) => { if (event.target === overlay) close(); });
  };

  const enhanceTopSawaadenPackages = () => {
    const root = document.querySelector('.tour-modal-content') || document.querySelector('[role="dialog"]');
    if (!root) return;
    const labels = [...root.querySelectorAll('*')].filter((el) => el.children.length === 0 && el.textContent.trim() === 'SAWAADEN PACKAGE');
    labels.slice(0, 3).forEach((label) => {
      let card = label.parentElement;
      for (let i = 0; i < 5 && card; i++, card = card.parentElement) {
        const text = card.textContent || '';
        if (text.includes('₹') && /\d+\s*Days/.test(text) && /Nights/.test(text)) break;
      }
      if (!card || card.dataset.sawaadenEnhanced === '1') return;
      const heading = card.querySelector('h3, h2');
      if (!heading) return;
      const name = heading.textContent.trim();
      if (!packageInfo[name]) return;
      card.dataset.sawaadenEnhanced = '1';

      const priceText = [...card.querySelectorAll('*')].find((el) => /^₹[\d,]+$/.test(el.textContent.trim()));
      if (priceText && !priceText.querySelector('.package-per-person')) {
        const suffix = document.createElement('span');
        suffix.className = 'package-per-person';
        suffix.textContent = ' / PERSON';
        priceText.appendChild(suffix);
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'sawaaden-view-package';
      button.textContent = 'View full package →';
      button.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); openSawaadenPackage(name); });
      card.appendChild(button);
    });
  };

  const watchDynamicTourModal = () => {
    const handlePackageInteraction = (event) => {
      if (!event.target.closest('.package-card a, .option-grid a, .destination-list a, .band-more-grid a, .plan-catalog-grid a, .nav-cta')) return;
      requestAnimationFrame(() => {
        removePriceBookingNotes();
        enhanceTopSawaadenPackages();
      });
    };
    document.addEventListener('click', handlePackageInteraction, true);
  };

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;').replace(/'/g, '&#039;');

  const stars = (rating) => {
    const score = Math.max(0, Math.min(5, Number(rating) || 0));
    const rounded = Math.round(score);
    return `${'★'.repeat(rounded)}${'☆'.repeat(5 - rounded)}`;
  };

  const injectStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .brand-mark{display:grid!important;place-items:center;background:#173a31!important;overflow:hidden!important}
      .brand-mark img{width:100%;height:100%;display:block;object-fit:cover}
      .brand-identity-heading{margin:16px 0 0;font-size:clamp(16px,2vw,22px);font-weight:700;letter-spacing:.01em;color:#f4eee2;line-height:1.3}
      .hero-copy{max-width:680px}
      .live-review-status{font-size:11px;color:#aebdb6;margin:12px 0 0;line-height:1.5}
      .live-review-status a{color:#e7c28e;text-decoration:underline}
      .review-card.live-review{display:flex;flex-direction:column}
      .live-review .review-meta{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-top:3px}
      .live-review .review-date{color:#7b827e;font-size:10px}
      .live-review .review-text{white-space:pre-line}
      .live-review .review-google{margin-top:auto;padding-top:14px;font-size:10px;font-weight:700;color:#173a31}
      .story-details{margin-top:18px;border-top:1px solid rgba(23,58,49,.16);border-bottom:1px solid rgba(23,58,49,.16)}
      .story-details>summary{cursor:pointer;list-style:none;padding:14px 0;font-size:13px;font-weight:700;display:flex;justify-content:space-between;align-items:center;gap:16px}
      .story-details>summary::-webkit-details-marker{display:none}
      .story-details>summary span{font-size:20px;font-weight:400;transition:transform .2s ease}
      .story-details[open]>summary span{transform:rotate(45deg)}
      .story-details-content{padding:20px 22px 22px;max-width:760px;font-size:14px;line-height:1.75;background:rgba(35,72,62,.10);border:1px solid rgba(23,58,49,.10);border-radius:12px;margin-bottom:14px;color:#25352f}
      .story-details-content h3{margin:22px 0 8px;font-size:18px;color:#173a31}
      .story-details-content p{margin:0 0 12px}
      .story-details-content ul{margin:0 0 14px;padding-left:20px}
      .story-details-content li{margin:4px 0}
      .package-per-person{font-size:.62em;letter-spacing:.04em;font-weight:700;opacity:.85;margin-left:4px;white-space:nowrap}
      .sawaaden-view-package{display:block;width:100%;margin-top:18px;padding:12px 16px;border:0;border-radius:999px;background:#b56a2d;color:#fff;font:700 13px/1.2 inherit;cursor:pointer;text-align:center;transition:transform .18s ease,filter .18s ease}
      .sawaaden-view-package:hover{filter:brightness(1.08);transform:translateY(-1px)}
      .sawaaden-package-detail-modal{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:22px;background:rgba(5,12,10,.76);backdrop-filter:blur(7px)}
      .sawaaden-package-detail{position:relative;width:min(720px,94vw);max-height:88vh;overflow:auto;background:#2a210e;color:#f4eee2;border:1px solid rgba(231,194,142,.28);border-radius:22px;padding:34px;box-shadow:0 24px 80px rgba(0,0,0,.45)}
      .sawaaden-package-detail .package-eyebrow{font-size:11px;letter-spacing:.16em;font-weight:800;color:#e7a85e;margin-bottom:10px}
      .sawaaden-package-detail h2{font:700 clamp(28px,4vw,42px)/1.1 Georgia,serif;margin:0 42px 14px 0;color:#f4eee2}
      .sawaaden-package-detail h3{font-size:17px;margin:26px 0 10px;color:#e7c28e}
      .sawaaden-package-detail .package-meta{display:flex;flex-wrap:wrap;gap:12px 24px;font-size:16px;margin-bottom:18px}
      .sawaaden-package-detail .package-meta span{font-size:.68em;letter-spacing:.05em;opacity:.8}
      .package-detail-note{color:#d6c8ae;line-height:1.65}
      .sawaaden-package-detail ol{margin:0;padding-left:22px;color:#e5dbc9;line-height:1.65}
      .sawaaden-package-detail li{margin:9px 0}
      .sawaaden-package-close{position:absolute;top:15px;right:15px;width:42px;height:42px;border:0;border-radius:50%;background:#0c554c;color:#fff;font-size:25px;cursor:pointer}
      .package-detail-footer{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:28px;padding-top:18px;border-top:1px solid rgba(231,194,142,.18);font-size:12px;color:#cbbda5}
      .package-whatsapp{display:inline-flex;align-items:center;justify-content:center;padding:11px 17px;border-radius:999px;background:#b56a2d;color:#fff!important;text-decoration:none;font-weight:800}
      @media(max-width:700px){
        .package-grid{grid-template-columns:1fr!important;gap:30px!important}
        .package-card,.package-card.featured{width:100%;max-width:540px;margin:0 auto}
        .package-card img,.package-card.featured img{height:250px!important}
        .card-body{padding:24px!important}
        .card-body h3{font-size:30px!important;line-height:1.18;margin:9px 0 12px}
        .card-body p{font-size:15px!important;line-height:1.65;margin-bottom:22px}
        .card-body a{font-size:14px}
        .option-grid{grid-template-columns:1fr!important;gap:24px!important}
        .option-grid img{height:230px!important}
        .option-grid article>div{padding:22px!important}
      }
      @media(max-width:520px){
        .reviews-section{padding-bottom:120px}
        .live-review .review-meta{display:block}
        .live-review .review-date{display:block;margin-top:3px}
        .brand-identity-heading{font-size:14px;line-height:1.35}
        .story-details-content{font-size:13px;line-height:1.65;padding:18px 17px 20px}
        .story-details-content h3{font-size:16px}
        .story-details>summary{font-size:12px}
        .package-card img,.package-card.featured img{height:225px!important}
        .card-body{padding:21px!important}
        .card-body h3{font-size:27px!important}
        .sawaaden-package-detail{padding:25px 20px}
        .package-detail-footer{display:block}
        .package-whatsapp{margin-top:12px;width:100%}
      }
      @media(max-width:600px){
        .band-more[open]{margin-bottom:82px}
        .band-more-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:0 12px}
        .band-more-grid a{padding:11px 0;min-width:0}
        .band-more-grid b{font-size:13px;line-height:1.2}
        .band-more-grid small{font-size:9px;line-height:1.35}
        .band-more>summary{font-size:13px;padding:14px 0}
      }
      @media(max-width:380px){
        .band-more-grid{gap:0 9px}
        .band-more-grid b{font-size:12px}
        .band-more-grid small{font-size:8px}
      }
    `;
    document.head.appendChild(style);
  };

  const updateReviewHeader = (data) => {
    const rating = Number(data.rating);
    const count = Number(data.userRatingCount);
    document.querySelectorAll('.review-score').forEach((el) => { el.innerHTML = `${rating.toFixed(1)} <span>★</span>`; });
    document.querySelectorAll('.hero-note').forEach((el) => { el.innerHTML = `<strong>${rating.toFixed(1)} ★</strong><span>Google rating<br>${count.toLocaleString()} reviews</span>`; });
    document.querySelectorAll('.stats div').forEach((el) => {
      const label = el.querySelector('span')?.textContent?.toLowerCase() || '';
      const value = el.querySelector('strong');
      if (!value) return;
      if (label.includes('google rating')) value.textContent = `${rating.toFixed(1)}★`;
      if (label.includes('google reviews')) value.textContent = `${count.toLocaleString()}+`;
    });
  };

  const renderReviews = (data) => {
    const grid = document.querySelector('.review-grid');
    if (!grid) return;
    const reviews = Array.isArray(data.reviews) ? data.reviews : [];
    if (!reviews.length) return;
    grid.innerHTML = reviews.map((review) => {
      const author = escapeHtml(review.authorAttribution?.displayName || 'Google traveller');
      const text = escapeHtml(review.text?.text || 'This traveller left a Google rating without written feedback.');
      const date = escapeHtml(review.relativePublishTimeDescription || 'Google review');
      const reviewUrl = review.googleMapsUri || data.googleMapsUri || googleMapsUrl;
      const rating = Number(review.rating) || 0;
      return `<article class="review-card live-review"><div class="stars" aria-label="${rating} out of 5 stars">${stars(rating)}</div><h3>${author}</h3><div class="review-meta"><small>Google review</small><span class="review-date">${date}</span></div><p class="review-text">${text}</p><a class="review-google" href="${escapeHtml(reviewUrl)}" target="_blank" rel="noopener noreferrer">Read on Google ↗</a></article>`;
    }).join('');
  };

  const showStatus = (message, includeLink = false) => {
    const heading = document.querySelector('.review-heading > div:last-child');
    if (!heading) return;
    let status = heading.querySelector('.live-review-status');
    if (!status) { status = document.createElement('p'); status.className = 'live-review-status'; heading.appendChild(status); }
    status.innerHTML = includeLink ? `${escapeHtml(message)} <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer">Open Google Maps ↗</a>` : escapeHtml(message);
  };

  const loadLiveReviews = async () => {
    applyBrandIdentity();
    injectStyles();
    watchDynamicTourModal();
    try {
      const response = await fetch('/api/reviews', { headers: { Accept: 'application/json' }, cache: 'no-store' });
      if (!response.ok) throw new Error(`Reviews API returned ${response.status}`);
      const data = await response.json();
      if (!data.rating || !data.userRatingCount) throw new Error('Google review data is incomplete.');
      updateReviewHeader(data);
      renderReviews(data);
      showStatus('Live Google reviews loaded on this visit.');
    } catch (error) {
      showStatus('Live Google reviews are not connected yet. Showing the Google listing instead.', true);
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadLiveReviews, { once: true });
  else loadLiveReviews();
})();
