"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";

const data = {
  name: "Mohammad Abyan Ranuaji",
  nrp: "5027241106",
  image: "106.jpg",
  funfact: "Top Global Badang",
  hobby: "Roll atas",
  origin: "Bandung",
};

export default function NRP106() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [cardBounds, setCardBounds] = useState<DOMRect | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      if (cardRef.current) {
        setCardBounds(cardRef.current.getBoundingClientRect());
        setOpen(true);
      }
    } else {
      setOpen(false);
      setTimeout(() => setCardBounds(null), 500);
    }
  };

  const CornerOrnament = ({ position }: { position: string }) => (
    <div
      className={`absolute ${position} w-6 h-6 opacity-60 transition-all duration-300 group-hover:opacity-100`}
    >
      <div
        className={`w-full h-full border-sky-300/70 group-hover:border-sky-300`}
        style={{
          borderTop: position.includes("top") ? "2px solid" : "none",
          borderBottom: position.includes("bottom") ? "2px solid" : "none",
          borderLeft: position.includes("left") ? "2px solid" : "none",
          borderRight: position.includes("right") ? "2px solid" : "none",
        }}
      />
    </div>
  );

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <>
      <div
        ref={cardRef}
        style={{
          opacity: open ? 0 : 1,
          backgroundSize: "200% 200%",
        }}
        className="p-[2px] bg-gradient-to-br from-sky-400 via-purple-500 to-amber-400 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-purple-500/40 animate-shimmer"
        onClick={() => handleOpenChange(true)}
      >
        <div className="group cursor-pointer w-full h-full p-8 rounded-[14px] relative bg-[#251B4B] backdrop-blur-lg transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <AnimatedStarfield />
            <Noise />
          </div>

          <CornerOrnament position="top-4 left-4" />
          <CornerOrnament position="top-4 right-4" />
          <CornerOrnament position="bottom-4 left-4" />
          <CornerOrnament position="bottom-4 right-4" />

          <div className="shine-container aspect-[4/5] bg-gray-700 rounded-xl z-10 relative overflow-hidden before:absolute before:content-[''] before:inset-0 before:w-1/2 before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-5 z-10 p-4 pt-5 rounded-lg bg-black/20 shadow-inner shadow-black/40 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
            <h4 className="text-xl font-nexa font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
              {data.name}
            </h4>
            <h6 className="font-nexa text-purple-300/90">{data.nrp}</h6>
          </div>
        </div>
      </div>

      <MemberDialog open={open} onOpenChange={handleOpenChange} cardBounds={cardBounds} />
    </>
  );
}

