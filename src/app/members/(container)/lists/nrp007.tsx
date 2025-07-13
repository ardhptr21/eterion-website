"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Revalina Erica Permatasari",
  nrp: "5027241007",
  image: "007.jpg",
  funfact: "suka koleksi kacamata",
  hobby: "membaca dan dengerin musik",
  origin: "Surabaya",
};

export default function NRP007() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#140c2c]/80 backdrop-blur-lg"
        onClick={() => setOpen(true)}
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
  const starColors = ["#ffffff", "#b1f5ff", "#8df9f1", "#c0f7e3"];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            className="relative w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10"
            style={{
              background: "linear-gradient(to bottom, #0c0a1d, #281a57, #476fa0)",
            }}
          >
          
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 60 }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 4 + Math.random() * 6;
      const size = 8 + Math.random() * 8;
      const color = starColors[Math.floor(Math.random() * starColors.length)];

      return (
        <span
          key={i}
          className="fade-star"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            fontSize: `${size}px`,
            color,
          }}
        />
      );
    })}
  </div>

  <div className="relative z-10"></div>

            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative z-10">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1 z-10">
              {data.name}
            </h2>
            <p className="text-lg font-nexa text-white/70 z-10">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20 z-10" />

            <div className="space-y-2 text-white font-nexa text-base z-10">
              <p>
                <strong>Asal:</strong> {data.origin}
              </p>
              <p>
                <strong>Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong>Funfact:</strong> {data.funfact}
              </p>
              <p>
                <strong>Get to know me 🌟</strong>
                <br />
                <a
                  href="https://www.instagram.com/revaericaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  📸 Instagram
                </a>{" "}
                |{" "}
                <a
                  href="https://www.linkedin.com/in/revalinaerica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  💼 LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://open.spotify.com/user/reva.erica24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  🎧 Spotify
                </a>
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>

      <style jsx>{`
  .fade-star {
    position: absolute;
    opacity: 0.06;
    animation: fadeTwinkle ease-in-out infinite;
    pointer-events: none;
  }

  .fade-star::before {
    content: "✦";
    display: inline-block;
    text-shadow: 0 0 6px currentColor;
  }

  @keyframes fadeTwinkle {
    0%, 100% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }
`}</style>

    </Dialog.Root>
  );
}