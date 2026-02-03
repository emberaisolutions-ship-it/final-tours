import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import staticLogo from './shiftedfrommain/Explore scenic wonders with us....png';

const Navbar = () => {
    const history = useHistory();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    
    const isHomePage = location.pathname === '/';
    
    const isActive = (path) => {
        if (path === '/') return location.pathname === path;
        return location.pathname.startsWith(path);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenu(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenu]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Safaris", path: "/tours" },
        { name: "Gallery", path: "/gallery" },
        { name: "Adventure Map", path: "/maps" },
        { name: "Contact", path: "/contact" },
    ];

    const handleNavigation = (path) => {
        history.push(path);
        setMobileMenu(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setMobileMenu(!mobileMenu);
        }
    };

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ease-out ${
                isScrolled 
                    ? 'backdrop-blur-3xl bg-gradient-to-r from-orange-900/85 via-brown-800/80 to-amber-900/85 shadow-2xl border-b border-orange-300/30' 
                    : 'backdrop-blur-xl bg-gradient-to-b from-black/60 via-brown-900/40 to-transparent'
            }`}
            style={{
                backdropFilter: isScrolled ? 'blur(32px) saturate(200%)' : 'blur(16px) saturate(140%)',
                WebkitBackdropFilter: isScrolled ? 'blur(32px) saturate(200%)' : 'blur(16px) saturate(140%)',
            }}
            aria-label="Safari Adventure Navigation"
        >
            {/* Enhanced Safari-themed Background Pattern */}
            <div className={`absolute inset-0 transition-all duration-700 ${
                isScrolled 
                    ? 'bg-gradient-to-r from-orange-800/60 via-amber-700/50 to-brown-800/60' 
                    : 'bg-gradient-to-b from-orange-900/30 via-brown-800/20 to-transparent'
            }`} />

            {/* Subtle safari pattern overlay */}
            <div className="absolute inset-0 opacity-[0.08]">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 animate-pulse" />
            </div>

            {/* Mobile Menu Backdrop */}
            {mobileMenu && (
                <div 
                    className="fixed inset-0 bg-gradient-to-b from-brown-900/90 to-black/80 z-[9997] md:hidden backdrop-blur-lg"
                    onClick={() => setMobileMenu(false)}
                />
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Enhanced Safari Logo Section */}
                    <Link 
                        to="/" 
                        className="flex-shrink-0 flex items-center group transition-all duration-500"
                        aria-label="Safari Adventures - Home"
                    >
                        <div className="relative">
                            {/* Safari-themed glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-amber-400/25 to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl animate-pulse" />
                            
                            {/* Enhanced logo container with safari styling */}
                            <div className="relative p-3 rounded-3xl bg-gradient-to-r from-orange-100/15 to-amber-100/10 backdrop-blur-sm border border-orange-300/30 group-hover:bg-gradient-to-r group-hover:from-orange-100/25 group-hover:to-amber-100/20 group-hover:border-orange-300/50 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                                <img
                                    className="h-10 sm:h-14 w-auto object-contain transition-all duration-700 group-hover:scale-110 filter brightness-110 contrast-110 drop-shadow-lg"
                                    src={staticLogo}
                                    alt="Safari Adventures"
                                />
                            </div>
                            
                            {/* Safari-themed accent ring */}
                            <div className="absolute inset-0 rounded-3xl ring-2 ring-orange-400/20 group-hover:ring-orange-300/60 transition-all duration-500" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <NavLink 
                                key={item.path}
                                to={item.path} 
                                isActive={isActive} 
                                isHomePage={isHomePage} 
                                isScrolled={isScrolled}
                                style={{ animationDelay: `${index * 75}ms` }}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Enhanced CTA and Mobile Menu Section */}
                    <div className="flex items-center space-x-3">
                        {/* Desktop Safari CTA Button */}
                        <div className="hidden sm:flex items-center space-x-3">
                            <Link
                                to="/calendar"
                                className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 focus:outline-none focus:ring-4 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-transparent border-2 border-orange-400/30 hover:border-orange-300/60"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-yellow-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative flex items-center space-x-2">
                                    <HiLocationMarker className="w-5 h-5 text-yellow-200 group-hover:animate-pulse" />
                                    <span className="hidden md:inline text-sm font-bold tracking-wide">Book Safari</span>
                                    <span className="md:hidden text-sm font-bold">Book</span>
                                </div>
                                {/* Enhanced shimmer effect */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700" />
                            </Link>

                            {/* Safari Contact Button */}
                            <button className="group relative p-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 focus:outline-none focus:ring-4 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-transparent border-2 border-green-400/30 hover:border-green-300/60">
                                <HiPhone className="w-5 h-5 group-hover:animate-bounce" />
                                <span className="sr-only">Call for safari booking</span>
                                {/* Subtle pulse ring */}
                                <div className="absolute -inset-1 bg-green-400/30 rounded-2xl opacity-0 group-hover:opacity-100 animate-ping" />
                            </button>
                        </div>

                        {/* Mobile Safari CTA */}
                        <Link
                            to="/calendar"
                            className="sm:hidden group p-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus:ring-3 focus:ring-orange-400/50 border border-orange-400/30"
                        >
                            <HiLocationMarker className="w-5 h-5 text-yellow-200" />
                        </Link>

                        {/* Enhanced Safari Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button 
                                onClick={() => setMobileMenu(!mobileMenu)}
                                onKeyDown={handleKeyDown}
                                className={`relative inline-flex items-center justify-center p-3 rounded-2xl transition-all duration-500 w-12 h-12 text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-amber-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-orange-500/20 focus:outline-none focus:ring-3 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 border-2 border-orange-400/30 hover:border-orange-300/60 bg-gradient-to-r from-orange-600/20 to-amber-600/20`}
                                aria-expanded={mobileMenu}
                                aria-controls="mobile-menu"
                                aria-label="Toggle safari menu"
                            >
                                <span className="sr-only">
                                    {mobileMenu ? 'Close safari menu' : 'Open safari menu'}
                                </span>
                                <div className="relative w-6 h-6">
                                    <HiMenu 
                                        className={`absolute inset-0 w-6 h-6 transition-all duration-500 text-orange-200 ${
                                            mobileMenu ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
                                        }`} 
                                    />
                                    <HiX 
                                        className={`absolute inset-0 w-6 h-6 transition-all duration-500 text-orange-200 ${
                                            mobileMenu ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
                                        }`} 
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Safari Mobile Menu */}
            <div 
                id="mobile-menu"
                className={`lg:hidden fixed left-0 right-0 transform transition-all duration-700 ease-out ${
                    mobileMenu 
                        ? 'translate-y-0 opacity-100 pointer-events-auto' 
                        : '-translate-y-full opacity-0 pointer-events-none'
                } z-[9998]`}
                style={{
                    top: isScrolled ? '5rem' : '4rem',
                    height: isScrolled ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)',
                }}
            >
                <div className="backdrop-blur-3xl bg-gradient-to-b from-brown-900/95 via-orange-900/90 to-black/95 shadow-2xl border-t border-orange-300/30 h-full overflow-y-auto">
                    {/* Safari background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-800/60 via-brown-900/80 to-black/90" />
                    
                    {/* Safari pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400 animate-pulse" />
                    </div>
                    
                    <div className="relative z-10 px-6 py-8 space-y-3">
                        {/* Enhanced Mobile Safari CTA Section */}
                        <div className="mb-8 pb-6 border-b border-orange-400/20">
                            <div className="flex space-x-4">
                                <Link
                                    to="/calendar"
                                    onClick={() => setMobileMenu(false)}
                                    className="flex-1 group relative overflow-hidden px-6 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white font-bold rounded-3xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 text-center border-2 border-orange-400/30"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-yellow-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex items-center justify-center space-x-3">
                                        <HiLocationMarker className="w-6 h-6 text-yellow-200" />
                                        <span className="text-lg font-bold tracking-wide">Book Your Safari</span>
                                    </div>
                                </Link>
                                
                                <button className="group relative p-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-3xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 border-2 border-green-400/30">
                                    <HiPhone className="w-6 h-6 group-hover:animate-bounce" />
                                    <div className="absolute -inset-1 bg-green-400/30 rounded-3xl opacity-0 group-hover:opacity-100 animate-ping" />
                                </button>
                            </div>
                        </div>

                        {/* Enhanced Safari Navigation Links */}
                        {navItems.map((item, index) => (
                            <MobileNavLink
                                key={item.path}
                                to={item.path}
                                isActive={isActive}
                                onClick={() => handleNavigation(item.path)}
                                style={{ 
                                    transitionDelay: mobileMenu ? `${index * 75}ms` : '0ms'
                                }}
                                isMenuOpen={mobileMenu}
                            >
                                {item.name}
                            </MobileNavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Enhanced Safari Desktop Nav Link Component
const NavLink = ({ to, children, isActive, isHomePage, isScrolled, style }) => {
    return (
        <Link 
            to={to} 
            className={`relative px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-500 group overflow-hidden border-2 ${
                isActive(to)
                ? 'text-white font-bold bg-gradient-to-r from-orange-500/40 to-amber-500/30 backdrop-blur-sm shadow-xl border-orange-400/60 shadow-orange-500/20'
                : 'text-orange-100 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-amber-500/15 backdrop-blur-sm hover:shadow-lg border-transparent hover:border-orange-400/40 hover:shadow-orange-500/10'
            }`}
            style={style}
        >
            {/* Enhanced safari background hover effect */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                isActive(to) 
                    ? 'bg-gradient-to-r from-orange-400/20 via-amber-400/15 to-yellow-400/10' 
                    : 'bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-yellow-500/5'
            }`} />
            
            {/* Safari-themed active indicator */}
            {isActive(to) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-full shadow-lg shadow-orange-400/50" />
            )}
            
            <span className="relative z-10 tracking-wide">{children}</span>
        </Link>
    );
};

