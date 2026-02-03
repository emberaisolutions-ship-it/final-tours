import React, { useState } from 'react';
import Service from './ServiceSection';
import family from './shiftedfrommain/family.png';
import { useTranslation } from 'react-i18next';
import Partners from './Partners';
import { Link } from "react-router-dom";

function About() {
  const { t } = useTranslation();
  const [isBookAdventureOpen, setBookAdventureOpen] = useState(false);

  const toggleBookAdventureModal = () => {
    setBookAdventureOpen((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-25 to-orange-50">
      {/* Hero Section with Enhanced Visual Hierarchy */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea580c' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Licensed Tour Operator
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 mb-8 leading-tight">
              {t('Who We Are')}
            </h1>
            
            {/* Main Content Card with Glass Effect */}
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                {/* Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-orange-100">
                  <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      {t('DANIL SCENIC TOURS is a private limited company registered in Kenya and licensed by the Tourism Regulatory Authority as a Tour operator. It provides practical support to local and Foreign tourists in Kenya and deals with various organizational aspects of a trip ranging from creating touristic packages, determining the needs of various categories of clients, and making travel arrangements (accommodation, transport, meals, tours, insurance, and so on). The company has competent staff members with requisite knowledge and skills in tourism. The staff members include; Tour guide/drivers, Tour consultants, and Project Managers.')}
                    </p>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
                    
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      Our team of passionate experts is committed to curating tailor-made itineraries, providing exceptional service, and ensuring responsible and sustainable travel.
                      Whether you're seeking thrilling wildlife encounters, serene beach retreats, or cultural explorations, Danil Scenic Tours is here to make your dream adventure a reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image and Text Section with Advanced Layout */}
      <div className="py-24 bg-gradient-to-b from-orange-50 to-white relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image Section with Enhanced Effects */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-[2rem] blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                <img
                  src={family}
                  className="w-full h-[650px] object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  alt="Exploring Kenya"
                />
                
                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-gray-900 z-20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-700">Live Adventures</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Experience Kenya</h3>
                  <p className="text-gray-600">Discover the magic of East Africa with our expert guides</p>
                </div>
              </div>
            </div>

            {/* Text Section with Enhanced Typography */}
            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-orange-100 rounded-full text-orange-700 text-sm font-medium">
                  ✨ Premium Experience
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                  Join Us on a
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                    Remarkable Journey
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Embark on a transformative adventure with Danil Scenic Tours and immerse yourself in the heart of Kenya's natural wonders and cultural treasures.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Our meticulously designed experiences are a gateway to authentic encounters, unforgettable memories, and a deeper connection with the remarkable landscapes and communities of Kenya.
                </p>
              </div>
              
              {/* Enhanced CTA Button */}
              <div className="pt-4">
                <Link 
                  to="/calendar"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-2xl
                    hover:from-orange-700 hover:to-orange-600 
                    transform hover:scale-105 hover:-translate-y-1
                    transition-all duration-300 ease-out
                    shadow-lg hover:shadow-2xl hover:shadow-orange-500/25
                    before:absolute before:inset-0 before:bg-white before:opacity-0 before:rounded-2xl before:transition-opacity before:duration-300 hover:before:opacity-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="relative z-10">Book Your Adventure</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section with Modern Card Design */}
      <div className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium">
                🎯 Our Purpose
              </div>
              <h2 className="text-5xl font-black text-gray-900">
                Our Mission
              </h2>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-orange-100">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-2xl text-gray-700 leading-relaxed font-light">
                  To create unforgettable experiences that connect our clientele to the stunning landscapes, magnificent wildlife, and rich cultures across Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section with Enhanced Cards */}
      <div className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-orange-700 text-sm font-medium mb-6">
              💎 Our Values
            </div>
            <h2 className="text-4xl font-black text-gray-900">
              What Drives Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Experiences",
                description: "We craft genuine, immersive journeys that showcase the real Kenya.",
                icon: "🌍"
              },
              {
                title: "Sustainable Tourism",
                description: "Committed to preserving Kenya's natural beauty for future generations.",
                icon: "🌱"
              },
              {
                title: "Local Expertise", 
                description: "Our knowledgeable team ensures you experience the best of Kenya.",
                icon: "🎯"
              }
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-orange-100">
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl text-2xl mb-4">
                      {value.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    
                    {/* Decorative element */}
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;