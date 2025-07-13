"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useRef, useLayoutEffect, useState as useStateReact } from "react";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const data = {
  name: "Yuan B. Albyan",
  nrp: "5027241027",
  image: "027.jpg",
  funfact: "males ngoding, makanya pengen masuk mesin awalnya",
  hobby: "nafas",
  origin: "Tangerang",
};

const backgroundMain = "/images/027bg.jpeg";
const backgroundLeft = "/images/027l.png";
const backgroundRight = "/images/027r.png";

export default function NRP027() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group relative cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent bg-[#140c2c]/80 backdrop-blur-lg transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="absolute inset-0 bg-black/50 z-[5] pointer-events-none" />

        <div className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-transparent before:rounded-xl group-hover:before:opacity-50 before:opacity-0 before:transition-opacity before:duration-500" />

        <div className="absolute -inset-[50%] z-20 pointer-events-none overflow-hidden">
          <div className="absolute w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-45 opacity-0 group-hover:animate-sweep-glow" />
        </div>

        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full -rotate-90 scale-[1.26]"
          />
        </div>

        <div className="mt-5 z-10">
          <h4
            className="text-xl font-nexa font-bold text-white fade-in"
            style={{ animationDelay: '200ms' }}
          >
            {data.name}
          </h4>
          <h6
            className="font-nexa text-white/80 fade-in"
            style={{ animationDelay: '400ms' }}
          >
            {data.nrp}
          </h6>
        </div>

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />

      {/* Global keyframes and fade-in styles */}
      <style jsx global>{`
        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
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
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalX, setModalX] = useStateReact(0);

  useLayoutEffect(() => {
    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      setModalX(rect.left);
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-white/20 z-40" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <img
            src={backgroundLeft}
            alt="left"
            className="absolute top-1/2 -translate-y-1/2 z-40 w-14 pointer-events-none"
            style={{
              left: `15%`,
              animation: 'floatUpDown 3s ease-in-out infinite'
            }}
          />
          <img
            src={backgroundRight}
            alt="right"
            className="absolute top-1/2 -translate-y-1/2 z-40 w-16 md:w-20 lg:w-24 pointer-events-none"
            style={{
              right: `12%`,
              animation: 'floatUpDown 3s ease-in-out infinite',
              animationDirection: 'reverse'
            }}
          />

          <Dialog.Content
            ref={modalRef}
            className={`relative w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 text-white ${pixelFont.className}`}
            style={{
              backgroundImage: `url(${backgroundMain})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl -z-10" />

            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover -rotate-90"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />
            </div>

            <div className="bg-black/70 rounded-lg p-4 space-y-3">
              <h2
                className="text-xl font-bold fade-in"
                style={{ animationDelay: '200ms' }}
              >
                {data.name}
              </h2>
              <p
                className="text-sm fade-in"
                style={{ animationDelay: '400ms' }}
              >
                {data.nrp}
              </p>
              <div className="space-y-2 text-sm">
                <p
                  className="fade-in"
                  style={{ animationDelay: '600ms' }}
                >
                  <strong>Asal:</strong> {data.origin}
                </p>
                <p
                  className="fade-in"
                  style={{ animationDelay: '800ms' }}
                >
                  <strong>Hobi:</strong> {data.hobby}
                </p>
                <p
                  className="fade-in"
                  style={{ animationDelay: '1000ms' }}
                >
                  <strong>Funfact:</strong> {data.funfact}
                </p>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
