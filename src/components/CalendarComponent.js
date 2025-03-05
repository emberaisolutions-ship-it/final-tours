import React from "react";
import "react-calendar/dist/Calendar.css";
import { InlineWidget } from "react-calendly";
import { Calendar, Clock, CheckCircle, Users, MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

const CalendarComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-800 py-24">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center mb-4">
            Book Your Safari Adventure
          </h1>
          <p className="text-orange-100 text-xl text-center max-w-2xl mx-auto">
            Schedule a consultation with our expert team to plan your perfect journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow -mt-16 relative z-30">
        <div className="container mx-auto px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              {/* Left side: Calendly Widget */}
              <div className="lg:w-2/3 p-8 lg:p-12 bg-white">
                <div className="mb-8 flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Select Your Preferred Time
                  </h2>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md bg-white">
                  <InlineWidget
                    url="https://calendly.com/danilscenic"
                    styles={{ height: '650px' }}
                  />
                </div>
              </div>

              {/* Right side: Info */}
              <div className="lg:w-1/3 p-8 lg:p-12 bg-gradient-to-b from-orange-700 to-orange-900 text-white">
                <h2 className="text-2xl font-bold mb-8">Booking Information</h2>

                {/* Feature Cards */}
                <div className="space-y-6 mb-12">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="flex items-center space-x-4 mb-4">
                      <Clock className="w-6 h-6 text-orange-200" />
                      <h3 className="text-lg font-semibold">30 Minutes</h3>
                    </div>
                    <p className="text-orange-100">
                      Consultation session to discuss your travel preferences and plan your safari
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="flex items-center space-x-4 mb-4">
                      <CheckCircle className="w-6 h-6 text-orange-200" />
                      <h3 className="text-lg font-semibold">What to Expect</h3>
                    </div>
                    <ul className="space-y-3 text-orange-100">
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-200">•</span>
                        <span>Personalized safari planning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-200">•</span>
                        <span>Expert travel advice</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-200">•</span>
                        <span>Custom itinerary creation</span>
                      </li>
                    </ul>
                  </div>
                </div>

               {/* Contact Info */}
<div className="space-y-6">
  <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
  <div className="space-y-4">
    <div className="flex items-center space-x-3">
      <MapPin className="w-5 h-5 text-orange-200" />
      <span className="text-orange-100">Nairobi, Kenya</span>
    </div>
    <div className="flex items-center space-x-3">
      <Mail className="w-5 h-5 text-orange-200" />
      <span className="text-orange-100">danilscenic@gmail.com</span>
    </div>
    <div className="flex items-center space-x-3">
      <Users className="w-5 h-5 text-orange-200" />
      <span className="text-orange-100">Available 24/7</span>
    </div>
    <div className="flex items-center space-x-3">
      <FaWhatsapp className="w-5 h-5 text-orange-200" />
      <span className="text-orange-100">
        <a href="https://wa.me/254722919249" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          WhatsApp: 254 722 919249
        </a>
      </span>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold text-lg">Danil Scenic Tours</p>
              <p className="text-orange-200 text-sm mt-1">
              Explore Scenic Wonders With Us
              </p>
            </div>
            <p className="text-orange-200 text-sm">
              © {new Date().getFullYear()} Danil Scenic Tours. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CalendarComponent;