"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

const data = {
  name: "Nisrina Bilqis",
  nrp: "5027241054",
  image: "054.jpg",
  funfact: "pacarku ada 5",
  hobby: "hobiku pacaran",
  origin: "Surabaya",
  originlink: "https://maps.app.goo.gl/vmnpEBQXVDwbv8m4A",
  hobbyLink:"https://www.instagram.com/fas.blqii?igsh=MXZwb2Rua2lia2s5dg==",
  funfactLink:"https://www.instagram.com/txt_bighit?igsh=MTVuZDlkbTdsN2tjYg==",

};

export default function NRP054() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#0b0a5c]/80 backdrop-blur-lg"
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

            <div className="space-y-4">
              <Link href={data.originlink || '#'}>
                <a className="block border border-white/20 rounded-xl p-4 hover:bg-white/10 transition">
                  <p className="text-white font-nexa text-base">
                    <strong>Asal:</strong> {data.origin}
                  </p>
                </a>
              </Link>

              <Link href={data.hobbyLink || '#'}>
                <a className="block border border-white/20 rounded-xl p-4 hover:bg-white/10 transition">
                  <p className="text-white font-nexa text-base">
                    <strong>Hobi:</strong> {data.hobby}
                  </p>
                </a>
              </Link>

              <Link href={data.funfactLink || '#'}>
                <a className="block border border-white/20 rounded-xl p-4 hover:bg-white/10 transition">
                  <p className="text-white font-nexa text-base">
                    <strong>Funfact:</strong> {data.funfact}
                  </p>
                </a>
              </Link>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
