// pages/api/google-reviews.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!placeId || !apiKey) {
      return res.status(500).json({ error: 'Google API configuration missing' });
    }

    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(data.error_message || 'Failed to fetch reviews');
    }

    res.status(200).json({
      reviews: data.result.reviews || [],
      averageRating: data.result.rating,
      totalReviews: data.result.reviews?.length || 0
    });
  } catch (error) {
    console.error('Google Reviews API error:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}