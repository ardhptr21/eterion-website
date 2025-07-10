"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const logos = [
    {
        id: "primary-logo",
        name: "Primary Logo",
        src: "/images/logo-primer.png",
        description: "Main brand identity for digital and print materials",
        primaryColor: "#b6eadb", // accent color
        secondaryColor: "#301f66", // primary color
        gradientFrom: "#b6eadb",
        gradientTo: "#301f66"
    },
    {
        id: "secondary-logo",
        name: "Secondary Logo", 
        src: "/images/logo-secondary.png",
        description: "Alternative version for smaller applications",
        primaryColor: "#5b8eb9", // secondary color
        secondaryColor: "#0e0d1b", // dark color
        gradientFrom: "#5b8eb9",
        gradientTo: "#0e0d1b"
    },
    {
        id: "tertiary-logo",
        name: "Tertiary Logo",
        src: "/images/logo-tersier.png", 
        description: "Simplified version for minimal space usage",
        primaryColor: "#301f66", // primary color
        secondaryColor: "#b6eadb", // accent color
        gradientFrom: "#301f66",
        gradientTo: "#b6eadb"
    },
];

export default function LogoDisplay() {
    const [currentLogo, setCurrentLogo] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLogo((prev) => (prev + 1) % logos.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const nextLogo = () => {
        setCurrentLogo((prev) => (prev + 1) % logos.length);
    };

    const prevLogo = () => {
        setCurrentLogo((prev) => (prev - 1 + logos.length) % logos.length);
    };

    const goToLogo = (index: number) => {
        setCurrentLogo(index);
    };

    const currentLogoData = logos[currentLogo];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-nexa font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-accent">
                Logo
            </h1>
            
            {/* Main Logo Display Container */}
            <div 
                className="relative bg-[#140c2c]/90 backdrop-blur-xl border-2 rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden transition-all duration-700 shadow-2xl"
                style={{
                    borderColor: currentLogoData.primaryColor + '60',
                    background: `linear-gradient(135deg, #140c2c 0%, ${currentLogoData.primaryColor}15 30%, #140c2c 70%, ${currentLogoData.secondaryColor}10 100%)`
                }}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div 
                        className="absolute top-6 right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl transition-all duration-700"
                        style={{ backgroundColor: currentLogoData.primaryColor + '25' }}
                    ></div>
                    <div 
                        className="absolute bottom-10 left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full blur-xl transition-all duration-700"
                        style={{ backgroundColor: currentLogoData.secondaryColor + '25' }}
                    ></div>
                    <div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 rounded-full blur-3xl transition-all duration-700 opacity-10"
                        style={{ backgroundColor: currentLogoData.primaryColor }}
                    ></div>
                </div>
                
                {/* Logo Display Area */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Logo Image */}
                    <div className="flex items-center justify-center mb-8 sm:mb-10 lg:mb-12 py-8 sm:py-12 lg:py-16">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 transition-all duration-700 ease-in-out transform hover:scale-105">
                            <div 
                                className="absolute inset-0 rounded-full blur-lg opacity-30 transition-all duration-700"
                                style={{ backgroundColor: currentLogoData.primaryColor }}
                            ></div>
                            <Image
                                src={currentLogoData.src}
                                alt={currentLogoData.name}
                                fill
                                className="object-contain transition-all duration-700 relative z-10"
                                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                                priority
                            />
                        </div>
                    </div>
                    
                    {/* Logo Info */}
                    <div className="text-center space-y-4 sm:space-y-6 max-w-3xl mb-8 sm:mb-10 lg:mb-12">
                        <h3 
                            className="text-2xl sm:text-3xl lg:text-4xl font-nexa font-bold transition-all duration-700 transform"
                            style={{ color: currentLogoData.primaryColor }}
                        >
                            {currentLogoData.name}
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-foreground/90 leading-relaxed px-4 sm:px-6 lg:px-8">
                            {currentLogoData.description}
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Navigation Controls - Moved to Bottom */}
            <div className="flex flex-col items-center gap-6 sm:gap-8 mt-8 sm:mt-10 lg:mt-12">
                {/* Dots Indicator - Centered */}
                <div className="flex justify-center">
                    <div className="flex gap-2 sm:gap-3">
                        {logos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToLogo(index)}
                                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${
                                    index === currentLogo 
                                        ? "scale-125 shadow-lg" 
                                        : "hover:scale-110"
                                }`}
                                style={{
                                    backgroundColor: index === currentLogo 
                                        ? currentLogoData.primaryColor 
                                        : currentLogoData.primaryColor + '40',
                                    boxShadow: index === currentLogo 
                                        ? `0 0 15px ${currentLogoData.primaryColor}50` 
                                        : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (index !== currentLogo) {
                                        e.currentTarget.style.backgroundColor = currentLogoData.primaryColor + '60';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (index !== currentLogo) {
                                        e.currentTarget.style.backgroundColor = currentLogoData.primaryColor + '40';
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Navigation Buttons - Left and Right */}
                <div className="flex items-center justify-between max-w-md mx-auto">
                    {/* Previous Button */}
                    <button
                        onClick={prevLogo}
                        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-all duration-300 border hover:scale-105"
                        style={{
                            backgroundColor: currentLogoData.primaryColor + '20',
                            borderColor: currentLogoData.primaryColor + '50'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = currentLogoData.primaryColor + '30';
                            e.currentTarget.style.borderColor = currentLogoData.primaryColor + '80';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = currentLogoData.primaryColor + '20';
                            e.currentTarget.style.borderColor = currentLogoData.primaryColor + '50';
                        }}
                    >
                        <span 
                            className="text-lg sm:text-xl font-bold transition-all duration-300"
                            style={{ color: currentLogoData.primaryColor }}
                        >
                            ←
                        </span>
                    </button>
                    
                    {/* Card Counter */}
                    <span 
                        className="backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm sm:text-base border"
                        style={{
                            backgroundColor: currentLogoData.primaryColor + '20',
                            borderColor: currentLogoData.primaryColor + '30',
                            color: currentLogoData.primaryColor
                        }}
                    >
                        {currentLogo + 1} of {logos.length}
                    </span>
                    
                    {/* Next Button */}
                    <button
                        onClick={nextLogo}
                        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-all duration-300 border hover:scale-105"
                        style={{
                            backgroundColor: currentLogoData.primaryColor + '20',
                            borderColor: currentLogoData.primaryColor + '50'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = currentLogoData.primaryColor + '30';
                            e.currentTarget.style.borderColor = currentLogoData.primaryColor + '80';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = currentLogoData.primaryColor + '20';
                            e.currentTarget.style.borderColor = currentLogoData.primaryColor + '50';
                        }}
                    >
                        <span 
                            className="text-lg sm:text-xl font-bold transition-all duration-300"
                            style={{ color: currentLogoData.primaryColor }}
                        >
                            →
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
