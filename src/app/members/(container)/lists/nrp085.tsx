"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";

const data = {
  name: "Ahmad Syauqi Reza",
  nrp: "5027241085",
  image: "085.jpg",
  funfact: "bisa emot 🤨",
  hobby: "Brew Coffee, Olahraga",
  origin: "Boyolali",
};

// Komponen untuk Dialog
type MemberDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const MemberDialog = ({ open, onOpenChange }: MemberDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#1f160f]/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-[#362419] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 border-2 border-[#6F4E37]/30">
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
};

// INI ADALAH KOMPONEN UTAMA DENGAN EFEK BARU
export default function NRP085() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -25;
    const rotateY = (x / width - 0.5) * 25;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out", // Transisi cepat saat mouse bergerak
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
    } as React.CSSProperties);
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)", // Transisi halus saat kembali
    });
  };

  return (
    <>
      {/* Style untuk efek kilau (shine) */}
      <style jsx>{`
        .card-shine::after {
          content: "";
          position: absolute;
          top: var(--mouse-y, -100%);
          left: var(--mouse-x, -100%);
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            rgba(245, 245, 220, 0.15),
            transparent 80%
          );
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          pointer-events: none;
        }
        .card-container:hover .card-shine::after {
          opacity: 1;
        }
      `}</style>

      <div
        ref={cardRef}
        className="card-container cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-[#6F4E37]/50 relative bg-[#362419]/80 backdrop-blur-lg"
        onClick={() => setOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style} // Terapkan style dinamis di sini
      >
        <div
          className="card-shine absolute inset-0 rounded-xl overflow-hidden"
          style={{ transform: "translateZ(20px)" }}
        />
        <Noise />
        <div
          className="w-full h-full"
          style={{ transform: "translateZ(40px)" }} // Konten lebih terangkat (parallax)
        >
          <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-5 z-10">
            <h4 className="text-xl font-nexa font-bold text-white">
              {data.name}
            </h4>
            <h6 className="font-nexa text-white/70">{data.nrp}</h6>
          </div>
        </div>
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
