"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Muhammad Fachry Shalahuddin Rusamsi",
  nrp: "5027241031",
  image: "031.jpg",
  funfact: "Terlahir Kalcerr",
  hobby: "Sepak Bola, Denger Musik, Baca Buku", 
  origin: "Bandung",
};

export default function NRP031() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-yellow-400 relative overflow-hidden"
        onClick={() => setOpen(true)}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `
                radial-gradient(white 1px, transparent 1px),
                radial-gradient(white 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              backgroundPosition: '0 0, 15px 15px'
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-purple-900/30 to-blue-900/80" />
        </div>

        <Noise />
        <div className="aspect-[4/5] bg-black rounded-xl z-10 relative overflow-hidden border border-yellow-400/50">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Fixed Name and NRP Section - Added relative z-10 */}
        <div className="relative z-10 mt-5">
          <h4 className="text-xl font-nexa font-bold text-yellow-400">{data.name}</h4>
          <h6 className="font-nexa text-yellow-300">{data.nrp}</h6>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 animate-pulse" />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gray-900 border-2 border-yellow-400 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border border-yellow-400/50">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-yellow-400 mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-yellow-300">{data.nrp}</p>

            <hr className="my-6 border-t border-yellow-400/20" />

            <div className="space-y-2 text-yellow-300 font-nexa text-base">
              <p>
                <strong className="text-yellow-400">Asal:</strong> {data.origin}
              </p>
              <p>
                <strong className="text-yellow-400">Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong className="text-yellow-400">Funfact:</strong> {data.funfact}
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
