"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Salsa Bil Ulla",
  nrp: "5027241052",
  image: "052.jpg",
  funfact: "Pernah fomo jadi YouTuber Gaming pas SD",
  hobby: "Main musik, Main game, Nonton, Dance",
  origin: "Surabaya",
};

// Komponen Card (tidak ada perubahan)
export default function NRP052() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative overflow-hidden bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/gradient-dark-wavy-background_23-2148385756.jpg?semt=ais_hybrid&w=740')]"
        onClick={() => setOpen(true)}
      >
        <div className="absolute inset-0 bg-black/30" />
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 relative">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

// Komponen Dialog Modal (KODE YANG DIPERBARUI DENGAN GIF YANG LEBIH BESAR & BISA DIKLIK)
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
          {/* 1. Container luar: untuk background dan clipping (sudut membulat) */}
          <Dialog.Content
            key={open.toString()}
            className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative focus:outline-none bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/gradient-dark-wavy-background_23-2148385756.jpg?semt=ais_hybrid&w=740')]">
            
            {/* Lapisan overlay gelap */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 2. Container dalam: untuk konten yang bisa di-scroll */}
            <div className="relative w-full max-h-[95vh] overflow-y-auto p-10">
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

               
                <a 
                  href="https://open.spotify.com/track/5H1sKFMzDeMtXwND3V6hRY?si=juUePYu-RVqZf-c9-0eyZA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block mt-6 cursor-pointer" 
                >
                  <Image
                    src="https://media1.tenor.com/m/wuuyrq4sJioAAAAd/marsha-marsha-jkt48.gif"
                    alt="Marsha JKT48 GIF (Click to Spotify)"
                    width={500} 
                    height={300} 
                    unoptimized={true} 
                    className="w-full h-auto rounded-lg object-cover" 
                  />
                </a>
                
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}