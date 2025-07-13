"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { Press_Start_2P } from "next/font/google";

// Font pixel
const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const data = {
  name: "Raya Ahmad Syarif",
  nrp: "5027241041",
  image: "041.jpg",
  funfact: "lahir pas hari raya makanya namanya Raya",
  hobby: "ngegame, masak",
  origin: "Sidoarjo",
};

export default function NRP041() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative overflow-hidden ${pixelFont.className}`}
        onClick={() => setOpen(true)}
        style={{
          background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
        }}
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
          <h4 className="text-sm font-bold">{data.name}</h4>
          <h6 className="text-[10px]">{data.nrp}</h6>
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

            <h2 className="text-base font-bold mb-2">{data.name}</h2>
            <p className="text-xs mb-4">{data.nrp}</p>

            <hr className="my-4 border-white/20" />

            <div className="space-y-3 text-xs">
              <p>
                <strong>Asal:</strong> {data.origin}
              </p>
              <p>
                <strong>Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong>Funfact:</strong> {data.funfact}
              </p>
              <div className="mt-1">
                <img
                  src="https://i.pinimg.com/originals/e8/d0/f1/e8d0f1794e2520ac2367c1d21c0966e9.gif"
                  alt="Retro Pixel Animation"
                  className="w-full rounded-md mx-auto"
                  style={{ width: "150px", imageRendering: "pixelated" }}
                />
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
