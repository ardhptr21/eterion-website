"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "M. Hikari Reiziq Rakhmadinta",
  nrp: "5027241079",
  image: "079.jpg",
  funfact: "Lagi suka berkompetisi",
  hobby: "Lomba",
  origin: "Surabaya",
};

// [UBAH] Style kartu dengan gradasi langit malam dan efek rasi bintang baru
const cardStyle: React.CSSProperties = {
  backgroundColor: '#191D32', // Warna dasar langit
  // Latar belakang berlapis: Nebula -> Bintang Kecil -> Bintang Besar -> Gradasi Utama
  backgroundImage: `
    radial-gradient(ellipse at 70% 20%, rgba(148, 111, 222, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(148, 111, 222, 0.15) 0%, transparent 40%),
    radial-gradient(circle, #ffffff 0.5px, transparent 1px),
    radial-gradient(circle, #ffffff 1px, transparent 1.5px),
    linear-gradient(170deg, #191D32 40%, #492E5A 80%, #753A88 100%)
  `,
  backgroundSize: '100% 100%, 100% 100%, 50px 50px, 100px 100px, 100% 100%',
  border: '2px solid rgba(255, 255, 255, 0.1)', // Border statis yang elegan
};


export default function NRP079() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-full shrink-0 p-10 rounded-xl backdrop-blur-lg overflow-hidden cursor-pointer"
        // [UBAH] Menerapkan style baru dan menghapus animasi
        style={cardStyle}
        onClick={() => setOpen(true)}
      >
        <div className="absolute inset-0 animate-spin-slow pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${i * 45}deg) translate(70px) rotate(-${i * 45}deg)`,
              }}
            >
              {/* [UBAH] Ikon bintang yang lebih cocok dengan tema */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5 text-purple-300 opacity-60"
              >
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
        </div>
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden shadow-2xl shadow-black/40">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold text-white">{data.name}</h4>
          <h6 className="font-nexa text-white/70">{data.nrp}</h6>
        </div>
        {/* [UBAH] Dihapus karena gradasi utama sudah cukup */}
        {/* <div className="absolute -z-10 inset-0 bg-gradient-to-b ... /> */}
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

interface MemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function MemberDialog({ open, onOpenChange }: MemberDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* [UBAH] Style dialog disesuaikan dengan tema baru */}
          <Dialog.Content 
            className="w-full max-w-lg max-h-[95vh] bg-[#191D32] border border-purple-400/30 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10"
            style={{
                backgroundImage: 'linear-gradient(170deg, #191D32 40%, #492E5A 100%)'
            }}
          >
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
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}