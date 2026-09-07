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
    upsertMeta('description', siteDescription);
    upsertMeta('application-name', brandName);
    upsertMeta('og:site_name', brandName, 'property');
    upsertMeta('og:title', siteTitle, 'property');
    upsertMeta('og:description', siteDescription, 'property');
    upsertMeta('og:url', siteUrl, 'property');
    upsertMeta('og:image', logoUrl, 'property');
    upsertMeta('twitter:title', siteTitle);
    upsertMeta('twitter:description', siteDescription);
    upsertMeta('twitter:image', logoUrl);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = siteUrl;
    const icon = document.querySelector('link[rel="icon"]');
    if (icon) { icon.href = logoUrl; icon.type = 'image/svg+xml'; }
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
      brandMark.appendChild(logo);
    }
    const hero = document.querySelector('.hero-content');
    const heroTitle = hero?.querySelector('h1');
    if (hero && heroTitle && !hero.querySelector('.brand-identity-heading')) {
      const heading = document.createElement('p');
      heading.className = 'brand-identity-heading';
      heading.textContent = siteTitle;
      heroTitle.insertAdjacentElement('afterend', heading);
    }
    const heroCopy = document.querySelector('.hero-copy');
    if (heroCopy) heroCopy.textContent = siteDescription;
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
    style.id = 'sawaaden-gallery-styles';
    style.textContent = `
      .brand-mark{display:grid!important;place-items:center;background:#173a31!important;overflow:hidden!important}
      .brand-mark img{width:100%;height:100%;display:block;object-fit:cover}
      .brand-identity-heading{margin:16px 0 0;font-size:clamp(16px,2vw,22px);font-weight:700;letter-spacing:.01em;color:#f4eee2;line-height:1.3}
      .hero-copy{max-width:680px}
      .live-review-status{font-size:11px;color:#aebdb6;margin:12px 0 0;line-height:1.5}
      .live-review-status a{color:#e7c28e;text-decoration:underline}
      .live-review .review-meta{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-top:3px}
      .live-review .review-date{color:#7b827e;font-size:10px}
      .live-review .review-text{white-space:pre-line}
      .live-review .review-google{display:block;margin-top:auto;padding-top:14px;font-size:10px;font-weight:700;color:#173a31}
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
      .review-heading>div:last-child{min-width:280px}
      .review-heading .button-light{margin-top:18px}
      .sawaaden-gallery-more{margin-top:22px;border-top:1px solid rgba(23,58,49,.14);border-bottom:1px solid rgba(23,58,49,.14)}
      .sawaaden-gallery-more>summary{cursor:pointer;list-style:none;padding:17px 0;display:flex;align-items:center;justify-content:space-between;gap:18px;font-weight:800;color:#173a31}
      .sawaaden-gallery-more>summary::-webkit-details-marker{display:none}
      .sawaaden-gallery-more>summary span{font-size:22px;font-weight:400;transition:transform .2s ease}
      .sawaaden-gallery-more[open]>summary span{transform:rotate(45deg)}
      .sawaaden-gallery-more-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;padding:0 0 24px}
      .sawaaden-gallery-more-grid figure{margin:0;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 7px 22px rgba(23,34,29,.08)}
      .sawaaden-gallery-more-grid img{display:block;width:100%;height:190px;object-fit:cover}
      .sawaaden-gallery-more-grid figcaption{padding:10px 12px;font-size:11px;font-weight:700;color:#31423b;line-height:1.35}
      @media(max-width:900px){.sawaaden-gallery-more-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.review-heading>div:last-child{min-width:0}}
      @media(max-width:520px){.review-heading>div:last-child{width:100%}.review-heading .button-light{margin-top:20px}.live-review .review-meta{display:block}.live-review .review-date{display:block;margin-top:3px}.brand-identity-heading{font-size:14px;line-height:1.35}.story-details-content{font-size:13px;line-height:1.65;padding:18px 17px 20px}.sawaaden-gallery-more-grid{grid-template-columns:1fr 1fr;gap:10px}.sawaaden-gallery-more-grid img{height:150px}}
    `;
    document.head.appendChild(style);
  };

  const galleryPhotos = [
    ['A view from Pelling','A view from a nearby view in PELLING,.jpg'],['Pelling landscape','Inexplicable Pelling.jpg'],['Kangchenjunga at Pelling','Kanchanjungha at Pelling.jpg'],['Kanchenjhunga Range','Kanchenjhunga Range.jpg'],['Kanchenjunga and neighbouring peaks','Kanchenjunga and neighbouring peaks.jpg'],['Kanchenjunga from Pelling','Kanchenjunga Peak as viewed from Pelling, Sikkim.jpg'],['Kanchenjunga peak','Kanchenjunga peak.jpg'],['Kanchenjunga View from Pelling Hotel','Kanchenjunga View from Pelling Hotel.jpg'],['Kanchenjunga view from Pelling','Kanchenjunga view from Pelling.jpg'],['Pelling mountain view','Kanchenjungha and.. premonsoon season view from Pelling , West Sikkim.jpg'],
    ['Yuksom culture','An aged man playing Chyabrung Drum, Yuksom, West Sikkim, India.jpg'],['Yuksom forest bridge','Bridge en Route to Dubdi Monastery from Yuksom.jpg'],['Norbugang prayer hall','Prayer Hall near Norbugang Coronation throne near Yuksom (Gyalshing), West Sikkim 08.jpg'],['Norbugang prayer hall interior','Prayer Hall near Norbugang Coronation throne near Yuksom (Gyalshing), West Sikkim 09.jpg'],['Norbugang heritage site','Prayer Hall near Norbugang Coronation throne near Yuksom (Gyalshing), West Sikkim 10.jpg'],['Yuksom Main Street','Yuksom Main Street.jpg'],['Yuksom Valley','Yuksom Valley.jpg'],['Yuksom Village','Yuksom Village.jpg'],['Yuksom village scene','Yuksom1.jpg'],['Yuksom landscape','Yuksom2.jpg'],
    ['Gangtok town','A beautiful town.jpg'],['Gangtok B20 event','B20 meeting under India’s G20 presidency begins in Gangtok today 01.jpg'],['Gangtok B20 event','B20 meeting under India’s G20 presidency begins in Gangtok today 02.jpg'],['Gangtok B20 event','B20 meeting under India’s G20 presidency begins in Gangtok today 03.jpg'],['Gangtok B20 event','B20 meeting under India’s G20 presidency begins in Gangtok today 04.jpg'],['Chandmari, Gangtok','Chandmari.jpg'],['Gangtok at dusk','Dusk In Gangtok.jpg'],['East Sikkim Silk Route','Dzuluk.jpg'],['Gangtok Smart City','ICCC Gangtok Smart City.jpg'],['Sikkim valley','Sikkim valley.jpg'],['Gangtok wooden bridge','Sikkim-Gangtok wooden bridge.jpg'],['Tadong aerial view','Tadong areal view of Gangtok.jpg'],['Traditional wooden houses','Traditional wooden houses in Gangtok, Sikkim.jpg'],['Gangtok wellness park','Wellness park at Gangtok.jpg'],['White Hall, Gangtok','White Hall located on the ridge road, Gangtok.jpg'],
    ['Tsomgo Lake','Changu (Tsomgo) Lake in Sikkim.jpg'],['Changu Lake','Changu (Tsomgo) Lake.jpg'],['Changu forest','Changu forest HDR.jpg'],['Tsomgo Lake panorama','Changu Lake (Tsomgo).jpg'],['Tsomgo Lake viewpoint','Changu Lake 1.jpg'],['Tsomgo Lake beauty','Changu lake beauty.jpg'],['Tsomgo Lake near Nathula','Changu lake near nathula.jpg'],['Tsomgo Lake panorama','Tsomgo Lake (51937982856).jpg'],['Tsomgo Lake panorama','Tsomgo Lake (51938059928).jpg'],['Tsomgo Lake, East Sikkim','Tsomgo Lake (Changu Lake), East Sikkim,1.jpg'],['Tsomgo Lake, East Sikkim','Tsomgo Lake (Changu Lake), East Sikkim,2.jpg'],['Tsomgo Lake, East Sikkim','Tsomgo Lake (Changu Lake), East Sikkim,3.jpg'],['Tsomgo Lake, East Sikkim','Tsomgo Lake (Changu Lake), East Sikkim,4.jpg'],['Tsomgo Lake, East Sikkim','Tsomgo Lake (Changu Lake), East Sikkim,5.jpg'],['Tsomgo Lake, East Sikkim','Tsomgo Lake (Changu Lake), East Sikkim,6.jpg'],
    ['Khecheopalri Lake','Khecheopalri Lake.jpg'],['Khecheopalri viewpoint','View point of Khecheopalri Lake, West Sikkim district.jpg']
  ];

  const setupGallery = () => {
    const grid = document.querySelector('.gallery-grid');
    if (!grid || grid.dataset.expanded === '1') return;
    const figures = [...grid.querySelectorAll('figure')];
    if (figures.length < 8) return;
    const more = document.createElement('details');
    more.className = 'sawaaden-gallery-more';
    const summary = document.createElement('summary');
    summary.innerHTML = `View 54 more photos <span>+</span>`;
    more.appendChild(summary);
    const moreGrid = document.createElement('div');
    moreGrid.className = 'sawaaden-gallery-more-grid';
    figures.slice(8).forEach((figure) => moreGrid.appendChild(figure));
    galleryPhotos.forEach(([title, file]) => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.loading = 'lazy'; img.decoding = 'async'; img.alt = title;
      img.src = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}`;
      const caption = document.createElement('figcaption'); caption.textContent = title;
      figure.append(img, caption); moreGrid.appendChild(figure);
    });
    more.appendChild(moreGrid);
    grid.insertAdjacentElement('afterend', more);
    grid.dataset.expanded = '1';
  };

  const updateReviewHeader = (data) => {
    const rating = Number(data.rating); const count = Number(data.userRatingCount);
    if (!Number.isFinite(rating) || !Number.isFinite(count)) return;
    document.querySelectorAll('.review-score').forEach((el) => { el.innerHTML = `${rating.toFixed(1)} <span>★</span>`; });
    document.querySelectorAll('.hero-note').forEach((el) => { el.innerHTML = `<strong>${rating.toFixed(1)} ★</strong><span>Google rating<br>${count.toLocaleString()} reviews</span>`; });
    document.querySelectorAll('.stats div').forEach((el) => { const label = el.querySelector('span')?.textContent?.toLowerCase() || ''; const value = el.querySelector('strong'); if (!value) return; if (label.includes('google rating')) value.textContent = `${rating.toFixed(1)}★`; if (label.includes('google reviews')) value.textContent = `${count.toLocaleString()}+`; });
  };

  const renderReviews = (data) => {
    const grid = document.querySelector('.review-grid'); if (!grid) return;
    const reviews = Array.isArray(data.reviews) ? data.reviews : []; if (!reviews.length) return;
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
    const heading = document.querySelector('.review-heading > div:last-child'); if (!heading) return;
    let status = heading.querySelector('.live-review-status');
    if (!status) { status = document.createElement('p'); status.className = 'live-review-status'; heading.appendChild(status); }
    status.innerHTML = includeLink ? `${escapeHtml(message)} <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer">Open Google Maps ↗</a>` : escapeHtml(message);
  };

  const load = async () => {
    applyBrandIdentity(); injectStyles(); setupGallery();
    try {
      const response = await fetch('/api/reviews', { headers: { Accept: 'application/json' }, cache: 'no-store' });
      if (!response.ok) throw new Error(`Reviews API returned ${response.status}`);
      const data = await response.json();
      if (!data.rating || !data.userRatingCount) throw new Error('Google review data is incomplete.');
      updateReviewHeader(data); renderReviews(data); showStatus('Live Google reviews loaded on this visit.');
    } catch (error) { showStatus('Live Google reviews are not connected yet. Showing the Google listing instead.', true); }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load, { once: true }); else load();
})();
