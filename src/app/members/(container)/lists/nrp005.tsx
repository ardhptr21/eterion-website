"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = {
  name: "Nadia Kirana Afifah Prahandita",
  nrp: "5027241005",
  image: "005.jpg",
  funfact: "Aku gak suka drama, aku sukanya dimsum mentai.",
  hobby: "Cooking & Healing",
  origin: "Madiun nihh",
  instagram: "nadiakrn20",
  secretFact:
    "Jangan menaruh rasa setinggi Cakrawala pada nara, jika tidak ingin patana sedalam sagara.",
};

const EMOJIS = ["🥟", "🍣", "🍙", "🍛", "🍩", "🍕", "🌮", "🍜", "🍰"];
const TARGET = "🥟";

export default function NRP005() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-purple-400 relative bg-gradient-to-br from-white via-black to-purple-800 backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="absolute inset-0 rounded-xl bg-purple-900/10 blur-2xl animate-pulse z-[-1]" />
        <div className="aspect-[4/5] rounded-xl z-10 relative overflow-hidden">
          <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:rotate-y-180">
            <div className="absolute inset-0 backface-hidden bg-white shadow-lg p-4 flex flex-col items-center justify-end">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="absolute inset-0 rotate-y-180 backface-hidden bg-purple-900 text-white flex items-center justify-center p-4 rounded-xl">
              <p className="italic font-raleway text-sm text-center">&ldquo; {data.secretFact} &rdquo;</p>
            </div>
          </div>
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-raleway font-bold text-white transition-all duration-200 hover:scale-105 active:scale-110">
            {data.name}
          </h4>
          <h6 className="font-raleway text-purple-200 transition-all duration-200 hover:scale-105 active:scale-110">
            {data.nrp}
          </h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-purple-300/20 via-60% to-purple-700/50 rounded-xl pointer-events-none" />
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
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [currentIcon, setCurrentIcon] = useState<string[]>(Array(9).fill(""));
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [failed, setFailed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (gameStarted && score < 3 && !gameOver && !failed) {
      const updateIcons = () => {
        const index = Math.floor(Math.random() * 9);
        const newIcons = Array(9).fill("");
        const chosenEmoji = Math.random() < 0.4 ? TARGET : EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        newIcons[index] = chosenEmoji;
        setCurrentIcon(newIcons);

        timeout = setTimeout(updateIcons, 1200);
      };

      updateIcons();
    }
    return () => clearTimeout(timeout);
  }, [gameStarted, score, gameOver, failed]);

  const handleCatch = (index: number) => {
    if (gameOver || !gameStarted || failed) return;

    if (currentIcon[index] === TARGET && score < 3) {
      const newScore = score + 1;
      const newTries = tries + 1;
      setScore(newScore);
      setTries(newTries);
      if (newScore === 3) {
        setGameOver(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    } else {
      setFailed(true);
      setGameOver(true);
    }
  };

  const getScoreMessage = () => {
    if (failed) return "Skormu: 0/3 – Wah parah ga kenal Nadia, kecewaa!! 😢";
    if (!gameStarted && score === 0) return "Skormu: 0/0";
    if (gameOver) {
      if (score === 3) return "Skormu: 3/3 – Ciee kenal Nadia bangett!! yukk hunting dimsum mentai barengg!! 🥟💖🍱";
      if (score === 2) return "Skormu: 2/3 – Sohib kah? 🧐";
      if (score === 1) return "Skormu: 1/3 – Mau kenalan ya? 😏";
    }
    return `Skormu: ${score}/${tries}`;
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-white via-black to-purple-800 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 relative">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="absolute inset-0 rounded-xl bg-purple-900/10 blur-2xl animate-pulse z-[-1]" />

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-raleway text-white mb-1 transition-all duration-200 hover:scale-105 active:scale-110">
              {data.name}
            </h2>
            <p className="text-lg font-raleway text-purple-200 transition-all duration-200 hover:scale-105 active:scale-110">
              {data.nrp}
            </p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-raleway text-base">
              <p className="transition-all duration-200 hover:scale-105 active:scale-110">
                <strong>Asal:</strong> {data.origin}
              </p>
              <p className="transition-all duration-200 hover:scale-105 active:scale-110">
                <strong>Hobi:</strong> {data.hobby}
              </p>
              <p className="transition-all duration-200 hover:scale-105 active:scale-110">
                <strong>Funfact:</strong> {data.funfact}
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-white font-semibold text-lg mb-2">Dimsum Hunter Game 🥟</h3>
              {!gameStarted ? (
                <button
                  onClick={() => {
                    setScore(0);
                    setTries(0);
                    setGameOver(false);
                    setGameStarted(true);
                    setFailed(false);
                    setShowConfetti(false);
                  }}
                  className="mb-4 px-4 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition"
                >
                  Mulai Main
                </button>
              ) : (
                <p className="text-white mb-2">Klik dimsum yang muncul!</p>
              )}

              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }, (_, i) => (
                  <div
                    key={i}
                    onClick={() => handleCatch(i)}
                    className="w-full h-16 bg-white/10 flex items-center justify-center rounded-lg cursor-pointer text-2xl hover:scale-110 transition"
                  >
                    {currentIcon[i]}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-white text-center font-semibold text-lg">{getScoreMessage()}</p>
              {showConfetti && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-yellow-300 text-3xl font-bold animate-bounce">🎉 Selamat!! 🎉</p>
                </div>
              )}
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-white font-semibold text-lg mb-4 transition-all duration-200 hover:scale-105 active:scale-110">
                Mau lebih kenal?
              </h3>
              <a
                href={`https://instagram.com/${data.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-raleway font-medium bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 hover:brightness-110 transition duration-300 shadow-md hover:scale-105 active:scale-110"
              >
                📸 Instagram
              </a>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
