const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');
const axios = require('axios');
const NodeCache = require('node-cache');
require('dotenv').config();

let fetch;
import('node-fetch').then(module => {
    fetch = module.default;
}).catch(err => {
    console.error('Failed to load node-fetch:', err);
});

const app = express();

// CORS Configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000', 'http://localhost:3001'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Initialize cache
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

// RapidAPI Key - same for all APIs
const RAPID_API_KEY = process.env.RAPID_API_KEY;

// Validate that required API key is set
if (!RAPID_API_KEY) {
  console.warn('Warning: RAPID_API_KEY environment variable is not set. API calls may fail.');
}

// API Configurations
const APIs = {
  trueway: {
    host: 'trueway-places.p.rapidapi.com',
    url: 'https://trueway-places.p.rapidapi.com/FindPlacesNearby',
    enabled: true
  },
  googleMaps: {
    host: 'google-map-places.p.rapidapi.com',
    url: 'https://google-map-places.p.rapidapi.com/maps/api/place/textsearch/json',
    enabled: true
  },
  africaApi: {
    host: 'africa-api.p.rapidapi.com',
    url: 'https://africa-api.p.rapidapi.com/api/v1/africa/countries',
    enabled: true
  },
  googleSearch: {
    host: 'google-search-master.p.rapidapi.com',
    url: 'https://google-search-master.p.rapidapi.com/search',
    enabled: true
  },
  googleCustomSearch: {
    url: 'https://www.googleapis.com/customsearch/v1',
    enabled: true
  },
  translation: {
    mymemory: {
        enabled: true,
        url: 'https://api.mymemory.translated.net/get',
        email: process.env.MYMEMORY_EMAIL // Optional but recommended for more daily words
    }
}
  
};

// Translation endpoint
app.post('/translate', async (req, res) => {
    try {
        const { text, target_lang, source_lang = 'en' } = req.body;
        
        if (!text || !target_lang) {
            return res.status(400).json({ 
                error: 'Missing required parameters: text and target_lang' 
            });
        }

        // Construct the language pair (e.g., "en|fr" for English to French)
        const langPair = `${source_lang}|${target_lang}`;

        // Make request to MyMemory API
        const response = await fetch(`${APIs.translation.mymemory.url}?q=${encodeURIComponent(text)}&langpair=${langPair}`);
        const data = await response.json();

        if (data.responseStatus === 200) {
            res.json({ 
                translatedText: data.responseData.translatedText
            });
        } else {
            throw new Error(data.responseDetails || 'Translation failed');
        }
        
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ 
            error: 'Translation failed', 
            details: error.message 
        });
    }
});


// Optional: Add a languages endpoint to get supported languages
app.get('/api/languages', (req, res) => {
    // Common language codes supported by MyMemory
    const languages = {
        'en': 'English',
        'sw': 'Swahili',
        'fr': 'French',
        'es': 'Spanish',
        'de': 'German',
        'it': 'Italian',
        'pt': 'Portuguese',
        'ru': 'Russian',
        'ar': 'Arabic',
        'zh': 'Chinese',
        'ja': 'Japanese',
        'ko': 'Korean',
        'hi': 'Hindi'
    };
    
    res.json(languages);
});

// Add this new function to fetch places using Google Custom Search
async function fetchGoogleCustomSearch(searchQuery) {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY; // Your Google API key
    const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID; // Your Search Engine ID

    try {
        const response = await axios.get(APIs.googleCustomSearch.url, {
            params: {
                key: GOOGLE_API_KEY,
                cx: SEARCH_ENGINE_ID,
                q: searchQuery,
                searchType: 'image',
                num: 10,
                imgSize: 'large',
                safe: 'active'
            }
        });

        if (!response.data.items || response.data.items.length === 0) {
            throw new Error('No results from Google Custom Search');
        }

        // Process and format the results
        return response.data.items.map((item, index) => {
            return {
                id: `gcs-${Math.random().toString(36).substr(2, 9)}`,
                name: item.title.split('|')[0].trim(),
                type: determinePlaceType([item.title]),
                rating: 4.0 + Math.random(), // Random rating since CSE doesn't provide ratings
                description: item.snippet,
                images: [
                    item.link,
                    item.image?.thumbnailLink,
                    `/api/placeholder/800/500`
                ].filter(Boolean),
                bestTime: 'Year round',
                highlights: extractHighlights([item.title, item.snippet]),
                location: {
                    lat: -1.286389, // Default to Kenya coordinates
                    lng: 36.817223
                }
            };
        });
    } catch (error) {
        console.error('Google Custom Search Error:', error.message);
        throw error;
    }
}

