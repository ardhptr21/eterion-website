"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import Noise from "@/components/effects/Noise";
import { debounce } from "lodash-es";

const data = {
  name: "Putri Joselina Silitonga",
  nrp: "5027241116",
  image: "116.jpg",
  origin: {
    label: "Medan",
    link: "",
  },
  hobby: {
    label: "Nonton",
    link: "https://vt.tiktok.com/ZSBC45Mrm/",
  },
  funfact: {
    label: "maniak soto lamongan",
    link: "",
  },
  tiktok: {
    label: "TikTok",
    link: "https://vt.tiktok.com/ZSBXG8r3b/",
  },
  instagram: "https://www.instagram.com/ptriisltg?igsh=MWdkcnVvZjI3YTAXMA%3D%3D&utm_source=gr",
};

function SaturnPlanet({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const saturnRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!saturnRef.current) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = saturnRef.current ? saturnRef.current.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = (clientX - centerX) / rect.width;
      const offsetY = (clientY - centerY) / rect.height;

      setRotateY(offsetX * 10);
      setRotateX(-offsetY * 10);
    };

    const animate = () => {
      setRotateY(prev => (prev + 0.1) % 360);
      setRotateX(prev => (prev + 0.05) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    const currentRef = saturnRef.current;
    currentRef.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      currentRef.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={saturnRef}
      className="absolute w-32 h-32 z-20"
      style={{
        top: '5%',
        left: '5%',
        transformOrigin: 'center center',
        transform: `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(-15deg)`,
        willChange: 'transform',
      }}
    >
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #E8D5B5, #C9B18B, #A38F6F)',
          boxShadow: `
            inset 5px 5px 15px rgba(0,0,0,0.3),
            inset -5px -5px 15px rgba(255,255,255,0.1),
            0 0 25px rgba(232, 213, 181, 0.6)
          `,
        }}
      ></div>

      <div
        className="absolute w-[200%] h-[50px] top-1/2 left-1/2 opacity-90"
        style={{
          transform: 'translate(-50%, -50%) rotateX(75deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            border: '3px solid rgba(220, 210, 190, 0.6)',
            boxShadow: '0 0 20px rgba(220, 210, 190, 0.7)',
            background: 'linear-gradient(90deg, transparent 0%, rgba(220, 210, 190, 0.7) 50%, transparent 100%)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          className="absolute w-[80%] h-[80%] top-[10%] left-[10%] rounded-full"
          style={{
            border: '2px solid rgba(240, 230, 210, 0.7)',
            boxShadow: '0 0 15px rgba(240, 230, 210, 0.8)',
            background: 'linear-gradient(90deg, transparent 0%, rgba(240, 230, 210, 0.8) 50%, transparent 100%)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%] rounded-full"
          style={{
            border: '1px solid rgba(200, 190, 170, 0.4)',
            boxShadow: '0 0 10px rgba(200, 190, 170, 0.5)',
            background: 'linear-gradient(90deg, transparent 0%, rgba(200, 190, 170, 0.3) 50%, transparent 100%)',
            borderRadius: '50%',
          }}
        ></div>
      </div>
    </div>
  );
}

function AuroraWave({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const { x, y } = mousePosition;
  const parallaxIntensity = 0.02;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-0">
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#b9388b]/30 via-[#434d78]/30 to-transparent"
          style={{
            filter: 'blur(30px)',
            transform: `translate(${x * parallaxIntensity * 2}px, ${y * parallaxIntensity * 2}px)`,
            willChange: 'transform',
          }}
        ></div>
        
        <div
          className="absolute top-[-10%] right-0 w-3/4 h-3/4 bg-gradient-to-tl from-[#b9388b]/25 via-transparent to-[#434d78]/25"
          style={{
            filter: 'blur(30px)',
            transform: `translate(${x * parallaxIntensity * 1.5}px, ${y * parallaxIntensity * 1.5}px)`,
            willChange: 'transform',
          }}
        ></div>
        
        <div
          className="absolute inset-0 bg-gradient-radial from-[#b9388b]/15 via-transparent to-[#434d78]/10"
          style={{
            filter: 'blur(20px)',
            transform: `translate(${x * parallaxIntensity}px, ${y * parallaxIntensity}px)`,
            willChange: 'transform',
          }}
        ></div>
      </div>

      {[...Array(3)].map((_, i) => (
        <div
          key={`comet-${i}`}
          className="absolute w-[50px] h-[2px] bg-gradient-to-r from-transparent via-[#fae09a] to-[#fae09a] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(${x * parallaxIntensity * 0.3}px, ${y * parallaxIntensity * 0.3}px)`,
            animation: `comet-streak ${3 + Math.random() * 3}s linear ${Math.random() * 10}s infinite`,
            willChange: 'transform',
          }}
        ></div>
      ))}

      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => {
          const size = 1 + Math.random() * 3;
          const color = ['#b9388b', '#434d78', '#fae09a'][Math.floor(Math.random() * 3)];
          const opacity = 0.3 + Math.random() * 0.4;
          
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                opacity: opacity,
                animation: `pulse ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 5}s infinite`,
                boxShadow: `0 0 ${3 + Math.random() * 7}px ${color}`,
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

function LibraConstellation({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const { x, y } = mousePosition;
  const parallaxIntensity = 0.01;

  const stars = [
    { x: 20, y: 20, size: 3 },
    { x: 35, y: 25, size: 2.5 },
    { x: 50, y: 22, size: 2 },
    { x: 65, y: 28, size: 2.3 },
    { x: 80, y: 20, size: 3 },
    { x: 40, y: 30, size: 2 },
    { x: 60, y: 33, size: 2.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-10"
      style={{ 
        transform: `translate(${x * parallaxIntensity}px, ${y * parallaxIntensity}px)`,
        willChange: 'transform',
      }}>
      <svg className="absolute inset-0 w-full h-full opacity-70">
        <defs>
          <filter id="constellation-glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 20 20 L 35 25 L 50 22 L 65 28 L 80 20 M 35 25 L 40 30 L 60 33 L 65 28"
          stroke="#A2CAE4"
          strokeWidth="1.2"
          fill="none"
          filter="url(#constellation-glow)"
          style={{ 
            animation: `pulse 3s ease-in-out infinite`,
            willChange: 'opacity',
          }}
        />
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.x}
            cy={star.y}
            r={star.size}
            fill="#A2CAE4"
            filter="url(#constellation-glow)"
            style={{
              animation: `pulse ${1.5 + Math.random() * 1}s ease-in-out ${i * 0.2}s infinite`,
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function ParallaxStars({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const { x, y } = mousePosition;
  const parallaxIntensity = 0.008;

  const stars = useMemo(() => {
    return [...Array(120)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 3,
      speed: 1 + Math.random() * 2,
      delay: Math.random() * 5,
      isSpecial: Math.random() > 0.9,
      parallaxFactor: 0.5 + Math.random() * 0.5
    }));
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-8"
      style={{
        willChange: 'transform'
      }}
    >
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute text-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: `${star.size}px`,
            animation: `twinkle-glow ${star.speed}s ease-in-out ${star.delay}s infinite`,
            opacity: 0.7 + Math.random() * 0.3,
            willChange: 'transform, opacity',
            transform: `translate(${x * parallaxIntensity * star.parallaxFactor}px, ${y * parallaxIntensity * star.parallaxFactor}px) translateZ(0)`,
          }}
        >
          {star.isSpecial ? '✨' : '*'}
        </div>
      ))}
    </div>
  );
}

export default function NRP116() {
  const [open, setOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showStarlightBurst, setShowStarlightBurst] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = debounce((event: MouseEvent) => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      
      animationRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    }, 16);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleOpenChange = (newOpenState: boolean) => {
    setOpen(newOpenState);
    if (newOpenState) {
      setShowStarlightBurst(true);
      const timer = setTimeout(() => {
        setShowStarlightBurst(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      <div
        onClick={() => handleOpenChange(true)}
        className="cursor-pointer w-full shrink-0 p-6 rounded-xl border-2 border-transparent bg-gradient-to-br from-[#A2CAE4]/20 via-transparent to-[#7BA7D1]/20 relative bg-[#0b0c20]/80 backdrop-blur-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#A2CAE4]/40 duration-500 ease-out hover:border-[#A2CAE4]/80 group"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(162, 202, 228, 0.1) 0%, transparent 50%, rgba(123, 167, 209, 0.1) 100%)',
          borderImage: 'linear-gradient(135deg, rgba(162, 202, 228, 0.4), rgba(123, 167, 209, 0.2), rgba(162, 202, 228, 0.4)) 1',
        }}
      >
        <Noise />
        <AuroraWave mousePosition={mousePosition} />
        <LibraConstellation mousePosition={mousePosition} />
        <ParallaxStars mousePosition={mousePosition} />
        <SaturnPlanet mousePosition={mousePosition} />

        <div className="aspect-[3/4] relative z-20 group">
          <div
            className="w-full h-full rounded-xl overflow-hidden border-2 border-[#A2CAE4]/60 shadow-lg shadow-[#A2CAE4]/30 transition-all duration-500 hover:border-[#A2CAE4]/90 hover:shadow-xl hover:shadow-[#A2CAE4]/50 hover:scale-[1.02] group-hover:shadow-2xl"
            style={{
              filter: 'brightness(1.1)',
              boxShadow: '0 0 20px rgba(162, 202, 228, 0.3), inset 0 0 20px rgba(162, 202, 228, 0.1)',
            }}
          >
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </div>

        <div className="mt-8 text-center z-20 relative space-y-3">
          <h2
            className="text-2xl font-serif font-bold text-[#A2CAE4] drop-shadow-lg transition-all duration-300 group-hover:text-[#B8D4E8] group-hover:scale-105"
            style={{
              animation: 'text-shadow-pulse 2s ease-in-out infinite',
              textShadow: '0 0 15px rgba(162, 202, 228, 0.6), 0 0 30px rgba(162, 202, 228, 0.4)',
            }}
          >
            <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {data.name}
            </a>
          </h2>

          <p
            className="text-[#A2CAE4]/70 text-base font-mono mt-3 drop-shadow-md tracking-wider"
            style={{
              animation: 'text-shadow-pulse 2.5s ease-in-out infinite',
              textShadow: '0 0 10px rgba(162, 202, 228, 0.4)',
            }}
          >
            {data.nrp}
          </p>
        </div>
      </div>

      <MemberDialog open={open} onOpenChange={handleOpenChange} showStarlightBurst={showStarlightBurst} />

      <style jsx global>{`
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(162, 202, 228, 0.3); }
          50% { box-shadow: 0 0 30px rgba(162, 202, 228, 0.5), 0 0 60px rgba(162, 202, 228, 0.3); }
        }

        @keyframes comet-streak {
          0% { transform: translate(-100%, -100%) rotate(45deg) scaleX(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(200%, 200%) rotate(45deg) scaleX(1); opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) translateZ(0); opacity: 0.8; }
          50% { transform: scale(1.1) translateZ(0); opacity: 1; }
        }

        @keyframes twinkle-glow {
          0%, 100% { opacity: 0.7; transform: scale(1) translateZ(0); }
          50% { opacity: 1; transform: scale(1.2) translateZ(0); }
        }

        @keyframes text-shadow-pulse {
          0%, 100% { text-shadow: 0 0 15px rgba(162, 202, 228, 0.6), 0 0 30px rgba(162, 202, 228, 0.4); }
          50% { text-shadow: 0 0 20px rgba(162, 202, 228, 0.8), 0 0 40px rgba(162, 202, 228, 0.6); }
        }

        @keyframes starlight-burst {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(10); opacity: 0; }
        }

        .hobby-link {
          position: relative;
          display: inline-block;
          color: #fae09a;
          text-decoration: none;
        }

        .hobby-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #fae09a;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .hobby-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .hobby-link:hover {
          color: #fff;
          text-shadow: 0 0 10px #fae09a, 0 0 20px #fae09a;
        }
      `}</style>
    </>
  );
}

function MemberDialog({ open, onOpenChange, showStarlightBurst }: { open: boolean; onOpenChange: (open: boolean) => void; showStarlightBurst: boolean }) {
  const dialogContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dialogContentRef.current) {
      if (open) {
        dialogContentRef.current.classList.add('dialog-open');
        dialogContentRef.current.classList.remove('dialog-close');
      } else {
        dialogContentRef.current.classList.add('dialog-close');
        dialogContentRef.current.classList.remove('dialog-open');
      }
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            ref={dialogContentRef}
            className="w-full max-w-md max-h-[95vh] bg-[#10172A] rounded-2xl shadow-2xl shadow-[#A2CAE4]/50 overflow-y-auto p-8 relative border-2 border-transparent transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(162, 202, 228, 0.05) 0%, transparent 50%, rgba(123, 167, 209, 0.05) 100%)',
              borderImage: 'linear-gradient(135deg, rgba(162, 202, 228, 0.4), rgba(123, 167, 209, 0.3), rgba(162, 202, 228, 0.4)) 1',
            }}
          >
            {showStarlightBurst && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={`burst-${i}`}
                    className="absolute w-1 h-1 bg-[#A2CAE4] rounded-full"
                    style={{
                      animation: `starlight-burst 1s ${Math.random() * 0.5}s forwards`,
                      transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0)`,
                      opacity: 0,
                      boxShadow: '0 0 10px currentColor',
                      willChange: 'transform, opacity',
                    }}
                  ></div>
                ))}
              </div>
            )}

            <AuroraWave mousePosition={{x:0, y:0}} />
            <LibraConstellation mousePosition={{x:0, y:0}} />
            <ParallaxStars mousePosition={{x:0, y:0}} />
            <SaturnPlanet mousePosition={{x:0, y:0}} />

            <div className="relative z-10">
              <div
                className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-8 relative border-2 border-[#A2CAE4]/60 shadow-lg shadow-[#A2CAE4]/30 hover:border-[#A2CAE4]/90 hover:shadow-xl hover:shadow-[#A2CAE4]/50 transition-all duration-500 group"
                style={{
                  filter: 'brightness(1.1)',
                  boxShadow: '0 0 25px rgba(162, 202, 228, 0.4), inset 0 0 25px rgba(162, 202, 228, 0.1)',
                }}
              >
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              <div className="text-center space-y-2 mb-8">
                <h2
                  className="text-3xl font-bold font-serif text-[#A2CAE4] drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 group-hover:text-[#B8D4E8] group-hover:scale-105"
                  style={{
                    animation: 'text-shadow-pulse 2s ease-in-out infinite',
                    textShadow: '0 0 20px rgba(162, 202, 228, 0.7), 0 0 40px rgba(162, 202, 228, 0.5)',
                  }}
                >
                  <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {data.name}
                  </a>
                </h2>

                <p
                  className="text-[#A2CAE4]/60 text-base font-mono drop-shadow-md tracking-wider"
                  style={{
                    animation: 'text-shadow-pulse 2.5s ease-in-out infinite',
                    textShadow: '0 0 15px rgba(162, 202, 228, 0.5)',
                  }}
                >
                  {data.nrp}
                </p>
              </div>

              <div className="space-y-4 text-[#DCE7F7] text-lg">
                <div
                  className="flex items-center justify-between p-4 rounded-lg bg-[#A2CAE4]/5 hover:bg-[#A2CAE4]/15 transition-all duration-300 group hover:scale-105"
                  style={{
                    boxShadow: '0 0 10px rgba(162, 202, 228, 0.1)',
                    border: '1px solid rgba(162, 202, 228, 0.2)',
                  }}
                >
                  <strong className="text-[#A2CAE4] drop-shadow-md font-bold">
                    Asal:
                  </strong>
                  <span className="text-[#A2CAE4]/80 drop-shadow-sm group-hover:text-[#B8D4E8] transition-colors font-semibold">
                    {data.origin.label}
                  </span>
                </div>

                <div
                  className="flex items-center justify-between p-4 rounded-lg bg-[#A2CAE4]/5 hover:bg-[#A2CAE4]/15 transition-all duration-300 group hover:scale-105"
                  style={{
                    boxShadow: '0 0 10px rgba(162, 202, 228, 0.1)',
                    border: '1px solid rgba(162, 202, 228, 0.2)',
                  }}
                >
                  <strong className="text-[#A2CAE4] drop-shadow-md font-bold">
                    Hobi:
                  </strong>
                  <a
                    href={data.hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hobby-link font-semibold"
                  >
                    {data.hobby.label}
                  </a>
                </div>

                <div
                  className="flex items-center justify-between p-4 rounded-lg bg-[#A2CAE4]/5 hover:bg-[#A2CAE4]/15 transition-all duration-300 group hover:scale-105"
                  style={{
                    boxShadow: '0 0 10px rgba(162, 202, 228, 0.1)',
                    border: '1px solid rgba(162, 202, 228, 0.2)',
                  }}
                >
                  <strong className="text-[#A2CAE4] drop-shadow-md font-bold">
                    Funfact:
                  </strong>
                  <span className="text-[#A2CAE4]/80 drop-shadow-sm group-hover:text-[#B8D4E8] transition-colors font-semibold">
                    {data.funfact.label}
                  </span>
                </div>

                <div
                  className="mt-6 p-4 rounded-lg bg-[#A2CAE4]/5 hover:bg-[#A2CAE4]/15 transition-all duration-300 hover:scale-105"
                  style={{
                    boxShadow: '0 0 15px rgba(162, 202, 228, 0.2)',
                    border: '1px solid rgba(162, 202, 228, 0.3)',
                  }}
                >
                  <a href={data.tiktok.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div
                      className="bg-black rounded-lg p-3 relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                      style={{
                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(162, 202, 228, 0.1)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">♪</span>
                          </div>
                          <span className="text-white text-sm font-semibold">TikTok</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full" style={{ animationDelay: '0.5s' }}></div>
                          <div className="w-1 h-1 bg-white rounded-full" style={{ animationDelay: '1s' }}></div>
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg h-40 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#b9388b]/20 via-[#434d78]/15 to-[#A2CAE4]/20"></div>
                        <div className="relative z-10 text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-white/30 transition-colors">
                            <span className="text-white text-xl">▶</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-center">
                        <div
                          className="bg-[#FF0050] hover:bg-[#FF0050]/80 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                          style={{
                            boxShadow: '0 0 15px rgba(255, 0, 80, 0.4)',
                          }}
                        >
                          Watch now
                        </div>
                      </div>
                    </div>
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