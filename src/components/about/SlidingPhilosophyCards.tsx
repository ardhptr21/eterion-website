"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Philosophy cards content - matching your design
const philosophyCards = [
    {
        id: 1,
        title: "Huruf E",
        content:
            "Bentuk logo menyerupai huruf E, melambangkan nama dari angkatan kami ETERION",
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
        content:
            "Melambangkan sinergi dalam kebersamaan, kolaborasi dalam mencapai tujuan",
    },
    {
        id: 4,
        title: "Compass",
        content:
            "Menggambarkan kami merupakan sang pemandu arah di kondisi manapun.",
    },
    {
        id: 5,
        title: "Jarum",
        content:
            "Melambangkan kami memiliki kemampuan untuk menembus inovasi dan gigih.",
    },
];

export default function SlidingPhilosophyCards() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
                {/* Cards Track */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {philosophyCards.map((card, index) => (
                        <div
                            key={card.id}
                            className="w-full flex-shrink-0 px-4"
                        >
                            {/* Single Card */}
                            <div className="relative h-96 rounded-2xl overflow-hidden border mx-auto max-w-2xl">
                                {/* Background Image with Blur */}
                                <Image
                                    src="/images/philosophy-bg-card.png"
                                    alt="Card Background"
                                    fill
                                    className="object-cover scale-110"
                                />

                                {/* Blur Overlay */}
                                <div className="absolute inset-0 backdrop-blur-sm" />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0" />

                                {/* Content */}
                                <div className="relative z-20 p-8 h-full flex flex-col justify-center text-center text-white">
                                    <h3 className="text-3xl font-nexa font-bold mb-6 text-white drop-shadow-lg">
                                        {card.title}
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-200 drop-shadow-sm max-w-lg mx-auto">
                                        {card.content}
                                    </p>
                                </div>

                                {/* Decorative Elements */}
                                {/* <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-400/30 blur-xl" /> */}
                                {/* <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 blur-xl" /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 group z-20 shadow-lg"
            >
                <FiChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 group z-20 shadow-lg"
            >
                <FiChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Card Counter */}
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 z-20">
                <span className="text-white text-sm font-medium">
                    {currentIndex + 1} / {philosophyCards.length}
                </span>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
                {philosophyCards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? "bg-white scale-125"
                                : "bg-white/40 hover:bg-white/60"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
