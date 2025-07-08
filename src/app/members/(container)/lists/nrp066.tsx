"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Ahmad Yafi Ar Rizq",
  nrp: "5027241066",
  image: "066.jpg",
  funfact: "Lah mana saya tau saya kan ikan",
  hobby: "Tennis",
  origin: "Malang",
};

export default function NRP066() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-[#fff] relative bg-[#0098ff] backdrop-blur-lg
                    transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#1cb3ff] hover:shadow-[0_0_20px_#0098ff]
                    ${open ? "shadow-[0_0_30px_#0098ff] animate-pulse" : ""}`}
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden border-4 border-[#fff]">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 text-[#fff]">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-white/10 via-60% to-[#0098ff]/70 rounded-xl pointer-events-none" />
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
            className="w-full max-w-lg max-h-[95vh] bg-[#0098ff] rounded-2xl 
                       shadow-[0_0_40px_#0098ff] overflow-y-auto focus:outline-none 
                       p-10 transition-shadow duration-500"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-4 border-[#fff]">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-[#fff] mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-[#fff]/80">{data.nrp}</p>

            <hr className="my-6 border-t border-[#fff]/20" />

            <div className="space-y-2 font-nexa text-base text-[#fff]">
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

            <div className="mt-8 aspect-[9/16] w-full rounded-xl overflow-hidden shadow-lg border-2 border-[#fff]">
              <iframe
                src="https://www.tiktok.com/embed/6962852478194863362"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="TikTok video"
                className="w-full h-full object-cover"
                style={{ border: "none" }}
              />
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
