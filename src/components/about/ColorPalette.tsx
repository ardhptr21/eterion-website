"use client";

import { useState } from "react";

export default function ColorPalette() {
    const [selectedColor, setSelectedColor] = useState<number | null>(null);

    const colors = [
        {
            name: "Deep Purple",
            color: "#301f66",
            textColor: "text-white",
            philosophy:
                "Melambangkan  profesionalisme, memberi kesan elegan dan intelektual.",
        },
        {
            name: "Blue",
            color: "#5b8eb9",
            textColor: "text-white",
            philosophy:
                "Melambangkan  keterbukaan dan fleksibel, memberi kesan adaptabilitas dan komunikasi yang terbuka.",
        },
        {
            name: "Mint Blue",
            color: "#b6eadb",
            textColor: "text-gray-800",
            philosophy:
                "Melambangkan kesederhanaan dan intuitif, merepresentasikan angkatan yang sederhana, mudah beradaptasi, dan memiliki pemikiran yang intuitif.",
        },
        {
            name: "Black Blue",
            color: "#0e0d1b",
            textColor: "text-white",
            philosophy:
                "Memberikan kesan professional dan menimbulkan kesan kokoh dan berwibawa",
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto m-8">
            {/* Title */}
            <h3 className="text-4xl font-nexa font-bold text-white text-center mb-12 drop-shadow-xs m-8">
                Color Palette
            </h3>

            {/* Color Container */}
            <div className="relative">
                {/* Main Palette Container */}
                <div className="bg-gradient-to-r from-[#5B8EB9]/100 via-[#B6EADB]/100 via-[#FFFFFF]/100 to-[#301F66]/100 rounded-4xl p-6 mb-8">
                    <div className="flex justify-center items-center space-x-6">
                        {colors.map((colorItem, index) => (
                            <div
                                key={index}
                                className={`group cursor-pointer transition-all duration-300 ${
                                    index === selectedColor
                                        ? "scale-110 -translate-y-2"
                                        : "hover:scale-105 hover:-translate-y-1"
                                }`}
                                onClick={() => setSelectedColor(index)}
                            >
                                {/* Color Circle */}
                                <div
                                    className={`w-15 h-15 rounded-full border-3 relative overflow-hidden shadow-xl transition-all duration-300 ${
                                        index === selectedColor
                                            ? "border-white/60 shadow-2xl"
                                            : "border-white/30 group-hover:border-white/50"
                                    }`}
                                    style={{ backgroundColor: colorItem.color }}
                                >
                                    {/* Selection Ring */}
                                    {index === selectedColor && (
                                        <div className="absolute inset-0 rounded-full border-2 border-white/80 animate-pulse"></div>
                                    )}

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Inner Ring */}
                                    <div className="absolute inset-2 rounded-full border border-white/20"></div>
                                </div>

                                {/* Color Name - Always visible for selected
                                <div
                                    className={`mt-3 transition-all duration-300 ${
                                        index === selectedColor
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                                    }`}
                                >
                                    <p className="text-sm text-white text-center font-nexa font-bold drop-shadow-md">
                                        {colorItem.name}
                                    </p>
                                    <p className="text-xs text-gray-300 text-center font-mono drop-shadow-sm">
                                        {colorItem.color}
                                    </p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Philosophy Card */}
            {selectedColor !== null && (
                <div className="relative">
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                        {/* Selected Color Philosophy */}
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-4">
                                <div
                                    className="w-8 h-8 rounded-full border-2 border-white/40 mr-3"
                                    style={{
                                        backgroundColor:
                                            colors[selectedColor].color,
                                    }}
                                ></div>
                                <h4 className="text-2xl font-nexa font-bold text-white">
                                    {colors[selectedColor].name}
                                </h4>
                            </div>
                            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
                                {colors[selectedColor].philosophy}
                            </p>
                        </div>
                    </div>

                    {/* Card Glow */}
                    <div
                        className="absolute -inset-1 rounded-2xl blur-xl opacity-30 -z-10"
                        style={{ backgroundColor: colors[selectedColor].color }}
                    ></div>
                </div>
            )}

            {/* Additional Info - Only show when no color is selected */}
            {selectedColor === null && (
                <p className="text-center text-gray-700 text-base mt-8 max-w-lg mx-auto leading-relaxed drop-shadow-sm">
                    Klik pada setiap warna untuk melihat filosofi dan makna
                    dibalik setiap pilihan warna ETERION.
                </p>
            )}
        </div>
    );
}
