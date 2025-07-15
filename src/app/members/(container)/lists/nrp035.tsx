"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Zein M Hasan",
  nrp: "5027241035",
  image: "035.jpg",
  funfact: "Gabisa tangan kanan",
  hobby: "Main musik, nonton",
  origin: "Balikpapan",
};

const videoURL = "https://files.catbox.moe/zn0par.mp4";

export default function NRP035() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative overflow-hidden backdrop-blur-md"
        onClick={() => setOpen(true)}
      >
        {/* Video background from external URL */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={videoURL} type="video/mp4" />
        </video>

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
          <h4 className="text-xl font-nexa font-bold text-purple-300 drop-shadow-md">
            {data.name}
          </h4>
          <h6 className="font-nexa text-blue-300">{data.nrp}</h6>
        </div>
      </div>

      {/* Dialog */}
      <MemberDialog open={open} onOpenChange={setOpen} />

      {/* Global CSS animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
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
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="relative w-full max-w-lg max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl border border-pink-500/40 bg-white/10 backdrop-blur-md animate-fadeIn text-white p-6 sm:p-10 font-nexa">
             <Dialog.Title className="sr-only">{data.name}</Dialog.Title>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40"
            >
              <source
                src="https://files.catbox.moe/zn0par.mp4"
                type="video/mp4"
              />
            </video>

            {/* Tombol Close */}
            <Dialog.Close className="absolute top-4 right-4 text-white hover:text-pink-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Dialog.Close>

            {/* Gambar Member */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative shadow-lg">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Informasi */}
            <div className="space-y-1 mb-6">
              <h2 className="text-3xl font-bold text-purple-300 drop-shadow-lg">
                {data.name}
              </h2>
              <p className="text-lg text-blue-300">{data.nrp}</p>
            </div>

            <hr className="border-white/20 mb-6" />

            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <span className="text-white/70 font-semibold">🌍 Asal:</span>{" "}
                <span className="text-purple-100">{data.origin}</span>
              </p>
              <p>
                <span className="text-white/70 font-semibold">🎯 Hobi:</span>{" "}
                <span className="text-purple-100">{data.hobby}</span>
              </p>
              <p>
                <span className="text-white/70 font-semibold">⚡ Funfact:</span>{" "}
                <span className="text-purple-100">{data.funfact}</span>
              </p>

              {/* Gambar tambahan di bawah funfact */}
              <div className="mt-4">
                <img
                  src="https://files.catbox.moe/6eyjtu.jpg"
                  alt="Funfact Image"
                  className="rounded-xl shadow-lg mx-auto max-w-full"
                />
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
