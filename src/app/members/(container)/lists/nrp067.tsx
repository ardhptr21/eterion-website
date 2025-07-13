"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Ananda Widi Alrafi",
  nrp: "5027241067",
  image: "067.jpg",
  funfact: "Staffli Kalkulus",
  hobby: "Suka ngoleksi kartu pokemon",
  origin: "Blitar",
};

export default function NRP065() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-red-400/60 relative bg-gradient-to-br from-red-950/90 via-blue-950/80 to-indigo-950/90 backdrop-blur-lg shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300"
        onClick={() => setOpen(true)}
      >
        <Noise />
        {/* Reinhard's signature glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 rounded-xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-400/5 to-blue-400/10 rounded-xl pointer-events-none" />

        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden border-2 border-red-300/40">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
          {/* Subtle knight-like overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-blue-900/10" />
        </div>

        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold text-red-100 drop-shadow-lg">{data.name}</h4>
          <h6 className="font-nexa text-red-200/80">{data.nrp}</h6>
        </div>

        {/* Reinhard's blessing aura */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-red-500/20 from-30% via-blue-400/15 via-60% to-red-600/25 rounded-xl pointer-events-none" />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-2xl max-h-[95vh] bg-gradient-to-br from-red-950 via-blue-950 to-indigo-950 rounded-2xl shadow-2xl shadow-red-500/20 border border-red-400/30 overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-2 border-red-300/40">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
              {/* Knight's honor glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-blue-900/20" />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-red-100 mb-1 drop-shadow-lg">{data.name}</h2>
            <p className="text-lg font-nexa text-red-200/80">{data.nrp}</p>

            <hr className="my-6 border-t border-red-400/30" />

            <div className="space-y-2 text-red-100 font-nexa text-base">
              <p>
                <strong className="text-red-300">Asal:</strong> {data.origin}
              </p>
              <p>
                <strong className="text-red-300">Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong className="text-red-300">Funfact:</strong> {data.funfact}
              </p>
            </div>

            {/* Reinhard's Theme YouTube Video */}
            <div className="mt-8">
              <h3 className="text-xl font-bold font-nexa text-red-200 mb-4 drop-shadow-lg">

              </h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden border-2 border-red-400/40 shadow-lg shadow-red-500/20">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ppNEZGrZwzA"
                  title="Reinhard van Astrea Theme"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-red-300/70 mt-2 font-nexa">
                Aku ngefans banget Re:Zero
              </p>
            </div>

            {/* Reinhard's blessing effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5 rounded-2xl" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400/50 to-transparent rounded-t-2xl" />
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
