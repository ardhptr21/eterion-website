"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Ahmad Rafi Fadhillah Dwiputra",
  nrp: "5027241068",
  image: "068.jpg",
  funfact: "kalo bener suka bener",
  hobby: "ngangon kuda virtual",
  origin: "Bekasi, Planet lain",
};

export default function NRP068() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-gradient-to-br from-[#2e003e] via-[#6a0dad] to-[#ff66c4] text-white backdrop-blur-lg"
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
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] relative rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 text-white bg-gradient-to-br from-[#2e003e] via-[#6a0dad] to-[#ff66c4] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,_transparent_1px)] before:bg-[length:2px_2px] before:pointer-events-none before:opacity-50 backdrop-blur-xl">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <a
              href="https://www.instagram.com/zl0nm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold font-nexa text-white mb-1 hover:underline hover:cursor-pointer transition-opacity duration-200 opacity-90 hover:opacity-100"
            >
              {data.name}
            </a>
            <p className="text-lg font-nexa text-white/70">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base">
              <p>
                <strong>Asal:</strong>{" "}
                <a
                  href="https://www.tiktok.com/@isaaccorbitt/video/7385009457790586154?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:underline hover:cursor-pointer transition"
                >
                  {data.origin}
                </a>
              </p>
              <p>
                <strong>Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong>Funfact:</strong> {data.funfact}
              </p>
            </div>
            <p className="mt-6 text-center text-white/90 text-2xl font-bold tracking-wider drop-shadow-md">
              h23Ff ec?8bE Eb96 iA
            </p>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