// Endpoint to fetch places using multiple APIs
app.get('/api/places', async (req, res) => {
    try {
        const searchQuery = req.query.search || 'tourist attractions in Kenya';
        const cacheKey = `places_${searchQuery}`;
        
        // Check cache
        const cachedData = cache.get(cacheKey);
        if (cachedData) {
            return res.json(cachedData);
        }

        // Try different APIs in sequence
        let places = [];

          // Try Google Custom Search first
          if (APIs.googleCustomSearch.enabled) {
            try {
                places = await fetchGoogleCustomSearch(searchQuery);
                console.log("✅ Google Custom Search API Success");
            } catch (error) {
                console.log("❌ Google Custom Search API Error:", error.message);
            }
        }
        
        // 1. Try Trueway Places API first
        if (APIs.trueway.enabled) {
            try {
                places = await fetchTruewayPlaces(searchQuery);
                console.log("✅ Trueway API Success");
            } catch (error) {
                console.log("❌ Trueway API Error:", error.message);
            }
        }
        
        // 2. Try Google Maps Places API if Trueway fails or returns no results
        if (places.length === 0 && APIs.googleMaps.enabled) {
            try {
                places = await fetchGoogleMapPlaces(searchQuery);
                console.log("✅ Google Maps API Success");
            } catch (error) {
                console.log("❌ Google Maps API Error:", error.message);
            }
        }
        
        // 3. Try Google Search API for images if we have places but no images
        if (places.length > 0 && APIs.googleSearch.enabled) {
            try {
                places = await enrichPlacesWithImages(places);
                console.log("✅ Added images from Google Search API");
            } catch (error) {
                console.log("❌ Google Search API Error:", error.message);
            }
        }
        
        // 4. Add Kenya-specific info from Africa API if needed
        if (places.length > 0 && APIs.africaApi.enabled && 
            (searchQuery.toLowerCase().includes('kenya') || 
             searchQuery.toLowerCase().includes('africa'))) {
            try {
                places = await addKenyaInfo(places);
                console.log("✅ Added Kenya info from Africa API");
            } catch (error) {
                console.log("❌ Africa API Error:", error.message);
            }
        }
        
        // If all APIs fail, fall back to static data
        if (places.length === 0) {
            places = getKenyaFallbackAttractions();
            console.log("⚠️ Using fallback data");
        }

        // Cache results
        cache.set(cacheKey, places);
        res.json(places);
    } catch (error) {
        console.error('General API Error:', error.message);
        
        // Final fallback
        const fallbackAttractions = getKenyaFallbackAttractions();
        res.json(fallbackAttractions);
    }
});

// Function to fetch places using Trueway API
async function fetchTruewayPlaces(searchQuery) {
    // Default coordinates for Kenya (Nairobi)
    const lat = -1.286389;
    const lng = 36.817223;
    const radius = 50000; // 50km radius

    const response = await axios.get(APIs.trueway.url, {
        params: {
            location: `${lat},${lng}`,
            type: searchQuery.replace('in Kenya', '').trim(),
            radius: radius
        },
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': APIs.trueway.host
        }
    });
    
    if (!response.data.results || response.data.results.length === 0) {
        throw new Error('No results from Trueway');
    }

    return response.data.results.map(place => {
        return {
            id: place.id || `tw-${Math.random().toString(36).substr(2, 9)}`,
            name: place.name,
            type: determinePlaceType(place.types || []),
            rating: place.rating || 4.0,
            description: place.address || 'Kenya',
            images: ['/api/placeholder/800/500'], // Will be replaced later if Google Search API is available
            bestTime: 'Year round',
            highlights: extractHighlights(place.types || []),
            location: {
                lat: place.location.lat,
                lng: place.location.lng
            }
        };
    });
}

// Function to fetch places using Google Maps Places API
async function fetchGoogleMapPlaces(searchQuery) {
    const response = await axios.get(APIs.googleMaps.url, {
        params: {
            query: searchQuery,
            language: 'en',
            region: 'ke'
        },
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': APIs.googleMaps.host
        }
    });
    
    if (!response.data.results || response.data.results.length === 0) {
        throw new Error('No results from Google Maps Places');
    }

    return response.data.results.map(place => {
        return {
            id: place.place_id || `gmp-${Math.random().toString(36).substr(2, 9)}`,
            name: place.name,
            type: determinePlaceType(place.types || []),
            rating: place.rating || 4.0,
            description: place.formatted_address || 'Kenya',
            images: ['/api/placeholder/800/500'], // Will be replaced later if Google Search API is available
            bestTime: 'Year round',
            highlights: extractHighlights(place.types || []),
            location: {
                lat: place.geometry?.location?.lat,
                lng: place.geometry?.location?.lng
            }
        };
    });
}

