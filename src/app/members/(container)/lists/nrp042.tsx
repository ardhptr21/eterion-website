"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Abiyyu Raihan Putra Wikanto",
  nrp: "5027241042",
  image: "042.jpg",
  funfact: "Tahukah kamu saya baru bisa sepedaan :shocked:",
  hobby: "Muter nyari mall yang sepi, Baca manhwa, Rencana ngelencer (gagal terus)",
  origin: "Surabaya",
};

export default function NRP042() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
  className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#140c2c]/80 backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
  onClick={() => setOpen(true)}
>
  <Noise />

  {/* Background GIF */}
  <div
    className="absolute inset-0 rounded-xl -z-10"
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/originals/0c/17/db/0c17db2fa0fb5b62af2817ab7aeac7f1.gif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.4,
      filter: "blur(2px)",
    }}
  />

  <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden ring-4 ring-amber-300/20 group-hover:ring-amber-400">
    <Image
      src={`/images/members/${data.image}`}
      alt={data.name}
      fill
      className="object-cover w-full h-full"
    />
  </div>

  <div className="mt-5 z-10 text-white">
    <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
    <h6 className="font-nexa text-white/70">{data.nrp}</h6>
  </div>

  {/* Gradient glow overlay */}
  <div className="absolute -z-20 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
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
          <Dialog.Content className="relative w-full max-w-lg max-h-[95vh] bg-primary rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10 border border-white/10">
            {/* Gradient glowing blob */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-tr from-amber-400 via-pink-500 to-indigo-500 opacity-20 rounded-full blur-3xl animate-spin-slow -z-10" />

            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative ring-4 ring-white/10">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">{data.name}</h2>
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

              <div className="mt-4">
                <img
                    src="https://media.tenor.com/fcQArW1Hr-EAAAAM/shutoko-shuto.gif"
                    alt="Shutoko Drift GIF"
                    className="rounded-lg shadow-lg w-full max-h-64 object-cover"
                />
              </div>

            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
