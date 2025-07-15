"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import {
  MapPinHouse,
  Bike,
  Phone,
  Instagram,
  Linkedin,
  Mail,
  HeartPlus
} from "lucide-react";

const data = {
  name: "Imam Mahmud Dalil Fauzan",
  nrp: "5027241100",
  image1: "100-1.jpg",
  image2: "100-2.jpg",
  funfact: "Suka ngumpulin Arsip perjalanan hidup",
  hobby: "Travelling Motoran",
  origin: "Surabaya",
  phone: "082210006306",
  instagram: "@imdfauzan",
  linkedin: "@imdfauzan",
  email: "imam.fauzan2204@gmail.com",
};

export default function NRP100() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-0.1 border-[#344036] shadow-[0_0_20px_#f9f7e4] relative bg-[#f0eddd]/75 backdrop-blur-lg hover:scale-[1.06] transition-transform duration-350 ease-out hover:shadow-[0_0_50px_#f9f7e4]"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image1}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 text-center">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
      
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-50% via-[344036]/20 via-30% to-[#cc9f81] rounded-xl pointer-events-none" />
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
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-20 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-[#f9f7e4]/92 shadow-[0_0_100px_#efede4] rounded-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image2}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-center font-nexa text-[#122D4F] mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-center text-[#122D4F]">{data.nrp}</p>

            <hr className="my-6 border-t border-[#122D4F]/30" />

            {/* INFO DIBAGI 2 KOLOM */}
            <div className="grid grid-cols-2 gap-4 text-[#122D4F] font-nexa text-base">
              {/* Kiri: Kontak */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <a
                    href={`https://wa.me/${data.phone.replace(/^0/, "62")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:font-semibold transition-all"
                  >
                    Whatsapp
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram size={18} />
                  <a
                    href={`https://instagram.com/${data.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:font-semibold transition-all"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={18} />
                  <a
                    href={`https://linkedin.com/in/${data.linkedin.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:font-semibold transition-all"
                  >
                    Linkedin
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <a
                    href={`mailto:${data.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:font-semibold transition-all"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Kanan: Biodata */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPinHouse size={18} />
                  <span>{data.origin}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bike size={18} />
                  <span>{data.hobby}</span>
                </div>
                <div className="flex items-center gap-3">
                  <HeartPlus size={18} />
                  <span>Mencoba semua hal Baru</span>
                </div>
              </div>
            </div>

          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