// Function to add images to places using Google Search API
// Function to add images to places using Google Search API
async function enrichPlacesWithImages(places) {
    const enrichedPlaces = [...places];
    
    // Only process the first 5 places to avoid rate limiting
    const placesToProcess = enrichedPlaces.slice(0, 5);
    
    for (let i = 0; i < placesToProcess.length; i++) {
        try {
            const place = placesToProcess[i];
            const searchTerm = `${place.name} ${place.type} Kenya tourism`;
            console.log(`Fetching images for ${place.name} (${i+1}/${placesToProcess.length})...`);
            
            // Implement retry logic
            let retries = 0;
            const maxRetries = 2;
            let success = false;
            
            while (!success && retries <= maxRetries) {
                try {
                    const response = await axios.get('https://google-search-master.p.rapidapi.com/images', {
                        params: {
                            q: searchTerm,
                            num: 3
                        },
                        headers: {
                            'X-RapidAPI-Key': RAPID_API_KEY,
                            'X-RapidAPI-Host': APIs.googleSearch.host
                        }
                    });
                    
                    if (response.data && response.data.organic && response.data.organic.length > 0) {
                        // Extract image URLs from response
                        const imageUrls = response.data.organic
                            .slice(0, 3)
                            .map(img => img.url || img.image?.url || img.thumbnail?.url)
                            .filter(url => url);
                        
                        if (imageUrls.length > 0) {
                            enrichedPlaces[i].images = imageUrls;
                            console.log(`✅ Found ${imageUrls.length} images for ${place.name}`);
                        }
                    }
                    
                    success = true;
                } catch (error) {
                    retries++;
                    if (error.response && error.response.status === 429) {
                        console.log(`⚠️ Rate limited. Retry ${retries}/${maxRetries} for ${place.name}`);
                        // Exponential backoff - wait longer between retries
                        await new Promise(resolve => setTimeout(resolve, 2000 * Math.pow(2, retries)));
                    } else {
                        throw error;
                    }
                }
            }
            
            // Longer delay between places to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 3000));
            
        } catch (error) {
            console.log(`❌ Failed to get images for ${enrichedPlaces[i].name}: ${error.message}`);
        }
    }
    
    // For the remaining places, keep the placeholder images
    console.log(`Processed ${placesToProcess.length} places with images, ${enrichedPlaces.length - placesToProcess.length} places with placeholders`);
    
    return enrichedPlaces;
}

// Function to add Kenya-specific info from Africa API
async function addKenyaInfo(places) {
    try {
        const response = await axios.get('https://africa-api.p.rapidapi.com/api/v1/africa/country', {
            params: {
                name: 'kenya'
            },
            headers: {
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': APIs.africaApi.host
            }
        });
        
        if (response.data && response.data.resources) {
            const kenyaInfo = response.data.resources;
            
            // Add Kenya-specific details to each place
            return places.map(place => {
                return {
                    ...place,
                    countryInfo: {
                        name: kenyaInfo.name || 'Kenya',
                        capital: kenyaInfo.capital || 'Nairobi',
                        currency: kenyaInfo.currency || 'Kenyan Shilling',
                        language: kenyaInfo.languages?.[0]?.name || 'Swahili, English'
                    }
                };
            });
        }
        
        return places;
    } catch (error) {
        console.log("Error fetching Kenya info:", error.message);
        return places;
    }
}

