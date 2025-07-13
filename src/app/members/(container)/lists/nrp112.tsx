"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Yasykur Khalis Jati Maulana Yuwono",
  nrp: "5027241112",
  image: "112.jpg",
  funfact: "punya bekas luka di perut ±15 senti",
  hobby: "doomscrolling",
  origin: "Jakarta",
};

export default function NRP112() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-white text-white relative overflow-hidden transition duration-200 hover:border-white/80 hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.5)]"
        onClick={() => setOpen(true)}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/90 to-white/10 to-[90%] opacity-100" />
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden border-2 border-white-300">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold text-center mb-3">{data.name}</h4>
          <h6 className="font-nexa text-center">{data.nrp}</h6>
        </div>
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-b from-black via-black to-white/40 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
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
                <span
                  onClick={() => window.open("https://id.wikipedia.org/wiki/Daerah_Khusus_Ibukota_Jakarta", "_blank")}
                  className="cursor-pointer"
                  style={{ color: "inherit" }}
                >
                  {data.origin}
                </span>
              </p>
              <p>
                <strong>Hobi:</strong>{" "}
                <span
                  onClick={() => window.open("https://www.google.com/search?q=doomscrolling", "_blank")}
                  className="cursor-pointer"
                  style={{ color: "inherit" }}
                >
                  {data.hobby}
                </span>
              </p>
              <p>
                <strong>Funfact:</strong>{" "}
                <span
                  onClick={() => window.open("https://www.google.com/search?q=keloid", "_blank")}
                  className="cursor-pointer"
                  style={{ color: "inherit" }}
                >
                  {data.funfact}
                </span>
              </p>
              <div className="mt-6 flex justify-center gap-25">
                <a href="https://www.instagram.com/kakayaskur" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="https://x.com/YasykurKhalis" target="_blank" rel="noopener noreferrer">
                  <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/1200px-Twitter-new-logo.jpg" alt="Twitter"
                  className="w-8 h-8 rounded-sm"
                  />
                </a>
                <a href="https://www.linkedin.com/in/yasykur-khalis-886610323" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
