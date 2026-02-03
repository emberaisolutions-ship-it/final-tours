import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search";

const SearchBox = ({ onLocationSelect }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchTimeout = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, []);

  const searchLocation = async (searchText) => {
    if (!searchText.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setLoading(true);
      
      // Enhanced search parameters
      const params = new URLSearchParams({
        q: searchText,
        format: 'json',
        addressdetails: 1,
        limit: 10,          // Increased limit
        featuretype: 'country,state,city,settlement,town,village,suburb,highway,airport,park,forest,natural',  // More feature types
        namedetails: 1,     // Include name details
        extratags: 1,       // Include extra tags
        countrycodes: 'ke'  // Focus on Kenya (remove or modify for worldwide search)
      });

      const response = await fetch(`${NOMINATIM_BASE_URL}?${params}`, {
        headers: {
          'Accept-Language': 'en-US,en;q=0.9',
          'User-Agent': 'TourismApp/1.0' // Add a user agent to avoid rate limiting
        },
      });

      const data = await response.json();
      
      const formattedResults = data.map(result => ({
        id: result.place_id,
        name: result.display_name,
        lat: parseFloat(result.lat),
        lon: parseFloat(result.lon),
        type: result.type,
        class: result.class,
        importance: result.importance,
        address: result.address,
        extratags: result.extratags || {},
        namedetails: result.namedetails || {}
      }));

      // Sort results by importance
      formattedResults.sort((a, b) => (b.importance || 0) - (a.importance || 0));

      setSearchResults(formattedResults);
      setShowResults(true);
    } catch (error) {
      console.error('Error searching locations:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      searchLocation(value);
    }, 300);
  };

  const handleSelectLocation = (location) => {
    setSearchText(location.name);
    setShowResults(false);
    onLocationSelect(location);
  };

  const formatAddress = (location) => {
    const { address } = location;
    if (!address) return location.name;

    const parts = [];
    
    // Add the most specific name first
    if (location.namedetails && location.namedetails.name) {
      parts.push(location.namedetails.name);
    }

    // Build address from most specific to least specific
    if (address.tourism) parts.push(address.tourism);
    if (address.attraction) parts.push(address.attraction);
    if (address.park) parts.push(address.park);
    if (address.road) parts.push(address.road);
    if (address.suburb) parts.push(address.suburb);
    if (address.city || address.town || address.village) {
      parts.push(address.city || address.town || address.village);
    }
    if (address.county) parts.push(address.county);
    if (address.state) parts.push(address.state);
    if (address.country) parts.push(address.country);

    // Remove duplicates and join
    return [...new Set(parts)].join(', ');
  };

  const getLocationTypeLabel = (location) => {
    if (location.extratags.tourism) return 'Tourist Attraction';
    if (location.extratags.leisure) return 'Leisure Spot';
    if (location.class === 'natural') return 'Natural Feature';
    if (location.class === 'boundary' && location.type === 'protected_area') return 'Protected Area';
    
    return location.type.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="py-20 absolute left-4 top-4 w-80 z-[1000]" ref={searchContainerRef}>
      <div className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search locations (e.g., Maasai Mara, Nairobi)"
            className="w-full px-4 py-2 pl-10 bg-white border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {showResults && (searchResults.length > 0 || loading) && (
          <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
            {loading && (
              <div className="px-4 py-3 text-sm text-gray-500">
                Searching...
              </div>
            )}
            
            {!loading && searchResults.length === 0 && (
              <div className="px-4 py-3 text-sm text-gray-500">
                No locations found. Try a different search term.
              </div>
            )}

            {searchResults.map((location) => (
              <div
                key={location.id}
                onClick={() => handleSelectLocation(location)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              >
                <div className="text-sm font-medium text-gray-900">
                  {formatAddress(location)}
                </div>
                <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full">
                    {getLocationTypeLabel(location)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;