import React, { useState, useEffect } from "react";
import adv from './shiftedfrommain/adv.jpg';
import ele from './shiftedfrommain/ele.jpg';
import bal from './shiftedfrommain/newbaloon.jpg';
import { ArrowLeft, ArrowRight, Eye, Play } from "lucide-react";
const slides = [
  {
    background: adv,
    title: "Explore Scenic Wonders With Us",
    videos: [
      {
        link: "https://www.youtube.com/watch?v=lT3mzw4qe7E",
        text: "Watch Full Journey",
        icon: <Play className="w-4 h-4" />
      },
      {
        link: "https://youtube.com/shorts/WcO8js2MJ9k?feature=share",
        text: "Quick Preview",
        icon: <Eye className="w-4 h-4" />
      }
    ]
  },
  {
    background: ele,
    title: "Discover the Colorful World",
    videos: [
      {
        link: "https://www.youtube.com/watch?v=lT3mzw4qe7E",
        text: "Watch Full Journey",
        icon: <Play className="w-4 h-4" />
      },
      {
        link: "https://youtube.com/shorts/WcO8js2MJ9k?feature=share",
        text: "Quick Preview",
        icon: <Eye className="w-4 h-4" />
      }
    ]
  },
  {
    background: bal,
    title: "Life-long Memories Just a Click Away",
    videos: [
      {
        link: "https://www.youtube.com/watch?v=lT3mzw4qe7E",
        text: "Watch Full Journey",
        icon: <Play className="w-4 h-4" />
      },
      {
        link: "https://youtube.com/shorts/WcO8js2MJ9k?feature=share",
        text: "Quick Preview",
        icon: <Eye className="w-4 h-4" />
      }
    ]
  },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const redirectToVideo = (videoLink) => {
    window.open(videoLink, '_blank');
  };

  useEffect(() => {
    // Preload images
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.background;
    });

    const interval = setInterval(goToNextSlide, 10000); // Auto transition every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
            currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: `url(${slide.background})` }}
        >
          {/* Enhanced gradient overlay for better navbar blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
          
          {/* Content centered on screen with proper top padding for navbar */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pt-16 sm:pt-20">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-wider drop-shadow-2xl leading-tight animate-fade-in-up">
                {slide.title}
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl mb-12 opacity-90 font-light tracking-wide drop-shadow-lg max-w-2xl mx-auto animate-fade-in-up-delay">
                Embark on unforgettable adventures that will create memories to last a lifetime
              </p>
              
              {/* Dual Video Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up-delay-2">
                {slide.videos.map((video, videoIndex) => (
                  <button
                    key={videoIndex}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg sm:text-xl hover:shadow-orange-500/25 focus:outline-none focus:ring-4 focus:ring-orange-500/50 min-w-[200px] group"
                    onClick={() => redirectToVideo(video.link)}
                  >
                    <div className="flex items-center justify-center gap-3">
                      {video.icon}
                      <span>{video.text}</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation arrows */}
      <button
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      
      <button
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Enhanced Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              currentSlide === index 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.3s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;