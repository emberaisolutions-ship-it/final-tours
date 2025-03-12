import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';

const ExploreNature = ({ selectedRegion, setSelectedRegion, hideDetails = false }) => {
  // Updated regions array with Lake Nakuru National Park instead of Great Rift Valley
  const regions = [
    {
      name: 'Lake Nakuru National Park',
      image: [
        'https://example.com/lakenakuru1.jpg', 
        'https://example.com/lakenakuru2.jpg',
        'https://example.com/lakenakuru3.jpg',
        'https://example.com/lakenakuru4.jpg',
        'https://example.com/lakenakuru5.jpg'
      ],
      description: 'Explore the stunning Lake Nakuru National Park, famous for its vast flocks of flamingos, diverse wildlife, and beautiful landscapes surrounding the alkaline lake.',
    },
    {
      name: 'Mount Kenya',
      image: [
        'https://example.com/mtkenya1.jpg',
        'https://example.com/mtkenya2.jpg',
        'https://example.com/mtkenya3.jpg',
        'https://example.com/mtkenya4.jpg',
        'https://example.com/mtkenya5.jpg'
      ],
      description: 'Embark on a virtual ascent of Mount Kenya, the second-highest mountain in Africa. Explore its diverse ecosystems, from lush rainforests to icy peaks.',
    },
    {
      name: 'Maasai Mara',
      image: [
        'https://example.com/maasaimara1.jpg',
        'https://example.com/maasaimara2.jpg',
        'https://example.com/maasaimara3.jpg',
        'https://example.com/maasaimara4.jpg',
        'https://example.com/maasaimara5.jpg'
      ],
      description: 'Experience the iconic Maasai Mara, renowned for its rich biodiversity and the annual Great Migration of wildebeest, zebras, and other wildlife.',
    },
    {
      name: 'Kenyan Coast',
      image: [
        'https://example.com/coast1.jpg',
        'https://example.com/coast2.jpg',
        'https://example.com/coast3.jpg',
        'https://example.com/coast4.jpg',
        'https://example.com/coast5.jpg'
      ],
      description: 'Relax on the pristine beaches of the Kenyan Coast, where turquoise waters meet white sandy shores, and explore coral reefs teeming with marine life.',
    },
    {
      name: 'Nairobi National Park',
      image: [
        'https://example.com/nairobi1.jpg',
        'https://example.com/nairobi2.jpg',
        'https://example.com/nairobi3.jpg',
        'https://example.com/nairobi4.jpg',
        'https://example.com/nairobi5.jpg'
      ],
      description: 'Experience the unique thrill of watching wildlife against the backdrop of Nairobi\'s skyline in this park that sits just 7 km from the city center. Home to lions, giraffes, and over 400 bird species.',
    },
    {
      name: 'Amboseli National Park',
      image: [
        'https://example.com/amboseli1.jpg',
        'https://example.com/amboseli2.jpg',
        'https://example.com/amboseli3.jpg',
        'https://example.com/amboseli4.jpg',
        'https://example.com/amboseli5.jpg'
      ],
      description: 'Witness breathtaking views of Mount Kilimanjaro as you observe large elephant herds in this iconic Kenyan park. Known for its spectacular wildlife viewing and stunning landscapes.',
    },
    {
      name: 'Olpejeta Conservancy',
      image: [
        'https://example.com/olpejeta1.jpg',
        'https://example.com/olpejeta2.jpg',
        'https://example.com/olpejeta3.jpg',
        'https://example.com/olpejeta4.jpg',
        'https://example.com/olpejeta5.jpg'
      ],
      description: 'Visit this renowned wildlife sanctuary that\'s home to the last two northern white rhinos on the planet. The conservancy offers exceptional opportunities for viewing the Big Five in their natural habitat.',
    },
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  return (
    <div className={hideDetails ? "" : "min-h-screen bg-gradient-to-b from-amber-50 to-white py-12"}>
      <div className={hideDetails ? "" : "container mx-auto px-4"}>
        {!hideDetails && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Explore Kenya's Natural Wonders
            </h2>
            <p className="text-lg text-amber-700">
              Discover the breathtaking landscapes and wildlife across different regions
            </p>
          </div>
        )}
        
        <div className={hideDetails ? "space-y-4" : "grid md:grid-cols-12 gap-8"}>
          {/* Regions List */}
          <div className={hideDetails ? "" : "md:col-span-4 space-y-4"}>
            {regions.map((region) => (
              <motion.div
                key={region.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedRegion?.name === region.name
                    ? 'bg-amber-800 text-white shadow-lg'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
                onClick={() => {
                  setSelectedRegion(region);
                  setActiveImageIndex(0);
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{region.name}</h3>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform ${
                      selectedRegion?.name === region.name ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Region Details - only shown if hideDetails is false */}
          {!hideDetails && (
            <div className="md:col-span-8">
              {selectedRegion ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  {/* Image Gallery */}
                  <div className="relative h-[400px]">
                    <img
                      src={selectedRegion.image[activeImageIndex]}
                      alt={selectedRegion.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image Navigation */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedRegion.image.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeImageIndex === index
                              ? 'bg-white w-4'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedRegion(null)}
                      className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">
                      {selectedRegion.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedRegion.description}
                    </p>
                    
                    {/* Thumbnail Gallery */}
                    <div className="mt-6 grid grid-cols-5 gap-2">
                      {selectedRegion.image.map((img, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveImageIndex(index)}
                          className={`relative rounded-lg overflow-hidden ${
                            activeImageIndex === index
                              ? 'ring-2 ring-amber-500'
                              : ''
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${selectedRegion.name} ${index + 1}`}
                            className="w-full h-16 object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  <p className="text-xl">Select a region to explore</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreNature;