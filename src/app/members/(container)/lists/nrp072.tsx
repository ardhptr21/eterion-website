"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Gemilang Ananda Lingua",
  nrp: "5027241072",
  image: "072.jpg",
  funfact: "Aku Batman",
  hobby: "Nonton F1",
  origin: "Malang",
};

export default function NRP072() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-[#ff2800] relative bg-[#ff2800] backdrop-blur-lg
                    transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#ff3b1f] hover:shadow-[0_0_20px_#ff2800]
                    ${open ? "shadow-[0_0_30px_#ff2800] animate-pulse" : ""}`}
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden border-4 border-[#fff200]">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 text-[#fff200]">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-yellow-200/10 via-60% to-[#ff2800]/70 rounded-xl pointer-events-none" />
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
            className="w-full max-w-lg max-h-[95vh] bg-[#ff2800] rounded-2xl 
                       shadow-[0_0_40px_#ff2800] overflow-y-auto focus:outline-none 
                       p-10 transition-shadow duration-500"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-4 border-[#fff200]">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-[#fff200] mb-1 cursor-pointer hover:underline">
              <a
                href="https://www.instagram.com/whotfisgilang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.name}
              </a>
            </h2>
            <p className="text-lg font-nexa text-[#fff200]/80">{data.nrp}</p>

            <hr className="my-6 border-t border-[#fff200]/20" />

            <div className="space-y-2 font-nexa text-base text-[#fff200]">
              <p>
                <strong>Asal:</strong>{" "}
                <a
                  href="https://maps.app.goo.gl/T7EbV68oxCdhTAAN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {data.origin}
                </a>
              </p>
              <p>
                <strong>Hobi:</strong>{" "}
                <a
                  href="https://www.ferrari.com/en-EN/formula1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {data.hobby}
                </a>
              </p>
              <p>
                <strong>Funfact:</strong>{" "}
                <a
                  href="https://www.roblox.com/users/7433199451/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {data.funfact}
                </a>
              </p>
            </div>

            <div className="mt-8 aspect-video w-full rounded-xl overflow-hidden shadow-lg border-2 border-[#fff200]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="Unmute ts bro"
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
