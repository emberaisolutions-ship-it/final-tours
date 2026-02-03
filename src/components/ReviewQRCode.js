import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Card, CardContent } from './ui/card';
import { FaStar, FaFacebook, FaTwitter, FaEnvelope, FaLink, FaTimes, FaCommentDots } from 'react-icons/fa';

const ReviewQRCode = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSciL9AoU30wwOjxtskIBUw1ekNuHPtISXQVY6J63F2bj4syqQ/viewform?usp=sharing";
  
  // Function to copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(formUrl).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  // Social share URLs
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(formUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(formUrl)}&text=${encodeURIComponent('Share your experience with Danil Scenic Tours!')}`;
  const emailShareUrl = `mailto:?subject=${encodeURIComponent('Share your experience with Danil Scenic Tours')}&body=${encodeURIComponent(`I thought you might want to share your experience with Danil Scenic Tours: ${formUrl}`)}`;

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Open review form"
        >
          <FaCommentDots className="h-6 w-6" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Share Your Experience
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
          </div>
        </button>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-br from-amber-700 to-amber-900 p-6 text-white relative">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-amber-800 rounded-full transition-colors"
            aria-label="Close drawer"
          >
            <FaTimes className="h-5 w-5" />
          </button>
          <h3 className="text-2xl font-bold mb-2">Write a Review</h3>
          <p className="text-amber-100">Help future adventurers by sharing your safari experience!</p>
        </div>

        {/* Content */}
        <div className="p-6 bg-gradient-to-b from-amber-50 to-white h-full overflow-y-auto">
          <div className="flex flex-col items-center">
            {/* Clickable QR Code */}
            <a 
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 relative block group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-white p-3 rounded-lg shadow-md transition-transform transform group-hover:scale-105">
                <QRCodeSVG
                  value={formUrl}
                  size={180}
                  bgColor={"#ffffff"}
                  fgColor={"#b45309"} // amber-700
                  level={"H"}
                  includeMargin={true}
                />
              </div>
            </a>
            
            <p className="text-gray-600 text-center mb-4 text-sm">
              Scan or click this code to share your Danil Scenic Tours experience
            </p>
            
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-amber-500 h-5 w-5" />
              ))}
            </div>

            {/* Share links */}
            <div className="w-full">
              <p className="text-gray-700 font-medium mb-3 text-center">Share via:</p>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={facebookShareUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook className="h-4 w-4 mr-2" />
                  Facebook
                </a>
                <a 
                  href={twitterShareUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition-colors text-sm"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
                <a 
                  href={emailShareUrl}
                  className="flex items-center justify-center p-3 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors text-sm"
                  aria-label="Share via Email"
                >
                  <FaEnvelope className="h-4 w-4 mr-2" />
                  Email
                </a>
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center justify-center p-3 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors relative text-sm"
                  aria-label="Copy link"
                >
                  <FaLink className="h-4 w-4 mr-2" />
                  Copy Link
                  {copySuccess && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white py-1 px-2 rounded">
                      {copySuccess}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-4 bg-amber-100 rounded-lg border-2 border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Why Review Matters</h4>
              <p className="text-amber-700 text-sm">
                Your honest feedback helps us improve our services and helps other travelers choose the perfect safari experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewQRCode;