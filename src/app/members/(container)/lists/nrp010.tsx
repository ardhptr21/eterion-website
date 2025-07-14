"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect } from "react";

const data = {
  name: "Kanafira Vanesha Putri",
  nrp: "5027241010",
  image: "010.jpg",
  funfact: "Gasuka minum air putih kalo bukan cleo",
  hobby: "Nonton F1",
  origin: "Surabaya",
};

export default function NRP010() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-[#00A19C] relative 
        bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#00A19C]/20 
        backdrop-blur-lg shadow-[0_0_30px_#00A19C44]"
        onClick={() => setOpen(true)}
      >
        <Noise />

        {/* Star Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-white opacity-80 text-[6px] animate-pulse drop-shadow-[0_0_3px_#ffffffaa]"
              style={{
                top: `${(i * 73 + Math.random() * 50) % 100}%`,
                left: `${(i * 37 + Math.random() * 60) % 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        <div className="aspect-[4/5] bg-gradient-to-tl from-[#C6C6C6] to-[#1a1a1a] rounded-xl z-10 relative overflow-hidden ring-1 ring-[#00A19C]/40 shadow-[inset_0_0_10px_#00A19C33]">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-[#00A19C]/10" />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold text-[#00A19C] drop-shadow-[0_0_2px_#00A19C]">{data.name}</h4>
          <h6 className="font-nexa text-[#C6C6C6]">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-[#80142B]/30 to-[#00A19C]/30 rounded-xl pointer-events-none" />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            className="w-full max-w-lg max-h-[95vh] 
            bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#000000] 
            rounded-2xl border-2 border-[#00A19C] shadow-[0_0_30px_#00A19C66] 
            overflow-y-auto focus:outline-none p-10"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative ring-1 ring-[#00A19C]/30 shadow-[inset_0_0_10px_#00A19C22]">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-[#00A19C]/10" />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-[#00A19C] mb-1 drop-shadow-[0_0_2px_#00A19C]">{data.name}</h2>
            <p className="text-lg font-nexa text-[#C6C6C6]">{data.nrp}</p>

            <hr className="my-6 border-t border-[#80142B]/40" />

            <div className="space-y-2 text-white font-nexa text-base">
              <p>
                <strong className="text-[#C6C6C6]">Origin:</strong> {data.origin}
              </p>
              <p>
                <strong className="text-[#C6C6C6]">Hobby:</strong> {data.hobby}
              </p>
              <p>
                <strong className="text-[#C6C6C6]">Fun fact:</strong> {data.funfact}
              </p>
            </div>

            <div className="flex justify-center mt-6 gap-3 flex-wrap">
              <a
                href="https://instagram.com/vaneshasshen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full text-white font-nexa text-sm font-semibold
                  bg-gradient-to-r from-[#0f0f0f] to-[#00A19C] hover:brightness-110 transition
                  shadow-[0_0_10px_#00A19C44]"
              >
                Instagram
              </a>
              <a
                href="https://open.spotify.com/user/i3f8mf0172ywnygt3nwlzk05c?si=db5abf4d83334eb8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full text-white font-nexa text-sm font-semibold
                  bg-gradient-to-r from-[#002e2c] to-[#00A19C] hover:brightness-110 transition
                  shadow-[0_0_10px_#00A19C44]"
              >
                Spotify
              </a>
              <a
                href="https://github.com/shenaavv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full text-white font-nexa text-sm font-semibold
                  bg-gradient-to-r from-[#0f0f0f] to-[#00A19C] hover:brightness-110 transition
                  shadow-[0_0_10px_#00A19C44]"
              >
                GitHub
              </a>
            </div>

            <MemoryCardGame />

            <div className="mt-8">
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-[#00A19C]/30">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/gZ_-8a1WCJk?autoplay=1&mute=1"
                  title="Oscar Piastri Shorts"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MemoryCardGame() {
  const emojis = ["🏁", "🚦", "🏎️", "⛽", "🔧", "🥂", "🎮", "🥇"];

  const shuffle = (array: string[]) => {
    return array
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val);
  };

  const [cards, setCards] = useState(() => {
    const pairs = [...emojis, ...emojis];
    return shuffle(pairs).map((emoji, idx) => ({
      id: idx,
      emoji,
      flipped: false,
      matched: false,
    }));
  });

  const [selected, setSelected] = useState<number[]>([]);
  const [disableAll, setDisableAll] = useState(false);
  const [matchedCount, setMatchedCount] = useState(0);

  useEffect(() => {
    if (selected.length === 2) {
      setDisableAll(true);
      const [first, second] = selected;
      if (cards[first].emoji === cards[second].emoji) {
        const updated = [...cards];
        updated[first].matched = true;
        updated[second].matched = true;
        setCards(updated);
        setMatchedCount((prev) => prev + 1);
        setTimeout(() => {
          setSelected([]);
          setDisableAll(false);
        }, 800);
      } else {
        setTimeout(() => {
          const updated = [...cards];
          updated[first].flipped = false;
          updated[second].flipped = false;
          setCards(updated);
          setSelected([]);
          setDisableAll(false);
        }, 1000);
      }
    }
  }, [selected]);

  const handleFlip = (index: number) => {
    if (disableAll || cards[index].flipped || cards[index].matched) return;
    const updated = [...cards];
    updated[index].flipped = true;
    setCards(updated);
    setSelected((prev) => [...prev, index]);
  };

  return (
    <div className="mt-10 text-center">
      <h3 className="text-xl text-white font-bold font-nexa mb-2">🏎️ Memory Card Game 🏎️</h3>
      <p className="text-[#00A19C] font-nexa mb-4">
        {matchedCount === 8
          ? "🏆 Finished! All cards matched!"
          : "Match the emojis!"}
      </p>

      <div className="grid grid-cols-4 gap-3 w-[280px] mx-auto">
        {cards.map((card, idx) => (
          <div
            key={card.id}
            onClick={() => handleFlip(idx)}
            className={`w-14 h-14 rounded-lg flex items-center justify-center text-xl cursor-pointer ring-1 
              ${card.flipped || card.matched ? "bg-[#00A19C]/10" : "bg-[#1a1a1a]"} 
              text-white ring-[#00A19C]/30 hover:brightness-110 transition select-none`}
          >
            {card.flipped || card.matched ? card.emoji : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
