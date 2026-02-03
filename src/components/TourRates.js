import React from 'react';
import { MapPin, Clock, Users, Star, ArrowRight, Camera, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourRates = () => {
  const tours = [
    {
      id: 1,
      title: "Maasai Mara Safari",
      duration: "4 Days",
      price: "$1,599",
      priceNote: "per person",
      description: "Experience the Great Migration and witness the Big Five in their natural habitat with expert Maasai guides.",
      highlights: ["Big Five wildlife", "Great Migration", "Maasai culture", "All meals included"],
      popular: true,
      image: "https://images.unsplash.com/photo-1620693776767-e929c5724b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hYXNhaSUyMG1hcmF8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      title: "Cultural Exploration in Samburu",
      duration: "7 Days",
      price: "$2,099",
      priceNote: "per person",
      description: "Immerse yourself in authentic Samburu traditions and witness unique wildlife in Kenya's northern frontier.",
      highlights: ["Cultural immersion", "Traditional ceremonies", "Rare wildlife", "Authentic cuisine"],
      popular: false,
      image: "https://plus.unsplash.com/premium_photo-1666551753405-88cbf90c04ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbWJ1cnV8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      title: "Adventure Safari in the Great Rift Valley",
      duration: "6 Days",
      price: "$1,899",
      priceNote: "per person",
      description: "Combine thrilling outdoor adventures with spectacular wildlife viewing in the dramatic Rift Valley landscape.",
      highlights: ["Hiking & biking", "Wildlife viewing", "Rift Valley lakes", "Adventure activities"],
      popular: false,
      image: "https://images.unsplash.com/photo-1691209994415-3ca31b1e73f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJpZnQlMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      title: "Kenyan Coastal Retreat",
      duration: "5 Days",
      price: "$1,799",
      priceNote: "per person",
      description: "Discover pristine beaches, Swahili culture, and marine adventures along Kenya's stunning Indian Ocean coastline.",
      highlights: ["Pristine beaches", "Water sports", "Swahili culture", "Marine life"],
      popular: false,
      image: "https://images.unsplash.com/photo-1619550481986-5751a79d0d1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlbnlhJTIwY29hc3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 5,
      title: "Custom Safari Adventure",
      duration: "Flexible",
      price: "Custom",
      priceNote: "pricing available",
      description: "Design your perfect safari experience with our expert team. Tailored itineraries for unforgettable memories.",
      highlights: ["Customized itinerary", "Personal preferences", "Flexible duration", "Expert planning"],
      popular: false,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-25 via-orange-50 to-orange-100 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl mb-8 shadow-lg">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-7xl font-black bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent mb-8 leading-tight">
            Tour Rates
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-600 leading-relaxed font-light mb-6">
              Discover Kenya's wonders with our carefully curated safari experiences
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-orange-100 rounded-full text-orange-700 text-sm font-medium">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
              Rates may vary by season and group size
            </div>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className={`group relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl overflow-hidden transform hover:-translate-y-4 transition-all duration-700 ${
                tour.popular ? 'ring-4 ring-orange-400 ring-offset-4 ring-offset-orange-50' : ''
              }`}
            >
              {tour.popular && (
                <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              
              {/* Image Section - Full Card Coverage */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Info Badges */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-800 shadow-lg">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-800 shadow-lg">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">Group</span>
                  </div>
                </div>

                {/* Hover Overlay Content */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <Camera className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                    <p className="text-lg font-semibold">Preview Safari Experience</p>
                  </div>
                </div>
              </div>

              {/* Content Section - Overlapping the image */}
              <div className="relative -mt-16 bg-white mx-6 rounded-2xl p-8 shadow-lg z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {tour.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-sm text-gray-500 font-medium">Starting from</span>
                    </div>
                    <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                      {tour.price}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">{tour.priceNote}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {tour.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 text-center">Experience Highlights</h4>
                  <div className="space-y-3">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 justify-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/calendar"
                  className="group/btn w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    {tour.price === "Custom" ? "Request Quote" : "Book Safari"}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Section */}
        {/* <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-[3rem]"></div>
          <div className="relative bg-white/95 backdrop-blur-sm rounded-[3rem] shadow-2xl p-16 text-center m-2">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-8">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Ready for Your Safari Adventure?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Let our expert team craft your perfect Kenyan safari experience. 
                Every journey is tailored to create memories that last a lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/calendar"
                  className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span>Book Your Safari</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-orange-50 hover:shadow-lg flex items-center justify-center gap-3"
                >
                  <span>Get Custom Quote</span>
                  <Camera className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        {/* Enhanced Features Section */}
        {/* <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-[3rem]"></div>
          
          
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-400/10 rounded-full blur-xl"></div>
          
          <div className="relative p-16 text-white">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-8">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-6">Why Choose Danil Scenic Tours?</h3>
              <p className="text-gray-300 text-xl font-light max-w-3xl mx-auto">
                Experience Kenya like never before with our award-winning safari adventures
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: MapPin,
                  title: "Expert Local Guides",
                  description: "Licensed professionals with decades of experience and deep cultural knowledge of Kenya's wilderness and heritage."
                },
                {
                  icon: Users,
                  title: "Small Group Experiences",
                  description: "Intimate safaris with personalized attention, ensuring authentic connections with wildlife and local communities."
                },
                {
                  icon: Star,
                  title: "Sustainable Tourism",
                  description: "Committed to responsible travel that supports conservation efforts and empowers local communities across Kenya."
                }
              ].map((feature, index) => (
                <div key={index} className="group text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-6 group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg font-light">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TourRates;