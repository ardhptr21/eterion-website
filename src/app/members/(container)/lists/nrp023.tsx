"use client";

import type React from "react";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

const zodiacCursorStyle = `
  .zodiac-cursor-trail {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, #00ffff, #4338ca);
    box-shadow: 0 0 8px #00ffff, 0 0 15px #4338ca;
    animation: zodiac-trail 1s ease-out forwards;
  }
  
  @keyframes zodiac-trail {
    0% { 
      opacity: 1; 
      transform: scale(1); 
    }
    100% { 
      opacity: 0; 
      transform: scale(0.3); 
    }
  }
  
  .font-hover-glow:hover {
    animation: text-glow-pulse 0.6s ease-in-out;
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
  }
  
  @keyframes text-glow-pulse {
    0%, 100% { 
      text-shadow: 0 0 5px #00ffff; 
    }
    50% { 
      text-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff; 
    }
  }
  
  .interactive-text {
    transition: all 0.3s ease;
  }
  
  .interactive-text:hover {
    transform: translateY(-2px);
    filter: brightness(1.2);
  }

  @keyframes border-glow {
    0% {
      box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), inset 0 0 5px rgba(0, 255, 255, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 20px rgba(0, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), inset 0 0 5px rgba(0, 255, 255, 0.5);
    }
  }
  .always-glowing-border {
    animation: border-glow 2s infinite alternate;
  }

  /* Sakura Petal Styles and Animations */
  .sakura-petal {
    position: fixed;
    background-color: #ffc0cb;
    width: 10px;
    height: 10px;
    border-radius: 50% 0 50% 0;
    opacity: 0;
    pointer-events: none;
    z-index: 999;
    transform-origin: 50% 50%;
  }

  @keyframes fall {
    0% {
      transform: translate(0, -10vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.8;
    }
    100% {
      transform: translate(var(--x-end), 100vh) rotate(var(--rotate-end));
      opacity: 0;
    }
  }

  /* New animation for Reishi Pulse */
  @keyframes reishi-pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.25;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.1;
    }
  }
`;

const data = {
  name: "Muhammad Fatihul Qolbi Ash Shiddiqi",
  nrp: "5027241023",
  image: "023.jpg",
  funfact: "Sering Masuk BK waktu SMP",
  hobby: "By One Catur",
  origin: "Lumajang",
};

interface CursorTrail {
  id: number;
  x: number;
  y: number;
}

interface SakuraPetal {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  rotateEnd: number;
  xEnd: number;
}

// Component untuk satu kelopak sakura
function SakuraPetalComponent({ petal }: { petal: SakuraPetal }) {
  return (
    <div
      className="sakura-petal"
      style={
        {
          left: petal.x,
          top: petal.y,
          animation: `fall ${petal.duration}s linear ${petal.delay}s forwards`,
          "--x-end": `${petal.xEnd}px`,
          "--rotate-end": `${petal.rotateEnd}deg`,
        } as React.CSSProperties
      }
    />
  );
}

