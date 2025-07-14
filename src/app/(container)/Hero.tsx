"use client";

import Starship from "@/components/effects/Starship";
import { cormorant, cormorantUnicase, montserrat, nexa } from "@/lib/font";
import "../globals.css";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen m-0">
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pb-16 py-32">
        <Starship />
        <div className="absolute inset-0 pointer-events-none mt-40">
          <div className="w-full h-80 absolute top-0 left-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-blue-400/25 blur-3xl mix-blend-color-dodge" />

          <div className="w-[800px] h-[100px] absolute -left-40 top-1/4 bg-gradient-to-r from-cyan-400/35 via-blue-500/25 to-transparent blur-[40px] transform rotate-10 mix-blend-screen" />
          <div className="w-[700px] h-[80px] absolute -left-20 top-1/3 bg-gradient-to-r from-cyan-300/30 via-blue-400/20 to-transparent blur-[50px] transform rotate-10 mix-blend-color-dodge" />
          <div className="w-[600px] h-[60px] absolute -left-10 top-2/5 bg-gradient-to-r from-purple-400/25 via-violet-400/15 to-transparent blur-[60px] transform rotate-20 mix-blend-screen" />

          <div className="w-[800px] h-[100px] absolute -right-40 top-1/3 bg-gradient-to-l from-emerald-400/35 via-teal-500/25 to-transparent blur-[40px] transform -rotate-20 mix-blend-screen" />
          <div className="w-[700px] h-[80px] absolute -right-20 top-1/4 bg-gradient-to-l from-emerald-300/30 via-teal-400/20 to-transparent blur-[50px] transform -rotate-25 mix-blend-color-dodge" />
          <div className="w-[600px] h-[60px] absolute -right-10 top-2/5 bg-gradient-to-l from-blue-400/25 via-cyan-400/15 to-transparent blur-[60px] transform -rotate-45 mix-blend-screen" />

          <div className="w-full h-80 absolute bottom-60 left-0 bg-gradient-to-t from-violet-500/30 via-purple-400/20 to-transparent blur-2xl mix-blend-screen" />
          <div className="w-120 h-64 absolute bottom-60 left-0 bg-gradient-to-t from-violet-600/25 via-purple-500/15 to-transparent blur-3xl mix-blend-color-dodge" />

          <div className="w-[500px] h-[40px] absolute top-6 right-1/4 bg-cyan-400/25 blur-xl animate-pulse mix-blend-screen transform rotate-30" />
          <div className="w-[250px] h-[30px] absolute top-20 right-1/4 bg-cyan-300/20 blur-2xl animate-pulse mix-blend-color-dodge transform rotate-12" />
          <div
            className="w-[280px] h-[35px] absolute bottom-60 left-1/4 bg-emerald-400/25 blur-xl animate-pulse mix-blend-screen transform -rotate-12"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="w-[230px] h-[25px] absolute bottom-64 left-1/4 bg-emerald-300/20 blur-2xl animate-pulse mix-blend-color-dodge transform -rotate-12"
            style={{ animationDelay: "2s" }}
          />

          <div
            className="w-[400px] h-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-400/20 via-purple-500/15 to-blue-500/20 blur-[50px] mix-blend-screen animate-pulse rotate-6"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="w-[350px] h-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-400/15 via-purple-400/10 to-blue-400/15 blur-[60px] mix-blend-color-dodge animate-pulse -rotate-6"
            style={{ animationDelay: "4s" }}
          />

          <div className="w-96 h-24 absolute top-2/3 left-0 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent blur-xl transform rotate-12 mix-blend-screen" />
          <div className="w-80 h-20 absolute top-2/3 left-0 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-2xl transform rotate-12 mix-blend-color-dodge" />
          <div className="w-96 h-24 absolute top-1/4 right-0 bg-gradient-to-l from-transparent via-emerald-400/25 to-transparent blur-xl transform -rotate-12 mix-blend-screen" />
          <div className="w-80 h-20 absolute top-1/4 right-0 bg-gradient-to-l from-transparent via-emerald-400/15 to-transparent blur-2xl transform -rotate-12 mix-blend-color-dodge" />

          <div className="constellation-container absolute top-60 right-0 translate-x-1/5 rotate-30">
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-white/20 rounded-full blur-3xl animate-pulse mix-blend-screen"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-cyan-300/15 rounded-full blur-2xl animate-pulse mix-blend-color-dodge"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-blue-400/10 rounded-full blur-xl animate-pulse mix-blend-screen"
              style={{ animationDelay: "3s" }}
            />

            <img
              className="constellation-image relative w-[180px] brightness-150 contrast-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mix-blend-screen animate-pulse filter opacity-70"
              src="/images/zodiac/cancer.svg"
              alt="Cancer"
              style={{
                filter:
                  "brightness(1.5) contrast(1.25) drop-shadow(0 0 20px rgba(255,255,255,0.8)) drop-shadow(0 0 40px rgba(0,255,255,0.4))",
                animationDelay: "0.5s",
              }}
            />

            <div
              className="star-effect absolute top-12 left-8 w-3 h-3 bg-white rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="star-effect absolute top-20 right-16 w-2 h-2 bg-cyan-300 rounded-full blur-sm animate-ping mix-blend-color-dodge"
              style={{ animationDelay: "2.5s" }}
            />
            <div
              className="star-effect absolute bottom-24 left-12 w-4 h-4 bg-blue-200 rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "4s" }}
            />
            <div
              className="star-effect absolute bottom-32 right-8 w-2 h-2 bg-white rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "3.5s" }}
            />
            <div
              className="star-effect absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-200 rounded-full blur-sm animate-ping mix-blend-color-dodge"
              style={{ animationDelay: "1.8s" }}
            />
          </div>

          <div className="constellation-container absolute top-30 left-20 translate-x-1/5 rotate-30">
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-white/20 rounded-full blur-3xl animate-pulse mix-blend-screen"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-emerald-300/15 rounded-full blur-2xl animate-pulse mix-blend-color-dodge"
              style={{ animationDelay: "2.5s" }}
            />
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-purple-400/10 rounded-full blur-xl animate-pulse mix-blend-screen"
              style={{ animationDelay: "3.5s" }}
            />

            <img
              className="constellation-image relative w-[250px] brightness-150 contrast-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mix-blend-screen animate-pulse filter opacity-60"
              src="/images/zodiac/scorpio.svg"
              alt="Scorpio"
              style={{
                filter:
                  "brightness(1.5) contrast(1.25) drop-shadow(0 0 20px rgba(255,255,255,0.8)) drop-shadow(0 0 40px rgba(0,255,255,0.4))",
                animationDelay: "1s",
              }}
            />

            <div
              className="star-effect absolute top-16 left-12 w-3 h-3 bg-emerald-200 rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="star-effect absolute top-24 right-20 w-2 h-2 bg-purple-300 rounded-full blur-sm animate-ping mix-blend-color-dodge"
              style={{ animationDelay: "3s" }}
            />
            <div
              className="star-effect absolute bottom-28 left-16 w-4 h-4 bg-white rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "4.5s" }}
            />
            <div
              className="star-effect absolute bottom-36 right-12 w-2 h-2 bg-emerald-300 rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "4s" }}
            />
            <div
              className="star-effect absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-200 rounded-full blur-sm animate-ping mix-blend-color-dodge"
              style={{ animationDelay: "2.3s" }}
            />
          </div>

          <div className="constellation-container hidden md:block absolute top-220 left-3 translate-x-1/5">
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[200px] bg-green-300/15 rounded-full blur-2xl animate-pulse mix-blend-color-dodge"
              style={{ animationDelay: "3.5s" }}
            />
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[250px] bg-teal-400/10 rounded-full blur-xl animate-pulse mix-blend-screen"
              style={{ animationDelay: "4.5s" }}
            />

            <img
              className="constellation-image relative w-[250px] brightness-150 contrast-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mix-blend-screen animate-pulse filter opacity-60"
              src="/images/zodiac/aries.svg"
              alt="Aries"
              style={{
                filter:
                  "brightness(1.5) contrast(1.25) drop-shadow(0 0 20px rgba(255,255,255,0.8)) drop-shadow(0 0 40px rgba(0,255,255,0.4))",
                animationDelay: "1.5s",
              }}
            />

            <div
              className="star-effect absolute top-12 left-8 w-3 h-3 bg-red-200 rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="star-effect absolute top-20 right-16 w-2 h-2 bg-orange-300 rounded-full blur-sm animate-ping mix-blend-color-dodge"
              style={{ animationDelay: "3.5s" }}
            />
            <div
              className="star-effect absolute bottom-24 left-12 w-4 h-4 bg-white rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "5s" }}
            />
            <div
              className="star-effect absolute bottom-32 right-8 w-2 h-2 bg-red-300 rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "4.5s" }}
            />
            <div
              className="star-effect absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-200 rounded-full blur-sm animate-ping mix-blend-color-dodge"
              style={{ animationDelay: "2.8s" }}
            />
          </div>

          <div className="constellation-container hidden md:block absolute top-220 right-20 translate-x-1/5 rotate-270">
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-white/20 rounded-full blur-3xl animate-pulse mix-blend-screen"
              style={{ animationDelay: "2.5s" }}
            />
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-green-300/15 rounded-full blur-2xl animate-pulse mix-blend-color-dodge"
              style={{ animationDelay: "3.5s" }}
            />
            <div
              className="constellation-glow absolute inset-0 w-[235px] h-[368px] bg-teal-400/10 rounded-full blur-xl animate-pulse mix-blend-screen"
              style={{ animationDelay: "4.5s" }}
            />

            <img
              className="constellation-image relative w-[250px] brightness-150 contrast-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mix-blend-screen animate-pulse filter opacity-60"
              src="/images/zodiac/virgo.svg"
              alt="Virgo"
              style={{
                filter:
                  "brightness(1.5) contrast(1.25) drop-shadow(0 0 20px rgba(255,255,255,0.8)) drop-shadow(0 0 40px rgba(0,255,255,0.4))",
                animationDelay: "2s",
              }}
            />

            <div
              className="star-effect absolute top-12 left-8 w-3 h-3 bg-green-200 rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "2.5s" }}
            />
            <div
              className="star-effect absolute top-20 right-16 w-2 h-2 bg-teal-300 rounded-full blur-sm animate-ping mix-blend-color-dodge"
              style={{ animationDelay: "4s" }}
            />
            <div
              className="star-effect absolute bottom-24 left-12 w-4 h-4 bg-white rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "5.5s" }}
            />
            <div
              className="star-effect absolute bottom-32 right-8 w-2 h-2 bg-green-300 rounded-full blur-sm animate-ping mix-blend-screen"
              style={{ animationDelay: "5s" }}
            />
            <div
              className="star-effect absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-teal-200 rounded-full blur-sm animate-ping mix-blend-color-dodge"
              style={{ animationDelay: "3.3s" }}
            />
          </div>

          <img
            className="absolute top-20 left-1/4 w-6 h-6 opacity-40 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "1s" }}
          />

          <img
            className="absolute top-32 right-1/3 w-4 h-4 opacity-30 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "2.5s" }}
          />

          <img
            className="absolute top-1/2 left-10 w-5 h-5 opacity-35 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "4s" }}
          />

          <img
            className="absolute top-1/3 right-10 w-3 h-3 opacity-25 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "3.5s" }}
          />

          <img
            className="absolute bottom-40 left-1/3 w-4 h-4 opacity-30 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "5s" }}
          />

          <img
            className="absolute bottom-32 right-1/4 w-5 h-5 opacity-35 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "1.5s" }}
          />

          <img
            className="absolute top-1/4 left-1/2 w-3 h-3 opacity-20 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "6s" }}
          />

          <img
            className="absolute bottom-60 right-1/3 w-4 h-4 opacity-25 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "2s" }}
          />

          <img
            className="absolute top-16 left-1/6 w-6 h-6 opacity-30 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "3s" }}
          />

          <img
            className="absolute bottom-80 left-1/2 w-5 h-5 opacity-35 animate-pulse mix-blend-screen"
            src="/images/zodiac/star.png"
            alt="Star"
            style={{ animationDelay: "4.5s" }}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 py-32 md:py-[190px] relative z-10 text-center">
          <img
            className="w-52 md:w-[375px] h-auto mt-8"
            src="/images/logo-eterion.png"
            alt="Eterion Logo"
          />
          <div
            className={`text-white text-4xl md:text-6xl font-bold ${cormorantUnicase.className} pt-14 md:pt-[84px]`}
            style={{
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Welcome to the Constellation
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mt-4">
            <div
              className={`text-white text-4xl md:text-6xl font-bold italic ${cormorant.className}`}
              style={{
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              of
            </div>
            <div
              className={`text-white text-5xl md:text-7xl font-black ${nexa.className}`}
              style={{
                textShadow: "0 6px 12px rgba(0, 0, 0, 0.8), 0 3px 6px rgba(0, 0, 0, 0.6)",
              }}
            >
              ETERION
            </div>
          </div>

          <button
            onClick={() => {
              const nextSection = document.querySelector("section:nth-of-type(2)");
              nextSection?.scrollIntoView({ behavior: "smooth" });
            }}
            data-style="Filled"
            className="mt-12 md:mt-[58px] mb-16 w-full sm:w-80 h-14 px-5 bg-gradient-to-l from-green-200 via-white to-slate-500 rounded-[20px] shadow-[2px_2px_15px_0px_rgba(255,255,255,1.00)] flex justify-center items-center gap-2.5 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div
              className={`text-gray-950 text-base md:text-lg font-medium ${montserrat.className}`}
            >
              Join the constellation. Explore Eterion!
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
