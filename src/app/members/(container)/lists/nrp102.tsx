"use client";

import React from "react";
import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

export default function NRP102() {
  const [open, setOpen] = useState(false);

  const image = "102.jpg";
  const name = "Rayhan Agnan Kusuma";
  const nrp = "5027241102";
  const funfact = "Pernah berangkat kuliah ga mandi";
  const hobby = "Ngopi";
  const origin = "Tulungagung";

  return (
    <>
      <div
        className="group cursor-pointer w-full shrink-0 p-10 rounded-3xl border border-cyan-400/20 relative bg-[#0a0a1f] hover:scale-[1.02] transition-transform duration-300 ease-out shadow-[0_0_30px_rgba(0,255,255,0.15)]"
        onClick={() => setOpen(true)}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-700 opacity-20 blur-2xl z-0 pointer-events-none animate-pulse" />
        <Noise />

        <div className="relative aspect-[4/5] bg-white/10 rounded-2xl z-10 overflow-hidden border border-cyan-400/10 shadow-inner">
          <Image
            src={`/images/members/${image}`}
            alt={name}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />

          {/* Floating social icons */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 z-20">
            <SocialIcon
              href="https://www.instagram.com/rayhan_a.k/"
              icon="instagram"
              color="#E1306C"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/rayhan-agnan-kusuma-8bb597265/"
              icon="linkedin"
              color="#0077B5"
            />
            <SocialIcon
              href="https://www.tiktok.com/@whosrayhannn"
              icon="tiktok"
              color="#ffffff"
            />
          </div>
        </div>

        <div className="mt-5 z-10 text-center text-white">
          <h4 className="text-2xl font-nexa font-extrabold drop-shadow">{name}</h4>
          <h6 className="text-white/70 font-nexa">{nrp}</h6>
        </div>

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-blue-900/30 rounded-3xl pointer-events-none" />
      </div>

      <MemberDialog
        open={open}
        onOpenChange={setOpen}
        image={image}
        name={name}
        nrp={nrp}
        origin={origin}
        hobby={hobby}
        funfact={funfact}
      />
    </>
  );
}

function SocialIcon({
  href,
  icon,
  color,
}: {
  href: string;
  icon: "instagram" | "linkedin" | "tiktok";
  color: string;
}) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg fill={color} width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7 .1 5.6.1 4.5.3 3.7.6c-.9.3-1.6.7-2.3 1.4S.9 3.9.6 4.8C.3 5.6.1 6.7.1 8.1 0 9.4 0 9.8 0 12s0 2.6.1 3.9c.1 1.4.3 2.5.6 3.3.3.9.7 1.6 1.4 2.3s1.4 1.1 2.3 1.4c.8.3 1.9.5 3.3.6C8.3 24 8.7 24 12 24s3.6 0 4.9-.1c1.4-.1 2.5-.3 3.3-.6.9-.3 1.6-.7 2.3-1.4s1.1-1.4 1.4-2.3c.3-.8.5-1.9.6-3.3.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.4-.3-2.5-.6-3.3-.3-.9-.7-1.6-1.4-2.3s-1.4-1.1-2.3-1.4c-.8-.3-1.9-.5-3.3-.6C15.6 0 15.2 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
      </svg>
    ),
    linkedin: (
      <svg fill={color} width="24" height="24" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.023-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.357V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.601 0 4.266 2.368 4.266 5.451v6.289zM5.337 7.433c-1.144 0-2.067-.926-2.067-2.066 0-1.141.923-2.066 2.067-2.066 1.141 0 2.066.925 2.066 2.066 0 1.14-.925 2.066-2.066 2.066zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
      </svg>
    ),
    tiktok: (
      <svg fill={color} width="24" height="24" viewBox="0 0 24 24">
        <path d="M9 3v12.563c0 1.188-.938 2.188-2.126 2.188-1.188 0-2.126-.937-2.126-2.125 0-.812.5-1.563 1.313-1.875v-3.25c-2.562.375-4.5 2.625-4.5 5.125 0 2.938 2.438 5.313 5.313 5.313 2.938 0 5.313-2.375 5.313-5.313v-7.5c1.25.938 2.813 1.5 4.5 1.5v-3.188c-.625 0-1.313-.125-1.875-.375-.875-.313-1.625-.875-2.125-1.625-.313-.438-.5-.938-.625-1.5H9z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black/60 hover:bg-black/90 p-2 rounded-full shadow-md transition hover:scale-110"
    >
      {icons[icon]}
    </a>
  );
}

function MemberDialog({
  open,
  onOpenChange,
  image,
  name,
  nrp,
  origin,
  hobby,
  funfact,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: string;
  name: string;
  nrp: string;
  origin: string;
  hobby: string;
  funfact: string;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-[#2a0a44] to-[#1f102e] rounded-3xl shadow-2xl overflow-y-auto focus:outline-none p-10 border border-white/10">
            <Dialog.Title className="sr-only">{name}</Dialog.Title>
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border border-white/10">
              <Image
                src={`/images/members/${image}`}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold font-nexa text-white mb-1">{name}</h2>
            <p className="text-lg font-nexa text-white/70">{nrp}</p>
            <hr className="my-6 border-t border-white/20" />
            <div className="space-y-2 text-white font-nexa text-base">
              <p><strong>Asal:</strong> {origin}</p>
              <p><strong>Hobi:</strong> {hobby}</p>
              <p><strong>Funfact:</strong> {funfact}</p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
