import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import adv from './shiftedfrommain/adv.jpg';
import ele from './shiftedfrommain/ele.jpg';
import bal from './shiftedfrommain/newbaloon.jpg';

const slides = [
  {
    background: adv,
    title: "Explore Scenic Wonders With Us",
    videoLink: "https://www.youtube.com/watch?v=ZJq26SI2IUc",
    linkText: "Watch Now",
  },
  {
    background: bal,
    title: "Discover the Colorful World",
    videoLink: "https://www.youtube.com/watch?v=ZJq26SI2IUc",
    linkText: "Watch Now",
  },
  {
    background: ele,
    title: "Life-long Memories Just a Click Away",
    videoLink: "https://www.youtube.com/watch?v=ZJq26SI2IUc",
    linkText: "Watch Now",
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
    <div className="banner-slider relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.background})` }}
        >
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black/30"></div>
          
          {/* Title centered */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wider">
              {slide.title}
            </h2>
            
            {/* Watch Now button directly below the title */}
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-colors transform hover:scale-105 duration-300 mt-4"
              onClick={() => redirectToVideo(slide.videoLink)}
            >
              {slide.linkText}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
        </div>
      ))}

      {/* Navigation buttons positioned at the sides */}
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
        onClick={goToPreviousSlide}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      
      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
        onClick={goToNextSlide}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default BannerSlider;