"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Naufal Ardhana",
  nrp: "5027241118",
  image: "118.jpg",
  funfact: "Gasuka Daging Unta",
  hobby: "Membaca dan Bersepeda",
  origin: "Malang",
  instagram: "https://www.instagram.com/ardhana_48", 
  linkedin: "https://www.linkedin.com/in/naufal-ardhana-2b873429a", 
};

export default function NRP118() {
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
            className="object-cover w-full h-full"
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-primary rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
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
                <strong>Asal:</strong> {data.origin}
              </p>
              <p>
                <strong>Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong>Funfact:</strong> {data.funfact}
              </p>
            </div>

            <hr className="my-6 border-t border-white/20" />

            <div className="text-center text-white font-nexa">
              <p className="text-lg font-bold mb-4">Connect with me:</p>
              <div className="flex gap-4 justify-center">
                <a
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
                >
                  Instagram
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
