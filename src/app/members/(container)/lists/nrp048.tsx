"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Muhammad Afrizan Rasya",
  nrp: "5027241048",
  image: "048.jpg",
  funfact: "Hobi kecebur waktu kecil",
  hobby: "dengerin musik sambil mandi",
  origin: "Kediri",
};

export default function NRP048() {
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
               className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
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
          <Dialog.Content className="relative w-full max-w-lg max-h-[95vh] bg-[#8B9DC3] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
               src={`/images/members/${data.image}`}
               alt={data.name}
               fill
               className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
          />

            </div>

              <a
                href="https://www.instagram.com/rasyafrizan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="space-y-4 text-sm text-white">
                  <div className="mb-2 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
                    <p className="text-sm font-semibold text-white/80">Nama :</p>
                    <p className="text-lg font-bold text-white">{data.name}</p>
                  </div>
                  <div className="mb-2 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
                    <p className="text-sm font-semibold text-white/80">NRP :</p>
                    <p className="text-lg font-bold text-white">{data.nrp}</p>
                  </div>
                  <div className="mb-2 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
                    <p className="text-sm font-semibold text-white/80">Asal :</p>
                    <p className="text-lg font-bold text-white">{data.origin}</p>
                  </div>
                  <div className="mb-2 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
                    <p className="text-sm font-semibold text-white/80">Hobi :</p>
                    <p className="text-lg font-bold text-white">{data.hobby}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
                    <p className="text-sm font-semibold text-white/80">Funfact :</p>
                    <p className="text-lg font-bold text-white">{data.funfact}</p>
                  </div>
                </div>
              </a>

          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}