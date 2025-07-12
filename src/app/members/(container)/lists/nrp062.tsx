"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { Diplomata, UnifrakturCook } from "next/font/google";

const diplomata = Diplomata({
  subsets: ["latin"],
  weight: "400",
});

const unifraktur = UnifrakturCook({
  subsets: ["latin"],
  weight: "700",
});

const data = {
  name: "Angga Firmansyah",
  nrp: "5027241062",
  image: "062.jpg",
  funfact: "Keturunan sunda & bali (gaada jawa samsek)",
  hobby: "Jalan - jalan, kulineran, casual gaming",
  origin: "Surabaya",
};

export default function NRP062() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`group cursor-pointer w-full max-w-sm shrink-0 p-6 rounded-xl text-amber-50 relative overflow-hidden bg-[#1c1917] border border-amber-900/50 ${diplomata.className}
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10`}
        onClick={() => setOpen(true)}
      >
        <Noise className="opacity-40 -z-10" />
        
        <div className="relative z-10">
          <div className="aspect-[4/5] rounded-lg relative overflow-hidden border-2 border-amber-900 transition-colors duration-300 group-hover:border-amber-400">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="mt-6 text-center">
            <h4 className="text-2xl transition-colors duration-300 group-hover:text-amber-400">
              {data.name}
            </h4>
            <h6 className="text-sm text-amber-50/60 mt-2 transition-colors duration-300 group-hover:text-amber-50/90">
              {data.nrp}
            </h6>
          </div>
        </div>
      </div>

      <MemberDialog
        open={open}
        onOpenChange={setOpen}
        fontClassName={diplomata.className}
      />
    </>
  );
}

function MemberDialog({
  open,
  onOpenChange,
  fontClassName,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fontClassName: string;
}) {
  const infoItems = [
    { key: "asal", label: "Asal", value: data.origin },
    { key: "hobi", label: "Hobi", value: data.hobby },
    { key: "funfact", label: "Funfact", value: data.funfact },
  ];
  
  const snowflakeCount = 50;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            key={open.toString()}
            className={`w-full max-w-lg max-h-[95vh] rounded-xl text-amber-50 shadow-2xl overflow-y-auto focus:outline-none relative bg-[#1c1917] border border-amber-900/50 ${fontClassName}`}
          >
            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                {[...Array(snowflakeCount)].map((_, i) => {
                  const size = 2 + Math.random() * 4;
                  const animationDuration = 5 + Math.random() * 8;
                  const animationDelay = Math.random() * 5;
                  const initialLeft = Math.random() * 100;
                  const initialOpacity = 0.7 + Math.random() * 0.3;
                  return (
                    <div
                      key={i}
                      className="snowflake"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${initialLeft}%`,
                        opacity: initialOpacity,
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                      }}
                    />
                  );
                })}
            </div>

            <Noise className="opacity-40 -z-10"/>

            <div className="p-8 relative z-10">
              <Dialog.Title className="sr-only">{data.name}</Dialog.Title>
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden mb-6 relative border-2 border-amber-900">
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h2 className="text-2xl text-amber-400 mb-2">{data.name}</h2>
              <p className="text-sm text-amber-50/60">{data.nrp}</p>
              
              <hr className="my-6 border-t border-amber-400/20" />
              
              <div className={`space-y-4 text-2xl leading-relaxed ${unifraktur.className}`}>
                {infoItems.map((item, index) => (
                  <div
                    key={item.key}
                    className="info-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <p>
                      <strong className="text-amber-50/60 mr-2">{item.label}:</strong> {item.value}
                    </p>
                  </div>
                ))}
              </div>

              
              <div className="mt-8 flex justify-center">
                <Image
                  src="https://i.imgur.com/EJd1u.gif"
                  alt="Funny Reaction GIF"
                  width={498}
                  height={278} 
                  unoptimized={true} 
                  className="rounded-lg"
                />
              </div>

            </div>
            
            <style jsx>{`
              .snowflake {
                position: absolute;
                background-color: #fbbf24;
                border-radius: 50%;
                animation: fall linear infinite;
              }

              @keyframes fall {
                from {
                  top: -10%;
                  transform: translateX(0px);
                }
                50% {
                  transform: translateX(15px);
                }
                to {
                  top: 100%;
                  transform: translateX(-15px);
                }
              }

              .info-item {
                opacity: 0;
                animation: revealHolographic 0.7s
                  cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
              }
              @keyframes revealHolographic {
                from {
                  opacity: 0;
                  transform: scale(0.9) translateY(15px);
                }
                to {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                }
              }
            `}</style>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
