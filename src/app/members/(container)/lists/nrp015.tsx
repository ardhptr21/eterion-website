"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { Press_Start_2P } from "next/font/google";

const data = {
  name: "Muhammad Rakha Hananditya Rauf",
  nrp: "5027241015",
  image: "015.jpg",
  funfact: "Pengguna setia honda beat",
  hobby: "Tidur",
  origin: "Trenggalek",
};

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"]
});


export default function NRP015() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${pressStart.className} cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#140c2c]/80 backdrop-blur-lg transition-transform duration-300 ease-in-out
    hover:scale-105 hover:shadow-2xl hover:z-20`}
        onClick={() => setOpen(true)}
        style={{
          willChange: 'transform',
          borderColor: '#737373',
          backgroundImage: "url('https://i.imgur.com/9NsaJzn.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
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
        <div className="mt-5 z-10 text-left">
          <h4
            className="text-sm font-bold"
            style={{
                color: "white",
                textShadow: `
                  -3px -3px 0 #222,
                  0 -3px 0 #222,
                  3px -3px 0 #222,
                  -3px 0 0 #222,
                  3px 0 0 #222,
                  -3px 3px 0 #222,
                  0 3px 0 #222,
                  3px 3px 0 #222
                `,
              }}
          >
            {data.name}
          </h4>
          <h6
            className={`${pressStart.className} text-sm mt-2`}
            style={{
                color: "white",
                textShadow: `
                  -3px -3px 0 #222,
                  0 -3px 0 #222,
                  3px -3px 0 #222,
                  -3px 0 0 #222,
                  3px 0 0 #222,
                  -3px 3px 0 #222,
                  0 3px 0 #222,
                  3px 3px 0 #222
                `,
              }}
          >
            {data.nrp}
          </h6>
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
          <Dialog.Content
            className={`${pressStart.className} w-full max-w-lg max-h-[95vh] bg-[#1a0736] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10`}
            style={{
              backgroundImage: "url('https://i.imgur.com/SXtKC90.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: "local"
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

            <h2
              className="text-lg font-bold text-white mb-1"
              style={{
                color: "white",
                textShadow: `
                  -3px -3px 0 #222,
                  0 -3px 0 #222,
                  3px -3px 0 #222,
                  -3px 0 0 #222,
                  3px 0 0 #222,
                  -3px 3px 0 #222,
                  0 3px 0 #222,
                  3px 3px 0 #222
                `,
              }}
            >
              {data.name}
            </h2>
            <p
              className="text-lg text-white/70"
              style={{
                color: "white",
                textShadow: `
                  -3px -3px 0 #222,
                  0 -3px 0 #222,
                  3px -3px 0 #222,
                  -3px 0 0 #222,
                  3px 0 0 #222,
                  -3px 3px 0 #222,
                  0 3px 0 #222,
                  3px 3px 0 #222
                `,
              }}
            >
              {data.nrp}
            </p>

            <hr className="my-6 border-t-6 border-black/40" />

            <div
              className="space-y-2 text-white text-xs"
              style={{
                color: "white",
                textShadow: `
                  -3px -3px 0 #222,
                  0 -3px 0 #222,
                  3px -3px 0 #222,
                  -3px 0 0 #222,
                  3px 0 0 #222,
                  -3px 3px 0 #222,
                  0 3px 0 #222,
                  3px 3px 0 #222
                `,
              }}
            >
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
              <a
                href="https://instagram.com/ahkar.wmv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="mt-8 mx-auto w-48 px-4 py-2 bg-[#717171] text-white text-sm font-bold border-[3px] border-black shadow-[3px_3px_0_#222] hover:text-[#d9d179] transition-all"
                  style={{
                    textShadow: `
                      -3px -3px 0 #222,
                      3px -3px 0 #222,
                      -3px 3px 0 #222,
                      3px 3px 0 #222
                    `
                  }}
                >
                  Instagram
                </button>
              </a>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
