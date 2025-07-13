"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Ica Zika Hamizah",
  nrp: "5027241058",
  image: "058.jpg",
  funfact: "Dengerin podcast horror👻",
  hobby: "Dengerin Musik 🤘🏼",
  origin: "Lamongan 🛣️⚠️",
};

export default function NRP058() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#140c2c]/80 backdrop-blur-lg transition duration-300 hover:shadow-[0_0_30px_#96a19f88]"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full z-10"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold hover:animate-bounce hover:text-[#2f4732]">{data.name}</h4>
          <h6 className="font-nexa text-white cursor-pointer hover:animate-bounce hover:text-[#2f4732] hover:font-bold hover:translate-y-2">{data.nrp}</h6>
          <img
            src="/images/zodiac/cancer.svg"
            alt="Cancer"
            className="absolute z-10 w-10 h-20 bottom-5 right-15 animate-pulse opacity-50 rotate-120 hover:animate-spin"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-4 h-4 top-3 left-3 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-3 h-3 top-5 left-1/3 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-4 h-3 top-1 right-1/3 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-4 h-4 top-5 right-3 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-3 h-3 top-1/5 right-1 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-4 h-4 top-1/3 right-5 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-3 h-5 bottom-1/2 right-2 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-3 h-4 top-1/7 left-4 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-3 h-4 top-1/4 left-1 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-2 h-3 top-2/5 left-5 animate-pulse opacity-20"
          />
          <img
            src="/images/zodiac/star.png"
            alt="Star"
            className="absolute z-10 w-3 h-5 top-1/2 left-3 animate-pulse opacity-20"
          />
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
          <Dialog.Content className="relative w-full max-w-lg max-h-[95vh] bg-gradient-to-t from-[#2f4732] to-[#96a19f] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <a
                href="https://maps.app.goo.gl/FYHY9JPm2rvc9cpq7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full overflow-hidden rounded-xl group"
              >
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1 cursor-pointer hover:animate-bounce">
              <a
                  href="https://www.instagram.com/hamizah.iz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 hover:scale-125 hover:translate-x-9 transition duration-300 inline-block"
                >
                  {data.name}
                </a>
            </h2>
            <p className="text-lg font-nexa text-white/70 cursor-pointer hover:animate-bounce hover:translate-y-2">
            <a
                  href="https://www.linkedin.com/in/ica-zika-976601323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 hover:scale-125 hover:translate-x-16 transition duration-300 inline-block"
                >
                  {data.nrp}
                </a>
            </p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base">
              <p>
                <strong>Asal: </strong>
                <a
                  href="https://id.wikipedia.org/wiki/Lamongan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 hover:scale-125 hover:translate-x-5 transition duration-300 inline-block"
                >
                  {data.origin}
                </a>
              </p>
              <p>
                <strong>Hobi: </strong>
                <a
                  href="https://open.spotify.com/user/sc3oqfocqs2pgcerajb4r7fxy?si=0d4afcbcf95b4cff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 hover:scale-125 hover:translate-x-6 transition duration-300 inline-block"
                >
                  {data.hobby}
                </a>
              </p>
              <p>
                <strong>Funfact: </strong>
                <a
                  href="https://drive.google.com/file/d/1rGPkMNDhc-HNVS4waPZnryldZoirT4Bz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 hover:scale-125 hover:translate-x-9 transition duration-300 inline-block"
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
