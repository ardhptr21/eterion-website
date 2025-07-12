"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const data = {
  name: "Ni'mah Fauziyyah Atok",
  nrp: "5027241103",
  image: "103.jpg",
  funfact: "gemini",
  hobby: "berenang",
  origin: "Madiun",
  linkedin: "https://www.linkedin.com/in/nmhfauziyyah/",
  instagram: "https://www.instagram.com/nmhfauziyyah/",
};

export default function NRP103() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative overflow-hidden backdrop-blur-lg transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(165,180,252,0.4)]"
        onClick={() => setOpen(true)}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#c084fc]/20 via-[#a5b4fc]/30 to-[#172a63]/50" />
        <div className="absolute inset-0 z-0">
          <Noise />
        </div>

        <div className="relative z-10">
          <div className="aspect-[4/5] bg-white rounded-xl relative overflow-hidden" id="photo-frame">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
            <FloatingIconInFrame
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              link={data.linkedin}
            />
            <FloatingIconInFrame
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
              link={data.instagram}
            />
          </div>

          <div className="mt-5">
            <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
            <h6 className="font-nexa">{data.nrp}</h6>
          </div>
        </div>

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-purple-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

function FloatingIconInFrame({
  src,
  link,
}: {
  src: string;
  link: string;
}) {
  const iconRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!iconRef.current) return;
    containerRef.current = iconRef.current?.parentElement as HTMLElement;

    const move = () => {
      if (isPaused || !iconRef.current || !containerRef.current) return;

      const parent = containerRef.current;
      const icon = iconRef.current;

      const parentW = parent.offsetWidth;
      const parentH = parent.offsetHeight;

      const iconW = icon.offsetWidth;
      const iconH = icon.offsetHeight;

      const x = Math.random() * (parentW - iconW);
      const y = Math.random() * (parentH - iconH);

      icon.style.transform = `translate(${x}px, ${y}px)`;
    };

    const interval = setInterval(move, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link, "_blank");
  };

  return (
    <div
      ref={iconRef}
      onClick={handleClick}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="absolute w-9 h-9 z-20 cursor-pointer transition-transform duration-[3000ms] ease-linear"
    >
      <img src={src} alt="icon" className="w-full h-full object-contain" />
    </div>
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
            className="w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(192,132,252,0.2) 0%, rgba(165,180,252,0.3) 50%, rgba(23,42,99,0.5) 100%)",
              backdropFilter: "blur(8px)",
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

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">
              {data.name}
            </h2>
            <p className="text-lg font-nexa text-white/70">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base">
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
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
