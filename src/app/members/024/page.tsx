"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const data = {
  name: "Ibnu Athaillah ",
  nrp: "5027241024",
  image: "024.webp",
  funfact: "Maaf gue bikin page sendiri....skill issue ama bang Ardhi",
  hobby: "balapan Airbus A380-800",
  origin: "Ujung timur jawa",
};

function addCyberpunkStyle() {
  if (typeof window !== "undefined" && !document.getElementById("cyberpunk-style")) {
    const style = document.createElement("style");
    style.id = "cyberpunk-style";
    style.innerHTML = `
      @keyframes cyberpunk-glow {
        0%, 100% { box-shadow: 0 0 16px 4px #00fff7, 0 0 32px 8px #ff00ea, 0 0 64px 16px #ffe600; }
        20% { box-shadow: 0 0 24px 8px #ff00ea, 0 0 48px 16px #00fff7, 0 0 80px 24px #ffe600; }
        40% { box-shadow: 0 0 32px 12px #ffe600, 0 0 64px 24px #00fff7, 0 0 96px 32px #ff00ea; }
        60% { box-shadow: 0 0 24px 8px #00fff7, 0 0 48px 16px #ffe600, 0 0 80px 24px #ff00ea; }
        80% { box-shadow: 0 0 16px 4px #ff00ea, 0 0 32px 8px #ffe600, 0 0 64px 16px #00fff7; }
      }
      .cyberpunk-card {
        border: 3px solid #00fff7;
        background: linear-gradient(135deg, #1a0033 60%, #0f0020 100%);
        box-shadow: 0 0 16px 4px #00fff7, 0 0 32px 8px #ff00ea, 0 0 64px 16px #ffe600;
        animation: cyberpunk-glow 2s linear infinite;
        position: relative;
        overflow: visible;
      }
      .cyberpunk-card::before {
        content: '';
        position: absolute;
        inset: -8px;
        border-radius: 1.2rem;
        border: 2px dashed #ff00ea;
        pointer-events: none;
        filter: blur(1.5px);
        opacity: 0.7;
        z-index: 1;
        animation: cyberpunk-glow 1.2s alternate-reverse infinite;
      }
      .cyberpunk-img {
        border: 2.5px solid #ffe600;
        box-shadow: 0 0 24px 6px #ff00ea, 0 0 48px 12px #00fff7;
        background: linear-gradient(120deg, #ff00ea33 40%, #00fff733 100%);
      }
      .cyberpunk-glitch {
        color: #ffe600;
        position: relative;
        font-family: 'Orbitron', 'Nexa', monospace;
        text-shadow: 0 0 8px #ff00ea, 0 0 16px #00fff7, 0 0 32px #ffe600;
        animation: cyberpunk-glitch 1.2s infinite linear alternate-reverse;
      }
      @keyframes cyberpunk-glitch {
        0% { left: 0; text-shadow: 2px 0 #ff00ea, -2px 0 #00fff7; }
        20% { left: 2px; text-shadow: -2px 0 #ffe600, 2px 0 #00fff7; }
        40% { left: -2px; text-shadow: 2px 2px #ff00ea, -2px -2px #00fff7; }
        60% { left: 1px; text-shadow: -1px 1px #ffe600, 1px -1px #00fff7; }
        80% { left: -1px; text-shadow: 1px -1px #ff00ea, -1px 1px #00fff7; }
        100% { left: 0; text-shadow: 0 0 8px #ff00ea, 0 0 16px #00fff7, 0 0 32px #ffe600; }
      }
      .cyberpunk-hr {
        border: none;
        border-top: 2px dashed #00fff7;
        margin: 2rem 0;
        opacity: 0.7;
        box-shadow: 0 0 8px #ff00ea;
      }
      .cyberpunk-detail {
        background: linear-gradient(90deg, #ff00ea22 0%, #00fff722 100%);
        border-radius: 0.7rem;
        padding: 1.2rem 1rem;
        box-shadow: 0 0 12px 2px #ffe60044;
        border: 1.5px solid #ff00ea;
      }
      .cyberpunk-bg {
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background: repeating-linear-gradient(120deg, #ff00ea11 0 2px, transparent 2px 40px), repeating-linear-gradient(60deg, #00fff711 0 2px, transparent 2px 40px);
        animation: cyberpunk-bg-move 8s linear infinite;
      }
      @keyframes cyberpunk-bg-move {
        0% { background-position: 0 0, 0 0; }
        100% { background-position: 120px 60px, 60px 120px; }
      }
    `;
    document.head.appendChild(style);
  }
}

export default function Unlocked024Page() {
  const [open, setOpen] = useState(false);
  useEffect(() => { addCyberpunkStyle(); }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f0020] p-4 relative overflow-hidden">
      <div className="cyberpunk-bg" />
      <div
        className="cyberpunk-card w-full max-w-xs md:max-w-sm shrink-0 p-6 md:p-8 rounded-2xl mt-8 mb-8 hover:scale-105 transition-transform duration-300"
        onClick={() => setOpen(true)}
        style={{ cursor: 'pointer', zIndex: 2 }}
      >
        <Noise />
        <div className="aspect-[4/5] bg-[#1a0033] rounded-xl z-10 relative overflow-hidden shadow-md cyberpunk-img">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 text-center">
          <h4 className="text-2xl md:text-3xl font-nexa font-bold cyberpunk-glitch">{data.name}</h4>
          <h6 className="font-nexa text-[#00fff7] text-lg drop-shadow-md">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-[#ff00ea33] via-60% to-[#00fff733] rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-40 backdrop-blur-[2px]" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-md md:max-w-lg max-h-[95vh] bg-gradient-to-br from-[#1a0033] via-[#0f0020] to-[#251B4B] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-6 md:p-10 border-2 border-[#00fff7] cyberpunk-card" style={{ position: 'relative' }}>
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative shadow-md cyberpunk-img">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-[#ffe600] mb-1 text-center cyberpunk-glitch">{data.name}</h2>
            <p className="text-lg font-nexa text-[#00fff7] text-center mb-4 drop-shadow-md">{data.nrp}</p>

            <hr className="cyberpunk-hr" />

            <div className="cyberpunk-detail space-y-2 text-[#ffe600] font-nexa text-base">
              <p>
                <strong className="text-[#ff00ea]">Asal:</strong> {data.origin}
              </p>
              <p>
                <strong className="text-[#00fff7]">Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong className="text-[#ffe600]">Funfact:</strong> {data.funfact}
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
