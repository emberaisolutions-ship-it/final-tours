import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { 
  Search, 
  Plus, 
  Minus, 
  Layers, 
  MapPin, 
  Image as ImageIcon,
  Navigation,
  Compass,
  ZoomIn,
  ZoomOut,
  Eye,
  Camera,
  Star,
  Clock,
  Users
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import MarkerClusterGroup from "react-leaflet-cluster";
import SearchBox from "./SearchBox";

// Fix Leaflet's default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Enhanced Map Controls with modern design
const MapControls = ({ onStyleChange, currentStyle, onMyLocation, hasUserLocation }) => {
  const map = useMap();

  const mapStyleIcons = {
    streets: <Navigation className="h-4 w-4" />,
    satellite: <Eye className="h-4 w-4" />,
    terrain: <Compass className="h-4 w-4" />,
    hybrid: <Camera className="h-4 w-4" />
  };

  return (
    <div className="absolute right-4 top-4 flex flex-col gap-3 z-[1000]">
      {/* Zoom Controls */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
        <button
          onClick={() => map.zoomIn()}
          className="w-10 h-10 flex items-center justify-center hover:bg-blue-50 transition-all duration-200 border-b border-gray-100 group"
        >
          <Plus className="h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
        </button>
        <button
          onClick={() => map.zoomOut()}
          className="w-10 h-10 flex items-center justify-center hover:bg-blue-50 transition-all duration-200 group"
        >
          <Minus className="h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
        </button>
      </div>

      {/* My Location Button */}
      {hasUserLocation && (
        <button
          onClick={onMyLocation}
          className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
        >
          <Navigation className="h-4 w-4" />
        </button>
      )}

      {/* Map Style Selector */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-200 group">
              {mapStyleIcons[currentStyle] || <Layers className="h-4 w-4" />}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="w-40 bg-white/95 backdrop-blur-sm border-gray-200/50"
          >
            <DropdownMenuItem 
              onClick={() => onStyleChange('streets')}
              className="flex items-center gap-3 hover:bg-blue-50"
            >
              <Navigation className="h-4 w-4" />
              Streets
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onStyleChange('satellite')}
              className="flex items-center gap-3 hover:bg-blue-50"
            >
              <Eye className="h-4 w-4" />
              Satellite
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onStyleChange('terrain')}
              className="flex items-center gap-3 hover:bg-blue-50"
            >
              <Compass className="h-4 w-4" />
              Terrain
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onStyleChange('hybrid')}
              className="flex items-center gap-3 hover:bg-blue-50"
            >
              <Camera className="h-4 w-4" />
              Hybrid
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

// Enhanced Map Controller
const MapController = ({ userLocation, selectPosition }) => {
  const map = useMap();
  const routingControl = useRef(null);

  useEffect(() => {
    if (userLocation) {
      map.setView([userLocation.lat, userLocation.lon], 13);
    }
  }, [userLocation, map]);

  useEffect(() => {
    if (userLocation && selectPosition) {
      if (routingControl.current) {
        map.removeControl(routingControl.current);
      }

      routingControl.current = L.Routing.control({
        waypoints: [
          L.latLng(userLocation.lat, userLocation.lon),
          L.latLng(selectPosition.lat, selectPosition.lon)
        ],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ 
            color: '#3b82f6', 
            weight: 4,
            opacity: 0.8 
          }]
        },
        show: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        createMarker: () => null // Don't create default markers
      }).addTo(map);
    }

    return () => {
      if (routingControl.current) {
        map.removeControl(routingControl.current);
      }
    };
  }, [map, userLocation, selectPosition]);

  return null;
};

