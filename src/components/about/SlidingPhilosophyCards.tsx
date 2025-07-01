"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Philosophy cards content - matching your design
const philosophyCards = [
  {
    id: 1,
    title: "Gradient",
    content: "Transisi warna yang mulus melambangkan fleksabilitas, adaptabilitas, dan beradaptasi dengan perubahan",
  },
  {
    id: 2,
    title: "Gerigi (gear)",
    content: "Melambangkan sinergi dalam kebersamaan, kolaborasi dalam mencapai tujuan",
  },
  {
    id: 3,
    title: "Compass",
    content: "Menggambarkan kami merupakan sang pemandu arah di kondisi manapun.",
  },
  {
    id: 4,
    title: "Jarum",
    content: "Melambangkan kami memiliki kemampuan untuk menembus inovasi dan gigih.",
  }
];

export default function SlidingPhilosophyCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === philosophyCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? philosophyCards.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setTranslateX(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (translateX > 100) {
      prevSlide();
    } else if (translateX < -100) {
      nextSlide();
    }
    
    setTranslateX(0);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setTranslateX(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (translateX > 100) {
      prevSlide();
    } else if (translateX < -100) {
      nextSlide();
    }
    
    setTranslateX(0);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {philosophyCards.map((card, index) => (
          <div
            key={card.id}
            className={`cursor-pointer transition-all duration-500 transform ${
              index === currentIndex 
                ? 'scale-105 opacity-100 z-10' 
                : 'scale-95 opacity-70 hover:opacity-90 hover:scale-100'
            }`}
            onClick={() => goToSlide(index)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(${index === currentIndex ? translateX : 0}px) scale(${
                index === currentIndex ? 1.05 : 0.95
              })`,
            }}
          >
            {/* Card */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              {/* Background Image with Blur */}
              <Image
                src="/images/card.png"
                alt="Card Background"
                fill
                className="object-cover"
              />
              
              {/* Blur Overlay */}
              <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#140c2c]/90 via-[#3A1D95]/70 to-[#301f66]/80" />
              
              {/* Content */}
              <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center text-white">
                <h3 className="text-2xl font-nexa font-bold mb-4 text-white drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-200 drop-shadow-sm">
                  {card.content}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-400/30 blur-xl" />
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 blur-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 group z-20"
      >
        <FiChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 group z-20"
      >
        <FiChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {philosophyCards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
