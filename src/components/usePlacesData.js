import { useState, useEffect } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://final-tours.onrender.com';

const usePlacesData = (searchQuery = '') => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const url = `${API_BASE_URL}/api/places${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ''}`;
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // Adding CORS mode explicitly
          mode: 'cors'
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch places: ${response.status}`);
        }

        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received');
        }
        
        setPlaces(data);
        setError(null);
      } catch (err) {
        console.error('[v0] Error fetching places:', err);
        setError(err.message);
        
        // Fallback data when API fails
        const fallbackData = [
          {
            id: 'masai-mara',
            name: 'Masai Mara National Reserve',
            type: 'National Park',
            rating: 4.8,
            description: 'Famous game reserve known for the annual wildebeest migration',
            images: [`${API_BASE_URL}/api/placeholder/800/500`],
            bestTime: 'July to October',
            highlights: ['Wildlife', 'Safari', 'Nature'],
            location: { lat: -1.5021, lng: 35.1447 }
          },
          {
            id: 'diani-beach',
            name: 'Diani Beach',
            type: 'Beach',
            rating: 4.7,
            description: 'Pristine white sandy beach with crystal clear waters',
            images: [`${API_BASE_URL}/api/placeholder/800/500`],
            bestTime: 'December to March',
            highlights: ['Beach', 'Water Sports', 'Marine Life'],
            location: { lat: -4.3477, lng: 39.5682 }
          },
          {
            id: 'mount-kenya',
            name: 'Mount Kenya National Park',
            type: 'National Park',
            rating: 4.6,
            description: 'Second highest mountain in Africa with breathtaking glaciers',
            images: [`${API_BASE_URL}/api/placeholder/800/500`],
            bestTime: 'December to March',
            highlights: ['Hiking', 'Mountain', 'Adventure'],
            location: { lat: -0.1522, lng: 37.3084 }
          }
        ];
        setPlaces(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [searchQuery]);

  return { places, loading, error };
};

export default usePlacesData;
