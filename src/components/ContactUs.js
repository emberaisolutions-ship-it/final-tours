import React from "react";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-800 py-24">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-orange-100 text-xl text-center max-w-2xl mx-auto">
            Let's start planning your perfect safari adventure together
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow -mt-16 relative z-30">
        <div className="container mx-auto px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              {/* Left side: Contact Information */}
              <div className="p-8 lg:p-12 bg-gradient-to-b from-orange-700 to-orange-900 text-white lg:w-96">
                <h2 className="text-2xl font-bold mb-8">Contact Details</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-orange-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-orange-200">Address</h3>
                      <p className="mt-1 text-white/90">P.O Box 49377-00100, Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-orange-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-orange-200">Phone</h3>
                      <p className="mt-1 text-white/90">+254 723 453576</p>
                      {/* <p className="text-white/90">+254 777 989249</p> */}
                      <p className="text-white/90">+254 722 919249</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-orange-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-orange-200">Email</h3>
                      <p className="mt-1 text-white/90">danilscenic@gmail.com</p>
                      <p className="text-white/90">safari@danilscenictours.co.ke</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-12 border-t border-orange-600">
  <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
  <div className="flex space-x-4">
  <a 
    href="https://www.facebook.com/profile.php?id=61550528048010" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-orange-600/20 rounded-full hover:bg-orange-600/30 transition-colors"
  >
    <FaFacebook className="w-5 h-5" />
  </a>
  <a 
    href="https://www.instagram.com/danil.scenic/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-orange-600/20 rounded-full hover:bg-orange-600/30 transition-colors"
  >
    <FaInstagram className="w-5 h-5" />
  </a>
  <a 
    href="https://twitter.com/@DanilScenic" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-orange-600/20 rounded-full hover:bg-orange-600/30 transition-colors"
  >
    <FaTwitter className="w-5 h-5" />
  </a>
  <a 
    href="https://www.tiktok.com/@danilscenic" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-orange-600/20 rounded-full hover:bg-orange-600/30 transition-colors"
  >
    <FaTiktok className="w-5 h-5" />
  </a>
  <a 
    href="https://wa.me/254722919249" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-orange-600/20 rounded-full hover:bg-orange-600/30 transition-colors"
  >
    <FaWhatsapp className="w-5 h-5" />
  </a>
</div>
</div>
              </div>
              
              {/* Right side: Contact Form */}
              <div className="p-8 lg:p-12 lg:flex-1">
                <ContactForm />
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

export default ContactUs;