function MemberDialog({
  open,
  onOpenChange,
  cardBounds,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cardBounds: DOMRect | null;
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [open]);

  if (!cardBounds) return null;

  const Corner = ({ position }: { position: string }) => (
    <div className={`absolute ${position} w-8 h-8 border-2 border-sky-400/80`}></div>
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-md transition-opacity duration-500"
          style={{ opacity: isAnimating ? 1 : 0 }}
        />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            style={
              !isAnimating
                ? {
                    top: cardBounds.top,
                    left: cardBounds.left,
                    width: cardBounds.width,
                    height: cardBounds.height,
                  }
                : {}
            }
            className={`fixed shadow-2xl focus:outline-none transition-all duration-500 ease-in-out overflow-hidden ${
              isAnimating
                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[95vh] rounded-2xl bg-[#251B4B]/80"
                : "rounded-[14px]"
            }`}
          >
            <div className="absolute inset-0 -z-10">
              <AnimatedStarfield />
              <AuroraBorealis />
              <Noise />
            </div>

            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 delay-200 ${
                isAnimating ? "opacity-100" : "opacity-0"
              }`}
            >
              <Corner position="top-3 left-3 border-t-2 border-l-2 border-b-0 border-r-0 rounded-tl-xl" />
              <Corner position="top-3 right-3 border-t-2 border-r-2 border-b-0 border-l-0 rounded-tr-xl" />
              <Corner position="bottom-3 left-3 border-b-2 border-l-2 border-t-0 border-r-0 rounded-bl-xl" />
              <Corner position="bottom-3 right-3 border-b-2 border-r-2 border-t-0 border-l-0 rounded-br-xl" />
            </div>

            <div
              className={`h-full w-full flex flex-col transition-opacity duration-300 delay-200 ${
                isAnimating ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex-grow overflow-y-auto p-10 custom-scrollbar">
                <Dialog.Title className="sr-only">{data.name}</Dialog.Title>
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative ring-2 ring-offset-2 ring-offset-[#251B4B] ring-purple-500/50">
                  <Image
                    src={`/images/members/${data.image}`}
                    alt={data.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-4xl font-bold font-nexa text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-400 mb-1">
                  {data.name}
                </h2>
                <p className="text-lg font-nexa text-white/80">{data.nrp}</p>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent my-6" />
                <h3 className="font-nexa text-lg font-bold text-sky-400 mb-4">Biodata</h3>
                <div className="font-nexa">
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <strong className="text-base text-white/70">Asal</strong>
                    <p className="text-lg font-semibold text-white text-right">{data.origin}</p>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <strong className="text-base text-white/70">Hobi</strong>
                    <p className="text-lg font-semibold text-white text-right">{data.hobby}</p>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <strong className="text-base text-white/70">Funfact</strong>
                    <p className="text-lg font-semibold text-white text-right">{data.funfact}</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 px-10 pb-10 pt-4">
                <DecorativeDivider className="w-full h-auto text-sky-400/50" />
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function AuroraBorealis() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-aurora-1"></div>
      <div className="absolute w-[400px] h-[400px] bg-sky-500/30 rounded-full blur-3xl animate-aurora-2"></div>
    </div>
  );
}

function DecorativeDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      viewBox="0 0 380 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 10H150" stroke="currentColor" strokeWidth="2" />
      <path d="M380 10H230" stroke="currentColor" strokeWidth="2" />
      <path
        d="M190 2.92893L195 7.92893L200 12.9289L195 17.9289L190 12.9289L185 7.92893L190 2.92893Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M190 0L192.5 5L195 10L192.5 15L190 20L187.5 15L185 10L187.5 5L190 0Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
}

function AnimatedStarfield() {
  const starLayers = useMemo(() => {
    const generateStars = (count: number) => {
      let stars = "";
      for (let i = 0; i < count; i++) {
        stars += `${Math.random() * 100}vw ${Math.random() * 200}vh #FFF,`;
      }
      return stars.slice(0, -1);
    };
    return [
      { size: "1px", shadow: generateStars(400), duration: "100s" },
      { size: "2px", shadow: generateStars(150), duration: "150s" },
      { size: "3px", shadow: generateStars(30), duration: "200s" },
    ];
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-100vh);
          }
        }
        .anim-star {
          animation: animStar linear infinite;
        }
        @keyframes aurora-1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(100px, 80px) scale(1.2);
          }
          50% {
            transform: translate(50px, 150px) scale(0.9);
          }
          75% {
            transform: translate(-80px, 100px) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-aurora-1 {
          animation: aurora-1 20s infinite ease-in-out;
        }
        @keyframes aurora-2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-120px, -60px) scale(0.8);
          }
          50% {
            transform: translate(-40px, -160px) scale(1.1);
          }
          75% {
            transform: translate(90px, -80px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-aurora-2 {
          animation: aurora-2 24s infinite ease-in-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.6);
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-shimmer {
          animation: shimmer 5s ease infinite;
        }
      `}</style>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {starLayers.map((layer, i) => (
          <div
            key={i}
            className="absolute top-0 left-0 w-full h-full anim-star"
            style={{
              width: layer.size,
              height: layer.size,
              boxShadow: layer.shadow,
              animationDuration: layer.duration,
            }}
          />
        ))}
      </div>
    </>
  );
}
