"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const data = {
  name: "Putu Yudi Nandanjaya Wiraguna",
  nrp: "5027241080",
  image: "080.jpg",
  funfact: "Kalkulus ga ngulang",
  hobby: "Billiard & Sunset",
  origin: "Bali Island",
  tagline:
    "Telat kusadar hidup bukanlah,\nPerihal mengambil yang kau tebar,\nSedikit air yang kupunya,\nMilikmu juga,\nBersama...",
  instagram: "@yudinandanjaya_",
  whatsapp: "6282145665062",
};

export default function NRP080() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-blue-800 relative
                    bg-gradient-to-br from-black via-black to-blue-950 backdrop-blur-lg
                    transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_#60a5fa]
                    ${open ? "shadow-[0_0_35px_#60a5fa] animate-pulse" : ""}`}
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden border-[5px] border-blue-500 shadow-[0_0_30px_#3b82f6,0_0_60px_#3b82f6]">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 text-blue-300">
          <h4 className="text-xl font-nexa font-bold hover:text-blue-400 hover:drop-shadow-[0_0_6px_#3b82f6] transition">
            {data.name}
          </h4>
          <h6 className="font-nexa text-blue-400">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-blue-300/10 to-black/90 rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

function MemberDialog(props: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { open, onOpenChange } = props;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            className="w-full max-w-lg max-h-[95vh] 
                       bg-gradient-to-b from-black via-zinc-900 to-blue-950
                       rounded-2xl shadow-[0_0_50px_#3b82f6] overflow-y-auto 
                       focus:outline-none p-10 transition-shadow duration-500 text-white"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-[5px] border-blue-500 shadow-[0_0_30px_#3b82f6,0_0_60px_#3b82f6]">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-blue-300 mb-1 hover:text-blue-400 hover:drop-shadow-[0_0_6px_#3b82f6] transition">
              {data.name}
            </h2>
            <p className="text-lg font-nexa text-blue-200">{data.nrp}</p>

            <p className="italic text-sm text-blue-500 mt-3 whitespace-pre-line">
              {data.tagline}
            </p>

            <hr className="my-6 border-t border-blue-400/30" />

            <div className="space-y-2 font-nexa text-base text-blue-100">
              <p>
                <strong>Asal:</strong>{" "}
                <span className="text-white">{data.origin}</span>
              </p>
              <p>
                <strong>Hobi:</strong>{" "}
                <span className="text-white">{data.hobby}</span>
              </p>
              <p>
                <strong>Funfact:</strong>{" "}
                <span className="text-white">{data.funfact}</span>
              </p>
            </div>

            <div className="flex justify-center gap-5 mt-6">
              <a
                href={`https://instagram.com/${data.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-all hover:scale-110"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href={`https://wa.me/${data.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-all hover:scale-110"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>

            <div className="mt-8 aspect-video w-full rounded-xl overflow-hidden shadow-lg border-2 border-blue-500">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0FiJfOviW4U?autoplay=1&mute=1"
                title="Video Yudi"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
