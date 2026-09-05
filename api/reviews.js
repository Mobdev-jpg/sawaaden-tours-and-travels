const PLACE_ID = 'ChIJs2CCbxWl5jkR2Ovr-s0qSyk';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return response.status(503).json({ error: 'Google Places API key is not configured.' });
  }

  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

  try {
    const googleResponse = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews,googleMapsUri'
      }
    });

    const data = await googleResponse.json();
    if (!googleResponse.ok) {
      return response.status(googleResponse.status).json({ error: data.error?.message || 'Google Places request failed.' });
    }

    const reviews = Array.isArray(data.reviews) ? data.reviews.map((review) => ({
      rating: review.rating,
      relativePublishTimeDescription: review.relativePublishTimeDescription,
      text: review.text,
      authorAttribution: review.authorAttribution,
      googleMapsUri: review.googleMapsUri || data.googleMapsUri
    })) : [];

    response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    return response.status(200).json({
      placeId: PLACE_ID,
      name: data.displayName?.text || 'Sawaaden Tours & Travels',
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      googleMapsUri: data.googleMapsUri,
      reviews
    });
  } catch (error) {
    return response.status(500).json({ error: 'Unable to load Google reviews.' });
  }
}
