"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "M. Alfaeran Auriga Ruswandi",
  nrp: "5027241115",
  image: "115.jpg",
  funfact: "Suka Segala Jenis Olahan Kentang",
  hobby: "Mendengarkan musik, berolahraga, dan bermain game",
  origin: "Bogor",
  instagram: "https://www.instagram.com/alfaeran_auriga/",
  linkedin: "https://www.linkedin.com/in/m-alfaeran-auriga-ruswandii"
};

export default function NRP115() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Custom Virgo-themed Card */}
      <div
        className="cursor-pointer w-full shrink-0 p-6 rounded-xl border-2 border-yellow-600/40 relative overflow-hidden"
        onClick={() => setOpen(true)}
        style={{
          background: "linear-gradient(135deg, #2c1810 0%, #4a3728 50%, #6b5b47 100%)",
          boxShadow: "0 8px 32px rgba(139, 69, 19, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
        }}
      >
        {/* Vintage paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='19' cy='19' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Card number - top left */}
        <div className="absolute top-4 left-4 text-2xl font-bold text-yellow-300/80 font-serif">
          115
        </div>
        
        {/* Constellation border effect */}
        <div className="absolute inset-2 border border-yellow-500/30 rounded-lg pointer-events-none">
          {/* Corner decorations */}
          <div className="absolute -top-1 -left-1 w-4 h-4">
            <div className="w-full h-0.5 bg-yellow-400"></div>
            <div className="w-0.5 h-full bg-yellow-400"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4">
            <div className="w-full h-0.5 bg-yellow-400"></div>
            <div className="w-0.5 h-full bg-yellow-400 ml-auto"></div>
          </div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4">
            <div className="w-0.5 h-full bg-yellow-400"></div>
            <div className="w-full h-0.5 bg-yellow-400 mt-auto"></div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4">
            <div className="w-0.5 h-full bg-yellow-400 ml-auto"></div>
            <div className="w-full h-0.5 bg-yellow-400 mt-auto"></div>
          </div>
        </div>

        {/* Main content area */}
        <div className="relative z-10 mt-8">
          {/* Photo area with enhanced starfield background */}
          <div className="aspect-[4/5] relative mb-4 flex items-center justify-center">
            {/* Enhanced Background Stars - More density and coverage */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {/* Extra dense tiny stars covering entire area */}
              {[...Array(120)].map((_, i) => (
                <div
                  key={`tiny-${i}`}
                  className="absolute w-0.5 h-0.5 bg-yellow-200 rounded-full animate-pulse opacity-50"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${3 + Math.random() * 5}s`
                  }}
                />
              ))}
              
              {/* Medium background stars */}
              {[...Array(60)].map((_, i) => (
                <div
                  key={`small-${i}`}
                  className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 4}s`
                  }}
                />
              ))}
              
              {/* Sparkle stars scattered throughout */}
              {[...Array(30)].map((_, i) => (
                <div
                  key={`sparkle-${i}`}
                  className="absolute text-yellow-300 opacity-70 animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${3 + Math.random() * 5}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${1.5 + Math.random() * 2.5}s`
                  }}
                >
                  ✦
                </div>
              ))}

              {/* Larger prominent stars */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={`large-${i}`}
                  className="absolute text-yellow-400 opacity-80 animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${6 + Math.random() * 4}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                  }}
                >
                  ✦
                </div>
              ))}
              
              {/* Multiple shooting stars */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`shooting-${i}`}
                  className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `-20%`,
                    transform: `rotate(${15 + Math.random() * 30}deg)`,
                    animationDelay: `${2 + Math.random() * 10}s`,
                    animationDuration: '4s',
                    animationIterationCount: 'infinite'
                  }}
                />
              ))}
            </div>
            
            {/* Member photo - Clean grid/square format prominently displayed */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative flex items-center justify-center z-20">
              <div className="w-full aspect-[4,3/5] rounded-xl overflow-hidden mb-6 relative border-2 border-yellow-400/70 bg-black/30 flex-shrink-0 rounded-lg shadow-lg">
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  width={120}
                  height={152}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'center' }}
                />
                
              </div>
            </div>
          </div>

          {/* Enhanced corner constellations and bright stars */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Bright corner stars - more prominent */}
            <div className="absolute top-2 left-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`corner-tl-${i}`}
                  className="absolute text-yellow-400 opacity-90 animate-pulse"
                  style={{
                    top: `${Math.random() * 24}px`,
                    left: `${Math.random() * 24}px`,
                    fontSize: `${6 + Math.random() * 4}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 1.5}s`
                  }}
                >
                  ✦
                </div>
              ))}
            </div>
            
            <div className="absolute top-2 right-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`corner-tr-${i}`}
                  className="absolute text-yellow-400 opacity-90 animate-pulse"
                  style={{
                    top: `${Math.random() * 24}px`,
                    right: `${Math.random() * 24}px`,
                    fontSize: `${6 + Math.random() * 4}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 1.5}s`
                  }}
                >
                  ✦
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-20 left-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`corner-bl-${i}`}
                  className="absolute text-yellow-400 opacity-90 animate-pulse"
                  style={{
                    bottom: `${Math.random() * 24}px`,
                    left: `${Math.random() * 24}px`,
                    fontSize: `${6 + Math.random() * 4}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 1.5}s`
                  }}
                >
                  ✦
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-20 right-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`corner-br-${i}`}
                  className="absolute text-yellow-400 opacity-90 animate-pulse"
                  style={{
                    bottom: `${Math.random() * 24}px`,
                    right: `${Math.random() * 24}px`,
                    fontSize: `${6 + Math.random() * 4}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 1.5}s`
                  }}
                >
                  ✦
                </div>
              ))}
            </div>

            {/* Top left constellation */}
            <svg className="absolute top-6 left-6 w-12 h-12 opacity-70" viewBox="0 0 48 48">
              <defs>
                <filter id="corner-glow-1">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M 6 12 L 18 6 L 30 18 L 24 30 L 12 24 Z" stroke="#fbbf24" strokeWidth="1" fill="none" filter="url(#corner-glow-1)" />
              <circle cx="6" cy="12" r="1.5" fill="#fbbf24" filter="url(#corner-glow-1)" />
              <circle cx="18" cy="6" r="1" fill="#fbbf24" filter="url(#corner-glow-1)" />
              <circle cx="30" cy="18" r="1.5" fill="#fbbf24" filter="url(#corner-glow-1)" />
              <circle cx="24" cy="30" r="1" fill="#fbbf24" filter="url(#corner-glow-1)" />
              <circle cx="12" cy="24" r="1.5" fill="#fbbf24" filter="url(#corner-glow-1)" />
            </svg>

            {/* Top right constellation */}
            <svg className="absolute top-6 right-6 w-12 h-12 opacity-70" viewBox="0 0 48 48">
              <defs>
                <filter id="corner-glow-2">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M 42 12 L 30 6 L 18 18 L 24 30 L 36 24 Z" stroke="#fbbf24" strokeWidth="1" fill="none" filter="url(#corner-glow-2)" />
              <circle cx="42" cy="12" r="1.5" fill="#fbbf24" filter="url(#corner-glow-2)" />
              <circle cx="30" cy="6" r="1" fill="#fbbf24" filter="url(#corner-glow-2)" />
              <circle cx="18" cy="18" r="1.5" fill="#fbbf24" filter="url(#corner-glow-2)" />
              <circle cx="24" cy="30" r="1" fill="#fbbf24" filter="url(#corner-glow-2)" />
              <circle cx="36" cy="24" r="1.5" fill="#fbbf24" filter="url(#corner-glow-2)" />
            </svg>

            {/* Bottom left constellation */}
            <svg className="absolute bottom-24 left-6 w-12 h-12 opacity-70" viewBox="0 0 48 48">
              <defs>
                <filter id="corner-glow-3">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M 6 36 L 18 42 L 30 30 L 24 18 L 12 24 Z" stroke="#fbbf24" strokeWidth="1" fill="none" filter="url(#corner-glow-3)" />
              <circle cx="6" cy="36" r="1.5" fill="#fbbf24" filter="url(#corner-glow-3)" />
              <circle cx="18" cy="42" r="1" fill="#fbbf24" filter="url(#corner-glow-3)" />
              <circle cx="30" cy="30" r="1.5" fill="#fbbf24" filter="url(#corner-glow-3)" />
              <circle cx="24" cy="18" r="1" fill="#fbbf24" filter="url(#corner-glow-3)" />
              <circle cx="12" cy="24" r="1.5" fill="#fbbf24" filter="url(#corner-glow-3)" />
            </svg>

            {/* Bottom right constellation */}
            <svg className="absolute bottom-24 right-6 w-12 h-12 opacity-70" viewBox="0 0 48 48">
              <defs>
                <filter id="corner-glow-4">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M 42 36 L 30 42 L 18 30 L 24 18 L 36 24 Z" stroke="#fbbf24" strokeWidth="1" fill="none" filter="url(#corner-glow-4)" />
              <circle cx="42" cy="36" r="1.5" fill="#fbbf24" filter="url(#corner-glow-4)" />
              <circle cx="30" cy="42" r="1" fill="#fbbf24" filter="url(#corner-glow-4)" />
              <circle cx="18" cy="30" r="1.5" fill="#fbbf24" filter="url(#corner-glow-4)" />
              <circle cx="24" cy="18" r="1" fill="#fbbf24" filter="url(#corner-glow-4)" />
              <circle cx="36" cy="24" r="1.5" fill="#fbbf24" filter="url(#corner-glow-4)" />
            </svg>
          </div>

          {/* Name and NRP */}
          <div className="text-center space-y-1 mb-4">
            <h3 className="text-yellow-200 font-serif text-sm font-semibold tracking-wide">
              {data.name}
            </h3>
            <p className="text-yellow-300/70 text-xs font-mono">
              {data.nrp}
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-yellow-600/20 border border-yellow-500/40 flex items-center justify-center hover:bg-yellow-500/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-yellow-600/20 border border-yellow-500/40 flex items-center justify-center hover:bg-yellow-500/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Bottom title */}
          <div className="text-center border-t border-yellow-600/30 pt-3">
            <h2 className="text-yellow-200 font-serif text-lg font-bold tracking-wider">
              THE VIRGO
            </h2>
            <p className="text-yellow-400/60 text-xs mt-1 font-serif italic">
              Perfectionist • Detail-Oriented • Analytical
            </p>
          </div>
        </div>        </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

function MemberDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content 
            className="w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-8 relative"
            style={{
              background: "linear-gradient(135deg, #2c1810 0%, #4a3728 50%, #6b5b47 100%)",
              boxShadow: "0 12px 48px rgba(139, 69, 19, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            }}
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            {/* Enhanced massive starfield background for modal */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {/* Ultra dense tiny stars background */}
              {[...Array(150)].map((_, i) => (
                <div
                  key={`modal-tiny-${i}`}
                  className="absolute w-0.5 h-0.5 bg-yellow-200 rounded-full animate-pulse opacity-50"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${3 + Math.random() * 6}s`
                  }}
                />
              ))}
              
              {/* Medium background stars */}
              {[...Array(80)].map((_, i) => (
                <div
                  key={`modal-medium-${i}`}
                  className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${2 + Math.random() * 4}s`
                  }}
                />
              ))}
              
              {/* Sparkle stars scattered throughout */}
              {[...Array(40)].map((_, i) => (
                <div
                  key={`modal-sparkle-${i}`}
                  className="absolute text-yellow-300 opacity-70 animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${4 + Math.random() * 6}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${1.5 + Math.random() * 3}s`
                  }}
                >
                  ✦
                </div>
              ))}

              {/* Large prominent stars */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={`modal-large-${i}`}
                  className="absolute text-yellow-400 opacity-80 animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${8 + Math.random() * 6}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${1 + Math.random() * 2.5}s`
                  }}
                >
                  ✦
                </div>
              ))}
              
              {/* Shooting stars */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`modal-shooting-${i}`}
                  className="absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `-25%`,
                    transform: `rotate(${10 + Math.random() * 40}deg)`,
                    animationDelay: `${1 + Math.random() * 12}s`,
                    animationDuration: '5s',
                    animationIterationCount: 'infinite'
                  }}
                />
              ))}
            </div>

            {/* Enhanced corner constellations for modal */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Bright corner stars clusters */}
              <div className="absolute top-4 left-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`modal-corner-tl-${i}`}
                    className="absolute text-yellow-400 opacity-90 animate-pulse"
                    style={{
                      top: `${Math.random() * 32}px`,
                      left: `${Math.random() * 32}px`,
                      fontSize: `${5 + Math.random() * 5}px`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  >
                    ✦
                  </div>
                ))}
              </div>
              
              <div className="absolute top-4 right-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`modal-corner-tr-${i}`}
                    className="absolute text-yellow-400 opacity-90 animate-pulse"
                    style={{
                      top: `${Math.random() * 32}px`,
                      right: `${Math.random() * 32}px`,
                      fontSize: `${5 + Math.random() * 5}px`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  >
                    ✦
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-4 left-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`modal-corner-bl-${i}`}
                    className="absolute text-yellow-400 opacity-90 animate-pulse"
                    style={{
                      bottom: `${Math.random() * 32}px`,
                      left: `${Math.random() * 32}px`,
                      fontSize: `${5 + Math.random() * 5}px`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  >
                    ✦
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-4 right-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`modal-corner-br-${i}`}
                    className="absolute text-yellow-400 opacity-90 animate-pulse"
                    style={{
                      bottom: `${Math.random() * 32}px`,
                      right: `${Math.random() * 32}px`,
                      fontSize: `${5 + Math.random() * 5}px`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  >
                    ✦
                  </div>
                ))}
              </div>

              {/* Large constellation SVGs in corners */}
              <svg className="absolute top-8 left-8 w-16 h-16 opacity-70" viewBox="0 0 64 64">
                <defs>
                  <filter id="modal-glow-1">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M 8 16 L 24 8 L 40 24 L 32 40 L 16 32 Z" stroke="#fbbf24" strokeWidth="1.5" fill="none" filter="url(#modal-glow-1)" />
                <circle cx="8" cy="16" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="24" cy="8" r="1.5" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="40" cy="24" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="32" cy="40" r="1.5" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="16" cy="32" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
              </svg>

              <svg className="absolute top-8 right-8 w-16 h-16 opacity-70" viewBox="0 0 64 64">
                <path d="M 56 16 L 40 8 L 24 24 L 32 40 L 48 32 Z" stroke="#fbbf24" strokeWidth="1.5" fill="none" filter="url(#modal-glow-1)" />
                <circle cx="56" cy="16" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="40" cy="8" r="1.5" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="24" cy="24" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="32" cy="40" r="1.5" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="48" cy="32" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
              </svg>

              <svg className="absolute bottom-8 left-8 w-16 h-16 opacity-70" viewBox="0 0 64 64">
                <path d="M 8 48 L 24 56 L 40 40 L 32 24 L 16 32 Z" stroke="#fbbf24" strokeWidth="1.5" fill="none" filter="url(#modal-glow-1)" />
                <circle cx="8" cy="48" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="24" cy="56" r="1.5" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="40" cy="40" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="32" cy="24" r="1.5" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="16" cy="32" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
              </svg>

              <svg className="absolute bottom-8 right-8 w-16 h-16 opacity-70" viewBox="0 0 64 64">
                <path d="M 56 48 L 40 56 L 24 40 L 32 24 L 48 32 Z" stroke="#fbbf24" strokeWidth="1.5" fill="none" filter="url(#modal-glow-1)" />
                <circle cx="56" cy="48" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="40" cy="56" r="1.5" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="24" cy="40" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="32" cy="24" r="1.5" fill="#fbbf24" filter="url(#modal-glow-1)" />
                <circle cx="48" cy="32" r="2" fill="#fbbf24" filter="url(#modal-glow-1)" />
              </svg>
            </div>

            {/* Vintage border frame */}
            <div className="absolute inset-4 border-2 border-yellow-500/40 rounded-xl pointer-events-none">
              {/* Ornate corners */}
              <div className="absolute -top-1 -left-1 w-6 h-6">
                <div className="w-full h-0.5 bg-yellow-400"></div>
                <div className="w-0.5 h-full bg-yellow-400"></div>
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-yellow-400"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6">
                <div className="w-full h-0.5 bg-yellow-400"></div>
                <div className="w-0.5 h-full bg-yellow-400 ml-auto"></div>
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-yellow-400"></div>
              </div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6">
                <div className="w-0.5 h-full bg-yellow-400"></div>
                <div className="w-full h-0.5 bg-yellow-400 mt-auto"></div>
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-yellow-400"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6">
                <div className="w-0.5 h-full bg-yellow-400 ml-auto"></div>
                <div className="w-full h-0.5 bg-yellow-400 mt-auto"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-yellow-400"></div>
              </div>
            </div>

            {/* Content with relative positioning */}
            <div className="relative z-20">
              {/* Member photo with Virgo styling - Grid/Square format */}
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden  mb-6 relative border-2 border-yellow-400/50 bg-black/20">
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center' }}
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

              </div>

              {/* Name and NRP with Virgo styling */}
              <div className="text-center mb-2">
                <h2 className="text-3xl font-bold font-serif text-yellow-200 mb-1 tracking-wide">{data.name}</h2>
                <p className="text-lg font-mono text-yellow-300/80">{data.nrp}</p>
                <div className="mt-2 text-yellow-400/70 text-sm font-serif italic">
                  The Virgo • Perfectionist • Detail-Oriented
                </div>
              </div>

              <hr className="my-6 border-t border-yellow-600/40" />

              <div className="space-y-2 text-yellow-200 font-nexa text-base">
                <p>
                  <strong className="text-yellow-300">Asal:</strong> {data.origin}
                </p>
                <p>
                  <strong className="text-yellow-300">Hobi:</strong> {data.hobby}
                </p>
                <p>
                  <strong className="text-yellow-300">Funfact:</strong> {data.funfact}
                </p>
              </div>

              {/* Enhanced Social Media Links */}
              <div className="mt-6 pt-4 border-t border-yellow-600/40">
                <h3 className="text-lg font-serif font-semibold text-yellow-200 mb-3 text-center">Connect with me:</h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-white border border-yellow-500/30 backdrop-blur-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-700 transition-colors duration-300 text-white border border-yellow-500/30 backdrop-blur-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
