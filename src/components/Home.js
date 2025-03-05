import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaChevronDown,
  FaWhatsapp
} from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import maasai from "./shiftedfrommain/maasai.jpg";
import transport from "./shiftedfrommain/transport.jpg";
import Partners from "./Partners";
import BannerSlider from "./BannerSlider";
import TeamData from "./TeamData";
import Service from "./ServiceSection";
import MermaidBookingFlow from "./MermaidBookingFlow";
import { ChevronRight } from 'lucide-react';

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

  const socialLinks = [
    { Icon: FaTwitter, href: "https://twitter.com/@DanilScenic" },
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=61550528048010",
    },
    { Icon: FaInstagram, href: "https://www.instagram.com/danil.scenic/" },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/danil-scenic-743945286/",
    },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCutpUrWcoi58yHOJb0bTXQg",
    },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@danilscenic" },
    // Added WhatsApp
    { Icon: FaWhatsapp, href: "https://wa.me/254722919249" },
  ];

  const tourHighlights = [
    {
      title: "Local Expertise",
      description: "In-depth knowledge of Kenya and its unique attractions",
      icon: "✦",
    },
    {
      title: "Responsible Travel",
      description: "Committed to sustainable tourism",
      icon: "✦",
    },
    {
      title: "24/7 Customer Support",
      description: "Assistance available round the clock",
      icon: "✦",
    },
    {
      title: "Wide Selection",
      description: "We offer a diverse fleet to cater to various needs and preferences.",
      icon: "✦",
    },
    {
      title: "Convenience",
      description: "We provide flexible pick-up and drop-off locations, including major airports and cities.",
      icon: "✦",
    },
    {
      title: "Maintenance & Safety",
      description: "Our vehicles are regularly serviced to ensure your safety and comfort.",
      icon: "✦",
    },
    {
      title: "Experienced Guides",
      description: "Professional multilingual guides with extensive knowledge of wildlife and local culture.",
      icon: "✦",
    },
    {
      title: "Private Safaris",
      description: "Customised, private safaris where you explore Africa at your own pace with flexible itineraries.",
      icon: "✦",
    },
    {
      title: "No Limit on Driving Distance",
      description: "Unlimited game drive mileage to take you to beautiful, remote places other tour operators don't reach.",
      icon: "✦",
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

  const footerLinks = ["Faq", "Contact", "Terms"];

  // Component sections
  const HeroSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 relative"
    >
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-amber-500/10 rounded-full blur-xl"
      />
      <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-6 relative">
        Welcome To Danil Scenic Tours!
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Experience the beauty of Kenya with our expertly curated tours and
        professional guides
      </p>
      <motion.div
        className="mt-8 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/calendar">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full">
            Book Now
          </Button>
        </Link>

        <Link to="/contact">
          <Button
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full"
          >
            Contact Us
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );

  const HighlightsSection = () => (
    <section className="mb-24">
      <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">
        Why Choose Danil Scenic Tours?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourHighlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 text-2xl">{highlight.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-amber-800 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section className="mb-24 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg">
      <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">
        What Our Clients Say
      </h2>
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
    </section>
  );

  const FeaturesSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 px-4 md:px-0">
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

  const Footer = () => (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4 mb-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-amber-400 transition-all duration-200"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <Link to="/reviews">
              <Button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 text-sm rounded-full">
                View Testimonials
              </Button>
            </Link>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Partners />
          </div>

          <div className="text-center space-y-2">
            <nav className="flex justify-center space-x-4 mb-2">
              {footerLinks.map((route) => (
                <Link
                  key={route.toLowerCase()}
                  to={`/${route.toLowerCase()}`}
                  className="text-sm hover:text-amber-400 transition-colors duration-200"
                >
                  {route}
                </Link>
              ))}
            </nav>
            <div className="text-xs text-amber-200/80">
              <p>
                &copy; {new Date().getFullYear()} Danil Scenic Tours. All
                rights reserved.
              </p>
              <p>Developed by Alex Irungu</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  const ScrollToTop = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="fixed bottom-8 left-8 z-50"
    >
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="rounded-full bg-amber-600 hover:bg-amber-700 p-4"
      >
        <FaChevronDown className="transform rotate-180" />
      </Button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <BannerSlider />
      <ScrollToTop />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HeroSection />
        <TeamData />
        <HighlightsSection />
        <TestimonialsSection />
        <MermaidBookingFlow />
        <Service />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;