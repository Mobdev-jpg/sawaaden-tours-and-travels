(function () {
  'use strict';

  const placeId = 'ChIJs2CCbxWl5jkR2Ovr-s0qSyk';
  const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
  const brandName = 'Sawaaden Tours & Travels';
  const siteTitle = 'Sawaaden Tours & Travels — Discover the Northeast with Us';
  const siteDescription = 'Sikkim Sawaaden Tours and Travels, popularly known as Silk Route Tourism, is one of the trusted tourism operators based in Gangtok, offering personalized travel experiences across Sikkim and the Eastern Himalayas.';
  const siteUrl = 'https://sikkimtouraandtravel.in/';
  const logoUrl = `${siteUrl}favicon.png?v=2`;

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
    icon.type = 'image/png';

    let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleIcon) {
      appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleIcon);
    }
    appleIcon.href = logoUrl;

    const existingBrand = document.querySelector('.brand-identity-heading');
    if (!existingBrand) {
      const hero = document.querySelector('.hero-content');
      if (hero) {
        const heading = document.createElement('p');
        heading.className = 'brand-identity-heading';
        heading.textContent = siteTitle;
        hero.insertBefore(heading, hero.querySelector('.eyebrow') || hero.firstChild);
      }
    }

    const heroCopy = document.querySelector('.hero-copy');
    if (heroCopy) heroCopy.remove();

    const aboutHeading = document.querySelector('.story-copy h2');
    if (aboutHeading) aboutHeading.innerHTML = 'About Sikkim Sawaaden<br>Tours & Travels.';

    const aboutSummary = document.querySelector('.story-summary');
    if (aboutSummary) aboutSummary.textContent = 'Sikkim Sawaaden Tours and Travels, popularly known as Silk Route Tourism, is one of the trusted tourism operators based in Gangtok, creating personalized and memorable journeys across Sikkim and the Eastern Himalayas.';

    const aboutDetails = document.querySelector('.story-details');
    if (aboutDetails) {
      aboutDetails.setAttribute('aria-label', 'About Sikkim Sawaaden Tours and Travels');
      const summary = aboutDetails.querySelector('summary');
      if (summary) summary.firstChild.textContent = 'Read the full Sawaaden Tours & Travels description';

      const content = aboutDetails.querySelector('.story-details-content');
      if (content) {
        content.innerHTML = `
          <p><strong>Sikkim Sawaaden Tours and Travels, popularly known as Silk Route Tourism, is one of the trusted travel companies based in Gangtok.</strong> We are dedicated to providing authentic and memorable travel experiences across Sikkim and the Eastern Himalayas.</p>

          <p>We are passionate about helping travelers discover the breathtaking landscapes, rich cultural heritage, monasteries, mountain villages, and hidden treasures of the region. We create <strong>personalized travel experiences</strong> based on your interests, preferences, budget, and travel style.</p>

          <p>Whether you are looking for a peaceful mountain retreat, an adventurous road trip, a family vacation, a honeymoon, or a cultural exploration, <strong>we are here to make your journey comfortable, well-planned, and hassle-free.</strong></p>

          <h3>Explore the Best of Sikkim With Us</h3>
          <p>We offer a wide range of travel services to help you explore Sikkim and the surrounding Himalayan destinations, including:</p>
          <ul>
            <li>Customized Sikkim tour packages</li>
            <li>Silk Route and Old Silk Route tours</li>
            <li>North, East, South, and West Sikkim tours</li>
            <li>Gangtok sightseeing and local excursions</li>
            <li>Honeymoon and family holiday packages</li>
            <li>Hotel and homestay bookings</li>
            <li>Transportation and vehicle arrangements</li>
            <li>Adventure, nature, and cultural tours</li>
            <li>Group and corporate travel assistance</li>
          </ul>
          <p>We carefully plan every itinerary to give you a smooth and enjoyable experience, from your arrival in Sikkim to your departure.</p>

          <h3>Discover the Hidden Gems of the Himalayas</h3>
          <p>With our <strong>local knowledge and experience in Sikkim tourism</strong>, we help you explore more than just the popular attractions. We take you to scenic viewpoints, pristine lakes, historic monasteries, Himalayan villages, tea gardens, cultural landmarks, and lesser-known destinations that showcase the true character of Sikkim.</p>

          <p>From the historic <strong>Silk Route and Old Silk Route</strong> to the mountains of North Sikkim, the peaceful landscapes of West Sikkim, the monasteries of East Sikkim, and the beautiful destinations of South Sikkim, <strong>we create journeys that allow you to experience the region at your own pace.</strong></p>

          <p>Our team focuses on <strong>personalized service, reliable transportation, comfortable stays, practical itineraries, and genuine local hospitality.</strong> We work closely with our guests to understand what they want from their trip and design a journey around their needs.</p>

          <h3>Your Journey, Our Local Expertise</h3>
          <p>For us, a trip to Sikkim is more than simply visiting tourist attractions. It is about experiencing the <strong>mountains, culture, people, history, food, traditions, and natural beauty</strong> that make the Eastern Himalayas special.</p>

          <p>Whether you are visiting Sikkim for the first time or returning to explore somewhere new, <strong>we are committed to making your journey memorable from beginning to end.</strong></p>

          <p><strong>Plan your Sikkim adventure with Sikkim Sawaaden Tours and Travels — popularly known as Silk Route Tourism — and discover the Himalayas with us.</strong> 🏔️✨</p>
        `;
      }
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
    const markers = [
      'Price & booking note',
      'Displayed prices are researched 2026 market benchmarks',
      'Final pricing depends on date, group size, hotel category, vehicle, permits, meals, road access and seasonal demand.'
    ];

    document.querySelectorAll('body *').forEach((el) => {
      if (!markers.some((marker) => el.textContent.includes(marker))) return;
      if (el.children.length > 4) return;

      const target = el.closest('.price-note, .price-booking-note, .booking-note, .modal-note') || el;
      if (target && !target.classList.contains('tour-modal')) target.remove();
    });
  };

  const watchDynamicTourModal = () => {
    removePriceBookingNotes();
    const observer = new MutationObserver(removePriceBookingNotes);
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const stars = (rating) => {
    const score = Math.max(0, Math.min(5, Number(rating) || 0));
    const rounded = Math.round(score);
    return `${'★'.repeat(rounded)}${'☆'.repeat(5 - rounded)}`;
  };

  const injectStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .brand-identity-heading{margin:0 0 10px;font-size:clamp(16px,2vw,22px);font-weight:700;letter-spacing:.01em;color:#f4eee2}
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
      .story-details-content{padding:0 0 16px;max-width:760px;font-size:14px;line-height:1.75}
      .story-details-content h3{margin:22px 0 8px;font-size:18px}
      .story-details-content p{margin:0 0 12px}
      .story-details-content ul{margin:0 0 14px;padding-left:20px}
      .story-details-content li{margin:4px 0}
      @media(max-width:520px){
        .reviews-section{padding-bottom:120px}
        .live-review .review-meta{display:block}
        .live-review .review-date{display:block;margin-top:3px}
        .brand-identity-heading{font-size:14px;line-height:1.35}
        .story-details-content{font-size:13px;line-height:1.65}
        .story-details-content h3{font-size:16px}
        .story-details>summary{font-size:12px}
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
    document.querySelectorAll('.review-score').forEach((el) => {
      el.innerHTML = `${rating.toFixed(1)} <span>★</span>`;
    });
    document.querySelectorAll('.hero-note').forEach((el) => {
      el.innerHTML = `<strong>${rating.toFixed(1)} ★</strong><span>Google rating<br>${count.toLocaleString()} reviews</span>`;
    });
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
      return `<article class="review-card live-review">
        <div class="stars" aria-label="${rating} out of 5 stars">${stars(rating)}</div>
        <h3>${author}</h3>
        <div class="review-meta"><small>Google review</small><span class="review-date">${date}</span></div>
        <p class="review-text">${text}</p>
        <a class="review-google" href="${escapeHtml(reviewUrl)}" target="_blank" rel="noopener noreferrer">Read on Google ↗</a>
      </article>`;
    }).join('');
  };

  const showStatus = (message, includeLink = false) => {
    const heading = document.querySelector('.review-heading > div:last-child');
    if (!heading) return;
    let status = heading.querySelector('.live-review-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'live-review-status';
      heading.appendChild(status);
    }
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLiveReviews, { once: true });
  } else {
    loadLiveReviews();
  }
})();
