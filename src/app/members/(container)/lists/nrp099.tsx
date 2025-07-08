"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Muhammad Ahsani Taqwiim Rakhman",
  nrp: "5027241099",
  image: "099.jpg",
  funfact: "masuk IT jadi insomnia",
  hobby: "membaca",
  origin: "Surabaya",
};

export default function NRP099() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-[#000000] relative bg-[#000000]/80 backdrop-blur-lg"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
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

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">
              <a
              href="https://www.linkedin.com/in/muhammad-ahsani-taqwiim-rakhman-b835b5323/"
              target="_blank"
              rel="noopener noreferrer"
              >{data.name}
                </a>
                </h2>
            <p className="text-lg font-nexa text-white/70">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base">
              <p>
                <strong>Asal:</strong> 
                <a
                href="https://www.google.com/maps/place/Grand+Heaven+Surabaya/@-7.348707,112.710484,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fd345f4806f5:0x51318c1802e8a5fc!8m2!3d-7.348707!4d112.7130589!16s%2Fg%2F11j7dbp4bb!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                >
                  {data.origin}
                  </a>
              </p>
              <p>
                <strong>Hobi:</strong> 
                <a
                href="https://shopee.co.id/product/134423475/14383404423?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWVp3RFo3Mkw5czd4Z0hzdEF1WVFibHhGRlU2dDVEUyt4cDYwMSs4UU05L09RcHZwYnZ5bm5QYjd0VDBvR2drQVl1VnFQREdmVWROam5RbVBCaWZuckFqNDhJSzVMWGdyRTNLMnVHZ0lLaHJWOHM5bVFYc2dkR0FxbWpkYVlMb1N3PT0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                >
                  {data.hobby}
                  </a>
              </p>
              <p>
                <strong>Funfact:</strong> 
                <a
                href="https://www.youtube.com/watch?v=VrDfSZ_6f4U"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                >
                  {data.funfact}
                  </a>
              </p>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
