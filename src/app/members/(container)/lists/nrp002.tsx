"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = {
  name: "Balqis Sani Sabillah",
  nrp: "5027241002",
  image: "002.jpg", 
  funfact: "Suka tiba - tiba RANDOM :)",
  hobby: "Traveling",
  origin: "Probolinggo",
};

export default function NRP502() {
  const [open, setOpen] = useState(false);


  const [stars, setStars] = useState<{ top: string; left: string; delay: string }[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(60)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-blue-400 relative bg-gradient-to-br from-[#0f0f0f] via-[#1b2f2f] to-[#223f4a] backdrop-blur-lg transition duration-300 hover:shadow-[0_0_30px_#00f6ff]"
        onClick={() => setOpen(true)}
      >
        <Noise />

        {/* Taburan bintang */}
        <div className="absolute inset-0 z-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        <div className="aspect-[4/5] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 rounded-[50px_50px_16px_16px] z-10 relative overflow-hidden border-4 border-blue-500 shadow-lg">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full z-10"
          />
        </div>

        <div className="mt-5 z-10 text-center">
          <h4 className="text-xl font-nexa font-bold text-white hover:animate-bounce">
            {data.name}
          </h4>
          <h6 className="font-nexa text-white text-sm hover:animate-bounce">
            <a
              href="https://open.spotify.com/user/mn9anuy17qkb13w2an7ffm7bk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 hover:scale-110 transition duration-300 inline-block"
            >
              {data.nrp}
            </a>
          </h6>
        </div>

        {/* Bling-bling dan dekorasi */}
        <img
          src="/images/zodiac/cursor-star.svg"
          alt="cursor-star"
          className="absolute top-4 left-4 w-6 h-10 animate-ping"
        />
        <img
          src="/images/zodiac/cursor-star.svg"
          alt="cursor-star"
          className="absolute bottom-5 right-6 w-5 h-10 animate-ping"
        />
        <img
          src="/images/zodiac/cursor-star.svg"
          alt="cursor-star"
          className="absolute top-1/4 right-1 w-8 h-8 animate-bounce"
        />
        <img
          src="/images/zodiac/cursor-star.svg"
          alt="cursor-star"
          className="absolute bottom-1/3 left-2 w-6 h-6 animate-bounce"
        />
        <img
          src="/images/zodiac/cancer.svg"
          alt="cancer"
          className="absolute bottom-5 left-6 w-15 h-16 animate-pulse"
          style={{ transform: "rotate(-30deg)" }}
        />

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-blue-300/10 to-blue-800/30 rounded-xl pointer-events-none" />
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
          <Dialog.Content className="relative w-full max-w-lg max-h-[95vh] bg-gradient-to-t from-blue-700 to-cyan-400 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1 text-center">
              <a
                href="https://www.instagram.com/baallqiisss"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 hover:scale-110 transition duration-300 inline-block"
              >
                {data.name}
              </a>
            </h2>
            <p className="text-lg font-nexa text-white/80 text-center mb-5">
              {data.nrp}
            </p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base">
              <p>
                <strong>Asal: </strong>
                <a
                  href="https://www.google.com/maps/place/Probolinggo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 hover:scale-105 transition duration-300 inline-block"
                >
                  {data.origin}
                </a>
              </p>
              <p>
                <strong>Hobi: </strong>
                <a
                  href="https://www.google.com/maps/place/Edinburgh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 hover:scale-105 transition duration-300 inline-block"
                >
                  {data.hobby}
                </a>
              </p>
              <p>
                <strong>Funfact: </strong>
                <a
                  href="https://id.pinterest.com/pin/41728734043182489/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 hover:scale-105 transition duration-300 inline-block"
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
