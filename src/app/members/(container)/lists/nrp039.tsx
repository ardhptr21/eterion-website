"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { Pixelify_Sans } from "next/font/google";

const data = {
  name: "Rayka Dharma Pranandita",
  nrp: "5027241039",
  image: "039.jpg",
  funfact: "Buta warna parsial hijau merah",
  hobby: "Membaca",
  origin: "Malang",
};

const pixelFont = Pixelify_Sans({ 
  subsets: ["latin"],
  weight: "400",
});

export default function NRP039() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`card-container cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative backdrop-blur-lg overflow-hidden ${pixelFont.className}`}
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/4e/de/5a/4ede5a33c5490195b2b17466ad26d124.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(20,12,44,0.8)",
        }}
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <div className="mt-5 z-10 text-white">
          <h4 className="text-xl font-bold">{data.name}</h4>
          <h6 className="text-l">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />

      <style jsx>{`
        .card-container {
          transition: box-shadow 0.3s ease-in-out;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 10px 2px #3061cd;
          }
          50% {
            box-shadow: 0 0 25px 6px #3061cd;
          }
          100% {
            box-shadow: 0 0 10px 2px #3061cd;
          }
        }

        .card-container:hover {
          animation: glow 2s ease-in-out infinite;
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
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            className={`w-full max-w-lg max-h-[95vh] bg-primary rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 text-white ${pixelFont.className}`}
            style={{
              background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
            }}
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>

            <h2 className="text-l font-bold mb-2">{data.name}</h2>
            <p className="text-l mb-4">{data.nrp}</p>

            <hr className="my-4 border-white/20" />

            <div className="space-y-3 text-l">
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