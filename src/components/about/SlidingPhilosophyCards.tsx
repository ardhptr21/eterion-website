"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Philosophy cards content - matching your design
const philosophyCards = [
  {
    id: 1,
    title: "Huruf E",
    content: "Bentuk logo menyerupai huruf E, melambangkan nama dari angkatan kami ETERION",
  },
  {
    id: 2,
    title: "Gradient",
    content:
      "Transisi warna yang mulus melambangkan fleksabilitas, adaptabilitas, dan beradaptasi dengan perubahan",
  },
  {
    id: 3,
    title: "Gerigi (gear)",
    content: "Melambangkan sinergi dalam kebersamaan, kolaborasi dalam mencapai tujuan",
  },
  {
    id: 4,
    title: "Compass",
    content: "Menggambarkan kami merupakan sang pemandu arah di kondisi manapun.",
  },
  {
    id: 5,
    title: "Jarum",
    content: "Melambangkan kami memiliki kemampuan untuk menembus inovasi dan gigih.",
  },
];

export default function SlidingPhilosophyCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === philosophyCards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? philosophyCards.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCard = philosophyCards[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-nexa font-bold text-center mb-8 sm:mb-12">
        Philosophy
      </h2>
      
      {/* Container with Navigation Outside */}
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* Main Card Container */}
        <div className="relative bg-[#140c2c]/80 backdrop-blur-lg border-2 border-accent/50 rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/philosophy-bg-card.png"
              alt="Philosophy Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#140c2c]/85 via-[#140c2c]/60 to-[#301f66]/70"></div>
          
          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Card Content - Centered and Well Spaced */}
            <div className="text-center space-y-6 sm:space-y-8 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex flex-col justify-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nexa font-bold text-accent transition-all duration-500">
                  {currentCard.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 max-w-4xl mx-auto transition-all duration-500">
                  {currentCard.content}
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-accent/15 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-400/15 rounded-full blur-lg"></div>
        </div>

        {/* Navigation Controls - Outside the Card */}
        <div className="space-y-4 sm:space-y-6">
          {/* Dots Indicator - Centered */}
          <div className="flex justify-center">
            <div className="flex gap-2 sm:gap-3">
              {philosophyCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-accent scale-125 shadow-lg shadow-accent/50" 
                      : "bg-accent/40 hover:bg-accent/60 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons - Left and Right */}
          <div className="flex items-center justify-between max-w-md mx-auto">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-accent/20 hover:bg-accent/30 rounded-full transition-all duration-300 border border-accent/50 hover:border-accent/80 hover:scale-105"
            >
              <FiChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </button>
            
            {/* Card Counter */}
            <span className="bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 text-accent font-medium text-sm sm:text-base border border-accent/30">
              {currentIndex + 1} of {philosophyCards.length}
            </span>
            
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-accent/20 hover:bg-accent/30 rounded-full transition-all duration-300 border border-accent/50 hover:border-accent/80 hover:scale-105"
            >
              <FiChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