// Enhanced Safari Mobile Nav Link Component
const MobileNavLink = ({ to, children, isActive, onClick, style, isMenuOpen }) => {
    return (
        <div
            onClick={onClick}
            className={`group block px-6 py-5 rounded-3xl text-white hover:text-white cursor-pointer transition-all duration-500 transform backdrop-blur-sm border-2 border-orange-400/20 hover:border-orange-300/50 overflow-hidden shadow-lg hover:shadow-xl ${
                isActive(to) 
                    ? 'bg-gradient-to-r from-orange-500/40 to-amber-500/30 border-orange-400/60 font-bold shadow-xl shadow-orange-500/20' 
                    : 'hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-amber-500/15 hover:shadow-orange-500/10 hover:translate-x-3'
            } ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
            }`}
            style={style}
        >
            {/* Safari background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-amber-400/8 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative flex items-center space-x-4">
                {/* Enhanced safari-themed indicator */}
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    isActive(to) 
                        ? 'bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg shadow-orange-400/50' 
                        : 'bg-gradient-to-r from-orange-300/60 to-amber-300/40 group-hover:from-orange-400/80 group-hover:to-amber-400/60 group-hover:scale-125 group-hover:shadow-md group-hover:shadow-orange-400/40'
                }`} />
                <span className="text-lg font-semibold tracking-wide">{children}</span>
            </div>
        </div>
    );
};

export default Navbar;