"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Christiano Ronaldo Silalahi",
  nrp: "5027241025",
  image: "025.jpg",
  funfact: "Kalau di Surabaya Mandi 3 kali sehari",
  hobby: "berenang",
  origin: "Jakarta",
};

export default function NRP025() {
  const [open, setOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div
        className="card-container cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative backdrop-blur-lg transition-transform duration-300 overflow-hidden"
        onClick={() => setOpen(true)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          backgroundImage: isHovering
            ? "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjY4bDUwZHRxb2xhd3Y3OWJ3ZjllZWhwd2dtZHhucDN3eXpvenl4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MSeKYlDNu4cFX5NW6U/giphy.gif')"
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(20,12,44,0.8)",
        }}
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
        <div className="mt-5 z-10 text-white">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        .card-container:hover {
          animation: wiggle 0.5s ease-in-out infinite;
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
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
