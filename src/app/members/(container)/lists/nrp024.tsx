"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const data = {
  name: "Skor 24 buat unlock Pap!!",        
  nrp: "5027241024",           
  image: "024.GIF",
  funfact: "Kamu Belo sigma", 
  hobby: "Kamu belom sigma",       
  origin: "Kamu belom sigma! ",
};

function addEpilepsyStyle() {
  if (typeof window !== "undefined" && !document.getElementById("epilepsy-style")) {
    const style = document.createElement("style");
    style.id = "epilepsy-style";
    style.innerHTML = `
      @keyframes epilepsy-border {
        0% { border-color: #fff; box-shadow: 0 0 20px 10px #fff, 0 0 40px 20px #ff0000; }
        10% { border-color: #ff0000; box-shadow: 0 0 20px 10px #ff0000, 0 0 40px 20px #fff; }
        20% { border-color: #fff; box-shadow: 0 0 30px 15px #fff, 0 0 50px 25px #ff0000; }
        30% { border-color: #ff0000; box-shadow: 0 0 30px 15px #ff0000, 0 0 50px 25px #fff; }
        40% { border-color: #fff; box-shadow: 0 0 40px 20px #fff, 0 0 60px 30px #ff0000; }
        50% { border-color: #ff0000; box-shadow: 0 0 40px 20px #ff0000, 0 0 60px 30px #fff; }
        60% { border-color: #fff; box-shadow: 0 0 50px 25px #fff, 0 0 70px 35px #ff0000; }
        70% { border-color: #ff0000; box-shadow: 0 0 50px 25px #ff0000, 0 0 70px 35px #fff; }
        80% { border-color: #fff; box-shadow: 0 0 60px 30px #fff, 0 0 80px 40px #ff0000; }
        90% { border-color: #ff0000; box-shadow: 0 0 60px 30px #ff0000, 0 0 80px 40px #fff; }
        100% { border-color: #fff; box-shadow: 0 0 20px 10px #fff, 0 0 40px 20px #ff0000; }
      }
      .epilepsy-border {
        animation: epilepsy-border 0.25s steps(2, jump-none) infinite;
        border-width: 6px !important;
        border-style: solid !important;
        box-shadow: 0 0 20px 10px #fff, 0 0 40px 20px #ff0000;
      }
    `;
    document.head.appendChild(style);
  }
}

export default function NRP024() {
  const [open, setOpen] = useState(false);
  useEffect(() => { addEpilepsyStyle(); }, []);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl relative bg-[#140c2c]/80 backdrop-blur-lg epilepsy-border"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden epilepsy-border">
          <Image
            src={`/images/members/024.GIF`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
          <a
            href="https://kejar24.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline text-base mt-2 block"
          >
            Terbanglah mengejar 024!
          </a>
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
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-primary rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative epilepsy-border">
              <Image
                src={`/images/members/024.GIF`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-white/70">{data.nrp}</p>
            <a
              href="https://kejar24.vercel.app//"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline text-base mt-2 block"
            >
              BY ONE!!
            </a>

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



