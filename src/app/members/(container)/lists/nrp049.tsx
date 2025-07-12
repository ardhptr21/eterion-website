"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Khumaidi Kharis Az-zacky",
  nrp: "5027241049",
  image: "049.jpg",
  funfact: "Jadi Deathbat sejak esempe",
  hobby: "Travelling",
  origin: "Tuban",

  links: {
    linkedin: "www.linkedin.com/in/khumaidi-kharis-az-zacky",
    maps: "https://www.google.com/maps/place/Tuban,+East+Java",
    medium: "https://medium.com/@kharisaz",
    wikipedia: "https://en.wikipedia.org/wiki/Deathbat",
  },
};

export default function NRP049() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 bg-[#140c2c]/80 backdrop-blur-lg transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl border-white/20 hover:border-fuchsia-400 relative"
        onClick={() => setOpen(true)}
      >
        <Noise />

        <div className="aspect-[4/5] bg-gradient-to-br from-[#2e1a64] via-[#1c0f3e] to-[#0a041e] rounded-xl overflow-hidden relative ring-1 ring-white/10 group-hover:ring-fuchsia-400 transition-all duration-300">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-5 z-10 text-white font-[Consolas] transition-all duration-300 group-hover:text-fuchsia-300">
          <h4 className="text-xl font-bold">{data.name}</h4>
          <h6 className="text-l">{data.nrp}</h6>
        </div>

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-fuchsia-300/10 to-purple-700/20 rounded-xl pointer-events-none transition-all duration-300 group-hover:opacity-80" />
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 bg-gradient-to-br from-[#2c1761] via-[#1a1037] to-[#0a041e] animate-fade-in text-white font-[Consolas]">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative ring-1 ring-white/10 animate-in fade-in-down">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Nama + NRP */}
            <h2 className="text-3xl font-bold mb-1 animate-in fade-in-up">
              <a
                href={data.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fuchsia-300 hover:underline transition"
              >
                {data.name}
              </a>
            </h2>
            <p className="text-lg text-white/70 animate-in fade-in-up delay-100">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            {/* Info Terkait */}
            <div className="space-y-2 text-base animate-in fade-in duration-500 delay-150">
              <p>
                <strong>Asal:</strong>{" "}
                <a
                  href={data.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-300 hover:underline transition"
                >
                  {data.origin}
                </a>
              </p>
              <p>
                <strong>Hobi:</strong>{" "}
                <a
                  href={data.links.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-300 hover:underline transition"
                >
                  {data.hobby}
                </a>
              </p>
              <p>
                <strong>Funfact:</strong>{" "}
                <a
                  href={data.links.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-300 hover:underline transition"
                >
                  {data.funfact}
                </a>
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}