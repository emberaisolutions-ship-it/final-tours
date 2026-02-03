import React from 'react';
import { Users, MapPin, Globe, Code, Compass, Calendar } from 'lucide-react';
import alex from './team/alex.jpeg';
import moses from './team/moses.jpeg';
import translator from './team/translator.jpeg';
import t from './team/T.jpeg';
import makiwa from './team/makiwa.jpeg';
import Ann from './team/Ann.jpeg';
import Dan from './team/dan.jpeg';

const TeamData = () => {
  // Team member data with placeholder images - using placeholder service for demo
  const teamMembers = [
    {
      name: 'Dan Wanyoike',
      position: 'Director',
      image: Dan,
      icon: <Users className="w-6 h-6" />,
      description: 'Leading adventures across East Africa'
    },
    {
      name: 'Ann Wainana',
      position: 'Director',
      image: Ann,
      icon: <Users className="w-6 h-6" />,
      description: 'Crafting unforgettable safari experiences'
    },
    {
      name: 'Mary Njoki',
      position: 'Project Manager',
      image: makiwa,
      icon: <Calendar className="w-6 h-6" />,
      description: 'Orchestrating seamless travel experiences'
    },
    {
      name: 'Moses Njoroge',
      position: 'Tour Guide',
      image: moses,
      icon: <Compass className="w-6 h-6" />,
      description: 'Your gateway to wildlife wonders'
    },
    {
      name: 'Joseph Chege',
      position: 'Spanish Guide',
      image: translator,
      icon: <Globe className="w-6 h-6" />,
      description: 'Bridging cultures through adventure'
    },
    {
      name: 'Alex Irungu',
      position: 'IT Systems Developer',
      image: alex,
      icon: <Code className="w-6 h-6" />,
      description: 'Powering digital safari experiences'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
              Safari Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our passionate team brings decades of combined experience in creating extraordinary safari adventures across East Africa's most spectacular landscapes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Main Team Photo (Wider) */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img 
                  src={t}
                  alt="Danil Scenic Tours Team" 
                  className="w-full h-[500px] lg:h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Team Photo Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Safari Squad</h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      United in our mission to create unforgettable experiences that connect our clientele to the stunning landscapes, magnificent wildlife, and rich cultures across Kenya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Team Members Grid */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-square rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 bg-white"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Background Image */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/30 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-20">
                    {/* Icon badge */}
                    {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {member.icon}
                      </div>
                    </div> */}

                    {/* Member Info */}
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-amber-300 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1.5 rounded-lg mb-3 shadow-md">
                        <p className="text-white font-semibold text-xs">
                          {member.position}
                        </p>
                      </div>
                      {/* <p className="text-gray-200 text-xs leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {member.description}
                      </p> */}
                    </div>
                  </div>

                  {/* Decorative glow effect */}
                  <div className="absolute top-3 left-3 w-16 h-16 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Border highlight on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/50 transition-colors duration-500"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamData;