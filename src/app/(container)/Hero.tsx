'use client';

import "../globals.css";
import { nexa, montserrat, cormorant, cormorantUnicase } from "@/lib/font";
export default function Hero() {
  return (
    <section className="w-full min-h-screen m-0 p-0">
      <div className="relative w-full min-h-screen bg-gradient-to-b from-neutral-900 via-slate-900 to-violet-950 flex items-center justify-center overflow-hidden py-16">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-80 absolute top-0 left-0 bg-gradient-to-b from-purple-500/20 via-violet-600/15 to-transparent blur-3xl mix-blend-color-dodge" />
          
          <div className="w-[500px] h-[500px] absolute -left-60 top-1/4 bg-gradient-to-br from-cyan-300/15 via-blue-400/12 to-purple-500/10 rounded-full blur-[60px] transform rotate-12 mix-blend-screen" />
          
          <div className="w-[450px] h-[450px] absolute -right-50 top-1/3 bg-gradient-to-bl from-emerald-300/15 via-teal-400/12 to-blue-400/10 rounded-full blur-[60px] transform -rotate-12 mix-blend-color-dodge" />
          
          <div className="w-full h-64 absolute bottom-0 left-0 bg-gradient-to-t from-violet-600/15 via-purple-500/10 to-transparent blur-3xl mix-blend-color-dodge" />
          
          <div className="w-40 h-40 absolute top-16 right-1/4 bg-cyan-300/12 rounded-full blur-3xl animate-pulse mix-blend-screen" />
          <div className="w-32 h-32 absolute bottom-28 left-1/4 bg-emerald-300/12 rounded-full blur-3xl animate-pulse mix-blend-color-dodge" style={{animationDelay: '2s'}} />
          
          <div className="w-60 h-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-400/8 via-purple-400/6 to-blue-400/8 rounded-full blur-[80px] mix-blend-color-dodge animate-pulse" style={{animationDelay: '4s'}} />
          <div className="w-80 h-20 absolute top-2/3 left-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl transform rotate-12 mix-blend-screen" />
          <div className="w-80 h-20 absolute top-1/4 right-0 bg-gradient-to-l from-transparent via-emerald-400/10 to-transparent blur-2xl transform -rotate-12 mix-blend-color-dodge" />
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 py-[190px]">
          <img className="w-[375px] h-[369px] mt-8" src="/images/logo-eterion.png" alt="Eterion Logo" />
          <div 
            className={`text-center text-white text-6xl font-bold ${cormorantUnicase.className} pt-[84px]`}
            style={{
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.5)'
            }}
          >
            Welcome to the Constellation
          </div>
          <div className="inline-flex justify-start items-center gap-4">
            <div 
              className={`w-20 h-20 text-center justify-start text-white text-6xl font-bold italic ${cormorant.className}`}
              style={{
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              of
            </div>
            <div 
              className={`text-center justify-start text-white text-7xl font-black ${nexa.className}`}
              style={{
                textShadow: '0 6px 12px rgba(0, 0, 0, 0.8), 0 3px 6px rgba(0, 0, 0, 0.6)'
              }}
            >
              ETERION
            </div>
          </div>
          <button
            onClick={() => {
              const nextSection = document.querySelector('section:nth-of-type(2)');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-style="Filled"
            className="mt-[58px] mb-16 w-96 h-14 p-5 bg-gradient-to-l from-green-200 via-white to-slate-500 rounded-[20px] shadow-[2px_2px_15px_0px_rgba(255,255,255,1.00)] inline-flex justify-center items-center gap-2.5 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className={`justify-center text-gray-950 text-l font-medium ${montserrat.className}`}>Join the constellation. Explore Eterion!</div>
          </button>
        </div>
      </div>
    </section>
  );
}
