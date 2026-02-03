import React from "react";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, Clock, Award, Users } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255,255,255,0.1) 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="relative py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-100 text-sm font-medium mb-6 backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                Award-Winning Safari Experiences
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Get in <span className="text-orange-200">Touch</span>
              </h1>
              <p className="text-orange-100 text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                Let's start planning your perfect safari adventure together. Every journey begins with a conversation.
              </p>
              <div className="mt-10 flex justify-center">
                <div className="flex items-center space-x-8 text-orange-200">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Trusted by Adventurers</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow -mt-20 relative z-30">
        <div className="container mx-auto px-4 pb-20">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="lg:flex min-h-[600px]">
              {/* Left side: Contact Information */}
              <div className="relative lg:w-2/5 xl:w-96">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-700 via-orange-800 to-orange-900"></div>
                <div className="absolute inset-0">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                <div className="relative p-8 lg:p-12 text-white h-full flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3">Contact Details</h2>
                    <p className="text-orange-200/80 text-lg">Ready to make your safari dreams come true?</p>
                  </div>
                  
                  <div className="space-y-8 flex-grow">
                    <div className="group">
                      <div className="flex items-start space-x-4 p-4 rounded-2xl bg-orange-600/20 backdrop-blur-sm border border-orange-500/20 hover:bg-orange-600/30 transition-all duration-300">
                        <div className="p-2 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                          <MapPin className="w-6 h-6 text-orange-200" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-orange-200 mb-1">Our Location</h3>
                          <p className="text-white/90 leading-relaxed">P.O Box 49377-00100<br />Nairobi, Kenya</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-start space-x-4 p-4 rounded-2xl bg-orange-600/20 backdrop-blur-sm border border-orange-500/20 hover:bg-orange-600/30 transition-all duration-300">
                        <div className="p-2 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                          <Phone className="w-6 h-6 text-orange-200" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-orange-200 mb-1">Call Us</h3>
                          <div className="space-y-1">
                            <p className="text-white/90 hover:text-white transition-colors cursor-pointer">+254 723 453576</p>
                            <p className="text-white/90 hover:text-white transition-colors cursor-pointer">+254 722 919249</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-start space-x-4 p-4 rounded-2xl bg-orange-600/20 backdrop-blur-sm border border-orange-500/20 hover:bg-orange-600/30 transition-all duration-300">
                        <div className="p-2 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                          <Mail className="w-6 h-6 text-orange-200" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-orange-200 mb-1">Email Us</h3>
                          <div className="space-y-1">
                            <p className="text-white/90 hover:text-white transition-colors cursor-pointer break-all">danilscenic@gmail.com</p>
                            <p className="text-white/90 hover:text-white transition-colors cursor-pointer break-all">safari@danilscenictours.co.ke</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-orange-600/30">
                    <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61550528048010", label: "Facebook" },
                        { icon: FaInstagram, href: "https://www.instagram.com/danil.scenic/", label: "Instagram" },
                        { icon: FaTwitter, href: "https://twitter.com/@DanilScenic", label: "Twitter" },
                        { icon: FaTiktok, href: "https://www.tiktok.com/@danilscenic", label: "TikTok" },
                        { icon: FaWhatsapp, href: "https://wa.me/254722919249", label: "WhatsApp" }
                      ].map(({ icon: Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/social p-3 bg-orange-600/20 rounded-xl hover:bg-orange-600/40 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-orange-500/20"
                          aria-label={label}
                        >
                          <Icon className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-200" />
                        </a>
                      ))}
                    </div>
                    <p className="text-orange-200/60 text-sm mt-4">Follow us for safari tips and amazing wildlife photography!</p>
                  </div>
                </div>
              </div>
              
              {/* Right side: Contact Form */}
              <div className="lg:flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-orange-50/30"></div>
                <div className="relative p-8 lg:p-12">
                  <div className="max-w-2xl">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">We respond to all inquiries within 2-4 hours during business hours</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trusted Service</h3>
                <p className="text-gray-600 text-sm">Over 1000 satisfied customers and 5-star reviews</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Local guides with 10+ years of safari experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;