"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Muhammad Khosyi Syehab",
  nrp: "5027241089",
  image: "089.jpg",
  funfact: "ga bisa gendut",
  hobby: "baca buku, novel, manga, etc",
  origin: "Solo",
};

export default function NRP089() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`group relative cursor-pointer w-full shrink-0 p-8 rounded-xl overflow-hidden backdrop-blur-lg 
                    transition-all duration-300 ease-in-out hover:scale-105
                    ${open ? "ring-4 ring-[#ff4d6d]/80 animate-pulse shadow-glow-pink" : ""}`}
        style={{
          backgroundImage: 'url("https://i.pinimg.com/originals/16/d1/15/16d115449a4e46e92a042fbedc868089.gif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => setOpen(true)}
      >
        <Noise />

        {/* Card Photo */}
        <div className="aspect-[4/5] bg-white/10 backdrop-blur-sm rounded-xl z-10 relative overflow-hidden border-4 border-[#ff4d6d] group-hover:shadow-[0_0_20px_#ff4d6d] transition-shadow duration-300">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="mt-4 z-10 text-[#ffe6ea] drop-shadow-[0_0_3px_#ff4d6d]">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>

        {/* Overlay Layer */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-[#ff4d6d]/10 to-black/60 rounded-xl pointer-events-none" />
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
          <Dialog.Content
            className="w-full max-w-lg max-h-[95vh] rounded-2xl 
                       bg-gradient-to-br from-[#2a001c] via-[#ff4d6d]/10 to-[#1a000d]/10 
                       border border-[#ff4d6d] shadow-[0_0_40px_#ff4d6d] overflow-y-auto 
                       focus:outline-none p-10 text-[#ffe6ea]"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-4 border-[#ff4d6d] shadow-lg">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-[#ff4d6d] mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-[#ffb6c1]">{data.nrp}</p>

            <hr className="my-6 border-t border-[#ff4d6d]/40" />

            <div className="space-y-2 font-nexa text-base text-[#ffe6ea]">
              <p>
                <strong>Asal:</strong> {data.origin}
              </p>
              <p>
                <strong>Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong>Funfact:</strong> {data.funfact}
              </p>
              <div className="mt-4 flex justify-center">
              <img
                src="https://i.pinimg.com/originals/bb/03/9f/bb039f899b3ae1529a7f7a12268edd27.gif"
                className="w-40 h-auto"
                alt="chibi1"
              />
                <img
                  src="https://i.pinimg.com/originals/bb/03/9f/bb039f899b3ae1529a7f7a12268edd27.gif"
                  className="w-40 h-auto"
                  alt="chibi2"
                />
                <img
                  src="https://i.pinimg.com/originals/bb/03/9f/bb039f899b3ae1529a7f7a12268edd27.gif"
                  className="w-40 h-auto"
                  alt="chibi3"
                />
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
