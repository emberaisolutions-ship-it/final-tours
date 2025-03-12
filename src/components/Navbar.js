import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import SimpleLanguageSwitcher from "./SimpleLanguageSwitcher";
import { useTranslation } from "./TranslationContext";
// Import the static logo instead of animated GIF
import staticLogo from "./shiftedfrommain/dstfinal.png"; // Update this path to your static logo

const Navbar = () => {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translateText, language, setLanguage } = useTranslation();
  const [translations, setTranslations] = useState({
    home: "Home",
    about: "About",
    gallery: "Gallery",
    maps: "Maps",
    contact: "Contact",
  });

  // Update translations when language changes
  useEffect(() => {
    const translateNavItems = async () => {
      const translated = {
        home: await translateText("Home", language),
        about: await translateText("About", language),
        gallery: await translateText("Gallery", language),
        maps: await translateText("Maps", language),
        contact: await translateText("Contact", language),
      };
      setTranslations(translated);
    };

    if (language !== "en") {
      translateNavItems();
    } else {
      setTranslations({
        home: "Home",
        about: "About",
        gallery: "Gallery",
        maps: "Maps",
        contact: "Contact",
      });
    }
  }, [language, translateText]);

  const navItems = [
    { name: translations.home, path: "/" },
    { name: translations.about, path: "/about" },
    { name: translations.gallery, path: "/gallery" },
    { name: translations.maps, path: "/maps" },
    { name: translations.contact, path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    history.push(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-700 to-orange-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center">
            {/* Clean and professional logo styling */}
            <div className="flex items-center">
              <img
                className="h-16 w-auto object-contain drop-shadow-md"
                src={staticLogo}
                alt="Danil Scenic Tours Logo"
              />
              <span className="ml-2 text-xs text-white/80 italic hidden sm:block">
                Explore scenic wonders with us...
              </span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <HiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white hover:bg-orange-800 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="ml-6">{/* <SimpleLanguageSwitcher /> */}</div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orange-800 rounded-b-lg shadow-lg">
            {navItems.map((item) => (
              <div
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="text-white hover:bg-orange-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-150"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
