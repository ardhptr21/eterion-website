"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Mochkamad Maulana Syafaat", 
  nrp: "5027241021",
  image: "021.jpg", 
  funfact: "Dibawa ke barak militer waktu smk", 
  hobby: "Naik Gunung(yang sepi)", 
  origin: "Kediri", 
};

export default function NRP021() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#140c2c]/80 backdrop-blur-lg"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
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
         <Dialog.Content className="relative w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
  <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

  <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
      <Image
        src={`/images/members/${data.image}`}
        alt={data.name}
        fill
        className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
      />

  </div>

        <div className="space-y-2 text-[10px] text-yellow-400">
          {/* Nama */}
          <a
            href="https://www.instagram.com/maulana.syafaatt/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-1 p-2 rounded-md bg-yellow-400/10 border border-yellow-300/30 transform transition duration-300 hover:scale-105 hover:bg-yellow-300/10 hover:shadow-md"
          >
            <p className="text-[10px] font-semibold text-yellow-300">Nama :</p>
            <p className="text-sm font-bold text-yellow-100">{data.name}</p>
          </a>

          {/* NRP */}
          <a
            href="https://www.instagram.com/jkt48.ella.a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-1 p-2 rounded-md bg-yellow-400/10 border border-yellow-300/30 transform transition duration-300 hover:scale-105 hover:bg-yellow-300/10 hover:shadow-md"
          >
            <p className="text-[10px] font-semibold text-yellow-300">NRP :</p>
            <p className="text-sm font-bold text-yellow-100">{data.nrp}</p>
          </a>

          {/* Asal */}
          <a
            href="https://id.wikipedia.org/wiki/Kabupaten_Kediri"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-1 p-2 rounded-md bg-yellow-400/10 border border-yellow-300/30 transform transition duration-300 hover:scale-105 hover:bg-yellow-300/10 hover:shadow-md"
          >
            <p className="text-[10px] font-semibold text-yellow-300">Asal :</p>
            <p className="text-sm font-bold text-yellow-100">{data.origin}</p>
          </a>

          {/* Hobi */}
          <a
            href="https://www.instagram.com/jkt48.ella.a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-1 p-2 rounded-md bg-yellow-400/10 border border-yellow-300/30 transform transition duration-300 hover:scale-105 hover:bg-yellow-300/10 hover:shadow-md"
          >
            <p className="text-[10px] font-semibold text-yellow-300">Hobi :</p>
            <p className="text-sm font-bold text-yellow-100">{data.hobby}</p>
          </a>

          {/* Funfact */}
          <a
            href="https://www.instagram.com/jkt48.ella.a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 rounded-md bg-yellow-400/10 border border-yellow-300/30 transform transition duration-300 hover:scale-105 hover:bg-yellow-300/10 hover:shadow-md"
          >
            <p className="text-[10px] font-semibold text-yellow-300">Funfact :</p>
            <p className="text-sm font-bold text-yellow-100">{data.funfact}</p>
          </a>
        </div>


          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
