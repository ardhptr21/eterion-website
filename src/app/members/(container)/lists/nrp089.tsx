"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Muhammad Khosyi Syehab",
  nrp: "5027241089",
  image: "089.jpg",
  funfact: "ga bisa gendut",
  hobby: "baca buku, novel, manga, etc",
  origin: "Solo",
};

export default function NRP066() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer w-full shrink-0 p-8 rounded-xl relative backdrop-blur-lg overflow-hidden
                    transition-all duration-300 ease-in-out hover:scale-105 group
                    ${open ? "ring-4 ring-pink-500/50 shadow-[0_0_30px_#ff75b5]" : ""}`}
        style={{
          backgroundImage: 'url("/images/backgrounds/anime-wallpaper.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white/80 backdrop-blur-sm rounded-xl z-10 relative overflow-hidden border-4 border-pink-300 group-hover:shadow-xl transition-shadow duration-300">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 z-10 text-white drop-shadow-[0_0_2px_black]">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-pink-300/10 to-[#0f0c29]/70 rounded-xl pointer-events-none" />
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
          <Dialog.Content
            className="w-full max-w-lg max-h-[95vh] rounded-2xl bg-gradient-to-br from-pink-200/90 to-purple-200/90
                       shadow-[0_0_60px_#ff75b5] overflow-y-auto focus:outline-none p-10"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-4 border-pink-300 shadow-lg">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-pink-700 mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-pink-600">{data.nrp}</p>

            <hr className="my-6 border-t border-pink-300/50" />

            <div className="space-y-2 font-nexa text-base text-pink-800">
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
