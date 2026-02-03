import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, 
  Building, 
  MapPin, 
  Sun, 
  Settings, 
  Car,
  X,
  ArrowRight,
  Star,
  Clock,
  Users
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import safaritours from "./shiftedfrommain/safaritours.jpg";
import cultural from "./shiftedfrommain/culturalexpeditions.jpg";
import adventuresafari from "./shiftedfrommain/adventuresafari1.jpg";
import beaches from "./shiftedfrommain/beachescapes.avif";
import custom from "./shiftedfrommain/customizedsafari.jpg";
import carImage from "./shiftedfrommain/hireee.jpg";

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: Search,
      title: "Safari Tours",
      description:
        "Explore Kenya's world-renowned national parks, including Maasai Mara, Amboseli, Tsavo and Samburu, on our guided safari tours. Witness the Big Five and countless other species in their natural habitats.",
      image: safaritours,
      gradient: "from-green-600 to-emerald-700",
      bgGradient: "from-green-50 to-emerald-50",
      features: ["Big Five Wildlife", "Expert Guides", "4x4 Vehicles"],
      duration: "3-7 Days",
      rating: 4.9
    },
    {
      icon: Building,
      title: "Cultural Expeditions",
      description:
        "Immerse yourself in the vibrant traditions and daily life of Kenya's diverse cultures. Meet local communities, learn about their customs, and savor traditional cuisine.",
      image: cultural,
      gradient: "from-purple-600 to-indigo-700",
      bgGradient: "from-purple-50 to-indigo-50",
      features: ["Local Communities", "Traditional Cuisine", "Cultural Sites"],
      duration: "2-5 Days",
      rating: 4.8
    },
    {
      icon: Car,
      title: "Car Hire",
      description:
        "The company has a diverse fleet of well-maintained vehicles. We provide both residents and tourists the freedom to explore Kenya's scenic landscapes, cities and attractions at their own pace.",
      image: carImage,
      gradient: "from-blue-600 to-cyan-700",
      bgGradient: "from-blue-50 to-cyan-50",
      features: ["Diverse Fleet", "24/7 Support", "GPS Navigation"],
      duration: "Flexible",
      rating: 4.7
    },
    {
      icon: MapPin,
      title: "Adventure Safaris",
      description:
        "For the thrill-seekers, we offer adventure safaris that include activities like hiking, biking, and hot air ballooning.",
      image: adventuresafari,
      gradient: "from-orange-600 to-red-700",
      bgGradient: "from-orange-50 to-red-50",
      features: ["Hot Air Ballooning", "Hiking Trails", "Biking Adventures"],
      duration: "1-4 Days",
      rating: 4.9
    },
    {
      icon: Settings,
      title: "Customized Safaris",
      description:
        "We tailor itineraries to match your preferences, whether you're travelling with family, friends, or as a solo-adventurer.",
      image: custom,
      gradient: "from-amber-600 to-yellow-700",
      bgGradient: "from-amber-50 to-yellow-50",
      features: ["Personalized Itinerary", "Flexible Schedule", "Private Guide"],
      duration: "Custom",
      rating: 5.0
    },
    {
      icon: Sun,
      title: "Beach Escapes",
      description:
        "Unwind on the pristine shores of the Kenyan Coast in Diani, Watamu, or Malindi. Relax in luxury beach resorts and explore marine life through snorkeling and diving.",
      image: beaches,
      gradient: "from-teal-600 to-cyan-700",
      bgGradient: "from-teal-50 to-cyan-50",
      features: ["Luxury Resorts", "Snorkeling & Diving", "Marine Life"],
      duration: "3-10 Days",
      rating: 4.8
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="service">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mb-6 shadow-lg"
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6 tracking-tight">
            Services We Offer
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-8"></div>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At our company, we pride ourselves in providing a comprehensive range
            of services to cater to all your travel needs. Whether you're arriving
            at an airport, looking for exciting excursions, seeking thrilling
            safaris, requiring car hire, accommodation bookings, or assistance
            with air tickets, we've got you covered!
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isSelected={selectedService === index}
              isHovered={hoveredService === index}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              onHover={() => setHoveredService(index)}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </div>

        {/* Call to Action */}
        {/* Call to Action */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-center"
>
  <div className="rounded-3xl p-12 shadow-2xl relative overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534476478164-b15fec4f091c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VueWElMjBzYWZhcml8ZW58MHx8MHx8fDA%3D")' }}
    ></div>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/80 to-amber-600/80"></div>
    
    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-3xl font-bold text-white mb-4">
        Ready to Start Your Adventure?
      </h3>
      <p className="text-amber-100 mb-8 text-lg max-w-2xl mx-auto">
        Book your dream experience today and create memories that will last a lifetime
      </p>
      <Link to="/calendar">
        <Button 
          size="lg"
          className="bg-white text-amber-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Book Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </Link>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, isSelected, isHovered, onClick, onHover, onLeave }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="relative group cursor-pointer"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
          isSelected ? 'opacity-90' : 'opacity-70 group-hover:opacity-80'
        }`} />

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* Top Section - Icon and Rating */}
          <div className="flex items-start justify-between mb-auto">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}
            >
              <IconComponent className="w-7 h-7 text-white" />
            </motion.div>
            
            <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white text-sm font-medium">{service.rating}</span>
            </div>
          </div>

          {/* Bottom Section - Content */}
          <div className="space-y-4">
            {/* Service Features */}
            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {service.features.map((feature, i) => (
                <Badge key={i} variant="secondary" className="bg-white/20 text-white text-xs">
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Title and Duration */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                {service.title}
              </h3>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{service.duration}</span>
              </div>
            </div>

            {/* Description - Shows on hover or selection */}
            <AnimatePresence>
              {(isHovered || isSelected) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to="/calendar"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Click to expand hint */}
            {!isHovered && !isSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <span className="text-white/70 text-sm">Click to learn more</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Selection Indicator */}
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <X 
              className="w-4 h-4 text-white cursor-pointer" 
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceSection;