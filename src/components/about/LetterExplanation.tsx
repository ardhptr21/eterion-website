"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Letter explanations data
const letterContent = [
  {
    id: 1,
    title: "Huruf E",
    content: "Bentuk logo menyerupai huruf e yang melambangkan nama dari angkatan kami ETERION",
    letter: "E",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: 2,
    title: "Huruf T",
    content: "Bentuk yang melambangkan kekuatan dan stabilitas dalam setiap langkah perjalanan kami",
    letter: "T",
    color: "from-purple-400 to-blue-400"
  },
  {
    id: 3,
    title: "Huruf E",
    content: "Simbol energi dan semangat yang tidak pernah padam dalam setiap kegiatan ETERION",
    letter: "E",
    color: "from-cyan-400 to-green-300"
  },
  {
    id: 4,
    title: "Huruf R",
    content: "Representasi dari keandalan dan komitmen kami terhadap setiap tanggung jawab",
    letter: "R",
    color: "from-green-400 to-teal-300"
  }
];

export default function LetterExplanation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === letterContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? letterContent.length - 1 : prevIndex - 1
    );
  };

  const currentItem = letterContent[currentIndex];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Card */}
      <div className="relative">
        {/* Card Background */}
        <div className="relative min-h-[300px] rounded-3xl overflow-hidden border border-white/20">
          {/* Background Image with Blur */}
          <Image
            src="/images/card.png"
            alt="Card Background"
            fill
            className="object-cover"
          />
          
          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#140c2c]/85 via-[#3A1D95]/60 to-[#301f66]/70" />
          
          {/* Content - Text above background */}
          <div className="relative z-20 p-8 h-full flex flex-col justify-center items-center text-center text-white">
            {/* Large Letter */}
            <div className={`text-8xl font-nexa font-bold mb-6 bg-gradient-to-r ${currentItem.color} bg-clip-text text-transparent drop-shadow-lg`}>
              {currentItem.letter}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-nexa font-bold mb-6 text-white drop-shadow-md">{currentItem.title}</h3>
            
            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-200 max-w-xs drop-shadow-sm">
              {currentItem.content}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-80" />
          <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-60" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all duration-300 group"
        >
          <FiChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all duration-300 group"
        >
          <FiChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {letterContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
