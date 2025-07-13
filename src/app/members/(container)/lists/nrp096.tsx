"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Hafiz Ramadhan",
  nrp: "5027241096",
  image: "096.jpg",
  funfact: "bosen main game",
  hobby: "mencari hobi",
  origin: "Tangerang Selatan",
};

export default function NRP096() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-red-600 relative bg-[#0f103f]/90 backdrop-blur-lg hover:scale-[1.03] transition-transform duration-200 ease-out"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-md z-10 relative overflow-hidden border border-yellow-400">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-bold font-f1 text-yellow-400">{data.name}</h4>
          <h6 className="font-nexa text-white/80">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-[#0f103f]/60 via-[#002654]/70 to-red-700/30 rounded-xl pointer-events-none" />
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
            className="w-full max-w-lg max-h-[95vh] bg-[#0f103f] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 border-2 border-red-600 relative scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            {/* Background diagonal pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <div
                className="w-full h-full bg-[linear-gradient(135deg,#e10600_1px,transparent_1px)] [background-size:8px_8px]"
              />
            </div>

            <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-yellow-400">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-f1 text-yellow-300 mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-white/70">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base z-10 relative mb-6">
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

            {/* Footer text - inspired by Red Bull */}
            <div className="relative z-10 flex justify-center mt-8">
              <a
                href="https://www.redbullracing.com/int-en/cars/rb19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-yellow-400 transition-colors font-light"
              >
                Inspired by Red Bull Racing – RB19
              </a>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
