"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
// import { Libre_Baskerville } from 'next/font/google';
import { useEffect, useRef } from "react";

// const libreBaskerville = Libre_Baskerville({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-libre',
// });

const data = {
  name: "Ahmad Idza Anafin",
  nrp: "5027241017",
  image: "017.jpg",
  funfact: "ga pernah kenyang",
  hobby: "apa aja ayo",
  origin: "Semarang nyel",
};

 function RengginangBurst({ onEnd }: { onEnd?: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onEnd?.();
    }, 600); // sama dengan durasi animasi

    return () => clearTimeout(timeout);
  }, [onEnd]);

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (360 / 8) * i;
        const x = Math.cos((angle * Math.PI) / 180) * 100;
        const y = Math.sin((angle * Math.PI) / 180) * 100;
        return (
          <Image
            key={i}
            src="/images/rengginang.svg"
            alt="rengginang"
            width={40}
            height={40}
            className="absolute left-1/2 top-1/2 animate-rengginang-burst"
            style={{
              transform: `translate(-50%, -50%) translate(${x}%, ${y}%) rotate(${angle}deg)`,
              animationDelay: `${i * 4}s`,
            }}
          />
        );
      })}
    </div>
  );
}

// export default function NRP017() {
//   const [open, setOpen] = useState(false);
//   const [burst, setBurst] = useState(false);


//   return (
//     <>
      

//       <div
//         className="cursor-pointer w-full shrink-0 p-3 rounded-xl border-2 border-[#FFCE00] relative bg-[linear-gradient(180deg,_rgba(194,23,23,1)_65%,_rgba(255,255,255,1)_95%)] backdrop-blur-lg"
//         onClick={() => setOpen(true)}
//         onMouseEnter={() => setBurst(true)}
//       >       
//         <div className="w-full h-[40%] z-10 relative overflow-hidden"
//           style={{
//           WebkitClipPath: "ellipse(45% 45% at 50% 45%)",
//           clipPath: "ellipse(45% 45% at 50% 45%)",
//           backgroundColor: "white",
//         }}
//         >
//           <Image
//             src={`/images/members/${data.image}`}
//             alt={data.name}
//             fill
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <div className="mt-3 z-10 justify-right flex flex-col items-end text-[#FFCE00]">
//           <h2 className={`text-2xl font-extrabold scale-y-180`}>{data.name}</h2>
//           <h6 className={`text-md font-semibold scale-y-110`}>{data.nrp}</h6>
//           <Image
//             src="/images/logo-halal.svg"
//             alt="Logo Halal"
//             width={30}
//             height={30}  
//             className="w-[20%]"          
//           />                 
//         </div>
//         <div className="-mx-3">                
//           <Image
//             src="/images/biscuit.svg"
//             alt="biskuit"
//             width={100}
//             height={70}
//             className="overflow-hidden lg:xl:mt-0 lg:xl:mb-0 -mt-[75%] mb-[58%] rounded-b-[12px] w-full lg:xl:absolute lg:xl:bottom-0 left-0"
//           /> 
//         </div>
        
        
//         <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
//               {burst && (
//         <RengginangBurst onEnd={() => setBurst(false)} />
//       )} 
//       </div>

//       <MemberDialog open={open} onOpenChange={setOpen} />
//     </>
//   );
// }

export default function NRP017() {
  const [open, setOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; x: number; scale: number }[]
  >([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const idCounter = useRef(0);

  useEffect(() => {
    if (hovering) {
      intervalRef.current = setInterval(() => {
        const randomX = Math.random() * 100; // 0% to 100%
        const randomScale = 0.5 + Math.random() * 1.0; // 0.5x to 1.5x
        setParticles((prev) => [
          ...prev,
          {
            id: idCounter.current++,
            x: randomX,
            scale: randomScale,
          },
        ]);
      }, 300);
    } else {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovering]);

  // auto cleanup
  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles((prev) => prev.slice(-30));
    }, 1000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-3 rounded-xl border-2 border-[#FFCE00] relative bg-[linear-gradient(180deg,_rgba(194,23,23,1)_65%,_rgba(255,255,255,1)_95%)] backdrop-blur-lg overflow-hidden"
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Foto oval */}
        <div
          className="w-full h-[40%] z-10 relative overflow-hidden"
          style={{
            WebkitClipPath: "ellipse(45% 45% at 50% 45%)",
            clipPath: "ellipse(45% 45% at 50% 45%)",
            backgroundColor: "white",
          }}
        >
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Nama dan NRP */}
        <div className="mt-3 z-10 justify-right flex flex-col items-end text-[#FFCE00]">
          <h2 className="text-2xl font-extrabold scale-y-180">{data.name}</h2>
          <h6 className="text-md font-semibold scale-y-110">{data.nrp}</h6>
          <Image
            src="/images/logo-halal.svg"
            alt="Logo Halal"
            width={30}
            height={30}
            className="w-[20%]"
          />
        </div>

        {/* Biskuit utama */}
        <div className="-mx-3">
          <Image
            src="/images/biscuit.svg"
            alt="biskuit"
            width={100}
            height={70}
            className="overflow-hidden lg:xl:mt-0 lg:xl:mb-0 -mt-[75%] mb-[58%] rounded-b-[12px] w-full lg:xl:absolute lg:xl:bottom-0 left-0"
          />
        </div>

        {/* 🔥 SEMBURAN */}
        {particles.map((p) => (
          <Image
            key={p.id}
            src="/images/rengginang.svg"
            alt="rengginang"
            width={80}
            height={80}
            className="absolute bottom-0 opacity-80 pointer-events-none"
            style={{
              left: `${p.x}%`,
              transform: `scale(${p.scale})`,
              animation: `rise 2s ease-out forwards`,
            }}
          />
        ))}

        {/* 👇 Keyframes langsung */}
        <style jsx>{`
          @keyframes rise {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(-200px) scale(1.8);
              opacity: 0;
            }
          }
        `}</style>
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
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!open || !data?.image) return;

  const timeout = setTimeout(() => {
    const cover = coverRef.current;
    if (!cover) return;

    const numPieces = 30;
    const size = cover.offsetWidth || 300;

    cover.innerHTML = "";

    for (let i = 0; i < numPieces; i++) {
      const piece = document.createElement("div");

      const r = Math.floor(Math.random() * 100) + 70;
      piece.style.width = `${r}px`;
      piece.style.height = `${r}px`;
      piece.style.borderRadius = "9999px";

      const x = Math.floor(Math.random() * (size - r));
      const y = Math.floor(Math.random() * (size - r));
      piece.style.left = `${x}px`;
      piece.style.top = `${y}px`;

      piece.style.backgroundImage = `url('/images/rengginang.svg')`;
      piece.style.backgroundSize = "cover";
      piece.style.backgroundPosition = "center";
      piece.style.opacity = "0.85";

      piece.className =
        "absolute bg-transparent z-50 cursor-grab";

      // drag
      let offsetX = 0;
      let offsetY = 0;

      const onMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        offsetX = e.clientX - piece.offsetLeft;
        offsetY = e.clientY - piece.offsetTop;

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };

      const onMouseMove = (e: MouseEvent) => {
        piece.style.left = `${e.clientX - offsetX}px`;
        piece.style.top = `${e.clientY - offsetY}px`;
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      piece.addEventListener("mousedown", onMouseDown);
      cover.appendChild(piece);
    }
  }, 50);

  return () => clearTimeout(timeout);
}, [open, data.image]);


  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-[#847B54] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
               <div
                ref={coverRef}
                className="z-50 rounded-full pointer-events-auto"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-white/70">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base">
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
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
