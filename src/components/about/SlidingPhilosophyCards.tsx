"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === philosophyCards.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? philosophyCards.length - 1 : prev - 1));
  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <div className="relative w-full max-w-6xl px-5 mx-auto mb-16">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {philosophyCards.map((card) => (
            <div key={card.id} className="w-full flex-shrink-0 px-2 sm:px-4">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border mx-auto max-w-2xl">
                <Image
                  src="/images/philosophy-bg-card.png"
                  alt="Card Background"
                  fill
                  className="object-cover scale-110"
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="absolute inset-0" />
                <div className="relative z-20 p-4 sm:p-8 h-full flex flex-col justify-center text-center text-white">
                  <h3 className="text-2xl sm:text-3xl font-nexa font-bold mb-4 sm:mb-6 drop-shadow-lg">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-lg leading-relaxed text-gray-200 drop-shadow-sm max-w-lg mx-auto">
                    {card.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 group z-20 shadow-lg"
      >
        <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 group z-20 shadow-lg"
      >
        <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Counter */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 z-20">
        <span className="text-white text-xs sm:text-sm font-medium">
          {currentIndex + 1} / {philosophyCards.length}
        </span>
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
        {philosophyCards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