// Function to get fallback Kenya attractions if APIs fail
function getKenyaFallbackAttractions() {
    return [
        {
            id: 'masai-mara',
            name: 'Masai Mara National Reserve',
            type: 'National Park',
            rating: 4.8,
            description: 'Masai Mara National Reserve, Kenya',
            images: ['/api/placeholder/800/500'],
            bestTime: 'July to October',
            highlights: ['Wildlife Safari', 'Great Migration', 'Maasai Culture'],
            location: { lat: -1.5021, lng: 35.1447 }
        },
        {
            id: 'amboseli',
            name: 'Amboseli National Park',
            type: 'National Park',
            rating: 4.7,
            description: 'Amboseli National Park, Kenya',
            images: ['/api/placeholder/800/500'],
            bestTime: 'June to October',
            highlights: ['Mount Kilimanjaro Views', 'Elephants', 'Wildlife'],
            location: { lat: -2.6527, lng: 37.2606 }
        },
        {
            id: 'diani-beach',
            name: 'Diani Beach',
            type: 'Beach',
            rating: 4.6,
            description: 'Diani Beach, Kwale County, Kenya',
            images: ['/api/placeholder/800/500'],
            bestTime: 'December to March',
            highlights: ['White Sand Beaches', 'Water Sports', 'Coral Reefs'],
            location: { lat: -4.3477, lng: 39.5682 }
        },
        {
            id: 'nairobi-national-park',
            name: 'Nairobi National Park',
            type: 'National Park',
            rating: 4.5,
            description: 'Nairobi National Park, Kenya',
            images: ['/api/placeholder/800/500'],
            bestTime: 'Year round',
            highlights: ['Urban Wildlife', 'Big Five', 'City Views'],
            location: { lat: -1.3752, lng: 36.8911 }
        },
        {
            id: 'lake-nakuru',
            name: 'Lake Nakuru National Park',
            type: 'National Park',
            rating: 4.6,
            description: 'Lake Nakuru National Park, Nakuru, Kenya',
            images: ['/api/placeholder/800/500'],
            bestTime: 'Year round',
            highlights: ['Flamingos', 'Rhinos', 'Bird Watching'],
            location: { lat: -0.3636, lng: 36.0999 }
        }
    ];
}

// Helper function to determine place type
function determinePlaceType(types) {
    const typeMapping = {
        'natural': 'Natural Feature',
        'point_of_interest': 'Tourist Attraction',
        'landmark': 'Landmark',
        'museum': 'Museum',
        'national_park': 'National Park',
        'park': 'Park',
        'beach': 'Beach',
        'tourist_attraction': 'Tourist Attraction'
    };

    for (const type of types) {
        if (typeMapping[type]) return typeMapping[type];
    }
    
    return 'Attraction';
}

// Helper function to extract highlights from types
function extractHighlights(types) {
    const highlights = [];
    const mappings = {
        'tourist_attraction': 'Tourism',
        'national_park': 'Nature',
        'museum': 'Culture',
        'natural': 'Scenery',
        'point_of_interest': 'Sightseeing',
        'landmark': 'Landmark',
        'beach': 'Beach',
        'park': 'Outdoors'
    };

    types.forEach(type => {
        if (mappings[type] && !highlights.includes(mappings[type])) {
            highlights.push(mappings[type]);
        }
    });

    if (highlights.length < 3) highlights.push('Kenya');
    if (highlights.length < 3) highlights.push('Travel');

    return highlights.slice(0, 3);
}

// Additional endpoint for searching specific Kenya attractions
// Additional endpoint for searching specific Kenya attractions
app.get('/api/kenya/attractions', async (req, res) => {
    try {
        const searchQuery = `${req.query.search || 'attractions'} in Kenya`;
        const cacheKey = `kenya_${searchQuery}`;
        
        // Check cache
        const cachedData = cache.get(cacheKey);
        if (cachedData) {
            return res.json(cachedData);
        }

        // Use Google Search API for detailed information
        const response = await axios.get('https://google-search-master.p.rapidapi.com/search', {
            params: {
                q: searchQuery,
                num: 5  // Reduced from 10 to 5
            },
            headers: {
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': APIs.googleSearch.host
            }
        });
        
        if (!response.data || !response.data.organic || response.data.organic.length === 0) {
            throw new Error('No search results');
        }

        // Process search results into attraction format
        const attractions = response.data.organic.map((result, index) => {
            return {
                id: `search-${index}`,
                name: result.title || 'Kenya Attraction',
                type: 'Tourist Attraction',
                rating: 4.0 + Math.random() * 1.0, // Random rating between 4.0-5.0
                description: result.snippet || 'A beautiful attraction in Kenya',
                images: ['/api/placeholder/800/500'],
                bestTime: 'Year round',
                highlights: ['Kenya', 'Tourism', 'Travel'],
                url: result.link || '',
                searchRank: index + 1
            };
        });

        // Try to add images to only the first 2 results
        if (APIs.googleSearch.enabled) {
            for (let i = 0; i < Math.min(2, attractions.length); i++) {
                try {
                    console.log(`Fetching images for ${attractions[i].name}...`);
                    const imageResponse = await axios.get('https://google-search-master.p.rapidapi.com/images', {
                        params: {
                            q: attractions[i].name + ' Kenya',
                            num: 3
                        },
                        headers: {
                            'X-RapidAPI-Key': RAPID_API_KEY,
                            'X-RapidAPI-Host': APIs.googleSearch.host
                        }
                    });
                    
                    if (imageResponse.data && imageResponse.data.organic && imageResponse.data.organic.length > 0) {
                        const imageUrls = imageResponse.data.organic
                            .slice(0, 3)
                            .map(img => img.url || img.image?.url || img.thumbnail?.url)
                            .filter(url => url);
                        
                        if (imageUrls.length > 0) {
                            attractions[i].images = imageUrls;
                            console.log(`✅ Added images to ${attractions[i].name}`);
                        }
                    }
                    
                    // Longer delay to avoid rate limiting
                    await new Promise(resolve => setTimeout(resolve, 3000));
                } catch (error) {
                    console.log(`❌ Failed to get images for ${attractions[i].name}: ${error.message}`);
                }
            }
        }

        // Cache results
        cache.set(cacheKey, attractions);
        res.json(attractions);
    } catch (error) {
        console.error('Search API Error:', error.message);
        res.json(getKenyaFallbackAttractions());
    }
});

