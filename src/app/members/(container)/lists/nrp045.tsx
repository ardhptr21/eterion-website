"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Ivan Syarifuddin",
  nrp: "5027241045",
  image: "045.jpg",
  funfact: "pernah setahun makan siang bakso sama mie ayam doang",
  hobby: "Fotografi",
  origin: "Surabaya",
};

export default function NRP045() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-0 border-accent relative bg-[#140c2c]/80 backdrop-blur-lg"
        onClick={() => setOpen(true)}
      >
        
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3puZTNveThzMXdxMnh4OGltc3c5bGZ2MTcxZzk3dXBwYmR3YzBrcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dVcGWrQfYO3K6UYKF0/giphy.gif"
          alt="City View Background"
          className="absolute inset-0 w-full h-full object-cover object-bottom brightness-[0.2] blur-sm opacity-60 z-0 pointer-events-none"
        />

        
        <Noise />

        
        <div className="w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden z-10 relative">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        
        <div className="mt-5 z-10 text-white text-center">
        <h4 className="text-xl font-nexa font-extrabold tracking-wide uppercase text-fuchsia-400 drop-shadow-[0_0_6px_rgba(255,0,255,0.6)]">
        {data.name}
        </h4>

        <h6 className="text-sm font-nexa text-white/60 tracking-widest drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">{data.nrp}
        </h6>
        </div>


        
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-fuchsia-500/20 rounded-xl pointer-events-none" />
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
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />

        {/* Dialog Content */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-[#140c2c]/80 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md overflow-y-auto focus:outline-none p-8 relative">
            {/* Noise */}
            <Noise />

            {/* Dialog Title (accessibility) */}
            <Dialog.Title className="text-3xl font-extrabold font-nexa text-fuchsia-400 mb-1 drop-shadow-[0_0_6px_rgba(255,0,255,0.6)]">
              {data.name}
            </Dialog.Title>

            {/* NRP */}
            <p className="text-sm font-nexa text-white/60 tracking-widest drop-shadow-[0_0_4px_rgba(255,0,255,0.3)] mb-4">
              {data.nrp}
            </p>

            {/* Image */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border border-white/10">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-purple-700/10 pointer-events-none" />
            </div>

            {/* Divider */}
            <hr className="my-6 border-t border-white/10" />

            {/* Info */}
            <div className="space-y-3 text-white font-nexa text-base">
              <p>
                <span className="text-fuchsia-300 font-bold">Asal:</span> {data.origin}
              </p>
              <p>
                <span className="text-fuchsia-300 font-bold">Hobi:</span> {data.hobby}
              </p>
              <p>
                <span className="text-fuchsia-300 font-bold">Funfact:</span> {data.funfact}
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
