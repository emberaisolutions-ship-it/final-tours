import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Faq from './components/FAQ';
import Service from './components/Service';
import Gallery from './components/Gallery.js';
import CalendarComponent from './components/CalendarComponent';
import PrivacyPolicy from './components/PrivacyPolicy';
import Places from './components/Places';
import Culture from './components/Culture';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ServiceSection from './components/ServiceSection';
import Pricing from './components/Pricing';
import SearchBox from './components/SearchBox.js';
import Maps from './components/Maps.js';
import TermsAndConditions from './components/Terms&Conditions.js';
import AccessibilityTools from './components/AccessibilityTools.js';
import ReviewForm from './components/ReviewForm.js';
import MaasaiMara from './components/MaasaiMara.js';
import ExtensiveTour from './components/ExtensiveTour.js';
import AdventureAmboseli from './components/AdventureAmboseli.js';
import QuoteForm from './components/QuoteForm.js';
import BudgetTour from './components/BudgetTour.js';
import Bogoria from './components/Bogoria.js';
import LavishSafari from './components/LavishSafari.js';
import SevenDay from './components/SevenDay.js';
import Reviews from './components/Reviews.js';
import Enviro from './components/Enviro.js';
import ReviewQRCode from './components/ReviewQRCode.js';
import TourRates from './components/TourRates.js';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollToTop.js';

library.add(faArrowLeft, faArrowRight);


function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <HelmetProvider>
      <div className='App'>
        <ScrollToTop />
        <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/maps" element={<Maps selectPosition={selectPosition} setSelectPosition={setSelectPosition} />} />
      <Route path="/search" element={<SearchBox setSelectPosition={setSelectPosition} />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/calendar" element={<CalendarComponent />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/places" element={<Places />} />
      <Route path="/nature" element={<Enviro />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/section" element={<ServiceSection />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/review-form" element={<ReviewForm />} />
      <Route path="/maasai-mara" element={<MaasaiMara />} />
      <Route path="/adventure-amboseli" element={<AdventureAmboseli />} />
      <Route path="/extensive-tour" element={<ExtensiveTour />} />
      <Route path="/quote-form" element={<QuoteForm />} />
      <Route path="/budget-tour" element={<BudgetTour />} />
      <Route path="/bogoria" element={<Bogoria />} />
      <Route path="/lavish" element={<LavishSafari />} />
      <Route path="/seven" element={<SevenDay />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/qr" element={<ReviewQRCode />} />
      <Route path="/tours" element={<TourRates />} />
    </Routes>
    <AccessibilityTools />
    <Footer />
    </div>
   
    </HelmetProvider>
  );
}
export default App;
