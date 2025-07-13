"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const data = {
  name: "Ananda Fitri Wibowo",
  nrp: "5027241057",
  image: "057.jpg",
  funfact: "sedang mabuk 'everything u are'",
  hobby: "menjelajah, musikan",
  origin: "Wonogiri",
};

export default function NRP057() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
          cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative
          overflow-hidden
          backdrop-blur-lg
          transition-shadow duration-300
          hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
        "
        onClick={() => setOpen(true)}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#facc15]/20 via-[#facc15]/30 to-[#172a63]/50" />
        <div className="absolute inset-0 z-0">
          <Noise />
        </div>

        <SocialIcon
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
          link="https://www.instagram.com/and.fiw/"
          size={36}
        />
        <SocialIcon
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
          link="https://www.linkedin.com/in/ananda-fitri-wibowo-9ab6a5291/"
          size={36}
        />
        <SocialIcon
          src="https://upload.wikimedia.org/wikipedia/commons/5/54/2024_Spotify_logo_without_text.svg"
          link="https://open.spotify.com/playlist/5XibdE0A1ozjs6v4xOLBtA?si=a3fa157c877e499c"
          size={36}
        />

        <TextIcon text="01" link="https://youtu.be/lB8ASupNtlw" size={40} />
        <TextIcon text="02" link="https://youtu.be/1HjQQEdO9S8" size={40} />
        <TextIcon text="03" link="https://youtu.be/ugk5pd9xgSw" size={40} />
        <TextIcon text="04" link="https://youtu.be/7amtBXyUTTU?si=1Fqu3KUj9zmgWME_" size={40} />
        <TextIcon text="05" link="https://youtu.be/-jNK03W1M2g" size={40} />
        <TextIcon text="06" link="https://youtu.be/9sBktY09RpU" size={40} />

        <div className="relative z-10">
          <div className="aspect-[4/5] bg-white rounded-xl relative overflow-hidden">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-5">
            <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
            <h6 className="font-nexa">{data.nrp}</h6>
          </div>
        </div>

        <div className="absolute bottom-5 right-6 text-sm text-white/50 font-mono z-10">
          alive, {"'"}20s atm
        </div>

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}


function SocialIcon({
  src,
  link,
  size,
}: {
  src: string;
  link: string;
  size: number;
}) {
  const iconRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!iconRef.current) return;

    const moveIcon = () => {
      if (isPaused) return;

      const parent = iconRef.current?.parentElement;
      if (!parent || !iconRef.current) return;

      const parentWidth = parent.offsetWidth;
      const parentHeight = parent.offsetHeight;

      const iconWidth = iconRef.current.offsetWidth;
      const iconHeight = iconRef.current.offsetHeight;

      const x = Math.random() * (parentWidth - iconWidth);
      const y = Math.random() * (parentHeight - iconHeight);

      iconRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const interval = setInterval(moveIcon, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link, "_blank");
  };

  return (
    <div
      ref={iconRef}
      className="
        absolute z-20 cursor-pointer
        transition-transform duration-[3000ms] ease-linear
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={handleClick}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img
        src={src}
        alt="social-icon"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function TextIcon({
  text,
  link,
  size,
}: {
  text: string;
  link: string;
  size: number;
}) {
  const iconRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const pastelColors = [
      "rgba(255, 183, 197, 0.4)",
      "rgba(183, 225, 255, 0.4)",
      "rgba(197, 255, 200, 0.4)",
      "rgba(255, 243, 183, 0.4)",
      "rgba(220, 198, 255, 0.4)",
    ];
    setColor(pastelColors[Math.floor(Math.random() * pastelColors.length)]);

    if (!iconRef.current) return;

    const moveIcon = () => {
      if (isPaused) return;

      const parent = iconRef.current?.parentElement;
      if (!parent || !iconRef.current) return;

      const parentWidth = parent.offsetWidth;
      const parentHeight = parent.offsetHeight;

      const iconWidth = iconRef.current.offsetWidth;
      const iconHeight = iconRef.current.offsetHeight;

      const x = Math.random() * (parentWidth - iconWidth);
      const y = Math.random() * (parentHeight - iconHeight);

      iconRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const interval = setInterval(moveIcon, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link, "_blank");
  };

  return (
    <div
      ref={iconRef}
      className="
        absolute z-20 cursor-pointer flex items-center justify-center font-bold font-mono
        transition-transform duration-[3000ms] ease-linear
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `2px solid ${color}`,
        borderRadius: "8px",
        color: color,
        backdropFilter: "blur(2px)",
      }}
    >
      {text}
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
                "linear-gradient(to bottom, rgba(250,204,21,0.2) 0%, rgba(250,204,21,0.3) 50%, rgba(23,42,99,0.5) 100%)",
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

            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/da4Xw2Kr79w"
                title="YouTube preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
