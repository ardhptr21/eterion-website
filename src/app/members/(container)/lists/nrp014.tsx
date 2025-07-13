"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head"; // Add this import

const data = {
  name: "Clarissa Aydin Rahmazea",
  nrp: "5027241014",
  image: "014.jpg",
  funfact: "pernah kesetrum sampe ga napak kaki waktu kecil :D",
  hobby: "ngelukis, nonton film, baca buku",
  origin: "Lumajang",
  quote:
    "Don't chase, don't beg, don't stress, don't be desperate, just relax. When you relax it will come to you. Make your wants, want you.",
  instagram: "clarissazea",
};

const FLOWER_CURSOR_URL =
  "https://www.cursor.cc/cursor/481/481/cursor.png";

export default function NRP014() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveParticles = setInterval(() => {
      setPosition({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
      });
    }, 2000);
    return () => clearInterval(moveParticles);
  }, []);

  return (
    <>
      <Head>
        <style>{`
          body {
            cursor: url('${FLOWER_CURSOR_URL}'), auto;
          }
          .cursor-pointer, a, button {
            cursor: url('${FLOWER_CURSOR_URL}'), pointer;
          }
        `}</style>
      </Head>

      <div
        className="cursor-pointer w-full shrink-0 p-8 rounded-2xl border-2 border-amber-700/30 relative bg-gradient-to-br from-[#3a2518]/90 via-[#4a2e1e]/90 to-[#5a3a2a]/90 hover:from-[#4a2e1e]/90 hover:via-[#5a3a2a]/90 hover:to-[#6a4532]/90 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden group"
        onClick={() => setOpen(true)}
      >
        {/* Grain Effect */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0" />

        {/* Animated Particles */}
        <div
          className="absolute w-2 h-2 rounded-full bg-amber-400/30 blur-sm z-0 transition-all duration-1000"
          style={{
            top: "20%",
            left: "30%",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
        <div
          className="absolute w-3 h-3 rounded-full bg-amber-600/30 blur-sm z-0 transition-all duration-1500"
          style={{
            top: "60%",
            left: "70%",
            transform: `translate(${position.y}px, ${position.x}px)`,
          }}
        />
        <div
          className="absolute w-1 h-1 rounded-full bg-amber-300/30 blur-sm z-0 transition-all duration-2000"
          style={{
            top: "40%",
            left: "50%",
            transform: `translate(${-position.x}px, ${-position.y}px)`,
          }}
        />

        <Noise />
        <div className="aspect-[4/5] bg-white/10 rounded-xl z-10 relative overflow-hidden ring-2 ring-white/20 shadow-md group-hover:ring-amber-400/50 transition-all duration-300">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="mt-5 z-10 text-center relative">
          <h4 className="text-2xl font-bold font-nexa text-white drop-shadow-sm group-hover:text-amber-100 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-all duration-300">
            {data.name}
          </h4>
          <h6 className="font-nexa text-amber-200/70 text-sm mt-1 group-hover:text-amber-100 group-hover:drop-shadow-[0_0_4px_rgba(245,158,11,0.4)] transition-all duration-300">
            {data.nrp}
          </h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-amber-600/10 rounded-2xl pointer-events-none blur-xl group-hover:opacity-50 transition-all duration-500" />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-[#3a2518] to-[#5a3a2a] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 relative overflow-hidden">
            {/* Grain Effect for Dialog */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative ring-2 ring-amber-700/30">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-amber-200/70">{data.nrp}</p>

            {/* Instagram Link */}
            <a
              href={`https://instagram.com/${data.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-amber-300 hover:text-amber-200 transition-colors"
            >
              @{data.instagram}
            </a>

            <hr className="my-6 border-t border-amber-700/30" />

            {/* Quote Section */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-amber-900/20 rounded-lg -rotate-1 transform"></div>
              <div className="relative p-4 italic text-amber-100 text-center font-light leading-relaxed">
                &quot;{data.quote}&quot;
              </div>
            </div>

            <div className="space-y-2 text-white font-nexa text-base">
              <p>
                <strong className="text-amber-200">Asal:</strong> {data.origin}
              </p>
              <p>
                <strong className="text-amber-200">Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong className="text-amber-200">Funfact:</strong> {data.funfact}
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
