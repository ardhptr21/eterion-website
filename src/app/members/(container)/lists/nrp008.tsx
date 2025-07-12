"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Paundra Pujo Darmawan",
  nrp: "5027241008",
  image: "008.jpg",
  funfact: "wong kalahan",
  hobby: "nonton series/film",
  origin: "Kediri",
};

export default function NRP008() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-slate-600 relative bg-slate-800/90 backdrop-blur-lg hover:bg-slate-700/90 transition-all duration-300 shadow-2xl"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-blue-900/20 to-slate-900/40 rounded-xl pointer-events-none" />

        <div className="aspect-[4/5] bg-gray-200 rounded-xl z-10 relative overflow-hidden shadow-inner">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 rounded-xl" />
        </div>

        <div className="mt-5 z-10 relative">
          <h4 className="text-xl font-nexa font-bold text-slate-200">
            {data.name}
          </h4>
          <h6 className="font-nexa text-slate-400">{data.nrp}</h6>
        </div>

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-slate-600/10 via-60% to-slate-500/20 rounded-xl pointer-events-none" />
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
  const infoItems = [
    { key: "asal", label: "Asal", value: data.origin },
    { key: "hobi", label: "Hobi", value: data.hobby },
    { key: "funfact", label: "Funfact", value: data.funfact },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm" />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            key={open.toString()}
            className="w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 border border-slate-700 relative 
                       bg-gradient-to-br from-slate-900 via-indigo-950 to-black"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div className="rain-container">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="rain-drop"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 0.1}s`,
                      animationDuration: `${0.5 + Math.random() * 1}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold font-nexa text-slate-200 mb-1">
              {data.name}
            </h2>
            <p className="text-lg font-nexa text-slate-400">{data.nrp}</p>
            <div className="my-8">
              <div className="space-y-5">
                {infoItems.map((item, index) => (
                  <div
                    key={item.key}
                    className="info-item"
                    style={{ animationDelay: `${index * 0.6}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <strong className="text-slate-300 text-sm uppercase tracking-wider font-light">
                          {item.label}
                        </strong>
                      </div>
                      <p className={`text-slate-200 font-medium text-right`}>
                        {item.value}
                      </p>
                    </div>
                    {index < infoItems.length - 1 && (
                      <hr className="mt-5 border-t border-blue-400/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <style jsx>{`
              .rain-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
              .rain-drop {
                position: absolute;
                width: 1px;
                height: 50px;
                background: linear-gradient(
                  to bottom,
                  transparent,
                  rgba(147, 197, 253, 0.4)
                );
                animation: fall 1.5s infinite linear;
              }
              @keyframes fall {
                from {
                  transform: translateY(-100px);
                  opacity: 1;
                }
                to {
                  transform: translateY(calc(100vh + 100px));
                  opacity: 0;
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
