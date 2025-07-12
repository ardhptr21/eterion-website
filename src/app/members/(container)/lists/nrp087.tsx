"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import { FaRoute } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const data = {
  name: "Az Zahrra Tasya",
  nrp: "5027241087",
  image: "087.jpg",
  funfact: "suka liat forecast cuaca + suka bgtt hewan 🦉🐅🦅🐪🦦🦜🐎",
  hobby: "Banyak interest, apa aja bole",
  origin: "Jakarta",
};

export default function NRP087() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * -8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    const handleMouseEnter = () => { glow.style.opacity = '1'; };
    const handleMouseLeave = () => {
      card.style.transform = '';
      glow.style.opacity = '0';
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div
          ref={glowRef}
          className="absolute w-[250px] h-[250px] bg-white/20 rounded-full opacity-0 pointer-events-none blur-[100px] z-0 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
        />
        
        {/* KARTU UTAMA */}
        <div
          ref={cardRef}
          // PERUBAHAN: Warna 'to' diganti menjadi lebih gelap
          className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-white/10 relative bg-gradient-to-b from-[#848F7C] via-[#6A7B63] to-[#31412E] backdrop-blur-lg transition-transform duration-200 ease-out"
          onClick={() => setOpen(true)}
        >
          <Noise />
          <div className="absolute inset-0 text-white/20 pointer-events-none">
            <FaRoute className="absolute bottom-5 right-5 text-3xl" />
          </div>
          <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-5 z-10 text-white">
            <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
            <h6 className="font-nexa">{data.nrp}</h6>
          </div>
        </div>
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

// DIALOG (POPUP KETIKA DI-KLIK)
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
            // PERUBAHAN: Warna 'to' di sini juga diganti untuk konsistensi
            className="w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 relative border-2 border-white/10 bg-gradient-to-b from-[#848F7C] via-[#6A7B63] to-[#31412E]"
          >
            <div className="absolute inset-0 text-white/20 pointer-events-none">
              <FaRoute className="absolute bottom-5 right-5 text-3xl" />
            </div>
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative z-10">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-nexa text-white mb-1">{data.name}</h2>
              <p className="text-lg font-nexa text-white/70">{data.nrp}</p>
              <hr className="my-6 border-t border-white/20" />
              <div className="space-y-2 text-white font-nexa text-base">
                <p><strong>Asal:</strong> {data.origin}</p>
                <p><strong>Hobi:</strong> {data.hobby}</p>
                <p><strong>Funfact:</strong> {data.funfact}</p>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}