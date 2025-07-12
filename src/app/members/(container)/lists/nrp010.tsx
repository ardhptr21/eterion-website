"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Kanafira Vanesha Putri",
  nrp: "5027241010",
  image: "010.jpg",
  funfact: "gasuka minum air putih kalo bukan cleo",
  hobby: "nonton f1",
  origin: "Surabaya",
};

export default function NRP010() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-[#00A19C] relative 
          bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#00A19C]/20 
          backdrop-blur-lg shadow-[0_0_30px_#00A19C44]"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-gradient-to-tl from-[#C6C6C6] to-[#1a1a1a] rounded-xl z-10 relative overflow-hidden ring-1 ring-[#00A19C]/40 shadow-[inset_0_0_10px_#00A19C33]">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-[#00A19C]/10" />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold text-[#00A19C] drop-shadow-[0_0_2px_#00A19C]">{data.name}</h4>
          <h6 className="font-nexa text-[#C6C6C6]">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-[#80142B]/30 to-[#00A19C]/30 rounded-xl pointer-events-none" />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] 
            bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#000000] 
            rounded-2xl border-2 border-[#00A19C] shadow-[0_0_30px_#00A19C66] 
            overflow-y-auto focus:outline-none p-10"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative ring-1 ring-[#00A19C]/30 shadow-[inset_0_0_10px_#00A19C22]">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-[#00A19C]/10" />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-[#00A19C] mb-1 drop-shadow-[0_0_2px_#00A19C]">{data.name}</h2>
            <p className="text-lg font-nexa text-[#C6C6C6]">{data.nrp}</p>

            <hr className="my-6 border-t border-[#80142B]/40" />

            <div className="space-y-2 text-white font-nexa text-base">
              <p>
                <strong className="text-[#C6C6C6]">Asal:</strong> {data.origin}
              </p>
              <p>
                <strong className="text-[#C6C6C6]">Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong className="text-[#C6C6C6]">Funfact:</strong> {data.funfact}
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
