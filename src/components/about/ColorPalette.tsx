"use client";

import { useState } from "react";

export default function ColorPalette() {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  const colors = [
    {
      name: "Deep Purple",
      color: "#301f66",
      textColor: "text-white",
      philosophy: "Melambangkan  profesionalisme, memberi kesan elegan dan intelektual.",
    },
    {
      name: "Blue",
      color: "#5b8eb9",
      textColor: "text-white",
      philosophy:
        "Melambangkan  keterbukaan dan fleksibel, memberi kesan adaptabilitas dan komunikasi yang terbuka.",
    },
    {
      name: "Tosca",
      color: "#b6eadb",
      textColor: "text-gray-800",
      philosophy:
        "Melambangkan kesederhanaan dan intuitif, merepresentasikan angkatan yang sederhana, mudah beradaptasi, dan memiliki pemikiran yang intuitif.",
    },
    {
      name: "Black Blue",
      color: "#0e0d1b",
      textColor: "text-white",
      philosophy: "Memberikan kesan professional dan menimbulkan kesan kokoh dan berwibawa",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <h3 className="text-3xl sm:text-4xl font-nexa font-bold text-white text-center mb-10 drop-shadow-xs">
        Color Palette
      </h3>

      <div className="bg-gradient-to-r from-[#5B8EB9]/100 via-[#B6EADB]/100 to-[#301F66]/100 rounded-4xl p-6 mb-10">
        <div className="flex justify-center gap-6">
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
              <div
                className={`w-12 h-12 md:w-14 md:h-14 sm:w-16 sm:h-16 rounded-full border-2 relative overflow-hidden shadow-xl transition-all duration-300 ${
                  index === selectedColor
                    ? "border-white/60 shadow-2xl"
                    : "border-white/30 group-hover:border-white/50"
                }`}
                style={{ backgroundColor: colorItem.color }}
              >
                {/* Pulse Ring */}
                {index === selectedColor && (
                  <div className="absolute inset-0 rounded-full border-2 border-white/80 animate-pulse" />
                )}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-2 rounded-full border border-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Display */}
      {selectedColor !== null ? (
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/40 mr-3"
                  style={{ backgroundColor: colors[selectedColor].color }}
                />
                <h4 className="text-xl sm:text-2xl font-nexa font-bold text-white">
                  {colors[selectedColor].name}
                </h4>
              </div>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
                {colors[selectedColor].philosophy}
              </p>
            </div>
          </div>

          {/* Glow Behind */}
          <div
            className="absolute -inset-1 rounded-2xl blur-xl opacity-30 -z-10"
            style={{ backgroundColor: colors[selectedColor].color }}
          />
        </div>
      ) : (
        <p className="text-center text-gray-300 text-sm sm:text-base mt-8 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
          Klik pada setiap warna untuk melihat filosofi dan makna di balik setiap pilihan warna
          <span className="text-white font-semibold"> ETERION</span>.
        </p>
      )}
    </div>
  );
}
