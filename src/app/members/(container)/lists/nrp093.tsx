"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Add custom styles for the IBM terminal effect
const terminalStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }
  
  .bg-gradient-radial {
    background: radial-gradient(circle at center, var(--tw-gradient-stops));
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = terminalStyles;
  document.head.appendChild(styleSheet);
}

const data = {
  name: "Mochammad Atha Tajuddin",
  nrp: "5027241093",
  image: "093.jpg",
  funfact: "Sama orang2 yang gak kenal dipanggil bapak-bapak🤯",
  hobby: "Gym & Baca buku motivasi",
  origin: "Gresik",
};

export default function NRP093() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#140c2c]/90 backdrop-blur-lg overflow-hidden group hover:border-green-400/50 transition-all duration-300"
        onClick={() => setOpen(true)}
      >
        <HackerBackground />
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden ring-2 ring-green-400/20 group-hover:ring-green-400/40 transition-all duration-300">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 relative">
          <h4 className="text-xl font-nexa font-bold text-green-100 group-hover:text-green-300 transition-colors duration-300">{data.name}</h4>
          <h6 className="font-nexa text-green-200/80 group-hover:text-green-400 transition-colors duration-300">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-green-600/10 via-60% to-green-500/20 rounded-xl pointer-events-none" />
        
        {/* Additional cyber effects */}
        <div className="absolute top-2 right-2 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-2 left-2 z-10 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
          <div className="text-xs font-mono text-green-400">{'>'} ONLINE</div>
        </div>
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
  const [terminalText, setTerminalText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const terminalSequence = [
    "> hello all",
    "",
    "> system.initialize()",
    "> loading profile...",
    "> accessing database...",
    "> profile found: NRP093",
    "",
    "> Hello! This is me,",
    "> Mochammad Atha Tajuddin",
    "> Student ID: 502724093",
    "> From: Gresik",
    "> Hobby: Gym & Baca buku motivasi", 
    "> Fun fact: Sama orang2 yang gak kenal dipanggil bapak-bapak🤯",
    "> Connect with me on social media:",
    "> Instagram: @atoktajuddin",
    "",
    "> profile.display() complete",
    "> system ready"
  ];

  useEffect(() => {
    if (!open) {
      setTerminalText("");
      setCurrentStep(0);
      setShowProfile(false);
      setIsTyping(false);
      return;
    }

    const typeText = async () => {
      setIsTyping(true);
      setTerminalText("");
      
      // Type each line in sequence
      for (let i = 0; i < terminalSequence.length; i++) {
        const line = terminalSequence[i];
        
        // Clear screen effect after "hello all"
        if (i === 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          setTerminalText("");
          continue;
        }
        
        // Type character by character
        for (let j = 0; j <= line.length; j++) {
          const currentText = terminalSequence.slice(0, i).join('\n') + '\n' + line.slice(0, j);
          setTerminalText(currentText);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        // Add line break
        setTerminalText(prev => prev + '\n');
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      setIsTyping(false);
      setTimeout(() => setShowProfile(true), 500);
    };

    typeText();
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-4xl max-h-[95vh] bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl overflow-hidden focus:outline-none border-4 border-gray-700 relative">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            {/* CRT Monitor Frame */}
            <div className="bg-gradient-to-b from-gray-600 to-gray-800 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-inner"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-inner"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-inner"></div>
                </div>
                <div className="text-gray-300 text-sm font-mono">Terminal</div>
                <button 
                  onClick={() => onOpenChange(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* CRT Screen */}
            <div className="relative bg-black min-h-[500px] overflow-hidden">
              {/* Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(0, 255, 65, 0.1) 2px,
                      rgba(0, 255, 65, 0.1) 4px
                    )`
                  }}
                />
              </div>

              {/* CRT Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-green-500/10 via-transparent to-black/50 pointer-events-none"></div>

              <div className="p-8 relative z-10">
                {/* Terminal Interface */}
                <div className="font-mono text-green-400 text-sm leading-relaxed">
                  <div className="mb-4">
                    <span className="text-green-300">Operating System Started</span>
                    <br />
                    <span className="text-green-500">Boot sequence initiated...</span>
                  </div>
                  
                  {/* Terminal Text */}
                  <div className="min-h-[300px] whitespace-pre-wrap">
                    {terminalText}
                    {isTyping && (
                      <span className="animate-pulse text-green-300">█</span>
                    )}
                  </div>

                  {/* Profile Display */}
                  {showProfile && (
                    <div className="mt-8 border-2 border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm animate-fade-in">
                      <div className="flex gap-6">
                        <div className="w-32 h-40 bg-green-500/10 rounded border border-green-500/30 overflow-hidden shrink-0">
                          <Image
                            src={`/images/members/${data.image}`}
                            alt={data.name}
                            width={128}
                            height={160}
                            className="object-cover w-full h-full filter contrast-125 brightness-90"
                            style={{ filter: 'sepia(100%) hue-rotate(60deg) saturate(200%) brightness(0.8)' }}
                          />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="text-green-300 text-lg font-bold">
                            {data.name}
                          </div>
                          <div className="space-y-2 text-sm">
                            <div><span className="text-green-500">ID:</span> {data.nrp}</div>
                            <div><span className="text-green-500">Origin:</span> {data.origin}</div>
                            <div><span className="text-green-500">Hobby:</span> {data.hobby}</div>
                            <div><span className="text-green-500">Fun Fact:</span> {data.funfact}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CRT Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none transform -skew-y-12 translate-y-1/2"></div>
            </div>

            {/* Bottom Frame */}
            <div className="bg-gradient-to-t from-gray-800 to-gray-700 p-3 rounded-b-3xl">
              <div className="flex justify-center">
                <div className="w-16 h-2 bg-gray-600 rounded-full shadow-inner"></div>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Hacker-style animated background component
function HackerBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Hexadecimal characters and binary
    const chars = '0123456789ABCDEFabcdef01';
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to store the y position of each column
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    const draw = () => {
      // Create fading effect
      ctx.fillStyle = 'rgba(20, 12, 44, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'center';

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // x position
        const x = i * fontSize + fontSize / 2;
        
        // Draw character
        ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.8 + 0.2})`;
        ctx.fillText(char, x, drops[i]);

        // Add some glitch effect occasionally
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#ff0040';
          ctx.fillText(char, x, drops[i]);
        }

        // Reset drop to top when it reaches bottom
        if (drops[i] > canvas.height) {
          drops[i] = Math.random() * -100;
        }
        
        // Move drop down
        drops[i] += Math.random() * 15 + 5;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full rounded-xl opacity-60"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
