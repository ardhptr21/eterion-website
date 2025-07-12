"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Dina Rahmadani",
  nrp: "5027241065",
  image: "065.jpg",
  funfact: "gasuka Nasi dingin kecuali Nasi berwarna",
  hobby: "Baking",
  origin: "Jember",
};

export default function NRP065() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .libra-icon {
          animation: spin 5s linear infinite;
          filter: drop-shadow(0 0 10px #60a5fa);
        }
      `}</style>

      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-4 border-blue-900 relative bg-[#140c2c]/80 backdrop-blur-lg hover:shadow-[0_0_30px_#1e3a8a]"
        onClick={() => setOpen(true)}
      >
        <Noise />

        {/* 🌟 Siluet cahaya belakang */}
        <div className="absolute inset-0 -z-20 rounded-xl bg-blue-500/10 blur-3xl opacity-60 pointer-events-none" />

        {/* 🔄 Libra Icons */}
        {[
          "top-2 left-2",
          "top-2 right-2",
          "bottom-2 left-2",
          "bottom-2 right-2",
          "top-1/2 left-0",
          "top-1/2 right-0",
          "top-0 left-1/2",
          "bottom-0 left-1/2",
        ].map((pos, i) => (
          <img
            key={i}
            src="/images/zodiac/libra.svg"
            alt="libra"
            className={`libra-icon absolute ${pos} w-6 h-6 opacity-90`}
          />
        ))}

        {/* Foto profil */}
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Nama dan NRP */}
        <div className="mt-5 z-10 text-center">
          <a
            href="https://instagram.com/dinaarhmdn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-nexa font-bold text-white hover:text-blue-400 transition-all"
          >
            {data.name}
          </a>
          <h6 className="font-nexa text-white/80">{data.nrp}</h6>
        </div>

        {/* Gradasi dalam bingkai */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-blue-800/20 rounded-xl pointer-events-none" />
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-primary rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
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
              <a
                href="https://instagram.com/dinaarhmdn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-all"
              >
                {data.name}
              </a>
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
}
