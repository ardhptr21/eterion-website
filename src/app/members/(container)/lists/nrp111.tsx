"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect } from "react";

const data = {
  name: "Maritza Adelia Sucipto",
  nrp: "5027241111",
  image: "111.jpg",
  funfact: "gasuka seblak dan matcha! :D",
  hobby: "nonton film & series",
  origin: "Bali",
};

export default function NRP111() {
  const [open, setOpen] = useState(false);

 return (
  <>
    <div
      className={`p-[4px] bg-[#1e2d47] rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_40px_#7aaed6]/50 relative ${
        open ? "animate-[pulse_3s_infinite]" : ""
      }`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[
          { size: 10, top: "10%", left: "20%" },
          { size: 14, top: "25%", left: "70%" },
          { size: 8, top: "50%", left: "40%" },
          { size: 12, top: "65%", left: "15%" },
          { size: 10, top: "80%", left: "60%" },
          { size: 6, top: "35%", left: "50%" },
          { size: 9, top: "15%", left: "85%" },
        ].map((sparkle, idx) => (
          <div
            key={idx}
            className="absolute bg-white/30 rotate-45"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              top: sparkle.top,
              left: sparkle.left,
              borderRadius: "2px",
            }}
          />
        ))}
      </div>

      <div className="p-[4px] bg-gradient-to-b from-purple-900 via-blue-900 to-blue-700 backdrop-blur-md rounded-[14px] relative z-10">
        <div
          className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-[2px] border-[#7aaed6] relative bg-[#0d1b2a]/70 transition-all duration-300 ease-in-out hover:bg-[#112d44]/80"
          onClick={() => setOpen(true)}
        >
          <Noise />

          <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden scale-[1.05]">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-5 z-10 text-center">
            <h4 className="text-xl font-nexa font-bold text-[#7aaed6]">
              {data.name}
            </h4>
            <h6
              className="text-base font-nexa font-bold text-[#7aaed6]"
              style={{
                textShadow: "0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)",
              }}
            >
              {data.nrp}
            </h6>
          </div>
        </div>
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

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">
              {data.name}
            </h2>
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
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
