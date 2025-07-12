"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Raihan Fahri Ghazali",
  nrp: "5027241061",
  image: "061.jpg",
  funfact: "pertama kali ke wiwin langsung ngutang",
  hobby: "ga ngapa-ngapain",
  origin: "Jakarta",
  tiktokId: "7478595098167561478",
};

export default function NRP061() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-2xl border border-cyan-400 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b0764] hover:shadow-cyan-400/30 hover:shadow-lg transition duration-300 ease-in-out relative overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <Noise />

        <div className="aspect-[4/5] z-10 relative overflow-hidden mx-auto w-72">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-6 flex flex-col items-center text-white z-10">
          <h4 className="text-2xl font-bold tracking-wide text-center">{data.name}</h4>
          <h6 className="text-base font-bold font-mono text-cyan-300 text-center">{data.nrp}</h6>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/30 via-transparent to-transparent rounded-2xl pointer-events-none z-0" />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            className="w-full max-w-xl bg-[#0f172a] rounded-3xl shadow-2xl focus:outline-none border border-cyan-400 max-h-[90vh] overflow-y-auto p-10"
          >
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="aspect-[4/5] relative overflow-hidden mx-auto w-72 mb-6">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col items-center text-center text-white mb-6">
              <h2 className="text-2xl font-bold">{data.name}</h2>
              <p className="text-base font-bold text-cyan-300">{data.nrp}</p>
            </div>

            <div className="space-y-3 text-white text-sm font-medium mb-6">
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

            {/* TikTok Embed */}
            <iframe
              src={`https://www.tiktok.com/embed/v2/${data.tiktokId}`}
              width="325"
              height="575"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="mx-auto rounded-xl mt-6"
            />
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
