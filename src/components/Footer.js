import React from 'react';
import { 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaTiktok, 
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import safaribooking from './top-places/safaribooking.png';
import tripcrafters from './top-places/tripcrafters.png';
import tripAdvisor from './shiftedfrommain/Tripadvisor_lockup_horizontal_secondary_registered (1).svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// Partners Component (Updated)
const Partners = () => {
  const partners = [
    {
      name: "Safari Booking",
      logo: safaribooking,
      bgColor: "bg-orange-600",
      url: "https://www.safaribookings.com/p6036",
      textColor: "text-white"
    },
    {
      name: "Trip Crafters", 
      logo: tripcrafters,
      bgColor: "bg-orange-600",
      url: "https://www.tripcrafters.com/travel-agent-details/danil-scenic-tours-limited-72564",
      textColor: "text-white"
    },
    {
      name: "TripAdvisor",
      logo: tripAdvisor,
      bgColor: "bg-white",
      url: "https://www.tripadvisor.in/Attraction_Review-g4374513-d27987228-Reviews-Danil_Scenic_Tours-Olderkesi_Private_Reserve_Maasai_Mara_National_Reserve_Rift_.html",
      textColor: "text-gray-800"
    }
  ];

  return (
    <div className="text-center space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold tracking-wider text-amber-300 uppercase">
          Trusted Partners
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
      </div>

      {/* Partner Logos */}
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${partner.bgColor} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/20 hover:scale-105 hover:-translate-y-1 transform`}
          >
            <img 
              src={partner.logo}
              alt={partner.name}
              className="h-8 w-auto object-contain"
            />
          </a>
        ))}
      </div>

      {/* Partner Links */}
      <div className="flex justify-center items-center gap-3 text-xs flex-wrap max-w-2xl mx-auto">
        {partners.map((partner, index) => (
          <React.Fragment key={index}>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-100 font-medium transition-colors duration-200 hover:underline transform hover:scale-105"
            >
              {partner.name.toUpperCase()}
            </a>
            {index < partners.length - 1 && (
              <span className="text-amber-400/60">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Main Footer Component
const Footer = () => {
  const socialLinks = [
    { Icon: FaTwitter, href: "https://twitter.com/@DanilScenic", label: "Twitter" },
    { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61550528048010", label: "Facebook" },
    { Icon: FaInstagram, href: "https://www.instagram.com/danil.scenic/", label: "Instagram" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/danil-scenic-743945286/", label: "LinkedIn" },
    { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCutpUrWcoi58yHOJb0bTXQg", label: "YouTube" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@danilscenic", label: "TikTok" },
    { Icon: FaWhatsapp, href: "https://wa.me/254722919249", label: "WhatsApp" },
  ];

  const footerLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
    { name: "Terms", path: "/terms" },
    { name: "Privacy", path: "/privacy" },
  ];

  const contactInfo = [
    { Icon: FaMapMarkerAlt, text: "Nairobi, Kenya" },
    { Icon: FaPhone, text: "+254 722 919 249" },
    { Icon: FaEnvelope, text: "danilscenic@gmail.com" },
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 text-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info & Social */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-2">
                  Danil Scenic Tours
                </h2>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  Experience the magic of Kenya through unforgettable safari adventures and breathtaking landscapes.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map(({ Icon, text }, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-amber-100/80">
                    <Icon className="text-amber-400 flex-shrink-0" size={14} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-300">Follow Our Journey</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ Icon, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-800/30 hover:bg-amber-700/40 p-3 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 group hover:scale-110 hover:rotate-3 transform"
                      aria-label={label}
                    >
                      <Icon size={18} className="text-amber-300 group-hover:text-amber-100 transition-colors duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <Partners />
            </div>

            {/* Quick Links & CTA */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-300">Quick Links</h3>
                <nav className="space-y-2">
                  {footerLinks.map(({ name, path }) => (
                    <Link
                      key={name}
                      to={path}
                      className="block text-sm text-amber-100/80 hover:text-amber-300 transition-all duration-200 hover:translate-x-1 transform hover:pl-2"
                    >
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-300">Customer Stories</h3>
                <Link to="/reviews">
                  <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-6 py-3 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-500/30 hover:scale-105 transform">
                    View Testimonials
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800/30 bg-amber-950/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs text-amber-200/70 text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} Danil Scenic Tours. All rights reserved.</p>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-amber-200/70">
                <span>Crafted with ❤️ by</span>
                <span className="text-amber-300 font-medium">Alex Irungu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;