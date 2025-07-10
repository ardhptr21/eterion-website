"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import FallStar from "../../components/FallStar";

const data = {
  name: "Alnico Virendra Kitaro Diaz",
  nrp: "5027241081",
  image: "081.jpg",
  funfact: "Ganti cewe seminggu sekali",
  hobby: "main game, ngedit vidio",
  origin: "Surabaya",
};

export default function NRP081() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer w-full shrink-0 p-10 rounded-xl relative bg-gradient-to-br from-[#000761] to-[#44008B] backdrop-blur-lg overflow-hidden transition-all duration-300 ${
          open ? "ring-4 ring-white/80 shadow-[0_0_25px_#ffffffaa]" : ""
        }`}
        onClick={() => setOpen(true)}
      >
        <Noise />

        {/* Bintang jatuh ✦ */}
        <FallStar starCount={15} />

        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <a
            href="https://tracker.gg/valorant/profile/riot/HDE%20Haruka%23naufa/overview?platform=pc&playlist=competitive&season=ac12e9b3-47e6-9599-8fa1-0bb473e5efc7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
          </a>
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-[#000761] to-[#44008B] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <a
                href="https://tracker.gg/valorant/profile/riot/HDE%20Haruka%23naufa/overview?platform=pc&playlist=competitive&season=ac12e9b3-47e6-9599-8fa1-0bb473e5efc7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </a>
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-white/70">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base mb-6">
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

            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6kOSFQhlDqE?autoplay=1&mute=1&enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
