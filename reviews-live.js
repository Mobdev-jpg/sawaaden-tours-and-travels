(function () {
  'use strict';

  const placeId = 'ChIJs2CCbxWl5jkR2Ovr-s0qSyk';
  const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${placeId}`;

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const stars = (rating) => {
    const score = Math.max(0, Math.min(5, Number(rating) || 0));
    const rounded = Math.round(score);
    return `${'★'.repeat(rounded)}${'☆'.repeat(5 - rounded)}`;
  };

  const injectStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .live-review-status{font-size:11px;color:#aebdb6;margin:12px 0 0;line-height:1.5}
      .live-review-status a{color:#e7c28e;text-decoration:underline}
      .review-card.live-review{display:flex;flex-direction:column}
      .live-review .review-meta{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-top:3px}
      .live-review .review-date{color:#7b827e;font-size:10px}
      .live-review .review-text{white-space:pre-line}
      .live-review .review-google{margin-top:auto;padding-top:14px;font-size:10px;font-weight:700;color:#173a31}
      @media(max-width:520px){
        .reviews-section{padding-bottom:120px}
        .live-review .review-meta{display:block}
        .live-review .review-date{display:block;margin-top:3px}
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
    injectStyles();
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
