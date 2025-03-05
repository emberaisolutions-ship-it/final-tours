import React, { useState } from "react";
import { importAllMedia } from "./utils/utils";
import ExploreCulture, { culturalElements } from "./ExploreCulture";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Info } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import ExploreWildlife, { wildlifeFeatures } from './ExploreWildlife';

function Culture() {
  const images = importAllMedia(
    require.context("./culture", false, /\.(png|jpe?g|svg)$/)
  );

  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Filter images based on selected element
  const getFilteredImages = (filter) => {
    if (!filter) return [];
    
    return Object.values(images).filter(img => 
      img.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
  // If no images match the filter or there are fewer than needed,
  // return random images to ensure we always have something to display
  const getImagesWithFallback = (filter, count = 6) => {
    const filtered = getFilteredImages(filter);
    
    if (filtered.length >= count) {
      return filtered.slice(0, count);
    }
    
    // If we don't have enough filtered images, add random ones to make up the difference
    const allImages = Object.values(images);
    const randomImages = [];
    const neededCount = count - filtered.length;
    
    for (let i = 0; i < neededCount; i++) {
      const randomIndex = Math.floor(Math.random() * allImages.length);
      randomImages.push(allImages[randomIndex]);
    }
    
    return [...filtered, ...randomImages].slice(0, count);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-12">

        {/* Wildlife Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 mb-16"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-amber-900 mb-6 relative inline-block"
            >
              <span className="relative z-10">Wildlife & Safari</span>
              <span className="absolute -bottom-3 left-0 w-full h-4 bg-yellow-300 -z-0 opacity-40 rounded-full blur-sm"></span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-amber-700 max-w-2xl mx-auto"
            >
              Discover Kenya's breathtaking wildlife, from the majestic Big Five to the spectacular Great Migration
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side Wildlife Navigation */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 sticky top-4 self-start"
            >
              <ExploreWildlife 
                onFeatureClick={handleFeatureClick} 
                selectedFeature={selectedFeature}
              />
            </motion.div>
            
            {/* Right Side Wildlife Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-8"
            >
              {selectedFeature ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <PawPrint className="w-8 h-8 text-amber-600" />
                      <h3 className="text-3xl font-bold text-amber-900">
                        {selectedFeature.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                      {selectedFeature.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <Camera className="w-6 h-6 text-amber-700" />
                      <h4 className="text-xl font-semibold text-amber-800">
                        Safari Gallery
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {getFilteredImages(selectedFeature.imageFilter).slice(0, 6).map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                          onClick={() => handleImageClick(image)}
                        >
                          <img
                            src={image}
                            alt={`${selectedFeature.name} - Image ${index + 1}`}
                            className="w-full h-full object-cover transition duration-300 group-hover:brightness-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                            <span className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                              View Fullscreen
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 bg-amber-50/50 rounded-xl p-6">
                      <h5 className="text-lg font-semibold text-amber-800 mb-4">
                        Planning Your Visit
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <span className="text-amber-700">🌍</span>
                          <span>Best locations: {selectedFeature.details.locations.join(', ')}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-amber-700">⏰</span>
                          <span>Best time to visit: {selectedFeature.details.bestTime}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-amber-700">✨</span>
                          <span>Highlights: {selectedFeature.details.highlights.join(', ')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-96 flex flex-col items-center justify-center text-gray-500 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12">
                  <PawPrint className="w-12 h-12 text-amber-300 mb-4" />
                  <p className="text-xl text-center">Select a wildlife feature to begin your safari adventure</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold text-amber-900 mb-6 relative inline-block"
          >
            <span className="relative z-10">Discover Kenya's Culture</span>
            <span className="absolute -bottom-3 left-0 w-full h-4 bg-yellow-300 -z-0 opacity-40 rounded-full blur-sm"></span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-amber-700 max-w-2xl mx-auto"
          >
            Embark on a journey through the rich cultural heritage and diverse traditions that make Kenya uniquely beautiful
          </motion.p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 sticky top-4 self-start"
          >
            <ExploreCulture 
              onElementClick={handleElementClick} 
              selectedElement={selectedElement}
            />
          </motion.div>
          
          {/* Right Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            {selectedElement ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-amber-900 mb-4">
                    {selectedElement.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    {selectedElement.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Camera className="w-6 h-6 text-amber-700" />
                    <h4 className="text-xl font-semibold text-amber-800">
                      Visual Gallery
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {getImagesWithFallback(selectedElement.imageFilter, 6).map((image, index) => (
                      <motion.div
                        key={`${selectedElement.name}-${index}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                        onClick={() => handleImageClick(image)}
                      >
                        <img
                          src={image}
                          alt={`${selectedElement.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition duration-300 group-hover:brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                          <span className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                            View Fullscreen
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-96 flex flex-col items-center justify-center text-gray-500 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12">
                <Info className="w-12 h-12 text-amber-300 mb-4" />
                <p className="text-xl text-center">Select a cultural element to explore Kenya's rich heritage</p>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Full Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-8 pb-4 border-b border-amber-200">
            Complete Visual Heritage Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Object.values(images).map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Kenya culture item ${index + 1}`}
                  className="w-full h-full object-cover transition duration-300 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <span className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                    View Fullscreen
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeImageModal}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={closeImageModal}
                  className="absolute -top-12 right-0 text-white text-sm font-medium bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-full transition duration-300"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
 
      </div>
    </div>
  );
}

export default Culture;