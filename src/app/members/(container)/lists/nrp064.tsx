"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Hanif Mawla Faizi",
  nrp: "5027241064",
  image: "064.jpg",
  funfact: "Sibuk mencari kesibukan",
  hobby: "Tidur",
  origin: "Bekasi",
};

export default function NRP064() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer w-full shrink-0 p-6 sm:p-8 rounded-2xl border-2 border-accent bg-gradient-to-br from-[#1a133e] to-[#281f59] relative overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.025] hover:shadow-[0_0_25px_5px_rgba(147,51,234,0.5)]"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="mt-4 text-center">
          <h4 className="text-2xl font-bold font-nexa bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
            {data.name}
          </h4>
          <h6 className="text-white/70 font-nexa tracking-wide text-sm mt-1">
            {data.nrp}
          </h6>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-rose-300/10 via-indigo-400/10 to-transparent rounded-2xl" />
        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl" />
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-[#1e1340] to-[#3b2a63] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative shadow-lg">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1 text-center drop-shadow">
              {data.name}
            </h2>
            <p className="text-lg font-nexa text-white/70 text-center">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base">
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
