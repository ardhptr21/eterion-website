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

  // Shared gradient card styles
  const cardClasses = [
    "relative overflow-hidden cursor-pointer w-full shrink-0 p-10 rounded-xl",
    "border-2 border-red-500",
    "bg-gradient-to-r from-purple-700 via-pink-600 to-red-500",
    "[background-size:200%_200%] animate-gradient-x",
    "backdrop-blur-lg",
  ].join(" ");

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Trigger Card */}
      <Dialog.Trigger asChild>
        <div className={cardClasses} onClick={() => setOpen(true)}>
          {/* Noise & Blobs */}
          <Noise className="opacity-20" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 right-5 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-blob animation-delay-4000" />
          <div className="absolute top-1/2 left-3 w-24 h-24 bg-red-500/20 rounded-full blur-2xl animate-blob animation-delay-6000" />

          {/* Profile Image */}
          <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden mx-auto">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Name & NRP - Left Aligned */}
          <div className="mt-5 z-10 px-4">
            <h4 className="text-xl font-nexa font-bold text-white">{data.name}</h4>
            <h6 className="font-nexa text-white/80">{data.nrp}</h6>
          </div>

          {/* Dark overlay bottom */}
          <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
        </div>
      </Dialog.Trigger>

      {/* Dialog Content */}
      <Dialog.Portal>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <Dialog.Content asChild>
            <div className={cardClasses + " w-full max-w-md p-8"}>
              {/* Noise & Blobs */}
              <Noise className="opacity-20" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-3000" />
              <div className="absolute -bottom-6 right-4 w-28 h-28 bg-purple-500/30 rounded-full blur-2xl animate-blob animation-delay-5000" />

              {/* Profile Image in Dialog */}
              <div className="aspect-[4/5] bg-white rounded-xl mx-auto mb-4 overflow-hidden relative" style={{ width: '200px', height: '250px' }}>
                <Image
                  src={`/images/members/${data.image}`}
                  alt={`${data.name} photo`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Biodata Content */}
              <Dialog.Title className="text-2xl font-bold text-white mb-2 text-center">
                {data.name}
              </Dialog.Title>
              <h6 className="text-white/80 mb-4 text-center">{data.nrp}</h6>
              <hr className="border-white/30 mb-4" />
              <div className="text-white space-y-1 leading-relaxed px-4">
                <p><strong>Asal:</strong> {data.origin}</p>
                <p><strong>Hobi:</strong> {data.hobby}</p>
                <p><strong>Funfact:</strong> {data.funfact}</p>
              </div>

              {/* Close Button */}
              <Dialog.Close className="mt-6 w-full inline-block text-center px-4 py-2 bg-red-500 text-white rounded-md">
                Tutup
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
