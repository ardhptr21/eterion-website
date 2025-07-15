"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Shinta Alya Ramadani",
  nrp: "5027241016",
  image: "016.jpg",
  funfact: "Suka ngantuk kalau kena angin",
  hobby: "Jalan - jalan sambil kulineran",
  origin: "Kediri",
  instagram: "shi.ntaar_",
  instagramLink: "https://www.instagram.com/shi.ntaar_/",
};

export default function NRP016() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-pink-300 relative bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-lg 
                   transition-all duration-300 ease-in-out 
                   hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 text-gray-800 text-center">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% to-pink-200/30 rounded-xl pointer-events-none" />
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
  const snowflakeCount = 50;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            key={open.toString()}
            className="w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none relative dialog-content p-10"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-20">
              {[...Array(snowflakeCount)].map((_, i) => {
                const size = 3 + Math.random() * 5;
                const animationDuration = 8 + Math.random() * 10;
                const animationDelay = `-${Math.random() * 10}s`;
                const initialOpacity = 0.8 + Math.random() * 0.2;
                const initialLeft = Math.random() * 100;
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
                      animationDelay: animationDelay,
                    }}
                  />
                );
              })}
            </div>

            <div className="relative z-10">
              <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-2 border-pink-300/50">
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="animate-item" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-3xl font-bold font-nexa text-gray-800 mb-1">{data.name}</h2>
                <p className="text-lg font-nexa text-gray-600">{data.nrp}</p>
              </div>

              <hr className="my-6 border-t border-gray-400/50 animate-item" style={{ animationDelay: '0.2s' }} />

              <div className="space-y-2 text-gray-800 font-nexa text-base animate-item" style={{ animationDelay: '0.3s' }}>
                <p><strong>Asal:</strong> {data.origin}</p>
                <p><strong>Hobi:</strong> {data.hobby}</p>
                <p><strong>Funfact:</strong> {data.funfact}</p>
                {}
                <p>
                  <strong>Instagram:</strong>
                  <a
                    href={data.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-gray-700 hover:text-pink-600 hover:underline transition-colors"
                  >
                    @{data.instagram}
                  </a>
                </p>
              </div>

              <div className="mt-6 flex justify-center animate-item" style={{ animationDelay: '0.4s' }}>
                <Image
                  src="https://media.tenor.com/ftqs42Yna-oAAAAj/mochi-mochi-hello-white-mochi-mochi.gif"
                  alt="Mochi gif"
                  width={200}
                  height={200}
                  unoptimized={true}
                  className="w-1/2 h-auto rounded-lg mx-auto"
                />
              </div>
            </div>

            <style jsx>{`
              .dialog-content {
                opacity: 0;
                animation: fadeInDialog 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }

              .animate-item {
                opacity: 0;
                animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }
              
              .snowflake {
                position: absolute;
                background-color: white;
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
                  top: 110%;
                  transform: translateX(-15px);
                }
              }

              @keyframes fadeInDialog {
                from {
                  opacity: 0;
                  transform: scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}