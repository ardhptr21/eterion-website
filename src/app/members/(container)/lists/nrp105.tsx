"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Naruna Vicranthyo Putra Gangga",
  nrp: "5027241105",
  image: "105.jpg",
  funfact: "suka semua genre game kecuali game rhythm karena gabisa mainnya",
  hobbyLink: "https://steamcommunity.com/id/n4runs/",
  origin: "Tangerang",
  youtubeEmbed: "https://www.youtube.com/embed/cw8tuNZjIf4",
};

export default function NRP105() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-red-800 relative bg-[#2c1a1a]/80 backdrop-blur-lg shadow-lg shadow-black"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-black rounded-xl z-10 relative overflow-hidden border border-red-900">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 text-white">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa text-red-400">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-red-900/30 to-[#1a0d0d] rounded-xl pointer-events-none" />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-[#1a0d0d] text-white rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 border-2 border-red-800">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border border-red-900">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-red-400">{data.nrp}</p>

            <hr className="my-6 border-t border-red-900/40" />

            <div className="space-y-2 font-nexa text-base">
              <p>
                <strong className="text-red-300">Asal:</strong> {data.origin}
              </p>
              <p>
                <strong className="text-red-300">Hobi:</strong>{" "}
                hobinya ada{" "}
                <a
                  href={data.hobbyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-red-400 hover:text-red-300"
                >
                  di sini
                </a>
              </p>
              <p>
                <strong className="text-red-300">Funfact:</strong> {data.funfact}
              </p>
            </div>

            <div className="mt-6">
              <iframe
                width="100%"
                height="315"
                src={data.youtubeEmbed}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl border border-red-800"
              ></iframe>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