// Enhanced Location Images with modern card design
const LocationImages = ({ position }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchNearbyImages = async () => {
      if (!position) return;
      
      setLoading(true);
      try {
        // Mock data for demonstration - replace with actual API
        const mockImages = [
          { id: 1, url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=150&fit=crop" },
          { id: 2, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop" },
          { id: 3, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop" }
        ];
        setImages(mockImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNearbyImages();
  }, [position]);

  if (!position || (images.length === 0 && !loading)) return null;

  return (
    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-4 max-w-sm z-[1000]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Camera className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Nearby Photos</h3>
          <p className="text-xs text-gray-500">Discover this location</p>
        </div>
      </div>
      
      {loading ? (
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-20 h-16 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {images.map((image) => (
            <div key={image.id} className="flex-shrink-0 relative group">
              <img
                src={image.url}
                alt="Location"
                className="w-20 h-16 object-cover rounded-lg border-2 border-gray-100 group-hover:border-blue-300 transition-all duration-200"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-all duration-200"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Enhanced Points of Interest with modern markers
const PointsOfInterest = ({ position }) => {
  const [pois, setPois] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!position) return;

    const fetchPois = async () => {
      setLoading(true);
      try {
        // Mock POI data - replace with actual API
        const mockPois = [
          { id: 1, lat: position.lat + 0.001, lon: position.lon + 0.001, name: "Tourist Attraction", type: "tourism" },
          { id: 2, lat: position.lat - 0.001, lon: position.lon + 0.001, name: "Restaurant", type: "restaurant" },
          { id: 3, lat: position.lat + 0.001, lon: position.lon - 0.001, name: "Hotel", type: "accommodation" }
        ];
        setPois(mockPois);
      } catch (error) {
        console.error("Error fetching POIs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPois();
  }, [position]);

  const getPoiIcon = (type) => {
    const iconMap = {
      tourism: 'bg-red-500',
      restaurant: 'bg-orange-500',
      accommodation: 'bg-blue-500',
      default: 'bg-green-500'
    };
    return iconMap[type] || iconMap.default;
  };

  return (
    <MarkerClusterGroup>
      {pois.map((poi) => (
        <Marker
          key={poi.id}
          position={[poi.lat, poi.lon]}
          icon={L.divIcon({
            html: `<div class="w-6 h-6 ${getPoiIcon(poi.type)} rounded-full border-2 border-white shadow-lg"></div>`,
            className: 'custom-marker',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          })}
        >
          <Popup className="custom-popup">
            <div className="p-2">
              <h4 className="font-semibold text-gray-900">{poi.name}</h4>
              <p className="text-sm text-gray-600 capitalize">{poi.type}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};

// Location Info Panel
const LocationInfoPanel = ({ selectPosition, userLocation }) => {
  if (!selectPosition) return null;

  return (
    <div className="absolute top-6 left-6 right-6 md:left-6 md:right-auto md:w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 z-[1000]">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <MapPin className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
            Selected Location
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {selectPosition.display_name}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span>4.5</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>1.2k visits</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Open</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Maps = ({ selectPosition, setSelectPosition }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapStyle, setMapStyle] = useState('streets');
  const mapRef = useRef(null);

  // Enhanced map styles with better URLs
  const mapStyles = {
    streets: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    satellite: "https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=pBSuTyT10yTHHD4BfbuT",
    terrain: "https://api.maptiler.com/maps/terrain-v2/{z}/{x}/{y}.png?key=pBSuTyT10yTHHD4BfbuT",
    hybrid: "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=pBSuTyT10yTHHD4BfbuT"
  };

  // Handle location selection from search
  const handleLocationSelect = (location) => {
    setSelectPosition({
      lat: parseFloat(location.lat),
      lon: parseFloat(location.lon),
      display_name: location.name,
    });

    if (mapRef.current) {
      mapRef.current.flyTo([location.lat, location.lon], 15);
    }
  };

  // Handle my location button
  const handleMyLocation = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.flyTo([userLocation.lat, userLocation.lon], 15);
    }
  };

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => console.error("Error getting location:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-gray-50">
      {/* Search Box */}
      <SearchBox onLocationSelect={handleLocationSelect} />
      
      {/* Location Info Panel */}
      <LocationInfoPanel selectPosition={selectPosition} userLocation={userLocation} />

      {/* Map Container */}
      <MapContainer
        center={userLocation ? [userLocation.lat, userLocation.lon] : [-1.2921, 36.8219]} // Default to Nairobi
        zoom={userLocation ? 13 : 10}
        maxZoom={20}
        className="w-full h-full"
        zoomControl={false}
        whenCreated={(map) => (mapRef.current = map)}
        style={{ background: '#f8fafc' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url={mapStyles[mapStyle]}
          className="map-tiles"
        />

        <MapController userLocation={userLocation} selectPosition={selectPosition} />

        {/* User Location Marker */}
        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lon]}
            icon={L.divIcon({
              html: `<div class="relative">
                <div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div class="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full opacity-25 animate-ping"></div>
              </div>`,
              className: 'custom-marker',
              iconSize: [16, 16],
              iconAnchor: [8, 8]
            })}
          >
            <Popup>
              <div className="text-center p-1">
                <p className="font-semibold text-blue-600">You are here</p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Selected Location Marker */}
        {selectPosition && (
          <Marker
            position={[selectPosition.lat, selectPosition.lon]}
            icon={L.divIcon({
              html: `<div class="relative">
                <div class="w-8 h-8 bg-red-500 rounded-full border-3 border-white shadow-xl flex items-center justify-center">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-red-500"></div>
              </div>`,
              className: 'custom-marker',
              iconSize: [32, 40],
              iconAnchor: [16, 40]
            })}
          >
            <Popup>
              <div className="p-2">
                <h4 className="font-semibold text-gray-900 mb-1">Selected Location</h4>
                <p className="text-sm text-gray-600">{selectPosition.display_name}</p>
              </div>
            </Popup>
          </Marker>
        )}

        <PointsOfInterest position={selectPosition || userLocation} />
        
        <MapControls 
          onStyleChange={setMapStyle} 
          currentStyle={mapStyle}
          onMyLocation={handleMyLocation}
          hasUserLocation={!!userLocation}
        />
        
        <LocationImages position={selectPosition} />
      </MapContainer>

      {/* Custom CSS for enhanced styling */}
      <style jsx>{`
        .map-tiles {
          filter: contrast(1.1) saturate(1.1);
        }
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Maps;