"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // Tambahkan Framer Motion

const data = {
  name: "Ahmad Syauqi Reza",
  nrp: "5027241085",
  image: "085.jpg",
  funfact: "bisa emot 🤨",
  hobby: "Brew Coffee, Olahraga",
  origin: "Boyolali",
};

const CoffeeThemeStyles = () => (
  <style jsx global>{`
    @keyframes drip {
      0% {
        transform: translateY(-100%) scaleY(0);
        opacity: 0.8;
      }
      50% {
        transform: translateY(5px) scaleY(1);
        opacity: 1;
      }
      100% {
        transform: translateY(100%) scaleY(0);
        opacity: 0;
      }
    }

    .coffee-card:hover .drip {
      animation: drip 1.5s ease-out forwards;
    }

    @keyframes steam-up {
      0% {
        transform: translateY(0) scale(0.8);
        opacity: 0.4;
      }
      100% {
        transform: translateY(-180px) scale(2);
        opacity: 0;
      }
    }

    @keyframes bubble-up {
      0% {
        transform: translateY(0) scale(0);
        opacity: 0.6;
      }
      100% {
        transform: translateY(-120px) scale(1.2);
        opacity: 0;
      }
    }
  `}</style>
);

type SteamParticleProps = {
  delay: string;
  size?: string;
  speed?: string;
};

const SteamParticle = ({
  delay,
  size = "w-1 h-12",
  speed = "4s",
}: SteamParticleProps) => (
  <div
    className={`absolute bottom-0 left-1/2 bg-white/30 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-500 ${size}`}
    style={{
      transform: `translateX(-50%)`,
      animation: `steam-up ${speed} ease-out infinite ${delay}`,
    }}
  />
);

const BubbleParticle = ({ delay }: { delay: string }) => (
  <div
    className="absolute top-full left-1/4 w-2 h-2 bg-[#f5f5dc]/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    style={{
      transform: `translateY(10px) translateX(-50%)`,
      animation: `bubble-up 3s ease-out infinite ${delay}`,
    }}
  />
);

type MemberDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const MemberDialog = ({ open, onOpenChange }: MemberDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#1f160f]/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-[#362419] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 border-2 border-[#6F4E37]/30">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">
              {data.name}
            </h2>
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
};

export default function NRP085() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CoffeeThemeStyles />

      <motion.div
        className="group coffee-card cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-[#6F4E37]/50 relative bg-[#362419]/80 backdrop-blur-lg overflow-hidden"
        onClick={() => setOpen(true)}
        style={{ perspective: 800 }}
        whileHover={{
          scale: 1.03,
          y: -5,
          borderColor: "#6F4E37",
          transition: { duration: 0.3 },
        }}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <SteamParticle delay="0s" size="w-1 h-16" speed="3s" />
            <SteamParticle delay="1.5s" size="w-0.5 h-10" speed="5s" />
            <SteamParticle delay="2.5s" size="w-1.5 h-14" speed="4s" />
            <BubbleParticle delay="0.8s" />
            <BubbleParticle delay="2s" />
          </div>
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold text-white">
            {data.name}
          </h4>
          <h6 className="font-nexa text-white/70">{data.nrp}</h6>
        </div>

        <div className="drip absolute top-0 left-1/4 w-3 h-3 bg-[#6F4E37] rounded-full opacity-0" />

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% to-[#6F4E37]/50 rounded-xl pointer-events-none" />
      </motion.div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
