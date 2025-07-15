"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Muhammad Khairul Yahya",
  nrp: "5027241092",
  image: "092.jpg",
  funfact: "Bisa bernafas selama 24 jam setiap hari",
  hobby: "Menggambar, Nonton Film/Series",
  origin: "Malang",
};

const clickSoundURL = "https://www.fesliyanstudios.com/play-mp3/387";

export default function NRP092() {
  const [open, setOpen] = useState(false);

  const playClick = () => {
    const audio = new Audio(clickSoundURL);
    audio.play();
    setOpen(true);
  };

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-6 rounded-xl border-2 border-accent relative overflow-hidden backdrop-blur-lg transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-nebula"
        onClick={playClick}
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXlhOXY3YWw0ZHJnMjZuMXEwN3dsMjdsZGIwazQ3NzFrNWcwdzl5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fr5LA2RCQbnVp74CxH/giphy.gif")`,
          }}
        />
        <Noise />
        <div className="relative z-10 mx-auto w-[50vw] sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-square rounded-full ring-4 ring-white/30 overflow-hidden animate-glow-spin-fast">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="mt-5 text-center z-10 text-white">
          <h4
            className="text-lg font-bold leading-tight rainbow-text"
            style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
          >
            {data.name}
          </h4>
          <h6
            className="text-sm rainbow-text"
            style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
          >
            {data.nrp}
          </h6>
        </div>
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />

      <style>{`
        @keyframes spin-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-glow-spin-fast {
          animation: spin-fast 3s linear infinite, glowPulse 2s ease-in-out infinite alternate;
        }
        @keyframes glowPulse {
          0% { box-shadow: 0 0 5px #ffffff20, 0 0 15px #ff00cc40, 0 0 25px #00ccff30; }
          100% { box-shadow: 0 0 15px #ffffff60, 0 0 25px #ff00cc80, 0 0 35px #00ccffaa; }
        }
        @keyframes nebulaGlow {
          0% { box-shadow: 0 0 10px #ff00cc, 0 0 20px #3333ff, 0 0 30px #00ccff; }
          25% { box-shadow: 0 0 10px #00ccff, 0 0 20px #33ff66, 0 0 30px #ccff00; }
          50% { box-shadow: 0 0 10px #ccff00, 0 0 20px #ff9900, 0 0 30px #ff0033; }
          75% { box-shadow: 0 0 10px #ff0033, 0 0 20px #9933ff, 0 0 30px #ff00cc; }
          100% { box-shadow: 0 0 10px #ff00cc, 0 0 20px #3333ff, 0 0 30px #00ccff; }
        }
        .hover\\:shadow-nebula:hover {
          animation: nebulaGlow 5s infinite alternate;
        }
        @keyframes rainbowShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .rainbow-text {
          background: linear-gradient(270deg, #ff6ec4, #7873f5, #43e97b, #38f9d7, #ffcc70, #fcb045, #fd1d1d, #833ab4);
          background-size: 800% 800%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbowShift 10s ease infinite;
        }
        @keyframes fontGlitch {
          0% { font-family: 'Comic Sans MS', cursive; }
          25% { font-family: 'Courier New', monospace; }
          50% { font-family: 'Arial Black', sans-serif; }
          75% { font-family: 'Impact', fantasy; }
          100% { font-family: 'Comic Sans MS', cursive; }
        }
        .font-glitch:hover {
          animation: fontGlitch 0.6s steps(1) infinite;
        }
      `}</style>
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
          <Dialog.Content
            className="relative w-full max-w-lg max-h-[95vh] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHIydmY0Z2w3czJteHp2NHA4emtqZTJtcHJ3NzZ4dTJvZHZiaThheiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rUxSaLgjcQbLO/giphy.gif")`,
            }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl pointer-events-none z-0" />
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative z-10">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/khairul-yahya-781683323/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold text-white mb-1 z-10 rainbow-text hover:underline block text-center"
              style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
            >
              {data.name}
            </a>
            <a
              href="https://www.instagram.com/kharlyahh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white/70 z-10 rainbow-text hover:underline block text-center"
              style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
            >
              {data.nrp}
            </a>

            <hr className="my-6 border-t border-white/20 z-10" />

            <div className="space-y-2 text-white text-base z-10">
              <p className="font-glitch"><strong>Asal:</strong> {data.origin}</p>
              <p className="font-glitch"><strong>Hobi:</strong> {data.hobby}</p>
              <p className="font-glitch"><strong>Funfact:</strong> {data.funfact}</p>
            </div>
            <div className="mt-6 z-10 relative">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/dXL2ZyRzIR0?si=MQP_2ez0z5UIzlF0"
                title="YouTube video player"
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
