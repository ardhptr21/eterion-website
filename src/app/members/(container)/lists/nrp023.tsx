"use client"

import Noise from "@/components/effects/Noise"
import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { useState, useEffect } from "react"
import { FaLinkedin, FaInstagram } from "react-icons/fa"

const zodiacCursorStyle = `
  .zodiac-cursor-trail {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    width: 12px; /* Increased size */
    height: 12px; /* Increased size */
    border-radius: 50%;
    background: radial-gradient(circle, #00ffff, #4338ca);
    box-shadow: 0 0 8px #00ffff, 0 0 15px #4338ca; /* Added glow */
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
    animation: border-glow 2s infinite alternate; /* Make it continuous */
  }
`

const data = {
  name: "Muhammad Fatihul Qolbi Ash Shiddiqi",
  nrp: "5027241023",
  image: "023.jpg",
  funfact: "Sering Masuk BK waktu SMP",
  hobby: "By One Catur",
  origin: "Lumajang",
}

interface CursorTrail {
  id: number
  x: number
  y: number
}

export default function NRP023() {
  const [open, setOpen] = useState(false)
  const [zanpakutoCursor, setZanpakutoCursor] = useState(false)
  const [cursorTrails, setCursorTrails] = useState<CursorTrail[]>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const trail: CursorTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      }

      setCursorTrails((prev) => [...prev, trail])

      setTimeout(() => {
        setCursorTrails((prev) => prev.filter((t) => t.id !== trail.id))
      }, 1000)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: zodiacCursorStyle }} />
      {/* Zodiac Cursor Trails */}
      {cursorTrails.map((trail: CursorTrail) => (
        <div
          key={trail.id}
          className="zodiac-cursor-trail"
          style={{
            left: trail.x - 6, // Adjust for larger size
            top: trail.y - 6, // Adjust for larger size
          }}
        />
      ))}
      <div
        className={`cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-cyan-400/60 relative bg-slate-900/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50 hover:shadow-2xl group ${zanpakutoCursor ? "zanpakuto-cursor" : ""} always-glowing-border`}
        onClick={() => {
          setOpen(true)
          setZanpakutoCursor(true)
          setTimeout(() => {
            setZanpakutoCursor(false)
          }, 3000)
        }}
      >
        <Noise />

        {/* Zodiac constellation effects */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 left-12 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-6 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-12 right-4 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Spiritual energy top accent */}
        <div className="absolute top-2 left-2 text-cyan-400 animate-pulse text-sm">★</div>
        <div className="absolute top-3 right-3 text-purple-400 animate-pulse delay-200 text-xs">✦</div>

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

        {/* Spiritual energy background gradient */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-cyan-500/20 rounded-xl pointer-events-none animate-gradient-shift" />

        {/* Spiritual energy border glow */}
        <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-xl animate-border-glow shadow-inner shadow-cyan-500/20" />

        {/* Bottom zodiac accent */}
        <div className="absolute bottom-2 left-2 text-purple-400 animate-pulse delay-400 text-xs">✦</div>
        <div className="absolute bottom-3 right-2 text-cyan-400 animate-pulse delay-500 text-sm">★</div>
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

function MemberDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
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
  )
}
