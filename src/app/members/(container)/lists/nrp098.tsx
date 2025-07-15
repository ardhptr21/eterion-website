"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";

const data = {
  name: "Muhammad Huda Rabbani",
  nrp: "5027241098",
  image: "098.jpg",
  funfact: "Brokoli hair dan keturunan 5 suku",
  hobby: "Olahraga",
  origin: "Tangerang Selatan",
};

export default function NRP098() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#140c2c]/80 backdrop-blur-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        onClick={() => setOpen(true)}
      >
        <Noise />

        {/* Gambar Member */}
        <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay gelap saat hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Nama dan NRP */}
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold transition-colors duration-300 group-hover:text-accent">
            {data.name}
          </h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>

        {/* Gradasi latar belakang */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-t from-black via-gray-400 to-white rounded-xl pointer-events-none" />
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
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-40" />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <AnimatePresence>
            <motion.div
              key="dialog-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Dialog.Content
                className={`w-full max-w-lg max-h-[95vh] rounded-2xl overflow-y-auto focus:outline-none shadow-2xl p-6 relative border ${
                  darkMode
                    ? "bg-gradient-to-br from-black via-purple-900 to-indigo-900 border-white/10 text-white"
                    : "bg-gradient-to-br from-white via-pink-100 to-purple-100 border-gray-300 text-gray-900"
                }`}
              >
                            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

                {/* Tombol Close */}
                <Dialog.Close asChild>
                  <button
                    className="absolute top-4 right-4 z-10 hover:scale-110 transition-transform text-black/60 hover:text-black dark:text-white/80 dark:hover:text-white"
                    aria-label="Close"
                  >
                    <motion.div whileHover={{ rotate: 90 }}>
                      <X className="w-6 h-6" />
                    </motion.div>
                  </button>
                </Dialog.Close>

                {/* Toggle Dark Mode */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="absolute top-4 left-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur transition"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-purple-900" />
                  )}
                </button>

                {/* Gambar + gradasi */}
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative shadow-xl">
                  <Image
                    src={`/images/members/${data.image}`}
                    alt={data.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
                </div>

                {/* Nama & NRP */}
                <h2 className="text-3xl font-bold font-nexa mb-1 group relative hover:text-pink-600 transition">
                  {data.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full" />
                </h2>
                <p className="text-sm font-nexa">{data.nrp}</p>

                <hr className="my-6 border-t border-gray-300 dark:border-white/20" />

                <div className="space-y-2 text-base font-nexa leading-relaxed">
                  <p>
                    <span className="text-pink-600 font-semibold">Asal:</span> {data.origin}
                  </p>
                  <p>
                    <span className="text-pink-600 font-semibold">Hobi:</span> {data.hobby}
                  </p>
                  <p>
                    <span className="text-pink-600 font-semibold">Funfact:</span> {data.funfact}
                  </p>
                </div>

                {/* Tombol Instagram */}
                <div className="flex flex-col gap-6 max-w-sm mx-auto mt-10">
                  <a
                    href="https://www.instagram.com/hudarbn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-2xl bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 text-white border border-white/10 shadow-2xl hover:shadow-pink-400/30 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-white/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-white drop-shadow-lg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0-2c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z"
                          />
                          <path d="M18 5c-.553 0-1 .447-1 1s.447 1 1 1 1-.447 1-1-.447-1-1-1z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 7.2C2 5.21 3.21 4 5.2 4h13.6C20.79 4 22 5.21 22 7.2v9.6c0 1.99-1.21 3.2-3.2 3.2H5.2C3.21 20 2 18.79 2 16.8V7.2zM5.2 6C4.538 6 4 6.538 4 7.2v9.6c0 .662.538 1.2 1.2 1.2h13.6c.662 0 1.2-.538 1.2-1.2V7.2c0-.662-.538-1.2-1.2-1.2H5.2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-bold">Instagram</p>
                        <p className="text-xs opacity-80">@hudarbn</p>
                      </div>
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300 opacity-70 group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </Dialog.Content>
            </motion.div>
          </AnimatePresence>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
