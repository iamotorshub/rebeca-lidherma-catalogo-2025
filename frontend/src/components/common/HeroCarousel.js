import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroBanners } from '../../data/mockProducts';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden beauty-card">
      {/* Slides */}
      <div className="relative w-full h-full">
        {heroBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0' 
                : index < currentSlide 
                ? 'opacity-0 transform -translate-x-full'
                : 'opacity-0 transform translate-x-full'
            }`}
          >
            <img
              src={banner.url}
              alt={banner.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRkFEQUREIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8Y2lyY2xlIGN4PSI2MDAiIGN5PSIyNTAiIHI9IjEwMCIgZmlsbD0iI0Y0QzJDMiIvPgo8dGV4dCB4PSI2MDAiIHk9IjI2MCIgZm9udC1mYW1pbHk9IlBsYXlmYWlyIERpc3BsYXkiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiM0QTRBNEEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxpZGhlcm1hPC90ZXh0Pgo8dGV4dCB4PSI2MDAiIHk9IjMwMCIgZm9udC1mYW1pbHk9IkxhdG8iIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2QjZCNkIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJlYmVjYSBCZWF1dHkgU3RvcmU8L3RleHQ+Cjwvc3ZnPgo=';
              }}
            />
            
            {/* Overlay con gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            
            {/* Content overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 beauty-card">
                <h3 className="font-playfair font-bold text-lg md:text-2xl text-gray-800 mb-2">
                  {banner.title}
                </h3>
                <p className="font-lato text-sm md:text-base text-gray-600">
                  {banner.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-pink-600 transition-all hover:scale-110 shadow-lg"
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-pink-600 transition-all hover:scale-110 shadow-lg"
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;