export default function NRP023() {
  const [open, setOpen] = useState(false);
  const [zanpakutoCursor, setZanpakutoCursor] = useState(false);
  const [cursorTrails, setCursorTrails] = useState<CursorTrail[]>([]);
  const [sakuraPetals, setSakuraPetals] = useState<SakuraPetal[]>([]);
  const petalIdRef = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const generatePetal = useCallback(() => {
    if (cardRef.current && open) { // Only generate petals when dialog is open
      const cardRect = cardRef.current.getBoundingClientRect();
      const spawnAreaWidth = cardRect.width * 3; // Wider spawn area for more petals
      const spawnAreaLeft = cardRect.left - (spawnAreaWidth - cardRect.width) / 2;

      // Generate multiple petals at once for higher density
      for (let i = 0; i < 5; i++) { // Increased to 5 petals per interval
        const startX = spawnAreaLeft + Math.random() * spawnAreaWidth;
        const startY = cardRect.top - 100;
        const commonDelay = Math.random() * 1;
        const petalDuration = 2 + Math.random() * 2;

        const newPetal: SakuraPetal = {
          id: petalIdRef.current++,
          x: startX,
          y: startY,
          delay: commonDelay,
          duration: petalDuration,
          rotateEnd: Math.random() * 720,
          xEnd: (Math.random() - 0.5) * 300, // Wider drift
        };
        setSakuraPetals((prev) => [...prev, newPetal]);

        setTimeout(
          () => {
            setSakuraPetals((prev) => prev.filter((p) => p.id !== newPetal.id));
          },
          newPetal.duration * 1000 + 1000,
        );
      }
    }
  }, [open]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const trail: CursorTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };

      setCursorTrails((prev) => [...prev, trail]);

      setTimeout(() => {
        setCursorTrails((prev) => prev.filter((t) => t.id !== trail.id));
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (open) {
      const interval = setInterval(generatePetal, 100); // Reduced interval for more frequent generation
      return () => clearInterval(interval);
    }
  }, [generatePetal, open]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: zodiacCursorStyle }} />
      {/* Sakura Petals */}
      {sakuraPetals.map((petal) => (
        <SakuraPetalComponent key={petal.id} petal={petal} />
      ))}

      {/* Zodiac Cursor Trails */}
      {cursorTrails.map((trail: CursorTrail) => (
        <div
          key={trail.id}
          className="zodiac-cursor-trail"
          style={{
            left: trail.x - 6,
            top: trail.y - 6,
          }}
        />
      ))}
      <div
        ref={cardRef}
        className={`cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-cyan-400/60 relative bg-slate-900/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50 hover:shadow-2xl group ${zanpakutoCursor ? "zanpakuto-cursor" : ""} always-glowing-border`}
        onClick={() => {
          setOpen(true);
          setZanpakutoCursor(true);
          setTimeout(() => {
            setZanpakutoCursor(false);
          }, 3000);
        }}
      >
        <Noise />

        {/* TYBW Spiritual energy background effects */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 left-12 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-6 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-12 right-4 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
          {/* Additional particles for density */}
          <div className="absolute top-1/5 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-400"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-600"></div>
        </div>

        {/* Spiritual energy top accent */}
        <div className="absolute top-2 left-2 text-cyan-400 animate-pulse text-sm">★</div>
        <div className="absolute top-3 right-3 text-purple-400 animate-pulse delay-200 text-xs">✦</div>

        {/* Reishi Pulse Effect (TYBW inspired) */}
        <div className="absolute inset-0 bg-cyan-500/10 rounded-xl animate-reishi-pulse pointer-events-none"></div>

        <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl z-10 relative overflow-hidden border-4 border-cyan-400/70 shadow-lg shadow-cyan-500/25 group-hover:border-cyan-300 transition-all duration-300">
          {/* Spiritual energy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>

          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full transition-all duration-500 hover:opacity-90 group-hover:scale-105"
          />

          {/* Soul Society badge */}
          <div className="absolute top-3 right-3 w-6 h-6 bg-slate-800/80 rounded-full border border-cyan-400/50 flex items-center justify-center z-30">
            <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent animate-fade-in font-hover-glow interactive-text">
            {data.name}
          </h4>
          <h6 className="font-nexa text-cyan-200/80 interactive-text font-hover-glow">{data.nrp}</h6>
        </div>

        {/* Spiritual energy divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent my-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm"></div>
        </div>

        <div className="space-y-2 text-white font-nexa text-base relative z-10">
          <p className="animate-fade-in-delay">
            <strong className="text-cyan-300 interactive-text font-hover-glow">Asal:</strong>{" "}
            <span className="text-slate-300 interactive-text font-hover-glow">{data.origin}</span>
          </p>
          <p className="animate-fade-in-delay-200">
            <strong className="text-cyan-300 interactive-text font-hover-glow">Hobi:</strong>{" "}
            <span className="text-slate-300 interactive-text font-hover-glow">{data.hobby}</span>
          </p>
          <p className="animate-fade-in-delay-400">
            <strong className="text-cyan-300 interactive-text font-hover-glow">Funfact:</strong>{" "}
            <span className="text-slate-300 interactive-text font-hover-glow">{data.funfact}</span>
          </p>
        </div>

        {/* Social Media Icons with Bleach styling */}
        <div className="flex justify-center gap-6 mt-6 animate-fade-in-delay-600 relative z-10">
          <a
            href="https://www.linkedin.com/in/muhammad-fatihul-qolbi-ash-shiddiqi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center border border-blue-400/30 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40 interactive-text font-hover-glow"
          >
            <FaLinkedin size={20} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/fatihulqolbi.js/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-700 rounded-lg flex items-center justify-center border border-pink-400/30 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-pink-400/40 interactive-text font-hover-glow"
          >
            <FaInstagram size={20} className="text-white" />
          </a>
        </div>

        {/* Bottom zodiac accent */}
        <div className="absolute bottom-2 left-2 text-purple-400 animate-pulse delay-400 text-xs">✦</div>
        <div className="absolute bottom-3 right-2 text-cyan-400 animate-pulse delay-500 text-sm">★</div>
      </div>

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
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm animate-fade-in" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            className={`w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-black/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 animate-slide-up relative border-4 border-cyan-400/60 always-glowing-border`}
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            {/* Zodiac constellation background in dialog */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-8 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-16 left-20 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
              <div className="absolute top-20 left-12 w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <div className="absolute bottom-20 right-12 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-16 right-20 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-400"></div>
              <div className="absolute bottom-8 right-8 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Spiritual energy glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-4 border-cyan-400/70 shadow-lg shadow-cyan-500/25 animate-border-pulse">
              {/* Spiritual energy overlay for dialog image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20"></div>

              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Soul Society badge in dialog */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-slate-800/80 rounded-full border border-cyan-400/50 flex items-center justify-center z-30">
                <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-nexa bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent mb-1 animate-text-glow font-hover-glow interactive-text">
              {data.name}
            </h2>
            <p className="text-lg font-nexa text-cyan-200/80 interactive-text font-hover-glow">{data.nrp}</p>

            {/* Spiritual energy divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm"></div>
            </div>

            <div className="space-y-2 text-white font-nexa text-base relative z-10">
              <p className="animate-fade-in-delay">
                <strong className="text-cyan-300 interactive-text font-hover-glow">Asal:</strong>{" "}
                <span className="text-slate-300 interactive-text font-hover-glow">{data.origin}</span>
              </p>
              <p className="animate-fade-in-delay-200">
                <strong className="text-cyan-300 interactive-text font-hover-glow">Hobi:</strong>{" "}
                <span className="text-slate-300 interactive-text font-hover-glow">{data.hobby}</span>
              </p>
              <p className="animate-fade-in-delay-400">
                <strong className="text-cyan-300 interactive-text font-hover-glow">Funfact:</strong>{" "}
                <span className="text-slate-300 interactive-text font-hover-glow">{data.funfact}</span>
              </p>
            </div>

            {/* Social Media Icons with Bleach styling */}
            <div className="flex justify-center gap-6 mt-6 animate-fade-in-delay-600 relative z-10">
              <a
                href="https://www.linkedin.com/in/muhammad-fatihul-qolbi-ash-shiddiqi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center border border-blue-400/30 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40 interactive-text font-hover-glow"
              >
                <FaLinkedin size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/fatihulqolbi.js/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-700 rounded-lg flex items-center justify-center border border-pink-400/30 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-pink-400/40 interactive-text font-hover-glow"
              >
                <FaInstagram size={20} className="text-white" />
              </a>
            </div>

            {/* YouTube Video Embed */}
            <div className="mt-6 relative z-10 w-full">
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-slate-700 shadow-lg">
                {open && (
                  <iframe
                    src="https://www.youtube.com/embed/JNzbNwCjaJU?autoplay=1&loop=1&playlist=JNzbNwCjaJU"
                    title="Rick Astley - Are We There Yet?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
            </div>

            {/* Decorative Zodiac Stars with Bleach theme */}
            <div className="absolute top-4 left-4 text-cyan-400 animate-pulse text-lg">★</div>
            <div className="absolute top-6 left-8 text-purple-400 animate-pulse delay-200 text-sm">✦</div>
            <div className="absolute bottom-4 right-4 text-cyan-400 animate-pulse delay-300 text-lg">★</div>
            <div className="absolute bottom-6 right-8 text-purple-400 animate-pulse delay-500 text-sm">✦</div>

            {/* Spiritual energy particles */}
            <div className="absolute top-1/4 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-3 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-1/4 left-3 w-0.5 h-0.5 bg-blue-400 rounded-full animate-ping delay-500"></div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}