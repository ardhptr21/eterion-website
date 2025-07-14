"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect } from "react";

const data = {
  name: "Adinda Cahya Pramesti",
  nrp: "5027241117",
  image: "117.jpg",
  funfact: "Gasuka orang yang hairstylenya mullet",
  hobby: "Nonton film",
  origin: "Bekasi",
};

export default function NRP117() {
  const [open, setOpen] = useState(false);
  const [flowers, setFlowers] = useState<{ id: number; x: number; delay: number }[]>([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative overflow-hidden transition-transform hover:scale-[1.015] active:scale-[0.98]"
        onClick={() => setOpen(true)}
        style={{
          background: "linear-gradient(to bottom right, #ffe0f0, #ff69b4)",
          boxShadow: "0 0 20px rgba(255, 105, 180, 0.3)",
        }}
      >
        <Noise />

        {/* Efek bunga jatuh */}
        {flowers.map((flower) => (
          <span
            key={flower.id}
            className="absolute text-2xl animate-flower-fall"
            style={{
              left: `${flower.x}%`,
              animationDelay: `${flower.delay}s`,
            }}
          >
            🌻
          </span>
        ))}

        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-5 z-10 flex flex-col items-center text-center">
          <h4 className="text-xl font-nexa font-bold text-white drop-shadow-md">{data.name}</h4>
          <h6 className="font-nexa text-white/80">{data.nrp}</h6>
        </div>

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />

      <style jsx global>{`
        @keyframes flower-fall {
          0% {
            transform: translateY(-10%) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-flower-fall {
          animation: flower-fall 8s linear infinite;
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
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            className="w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10"
            style={{
              background: "linear-gradient(to bottom right, #ffe0f0, #ff69b4)",
              boxShadow: "0 0 20px rgba(255, 105, 180, 0.3)",
            }}
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
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
