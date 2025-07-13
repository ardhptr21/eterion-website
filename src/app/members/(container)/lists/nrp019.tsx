"use client";

import { useState, useMemo } from "react";

const data = {
  name: "Syifa Nurul Alfiah",
  nrp: "5027241019",
  image: "019.jpg",
  funfact: "suka ninggalin kunci kos aka ceroboh",
  hobby: "Menjelajah parfum",
  origin: "Jakarta",
};

function AnimatedBackground() {
  const bubbles = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 10) % 90}%`,
      size: 20 + (i * 7) % 25,
      delay: i * 0.5
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 animate-pulse"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300/60 via-purple-300/60 to-pink-300/60 animate-bounce"></div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/30 to-purple-400/30"
        style={{
          animation: 'slideUp 4s ease-in-out infinite alternate'
        }}
      ></div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-tl from-pink-300/40 via-purple-300/40 to-blue-300/40"
        style={{
          animation: 'slideUp 6s ease-in-out infinite alternate-reverse'
        }}
      ></div>
      
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bg-white/20 rounded-full"
          style={{
            left: bubble.left,
            animationDelay: `${bubble.delay}s`,
            animation: 'floatBubble 8s ease-in-out infinite',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function NRP019() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-20px) translateX(20px);
          }
        }
        
        @keyframes floatBubble {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }
      `}</style>
      
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-white/30 relative overflow-hidden backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        onClick={() => setOpen(true)}
      >
        <AnimatedBackground />
        
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <img
            src={`/images/members/${data.image}`}
            alt={data.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 relative">
          <h4 className="text-xl font-nexa font-bold text-white drop-shadow-lg">{data.name}</h4>
          <h6 className="font-nexa text-white/90 drop-shadow-md">{data.nrp}</h6>
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
  const modalBubbles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${(i * 13 + 5) % 95}%`,
      size: 15 + (i * 5) % 20,
      delay: i * 0.7
    }));
  }, []);

  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="w-full max-w-lg max-h-[95vh] bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 relative z-10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 animate-pulse"></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/60 via-purple-300/60 to-pink-300/60 animate-bounce"></div>
          
          <div 
            className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/30 to-purple-400/30"
            style={{
              animation: 'slideUp 4s ease-in-out infinite alternate'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 bg-gradient-to-tl from-pink-300/40 via-purple-300/40 to-blue-300/40"
            style={{
              animation: 'slideUp 6s ease-in-out infinite alternate-reverse'
            }}
          ></div>
          
          {modalBubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute bg-white/20 rounded-full"
              style={{
                left: bubble.left,
                animationDelay: `${bubble.delay}s`,
                animation: 'floatBubble 10s ease-in-out infinite',
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 bg-black/20 backdrop-blur-sm rounded-2xl p-8">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold z-20"
          >
            ×
          </button>

          <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
            <img
              src={`/images/members/${data.image}`}
              alt={data.name}
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-3xl font-bold font-nexa text-white mb-1 drop-shadow-lg">{data.name}</h2>
          <p className="text-lg font-nexa text-white/70 drop-shadow-md">{data.nrp}</p>

          <hr className="my-6 border-t border-white/20" />

          <div className="space-y-2 text-white font-nexa text-base drop-shadow-md">
            <p>
              <strong>Asal:</strong> {data.origin}
            </p>
            <p>
              <strong>Hobi:</strong> {data.hobby}
            </p>
            <p>
              <strong>Funfact:</strong> {data.funfact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}