"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

const data = {
  name: "NISRINA BILQIS",
  nrp: "5027241054",
  image: "054.jpg",
  funfact: "pacarku ada 5",
  hobby: "hobiku pacaran",
  origin: "Surabaya",
  nameLink: "https://www.instagram.com/liz.yeyo?igsh=MWVmOHE3ejl0Y3o0Yg==",
  nrpLink: "https://www.instagram.com/nisrinanira?igsh=MXRwMnZoMWI5ejV3aQ==",
  originlink: "https://maps.app.goo.gl/vmnpEBQXVDwbv8m4A",
  hobbyLink:"https://www.instagram.com/fas.blqii?igsh=MXZwb2Rua2lia2s5dg==",
  funfactLink:"https://www.instagram.com/txt_bighit?igsh=MTVuZDlkbTdsN2tjYg==",

};


export default function NRP054() {
  const [open, setOpen] = useState(false);

  return (
    <>
     <div
      className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#0b0a5c]/80 backdrop-blur-lg
              transform transition-transform duration-300
              hover:scale-[1.03] hover:shadow-2xl {anton.className}" 
        onClick={() => setOpen(true)} 
      >
        <Noise />

         <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-20"
          >
          <source src="/videos/puzzle.webm" type="video/webm" />
        </video>

        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl ${anton.className} font-bold">{data.name}</h4>
          <h6 className="${anton.className}">{data.nrp}</h6>
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

              <Link href={data.nameLink || '#'} className="block border border-white/0 rounded-x p-1 hover:bg-[#40E0D0]/50 transition">
                  <h2 className="text-3xl font-bold ${anton.className} text-white mb-1">{data.name}</h2>
              </Link>   
              <Link href={data.nrpLink || '#'} className="block border border-white/0 p-1 hover:bg-[#40E0D0]/50 transition">
                  <p className="text-lg ${anton.className} text-white/70">{data.nrp}</p>
              </Link>
              
            

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-4">
              <Link href={data.originlink || '#'} className="block border border-white/20 rounded-xl p-4 hover:bg-[#40E0D0]/50 transition">
                  <p className="text-white ${anton.className} text-base">
                    <strong>Asal:</strong> {data.origin}
                  </p>
              </Link>

              <Link href={data.hobbyLink || '#'} className="block border border-white/20 rounded-xl p-4 hover:bg-[#40E0D0]/50 transition">
                  <p className="text-white ${anton.className} text-base">
                    <strong>Hobi:</strong> {data.hobby}
                  </p>
              </Link>

              <Link href={data.funfactLink || '#'} className="block border border-white/20 rounded-xl p-4 hover:bg-[#40E0D0]/50 transition">
                  <p className="text-white ${anton.className} text-base">
                    <strong>Funfact:</strong> {data.funfact}
                  </p>
              </Link>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
    
  );
}