// Placeholder image endpoint
app.get('/api/placeholder/:width/:height', (req, res) => {
    const { width, height } = req.params;
    const text = 'Amazing Kenya Destination';
    
    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#F5F5F5"/>
        <rect width="100%" height="100%" fill="#FFB347" opacity="0.3"/>
        <text 
            x="50%" 
            y="50%" 
            font-family="Arial, sans-serif" 
            font-size="24" 
            text-anchor="middle" 
            dominant-baseline="middle"
            fill="#333333"
        >${text}</text>
    </svg>`;

    res.set('Content-Type', 'image/svg+xml');
    res.send(svg);
});

// API Status endpoint
app.get('/api/status', async (req, res) => {
    const statuses = {};
    
    // Check Trueway API
    if (APIs.trueway.enabled) {
        try {
            await axios.get(APIs.trueway.url, {
                params: { location: '-1.286389,36.817223', type: 'restaurant', radius: 1000 },
                headers: {
                    'X-RapidAPI-Key': RAPID_API_KEY,
                    'X-RapidAPI-Host': APIs.trueway.host
                }
            });
            statuses.trueway = 'active';
        } catch (error) {
            statuses.trueway = 'error';
        }
    } else {
        statuses.trueway = 'disabled';
    }
    
    // Check Google Maps API
    if (APIs.googleMaps.enabled) {
        try {
            await axios.get(APIs.googleMaps.url, {
                params: { query: 'nairobi hotel', language: 'en', region: 'ke' },
                headers: {
                    'X-RapidAPI-Key': RAPID_API_KEY,
                    'X-RapidAPI-Host': APIs.googleMaps.host
                }
            });
            statuses.googleMaps = 'active';
        } catch (error) {
            statuses.googleMaps = 'error';
        }
    } else {
        statuses.googleMaps = 'disabled';
    }
    
    // Check Africa API
    if (APIs.africaApi.enabled) {
        try {
            await axios.get('https://africa-api.p.rapidapi.com/api/v1/africa/countries', {
                headers: {
                    'X-RapidAPI-Key': RAPID_API_KEY,
                    'X-RapidAPI-Host': APIs.africaApi.host
                }
            });
            statuses.africaApi = 'active';
        } catch (error) {
            statuses.africaApi = 'error';
        }
    } else {
        statuses.africaApi = 'disabled';
    }
    
    // Check Google Search API
    if (APIs.googleSearch.enabled) {
        try {
            await axios.get('https://google-search-master.p.rapidapi.com/search', {
                params: { q: 'Kenya tourism', num: 1 },
                headers: {
                    'X-RapidAPI-Key': RAPID_API_KEY,
                    'X-RapidAPI-Host': APIs.googleSearch.host
                }
            });
            statuses.googleSearch = 'active';
        } catch (error) {
            statuses.googleSearch = 'error';
        }
    } else {
        statuses.googleSearch = 'disabled';
    }
    
    res.json({
        status: 'online',
        apis: statuses,
        timestamp: new Date().toISOString()
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API Status: http://localhost:${PORT}/api/status`);
});
