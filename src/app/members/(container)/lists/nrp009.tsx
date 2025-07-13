"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect } from "react";

const data = {
  name: "Tasya Aulia Darmawan",
  nrp: "5027241009",
  image: "009.jpg",
  funfact: "Can eat the whole watermelon in one sitting:p",
  hobby: "Anything related to music",
  origin: "Surabaya",
  instagram: "https://instagram.com/tasya.auliad",
};

function SprinkleDots({ count = 15 }: { count?: number }) {
  const colors = ["bg-yellow-300", "bg-blue-300", "bg-green-300", "bg-pink-300", "bg-purple-300"];
  const [dots, setDots] = useState<
    { top: number; left: number; color: string }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      color: colors[i % colors.length],
    }));
    setDots(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {dots.map((dot, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 ${dot.color} rounded-full shadow-md`}
          style={{ top: `${dot.top}%`, left: `${dot.left}%` }}
        />
      ))}
    </div>
  );
}

export default function NRP009() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-pink-300 relative bg-gradient-to-br from-pink-100 via-white to-pink-200 backdrop-blur-lg font-nexa"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-pink-100 rounded-xl z-10 relative overflow-hidden group shadow-inner">
          <SprinkleDots count={20} />
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-xl relative z-10"
          />
        </div>

        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold text-pink-700">{data.name}</h4>
          <h6 className="font-nexa text-pink-600">{data.nrp}</h6>
        </div>

        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-pink-300/40 rounded-xl pointer-events-none" />
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
          <Dialog.Content className="relative w-full max-w-lg max-h-[95vh] bg-pink-100 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 font-nexa">
            <SprinkleDots count={30} />
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block aspect-[4/5] rounded-xl overflow-hidden mb-6 relative group z-10"
            >
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <h2 className="text-3xl font-bold font-nexa text-pink-700 mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-pink-500">{data.nrp}</p>

            <hr className="my-6 border-t border-pink-300" />

            <div className="space-y-2 text-pink-700 font-nexa text-base">
              <p>
                <strong>Asal:</strong> {data.origin}
              </p>
              <p>
                <strong>Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong>Funfact:</strong> {data.funfact}
              </p>
              <p className="text-xs text-pink-500 italic mt-3 text-center">
                More about me? Click my photo!
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}