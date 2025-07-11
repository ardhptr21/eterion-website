"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "M. Faqih Ridho",
  nrp: "5027241123",
  image: "123.jpg",
  funfact: "Pernah Ketemu maruf amin",
  hobby: "nonton podcast dan liveshow",
  origin: "Jombang",
};

export default function NRPCard() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div
          className="
            relative overflow-hidden cursor-pointer w-full shrink-0 p-10 rounded-xl
            border-2 border-red-500
            bg-gradient-to-r from-purple-700 via-pink-600 to-red-500
            [background-size:200%_200%] animate-gradient-x
            backdrop-blur-lg
          "
          onClick={() => setOpen(true)}
        >
          {/* Noise layer */}
          <Noise className="opacity-20" />

          {/* Floating blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 right-5 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-3 w-24 h-24 bg-red-500/20 rounded-full blur-2xl animate-blob animation-delay-6000"></div>

          {/* Foto dan teks */}
          <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-5 z-10">
            <h4 className="text-xl font-nexa font-bold text-white">{data.name}</h4>
            <h6 className="font-nexa text-white/80">{data.nrp}</h6>
          </div>

          {/* Overlay gelap tipis */}
          <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <Dialog.Content className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4">Detail {data.name}</h3>
            <div className="space-y-2">
              <p><strong>NRP:</strong> {data.nrp}</p>
              <p><strong>Asal:</strong> {data.origin}</p>
              <p><strong>Hobi:</strong> {data.hobby}</p>
              <p><strong>Funfact:</strong> {data.funfact}</p>
            </div>
            <Dialog.Close className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded-md">
              Tutup
            </Dialog.Close>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

