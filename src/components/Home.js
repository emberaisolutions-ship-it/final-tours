import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import transport from "./shiftedfrommain/transport.jpg";
import BannerSlider from "./BannerSlider";
import TeamData from "./TeamData";
import Service from "./ServiceSection";
import MermaidBookingFlow from "./MermaidBookingFlow";
import { ChevronRight, Star, Award, Users, Globe } from 'lucide-react';
import ReviewQRCode from "./ReviewQRCode";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data
  const testimonials = [
    {
      name: "Guy from Belgium",
      role: "Adventure Explorer",
      content:
        "Best Guide in Kenya! Dan knows the parks and animals like no other. He's professional, respectful, and always in good spirits. When we return, he'll definitely be our guide again!",
      rating: 5,
    },
    {
      name: "Asha from Belgium",
      role: "Safari Enthusiast",
      content:
        "Dan lifted our safari to the highest level! His expertise made us feel at ease immediately. We saw the Big 5 by day 2, and his respect for wildlife made the experience even more special.",
      rating: 5,
    },
    {
      name: "Charlotte",
      role: "Nature Lover",
      content:
        "An unforgettable experience through Kenya. Everything was incredibly well-organized, from the wildlife encounters to the luxury accommodations. The warmth and hospitality left a lasting impression.",
      rating: 5,
    },
  ];

  const tourHighlights = [
    {
      title: "Local Expertise",
      description: "In-depth knowledge of Kenya and its unique attractions",
      icon: "🏛️",
    },
    {
      title: "Responsible Travel",
      description: "Committed to sustainable tourism",
      icon: "🌱",
    },
    {
      title: "24/7 Customer Support",
      description: "Assistance available round the clock",
      icon: "📞",
    },
    {
      title: "Wide Selection",
      description: "We offer a diverse fleet to cater to various needs and preferences.",
      icon: "🚗",
    },
    {
      title: "Convenience",
      description: "We provide flexible pick-up and drop-off locations, including major airports and cities.",
      icon: "📍",
    },
    {
      title: "Maintenance & Safety",
      description: "Our vehicles are regularly serviced to ensure your safety and comfort.",
      icon: "🔧",
    },
    {
      title: "Experienced Guides",
      description: "Professional multilingual guides with extensive knowledge of wildlife and local culture.",
      icon: "👨‍🏫",
    },
    {
      title: "Private Safaris",
      description: "Customised, private safaris where you explore Africa at your own pace with flexible itineraries.",
      icon: "🦁",
    },
    {
      title: "No Limit on Driving Distance",
      description: "Unlimited game drive mileage to take you to beautiful, remote places other tour operators don't reach.",
      icon: "🛣️",
    },
  ];

  const features = [
    {
      title: "Explore Nature",
      image:
      "https://images.unsplash.com/photo-1620693778087-2bced33a4a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hYXNhaXxlbnwwfHwwfHx8MA%3D%3D",
      link: "/nature",
      description:
        "Discover breathtaking landscapes and stunning natural wonders",
    },
    {
      title: "Experience Culture",
      image: "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VueWF8ZW58MHx8MHx8fDA%3D",
      link: "/culture",
      description: "Immerse yourself in rich traditions and history",
    },
    {
      title: "Adventure Awaits",
      image: transport,
      link: "/calendar",
      description:
        "Embark on thrilling adventures and create unforgettable memories",
    },
  ];

  const stats = [
    { number: "1000+", label: "Happy Travelers", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Tour Packages", icon: Globe },
    { number: "98%", label: "Satisfaction Rate", icon: Star }
  ];

  // Component sections
  const HeroSection = () => (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-full px-8 py-4 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <span className="text-amber-800 font-semibold text-sm tracking-wide">Premium Safari Experience</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800">
                  Welcome To
                </span>
                <span className="block text-gray-900 mt-2">
                  Danil Scenic
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-700">
                  Tours!
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Experience the untamed beauty of Kenya with our expertly curated tours and 
                professional guides. Discover breathtaking landscapes and create unforgettable memories.
              </p>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/calendar" className="group">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 transform">
                Book Your Adventure
                <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>

            <Link to="/contact" className="group">
              <Button
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-10 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - 5 columns */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative">
            {/* Background blur effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-400/15 to-amber-600/20 rounded-3xl blur-2xl transform rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-orange-300/15 via-amber-200/10 to-orange-500/15 rounded-3xl blur-xl transform -rotate-2 scale-110"></div>
            
            {/* Main card */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20">
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-3xl">🦁</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">Safari Adventure</h3>
                    <p className="text-gray-600 text-lg">Big 5 Wildlife Experience</p>
                  </div>
                </div>
                
                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center border border-amber-100 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-3xl mb-3">🌍</div>
                    <div className="font-bold text-amber-800 text-lg">Eco Tours</div>
                    <div className="text-amber-600 text-sm mt-1">Sustainable Travel</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center border border-orange-100 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-3xl mb-3">📸</div>
                    <div className="font-bold text-orange-800 text-lg">Photo Safari</div>
                    <div className="text-orange-600 text-sm mt-1">Capture Moments</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const HighlightsSection = () => (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mb-6 shadow-lg">
          <span className="text-white text-2xl">✦</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4 tracking-tight">
          Why Choose Danil Scenic Tours?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Experience exceptional service with our commitment to excellence in every detail
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {tourHighlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.6,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group cursor-pointer"
          >
            <div className="relative h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-100/0 group-hover:from-amber-50/30 group-hover:to-amber-100/20 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white text-2xl font-bold">{highlight.icon}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-amber-800 group-hover:text-amber-700 transition-colors duration-300 leading-tight">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-orange-50/30 to-amber-50/50 rounded-3xl transform -skew-y-1"></div>
      <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl mb-6 shadow-lg"
          >
            <span className="text-white text-2xl">💬</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-amber-500 text-2xl"
                      >
                        ★
                      </motion.span>
                    )
                  )}
                </div>

                <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <p className="font-semibold text-amber-800 text-lg">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                className={`transition-all duration-300 ${
                  index === activeTestimonial
                    ? "w-8 h-2 bg-amber-600"
                    : "w-2 h-2 bg-amber-300"
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const FeaturesSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {features.map((feature, index) => (
        <Link to={feature.link} key={index} className="group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="h-full overflow-hidden border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                    {feature.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-1"
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/10 py-1 px-3 hover:bg-white/30 transition-all duration-200"
                    >
                      <span className="mr-1">Explore</span>
                      <ChevronRight className="h-3 w-3 opacity-70 group-hover:translate-x-1 transition-transform duration-200" />
                    </Badge>
                  </motion.div>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-b from-white to-gray-50">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );

  const ScrollToTop = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 p-4 shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 group"
        size="lg"
      >
        <FaChevronDown className="transform rotate-180 group-hover:-translate-y-1 transition-transform duration-300" />
      </Button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Enhanced Header with better spacing and backdrop */}
      <header className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-32 left-1/3 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative pt-20 sm:pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BannerSlider />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Enhanced Main Content with better section spacing */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-16 lg:py-24"
          >
            <HeroSection />
          </motion.section>

          {/* Team Data Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-12 lg:py-16"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-lg"
              >
                <span className="text-white text-2xl">👥</span>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <TeamData />
          </motion.section>

          {/* Highlights Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 lg:py-20"
          >
            <HighlightsSection />
          </motion.section>

          {/* Testimonials */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 lg:py-20"
          >
            <TestimonialsSection />
          </motion.section>

          {/* Booking Flow */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 lg:py-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg"
              >
                <span className="text-white text-2xl">📅</span>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Easy Booking Process</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
            <MermaidBookingFlow />
          </motion.section>

          {/* Services Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 lg:py-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-green-50/50 via-emerald-50/30 to-green-50/50 rounded-3xl transform skew-y-1"></div>
            <div className="relative">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg"
                >
                 
                   <span className="text-white text-2xl">🛎️</span>
                </motion.div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
              </div>
              <Service />
            </div>
          </motion.section>

          {/* Stats Section */}
          {/* <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 lg:py-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg"
              >
                <span className="text-white text-2xl">📊</span>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="text-4xl font-bold text-amber-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section> */}

          {/* Features Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 lg:py-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 shadow-lg"
              >
                <span className="text-white text-2xl">🌟</span>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore Our Features</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto rounded-full"></div>
            </div>
            <FeaturesSection />
          </motion.section>

          {/* Review QR Code Section */}
          {/* <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 lg:py-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6 shadow-lg"
              >
                <span className="text-white text-2xl">📱</span>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto rounded-full"></div>
            </div>
            <ReviewQRCode />
          </motion.section> */}

          {/* Call to Action Section */}
          {/* <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-20 lg:py-28"
          >
            <div className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute top-16 right-8 w-6 h-6 bg-white rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-white rounded-full"></div>
              </div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready for Your Next
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                      Adventure?
                    </span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-amber-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of satisfied travelers and discover the magic of Kenya with our expert guides
                  </p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link to="/calendar" className="group">
                      <Button className="bg-white text-amber-600 hover:bg-amber-50 px-10 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 transform">
                        Book Now
                        <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </Link>
                    <Link to="/packages" className="group">
                      <Button
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-10 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 group-hover:scale-105 transform"
                      >
                        View Packages
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section> */}

        </div>
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default Home;