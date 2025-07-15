"use client";
//Kasi clickable words that lead to a link like wikipedia

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Danuja Prasasta Bastu",
  nrp: "5027241037",
  image: "037.jpg",
  funfact: "Gabisa Berenang",
  hobby: "Olahraga, Main game",
  origin: "Jakarta",
};

export default function NRP037() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border border-white/20 relative bg-[#d8eefe]/40 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.01]"
        onClick={() => setOpen(true)}
        
      >
        <Noise />
        <div className="aspect-[4/5] bg-white/10 backdrop-blur-sm rounded-xl z-10 relative overflow-hidden border border-white/20 shadow-md">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-2xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <a
  href="https://instagram.com/your_username"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-4 right-4 z-10 hover:scale-110 transition-transform"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="text-white/60 hover:text-pink-400 transition-colors"
  >
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 2a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5zM18 6.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z" />
  </svg>
</a>

<div className="absolute -z-10 inset-0 bg-gradient-to-t from-[#1d1d1b] via-[#cfcfc6] to-[#e5e5db] rounded-xl pointer-events-none" />
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-xl overflow-y-auto focus:outline-none p-10 transition-all duration-300 animate-fade-in">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border border-white/20 shadow-md">
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
  <strong>Asal:</strong>{" "}
  <a
    href="https://en.wikipedia.org/wiki/Jakarta"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/70 hover:text-blue-400 transition-colors"
  >
    {data.origin}
  </a>
</p>

              <p>
                <strong>Hobi:</strong> {""}
                <a
      href="https://en.wikipedia.org/wiki/LeBron_James"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition-colors"
    >
      Olahraga
    </a>
    {", "}
    <a
      href="https://en.wikipedia.org/wiki/Video_game"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-400 transition-colors"
    >
      Main game
    </a>

              </p>
              <p>
                <strong>Funfact:</strong>{" "}
    <a
      href="https://en.wikipedia.org/wiki/Drowning"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-cyan-400 transition-colors"
    >
      {data.funfact}
    </a>
                <div className="mt-6">
  <a
    href="https://instagram.com/danujabastu"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block hover:scale-110 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      className="text-white/70 hover:text-pink-400 transition-colors"
    >
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 2a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5zM18 6.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z" />
    </svg>
  </a>
</div>

              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
