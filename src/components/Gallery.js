import React, { useState, useMemo } from "react";
import { importAllMedia } from './utils/utils';
import imageData from './imageData.json';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const media = useMemo(() => importAllMedia(
    require.context("./assets", false, /\.(png|jpe?g|svg|mp4)$/)
  ), []);

  const images = media.filter((value) => !value.endsWith(".mp4"));

  // Create a map from filename to description, breed, and path
  const imageMap = {};
  imageData.forEach((item) => {
    if (item.filename) {
      imageMap[item.filename] = {
        description: item.description,
        breed: item.breed,
        path: item.path
      };
    }
  });

  // Get unique breeds for filtering
  const uniqueBreeds = [...new Set(imageData.map(item => item.breed))].filter(Boolean);

  // Filter images based on selected filter
  const filteredImages = images.filter((value) => {
    if (filter === 'all') return true;
    const filenameWithHash = value.split('/').pop();
    const filename = filenameWithHash.replace(/(\.[a-f0-9]+)(\..*)$/, '$2');
    const imageInfo = imageMap[filename];
    return imageInfo && imageInfo.breed === filter;
  });

  const openLightbox = (imageSource, imageInfo) => {
    setSelectedImage({ source: imageSource, info: imageInfo });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 pt-24 pb-16">
      {/* Safari-themed Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent mb-4">
            Safari Gallery
          </h1>
          <p className="text-lg md:text-xl text-brown-700 max-w-2xl mx-auto leading-relaxed">
            Discover the magnificent wildlife and breathtaking moments captured during our safari adventures
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>

        {/* Enhanced Filter Section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 border-2 border-orange-400'
                  : 'bg-white/80 text-orange-700 border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50 backdrop-blur-sm'
              }`}
            >
              All Wildlife
            </button>
            {uniqueBreeds.map((breed) => (
              <button
                key={breed}
                onClick={() => setFilter(breed)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === breed
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 border-2 border-orange-400'
                    : 'bg-white/80 text-orange-700 border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50 backdrop-blur-sm'
                }`}
              >
                {breed}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="gallery-wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((value, index) => {
              const filenameWithHash = value.split('/').pop();
              const filename = filenameWithHash.replace(/(\.[a-f0-9]+)(\..*)$/, '$2');
              const imageInfo = imageMap[filename];

              if (!imageInfo) {
                console.error(`No matching entry in imageMap for ${filename}`);
                return null;
              }

              return (
                <SafariImageItem
                  key={value}
                  imageSource={value}
                  breed={imageInfo.breed}
                  description={imageInfo.description}
                  onImageClick={() => openLightbox(value, imageInfo)}
                  index={index}
                />
              );
            })}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🦁</div>
              <h3 className="text-2xl font-bold text-brown-700 mb-2">No safari moments found</h3>
              <p className="text-brown-600">Try selecting a different filter to explore more wildlife</p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <SafariLightbox
          image={selectedImage}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

// Enhanced Safari Image Item Component
function SafariImageItem({ imageSource, breed, description, onImageClick, index }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer bg-white/50 backdrop-blur-sm border border-orange-200/50"
      onClick={onImageClick}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 animate-pulse flex items-center justify-center">
            <div className="text-orange-400 text-2xl">🦁</div>
          </div>
        )}
        
        <img
          src={imageSource}
          alt={breed}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Safari-themed Overlay */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                {breed}
              </span>
            </div>
            <p className="text-sm font-medium leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Click indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Enhanced Safari Lightbox Component
function SafariLightbox({ image, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl transform animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="flex-1 relative bg-gradient-to-br from-orange-50 to-amber-50">
            <img
              src={image.source}
              alt={image.info.breed}
              className="w-full h-full object-contain max-h-[70vh] lg:max-h-none"
            />
          </div>

          {/* Info Section */}
          <div className="lg:w-80 bg-gradient-to-br from-orange-600 to-amber-600 text-white p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full mb-4">
                  Safari Wildlife
                </span>
                <h2 className="text-3xl font-bold mb-2">{image.info.breed}</h2>
              </div>
              
              <div className="w-16 h-1 bg-white/30 rounded-full"></div>
              
              <p className="text-orange-100 leading-relaxed text-lg">
                {image.info.description}
              </p>

              <div className="pt-4">
                <div className="flex items-center space-x-2 text-orange-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Captured in the wild</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add custom CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .animate-in {
    animation-fill-mode: both;
  }

  .fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .zoom-in {
    animation: zoomIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes zoomIn {
    from { transform: scale(0.95); }
    to { transform: scale(1); }
  }
`;
document.head.appendChild(style);

export default Gallery;