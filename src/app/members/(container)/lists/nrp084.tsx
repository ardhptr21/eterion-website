"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const data = {
  name: "Oryza Qiara Ramadhani",
  nrp: "5027241084",
  image: "084.jpg",
  funfact: "Pernah tinggal di Merauke yuhuu",
  hobby: "Musikan + cari pemandangan",
  origin: "Samarinda",
};

export default function NRP084() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative group cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent bg-[#140c2c]/80 backdrop-blur-lg overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out" />
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10 text-left">
          <h4 className="text-xl font-nexa font-bold text-white drop-shadow-[0_0_6px_#fff5]">
            {data.name}
          </h4>
          <h6 className="font-nexa text-white/70">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-purple-400/10 to-accent/30 rounded-xl pointer-events-none" />
      </motion.div>

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
        <Dialog.Overlay className="fixed inset-0 z-40 bg-transparent" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Dialog.Content className="w-full max-w-md max-h-[95vh] rounded-2xl border border-violet-500/50 bg-gradient-to-br from-[#0f0c29]/60 via-[#302b63]/40 to-[#24243e]/60 backdrop-blur-md overflow-y-auto focus:outline-none p-8 shadow-[0_0_30px_#a78bfa70]">
              <Dialog.Title className="sr-only">{data.name}</Dialog.Title>
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left mb-6">
                <h2 className="text-2xl font-bold font-nexa text-white drop-shadow-[0_0_6px_#fff]">
                  {data.name}
                </h2>
                <p className="text-base font-nexa text-white/70">
                  {data.nrp}
                </p>
              </div>
              <div className="space-y-2 text-white font-nexa text-base">
                <p className="hover:scale-[1.02] hover:drop-shadow-[0_0_6px_#ffffffaa] transition-all duration-200 ease-in-out">
                  <strong>Asal:</strong> {data.origin}
                </p>
                <p className="hover:scale-[1.02] hover:drop-shadow-[0_0_6px_#ffffffaa] transition-all duration-200 ease-in-out">
                  <strong>Hobi:</strong> {data.hobby}
                </p>
                <p className="hover:scale-[1.02] hover:drop-shadow-[0_0_6px_#ffffffaa] transition-all duration-200 ease-in-out">
                  <strong>Funfact:</strong> {data.funfact}
                </p>
              </div>
            </Dialog.Content>
          </motion.div>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
